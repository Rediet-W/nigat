import Link from "next/link";
import type { ReactNode } from "react";

import { getDictionary } from "@/i18n/server";
import type { BreadcrumbItem } from "@/types";

interface PageHeaderProps {
  title: string;
  breadcrumbs?: readonly BreadcrumbItem[];
  /** Replaces the breadcrumb (the blog post header shows post meta instead). */
  children?: ReactNode;
}

/** Inner-page banner with parallax background, animated title and breadcrumb. */
export async function PageHeader({ title, breadcrumbs, children }: PageHeaderProps) {
  const t = (await getDictionary()).common;
  return (
    <div className="page-header dark-section parallaxie">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 className="text-anime-style-3" data-cursor="-opaque">
                {title}
              </h1>
              {breadcrumbs && (
                <nav className="wow fadeInUp" aria-label={t.breadcrumb}>
                  <ol className="breadcrumb">
                    {breadcrumbs.map((crumb) =>
                      crumb.href ? (
                        <li key={crumb.label} className="breadcrumb-item">
                          <Link href={crumb.href}>{crumb.label}</Link>
                        </li>
                      ) : (
                        <li key={crumb.label} className="breadcrumb-item active" aria-current="page">
                          {crumb.label}
                        </li>
                      ),
                    )}
                  </ol>
                </nav>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
