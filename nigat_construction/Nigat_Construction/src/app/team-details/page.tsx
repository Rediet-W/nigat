import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { TeamMemberDetails } from "@/features/team/sections/TeamMemberDetails";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("teamDetails");

export default async function TeamDetailsPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader
        title={t.pages.teamDetails.title}
        breadcrumbs={[
          { label: t.common.home, href: ROUTES.home },
          { label: t.pages.teamDetails.parent, href: ROUTES.team },
          { label: t.pages.teamDetails.crumb },
        ]}
      />
      <TeamMemberDetails />
    </>
  );
}
