# Nigat Construction

A Next.js (App Router) + React + TypeScript rebuild of the **Builtex** HTML template that lives next to this
folder (`../builtex`). The original is the source of truth: markup, class names, content, images and CSS are
carried over unchanged so the site looks and behaves the same, while the jQuery plugins are replaced by
React components.

## Getting started

Requires Node.js 20.9+.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages are statically prerendered)
npm start          # serve the production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

### Forms

The original template posted its forms to a `form-process.php` script that is not part of the project.
Here the contact/quote forms and the footer newsletter submit through Server Actions
(`src/features/contact/actions.ts`), which validate input and forward it as JSON to `FORM_WEBHOOK_URL`
(see `.env.example`). Without that variable the forms still validate, but report that delivery is not
configured instead of pretending to send.

## Routes

| Original file | Route |
| --- | --- |
| `index.html` / `index-2.html` | `/` |
| `index-slider.html` | `/home-slider` |
| `index-video.html` | `/home-video` |
| `about.html` | `/about` |
| `services.html` | `/services` |
| `service-single.html` | `/service-details` |
| `blog.html` | `/blog` |
| `blog-single.html` | `/blog-details` |
| `projects.html` | `/projects` |
| `project-single.html` | `/project-details` |
| `team.html` | `/team` |
| `team-single.html` | `/team-details` |
| `testimonials.html` | `/testimonials` |
| `image-gallery.html` | `/image-gallery` |
| `video-gallery.html` | `/video-gallery` |
| `faqs.html` | `/faqs` |
| `contact.html` | `/contact` |
| `404.html` | `app/not-found.tsx` (the menu's "404" link points to `/404`) |

`index-sliderb17c.html` (duplicate of the slider page) and `Services-2.html` (an HTTrack "404 - Not found"
page) are mirroring artifacts and were not ported.

## Project structure

```
public/images/            original images, unchanged
src/
  app/                    routes, root layout (fonts, metadata, global effects), globals.css
  components/
    layout/               Header, Navigation, MobileNavigation, Footer, NewsletterForm, PageHeader, Preloader
    sections/             sections reused across pages (About, Approach, Core Values, Expertise, FAQ,
                          Intro Video, Team, Testimonials, CTA)
    shared/               FaqAccordion
    ui/                   SectionTitle, Counter, SkillBar, VideoPopup, Lightbox, BackgroundVideo
    effects/              SmoothScroll (Lenis), ScrollAnimations, MagicCursor
  features/<feature>/     page-specific sections and components (home, services, projects, team, blog,
                          testimonials, gallery, faqs, contact, errors)
  constants/              content collections (services, projects, team, posts, testimonials, FAQs,
                          gallery), navigation, routes, site/contact info
  hooks/                  useInView, useCollapse, useWowAnimations, useGsapEffects, useParallax
  lib/                    small helpers (animation delays, form delivery, Lenis instance)
  types/                  shared TypeScript types
  styles/                 custom.css (original theme), vendor/ (original Bootstrap, animate, slicknav,
                          magnific-popup, mouse-cursor CSS), overrides.css (port-specific adaptations)
```

Sections are Server Components. Client Components are used only where there is interactivity: menus,
accordion, sliders, lightboxes, counters, skill bars, forms and the global animation layer.

## How the original JavaScript was ported

| Original (jQuery / plugin) | Replacement |
| --- | --- |
| SlickNav mobile menu | `MobileNavigation` (same `slicknav_*` markup and classes) |
| Bootstrap collapse accordion | `FaqAccordion` + `useCollapse` (same `collapse` / `collapsing` / `show` classes) |
| Swiper (hero, testimonials) | `swiper/react`, same options and version (14.3) |
| counterUp + Waypoints | `Counter` (IntersectionObserver) |
| Skill bars | `SkillBar` |
| Magnific Popup (video, gallery) | `Lightbox`, `VideoPopup`, `ImageGallery` (same `mfp-*` markup) |
| WOW.js | `useWowAnimations` (adds animate.css's `animated` class on scroll) |
| GSAP SplitText / ScrollTrigger | `useGsapEffects` (`.text-anime-style-3` headings, `.reveal` images) |
| Parallaxie | `useParallax` (screens wider than 1024px, as before) |
| Lenis smooth scroll | `SmoothScroll` (same settings, synced with ScrollTrigger) |
| Magic cursor | `MagicCursor` |
| Bootstrap Validator + AJAX | `ContactForm` (native validation messages) + Server Action |

## Differences from the mirrored original (intentional)

- **Font Awesome webfonts** were missing from the mirrored files, so icons showed as empty boxes; they now
  come from `@fortawesome/fontawesome-free@7.3.0` (the version the template's CSS was written for).
- **Breadcrumb separator**: the mirroring tool had rewritten Bootstrap's `"/"` divider into the template's
  URL; the `"/"` is restored.
- **Broken breadcrumb link** to `Services-2.html` on the service details page points to `/services`.
- The IE-only `*zoom:1` hack was removed from `slicknav.min.css` (modern CSS parsers reject it).
- Inter is self-hosted with `next/font` instead of the Google Fonts stylesheet.
- Small images that the template lays out at their natural size are served `unoptimized` by `next/image`;
  an optimized `srcset` would halve their intrinsic size on high-DPI screens.

## Known limitations

- Form delivery needs `FORM_WEBHOOK_URL` (see above).
- The hero and intro background videos, like the original, stream from the template author's demo CDN
  (`demo.awaikenthemes.com`); host your own files in `public/` for production.
- Links that were `#` in the template (social profiles, blog pagination) are still placeholders.
- The gallery lightbox opens without Magnific's thumbnail "zoom" transition.
