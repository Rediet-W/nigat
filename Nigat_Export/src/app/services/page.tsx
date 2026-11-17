import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { FaqPreview } from "@/features/faqs";
import { ServicesShowcase } from "@/features/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description: "Sourcing, processing and grading, quality and compliance, and logistics and documentation from Nigat Export.",
  path: ROUTES.services,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Services"
        lead="Sourcing, preparation, quality and freight — one team across the export chain."
        image="/images/hero-services.jpg"
      />
      <ServicesShowcase />
      <FaqPreview />
      <EnquiryCta />
    </>
  );
}
