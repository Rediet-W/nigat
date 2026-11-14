import { ButtonLink, Container, Eyebrow, TextLink } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import { HERO_SLIDE_DURATION, HERO_SLIDES } from "../data/hero-slides";
import { HeroBackdrop } from "./HeroBackdrop";

/**
 * Full-viewport opener: a rotating video/photo backdrop behind one fixed,
 * minimal composition (eyebrow, headline, one line of copy, two actions).
 */
export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[max(100svh,640px)] flex-col overflow-hidden bg-ink text-paper">
      <HeroBackdrop slides={HERO_SLIDES} duration={HERO_SLIDE_DURATION} />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(10_10_11/0.9)_0%,rgb(10_10_11/0.6)_40%,rgb(10_10_11/0.15)_100%),linear-gradient(0deg,rgb(10_10_11/0.9)_0%,rgb(10_10_11/0)_40%),linear-gradient(180deg,rgb(10_10_11/0.5)_0%,rgb(10_10_11/0)_25%)]"
      />

      <Container className="flex flex-1 flex-col justify-end pt-(--header-height) pb-10 lg:pb-14">
        <div className="max-w-[64rem]">
          <Eyebrow inverse className="mb-8 animate-rise">
            Vehicles · Servicing · Parts
          </Eyebrow>
          <h1 className="type-display-xl">
            <span className="block overflow-hidden pb-[0.04em]">
              <span className="block animate-rise [animation-delay:120ms]">Drive</span>
            </span>
            <span className="block overflow-hidden pb-[0.04em]">
              <span className="block animate-rise [animation-delay:240ms]">
                Forward<span className="text-accent">.</span>
              </span>
            </span>
          </h1>
          <p className="type-lead mt-8 max-w-[30rem] animate-rise text-silver [animation-delay:360ms]">
            The right vehicle, kept at its best, with advice you can trust.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap items-center gap-x-10 gap-y-6 [animation-delay:480ms]">
            <ButtonLink href={ROUTES.vehicles}>Explore vehicles</ButtonLink>
            <TextLink href={ROUTES.services}>Our services</TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
