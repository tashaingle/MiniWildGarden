import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BirdGuide } from "@/components/BirdGuide";
import { ButterflyGuide } from "@/components/ButterflyGuide";
import { FrogGuide } from "@/components/FrogGuide";
import { GuideArticle } from "@/components/GuideArticle";
import { getWildlifeGuide, wildlifeGuides } from "@/lib/content";
import { getGuideImage } from "@/lib/images";

const birdSlug = "help-garden-birds";
const butterflySlug = "butterfly-friendly-garden";
const frogSlug = "frog-friendly-space";

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


  if (slug === butterflySlug) {
    return {
      title: "How to create a butterfly-friendly garden",
      description: "A detailed UK guide to nectar-rich flowers, caterpillar food plants, sunny shelter and year-round butterfly habitat.",
      alternates: { canonical: `/wildlife-guides/${butterflySlug}` },
      openGraph: {
        title: "How to create a butterfly-friendly garden",
        description: "Plant a long season of nectar, caterpillar food and warm shelter in a border, pot or tiny sunny corner.",
        type: "article",
        images: [{
          url: "/images/butterfly-guide/butterfly-hero.webp",
          width: 1152,
          height: 768,
          alt: "An orange butterfly feeding on a garden flower",
        }],
      },
    };
  }

  if (slug === frogSlug) {
    return {
      title: "How to create a frog-friendly garden",
      description: "A detailed UK guide to safe pond edges, damp routes, logs, stones, leaf litter and connected amphibian habitat.",
      alternates: { canonical: `/wildlife-guides/${frogSlug}` },
      openGraph: {
        title: "How to create a frog-friendly garden",
        description: "Connect water, damp planting and quiet shelter so frogs can use the whole garden safely.",
        type: "article",
        images: [{
          url: "/images/frog-guide/frog-hero.webp",
          width: 784,
          height: 1168,
          alt: "A common frog resting in shallow water",
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
  if (slug === butterflySlug) return <ButterflyGuide />;
  if (slug === frogSlug) return <FrogGuide />;

  return <GuideArticle guide={guide} backHref="/wildlife-guides" backLabel="All wildlife guides" />;
}
