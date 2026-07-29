"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Icon } from "@/components/Icon";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "Mini Wild Garden enquiry");
    const message = String(form.get("message") ?? "");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    setStatus("Opening your email app…");
    window.location.href = `mailto:hello@miniwildgarden.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} data-reveal>
      <label>
        <span>Your name</span>
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        <span>Email address</span>
        <input name="email" type="email" autoComplete="email" required />
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
        <textarea name="message" rows={7} required />
      </label>
      <button className="button button--dark" type="submit">Open email <Icon name="arrow" size={17} /></button>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
