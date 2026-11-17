import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { ProductShowcase } from "@/features/products";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Explore Nigat Export's Ethiopian green and roasted coffee, teff, wheat, barley, maize, sorghum, pulses and oilseeds.",
  path: ROUTES.products,
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="What we export"
        title="Products"
        lead="Six categories to start from. Tell us the grade, volume and destination, and we will confirm what is available."
        image="/images/hero-products.jpg"
      />
      <ProductShowcase />
      <EnquiryCta />
    </>
  );
}
