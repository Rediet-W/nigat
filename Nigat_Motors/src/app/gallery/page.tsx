import { PageHero } from "@/components/layout";
import { Section } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { GalleryGrid } from "@/features/gallery";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Gallery",
  description: "A visual journey through the world of Nigat Motors.",
  path: ROUTES.gallery,
});

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="In focus" title="Gallery" image="/images/hero-gallery.jpg" size="compact" />
      <Section>
        <GalleryGrid />
      </Section>
      <EnquiryCta />
    </>
  );
}
