import { describe, expect, it } from "vitest";
import {
  buildPersonalPlan,
  defaultProfile,
  habitatScore,
  safetyWarnings,
  seasonForMonth,
} from "./planner";

describe("personal garden planning", () => {
  it("calculates the habitat score from the eight core layers", () => {
    expect(habitatScore({})).toBe(0);
    expect(habitatScore({ water: true, flowers: true, shelter: true, access: true })).toBe(50);
    expect(habitatScore({
      water: true,
      flowers: true,
      shelter: true,
      access: true,
      chemicals: true,
      structure: true,
      wild: true,
      safe: true,
    })).toBe(100);
  });

  it("maps months to UK seasons", () => {
    expect(seasonForMonth(1)).toBe("winter");
    expect(seasonForMonth(4)).toBe("spring");
    expect(seasonForMonth(7)).toBe("summer");
    expect(seasonForMonth(10)).toBe("autumn");
  });

  it("prioritises frog-friendly water for an interested household", () => {
    const profile = {
      ...defaultProfile(4),
      interests: ["frogs" as const],
    };
    expect(buildPersonalPlan(profile, {})[0].id).toBe("water");
  });

  it("uses compact and reversible advice for a rented balcony", () => {
    const profile = {
      ...defaultProfile(6),
      spaceType: "balcony" as const,
      size: "tiny" as const,
      tenure: "renting" as const,
      interests: ["bees" as const],
    };
    const plan = buildPersonalPlan(profile, {});
    expect(plan.find((item) => item.id === "water")?.title).toContain("shallow");
    expect(plan.find((item) => item.id === "access")?.title).toContain("flight corridor");
  });

  it("adds relevant safety warnings for children and pets", () => {
    const profile = {
      ...defaultProfile(),
      children: true,
      pets: true,
      interests: ["frogs" as const],
    };
    const plan = buildPersonalPlan(profile, {}).slice(0, 3);
    const warnings = safetyWarnings(profile, plan);
    expect(warnings.some((warning) => warning.includes("children"))).toBe(true);
    expect(warnings.some((warning) => warning.includes("pets"))).toBe(true);
  });

  it("excludes habitat layers already present", () => {
    const plan = buildPersonalPlan(defaultProfile(), { water: true, safe: true });
    expect(plan.some((item) => item.id === "water")).toBe(false);
    expect(plan.some((item) => item.id === "safe")).toBe(false);
  });
});
