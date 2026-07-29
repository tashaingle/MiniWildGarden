import { NextRequest, NextResponse } from "next/server";
import {
  cleanSingleLine,
  escapeHtml,
  hasValidOrigin,
  isEmail,
  isRateLimited,
  looksHuman,
  requestIp,
} from "@/lib/server/formSecurity";
import { createNewsletterToken } from "@/lib/server/newsletterToken";
import { resendRequest } from "@/lib/server/resend";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!hasValidOrigin(request)) {
    return NextResponse.json({ error: "This request could not be verified." }, { status: 403 });
  }

  if (await isRateLimited(`newsletter:${requestIp(request)}`)) {
    return NextResponse.json({ error: "Please wait before trying again." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Please enter your email address." }, { status: 400 });
  }

  if (cleanSingleLine("website" in body ? body.website : "", 200)) {
    return NextResponse.json({ ok: true });
  }

  if (!looksHuman("startedAt" in body ? body.startedAt : null)) {
    return NextResponse.json({ error: "Please wait a moment, then try again." }, { status: 400 });
  }

  const email = cleanSingleLine("email" in body ? body.email : "", 254).toLowerCase();
  const firstName = cleanSingleLine("firstName" in body ? body.firstName : "", 80);
  const consent = "consent" in body && body.consent === true;

  if (!isEmail(email) || !consent) {
    return NextResponse.json({ error: "Please enter a valid email and confirm your consent." }, { status: 400 });
  }

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin).replace(/\/$/, "");
  const token = createNewsletterToken(email, firstName);
  const confirmationUrl = `${siteUrl}/api/newsletter/confirm?token=${encodeURIComponent(token)}`;
  const from = process.env.RESEND_FROM_EMAIL || "Mini Wild Garden <hello@miniwildgarden.co.uk>";
  const greeting = firstName ? `Hi ${escapeHtml(firstName)},` : "Hello,";

  try {
    await resendRequest<{ id: string }>("/emails", {
      method: "POST",
      headers: { "Idempotency-Key": `newsletter-confirm-${Date.now()}-${email.slice(0, 40)}` },
      body: JSON.stringify({
        from,
        to: [email],
        subject: "Confirm your Mini Wild Garden field notes",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;color:#17372a;line-height:1.7">
            <p>${greeting}</p>
            <h1 style="font-size:28px;line-height:1.15">Confirm your field notes</h1>
            <p>Click the button below to confirm that you would like occasional wildlife gardening ideas from Mini Wild Garden.</p>
            <p style="margin:30px 0"><a href="${confirmationUrl}" style="display:inline-block;padding:14px 22px;border-radius:999px;background:#17372a;color:#ffffff;text-decoration:none;font-weight:700">Confirm subscription</a></p>
            <p style="font-size:13px;color:#66766d">This link expires in 24 hours. Ignore this email if you did not request it.</p>
          </div>`,
        text: `Confirm your Mini Wild Garden field notes: ${confirmationUrl}\n\nThis link expires in 24 hours.`,
        tags: [{ name: "source", value: "newsletter-confirmation" }],
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Newsletter confirmation email failed", error);
    return NextResponse.json({ error: "We could not send the confirmation email. Please try again." }, { status: 502 });
  }
}
