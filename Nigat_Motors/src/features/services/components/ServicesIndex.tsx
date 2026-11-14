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
 * Typographic index of services. On hover (desktop) each row opens a
 * photographic window between the numeral and the title.
 */
export function ServicesIndex({
  index,
  eyebrow = "Services",
  title = "Everything your vehicle needs",
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
        lead="From choosing the right vehicle to keeping it in great shape — support at every stage of ownership."
        action={<TextLink href={ROUTES.services}>All services</TextLink>}
        layout="split"
      />

      <ul className="border-t border-line">
        {services.map(({ service, position }, i) => (
          <Reveal as="li" key={service.slug} delay={i * 80} className="border-b border-line">
            <Link
              href={ROUTES.service(service.slug)}
              className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-5 gap-y-4 py-8 md:gap-x-8 lg:grid-cols-[4rem_auto_minmax(0,1fr)_minmax(0,22rem)_auto] lg:py-10"
            >
              <span className="type-number text-sm text-accent">{formatIndex(position)}</span>

              <span
                aria-hidden
                className="relative hidden h-20 w-0 overflow-hidden transition-[width] duration-700 ease-drive group-hover:w-32 group-focus-visible:w-32 lg:block"
              >
                <Image src={service.image} alt="" fill sizes="128px" className="object-cover" />
              </span>

              <span className="type-h2 col-span-2 transition-colors lg:col-span-1 duration-500 group-hover:text-accent">{service.title}</span>

              <span className="col-span-2 text-steel lg:col-span-1">
                {service.excerpt}
              </span>

              <span className="col-start-2 row-start-1 flex size-12 items-center justify-center border border-line transition-all duration-500 ease-drive group-hover:border-accent group-hover:bg-accent lg:col-start-auto lg:row-start-auto">
                <ArrowUpRight
                  aria-hidden
                  className="size-5 transition-transform duration-500 ease-drive group-hover:rotate-45"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
