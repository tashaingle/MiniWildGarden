import { gardenGuides, wildlifeGuides, type Guide } from "@/lib/content";
import { getGuideMeta } from "@/lib/guideMeta";
import { getGuideImage } from "@/lib/images";

export type LibraryItem = Guide & {
  kind: "wildlife" | "project";
  href: string;
  image: {
    src: string;
    alt: string;
    focal?: string;
  };
  readingMinutes: number;
  effort: "quick" | "afternoon" | "weekend" | "ongoing";
  benefits: string[];
  updated: string;
};

function toItem(guide: Guide, kind: LibraryItem["kind"]): LibraryItem {
  const meta = getGuideMeta(guide.slug);
  return {
    ...guide,
    kind,
    href: `/${kind === "wildlife" ? "wildlife-guides" : "garden-guides"}/${guide.slug}`,
    image: getGuideImage(guide),
    readingMinutes: meta.readingMinutes,
    effort: meta.effort,
    benefits: meta.benefits,
    updated: meta.updated,
  };
}

export const libraryItems: LibraryItem[] = [
  ...wildlifeGuides.map((guide) => toItem(guide, "wildlife")),
  ...gardenGuides.map((guide) => toItem(guide, "project")),
];

export function getLibraryItem(slug: string) {
  return libraryItems.find((item) => item.slug === slug);
}
