import { PageHeader } from "@/components/layout/PageHeader";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { CoreValueSection } from "@/components/sections/CoreValueSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { IntroVideoSection } from "@/components/sections/IntroVideoSection";
import { ROUTES } from "@/constants/routes";
import { TestimonialsGrid } from "@/features/testimonials/sections/TestimonialsGrid";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("testimonials");

export default async function TestimonialsPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader title={t.pages.testimonials.title} breadcrumbs={[{ label: t.common.home, href: ROUTES.home }, { label: t.pages.testimonials.crumb }]} />
      <TestimonialsGrid />
      <ApproachSection />
      <CoreValueSection />
      <IntroVideoSection />
      <ExpertiseSection className="service-our-expertise" />
      <FaqSection />
      <CtaSection className="testimonial-cta-section" />
    </>
  );
}
