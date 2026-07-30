import Image from "next/image";
import Link from "next/link";
import { GuideCard } from "@/components/GuideCard";
import { Icon } from "@/components/Icon";
import { gardenGuides, seasons, wildlifeGuides } from "@/lib/content";
import { seasonalImages } from "@/lib/images";

const featuredProjectSlugs = [
  "make-a-mini-wildlife-pond",
  "best-flowers-for-bees-and-pollinators",
  "build-a-log-and-leaf-habitat",
  "create-a-wildlife-friendly-balcony",
] as const;

export default function Home() {
  return (
    <main>
      <section className="cinematic-hero" data-parallax-root>
        <Image
          className="cinematic-hero__image parallax-image"
          src="/images/hero-garden.webp"
          alt="A thriving wildlife garden with a pond, wildflowers and a nesting box"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "52% 53%" }}
        />
        <span className="cinematic-hero__shade" />
        <span className="cinematic-hero__grain" />
        <span className="cinematic-hero__sun" aria-hidden="true" />
        <div className="pollen pollen--one" aria-hidden="true" />
        <div className="pollen pollen--two" aria-hidden="true" />
        <div className="pollen pollen--three" aria-hidden="true" />

        <div className="shell cinematic-hero__content">
          <div className="cinematic-hero__copy">
            <span className="hero-kicker"><i /> A field guide for the wildlife next door</span>
            <h1>Make space<br />for the <em>wild.</em></h1>
            <p>Transform any garden, balcony or tiny outdoor corner into somewhere life can feed, drink, shelter and thrive.</p>
            <div className="hero-actions">
              <Link className="button button--lime" href="/planner">Score my garden <Icon name="arrow" size={18} /></Link>
              <Link className="hero-text-link" href="/guides">Browse every guide <span>↗</span></Link>
            </div>
          </div>

          <aside className="hero-field-note" aria-label="Mini Wild Garden philosophy">
            <span className="hero-field-note__number">01</span>
            <p><strong>No garden is too small.</strong> One water dish, one flowering pot or one untidy corner can become part of something much bigger.</p>
          </aside>
        </div>

        <div className="hero-species" aria-hidden="true">
          <span>Birds</span><i />
          <span>Bees</span><i />
          <span>Hedgehogs</span><i />
          <span>Frogs</span>
        </div>
        <a className="scroll-cue" href="#discover"><span /> Scroll to explore</a>
      </section>

      <section className="marquee" aria-label="Wildlife gardening principles">
        <div className="marquee__track">
          <span>Plant for pollinators ✦ Add water ✦ Leave the leaves ✦ Connect habitats ✦ Avoid pesticides ✦ Let nature participate ✦ </span>
          <span aria-hidden="true">Plant for pollinators ✦ Add water ✦ Leave the leaves ✦ Connect habitats ✦ Avoid pesticides ✦ Let nature participate ✦ </span>
        </div>
      </section>

      <section className="section start-paths" id="discover" aria-labelledby="start-paths-title">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">Start here</span>
              <h2 id="start-paths-title">What fits your garden today?</h2>
            </div>
            <p>Skip the scroll. Pick a starting point based on the time and space you have, or score the habitat layers you already offer.</p>
          </div>
          <div className="start-paths__grid">
            <Link className="start-path" href="/guides?time=quick" data-reveal>
              <span className="start-path__number">01</span>
              <Icon name="clock" size={28} />
              <strong>I have 15 minutes</strong>
              <p>Quick wins for water, food and shelter without a full redesign.</p>
              <span className="start-path__cta">Browse quick projects <Icon name="arrow" size={16} /></span>
            </Link>
            <Link className="start-path" href="/garden-guides/create-a-wildlife-friendly-balcony" data-reveal>
              <span className="start-path__number">02</span>
              <Icon name="sprout" size={28} />
              <strong>I only have a balcony</strong>
              <p>Containers, vertical planting and tiny water features that still help wildlife.</p>
              <span className="start-path__cta">Open balcony guide <Icon name="arrow" size={16} /></span>
            </Link>
            <Link className="start-path" href="/guides?time=weekend" data-reveal>
              <span className="start-path__number">03</span>
              <Icon name="garden" size={28} />
              <strong>I have a weekend</strong>
              <p>Bigger habitat builds: ponds, log piles, highways and layered planting.</p>
              <span className="start-path__cta">See weekend projects <Icon name="arrow" size={16} /></span>
            </Link>
            <Link className="start-path start-path--accent" href="/planner" data-reveal>
              <span className="start-path__number">04</span>
              <Icon name="leaf" size={28} />
              <strong>Score my garden</strong>
              <p>Check food, water, shelter and access, then get three practical next steps.</p>
              <span className="start-path__cta">Open garden planner <Icon name="arrow" size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section ecosystem">
        <div className="shell ecosystem__grid">
          <div className="ecosystem__copy" data-reveal>
            <span className="eyebrow">Look closer</span>
            <h2>Your garden is already an <em>ecosystem.</em></h2>
            <p>Every flower, stone, puddle and fallen leaf can play a part. Mini Wild Garden shows you how to notice what is already there, then make thoughtful changes that help it flourish.</p>
            <Link className="text-link" href="/about">Discover our approach <span>→</span></Link>
          </div>

          <div className="ecosystem__mosaic" data-reveal>
            <figure className="mosaic-image mosaic-image--large">
              <Image src="/images/uk-garden.webp" alt="A flower-filled British garden with a pond" fill sizes="(max-width: 800px) 100vw, 45vw" loading="lazy" />
            </figure>
            <figure className="mosaic-image mosaic-image--small">
              <Image src="/images/frog.webp" alt="A frog among pond plants" fill sizes="220px" loading="lazy" />
            </figure>
            <div className="mosaic-stat"><strong>4</strong><span>essentials</span><small>Food · water · shelter · access</small></div>
          </div>
        </div>
      </section>

      <section className="section section--forest visitors">
        <div className="shell">
          <div className="section-heading section-heading--light" data-reveal>
            <div>
              <span className="eyebrow eyebrow--light">Choose a visitor</span>
              <h2>Who is your garden for?</h2>
            </div>
            <p>Follow the life already moving through your space and learn what will genuinely help.</p>
          </div>
          <div className="guide-grid">
            {wildlifeGuides.map((guide, index) => (
              <GuideCard
                key={guide.slug}
                guide={guide}
                basePath="/wildlife-guides"
                // Only the first card competes with the hero for LCP budget.
                priority={index === 0}
              />
            ))}
          </div>
          <div className="centred-action" data-reveal>
            <Link className="button button--outline-light" href="/wildlife-guides">Explore every wildlife guide <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="pond-story" data-parallax-root>
        <Image
          className="pond-story__image parallax-image"
          src="/images/pond-guide/finished-low-angle.webp"
          alt="A completed wildlife pond seen from a low angle across the water"
          fill
          sizes="100vw"
          loading="lazy"
          style={{ objectPosition: "50% 56%" }}
        />
        <span className="pond-story__shade" />
        <div className="shell pond-story__content">
          <span className="pond-story__chapter">Field project · 01</span>
          <div data-reveal>
            <span className="eyebrow eyebrow--light">The fastest habitat upgrade</span>
            <h2>Add water.<br /><em>Watch life arrive.</em></h2>
            <p>Build with shallow margins, a secure escape route and enough cover for wildlife to move safely between water and land.</p>
            <Link className="button button--lime" href="/garden-guides/make-a-mini-wildlife-pond">Build a wildlife pond <Icon name="arrow" size={18} /></Link>
          </div>
          <div className="pond-story__note" data-reveal>
            <span>Why water?</span>
            <p>It supports drinking, bathing, breeding and hunting, often bringing several layers of the garden food web together.</p>
          </div>
        </div>
      </section>

      <section className="section garden-worlds">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">One garden, many worlds</span>
              <h2>Build habitat in layers.</h2>
            </div>
            <p>A thriving garden is a patchwork: flowers in the sun, shelter in the shade, water at ground level and safe routes between them.</p>
          </div>

          <div className="worlds-grid">
            <Link className="world-card world-card--wide" href="/garden-guides/best-flowers-for-bees-and-pollinators" data-reveal>
              <Image src="/images/bee-guide/pollinator-border.webp" alt="A vibrant mixed border full of pollinator-friendly flowers" fill sizes="(max-width: 800px) 100vw, 66vw" loading="lazy" />
              <span className="world-card__shade" />
              <div><span>01 · Nectar</span><h3>Plant for bees from spring to autumn.</h3></div>
            </Link>
            <Link className="world-card world-card--tall" href="/garden-guides/build-a-log-and-leaf-habitat" data-reveal>
              <Image src="/images/log-guide/finished-habitat.webp" alt="A finished log and leaf habitat in a garden corner" fill sizes="(max-width: 800px) 100vw, 34vw" loading="lazy" />
              <span className="world-card__shade" />
              <div><span>02 · Shelter</span><h3>Make decay part of the design.</h3></div>
            </Link>
            <Link className="world-card" href="/garden-guides/chemical-free-garden" data-reveal>
              <Image src="/images/hands-gardening.webp" alt="Hands planting in a wildlife garden" fill sizes="(max-width: 800px) 100vw, 33vw" loading="lazy" />
              <span className="world-card__shade" />
              <div><span>03 · Care</span><h3>Garden gently.</h3></div>
            </Link>
            <Link className="world-card" href="/garden-guides/create-a-wildlife-friendly-balcony" data-reveal>
              <Image src="/images/balcony-guide/finished-balcony.webp" alt="A small planted balcony with containers and a shallow water dish" fill sizes="(max-width: 800px) 100vw, 33vw" loading="lazy" />
              <span className="world-card__shade" />
              <div><span>04 · Small spaces</span><h3>Build a tiny refuge above the street.</h3></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section projects-preview">
        <div className="shell projects-preview__grid">
          <div className="projects-preview__intro" data-reveal>
            <span className="eyebrow">A wilder weekend</span>
            <h2>Make something useful by Sunday.</h2>
            <p>Start with a project that fits the time, space and energy you have. Small changes compound when they connect.</p>
            <Link className="button button--dark" href="/garden-guides">See all garden projects <Icon name="arrow" size={18} /></Link>
          </div>
          <div className="project-list">
            {featuredProjectSlugs
              .flatMap((slug) => {
                const guide = gardenGuides.find((item) => item.slug === slug);
                return guide ? [guide] : [];
              })
              .map((guide, index) => (
                <Link key={guide.slug} href={`/garden-guides/${guide.slug}`} data-reveal>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{guide.title}</h3><p>{guide.time} · {guide.difficulty}</p></div>
                  <Icon name="arrow" size={18} />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="section seasons-section">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">The garden year</span>
              <h2>Move with the seasons.</h2>
            </div>
            <p>What wildlife needs changes throughout the year. Let the garden’s rhythm guide what you do next.</p>
          </div>
          <div className="season-grid">
            {seasons.map((season) => {
              const image = seasonalImages[season.slug];
              return (
                <Link className={`season-card season-card--${season.slug}`} href={`/seasonal-advice/${season.slug}`} key={season.slug} data-reveal>
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 25vw" loading="lazy" style={{ objectPosition: image.focal }} />
                  <span className="season-card__shade" />
                  <span className="season-card__number">{season.label}</span>
                  <div><span>{season.name}</span><h3>{season.intro}</h3><i>Explore the season →</i></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <Image src="/images/wildflowers.webp" alt="Wildflowers glowing in sunlight" fill sizes="100vw" loading="lazy" />
        <span className="closing-cta__shade" />
        <div className="shell closing-cta__content" data-reveal>
          <span className="eyebrow eyebrow--light">Begin where you are</span>
          <h2>One pot.<br />One puddle.<br /><em>One wilder future.</em></h2>
          <Link className="button button--lime" href="/garden-guides">Choose your first project <Icon name="arrow" size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
