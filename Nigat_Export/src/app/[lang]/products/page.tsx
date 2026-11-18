import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { ProductShowcase } from "@/features/products";
import { getDictionary } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return createMetadata({
    title: t.products.metaTitle,
    description: t.products.metaDescription,
    path: ROUTES.products,
    locale,
  });
}

export default async function ProductsPage() {
  const { t } = await getDictionary();

  return (
    <>
      <PageHero
        eyebrow={t.products.heroEyebrow}
        title={t.products.heroTitle}
        lead={t.products.heroLead}
        image="/images/hero-products.jpg"
      />
      <ProductShowcase />
      <EnquiryCta />
    </>
  );
}
