import type { Post } from "@/types";
import { ROUTES } from "@/constants/routes";

export const POSTS: readonly Post[] = [
  {
    id: "expert-insights-and-latest-trends-in-construction-industry",
    title: "Expert Insights and Latest Trends in Construction Industry",
    image: "/images/post-1.jpg",
    href: ROUTES.blogDetails
  },
  {
    id: "practical-tips-and-ideas-for-smart-construction-projects",
    title: "Practical Tips and Ideas for Smart Construction Projects",
    image: "/images/post-2.jpg",
    href: ROUTES.blogDetails
  },
  {
    id: "smart-building-tips-and-guides-for-better-project-planning",
    title: "Smart Building Tips and Guides for Better Project Planning",
    image: "/images/post-3.jpg",
    href: ROUTES.blogDetails
  },
  {
    id: "discover-expert-advice-for-better-planning-building",
    title: "Discover Expert Advice for Better Planning, Building",
    image: "/images/post-4.jpg",
    href: ROUTES.blogDetails
  },
  {
    id: "expert-construction-insights-tips-and-industry-updates",
    title: "Expert Construction Insights Tips & Industry Updates",
    image: "/images/post-5.jpg",
    href: ROUTES.blogDetails
  },
  {
    id: "smart-construction-tips-for-better-project-planning",
    title: "Smart Construction Tips for Better Project Planning",
    image: "/images/post-6.jpg",
    href: ROUTES.blogDetails
  }
];
