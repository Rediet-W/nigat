import Image from "next/image";

import type { AnimatedItemProps, Testimonial } from "@/types";

interface TestimonialCardProps extends AnimatedItemProps {
  testimonial: Testimonial;
  /** Grid cards fade in on scroll; slider slides do not. */
  animated?: boolean;
}

export function TestimonialCard({ testimonial, delay, animated = true }: TestimonialCardProps) {
  return (
    <div className={animated ? "testimonial-item wow fadeInUp" : "testimonial-item"} data-wow-delay={animated ? delay : undefined}>
      <div className="testimonial-item-image">
        <figure>
          <Image src={testimonial.image} alt="" width={414} height={522} unoptimized />
        </figure>
      </div>
      <div className="testimonial-item-content">
        <p>“{testimonial.quote}</p>
        <h2>- {testimonial.author}</h2>
      </div>
    </div>
  );
}
