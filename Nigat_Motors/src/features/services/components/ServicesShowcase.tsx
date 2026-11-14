import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { Eyebrow, Reveal, Section, TextLink } from "@/components/ui";
import { SERVICES } from "../data/services";

/** Services page: alternating editorial spreads, one per service. */
export function ServicesShowcase() {
  return (
    <Section>
      <div className="space-y-24 lg:space-y-40">
        {SERVICES.map((service, i) => {
          const reversed = i % 2 === 1;
          const href = ROUTES.service(service.slug);

          return (
            <article key={service.slug} className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
              <Reveal variant="mask" className={cn("lg:col-span-6", reversed && "lg:order-2 lg:col-start-7")}>
                <Link href={href} tabIndex={-1} aria-hidden className="group block">
                  <figure className="photo-zoom relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </figure>
                </Link>
              </Reveal>

              <div className={cn("lg:col-span-5", reversed ? "lg:order-1 lg:col-start-1" : "lg:col-start-8")}>
                <Reveal>
                  <Eyebrow index={formatIndex(i)} className="mb-6">
                    Service
                  </Eyebrow>
                  <h2 className="type-h2 text-balance">
                    <Link href={href} className="transition-colors duration-500 hover:text-accent">
                      {service.title}
                    </Link>
                  </h2>
                  <p className="type-lead mt-6 text-steel">{service.excerpt}</p>
                </Reveal>

                <Reveal delay={120}>
                  <ul className="mt-8 border-t border-line">
                    {service.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight} className="flex gap-4 border-b border-line py-3.5 text-sm font-medium">
                        <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <TextLink href={href} className="mt-8">
                    Explore {service.title}
                  </TextLink>
                </Reveal>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
