export type SpaceType = "garden" | "courtyard" | "balcony" | "window-boxes";
export type SpaceSize = "tiny" | "small" | "medium" | "large";
export type LightLevel = "sun" | "partial-shade" | "shade";
export type Tenure = "renting" | "owning";
export type WeeklyTime = "15-minutes" | "one-hour" | "two-hours" | "half-day";
export type WildlifeInterest = "birds" | "bees" | "butterflies" | "hedgehogs" | "frogs" | "insects";
export type HabitatId = "water" | "flowers" | "shelter" | "access" | "chemicals" | "structure" | "wild" | "safe";

export type PlannerProfile = {
  spaceType: SpaceType;
  size: SpaceSize;
  light: LightLevel;
  tenure: Tenure;
  children: boolean;
  pets: boolean;
  weeklyTime: WeeklyTime;
  interests: WildlifeInterest[];
  month: number;
};

export type HabitatLayer = {
  id: HabitatId;
  title: string;
  copy: string;
};

export type PlannedAction = {
  id: HabitatId;
  title: string;
  detail: string;
  href: string;
  time: string;
  cost: string;
  why: string;
  safety?: string;
  priority: number;
};

export type ScoreRecord = { date: string; score: number; label: string };

export type PlannerJourneyState = {
  version: 2;
  profile: PlannerProfile;
  profileReady: boolean;
  answers: Partial<Record<HabitatId, boolean>>;
  activePlanIds: HabitatId[];
  completedTasks: HabitatId[];
  initialScore: number | null;
  history: ScoreRecord[];
};

export const PLANNER_STORAGE_KEY = "mwg-garden-planner";
export const PLANNER_EVENT = "mwg:planner-changed";

export const habitatLayers: HabitatLayer[] = [
  { id: "water", title: "Reliable water", copy: "A pond, bird bath or shallow drinking dish is available and kept safe." },
  { id: "flowers", title: "Flowers through the seasons", copy: "Something useful is flowering in spring, summer and autumn." },
  { id: "shelter", title: "Quiet shelter", copy: "Logs, leaves, dense planting or another undisturbed refuge is available." },
  { id: "access", title: "Connected access", copy: "Wildlife can move into, out of and through the space without obvious traps." },
  { id: "chemicals", title: "Gentle garden care", copy: "Pesticides are avoided and a little plant damage is accepted as part of the food web." },
  { id: "structure", title: "Layers of planting", copy: "The space includes low cover, flowers and taller shrubs, climbers or trees." },
  { id: "wild", title: "A deliberately untidy corner", copy: "At least one small area keeps seed heads, leaf litter or longer growth." },
  { id: "safe", title: "Hazards checked", copy: "Water, netting, drains, tools and seasonal jobs are managed with wildlife in mind." },
];

export const defaultProfile = (month = new Date().getMonth() + 1): PlannerProfile => ({
  spaceType: "garden",
  size: "small",
  light: "partial-shade",
  tenure: "owning",
  children: false,
  pets: false,
  weeklyTime: "one-hour",
  interests: ["birds", "bees"],
  month,
});

export function createInitialPlannerState(): PlannerJourneyState {
  return {
    version: 2,
    profile: defaultProfile(),
    profileReady: false,
    answers: {},
    activePlanIds: [],
    completedTasks: [],
    initialScore: null,
    history: [],
  };
}

export function restorePlannerState(value: string): PlannerJourneyState {
  const parsed = JSON.parse(value) as Partial<PlannerJourneyState> & { version?: number };
  if (parsed.version === 2 && parsed.profile) {
    return { ...createInitialPlannerState(), ...parsed, version: 2 };
  }

  const answers = parsed as Partial<Record<HabitatId, boolean>>;
  return { ...createInitialPlannerState(), answers };
}

const interestLayers: Record<WildlifeInterest, HabitatId[]> = {
  birds: ["water", "shelter", "structure", "safe"],
  bees: ["flowers", "water", "chemicals", "wild"],
  butterflies: ["flowers", "wild", "structure", "chemicals"],
  hedgehogs: ["access", "shelter", "safe", "chemicals"],
  frogs: ["water", "shelter", "safe", "access"],
  insects: ["shelter", "flowers", "wild", "chemicals"],
};

const basePriority: Record<HabitatId, number> = {
  safe: 90,
  water: 82,
  flowers: 78,
  shelter: 72,
  chemicals: 68,
  structure: 62,
  access: 58,
  wild: 54,
};

export function habitatScore(answers: Partial<Record<HabitatId, boolean>>) {
  const complete = habitatLayers.filter((layer) => answers[layer.id]).length;
  return Math.round((complete / habitatLayers.length) * 100);
}

export function seasonForMonth(month: number) {
  if ([3, 4, 5].includes(month)) return "spring";
  if ([6, 7, 8].includes(month)) return "summer";
  if ([9, 10, 11].includes(month)) return "autumn";
  return "winter";
}

function safetyFor(id: HabitatId, profile: PlannerProfile) {
  if (id === "water" && (profile.children || profile.pets)) {
    return "Use a raised or very shallow container, add stones as escape routes, and position it where children and pets are supervised.";
  }
  if (id === "shelter" && profile.pets) {
    return "Place shelter where pets cannot disturb it and avoid loose netting nearby.";
  }
  if (id === "access" && profile.pets) {
    return "Check that any boundary opening cannot let your pet escape before creating a wildlife route.";
  }
  if (id === "safe" && profile.children) {
    return "Store tools and chemicals securely, supervise water, and check bonfires before lighting.";
  }
  return undefined;
}

function actionFor(id: HabitatId, profile: PlannerProfile): Omit<PlannedAction, "priority"> {
  const compact = profile.spaceType === "balcony" || profile.spaceType === "window-boxes" || profile.size === "tiny";
  const portable = profile.tenure === "renting";
  const shade = profile.light === "shade";

  const actions: Record<HabitatId, Omit<PlannedAction, "priority">> = {
    water: {
      id,
      title: compact ? "Add a shallow wildlife water station" : "Add a safe source of water",
      detail: compact
        ? "Set out a heavy shallow dish with stones, refresh it often and keep a clear landing edge."
        : "Start with a shallow drinking station or container pond with a broad escape route.",
      href: compact ? "/garden-guides/make-an-insect-drinking-station" : "/garden-guides/make-a-mini-wildlife-pond",
      time: "20–45 minutes",
      cost: "£0–£25",
      why: "Water supports several wildlife groups at once and gives a quick, visible improvement.",
      safety: safetyFor(id, profile),
    },
    flowers: {
      id,
      title: shade ? "Plant shade-tolerant nectar flowers" : compact ? "Plant one nectar-rich container" : "Extend your flowering season",
      detail: shade
        ? "Choose foxglove, pulmonaria, hardy geranium or other locally suitable plants for lower light."
        : "Fill the biggest suitable gap in spring, summer or autumn flowering using pesticide-free plants.",
      href: "/garden-guides/best-flowers-for-bees-and-pollinators",
      time: compact ? "45–90 minutes" : "1–3 hours",
      cost: compact ? "£12–£40" : "£20–£80",
      why: "Reliable nectar and pollen directly support bees, butterflies and the wider food web.",
    },
    shelter: {
      id,
      title: compact ? "Create a tucked-away mini refuge" : "Build a log and leaf refuge",
      detail: compact
        ? "Use a weatherproof pot, hollow stems and a small amount of dry leaf material in a quiet corner."
        : "Stack untreated logs and leaves in a shaded, undisturbed corner and let the base stay in contact with soil.",
      href: "/garden-guides/build-a-log-and-leaf-habitat",
      time: "30–90 minutes",
      cost: "£0–£20",
      why: "Shelter creates breeding, resting and overwintering space without demanding weekly maintenance.",
      safety: safetyFor(id, profile),
    },
    access: {
      id,
      title: compact ? "Create a connected flight corridor" : portable ? "Map a reversible wildlife route" : "Reconnect the garden boundary",
      detail: compact
        ? "Group pots from low to high so insects and birds can move between food, water and cover."
        : portable
          ? "Use movable pots and planting to connect cover without making permanent boundary changes."
          : "Check fences and dense planting, then create or improve a safe route between neighbouring habitat.",
      href: compact ? "/garden-guides/create-a-wildlife-corridor" : "/garden-guides/make-a-hedgehog-highway",
      time: "30 minutes–2 hours",
      cost: "£0–£35",
      why: "Connected habitat is more useful than isolated features and helps wildlife move safely.",
      safety: safetyFor(id, profile),
    },
    chemicals: {
      id,
      title: "Make this a chemical-free space",
      detail: "Stop routine pesticide use, tolerate some leaf damage and choose physical or wildlife-friendly controls.",
      href: "/garden-guides/chemical-free-garden",
      time: "15 minutes",
      cost: "£0",
      why: "Removing avoidable chemicals protects insects and the animals that feed on them.",
    },
    structure: {
      id,
      title: compact ? "Add height with pots or a climber" : portable ? "Build layers with movable planting" : "Add another planting layer",
      detail: compact
        ? "Combine ground-level cover, a medium pot and a supported climber without blocking light or access."
        : "Add low cover, flowers and one taller shrub or climber to create feeding and shelter at different heights.",
      href: compact ? "/garden-guides/create-a-wildlife-friendly-balcony" : "/garden-guides/plant-a-wildlife-hedge",
      time: "1–3 hours",
      cost: "£25–£100",
      why: "Layered planting provides more niches and keeps the space useful through changing seasons.",
    },
    wild: {
      id,
      title: compact ? "Leave one pot deliberately untidy" : "Set aside a wilder corner",
      detail: "Keep useful seed heads, stems or leaf litter in one defined area so it looks intentional and remains manageable.",
      href: seasonForMonth(profile.month) === "winter"
        ? "/garden-guides/leave-seed-heads-over-winter"
        : "/garden-guides/create-a-leaf-litter-corner",
      time: "15–30 minutes",
      cost: "£0",
      why: "A little retained material supplies food and overwintering habitat with almost no cost.",
    },
    safe: {
      id,
      title: "Complete a wildlife safety sweep",
      detail: "Check water escape routes, netting, drains, tools, slug pellets and any area used for mowing or bonfires.",
      href: "/wildlife-guides/frog-friendly-space",
      time: "20 minutes",
      cost: "£0–£10",
      why: "Removing hazards protects the wildlife already using the space before new features attract more.",
      safety: safetyFor(id, profile),
    },
  };

  return actions[id];
}

function priorityFor(id: HabitatId, profile: PlannerProfile) {
  let priority = basePriority[id];
  for (const interest of profile.interests) {
    if (interestLayers[interest].includes(id)) priority += 12;
  }

  const compact = profile.spaceType === "balcony" || profile.spaceType === "window-boxes";
  if (compact && ["water", "flowers", "structure"].includes(id)) priority += 12;
  if (compact && id === "access") priority -= 18;
  if (profile.tenure === "renting" && ["water", "flowers", "wild"].includes(id)) priority += 7;
  if (profile.tenure === "renting" && ["access", "structure"].includes(id)) priority -= 8;
  if (profile.light === "shade" && ["shelter", "wild"].includes(id)) priority += 8;
  if (profile.light === "shade" && id === "flowers") priority -= 3;
  if (profile.weeklyTime === "15-minutes" && ["safe", "chemicals", "wild"].includes(id)) priority += 14;
  if ((profile.children || profile.pets) && id === "safe") priority += 22;
  if (profile.interests.includes("frogs") && id === "water") priority += 16;
  if (seasonForMonth(profile.month) === "winter" && ["shelter", "wild", "safe"].includes(id)) priority += 10;
  if (seasonForMonth(profile.month) === "spring" && ["flowers", "water", "access"].includes(id)) priority += 8;
  return priority;
}

export function buildPersonalPlan(
  profile: PlannerProfile,
  answers: Partial<Record<HabitatId, boolean>>,
): PlannedAction[] {
  return habitatLayers
    .filter((layer) => !answers[layer.id])
    .map((layer) => ({
      ...actionFor(layer.id, profile),
      priority: priorityFor(layer.id, profile),
    }))
    .sort((a, b) => b.priority - a.priority || a.title.localeCompare(b.title));
}

export function safetyWarnings(profile: PlannerProfile, plan: PlannedAction[]) {
  const warnings = new Set(plan.flatMap((item) => item.safety ? [item.safety] : []));
  if (profile.pets) warnings.add("Check all suggested plants are suitable for the pets that use your space.");
  if (profile.children) warnings.add("Keep small parts, deep containers and gardening products out of children’s reach.");
  return Array.from(warnings);
}

export function profileSummary(profile: PlannerProfile) {
  const labels = {
    garden: "garden",
    courtyard: "courtyard",
    balcony: "balcony",
    "window-boxes": "window boxes",
    tiny: "tiny",
    small: "small",
    medium: "medium",
    large: "large",
    sun: "sunny",
    "partial-shade": "partly shaded",
    shade: "shaded",
  };
  return `${labels[profile.size]} ${labels[profile.light]} ${labels[profile.spaceType]}`;
}
