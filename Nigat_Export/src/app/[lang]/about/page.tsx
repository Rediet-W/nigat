import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { AboutManifesto, ApproachSteps, PrinciplesBand } from "@/features/about";
import { EnquiryCta } from "@/features/contact";
import { getDictionary } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return createMetadata({ title: t.about.metaTitle, description: t.about.metaDescription, path: ROUTES.about, locale });
}

export default async function AboutPage() {
  const { t } = await getDictionary();

  return (
    <>
      <PageHero
        eyebrow={t.about.heroEyebrow}
        title={t.about.heroTitle}
        lead={t.about.heroLead}
        image="/images/hero-about.jpg"
      />
      <AboutManifesto />
      <ApproachSteps />
      <PrinciplesBand />
      <EnquiryCta />
    </>
  );
}
