import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { TeamCard } from "@/features/team/components/TeamCard";
import { TEAM_MEMBERS } from "@/constants/team";
import { wowDelay } from "@/lib/animation";
import { ROUTES } from "@/constants/routes";
import { localize } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";

/** `className` adds the page-specific modifier class the template uses on some pages. */
export async function TeamSection({ className }: { className?: string }) {
  const dict = await getDictionary();
  const t = dict.team;
  return (
    <div className={className ? `our-team ${className}` : "our-team"}>
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
              <div className="section-btn wow fadeInUp" data-wow-delay="0.4s"><Link href={ROUTES.team} className="readmore-btn">{t.viewTeam}</Link></div>
            </div>
          </div>
        </div>
        <div className="row">
          {localize(TEAM_MEMBERS.slice(0, 4), dict.content.team).map((member, index) => (
            <div className="col-xl-3 col-md-6" key={member.id}>
              <TeamCard member={member} delay={wowDelay(index)} />
            </div>
          ))}
          <div className="col-lg-12">
            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.4s">
              <p><span>{dict.services.free}</span>{t.footer}<Link href={ROUTES.team}>{t.viewAll}</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
