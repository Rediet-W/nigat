import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ROUTES } from "@/constants/routes";
import { getDictionary } from "@/i18n/server";

export async function ApproachSection() {
  const dict = await getDictionary();
  const t = dict.approach;
  return (
    <div className="our-approach light-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-xl-6">
            <SectionTitle
              subtitle={t.subtitle}
              title={t.title}
            />
          </div>
          <div className="col-xl-6">
            <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
              <p>{t.intro}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="approach-items-list">
              <div className="approach-item wow fadeInUp">
                <div className="icon-box"><Image src="/images/icon-approach-item-1.svg" alt="" width={50} height={50} /></div>
                <div className="approach-item-content">
                  <h3>{t.mission}</h3>
                  <p>{t.missionText}</p>
                </div>
              </div>
              <div className="approach-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-box"><Image src="/images/icon-approach-item-2.svg" alt="" width={50} height={50} /></div>
                <div className="approach-item-content">
                  <h3>{t.vision}</h3>
                  <p>{t.visionText}</p>
                </div>
              </div>
              <div className="approach-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box"><Image src="/images/icon-approach-item-3.svg" alt="" width={50} height={50} /></div>
                <div className="approach-item-content">
                  <h3>{t.story}</h3>
                  <p>{t.storyText}</p>
                </div>
              </div>
            </div>
            <div className="approach-cta-box">
              <div className="satisfy-client-box wow fadeInUp">
                <div className="satisfy-client-images">
                  <div className="satisfy-client-image">
                    <figure className="image-anime"><Image src="/images/author-1.jpg" alt="" width={50} height={50} unoptimized /></figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime"><Image src="/images/author-2.jpg" alt="" width={50} height={50} unoptimized /></figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime"><Image src="/images/author-3.jpg" alt="" width={50} height={50} unoptimized /></figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime"><Image src="/images/author-4.jpg" alt="" width={50} height={50} unoptimized /></figure>
                  </div>
                </div>
                <div className="satisfy-client-content">
                  <p>{t.cta}</p>
                </div>
              </div>
              <div className="approach-cta-btn wow fadeInUp" data-wow-delay="0.2s"><Link href={ROUTES.contact} className="btn-default">{dict.common.getInTouch}</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
