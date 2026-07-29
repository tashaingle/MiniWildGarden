import { NextRequest, NextResponse } from "next/server";
import {
  cleanMessage,
  cleanSingleLine,
  escapeHtml,
  hasValidOrigin,
  isEmail,
  isRateLimited,
  looksHuman,
  requestIp,
} from "@/lib/server/formSecurity";
import { resendRequest } from "@/lib/server/resend";

export const runtime = "nodejs";

const allowedSubjects = new Set([
  "A wildlife gardening question",
  "A story or photo to share",
  "A correction or suggestion",
  "Working together",
]);

export async function POST(request: NextRequest) {
  if (!hasValidOrigin(request)) {
    return NextResponse.json({ error: "This request could not be verified." }, { status: 403 });
  }

  if (await isRateLimited(`contact:${requestIp(request)}`)) {
    return NextResponse.json({ error: "Too many messages were sent. Please try again shortly." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Please complete the form and try again." }, { status: 400 });
  }

  // Honeypot submissions receive a normal success response so bots do not learn the filter.
  if (cleanSingleLine("website" in body ? body.website : "", 200)) {
    return NextResponse.json({ ok: true });
  }

  if (!looksHuman("startedAt" in body ? body.startedAt : null)) {
    return NextResponse.json({ error: "Please wait a moment, then send the form again." }, { status: 400 });
  }

  const name = cleanSingleLine("name" in body ? body.name : "", 100);
  const email = cleanSingleLine("email" in body ? body.email : "", 254).toLowerCase();
  const submittedSubject = cleanSingleLine("subject" in body ? body.subject : "", 100);
  const subject = allowedSubjects.has(submittedSubject) ? submittedSubject : "Mini Wild Garden enquiry";
  const message = cleanMessage("message" in body ? body.message : "", 5000);
  const privacyAccepted = "privacyAccepted" in body && body.privacyAccepted === true;

  if (name.length < 2 || !isEmail(email) || message.length < 20 || !privacyAccepted) {
    return NextResponse.json({ error: "Please complete every required field." }, { status: 400 });
  }

  const from = process.env.RESEND_FROM_EMAIL || "Mini Wild Garden <hello@miniwildgarden.co.uk>";
  const to = process.env.CONTACT_TO_EMAIL || "hello@miniwildgarden.co.uk";
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    await resendRequest<{ id: string }>("/emails", {
      method: "POST",
      headers: { "Idempotency-Key": `contact-${Date.now()}-${email.slice(0, 40)}` },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Mini Wild Garden] ${subject}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#163226">
            <h1 style="font-size:26px">New website message</h1>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <hr style="border:0;border-top:1px solid #d9e2dc;margin:24px 0" />
            <p style="line-height:1.7">${safeMessage}</p>
          </div>`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
        tags: [{ name: "source", value: "contact-form" }],
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed", error);
    return NextResponse.json(
      { error: "Your message could not be sent just now. Please email hello@miniwildgarden.co.uk instead." },
      { status: 502 },
    );
  }
}
