import type { TeamMember } from "@/types";
import { ROUTES } from "@/constants/routes";

export const TEAM_MEMBERS: readonly TeamMember[] = [
  {
    id: "michael-anderson",
    name: "Michael Anderson",
    role: "Founder & Director",
    image: "/images/team-1.jpg",
    href: ROUTES.teamDetails
  },
  {
    id: "emily-roberts",
    name: "Emily Roberts",
    role: "Lead Architect",
    image: "/images/team-2.jpg",
    href: ROUTES.teamDetails
  },
  {
    id: "alexander-thomas",
    name: "Alexander Thomas",
    role: "Project Director",
    image: "/images/team-3.jpg",
    href: ROUTES.teamDetails
  },
  {
    id: "sophia-bennett",
    name: "Sophia Bennett",
    role: "Site Supervisor",
    image: "/images/team-4.jpg",
    href: ROUTES.teamDetails
  },
  {
    id: "isabella-montgomery",
    name: "Isabella Montgomery",
    role: "Construction Director",
    image: "/images/team-5.jpg",
    href: ROUTES.teamDetails
  },
  {
    id: "margaret-ellington",
    name: "Margaret Ellington",
    role: "Civil Engineer",
    image: "/images/team-6.jpg",
    href: ROUTES.teamDetails
  },
  {
    id: "natalie-kensington",
    name: "Natalie Kensington",
    role: "Project Coordinator",
    image: "/images/team-7.jpg",
    href: ROUTES.teamDetails
  },
  {
    id: "catherine-langford",
    name: "Catherine Langford",
    role: "Executive Officer",
    image: "/images/team-8.jpg",
    href: ROUTES.teamDetails
  }
];
