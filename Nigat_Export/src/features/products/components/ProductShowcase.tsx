import Image from "next/image";
import { ROUTES } from "@/constants/routes";
import { formatIndex } from "@/lib/format";
import { ButtonLink, Eyebrow, Reveal, Section, SpecList } from "@/components/ui";
import { PRODUCT_CATEGORIES } from "../data/product-categories";

/** Products page: a sticky category index beside a two-column grid of product sheets. */
export function ProductShowcase() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <nav
          aria-label="Product categories"
          className="lg:sticky lg:top-[calc(var(--header-height)_+_2rem)] lg:col-span-3 lg:self-start"
        >
          <Eyebrow className="mb-6">Categories</Eyebrow>
          <ol className="flex flex-wrap gap-2 lg:block lg:border-t lg:border-ink">
            {PRODUCT_CATEGORIES.map((category, i) => (
              <li key={category.slug} className="lg:border-b lg:border-line">
                <a
                  href={`#${category.slug}`}
                  className="type-nav flex items-baseline gap-4 border border-line px-4 py-2.5 transition-colors duration-500 hover:border-accent hover:text-accent lg:border-0 lg:px-0 lg:py-4"
                >
                  <span className="type-number text-accent">{formatIndex(i)}</span>
                  {category.name}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:col-span-9">
          {PRODUCT_CATEGORIES.map((category, i) => (
            <article key={category.slug} id={category.slug} className="flex scroll-mt-(--header-height) flex-col">
              <Reveal variant="mask">
                <figure className="relative aspect-[4/3] overflow-hidden bg-bone">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(min-width: 1024px) 36vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <figcaption className="type-number absolute top-0 left-0 bg-accent px-3 py-2 text-ink">
                    {formatIndex(i)}
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={100} className="flex flex-1 flex-col">
                <h2 className="type-h2 mt-8">{category.name}</h2>
                <p className="mt-4 text-steel">{category.description}</p>
                <SpecList
                  className="mt-6"
                  rows={[
                    { label: "Ideal for", value: category.idealFor },
                    { label: "Availability", value: "On enquiry" },
                  ]}
                />
                <ButtonLink href={ROUTES.enquire(category.slug)} variant="dark" className="mt-8 self-start">
                  Enquire about {category.name}
                </ButtonLink>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
