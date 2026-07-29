import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BirdGuide } from "@/components/BirdGuide";
import { GuideArticle } from "@/components/GuideArticle";
import { getWildlifeGuide, wildlifeGuides } from "@/lib/content";
import { getGuideImage } from "@/lib/images";

const birdSlug = "help-garden-birds";

export function generateStaticParams() {
  return wildlifeGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  if (slug === birdSlug) {
    return {
      title: "How to help garden birds safely",
      description: "A detailed UK guide to cleaner bird feeding, fresh water, seasonal food, nest boxes and wildlife-rich garden habitat.",
      alternates: { canonical: `/wildlife-guides/${birdSlug}` },
      openGraph: {
        title: "How to help garden birds safely",
        description: "Offer food, water and shelter without turning a busy feeding station into a place where disease can spread.",
        type: "article",
        images: [{
          url: "/images/bird-guide/garden-feeder.webp",
          width: 1168,
          height: 784,
          alt: "Small garden birds visiting a hanging wooden feeder",
        }],
      },
    };
  }

  const guide = getWildlifeGuide(slug);
  if (!guide) return {};
  const image = getGuideImage(guide);
  return {
    title: guide.title,
    description: guide.excerpt,
    openGraph: { images: [{ url: image.src, alt: image.alt }] },
  };
}

export default async function WildlifeGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getWildlifeGuide(slug);
  if (!guide) notFound();

  if (slug === birdSlug) return <BirdGuide />;

  return <GuideArticle guide={guide} backHref="/wildlife-guides" backLabel="All wildlife guides" />;
}
