import Image from "next/image";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { ButtonLink, Eyebrow, Reveal, Section, SpecList } from "@/components/ui";
import { VEHICLE_CATEGORIES } from "../data/vehicle-categories";

/** Vehicles page: a category index followed by one editorial spread per category. */
export function VehicleShowcase() {
  return (
    <>
      <Section tone="bone" compact>
        <nav aria-label="Jump to a category">
          <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3 lg:grid-cols-6">
            {VEHICLE_CATEGORIES.map((category, i) => (
              <li key={category.slug} className="border-t border-line">
                <a
                  href={`#${category.slug}`}
                  className="group flex items-baseline gap-3 py-4 transition-colors duration-500 hover:text-accent"
                >
                  <span className="type-number text-xs text-accent">{formatIndex(i)}</span>
                  <span className="type-nav">{category.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Section>

      <Section>
        <div className="space-y-24 lg:space-y-40">
          {VEHICLE_CATEGORIES.map((category, i) => {
            const reversed = i % 2 === 1;

            return (
              <article
                key={category.slug}
                id={category.slug}
                className="grid scroll-mt-(--header-height) grid-cols-1 items-end gap-10 lg:grid-cols-12"
              >
                <Reveal variant="mask" className={cn("lg:col-span-8", reversed && "lg:order-2 lg:col-start-5")}>
                  <figure className="relative aspect-[16/11] overflow-hidden bg-bone">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(min-width: 1024px) 66vw, 100vw"
                      className="object-cover"
                    />
                  </figure>
                </Reveal>

                <div className={cn("lg:col-span-4", reversed ? "lg:order-1 lg:col-start-1" : "lg:col-start-9")}>
                  <Reveal>
                    <span aria-hidden className="type-number block text-[clamp(4rem,8vw,7.5rem)] leading-none text-ink/10">
                      {formatIndex(i)}
                    </span>
                    <Eyebrow className="mt-4 mb-5">Vehicle category</Eyebrow>
                    <h2 className="type-h2">{category.name}</h2>
                    <p className="type-lead mt-5 text-steel">{category.description}</p>
                  </Reveal>
                  <Reveal delay={120}>
                    <SpecList
                      className="mt-8"
                      rows={[
                        { label: "Ideal for", value: category.idealFor },
                        { label: "Availability", value: "On enquiry" },
                      ]}
                    />
                    <ButtonLink href={ROUTES.enquire(category.slug)} variant="dark" className="mt-8">
                      Enquire about {category.name}
                    </ButtonLink>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
