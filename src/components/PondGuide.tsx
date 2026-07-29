import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PondMaterialsChecklist, PondProgress } from "@/components/PondGuideTools";
import { GuideEndMatter } from "@/components/GuideEndMatter";

const steps = [
  {
    number: "01",
    id: "choose-a-place",
    eyebrow: "Begin with the garden",
    title: "Choose a calm, useful position.",
    copy: [
      "Look for a place with a mixture of sun and shade, rather than a corner that bakes all day. A little light helps pond plants, while nearby planting gives amphibians and insects cover when they leave the water.",
      "Avoid digging beneath large mature trees, where roots can be damaged and falling leaves may overwhelm a small pond. Keep the finished water somewhere you can supervise if children or pets use the garden.",
    ],
    image: "/images/pond-guide/before-garden.webp",
    alt: "An open garden area before a wildlife pond is added",
    focal: "50% 52%",
  },
  {
    number: "02",
    id: "choose-a-method",
    eyebrow: "Shell or flexible liner",
    title: "Choose the build that suits your space.",
    copy: [
      "A preformed shell is straightforward to position and gives a dependable watertight shape. A flexible liner allows a more natural outline and makes it easier to design broad, shallow margins.",
      "Whichever method you choose, plan an obvious escape route before the pond fills. Preformed shells often have steep sides, so add a secure internal ramp or a bank of stones that reaches above the waterline.",
    ],
    image: "/images/pond-guide/materials.webp",
    alt: "Pond liner, stones, bricks, plants, watering can and tools laid out for a wildlife pond project",
    focal: "50% 50%",
  },
  {
    number: "03",
    id: "dig-and-level",
    eyebrow: "Measure twice",
    title: "Excavate, settle and level carefully.",
    copy: [
      "Place the shell upside down and mark around it, or use a hose or string to trace a liner pond. Check for cables, pipes and other underground services before breaking ground.",
      "Dig in stages, regularly checking the rim with a spirit level. A level pond looks better, holds more water and prevents one edge of the liner or shell becoming exposed when it fills.",
    ],
    image: "/images/pond-guide/level-pond-shell.webp",
    alt: "A person checking a preformed pond shell with a spirit level in an excavated garden hole",
    focal: "50% 54%",
  },
  {
    number: "04",
    id: "create-levels",
    eyebrow: "Build a varied shoreline",
    title: "Create shelves, shallows and a safe exit.",
    copy: [
      "Wildlife benefits from varied water depths. Use stable shelves for marginal plants, a shallow pebble beach for drinking insects and a deeper central area where the pond can remain cooler.",
      "If you use bricks or stones inside a liner pond, make sure there are no sharp edges pressing directly against the liner. Cover rough ground with underlay or a soft bed of sand before the liner goes in.",
    ],
    image: "/images/pond-guide/create-shelves.webp",
    alt: "Bricks and flat stones being arranged to create different levels in a lined garden pond",
    focal: "50% 50%",
  },
  {
    number: "05",
    id: "add-gravel",
    eyebrow: "Texture without pollution",
    title: "Add washed gravel and stable stones.",
    copy: [
      "Rinse gravel until the water runs mostly clear, then use it sparingly across shelves and the shallow edge. Rounded stone creates landing places and small crevices without introducing fertiliser-rich garden soil.",
      "Build the escape slope so it cannot slip or collapse. It should run from below the water to dry ground beyond the rim, giving hedgehogs and other animals a dependable way out if they fall in.",
    ],
    image: "/images/pond-guide/washed-gravel.webp",
    alt: "Clean washed gravel being poured from a container",
    focal: "50% 48%",
  },
  {
    number: "06",
    id: "fill-the-pond",
    eyebrow: "Let the water arrive slowly",
    title: "Fill with rainwater where possible.",
    copy: [
      "Collected rainwater is the best first choice because mains water can contain nutrients that encourage algae. Fill gradually so you can adjust shelves, smooth the liner and check that the edge remains level.",
      "If rainwater is not available, do not let the project stall indefinitely. Use the best practical option, then allow the pond to settle naturally and use rainwater for future top-ups whenever possible.",
    ],
    image: "/images/pond-guide/fill-rainwater.webp",
    alt: "Water pouring into a newly made stone-edged garden pond",
    focal: "50% 48%",
  },
  {
    number: "07",
    id: "plant-the-pond",
    eyebrow: "Plant for structure",
    title: "Add a modest mix of pond plants.",
    copy: [
      "Choose responsibly sourced plants suited to the size and depth of the pond. A mixture of submerged, floating and marginal growth creates cover, perches and underwater structure.",
      "Do not take plants from wild ponds. Avoid invasive non-native species and keep vigorous plants in baskets where appropriate so they can be managed without repeatedly disturbing the whole pond.",
    ],
    image: "/images/pond-guide/plant-pond.webp",
    alt: "Hands placing aquatic plants into a newly filled wildlife pond",
    focal: "50% 48%",
  },
  {
    number: "08",
    id: "finish-the-edge",
    eyebrow: "Connect water to land",
    title: "Soften the edge and let wildlife find it.",
    copy: [
      "Finish at least one side with a broad shallow margin, gravel beach or securely placed stones. Add low planting, logs or damp cover nearby so frogs, newts and insects can move between the pond and the wider garden.",
      "Do not add fish, frogspawn or buckets of water from another pond. Wildlife can arrive under its own power, while moving water or animals between ponds can spread disease and unwanted species.",
    ],
    image: "/images/pond-guide/shallow-edge.webp",
    alt: "A close view of a gently sloping shallow pond edge with gravel and water",
    focal: "50% 52%",
  },
];

const faqs = [
  {
    question: "How large does a wildlife pond need to be?",
    answer: "There is no minimum size that suddenly makes water useful. A container can provide drinking and bathing water, while a larger pond can support a wider range of plants and breeding wildlife. Safe access, varied depth and nearby cover matter more than creating a grand feature.",
  },
  {
    question: "Should I add a pump or fountain?",
    answer: "A wildlife pond does not normally need a pump. Still water supports many pond species, and a pump can disturb tiny animals. A decorative moving-water feature can be kept separate if that is part of your garden design.",
  },
  {
    question: "Can I use tap water?",
    answer: "Rainwater is preferable, especially for filling and topping up a small pond, because tap water can add nutrients that encourage algae. When rainwater is unavailable, use the most practical safe option rather than leaving the pond empty, then switch to collected rainwater for later top-ups.",
  },
  {
    question: "How soon will wildlife arrive?",
    answer: "Flying insects may investigate very quickly, while amphibians might take much longer and depend on nearby populations and connected habitat. Avoid moving animals into the pond; part of the pleasure is watching the community establish naturally.",
  },
  {
    question: "Is green water a sign that the pond has failed?",
    answer: "No. New ponds often pass through an algae-rich phase while plants establish. Avoid reflexively emptying and scrubbing the pond. Reduce nutrient inputs, give plants time and remove only excessive blanket weed by hand when necessary.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to make a wildlife pond",
    description: "A practical UK garden guide to creating a wildlife pond with shallow margins, safe escape routes, rainwater and responsibly sourced plants.",
    image: [
      "https://miniwildgarden.co.uk/images/pond-guide/finished-low-angle.webp",
      "https://miniwildgarden.co.uk/images/pond-guide/finished-overhead.webp",
    ],
    totalTime: "P2D",
    supply: [
      { "@type": "HowToSupply", name: "Pond liner or preformed shell" },
      { "@type": "HowToSupply", name: "Pond underlay or builders’ sand" },
      { "@type": "HowToSupply", name: "Washed gravel and stones" },
      { "@type": "HowToSupply", name: "Responsibly sourced aquatic plants" },
      { "@type": "HowToSupply", name: "Rainwater" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Spade" },
      { "@type": "HowToTool", name: "Spirit level" },
      { "@type": "HowToTool", name: "Wheelbarrow" },
    ],
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.copy.join(" "),
      image: `https://miniwildgarden.co.uk${step.image}`,
      url: `https://miniwildgarden.co.uk/garden-guides/make-a-mini-wildlife-pond#${step.id}`,
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

export function PondGuide() {
  return (
    <main className="pond-guide">
      <PondProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="pond-guide-hero" data-parallax-root>
        <Image
          className="pond-guide-hero__image parallax-image"
          src="/images/pond-guide/finished-low-angle.webp"
          alt="A finished wildlife pond seen from a low angle across the water"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "50% 56%" }}
        />
        <span className="pond-guide-hero__shade" />
        <span className="pond-guide-hero__glow" aria-hidden="true" />
        <span className="pond-guide-ripple pond-guide-ripple--one" aria-hidden="true" />
        <span className="pond-guide-ripple pond-guide-ripple--two" aria-hidden="true" />
        <div className="shell pond-guide-hero__content">
          <Link className="back-link" href="/garden-guides">← All garden projects</Link>
          <span className="eyebrow eyebrow--light">Flagship field guide · Water</span>
          <h1>How to make a <em>wildlife pond.</em></h1>
          <p className="lead">Create shallow water, safe exits and a living edge that turns an ordinary patch of garden into a meeting place for wildlife.</p>
          <div className="pond-guide-hero__meta">
            <span><Icon name="clock" size={17} /> A weekend</span>
            <span><Icon name="check" size={17} /> Beginner friendly</span>
            <span><Icon name="pond" size={17} /> Small or large gardens</span>
          </div>
        </div>
        <a className="pond-guide-scroll" href="#pond-introduction" aria-label="Start reading the guide"><span />Start the guide</a>
      </section>

      <section className="pond-introduction" id="pond-introduction">
        <div className="shell pond-introduction__grid">
          <div className="pond-introduction__statement" data-reveal>
            <span className="eyebrow">Just add water</span>
            <h2>A pond changes the <em>rhythm</em> of a garden.</h2>
          </div>
          <div className="pond-introduction__copy" data-reveal>
            <p>Water gives wildlife somewhere to drink, bathe, hunt, shelter and breed. The pond does not need to look pristine. It needs usable edges, varied structure and enough time to become part of the garden.</p>
            <p>This guide shows a larger pond build using either a preformed shell or flexible liner. A watertight container can use the same principles when digging is not possible.</p>
          </div>
        </div>
      </section>

      <section className="pond-transformation" aria-label="Wildlife pond transformation">
        <div className="pond-transformation__before" data-reveal>
          <Image src="/images/pond-guide/before-garden.webp" alt="The garden area before the pond project" fill sizes="50vw" />
          <span>Before</span>
        </div>
        <div className="pond-transformation__after" data-reveal>
          <Image src="/images/pond-guide/finished-overhead.webp" alt="A completed circular wildlife pond viewed from above" fill sizes="50vw" />
          <span>After</span>
        </div>
        <div className="pond-transformation__line" aria-hidden="true"><i /></div>
      </section>

      <section className="section pond-guide-body">
        <div className="shell pond-guide-layout">
          <aside className="pond-guide-nav" data-reveal aria-label="Guide contents">
            <span className="pond-guide-nav__label">In this guide</span>
            <nav>
              <a href="#plan">Plan the project</a>
              <a href="#materials">Materials checklist</a>
              <a href="#steps">Eight build steps</a>
              <a href="#wildlife-arrives">When wildlife arrives</a>
              <a href="#maintenance">Seasonal care</a>
              <a href="#mistakes">Mistakes to avoid</a>
              <a href="#questions">Questions answered</a>
              <a href="#sources">Trusted sources</a>
            </nav>
            <div className="pond-guide-nav__note"><Icon name="leaf" size={22} /><p>Take photographs as you build. They will help you notice how the pond changes over its first year.</p></div>
          </aside>

          <div className="pond-guide-main">
            <section className="pond-plan" id="plan">
              <div className="pond-section-heading" data-reveal>
                <span className="eyebrow">Before the first spade</span>
                <h2>Plan for life at the edge.</h2>
                <p>The most important part of a wildlife pond is often not the deepest water. It is the meeting point between water and land.</p>
              </div>
              <div className="pond-plan__cards">
                <article data-reveal><span>01</span><h3>Light</h3><p>A mixture of sun and shade supports plants without turning a small pond into an all-day heat trap.</p></article>
                <article data-reveal><span>02</span><h3>Access</h3><p>Build a shallow margin or stable ramp that reaches beyond the waterline from the start.</p></article>
                <article data-reveal><span>03</span><h3>Cover</h3><p>Connect the pond to low planting, logs, stones and damp shelter rather than isolating it in bare lawn.</p></article>
              </div>

              <div className="pond-safety" data-reveal>
                <div className="pond-safety__icon">!</div>
                <div><span>Safety first</span><h3>Water needs thoughtful supervision.</h3><p>Check for underground services before digging. Site every pond with children, visitors and pets in mind, use barriers where appropriate, and never rely on shallow water alone as a safety measure.</p></div>
              </div>
            </section>

            <section id="materials" className="pond-materials-section">
              <PondMaterialsChecklist />
              <figure className="pond-container-option" data-reveal>
                <Image src="/images/pond-guide/container-pond-option.webp" alt="A broad black watertight container suitable for a small wildlife pond" fill sizes="(max-width: 840px) 100vw, 50vw" />
                <figcaption><span>Cannot dig?</span><strong>Use a watertight container.</strong><p>Add internal and external access ramps, compact plants and nearby cover. The same wildlife-first principles still apply.</p></figcaption>
              </figure>
            </section>

            <section className="pond-steps" id="steps">
              <div className="pond-section-heading" data-reveal>
                <span className="eyebrow">Eight considered steps</span>
                <h2>Build the pond slowly.</h2>
                <p>Pause at each stage and check stability, level and access. It is easier to correct the structure before the water goes in.</p>
              </div>

              {steps.map((step, index) => (
                <article className={`pond-step ${index % 2 ? "pond-step--reverse" : ""}`} id={step.id} key={step.number}>
                  <div className="pond-step__image" data-reveal>
                    <Image src={step.image} alt={step.alt} fill sizes="(max-width: 840px) 100vw, 48vw" style={{ objectPosition: step.focal }} />
                    <span className="pond-step__number">{step.number}</span>
                  </div>
                  <div className="pond-step__copy" data-reveal>
                    <span className="eyebrow">{step.eyebrow}</span>
                    <h3>{step.title}</h3>
                    {step.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {step.number === "05" && (
                      <figure className="pond-step__detail">
                        <Image src="/images/pond-guide/wildlife-ramp.webp" alt="A broad gravel and stone ramp leading gently out of a wildlife pond" fill sizes="300px" />
                        <figcaption>The escape route should remain usable as the water level rises and falls.</figcaption>
                      </figure>
                    )}
                  </div>
                </article>
              ))}
            </section>

            <section className="pond-arrival" id="wildlife-arrives">
              <div className="pond-arrival__copy" data-reveal>
                <span className="eyebrow eyebrow--light">Then step back</span>
                <h2>Let the pond become its own place.</h2>
                <p>A newly filled pond may look sparse, cloudy or green before plants establish. Resist the urge to keep resetting it. Observe, make small adjustments and allow natural colonisation to unfold.</p>
                <div className="pond-arrival__notes">
                  <span><strong>Days</strong> Flying insects may investigate.</span>
                  <span><strong>Months</strong> Plants settle and underwater life develops.</span>
                  <span><strong>Seasons</strong> Amphibians may arrive where connected habitat exists.</span>
                </div>
              </div>
              <div className="pond-arrival__gallery">
                <figure data-reveal><Image src="/images/pond-guide/pond-settling.webp" alt="A naturalising wildlife pond with emergent plants and reflections" fill sizes="(max-width: 840px) 100vw, 34vw" /></figure>
                <figure data-reveal><Image src="/images/pond-guide/frog-dragonfly.webp" alt="A frog beside a garden pond with a dragonfly in flight" fill sizes="(max-width: 840px) 100vw, 28vw" /></figure>
              </div>
            </section>

            <section className="pond-maintenance" id="maintenance">
              <div className="pond-maintenance__image" data-reveal>
                <Image src="/images/pond-guide/autumn-maintenance.webp" alt="Leaves being gently removed from a wildlife pond beside a watering can" fill sizes="(max-width: 840px) 100vw, 46vw" />
              </div>
              <div className="pond-maintenance__copy" data-reveal>
                <span className="eyebrow">Gentle seasonal care</span>
                <h2>Maintain less. Notice more.</h2>
                <div className="pond-maintenance__seasons">
                  <div><strong>Spring</strong><p>Check access points, divide only overgrown plants and watch for emerging wildlife.</p></div>
                  <div><strong>Summer</strong><p>Allow natural fluctuations. Top up with rainwater when genuinely needed.</p></div>
                  <div><strong>Autumn</strong><p>Remove excessive fallen leaves and leave cleared material beside the pond briefly so small creatures can return.</p></div>
                  <div><strong>Winter</strong><p>Leave hollow stems and marginal growth standing where safe, then cut back selectively near the end of winter.</p></div>
                </div>
              </div>
            </section>

            <section className="pond-mistakes" id="mistakes">
              <div className="pond-section-heading" data-reveal>
                <span className="eyebrow">Common mistakes</span>
                <h2>What not to add.</h2>
              </div>
              <div className="pond-mistakes__grid">
                <article data-reveal><span>×</span><h3>Fish</h3><p>Fish eat eggs, larvae and other small pond life. Keep a wildlife pond and ornamental fish pond separate.</p></article>
                <article data-reveal><span>×</span><h3>Wild-collected plants</h3><p>Buy responsibly sourced plants rather than removing them from natural ponds and wetlands.</p></article>
                <article data-reveal><span>×</span><h3>Transferred spawn</h3><p>Do not move frogspawn, animals or buckets of pond water between sites because disease and invasive species can travel too.</p></article>
                <article data-reveal><span>×</span><h3>Rich compost</h3><p>Ordinary compost and fertile soil release nutrients into the water. Use aquatic compost only where the chosen plant requires it.</p></article>
                <article data-reveal><span>×</span><h3>Sheer sides</h3><p>A deep container or shell without a dependable ramp can trap mammals, amphibians and insects.</p></article>
                <article data-reveal><span>×</span><h3>Constant deep cleaning</h3><p>Repeated emptying destroys the developing habitat. Intervene lightly and only when a genuine problem needs solving.</p></article>
              </div>
            </section>

            <section className="pond-faq" id="questions">
              <div className="pond-section-heading" data-reveal>
                <span className="eyebrow">Good questions</span>
                <h2>Before the wildlife moves in.</h2>
              </div>
              <div className="pond-faq__list">
                {faqs.map((faq, index) => (
                  <details key={faq.question} data-reveal open={index === 0}>
                    <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<i>+</i></summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="pond-sources" id="sources" data-reveal>
              <span className="eyebrow">Read further</span>
              <h2>Trusted UK guidance.</h2>
              <p>This guide has been written as practical garden information and checked against current advice from established UK conservation and horticultural organisations.</p>
              <div className="pond-sources__links">
                <a href="https://www.rhs.org.uk/ponds/wildlife-ponds" target="_blank" rel="noreferrer"><span>RHS</span><strong>Wildlife ponds</strong><i>↗</i></a>
                <a href="https://www.rspb.org.uk/helping-nature/what-you-can-do/activities/making-a-wildlife-pond" target="_blank" rel="noreferrer"><span>RSPB</span><strong>Make a wildlife pond</strong><i>↗</i></a>
                <a href="https://www.wildlifetrusts.org/actions/how-build-pond" target="_blank" rel="noreferrer"><span>The Wildlife Trusts</span><strong>How to build a pond</strong><i>↗</i></a>
              </div>
              <small>Last reviewed: July 2026</small>
            </section>
          </div>
        </div>
      </section>

      <section className="pond-guide-closing">
        <Image src="/images/pond-guide/frog-dragonfly.webp" alt="A frog and dragonfly beside a garden wildlife pond" fill sizes="100vw" />
        <span className="pond-guide-closing__shade" />
        <div className="shell pond-guide-closing__content" data-reveal>
          <span className="eyebrow eyebrow--light">The first visitor changes everything</span>
          <h2>Build the water.<br />Leave room for surprise.</h2>
          <div>
            <Link className="button button--lime" href="/wildlife-guides/frog-friendly-space">Help frogs beyond the pond <Icon name="arrow" size={18} /></Link>
            <Link className="pond-guide-closing__link" href="/garden-guides">Explore another project <span>↗</span></Link>
          </div>
        </div>
      </section>
      <GuideEndMatter slug="make-a-mini-wildlife-pond" />
    </main>
  );
}
