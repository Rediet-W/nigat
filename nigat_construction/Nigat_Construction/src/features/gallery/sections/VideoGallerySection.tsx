import Image from "next/image";

import { VideoPopup } from "@/components/ui/VideoPopup";
import { PROMO_VIDEO_URL } from "@/constants/site";
import { getDictionary } from "@/i18n/server";

export async function VideoGallerySection() {
  const t = (await getDictionary()).common;
  return (
    <div className="page-video-gallery">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="video-gallery-image wow fadeInUp">
              <VideoPopup href={PROMO_VIDEO_URL} data-cursor-text={t.play}>
                <figure><Image src="/images/gallery-3.jpg" alt="" width={1200} height={800} /></figure>
              </VideoPopup>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.2s">
              <VideoPopup href={PROMO_VIDEO_URL} data-cursor-text={t.play}>
                <figure><Image src="/images/gallery-5.jpg" alt="" width={1200} height={800} /></figure>
              </VideoPopup>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.4s">
              <VideoPopup href={PROMO_VIDEO_URL} data-cursor-text={t.play}>
                <figure><Image src="/images/gallery-2.jpg" alt="" width={1200} height={800} /></figure>
              </VideoPopup>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.6s">
              <VideoPopup href={PROMO_VIDEO_URL} data-cursor-text={t.play}>
                <figure><Image src="/images/gallery-1.jpg" alt="" width={1200} height={800} /></figure>
              </VideoPopup>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="video-gallery-image wow fadeInUp" data-wow-delay="0.8s">
              <VideoPopup href={PROMO_VIDEO_URL} data-cursor-text={t.play}>
                <figure><Image src="/images/gallery-4.jpg" alt="" width={1200} height={800} /></figure>
              </VideoPopup>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="video-gallery-image wow fadeInUp" data-wow-delay="1s">
              <VideoPopup href={PROMO_VIDEO_URL} data-cursor-text={t.play}>
                <figure><Image src="/images/gallery-9.jpg" alt="" width={1200} height={800} /></figure>
              </VideoPopup>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.2s">
              <VideoPopup href={PROMO_VIDEO_URL} data-cursor-text={t.play}>
                <figure><Image src="/images/gallery-6.jpg" alt="" width={1200} height={800} /></figure>
              </VideoPopup>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.4s">
              <VideoPopup href={PROMO_VIDEO_URL} data-cursor-text={t.play}>
                <figure><Image src="/images/gallery-8.jpg" alt="" width={1200} height={800} /></figure>
              </VideoPopup>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="video-gallery-image wow fadeInUp" data-wow-delay="1.6s">
              <VideoPopup href={PROMO_VIDEO_URL} data-cursor-text={t.play}>
                <figure><Image src="/images/gallery-7.jpg" alt="" width={1200} height={800} /></figure>
              </VideoPopup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
