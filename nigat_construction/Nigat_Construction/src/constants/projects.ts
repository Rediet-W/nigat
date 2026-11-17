import type { Project } from "@/types";
import { ROUTES } from "@/constants/routes";

export const PROJECTS: readonly Project[] = [
  {
    id: "modern-family-villa",
    title: "Modern Family Villa",
    category: "Residential",
    image: "/images/project-1.jpg",
    href: ROUTES.projectDetails
  },
  {
    id: "building-restoration",
    title: "Building Restoration",
    category: "Renovation",
    image: "/images/project-2.jpg",
    href: ROUTES.projectDetails
  },
  {
    id: "metro-business-center",
    title: "Metro Business Center",
    category: "Commercial",
    image: "/images/project-3.jpg",
    href: ROUTES.projectDetails
  },
  {
    id: "city-highway-expansion",
    title: "City Highway Expansion",
    category: "Infrastructure",
    image: "/images/project-4.jpg",
    href: ROUTES.projectDetails
  },
  {
    id: "manufacturing-plant",
    title: "Manufacturing Plant",
    category: "Industrial",
    image: "/images/project-5.jpg",
    href: ROUTES.projectDetails
  },
  {
    id: "grand-horizon-hotel",
    title: "Grand Horizon Hotel",
    category: "Hospitality",
    image: "/images/project-6.jpg",
    href: ROUTES.projectDetails
  },
  {
    id: "smart-storage-facility",
    title: "Smart Storage Facility",
    category: "Warehouse",
    image: "/images/project-7.jpg",
    href: ROUTES.projectDetails
  },
  {
    id: "city-medical-center",
    title: "City Medical Center",
    category: "Government",
    image: "/images/project-8.jpg",
    href: ROUTES.projectDetails
  }
];
