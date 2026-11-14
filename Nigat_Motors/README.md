# Nigat Motors

Marketing website for **Nigat Motors**, built with Next.js (App Router), React, TypeScript and Tailwind CSS.

It shares the engineering structure of Nigat Construction (feature-first folders, typed data,
Server Components by default) but has its **own brand identity**: a dark, cinematic, premium
automotive design system. See [Design system](#design-system).

> **Reference note:** `../nigat construction/Nigat_Construction` is an empty, uninitialised git
> submodule. The design reference was the static template in `../nigat construction/builtex`.
> Nothing in `nigat construction/` was modified.

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
| Fonts | Archivo (variable `wdth` axis, display) + Manrope (body) via `next/font` |
| Animation | CSS-only: scroll reveals (`<Reveal />` + IntersectionObserver), hero zoom, staggered rise; all disabled under `prefers-reduced-motion` |

## Architecture (feature-first)

```
src/
├── app/                    # Routes only: thin pages composing features
│   ├── page.tsx            # Home
│   ├── about/  services/  services/[slug]/  vehicles/  gallery/  faqs/  contact/
│   ├── not-found.tsx  icon.svg  sitemap.ts  robots.ts  layout.tsx
├── components/
│   ├── ui/                 # Design-system primitives (Button, Section, SectionHeading, Eyebrow, Reveal,
│   │                       #   Accordion, NumberedSteps, SpecList, ScrollRail, TextLink, Logo…)
│   └── layout/             # Header (DesktopNav mega panel + MobileNav overlay), PageHero, Footer
├── features/               # One folder per domain; each exposes a public index.ts
│   ├── home/               # HeroSection
│   ├── about/              # AboutManifesto, ApproachSteps, PrinciplesBand + data
│   ├── services/           # ServicesIndex, ServicesShowcase, ServiceDetail + data
│   ├── vehicles/           # VehicleRail, VehicleShowcase + data
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
  requires it: Header/nav, Reveal, Accordion, ScrollRail, EnquiryForm and Gallery.
- With Cache Components, request-time reads are isolated behind `<Suspense>`: `usePathname` in
  `ActivePath`, `useSearchParams` in `EnquiryFormFromQuery`. The footer year uses `"use cache"`.

## Design system

All tokens live in `src/styles/globals.css`. Components use semantic tokens, never raw hex values.

**Palette** (`@theme`): `ink #0A0A0B` · `graphite #131416` · `carbon #1C1E21` · `paper #F5F3EF` ·
`bone #EBE7E0` · `silver #B7BBC1` · `steel #5B5F66` · accent `copper #D9682C` (hover `#EF7F42`).
Semantic CSS variables (`--bg-primary`, `--surface-inverse`, `--text-secondary`, `--accent`,
`--border`, `--overlay`…) are declared on `:root`.

**Typography:** Archivo at its widest (`wdth 125`), uppercase, for editorial display headlines
(`type-display-xl`, `type-display`, `type-h2`); Manrope for text. Fluid `clamp()` sizes. Utilities:
`type-eyebrow`, `type-nav`, `type-lead`, `type-statement`, `type-number`, `type-menu`, `type-wordmark`.
Rule: don't combine a `type-*` utility with a base `text-[size]`/`tracking-*` class. Add a dedicated
utility instead.

**Space and layout:** `--space-section` (fluid 5–10rem), `--gutter` (fluid 1.25–4rem), a 1520px
container and an asymmetric 12-column grid. Sections alternate `paper`/`bone`/`ink`/`graphite` tones
via `<Section tone>`.

**Motion:** a single easing, `--ease-drive`. Reveals use the `up`, `fade` and `mask` (clip-path wipe)
variants. Heroes slowly zoom; the header hides on scroll down and turns solid on scroll; buttons
and links redraw their arrow and underline on hover.

**Signature patterns:** numbered chapters (`01 —`) on the home page, hairline-ruled lists,
full-bleed photographic heroes, the services index with hover image reveal, the vehicle scroll
rail, and the oversized footer wordmark.

## Content to confirm (placeholders)

Verified Nigat Motors information was not available. Nothing below is presented as fact. Replace
these values before launch:

| Item | Location | Current placeholder |
| --- | --- | --- |
| Logo | `src/components/ui/Logo.tsx`, `src/app/icon.svg` | Copper "N" mark + wordmark |
| Phone | `src/constants/site.ts` | `+251 000 000 000` |
| Email | `src/constants/site.ts` | `info@nigatmotors.example` (reserved, non-routable domain) |
| Address / hours | `src/constants/site.ts` | "to be confirmed" |
| Production URL | `NEXT_PUBLIC_SITE_URL` env var | `http://localhost:3000` |
| Services offered | `src/features/services/data/services.ts` | 4 general automotive services |
| Vehicle categories | `src/features/vehicles/data/vehicle-categories.ts` | 6 general categories (not inventory) |
| About / brand copy | `src/features/about/data/about.ts` | General copy, no figures or dates |
| FAQ answers | `src/features/faqs/data/faqs.ts` | Process-only answers, no policies |
| Social media links | Footer | Omitted until real accounts are provided |

The copy deliberately avoids invented facts: no founding year, statistics, reviews, team members,
brands carried or prices.

## Enquiry form

No backend or email service was specified. The form (`src/features/contact`) validates input on the
client, then opens the visitor's email app with a prefilled `mailto:` message to `CONTACT.email`.
To use a real integration, replace `buildEnquiryMailto` in `features/contact/lib/enquiry.ts` with
an API route or Server Action.

Vehicle and service pages link to `/contact?interest=<slug>#enquiry`, which preselects the topic.

## Images

Photos in `public/images/` are representative stock photography from
[Unsplash](https://unsplash.com/license), free for commercial use. Replace them with Nigat Motors'
own showroom, vehicle and workshop photos when available, keeping the same file names.

The home hero video `public/videos/hero-drive.mp4` is Mixkit clip #52427, used under the
[Mixkit Stock Video Free License](https://mixkit.co/license/#videoFree). Hero slides are configured in
`src/features/home/data/hero-slides.ts`; any slide can take an optional `video` (its `image` is used
as the poster and as the fallback for visitors who prefer reduced motion).
