"use client";

import { useEffect, useMemo, useState } from "react";

const materials = [
  "Preformed pond shell or wildlife-safe pond liner",
  "Pond underlay or a layer of soft builders’ sand",
  "Spade, wheelbarrow and spirit level",
  "Bricks, flat stones or untreated timber for shelves and access",
  "Washed gravel and rounded stones",
  "Aquatic baskets and aquatic compost where needed",
  "Responsibly sourced pond and marginal plants",
  "Collected rainwater where available",
];

export function PondProgress() {
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
    <div className="pond-progress" aria-hidden="true">
      <span style={{ width: `${progress}%` }} />
    </div>
  );
}

export function PondMaterialsChecklist() {
  const [checked, setChecked] = useState<boolean[]>(materials.map(() => false));
  const complete = useMemo(() => checked.filter(Boolean).length, [checked]);

  function toggle(index: number) {
    setChecked((current) => current.map((value, itemIndex) => (itemIndex === index ? !value : value)));
  }

  return (
    <div className="pond-checklist" data-reveal>
      <div className="pond-checklist__top">
        <div>
          <span className="eyebrow">Project checklist</span>
          <h3>Gather before you dig.</h3>
        </div>
        <span className="pond-checklist__count">{complete}/{materials.length}</span>
      </div>
      <div className="pond-checklist__meter" aria-hidden="true"><span style={{ width: `${(complete / materials.length) * 100}%` }} /></div>
      <ul>
        {materials.map((material, index) => (
          <li key={material} className={checked[index] ? "is-checked" : ""}>
            <label>
              <input type="checkbox" checked={checked[index]} onChange={() => toggle(index)} />
              <span className="pond-checklist__box" aria-hidden="true">✓</span>
              <span>{material}</span>
            </label>
          </li>
        ))}
      </ul>
      <button type="button" className="pond-print" onClick={() => window.print()}>Print this guide <span>↗</span></button>
    </div>
  );
}
