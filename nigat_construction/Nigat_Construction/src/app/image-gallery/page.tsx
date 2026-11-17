import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { ImageGallerySection } from "@/features/gallery/sections/ImageGallerySection";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("imageGallery");

export default async function ImageGalleryPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader title={t.pages.imageGallery.title} breadcrumbs={[{ label: t.common.home, href: ROUTES.home }, { label: t.pages.imageGallery.crumb }]} />
      <ImageGallerySection />
    </>
  );
}
