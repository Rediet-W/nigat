import Image from "next/image";
import Link from "next/link";

import { getDictionary } from "@/i18n/server";
import type { AnimatedItemProps, Post } from "@/types";

export async function PostCard({ post, delay }: AnimatedItemProps & { post: Post }) {
  const t = (await getDictionary()).common;
  return (
    <div className="post-item wow fadeInUp" data-wow-delay={delay}>
      <div className="post-featured-image">
        <Link href={post.href} data-cursor-text={t.view}>
          <figure className="image-anime">
            <Image src={post.image} alt="" width={1366} height={768} />
          </figure>
        </Link>
      </div>
      <div className="post-item-body">
        <div className="post-item-content">
          <h2>
            <Link href={post.href}>{post.title}</Link>
          </h2>
        </div>
        <div className="post-item-btn">
          <Link href={post.href} className="readmore-btn">
            {t.readMore}
          </Link>
        </div>
      </div>
    </div>
  );
}
