import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { seasons } from "@/lib/content";

export const metadata: Metadata = {
  title: "Seasonal advice",
  description: "Simple wildlife gardening jobs for spring, summer, autumn and winter.",
};

export default function SeasonalAdvicePage() {
  return (
    <main>
      <PageHero
        eyebrow="Seasonal advice"
        title="Give wildlife the right help at the right time."
        intro="Use the natural rhythm of the year to decide what to plant, what to leave alone and which small jobs will be most useful now."
        icon="sprout"
      />
      <section className="section section--soft">
        <div className="shell season-grid season-grid--large">
          {seasons.map((season) => (
            <Link className={`season-card season-card--${season.slug}`} href={`/seasonal-advice/${season.slug}`} key={season.slug}>
              <span className="season-card__icon"><Icon name={season.icon} size={42} /></span>
              <span className="eyebrow">{season.label}</span>
              <h2>{season.name}</h2>
              <p>{season.intro}</p>
              <span className="text-link">See this season's jobs <span>→</span></span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
