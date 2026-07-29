import { Icon } from "@/components/Icon";

export function PageHero({ eyebrow, title, intro, icon = "leaf" }: { eyebrow: string; title: string; intro: string; icon?: string }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero__grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="lead">{intro}</p>
        </div>
        <div className="page-hero__art" aria-hidden="true">
          <span className="page-hero__circle" />
          <span className="page-hero__stem page-hero__stem--one" />
          <span className="page-hero__stem page-hero__stem--two" />
          <span className="page-hero__stem page-hero__stem--three" />
          <Icon name={icon} size={88} />
        </div>
      </div>
    </section>
  );
}
