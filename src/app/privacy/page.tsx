import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Mini Wild Garden handles contact details, newsletter subscriptions, analytics and browser storage.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page"><div className="shell legal-page__inner">
      <span className="eyebrow">Mini Wild Garden</span><h1>Privacy policy</h1><p className="lead">Last updated 29 July 2026</p>
      <section><h2>Who is responsible for the site</h2><p>Mini Wild Garden is operated by Natasha Card. Privacy questions can be sent to <a href="mailto:support@miniwildgarden.com">support@miniwildgarden.com</a>.</p></section>
      <section><h2>Contact messages</h2><p>When you submit the contact form, the site processes your name, email address, chosen subject and message so a reply can be sent. The message is delivered using Resend and received in the Mini Wild Garden email inbox. It is kept only as long as reasonably needed to respond, maintain a record of the conversation or meet a legal obligation.</p></section>
      <section><h2>Newsletter subscriptions</h2><p>The newsletter form collects your email address and, optionally, your first name. A confirmation email is sent before the address is added to the Mini Wild Garden contact list in Resend. Newsletter messages include an unsubscribe option. You can also request removal by emailing the address above.</p></section>
      <section><h2>Analytics</h2><p>Google Analytics is loaded only after you choose “Allow analytics” in the site settings. It helps Mini Wild Garden understand page visits and actions such as contact enquiries and confirmed newsletter interest. You can refuse analytics or change your choice at any time through the Cookie settings link in the footer.</p></section>
      <section><h2>Information stored on your device</h2><p>Saved guides, seasonal checklist progress, planner answers, helpfulness feedback and your cookie preference are stored locally in your browser. Saved-guide and planner information is not sent to Mini Wild Garden.</p></section>
      <section><h2>External links</h2><p>Guides link to conservation and gardening organisations. Those websites are responsible for their own privacy practices.</p></section>
      <section><h2>Your rights</h2><p>Depending on the circumstances, you may ask for access, correction, deletion or restriction of personal information held about you, or object to its use. Contact Mini Wild Garden using the email address above.</p></section>
      <Link className="text-link" href="/cookies">Read the cookies and analytics notice <span>→</span></Link>
    </div></main>
  );
}
