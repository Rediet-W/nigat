import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, Container, Eyebrow, TextLink } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import { getDictionary } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDictionary();
  return { title: t.meta.notFoundTitle };
}

export default async function NotFound() {
  const { t, href } = await getDictionary();

  return (
    <section className="relative isolate flex min-h-[max(100svh,640px)] items-end overflow-hidden bg-ink text-paper">
      <Image
        src="/images/hero-not-found.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-hero-zoom -z-20 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/70 to-ink/30" />

      <Container className="pt-(--header-height) pb-16 lg:pb-24">
        <p
          aria-hidden
          className="type-display-xl animate-rise text-transparent [-webkit-text-stroke:1px_var(--color-silver)]"
        >
          404
        </p>
        <div className="mt-10 grid gap-10 border-t border-line-inverse pt-10 lg:grid-cols-12">
          <div className="animate-rise [animation-delay:120ms] lg:col-span-7">
            <Eyebrow inverse className="mb-6">
              {t.notFound.eyebrow}
            </Eyebrow>
            <h1 className="type-h2 text-balance">{t.notFound.title}</h1>
          </div>
          <div className="animate-rise [animation-delay:240ms] lg:col-span-4 lg:col-start-9">
            <p className="type-lead text-silver">{t.notFound.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-8">
              <ButtonLink href={href(ROUTES.home)}>{t.common.backToHome}</ButtonLink>
              <TextLink href={href(ROUTES.products)}>{t.notFound.exploreProducts}</TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
