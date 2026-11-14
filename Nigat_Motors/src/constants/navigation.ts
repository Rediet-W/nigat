import { SERVICES } from "@/features/services/data/services";
import type { NavItem, NavLink } from "@/types";
import { ROUTES } from "./routes";

const serviceLinks: NavLink[] = SERVICES.map((service) => ({
  label: service.title,
  href: ROUTES.service(service.slug),
  description: service.excerpt,
}));

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Services", href: ROUTES.services, children: serviceLinks },
  { label: "Vehicles", href: ROUTES.vehicles },
  { label: "Gallery", href: ROUTES.gallery },
  { label: "FAQs", href: ROUTES.faqs },
];

export const HEADER_CTA: NavLink = { label: "Enquire", href: ROUTES.contact };

export const FOOTER_EXPLORE_LINKS: NavLink[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Vehicles", href: ROUTES.vehicles },
  { label: "Gallery", href: ROUTES.gallery },
  { label: "FAQs", href: ROUTES.faqs },
  { label: "Contact", href: ROUTES.contact },
];

export const FOOTER_SERVICE_LINKS: NavLink[] = serviceLinks;
