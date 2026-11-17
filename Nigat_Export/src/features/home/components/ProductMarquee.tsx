import { Marquee } from "@/components/ui";

/** Every product named in the category descriptions, as one continuous ribbon. */
const PRODUCTS = [
  "Green coffee",
  "Roasted coffee",
  "Teff",
  "Wheat",
  "Barley",
  "Maize",
  "Sorghum",
  "Sesame",
  "Lentils",
  "Chickpeas",
];

/** Thin band under the hero, between hairlines. */
export function ProductMarquee() {
  return (
    <section aria-label="Products" className="pt-8 lg:pt-12">
      <Marquee items={PRODUCTS} label="Products we export" className="border-y border-line py-6 text-ink/80 lg:py-8" />
    </section>
  );
}
