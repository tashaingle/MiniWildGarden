import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/lib/content";
import { getGuideImage } from "@/lib/images";
import { getGuideMeta, formatGuideDate } from "@/lib/guideMeta";
import { GuideEndMatter } from "@/components/GuideEndMatter";
import { HeroImage } from "@/components/HeroImage";
import { Icon } from "@/components/Icon";

export function GuideArticle({ guide, backHref, backLabel }: { guide: Guide; backHref: string; backLabel: string }) {
  const image = getGuideImage(guide);
  const meta = getGuideMeta(guide.slug);
  const pageUrl = `https://www.miniwildgarden.co.uk${backHref}/${guide.slug}`;
  const imageUrl = image.src.startsWith("http") ? image.src : `https://www.miniwildgarden.co.uk${image.src}`;
  const hasDepth = Boolean(
    guide.materials?.length ||
      guide.mistakes?.length ||
      guide.plants?.length ||
      guide.faqs?.length ||
      guide.nextStep,
  );

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
        datePublished: meta.published,
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
      ...(guide.faqs?.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              mainEntity: guide.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <section className="article-hero" data-parallax-root>
        <HeroImage
          className="article-hero__image parallax-image"
          src={image.src}
          alt={image.alt}
          style={{ objectPosition: image.focal }}
        />
        <span className="article-hero__shade" />
        <div className="shell article-hero__content">
          <nav className="article-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href={backHref}>{backLabel}</Link>
            <span>/</span>
            <span aria-current="page">{guide.title}</span>
          </nav>
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
          <div className="article-opening__copy" data-reveal>
            <span className="eyebrow">Why it matters</span>
            <p className="article-intro">{guide.intro}</p>
            {guide.introDetail && <p className="article-intro-detail">{guide.introDetail}</p>}
          </div>
          <aside className="article-at-glance" data-reveal>
            <span>At a glance</span>
            <dl>
              <div><dt>Difficulty</dt><dd>{guide.difficulty}</dd></div>
              <div><dt>Time</dt><dd>{guide.time}</dd></div>
              <div><dt>Best for</dt><dd>{guide.category}</dd></div>
              <div><dt>Cost</dt><dd>{guide.cost ?? "Low to flexible"}</dd></div>
              {guide.bestSeason && (
                <div><dt>Best season</dt><dd>{guide.bestSeason}</dd></div>
              )}
            </dl>
          </aside>
        </div>
      </section>

      {(guide.materials?.length || guide.mistakes?.length) && (
        <section className="section article-depth-section">
          <div className="shell article-depth-grid">
            {guide.materials && guide.materials.length > 0 && (
              <article className="article-depth-card" data-reveal>
                <span className="eyebrow">What you need</span>
                <h2>Materials checklist.</h2>
                <ul>
                  {guide.materials.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            )}
            {guide.mistakes && guide.mistakes.length > 0 && (
              <article className="article-depth-card article-depth-card--warn" data-reveal>
                <span className="eyebrow">Common mistakes</span>
                <h2>Skip these traps.</h2>
                <ul>
                  {guide.mistakes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            )}
          </div>
        </section>
      )}

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

      {guide.plants && guide.plants.length > 0 && (
        <section className="section article-plants-section">
          <div className="shell">
            <div className="section-heading" data-reveal>
              <div>
                <span className="eyebrow">Useful plants</span>
                <h2>Easy UK choices that earn their keep.</h2>
              </div>
              <p>These are practical starting points, not a complete shopping list. Match plants to your light, soil and the space you actually have.</p>
            </div>
            <div className="article-plants-grid">
              {guide.plants.map((plant, index) => (
                <article key={plant.name} data-reveal>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{plant.name}</h3>
                  <p>{plant.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {guide.faqs && guide.faqs.length > 0 && (
        <section className="section article-faq-section">
          <div className="shell article-faq-layout">
            <div data-reveal>
              <span className="eyebrow">Common questions</span>
              <h2>Before you begin.</h2>
            </div>
            <div className="article-faq-list">
              {guide.faqs.map((faq) => (
                <details key={faq.question} data-reveal>
                  <summary>
                    {faq.question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {guide.nextStep && (
        <section className="article-next-step">
          <div className="shell article-next-step__inner" data-reveal>
            <div>
              <span className="eyebrow eyebrow--light">Next best step</span>
              <h2>{guide.nextStep.label}</h2>
              <p>{guide.nextStep.text}</p>
            </div>
            <Link className="button button--lime" href={guide.nextStep.href}>
              Continue <Icon name="arrow" size={18} />
            </Link>
          </div>
        </section>
      )}

      <section className="article-safety">
        <div className="shell article-safety__grid">
          <div data-reveal>
            <span className="eyebrow eyebrow--light">Keep it wild. Keep it safe.</span>
            <h2>Let wildlife arrive in its own time.</h2>
          </div>
          <p data-reveal>
            {hasDepth
              ? "Use responsibly sourced plants and materials, avoid moving animals from the wild, and always build in safe access and escape routes. The best habitat is one that can settle, change and become part of the wider garden."
              : "Use responsibly sourced plants and materials, avoid moving animals from the wild, and always build in safe access and escape routes. The best habitat is one that can settle, change and become part of the wider garden."}
          </p>
        </div>
      </section>

      <GuideEndMatter slug={guide.slug} />
    </main>
  );
}
