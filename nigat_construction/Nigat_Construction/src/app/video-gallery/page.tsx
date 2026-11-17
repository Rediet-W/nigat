import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { VideoGallerySection } from "@/features/gallery/sections/VideoGallerySection";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("videoGallery");

export default async function VideoGalleryPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader title={t.pages.videoGallery.title} breadcrumbs={[{ label: t.common.home, href: ROUTES.home }, { label: t.pages.videoGallery.crumb }]} />
      <VideoGallerySection />
    </>
  );
}
