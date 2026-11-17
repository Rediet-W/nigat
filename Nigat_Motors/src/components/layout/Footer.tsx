import Link from "next/link";
import { cacheLife } from "next/cache";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { FOOTER_EXPLORE_LINKS, FOOTER_SERVICE_LINKS } from "@/constants/navigation";
import { ROUTES } from "@/constants/routes";
import { CURRENT_SECTOR, GROUP, SECTORS } from "@/constants/nigat-group";
import { CONTACT, SITE, SOCIAL_LINKS } from "@/constants/site";
import { formatIndex } from "@/lib/format";
import { ButtonLink, Container, Logo } from "@/components/ui";
import type { NavLink } from "@/types";

async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className="type-eyebrow mb-6 text-silver">{title}</h2>
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

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="overflow-hidden bg-ink text-paper">
      <Container>
        {/* Closing call to action */}
        <div className="flex flex-col gap-10 border-b border-line-inverse py-16 lg:flex-row lg:items-end lg:justify-between lg:py-24">
          <p className="type-h2 max-w-[18ch] text-balance">Your next drive starts with a conversation.</p>
          <ButtonLink href={ROUTES.contact}>Send an Enquiry</ButtonLink>
        </div>

        {/* Directory */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-[22rem] text-silver">
              Electric & hybrid vehicles, after-sales support and straightforward advice — all in one place.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="Explore" links={FOOTER_EXPLORE_LINKS} />
          </div>
          <div className="lg:col-span-3">
            <FooterColumn title="Services" links={FOOTER_SERVICE_LINKS} />
          </div>
          <div className="lg:col-span-3">
            <h2 className="type-eyebrow mb-6 text-silver">Contact</h2>
            <ul className="space-y-3 text-paper/85">
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors duration-500 hover:text-accent">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.altPhoneHref} className="transition-colors duration-500 hover:text-accent">
                  {CONTACT.altPhone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="break-all transition-colors duration-500 hover:text-accent">
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-silver">{CONTACT.address}</li>
              <li className="text-silver">{CONTACT.hours}</li>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-500 hover:text-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nigat Group: the parent company's sectors, each with its own website */}
        <nav aria-label={GROUP.name} className="border-t border-line-inverse py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="type-eyebrow text-silver">{GROUP.name}</h2>
            <p className="text-sm text-silver">{SITE.legalName} — one parent company, three sectors.</p>
          </div>
          <ul className="mt-8 grid gap-px border-y border-line-inverse bg-line-inverse md:grid-cols-3">
            {SECTORS.map((sector, index) => {
              const current = sector.key === CURRENT_SECTOR;

              return (
                <li key={sector.key} className="bg-ink">
                  <a
                    href={current ? ROUTES.home : sector.href}
                    aria-current={current ? "page" : undefined}
                    className="group flex h-full flex-col gap-3 py-8 transition-colors duration-500 md:px-8 md:first:pl-0"
                  >
                    <span className="type-number text-sm text-accent">{formatIndex(index)}</span>
                    <span className="type-h4 flex items-start justify-between gap-3 text-paper transition-colors duration-500 group-hover:text-accent group-aria-[current=page]:text-accent">
                      {sector.name}
                      {!current && (
                        <ArrowUpRight
                          aria-hidden
                          className="size-4 shrink-0 transition-transform duration-500 ease-drive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      )}
                    </span>
                    <span className="text-sm text-silver">{sector.description}</span>
                    {current && <span className="type-eyebrow text-accent">You are here</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>

      {/* Oversized wordmark */}
      <div aria-hidden className="select-none">
        <p className="type-wordmark -mb-[0.1em] text-center text-graphite">
          Nigat Motors
        </p>
      </div>

      <div className="border-t border-line-inverse">
        <Container className="flex flex-col gap-4 py-6 text-sm text-silver sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.legalName} ({SITE.name}). All rights reserved.
          </p>
          <a href="#main-content" className="type-nav inline-flex items-center gap-2 transition-colors hover:text-paper">
            Back to top <ArrowUp aria-hidden className="size-3.5" />
          </a>
        </Container>
      </div>
    </footer>
  );
}
