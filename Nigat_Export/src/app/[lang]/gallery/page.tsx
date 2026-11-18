import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { Section } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { GalleryGrid, getGalleryImages } from "@/features/gallery";
import { getDictionary } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return createMetadata({
    title: t.gallery.metaTitle,
    description: t.gallery.metaDescription,
    path: ROUTES.gallery,
    locale,
  });
}

export default async function GalleryPage() {
  const { locale, t } = await getDictionary();

  return (
    <>
      <PageHero eyebrow={t.gallery.heroEyebrow} title={t.gallery.heroTitle} image="/images/hero-gallery.jpg" size="compact" />
      <Section>
        <GalleryGrid images={getGalleryImages(locale)} t={t.gallery} />
      </Section>
      <EnquiryCta />
    </>
  );
}
