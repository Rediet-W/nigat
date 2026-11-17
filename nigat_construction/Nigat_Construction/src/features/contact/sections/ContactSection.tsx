import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { CONTACT_INFO } from "@/constants/site";
import { ContactForm, FormField, FormSubmit } from "@/features/contact/components/ContactForm";
import { getDictionary } from "@/i18n/server";

export async function ContactSection() {
  const t = await getDictionary();
  const f = t.form;
  return (
    <div className="page-contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-us-content">
              <SectionTitle
                subtitle={t.contact.subtitle}
                title={t.contact.title}
                description={t.contact.description}
              />
              <div className="contact-us-image-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="contact-us-image">
                  <figure><Image src="/images/contact-us-image.jpg" alt="" width={605} height={342} /></figure>
                </div>
                <div className="contect-us-cta-box">
                  <div className="contact-us-item">
                    <div className="icon-box"><Image src="/images/icon-phone-primary.svg" alt="" width={25} height={25} /></div>
                    <div className="contact-us-item-content">
                      <p>{t.contact.phoneLabel}</p>
                      <h3><a href={CONTACT_INFO.phone.href}>{CONTACT_INFO.phone.label}</a></h3>
                    </div>
                  </div>
                  <div className="contact-us-item">
                    <div className="icon-box"><Image src="/images/icon-email-primary.svg" alt="" width={25} height={25} /></div>
                    <div className="contact-us-item-content">
                      <p>{t.contact.emailLabel}</p>
                      <h3><a href={CONTACT_INFO.email.href}>{CONTACT_INFO.email.label}</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-us-form">
              <div className="contact-us-form-title">
                <h2 className="wow fadeInUp">{t.contact.getInTouch}</h2>
              </div>
              <div className="contact-form wow fadeInUp" data-wow-delay="0.2s">
                <ContactForm>
                  <div className="row">
                    <FormField className="form-group col-md-6" name="fname" id="fname" placeholder={f.firstName} required />
                    <FormField className="form-group col-md-6" name="lname" id="lname" placeholder={f.lastName} required />
                    <FormField className="form-group col-md-6" type="email" name="email" id="email" placeholder={f.email} required />
                    <FormField className="form-group col-md-6" name="phone" id="phone" placeholder={f.phone} required />
                    <FormField className="form-group col-md-12" as="textarea" name="message" id="message" placeholder={f.message} rows={4} />
                    <FormSubmit className="form-btn col-md-12" label={f.sendMessage} />
                  </div>
                </ContactForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
