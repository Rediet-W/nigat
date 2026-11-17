import { PageHeader } from "@/components/layout/PageHeader";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { CoreValueSection } from "@/components/sections/CoreValueSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { IntroVideoSection } from "@/components/sections/IntroVideoSection";
// import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ROUTES } from "@/constants/routes";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("about");

export default async function AboutPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader title={t.pages.about.title} breadcrumbs={[{ label: t.common.home, href: ROUTES.home }, { label: t.pages.about.crumb }]} />
      <AboutUsSection />
      <ApproachSection />
      <CoreValueSection />
      <IntroVideoSection />
      {/* <TeamSection className="about-our-team" /> */}
      <ExpertiseSection />
      <FaqSection />
      <TestimonialsSection />
    </>
  );
}
