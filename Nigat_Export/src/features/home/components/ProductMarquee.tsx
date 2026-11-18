import { getDictionary } from "@/i18n/server";
import { MARQUEE_PRODUCTS } from "../data/hero-slides";

/**
 * Leaf-green ticker of product names. The list is rendered twice for a seamless
 * loop; the copy is hidden from assistive technology. Pauses on hover and
 * stops under reduced motion.
 */
export async function ProductMarquee() {
  const { locale, t } = await getDictionary();
  const products = MARQUEE_PRODUCTS[locale];

  const row = (copy: boolean) => (
    <ul
      aria-label={copy ? undefined : t.home.marqueeLabel}
      aria-hidden={copy || undefined}
      className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12"
    >
      {products.map((product) => (
        <li key={product} className="flex items-center gap-8 md:gap-12">
          <span className="type-h2 whitespace-nowrap">{product}</span>
          <span aria-hidden className="size-2.5 shrink-0 bg-ink md:size-3" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label={t.home.marqueeSection} className="marquee overflow-hidden bg-accent py-5 text-ink md:py-6">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
