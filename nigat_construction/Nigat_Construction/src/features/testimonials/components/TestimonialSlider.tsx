"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { TESTIMONIALS } from "@/constants/testimonials";
import { TestimonialCard } from "@/features/testimonials/components/TestimonialCard";
import { useI18n } from "@/i18n/I18nProvider";
import { localize } from "@/i18n/localize";

/** Autoplaying testimonial carousel: 1 slide below 1280px, 2 above. */
export function TestimonialSlider() {
  const { dict } = useI18n();
  return (
    <div className="testimonial-slider">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        speed={1500}
        spaceBetween={20}
        loop
        autoplay={{ delay: 3000 }}
        breakpoints={{ 768: { slidesPerView: 1 }, 1280: { slidesPerView: 2 } }}
        data-cursor-text={dict.common.drag}
      >
        {localize(TESTIMONIALS.slice(0, 4), dict.content.testimonials).map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} animated={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
