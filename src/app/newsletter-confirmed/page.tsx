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
  const invalid = status === "invalid";

  return (
    <main className="confirmation-page">
      {success && <NewsletterConfirmationTracking />}
      <div className="shell confirmation-page__inner">
        <span className="eyebrow">Mini Wild Garden field notes</span>
        <h1>{success ? "You are on the list." : invalid ? "That link has expired." : "We could not confirm that address."}</h1>
        <p>
          {success
            ? "Your email is confirmed. Occasional seasonal notes and new guide announcements will now find their way to you."
            : invalid
              ? "Return to the site and submit the newsletter form again to receive a fresh confirmation link."
              : "Please try the confirmation link again or submit the newsletter form once more."}
        </p>
        <Link className="button button--dark" href="/guides">Explore the guides</Link>
      </div>
    </main>
  );
}
