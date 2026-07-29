"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "mwg-cookie-consent";
const CONSENT_EVENT = "mwg-consent-changed";
const OPEN_EVENT = "mwg-open-cookie-settings";

type ConsentChoice = "necessary" | "analytics";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(!window.localStorage.getItem(STORAGE_KEY));
    } catch {
      setVisible(true);
    }

    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  function choose(choice: ConsentChoice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // The choice still applies for the current page even if storage is unavailable.
    }
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="privacy-notice" aria-label="Cookie and analytics preferences">
      <div>
        <strong>Choose your garden settings.</strong>
        <p>Essential storage keeps saved guides and planner progress on your device. Optional Google Analytics helps us understand which guides are useful.</p>
        <Link href="/cookies">Read about cookies and analytics</Link>
      </div>
      <div className="privacy-notice__actions">
        <button className="privacy-notice__secondary" type="button" onClick={() => choose("necessary")}>Necessary only</button>
        <button type="button" onClick={() => choose("analytics")}>Allow analytics</button>
      </div>
    </aside>
  );
}
