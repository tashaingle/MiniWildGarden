import { NextRequest, NextResponse } from "next/server";
import { readNewsletterToken } from "@/lib/server/newsletterToken";
import { ResendRequestError, resendRequest } from "@/lib/server/resend";

export const runtime = "nodejs";

type ResendContact = {
  id: string;
  email?: string;
  unsubscribed?: boolean;
};

function segmentId() {
  const value = process.env.RESEND_NEWSLETTER_SEGMENT_ID?.trim();
  return value || null;
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function describeError(error: unknown) {
  if (error instanceof ResendRequestError) {
    return {
      name: error.name,
      message: error.message,
      status: error.status,
      path: error.path,
      details: error.details,
    };
  }

  return error;
}

async function findContact(email: string): Promise<ResendContact | null> {
  try {
    return await resendRequest<ResendContact>(
      `/contacts/${encodeURIComponent(email)}`,
      { method: "GET" },
    );
  } catch (error) {
    if (error instanceof ResendRequestError && error.status === 404) {
      return null;
    }
    throw error;
  }
}

async function restoreContact(email: string): Promise<ResendContact> {
  const updated = await resendRequest<ResendContact>(
    `/contacts/${encodeURIComponent(email)}`,
    {
      method: "PATCH",
      body: JSON.stringify({ unsubscribed: false }),
    },
  );

  if (updated.id) return updated;

  const contact = await findContact(email);
  if (!contact) throw new Error("Resend updated the contact but returned no contact ID.");
  return contact;
}

async function createContact(email: string, firstName: string): Promise<ResendContact> {
  try {
    return await resendRequest<ResendContact>("/contacts", {
      method: "POST",
      body: JSON.stringify({
        email,
        first_name: firstName || undefined,
        unsubscribed: false,
      }),
    });
  } catch (error) {
    if (error instanceof ResendRequestError && error.status === 409) {
      return restoreContact(email);
    }

    // A transient Resend 5xx can occasionally occur after the contact was saved.
    // Check once more before treating the confirmation as failed.
    if (error instanceof ResendRequestError && error.status >= 500) {
      try {
        const recovered = await findContact(email);
        if (recovered) return recovered;
      } catch (recoveryError) {
        console.error("Newsletter contact recovery lookup failed", {
          email,
          error: describeError(recoveryError),
        });
      }
    }

    throw error;
  }
}

async function ensureContact(email: string, firstName: string): Promise<ResendContact> {
  try {
    const existing = await findContact(email);
    if (existing) return restoreContact(email);
  } catch (error) {
    // A failed lookup should not prevent a valid create request. If the address
    // already exists, createContact handles the resulting conflict safely.
    console.warn("Newsletter contact lookup failed before create", {
      email,
      error: describeError(error),
    });
  }

  return createContact(email, firstName);
}

async function assignSegment(contact: ResendContact, email: string) {
  const id = segmentId();
  if (!id) return;

  if (!isUuid(id)) {
    console.error("Newsletter segment assignment skipped: invalid Segment ID", {
      configuredLength: id.length,
    });
    return;
  }

  const contactIdentifier = contact.id || email;

  try {
    await resendRequest(
      `/contacts/${encodeURIComponent(contactIdentifier)}/segments/${id}`,
      { method: "POST" },
    );
  } catch (error) {
    if (error instanceof ResendRequestError && error.status === 409) return;

    // The subscriber is already confirmed and stored as a Resend Contact.
    // A Segment issue should be visible in logs but must not invalidate consent.
    console.error("Newsletter segment assignment failed", {
      email,
      contactId: contact.id,
      segmentId: id,
      error: describeError(error),
    });
  }
}

async function sendManualFallback(email: string, firstName: string, originalError: unknown) {
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!to || !from) return false;

  try {
    await resendRequest<{ id: string }>("/emails", {
      method: "POST",
      headers: {
        "Idempotency-Key": `newsletter-fallback-${Buffer.from(email).toString("base64url").slice(0, 80)}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: "Confirmed Mini Wild Garden subscriber needs manual addition",
        text: [
          "A visitor successfully confirmed newsletter consent, but Resend's Contacts API did not save the address automatically.",
          "",
          `Email: ${email}`,
          `First name: ${firstName || "Not supplied"}`,
          "",
          "Please add this address to the Mini Wild Garden newsletter Segment in Resend.",
          "",
          `Technical error: ${JSON.stringify(describeError(originalError))}`,
        ].join("\n"),
        tags: [{ name: "source", value: "newsletter-contact-fallback" }],
      }),
    });

    return true;
  } catch (fallbackError) {
    console.error("Newsletter manual fallback email failed", {
      subscriber: email,
      originalError: describeError(originalError),
      fallbackError: describeError(fallbackError),
    });
    return false;
  }
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token") || "";
  const data = readNewsletterToken(token);
  const destination = new URL("/newsletter-confirmed", request.url);

  if (!data) {
    destination.searchParams.set("status", "invalid");
    return NextResponse.redirect(destination);
  }

  try {
    const contact = await ensureContact(data.email, data.firstName);
    await assignSegment(contact, data.email);

    destination.searchParams.set("status", "success");
    return NextResponse.redirect(destination);
  } catch (error) {
    console.error("Newsletter contact confirmation failed", {
      email: data.email,
      error: describeError(error),
    });

    const queuedForManualAddition = await sendManualFallback(
      data.email,
      data.firstName,
      error,
    );

    destination.searchParams.set(
      "status",
      queuedForManualAddition ? "pending" : "error",
    );
    return NextResponse.redirect(destination);
  }
}
