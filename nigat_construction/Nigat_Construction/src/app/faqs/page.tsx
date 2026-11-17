import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { FaqsPageSection } from "@/features/faqs/sections/FaqsPageSection";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("faqs");

export default async function FaqsPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader title={t.pages.faqs.title} breadcrumbs={[{ label: t.common.home, href: ROUTES.home }, { label: t.pages.faqs.crumb }]} />
      <FaqsPageSection />
    </>
  );
}
