import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { TeamGrid } from "@/features/team/sections/TeamGrid";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("team");

export default async function TeamPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader title={t.pages.team.title} breadcrumbs={[{ label: t.common.home, href: ROUTES.home }, { label: t.pages.team.crumb }]} />
      <TeamGrid />
    </>
  );
}
