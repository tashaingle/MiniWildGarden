export type GuideSource = {
  name: string;
  organisation: string;
  url: string;
};

export type GuideMeta = {
  published: string;
  updated: string;
  readingMinutes: number;
  effort: "quick" | "afternoon" | "weekend" | "ongoing";
  benefits: string[];
  relatedSlugs: string[];
  sources: GuideSource[];
};

const commonSources = {
  wildlifeTrusts: {
    name: "Wildlife gardening advice",
    organisation: "The Wildlife Trusts",
    url: "https://www.wildlifetrusts.org/actions",
  },
  rhsWildlife: {
    name: "Gardening for wildlife",
    organisation: "Royal Horticultural Society",
    url: "https://www.rhs.org.uk/wildlife",
  },
};

const guideMeta: Record<string, GuideMeta> = {
  "help-garden-birds": {
    published: "2026-07-28",
    updated: "2026-07-29",
    readingMinutes: 11,
    effort: "quick",
    benefits: ["Birds", "Clean water", "Natural food"],
    relatedSlugs: ["plant-a-wildlife-hedge", "chemical-free-garden", "wildlife-small-garden"],
    sources: [
      { name: "Helping garden birds", organisation: "RSPB", url: "https://www.rspb.org.uk/birds-and-wildlife/helping-birds-and-wildlife" },
      commonSources.rhsWildlife,
    ],
  },
  "garden-for-bees": {
    published: "2026-07-28",
    updated: "2026-07-30",
    readingMinutes: 10,
    effort: "afternoon",
    benefits: ["Bees", "Pollinators", "Flowers"],
    relatedSlugs: ["best-flowers-for-bees-and-pollinators", "butterfly-friendly-garden", "grow-a-wildflower-patch"],
    sources: [
      { name: "Plants for pollinators", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/science/conservation-biodiversity/wildlife/plants-for-pollinators" },
      commonSources.wildlifeTrusts,
    ],
  },
  "welcome-hedgehogs": {
    published: "2026-07-28",
    updated: "2026-07-29",
    readingMinutes: 7,
    effort: "afternoon",
    benefits: ["Hedgehogs", "Safe access", "Shelter"],
    relatedSlugs: ["make-a-hedgehog-highway", "build-a-log-and-leaf-habitat", "make-a-mini-wildlife-pond"],
    sources: [
      { name: "Help hedgehogs", organisation: "Hedgehog Street", url: "https://www.hedgehogstreet.org/help-hedgehogs/" },
      commonSources.wildlifeTrusts,
    ],
  },
  "butterfly-friendly-garden": {
    published: "2026-07-29",
    updated: "2026-07-29",
    readingMinutes: 12,
    effort: "weekend",
    benefits: ["Butterflies", "Moths", "Caterpillars"],
    relatedSlugs: ["best-flowers-for-bees-and-pollinators", "grow-a-wildflower-patch", "chemical-free-garden"],
    sources: [
      { name: "Gardening for butterflies", organisation: "Butterfly Conservation", url: "https://butterfly-conservation.org/how-you-can-help/get-involved/gardening/gardening-for-butterflies" },
      commonSources.rhsWildlife,
    ],
  },
  "frog-friendly-space": {
    published: "2026-07-29",
    updated: "2026-07-29",
    readingMinutes: 11,
    effort: "weekend",
    benefits: ["Frogs", "Amphibians", "Damp shelter"],
    relatedSlugs: ["make-a-mini-wildlife-pond", "build-a-log-and-leaf-habitat", "chemical-free-garden"],
    sources: [
      { name: "Frogs and toads", organisation: "Froglife", url: "https://www.froglife.org/info-advice/frequently-asked-questions/frogs-toads-in-my-garden/" },
      commonSources.wildlifeTrusts,
    ],
  },
  "wildlife-small-garden": {
    published: "2026-07-28",
    updated: "2026-07-29",
    readingMinutes: 6,
    effort: "weekend",
    benefits: ["Small spaces", "Containers", "Water"],
    relatedSlugs: ["create-a-wildlife-friendly-balcony", "garden-for-bees", "help-garden-birds"],
    sources: [commonSources.rhsWildlife, commonSources.wildlifeTrusts],
  },
  "make-a-mini-wildlife-pond": {
    published: "2026-07-28",
    updated: "2026-07-29",
    readingMinutes: 14,
    effort: "weekend",
    benefits: ["Water", "Amphibians", "Insects"],
    relatedSlugs: ["frog-friendly-space", "help-garden-birds", "wildlife-small-garden"],
    sources: [
      { name: "Wildlife ponds", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/ponds/wildlife-ponds" },
      { name: "Create a mini wildlife pond", organisation: "The Wildlife Trusts", url: "https://www.wildlifetrusts.org/actions/how-create-mini-wildlife-pond" },
    ],
  },
  "grow-a-wildflower-patch": {
    published: "2026-07-28",
    updated: "2026-07-29",
    readingMinutes: 7,
    effort: "ongoing",
    benefits: ["Wildflowers", "Pollinators", "Seed heads"],
    relatedSlugs: ["best-flowers-for-bees-and-pollinators", "butterfly-friendly-garden", "chemical-free-garden"],
    sources: [
      { name: "Wildflower meadows", organisation: "Plantlife", url: "https://www.plantlife.org.uk/learning-resource/wildflower-meadows/" },
      commonSources.rhsWildlife,
    ],
  },
  "build-a-log-pile": {
    published: "2026-07-28",
    updated: "2026-07-29",
    readingMinutes: 5,
    effort: "quick",
    benefits: ["Dead wood", "Beetles", "Shelter"],
    relatedSlugs: ["build-a-log-and-leaf-habitat", "frog-friendly-space", "chemical-free-garden"],
    sources: [commonSources.wildlifeTrusts, commonSources.rhsWildlife],
  },
  "best-flowers-for-bees-and-pollinators": {
    published: "2026-07-29",
    updated: "2026-07-30",
    readingMinutes: 11,
    effort: "afternoon",
    benefits: ["Bees", "Hoverflies", "Long flowering"],
    relatedSlugs: ["garden-for-bees", "butterfly-friendly-garden", "grow-a-wildflower-patch"],
    sources: [
      { name: "Plants for pollinators", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/science/conservation-biodiversity/wildlife/plants-for-pollinators" },
      commonSources.wildlifeTrusts,
    ],
  },
  "build-a-log-and-leaf-habitat": {
    published: "2026-07-29",
    updated: "2026-07-29",
    readingMinutes: 7,
    effort: "quick",
    benefits: ["Dead wood", "Leaf litter", "Overwintering"],
    relatedSlugs: ["frog-friendly-space", "chemical-free-garden", "welcome-hedgehogs"],
    sources: [commonSources.wildlifeTrusts, commonSources.rhsWildlife],
  },
  "create-a-wildlife-friendly-balcony": {
    published: "2026-07-29",
    updated: "2026-07-30",
    readingMinutes: 12,
    effort: "weekend",
    benefits: ["Balconies", "Containers", "Pollinators"],
    relatedSlugs: ["make-an-insect-drinking-station", "collect-and-use-rainwater", "best-flowers-for-bees-and-pollinators"],
    sources: [
      { name: "Pots and container habitats", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/wildlife/pots-and-container-habitats" },
      { name: "Water habitats", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/wildlife/water-habitats" },
    ],
  },

  "leave-seed-heads-over-winter": {
    published: "2026-07-29",
    updated: "2026-07-29",
    readingMinutes: 7,
    effort: "quick",
    benefits: ["Winter food", "Insect shelter", "Seed heads"],
    relatedSlugs: ["help-garden-birds", "butterfly-friendly-garden", "create-a-leaf-litter-corner"],
    sources: [
      { name: "Spectacular seedheads for winter interest and wildlife", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/garden-inspiration/seasonal/winter-seedheads" },
      { name: "Wildlife: helping through winter", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/wildlife/helping-through-winter" },
    ],
  },
  "create-a-leaf-litter-corner": {
    published: "2026-07-29",
    updated: "2026-07-29",
    readingMinutes: 8,
    effort: "quick",
    benefits: ["Leaf litter", "Soil life", "Shelter"],
    relatedSlugs: ["create-a-wildlife-corridor", "build-a-log-and-leaf-habitat", "welcome-hedgehogs"],
    sources: [
      { name: "Wildlife in gardens", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/wildlife/in-gardens" },
      { name: "Ideas on attracting wildlife to your garden", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/wildlife/in-the-garden/encourage-wildlife-to-your-garden" },
    ],
  },
  "make-an-insect-drinking-station": {
    published: "2026-07-29",
    updated: "2026-07-29",
    readingMinutes: 6,
    effort: "quick",
    benefits: ["Bees", "Clean water", "Pollinators"],
    relatedSlugs: ["garden-for-bees", "best-flowers-for-bees-and-pollinators", "create-a-wildlife-friendly-balcony"],
    sources: [
      { name: "How gardeners can help pollinators", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/wildlife/help-our-declining-bees-and-other-pollinators" },
      { name: "Water habitats", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/wildlife/water-habitats" },
    ],
  },
  "start-a-no-mow-lawn": {
    published: "2026-07-29",
    updated: "2026-07-30",
    readingMinutes: 12,
    effort: "ongoing",
    benefits: ["Long grass", "Wildflowers", "Microhabitats"],
    relatedSlugs: ["grow-a-wildflower-patch", "butterfly-friendly-garden", "create-a-wildlife-corridor"],
    sources: [
      { name: "Plantlife's No Mow Lawn Guide", organisation: "Plantlife", url: "https://www.plantlife.org.uk/campaigns/your-no-mow-may-lawn-guide/" },
      { name: "Wildlife in gardens", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/wildlife/in-gardens" },
    ],
  },
  "collect-and-use-rainwater": {
    published: "2026-07-29",
    updated: "2026-07-29",
    readingMinutes: 8,
    effort: "afternoon",
    benefits: ["Rainwater", "Water saving", "Resilience"],
    relatedSlugs: ["make-a-mini-wildlife-pond", "mulch-to-reduce-watering", "create-a-wildlife-friendly-balcony"],
    sources: [
      { name: "Collecting, storing and reusing water", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/garden-jobs/water-collecting-storing-and-using" },
      { name: "Use less water in the garden", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/science/gardening-in-a-changing-world/water-use-in-gardens/" },
    ],
  },
  "mulch-to-reduce-watering": {
    published: "2026-07-29",
    updated: "2026-07-29",
    readingMinutes: 7,
    effort: "quick",
    benefits: ["Moisture", "Soil", "Fewer weeds"],
    relatedSlugs: ["collect-and-use-rainwater", "chemical-free-garden", "create-a-wildlife-corridor"],
    sources: [
      { name: "Mulches and mulching", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/soil-composts-mulches/mulch" },
      { name: "How to mulch with organic matter", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/soil-composts-mulches/how-to-mulch-with-organic-matter" },
    ],
  },
  "create-a-wildlife-corridor": {
    published: "2026-07-29",
    updated: "2026-07-29",
    readingMinutes: 9,
    effort: "weekend",
    benefits: ["Connectivity", "Cover", "Safe movement"],
    relatedSlugs: ["plant-a-wildlife-hedge", "make-a-hedgehog-highway", "create-a-leaf-litter-corner"],
    sources: [
      { name: "Hedge and woodland edge habitats", organisation: "Royal Horticultural Society", url: "https://www.rhs.org.uk/wildlife/hedge-and-woodland-edge-habitats" },
      { name: "Connectivity and community in wildlife gardening", organisation: "The Wildlife Trusts", url: "https://www.wildlifetrusts.org/news/connectivity-and-community-buzzwords-behind-wildlife-gardening-reboot" },
    ],
  },
  "plant-a-wildlife-hedge": {
    published: "2026-07-28",
    updated: "2026-07-29",
    readingMinutes: 7,
    effort: "weekend",
    benefits: ["Nesting", "Berries", "Connected cover"],
    relatedSlugs: ["help-garden-birds", "make-a-hedgehog-highway", "butterfly-friendly-garden"],
    sources: [commonSources.rhsWildlife, commonSources.wildlifeTrusts],
  },
  "chemical-free-garden": {
    published: "2026-07-28",
    updated: "2026-07-30",
    readingMinutes: 11,
    effort: "ongoing",
    benefits: ["Food web", "Healthy soil", "Natural predators"],
    relatedSlugs: ["garden-for-bees", "help-garden-birds", "frog-friendly-space"],
    sources: [commonSources.rhsWildlife, commonSources.wildlifeTrusts],
  },
  "make-a-hedgehog-highway": {
    published: "2026-07-28",
    updated: "2026-07-29",
    readingMinutes: 10,
    effort: "quick",
    benefits: ["Hedgehogs", "Connected habitat", "Safe movement"],
    relatedSlugs: ["welcome-hedgehogs", "build-a-log-and-leaf-habitat", "plant-a-wildlife-hedge"],
    sources: [
      { name: "Link your garden", organisation: "Hedgehog Street", url: "https://www.hedgehogstreet.org/help-hedgehogs/link-your-garden/" },
      commonSources.wildlifeTrusts,
    ],
  },
};

const defaultMeta: GuideMeta = {
  published: "2026-07-28",
  updated: "2026-07-29",
  readingMinutes: 6,
  effort: "afternoon",
  benefits: ["Wildlife", "Habitat", "Garden care"],
  relatedSlugs: [],
  sources: [commonSources.rhsWildlife, commonSources.wildlifeTrusts],
};

export function getGuideMeta(slug: string): GuideMeta {
  return guideMeta[slug] ?? defaultMeta;
}

export function formatGuideDate(value: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}
