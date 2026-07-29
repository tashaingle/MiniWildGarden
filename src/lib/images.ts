import type { Guide } from "@/lib/content";

export type GuideImage = {
  src: string;
  alt: string;
  focal?: string;
};

const guideImages: Record<string, GuideImage> = {
  "help-garden-birds": {
    src: "/images/bird.webp",
    alt: "A small garden bird perched beside a seed feeder",
    focal: "55% 45%",
  },
  "garden-for-bees": {
    src: "/images/bee.webp",
    alt: "A bee collecting pollen from a bright yellow flower",
    focal: "50% 48%",
  },
  "welcome-hedgehogs": {
    src: "/images/hedgehog.webp",
    alt: "A hedgehog using a small opening at the base of a wooden fence",
    focal: "50% 52%",
  },
  "butterfly-friendly-garden": {
    src: "/images/butterfly.webp",
    alt: "A butterfly feeding on a garden flower",
    focal: "46% 45%",
  },
  "frog-friendly-space": {
    src: "/images/frog.webp",
    alt: "A frog resting among pond plants",
    focal: "43% 54%",
  },
  "wildlife-small-garden": {
    src: "/images/balcony.webp",
    alt: "A compact planted courtyard with a small container water feature",
    focal: "50% 50%",
  },
  "make-a-mini-wildlife-pond": {
    src: "/images/pond-guide/finished-low-angle.webp",
    alt: "A finished wildlife pond viewed from a low angle across the water",
    focal: "50% 56%",
  },
  "grow-a-wildflower-patch": {
    src: "/images/wildflowers.webp",
    alt: "A sunlit patch of colourful wildflowers",
    focal: "52% 52%",
  },
  "build-a-log-pile": {
    src: "/images/log-pile.webp",
    alt: "A wildlife log and leaf pile beside a pond",
    focal: "50% 48%",
  },
  "plant-a-wildlife-hedge": {
    src: "/images/garden-bed.webp",
    alt: "A wildlife-rich garden bed with a pond and mixed flowers",
    focal: "50% 46%",
  },
  "chemical-free-garden": {
    src: "/images/hands-gardening.webp",
    alt: "Hands planting seedlings in a wildlife-friendly garden bed",
    focal: "48% 48%",
  },
  "make-a-hedgehog-highway": {
    src: "/images/hedgehog.webp",
    alt: "A hedgehog emerging through a ground-level fence opening",
    focal: "50% 54%",
  },
};

export const seasonalImages: Record<string, GuideImage> = {
  spring: {
    src: "/images/wildflowers.webp",
    alt: "Fresh spring wildflowers glowing in soft sunlight",
    focal: "50% 45%",
  },
  summer: {
    src: "/images/bee.webp",
    alt: "A bee feeding from a summer flower",
    focal: "50% 50%",
  },
  autumn: {
    src: "/images/log-pile.webp",
    alt: "Logs and fallen leaves arranged as wildlife shelter",
    focal: "50% 50%",
  },
  winter: {
    src: "/images/bird.webp",
    alt: "A garden bird beside a feeder",
    focal: "50% 45%",
  },
};

export function getGuideImage(guide: Pick<Guide, "slug">): GuideImage {
  return (
    guideImages[guide.slug] ?? {
      src: "/images/hero-garden.webp",
      alt: "A wildlife-friendly garden",
      focal: "50% 50%",
    }
  );
}
