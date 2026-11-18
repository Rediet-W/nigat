import { getServices } from "@/features/services/data/services";
import { localizePath, type Locale } from "@/i18n/config";
import { DICTIONARIES } from "@/i18n/dictionaries";
import type { NavItem, NavLink } from "@/types";
import { ROUTES } from "./routes";

export interface Navigation {
  main: NavItem[];
  cta: NavLink;
  footerExplore: NavLink[];
  footerServices: NavLink[];
}

/** Every menu on the site, with labels and links in the given language. */
export function getNavigation(locale: Locale): Navigation {
  const t = DICTIONARIES[locale].nav;
  const href = (path: string) => localizePath(locale, path);

  const serviceLinks: NavLink[] = getServices(locale).map((service) => ({
    label: service.title,
    href: href(ROUTES.service(service.slug)),
    description: service.excerpt,
  }));

  return {
    main: [
      { label: t.home, href: href(ROUTES.home) },
      { label: t.about, href: href(ROUTES.about) },
      { label: t.services, href: href(ROUTES.services), children: serviceLinks },
      { label: t.products, href: href(ROUTES.products) },
      { label: t.gallery, href: href(ROUTES.gallery) },
      { label: t.faqs, href: href(ROUTES.faqs) },
    ],
    cta: { label: t.cta, href: href(ROUTES.contact) },
    footerExplore: [
      { label: t.home, href: href(ROUTES.home) },
      { label: t.about, href: href(ROUTES.about) },
      { label: t.products, href: href(ROUTES.products) },
      { label: t.gallery, href: href(ROUTES.gallery) },
      { label: t.faqs, href: href(ROUTES.faqs) },
      { label: t.contact, href: href(ROUTES.contact) },
    ],
    footerServices: serviceLinks,
  };
}
