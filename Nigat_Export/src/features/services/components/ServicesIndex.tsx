import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
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

const COLUMNS: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

/**
 * The services as a chain of columns, read left to right from origin to
 * destination. A leaf-green rule draws across the top of the hovered column.
 */
export function ServicesIndex({
  index,
  eyebrow = "Services",
  title = "Support from origin to destination",
  excludeSlug,
  tone = "bone",
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

      <ol className={cn("grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-x-10", COLUMNS[services.length])}>
        {services.map(({ service, position }, i) => (
          <Reveal as="li" key={service.slug} delay={i * 100}>
            <Link
              href={ROUTES.service(service.slug)}
              className="group relative flex h-full flex-col border-t border-ink pt-6 before:absolute before:-top-px before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-accent before:transition-transform before:duration-700 before:ease-drive hover:before:scale-x-100"
            >
              <span className="flex items-center justify-between">
                <span className="type-h2 text-accent">{formatIndex(position)}</span>
                <span className="flex size-11 items-center justify-center border border-line transition-colors duration-500 group-hover:border-accent group-hover:bg-accent">
                  <ArrowRight aria-hidden className="size-4" />
                </span>
              </span>
              <span className="type-h3 mt-8 block">{service.title}</span>
              <span className="mt-3 block text-steel">{service.excerpt}</span>
              <span className="photo-zoom relative mt-8 block aspect-[4/3] overflow-hidden bg-paper">
                <Image src={service.image} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </span>
            </Link>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
