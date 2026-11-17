import Link from "next/link";

import { GroupSwitcher } from "@/components/layout/GroupSwitcher";
import { MobileMenu, MobileMenuProvider, MobileMenuToggle } from "@/components/layout/MobileNavigation";
import { Navigation } from "@/components/layout/Navigation";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/site";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";
import { getDictionary } from "@/i18n/server";

export async function Header() {
  const t = await getDictionary();
  return (
    <header className="main-header">
      <MobileMenuProvider>
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand" href={ROUTES.home} aria-label={SITE.name}>
                <SiteLogo preload />
              </Link>

              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <Navigation />
                </div>
                <GroupSwitcher />
                <div className="header-btn">
                  <Link href={ROUTES.contact} className="btn-default btn-highlighted">
                    {t.common.bookNow}
                  </Link>
                </div>
              </div>

              <LanguageSwitcher />

              <div className="navbar-toggle">
                <MobileMenuToggle />
              </div>
            </div>
          </nav>
          <div className="responsive-menu">
            <MobileMenu />
          </div>
        </div>
      </MobileMenuProvider>
    </header>
  );
}
