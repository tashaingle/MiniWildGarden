import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/lib/content";
import { getGuideImage } from "@/lib/images";
import { Icon } from "@/components/Icon";

export function GuideCard({ guide, basePath, priority = false }: { guide: Guide; basePath: string; priority?: boolean }) {
  const image = getGuideImage(guide);

  return (
    <Link className="guide-card" href={`${basePath}/${guide.slug}`} data-reveal>
      <div className="guide-card__image">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
          style={{ objectPosition: image.focal }}
        />
        <span className="guide-card__veil" />
        <span className="guide-card__category">{guide.category}</span>
        <span className="guide-card__arrow"><Icon name="arrow" size={18} /></span>
      </div>
      <div className="guide-card__body">
        <h3>{guide.title}</h3>
        <p>{guide.excerpt}</p>
        <div className="guide-card__meta">
          <span>{guide.difficulty}</span>
          <i />
          <span>{guide.time}</span>
        </div>
      </div>
    </Link>
  );
}
