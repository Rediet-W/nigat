import Link from "next/link";
import { ButtonLink, Eyebrow, TextLink } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import { PRODUCT_CATEGORIES } from "@/features/products/data/product-categories";
import { HERO_SLIDE_DURATION, HERO_SLIDES } from "../data/hero-slides";
import { HeroBackdrop } from "./HeroBackdrop";

/**
 * Opener inside a rounded, inset frame: a rotating photo backdrop, a serif
 * headline with an italic accent, and (≥ 1280px) a glass card that lists
 * the product categories.
 */
export function HeroSection() {
  return (
    <section className="p-(--frame)">
      <div className="relative isolate flex min-h-[calc(max(100svh,640px)_-_2_*_var(--frame))] flex-col overflow-hidden rounded-panel bg-forest text-canvas">
        <HeroBackdrop slides={HERO_SLIDES} duration={HERO_SLIDE_DURATION} />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgb(16_38_26/0.92)_0%,rgb(16_38_26/0.35)_55%,rgb(16_38_26/0.45)_100%)]"
        />

        <div className="flex flex-1 flex-col justify-end gap-12 px-(--gutter) pt-[calc(var(--header-height)_+_3rem)] pb-[clamp(1.5rem,4vw,3.5rem)] xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-[56rem]">
            <Eyebrow inverse className="mb-8 animate-rise bg-forest/30 backdrop-blur-md">
              Coffee · Cereals · Pulses
            </Eyebrow>
            <h1 className="type-display-xl text-balance">
              <span className="block animate-rise [animation-delay:120ms]">Ethiopian harvest,</span>
              <span className="block animate-rise [animation-delay:240ms]">
                <em className="serif-italic text-ochre-soft">delivered to market.</em>
              </span>
            </h1>
            <p className="type-lead mt-8 max-w-[32rem] animate-rise text-canvas/80 [animation-delay:360ms]">
              Ethiopian coffee, cereals and pulses — sourced, prepared and shipped to buyers around the world.
            </p>
            <div className="mt-10 flex animate-rise flex-wrap items-center gap-x-8 gap-y-5 [animation-delay:480ms]">
              <ButtonLink href={ROUTES.products} variant="accent">
                Explore products
              </ButtonLink>
              <TextLink href={ROUTES.services} className="text-canvas">
                Our services
              </TextLink>
            </div>
          </div>

          <aside
            aria-label="What we export"
            className="hidden w-[22rem] shrink-0 animate-rise rounded-card border border-line-inverse bg-forest/35 p-6 backdrop-blur-xl [animation-delay:600ms] xl:block"
          >
            <p className="type-eyebrow text-mist">What we export</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`${ROUTES.products}#${category.slug}`}
                    className="type-nav block rounded-full border border-line-inverse px-3.5 py-1.5 text-canvas/90 transition-colors duration-500 hover:border-ochre-soft hover:bg-ochre-soft hover:text-forest"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
            <TextLink href={ROUTES.products} className="mt-6 text-canvas">
              View all products
            </TextLink>
          </aside>
        </div>
      </div>
    </section>
  );
}
