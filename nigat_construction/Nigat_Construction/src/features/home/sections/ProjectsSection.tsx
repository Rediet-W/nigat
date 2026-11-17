import Image from "next/image";
import Link from "next/link";

import { Counter } from "@/components/ui/Counter";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { PROJECTS } from "@/constants/projects";
import { wowDelay } from "@/lib/animation";
import { ROUTES } from "@/constants/routes";
import { localize } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";

export async function ProjectsSection() {
  const dict = await getDictionary();
  const t = dict.projects;
  return (
    <div className="our-project dark-section">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-xl-6">
            <SectionTitle
              subtitle={t.subtitle}
              title={t.title}
            />
          </div>
          <div className="col-xl-6">
            <div className="section-content-btn">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>{dict.common.teamIntro}</p>
              </div>
              <div className="section-btn wow fadeInUp" data-wow-delay="0.4s"><Link href={ROUTES.projects} className="readmore-btn">{t.viewAll}</Link></div>
            </div>
          </div>
        </div>
        <div className="row">
          {localize(PROJECTS.slice(0, 4), dict.content.projects).map((project, index) => (
            <div className="col-xl-3 col-md-6" key={project.id}>
              <ProjectCard project={project} delay={wowDelay(index)} />
            </div>
          ))}
          <div className="col-lg-12">
            <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.2s">
              <div className="satisfy-client-images">
                <div className="satisfy-client-image">
                  <figure><Image src="/images/author-1.jpg" alt="" width={50} height={50} unoptimized /></figure>
                </div>
                <div className="satisfy-client-image add-more"><Image src="/images/icon-phone-primary.svg" alt="" width={25} height={25} /></div>
              </div>
              <p>{dict.common.connect} <Link href={ROUTES.contact}>{t.freeQuote}</Link></p>
              <ul>
                <li><Counter value="4.9" /></li>
                {" "}
                <li><i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /></li>
                {" "}
                <li>{t.reviews}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
