import { ROUTES } from "@/constants/routes";
import { AboutManifesto, PrinciplesBand } from "@/features/about";
import { EnquiryCta } from "@/features/contact";
import { FaqPreview } from "@/features/faqs";
import { HeroSection } from "@/features/home";
import { ServicesIndex } from "@/features/services";
import { VehicleRail } from "@/features/vehicles";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutManifesto index="01" cta={{ label: "More about us", href: ROUTES.about }} />
      <VehicleRail index="02" />
      <ServicesIndex index="03" />
      <PrinciplesBand index="04" />
      <FaqPreview index="05" />
      <EnquiryCta index="06" />
    </>
  );
}
