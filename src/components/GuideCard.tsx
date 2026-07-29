import Link from "next/link";
import type { Guide } from "@/lib/content";
import { Icon } from "@/components/Icon";

export function GuideCard({ guide, basePath }: { guide: Guide; basePath: string }) {
  return (
    <Link className="guide-card" href={`${basePath}/${guide.slug}`}>
      <div className={`guide-card__art art art--${guide.colour}`}>
        <span className="art__halo" />
        <Icon name={guide.icon} size={58} />
      </div>
      <div className="guide-card__body">
        <span className="eyebrow">{guide.category}</span>
        <h3>{guide.title}</h3>
        <p>{guide.excerpt}</p>
        <div className="guide-card__meta">
          <span>{guide.difficulty}</span>
          <span>{guide.time}</span>
          <span className="round-arrow"><Icon name="arrow" size={16} /></span>
        </div>
      </div>
    </Link>
  );
}
