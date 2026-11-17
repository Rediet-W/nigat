import { TestimonialCard } from "@/features/testimonials/components/TestimonialCard";
import { TESTIMONIALS } from "@/constants/testimonials";
import { localize } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";

export async function TestimonialsGrid() {
  const dict = await getDictionary();
  return (
    <div className="page-testimonial">
      <div className="container">
        <div className="row">
          {localize(TESTIMONIALS.slice(0, 6), dict.content.testimonials).map((testimonial, index) => (
            <div className="col-xl-4 col-md-6" key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} delay={wowDelay(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
