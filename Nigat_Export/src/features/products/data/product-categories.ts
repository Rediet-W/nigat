import type { Locale } from "@/i18n/config";
import type { ProductCategory } from "@/types";

/**
 * PLACEHOLDER CONTENT — representative export categories, not a stock list.
 * Nigat Export's actual grades, volumes and certifications have not been
 * confirmed; images are representative (README → "Content to confirm").
 * Each language lists the same categories in the same order and with the same slugs.
 */
const PRODUCT_CATEGORIES_BY_LOCALE: Record<Locale, ProductCategory[]> = {
  en: [
    {
      slug: "green-coffee",
      name: "Green Coffee",
      image: "/images/category-green-coffee.jpg",
      description:
        "Washed and natural Arabica from Ethiopia's highland growing regions, prepared for specialty roasters and importers.",
      idealFor: "Roasters, importers and green coffee traders",
    },
    {
      slug: "roasted-coffee",
      name: "Roasted Coffee",
      image: "/images/category-roasted-coffee.jpg",
      description:
        "Roasted to order for cafés, retailers and private labels, with roast profiles and packaging agreed before production.",
      idealFor: "Cafés, retailers and private-label brands",
    },
    {
      slug: "teff",
      name: "Teff",
      image: "/images/category-teff.jpg",
      description:
        "Ethiopia's native grain, cleaned and graded for flour mills, bakeries and distributors of gluten-free cereals.",
      idealFor: "Mills, bakeries and specialty food distributors",
    },
    {
      slug: "wheat-barley",
      name: "Wheat & Barley",
      image: "/images/category-wheat-barley.jpg",
      description:
        "Food-grade wheat and barley, cleaned and graded for milling, malting and general food manufacturing.",
      idealFor: "Millers, maltsters and food manufacturers",
    },
    {
      slug: "maize-sorghum",
      name: "Maize & Sorghum",
      image: "/images/category-maize-sorghum.jpg",
      description:
        "Bulk maize and sorghum for milling, animal feed and industrial use, with quality checked before dispatch.",
      idealFor: "Feed producers, millers and industrial buyers",
    },
    {
      slug: "pulses-oilseeds",
      name: "Pulses & Oilseeds",
      image: "/images/category-pulses-oilseeds.jpg",
      description:
        "Sesame, lentils and chickpeas sourced from established growing areas and prepared to buyer specification.",
      idealFor: "Wholesalers, processors and export traders",
    },
  ],
  am: [
    {
      slug: "green-coffee",
      name: "ጥሬ ቡና",
      image: "/images/category-green-coffee.jpg",
      description:
        "ከኢትዮጵያ ደጋማ የቡና አካባቢዎች የተገኘ የታጠበና ያልታጠበ (የተፈጥሮ) አረቢካ ቡና — ለልዩ ቡና ቆይዎችና አስመጪዎች የተዘጋጀ።",
      idealFor: "ቡና ቆይዎች፣ አስመጪዎችና የጥሬ ቡና ነጋዴዎች",
    },
    {
      slug: "roasted-coffee",
      name: "የተቆላ ቡና",
      image: "/images/category-roasted-coffee.jpg",
      description:
        "ለካፌዎች፣ ለችርቻሮ ነጋዴዎችና ለግል መለያዎች በትዕዛዝ የሚቆላ — አቆላሉና ማሸጊያው ከዝግጅቱ በፊት ይወሰናሉ።",
      idealFor: "ካፌዎች፣ ቸርቻሪዎችና የግል መለያ ብራንዶች",
    },
    {
      slug: "teff",
      name: "ጤፍ",
      image: "/images/category-teff.jpg",
      description: "የኢትዮጵያ ሀገር በቀል እህል — ለዱቄት ፋብሪካዎች፣ ለዳቦ ቤቶችና ከግሉተን ነጻ የእህል አከፋፋዮች ተጠርጎና ደረጃ ወጥቶለት።",
      idealFor: "የዱቄት ፋብሪካዎች፣ ዳቦ ቤቶችና የልዩ ምግብ አከፋፋዮች",
    },
    {
      slug: "wheat-barley",
      name: "ስንዴና ገብስ",
      image: "/images/category-wheat-barley.jpg",
      description: "ለምግብነት የሚውል ስንዴና ገብስ — ለዱቄት፣ ለብቅልና ለአጠቃላይ የምግብ ማምረቻ ተጠርጎና ደረጃ ወጥቶለት።",
      idealFor: "ዱቄት ፈጪዎች፣ ብቅል አምራቾችና የምግብ ፋብሪካዎች",
    },
    {
      slug: "maize-sorghum",
      name: "በቆሎና ማሽላ",
      image: "/images/category-maize-sorghum.jpg",
      description: "ለዱቄት፣ ለእንስሳት መኖና ለኢንዱስትሪ አገልግሎት የሚውል በብዛት የሚቀርብ በቆሎና ማሽላ — ከመላኩ በፊት ጥራቱ ይፈተሻል።",
      idealFor: "የመኖ አምራቾች፣ ዱቄት ፈጪዎችና የኢንዱስትሪ ገዢዎች",
    },
    {
      slug: "pulses-oilseeds",
      name: "ጥራጥሬና የቅባት እህሎች",
      image: "/images/category-pulses-oilseeds.jpg",
      description: "ከታወቁ የምርት አካባቢዎች የተገኘ ሰሊጥ፣ ምስርና ሽምብራ — በገዢው መስፈርት የተዘጋጀ።",
      idealFor: "የጅምላ ነጋዴዎች፣ አቀነባባሪዎችና የወጪ ንግድ ነጋዴዎች",
    },
  ],
};

export const PRODUCT_CATEGORIES: ProductCategory[] = PRODUCT_CATEGORIES_BY_LOCALE.en;

export function getProductCategories(locale: Locale): ProductCategory[] {
  return PRODUCT_CATEGORIES_BY_LOCALE[locale];
}
