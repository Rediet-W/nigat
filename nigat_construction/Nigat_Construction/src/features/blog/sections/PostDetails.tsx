import Image from "next/image";
import { Fragment } from "react";

import { getDictionary } from "@/i18n/server";

export async function PostDetails() {
  const t = (await getDictionary()).blogPost;
  return (
    <div className="page-single-post">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="post-image">
              <figure className="image-anime reveal"><Image src="/images/post-1.jpg" alt="" width={1366} height={768} /></figure>
            </div>
            <div className="post-content">
              <div className="post-entry">
                <p className="wow fadeInUp">{t.p1}</p>
                <p className="wow fadeInUp" data-wow-delay="0.2s">{t.p2}</p>
                <blockquote className="wow fadeInUp" data-wow-delay="0.4s">
                  <p>&quot;{t.quote}&quot;</p>
                </blockquote>
                <p className="wow fadeInUp" data-wow-delay="0.6s">{t.p3}</p>
                <h2 className="wow fadeInUp" data-wow-delay="0.8s">{t.heading}</h2>
                <p className="wow fadeInUp" data-wow-delay="1s">{t.p4}</p>
                <ul className="wow fadeInUp" data-wow-delay="1.2s">
                  {t.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="wow fadeInUp" data-wow-delay="0.6s">{t.p5}</p>
              </div>
              <div className="post-tag-links">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="post-tags wow fadeInUp" data-wow-delay="0.5s">
                      <span className="tag-links">
                        {t.tags}{" "}
                        {t.tagList.map((tag, index) => (
                          <Fragment key={tag}>
                            {index > 0 && " "}
                            <a href="#">{tag}</a>
                          </Fragment>
                        ))}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="post-social-sharing wow fadeInUp" data-wow-delay="0.5s">
                      <ul>
                        <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                        {" "}
                        <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                        {" "}
                        <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                        {" "}
                        <li><a href="#"><i className="fa-brands fa-x-twitter" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
