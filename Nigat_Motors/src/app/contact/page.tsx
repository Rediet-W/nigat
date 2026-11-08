import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { ContactSection } from "@/features/contact";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with Nigat Motors about vehicles, servicing, parts or any other enquiry.",
  path: ROUTES.contact,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        lead="Call, email or send an enquiry — we're here to help."
        image="/images/hero-contact.jpg"
        size="compact"
      />
      <ContactSection />
    </>
  );
}
