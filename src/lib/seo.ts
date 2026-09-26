// Search-facing titles and descriptions for the standard guides. On-page
// headings stay as written in content.ts; these match how people search.
// Keep titles under ~41 characters so the " | Mini Wild Garden" suffix fits
// within search results, and descriptions under ~155 characters.
export type GuideSeo = { title: string; description: string };

const guideSeo: Record<string, GuideSeo> = {
  "garden-for-bees": {
    title: "How to make a bee-friendly garden",
    description: "Plan a bee-friendly UK garden: flowers from March to October, planting in groups, bare ground for solitary bees and no pesticides. Works in pots too.",
  },
  "welcome-hedgehogs": {
    title: "How to help hedgehogs in your garden",
    description: "Help hedgehogs in your UK garden with a fence gap, safer ponds and netting, a quiet shelter and careful supplementary food. Simple steps for any garden.",
  },
  "wildlife-small-garden": {
    title: "Wildlife gardening for small gardens",
    description: "Make a small garden, yard or courtyard work for UK wildlife by growing upwards, planting pots with purpose, adding mini water and using every layer.",
  },
  "grow-a-wildflower-patch": {
    title: "How to grow a wildflower patch",
    description: "Turn a sunny patch of lawn or a container into a wildflower patch rich in pollen and nectar: assess the site, prepare it, sow or plant and manage it yearly.",
  },
  "build-a-log-pile": {
    title: "How to build a log pile for wildlife",
    description: "Build a simple log pile for beetles, fungi, amphibians and other small wildlife. Pick a quiet corner, mix materials, keep it stable and leave it alone.",
  },
  "best-flowers-for-bees-and-pollinators": {
    title: "Best flowers for bees and pollinators",
    description: "The best flowers for bees and pollinators in UK gardens, from spring to autumn. Open, nectar-rich plants for borders, pots and window boxes.",
  },
  "build-a-log-and-leaf-habitat": {
    title: "Build a log and leaf pile for wildlife",
    description: "Stack logs, sticks, bark and leaves into a shady refuge for beetles, spiders, amphibians and more. A step-by-step UK wildlife habitat project.",
  },
  "create-a-wildlife-friendly-balcony": {
    title: "How to make a wildlife-friendly balcony",
    description: "Turn a bare balcony into a wildlife stepping stone with layered containers, pollinator flowers, shallow water and shelter that is easy to keep going.",
  },
  "leave-seed-heads-over-winter": {
    title: "Why to leave seed heads over winter",
    description: "Leaving seed heads and hollow stems over winter feeds birds and shelters insects. Which plants to keep, how to make it look tidy and when to cut back.",
  },
  "create-a-leaf-litter-corner": {
    title: "What to do with fallen leaves",
    description: "Keep fallen leaves as a wildlife habitat instead of clearing them. How to make a leaf-litter corner that shelters insects, amphibians and more.",
  },
  "make-an-insect-drinking-station": {
    title: "How to make a bee water station",
    description: "Make a safe water station for bees and other insects with a shallow dish and landing stones, and keep it fresh through warm, dry UK summers.",
  },
  "start-a-no-mow-lawn": {
    title: "How to start a no-mow lawn",
    description: "Start a no-mow lawn without losing your garden: choose the area, let lawn flowers appear, use more than one grass height and cut at the right time.",
  },
  "collect-and-use-rainwater": {
    title: "How to set up a water butt",
    description: "Set up a water butt safely with a diverter and overflow, keep stored rainwater clean and covered, and use it where it helps your garden and wildlife most.",
  },
  "mulch-to-reduce-watering": {
    title: "How to mulch to save water",
    description: "Mulch beds and borders to hold moisture, protect soil life and water less. Which mulch to choose, how deep to apply it and when to check beneath.",
  },
  "create-a-wildlife-corridor": {
    title: "How to create a wildlife corridor",
    description: "Link planting, shelter and water so wildlife can move safely through your garden and next door. Map gaps, add layered planting and connect boundaries.",
  },
  "plant-a-wildlife-hedge": {
    title: "How to plant a wildlife hedge",
    description: "Plan and plant a native wildlife hedge with a varied mix of shrubs for flowers, berries and shelter, then mulch and trim it at the right time.",
  },
  "chemical-free-garden": {
    title: "Natural pest control without chemicals",
    description: "Garden without pesticides using healthier plants, physical barriers and natural predators. A practical UK guide to chemical-free pest control.",
  },
};

export function getGuideSeo(slug: string, fallback: GuideSeo): GuideSeo {
  return guideSeo[slug] ?? fallback;
}
