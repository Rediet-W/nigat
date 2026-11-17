import Image from "next/image";
import Link from "next/link";

import { getDictionary } from "@/i18n/server";
import type { AnimatedItemProps, Service } from "@/types";

export async function ServiceCard({ service, delay }: AnimatedItemProps & { service: Service }) {
  const t = (await getDictionary()).common;
  return (
    <div className="service-item wow fadeInUp" data-wow-delay={delay}>
      <div className="service-item-image">
        <Link href={service.href} data-cursor-text={t.view}>
          <figure className="image-anime">
            <Image src={service.image} alt="" width={1200} height={800} />
          </figure>
        </Link>
      </div>
      <div className="service-item-content">
        <h2>
          <Link href={service.href}>{service.title}</Link>
        </h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
}
