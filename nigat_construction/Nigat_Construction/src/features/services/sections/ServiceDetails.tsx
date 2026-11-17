import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ROUTES } from "@/constants/routes";
import { SERVICES } from "@/constants/services";
import { localize, localizeFaqs } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";

const BENEFIT_ICONS = [
  "/images/icon-service-entry-benefits-1.svg",
  "/images/icon-service-entry-benefits-2.svg",
  "/images/icon-service-entry-benefits-3.svg",
  "/images/icon-service-entry-benefits-4.svg",
] as const;

export async function ServiceDetails() {
  const dict = await getDictionary();
  const t = dict.serviceDetail;
  return (
    <div className="page-service-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="page-single-sidebar">
              <div className="page-category-list wow fadeInUp">
                <h2 className="page-category-list-title">{t.sidebarTitle}</h2>
                <ul>
                  {localize(SERVICES.slice(0, 5), dict.content.services).map((service) => (
                    <li key={service.id}><a href="#">{service.title}</a></li>
                  ))}
                </ul>
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
            <div className="service-single-content">
              <div className="page-single-image">
                <figure className="image-anime reveal"><Image src="/images/service-image-1.jpg" alt="" width={1200} height={800} /></figure>
              </div>
              <div className="service-entry">
                <p className="wow fadeInUp">{t.intro1}</p>
                <p className="wow fadeInUp" data-wow-delay="0.2s">{t.intro2}</p>
                <div className="service-entry-benefits-box">
                  <h2 className="text-anime-style-3">{t.servicesTitle}</h2>
                  <p className="wow fadeInUp">{t.servicesIntro}</p>
                  <div className="service-benefits-item-list">
                    {t.benefits.map((benefit, index) => (
                      <div
                        className="service-benefits-item wow fadeInUp"
                        data-wow-delay={wowDelay(index)}
                        key={benefit.title}
                      >
                        <div className="icon-box"><Image src={BENEFIT_ICONS[index]} alt="" width={80} height={80} /></div>
                        <div className="service-benefits-item-content">
                          <h3>{benefit.title}</h3>
                          <p>{benefit.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="service-why-choose-box">
                  <h2 className="text-anime-style-3">{t.whyTitle}</h2>
                  <p className="wow fadeInUp">{t.whyIntro}</p>
                  <div className="service-why-choose-list wow fadeInUp" data-wow-delay="0.2s">
                    <ul>
                      {t.whyList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-why-choose-image">
                    <figure className="image-anime reveal"><Image src="/images/service-why-chhose-img.jpg" alt="" width={858} height={350} /></figure>
                  </div>
                </div>
                <div className="service-entry-process-box">
                  <h2 className="text-anime-style-3">{t.processTitle}</h2>
                  <p className="wow fadeInUp">{t.processIntro}</p>
                  <div className="service-process-items-image">
                    <div className="service-process-items-list">
                      {t.steps.map((step, index) => (
                        <div
                          className="service-process-item wow fadeInUp"
                          data-wow-delay={wowDelay(index)}
                          key={step}
                        >
                          <div className="service-process-item-no">
                            <h3>{index + 1}</h3>
                          </div>
                          <div className="service-process-item-content">
                            <h3>{step}</h3>
                            <p>{t.stepText}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="service-entry-process-image">
                      <figure className="image-anime reveal"><Image src="/images/service-entry-process-Image.jpg" alt="" width={413} height={367} unoptimized /></figure>
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
