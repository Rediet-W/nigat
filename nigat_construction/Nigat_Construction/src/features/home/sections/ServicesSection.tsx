import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/features/services/components/ServiceCard";
import { SERVICES } from "@/constants/services";
import { wowDelay } from "@/lib/animation";
import { ROUTES } from "@/constants/routes";
import { localize } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";

export async function ServicesSection() {
  const dict = await getDictionary();
  const t = dict.services;
  return (
    <div className="our-services dark-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-xl-6">
            <SectionTitle
              subtitle={t.subtitle}
              title={t.title}
            />
          </div>
          <div className="col-xl-6">
            <div className="section-content-btn">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>{dict.common.teamIntro}</p>
              </div>
              <div className="section-btn wow fadeInUp" data-wow-delay="0.4s"><Link href={ROUTES.services} className="readmore-btn">{t.explore}</Link></div>
            </div>
          </div>
        </div>
        <div className="row">
          {localize(SERVICES.slice(0, 4), dict.content.services).map((service, index) => (
            <div className="col-xl-3 col-md-6" key={service.id}>
              <ServiceCard service={service} delay={wowDelay(index)} />
            </div>
          ))}
          <div className="col-lg-12">
            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.4s">
              <p><span>{t.free}</span>{t.journey}<Link href={ROUTES.contact}>{t.requestQuote}</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
