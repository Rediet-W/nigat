import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { NotFoundSection } from "@/features/errors/sections/NotFoundSection";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("notFound");

export default async function NotFound() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader title={t.pages.notFound.title} breadcrumbs={[{ label: t.common.home, href: ROUTES.home }, { label: t.pages.notFound.crumb }]} />
      <NotFoundSection />
    </>
  );
}
