import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { ServiceDetails } from "@/features/services/sections/ServiceDetails";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("serviceDetails");

export default async function ServiceDetailsPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader
        title={t.pages.serviceDetails.title}
        breadcrumbs={[
          { label: t.common.home, href: ROUTES.home },
          { label: t.pages.serviceDetails.parent, href: ROUTES.services },
          { label: t.pages.serviceDetails.crumb },
        ]}
      />
      <ServiceDetails />
    </>
  );
}
