import Link from "next/link";

import { MAIN_NAVIGATION } from "@/constants/navigation";
import { getDictionary } from "@/i18n/server";

/** Desktop menu; dropdowns open on hover/focus purely through the template CSS. */
export async function Navigation() {
  const t = await getDictionary();
  return (
    <ul className="navbar-nav mr-auto" id="menu">
      {MAIN_NAVIGATION.map((item) => (
        <li key={item.labelKey} className={item.children ? "nav-item submenu" : "nav-item"}>
          <Link className="nav-link" href={item.href}>
            {t.nav[item.labelKey]}
          </Link>
          {item.children && (
            <ul>
              {item.children.map((child) => (
                <li key={child.labelKey} className="nav-item">
                  <Link className="nav-link" href={child.href}>
                    {t.nav[child.labelKey]}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
