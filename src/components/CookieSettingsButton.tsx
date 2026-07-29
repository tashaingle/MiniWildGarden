"use client";

export function CookieSettingsButton() {
  return (
    <button
      className="footer-cookie-button"
      type="button"
      onClick={() => window.dispatchEvent(new Event("mwg-open-cookie-settings"))}
    >
      Cookie settings
    </button>
  );
}
