"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Icon } from "@/components/Icon";
import { trackEvent } from "@/lib/analytics";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setState("sending");
    setMessage("Sending your message…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          subject: form.get("subject"),
          message: form.get("message"),
          website: form.get("website"),
          privacyAccepted: form.get("privacyAccepted") === "yes",
          startedAt: startedAt.current,
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error || "Your message could not be sent.");

      formElement.reset();
      startedAt.current = Date.now();
      setState("success");
      setMessage("Thank you — your message has been sent.");
      trackEvent("generate_lead", { lead_source: "contact_form" });
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Your message could not be sent.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} data-reveal noValidate>
      <label>
        <span>Your name</span>
        <input name="name" autoComplete="name" minLength={2} maxLength={100} required />
      </label>
      <label>
        <span>Email address</span>
        <input name="email" type="email" autoComplete="email" maxLength={254} required />
      </label>
      <label>
        <span>What is this about?</span>
        <select name="subject" defaultValue="A wildlife gardening question">
          <option>A wildlife gardening question</option>
          <option>A story or photo to share</option>
          <option>A correction or suggestion</option>
          <option>Working together</option>
        </select>
      </label>
      <label>
        <span>Your message</span>
        <textarea name="message" rows={8} minLength={20} maxLength={5000} required />
      </label>
      <label className="form-honeypot" aria-hidden="true">
        <span>Website</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="form-consent">
        <input name="privacyAccepted" type="checkbox" value="yes" required />
        <span>I agree that Mini Wild Garden may use these details to reply to my message. Read the <Link href="/privacy">privacy policy</Link>.</span>
      </label>
      <button className="button button--dark" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send message"} <Icon name="arrow" size={17} />
      </button>
      <p className={`form-status form-status--${state}`} role="status" aria-live="polite">{message}</p>
    </form>
  );
}
