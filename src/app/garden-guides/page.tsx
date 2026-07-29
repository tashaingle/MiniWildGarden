import type { Metadata } from "next";
import { GuideCard } from "@/components/GuideCard";
import { PageHero } from "@/components/PageHero";
import { gardenGuides } from "@/lib/content";

export const metadata: Metadata = {
  title: "Garden projects",
  description: "Easy wildlife garden projects, from mini ponds and log piles to hedges and wildflower patches.",
};

export default function GardenGuidesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Garden projects"
        title="Turn a free afternoon into a useful new habitat."
        intro="Clear steps, realistic timescales and small-space options for creating water, food, shelter and safer routes through your garden."
        icon="garden"
      />
      <section className="section">
        <div className="shell">
          <div className="card-grid card-grid--three">
            {gardenGuides.map((guide) => <GuideCard key={guide.slug} guide={guide} basePath="/garden-guides" />)}
          </div>
        </div>
      </section>
    </main>
  );
}
