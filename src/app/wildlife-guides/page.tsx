import type { Metadata } from "next";
import Link from "next/link";
import { GuideCard } from "@/components/GuideCard";
import { PageHero } from "@/components/PageHero";
import { wildlifeGuides } from "@/lib/content";

export const metadata: Metadata = {
  title: "Wildlife guides",
  description: "Practical ways to help birds, bees, hedgehogs, butterflies, frogs and other British garden wildlife.",
};

export default function WildlifeGuidesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Wildlife field guides"
        title="Meet the lives unfolding just outside your door."
        intro="Learn what different garden visitors need, how to recognise useful habitat and which small changes can make your space safer."
        image="/images/wildlife-closeup.webp"
        imageAlt="A frog and small bird sharing a miniature garden pond"
        focal="48% 48%"
      />
      <section className="section listing-intro">
        <div className="shell listing-intro__grid">
          <div data-reveal><span className="eyebrow">Follow the food web</span><h2>Help one species and you often help many more.</h2></div>
          <p data-reveal>A pond made for frogs gives birds somewhere to drink. Flowers planted for bees feed butterflies too. Shelter for hedgehogs becomes habitat for beetles, fungi and countless smaller lives.</p>
        </div>
      </section>
      <section className="library-callout"><div className="shell library-callout__inner" data-reveal><div><span className="eyebrow">The complete field guide</span><h2>Looking for something specific?</h2><p>Search by species, habitat, difficulty or the time you have available.</p></div><Link className="button button--dark" href="/guides">Search and filter every guide</Link></div></section>
      <section className="section section--forest listing-section">
        <div className="shell guide-grid">
          {wildlifeGuides.map((guide, index) => <GuideCard key={guide.slug} guide={guide} basePath="/wildlife-guides" priority={index < 2} />)}
        </div>
      </section>
    </main>
  );
}
