import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { BlogGrid } from "@/features/blog/sections/BlogGrid";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("blog");

export default async function BlogPage() {
  const t = await getDictionary();
  return (
    <>
      <PageHeader title={t.pages.blog.title} breadcrumbs={[{ label: t.common.home, href: ROUTES.home }, { label: t.pages.blog.crumb }]} />
      <BlogGrid />
    </>
  );
}
