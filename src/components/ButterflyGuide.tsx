import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { FieldChecklist, FieldGuideProgress } from "@/components/FieldGuideTools";
import { GuideEndMatter } from "@/components/GuideEndMatter";

const kit = [
  "A sunny, sheltered border, large pot or window box",
  "Nectar-rich flowers for spring, summer and autumn",
  "A few caterpillar food plants suited to local species",
  "Peat-free compost and mulch for containers",
  "A shallow drinking dish with safe landing stones",
  "Flat stones or warm bare ground for basking",
  "Seed heads, stems and leaf litter for winter shelter",
];

const steps = [
  {
    number: "01",
    id: "choose-sun",
    eyebrow: "Begin with warmth",
    title: "Choose a sunny, sheltered place.",
    copy: [
      "Butterflies need warmth to become active and feed efficiently. Choose a border, patio edge or container group that receives several hours of sun and is protected from the strongest winds.",
      "A small space can work well when it is easy to see and reach. Start with one intentional patch rather than scattering isolated flowers across the whole garden.",
    ],
    image: "/images/butterfly-guide/before-border.webp",
    alt: "A sunny garden bed prepared for butterfly-friendly planting",
    focal: "50% 54%",
  },
  {
    number: "02",
    id: "plan-nectar",
    eyebrow: "Keep the table open",
    title: "Plan nectar from spring to autumn.",
    copy: [
      "Different butterflies fly at different times, so the most useful garden has flowers opening in succession. Combine early plants such as primrose and wallflower with summer lavender, marjoram and scabious, then extend the season with sedum, asters and flowering ivy.",
      "Choose mostly single, open flowers with accessible centres. Repeating the same plants in generous groups helps butterflies locate a reliable feeding patch quickly.",
    ],
    image: "/images/butterfly-guide/nectar-plants.webp",
    alt: "A selection of nectar-rich plants ready for a butterfly border",
    focal: "50% 48%",
  },
  {
    number: "03",
    id: "plant-in-drifts",
    eyebrow: "Make the colour easy to find",
    title: "Plant in clear, generous drifts.",
    copy: [
      "Place several plants of the same kind together instead of creating a single specimen collection. Repeated colour and scent make the feeding area more visible and reduce the distance butterflies travel between flowers.",
      "Use taller plants behind and lower flowers at the front, leaving a few sunny gaps for basking. Water new plants carefully while they establish, especially in containers and dry borders.",
    ],
    image: "/images/butterfly-guide/planting-border.webp",
    alt: "Hands planting open white flowers in a sunny garden border",
    focal: "50% 50%",
  },
  {
    number: "04",
    id: "feed-caterpillars",
    eyebrow: "Support the whole life cycle",
    title: "Grow food plants for caterpillars.",
    copy: [
      "Adult butterflies need nectar, but caterpillars need the right leaves. A managed nettle patch can help species including red admirals, commas, peacocks and small tortoiseshells, while grasses, holly, ivy and other plants support different butterflies and moths.",
      "Keep caterpillar plants in a sunny or partly sunny position and allow some chewed leaves. The damage is evidence that the habitat is working, not a reason to remove the plant.",
    ],
    image: "/images/butterfly-guide/nettle-patch.webp",
    alt: "Caterpillars feeding on nettles in a managed wildlife garden patch",
    focal: "50% 48%",
  },
  {
    number: "05",
    id: "leave-shelter",
    eyebrow: "Let the border age beautifully",
    title: "Leave shelter after flowering.",
    copy: [
      "Do not cut every stem or clear every leaf at once. Hollow stems, seed heads, ivy and dense evergreen growth can give insects places to rest or overwinter, while late flowers continue to provide food.",
      "Tidy in stages rather than stripping the whole border. Leave one section standing until spring, and avoid pesticides that can affect caterpillars and the insects sharing the same plants.",
    ],
    image: "/images/butterfly-guide/finished-border.webp",
    alt: "A colourful finished butterfly border with flowers at several heights",
    focal: "50% 48%",
  },
];

const faqs = [
  {
    question: "Which flowers are best for butterflies?",
    answer: "The strongest garden offers nectar across a long season. Lavender, marjoram, thyme, scabious, buddleia, sedum, asters, verbena and flowering ivy are useful examples, but choose plants that suit your soil, light and available space.",
  },
  {
    question: "Do I need a large wildflower meadow?",
    answer: "No. A sunny border, repeated containers or even one well-planted window box can provide a valuable feeding stop when flowers are nectar-rich and available across several months.",
  },
  {
    question: "Why should I keep nettles?",
    answer: "Nettles are caterpillar food plants for several familiar butterflies. A small managed patch in sun or light shade can support breeding in a way that nectar flowers alone cannot.",
  },
  {
    question: "Should I buy a butterfly house?",
    answer: "Planting, shelter and undisturbed stems are usually more important than a decorative box. Focus first on nectar, caterpillar food plants, warmth and places to overwinter naturally.",
  },
  {
    question: "How can I help butterflies in a small space?",
    answer: "Group pots of long-flowering plants in the sun, add a shallow drinking dish with stones, allow one compact caterpillar food plant where practical and leave some stems standing through winter.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to create a butterfly-friendly garden",
    description: "A practical UK guide to nectar planting, caterpillar food plants, sunny shelter and year-round butterfly habitat.",
    image: [
      "https://miniwildgarden.co.uk/images/butterfly-guide/butterfly-hero.webp",
      "https://miniwildgarden.co.uk/images/butterfly-guide/finished-border.webp",
    ],
    totalTime: "PT3H",
    supply: [
      { "@type": "HowToSupply", name: "Nectar-rich flowering plants" },
      { "@type": "HowToSupply", name: "Caterpillar food plants" },
      { "@type": "HowToSupply", name: "Peat-free compost" },
      { "@type": "HowToSupply", name: "Shallow water dish and stones" },
    ],
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.copy.join(" "),
      image: `https://miniwildgarden.co.uk${step.image}`,
      url: `https://miniwildgarden.co.uk/wildlife-guides/butterfly-friendly-garden#${step.id}`,
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

export function ButterflyGuide() {
  return (
    <main className="field-guide field-guide--butterfly">
      <FieldGuideProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="field-hero" data-parallax-root>
        <Image
          className="field-hero__image parallax-image"
          src="/images/butterfly-guide/butterfly-hero.webp"
          alt="An orange butterfly feeding on a bright garden flower"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "50% 50%" }}
        />
        <span className="field-hero__shade" />
        <span className="field-hero__halo" aria-hidden="true" />
        <div className="butterfly-drift" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <div className="shell field-hero__content">
          <Link className="back-link" href="/wildlife-guides">← All wildlife guides</Link>
          <span className="eyebrow eyebrow--light">Butterflies & moths · Field guide 05</span>
          <h1>Plant a border<br />that <em>moves with wings.</em></h1>
          <p className="lead">Create a long season of nectar, caterpillar food and warm shelter in a border, pot or tiny sunny corner.</p>
          <div className="field-hero__meta">
            <span><Icon name="clock" size={17} /> An afternoon</span>
            <span><Icon name="check" size={17} /> Borders or pots</span>
            <span><Icon name="butterfly" size={17} /> Whole life cycle</span>
          </div>
        </div>
        <a className="field-hero__scroll" href="#butterfly-basics"><span /> Follow the colour</a>
      </section>

      <section className="field-intro" id="butterfly-basics">
        <div className="shell field-intro__grid">
          <div data-reveal>
            <span className="eyebrow">More than a nectar bar</span>
            <h2>Feed the adult.<br /><em>Grow the next generation.</em></h2>
            <p>A butterfly-friendly garden supports the entire life cycle: sunny flowers for adults, the right leaves for caterpillars and undisturbed cover when the season turns cold.</p>
          </div>
          <div className="field-intro__stat" data-reveal>
            <strong>3</strong>
            <span>layers of habitat</span>
            <p>Nectar to feed. Leaves to breed. Shelter to survive the quieter months.</p>
          </div>
        </div>
        <div className="shell wildlife-pillars wildlife-pillars--butterfly">
          <article data-reveal><Icon name="flower" size={34} /><span>01</span><h3>Nectar</h3><p>Open flowers repeated in generous groups through the season.</p></article>
          <article data-reveal><Icon name="butterfly" size={34} /><span>02</span><h3>Caterpillars</h3><p>Food plants allowed to be eaten rather than treated as damage.</p></article>
          <article data-reveal><Icon name="sun" size={34} /><span>03</span><h3>Warm shelter</h3><p>Sun, wind protection and stems left standing when flowering ends.</p></article>
        </div>
      </section>

      <section className="field-body section--cream">
        <div className="shell field-layout">
          <aside className="field-nav" data-reveal>
            <span>In this guide</span>
            <nav>
              <a href="#butterfly-kit">What you need</a>
              {steps.map((step) => <a href={`#${step.id}`} key={step.id}>{step.number} {step.title}</a>)}
              <a href="#nectar-calendar">Flowering calendar</a>
              <a href="#butterfly-life-cycle">Whole life cycle</a>
              <a href="#butterfly-faq">Questions</a>
              <a href="#butterfly-sources">Sources</a>
            </nav>
          </aside>

          <div className="field-content">
            <section className="field-prepare" id="butterfly-kit">
              <div className="section-heading section-heading--article" data-reveal>
                <span className="eyebrow">Build a longer season</span>
                <h2>Choose plants for time, not just colour.</h2>
                <p>A beautiful border can also be a sequence of feeding opportunities, with something opening as another plant begins to fade.</p>
              </div>
              <FieldChecklist eyebrow="Butterfly garden kit" title="Plant a season that keeps moving." items={kit} />
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

            <section className="nectar-calendar" id="nectar-calendar">
              <div className="section-heading section-heading--article" data-reveal>
                <span className="eyebrow">March to the first frosts</span>
                <h2>Keep the nectar chain unbroken.</h2>
              </div>
              <div className="nectar-calendar__image" data-reveal>
                <Image src="/images/butterfly-guide/nectar-plants.webp" alt="A varied selection of butterfly-friendly flowering plants" fill sizes="100vw" />
                <span>Choose plants that suit your own soil and light.</span>
              </div>
              <div className="nectar-calendar__grid">
                <article data-reveal><span>Spring</span><h3>Start early</h3><p>Primrose, wallflower, aubretia, honesty and dandelion help the first active butterflies.</p></article>
                <article data-reveal><span>Summer</span><h3>Build abundance</h3><p>Lavender, marjoram, thyme, scabious, verbena and buddleia keep sunny borders busy.</p></article>
                <article data-reveal><span>Autumn</span><h3>Finish late</h3><p>Sedum, asters, verbena, ivy and late herbs extend feeding as other flowers disappear.</p></article>
              </div>
            </section>

            <section className="butterfly-cycle" id="butterfly-life-cycle">
              <div className="butterfly-cycle__copy" data-reveal>
                <span className="eyebrow eyebrow--light">The part most gardens miss</span>
                <h2>Let something be eaten.</h2>
                <p>Nectar attracts adults, but caterpillar food plants allow butterflies and moths to breed. Keep a managed patch of nettles, grasses, ivy or other suitable host plants and accept that some leaves will look chewed.</p>
              </div>
              <figure data-reveal>
                <Image src="/images/butterfly-guide/nettle-patch.webp" alt="Caterpillars feeding openly on nettle leaves" fill sizes="(max-width: 800px) 100vw, 48vw" />
              </figure>
            </section>

            <section className="field-cinema butterfly-cinema" data-parallax-root>
              <Image className="parallax-image" src="/images/butterfly-guide/finished-border.webp" alt="A finished flower border alive with butterflies" fill sizes="100vw" />
              <span className="field-cinema__shade" />
              <div data-reveal>
                <span className="eyebrow eyebrow--light">The garden in motion</span>
                <h2>Colour becomes habitat.</h2>
                <p>When flowers overlap through the year and caterpillar plants remain nearby, a decorative border starts to support an entire life cycle.</p>
              </div>
            </section>

            <section className="field-faq" id="butterfly-faq">
              <div className="section-heading section-heading--article" data-reveal>
                <span className="eyebrow">Good questions</span>
                <h2>Plant for more than the photograph.</h2>
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

            <section className="field-sources" id="butterfly-sources" data-reveal>
              <span className="eyebrow">Trusted guidance</span>
              <h2>Choose plants with purpose.</h2>
              <p>Use current UK guidance to extend flowering, support local species and understand which caterpillar food plants suit your garden.</p>
              <div>
                <a href="https://butterfly-conservation.org/how-you-can-help/get-involved/gardening/gardening-for-butterflies" target="_blank" rel="noreferrer"><span>Butterfly Conservation</span><strong>Gardening for butterflies</strong><i>↗</i></a>
                <a href="https://www.rhs.org.uk/wildlife/flowers-for-butterflies" target="_blank" rel="noreferrer"><span>RHS</span><strong>Flowers for butterflies</strong><i>↗</i></a>
                <a href="https://www.rhs.org.uk/wildlife/butterflies-in-your-garden" target="_blank" rel="noreferrer"><span>RHS</span><strong>Butterflies in your garden</strong><i>↗</i></a>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="field-closing" data-parallax-root>
        <Image className="parallax-image" src="/images/butterfly-guide/finished-border.webp" alt="A colourful wildlife border with butterflies moving between flowers" fill sizes="100vw" />
        <span className="field-closing__shade" />
        <div className="shell field-closing__content" data-reveal>
          <span className="eyebrow eyebrow--light">Start with one sunny patch</span>
          <h2>Flowers for now.<br /><em>Food for what comes next.</em></h2>
          <div>
            <Link className="button button--lime" href="/garden-guides/best-flowers-for-bees-and-pollinators">See the pollinator planting guide <Icon name="arrow" size={18} /></Link>
            <Link className="field-closing__link" href="/wildlife-guides/frog-friendly-space">Next: help frogs <span>↗</span></Link>
          </div>
        </div>
      </section>
      <GuideEndMatter slug="butterfly-friendly-garden" />
    </main>
  );
}
