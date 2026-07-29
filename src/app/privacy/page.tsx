import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Mini Wild Garden handles contact details, browser storage and website data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page"><div className="shell legal-page__inner">
      <span className="eyebrow">Mini Wild Garden</span><h1>Privacy policy</h1><p className="lead">Last updated 29 July 2026</p>
      <section><h2>What this site stores</h2><p>Saved guides, seasonal checklist progress, planner answers and helpfulness feedback are stored locally in your browser. They are not sent to Mini Wild Garden and are not available on another device unless you save them there too.</p></section>
      <section><h2>Contact messages</h2><p>The current contact form opens your own email application. Any message you send is handled by your email provider and received at the address shown on the contact page.</p></section>
      <section><h2>Analytics and advertising</h2><p>This version of the site does not use advertising cookies or behavioural tracking. If privacy-respecting analytics are added later, this policy and the site preference notice will be updated before they are enabled.</p></section>
      <section><h2>External links</h2><p>Guides link to trusted conservation and gardening organisations. Those websites have their own privacy policies and may use their own cookies.</p></section>
      <section><h2>Your choices</h2><p>You can clear saved guides and planner information from the site controls or by clearing local storage for miniwildgarden.co.uk in your browser settings.</p></section>
      <section><h2>Questions</h2><p>Contact <a href="mailto:hello@miniwildgarden.co.uk">hello@miniwildgarden.co.uk</a> with privacy questions.</p></section>
      <Link className="text-link" href="/cookies">Read the site preferences notice <span>→</span></Link>
    </div></main>
  );
}
