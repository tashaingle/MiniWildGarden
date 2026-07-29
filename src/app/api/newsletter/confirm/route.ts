import { NextRequest, NextResponse } from "next/server";
import { readNewsletterToken } from "@/lib/server/newsletterToken";
import { ResendRequestError, resendRequest } from "@/lib/server/resend";

export const runtime = "nodejs";

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

async function createOrRestoreContact(email: string, firstName: string) {
  try {
    await resendRequest<{ id: string }>("/contacts", {
      method: "POST",
      body: JSON.stringify({
        email,
        first_name: firstName || undefined,
        unsubscribed: false,
      }),
    });
  } catch (error) {
    if (!(error instanceof ResendRequestError) || error.status !== 409) throw error;

    // Existing contacts can be addressed by email in the Resend Contacts API.
    await resendRequest(`/contacts/${encodeURIComponent(email)}`, {
      method: "PATCH",
      body: JSON.stringify({
        first_name: firstName || undefined,
        unsubscribed: false,
      }),
    });
  }
}

async function addContactToSegment(email: string) {
  const segmentId = process.env.RESEND_NEWSLETTER_SEGMENT_ID?.trim();
  if (!segmentId) return;

  if (!isUuid(segmentId)) {
    throw new Error("RESEND_NEWSLETTER_SEGMENT_ID is not a valid Resend segment UUID.");
  }

  try {
    await resendRequest(`/contacts/${encodeURIComponent(email)}/segments/${segmentId}`, {
      method: "POST",
      body: JSON.stringify({}),
    });
  } catch (error) {
    // Treat an already-present relationship as a successful confirmation.
    if (error instanceof ResendRequestError && error.status === 409) return;
    throw error;
  }
}

async function addContact(email: string, firstName: string) {
  // Keep contact creation and segment assignment separate. This avoids a Resend
  // server-side 500 seen when both operations are sent in one create request.
  await createOrRestoreContact(email, firstName);
  await addContactToSegment(email);
}

function logNewsletterError(error: unknown) {
  if (error instanceof ResendRequestError) {
    console.error("Newsletter contact creation failed", {
      name: error.name,
      message: error.message,
      status: error.status,
      path: error.path,
      details: error.details,
    });
    return;
  }

  console.error("Newsletter contact creation failed", error);
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
    await addContact(data.email, data.firstName);
    destination.searchParams.set("status", "success");
    return NextResponse.redirect(destination);
  } catch (error) {
    logNewsletterError(error);
    destination.searchParams.set("status", "error");
    return NextResponse.redirect(destination);
  }
}
