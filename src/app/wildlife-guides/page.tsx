import type { Metadata } from "next";
import { GuideCard } from "@/components/GuideCard";
import { PageHero } from "@/components/PageHero";
import { wildlifeGuides } from "@/lib/content";

export const metadata: Metadata = {
  title: "Wildlife guides",
  description: "Practical ways to help birds, bees, hedgehogs, butterflies, frogs and other garden wildlife.",
};

export default function WildlifeGuidesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Wildlife guides"
        title="Help the creatures already sharing your space."
        intro="Learn what different garden visitors need and make simple changes that support feeding, shelter, nesting and safe movement."
        icon="bird"
      />
      <section className="section">
        <div className="shell">
          <div className="card-grid card-grid--three">
            {wildlifeGuides.map((guide) => <GuideCard key={guide.slug} guide={guide} basePath="/wildlife-guides" />)}
          </div>
        </div>
      </section>
    </main>
  );
}
