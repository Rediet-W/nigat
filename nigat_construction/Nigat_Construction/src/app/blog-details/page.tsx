import { PageHeader } from "@/components/layout/PageHeader";
import { PostDetails } from "@/features/blog/sections/PostDetails";
import { getDictionary, pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("blogDetails");

export default async function BlogDetailsPage() {
  const t = (await getDictionary()).pages.blogDetails;
  return (
    <>
      <PageHeader title={t.title}>
        <div className="post-single-meta wow fadeInUp">
          <ol className="breadcrumb">
            <li>
              <i className="fa-regular fa-user" /> {t.author}
            </li>
            <li>
              <i className="fa-regular fa-clock" /> {t.date}
            </li>
          </ol>
        </div>
      </PageHeader>
      <PostDetails />
    </>
  );
}
