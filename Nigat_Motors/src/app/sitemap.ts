import type { MetadataRoute } from "next";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { SERVICES } from "@/features/services";

const STATIC_ROUTES = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.services,
  ROUTES.vehicles,
  ROUTES.gallery,
  ROUTES.faqs,
  ROUTES.contact,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...STATIC_ROUTES, ...SERVICES.map((service) => ROUTES.service(service.slug))].map((path) => ({
    url: new URL(path, SITE.url).toString(),
  }));
}
