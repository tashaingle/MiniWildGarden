import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/lib/content";
import { getGuideImage } from "@/lib/images";
import { Icon } from "@/components/Icon";
import { SaveGuideButton } from "@/components/SaveGuideButton";
import { getGuideMeta } from "@/lib/guideMeta";

export function GuideCard({ guide, basePath, priority = false }: { guide: Guide; basePath: string; priority?: boolean }) {
  const image = getGuideImage(guide);
  const meta = getGuideMeta(guide.slug);
  const href = `${basePath}/${guide.slug}`;

  return (
    <article className="guide-card" data-reveal>
      <Link className="guide-card__image" href={href}>
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
      </Link>
      <div className="guide-card__body">
        <div className="guide-card__body-top"><span>{meta.readingMinutes} min read</span><SaveGuideButton slug={guide.slug} compact /></div>
        <Link href={href}><h3>{guide.title}</h3></Link>
        <p>{guide.excerpt}</p>
        <div className="guide-card__meta">
          <span>{guide.difficulty}</span>
          <i />
          <span>{guide.time}</span>
        </div>
      </div>
    </article>
  );
}
