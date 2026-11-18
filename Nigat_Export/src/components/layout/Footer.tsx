import Link from "next/link";
import { cacheLife } from "next/cache";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { getNavigation } from "@/constants/navigation";
import { getGroupName, getSectors } from "@/constants/nigat-group";
import { ROUTES } from "@/constants/routes";
import { getContact, getSite, SOCIAL_LINKS, socialLabel } from "@/constants/site";
import { fill } from "@/i18n/dictionaries";
import { getDictionary } from "@/i18n/server";
import { formatIndex } from "@/lib/format";
import { ButtonLink, Container, Logo } from "@/components/ui";
import type { NavLink } from "@/types";

async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

function ColumnTitle({ children }: { children: string }) {
  return (
    <h2 className="type-eyebrow mb-6 flex items-center gap-3 text-silver">
      <span aria-hidden className="h-px w-5 bg-accent" />
      {children}
    </h2>
  );
}

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <ColumnTitle>{title}</ColumnTitle>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-paper/85 transition-colors duration-500 hover:text-accent">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Forest footer: brand row with a back-to-top block, a four-column directory,
 * the Nigat Group band and the legal line.
 */
export async function Footer() {
  const year = await getCurrentYear();
  const { locale, t, href } = await getDictionary();
  const site = getSite(locale);
  const contact = getContact(locale);
  const nav = getNavigation(locale);
  const groupName = getGroupName(locale);
  const sectors = getSectors(locale, href(ROUTES.home));

  return (
    <footer className="bg-ink text-paper">
      <Container>
        {/* Brand row */}
        <div className="flex items-start justify-between gap-8 border-b border-line-inverse py-14 lg:py-16">
          <div>
            <Logo
              href={href(ROUTES.home)}
              label={fill(t.common.logoLabel, { name: site.name })}
              wordmark={locale === "am" ? ["ንጋት", "ኤክስፖርት"] : undefined}
            />
            <p className="mt-6 max-w-[24rem] text-silver">{t.footer.blurb}</p>
          </div>
          <a
            href="#main-content"
            aria-label={t.footer.backToTop}
            className="flex size-14 shrink-0 items-center justify-center bg-accent text-ink transition-colors duration-500 hover:bg-paper lg:size-16"
          >
            <ArrowUp aria-hidden className="size-5" />
          </a>
        </div>

        {/* Directory */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-16">
          <FooterColumn title={t.footer.explore} links={nav.footerExplore} />
          <FooterColumn title={t.footer.services} links={nav.footerServices} />
          <div>
            <ColumnTitle>{t.footer.contact}</ColumnTitle>
            <ul className="space-y-3 text-paper/85">
              <li>
                <a href={contact.phoneHref} className="transition-colors duration-500 hover:text-accent">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.altPhoneHref} className="transition-colors duration-500 hover:text-accent">
                  {contact.altPhone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="break-all transition-colors duration-500 hover:text-accent">
                  {contact.email}
                </a>
              </li>
              <li className="text-silver">{contact.address}</li>
              <li className="text-silver">{contact.hours}</li>
              <li>
                <ul aria-label={t.contact.social} className="flex flex-wrap gap-x-5 gap-y-2">
                  {SOCIAL_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 transition-colors duration-500 hover:text-accent"
                      >
                        {socialLabel(link, locale)}
                        <ArrowUpRight aria-hidden className="size-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ColumnTitle>{t.footer.enquiries}</ColumnTitle>
            <p className="text-silver">{t.footer.enquiriesText}</p>
            <ButtonLink href={nav.cta.href} className="mt-6">
              {nav.cta.label}
            </ButtonLink>
          </div>
        </div>

        {/* Nigat Group: the parent company's sectors, each with its own website */}
        <nav aria-label={groupName} className="border-t border-line-inverse py-14 lg:py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
            <ColumnTitle>{groupName}</ColumnTitle>
            <p className="text-sm text-silver">{fill(t.group.tagline, { legalName: site.legalName })}</p>
          </div>
          <ul className="mt-2 grid gap-px border-y border-line-inverse bg-line-inverse md:grid-cols-3">
            {sectors.map((sector, index) => (
              <li key={sector.key} className="bg-ink">
                <a
                  href={sector.href}
                  aria-current={sector.current ? "page" : undefined}
                  className="group flex h-full flex-col gap-3 py-8 transition-colors duration-500 md:px-8 md:first:pl-0"
                >
                  <span className="type-number text-sm text-accent">{formatIndex(index)}</span>
                  <span className="type-h4 flex items-start justify-between gap-3 text-paper transition-colors duration-500 group-hover:text-accent group-aria-[current=page]:text-accent">
                    {sector.name}
                    {!sector.current && (
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 shrink-0 transition-transform duration-500 ease-drive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    )}
                  </span>
                  <span className="text-sm text-silver">{sector.description}</span>
                  {sector.current && <span className="type-eyebrow text-accent">{t.group.youAreHere}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal line */}
        <div className="flex flex-col gap-3 border-t border-line-inverse py-6 text-sm text-silver sm:flex-row sm:items-center sm:justify-between">
          <p>{fill(t.footer.rights, { year, legalName: site.legalName, name: site.name })}</p>
          <Link href={href(ROUTES.credits)} className="transition-colors hover:text-paper">
            {t.footer.imageCredits}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
