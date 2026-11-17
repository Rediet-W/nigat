import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { AboutManifesto, ApproachSteps, PrinciplesBand } from "@/features/about";
import { EnquiryCta } from "@/features/contact";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description: "Learn about Nigat Export — how we source, prepare and ship Ethiopian coffee, cereals and pulses.",
  path: ROUTES.about,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nigat Export"
        title="Rooted in origin"
        lead="Ethiopian products, prepared to specification and shipped with clear communication."
        image="/images/hero-about.jpg"
      />
      <AboutManifesto />
      <ApproachSteps />
      <PrinciplesBand />
      <EnquiryCta />
    </>
  );
}
