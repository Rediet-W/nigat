"use client";

import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HERO_SLIDES = [
  { src: "/images/hero-slider-image-1.jpg", width: 2000, height: 1333 },
  { src: "/images/hero-slider-image-2.jpg", width: 1920, height: 1280 },
] as const;

/** Full-bleed fading background slider of the "Home - Slider" variant. */
export function HeroImageSlider() {
  return (
    <div className="hero-image-slider">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        slidesPerView={1}
        speed={1000}
        spaceBetween={0}
        loop
        autoplay={{ delay: 4000 }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.src}>
            <div className="hero-slider-image">
              <figure>
                <Image src={slide.src} alt="" width={slide.width} height={slide.height} preload={index === 0} sizes="100vw" />
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
