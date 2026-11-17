import { ROUTES } from "@/constants/routes";
import { AboutManifesto, PrinciplesBand } from "@/features/about";
import { EnquiryCta } from "@/features/contact";
import { FaqPreview } from "@/features/faqs";
import { HeroSection, ProductMarquee } from "@/features/home";
import { ServicesIndex } from "@/features/services";
import { ProductGrid } from "@/features/products";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductMarquee />
      <AboutManifesto index="01" cta={{ label: "More about us", href: ROUTES.about }} />
      <ProductGrid index="02" />
      <ServicesIndex index="03" />
      <PrinciplesBand index="04" />
      <FaqPreview index="05" />
      <EnquiryCta index="06" />
    </>
  );
}
