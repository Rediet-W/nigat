import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { Reveal, Section, TextLink } from "@/components/ui";
import { fill } from "@/i18n/dictionaries";
import { getDictionary } from "@/i18n/server";
import { getServices } from "../data/services";

/** Services page: a two-by-two grid of service sheets, the second column set lower. */
export async function ServicesShowcase() {
  const { locale, t, href: localize } = await getDictionary();

  return (
    <Section>
      <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:gap-x-16">
        {getServices(locale).map((service, i) => {
          const href = localize(ROUTES.service(service.slug));

          return (
            <Reveal as="article" key={service.slug} delay={(i % 2) * 120} className={cn("group", i % 2 === 1 && "md:mt-28")}>
              <Link href={href} tabIndex={-1} aria-hidden className="block">
                <figure className="photo-zoom relative aspect-[16/11] overflow-hidden bg-bone">
                  <Image src={service.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  <figcaption className="type-number absolute top-0 left-0 bg-accent px-3 py-2 text-ink">
                    {formatIndex(i)}
                  </figcaption>
                </figure>
              </Link>
              <h2 className="type-h2 mt-8 text-balance">
                <Link href={href} className="transition-colors duration-500 hover:text-accent">
                  {service.title}
                </Link>
              </h2>
              <p className="type-lead mt-5 text-steel">{service.excerpt}</p>
              <ul className="mt-8 border-t border-ink">
                {service.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight} className="flex gap-4 border-b border-line py-3.5 text-sm font-medium">
                    <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <TextLink href={href} className="mt-8">
                {fill(t.services.explore, { title: service.title })}
              </TextLink>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
