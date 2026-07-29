import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { FieldChecklist, FieldGuideProgress } from "@/components/FieldGuideTools";
import { GuideEndMatter } from "@/components/GuideEndMatter";

const tools = [
  "The boundary owner’s permission and your neighbour’s agreement",
  "Tape measure, pencil and a square or simple cardboard template",
  "Drill and coping saw, pad saw or suitable hand saw",
  "Work gloves, eye protection and sandpaper",
  "A Hedgehog Highway label or weatherproof marker",
  "A clear, sheltered route on both sides of the fence",
];

const steps = [
  {
    number: "01",
    id: "plan-the-route",
    eyebrow: "Think beyond one garden",
    title: "Choose a route that actually connects.",
    copy: [
      "A highway is most valuable when it links several gardens rather than opening into another enclosed space. Speak to the owner of the boundary and, where possible, ask the next neighbour to continue the route.",
      "Choose a ground-level position with clear access on both sides. Avoid fence posts, horizontal rails, concrete gravel boards, buried cables and places where a pet could reach a road or other danger.",
    ],
    image: "/images/hedgehog-guide/fence-before.webp",
    alt: "A continuous wooden garden fence before a hedgehog access point is made",
    focal: "50% 54%",
  },
  {
    number: "02",
    id: "measure-the-hole",
    eyebrow: "The recognised size",
    title: "Mark a 13 cm by 13 cm opening.",
    copy: [
      "A square opening measuring 13 cm by 13 cm is sufficient for a hedgehog and is too small for nearly all pets. Mark it at the very bottom of the panel so the animal does not need to climb or squeeze over a lip.",
      "A reusable cardboard template makes it easier to repeat the same opening along a connected street. Check the dimensions twice before cutting and keep the outline clear of nails, screws and panel joints.",
    ],
    image: "/images/hedgehog-guide/measure-opening.webp",
    alt: "A person measuring the bottom of a wooden fence before marking a hedgehog opening",
    focal: "54% 50%",
  },
  {
    number: "03",
    id: "cut-safely",
    eyebrow: "Slow, controlled work",
    title: "Cut the panel without weakening it.",
    copy: [
      "Wear eye protection and gloves, and use a tool suited to the panel. A drilled starter hole can help a coping or pad saw begin the cut. Keep hands away from the blade and ask an experienced adult or tradesperson to do the work if you are not confident.",
      "Cut only the vertical boards needed for the opening. Do not cut structural posts or rails. If the boundary uses metal, masonry, composite panels or a concrete base, choose a safe alternative such as a channel beneath a gate or professional installation.",
    ],
    image: "/images/hedgehog-guide/cut-opening.webp",
    alt: "A person carefully cutting a ground-level opening in a wooden fence panel",
    focal: "50% 55%",
  },
  {
    number: "04",
    id: "finish-the-edges",
    eyebrow: "Make every edge kind",
    title: "Smooth, inspect and keep it clear.",
    copy: [
      "Sand rough timber and remove exposed nails, wire, staples or splinters. Check both sides at ground level, because an edge that looks harmless from above can catch a leg or scrape an animal moving through at night.",
      "The route should open onto soil, grass or a stable path rather than a drop, drain or loose pile of materials. Keep the first metre free from netting, chemicals, deep water and machinery.",
    ],
    image: "/images/hedgehog-guide/hedgehog-through-fence.webp",
    alt: "A hedgehog walking through a completed ground-level opening in a wooden fence",
    focal: "50% 52%",
  },
  {
    number: "05",
    id: "label-and-connect",
    eyebrow: "Protect the route for years",
    title: "Label the highway and invite the street in.",
    copy: [
      "A small sign tells future owners, gardeners and fencing contractors that the opening is intentional. It reduces the chance of the route being blocked during maintenance or a garden redesign.",
      "Encourage neighbours to add their own opening and record yours on the BIG Hedgehog Map. A single hole helps; a linked chain of gardens creates the feeding and nesting range hedgehogs need.",
    ],
    image: "/images/hedgehog-guide/highway-sign.webp",
    alt: "A Hedgehog Highway sign beside a sheltered opening beneath garden foliage",
    focal: "50% 48%",
  },
];

const faqs = [
  {
    question: "Does the opening have to be exactly 13 cm square?",
    answer: "The standard recommendation is 13 cm by 13 cm. It is large enough for a hedgehog and small enough to exclude nearly all pets. A slightly different shape can work, but it must remain smooth, unobstructed and generous enough for an adult hedgehog.",
  },
  {
    question: "Can I cut a shared fence without asking?",
    answer: "No. Confirm who owns the fence and get permission before altering it. A highway works best as a shared project, so agree the position with the neighbour on the other side as well.",
  },
  {
    question: "What if the fence has a concrete gravel board?",
    answer: "Do not attempt to cut a concrete base with ordinary hand tools. Look for a safe gap beneath a gate, an opening through a suitable wall, a short tunnel under the boundary, or ask a competent contractor about a purpose-made solution.",
  },
  {
    question: "Will a highway guarantee hedgehogs visit?",
    answer: "No. It removes one barrier, but visits depend on local hedgehog populations and the wider habitat. Water, natural food, shelter, safe ponds and fewer hazards make the connected route much more useful.",
  },
  {
    question: "Should I put food beside the opening?",
    answer: "It is better to keep the entrance clear and sheltered. If you offer supplementary food, place a small amount of suitable meaty hedgehog or cat or dog food elsewhere, provide fresh water and clean the feeding area regularly. Never offer milk.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to make a hedgehog highway",
    description: "Create a safe 13 cm by 13 cm access point through a wooden garden fence to connect neighbouring hedgehog habitat.",
    image: [
      "https://miniwildgarden.co.uk/images/hedgehog-guide/hedgehog-through-fence.webp",
      "https://miniwildgarden.co.uk/images/hedgehog-guide/connected-garden.webp",
    ],
    totalTime: "PT1H",
    supply: [
      { "@type": "HowToSupply", name: "Boundary owner permission" },
      { "@type": "HowToSupply", name: "Hedgehog Highway label" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Tape measure" },
      { "@type": "HowToTool", name: "Pencil" },
      { "@type": "HowToTool", name: "Coping saw or pad saw" },
      { "@type": "HowToTool", name: "Sandpaper" },
    ],
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.copy.join(" "),
      image: `https://miniwildgarden.co.uk${step.image}`,
      url: `https://miniwildgarden.co.uk/garden-guides/make-a-hedgehog-highway#${step.id}`,
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

export function HedgehogHighwayGuide() {
  return (
    <main className="field-guide field-guide--hedgehog">
      <FieldGuideProgress tone="leaf" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="field-hero" data-parallax-root>
        <Image
          className="field-hero__image parallax-image"
          src="/images/hedgehog-guide/hedgehog-through-fence.webp"
          alt="A hedgehog emerging through a small opening at the base of a wooden fence"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "50% 54%" }}
        />
        <span className="field-hero__shade" />
        <span className="field-hero__halo" aria-hidden="true" />
        <div className="field-hero__motif" aria-hidden="true"><i /><i /><i /></div>
        <div className="shell field-hero__content">
          <Link className="back-link" href="/garden-guides">← All garden projects</Link>
          <span className="eyebrow eyebrow--light">Connected gardens · Field guide 02</span>
          <h1>Open a door<br />to the <em>night garden.</em></h1>
          <p className="lead">Create a safe hedgehog highway through a wooden fence, then turn one small opening into a connected neighbourhood habitat.</p>
          <div className="field-hero__meta">
            <span><Icon name="clock" size={17} /> About 1 hour</span>
            <span><Icon name="check" size={17} /> Beginner friendly</span>
            <span>13 × 13 cm opening</span>
          </div>
        </div>
        <a className="field-hero__scroll" href="#why-connect"><span /> Follow the route</a>
      </section>

      <section className="field-intro" id="why-connect">
        <div className="shell field-intro__grid">
          <div data-reveal>
            <span className="eyebrow">Why connection matters</span>
            <h2>A garden can feed a visitor.<br /><em>A street can support a life.</em></h2>
            <p>Hedgehogs move through many gardens to find food, mates and nesting places. Solid fences divide that habitat into isolated islands. A carefully finished ground-level opening restores one piece of the route.</p>
          </div>
          <div className="field-intro__stat" data-reveal>
            <strong>13</strong><span>centimetres</span><p>The recommended height and width of a square Hedgehog Highway.</p>
          </div>
        </div>
        <div className="shell field-before-after" data-reveal>
          <figure>
            <Image src="/images/hedgehog-guide/fence-before.webp" alt="A closed wooden garden boundary" fill sizes="50vw" />
            <figcaption><span>Before</span> One garden ends here.</figcaption>
          </figure>
          <figure>
            <Image src="/images/hedgehog-guide/connected-garden.webp" alt="A hedgehog using a finished garden route through a fence" fill sizes="50vw" />
            <figcaption><span>After</span> The habitat continues.</figcaption>
          </figure>
          <i aria-hidden="true">→</i>
        </div>
      </section>

      <section className="field-body section--cream">
        <div className="shell field-layout">
          <aside className="field-nav" data-reveal>
            <span>In this guide</span>
            <nav>
              <a href="#prepare">Before you cut</a>
              {steps.map((step) => <a href={`#${step.id}`} key={step.id}>{step.number} {step.title}</a>)}
              <a href="#safer-garden">A safer route</a>
              <a href="#hedgehog-faq">Questions</a>
              <a href="#hedgehog-sources">Sources</a>
            </nav>
          </aside>

          <div className="field-content">
            <section className="field-prepare" id="prepare">
              <div className="section-heading section-heading--article" data-reveal>
                <span className="eyebrow">Before the first cut</span>
                <h2>Permission. Position. Protection.</h2>
                <p>The opening is simple. Choosing the right boundary and finishing it safely is the real project.</p>
              </div>
              <div className="field-rule-grid">
                <article data-reveal><span>01</span><h3>Ask first</h3><p>Confirm ownership and agree the location with the neighbour on the other side.</p></article>
                <article data-reveal><span>02</span><h3>Check both sides</h3><p>Avoid roads, drops, drains, loose wire, pet hazards and exposed open ground.</p></article>
                <article data-reveal><span>03</span><h3>Protect the fence</h3><p>Cut boards only. Leave posts, rails, fixings and concrete sections untouched.</p></article>
              </div>
              <FieldChecklist eyebrow="Project checklist" title="Gather before you begin." items={tools} tone="leaf" />
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

            <section className="field-cinema" data-parallax-root>
              <Image className="parallax-image" src="/images/hedgehog-guide/connected-garden.webp" alt="A hedgehog beside a finished garden access route" fill sizes="100vw" />
              <span className="field-cinema__shade" />
              <div data-reveal>
                <span className="eyebrow eyebrow--light">The bigger idea</span>
                <h2>Do not stop at the fence.</h2>
                <p>Keep the route useful with water, natural cover and a garden that is safer after dark.</p>
              </div>
            </section>

            <section className="field-safety" id="safer-garden">
              <div className="section-heading section-heading--article" data-reveal>
                <span className="eyebrow">A safer connected garden</span>
                <h2>Remove the traps along the way.</h2>
              </div>
              <div className="field-safety__grid">
                <article data-reveal><Icon name="pond" size={26} /><h3>Give ponds an exit</h3><p>Add a stable ramp, shallow beach or half-submerged stones so an animal can climb out at any water level.</p></article>
                <article data-reveal><Icon name="leaf" size={26} /><h3>Check before cutting</h3><p>Search long grass and undergrowth before strimming or mowing, especially around edges and sheltered corners.</p></article>
                <article data-reveal><Icon name="logs" size={26} /><h3>Build bonfires late</h3><p>Build on the day of lighting or move the pile immediately beforehand so a hidden nest is not set alight.</p></article>
                <article data-reveal><Icon name="gate" size={26} /><h3>Lift loose netting</h3><p>Keep sports and crop netting taut and raised from the ground when it is not being used.</p></article>
              </div>
            </section>

            <section className="field-faq" id="hedgehog-faq">
              <div className="section-heading section-heading--article" data-reveal>
                <span className="eyebrow">Good questions</span>
                <h2>Before you open the boundary.</h2>
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

            <section className="field-sources" id="hedgehog-sources" data-reveal>
              <span className="eyebrow">Trusted guidance</span>
              <h2>Read beyond this garden.</h2>
              <p>This guide follows UK conservation guidance. Check the latest advice before changing a boundary or helping an animal that appears unwell.</p>
              <div>
                <a href="https://www.hedgehogstreet.org/help-hedgehogs/link-your-garden/" target="_blank" rel="noreferrer"><span>Hedgehog Street</span><strong>Link your garden</strong><i>↗</i></a>
                <a href="https://www.wildlifetrusts.org/actions/how-create-hedgehog-hole" target="_blank" rel="noreferrer"><span>The Wildlife Trusts</span><strong>How to create a hedgehog hole</strong><i>↗</i></a>
                <a href="https://www.britishhedgehogs.org.uk/helping-hedgehogs-2/" target="_blank" rel="noreferrer"><span>BHPS</span><strong>Helping hedgehogs safely</strong><i>↗</i></a>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="field-closing" data-parallax-root>
        <Image className="parallax-image" src="/images/hedgehog-guide/highway-sign.webp" alt="A Hedgehog Highway sign in a leafy garden boundary" fill sizes="100vw" />
        <span className="field-closing__shade" />
        <div className="shell field-closing__content" data-reveal>
          <span className="eyebrow eyebrow--light">Next field guide</span>
          <h2>Now make the garden<br /><em>worth travelling to.</em></h2>
          <div>
            <Link className="button button--lime" href="/wildlife-guides/help-garden-birds">Help garden birds safely <Icon name="arrow" size={18} /></Link>
            <Link className="field-closing__link" href="/wildlife-guides/welcome-hedgehogs">More ways to welcome hedgehogs <span>↗</span></Link>
          </div>
        </div>
      </section>
      <GuideEndMatter slug="make-a-hedgehog-highway" />
    </main>
  );
}
