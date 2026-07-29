"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const CONSENT_KEY = "mwg-cookie-consent";
const CONSENT_EVENT = "mwg-consent-changed";

function hasAnalyticsConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "analytics";
  } catch {
    return false;
  }
}

function RoutePageViews({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${pathname}${window.location.search}`,
      send_to: measurementId,
    });
  }, [measurementId, pathname]);

  return null;
}

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => setEnabled(hasAnalyticsConsent());
    syncConsent();
    window.addEventListener(CONSENT_EVENT, syncConsent);
    return () => window.removeEventListener(CONSENT_EVENT, syncConsent);
  }, []);

  if (!measurementId || !enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="mini-wild-garden-google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname + window.location.search
          });
        `}
      </Script>
      <RoutePageViews measurementId={measurementId} />
    </>
  );
}
