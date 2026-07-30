import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { PlotlyAppPromo } from "@/components/PlotlyAppPromo";

export const metadata: Metadata = {
  title: "Start this week: five wildlife garden actions",
  description:
    "A practical first week of wildlife gardening for UK gardens and balconies: clean water, flowers, shelter, safer edges and a simple plan.",
  alternates: { canonical: "/start-this-week" },
  openGraph: {
    title: "Start this week: five wildlife garden actions",
    description: "Five small, achievable actions to make space for wildlife this week, whether you have a garden or a balcony.",
    type: "article",
    url: "/start-this-week",
    images: [{ url: "/images/hands-gardening.webp", alt: "Hands planting in a wildlife-friendly garden" }],
  },
};

const weekActions = [
  {
    day: "Day 1",
    time: "15 minutes",
    title: "Add clean, shallow water",
    copy: "Birds, bees and other insects need safe drinking and bathing water. A plant saucer with stones is enough to begin.",
    href: "/garden-guides/make-an-insect-drinking-station",
    cta: "Make an insect water dish",
    image: "/images/insect-water-guide/bees-on-stones.webp",
    alt: "Bees landing safely on stones in a shallow water dish",
  },
  {
    day: "Day 2",
    time: "30 minutes",
    title: "Plant or free one flowering pot",
    copy: "Open flowers feed pollinators. One sunny pot of herbs or single blooms is more useful than a mixed tray of doubles.",
    href: "/wildlife-guides/garden-for-bees",
    cta: "Garden for bees",
    image: "/images/bee-guide/container-planting.webp",
    alt: "Bee-friendly plants growing in containers",
  },
  {
    day: "Day 3",
    time: "45 minutes",
    title: "Build a quiet log and leaf corner",
    copy: "Shelter is as important as food. A low pile of untreated wood and leaves gives insects and amphibians somewhere to rest.",
    href: "/garden-guides/build-a-log-and-leaf-habitat",
    cta: "Build a habitat pile",
    image: "/images/log-guide/finished-habitat.webp",
    alt: "A finished log and leaf habitat in a garden corner",
  },
  {
    day: "Day 4",
    time: "20 minutes",
    title: "Check hazards and edges",
    copy: "Walk the garden at ground level. Cover drains, raise netting, leave an escape route on any open water, and note where access is blocked.",
    href: "/wildlife-guides/welcome-hedgehogs",
    cta: "Make the garden safer for hedgehogs",
    image: "/images/hedgehog.webp",
    alt: "A hedgehog using a small opening at the base of a wooden fence",
  },
  {
    day: "Day 5",
    time: "10 minutes",
    title: "Score your garden and save a plan",
    copy: "Use the planner to see which habitat layers you already have, then keep the plan in My Garden so the next change is obvious.",
    href: "/planner",
    cta: "Open the garden planner",
    image: "/images/garden-bed.webp",
    alt: "A layered wildlife garden with flowers and water",
  },
] as const;

const principles = [
  { title: "Start smaller than you think", text: "One completed corner beats an unfinished redesign." },
  { title: "Connect, do not collect", text: "Water, flowers and shelter work best when they sit close enough for wildlife to move between them." },
  { title: "Watch before you tidy", text: "A little mess is often habitat. Leave seed heads, leaves and hollow stems where they are safe." },
];

export default function StartThisWeekPage() {
  return (
    <main>
      <PageHero
        eyebrow="Beginner path"
        title="Start this week. Five small changes for wildlife."
        intro="A calm, practical first week for any British garden, balcony or tiny outdoor corner. No redesign required."
        image="/images/hands-gardening.webp"
        imageAlt="Hands planting seedlings in a wildlife-friendly garden bed"
        focal="48% 48%"
      />

      <section className="section start-week-intro">
        <div className="shell start-week-intro__grid">
          <div data-reveal>
            <span className="eyebrow">How this works</span>
            <h2>One action a day. Observe what arrives.</h2>
          </div>
          <div data-reveal>
            <p>
              This path is designed for busy people with ordinary outdoor space. Follow the days in order if you can, or pick the one that fits today.
              Each step links to a fuller guide when you want more detail.
            </p>
            <p>
              By the end of the week you should have water, some nectar, a shelter corner, safer edges and a simple plan for what to do next.
            </p>
            <div className="start-week-intro__actions">
              <Link className="button button--dark" href="/planner">
                Prefer to score your garden first? <Icon name="arrow" size={18} />
              </Link>
              <Link className="text-link" href="/guides?time=quick">
                Browse all quick wins <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section start-week-actions" aria-labelledby="week-actions-title">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">Your first week</span>
              <h2 id="week-actions-title">Do these five things.</h2>
            </div>
            <p>Each step is short enough to finish after work. Save the linked guides if you want to return later.</p>
          </div>

          <ol className="start-week-list">
            {weekActions.map((action, index) => (
              <li className="start-week-item" key={action.title} data-reveal>
                <div className="start-week-item__copy">
                  <span className="start-week-item__meta">
                    <strong>{action.day}</strong>
                    <i />
                    <span>{action.time}</span>
                  </span>
                  <h3>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {action.title}
                  </h3>
                  <p>{action.copy}</p>
                  <Link className="button button--lime" href={action.href}>
                    {action.cta} <Icon name="arrow" size={18} />
                  </Link>
                </div>
                <figure className="start-week-item__media">
                  <Image src={action.image} alt={action.alt} fill sizes="(max-width: 800px) 100vw, 42vw" />
                </figure>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section start-week-principles">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">Keep it calm</span>
              <h2>Three principles for the first month.</h2>
            </div>
            <p>Use these when you are unsure whether to add more or leave the garden alone.</p>
          </div>
          <div className="start-week-principles__grid">
            {principles.map((item, index) => (
              <article key={item.title} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="start-week-next">
        <div className="shell start-week-next__inner" data-reveal>
          <div>
            <span className="eyebrow eyebrow--light">After your first week</span>
            <h2>Keep the plan where you can see it.</h2>
            <p>
              Open My Garden to track progress, note what visits, and return to saved guides. When you want a bigger project, build a mini pond or plant a longer flowering season.
            </p>
          </div>
          <div className="start-week-next__actions">
            <Link className="button button--lime" href="/my-garden">
              Open My Garden <Icon name="arrow" size={18} />
            </Link>
            <Link className="button button--outline-light" href="/garden-guides/make-a-mini-wildlife-pond">
              Build a wildlife pond
            </Link>
          </div>
        </div>
      </section>

      <section className="section plotly-promo-section">
        <div className="shell">
          <PlotlyAppPromo compact />
        </div>
      </section>
    </main>
  );
}
