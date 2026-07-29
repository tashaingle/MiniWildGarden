import Link from "next/link";
import type { Guide } from "@/lib/content";
import { Icon } from "@/components/Icon";

export function GuideArticle({ guide, backHref, backLabel }: { guide: Guide; backHref: string; backLabel: string }) {
  return (
    <main>
      <section className={`article-hero art--${guide.colour}`}>
        <div className="shell article-hero__grid">
          <div>
            <Link className="back-link" href={backHref}>← {backLabel}</Link>
            <span className="eyebrow">{guide.category}</span>
            <h1>{guide.title}</h1>
            <p className="lead">{guide.excerpt}</p>
            <div className="article-meta">
              <span><Icon name="check" size={18} /> {guide.difficulty}</span>
              <span><Icon name="clock" size={18} /> {guide.time}</span>
            </div>
          </div>
          <div className="article-hero__art">
            <span className="article-hero__sun" />
            <span className="article-hero__hill article-hero__hill--back" />
            <span className="article-hero__hill article-hero__hill--front" />
            <Icon name={guide.icon} size={126} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell article-layout">
          <article className="article-content">
            <p className="article-intro">{guide.intro}</p>
            <h2>How to do it</h2>
            <div className="steps">
              {guide.steps.map((step, index) => (
                <section className="step" key={step.title}>
                  <span className="step__number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </section>
              ))}
            </div>
          </article>

          <aside className="tip-card">
            <span className="tip-card__icon"><Icon name="leaf" size={26} /></span>
            <h2>Little things that help</h2>
            <ul>
              {guide.tips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell next-step">
          <div>
            <span className="eyebrow">Keep exploring</span>
            <h2>One small change can create a whole new habitat.</h2>
          </div>
          <Link className="button" href={backHref}>Browse more guides <Icon name="arrow" size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
