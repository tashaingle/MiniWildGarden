import type { Metadata } from "next";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Cookies and analytics",
  description: "How Mini Wild Garden uses browser storage and optional Google Analytics.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <main className="legal-page"><div className="shell legal-page__inner">
      <span className="eyebrow">Site preferences</span><h1>Cookies and analytics</h1><p className="lead">Essential site preferences work without analytics. Google Analytics is optional and is not loaded until you allow it.</p>
      <section><h2>Essential local storage</h2><p>Mini Wild Garden stores saved guides, checklist progress, planner answers, helpfulness feedback and your cookie choice in your browser. These features help the site remember your choices and do not require an advertising profile.</p></section>
      <section><h2>Optional Google Analytics</h2><p>When you allow analytics, Google Analytics may use cookies such as <code>_ga</code> and a property-specific <code>_ga_…</code> cookie. These identifiers help distinguish visits and produce aggregated reports about how the site is used.</p></section>
      <section><h2>Events measured</h2><p>The implementation records page views and may record successful contact-form and newsletter-signup actions. Form message contents, names and email addresses are not sent to Google Analytics by this site.</p></section>
      <section><h2>Change your choice</h2><p>Open the settings below and choose either Necessary only or Allow analytics. Clearing site data in your browser will also remove the stored choice.</p><CookieSettingsButton /></section>
    </div></main>
  );
}
