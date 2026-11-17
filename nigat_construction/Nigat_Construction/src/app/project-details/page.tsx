import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { ProjectDetails } from "@/features/projects/sections/ProjectDetails";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("projectDetails");

export default async function ProjectDetailsPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader
        title={t.pages.projectDetails.title}
        breadcrumbs={[
          { label: t.common.home, href: ROUTES.home },
          { label: t.pages.projectDetails.parent, href: ROUTES.projects },
          { label: t.pages.projectDetails.crumb },
        ]}
      />
      <ProjectDetails />
    </>
  );
}
