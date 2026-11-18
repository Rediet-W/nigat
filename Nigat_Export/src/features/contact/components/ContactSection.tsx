import type { ReactNode } from "react";
import { CONTACT, getContact } from "@/constants/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { getDictionary } from "@/i18n/server";
import { formatIndex } from "@/lib/format";
import { Eyebrow, Reveal, Section, SectionHeading } from "@/components/ui";
import { getEnquiryFormData } from "../lib/enquiry-data";
import { EnquiryFormFromQuery } from "./EnquiryFormFromQuery";

interface ContactLine {
  label: string;
  content: ReactNode;
}

function getContactLines(t: Dictionary["contact"], contact: ReturnType<typeof getContact>): ContactLine[] {
  return [
    {
      label: t.telephone,
      content: (
        <a href={CONTACT.phoneHref} className="transition-colors duration-500 hover:text-accent">
          {CONTACT.phone}
        </a>
      ),
    },
    {
      label: t.altTelephone,
      content: (
        <a href={CONTACT.altPhoneHref} className="transition-colors duration-500 hover:text-accent">
          {CONTACT.altPhone}
        </a>
      ),
    },
    {
      label: t.email,
      content: (
        <a href={`mailto:${CONTACT.email}`} className="break-all transition-colors duration-500 hover:text-accent">
          {CONTACT.email}
        </a>
      ),
    },
    { label: t.office, content: contact.address },
    { label: t.hours, content: contact.hours },
  ];
}

/** Contact page body: direct lines in a dark column beside the enquiry form. */
export async function ContactSection() {
  const { locale, t } = await getDictionary();
  const lines = getContactLines(t.contact, getContact(locale));

  return (
    <Section id="enquiry" className="scroll-mt-(--header-height)">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal as="aside" className="lg:col-span-4">
          <div className="bg-ink p-8 text-paper md:p-10">
            <Eyebrow inverse className="mb-10">
              {t.contactPage.directLines}
            </Eyebrow>
            <dl className="space-y-8">
              {lines.map((line, i) => (
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
            eyebrow={t.contactPage.formEyebrow}
            title={t.contactPage.formTitle}
            lead={t.contactPage.formLead}
          />
          <Reveal delay={150}>
            <EnquiryFormFromQuery data={getEnquiryFormData(locale)} />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
