# Mini Wild Garden launch setup

This patch adds:

- A server-backed contact form with validation, a honeypot, timing checks, origin checks and basic rate limiting.
- A double opt-in newsletter form. A visitor is only added to Resend after clicking a 24-hour confirmation link.
- Consent-controlled Google Analytics 4 page views and successful form events.
- Updated privacy and cookie pages, a cookie-preference panel and a footer settings control.
- Canonical URLs, site and author structured data, article/breadcrumb structured data, improved robots rules and a `www` sitemap.
- Readability fixes for the bird routine panel, the large “3” habitat statistic and guide numbers over images.

## 1. Apply the patch

Extract the ZIP directly into the root of the existing `mini-wild-garden` project and allow it to replace matching files.

## 2. Configure Resend

1. Create or open the Mini Wild Garden account in Resend.
2. Add and verify `miniwildgarden.com` as a sending domain.
3. Create a **Full access** API key. A send-only key cannot create newsletter contacts.
4. In Contacts, create a Segment called `Mini Wild Garden newsletter` and copy its ID.
5. Add the following variables in Vercel under Project → Settings → Environment Variables:

```text
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=Mini Wild Garden <support@miniwildgarden.com>
CONTACT_TO_EMAIL=support@miniwildgarden.com
RESEND_NEWSLETTER_SEGMENT_ID=your-segment-id
```

Create the encrypted confirmation-link secret in PowerShell:

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the result into Vercel as:

```text
NEWSLETTER_SIGNING_SECRET=the-generated-value
```

Also set:

```text
NEXT_PUBLIC_SITE_URL=https://www.miniwildgarden.co.uk
```

The newsletter form adds confirmed addresses to Resend. Send future newsletters as Resend Broadcasts so each email includes Resend’s unsubscribe handling.

## 3. Configure Google Analytics 4

1. Create a GA4 property and a Web data stream for `https://www.miniwildgarden.co.uk`.
2. Copy the Measurement ID beginning with `G-`.
3. Add it to Vercel:

```text
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Analytics is not loaded until a visitor chooses **Allow analytics**. The implementation records:

- Page views.
- `generate_lead` after a successful contact submission.
- `generate_lead` when a newsletter confirmation email is requested.
- `sign_up` after the visitor completes the double opt-in confirmation.

Use GA4 Realtime to test the implementation after deployment.

## 4. Optional Search Console verification

The existing DNS or file verification can remain in place. If Google provides an HTML-tag verification value, add only the content value as:

```text
GOOGLE_SITE_VERIFICATION=your-verification-value
```

## 5. Redeploy and test

After adding environment variables, redeploy the latest commit in Vercel. Test these in an incognito window:

1. Choose Necessary only and confirm no GA requests appear.
2. Reopen Cookie settings from the footer, allow analytics and confirm GA4 Realtime records the visit.
3. Send a contact message and verify it arrives at `support@miniwildgarden.com` with the visitor’s address set as Reply-To.
4. Subscribe to the newsletter, click the confirmation email and confirm the address appears in the Resend Segment.
5. Open `https://www.miniwildgarden.co.uk/sitemap.xml` and resubmit that exact URL in Search Console.

Do not commit `.env.local` or real API keys to GitHub.
