import Image from "next/image";
import Link from "next/link";

import { VideoPopup } from "@/components/ui/VideoPopup";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ROUTES } from "@/constants/routes";
import { CONTACT_INFO, PROMO_VIDEO_URL } from "@/constants/site";
import { getDictionary } from "@/i18n/server";

export async function IntroVideoSection() {
  const dict = await getDictionary();
  const t = dict.introVideo;
  return (
    <div className="intro-video dark-section">
      <div className="intro-bg-video">
        <BackgroundVideo id="introvideo" src="https://demo.awaikenthemes.com/assets/videos/builtex-intro-video.mp4" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-8">
            <div className="intro-video-content">
              <SectionTitle
                subtitle={t.subtitle}
                title={t.title}
                description={t.description}
              />
              <div className="intro-video-contact-list wow fadeInUp" data-wow-delay="0.4s">
                <div className="intro-video-btn"><Link href={ROUTES.contact} className="btn-default btn-highlighted">{t.requestConsultation}</Link></div>
                <div className="intro-video-contact-item">
                  <div className="icon-box"><Image src="/images/icon-phone-primary.svg" alt="" width={25} height={25} /></div>
                  <div className="intro-video-contact-item-content">
                    <p>{t.callUs}</p>
                    <h3><a href={CONTACT_INFO.phone.href}>{CONTACT_INFO.phone.label}</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-4">
            <div className="video-play-button intro-video-play-btn"><VideoPopup href={PROMO_VIDEO_URL} data-cursor-text={dict.common.play}><span className="bg-effect"><i className="fa-solid fa-play" /></span></VideoPopup></div>
          </div>
        </div>
      </div>
    </div>
  );
}
