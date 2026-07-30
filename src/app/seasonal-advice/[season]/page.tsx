import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroImage } from "@/components/HeroImage";
import { Icon } from "@/components/Icon";
import { SeasonChecklist } from "@/components/SeasonChecklist";
import { getSeason, seasons } from "@/lib/content";
import { seasonalImages } from "@/lib/images";

export function generateStaticParams() {
  return seasons.map((season) => ({ season: season.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ season: string }> }): Promise<Metadata> {
  const { season: slug } = await params;
  const season = getSeason(slug);
  if (!season) return {};
  const image = seasonalImages[season.slug];
  return {
    title: `${season.name} wildlife gardening`,
    description: season.intro,
    alternates: { canonical: `/seasonal-advice/${season.slug}` },
    openGraph: {
      title: `${season.name} wildlife gardening`,
      description: season.intro,
      type: "article",
      url: `/seasonal-advice/${season.slug}`,
      images: [{ url: image.src, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${season.name} wildlife gardening`,
      description: season.intro,
      images: [image.src],
    },
  };
}

export default async function SeasonPage({ params }: { params: Promise<{ season: string }> }) {
  const { season: slug } = await params;
  const season = getSeason(slug);
  if (!season) notFound();
  const image = seasonalImages[season.slug];

  return (
    <main>
      <section className="season-detail-hero" data-parallax-root>
        <HeroImage className="season-detail-hero__image parallax-image" src={image.src} alt={image.alt} style={{ objectPosition: image.focal }} />
        <span className="season-detail-hero__shade" />
        <div className="shell season-detail-hero__content">
          <Link className="back-link" href="/seasonal-advice">← The garden year</Link>
          <span className="eyebrow eyebrow--light">{season.label}</span>
          <h1>{season.name}</h1>
          <p className="lead">{season.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell seasonal-jobs">
          <div className="seasonal-jobs__intro" data-reveal>
            <span className="eyebrow">This season</span>
            <h2>Five gentle jobs with real value.</h2>
            <p>Choose what fits your space. Doing one task thoughtfully is more useful than trying to overhaul the whole garden at once.</p>
          </div>
          <SeasonChecklist season={season.slug} jobs={season.jobs} />
        </div>
      </section>

      <section className="section section--forest">
        <div className="shell next-step next-step--light" data-reveal>
          <div><span className="eyebrow eyebrow--light">Build habitat</span><h2>Turn this season’s energy into one lasting garden change.</h2></div>
          <Link className="button button--lime" href="/garden-guides">Choose a project <Icon name="arrow" size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
