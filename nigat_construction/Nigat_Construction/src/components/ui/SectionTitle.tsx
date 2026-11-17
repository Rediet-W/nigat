import type { ReactNode } from "react";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  /** Heading level: page heroes use h1, every other section h2. */
  as?: "h1" | "h2";
  description?: string;
  /** Adds `section-title-center` (centered, max 700px). */
  center?: boolean;
  /** Extra content rendered after the description (e.g. a checklist). */
  children?: ReactNode;
}

/** The template's recurring "pill sub-title + animated heading + text" block. */
export function SectionTitle({ subtitle, title, as: Heading = "h2", description, center, children }: SectionTitleProps) {
  return (
    <div className={center ? "section-title section-title-center" : "section-title"}>
      {subtitle && <span className="section-sub-title wow fadeInUp">{subtitle}</span>}
      <Heading className="text-anime-style-3" data-cursor="-opaque">
        {title}
      </Heading>
      {description && (
        <p className="wow fadeInUp" data-wow-delay="0.2s">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
