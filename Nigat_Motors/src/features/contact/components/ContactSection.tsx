import type { ReactNode } from "react";
import { CONTACT } from "@/constants/site";
import { formatIndex } from "@/lib/format";
import { Eyebrow, Reveal, Section, SectionHeading } from "@/components/ui";
import { EnquiryFormFromQuery } from "./EnquiryFormFromQuery";

interface ContactLine {
  label: string;
  content: ReactNode;
}

const CONTACT_LINES: ContactLine[] = [
  {
    label: "Telephone",
    content: (
      <a href={CONTACT.phoneHref} className="transition-colors duration-500 hover:text-accent">
        {CONTACT.phone}
      </a>
    ),
  },
  {
    label: "Email",
    content: (
      <a href={`mailto:${CONTACT.email}`} className="break-all transition-colors duration-500 hover:text-accent">
        {CONTACT.email}
      </a>
    ),
  },
  { label: "Showroom", content: CONTACT.address },
  { label: "Hours", content: CONTACT.hours },
];

/** Contact page body: direct lines in a dark column beside the enquiry form. */
export function ContactSection() {
  return (
    <Section id="enquiry" className="scroll-mt-(--header-height)">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal as="aside" className="lg:col-span-4">
          <div className="bg-ink p-8 text-paper md:p-10">
            <Eyebrow inverse className="mb-10">
              Direct lines
            </Eyebrow>
            <dl className="space-y-8">
              {CONTACT_LINES.map((line, i) => (
                <div key={line.label} className="border-t border-line-inverse pt-5">
                  <dt className="type-eyebrow flex gap-3 text-silver">
                    <span className="text-accent">{formatIndex(i)}</span>
                    {line.label}
                  </dt>
                  <dd className="type-h4 mt-3">{line.content}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6">
          <SectionHeading
            eyebrow="Send an enquiry"
            title="How can we help?"
            lead="Choose a topic and tell us a little about what you need. We'll take it from there."
          />
          <Reveal delay={150}>
            <EnquiryFormFromQuery />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
