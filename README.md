# Mini Wild Garden

A practical wildlife-gardening guide built with Next.js.

## Getting Started

Install dependencies, copy `.env.example` to `.env.local`, fill in the required
Resend values, and run the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Quality checks

Run the same checks used by GitHub Actions:

```bash
npm run lint
npm test
npm run build
```

## Production configuration

The contact and newsletter endpoints use Resend. Newsletter confirmation also
requires a strong `NEWSLETTER_SIGNING_SECRET`.

For shared rate limiting across serverless instances, create an Upstash Redis
database and configure:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

Without those variables, development and preview environments use a per-process
in-memory fallback.
