import type { ProductCategory } from "@/types";

/**
 * PLACEHOLDER CONTENT — representative export categories, not a stock list.
 * Nigat Export's actual grades, volumes and certifications have not been
 * confirmed; images are representative (README → "Content to confirm").
 */
export const PRODUCT_CATEGORIES: ProductCategory[] = [
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
];
