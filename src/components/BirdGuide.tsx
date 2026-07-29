import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { FieldChecklist, FieldGuideProgress } from "@/components/FieldGuideTools";
import { GuideEndMatter } from "@/components/GuideEndMatter";

const kit = [
  "An easy-to-dismantle hanging feeder with good drainage",
  "A shallow, rough-surfaced bird bath or plant saucer",
  "Fresh tap water for daily bath refills",
  "Suitable seasonal food in small quantities",
  "Outdoor-only bucket, brushes and rubber gloves",
  "Hot soapy water and an animal-safe disinfectant",
  "A correctly designed nest box for the species you hope to help",
];

const steps = [
  {
    number: "01",
    id: "position-feeders",
    eyebrow: "Safety before spectacle",
    title: "Place feeders where birds can see danger.",
    copy: [
      "Choose a position with a clear view around the feeder and nearby cover that birds can retreat to, but not so close to dense shrubs that a cat can wait unseen. Keep the flight path open and avoid placing food beneath regular roosting branches where droppings may contaminate it.",
      "Hanging feeders are generally easier to keep hygienic than flat tables. Use more than one small feeding point if many birds gather, and move feeders regularly so waste and droppings do not build up underneath.",
    ],
    image: "/images/bird-guide/garden-feeder.webp",
    alt: "Small birds visiting a hanging wooden feeder in a leafy garden",
    focal: "54% 50%",
  },
  {
    number: "02",
    id: "feed-seasonally",
    eyebrow: "Offer less, but offer it well",
    title: "Match the menu to the season.",
    copy: [
      "Current RSPB guidance recommends seeds and peanuts between November and April, when birds need high-energy food. Put out only what will be eaten quickly, remove old food before refilling and keep everything dry.",
      "During spring and summer, small amounts of soaked mealworms can provide protein. Clear any uneaten mealworms by dusk, especially when they are scattered on the ground, and avoid mouldy, salty or stale food at any time of year.",
    ],
    image: "/images/bird-guide/seasonal-food.webp",
    alt: "Different bird foods arranged in groups, including seed, fruit, suet and mealworms",
    focal: "50% 50%",
  },
  {
    number: "03",
    id: "provide-water",
    eyebrow: "The year-round essential",
    title: "Give birds clean water every day.",
    copy: [
      "A shallow bath lets birds drink and maintain their feathers. Choose a rough surface and gently sloping sides, or add a stable stone for secure footing. Place it where birds can check their surroundings before landing.",
      "Empty and refill the bath with fresh tap water daily. Rinse away droppings, leaves and algae, then disinfect thoroughly every week. If that routine is not possible, leaving the bath dry is safer than allowing stagnant, contaminated water to remain.",
    ],
    image: "/images/bird-guide/bird-bath.webp",
    alt: "A shallow stone bird bath filled with clean water in a sunny garden",
    focal: "50% 46%",
  },
  {
    number: "04",
    id: "clean-weekly",
    eyebrow: "The fifteen-minute habit",
    title: "Clean feeders outdoors every week.",
    copy: [
      "Wear gloves, discard leftover food into an outdoor household bin and dismantle the feeder fully. Scrub every part in hot soapy water with tools used only for wildlife equipment, then apply an animal-safe disinfectant according to its instructions.",
      "Rinse thoroughly and let every piece dry completely before reassembly. Wash hands and forearms afterwards, clear waste from beneath the station and move the feeder to reduce contamination in the soil.",
    ],
    image: "/images/bird-guide/clean-feeder.webp",
    alt: "A person cleaning a covered garden bird feeder outdoors",
    focal: "55% 50%",
  },
  {
    number: "05",
    id: "add-nest-boxes",
    eyebrow: "Shelter for the next generation",
    title: "Choose a box, not just a decoration.",
    copy: [
      "Different birds need different entrance sizes and box styles. Buy or build a design intended for a known species, with untreated timber, drainage and no perch below the entrance. A perch is unnecessary and can help predators or competitors.",
      "Fix the box securely, away from cats and intense midday sun, with an unobstructed flight path. North- or east-facing positions often avoid the strongest sun and wettest winds, although the best place depends on shelter already provided by the building or garden.",
    ],
    image: "/images/bird-guide/nest-box.webp",
    alt: "A simple wooden nest box fixed securely to a mature tree",
    focal: "50% 48%",
  },
  {
    number: "06",
    id: "grow-natural-food",
    eyebrow: "The garden does the feeding",
    title: "Build a habitat beyond the feeder.",
    copy: [
      "Leave some seed heads standing, grow berry-bearing shrubs, allow leaf litter beneath hedges and plant flowers that support insects. Natural food spreads birds through the garden rather than concentrating them at one station.",
      "Dense shrubs, climbers and mixed-height planting provide cover, nesting structure and places to hunt. Feeders should supplement a living garden, not replace one.",
    ],
    image: "/images/bird-guide/birds-at-water.webp",
    alt: "Garden birds drinking and bathing beside a small water dish",
    focal: "54% 52%",
  },
];

const faqs = [
  {
    question: "Should I feed garden birds all year?",
    answer: "Water is useful throughout the year, but food should follow current seasonal and disease guidance. The RSPB currently advises seeds and peanuts between November and April, with small amounts of suitable high-protein food such as soaked mealworms in spring and summer.",
  },
  {
    question: "How often should I clean feeders and baths?",
    answer: "Give feeders and baths a thorough clean and disinfection every week. Replace bath water daily, brush debris away whenever food is replenished and never place fresh food on top of old, damp remains.",
  },
  {
    question: "What should I do if I see a sick bird?",
    answer: "Stop feeding, empty bird baths, clean and disinfect all equipment and store feeders away from the garden. The RSPB advises waiting at least three weeks and only restarting when no birds are showing signs of disease. Report sickness or deaths to Garden Wildlife Health.",
  },
  {
    question: "Is bread suitable for birds?",
    answer: "Bread has limited nutritional value and can quickly become wet or mouldy. Purpose-made seasonal foods and natural garden food are better choices. Never put out anything salty, mouldy or spoiled.",
  },
  {
    question: "When should I clean a nest box?",
    answer: "Never open or disturb a box while it is occupied. Once the breeding season has finished and you are certain the box is empty, follow current RSPB guidance on lawful cleaning and maintenance before the next nesting season.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to help garden birds safely",
    description: "A practical UK guide to cleaner bird feeding, fresh water, seasonal food, safe nest boxes and natural garden habitat.",
    image: [
      "https://miniwildgarden.co.uk/images/bird-guide/garden-feeder.webp",
      "https://miniwildgarden.co.uk/images/bird-guide/birds-at-water.webp",
    ],
    totalTime: "PT20M",
    supply: [
      { "@type": "HowToSupply", name: "Suitable seasonal bird food" },
      { "@type": "HowToSupply", name: "Fresh tap water" },
      { "@type": "HowToSupply", name: "Animal-safe disinfectant" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Easy-clean hanging feeder" },
      { "@type": "HowToTool", name: "Shallow bird bath" },
      { "@type": "HowToTool", name: "Outdoor cleaning brush" },
    ],
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.copy.join(" "),
      image: `https://miniwildgarden.co.uk${step.image}`,
      url: `https://miniwildgarden.co.uk/wildlife-guides/help-garden-birds#${step.id}`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export function BirdGuide() {
  return (
    <main className="field-guide field-guide--birds">
      <FieldGuideProgress tone="sky" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="field-hero" data-parallax-root>
        <Image
          className="field-hero__image parallax-image"
          src="/images/bird-guide/garden-feeder.webp"
          alt="Small birds visiting a hanging feeder in a sunlit garden"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "55% 50%" }}
        />
        <span className="field-hero__shade" />
        <span className="field-hero__halo" aria-hidden="true" />
        <div className="bird-flight" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="shell field-hero__content">
          <Link className="back-link" href="/wildlife-guides">← All wildlife guides</Link>
          <span className="eyebrow eyebrow--light">Birds · Field guide 03</span>
          <h1>Bring the garden<br />to <em>life in flight.</em></h1>
          <p className="lead">Offer food, water and shelter without turning a busy feeding station into a place where disease can spread.</p>
          <div className="field-hero__meta">
            <span><Icon name="clock" size={17} /> 15 minutes weekly</span>
            <span><Icon name="check" size={17} /> Any size garden</span>
            <span>Food · water · shelter</span>
          </div>
        </div>
        <a className="field-hero__scroll" href="#bird-basics"><span /> Enter the canopy</a>
      </section>

      <section className="field-intro" id="bird-basics">
        <div className="shell field-intro__grid">
          <div data-reveal>
            <span className="eyebrow">The healthy garden station</span>
            <h2>Welcoming birds is easy.<br /><em>Keeping them healthy is the craft.</em></h2>
            <p>Feeding gathers birds together, so good hygiene matters as much as the food itself. Spread activity through the garden, refresh water daily and let planting provide much of the natural menu.</p>
          </div>
          <div className="field-intro__rhythm" data-reveal>
            <div><strong>Daily</strong><span>Fresh water</span></div>
            <i>+</i>
            <div><strong>Weekly</strong><span>Full clean</span></div>
          </div>
        </div>
        <div className="shell bird-pillars">
          <article data-reveal><Icon name="bird" size={34} /><span>01</span><h3>Feed seasonally</h3><p>Small amounts, eaten quickly, with the menu adjusted through the year.</p></article>
          <article data-reveal><Icon name="pond" size={34} /><span>02</span><h3>Refresh daily</h3><p>Clean drinking and bathing water can matter even when food is abundant.</p></article>
          <article data-reveal><Icon name="garden" size={34} /><span>03</span><h3>Grow the habitat</h3><p>Flowers, insects, berries and shelter make the whole garden useful.</p></article>
        </div>
      </section>

      <section className="field-body section--cream">
        <div className="shell field-layout">
          <aside className="field-nav" data-reveal>
            <span>In this guide</span>
            <nav>
              <a href="#bird-kit">Set up well</a>
              {steps.map((step) => <a href={`#${step.id}`} key={step.id}>{step.number} {step.title}</a>)}
              <a href="#food-calendar">Food calendar</a>
              <a href="#disease-alert">If a bird looks unwell</a>
              <a href="#bird-faq">Questions</a>
              <a href="#bird-sources">Sources</a>
            </nav>
          </aside>

          <div className="field-content">
            <section className="field-prepare" id="bird-kit">
              <div className="section-heading section-heading--article" data-reveal>
                <span className="eyebrow">Set up for easy cleaning</span>
                <h2>The best feeder is one you will maintain.</h2>
                <p>Choose simple equipment that comes apart fully, dries quickly and does not trap stale food in hidden corners.</p>
              </div>
              <FieldChecklist eyebrow="Garden bird kit" title="Build a healthier routine." items={kit} tone="sky" />
            </section>

            <div className="field-steps">
              {steps.map((step, index) => (
                <section className={`field-step ${index % 2 ? "field-step--reverse" : ""}`} id={step.id} key={step.id}>
                  <figure className="field-step__image" data-reveal>
                    <Image src={step.image} alt={step.alt} fill sizes="(max-width: 840px) 100vw, 48vw" style={{ objectPosition: step.focal }} />
                    <span>{step.number}</span>
                  </figure>
                  <div className="field-step__copy" data-reveal>
                    <span className="eyebrow">{step.eyebrow}</span>
                    <h3>{step.title}</h3>
                    {step.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
              ))}
            </div>

            <section className="bird-calendar" id="food-calendar">
              <div className="section-heading section-heading--article" data-reveal>
                <span className="eyebrow">A changing menu</span>
                <h2>Feed with the season, not by habit.</h2>
              </div>
              <div className="bird-calendar__image" data-reveal>
                <Image src="/images/bird-guide/seasonal-food.webp" alt="A selection of foods sometimes offered to garden birds" fill sizes="100vw" />
                <span>Always remove anything mouldy, damp or uneaten.</span>
              </div>
              <div className="bird-calendar__grid">
                <article data-reveal><span>Nov–Apr</span><h3>Seeds and peanuts</h3><p>Offer suitable high-energy food in feeders, in quantities that disappear within one or two days.</p></article>
                <article data-reveal><span>Spring–summer</span><h3>Small protein portions</h3><p>Soaked mealworms can help, but clear leftovers by dusk and do not let food accumulate on the ground.</p></article>
                <article data-reveal><span>All year</span><h3>Natural garden food</h3><p>Insects, seed heads, fruiting plants and leaf litter support a wider range of feeding behaviour.</p></article>
              </div>
            </section>

            <section className="bird-alert" id="disease-alert" data-reveal>
              <div>
                <span className="eyebrow eyebrow--light">Pause when health changes</span>
                <h2>One sick bird means the station closes.</h2>
              </div>
              <div>
                <p>If you see a bird showing signs of disease, stop feeding, empty baths and disinfect all equipment. Store feeders away from the garden and wait at least three weeks before restarting, only if no further sick birds are seen.</p>
                <a href="https://www.gardenwildlifehealth.org/" target="_blank" rel="noreferrer">Report to Garden Wildlife Health <span>↗</span></a>
              </div>
            </section>

            <section className="field-cinema bird-cinema" data-parallax-root>
              <Image className="parallax-image" src="/images/bird-guide/birds-at-water.webp" alt="Garden birds gathered around a clean water dish" fill sizes="100vw" />
              <span className="field-cinema__shade" />
              <div data-reveal>
                <span className="eyebrow eyebrow--light">The quiet reward</span>
                <h2>Make a place worth returning to.</h2>
                <p>When clean water, living plants and safe cover come together, the feeder becomes only one small part of the story.</p>
              </div>
            </section>

            <section className="field-faq" id="bird-faq">
              <div className="section-heading section-heading--article" data-reveal>
                <span className="eyebrow">Good questions</span>
                <h2>Feed less. Notice more.</h2>
              </div>
              <div className="field-faq__list">
                {faqs.map((faq, index) => (
                  <details key={faq.question} data-reveal>
                    <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<i>+</i></summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="field-sources" id="bird-sources" data-reveal>
              <span className="eyebrow">Trusted guidance</span>
              <h2>Keep the advice as fresh as the water.</h2>
              <p>Bird-feeding recommendations can change as evidence about disease develops. Check current RSPB guidance, particularly before changing seasonal feeding routines.</p>
              <div>
                <a href="https://www.rspb.org.uk/birds-and-wildlife/feeding-birds-near-you" target="_blank" rel="noreferrer"><span>RSPB</span><strong>What and when to feed</strong><i>↗</i></a>
                <a href="https://www.rspb.org.uk/birds-and-wildlife/feeding-birds-near-you/keep-your-garden-birds-healthy" target="_blank" rel="noreferrer"><span>RSPB</span><strong>Keep garden birds healthy</strong><i>↗</i></a>
                <a href="https://www.rspb.org.uk/helping-nature/what-you-can-do/activities/all-about-nest-boxes" target="_blank" rel="noreferrer"><span>RSPB</span><strong>All about nest boxes</strong><i>↗</i></a>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="field-closing" data-parallax-root>
        <Image className="parallax-image" src="/images/bird-guide/bird-bath.webp" alt="A clean bird bath in a peaceful garden" fill sizes="100vw" />
        <span className="field-closing__shade" />
        <div className="shell field-closing__content" data-reveal>
          <span className="eyebrow eyebrow--light">Connect the whole garden</span>
          <h2>Water for wings.<br /><em>A doorway for paws.</em></h2>
          <div>
            <Link className="button button--lime" href="/garden-guides/make-a-hedgehog-highway">Make a hedgehog highway <Icon name="arrow" size={18} /></Link>
            <Link className="field-closing__link" href="/wildlife-guides">Explore every wildlife guide <span>↗</span></Link>
          </div>
        </div>
      </section>
      <GuideEndMatter slug="help-garden-birds" />
    </main>
  );
}
