/** Single source of truth for every internal URL in the app. */
export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  service: (slug: string) => `/services/${slug}`,
  vehicles: "/vehicles",
  gallery: "/gallery",
  faqs: "/faqs",
  contact: "/contact",
  /** Contact page with the enquiry form pre-selected to a topic. */
  enquire: (interest: string) =>
    `/contact?interest=${encodeURIComponent(interest)}#enquiry`,
} as const;
