const RESEND_API = "https://api.resend.com";

export class ResendRequestError extends Error {
  status: number;
  details: unknown;

  constructor(message: string, status: number, details: unknown) {
    super(message);
    this.name = "ResendRequestError";
    this.status = status;
    this.details = details;
  }
}

export async function resendRequest<T>(path: string, init: RequestInit): Promise<T> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const response = await fetch(`${RESEND_API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
    cache: "no-store",
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      payload && typeof payload === "object" && "message" in payload
        ? String(payload.message)
        : "The email service rejected the request.";

    throw new ResendRequestError(message, response.status, payload);
  }

  return payload as T;
}
