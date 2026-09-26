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
    src: "/images/butterfly-guide/peacock-butterfly.webp",
    alt: "A peacock butterfly resting on a garden flower",
    focal: "35% 50%",
  },
  "frog-friendly-space": {
    src: "/images/frog-guide/common-frog-grass.webp",
    alt: "A common frog sitting low in long garden grass",
    focal: "55% 40%",
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
    src: "/images/balcony-transform-guide/before-after.webp",
    alt: "A bare balcony shown beside its transformation into a planted wildlife space",
    focal: "50% 50%",
  },
  "leave-seed-heads-over-winter": {
    src: "/images/winter-seedheads-guide/seed-heads.webp",
    alt: "Tall dried seed heads left standing in a winter garden border",
    focal: "50% 48%",
  },
  "create-a-leaf-litter-corner": {
    src: "/images/leaf-litter-guide/leaf-corridor.webp",
    alt: "Fallen autumn leaves retained beneath a dense garden hedge",
    focal: "50% 52%",
  },
  "make-an-insect-drinking-station": {
    src: "/images/insect-water-guide/bees-on-stones.webp",
    alt: "Bees landing safely on stones in a shallow water dish",
    focal: "50% 48%",
  },
  "start-a-no-mow-lawn": {
    src: "/images/no-mow-guide/mown-edge.webp",
    alt: "A neat short lawn edge beside a retained area of longer grass",
    focal: "50% 52%",
  },
  "collect-and-use-rainwater": {
    src: "/images/rainwater-guide/water-butt.webp",
    alt: "A covered water butt connected securely to a house downpipe",
    focal: "50% 50%",
  },
  "mulch-to-reduce-watering": {
    src: "/images/mulch-guide/mulched-plant.webp",
    alt: "Organic wood-chip mulch spread around the base of a young garden plant",
    focal: "50% 52%",
  },
  "create-a-wildlife-corridor": {
    src: "/images/wildlife-corridor-guide/layered-planting.webp",
    alt: "Dense layered planting forming a sheltered route through a garden",
    focal: "50% 50%",
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
    src: "/images/seedling-rows.webp",
    alt: "Rows of young seedlings emerging from spring soil",
    focal: "50% 50%",
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
    src: "/images/robin.webp",
    alt: "A robin perched among bare winter stems",
    focal: "40% 50%",
  },
};

export function getGuideImage(guide: Pick<Guide, "slug">): GuideImage {
  return (
    guideImages[guide.slug] ?? {
      src: "/images/peacock-buddleia.webp",
      alt: "A peacock butterfly feeding on purple buddleia",
      focal: "50% 50%",
    }
  );
}
