import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, Eyebrow, TextLink } from "@/components/ui";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="p-(--frame)">
      <div className="relative isolate flex min-h-[calc(max(100svh,640px)_-_2_*_var(--frame))] items-center justify-center overflow-hidden rounded-panel bg-forest px-(--gutter) pt-(--header-height) text-center text-canvas">
        <Image
          src="/images/hero-not-found.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 animate-hero-zoom object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-forest/75" />

        <div className="flex max-w-[40rem] flex-col items-center py-16">
          <p aria-hidden className="type-display-xl serif-italic animate-rise text-ochre-soft">
            404
          </p>
          <Eyebrow inverse className="mt-8 animate-rise [animation-delay:120ms]">
            Page not found
          </Eyebrow>
          <h1 className="type-h2 mt-6 animate-rise text-balance [animation-delay:200ms]">
            This page isn&apos;t in the shipment.
          </h1>
          <p className="type-lead mt-5 animate-rise text-mist [animation-delay:280ms]">
            The page you are looking for may have moved or no longer exists.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap items-center justify-center gap-8 [animation-delay:360ms]">
            <ButtonLink href={ROUTES.home} variant="accent">
              Back to home
            </ButtonLink>
            <TextLink href={ROUTES.products} className="text-canvas">
              Explore products
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
