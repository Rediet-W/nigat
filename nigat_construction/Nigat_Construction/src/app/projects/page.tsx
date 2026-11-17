import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { ProjectsGrid } from "@/features/projects/sections/ProjectsGrid";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("projects");

export default async function ProjectsPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader title={t.pages.projects.title} breadcrumbs={[{ label: t.common.home, href: ROUTES.home }, { label: t.pages.projects.crumb }]} />
      <ProjectsGrid />
    </>
  );
}
