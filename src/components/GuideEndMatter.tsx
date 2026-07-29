import Link from "next/link";
import { GuideActions } from "@/components/GuideActions";
import { Icon } from "@/components/Icon";
import { formatGuideDate, getGuideMeta } from "@/lib/guideMeta";
import { libraryItems } from "@/lib/library";

export function GuideEndMatter({ slug }: { slug: string }) {
  const current = libraryItems.find((item) => item.slug === slug);
  if (!current) return null;

  const meta = getGuideMeta(slug);
  const collection = libraryItems.filter((item) => item.kind === current.kind);
  const currentIndex = collection.findIndex((item) => item.slug === slug);
  const previous = currentIndex > 0 ? collection[currentIndex - 1] : collection[collection.length - 1];
  const next = currentIndex < collection.length - 1 ? collection[currentIndex + 1] : collection[0];
  const related = meta.relatedSlugs
    .map((relatedSlug) => libraryItems.find((item) => item.slug === relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .slice(0, 3);

  return (
    <>
      <section className="guide-trust-section">
        <div className="shell guide-trust-grid">
          <article className="author-card" data-reveal>
            <span className="author-card__mark" aria-hidden="true">MW</span>
            <div>
              <span className="eyebrow">Written and reviewed by</span>
              <h2>Natasha Card</h2>
              <strong>BSc Environmental Science</strong>
              <p>Mini Wild Garden turns wildlife science and trusted UK conservation guidance into practical changes that work in ordinary gardens, balconies and small outdoor spaces.</p>
              <Link href="/about">Read the Mini Wild Garden approach <span>→</span></Link>
            </div>
          </article>

          <aside className="guide-record" data-reveal>
            <span className="eyebrow">Guide record</span>
            <dl>
              <div><dt>Published</dt><dd><time dateTime={meta.published}>{formatGuideDate(meta.published)}</time></dd></div>
              <div><dt>Last reviewed</dt><dd><time dateTime={meta.updated}>{formatGuideDate(meta.updated)}</time></dd></div>
              <div><dt>Reading time</dt><dd>{meta.readingMinutes} minutes</dd></div>
              <div><dt>Guide type</dt><dd>{current.kind === "wildlife" ? "Wildlife field guide" : "Garden project"}</dd></div>
            </dl>
            <div className="guide-sources">
              <strong>Trusted sources</strong>
              {meta.sources.map((source) => (
                <a href={source.url} target="_blank" rel="noreferrer" key={`${source.organisation}-${source.name}`}>
                  <span>{source.organisation}</span>
                  {source.name} ↗
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="guide-tools-section">
        <div className="shell">
          <GuideActions slug={slug} title={current.title} href={current.href} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section related-guides">
          <div className="shell">
            <div className="section-heading" data-reveal>
              <div><span className="eyebrow">Keep building habitat</span><h2>Related field guides.</h2></div>
              <Link className="text-link" href="/guides">Search every guide <span>→</span></Link>
            </div>
            <div className="related-guides__grid">
              {related.map((item, index) => (
                <Link href={item.href} key={item.slug} data-reveal>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><small>{item.category}</small><h3>{item.title}</h3><p>{item.excerpt}</p></div>
                  <Icon name="arrow" size={18} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <nav className="guide-pagination" aria-label="Guide pagination">
        <Link href={previous.href}>
          <span>← Previous {current.kind === "wildlife" ? "wildlife guide" : "project"}</span>
          <strong>{previous.title}</strong>
        </Link>
        <Link href={next.href}>
          <span>Next {current.kind === "wildlife" ? "wildlife guide" : "project"} →</span>
          <strong>{next.title}</strong>
        </Link>
      </nav>
    </>
  );
}
