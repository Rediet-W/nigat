import type { MetadataRoute } from "next";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { SERVICES } from "@/features/services";
import { LOCALE_TAGS, LOCALES, localizePath } from "@/i18n/config";

const STATIC_ROUTES = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.services,
  ROUTES.products,
  ROUTES.gallery,
  ROUTES.faqs,
  ROUTES.contact,
  ROUTES.credits,
];

/** Every page in every language, each listing its translations. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...STATIC_ROUTES, ...SERVICES.map((service) => ROUTES.service(service.slug))];
  const url = (path: string) => new URL(path, SITE.url).toString();

  return paths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: url(localizePath(locale, path)),
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((option) => [LOCALE_TAGS[option].html, url(localizePath(option, path))]),
        ),
      },
    })),
  );
}
