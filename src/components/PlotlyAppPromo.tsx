import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";

export const PLOTLY_APP_STORE_URL = "https://apps.apple.com/gb/app/plotly/id6765840050";

const screenshots = [
  { src: "/images/plotly/1.webp", alt: "Plotly app home screen showing garden spaces" },
  { src: "/images/plotly/2.webp", alt: "Plotly plant list and garden space details" },
  { src: "/images/plotly/3.webp", alt: "Plotly task list with garden jobs and reminders" },
  { src: "/images/plotly/4.webp", alt: "Plotly plant detail and care notes" },
  { src: "/images/plotly/5.webp", alt: "Plotly schedule of due garden tasks" },
  { src: "/images/plotly/6.webp", alt: "Plotly garden planner overview on iPhone" },
] as const;

function PhoneFrame({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`phone-frame ${className}`.trim()}>
      <div className="phone-frame__bezel">
        <span className="phone-frame__island" aria-hidden="true" />
        <div className="phone-frame__screen">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 760px) 42vw, 220px"
            priority={priority}
            quality={85}
          />
        </div>
        <span className="phone-frame__bar" aria-hidden="true" />
      </div>
    </div>
  );
}

type PlotlyAppPromoProps = {
  /** Compact variant for page footers / side notes */
  compact?: boolean;
};

export function PlotlyAppPromo({ compact = false }: PlotlyAppPromoProps) {
  if (compact) {
    return (
      <aside className="plotly-promo plotly-promo--compact" data-reveal>
        <div className="plotly-promo__compact-copy">
          <span className="eyebrow">Free on iPhone</span>
          <h2>Take your garden plan with you.</h2>
          <p>
            Plotly is a free garden planner app for iOS. Organise beds and pots, track plants, and set simple reminders for watering, feeding and seasonal jobs.
          </p>
          <a
            className="button button--lime"
            href={PLOTLY_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Plotly free <Icon name="arrow" size={18} />
          </a>
        </div>
        <div className="phone-stage phone-stage--compact" aria-hidden="true">
          <PhoneFrame src={screenshots[0].src} alt="" className="phone-frame--back" />
          <PhoneFrame src={screenshots[2].src} alt="" className="phone-frame--front" />
        </div>
      </aside>
    );
  }

  return (
    <section className="section plotly-promo-section" aria-labelledby="plotly-promo-title">
      <div className="shell plotly-promo" data-reveal>
        <div className="plotly-promo__copy">
          <span className="eyebrow">Free iPhone app</span>
          <h2 id="plotly-promo-title">
            Plotly: garden planning <em>made simple.</em>
          </h2>
          <p>
            Prefer to plan on your phone? Plotly is a free garden planner for iPhone from Natasha Card.
            Create spaces for beds, pots and borders, keep plant notes, schedule jobs, and see what is due today without spreadsheets or sticky notes.
          </p>
          <ul className="plotly-promo__points">
            <li>Organise garden spaces and plants</li>
            <li>Watering, feeding, sowing and seasonal reminders</li>
            <li>Free to download on the App Store</li>
          </ul>
          <div className="plotly-promo__actions">
            <a
              className="button button--lime"
              href={PLOTLY_APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download free on the App Store <Icon name="arrow" size={18} />
            </a>
            <Link className="text-link" href="/planner">
              Or use the web wildlife planner <span>→</span>
            </Link>
          </div>
        </div>

        <div className="phone-stage" aria-label="Plotly app screenshots">
          <PhoneFrame src={screenshots[1].src} alt={screenshots[1].alt} className="phone-frame--left" />
          <PhoneFrame src={screenshots[0].src} alt={screenshots[0].alt} className="phone-frame--centre" priority />
          <PhoneFrame src={screenshots[2].src} alt={screenshots[2].alt} className="phone-frame--right" />
        </div>
      </div>

      <div className="shell plotly-shot-strip" data-reveal>
        <p className="plotly-shot-strip__label">Inside the app</p>
        <div className="plotly-shot-strip__row">
          {screenshots.map((shot) => (
            <figure className="phone-frame phone-frame--strip" key={shot.src}>
              <div className="phone-frame__bezel">
                <span className="phone-frame__island" aria-hidden="true" />
                <div className="phone-frame__screen">
                  <Image src={shot.src} alt={shot.alt} fill sizes="140px" quality={80} loading="lazy" />
                </div>
                <span className="phone-frame__bar" aria-hidden="true" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
