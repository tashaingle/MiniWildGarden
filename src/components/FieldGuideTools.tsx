"use client";

import { useEffect, useMemo, useState } from "react";

export function FieldGuideProgress({ tone = "leaf" }: { tone?: "leaf" | "sky" }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(pageHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / pageHeight) * 100)) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className={`field-progress field-progress--${tone}`} aria-hidden="true">
      <span style={{ width: `${progress}%` }} />
    </div>
  );
}

export function FieldChecklist({
  eyebrow,
  title,
  items,
  tone = "leaf",
}: {
  eyebrow: string;
  title: string;
  items: string[];
  tone?: "leaf" | "sky";
}) {
  const [checked, setChecked] = useState<boolean[]>(items.map(() => false));
  const complete = useMemo(() => checked.filter(Boolean).length, [checked]);

  function toggle(index: number) {
    setChecked((current) => current.map((value, itemIndex) => (itemIndex === index ? !value : value)));
  }

  return (
    <div className={`field-checklist field-checklist--${tone}`} data-reveal>
      <div className="field-checklist__top">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h3>{title}</h3>
        </div>
        <span className="field-checklist__count">{complete}/{items.length}</span>
      </div>
      <div className="field-checklist__meter" aria-hidden="true">
        <span style={{ width: `${(complete / items.length) * 100}%` }} />
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={item} className={checked[index] ? "is-checked" : ""}>
            <label>
              <input type="checkbox" checked={checked[index]} onChange={() => toggle(index)} />
              <span className="field-checklist__box" aria-hidden="true">✓</span>
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
      <button type="button" className="field-print" onClick={() => window.print()}>
        Print this guide <span>↗</span>
      </button>
    </div>
  );
}
