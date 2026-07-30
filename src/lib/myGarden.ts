import { seasonForMonth, type PlannerProfile } from "./planner";

export type SightingCategory = "bird" | "bee" | "butterfly" | "hedgehog" | "frog" | "insect" | "other";

export type WildlifeSighting = {
  id: string;
  species: string;
  category: SightingCategory;
  location: string;
  notes: string;
  observedAt: string;
  createdAt: string;
};

export type SeasonalFocus = {
  season: string;
  title: string;
  copy: string;
  tasks: string[];
  href: string;
};

export const SIGHTINGS_STORAGE_KEY = "mwg-wildlife-sightings";
export const SIGHTINGS_EVENT = "mwg:sightings-changed";

export function seasonalFocus(profile: PlannerProfile): SeasonalFocus {
  const season = seasonForMonth(profile.month);
  const focuses: Record<string, Omit<SeasonalFocus, "season">> = {
    spring: {
      title: "Make room for nesting and new growth",
      copy: "Work gently around active nests while building a long flowering season.",
      tasks: ["Refresh shallow water", "Add an early nectar plant", "Check before pruning"],
      href: "/seasonal-advice/spring",
    },
    summer: {
      title: "Keep water and flowers reliable",
      copy: "Warm, dry spells make consistent water and pesticide-free flowers especially valuable.",
      tasks: ["Top up water in the morning", "Deadhead selectively", "Leave some seed to form"],
      href: "/seasonal-advice/summer",
    },
    autumn: {
      title: "Turn fading growth into shelter",
      copy: "Retain useful stems, leaves and seed heads while preparing water and shelter for colder weather.",
      tasks: ["Make a leaf corner", "Clean feeders and water", "Plant for spring"],
      href: "/seasonal-advice/autumn",
    },
    winter: {
      title: "Protect shelter and stored food",
      copy: "Small, quiet actions matter most while wildlife relies on cover, water and remaining seed.",
      tasks: ["Keep water ice-free", "Leave seed heads standing", "Avoid disturbing refuges"],
      href: "/seasonal-advice/winter",
    },
  };

  return { season, ...focuses[season] };
}

export function sortSightings(sightings: WildlifeSighting[]) {
  return [...sightings].sort((a, b) => b.observedAt.localeCompare(a.observedAt) || b.createdAt.localeCompare(a.createdAt));
}
