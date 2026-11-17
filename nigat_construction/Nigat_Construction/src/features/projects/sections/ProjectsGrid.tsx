import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { PROJECTS } from "@/constants/projects";
import { localize } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";

export async function ProjectsGrid() {
  const dict = await getDictionary();
  return (
    <div className="page-projects">
      <div className="container">
        <div className="row">
          {localize(PROJECTS.slice(0, 8), dict.content.projects).map((project, index) => (
            <div className="col-xl-3 col-md-6" key={project.id}>
              <ProjectCard project={project} delay={wowDelay(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
