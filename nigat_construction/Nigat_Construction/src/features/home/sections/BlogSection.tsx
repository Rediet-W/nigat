import { SectionTitle } from "@/components/ui/SectionTitle";
import { PostCard } from "@/features/blog/components/PostCard";
import { POSTS } from "@/constants/posts";
import { localize } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";

export async function BlogSection() {
  const dict = await getDictionary();
  const t = dict.blog;
  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <SectionTitle
              subtitle={t.subtitle}
              title={t.title}
              description={t.description}
              center
            />
          </div>
        </div>
        <div className="row">
          {localize(POSTS.slice(0, 3), dict.content.posts).map((post, index) => (
            <div className="col-xl-4 col-md-6" key={post.id}>
              <PostCard post={post} delay={wowDelay(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
