import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { ContactSection } from "@/features/contact/sections/ContactSection";
import { MapSection } from "@/features/contact/sections/MapSection";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("contact");

export default async function ContactPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader title={t.pages.contact.title} breadcrumbs={[{ label: t.common.home, href: ROUTES.home }, { label: t.pages.contact.crumb }]} />
      <ContactSection />
      <MapSection />
    </>
  );
}
