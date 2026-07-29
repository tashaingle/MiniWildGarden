"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "mwg-privacy-notice-dismissed";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(STORAGE_KEY) !== "yes");
    } catch {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try { window.localStorage.setItem(STORAGE_KEY, "yes"); } catch { /* no-op */ }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="privacy-notice" aria-label="Site privacy notice">
      <div>
        <strong>Your field notes stay on your device.</strong>
        <p>Mini Wild Garden uses local browser storage for saved guides, checklists and planner progress. There are no advertising cookies in this version of the site.</p>
        <Link href="/cookies">How site preferences work</Link>
      </div>
      <button type="button" onClick={dismiss}>Understood</button>
    </aside>
  );
}
