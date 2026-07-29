import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterConfirmationTracking } from "@/components/NewsletterConfirmationTracking";

export const metadata: Metadata = {
  title: "Newsletter confirmation",
  description: "Confirmation status for Mini Wild Garden field notes.",
  robots: { index: false, follow: true },
};

export default async function NewsletterConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const success = status === "success";
  const pending = status === "pending";
  const invalid = status === "invalid";

  const title = success
    ? "You are on the list."
    : pending
      ? "Your address is confirmed."
      : invalid
        ? "That link has expired."
        : "We could not confirm that address.";

  const message = success
    ? "Your email is confirmed. Occasional seasonal notes and new guide announcements will now find their way to you."
    : pending
      ? "Your consent was confirmed, but the mailing service needs us to finish adding the address manually. You do not need to submit the form again."
      : invalid
        ? "Return to the site and submit the newsletter form again to receive a fresh confirmation link."
        : "Please submit the newsletter form once more. If the problem continues, contact support@miniwildgarden.com.";

  return (
    <main className="confirmation-page">
      {(success || pending) && <NewsletterConfirmationTracking />}
      <div className="shell confirmation-page__inner">
        <span className="eyebrow">Mini Wild Garden field notes</span>
        <h1>{title}</h1>
        <p>{message}</p>
        <Link className="button button--dark" href="/guides">Explore the guides</Link>
      </div>
    </main>
  );
}
