import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { ContactSection } from "@/features/contact";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with Nigat Export about products, export services or any other enquiry.",
  path: ROUTES.contact,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        lead="Call, email or send an enquiry — we will point you to the right person."
        image="/images/hero-contact.jpg"
        size="compact"
      />
      <ContactSection />
    </>
  );
}
