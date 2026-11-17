import { TeamCard } from "@/features/team/components/TeamCard";
import { TEAM_MEMBERS } from "@/constants/team";
import { localize } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";

export async function TeamGrid() {
  const dict = await getDictionary();
  return (
    <div className="page-team">
      <div className="container">
        <div className="row">
          {localize(TEAM_MEMBERS.slice(0, 8), dict.content.team).map((member, index) => (
            <div className="col-xl-3 col-md-6" key={member.id}>
              <TeamCard member={member} delay={wowDelay(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
