import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import {
  cleanMessage,
  cleanSingleLine,
  escapeHtml,
  hasValidOrigin,
  isEmail,
  isRateLimited,
  looksHuman,
  requestIp,
} from "./formSecurity";

describe("form security", () => {
  it("normalises and bounds submitted text", () => {
    expect(cleanSingleLine("  hello\n\tgarden  ", 20)).toBe("hello garden");
    expect(cleanSingleLine("123456", 4)).toBe("1234");
    expect(cleanMessage("one\r\ntwo\rthree", 20)).toBe("one\ntwo\nthree");
    expect(escapeHtml(`<a href="'">`)).toBe("&lt;a href=&quot;&#039;&quot;&gt;");
  });

  it("validates email and human timing inputs", () => {
    expect(isEmail("gardener@example.com")).toBe(true);
    expect(isEmail("not-an-email")).toBe(false);
    expect(looksHuman(Date.now() - 3_000)).toBe(true);
    expect(looksHuman(Date.now())).toBe(false);
  });

  it("checks origins and prioritises platform-provided IP headers", () => {
    const request = new NextRequest("https://www.miniwildgarden.co.uk/api/contact", {
      headers: {
        origin: "https://www.miniwildgarden.co.uk",
        "x-vercel-forwarded-for": "203.0.113.8",
        "x-forwarded-for": "198.51.100.2",
      },
    });

    expect(hasValidOrigin(request)).toBe(true);
    expect(requestIp(request)).toBe("203.0.113.8");
  });

  it("limits repeated requests when shared Redis is not configured", async () => {
    const key = `test:${crypto.randomUUID()}`;
    for (let attempt = 0; attempt < 4; attempt += 1) {
      await expect(isRateLimited(key)).resolves.toBe(false);
    }
    await expect(isRateLimited(key)).resolves.toBe(true);
  });
});
