import Link from "next/link";
import { Icon } from "@/components/Icon";

export const PLOTLY_APP_STORE_URL = "https://apps.apple.com/gb/app/plotly/id6765840050";

type PlotlyAppPromoProps = {
  /** Compact variant for page footers / side notes */
  compact?: boolean;
};

export function PlotlyAppPromo({ compact = false }: PlotlyAppPromoProps) {
  if (compact) {
    return (
      <aside className="plotly-promo plotly-promo--compact" data-reveal>
        <div>
          <span className="eyebrow">Free on iPhone</span>
          <h2>Take your garden plan with you.</h2>
          <p>
            Plotly is a free garden planner app for iOS. Organise beds and pots, track plants, and set simple reminders for watering, feeding and seasonal jobs.
          </p>
        </div>
        <a
          className="button button--lime"
          href={PLOTLY_APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Plotly free <Icon name="arrow" size={18} />
        </a>
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
        <div className="plotly-promo__card" aria-hidden="true">
          <span className="plotly-promo__badge">iOS · Free</span>
          <strong>Plotly</strong>
          <p>Garden planning made simple</p>
          <div className="plotly-promo__phone">
            <span>Spaces</span>
            <span>Plants</span>
            <span>Tasks</span>
            <span>Reminders</span>
          </div>
        </div>
      </div>
    </section>
  );
}
