import { NextRequest, NextResponse } from "next/server";
import { readNewsletterToken } from "@/lib/server/newsletterToken";
import { ResendRequestError, resendRequest } from "@/lib/server/resend";

export const runtime = "nodejs";

type ResendContact = {
  id: string;
  email?: string;
};

function normaliseSegmentId() {
  const value = process.env.RESEND_NEWSLETTER_SEGMENT_ID?.trim();
  return value || null;
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

async function updateContact(contactId: string, firstName: string) {
  await resendRequest<ResendContact>(`/contacts/${contactId}`, {
    method: "PATCH",
    body: JSON.stringify({
      first_name: firstName || undefined,
      unsubscribed: false,
    }),
  });
}

async function createContact(email: string, firstName: string) {
  const segmentId = normaliseSegmentId();

  try {
    return await resendRequest<ResendContact>("/contacts", {
      method: "POST",
      body: JSON.stringify({
        email,
        first_name: firstName || undefined,
        unsubscribed: false,
        // Resend's current OpenAPI schema expects an array of segment ID strings.
        segments: segmentId ? [segmentId] : undefined,
      }),
    });
  } catch (error) {
    // Resend can occasionally create the contact while returning a transient 5xx.
    // Re-read the address before showing the visitor an error.
    if (
      error instanceof ResendRequestError &&
      (error.status === 409 || error.status >= 500)
    ) {
      const recovered = await findContact(email);
      if (recovered) return recovered;
    }
    throw error;
  }
}

async function ensureContact(email: string, firstName: string) {
  const existing = await findContact(email);

  if (existing) {
    await updateContact(existing.id, firstName);
    return { contact: existing, wasCreated: false };
  }

  const created = await createContact(email, firstName);
  return { contact: created, wasCreated: true };
}

async function ensureSegmentMembership(contactId: string, wasCreated: boolean) {
  const segmentId = normaliseSegmentId();
  if (!segmentId || wasCreated) return;

  try {
    await resendRequest(`/contacts/${contactId}/segments/${segmentId}`, {
      method: "POST",
    });
  } catch (error) {
    if (error instanceof ResendRequestError && error.status === 409) return;

    // The contact itself has been confirmed and saved. A temporary segment error
    // should not tell the subscriber that their email confirmation failed.
    console.error("Newsletter segment assignment failed", {
      contactId,
      segmentId,
      error:
        error instanceof ResendRequestError
          ? {
              name: error.name,
              message: error.message,
              status: error.status,
              path: error.path,
              details: error.details,
            }
          : error,
    });
  }
}

function logNewsletterError(error: unknown) {
  if (error instanceof ResendRequestError) {
    console.error("Newsletter contact confirmation failed", {
      name: error.name,
      message: error.message,
      status: error.status,
      path: error.path,
      details: error.details,
    });
    return;
  }

  console.error("Newsletter contact confirmation failed", error);
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
    const { contact, wasCreated } = await ensureContact(data.email, data.firstName);
    await ensureSegmentMembership(contact.id, wasCreated);

    destination.searchParams.set("status", "success");
    return NextResponse.redirect(destination);
  } catch (error) {
    logNewsletterError(error);
    destination.searchParams.set("status", "error");
    return NextResponse.redirect(destination);
  }
}
