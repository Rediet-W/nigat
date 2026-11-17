import Image from "next/image";
import Link from "next/link";

import { getDictionary } from "@/i18n/server";
import type { AnimatedItemProps, Project } from "@/types";

export async function ProjectCard({ project, delay }: AnimatedItemProps & { project: Project }) {
  const t = (await getDictionary()).common;
  return (
    <div className="project-item wow fadeInUp" data-wow-delay={delay}>
      <div className="project-item-image">
        <Link href={project.href} data-cursor-text={t.view}>
          <figure className="image-anime">
            <Image src={project.image} alt="" width={1200} height={800} />
          </figure>
        </Link>
      </div>
      <div className="project-item-content">
        <p>{project.category}</p>
        <h2>
          <Link href={project.href}>{project.title}</Link>
        </h2>
      </div>
    </div>
  );
}
