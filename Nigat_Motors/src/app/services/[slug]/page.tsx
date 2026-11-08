import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { getServiceBySlug, SERVICES, ServiceDetail, ServicesIndex } from "@/features/services";
import { createMetadata } from "@/lib/metadata";

/**
 * Every service is prerendered from `generateStaticParams`. Unknown slugs
 * render the not-found page (with a `noindex` tag) via `notFound()`.
 */
export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.excerpt,
    path: ROUTES.service(service.slug),
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        lead={service.excerpt}
        image={service.image}
        trail={[{ label: "Services", href: ROUTES.services }]}
      />
      <ServiceDetail service={service} />
      <ServicesIndex eyebrow="More services" title="Explore other services" excludeSlug={service.slug} />
      <EnquiryCta />
    </>
  );
}
