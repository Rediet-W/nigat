import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ROUTES } from "@/constants/routes";
import { localizeFaqs } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";

const PROCESS_ICONS = [
  "/images/icon-construction-process-item-1.svg",
  "/images/icon-construction-process-item-2.svg",
  "/images/icon-construction-process-item-3.svg",
] as const;

export async function ProjectDetails() {
  const dict = await getDictionary();
  const t = dict.projectDetail;
  return (
    <div className="page-project-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="page-single-sidebar">
              <div className="page-category-list wow fadeInUp">
                <h2 className="page-category-list-title">{t.info}</h2>
                <div className="project-category-item-list">
                  <div className="project-category-item">
                    <h3>{t.type}</h3>
                    <p>{t.typeValue}</p>
                  </div>
                  <div className="project-category-item">
                    <h3>{t.client}</h3>
                    <p>{t.clientValue}</p>
                  </div>
                  <div className="project-category-item">
                    <h3>{t.duration}</h3>
                    <p>{t.durationValue}</p>
                  </div>
                  <div className="project-category-item">
                    <h3>{t.location}</h3>
                    <p>{t.locationValue}</p>
                  </div>
                  <div className="project-category-item project-category-social-links">
                    <h3>{t.share}</h3>
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-x-twitter" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                <div className="sidebar-cta-logo"><Image src="/images/side-bar-cta-icon.png" alt="" width={58} height={60} unoptimized /></div>
                <div className="sidebar-cta-box-body">
                  <div className="sidebar-cta-box-content">
                    <p>{dict.common.sidebarCta}</p>
                  </div>
                  <div className="sidebar-cta-box-btn"><Link href={ROUTES.contact} className="readmore-btn">{dict.common.contactNow}</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="project-single-content">
              <div className="page-single-image">
                <figure className="image-anime reveal"><Image src="/images/project-1.jpg" alt="" width={1200} height={800} /></figure>
              </div>
              <div className="project-entry">
                <div className="project-entry-info">
                  <h2 className="text-anime-style-3">{t.overviewTitle}</h2>
                  <p className="wow fadeInUp">{t.overview1}</p>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">{t.overview2}</p>
                </div>
                <div className="project-challenges-box">
                  <h2 className="text-anime-style-3">{t.challengesTitle}</h2>
                  <p className="wow fadeInUp">{t.challengesIntro}</p>
                  <div className="project-challenges-image-list">
                    <div className="project-challenges-items-list">
                      <div className="project-challenges-item wow fadeInUp" data-wow-delay="0.2s">
                        <h3>{t.challenges}</h3>
                        <p>{t.challengesText}</p>
                      </div>
                      <div className="project-challenges-item wow fadeInUp" data-wow-delay="0.4s">
                        <h3>{t.solutions}</h3>
                        <p>{t.solutionsText}</p>
                      </div>
                    </div>
                    <div className="project-challenges-image">
                      <figure className="image-anime reveal"><Image src="/images/project-challenges-image.jpg" alt="" width={413} height={348} unoptimized /></figure>
                    </div>
                  </div>
                  <div className="project-construction-process-box">
                    <h2 className="text-anime-style-3">{t.processTitle}</h2>
                    <p className="wow fadeInUp">{t.processIntro}</p>
                    <div className="construction-process-item-list">
                      {t.steps.map((step, index) => (
                        <div className="construction-process-item wow fadeInUp" data-wow-delay={wowDelay(index + 1)} key={step}>
                          <div className="construction-process-item-header">
                            <div className="icon-box"><Image src={PROCESS_ICONS[index]} alt="" width={40} height={40} /></div>
                            <div className="construction-process-item-no">
                              <h3>{String(index + 1).padStart(2, "0")}</h3>
                            </div>
                          </div>
                          <div className="construction-process-item-body">
                            <h3>{step}</h3>
                            <p>{t.stepText}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="project-entry-contact-info">
                    <h2 className="text-anime-style-3">{t.contactTitle}</h2>
                    <p className="wow fadeInUp">{t.contactText}</p>
                    <div className="project-contact-item-list">
                      <div className="satisfy-client-box wow fadeInUp" data-wow-delay="0.2s">
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
                          <h3>{dict.team.title}</h3>
                        </div>
                      </div>
                      <div className="project-contact-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="project-contact-item-content">
                          <div className="project-contact-content">
                            <p>{t.turnIdeas}</p>
                          </div>
                          <div className="project-contact-btn"><Link href={ROUTES.contact} className="readmore-btn">{t.requestConsultation}</Link></div>
                        </div>
                        <div className="project-contact-item-image">
                          <figure><Image src="/images/project-contact-item-image.jpg" alt="" width={414} height={157} unoptimized /></figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-single-faqs">
                <SectionTitle title={dict.common.faqTitle} />
                <FaqAccordion items={localizeFaqs("general", dict.content)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
