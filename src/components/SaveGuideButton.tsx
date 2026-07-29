"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mwg-saved-guides";
const EVENT_NAME = "mwg:saved-guides-changed";

function readSaved(): string[] {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) : [];
  } catch {
    return [];
  }
}

export function SaveGuideButton({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const update = () => setSaved(readSaved().includes(slug));
    update();
    window.addEventListener(EVENT_NAME, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(EVENT_NAME, update);
      window.removeEventListener("storage", update);
    };
  }, [slug]);

  function toggle() {
    const current = readSaved();
    const next = current.includes(slug)
      ? current.filter((item) => item !== slug)
      : [...current, slug];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT_NAME));
    setSaved(next.includes(slug));
  }

  return (
    <button
      className={`save-guide-button ${compact ? "save-guide-button--compact" : ""} ${saved ? "is-saved" : ""}`}
      type="button"
      onClick={toggle}
      aria-pressed={saved}
      aria-label={saved ? "Remove this guide from saved guides" : "Save this guide"}
    >
      <span aria-hidden="true">{saved ? "♥" : "♡"}</span>
      {!compact && (saved ? "Saved" : "Save guide")}
    </button>
  );
}

export { STORAGE_KEY, EVENT_NAME };
