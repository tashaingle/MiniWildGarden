import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { seasons } from "@/lib/content";
import { seasonalImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Seasonal wildlife gardening",
  description: "Follow the British garden year with practical wildlife-friendly jobs for spring, summer, autumn and winter.",
  alternates: { canonical: "/seasonal-advice" },
};

export default function SeasonalAdvicePage() {
  return (
    <main>
      <PageHero
        eyebrow="The garden year"
        title="Let the season tell you what the garden needs."
        intro="Work with natural rhythms rather than against them, from nesting and early flowers to autumn shelter and winter food."
        image="/images/wildflowers.webp"
        imageAlt="Wildflowers glowing in soft sunlight"
        focal="50% 46%"
      />
      <section className="section seasonal-index">
        <div className="shell season-grid season-grid--index">
          {seasons.map((season) => {
            const image = seasonalImages[season.slug];
            return (
              <Link className={`season-card season-card--${season.slug}`} href={`/seasonal-advice/${season.slug}`} key={season.slug} data-reveal>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 25vw" style={{ objectPosition: image.focal }} />
                <span className="season-card__shade" />
                <span className="season-card__number">{season.label}</span>
                <div><span>{season.name}</span><h3>{season.intro}</h3><i>Open the seasonal guide →</i></div>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="season-philosophy">
        <div className="shell season-philosophy__grid">
          <span className="season-philosophy__mark" data-reveal>“</span>
          <h2 data-reveal>A wildlife garden is not finished. It is always becoming.</h2>
          <p data-reveal>Leave time for plants to seed, leaves to settle, insects to overwinter and animals to discover what you have made.</p>
        </div>
      </section>
    </main>
  );
}
