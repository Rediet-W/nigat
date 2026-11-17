import Image from "next/image";

import { SITE } from "@/constants/site";

/** Logo mark with the brand name stacked on three lines beside it (header + footer). */
export function SiteLogo({ preload = false }: { preload?: boolean }) {
  const [first, second, ...rest] = SITE.name.split(" ");

  return (
    <span className="site-logo">
      <Image src={SITE.logo} alt="" width={168} height={105} className="site-logo-mark" preload={preload} />
      <span className="site-logo-text">
        <span>{first}</span>
        <span>{second}</span>
        <span>{rest.join(" ")}</span>
      </span>
    </span>
  );
}
