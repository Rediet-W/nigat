import Image from "next/image";
import Link from "next/link";

import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { groupNavigation } from "@/constants/nigat-group";
import { ROUTES } from "@/constants/routes";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICE_IDS,
  SOCIAL_LINKS,
} from "@/constants/navigation";
import { SERVICES } from "@/constants/services";
import { CONTACT_INFO } from "@/constants/site";
import { localize } from "@/i18n/localize";
import { getDictionary, getLocale } from "@/i18n/server";

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="footer-links">
      <h2>{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function Footer() {
  const [t, locale] = await Promise.all([getDictionary(), getLocale()]);
  const group = groupNavigation(locale, ROUTES.home);
  const quickLinks = FOOTER_QUICK_LINKS.map((link) => ({
    label: t.nav[link.labelKey],
    href: link.href,
  }));
  const serviceLinks = localize(SERVICES, t.content.services)
    .filter((service) => FOOTER_SERVICE_IDS.includes(service.id))
    .map((service) => ({ label: service.title, href: service.href }));

  return (
    <footer className="main-footer dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-header">
              <div className="footer-logo">
                <SiteLogo />
              </div>
              <div className="footer-social-links">
                <ul>
                  {SOCIAL_LINKS.map((social) => (
                    <li key={social.label}>
                      <a href={social.href} aria-label={social.label}>
                        <i className={social.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-12">
            <div className="footer-links-box">
              <div className="footer-links footer-contact-box">
                <ul>
                  <li>
                    <Image
                      src="/images/icon-phone-white.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <a href={CONTACT_INFO.phone.href}>
                      {CONTACT_INFO.phone.label}
                    </a>
                    /
                    <a href={CONTACT_INFO.altPhone.href}>
                      {CONTACT_INFO.altPhone.label}
                    </a>
                  </li>
                  {/* <li>
                    <Image src="/images/icon-phone-white.svg" alt="" width={24} height={24} />
                    <a href={CONTACT_INFO.altPhone.href}>{CONTACT_INFO.altPhone.label}</a>
                  </li> */}
                  <li>
                    <Image
                      src="/images/icon-mail-white.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <a href={CONTACT_INFO.email.href}>
                      {CONTACT_INFO.email.label}
                    </a>
                  </li>
                  <li>
                    <Image
                      src="/images/icon-location-white.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    {t.common.address}
                  </li>
                  <li>
                    <i
                      className="fa-regular fa-clock footer-contact-icon"
                      aria-hidden="true"
                    />
                    {t.common.hours}
                  </li>
                </ul>
              </div>

              <FooterLinks title={t.footer.quickLinks} links={quickLinks} />
              <FooterLinks title={t.footer.ourServices} links={serviceLinks} />
              <NewsletterForm />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="footer-group">
              <div className="footer-group-header">
                <h2>{group.groupName}</h2>
                <p>{t.group.tagline}</p>
              </div>
              <ul className="footer-group-list" aria-label={t.group.sectors}>
                {group.sectors.map((sector) => (
                  <li
                    key={sector.key}
                    className={sector.current ? "is-current" : undefined}
                  >
                    <span className="footer-group-no">{sector.number}</span>
                    <h3>
                      <Link
                        href={sector.href}
                        aria-current={sector.current ? "page" : undefined}
                      >
                        {sector.name}
                        {!sector.current && (
                          <i
                            className="fa-solid fa-arrow-up-right-from-square"
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    </h3>
                    <p>{sector.description}</p>
                    {sector.current && (
                      <span className="footer-group-here">
                        {t.group.youAreHere}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copyright-text">
                <p>{t.common.copyright}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
