import Image from "next/image";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";
import { ButtonLink, Eyebrow, Reveal, Section, SpecList } from "@/components/ui";
import { PRODUCT_CATEGORIES } from "../data/product-categories";

/** Products page: a row of jump chips, then one rounded card per category. */
export function ProductShowcase() {
  const total = formatIndex(PRODUCT_CATEGORIES.length - 1);

  return (
    <Section>
      <nav aria-label="Jump to a product" className="mb-10 lg:mb-14">
        <ul className="no-scrollbar -mx-(--gutter) flex gap-2 overflow-x-auto px-(--gutter) md:flex-wrap">
          {PRODUCT_CATEGORIES.map((category, i) => (
            <li key={category.slug} className="shrink-0">
              <a
                href={`#${category.slug}`}
                className="type-nav flex items-center gap-2.5 rounded-full border border-line px-4 py-2.5 transition-colors duration-500 hover:border-forest hover:bg-forest hover:text-canvas"
              >
                <span className="type-number text-xs text-muted">{formatIndex(i)}</span>
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-4">
        {PRODUCT_CATEGORIES.map((category, i) => {
          const reversed = i % 2 === 1;

          return (
            <article
              key={category.slug}
              id={category.slug}
              className="grid scroll-mt-(--header-height) grid-cols-1 gap-4 rounded-panel bg-shell p-3 md:p-4 lg:grid-cols-2 lg:gap-8"
            >
              <Reveal
                variant="mask"
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-card bg-sand lg:aspect-auto lg:min-h-[32rem]",
                  reversed && "lg:order-2",
                )}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </Reveal>

              <div className={cn("flex flex-col gap-10 p-4 md:p-6 lg:p-10", reversed && "lg:order-1")}>
                <Reveal className="flex items-center justify-between gap-4">
                  <Eyebrow>Export category</Eyebrow>
                  <span className="type-number text-sm text-muted">
                    <span className="text-ink">{formatIndex(i)}</span> / {total}
                  </span>
                </Reveal>
                <div className="mt-auto">
                  <Reveal>
                    <h2 className="type-h2">{category.name}</h2>
                    <p className="type-lead mt-5 max-w-[32rem] text-muted">{category.description}</p>
                  </Reveal>
                  <Reveal delay={120}>
                    <SpecList
                      className="mt-8"
                      rows={[
                        { label: "Ideal for", value: category.idealFor },
                        { label: "Availability", value: "On enquiry" },
                      ]}
                    />
                    <ButtonLink href={ROUTES.enquire(category.slug)} className="mt-8">
                      Enquire about {category.name}
                    </ButtonLink>
                  </Reveal>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
