import { describe, expect, it } from "vitest";
import { seasonalFocus, sortSightings, type WildlifeSighting } from "./myGarden";
import { defaultProfile } from "./planner";

describe("My Garden dashboard helpers", () => {
  it("uses the planner month for relevant seasonal guidance", () => {
    expect(seasonalFocus({ ...defaultProfile(), month: 4 }).season).toBe("spring");
    expect(seasonalFocus({ ...defaultProfile(), month: 7 }).href).toBe("/seasonal-advice/summer");
    expect(seasonalFocus({ ...defaultProfile(), month: 10 }).tasks).toContain("Make a leaf corner");
    expect(seasonalFocus({ ...defaultProfile(), month: 1 }).title).toContain("shelter");
  });

  it("shows the most recent wildlife observation first", () => {
    const sightings: WildlifeSighting[] = [
      { id: "1", species: "Robin", category: "bird", location: "", notes: "", observedAt: "2026-06-01", createdAt: "2026-06-01T10:00:00Z" },
      { id: "2", species: "Frog", category: "frog", location: "", notes: "", observedAt: "2026-07-01", createdAt: "2026-07-01T10:00:00Z" },
    ];

    expect(sortSightings(sightings).map((item) => item.species)).toEqual(["Frog", "Robin"]);
    expect(sightings[0].species).toBe("Robin");
  });
});
