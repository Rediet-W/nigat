"use client";

import { useInView } from "@/hooks/useInView";

interface SkillBarProps {
  title: string;
  /** 0–100 */
  percent: number;
}

/** Progress bar that fills when 70% of the viewport has scrolled past it (Waypoints offset "70%"). */
export function SkillBar({ title, percent }: SkillBarProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ rootMargin: "0px 0px -30% 0px" });

  return (
    <div ref={ref} className="skillbar" data-percent={`${percent}%`}>
      <div className="skill-data">
        <div className="skill-title">{title}</div>
        <div className="skill-no">{percent}%</div>
      </div>
      <div className="skill-progress">
        <div
          className="count-bar"
          style={{ width: inView ? `${percent}%` : 0, transition: "width 1.5s ease-in-out" }}
        />
      </div>
    </div>
  );
}
