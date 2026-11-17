# Nigat Export

Marketing website for **Nigat Export**, built with Next.js (App Router), React, TypeScript and Tailwind CSS.

It shares the engineering structure of `Nigat_Motors` but has its own layout, design system and
content: a warm, light, editorial site for Ethiopian coffee, cereals, pulses and oilseeds, built
from rounded inset panels, bento grids and a soft serif.
See [Design system](#design-system).

## Scripts

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Cache Components, Partial Prefetching) |
| UI | React 19, TypeScript (strict) |
| Styling | Tailwind CSS v4: tokens in `src/styles/globals.css` (`@theme`) |
| Icons | `lucide-react` (the only extra runtime dependency) |
| Fonts | Big Shoulders (condensed display) + Hanken Grotesk (text) via `next/font` |
| Animation | CSS-only: blur-rise scroll reveals (`<Reveal />` + IntersectionObserver), hero zoom, product marquee, expanding service panels; all disabled under `prefers-reduced-motion` |

## Architecture (feature-first)

```
src/
├── app/                    # Routes only: thin pages composing features
│   ├── page.tsx            # Home
│   ├── about/  services/  services/[slug]/  products/  gallery/  faqs/  contact/  credits/
│   ├── not-found.tsx  icon.svg  sitemap.ts  robots.ts  layout.tsx
├── components/
│   ├── ui/                 # Design-system primitives (Button, Section, SectionHeading, Eyebrow, Reveal,
│   │                       #   Accordion, NumberedSteps, SpecList, TextLink, Logo…)
│   └── layout/             # Header (DesktopNav panel + MobileNav), PageHero, Footer
├── features/               # One folder per domain; each exposes a public index.ts
│   ├── home/               # HeroSection, HeroSlideshow, ProductMarquee + hero-slides data
│   ├── about/              # AboutManifesto, ApproachSteps, PrinciplesBand + data
│   ├── services/           # ServicesIndex, ServicesShowcase, ServiceDetail + data
│   ├── products/           # ProductMosaic, ProductShowcase + data
│   ├── gallery/            # GalleryGrid, Lightbox + data
│   ├── faqs/               # FaqPreview, FaqList + data
│   └── contact/            # ContactSection, EnquiryCta, EnquiryForm + lib/enquiry.ts
├── hooks/                  # useScrollHeader, useInView, useOverlay
├── lib/                    # cn, createMetadata, formatIndex
├── constants/              # site (company info), routes, navigation
├── types/                  # Shared domain types
└── styles/globals.css      # Tokens, base styles, pseudo-element components
```

Conventions:

- Pages import features only through their `index.ts`. Feature data lives in `features/*/data`.
- All internal URLs come from `ROUTES` (`src/constants/routes.ts`).
- All company details come from `src/constants/site.ts`.
- Components are Server Components by default. `"use client"` is used only where interaction
  requires it: Header/nav, Reveal, Accordion, HeroSlideshow, EnquiryForm and
  Gallery.
- With Cache Components, request-time reads are isolated behind `<Suspense>`: `usePathname` in
  `ActivePath`, `useSearchParams` in `EnquiryFormFromQuery`. The footer year uses `"use cache"`.

## Design system

All tokens live in `src/styles/globals.css`. Components use the named tokens, never raw hex values.

Style name: **Field**. An editorial layout of its own: a solid linen header, a full-screen
photographic hero with a slide index along its foot, a leaf-green product ticker, staggered About photo
columns, a product mosaic, an origin-to-destination services chain, a framed principles split, a
two-column FAQ and a leaf-green enquiry block. Sharp edges and hairline rules throughout.

**Palette** (`@theme`), organic greens: `ink #16241A` (deep forest) · `graphite #1E3223` (moss) ·
`carbon #29412D` · `paper #EFF1E6` (pale sage linen) · `bone #DFE6D2` (sage) · `silver #B5C4A5`
(secondary text on dark) · `steel #566A51` (secondary text on light) · one accent, `leaf #86A74E`
(`accent`), hover `leaf-bright #9CBC62`. Photo overlays use deep forest, never neutral black.

**Typography:** Big Shoulders, a condensed industrial grotesque in uppercase with a cargo-stencil
feel, for display (`type-display-xl`, `type-display`, `type-h2`, `type-menu`, `type-wordmark`,
`type-number`). Hanken Grotesk for text and sub-headings (`type-h3`, `type-h4`, `type-statement`,
`type-lead`, `type-eyebrow`, `type-nav`). Fluid `clamp()` sizes. Rule: don't combine a `type-*`
utility with a base `text-[size]`/`tracking-*` class. Add a dedicated utility instead.

**Shape and layout:** sharp edges, 1px rules, no shadows; 1520px container, 12-column grid.

**Motion:** a single easing, `--ease-drive`. Reveals rise (`up`), fade, or lift a curtain off a
photo (`mask`); the hero cross-fades with a slow push-in; button arrows drive through on hover.

**Logo:** a leaf-green "N" inside a ruled frame, like a cargo stamp (placeholder until the official
logo is supplied).

## Content to confirm (placeholders)

Verified Nigat Export information was not available. Nothing below is presented as fact. Replace
these values before launch:

| Item | Location | Current placeholder |
| --- | --- | --- |
| Logo | `src/components/ui/Logo.tsx`, `src/app/icon.svg` | Harvest-green "N" mark + wordmark |
| Phone | `src/constants/site.ts` | `+251 000 000 000` |
| Email | `src/constants/site.ts` | `export@nigatexport.example` (reserved, non-routable domain) |
| Address / hours | `src/constants/site.ts` | "to be confirmed" |
| Production URL | `NEXT_PUBLIC_SITE_URL` env var | `http://localhost:3000` |
| Services offered | `src/features/services/data/services.ts` | 4 general export services |
| Product categories | `src/features/products/data/product-categories.ts` | 6 representative categories (not a stock list) |
| About / brand copy | `src/features/about/data/about.ts` | General copy, no figures or dates |
| FAQ answers | `src/features/faqs/data/faqs.ts` | Process-only answers, no policies |
| Social media links | Footer | Omitted until real accounts are provided |

The copy deliberately avoids invented facts: no founding year, statistics, certifications,
reviews, team members, minimum volumes or prices.

## Enquiry form

No backend or email service was specified. The form (`src/features/contact`) validates input on the
client, then opens the visitor's email app with a prefilled `mailto:` message to `CONTACT.email`.
To use a real integration, replace `buildEnquiryMailto` in `src/features/contact/lib/enquiry.ts` with
an API route or Server Action.

Product and service pages link to `/contact?interest=<slug>#enquiry`, which preselects the topic.

## Images

Photos in `public/images/` are representative stock photography, sourced from Wikimedia Commons,
the WordPress Photo Directory, and similar free-licence libraries. They are not Nigat Export's own
photography. Replace them with origin, processing and shipment photos when available, keeping the
same file names.

Every source and licence is listed on the `/credits` page (`src/app/credits/page.tsx`). CC BY and
CC BY-SA images require attribution; public-domain and CC0 images do not, but are credited for
clarity. Hero slides are configured in `src/features/home/data/hero-slides.ts`; the hero uses
photographs only (no video).
