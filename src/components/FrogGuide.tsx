import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { FieldChecklist, FieldGuideProgress } from "@/components/FieldGuideTools";

const kit = [
  "A shaded or semi-shaded corner close to planting",
  "Untreated logs, branches and bark",
  "Flat stones with stable gaps beneath them",
  "Dry leaves and loose twiggy material",
  "A shallow water dish or wildlife pond",
  "Low ground cover or damp-loving plants",
  "A clear, gently sloping route in and out of water",
];

const steps = [
  {
    number: "01",
    id: "choose-a-route",
    eyebrow: "Think beyond the pond",
    title: "Choose a cool route through the garden.",
    copy: [
      "Frogs spend much of their lives away from open water, so begin with the route between the pond, shelter and surrounding planting. A partly shaded strip beneath shrubs or along the back of a border can stay cooler and damper than exposed lawn.",
      "Keep the route as continuous as possible. Dense low planting, leaf litter and small gaps beneath timber let amphibians cross the garden without being left in the open for long.",
    ],
    image: "/images/frog-guide/shady-corner.webp",
    alt: "A shaded garden route beneath dense shrubs",
    focal: "50% 50%",
  },
  {
    number: "02",
    id: "gather-materials",
    eyebrow: "Use what the garden already has",
    title: "Gather logs, stones and leaves.",
    copy: [
      "Use untreated timber, bark, branches, flat stones and fallen leaves to create several kinds of shelter rather than one sealed box. Different gaps hold different temperatures and moisture levels.",
      "Place the heaviest pieces directly on the soil and keep the structure low and stable. Avoid sharp wire, treated wood or anything that could collapse when wet.",
    ],
    image: "/images/frog-guide/habitat-materials.webp",
    alt: "Logs, stones, leaf litter and plants arranged for a frog habitat",
    focal: "50% 52%",
  },
  {
    number: "03",
    id: "build-a-refuge",
    eyebrow: "Dark, damp and undisturbed",
    title: "Build a simple amphibian refuge.",
    copy: [
      "Stack thicker logs or stones to form a low chamber with more than one opening. Add smaller branches and leaves above it, leaving a sheltered hollow beneath rather than packing every gap tightly.",
      "Position the refuge near cover but not directly in a place that regularly floods. Once it is settled, leave it alone: repeated lifting and checking can disturb the very animals it is meant to protect.",
    ],
    image: "/images/frog-guide/build-shelter.webp",
    alt: "Hands building a low frog refuge from logs and fallen leaves",
    focal: "50% 54%",
  },
  {
    number: "04",
    id: "make-water-safe",
    eyebrow: "Every pond needs an exit",
    title: "Create a shallow edge frogs can use.",
    copy: [
      "A wildlife pond should include a gently shelving margin, a gravel beach or stable stones that continue from below the waterline to dry ground. Steep-sided containers need a secure ramp that cannot slip away as the water level changes.",
      "Keep at least one route clear of dense growth so small animals can leave the water easily. Do not move frogspawn, frogs or pond water from another site; let wildlife find the habitat naturally.",
    ],
    image: "/images/frog-guide/shallow-pond-edge.webp",
    alt: "A gently sloping shallow pond edge made from gravel and stones",
    focal: "50% 62%",
  },
  {
    number: "05",
    id: "connect-water-land",
    eyebrow: "Join the two worlds",
    title: "Link water to damp cover.",
    copy: [
      "Plant around part of the pond edge and continue that shelter towards logs, stones or a shaded border. Grasses, low ground cover and loose leaves create a humid transition instead of an abrupt jump from water to bare lawn.",
      "Leave some open water and a visible exit, but allow other edges to soften naturally. The aim is variety: shallow water, damp soil, dense cover and dry refuges all within a short journey.",
    ],
    image: "/images/frog-guide/damp-pond-habitat.webp",
    alt: "A damp pond habitat connected to a log refuge and leafy planting",
    focal: "50% 52%",
  },
  {
    number: "06",
    id: "leave-cover",
    eyebrow: "Resist the tidy-up",
    title: "Leave leaves, crevices and quiet corners.",
    copy: [
      "Fallen leaves, mossy stones and loose timber create feeding and hiding places beyond the breeding season. Leave selected areas undisturbed through autumn and winter rather than clearing every corner back to bare soil.",
      "Before mowing long grass, moving a log pile, turning compost or lighting a bonfire, check carefully for sheltering wildlife. Work slowly and from one side so animals have an escape route.",
    ],
    image: "/images/frog-guide/frog-cover.webp",
    alt: "A frog sheltering among logs, stones, leaves and grasses",
    focal: "50% 60%",
  },
];

const faqs = [
  {
    question: "Do frogs need a large pond?",
    answer: "No. A small pond or watertight container can provide useful water when it has a dependable escape route, suitable planting and nearby cover. A larger pond supports more varied habitat, but safe edges matter more than scale alone.",
  },
  {
    question: "Should I buy frogs or move frogspawn into the pond?",
    answer: "No. Let frogs, toads and newts arrive naturally. Moving animals, spawn, plants or pond water can spread disease and invasive species between sites.",
  },
  {
    question: "Where do frogs go when they leave the pond?",
    answer: "They use damp planting, leaf litter, log piles, stone gaps, compost areas and other sheltered ground habitat. That is why the land around the pond is just as important as the water itself.",
  },
  {
    question: "Can I use slug pellets in a frog-friendly garden?",
    answer: "A wildlife garden works best without broad pesticide use. Frogs are part of the garden food web, so focus on barriers, hand removal and healthy planting rather than treating the whole area.",
  },
  {
    question: "Should I clean out a frog shelter?",
    answer: "Usually no. Once established, leave log, leaf and stone refuges undisturbed unless there is a genuine safety problem. Add leaves from above rather than dismantling the structure.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to create a frog-friendly garden",
    description: "A practical UK guide to linking water, shallow exits, damp cover, logs, stones and leaf litter for frogs and other amphibians.",
    image: [
      "https://miniwildgarden.co.uk/images/frog-guide/frog-hero.webp",
      "https://miniwildgarden.co.uk/images/frog-guide/damp-pond-habitat.webp",
    ],
    totalTime: "PT2H",
    supply: [
      { "@type": "HowToSupply", name: "Untreated logs and branches" },
      { "@type": "HowToSupply", name: "Flat stones" },
      { "@type": "HowToSupply", name: "Fallen leaves" },
      { "@type": "HowToSupply", name: "Low ground-cover plants" },
    ],
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.copy.join(" "),
      image: `https://miniwildgarden.co.uk${step.image}`,
      url: `https://miniwildgarden.co.uk/wildlife-guides/frog-friendly-space#${step.id}`,
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

export function FrogGuide() {
  return (
    <main className="field-guide field-guide--frog">
      <FieldGuideProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="field-hero" data-parallax-root>
        <Image
          className="field-hero__image parallax-image"
          src="/images/frog-guide/frog-hero.webp"
          alt="A common frog resting in shallow water among autumn leaves"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "50% 52%" }}
        />
        <span className="field-hero__shade" />
        <span className="field-hero__halo" aria-hidden="true" />
        <div className="frog-ripples" aria-hidden="true"><i /><i /><i /></div>
        <div className="shell field-hero__content">
          <Link className="back-link" href="/wildlife-guides">← All wildlife guides</Link>
          <span className="eyebrow eyebrow--light">Frogs · Field guide 04</span>
          <h1>Build a garden<br />between <em>water and land.</em></h1>
          <p className="lead">Give frogs safe pond edges, damp routes and quiet shelter so the whole garden becomes usable habitat.</p>
          <div className="field-hero__meta">
            <span><Icon name="clock" size={17} /> 1–2 hours</span>
            <span><Icon name="check" size={17} /> Beginner friendly</span>
            <span><Icon name="frog" size={17} /> Pond + ground habitat</span>
          </div>
        </div>
        <a className="field-hero__scroll" href="#frog-basics"><span /> Follow the waterline</a>
      </section>

      <section className="field-intro" id="frog-basics">
        <div className="shell field-intro__grid">
          <div data-reveal>
            <span className="eyebrow">Two habitats, one journey</span>
            <h2>The pond is only<br /><em>half the story.</em></h2>
            <p>Frogs breed in water but need connected shelter on land. A shallow edge, damp planting and undisturbed refuges let them move safely through changing seasons.</p>
          </div>
          <div className="field-intro__stat" data-reveal>
            <strong>2</strong>
            <span>worlds to connect</span>
            <p>Water for breeding and cooling. Land for feeding, shelter and winter refuge.</p>
          </div>
        </div>
        <div className="shell wildlife-pillars wildlife-pillars--frog">
          <article data-reveal><Icon name="pond" size={34} /><span>01</span><h3>Safe water</h3><p>Shallow margins and an exit that works at every water level.</p></article>
          <article data-reveal><Icon name="leaf" size={34} /><span>02</span><h3>Damp routes</h3><p>Cover that joins the pond to shrubs, borders and quiet corners.</p></article>
          <article data-reveal><Icon name="logs" size={34} /><span>03</span><h3>Hidden refuge</h3><p>Logs, stones and leaves left long enough to become habitat.</p></article>
        </div>
      </section>

      <section className="field-body section--cream">
        <div className="shell field-layout">
          <aside className="field-nav" data-reveal>
            <span>In this guide</span>
            <nav>
              <a href="#frog-kit">What you need</a>
              {steps.map((step) => <a href={`#${step.id}`} key={step.id}>{step.number} {step.title}</a>)}
              <a href="#frog-route">The connected habitat</a>
              <a href="#frog-safety">Safety notes</a>
              <a href="#frog-faq">Questions</a>
              <a href="#frog-sources">Sources</a>
            </nav>
          </aside>

          <div className="field-content">
            <section className="field-prepare" id="frog-kit">
              <div className="section-heading section-heading--article" data-reveal>
                <span className="eyebrow">Build with texture</span>
                <h2>Make shade, moisture and escape routes.</h2>
                <p>Most of the materials can come from normal garden work. The value comes from how they connect and how little they are disturbed afterwards.</p>
              </div>
              <FieldChecklist eyebrow="Frog-friendly habitat kit" title="Create a cooler, safer route." items={kit} />
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

            <section className="habitat-route" id="frog-route">
              <div className="section-heading section-heading--article" data-reveal>
                <span className="eyebrow">A connected habitat</span>
                <h2>Think in a sequence, not a single feature.</h2>
              </div>
              <div className="habitat-route__image" data-reveal>
                <Image src="/images/frog-guide/mini-water-bowl.webp" alt="A small frog using a shallow garden water bowl" fill sizes="100vw" />
                <span>Water → cover → refuge</span>
              </div>
              <div className="habitat-route__grid">
                <article data-reveal><span>01</span><h3>Water</h3><p>A pond, mini pond or shallow dish with a dependable exit.</p></article>
                <article data-reveal><span>02</span><h3>Cover</h3><p>Low planting and leaf litter that continue beyond the waterline.</p></article>
                <article data-reveal><span>03</span><h3>Refuge</h3><p>A quiet log, stone or compost area that stays largely undisturbed.</p></article>
              </div>
            </section>

            <section className="field-safety" id="frog-safety">
              <div className="section-heading section-heading--article" data-reveal>
                <span className="eyebrow">Keep the route safe</span>
                <h2>Small hazards matter at ground level.</h2>
              </div>
              <div className="field-safety__grid">
                <article data-reveal><Icon name="pond" size={31} /><h3>Always add an exit</h3><p>Steep pond walls and water containers need a stable ramp or shallow edge.</p></article>
                <article data-reveal><Icon name="frog" size={31} /><h3>Let frogs arrive</h3><p>Do not move adults, spawn, plants or pond water between sites.</p></article>
                <article data-reveal><Icon name="leaf" size={31} /><h3>Garden without blanket treatments</h3><p>Use targeted, physical controls instead of treating the whole food web.</p></article>
                <article data-reveal><Icon name="logs" size={31} /><h3>Check before disturbing</h3><p>Inspect long grass, logs, compost and bonfire material before moving it.</p></article>
              </div>
            </section>

            <section className="field-cinema frog-cinema" data-parallax-root>
              <Image className="parallax-image" src="/images/frog-guide/frog-cover.webp" alt="A frog resting among damp leaves, logs and stones" fill sizes="100vw" />
              <span className="field-cinema__shade" />
              <div data-reveal>
                <span className="eyebrow eyebrow--light">The quiet reward</span>
                <h2>Make the gaps worth finding.</h2>
                <p>The best amphibian habitat often looks like a corner the garden has been allowed to keep for itself.</p>
              </div>
            </section>

            <section className="field-faq" id="frog-faq">
              <div className="section-heading section-heading--article" data-reveal>
                <span className="eyebrow">Good questions</span>
                <h2>Help without handling.</h2>
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

            <section className="field-sources" id="frog-sources" data-reveal>
              <span className="eyebrow">Trusted guidance</span>
              <h2>Protect the route, not just the pond.</h2>
              <p>These organisations provide current UK advice on ponds, amphibians and wildlife-friendly outdoor spaces.</p>
              <div>
                <a href="https://www.wildlifetrusts.org/wildlife-explorer/amphibians/common-frog" target="_blank" rel="noreferrer"><span>Wildlife Trusts</span><strong>Common frog guide</strong><i>↗</i></a>
                <a href="https://www.wildlifetrusts.org/actions/how-create-mini-pond" target="_blank" rel="noreferrer"><span>Wildlife Trusts</span><strong>Create a mini pond</strong><i>↗</i></a>
                <a href="https://www.rspb.org.uk/helping-nature/what-you-can-do/activities/make-a-splash-with-water" target="_blank" rel="noreferrer"><span>RSPB</span><strong>Make a splash with water</strong><i>↗</i></a>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="field-closing" data-parallax-root>
        <Image className="parallax-image" src="/images/frog-guide/damp-pond-habitat.webp" alt="A damp garden pond connected to a shaded wildlife refuge" fill sizes="100vw" />
        <span className="field-closing__shade" />
        <div className="shell field-closing__content" data-reveal>
          <span className="eyebrow eyebrow--light">Begin with the waterline</span>
          <h2>One safe edge.<br /><em>A whole new route.</em></h2>
          <div>
            <Link className="button button--lime" href="/garden-guides/make-a-mini-wildlife-pond">Build a wildlife pond <Icon name="arrow" size={18} /></Link>
            <Link className="field-closing__link" href="/wildlife-guides/butterfly-friendly-garden">Next: help butterflies <span>↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
