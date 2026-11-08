import type { VehicleCategory } from "@/types";

/**
 * PLACEHOLDER CONTENT — general vehicle categories, not a stock list.
 * Nigat Motors' actual brands, models and inventory have not been confirmed;
 * images are representative stock photography (README → "Content to confirm").
 */
export const VEHICLE_CATEGORIES: VehicleCategory[] = [
  {
    slug: "sedan",
    name: "Sedans",
    image: "/images/category-sedan.jpg",
    description: "Comfortable, efficient and refined — a practical choice for everyday driving.",
    idealFor: "Daily commuting and city driving",
  },
  {
    slug: "suv",
    name: "SUVs",
    image: "/images/category-suv.jpg",
    description: "Space, presence and versatility for families and mixed road conditions.",
    idealFor: "Families and longer journeys",
  },
  {
    slug: "pickup",
    name: "Pickups",
    image: "/images/category-pickup.jpg",
    description: "Load capacity and durability for work, business and rough terrain.",
    idealFor: "Work, business and heavy loads",
  },
  {
    slug: "hatchback",
    name: "Hatchbacks",
    image: "/images/category-hatchback.jpg",
    description: "Compact, easy to park and economical to run.",
    idealFor: "First-time owners and urban driving",
  },
  {
    slug: "crossover",
    name: "Crossovers",
    image: "/images/category-crossover.jpg",
    description: "The raised driving position of an SUV with the agility of a smaller car.",
    idealFor: "Drivers who want a bit of everything",
  },
  {
    slug: "electric",
    name: "Electric & Hybrid",
    image: "/images/category-electric.jpg",
    description: "Lower running costs and a quieter, smoother drive.",
    idealFor: "Efficiency-minded drivers",
  },
];
