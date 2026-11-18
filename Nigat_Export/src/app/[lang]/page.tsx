import { ROUTES } from "@/constants/routes";
import { AboutManifesto, PrinciplesBand } from "@/features/about";
import { EnquiryCta } from "@/features/contact";
import { FaqPreview } from "@/features/faqs";
import { HeroSection, ProductMarquee } from "@/features/home";
import { ProductMosaic } from "@/features/products";
import { ServicesIndex } from "@/features/services";
import { getDictionary } from "@/i18n/server";

export default async function HomePage() {
  const { t, href } = await getDictionary();

  return (
    <>
      <HeroSection />
      <ProductMarquee />
      <AboutManifesto index="01" cta={{ label: t.home.moreAboutUs, href: href(ROUTES.about) }} />
      <ProductMosaic index="02" />
      <ServicesIndex index="03" />
      <PrinciplesBand index="04" />
      <FaqPreview index="05" />
      <EnquiryCta index="06" />
    </>
  );
}
