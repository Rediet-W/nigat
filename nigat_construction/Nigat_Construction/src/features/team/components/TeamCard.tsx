import Image from "next/image";
import Link from "next/link";

import { getDictionary } from "@/i18n/server";
import type { AnimatedItemProps, TeamMember } from "@/types";

export async function TeamCard({ member, delay }: AnimatedItemProps & { member: TeamMember }) {
  const t = (await getDictionary()).common;
  return (
    <div className="team-item wow fadeInUp" data-wow-delay={delay}>
      <div className="team-item-image">
        <Link href={member.href} data-cursor-text={t.view}>
          <figure className="image-anime">
            <Image src={member.image} alt="" width={400} height={491} unoptimized />
          </figure>
        </Link>
      </div>
      <div className="team-item-content">
        <p>{member.role}</p>
        <h2>
          <Link href={member.href}>{member.name}</Link>
        </h2>
      </div>
    </div>
  );
}
