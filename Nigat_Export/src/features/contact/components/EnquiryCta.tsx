import { Mail, Phone } from "lucide-react";
import { CONTACT } from "@/constants/site";
import { getDictionary } from "@/i18n/server";
import { getEnquiryFormData } from "../lib/enquiry-data";
import { Reveal, Section } from "@/components/ui";
import { EnquiryForm } from "./EnquiryForm";

interface EnquiryCtaProps {
  index?: string;
}

/** Closing enquiry on leaf-green: a large title and direct lines beside a linen form card. */
export async function EnquiryCta({ index }: EnquiryCtaProps) {
  const { locale, t } = await getDictionary();

  return (
    <Section tone="accent">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="type-eyebrow mb-6 flex items-center gap-3 lg:mb-8">
              {index && <span>{index}</span>}
              <span aria-hidden className="h-px w-8 bg-ink" />
              {t.enquiryCta.eyebrow}
            </p>
            <h2 className="type-display text-balance">{t.enquiryCta.title}</h2>
            <p className="type-lead mt-8 max-w-[30rem] text-ink/75">
              {t.enquiryCta.lead}
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-12 space-y-4 border-t border-ink/25 pt-8">
            <a href={CONTACT.phoneHref} className="flex items-center gap-4 transition-opacity hover:opacity-70">
              <Phone aria-hidden className="size-4" />
              <span className="type-h4">{CONTACT.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 break-all transition-opacity hover:opacity-70"
            >
              <Mail aria-hidden className="size-4 shrink-0" />
              <span className="type-h4">{CONTACT.email}</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={150} className="bg-paper p-6 md:p-10 lg:col-span-6 lg:col-start-7 lg:p-12">
          <EnquiryForm data={getEnquiryFormData(locale)} />
        </Reveal>
      </div>
    </Section>
  );
}
