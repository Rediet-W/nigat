import { ButtonLink, Eyebrow, TextLink } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import { getDictionary } from "@/i18n/server";
import { getHeroSlides, HERO_SLIDE_DURATION } from "../data/hero-slides";
import { HeroSlideshow } from "./HeroSlideshow";

/**
 * Full-screen photographic opener: label, headline, lead and actions stacked
 * on the left, with a slide index along the foot.
 */
export async function HeroSection() {
  const { locale, t, href } = await getDictionary();

  return (
    <section className="relative isolate flex min-h-[max(100svh,680px)] flex-col overflow-hidden pt-(--header-height) text-paper">
      <HeroSlideshow slides={getHeroSlides(locale)} duration={HERO_SLIDE_DURATION} label={t.home.photographs}>
        <div className="max-w-[44rem]">
          <Eyebrow inverse className="animate-rise">
            {t.home.heroEyebrow}
          </Eyebrow>

          <h1 className="type-display-xl mt-7">
            <span className="block animate-rise [animation-delay:100ms]">{t.home.heroLine1}</span>
            <span className="block animate-rise [animation-delay:200ms]">
              {t.home.heroLine2}
              <span className="text-accent">{locale === "am" ? "።" : "."}</span>
            </span>
          </h1>

          <p className="type-lead mt-8 max-w-[30rem] animate-rise text-paper/85 [animation-delay:320ms]">
            {t.home.heroLead}
          </p>
          <div className="mt-9 flex animate-rise flex-wrap items-center gap-x-8 gap-y-5 [animation-delay:400ms]">
            <ButtonLink href={href(ROUTES.products)}>{t.home.exploreProducts}</ButtonLink>
            <TextLink href={href(ROUTES.services)}>{t.home.ourServices}</TextLink>
          </div>
        </div>
      </HeroSlideshow>
    </section>
  );
}
