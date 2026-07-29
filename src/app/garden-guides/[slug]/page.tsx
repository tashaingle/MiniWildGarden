import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { gardenGuides, getGardenGuide } from "@/lib/content";

export function generateStaticParams() {
  return gardenGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGardenGuide(slug);
  return guide ? { title: guide.title, description: guide.excerpt } : {};
}

export default async function GardenGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGardenGuide(slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} backHref="/garden-guides" backLabel="All garden projects" />;
}
