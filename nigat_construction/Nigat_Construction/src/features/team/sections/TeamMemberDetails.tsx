import Image from "next/image";

import { Counter } from "@/components/ui/Counter";
import { SkillBar } from "@/components/ui/SkillBar";
import { ContactForm, FormField, FormSubmit } from "@/features/contact/components/ContactForm";
import { getDictionary } from "@/i18n/server";

const SKILL_PERCENTS = [95, 92, 96] as const;

export async function TeamMemberDetails() {
  const dict = await getDictionary();
  const t = dict.teamMember;
  const f = dict.form;
  return (
    <div className="page-team-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-team-single-box">
              <div className="team-member-about">
                <div className="team-single-image">
                  <figure className="image-anime reveal"><Image src="/images/team-1.jpg" alt="" width={400} height={491} unoptimized /></figure>
                </div>
                <div className="team-about-content">
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">{t.aboutMe}</h2>
                    <p className="wow fadeInUp">{t.bio}</p>
                  </div>
                  <div className="team-about-contact-list wow fadeInUp" data-wow-delay="0.2s">
                    <ul>
                      <li><span>{t.phone}</span> +1 (800) 555-2486</li>
                      <li><span>{t.email}</span>info@domainname.com</li>
                      <li><span>{t.location}</span> {t.locationValue}</li>
                      <li><span>{t.experience}</span> {t.experienceValue}</li>
                      <li><span>{t.specialization}</span> {t.specializationValue}</li>
                    </ul>
                  </div>
                  <div className="team-member-social-list wow fadeInUp" data-wow-delay="0.4s">
                    <h2>{t.follow}</h2>
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-pinterest-p" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-x-twitter" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="member-experience-info">
                <div className="member-experience-content">
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">{t.workTitle}</h2>
                    <p className="wow fadeInUp">{t.workText}</p>
                  </div>
                  <div className="member-experience-list wow fadeInUp" data-wow-delay="0.2s">
                    <ul>
                      {t.workList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="member-experience-image-box">
                  <div className="member-experience-image">
                    <figure className="image-anime reveal"><Image src="/images/team-experience-image-1.jpg" alt="" width={287} height={368} unoptimized /></figure>
                  </div>
                  <div className="member-experience-image">
                    <figure className="image-anime reveal"><Image src="/images/team-experience-image-2.jpg" alt="" width={287} height={368} unoptimized /></figure>
                  </div>
                </div>
              </div>
              <div className="team-member-skill-box">
                <div className="contact-us-form">
                  <div className="contact-us-form-title wow fadeInUp">
                    <h2>{dict.contact.getInTouch}</h2>
                  </div>
                  <div className="contact-form">
                    <ContactForm className="wow fadeInUp" data-wow-delay="0.2s">
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
                <div className="team-member-skill-content">
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">{t.skillsTitle}</h2>
                    <p>{t.skillsText}</p>
                  </div>
                  <div className="member-skill-counter-list wow fadeInUp">
                    <div className="member-skill-counter-item">
                      <h2><Counter value="500" />+</h2>
                      <p>{t.completed}</p>
                    </div>
                    <div className="member-skill-counter-item">
                      <h2><Counter value="350" />+</h2>
                      <p>{t.satisfied}</p>
                    </div>
                  </div>
                  <div className="member-skill-list">
                    {t.skills.map((skill, index) => (
                      <div className="skills-progress-bar" key={skill}>
                        <SkillBar title={skill} percent={SKILL_PERCENTS[index]} />
                      </div>
                    ))}
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
