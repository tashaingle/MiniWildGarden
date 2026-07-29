import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { PondGuide } from "@/components/PondGuide";
import { gardenGuides, getGardenGuide } from "@/lib/content";
import { getGuideImage } from "@/lib/images";

const pondSlug = "make-a-mini-wildlife-pond";

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
          width: 1168,
          height: 784,
          alt: "A completed wildlife pond seen across the water from a low angle",
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
    openGraph: { images: [{ url: image.src, alt: image.alt }] },
  };
}

export default async function GardenGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGardenGuide(slug);
  if (!guide) notFound();

  if (slug === pondSlug) return <PondGuide />;

  return <GuideArticle guide={guide} backHref="/garden-guides" backLabel="All garden projects" />;
}
