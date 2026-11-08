import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, Container, Eyebrow, TextLink } from "@/components/ui";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
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
              Page not found
            </Eyebrow>
            <h1 className="type-h2 text-balance">This road doesn&apos;t lead anywhere.</h1>
          </div>
          <div className="animate-rise [animation-delay:240ms] lg:col-span-4 lg:col-start-9">
            <p className="type-lead text-silver">
              The page you are looking for may have moved or no longer exists.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-8">
              <ButtonLink href={ROUTES.home}>Back to home</ButtonLink>
              <TextLink href={ROUTES.vehicles}>Explore vehicles</TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
