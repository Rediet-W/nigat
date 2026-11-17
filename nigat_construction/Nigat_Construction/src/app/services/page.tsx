import { PageHeader } from "@/components/layout/PageHeader";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { CoreValueSection } from "@/components/sections/CoreValueSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { IntroVideoSection } from "@/components/sections/IntroVideoSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ROUTES } from "@/constants/routes";
import { ServicesGrid } from "@/features/services/sections/ServicesGrid";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("services");

export default async function ServicesPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader title={t.pages.services.title} breadcrumbs={[{ label: t.common.home, href: ROUTES.home }, { label: t.pages.services.crumb }]} />
      <ServicesGrid />
      <ApproachSection />
      <CoreValueSection />
      <IntroVideoSection />
      <ExpertiseSection className="service-our-expertise" />
      <FaqSection />
      <TestimonialsSection />
    </>
  );
}
