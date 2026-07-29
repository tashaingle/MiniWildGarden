import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="shell not-found__inner">
        <span className="not-found__icon"><Icon name="hedgehog" size={90} /></span>
        <span className="eyebrow">404 — wrong garden path</span>
        <h1>Nothing is hiding here.</h1>
        <p>The page may have moved, but there are plenty more wild corners to explore.</p>
        <Link className="button" href="/">Return home <Icon name="arrow" size={18} /></Link>
      </div>
    </main>
  );
}
