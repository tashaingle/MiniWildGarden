"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

type FormState = "idle" | "sending" | "success" | "error";

export function NewsletterSignup() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setState("sending");
    setMessage("Sending your confirmation email…");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          firstName: form.get("firstName"),
          website: form.get("website"),
          consent: form.get("consent") === "yes",
          startedAt: startedAt.current,
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error || "The signup could not be completed.");

      formElement.reset();
      startedAt.current = Date.now();
      setState("success");
      setMessage("Check your inbox and click the confirmation link to join.");
      trackEvent("generate_lead", { lead_source: "newsletter_request" });
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "The signup could not be completed.");
    }
  }

  return (
    <form className="newsletter-signup" onSubmit={submit} noValidate>
      <div className="newsletter-signup__heading">
        <span className="eyebrow eyebrow--light">Occasional field notes</span>
        <h3>Small actions for a wilder garden.</h3>
        <p>Seasonal jobs, new guides and practical ideas. No weekly inbox clutter.</p>
      </div>
      <div className="newsletter-signup__fields">
        <label>
          <span>First name <small>optional</small></span>
          <input name="firstName" autoComplete="given-name" maxLength={80} />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
        <label className="form-honeypot" aria-hidden="true">
          <span>Website</span>
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <label className="newsletter-consent">
          <input name="consent" type="checkbox" value="yes" required />
          <span>I would like to receive Mini Wild Garden emails. I can unsubscribe at any time. <Link href="/privacy">Privacy policy</Link>.</span>
        </label>
        <button type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Join the field notes"}</button>
        <p className={`newsletter-status newsletter-status--${state}`} role="status" aria-live="polite">{message}</p>
      </div>
    </form>
  );
}
