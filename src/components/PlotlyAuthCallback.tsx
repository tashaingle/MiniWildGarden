"use client";

import { useEffect, useMemo, useState } from "react";
import { PLOTLY_APP_STORE_URL } from "@/components/PlotlyAppPromo";

const APP_DEEP_LINK_BASE = "gardenplanner://auth/callback";

function buildDeepLink(): string {
  if (typeof window === "undefined") return APP_DEEP_LINK_BASE;
  const search = window.location.search || "";
  const hash = window.location.hash || "";
  // Supabase usually puts tokens in the hash after verify
  const suffix = hash && hash.length > 1 ? hash : search;
  return `${APP_DEEP_LINK_BASE}${suffix || ""}`;
}

function readAuthError(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const fromHash = window.location.hash.startsWith("#")
      ? window.location.hash.slice(1)
      : window.location.hash;
    const fromSearch = window.location.search.startsWith("?")
      ? window.location.search.slice(1)
      : window.location.search;
    const params = new URLSearchParams(`${fromHash}&${fromSearch}`);
    const err = params.get("error_description") || params.get("error");
    return err ? decodeURIComponent(err.replace(/\+/g, " ")) : null;
  } catch {
    return null;
  }
}

export function PlotlyAuthCallback() {
  const [deepLink, setDeepLink] = useState(APP_DEEP_LINK_BASE);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const link = buildDeepLink();
    const authError = readAuthError();
    setDeepLink(link);
    setError(authError);

    if (!authError) {
      // Attempt automatic open after HTTPS landing (works more reliably than
      // Safari navigating straight to a custom scheme from Supabase)
      const timer = window.setTimeout(() => {
        window.location.href = link;
      }, 450);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const statusText = useMemo(() => {
    if (error) return error;
    return "Your account link was processed. Opening Plotly…";
  }, [error]);

  return (
    <main className="confirmation-page">
      <div className="shell confirmation-page__inner">
        <span className="eyebrow">Plotly</span>
        <h1>{error ? "We could not finish that link" : "Open Plotly to continue"}</h1>
        <p>{statusText}</p>
        <p>
          If the app does not open automatically, tap the button below. You can also open Plotly
          and sign in with the same email and password. Your email may already be confirmed.
        </p>
        <div className="confirmation-page__actions" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <a className="button button--dark" href={deepLink}>
            Open Plotly app
          </a>
          <a
            className="button button--lime"
            href={PLOTLY_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Plotly on the App Store
          </a>
        </div>
      </div>
    </main>
  );
}
