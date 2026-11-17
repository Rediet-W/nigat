import { PostCard } from "@/features/blog/components/PostCard";
import { POSTS } from "@/constants/posts";
import { localize } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";

export async function BlogGrid() {
  const dict = await getDictionary();
  return (
    <div className="page-blog">
      <div className="container">
        <div className="row">
          {localize(POSTS.slice(0, 6), dict.content.posts).map((post, index) => (
            <div className="col-xl-4 col-md-6" key={post.id}>
              <PostCard post={post} delay={wowDelay(index % 3)} />
            </div>
          ))}
          <div className="col-lg-12">
            <div className="page-pagination wow fadeInUp" data-wow-delay="0.6s">
              <ul className="pagination">
                <li><a href="#"><i className="fa-solid fa-angle-left" /></a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><i className="fa-solid fa-angle-right" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
