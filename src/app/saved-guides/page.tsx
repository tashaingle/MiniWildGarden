import type { Metadata } from "next";
import { SavedGuides } from "@/components/SavedGuides";
import { PageHero } from "@/components/PageHero";
import { libraryItems } from "@/lib/library";

export const metadata: Metadata = {
  title: "Saved guides",
  description: "Your locally saved Mini Wild Garden field guides and garden projects.",
  robots: { index: false, follow: true },
};

export default function SavedGuidesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Your field notebook"
        title="Keep useful ideas close."
        intro="Saved guides live in this browser, so you can build a personal wildlife garden plan without creating an account."
        image="/images/seedling-closeup.webp"
        imageAlt="A young seedling unfurling its first leaves from dark soil"
        focal="62% 50%"
      />
      <section className="section saved-guides-section"><div className="shell"><SavedGuides items={libraryItems} /></div></section>
    </main>
  );
}
