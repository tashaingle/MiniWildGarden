import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/lib/content";
import { getGuideImage } from "@/lib/images";
import { getGuideMeta, formatGuideDate } from "@/lib/guideMeta";
import { GuideEndMatter } from "@/components/GuideEndMatter";
import { Icon } from "@/components/Icon";

export function GuideArticle({ guide, backHref, backLabel }: { guide: Guide; backHref: string; backLabel: string }) {
  const image = getGuideImage(guide);
  const meta = getGuideMeta(guide.slug);
  const pageUrl = `https://www.miniwildgarden.co.uk${backHref}/${guide.slug}`;
  const imageUrl = image.src.startsWith("http") ? image.src : `https://www.miniwildgarden.co.uk${image.src}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: guide.title,
        description: guide.excerpt,
        image: [imageUrl],
        dateModified: meta.updated,
        datePublished: meta.updated,
        inLanguage: "en-GB",
        mainEntityOfPage: pageUrl,
        author: { "@id": "https://www.miniwildgarden.co.uk/#author" },
        publisher: { "@id": "https://www.miniwildgarden.co.uk/#author" },
        articleSection: guide.category,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.miniwildgarden.co.uk/" },
          { "@type": "ListItem", position: 2, name: backLabel, item: `https://www.miniwildgarden.co.uk${backHref}` },
          { "@type": "ListItem", position: 3, name: guide.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <section className="article-hero" data-parallax-root>
        <Image
          className="article-hero__image parallax-image"
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: image.focal }}
        />
        <span className="article-hero__shade" />
        <div className="shell article-hero__content">
          <nav className="article-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href={backHref}>{backLabel}</Link><span>/</span><span aria-current="page">{guide.title}</span></nav>
          <span className="eyebrow eyebrow--light">{guide.category}</span>
          <h1>{guide.title}</h1>
          <p className="lead">{guide.excerpt}</p>
          <div className="article-meta">
            <span><Icon name="check" size={17} /> {guide.difficulty}</span>
            <span><Icon name="clock" size={17} /> {guide.time}</span>
            <span>{meta.readingMinutes} min read</span>
            <span>Reviewed {formatGuideDate(meta.updated)}</span>
          </div>
        </div>
      </section>

      <section className="article-opening section">
        <div className="shell article-opening__grid">
          <div data-reveal>
            <span className="eyebrow">Why it matters</span>
            <p className="article-intro">{guide.intro}</p>
          </div>
          <aside className="article-at-glance" data-reveal>
            <span>At a glance</span>
            <dl>
              <div><dt>Difficulty</dt><dd>{guide.difficulty}</dd></div>
              <div><dt>Time</dt><dd>{guide.time}</dd></div>
              <div><dt>Best for</dt><dd>{guide.category}</dd></div>
              <div><dt>Cost</dt><dd>Low to flexible</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section article-steps-section">
        <div className="shell article-layout">
          <article className="article-content">
            <div className="section-heading section-heading--article" data-reveal>
              <span className="eyebrow">Step by step</span>
              <h2>Make it happen.</h2>
            </div>
            <div className="steps">
              {guide.steps.map((step, index) => {
                const stepImage = guide.images?.[index];

                return (
                  <section className={`step${stepImage ? " step--with-image" : ""}`} key={step.title} data-reveal>
                    <span className="step__number">{String(index + 1).padStart(2, "0")}</span>
                    <div className="step__body">
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                      {stepImage && (
                        <figure className="step__media">
                          <Image
                            src={stepImage.src}
                            alt={stepImage.alt}
                            fill
                            sizes="(max-width: 760px) 100vw, 760px"
                            style={{ objectPosition: stepImage.focal ?? "50% 50%" }}
                          />
                        </figure>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>
          </article>

          <aside className="tip-card" data-reveal>
            <span className="tip-card__label">Field notes</span>
            <span className="tip-card__icon"><Icon name="leaf" size={28} /></span>
            <h2>Little details that make a big difference.</h2>
            <ul>{guide.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="article-safety">
        <div className="shell article-safety__grid">
          <div data-reveal><span className="eyebrow eyebrow--light">Keep it wild. Keep it safe.</span><h2>Let wildlife arrive in its own time.</h2></div>
          <p data-reveal>Use responsibly sourced plants and materials, avoid moving animals from the wild, and always build in safe access and escape routes. The best habitat is one that can settle, change and become part of the wider garden.</p>
        </div>
      </section>

      <GuideEndMatter slug={guide.slug} />
    </main>
  );
}
