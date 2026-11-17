import Image from "next/image";
import Link from "next/link";

import { Counter } from "@/components/ui/Counter";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ROUTES } from "@/constants/routes";
import { getDictionary } from "@/i18n/server";

export async function CoreValueSection() {
  const dict = await getDictionary();
  const t = dict.coreValues;
  return (
    <div className="our-core-value">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="core-value-content">
              <SectionTitle
                subtitle={t.subtitle}
                title={t.title}
                description={t.description}
              />
              <div className="core-value-counter-list wow fadeInUp">
                <div className="core-value-counter-item">
                  <h2>
                    <Counter value="8" />+
                  </h2>
                  <p>{t.years}</p>
                </div>
                <div className="core-value-counter-item">
                  <h2>
                    <Counter value="6" />+
                  </h2>
                  <p>{t.projects}</p>
                </div>
                <div className="core-value-counter-item">
                  <h2>
                    <Counter value="20" />+
                  </h2>
                  <p>{t.engineers}</p>
                </div>
              </div>
              <div
                className="core-value-btn wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <Link href={ROUTES.contact} className="btn-default">
                  {dict.common.getInTouch}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="core-value-image">
              <figure className="image-anime reveal">
                <Image
                  src="/images/core-value-image.jpg"
                  alt=""
                  width={605}
                  height={577}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
