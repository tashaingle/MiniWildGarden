import type { Guide } from "@/lib/content";

export type GuideImage = {
  src: string;
  alt: string;
  focal?: string;
};

const guideImages: Record<string, GuideImage> = {
  "help-garden-birds": {
    src: "/images/bird-guide/garden-feeder.webp",
    alt: "Small garden birds visiting a hanging wooden feeder",
    focal: "55% 50%",
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
    src: "/images/butterfly-guide/butterfly-hero.webp",
    alt: "An orange butterfly feeding on a garden flower",
    focal: "50% 50%",
  },
  "frog-friendly-space": {
    src: "/images/frog-guide/frog-hero.webp",
    alt: "A common frog resting in shallow water among leaves",
    focal: "50% 52%",
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
  "best-flowers-for-bees-and-pollinators": {
    src: "/images/bee-guide/flower-border-hero.webp",
    alt: "A flower-filled border of lavender, cosmos and echinacea for bees and pollinators",
    focal: "50% 50%",
  },
  "build-a-log-and-leaf-habitat": {
    src: "/images/log-guide/finished-habitat.webp",
    alt: "A finished log and leaf habitat built from stacked branches and leaf litter",
    focal: "50% 52%",
  },
  "create-a-wildlife-friendly-balcony": {
    src: "/images/balcony-guide/finished-balcony.webp",
    alt: "A planted wildlife-friendly balcony with pots and a shallow water dish",
    focal: "50% 52%",
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
    src: "/images/hedgehog-guide/hedgehog-through-fence.webp",
    alt: "A hedgehog emerging through a ground-level opening in a wooden fence",
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
