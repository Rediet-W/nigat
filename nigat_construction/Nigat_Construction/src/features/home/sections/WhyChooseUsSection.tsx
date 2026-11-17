import Image from "next/image";

import { Counter } from "@/components/ui/Counter";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getDictionary } from "@/i18n/server";

export async function WhyChooseUsSection() {
  const t = (await getDictionary()).whyChooseUs;
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="why-choose-us-box">
              <div className="why-choose-us-content">
                <SectionTitle
                  subtitle={t.subtitle}
                  title={t.title}
                />
                <div className="why-choose-item-list">
                  <div className="why-choose-item wow fadeInUp">
                    <div className="why-choose-item-header">
                      <div className="icon-box">
                        <Image
                          src="/images/icon-why-choose-us-item-1.svg"
                          alt=""
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="why-choose-item-content">
                        <h3>{t.innovation}</h3>
                        <p>{t.itemText}</p>
                      </div>
                    </div>
                    {/* <div className="why-choose-item-counter">
                      <h2><Counter value="500" />+</h2>
                      <p>Project Completed</p>
                    </div> */}
                  </div>
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="why-choose-item-header">
                      <div className="icon-box">
                        <Image
                          src="/images/icon-why-choose-us-item-2.svg"
                          alt=""
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="why-choose-item-content">
                        <h3>{t.quality}</h3>
                        <p>{t.itemText}</p>
                      </div>
                    </div>
                    {/* <div className="why-choose-item-counter">
                      <h2><Counter value="350" />+</h2>
                      <p>Satisfied Clients</p>
                    </div> */}
                  </div>
                  <div
                    className="why-choose-item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="why-choose-item-header">
                      <div className="icon-box">
                        <Image
                          src="/images/icon-why-choose-us-item-3.svg"
                          alt=""
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="why-choose-item-content">
                        <h3>{t.expertise}</h3>
                        <p>{t.itemText}</p>
                      </div>
                    </div>
                    {/* <div className="why-choose-item-counter">
                      <h2><Counter value="100" />%</h2>
                      <p>Safety Commitment</p>
                    </div> */}
                  </div>
                </div>
              </div>
              <div
                className="why-choose-image wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <figure>
                  <Image
                    src="/images/why-choose-us-image.png"
                    alt=""
                    width={344}
                    height={693}
                    unoptimized
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
