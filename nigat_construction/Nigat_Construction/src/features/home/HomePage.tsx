import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { IntroVideoSection } from "@/components/sections/IntroVideoSection";
// import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/features/home/sections/BlogSection";
import { HeroSection, type HeroVariant } from "@/features/home/sections/HeroSection";
import { ProjectsSection } from "@/features/home/sections/ProjectsSection";
import { ServicesSection } from "@/features/home/sections/ServicesSection";
import { WhyChooseUsSection } from "@/features/home/sections/WhyChooseUsSection";

/** Shared body of the three home pages (main, slider, video). */
export function HomePage({ heroVariant }: { heroVariant: HeroVariant }) {
  return (
    <>
      <HeroSection variant={heroVariant} />
      <AboutUsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      {/* <TeamSection /> */}
      <IntroVideoSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <BlogSection />
    </>
  );
}
