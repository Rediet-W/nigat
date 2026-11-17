import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { FaqPreview } from "@/features/faqs";
import { ServicesShowcase } from "@/features/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description: "Electric and hybrid vehicles and after-sales support, including warranty and maintenance garage services, from Nigat Motors.",
  path: ROUTES.services,
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Services"
        lead="Electric & hybrid vehicles and after-sales support — for every stage of owning a vehicle."
        image="/images/hero-services.jpg"
      />
      <ServicesShowcase />
      <FaqPreview />
      <EnquiryCta />
    </>
  );
}
