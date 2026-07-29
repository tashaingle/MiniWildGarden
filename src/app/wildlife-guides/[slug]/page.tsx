import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getWildlifeGuide, wildlifeGuides } from "@/lib/content";
import { getGuideImage } from "@/lib/images";

export function generateStaticParams() {
  return wildlifeGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
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
  return <GuideArticle guide={guide} backHref="/wildlife-guides" backLabel="All wildlife guides" />;
}
