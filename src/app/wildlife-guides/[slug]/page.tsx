import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getWildlifeGuide, wildlifeGuides } from "@/lib/content";

export function generateStaticParams() {
  return wildlifeGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getWildlifeGuide(slug);
  return guide ? { title: guide.title, description: guide.excerpt } : {};
}

export default async function WildlifeGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getWildlifeGuide(slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} backHref="/wildlife-guides" backLabel="All wildlife guides" />;
}
