import type { Metadata } from "next";
import { GuideLibrary } from "@/components/GuideLibrary";
import { PageHero } from "@/components/PageHero";
import { libraryItems } from "@/lib/library";

export const metadata: Metadata = {
  title: "Wildlife garden guide library",
  description: "Search and filter every Mini Wild Garden wildlife guide and practical garden project by topic, time and difficulty.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <main>
      <PageHero
        eyebrow="The complete field guide"
        title="Find the right change for your garden today."
        intro="Search every wildlife guide and practical project, from five-minute fixes to full weekend habitats."
        image="/images/uk-garden.webp"
        imageAlt="A wildlife-rich British garden filled with flowers, water and layered habitat"
        focal="50% 50%"
      />
      <section className="section guide-library-section">
        <div className="shell"><GuideLibrary items={libraryItems} /></div>
      </section>
    </main>
  );
}
