import type { NavItem, SocialLink } from "@/types";
import { ROUTES } from "@/constants/routes";

/** Main menu, identical in every page of the original template. */
export const MAIN_NAVIGATION: readonly NavItem[] = [
  // {
  //   label: "Home",
  //   href: ROUTES.home,
  //   children: [
  //     { label: "Home - Main", href: ROUTES.home },
  //     { label: "Home - Video", href: ROUTES.homeVideo },
  //     { label: "Home - Slider", href: ROUTES.homeSlider },
  //   ],
  // },
  { labelKey: "about", href: ROUTES.about },
  { labelKey: "services", href: ROUTES.services },
  { labelKey: "blog", href: ROUTES.blog },
  // {
  //   label: "Pages",
  //   href: "#",
  //   children: [
  //     { label: "Service Details", href: ROUTES.serviceDetails },
  //     { label: "Blog Details", href: ROUTES.blogDetails },
  //     { label: "Our Projects", href: ROUTES.projects },
  //     { label: "Project Details", href: ROUTES.projectDetails },
  //     // { label: "Our Team", href: ROUTES.team },
  //     // { label: "Team Details", href: ROUTES.teamDetails },
  //     { label: "Testimonials", href: ROUTES.testimonials },
  //     { label: "Image Gallery", href: ROUTES.imageGallery },
  //     { label: "Video Gallery", href: ROUTES.videoGallery },
  //     { label: "FAQs", href: ROUTES.faqs },
  //     { label: "404", href: ROUTES.notFound },
  //   ],
  // },
  { labelKey: "contact", href: ROUTES.contact },
];

export const FOOTER_QUICK_LINKS: readonly NavItem[] = [
  { labelKey: "home", href: ROUTES.home },
  { labelKey: "about", href: ROUTES.about },
  { labelKey: "ourServices", href: ROUTES.services },
  { labelKey: "projects", href: ROUTES.projects },
  { labelKey: "contact", href: ROUTES.contact },
];

/** Services listed in the footer, by `id` from src/constants/services.ts (titles are translated there). */
export const FOOTER_SERVICE_IDS: readonly string[] = [
  "gypsum-board-ceiling-partition-works",
  "porcelain-ceramic-tile-works",
  "wall-cladding-systems",
  "custom-furnishing-joinery-works",
  "acoustic-renovation-soundproofing-works",
];

/** Official company social media profiles. */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nigat.fanawi",
    icon: "fa-brands fa-tiktok",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nigatfanawi",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61596065924984",
    icon: "fa-brands fa-facebook-f",
  },
];
