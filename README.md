# Thirteen Month Technology — Corporate Website

Public corporate website for Thirteen Month Technology, an international technology company focused on financial technology, government digital transformation, aviation technology, cross-border verification, and digital trust infrastructure.

This is a public site. It communicates purpose and value. It does **not** publish source architecture, APIs, proprietary algorithms, security internals, confidential banking procedures, or unreleased product detail.

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS
- Light and dark mode (`next-themes`)
- SEO: metadata, sitemap, robots, Open Graph, JSON-LD
- Contact form API at `/api/contact`

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Updating content

Almost all public copy lives in one file:

- [`src/content/site.ts`](src/content/site.ts)

Update navigation, sector copy, capabilities, roadmap, and contact details there. Page files in `src/app` assemble those sections.

Brand usage, colour, and type rules: [`BRAND.md`](BRAND.md).

Logo files:

- `public/brand/logo-original.png` — original lockup
- `public/brand/logo.png` — working copy for the site

## Environment

See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for sitemap, Open Graph, and JSON-LD |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email shown on the contact page |
| `CONTACT_TO_EMAIL` | Inbox for form submissions |
| `RESEND_API_KEY` | Optional email delivery via Resend |
| `RESEND_FROM_EMAIL` | Optional from-address for Resend |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional Plausible analytics domain |

Without Resend, valid form submissions are still stored in `data/inquiries.json` (gitignored).

## Site map

- `/` Home
- `/about`
- `/solutions`
- `/financial-services`
- `/government`
- `/aviation` (labelled as Future Aviation Solutions)
- `/technology` (includes Cross-Border Verification)
- `/vision-2036`
- `/partnerships`
- `/contact`
- `/privacy`

## Company-controlled accounts

Thirteen Month Technology should own and retain:

- Domain
- Hosting / deployment account
- Git repository
- Website administrator access
- Analytics account
- Email / DNS configuration

Give developers access as needed. Do not leave production credentials only with an agency or freelancer.

## Deployment

1. Create a GitHub repository owned by the company.
2. Set the environment variables in the host (Vercel, or equivalent).
3. Point the company domain to the deployment.
4. Confirm SSL, sitemap (`/sitemap.xml`), and social previews.

## Confidentiality

Do not add to this repository:

- Internal architecture diagrams
- API specifications
- Security implementation notes
- Collateral-risk methodology
- Confidential partner names or contracts
- Unreleased product functionality
