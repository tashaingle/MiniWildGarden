const RESEND_API = "https://api.resend.com";
const MAX_ATTEMPTS = 3;

export class ResendRequestError extends Error {
  status: number;
  details: unknown;
  path: string;

  constructor(message: string, status: number, details: unknown, path: string) {
    super(message);
    this.name = "ResendRequestError";
    this.status = status;
    this.details = details;
    this.path = path;
  }
}

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function resendRequest<T>(path: string, init: RequestInit): Promise<T> {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    const response = await fetch(`${RESEND_API}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "mini-wild-garden/1.0",
        ...(init.headers ?? {}),
      },
      cache: "no-store",
    });

    const payload = await response.json().catch(() => null);

    if (response.ok) {
      return payload as T;
    }

    const message =
      payload && typeof payload === "object" && "message" in payload
        ? String(payload.message)
        : "The email service rejected the request.";

    const isRetryable = response.status >= 500 && attempt < MAX_ATTEMPTS;
    if (isRetryable) {
      await wait(250 * 2 ** (attempt - 1));
      continue;
    }

    throw new ResendRequestError(message, response.status, payload, path);
  }

  throw new Error("The Resend request exhausted all retry attempts.");
}
