import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { getSeason, seasons } from "@/lib/content";

export function generateStaticParams() {
  return seasons.map((season) => ({ season: season.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ season: string }> }): Promise<Metadata> {
  const { season: slug } = await params;
  const season = getSeason(slug);
  return season ? { title: `${season.name} wildlife gardening`, description: season.intro } : {};
}

export default async function SeasonPage({ params }: { params: Promise<{ season: string }> }) {
  const { season: slug } = await params;
  const season = getSeason(slug);
  if (!season) notFound();

  return (
    <main>
      <section className={`season-detail-hero season-detail-hero--${season.slug}`}>
        <div className="shell season-detail-hero__grid">
          <div>
            <Link className="back-link" href="/seasonal-advice">← All seasonal advice</Link>
            <span className="eyebrow">{season.label}</span>
            <h1>{season.name} in the wildlife garden</h1>
            <p className="lead">{season.intro}</p>
          </div>
          <div className="season-detail-hero__icon"><Icon name={season.icon} size={110} /></div>
        </div>
      </section>

      <section className="section">
        <div className="shell seasonal-jobs">
          <div className="seasonal-jobs__intro">
            <span className="eyebrow">Your seasonal checklist</span>
            <h2>Five useful things to do</h2>
            <p>Choose one or work through the list gradually. Wildlife gardening is about steady improvement, not completing everything at once.</p>
          </div>
          <div className="seasonal-jobs__list">
            {season.jobs.map((job, index) => (
              <div className="season-job" key={job}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{job}</p>
                <Icon name="check" size={22} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell next-step">
          <div><span className="eyebrow">Build the habitat</span><h2>Choose a project to put this advice into action.</h2></div>
          <Link className="button" href="/garden-guides">Browse garden projects <Icon name="arrow" size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
