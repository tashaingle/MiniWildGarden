import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="footer-brand">
          <BrandMark compact />
          <div>
            <strong>Mini Wild Garden</strong>
            <p>Practical, friendly ideas for making every outdoor space more useful to wildlife.</p>
          </div>
        </div>

        <div className="footer-links">
          <strong>Explore</strong>
          <Link href="/wildlife-guides">Wildlife guides</Link>
          <Link href="/garden-guides">Garden projects</Link>
          <Link href="/seasonal-advice">Seasonal advice</Link>
        </div>

        <div className="footer-links">
          <strong>Mini Wild Garden</strong>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href="#top">Back to top</a>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <span>© {new Date().getFullYear()} Mini Wild Garden</span>
        <span>Made for gardens, balconies and wild little corners.</span>
      </div>
    </footer>
  );
}
