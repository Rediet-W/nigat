import { ButtonLink, Eyebrow, TextLink } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import { HERO_SLIDE_DURATION, HERO_SLIDES } from "../data/hero-slides";
import { HeroSlideshow } from "./HeroSlideshow";

/**
 * Full-screen photographic opener: label, headline, lead and actions stacked
 * on the left, with a slide index along the foot.
 */
export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[max(100svh,680px)] flex-col overflow-hidden pt-(--header-height) text-paper">
      <HeroSlideshow slides={HERO_SLIDES} duration={HERO_SLIDE_DURATION}>
        <div className="max-w-[44rem]">
          <Eyebrow inverse className="animate-rise">
            Coffee · Cereals · Pulses — Ethiopia to the world
          </Eyebrow>

          <h1 className="type-display-xl mt-7">
            <span className="block animate-rise [animation-delay:100ms]">Harvest</span>
            <span className="block animate-rise [animation-delay:200ms]">
              to market<span className="text-accent">.</span>
            </span>
          </h1>

          <p className="type-lead mt-8 max-w-[30rem] animate-rise text-paper/85 [animation-delay:320ms]">
            Ethiopian coffee, cereals and pulses — sourced, prepared and shipped to buyers around the world.
          </p>
          <div className="mt-9 flex animate-rise flex-wrap items-center gap-x-8 gap-y-5 [animation-delay:400ms]">
            <ButtonLink href={ROUTES.products}>Explore products</ButtonLink>
            <TextLink href={ROUTES.services}>Our services</TextLink>
          </div>
        </div>
      </HeroSlideshow>
    </section>
  );
}
