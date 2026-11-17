import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { formatIndex } from "@/lib/format";
import { Reveal, Section, SectionHeading, TextLink, type SectionTone } from "@/components/ui";
import { SERVICES } from "../data/services";

interface ServicesIndexProps {
  index?: string;
  eyebrow?: string;
  title?: string;
  /** Hide one service (used on its own detail page). */
  excludeSlug?: string;
  tone?: SectionTone;
}

/**
 * Services as a row of photo panels (≥ 1280px): the hovered or focused
 * panel widens and reveals its summary. Smaller screens get a card grid
 * with every summary visible.
 */
export function ServicesIndex({
  index,
  eyebrow = "Services",
  title = "Support from origin to destination",
  excludeSlug,
  tone = "canvas",
}: ServicesIndexProps) {
  const services = SERVICES.map((service, position) => ({ service, position })).filter(
    ({ service }) => service.slug !== excludeSlug,
  );

  return (
    <Section tone={tone}>
      <SectionHeading
        index={index}
        eyebrow={eyebrow}
        title={title}
        lead="Sourcing, preparation, quality and freight — support at every stage of the export chain."
        action={<TextLink href={ROUTES.services}>All services</TextLink>}
        layout="split"
      />

      <Reveal>
        <ul className="expand-panels grid grid-cols-1 gap-4 md:grid-cols-2 xl:flex xl:h-[clamp(30rem,38vw,36rem)]">
          {services.map(({ service, position }) => (
            <li key={service.slug} className="expand-panel min-w-0">
              <Link
                href={ROUTES.service(service.slug)}
                className="group relative isolate flex h-full min-h-[24rem] flex-col justify-between overflow-hidden rounded-panel bg-forest p-6 text-canvas md:p-8"
              >
                <span className="photo-zoom absolute inset-0 -z-20">
                  <Image src={service.image} alt="" fill sizes="(min-width: 1280px) 45vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgb(16_38_26/0.92)_0%,rgb(16_38_26/0.25)_60%,rgb(16_38_26/0.35)_100%)]"
                />
                <span className="flex items-start justify-between gap-4">
                  <span className="type-number rounded-full border border-line-inverse bg-forest/30 px-3 py-1 text-sm backdrop-blur-md">
                    {formatIndex(position)}
                  </span>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-shell text-forest transition-colors duration-500 group-hover:bg-ochre-soft">
                    <ArrowUpRight
                      aria-hidden
                      className="size-5 transition-transform duration-500 ease-soft group-hover:rotate-45"
                    />
                  </span>
                </span>
                <span className="block">
                  <span className="type-panel block text-balance">{service.title}</span>
                  <span className="panel-detail mt-3 block max-w-[26rem] text-canvas/80">{service.excerpt}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
