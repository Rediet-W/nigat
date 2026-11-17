import { Mail, Phone } from "lucide-react";
import { CONTACT } from "@/constants/site";
import { Reveal, Section, SectionHeading } from "@/components/ui";
import { EnquiryForm } from "./EnquiryForm";

interface EnquiryCtaProps {
  index?: string;
}

const contactPill =
  "inline-flex items-center gap-3 rounded-full bg-shell py-2 pr-5 pl-2 transition-colors duration-500 hover:bg-forest hover:text-canvas";

/** Closing enquiry panel: heading and direct lines on the left, the form in a card on the right. */
export function EnquiryCta({ index }: EnquiryCtaProps) {
  return (
    <Section tone="sand" inset>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeading
            index={index}
            eyebrow="Enquire"
            title="Let's talk about your next shipment"
            lead="Tell us what you need — a product, a service or a shipping question — and the right person will get back to you."
            flush
          />
          <Reveal delay={200} className="mt-10 flex flex-col items-start gap-3">
            <a href={CONTACT.phoneHref} className={contactPill}>
              <span className="flex size-9 items-center justify-center rounded-full bg-forest text-canvas">
                <Phone aria-hidden className="size-4" />
              </span>
              <span className="type-h4">{CONTACT.phone}</span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className={`${contactPill} max-w-full`}>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-forest text-canvas">
                <Mail aria-hidden className="size-4" />
              </span>
              <span className="type-h4 break-all">{CONTACT.email}</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={150} className="rounded-panel bg-shell p-6 md:p-10 lg:col-span-7">
          <EnquiryForm />
        </Reveal>
      </div>
    </Section>
  );
}
