import type { ReactNode } from "react";
import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { CONTACT } from "@/constants/site";
import { Reveal, Section, SectionHeading } from "@/components/ui";
import { EnquiryFormFromQuery } from "./EnquiryFormFromQuery";

interface ContactLine {
  label: string;
  icon: LucideIcon;
  content: ReactNode;
}

const CONTACT_LINES: ContactLine[] = [
  {
    label: "Telephone",
    icon: Phone,
    content: (
      <a href={CONTACT.phoneHref} className="transition-colors duration-500 hover:text-ochre">
        {CONTACT.phone}
      </a>
    ),
  },
  {
    label: "Email",
    icon: Mail,
    content: (
      <a href={`mailto:${CONTACT.email}`} className="break-all transition-colors duration-500 hover:text-ochre">
        {CONTACT.email}
      </a>
    ),
  },
  { label: "Office", icon: MapPin, content: CONTACT.address },
  { label: "Hours", icon: Clock, content: CONTACT.hours },
];

/** Contact page body: direct-line cards beside the enquiry form card. */
export function ContactSection() {
  return (
    <Section id="enquiry" className="scroll-mt-(--header-height)">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <Reveal as="aside" className="lg:col-span-4">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {CONTACT_LINES.map(({ label, icon: Icon, content }) => (
              <div key={label} className="flex items-start gap-4 rounded-card bg-sand p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest text-canvas">
                  <Icon aria-hidden className="size-4" />
                </span>
                <div className="min-w-0">
                  <dt className="type-eyebrow text-muted">{label}</dt>
                  <dd className="type-h4 mt-1.5">{content}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="rounded-panel bg-shell p-6 md:p-10 lg:col-span-8 lg:p-12">
          <SectionHeading
            eyebrow="Send an enquiry"
            title="How can we help?"
            lead="Choose a topic and tell us about the product, grade, volume and destination. We'll take it from there."
          />
          <EnquiryFormFromQuery />
        </Reveal>
      </div>
    </Section>
  );
}
