import { getSite } from "@/constants/site";
import { getProductCategories } from "@/features/products/data/product-categories";
import { getServices } from "@/features/services/data/services";
import type { Locale } from "@/i18n/config";
import { DICTIONARIES, fill } from "@/i18n/dictionaries";
import { GENERAL_ENQUIRY, type EnquiryFormData } from "./enquiry";

/** Topics, copy and site name for the enquiry form in one language (server side). */
export function getEnquiryFormData(locale: Locale): EnquiryFormData {
  const copy = DICTIONARIES[locale].form;

  return {
    copy,
    siteName: getSite(locale).name,
    options: [
      { value: GENERAL_ENQUIRY, label: copy.generalEnquiry },
      ...getServices(locale).map((service) => ({ value: service.slug, label: service.title })),
      ...getProductCategories(locale).map((category) => ({
        value: category.slug,
        label: fill(copy.productTopic, { name: category.name }),
      })),
    ],
  };
}
