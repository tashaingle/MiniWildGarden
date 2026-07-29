import type { Metadata } from "next";
import { GuideCard } from "@/components/GuideCard";
import { PageHero } from "@/components/PageHero";
import { gardenGuides } from "@/lib/content";

export const metadata: Metadata = {
  title: "Garden projects",
  description: "Beautiful, achievable wildlife garden projects for ponds, pollinator planting, dead-wood habitats, balconies, hedges and connected habitats.",
};

export default function GardenGuidesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Garden projects"
        title="Turn an ordinary corner into something alive."
        intro="Choose a project that fits your space and build practical habitat for feeding, drinking, shelter and safe movement."
        image="/images/hands-gardening.webp"
        imageAlt="Hands planting seedlings beside a bird feeder and wildlife shelter"
        focal="50% 50%"
      />
      <section className="section listing-intro">
        <div className="shell listing-intro__grid">
          <div data-reveal><span className="eyebrow">Designed for real gardens</span><h2>Start with one useful layer.</h2></div>
          <p data-reveal>You do not need a landscape makeover. Add water, flowers, shelter or access first, then let the garden grow into a connected patchwork over time.</p>
        </div>
      </section>
      <section className="section section--forest listing-section">
        <div className="shell guide-grid">
          {gardenGuides.map((guide, index) => <GuideCard key={guide.slug} guide={guide} basePath="/garden-guides" priority={index < 2} />)}
        </div>
      </section>
    </main>
  );
}
