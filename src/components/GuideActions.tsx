"use client";

import { useEffect, useState } from "react";
import { SaveGuideButton } from "@/components/SaveGuideButton";

export function GuideActions({ slug, title, href }: { slug: string; title: string; href: string }) {
  const [message, setMessage] = useState("");
  const [helpful, setHelpful] = useState<"yes" | "no" | null>(null);

  useEffect(() => {
    try {
      const value = window.localStorage.getItem(`mwg-helpful:${slug}`);
      if (value === "yes" || value === "no") setHelpful(value);
    } catch {
      // Keep the control usable even if storage is unavailable.
    }
  }, [slug]);

  async function share() {
    const url = new URL(href, window.location.origin).toString();
    try {
      if (navigator.share) {
        await navigator.share({ title, text: `A Mini Wild Garden guide: ${title}`, url });
        setMessage("Shared");
      } else {
        await navigator.clipboard.writeText(url);
        setMessage("Link copied");
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError") setMessage("Copy the page address from your browser");
    }
    window.setTimeout(() => setMessage(""), 2400);
  }

  function rate(value: "yes" | "no") {
    setHelpful(value);
    try {
      window.localStorage.setItem(`mwg-helpful:${slug}`, value);
    } catch {
      // Feedback remains visible for this visit.
    }
  }

  return (
    <div className="guide-actions" aria-label="Guide tools">
      <div className="guide-actions__primary">
        <SaveGuideButton slug={slug} />
        <button type="button" onClick={share}><span aria-hidden="true">↗</span> Share</button>
        <button type="button" onClick={() => window.print()}><span aria-hidden="true">⎙</span> Print</button>
        <span className="guide-actions__message" aria-live="polite">{message}</span>
      </div>
      <div className="guide-helpful">
        <span>Was this guide helpful?</span>
        <button className={helpful === "yes" ? "is-selected" : ""} type="button" onClick={() => rate("yes")} aria-pressed={helpful === "yes"}>Yes</button>
        <button className={helpful === "no" ? "is-selected" : ""} type="button" onClick={() => rate("no")} aria-pressed={helpful === "no"}>Not quite</button>
        {helpful && <small>Thank you — your answer is saved on this device.</small>}
      </div>
    </div>
  );
}
