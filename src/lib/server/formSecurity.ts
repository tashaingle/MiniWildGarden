import type { NextRequest } from "next/server";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 4;

type RateRecord = { count: number; resetAt: number };

declare global {
  // eslint-disable-next-line no-var
  var miniWildGardenRateLimit: Map<string, RateRecord> | undefined;
}

const rateStore = globalThis.miniWildGardenRateLimit ?? new Map<string, RateRecord>();
globalThis.miniWildGardenRateLimit = rateStore;

export function requestIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const current = rateStore.get(key);

  if (!current || current.resetAt <= now) {
    rateStore.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  rateStore.set(key, current);
  return current.count > MAX_REQUESTS;
}

export function hasValidOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const allowed = new Set([request.nextUrl.origin]);
  const configuredSite = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredSite) {
    try {
      allowed.add(new URL(configuredSite).origin);
    } catch {
      // Ignore malformed optional configuration and retain the request origin check.
    }
  }

  return allowed.has(origin);
}

export function looksHuman(startedAt: unknown): boolean {
  const started = Number(startedAt);
  if (!Number.isFinite(started)) return false;

  const elapsed = Date.now() - started;
  return elapsed >= 2500 && elapsed <= 2 * 60 * 60 * 1000;
}

export function cleanSingleLine(value: unknown, maxLength: number): string {
  return String(value ?? "")
    .replace(/[\r\n\t]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function cleanMessage(value: unknown, maxLength: number): string {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .slice(0, maxLength);
}

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

export function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#039;",
      '"': "&quot;",
    };
    return entities[character] ?? character;
  });
}
