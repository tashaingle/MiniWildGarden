"use client";

import { useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/Icon";

export function SeasonChecklist({ season, jobs }: { season: string; jobs: readonly string[] }) {
  const storageKey = `mwg-season-checklist:${season}`;
  const [checked, setChecked] = useState<boolean[]>(jobs.map(() => false));

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored) as boolean[];
        setChecked(jobs.map((_, index) => Boolean(parsed[index])));
      }
    } catch {
      // Start with an empty checklist if browser storage is unavailable.
    }
  }, [jobs, storageKey]);

  const complete = useMemo(() => checked.filter(Boolean).length, [checked]);

  function update(index: number) {
    const next = checked.map((value, itemIndex) => itemIndex === index ? !value : value);
    setChecked(next);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // The checklist still works for this visit.
    }
  }

  function reset() {
    const next = jobs.map(() => false);
    setChecked(next);
    try {
      window.localStorage.removeItem(storageKey);
    } catch {
      // Nothing else is needed.
    }
  }

  return (
    <div className="season-checklist">
      <div className="season-checklist__progress">
        <div><strong>{complete}/{jobs.length}</strong><span>seasonal jobs completed</span></div>
        <div aria-hidden="true"><span style={{ width: `${(complete / jobs.length) * 100}%` }} /></div>
      </div>
      <div className="seasonal-jobs__list">
        {jobs.map((job, index) => (
          <label className={`season-job season-job--interactive ${checked[index] ? "is-complete" : ""}`} key={job}>
            <input type="checkbox" checked={checked[index]} onChange={() => update(index)} />
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{job}</p>
            <span className="season-job__check" aria-hidden="true"><Icon name="check" size={18} /></span>
          </label>
        ))}
      </div>
      <div className="season-checklist__actions">
        <button type="button" onClick={() => window.print()}>Print checklist</button>
        {complete > 0 && <button type="button" onClick={reset}>Reset progress</button>}
      </div>
    </div>
  );
}
