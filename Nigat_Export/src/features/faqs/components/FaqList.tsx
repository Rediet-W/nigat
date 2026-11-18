import { Phone } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { CONTACT } from "@/constants/site";
import { getDictionary } from "@/i18n/server";
import { formatIndex } from "@/lib/format";
import { Accordion, ButtonLink, Eyebrow, Reveal, Section } from "@/components/ui";
import { getFaqGroups } from "../data/faqs";

/** Full FAQ page: sticky chapter index on the left, grouped accordions on the right. */
export async function FaqList() {
  const { locale, t, href } = await getDictionary();
  const groups = getFaqGroups(locale);

  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <aside className="lg:col-span-3 lg:self-start lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
          <nav aria-label={t.faqs.topicsLabel}>
            <Eyebrow className="mb-6">{t.faqs.topics}</Eyebrow>
            <ol className="border-t border-line">
              {groups.map((group, i) => (
                <li key={group.title} className="border-b border-line">
                  <a
                    href={`#${group.id}`}
                    className="flex items-baseline gap-4 py-4 transition-colors duration-500 hover:text-accent"
                  >
                    <span className="type-number text-xs text-accent">{formatIndex(i)}</span>
                    <span className="type-nav">{group.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 hidden bg-ink p-8 text-paper lg:block">
            <p className="type-h4">{t.faqs.stillQuestion}</p>
            <p className="mt-3 text-sm text-silver">{t.faqs.happyToHelp}</p>
            <a
              href={CONTACT.phoneHref}
              className="type-nav mt-6 flex items-center gap-2 text-silver transition-colors hover:text-paper"
            >
              <Phone aria-hidden className="size-3.5 text-accent" />
              {CONTACT.phone}
            </a>
            <ButtonLink href={href(ROUTES.contact)} className="mt-6 w-full">
              {t.faqs.contactUs}
            </ButtonLink>
          </div>
        </aside>

        <div className="space-y-20 lg:col-span-8 lg:col-start-5 lg:space-y-28">
          {groups.map((group, i) => (
            <section key={group.id} id={group.id} className="scroll-mt-(--header-height)">
              <Reveal>
                <Eyebrow index={formatIndex(i)} className="mb-5">
                  {t.faqs.topic}
                </Eyebrow>
                <h2 className="type-h2 mb-10">{group.title}</h2>
              </Reveal>
              <Reveal delay={100}>
                <Accordion items={group.items} defaultOpen={i === 0 ? 0 : null} />
              </Reveal>
            </section>
          ))}
        </div>
      </div>
    </Section>
  );
}
