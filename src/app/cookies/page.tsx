import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies and site preferences",
  description: "How Mini Wild Garden uses local browser storage for saved guides, checklists and planner progress.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <main className="legal-page"><div className="shell legal-page__inner">
      <span className="eyebrow">Site preferences</span><h1>Cookies and local storage</h1><p className="lead">Mini Wild Garden currently uses local browser storage rather than advertising or tracking cookies.</p>
      <section><h2>Saved guides</h2><p>When you save a guide, its identifier is kept in your browser so the Saved Guides page can rebuild your personal list.</p></section>
      <section><h2>Checklists and planner progress</h2><p>Seasonal task progress and wildlife garden planner answers are stored on your device so they remain available when you return.</p></section>
      <section><h2>Helpfulness feedback</h2><p>Your “Was this helpful?” choice is saved locally to avoid repeatedly asking the same question. It is not currently transmitted or used to create a profile.</p></section>
      <section><h2>Privacy notice preference</h2><p>One small local value records that you have dismissed the site privacy notice.</p></section>
      <section><h2>How to remove this information</h2><p>Use the reset or remove controls within the relevant feature, or clear site data for miniwildgarden.co.uk in your browser settings.</p></section>
    </div></main>
  );
}
