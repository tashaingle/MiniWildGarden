export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  difficulty: "Easy" | "Weekend project" | "Ongoing";
  time: string;
  icon: string;
  colour: string;
  /** Short display lead shown large in the opening */
  intro: string;
  /** Optional body copy under the lead; keeps long explanations off the display type */
  introDetail?: string;
  steps: { title: string; text: string }[];
  tips: string[];
  images?: {
    src: string;
    alt: string;
    focal?: string;
  }[];
  /** Optional richer fields used by the shared guide template */
  cost?: string;
  bestSeason?: string;
  materials?: string[];
  mistakes?: string[];
  plants?: { name: string; note: string }[];
  faqs?: { question: string; answer: string }[];
  nextStep?: { label: string; href: string; text: string };
};

export const wildlifeGuides: Guide[] = [
  {
    slug: "help-garden-birds",
    title: "Help garden birds safely",
    excerpt: "Cleaner feeders, fresh water, seasonal food and better shelter for the birds sharing your garden.",
    category: "Birds",
    difficulty: "Easy",
    time: "15 minutes weekly",
    icon: "bird",
    colour: "sky",
    intro:
      "Food and water can draw many birds into one place, which makes hygiene as important as generosity. A clean, seasonal feeding routine works best alongside natural food, shelter and nesting habitat.",
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
    intro: "The best bee gardens offer flowers across as much of the year as possible.",
    introDetail:
      "Even a few pots, a window box or a small sunny border can become a valuable feeding stop. Think in seasons, not single plants: early spring nectar matters as much as a colourful summer border, and a little bare soil or hollow stem can be more useful than a decorative insect hotel.",
    cost: "Low, starts with a few pots",
    bestSeason: "Plant in spring or autumn",
    materials: [
      "3–6 nectar-rich plants suited to your light and soil",
      "Peat-free compost and containers or a prepared border pocket",
      "A shallow dish or plant saucer and a few stones",
      "Optional: mulch for beds, or a sunny strip of bare ground for solitary bees",
    ],
    mistakes: [
      "Buying only double flowers that hide nectar and pollen",
      "Planting one of everything instead of useful clumps",
      "Clearing every stem and bare patch in autumn",
      "Using pesticides that remove bees and their food chain together",
    ],
    steps: [
      {
        title: "Plan flowers by season",
        text: "Choose a mixture of early, mid-season and late-flowering plants so nectar and pollen are available for longer. Aim for something useful from March through October rather than a single midsummer peak.",
      },
      {
        title: "Plant in generous groups",
        text: "Clusters of the same flower are easier for pollinators to find and allow them to feed efficiently without travelling far between blooms. Three to five of one plant is usually stronger than five different singles.",
      },
      {
        title: "Keep some bare ground",
        text: "Many solitary bees nest in soil. A small sunny patch of undisturbed, well-drained ground can be more useful than a decorative insect hotel. Leave a few hollow stems standing over winter too.",
      },
      {
        title: "Avoid pesticides",
        text: "Let natural predators manage many garden pests and use physical controls where necessary. A wildlife garden works best when its food chain is left intact, including the insects people sometimes call pests.",
      },
    ],
    tips: [
      "Single, open flowers are often easier to access than highly doubled varieties.",
      "Herbs such as thyme, chives and marjoram can be excellent when allowed to flower.",
      "A shallow water dish with stones gives insects safe landing points.",
      "Place pots where you will actually water them. Drought-stressed plants feed bees less well.",
    ],
    plants: [
      { name: "Lavender", note: "Long summer nectar for many bees; ideal in sunny, free-draining pots or borders." },
      { name: "Marjoram / oregano", note: "Compact, wildlife-rich herb that thrives in containers and dry edges." },
      { name: "Catmint (Nepeta)", note: "Soft blue spikes for months; easy in borders and larger pots." },
      { name: "Pulmonaria", note: "Early spring nectar when little else is open; good in light shade." },
      { name: "Sedum / Hylotelephium", note: "Late-season landing pads for bees and butterflies in autumn." },
      { name: "Chives", note: "Edible, container-friendly and excellent when allowed to flower." },
    ],
    faqs: [
      {
        question: "Do I need a large garden to help bees?",
        answer: "No. Window boxes, hanging baskets and a sunny cluster of pots can all provide nectar and pollen. Consistency and a long flowering season matter more than size.",
      },
      {
        question: "Are insect hotels always useful?",
        answer: "Some are, but many sold ready-made are poorly designed. Bare sunny soil, hollow stems and undisturbed corners often help solitary bees more. If you use a hotel, keep it clean, dry and appropriately sized.",
      },
      {
        question: "Should I plant only natives?",
        answer: "Native plants are valuable, especially for some specialist insects, but many non-invasive garden plants also feed bees well. Focus on open flowers, a long season and chemical-free care.",
      },
    ],
    images: [
      { src: "/images/bee-guide/seasonal-flowers.webp", alt: "A mixed border of seasonal flowers providing nectar for bees", focal: "50% 50%" },
      { src: "/images/bee-guide/pollinator-border.webp", alt: "A dense pollinator border planted in generous groups", focal: "50% 52%" },
      { src: "/images/bee-guide/container-planting.webp", alt: "Bee-friendly plants growing in containers on a sunny patio", focal: "50% 50%" },
      { src: "/images/bee-guide/bee-water-dish.webp", alt: "A shallow water dish with stones for insects to drink safely", focal: "50% 48%" },
    ],
    nextStep: {
      label: "Choose the best flowers next",
      href: "/garden-guides/best-flowers-for-bees-and-pollinators",
      text: "Build a simple plant shortlist for borders, pots and window boxes that keeps nectar coming from spring into autumn.",
    },
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
    intro: "Hedgehogs need connected gardens more than perfect features.",
    introDetail:
      "The most helpful change is often a small ground-level route between neighbouring outdoor spaces, followed by safe shelter and fewer hazards. Food can help, but only after access and safety are sorted.",
    cost: "Low to moderate",
    bestSeason: "Any time; highways help year-round",
    materials: [
      "Permission from neighbours for any shared boundary change",
      "Saw or tool suitable for a 13 cm by 13 cm fence opening if needed",
      "Logs, leaves or a purpose-built hedgehog house for shelter",
      "Meat-based cat or dog food and a shallow water dish if feeding",
      "Optional: hedgehog highway sign so the gap is not blocked later",
    ],
    mistakes: [
      "Offering milk, bread or large quantities of food",
      "Creating a gap that leads into a road, uncovered drain or busy pet run",
      "Cutting a shared fence without agreement",
      "Tidying every leaf pile and compost heap before checking for wildlife",
    ],
    steps: [
      {
        title: "Create garden access",
        text: "A small gap at ground level can connect feeding and nesting areas across several gardens. Speak to neighbours before altering shared boundaries. A finished opening about 13 cm by 13 cm is widely recommended for hedgehogs.",
      },
      {
        title: "Make hazards safer",
        text: "Cover deep drains, add escape routes to ponds and check long grass, compost piles and bonfire material carefully before disturbing them. Raise netting and store slug pellets, if any are still present, well out of reach.",
      },
      {
        title: "Build a quiet shelter",
        text: "A purpose-built house or a secluded pile of logs and leaves can provide a protected resting place. Position it away from frequent foot traffic, in a shady, quiet corner with nearby cover.",
      },
      {
        title: "Offer supplementary food carefully",
        text: "A small amount of suitable meat-based cat or dog food and fresh water can help visitors, particularly when natural food is less abundant. Put food out in the evening, remove leftovers in the morning and never offer milk.",
      },
    ],
    tips: [
      "Never offer milk.",
      "Check netting is raised above ground level when not in use.",
      "Keep part of the garden naturally messy and undisturbed.",
      "If you find a poorly or injured hedgehog, contact a local rescue rather than trying to treat it yourself.",
    ],
    plants: [
      { name: "Dense shrubs and hedges", note: "Provide cover for night-time routes along boundaries." },
      { name: "Long grass edge", note: "Hunting ground for beetles and other invertebrate prey." },
      { name: "Log and leaf piles", note: "Daytime refuge and overwintering structure." },
      { name: "Berrying native shrubs", note: "Support the wider food web that hedgehogs rely on." },
    ],
    faqs: [
      {
        question: "Will a hedgehog house guarantee visitors?",
        answer: "No. Access between gardens and a reduction in hazards usually matter more. A house helps once hedgehogs can reach your space safely.",
      },
      {
        question: "Is it safe if I have dogs?",
        answer: "Some dogs will investigate hedgehogs. Keep feeding and shelter areas quiet, supervise pets at dusk and avoid creating access into a space where wildlife cannot escape disturbance.",
      },
      {
        question: "What size should a highway opening be?",
        answer: "About 13 cm by 13 cm is the standard guidance. Finish edges smoothly so nothing can snag or trap an animal.",
      },
    ],
    images: [
      { src: "/images/hedgehog-guide/fence-before.webp", alt: "A closed wooden garden fence before a hedgehog access gap is made", focal: "50% 50%" },
      { src: "/images/hedgehog-guide/measure-opening.webp", alt: "Measuring a ground-level opening in a garden fence", focal: "50% 52%" },
      { src: "/images/hedgehog-guide/cut-opening.webp", alt: "A finished ground-level opening cut into a wooden fence", focal: "50% 50%" },
      { src: "/images/hedgehog-guide/hedgehog-through-fence.webp", alt: "A hedgehog using a finished highway opening under a fence", focal: "50% 54%" },
    ],
    nextStep: {
      label: "Make the highway properly",
      href: "/garden-guides/make-a-hedgehog-highway",
      text: "Follow the detailed cut, finish and neighbour steps so the route is safe and lasting.",
    },
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
      "Do not worry about a few chewed leaves. They show the habitat is being used.",
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
    slug: "best-flowers-for-bees-and-pollinators",
    title: "Best flowers for bees and pollinators",
    excerpt: "Choose flowers that keep nectar and pollen available from spring into autumn, whether you have a border, a few pots or a window box.",
    category: "Pollinators",
    difficulty: "Easy",
    time: "An afternoon",
    icon: "flower",
    colour: "gold",
    intro: "The most useful bee planting offers a long season of open flowers rather than a single short burst.",
    introDetail:
      "Repeating a few reliable plants across borders and containers helps pollinators feed more efficiently and makes even a small space feel generous. You do not need rare plants. You need the right shapes, staggered flowering and gentle care.",
    cost: "Low to moderate",
    bestSeason: "Plant spring or autumn; enjoy all year",
    materials: [
      "A shortlist of early, mid and late flowering plants",
      "Peat-free compost and mulch for beds or containers",
      "Trowel, watering can and plant labels if helpful",
      "Shallow water dish with stones",
    ],
    mistakes: [
      "Filling the whole space with one short summer flush",
      "Choosing only highly double ornamental flowers",
      "Scattering single plants so bees waste energy between blooms",
      "Deadheading every stem so nothing remains for late visitors or seed-eating birds",
    ],
    steps: [
      {
        title: "Plan a long flowering season",
        text: "Combine early, mid-season and late flowers so pollinators can find food for as much of the year as possible. Crocus, primrose and pulmonaria help in spring, while lavender, cosmos, echinacea, sedum and flowering herbs extend the season.",
      },
      {
        title: "Choose open, nectar-rich flowers",
        text: "Single flowers are usually easier for bees and hoverflies to access than tightly doubled blooms. Favour plants with visible centres and avoid choosing purely for show if the pollen is hidden or difficult to reach.",
      },
      {
        title: "Plant in drifts and repeat in pots",
        text: "Clumps of the same flower are easier for pollinators to spot and work quickly. A border can use generous drifts, while balconies and patios can repeat the same bee-friendly plants across several containers for a stronger effect.",
      },
      {
        title: "Add water and garden gently",
        text: "A shallow dish with stones gives insects a safe place to drink. Avoid pesticides, let herbs flower and leave a little bare ground where practical because many solitary bees prefer simple nesting opportunities close to food.",
      },
    ],
    tips: [
      "Lavender, marjoram, catmint, salvia, thyme and chives are strong container choices.",
      "Deadhead some plants for longer flowering but leave a few seed heads standing later in the year.",
      "Try to keep something in flower from March to October.",
      "Buy peat-free and check labels for pollinator-friendly cultivars where available.",
    ],
    plants: [
      { name: "Early: crocus & pulmonaria", note: "Help emerging bees when little else is open." },
      { name: "Spring–summer: alliums & catmint", note: "Bold landing pads and long flowering in sunny ground." },
      { name: "Summer: lavender & salvia", note: "Reliable nectar plants for borders and pots." },
      { name: "Herbs: thyme, marjoram, chives", note: "Edible, compact and excellent for small spaces." },
      { name: "Mid–late: echinacea & cosmos", note: "Open centres that many bees and butterflies can use." },
      { name: "Autumn: sedum & Michaelmas daisy", note: "Extend the season when summer borders fade." },
    ],
    faqs: [
      {
        question: "What if my garden is shady?",
        answer: "Choose plants that suit shade rather than forcing sun lovers. Foxgloves, pulmonaria, geraniums suited to shade and flowering shrubs can still help, and a single sunny pot cluster may become your main nectar patch.",
      },
      {
        question: "Can I use bedding plants?",
        answer: "Some single-flowered bedding helps, but many highly bred varieties offer little nectar. Mix a few reliable perennials and herbs with seasonal colour so the garden is not empty once bedding is removed.",
      },
    ],
    images: [
      { src: "/images/bee-guide/flower-border-hero.webp", alt: "A flower-filled border of lavender, cosmos and echinacea for bees", focal: "50% 50%" },
      { src: "/images/bee-guide/pollinator-border.webp", alt: "Pollinator-friendly flowers planted in generous drifts", focal: "50% 52%" },
      { src: "/images/bee-guide/container-planting.webp", alt: "Repeated bee-friendly plants in patio containers", focal: "50% 50%" },
      { src: "/images/bee-guide/bee-water-dish.webp", alt: "Insects using a shallow water dish with landing stones", focal: "50% 48%" },
    ],
    nextStep: {
      label: "Garden more gently",
      href: "/garden-guides/chemical-free-garden",
      text: "Protect the food web that makes pollinator planting work, without blanket sprays or panic treatments.",
    },
  },
  {
    slug: "build-a-log-and-leaf-habitat",
    title: "Build a log and leaf habitat",
    excerpt: "Turn cut branches, bark and fallen leaves into a cool, sheltered refuge for beetles, spiders, amphibians and more.",
    category: "Shelter",
    difficulty: "Easy",
    time: "45 minutes",
    icon: "logs",
    colour: "earth",
    intro: "A good habitat pile is more than garden leftovers.",
    introDetail:
      "Different timber sizes, pockets of leaf litter and direct contact with the ground create moisture, darkness and slow decay. Many invertebrates, amphibians and overwintering insects depend on exactly that quiet mess.",
    cost: "Free if you already have prunings",
    bestSeason: "Any time; top up in autumn",
    materials: [
      "A few thicker untreated logs or branch lengths",
      "Smaller sticks, twigs and bark pieces",
      "Dry leaves or leaf mould",
      "Optional: a little soil or compost to settle the base",
      "A shaded corner that can stay undisturbed",
    ],
    mistakes: [
      "Using treated timber, painted wood or glossy bark chips only",
      "Building a tall, unstable stack near paths or play areas",
      "Turning the pile every week to keep it tidy",
      "Placing it in full sun where it dries out completely",
    ],
    steps: [
      {
        title: "Choose a shaded or semi-shaded corner",
        text: "Pick a calm spot that will not need frequent access and can stay a little damp. Near shrubs, a fence line or the back of a border is often ideal because wildlife can move in and out under cover.",
      },
      {
        title: "Start with larger logs on the soil",
        text: "Lay the thickest logs directly onto the ground so fungi, beetles and other decomposers can begin their work. Vary the spacing rather than making the stack too neat, because uneven gaps create more usable crevices.",
      },
      {
        title: "Layer in sticks, bark and leaf litter",
        text: "Add smaller branches, twigs, bark and handfuls of dry leaves between the larger pieces. This creates pockets with different moisture levels and helps the pile shelter everything from insects to frogs and overwintering pollinators.",
      },
      {
        title: "Cap it with leaves and leave it undisturbed",
        text: "Top the structure with extra leaves or loose brushwood to hold shade and slow the drying wind. Once built, disturb it as little as possible and resist the urge to tidy because the most useful piles gradually settle and soften over time.",
      },
    ],
    tips: [
      "Untreated wood is best.",
      "Keep the structure low and stable if children or pets use the area.",
      "Top up leaves in autumn instead of rebuilding the whole habitat.",
      "A pile connected to planting is more useful than an isolated stack on open paving.",
    ],
    plants: [
      { name: "Ferns and ivy nearby", note: "Hold shade and humidity around the pile." },
      { name: "Low ground cover", note: "Creates a safer approach route for amphibians and invertebrates." },
      { name: "Shrubs or a fence line", note: "Shelters the habitat from drying wind." },
    ],
    faqs: [
      {
        question: "Will it attract pests?",
        answer: "It will attract invertebrates, which is the point. Place it away from house walls if you are worried about damp, and keep a clear path edge so the pile does not look abandoned.",
      },
      {
        question: "Can I use a bag of decorative bark instead?",
        answer: "A mulch layer helps soil, but a habitat pile needs mixed sizes of wood and leaf litter with gaps. Fine bark alone is not a substitute.",
      },
    ],
    images: [
      { src: "/images/log-guide/shady-corner.webp", alt: "A shaded garden corner chosen for a wildlife habitat pile", focal: "50% 50%" },
      { src: "/images/log-guide/logs-materials.webp", alt: "Logs, sticks and bark ready to build a habitat pile", focal: "50% 52%" },
      { src: "/images/log-guide/building-habitat.webp", alt: "Layering branches and leaves into a wildlife habitat structure", focal: "50% 50%" },
      { src: "/images/log-guide/finished-habitat.webp", alt: "A finished log and leaf habitat settled into a garden border", focal: "50% 52%" },
    ],
    nextStep: {
      label: "Connect it to water or leaves",
      href: "/garden-guides/create-a-leaf-litter-corner",
      text: "Extend shelter across the garden with a leaf-litter corner or damp route toward any water you add later.",
    },
  },
  {
    slug: "create-a-wildlife-friendly-balcony",
    title: "Transform a balcony for wildlife",
    excerpt: "Turn a bare balcony into a layered mini habitat with flowers, shelter, safe water and useful vertical planting.",
    category: "Small spaces",
    difficulty: "Weekend project",
    time: "A weekend",
    icon: "garden",
    colour: "leaf",
    intro: "A balcony cannot replace a full garden, but it can become a valuable stepping stone through a built-up area.",
    introDetail:
      "The strongest designs combine nectar-rich planting, shallow water, shelter and a few different heights without making the space difficult to use or maintain. Start with safety and weight limits, then add layers you can actually water and keep alive.",
    cost: "Moderate (pots and compost add up)",
    bestSeason: "Spring planting is easiest",
    materials: [
      "Stable pots or troughs suited to your balcony weight limit",
      "Peat-free compost and a light mulch for container surfaces",
      "Nectar plants, one or two denser foliage plants, optional climber",
      "Shallow water dish with stones; optional self-watering inserts",
      "Secure fixings for hanging baskets or trellis if allowed",
    ],
    mistakes: [
      "Overloading the balcony with heavy wet pots",
      "Using deep open water features without an escape route or child safety plan",
      "Buying too many different plants and under-watering them all",
      "Blocking doors, drains or fire escape routes with containers",
    ],
    steps: [
      {
        title: "Start with the practical limits",
        text: "Check how much sun and wind the balcony receives, where water can drain and whether your tenancy or building has rules about fixings, screening or heavy containers. Keep doors, drains and escape routes clear, and use stable pots that cannot fall in strong weather.",
      },
      {
        title: "Build layers with containers",
        text: "Group larger pots at the back, flowering herbs and perennials through the middle, and trailing or low plants around the edges. Repeating a few reliable species creates a stronger feeding patch than scattering many single plants, while climbers and hanging baskets add height without using more floor space.",
      },
      {
        title: "Add shallow water and shelter",
        text: "Use a shallow dish or small container pond with stones, stable planting and an easy way out. A compact insect shelter can add extra structure, but natural materials, hollow stems and dense pots are useful too. Keep water clean and avoid placing a deep open container where children or pets could reach it.",
      },
      {
        title: "Make the finished space easy to sustain",
        text: "Mulch pots, collect rainwater where practical and choose plants that suit the real conditions. Leave a few stems and seed heads through winter, replace failed plants gradually and keep enough open space to sit, water and inspect everything safely.",
      },
    ],
    tips: [
      "Use peat-free compost and saucers only where they will not remain permanently waterlogged.",
      "Lavender, thyme, marjoram, salvia and compact grasses work well in many sunny containers.",
      "Secure tall planters, trellis and hanging containers against strong wind.",
      "A small, well-maintained water dish is more useful than a large neglected feature.",
    ],
    plants: [
      { name: "Thyme & marjoram", note: "Tough, sunny herbs that flower well in shallow troughs." },
      { name: "Compact lavender", note: "Strong summer nectar if the balcony is warm and free-draining." },
      { name: "Trailing nasturtium", note: "Easy colour for edges; often used by insects in urban spaces." },
      { name: "Ferns or ivy in shade", note: "Add cool cover on cooler, windier aspects without needing full sun." },
      { name: "Compact grasses", note: "Structure, movement and overwintering cover in larger pots." },
      { name: "Climbing honeysuckle or jasmine", note: "Only if securely supported and suitable for the aspect." },
    ],
    faqs: [
      {
        question: "Will wildlife really use a balcony?",
        answer: "Bees, butterflies, hoverflies and some birds regularly visit upper-floor plantings in towns. You are creating a stop along a wider urban route rather than a complete nature reserve.",
      },
      {
        question: "What about neighbours and water runoff?",
        answer: "Use trays carefully, water early or late, and avoid soaking shared floors or walls. Choose stable pots and never create drip hazards over someone else's space.",
      },
      {
        question: "How many plants do I need?",
        answer: "Start with five to eight well-chosen plants you can water reliably. A smaller, thriving collection is more useful than a crowded balcony of stressed plants.",
      },
    ],
    images: [
      { src: "/images/balcony-transform-guide/finished-balcony.webp", alt: "A compact balcony transformed with wildlife-friendly pots, flowers and a water feature", focal: "50% 52%" },
      { src: "/images/balcony-transform-guide/container-garden.webp", alt: "A dense collection of planted containers creating several layers of balcony habitat", focal: "50% 50%" },
      { src: "/images/balcony-transform-guide/water-feature.webp", alt: "A small balcony water feature surrounded by pots and ferns", focal: "48% 50%" },
      { src: "/images/balcony-transform-guide/vertical-planting.webp", alt: "Vertical and hanging planters using the walls and overhead space of a narrow balcony", focal: "50% 50%" },
    ],
    nextStep: {
      label: "Plant for bees next",
      href: "/wildlife-guides/garden-for-bees",
      text: "Use your balcony layers for a longer flowering season, safer water and chemical-free care that keeps pollinators coming back.",
    },
  },

  {
    slug: "leave-seed-heads-over-winter",
    title: "Leave seed heads standing over winter",
    excerpt: "Keep useful stems and seed heads for birds, insects and winter structure, then cut them back at the right time.",
    category: "Seasonal care",
    difficulty: "Easy",
    time: "20 minutes now",
    icon: "flower",
    colour: "meadow",
    intro:
      "Cutting every border to the ground in autumn removes food and shelter just when wildlife needs them most. Healthy seed heads can feed birds, hollow stems can shelter overwintering insects and the remaining structure makes a winter garden feel deliberate rather than empty.",
    steps: [
      {
        title: "Choose healthy plants to keep",
        text: "Leave strong, upright stems and seed heads that are dry, stable and free from obvious disease. Sunflowers, teasels, grasses and many herbaceous perennials can remain useful after flowering. Remove collapsed, diseased or unsafe growth rather than treating every plant in the same way.",
      },
      {
        title: "Make the untidiness look intentional",
        text: "Keep clear paths and visible edges while allowing grouped stems to stand inside the border. A simple frame of evergreen planting, a low mown edge or a neat mulch line helps the retained seed heads read as a purposeful winter habitat.",
      },
      {
        title: "Protect the stems through winter",
        text: "Avoid repeatedly moving, tying or stripping the remaining growth. Let birds take seeds and allow insects to use hollow stems and sheltered joints. Check only for stems that have fallen across paths or become unstable in severe weather.",
      },
      {
        title: "Cut back gradually in spring",
        text: "Wait until late winter or early spring, then remove growth in stages as fresh shoots appear and temperatures begin to rise. Place sound hollow stems in a dry, sheltered corner for a while instead of shredding everything immediately, and compost healthy softer material.",
      },
    ],
    tips: [
      "Keep seed heads away from narrow paths where wet stems could become a trip hazard.",
      "Remove material affected by serious fungal disease rather than composting it in a small home system.",
      "Leave some lower stems at different heights to create more varied shelter.",
      "Photograph the border in winter so next year's planting can improve the structure.",
    ],
  },
  {
    slug: "create-a-leaf-litter-corner",
    title: "Create a wildlife-friendly leaf-litter corner",
    excerpt: "Turn fallen leaves into a sheltered feeding layer beneath shrubs instead of removing every trace of autumn.",
    category: "Shelter",
    difficulty: "Easy",
    time: "30 minutes",
    icon: "leaf",
    colour: "earth",
    intro:
      "Leaf litter is not waste. Beneath hedges and shrubs it holds moisture, feeds decomposers and creates cover for beetles, woodlice, worms, amphibians and the animals that forage for them. The safest approach is to keep leaves where they help while clearing places that need to stay open.",
    steps: [
      {
        title: "Choose a quiet, shaded position",
        text: "Use the back of a border, the base of a hedge or an undisturbed corner away from drains, doors and frequently used paths. A spot already connected to shrubs, logs or ground cover will be easier for wildlife to reach without crossing exposed ground.",
      },
      {
        title: "Gather the right material",
        text: "Rake healthy fallen leaves into a loose layer and mix in a few small twigs so it does not form one dense, airless mat. Avoid adding litter, treated wood, diseased plant material or large quantities of evergreen needles unless you are deliberately making a separate acidic leaf-mould pile.",
      },
      {
        title: "Keep the habitat loose and connected",
        text: "Tuck leaves beneath shrubs and around logs rather than building a steep heap that can blow across the garden. Let nearby ground-cover plants and low branches form a sheltered route into the corner, while keeping the front edge clear enough to inspect.",
      },
      {
        title: "Top up instead of rebuilding",
        text: "Add more leaves each autumn and let the lower layers decompose naturally. Disturb the area as little as possible, especially during cold weather. If you need to move it, work slowly by hand and check for sheltering wildlife first.",
      },
    ],
    tips: [
      "Do not block air bricks, drainage channels or access points.",
      "Remove thick leaf layers from fine lawn grass and move them to the habitat corner instead.",
      "Keep a few logs or stones partly embedded at the edge for extra moisture and cover.",
      "Never set fire to a leaf or brush pile without dismantling and checking it first.",
    ],
    images: [
      { src: "/images/leaf-litter-guide/leaf-habitat.webp", alt: "A sheltered leaf and twig habitat beneath shrubs and a low stone edge", focal: "50% 50%" },
      { src: "/images/leaf-litter-guide/hedge-floor.webp", alt: "Leaves and dense growth forming protected cover at the base of a hedge", focal: "50% 52%" },
      { src: "/images/leaf-litter-guide/shady-ground.webp", alt: "Low ground cover and leaf litter in a cool shaded garden corner", focal: "50% 52%" },
    ],
  },
  {
    slug: "make-an-insect-drinking-station",
    title: "Make a safe drinking station for insects",
    excerpt: "Create a shallow, clean water source with secure landing places for bees and other small visitors.",
    category: "Water",
    difficulty: "Easy",
    time: "15 minutes",
    icon: "bee",
    colour: "pond",
    intro: "Pollinators sometimes need water, particularly during warm, dry weather.",
    introDetail:
      "A drinking station should be shallow, easy to grip and simple to clean. Regular maintenance matters more than decorative complexity, and plain water is always enough.",
    cost: "Very low",
    bestSeason: "Spring through autumn; useful in heatwaves",
    materials: [
      "A wide plant saucer or shallow dish",
      "Washed pebbles, stones or glass marbles",
      "Clean water",
      "A level spot near flowers, ideally with some shade in high summer",
    ],
    mistakes: [
      "Using a deep, smooth bowl with no landing points",
      "Adding sugar, honey or jam to the water",
      "Letting the dish go stagnant or scummy",
      "Placing it in full afternoon sun where water overheats",
    ],
    steps: [
      {
        title: "Choose a wide, shallow dish",
        text: "Use a plant saucer, glazed dish or other stable container with low sides. Avoid smooth, deep vessels that offer no escape. Set it on a level surface in light shade or morning sun, close to flowers but away from pesticide use and busy foot traffic.",
      },
      {
        title: "Add safe landing points",
        text: "Place washed pebbles or marbles so several surfaces remain above the waterline. The stones should be stable and close enough for small insects to step between them without entering deep water.",
      },
      {
        title: "Fill it lightly and keep it fresh",
        text: "Add clean water only to the lower part of the stones. Top it up in dry weather, empty and rinse the dish regularly, and remove algae, soil and dead insects before refilling. A clean shallow source is safer than a permanently stagnant one.",
      },
      {
        title: "Make it part of a wider habitat",
        text: "Place nectar-rich flowers nearby and keep another water source for birds if space allows. The drinking station works best as one part of a garden that also provides food, nesting opportunities and shelter from wind and heat.",
      },
    ],
    tips: [
      "Keep the water below the tops of the stones.",
      "Use plain water without sugar, honey or additives.",
      "Move the dish into partial shade during very hot weather so it does not heat rapidly.",
      "Clean more frequently when many insects or birds are using the area.",
    ],
    plants: [
      { name: "Lavender, thyme or marjoram nearby", note: "Give bees a reason to stop close to the water." },
      { name: "Any open single flower", note: "Pairs drinking water with an easy nectar source." },
    ],
    faqs: [
      {
        question: "Will this replace a pond?",
        answer: "No. It is a quick drinking stop, not breeding habitat. A pond or mini pond supports more wildlife if you can add one later.",
      },
      {
        question: "Do I need special bee water?",
        answer: "No. Clean plain water is best. Sugar water can harm insects and encourages the wrong kinds of feeding behaviour.",
      },
    ],
    images: [
      { src: "/images/insect-water-guide/shallow-dish.webp", alt: "A shallow ceramic water dish raised on smooth stones in a shaded garden", focal: "50% 54%" },
      { src: "/images/insect-water-guide/clean-water.webp", alt: "Fresh clean water rippling in a shallow garden dish", focal: "50% 50%" },
      { src: "/images/insect-water-guide/refill-water.webp", alt: "A shallow garden water feature being refilled with a watering can", focal: "50% 48%" },
      { src: "/images/insect-water-guide/bees-on-stones.webp", alt: "Bees using stones as landing points in a shallow water dish", focal: "50% 48%" },
    ],
    nextStep: {
      label: "Collect rainwater next",
      href: "/garden-guides/collect-and-use-rainwater",
      text: "Keep bird baths, pots and insect dishes filled more easily with stored rain from a water butt.",
    },
  },
  {
    slug: "start-a-no-mow-lawn",
    title: "Start a no-mow lawn",
    excerpt: "Create longer grass, flowering lawn plants and clear paths without making the whole garden difficult to use.",
    category: "Lawns",
    difficulty: "Ongoing",
    time: "One growing season",
    icon: "flower",
    colour: "meadow",
    intro: "A no-mow lawn does not have to mean abandoning every blade of grass.",
    introDetail:
      "Different heights create different conditions, so a useful design often combines longer areas with short paths, access strips and carefully timed cuts. Starting with one patch makes the change easier to observe, explain to neighbours and manage through the year.",
    cost: "Free to low",
    bestSeason: "Begin in spring; review each year",
    materials: [
      "Existing lawn (no special kit required to start)",
      "Optional: string, hose or pegs to mark a clear edge",
      "Mower or strimmer for paths and once-a-year cuts",
      "Rake or fork for removing clippings after a main cut",
      "Optional: local wildflower plugs only if the lawn stays species-poor",
    ],
    mistakes: [
      "Leaving the entire lawn long with no paths or edges",
      "Adding fertiliser or weedkiller while hoping for wildflowers",
      "Cutting every long patch on the same day",
      "Assuming nothing will grow. Many lawns already hold clover, daisy and selfheal",
    ],
    steps: [
      {
        title: "Choose the area and draw the edges",
        text: "Select a sunny or lightly shaded patch that does not block a main route, play space or access point. Mark a curved edge, island or wide strip and continue mowing the surrounding path so the change looks deliberate from the beginning.",
      },
      {
        title: "Let the existing lawn reveal itself",
        text: "Reduce mowing and watch what appears before adding seed. Daisies, clover, selfheal, dandelions and other low flowers may already be present. Avoid fertiliser and weedkiller, which favour vigorous grass and reduce the diversity you are trying to encourage.",
      },
      {
        title: "Use more than one grass height",
        text: "Keep some short flowering lawn, a longer summer patch and an uncut edge or tussock where practical. This varied structure gives wildlife more choices and keeps the garden usable. Mown paths also make the area easier to explore and maintain.",
      },
      {
        title: "Cut carefully and remove the clippings",
        text: "Before cutting, walk through the area slowly and check for wildlife. Work from the centre outwards or from one side to the other so animals are not driven into a shrinking island. Remove most cut material after seed has had time to fall so the soil does not become increasingly fertile.",
      },
    ],
    tips: [
      "Start with a manageable patch and expand only after seeing how it behaves.",
      "Do not cut every long area on the same day.",
      "Keep sightlines clear beside roads, steps and children's play areas.",
      "Use locally appropriate seed or plug plants only if the existing lawn remains species-poor.",
    ],
    plants: [
      { name: "White clover", note: "Often already present; excellent for bees in short or medium lawn." },
      { name: "Daisy & selfheal", note: "Common lawn flowers that appear once mowing is reduced." },
      { name: "Bird's-foot trefoil", note: "Low nectar plant for bees and some butterfly larvae in poorer soils." },
      { name: "Yarrow", note: "Tough perennial that can appear in less fertile lawns and edges." },
      { name: "Native grasses left long", note: "Shelter for invertebrates and hunting ground for birds." },
      { name: "Optional plug: cowslip or primrose", note: "Only if conditions suit and the area will not be cut hard in spring." },
    ],
    faqs: [
      {
        question: "Will my garden look messy?",
        answer: "A mown path, clear edge and short strip beside seating usually make a no-mow area look intentional. Photograph the before and after so you can see the structure, not only the longer grass.",
      },
      {
        question: "What about ticks or allergies?",
        answer: "Keep high-use areas short, maintain paths, and check children and pets after time in longer grass. No-mow does not mean the whole garden must stay long.",
      },
      {
        question: "When should I cut?",
        answer: "Many gardeners take a main cut in late summer or early autumn after plants have set seed, then remove clippings. Local conditions vary, so observe flowering and avoid cutting during busy nesting or fledging periods if birds are using the area.",
      },
    ],
    images: [
      { src: "/images/no-mow-guide/short-lawn.webp", alt: "A conventional short garden lawn before a no-mow area is established", focal: "50% 52%" },
      { src: "/images/no-mow-guide/long-grass.webp", alt: "A garden lawn developing varied patches of longer grass", focal: "50% 54%" },
      { src: "/images/no-mow-guide/meadow-path.webp", alt: "A mown path running through broad areas of longer meadow grass", focal: "50% 50%" },
      { src: "/images/no-mow-guide/mown-path.webp", alt: "A neat short-grass path beside a retained strip of taller grass", focal: "50% 50%" },
    ],
    nextStep: {
      label: "Leave more structure over winter",
      href: "/garden-guides/leave-seed-heads-over-winter",
      text: "Pair longer grass with standing stems and seed heads so food and shelter continue after the growing season.",
    },
  },
  {
    slug: "collect-and-use-rainwater",
    title: "Collect and use rainwater",
    excerpt: "Set up a secure water butt and use stored rain where it makes the greatest difference in your garden.",
    category: "Water saving",
    difficulty: "Weekend project",
    time: "1–2 hours",
    icon: "pond",
    colour: "pond",
    intro: "Stored rainwater reduces reliance on treated mains water and gives you a useful reserve for dry periods.",
    introDetail:
      "A good system needs a stable base, a covered container, a sound connection to the downpipe and an overflow route that will not create damp or flooding problems. Use the water on plants and wildlife features, not for drinking.",
    cost: "Moderate for a water butt kit",
    bestSeason: "Install any time; most useful before dry spells",
    materials: [
      "Water butt with secure lid and tap",
      "Solid, level stand rated for a full container",
      "Downpipe diverter kit suited to your pipe size",
      "Overflow hose or return to the drain",
      "Watering can for targeted use",
    ],
    mistakes: [
      "Standing a full butt on loose bricks or soft ground",
      "Leaving the lid open so debris and animals can fall in",
      "Ignoring overflow so water pools against the house wall",
      "Using stored rainwater as drinking water",
    ],
    steps: [
      {
        title: "Choose a safe position and container",
        text: "Place the water butt beside a suitable downpipe on a solid, level base that can carry its full weight. Use a purpose-made container with a close-fitting lid and child-safe access. Check that the tap is high enough for a watering can and that the location will not obstruct a path.",
      },
      {
        title: "Fit the diverter and overflow",
        text: "Follow the manufacturer's instructions for the rainwater diverter and keep connections watertight. Make sure excess water can return to the drain or reach a safe permeable area rather than collecting beside the house, a neighbour's boundary or a foundation.",
      },
      {
        title: "Keep the stored water protected",
        text: "Keep the lid closed, use screens where needed and clear gutters so leaves and debris do not enter the system. Inspect the butt, stand and fittings periodically for leaks, movement, algae and blocked overflows, especially after storms or freezing weather.",
      },
      {
        title: "Use rainwater where it helps most",
        text: "Prioritise containers, young plants and recently planted borders during dry periods, watering the soil around roots rather than spraying foliage. Stored rainwater is for garden use, not drinking. Empty, clean or isolate the system when maintenance or severe winter conditions require it.",
      },
    ],
    tips: [
      "A full water butt is extremely heavy, so never rely on loose blocks or an unstable stand.",
      "Keep the outlet and overflow away from walls that already have damp problems.",
      "Water early or late in the day so less is lost to evaporation.",
      "Use a watering can for targeted watering rather than applying small amounts everywhere.",
    ],
    plants: [
      { name: "Container herbs and flowers", note: "Often need the most frequent watering in dry weather." },
      { name: "Newly planted shrubs", note: "Benefit from deep, less frequent watering while roots establish." },
    ],
    faqs: [
      {
        question: "Is rainwater better for wildlife ponds?",
        answer: "Yes, when available. It avoids the additives in mains water. Top up carefully and keep pond edges safe for animals leaving the water.",
      },
      {
        question: "What if I rent?",
        answer: "Choose a freestanding kit that can be removed later, get landlord permission for any downpipe alteration, and avoid drilling into shared structure without approval.",
      },
    ],
    images: [
      { src: "/images/rainwater-guide/water-butt.webp", alt: "A covered water butt connected securely beside a house wall", focal: "50% 50%" },
      { src: "/images/rainwater-guide/water-butt-tap.webp", alt: "Stored rainwater flowing from a water-butt tap into a watering can", focal: "50% 52%" },
      { src: "/images/rainwater-guide/watering-can.webp", alt: "A galvanised watering can ready to carry collected rainwater into the garden", focal: "50% 50%" },
      { src: "/images/rainwater-guide/refill-bird-bath.webp", alt: "A garden bird bath being topped up carefully with a watering can", focal: "48% 50%" },
    ],
    nextStep: {
      label: "Mulch to hold the moisture",
      href: "/garden-guides/mulch-to-reduce-watering",
      text: "After watering, protect soil with mulch so less moisture is lost and you refill less often.",
    },
  },
  {
    slug: "mulch-to-reduce-watering",
    title: "Mulch to reduce watering",
    excerpt: "Cover bare soil with the right material to slow moisture loss, protect soil life and reduce repeated watering.",
    category: "Soil care",
    difficulty: "Easy",
    time: "1 hour",
    icon: "leaf",
    colour: "earth",
    intro:
      "Bare soil loses water quickly and is vulnerable to weeds, surface crusting and temperature swings. A suitable mulch helps rain soak in and slows evaporation afterwards. The best result comes from applying it to moist, weed-free soil without burying stems or plant crowns.",
    steps: [
      {
        title: "Choose a mulch that suits the planting",
        text: "Use well-rotted garden compost, leaf mould, composted bark or wood chip where appropriate. Fine annual beds may need a softer material, while established shrubs and hedges can take coarser mulch. Avoid fresh contaminated waste, treated wood and materials that are unsafe around pets.",
      },
      {
        title: "Prepare and water the soil first",
        text: "Remove persistent weeds and water thoroughly if the ground is dry. Mulch conserves moisture already in the soil, but a thick dry layer placed over parched ground can make it harder for light rain or a quick watering to reach the roots.",
      },
      {
        title: "Apply an even, useful layer",
        text: "Spread roughly 5 cm of organic material across the soil, adjusting for the material and planting. Keep a clear ring around stems, trunks and the crowns of perennials so they remain ventilated and are not held constantly wet.",
      },
      {
        title: "Check beneath it before watering again",
        text: "Push a finger through the mulch and test the soil below rather than judging by the dry surface. Water deeply and less often when plants need it. Top up thin areas as the material breaks down, but avoid continually piling new mulch against woody stems.",
      },
    ],
    tips: [
      "Keep mulch away from air bricks, drains and timber structures.",
      "Water at soil level so the moisture passes through the mulch to the roots.",
      "Home-made leaf mould and garden compost can reduce both waste and watering.",
      "Do not use cocoa-shell mulch where dogs may access it.",
    ],
    images: [
      { src: "/images/mulch-guide/wood-chip-bed.webp", alt: "A planted garden bed protected by a loose layer of wood-chip mulch", focal: "50% 52%" },
      { src: "/images/mulch-guide/dry-soil.webp", alt: "Dry exposed garden soil showing why moisture protection is useful", focal: "50% 50%" },
    ],
  },
  {
    slug: "create-a-wildlife-corridor",
    title: "Create a wildlife corridor through your garden",
    excerpt: "Link water, planting, shelter and boundary access so wildlife can move without crossing large exposed gaps.",
    category: "Connectivity",
    difficulty: "Weekend project",
    time: "Half a day",
    icon: "hedge",
    colour: "leaf",
    intro:
      "Individual habitat features become more useful when they connect. A pond beside dense planting, a hedge linked to ground cover and a log pile near a boundary gap can form a continuous route for insects, amphibians, birds and small mammals. The aim is not a single tunnel, but a chain of safe stopping places.",
    steps: [
      {
        title: "Map the useful features and exposed gaps",
        text: "Walk through the garden at ground level as well as at human height. Mark existing shrubs, hedges, climbers, water, long grass, logs and boundary access. Then notice where wildlife would have to cross bright paving, short open lawn or a bare fence line to reach the next feature.",
      },
      {
        title: "Join habitats with layered planting",
        text: "Use low ground cover beneath shrubs, climbers on fences and a sequence of pots or planting pockets through narrow spaces. Combine evergreen shelter with deciduous plants, flowers and seed-bearing growth so the route offers cover and food across more of the year.",
      },
      {
        title: "Add stepping stones of shelter",
        text: "Place a small log pile, leaf-litter corner, stone group or shallow water dish between larger habitat areas. Keep these features stable and partly shaded. Even a short distance between protected stops can make a route less exposed for small animals.",
      },
      {
        title: "Connect the boundary and reduce disturbance",
        text: "Where permission and pet safety allow, link neighbouring gardens with a ground-level gap or living hedge. Keep bright lighting away from the route, avoid blocking it with stored items and trim in stages so the entire corridor is never removed at once.",
      },
    ],
    tips: [
      "Do not create a boundary gap without the owner's permission.",
      "Check that routes do not lead wildlife towards an uncovered drain, road or other hazard.",
      "Retain some leaf litter and low branches beneath hedges.",
      "Photograph the route from above and at ground level to spot missing links.",
    ],
    images: [
      { src: "/images/wildlife-corridor-guide/ground-cover.webp", alt: "Low ground-cover plants linking shaded areas beneath taller vegetation", focal: "50% 52%" },
      { src: "/images/wildlife-corridor-guide/shrub-route.webp", alt: "A sheltered path passing through dense shrubs and evergreen cover", focal: "50% 50%" },
      { src: "/images/wildlife-corridor-guide/log-edge.webp", alt: "A stacked log edge beside dense planting creating shelter and a connected route", focal: "50% 50%" },
      { src: "/images/wildlife-corridor-guide/leaf-route.webp", alt: "A leaf-covered route beneath a hedge offering protected ground-level movement", focal: "50% 50%" },
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
    intro: "A wildlife garden contains creatures that gardeners sometimes call pests.",
    introDetail:
      "The aim is not to remove every problem, but to protect important plants while allowing a balanced food web to develop. Chemical-free care is less about perfection and more about healthier soil, better plant choices and waiting before you reach for a spray.",
    cost: "Often saves money over time",
    bestSeason: "Any time; start with the next problem you face",
    materials: [
      "Mulch and compost to improve soil structure",
      "Fine mesh, cloches or collars for vulnerable crops",
      "Hand tools for weeding and inspecting plants",
      "Optional: sticky traps only as monitoring aids, not a full solution",
      "A notebook or phone photos to track what works",
    ],
    mistakes: [
      "Spraying at the first chewed leaf before identifying the cause",
      "Using products that kill predators along with the target insect",
      "Growing plants in the wrong place and then fighting them all season",
      "Expecting a perfect, damage-free garden if you also want wildlife",
    ],
    steps: [
      {
        title: "Build healthier plants",
        text: "Match plants to their conditions, improve soil structure and water well during establishment. Strong plants cope better with minor damage and need fewer emergency interventions.",
      },
      {
        title: "Use physical barriers",
        text: "Fine mesh, collars, hand removal and protected propagation can prevent damage without introducing persistent chemicals. Check barriers regularly so they do not trap wildlife or become a hazard.",
      },
      {
        title: "Welcome predators",
        text: "Ponds, dense planting, log piles and bird-friendly habitats encourage animals that naturally feed on many garden pests. A sterile, sprayed garden removes the very helpers you need.",
      },
      {
        title: "Accept a little damage",
        text: "Chewed leaves are often evidence that your garden is supporting life. Intervene only where damage is likely to cause a genuine problem, such as a young tree being ring-barked or a crop completely lost.",
      },
    ],
    tips: [
      "Identify the cause before treating a plant.",
      "Avoid blanket treatments.",
      "Rotate edible crops and maintain good airflow.",
      "Night-time torch checks often reveal slugs and snails more effectively than pellets.",
    ],
    plants: [
      { name: "Right plant, right place", note: "A plant suited to your soil and light needs fewer rescues." },
      { name: "Companion herbs", note: "Dill, fennel and flowering herbs support beneficial insects near crops." },
      { name: "Nettle corner (managed)", note: "Supports many insects; keep it contained and away from play areas." },
      { name: "Dense ground cover", note: "Helps suppress weeds once established and cools soil." },
      { name: "Berrying shrubs", note: "Feed birds that also take many invertebrates." },
      { name: "Cover crops / green manures", note: "Protect bare soil between edible crops and feed soil life." },
    ],
    faqs: [
      {
        question: "What about serious infestations?",
        answer: "Start with identification, physical removal and barriers. If you must use a product, choose the least harmful option, treat only the affected plant, and avoid spraying open flowers where bees are active.",
      },
      {
        question: "Are organic sprays always fine?",
        answer: "Not always. Some organic products can still harm beneficial insects. Prefer prevention and targeted action over routine spraying of any kind.",
      },
      {
        question: "How long until predators appear?",
        answer: "It can take a season or more for a garden to rebalance after heavy chemical use. Keep habitat features in place and resist the urge to spray during the awkward middle period.",
      },
    ],
    images: [
      { src: "/images/hands-gardening.webp", alt: "Hands planting seedlings in a wildlife-friendly garden bed", focal: "48% 48%" },
      { src: "/images/mulch-guide/mulched-plant.webp", alt: "Mulch protecting soil around a young plant", focal: "50% 52%" },
      { src: "/images/log-guide/finished-habitat.webp", alt: "A log and leaf habitat that supports predators and decomposers", focal: "50% 50%" },
      { src: "/images/bee-guide/pollinator-border.webp", alt: "A flower border supporting the wider garden food web", focal: "50% 50%" },
    ],
    nextStep: {
      label: "Add predator habitat",
      href: "/garden-guides/build-a-log-and-leaf-habitat",
      text: "Give beetles, amphibians and other helpers a quiet corner so natural pest control has somewhere to live.",
    },
  },
  {
    slug: "make-a-hedgehog-highway",
    title: "Make a hedgehog highway",
    excerpt: "Create a safe 13 cm opening and reconnect neighbouring gardens for hedgehogs moving after dark.",
    category: "Access",
    difficulty: "Easy",
    time: "About 1 hour",
    icon: "gate",
    colour: "earth",
    intro:
      "One enclosed garden cannot provide an entire night-time range. A carefully finished 13 cm by 13 cm opening can reconnect feeding, nesting and resting habitat across several neighbouring spaces.",
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
