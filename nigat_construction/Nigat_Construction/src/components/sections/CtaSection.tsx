import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm, FormField, FormSubmit } from "@/features/contact/components/ContactForm";
import { getDictionary } from "@/i18n/server";

/** `className` adds the page-specific modifier class the template uses on some pages. */
export async function CtaSection({ className }: { className?: string }) {
  const { cta: t, form: f } = await getDictionary();
  return (
    <div className={className ? `cta-section ${className}` : "cta-section"}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cta-box">
              <div className="cta-box-header">
                <div className="cta-box-header-form">
                  <SectionTitle
                    subtitle={t.subtitle}
                    title={t.title}
                  />
                  <div className="cta-box-form">
                    <ContactForm className="wow fadeInUp" data-wow-delay="0.2s">
                      <FormField className="form-group" name="fname" id="fname" placeholder={f.firstName} required />
                      <FormField className="form-group" name="lname" id="lname" placeholder={f.lastName} required />
                      <FormField className="form-group" type="email" name="email" id="email" placeholder={f.email} required />
                      <FormField className="form-group" name="phone" id="phone" placeholder={f.phone} required />
                      <FormField className="form-group" as="textarea" name="message" id="message" placeholder={f.message} rows={1} />
                      <FormSubmit className="form-group" label={f.submitRequest} />
                    </ContactForm>
                  </div>
                </div>
                <div className="cta-box-header-image wow fadeInUp" data-wow-delay="0.2s">
                  <figure><Image src="/images/cta-box-header-image.png" alt="" width={352} height={450} unoptimized /></figure>
                </div>
              </div>
              <div className="cta-box-body">
                <div className="cta-box-body-content">
                  <SectionTitle
                    subtitle={t.trustSubtitle}
                    title={t.trustTitle}
                    description={t.trustDescription}
                  />
                </div>
                <div className="cta-box-item-list">
                  <div className="cta-box-item wow fadeInUp">
                    <div className="icon-box"><Image src="/images/icon-cta-box-item-1.svg" alt="" width={60} height={60} /></div>
                    <div className="cta-box-item-content">
                      <h3>{t.workmanship}</h3>
                      <p>{t.itemText}</p>
                    </div>
                  </div>
                  <div className="cta-box-item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon-box"><Image src="/images/icon-cta-box-item-2.svg" alt="" width={60} height={60} /></div>
                    <div className="cta-box-item-content">
                      <h3>{t.pricing}</h3>
                      <p>{t.itemText}</p>
                    </div>
                  </div>
                  <div className="cta-box-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box"><Image src="/images/icon-cta-box-item-3.svg" alt="" width={60} height={60} /></div>
                    <div className="cta-box-item-content">
                      <h3>{t.satisfaction}</h3>
                      <p>{t.itemText}</p>
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
