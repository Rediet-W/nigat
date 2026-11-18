import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { FaqList } from "@/features/faqs";
import { getDictionary } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return createMetadata({ title: t.faqs.metaTitle, description: t.faqs.metaDescription, path: ROUTES.faqs, locale });
}

export default async function FaqsPage() {
  const { t } = await getDictionary();

  return (
    <>
      <PageHero eyebrow={t.faqs.heroEyebrow} title={t.faqs.heroTitle} image="/images/hero-faqs.jpg" size="compact" />
      <FaqList />
      <EnquiryCta />
    </>
  );
}
