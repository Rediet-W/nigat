import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { formatIndex } from "@/lib/format";
import { Reveal, Section, TextLink } from "@/components/ui";
import { SERVICES } from "../data/services";

/** Services page: a two-column grid of rounded service cards. */
export function ServicesShowcase() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {SERVICES.map((service, i) => {
          const href = ROUTES.service(service.slug);

          return (
            <Reveal
              as="article"
              key={service.slug}
              delay={(i % 2) * 120}
              className="group flex flex-col rounded-panel bg-shell p-3 md:p-4"
            >
              <Link href={href} tabIndex={-1} aria-hidden className="block">
                <figure className="photo-zoom relative aspect-[16/10] overflow-hidden rounded-card bg-sand">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="type-number absolute top-4 left-4 rounded-full bg-shell/85 px-3 py-1 text-sm text-ink backdrop-blur-md">
                    {formatIndex(i)}
                  </span>
                </figure>
              </Link>

              <div className="flex flex-1 flex-col p-4 md:p-6 lg:p-8">
                <h2 className="type-h2 text-balance">
                  <Link href={href} className="transition-colors duration-500 hover:text-ochre">
                    {service.title}
                  </Link>
                </h2>
                <p className="type-lead mt-4 text-muted">{service.excerpt}</p>
                <ul className="mt-8 space-y-3">
                  {service.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-sand text-ochre">
                        <Check aria-hidden className="size-3" strokeWidth={2.5} />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <TextLink href={href} className="mt-auto self-start pt-10">
                  Explore {service.title}
                </TextLink>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
