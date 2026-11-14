import { Mail, Phone } from "lucide-react";
import { CONTACT } from "@/constants/site";
import { Reveal, Section, SectionHeading } from "@/components/ui";
import { EnquiryForm } from "./EnquiryForm";

interface EnquiryCtaProps {
  index?: string;
}

/** Closing enquiry band: statement and direct lines on the left, form on the right. */
export function EnquiryCta({ index }: EnquiryCtaProps) {
  return (
    <Section tone="graphite">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            inverse
            index={index}
            eyebrow="Enquire"
            title="Let's find your next drive"
            lead="Tell us what you need — a vehicle, a service or a part — and the right person will get back to you."
            flush
          />
          <Reveal delay={200} className="mt-12 space-y-4 border-t border-line-inverse pt-8">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-4 text-paper transition-colors hover:text-accent"
            >
              <Phone aria-hidden className="size-4 text-accent" />
              <span className="type-h4">{CONTACT.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 break-all text-paper transition-colors hover:text-accent"
            >
              <Mail aria-hidden className="size-4 shrink-0 text-accent" />
              <span className="type-h4">{CONTACT.email}</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
          <EnquiryForm inverse />
        </Reveal>
      </div>
    </Section>
  );
}
