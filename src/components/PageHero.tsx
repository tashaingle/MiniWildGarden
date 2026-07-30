import { HeroImage } from "@/components/HeroImage";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  focal = "50% 50%",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  focal?: string;
}) {
  return (
    <section className="page-hero" data-parallax-root>
      <HeroImage
        className="page-hero__image parallax-image"
        src={image}
        alt={imageAlt}
        style={{ objectPosition: focal }}
      />
      <span className="page-hero__shade" />
      <span className="page-hero__glow" aria-hidden="true" />
      <div className="shell page-hero__content">
        <span className="eyebrow eyebrow--light" data-reveal>{eyebrow}</span>
        <h1 data-reveal>{title}</h1>
        <p className="lead" data-reveal>{intro}</p>
      </div>
      <div className="page-hero__index" aria-hidden="true"><span>Mini</span><span>Wild</span><span>Garden</span></div>
    </section>
  );
}
