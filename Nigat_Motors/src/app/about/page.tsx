import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { AboutManifesto, ApproachSteps, PrinciplesBand } from "@/features/about";
import { EnquiryCta } from "@/features/contact";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description: "Learn about Nigat Motors — our approach to helping drivers find the right vehicle and keep it running well.",
  path: ROUTES.about,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nigat Motors"
        title="Driven by trust"
        lead="Clear advice, dependable vehicles and a team that is easy to talk to."
        image="/images/hero-about.jpg"
      />
      <AboutManifesto />
      <ApproachSteps />
      <PrinciplesBand />
      <EnquiryCta />
    </>
  );
}
