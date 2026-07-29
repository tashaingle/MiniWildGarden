export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  difficulty: "Easy" | "Weekend project" | "Ongoing";
  time: string;
  icon: string;
  colour: string;
  intro: string;
  steps: { title: string; text: string }[];
  tips: string[];
};

export const wildlifeGuides: Guide[] = [
  {
    slug: "help-garden-birds",
    title: "Help garden birds all year round",
    excerpt: "Food, water, nesting spaces and safer planting for the birds that visit your garden.",
    category: "Birds",
    difficulty: "Easy",
    time: "20 minutes",
    icon: "bird",
    colour: "sky",
    intro:
      "A wildlife-friendly garden does not need to be large or perfectly tidy. A reliable water source, natural food and a few sheltered spaces can make a meaningful difference to local birds.",
    steps: [
      {
        title: "Add clean water",
        text: "Use a shallow bird bath or plant saucer with a rough surface and gently sloping sides. Refresh it regularly and keep it where birds can see approaching cats.",
      },
      {
        title: "Offer varied food",
        text: "Different birds prefer different foods. Sunflower hearts, suitable seed mixes and fat-based foods in colder weather provide a useful range.",
      },
      {
        title: "Grow natural food",
        text: "Leave seed heads standing, grow berry-producing shrubs and allow some insects to thrive. Natural food supports birds while also strengthening the wider garden ecosystem.",
      },
      {
        title: "Create nesting options",
        text: "Dense shrubs, climbers and well-positioned nest boxes give birds places to shelter and raise young. Avoid cutting established nesting areas during the busiest breeding period.",
      },
    ],
    tips: [
      "Clean feeders and water containers regularly.",
      "Place feeding stations away from easy cat ambush points.",
      "Let fallen leaves remain beneath shrubs where safe to do so.",
    ],
  },
  {
    slug: "garden-for-bees",
    title: "Make your garden better for bees",
    excerpt: "Create a long flowering season and give pollinators somewhere to feed, drink and nest.",
    category: "Bees & pollinators",
    difficulty: "Easy",
    time: "An afternoon",
    icon: "bee",
    colour: "gold",
    intro:
      "The best bee gardens offer flowers across as much of the year as possible. Even a few pots, a window box or a small sunny border can become a valuable feeding stop.",
    steps: [
      {
        title: "Plan flowers by season",
        text: "Choose a mixture of early, mid-season and late-flowering plants so nectar and pollen are available for longer.",
      },
      {
        title: "Plant in generous groups",
        text: "Clusters of the same flower are easier for pollinators to find and allow them to feed efficiently without travelling far between blooms.",
      },
      {
        title: "Keep some bare ground",
        text: "Many solitary bees nest in soil. A small sunny patch of undisturbed, well-drained ground can be more useful than a decorative insect hotel.",
      },
      {
        title: "Avoid pesticides",
        text: "Let natural predators manage many garden pests and use physical controls where necessary. A wildlife garden works best when its food chain is left intact.",
      },
    ],
    tips: [
      "Single, open flowers are often easier to access than highly doubled varieties.",
      "Herbs such as thyme, chives and marjoram can be excellent when allowed to flower.",
      "A shallow water dish with stones gives insects safe landing points.",
    ],
  },
  {
    slug: "welcome-hedgehogs",
    title: "Welcome hedgehogs into your garden",
    excerpt: "Improve access, reduce common hazards and create quiet corners for shelter and feeding.",
    category: "Hedgehogs",
    difficulty: "Weekend project",
    time: "1–2 hours",
    icon: "hedgehog",
    colour: "earth",
    intro:
      "Hedgehogs need connected gardens. The most helpful change is often a small ground-level route between neighbouring outdoor spaces, followed by safe shelter and fewer hazards.",
    steps: [
      {
        title: "Create garden access",
        text: "A small gap at ground level can connect feeding and nesting areas across several gardens. Speak to neighbours before altering shared boundaries.",
      },
      {
        title: "Make hazards safer",
        text: "Cover deep drains, add escape routes to ponds and check long grass, compost piles and bonfire material carefully before disturbing them.",
      },
      {
        title: "Build a quiet shelter",
        text: "A purpose-built house or a secluded pile of logs and leaves can provide a protected resting place. Position it away from frequent foot traffic.",
      },
      {
        title: "Offer supplementary food",
        text: "A small amount of suitable meat-based cat or dog food and fresh water can help visitors, particularly when natural food is less abundant.",
      },
    ],
    tips: [
      "Never offer milk.",
      "Check netting is raised above ground level when not in use.",
      "Keep part of the garden naturally messy and undisturbed.",
    ],
  },
  {
    slug: "butterfly-friendly-garden",
    title: "Create a butterfly-friendly garden",
    excerpt: "Provide nectar for adults and food plants for caterpillars without needing a huge space.",
    category: "Butterflies & moths",
    difficulty: "Ongoing",
    time: "One growing season",
    icon: "butterfly",
    colour: "lilac",
    intro:
      "Supporting butterflies means thinking about the whole life cycle. Nectar flowers feed adults, while caterpillar food plants and undisturbed shelter help the next generation.",
    steps: [
      {
        title: "Choose a sunny area",
        text: "Most nectar-rich planting performs best in a warm, sheltered position where butterflies can bask and feed out of strong winds.",
      },
      {
        title: "Grow nectar plants",
        text: "Plant a succession of flowers with different shapes and heights, aiming for colour from spring through autumn.",
      },
      {
        title: "Include caterpillar plants",
        text: "Allow selected native grasses, nettles or other suitable host plants to grow in a managed corner where they will not be disturbed.",
      },
      {
        title: "Leave winter shelter",
        text: "Seed heads, hollow stems, leaf litter and dense evergreen growth provide places for insects to overwinter.",
      },
    ],
    tips: [
      "Avoid cutting every area of grass at the same time.",
      "Place flat stones in sunny spots for basking.",
      "Do not worry about a few chewed leaves—they show the habitat is being used.",
    ],
  },
  {
    slug: "frog-friendly-space",
    title: "Make space for frogs and pond life",
    excerpt: "Add water safely, provide cover and connect damp habitats around your garden.",
    category: "Frogs & pond life",
    difficulty: "Weekend project",
    time: "Half a day",
    icon: "frog",
    colour: "pond",
    intro:
      "A wildlife pond can be small. The key is to include shallow edges, varied depths, nearby cover and an easy route in and out for animals.",
    steps: [
      {
        title: "Choose the right position",
        text: "Aim for a spot with a mixture of sun and shade, away from large overhanging trees that could fill the water with leaves.",
      },
      {
        title: "Build a gentle edge",
        text: "Use stones, gravel or a planted shelf to form a gradual slope. Wildlife must be able to leave the water easily.",
      },
      {
        title: "Add suitable plants",
        text: "Use a mixture of submerged, floating and marginal pond plants. Avoid taking plants or animals from wild ponds.",
      },
      {
        title: "Create nearby cover",
        text: "Logs, rocks, damp planting and long grass give amphibians safe routes and cool hiding places beyond the pond itself.",
      },
    ],
    tips: [
      "Rainwater is preferable when available.",
      "Do not introduce fish to a small wildlife pond.",
      "Keep part of the edge open so the water remains visible and accessible.",
    ],
  },
  {
    slug: "wildlife-small-garden",
    title: "Help wildlife in a small garden",
    excerpt: "Use walls, pots, containers and vertical planting to turn limited space into useful habitat.",
    category: "Small spaces",
    difficulty: "Easy",
    time: "A weekend",
    icon: "garden",
    colour: "leaf",
    intro:
      "Small gardens can be surprisingly rich habitats. The goal is to create layers: flowers at ground level, climbing plants above, water nearby and small sheltered gaps between.",
    steps: [
      {
        title: "Grow upwards",
        text: "Use trellis, walls and fences for climbers that provide flowers, cover and nesting structure without taking much floor space.",
      },
      {
        title: "Fill pots with purpose",
        text: "Combine long-flowering plants, herbs and compact shrubs in containers. Group pots together to create a larger feeding area.",
      },
      {
        title: "Add mini water",
        text: "A watertight bowl or small container pond can support insects and provide drinking water when it includes stones and shallow landing places.",
      },
      {
        title: "Use every layer",
        text: "Include low ground cover, medium planting and one taller feature where possible. More structure creates more feeding and hiding opportunities.",
      },
    ],
    tips: [
      "Choose peat-free compost for containers.",
      "Avoid artificial grass where wildlife habitat is the priority.",
      "A single well-planted window box is still worthwhile.",
    ],
  },
];

export const gardenGuides: Guide[] = [
  {
    slug: "make-a-mini-wildlife-pond",
    title: "How to make a wildlife pond",
    excerpt: "Create safe shallow margins, varied planting and a dependable escape route in a pond that fits your garden.",
    category: "Water",
    difficulty: "Weekend project",
    time: "1–2 days",
    icon: "pond",
    colour: "pond",
    intro:
      "Adding water can transform a garden quickly. This expanded guide covers a preformed shell or flexible liner, safe access, rainwater, planting and gentle seasonal care.",
    steps: [
      {
        title: "Choose a useful position",
        text: "Aim for a mixture of sun and shade, avoid major tree roots and consider how children, visitors and pets will use the space.",
      },
      {
        title: "Create varied levels",
        text: "Include broad shallow margins, stable planting shelves and a secure route that reaches above the waterline.",
      },
      {
        title: "Fill and plant carefully",
        text: "Use rainwater where possible and add a modest mix of responsibly sourced submerged, floating and marginal plants.",
      },
      {
        title: "Let wildlife arrive",
        text: "Do not transfer fish, spawn, animals or water from another pond. Allow the habitat to establish in its own time.",
      },
    ],
    tips: [
      "Use washed gravel rather than ordinary garden soil.",
      "Keep at least one dependable shallow exit available at every water level.",
      "Disturb the pond as little as possible once it begins to establish.",
    ],
  },
  {
    slug: "grow-a-wildflower-patch",
    title: "Grow a wildflower patch",
    excerpt: "Convert a sunny piece of lawn or a container into a longer-lasting source of pollen and nectar.",
    category: "Planting",
    difficulty: "Ongoing",
    time: "One season",
    icon: "flower",
    colour: "meadow",
    intro:
      "Wildflower areas work best when the plants suit the soil and conditions. Reducing fertility, selecting an appropriate seed mix and managing the area after flowering are all important.",
    steps: [
      {
        title: "Assess the site",
        text: "Notice how much sun the area receives and whether the soil is dry, damp, fertile or poor. Choose plants that suit the real conditions.",
      },
      {
        title: "Prepare carefully",
        text: "Remove vigorous weeds and reduce competition from grass. Wildflowers generally establish more reliably in less fertile soil.",
      },
      {
        title: "Sow or plant",
        text: "Use a reputable mix appropriate to your region and soil, or plant plugs for more control over the final selection.",
      },
      {
        title: "Manage after flowering",
        text: "Allow seed to fall before cutting. Remove the cut material so nutrients do not build up and overwhelm less vigorous flowers.",
      },
    ],
    tips: [
      "Start small and expand after learning what thrives.",
      "Avoid mixes containing unknown or unsuitable ornamental species.",
      "Keep a mown edge or path to make the area look intentional.",
    ],
  },
  {
    slug: "build-a-log-pile",
    title: "Build a wildlife log pile",
    excerpt: "Create a low-maintenance hiding, feeding and overwintering space from natural materials.",
    category: "Shelter",
    difficulty: "Easy",
    time: "30 minutes",
    icon: "logs",
    colour: "earth",
    intro:
      "Dead wood supports fungi, beetles and many other small organisms. It also creates damp, sheltered spaces for amphibians and invertebrates.",
    steps: [
      {
        title: "Pick a quiet corner",
        text: "Choose somewhere partly shaded and close to other planting. Direct contact with the soil helps the natural decay process begin.",
      },
      {
        title: "Use varied material",
        text: "Mix thicker logs, smaller branches, bark and a little leaf litter. Different sizes create a wider range of gaps and moisture levels.",
      },
      {
        title: "Keep it stable",
        text: "Stack low and securely so the pile cannot roll or collapse onto children, pets or paths.",
      },
      {
        title: "Leave it alone",
        text: "Decay is the purpose. Avoid repeatedly moving or tidying the pile once wildlife may have started using it.",
      },
    ],
    tips: [
      "Use untreated wood.",
      "Partially bury one or two logs where practical.",
      "Add nearby ferns or ground cover for extra shelter.",
    ],
  },
  {
    slug: "plant-a-wildlife-hedge",
    title: "Plant a wildlife-friendly hedge",
    excerpt: "Combine shelter, flowers, berries and connected cover in one valuable garden feature.",
    category: "Planting",
    difficulty: "Weekend project",
    time: "A full day",
    icon: "hedge",
    colour: "leaf",
    intro:
      "A mixed hedge can feed insects, birds and mammals while providing nesting cover and a protected route through the garden.",
    steps: [
      {
        title: "Measure and plan",
        text: "Allow enough width for the hedge to mature without blocking paths or neighbouring access. Check for underground services before digging.",
      },
      {
        title: "Choose a varied mix",
        text: "Select several suitable native or wildlife-rich species rather than relying on a single plant. Variety extends flowering and fruiting times.",
      },
      {
        title: "Plant and mulch",
        text: "Plant during suitable conditions, water thoroughly and add an organic mulch while keeping it away from direct contact with stems.",
      },
      {
        title: "Trim thoughtfully",
        text: "Let the hedge develop some depth and density. Time major maintenance to avoid disturbing active nests and retain some berries where possible.",
      },
    ],
    tips: [
      "Include a ground-level gap where safe and suitable for local wildlife movement.",
      "Water young plants during extended dry periods.",
      "Let climbers weave through only where they will not overwhelm the hedge.",
    ],
  },
  {
    slug: "chemical-free-garden",
    title: "Move towards chemical-free gardening",
    excerpt: "Use prevention, healthy soil and natural predators to manage common garden problems.",
    category: "Garden care",
    difficulty: "Ongoing",
    time: "Gradual change",
    icon: "leaf",
    colour: "sage",
    intro:
      "A wildlife garden contains creatures that gardeners sometimes call pests. The aim is not to remove every problem, but to protect important plants while allowing a balanced food web to develop.",
    steps: [
      {
        title: "Build healthier plants",
        text: "Match plants to their conditions, improve soil structure and water well during establishment. Strong plants cope better with minor damage.",
      },
      {
        title: "Use physical barriers",
        text: "Fine mesh, collars, hand removal and protected propagation can prevent damage without introducing persistent chemicals.",
      },
      {
        title: "Welcome predators",
        text: "Ponds, dense planting, log piles and bird-friendly habitats encourage animals that naturally feed on many garden pests.",
      },
      {
        title: "Accept a little damage",
        text: "Chewed leaves are often evidence that your garden is supporting life. Intervene only where damage is likely to cause a genuine problem.",
      },
    ],
    tips: [
      "Identify the cause before treating a plant.",
      "Avoid blanket treatments.",
      "Rotate edible crops and maintain good airflow.",
    ],
  },
  {
    slug: "make-a-hedgehog-highway",
    title: "Make a hedgehog highway",
    excerpt: "Link neighbouring gardens with a small, safe ground-level route.",
    category: "Access",
    difficulty: "Weekend project",
    time: "1 hour",
    icon: "gate",
    colour: "earth",
    intro:
      "One garden rarely provides everything a hedgehog needs. Connected routes allow animals to move between feeding, nesting and resting places without relying on roads.",
    steps: [
      {
        title: "Speak to neighbours",
        text: "A connected route is most effective when several adjoining gardens take part. Agree a safe position before making changes.",
      },
      {
        title: "Choose the opening",
        text: "Select a discreet ground-level section of fence or boundary that does not weaken the structure or create a hazard for pets.",
      },
      {
        title: "Finish edges safely",
        text: "Remove sharp wire, splinters and projecting fixings. Ensure the route stays clear and cannot trap an animal.",
      },
      {
        title: "Mark and maintain it",
        text: "A small sign helps future residents or contractors understand the opening is intentional. Check it occasionally for obstruction.",
      },
    ],
    tips: [
      "Never cut a boundary without the owner's permission.",
      "Consider pet safety before creating access.",
      "Add nearby planting so the route does not open into a completely exposed area.",
    ],
  },
];

export const seasons = [
  {
    slug: "spring",
    name: "Spring",
    label: "March – May",
    icon: "sprout",
    intro: "Support nesting, early pollinators and emerging pond life while giving the garden time to wake naturally.",
    jobs: [
      "Put out clean water and keep bird feeders hygienic.",
      "Add early-flowering plants for newly active pollinators.",
      "Delay heavy cutting in areas that may contain nests.",
      "Create a small pond or refresh an existing water habitat.",
      "Leave some dandelions and lawn flowers in bloom.",
    ],
  },
  {
    slug: "summer",
    name: "Summer",
    label: "June – August",
    icon: "sun",
    intro: "Keep water available, let flowers continue and make space for wildlife during the hottest and busiest months.",
    jobs: [
      "Top up bird baths and ponds during dry weather.",
      "Let selected herbs and vegetables flower for pollinators.",
      "Mow different lawn areas at different times.",
      "Check netting and fruit protection cannot trap wildlife.",
      "Avoid disturbing dense shrubs and active nests.",
    ],
  },
  {
    slug: "autumn",
    name: "Autumn",
    label: "September – November",
    icon: "leaf",
    intro: "Turn fallen leaves, seed heads and woody material into shelter and food instead of clearing everything away.",
    jobs: [
      "Create leaf piles in quiet corners.",
      "Leave seed heads standing for birds and insects.",
      "Plant suitable hedges, shrubs and spring-flowering bulbs.",
      "Check bonfire piles thoroughly before lighting or moving them.",
      "Clean nest boxes after the breeding season when appropriate.",
    ],
  },
  {
    slug: "winter",
    name: "Winter",
    label: "December – February",
    icon: "snow",
    intro: "Provide reliable food, unfrozen water and undisturbed shelter while natural resources are harder to find.",
    jobs: [
      "Offer high-energy bird food and clean feeders regularly.",
      "Break surface ice gently without pouring boiling water into ponds.",
      "Avoid moving log piles, leaf heaps and dense shelter.",
      "Plan next year's flowering sequence and habitat projects.",
      "Plant bare-root hedging when conditions are suitable.",
    ],
  },
] as const;

export function getWildlifeGuide(slug: string) {
  return wildlifeGuides.find((guide) => guide.slug === slug);
}

export function getGardenGuide(slug: string) {
  return gardenGuides.find((guide) => guide.slug === slug);
}

export function getSeason(slug: string) {
  return seasons.find((season) => season.slug === slug);
}
