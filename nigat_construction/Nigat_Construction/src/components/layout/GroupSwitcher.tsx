import Link from "next/link";

import { ROUTES } from "@/constants/routes";
import { groupNavigation } from "@/constants/nigat-group";
import { getDictionary, getLocale } from "@/i18n/server";

/**
 * Desktop "Nigat Group" switcher. It is a `.submenu` item inside `.main-menu`,
 * so the panel opens on hover and keyboard focus exactly like the site's other
 * dropdowns (template CSS + the focus-within rule in overrides.css).
 */
export async function GroupSwitcher() {
  const [t, locale] = await Promise.all([getDictionary(), getLocale()]);
  const { groupName, sectors } = groupNavigation(locale, ROUTES.home);

  return (
    <ul className="navbar-nav group-switcher">
      <li className="nav-item submenu">
        <button type="button" className="nav-link group-switcher-toggle" aria-label={groupName}>
          <i className="fa-solid fa-grip" aria-hidden="true" />
          <span className="group-switcher-label">{groupName}</span>
        </button>
        <ul aria-label={t.group.sectors}>
          {sectors.map((sector) => (
            <li key={sector.key} className={sector.current ? "nav-item is-current" : "nav-item"}>
              <Link
                className="nav-link group-sector-link"
                href={sector.href}
                aria-current={sector.current ? "page" : undefined}
              >
                <span className="group-sector-no">{sector.number}</span>
                <span className="group-sector-text">
                  <span className="group-sector-name">
                    {sector.name}
                    {!sector.current && (
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                    )}
                  </span>
                  <span className="group-sector-desc">{sector.description}</span>
                  {sector.current && <span className="group-sector-here">{t.group.youAreHere}</span>}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}
