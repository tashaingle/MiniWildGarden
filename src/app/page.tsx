import Link from "next/link";
import { GuideCard } from "@/components/GuideCard";
import { Icon } from "@/components/Icon";
import { gardenGuides, seasons, wildlifeGuides } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="shell home-hero__grid">
          <div className="home-hero__copy">
            <span className="kicker"><span /> Wildlife starts just outside your door</span>
            <h1>Make a little more room for <em>the wild.</em></h1>
            <p>
              Simple, practical guides for turning gardens, balconies and tiny outdoor spaces into safer places for nature.
            </p>
            <div className="button-row">
              <Link className="button" href="/wildlife-guides">Explore wildlife guides <Icon name="arrow" size={18} /></Link>
              <Link className="text-link" href="/garden-guides">Find a weekend project <span>→</span></Link>
            </div>
            <div className="hero-note">
              <div className="hero-note__avatars"><span>🐝</span><span>🐦</span><span>🦔</span></div>
              <p><strong>No garden is too small.</strong><br />Start with one pot, one water dish or one untidy corner.</p>
            </div>
          </div>

          <div className="hero-scene" aria-hidden="true">
            <span className="hero-scene__sun" />
            <span className="hero-scene__cloud hero-scene__cloud--one" />
            <span className="hero-scene__cloud hero-scene__cloud--two" />
            <span className="hero-scene__hill hero-scene__hill--back" />
            <span className="hero-scene__hill hero-scene__hill--front" />
            <span className="hero-scene__house"><i /><b /></span>
            <span className="hero-scene__tree"><i /><b /></span>
            <span className="hero-scene__flowers">✦ ✿ ✦ ✿</span>
            <span className="hero-scene__bird"><Icon name="bird" size={56} /></span>
            <span className="hero-scene__bee"><Icon name="bee" size={34} /></span>
            <span className="hero-scene__path" />
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="shell trust-strip__inner">
          <span><Icon name="sprout" size={22} /> Beginner-friendly</span>
          <span><Icon name="garden" size={22} /> Ideas for small spaces</span>
          <span><Icon name="leaf" size={22} /> Practical, low-cost changes</span>
          <span><Icon name="bee" size={22} /> Built around real habitats</span>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Start with a visitor</span>
              <h2>Who would you like to help?</h2>
              <p>Choose a wildlife guide and find the changes that matter most.</p>
            </div>
            <Link className="text-link" href="/wildlife-guides">View every guide <span>→</span></Link>
          </div>
          <div className="card-grid card-grid--three">
            {wildlifeGuides.slice(0, 6).map((guide) => (
              <GuideCard key={guide.slug} guide={guide} basePath="/wildlife-guides" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell feature-band">
          <div className="feature-band__art" aria-hidden="true">
            <span className="feature-band__moon" />
            <span className="feature-band__hill feature-band__hill--one" />
            <span className="feature-band__hill feature-band__hill--two" />
            <span className="feature-band__logs"><Icon name="logs" size={116} /></span>
            <span className="feature-band__hedgehog"><Icon name="hedgehog" size={76} /></span>
            <span className="feature-band__stars">✦ · ✦ · ✧</span>
          </div>
          <div className="feature-band__copy">
            <span className="eyebrow eyebrow--light">A wilder weekend</span>
            <h2>Build one useful habitat in an afternoon.</h2>
            <p>Choose a manageable garden project, follow the steps and give local wildlife somewhere new to feed, drink or shelter.</p>
            <Link className="button button--light" href="/garden-guides">Choose a garden project <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Follow the seasons</span>
              <h2>What can you do right now?</h2>
              <p>Wildlife needs different things as the year changes.</p>
            </div>
          </div>
          <div className="season-grid">
            {seasons.map((season) => (
              <Link className={`season-card season-card--${season.slug}`} href={`/seasonal-advice/${season.slug}`} key={season.slug}>
                <span className="season-card__icon"><Icon name={season.icon} size={34} /></span>
                <span className="eyebrow">{season.label}</span>
                <h3>{season.name}</h3>
                <p>{season.intro}</p>
                <span className="text-link">See the seasonal jobs <span>→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell manifesto">
          <div className="manifesto__copy">
            <span className="eyebrow">The Mini Wild Garden approach</span>
            <h2>Less perfection.<br /><em>More life.</em></h2>
            <p>A wildlife-friendly garden can still feel calm, useful and beautiful. The difference is that every corner is allowed to do a little more.</p>
          </div>
          <div className="manifesto__list">
            <div><span>01</span><h3>Start small</h3><p>Make one achievable improvement instead of redesigning everything.</p></div>
            <div><span>02</span><h3>Join habitats together</h3><p>Water, planting and shelter work better when wildlife can move safely between them.</p></div>
            <div><span>03</span><h3>Let nature participate</h3><p>Leave room for fallen leaves, chewed plants and unexpected visitors.</p></div>
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="shell cta-panel">
          <div className="cta-panel__art"><Icon name="flower" size={94} /></div>
          <div>
            <span className="eyebrow">Ready to begin?</span>
            <h2>Pick one small change for this weekend.</h2>
            <p>You do not need a large budget or a huge garden. Just start with the space you already have.</p>
          </div>
          <Link className="button" href="/garden-guides">Find your first project <Icon name="arrow" size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
