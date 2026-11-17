/**
 * Every page of the Nigat Fanawi Trading PLC website mapped to an App Router path.
 * (`index.html` and its duplicate `index-2.html` both map to `/`.)
 */
export const ROUTES = {
  home: "/",
  homeSlider: "/home-slider",
  homeVideo: "/home-video",
  about: "/about",
  services: "/services",
  serviceDetails: "/service-details",
  blog: "/blog",
  blogDetails: "/blog-details",
  projects: "/projects",
  projectDetails: "/project-details",
  team: "/team",
  teamDetails: "/team-details",
  testimonials: "/testimonials",
  imageGallery: "/image-gallery",
  videoGallery: "/video-gallery",
  faqs: "/faqs",
  contact: "/contact",
  /** Not a real route: renders the app's not-found page, like the original "404" menu link. */
  notFound: "/404",
} as const;
