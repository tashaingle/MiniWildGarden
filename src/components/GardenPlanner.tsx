"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/Icon";

const questions = [
  { id: "water", title: "Reliable water", copy: "A pond, bird bath or shallow drinking dish is available and kept safe.", href: "/garden-guides/make-a-mini-wildlife-pond", action: "Add a safe source of water" },
  { id: "flowers", title: "Flowers through the seasons", copy: "Something useful is flowering in spring, summer and autumn.", href: "/garden-guides/best-flowers-for-bees-and-pollinators", action: "Extend your flowering season" },
  { id: "shelter", title: "Quiet shelter", copy: "Logs, leaves, dense planting or another undisturbed refuge is available.", href: "/garden-guides/build-a-log-and-leaf-habitat", action: "Build a log and leaf refuge" },
  { id: "access", title: "Connected access", copy: "Wildlife can move into, out of and through the space without obvious traps.", href: "/garden-guides/make-a-hedgehog-highway", action: "Reconnect the garden" },
  { id: "chemicals", title: "Gentle garden care", copy: "Pesticides are avoided and a little plant damage is accepted as part of the food web.", href: "/garden-guides/chemical-free-garden", action: "Move towards chemical-free care" },
  { id: "structure", title: "Layers of planting", copy: "The garden includes low cover, flowers and taller shrubs, climbers or trees.", href: "/garden-guides/plant-a-wildlife-hedge", action: "Add another habitat layer" },
  { id: "wild", title: "A deliberately untidy corner", copy: "At least one small area keeps seed heads, leaf litter or longer growth.", href: "/wildlife-guides/butterfly-friendly-garden", action: "Leave a wilder corner" },
  { id: "safe", title: "Hazards checked", copy: "Ponds have escape routes and netting, drains, tools and bonfires are managed carefully.", href: "/wildlife-guides/frog-friendly-space", action: "Make routes and edges safer" },
];

const STORAGE_KEY = "mwg-garden-planner";

export function GardenPlanner() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) setAnswers(JSON.parse(stored));
      } catch {
        // Start fresh if storage is unavailable.
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const completed = questions.filter((question) => answers[question.id]).length;
  const score = Math.round((completed / questions.length) * 100);
  const recommendations = useMemo(() => questions.filter((question) => !answers[question.id]).slice(0, 3), [answers]);
  const level = score >= 88 ? "A connected mini ecosystem" : score >= 63 ? "A strong wildlife patch" : score >= 38 ? "A promising starting point" : "A blank canvas with huge potential";

  function toggle(id: string) {
    const next = { ...answers, [id]: !answers[id] };
    setAnswers(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // The planner still works during this visit.
    }
  }

  function reset() {
    setAnswers({});
    try { window.localStorage.removeItem(STORAGE_KEY); } catch { /* no-op */ }
  }

  return (
    <div className="planner">
      <section className="planner-score" aria-live="polite">
        <div className="planner-score__ring" style={{ "--score": `${score * 3.6}deg` } as CSSProperties}>
          <span><strong>{score}</strong><small>/100</small></span>
        </div>
        <div>
          <span className="eyebrow">Your habitat score</span>
          <h2>{level}</h2>
          <p>This is a planning tool, not a scientific survey. Use it to spot the next practical layer your outdoor space could add.</p>
        </div>
      </section>

      <section className="planner-grid" aria-label="Wildlife garden assessment">
        {questions.map((question, index) => (
          <label className={`planner-question ${answers[question.id] ? "is-checked" : ""}`} key={question.id}>
            <input type="checkbox" checked={Boolean(answers[question.id])} onChange={() => toggle(question.id)} />
            <span className="planner-question__number">{String(index + 1).padStart(2, "0")}</span>
            <span className="planner-question__check" aria-hidden="true"><Icon name="check" size={20} /></span>
            <strong>{question.title}</strong>
            <p>{question.copy}</p>
          </label>
        ))}
      </section>

      <section className="planner-next">
        <div>
          <span className="eyebrow">Your next best changes</span>
          <h2>{recommendations.length ? "Build the missing layers." : "Your garden has every core layer."}</h2>
        </div>
        {recommendations.length ? (
          <div className="planner-recommendations">
            {recommendations.map((item, index) => (
              <Link href={item.href} key={item.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.action}</strong>
                <Icon name="arrow" size={18} />
              </Link>
            ))}
          </div>
        ) : <p>Keep observing, maintain water and shelter, and let the habitat settle rather than adding more for the sake of it.</p>}
        <div className="planner-actions">
          <button className="button button--dark" type="button" onClick={() => window.print()}>Print my plan</button>
          {completed > 0 && <button type="button" onClick={reset}>Start again</button>}
        </div>
      </section>
    </div>
  );
}
