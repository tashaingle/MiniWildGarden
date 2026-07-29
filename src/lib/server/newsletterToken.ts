import { createCipheriv, createDecipheriv, createHash, randomBytes } from "node:crypto";

type NewsletterTokenPayload = {
  email: string;
  firstName: string;
  expiresAt: number;
};

function key() {
  const secret = process.env.NEWSLETTER_SIGNING_SECRET;
  if (!secret) throw new Error("NEWSLETTER_SIGNING_SECRET is not configured.");
  return createHash("sha256").update(secret).digest();
}

export function createNewsletterToken(email: string, firstName: string): string {
  const data: NewsletterTokenPayload = {
    email,
    firstName,
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
  };

  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key(), iv);
  const encrypted = Buffer.concat([
    cipher.update(JSON.stringify(data), "utf8"),
    cipher.final(),
  ]);
  const tag = cipher.getAuthTag();

  return [iv, tag, encrypted].map((part) => part.toString("base64url")).join(".");
}

export function readNewsletterToken(token: string): NewsletterTokenPayload | null {
  const [ivPart, tagPart, encryptedPart] = token.split(".");
  if (!ivPart || !tagPart || !encryptedPart) return null;

  try {
    const iv = Buffer.from(ivPart, "base64url");
    const tag = Buffer.from(tagPart, "base64url");
    const encrypted = Buffer.from(encryptedPart, "base64url");
    const decipher = createDecipheriv("aes-256-gcm", key(), iv);
    decipher.setAuthTag(tag);
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]).toString("utf8");
    const parsed = JSON.parse(decrypted) as NewsletterTokenPayload;

    if (!parsed.email || !parsed.expiresAt || parsed.expiresAt < Date.now()) return null;
    return parsed;
  } catch {
    return null;
  }
}
