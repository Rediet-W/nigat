import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { FaqPreview } from "@/features/faqs";
import { ServicesShowcase } from "@/features/services";
import { getDictionary } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return createMetadata({
    title: t.services.metaTitle,
    description: t.services.metaDescription,
    path: ROUTES.services,
    locale,
  });
}

export default async function ServicesPage() {
  const { t } = await getDictionary();

  return (
    <>
      <PageHero
        eyebrow={t.services.heroEyebrow}
        title={t.services.heroTitle}
        lead={t.services.heroLead}
        image="/images/hero-services.jpg"
      />
      <ServicesShowcase />
      <FaqPreview />
      <EnquiryCta />
    </>
  );
}
