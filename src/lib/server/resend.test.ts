import { afterEach, describe, expect, it, vi } from "vitest";
import { ResendRequestError, resendRequest } from "./resend";

describe("Resend client", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    delete process.env.RESEND_API_KEY;
  });

  it("requires an API key", async () => {
    await expect(resendRequest("/emails", { method: "POST" })).rejects.toThrow(
      "RESEND_API_KEY is not configured.",
    );
  });

  it("adds authentication and a request timeout", async () => {
    process.env.RESEND_API_KEY = "re_test";
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ id: "email-id" }), { status: 200 }),
    );

    await expect(resendRequest<{ id: string }>("/emails", { method: "POST" }))
      .resolves.toEqual({ id: "email-id" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.resend.com/emails",
      expect.objectContaining({
        cache: "no-store",
        signal: expect.any(AbortSignal),
        headers: expect.objectContaining({ Authorization: "Bearer re_test" }),
      }),
    );
  });

  it("surfaces non-retryable API errors", async () => {
    process.env.RESEND_API_KEY = "re_test";
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ message: "Invalid sender" }), { status: 422 }),
    );

    await expect(resendRequest("/emails", { method: "POST" })).rejects.toEqual(
      expect.objectContaining<Partial<ResendRequestError>>({
        name: "ResendRequestError",
        status: 422,
        message: "Invalid sender",
      }),
    );
  });
});
