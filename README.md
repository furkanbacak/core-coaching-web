# Core Coaching & Training Solutions

Professional coaching and training website built with Next.js 14, TypeScript, and Tailwind CSS. Bilingual (TR/EN), SEO-optimized, and deployed on Vercel.

## Features

- **Bilingual (TR/EN)** — Turkish default, English toggle via `next-intl`
- **8 Coaching Programs** — Individual detail pages with descriptions and focus areas
- **10 Training Programs** — Individual detail pages with duration, participants, and content
- **Eğitim Destekli Takıma Koçluk** — Dedicated team coaching program page
- **Coaching School** — 3-level ICF coaching program with event calendar and registration
- **Blog** — Article listing and detail pages
- **Contact Forms** — Formspree-powered forms (contact, level requests, event registration)
- **Legal Pages** — Privacy Policy, Terms of Service, Pricing Policy, Cancellation Policy, Refund Policy
- **References** — Client logo grid
- **Responsive** — Mobile-first design
- **Performance** — SSG, lazy loading, image optimization (AVIF/WebP), throttled scroll handlers

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | App Router, SSG, API routes |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| next-intl | Internationalization |
| Framer Motion | Animations |
| Lucide React | Icons |
| Formspree | Form handling (via API proxy) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_FORMSPREE_LEVEL_REQUEST_ID` — Formspree form ID for form submissions

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
core-coaching-web/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx                    # Homepage
│   │   ├── blog/                       # Blog listing & detail pages
│   │   ├── coaching/                   # Coaching programs listing
│   │   │   ├── [slug]/                 # Dynamic coaching detail pages
│   │   │   └── team-coaching/          # Eğitim Destekli Takıma Koçluk
│   │   ├── training/                   # Training programs listing
│   │   │   └── [slug]/                 # Dynamic training detail pages
│   │   ├── coaching-school/            # Coaching School (levels, calendar, register)
│   │   ├── contact/                    # Contact page
│   │   ├── faq/                        # FAQ
│   │   ├── references/                 # Client references
│   │   ├── keynote/                    # Keynote speaking
│   │   ├── workshop/                   # Workshop/Circle studies
│   │   ├── privacy/                    # Privacy Policy
│   │   ├── terms/                      # Terms of Service
│   │   ├── pricing-policy/             # Pricing Policy
│   │   ├── cancellation-policy/        # Cancellation Policy
│   │   └── refund-policy/              # Refund Policy
│   ├── api/formspree/                  # API proxy for Formspree
│   ├── globals.css
│   └── layout.tsx
├── components/                         # UI components
│   ├── Navigation.tsx                  # Header with dropdowns
│   ├── Hero.tsx                        # Homepage hero with video
│   ├── About.tsx                       # About section
│   ├── CoachingFocus.tsx               # Homepage coaching/training cards
│   ├── CoachingAreaList.tsx            # Coaching programs card grid
│   ├── TrainingAreaList.tsx            # Training programs card grid
│   ├── References.tsx                  # Client references
│   ├── Footer.tsx                      # Footer with legal links
│   ├── LegalContent.tsx                # All legal page content (TR/EN)
│   ├── ContactMailtoForm.tsx           # Contact form
│   ├── EventRegisterForm.tsx           # Event registration form
│   ├── LevelRequestForm.tsx            # Coaching level request form
│   └── ...
├── lib/
│   └── program-slugs.ts               # URL slug mappings for programs
├── messages/
│   ├── tr.json                         # Turkish translations
│   └── en.json                         # English translations
├── public/images/                      # Optimized image assets
├── i18n.ts                             # next-intl configuration
├── next.config.js                      # Next.js config with image optimization
└── tailwind.config.ts                  # Tailwind theme configuration
```

## Content Management

### Translations
Edit `messages/tr.json` and `messages/en.json` for all site text.

### Programs
- Program names, descriptions, and details: `messages/[locale].json` under `coaching.coachingArea` and `coaching.trainingArea`
- URL slugs: `lib/program-slugs.ts`

### Blog Posts
Update the `blogPosts` array in `app/[locale]/blog/page.tsx` and `app/[locale]/blog/[slug]/page.tsx`.

### References
Update the `references` array in `components/ReferencesGrid.tsx`.

### Legal Pages
All legal content is in `components/LegalContent.tsx` (bilingual).

## Deployment

Deployed on **Vercel**:

1. Push to GitHub
2. Vercel auto-deploys from `main` branch
3. Set environment variables in Vercel dashboard

## License

All rights reserved. © Core Coaching & Training Solutions
