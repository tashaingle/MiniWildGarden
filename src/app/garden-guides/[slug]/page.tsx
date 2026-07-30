import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { HedgehogHighwayGuide } from "@/components/HedgehogHighwayGuide";
import { PondGuide } from "@/components/PondGuide";
import { gardenGuides, getGardenGuide } from "@/lib/content";
import { getGuideImage } from "@/lib/images";

const pondSlug = "make-a-mini-wildlife-pond";
const hedgehogSlug = "make-a-hedgehog-highway";

export function generateStaticParams() {
  return gardenGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  if (slug === pondSlug) {
    return {
      title: "How to make a wildlife pond",
      description: "A detailed UK wildlife pond guide covering position, liner or shell, shallow edges, escape routes, planting, rainwater and seasonal care.",
      alternates: { canonical: `/garden-guides/${pondSlug}` },
      openGraph: {
        title: "How to make a wildlife pond",
        description: "Create a wildlife pond with safe shallow margins, varied planting and a dependable escape route.",
        type: "article",
        images: [{
          url: "/images/pond-guide/finished-low-angle.webp",
          width: 1920,
          height: 1080,
          alt: "A completed wildlife pond seen across the water from a low angle",
        }],
      },
    };
  }

  if (slug === hedgehogSlug) {
    return {
      title: "How to make a hedgehog highway",
      description: "A detailed UK guide to creating a safe 13 cm by 13 cm access point through a wooden garden fence and connecting neighbouring habitat.",
      alternates: { canonical: `/garden-guides/${hedgehogSlug}` },
      openGraph: {
        title: "How to make a hedgehog highway",
        description: "Open a safe route through your garden boundary and help reconnect neighbourhood hedgehog habitat.",
        type: "article",
        images: [{
          url: "/images/hedgehog-guide/hedgehog-through-fence.webp",
          width: 784,
          height: 1168,
          alt: "A hedgehog using a ground-level opening in a wooden fence",
        }],
      },
    };
  }

  const guide = getGardenGuide(slug);
  if (!guide) return {};
  const image = getGuideImage(guide);
  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: { canonical: `/garden-guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: "article",
      url: `/garden-guides/${guide.slug}`,
      images: [{ url: image.src, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.excerpt,
      images: [image.src],
    },
  };
}

export default async function GardenGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGardenGuide(slug);
  if (!guide) notFound();

  if (slug === pondSlug) return <PondGuide />;
  if (slug === hedgehogSlug) return <HedgehogHighwayGuide />;

  return <GuideArticle guide={guide} backHref="/garden-guides" backLabel="All garden projects" />;
}
