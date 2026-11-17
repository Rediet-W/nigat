import Image from "next/image";
import Link from "next/link";

import { Counter } from "@/components/ui/Counter";
import { VideoPopup } from "@/components/ui/VideoPopup";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ROUTES } from "@/constants/routes";
import { PROMO_VIDEO_URL } from "@/constants/site";
import { getDictionary } from "@/i18n/server";

export async function AboutUsSection() {
  const dict = await getDictionary();
  const t = dict.about;
  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-us-image-box">
              <div className="about-us-image box-1">
                <figure>
                  <Image
                    src="/images/about-us-image-1.jpg"
                    alt=""
                    width={524}
                    height={607}
                    unoptimized
                  />
                </figure>
                <div className="about-us-cta-box">
                  <div className="icon-box">
                    <Image
                      src="/images/icon-about-us-cta-box.svg"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="about-us-cta-content">
                    <h2>
                      <Counter value="8" />+
                    </h2>
                    <p>{t.yearsText}</p>
                  </div>
                </div>
              </div>
              <div className="about-us-image box-2">
                <figure className="image-anime">
                  <Image
                    src="/images/about-us-image-2.jpg"
                    alt=""
                    width={218}
                    height={255}
                    unoptimized
                  />
                </figure>
                <div className="video-play-button">
                  <VideoPopup href={PROMO_VIDEO_URL} data-cursor-text={dict.common.play}>
                    <span className="bg-effect">
                      <i className="fa-solid fa-play" />
                    </span>
                  </VideoPopup>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-us-content">
              <SectionTitle
                subtitle={t.subtitle}
                title={t.title}
                description={t.description}
              >
                <ul className="wow fadeInUp" data-wow-delay="0.4s">
                  <li>{t.point1}</li>
                  <li>{t.point2}</li>
                </ul>
              </SectionTitle>
              <div className="about-us-items-list wow fadeInUp">
                <div className="about-us-item">
                  <div className="about-us-item-header">
                    <div className="icon-box">
                      <Image
                        src="/images/icon-about-us-item-1.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="about-us-item-counter">
                      <h2>
                        <Counter value="6" />+
                      </h2>
                    </div>
                  </div>
                  <div className="about-us-item-content">
                    <p>{t.projectsDelivered}</p>
                  </div>
                </div>
                {/* <div className="about-us-item">
                  <div className="about-us-item-header">
                    <div className="icon-box"><Image src="/images/icon-about-us-item-2.svg" alt="" width={40} height={40} /></div>
                    <div className="about-us-item-counter">
                      <h2><Counter value="598" />+</h2>
                    </div>
                  </div>
                  <div className="about-us-item-content">
                    <p>Delivering Complete Client Satisfaction</p>
                  </div>
                </div> */}
              </div>
              <div
                className="about-us-footer wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="about-us-btn">
                  <Link href={ROUTES.about} className="btn-default">
                    {t.moreAbout}
                  </Link>
                </div>
                <div className="about-author-box">
                  <div className="about-author-image">
                    <figure className="image-anime">
                      <Image
                        src="/images/author-1.jpg"
                        alt=""
                        width={50}
                        height={50}
                        unoptimized
                      />
                    </figure>
                  </div>
                  <div className="about-author-content">
                    <h3>{t.authorName}</h3>
                    <p>{t.authorRole}</p>
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
