import Image from "next/image";
import Link from "next/link";

import { Counter } from "@/components/ui/Counter";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ROUTES } from "@/constants/routes";
import { localizeFaqs } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";

export async function FaqSection() {
  const dict = await getDictionary();
  const t = dict.faq;
  return (
    <div className="our-faqs light-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="our-faqs-content">
              <SectionTitle
                subtitle={t.subtitle}
                title={t.title}
                description={t.description}
              />
              <div className="faq-content-footer wow fadeInUp">
                <div className="faq-content-btn">
                  <Link href={ROUTES.faqs} className="btn-default">
                    {t.viewAll}
                  </Link>
                </div>
                <div className="satisfy-client-box">
                  <div className="satisfy-client-images">
                    <div className="satisfy-client-image">
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
                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/author-2.jpg"
                          alt=""
                          width={50}
                          height={50}
                          unoptimized
                        />
                      </figure>
                    </div>
                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <Image
                          src="/images/author-3.jpg"
                          alt=""
                          width={50}
                          height={50}
                          unoptimized
                        />
                      </figure>
                    </div>
                  </div>
                  {/* <div className="satisfy-client-content">
                    <h2><Counter value="200" />+</h2>
                    <p>Satisfied Clients</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <FaqAccordion items={localizeFaqs("general", dict.content)} />
          </div>
        </div>
      </div>
    </div>
  );
}
