import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createNewsletterToken, readNewsletterToken } from "./newsletterToken";

describe("newsletter tokens", () => {
  beforeEach(() => {
    process.env.NEWSLETTER_SIGNING_SECRET = "a-long-test-secret-that-is-not-used-in-production";
  });

  afterEach(() => {
    vi.useRealTimers();
    delete process.env.NEWSLETTER_SIGNING_SECRET;
  });

  it("round-trips authenticated subscriber details", () => {
    const token = createNewsletterToken("garden@example.com", "Robin");
    expect(readNewsletterToken(token)).toMatchObject({
      email: "garden@example.com",
      firstName: "Robin",
    });
  });

  it("rejects tampered and expired tokens", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-29T09:00:00Z"));
    const token = createNewsletterToken("garden@example.com", "Robin");
    const [iv, tag, encrypted] = token.split(".");
    const replacement = encrypted.startsWith("A") ? "B" : "A";
    const tampered = [iv, tag, `${replacement}${encrypted.slice(1)}`].join(".");

    expect(readNewsletterToken(tampered)).toBeNull();

    vi.setSystemTime(new Date("2026-07-30T09:00:01Z"));
    expect(readNewsletterToken(token)).toBeNull();
  });

  it("requires a signing secret", () => {
    delete process.env.NEWSLETTER_SIGNING_SECRET;
    expect(() => createNewsletterToken("garden@example.com", "")).toThrow(
      "NEWSLETTER_SIGNING_SECRET is not configured.",
    );
  });
});
