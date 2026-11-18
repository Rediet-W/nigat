import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { ContactSection } from "@/features/contact";
import { getDictionary } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return createMetadata({
    title: t.contactPage.metaTitle,
    description: t.contactPage.metaDescription,
    path: ROUTES.contact,
    locale,
  });
}

export default async function ContactPage() {
  const { t } = await getDictionary();

  return (
    <>
      <PageHero
        eyebrow={t.contactPage.heroEyebrow}
        title={t.contactPage.heroTitle}
        lead={t.contactPage.heroLead}
        image="/images/hero-contact.jpg"
        size="compact"
      />
      <ContactSection />
    </>
  );
}
