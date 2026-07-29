import { NextRequest, NextResponse } from "next/server";
import { readNewsletterToken } from "@/lib/server/newsletterToken";
import { ResendRequestError, resendRequest } from "@/lib/server/resend";

export const runtime = "nodejs";

async function addContact(email: string, firstName: string) {
  const segmentId = process.env.RESEND_NEWSLETTER_SEGMENT_ID;
  const segments = segmentId ? [{ id: segmentId }] : undefined;

  try {
    await resendRequest<{ id: string }>("/contacts", {
      method: "POST",
      body: JSON.stringify({
        email,
        first_name: firstName || undefined,
        unsubscribed: false,
        segments,
      }),
    });
  } catch (error) {
    if (!(error instanceof ResendRequestError) || error.status !== 409) throw error;

    // The address already exists. Re-enable it and make sure it belongs to the newsletter segment.
    await resendRequest(`/contacts/${encodeURIComponent(email)}`, {
      method: "PATCH",
      body: JSON.stringify({ unsubscribed: false }),
    });

    if (segmentId) {
      await resendRequest(`/contacts/${encodeURIComponent(email)}/segments/${segmentId}`, {
        method: "POST",
        body: JSON.stringify({}),
      });
    }
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
    await addContact(data.email, data.firstName);
    destination.searchParams.set("status", "success");
    return NextResponse.redirect(destination);
  } catch (error) {
    console.error("Newsletter contact creation failed", error);
    destination.searchParams.set("status", "error");
    return NextResponse.redirect(destination);
  }
}
