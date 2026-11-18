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
| Fonts | Big Shoulders (condensed display) + Hanken Grotesk (text) via `next/font`; Noto Sans Ethiopic supplies Amharic glyphs only |
| Languages | English (default, unprefixed URLs) and Amharic (`/am/...`), see "Languages" below |
| Animation | CSS-only: blur-rise scroll reveals (`<Reveal />` + IntersectionObserver), hero zoom, product marquee, expanding service panels; all disabled under `prefers-reduced-motion` |

## Architecture (feature-first)

```
src/
├── proxy.ts                # Language routing: /am/* as is, /en/* → /*, everything else → /en/*
├── i18n/                   # config (locales, localizePath), server (getDictionary), dictionaries/en|am
├── app/                    # Routes only: thin pages composing features
│   ├── [lang]/             # Root layout + every page, prerendered for each language
│   │   ├── page.tsx  layout.tsx  not-found.tsx  [...rest]/ (unmatched URLs → localized 404)
│   │   └── about/  services/  services/[slug]/  products/  gallery/  faqs/  contact/  credits/
│   ├── icon.svg  apple-icon.tsx  sitemap.ts  robots.ts
├── components/
│   ├── ui/                 # Design-system primitives (Button, Section, SectionHeading, Eyebrow, Reveal,
│   │                       #   Accordion, NumberedSteps, SpecList, TextLink, Logo…)
│   └── layout/             # Header (DesktopNav panel + MobileNav), SectorSwitcher, LanguageSwitch, PageHero, Footer
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
├── constants/              # site (company info), nigat-group (sector websites), routes, navigation
├── types/                  # Shared domain types
└── styles/globals.css      # Tokens, base styles, pseudo-element components
```

Conventions:

- Pages import features only through their `index.ts`. Feature data lives in `features/*/data`.
- All internal URLs come from `ROUTES` (`src/constants/routes.ts`), passed through `href()` from
  `getDictionary()` (or `localizePath`) so they point at the current language.
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

**Logo:** the official Nigat mark (`public/images/logo.png`) beside the "Nigat / Export" wordmark
(`ንጋት / ኤክስፖርት` in Amharic). Between 1024 and 1279px the header shows the mark only so the menu,
group switcher and language toggle fit on one line. The same mark is the favicon (`src/app/icon.svg`)
and the Apple touch icon (`src/app/apple-icon.tsx`).

## Languages

English is the default and keeps its original URLs (`/about`); Amharic lives under `/am`
(`/am/about`). `src/proxy.ts` rewrites unprefixed requests to the internal `/en/...` routes, and
`/en/...` redirects to the unprefixed URL. Every page is prerendered in both languages.

- UI copy: `src/i18n/dictionaries/en.ts` and `am.ts` (same keys, enforced by the `Dictionary` type).
- Content: each `features/*/data` file holds an `en` and an `am` version (same slugs and order).
- Company data: `SITE` / `SITE_AM`, `CONTACT` / `CONTACT_AM` in `src/constants/site.ts`.
- Server Components read the language with `getDictionary()` (`next/root-params`); Client Components
  receive copy as props.
- The header toggle (`LanguageSwitch`) links to the same page in the other language.

## Nigat Group navigation

Nigat Fanawi Trading PLC is the parent company of three sectors, each with its own website.
`src/constants/nigat-group.ts` lists them (edit `SECTOR_URLS` at the top, or set
`NEXT_PUBLIC_CONSTRUCTION_URL`, `NEXT_PUBLIC_MOTORS_URL`, `NEXT_PUBLIC_EXPORTS_URL`). They appear in
the header switcher (≥ 1024px), the mobile menu and the footer band; this site (`CURRENT_SECTOR =
"exports"`) is marked "You are here" and links to its own home page.

## Content to confirm (placeholders)

Company details (legal name, phones, email, address, hours, social links) are the verified Nigat
Fanawi Trading PLC values shared with the other group websites. Nothing below is presented as fact.
Replace these values before launch:

| Item | Location | Current placeholder |
| --- | --- | --- |
| Motors / Exports website URLs | `src/constants/nigat-group.ts` (`SECTOR_URLS`) or env vars | `https://motors.nigat.example`, `https://exports.nigat.example` |
| Production URL | `NEXT_PUBLIC_SITE_URL` env var | `http://localhost:3000` |
| Services offered | `src/features/services/data/services.ts` | 4 general export services |
| Product categories | `src/features/products/data/product-categories.ts` | 6 representative categories (not a stock list) |
| About / brand copy | `src/features/about/data/about.ts` | General copy, no figures or dates |
| FAQ answers | `src/features/faqs/data/faqs.ts` | Process-only answers, no policies |

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
