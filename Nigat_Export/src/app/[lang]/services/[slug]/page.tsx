import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout";
import { ROUTES } from "@/constants/routes";
import { EnquiryCta } from "@/features/contact";
import { getServiceBySlug, SERVICES, ServiceDetail, ServicesIndex } from "@/features/services";
import { getDictionary } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

/**
 * Every service is prerendered from `generateStaticParams` (slugs are the
 * same in every language). Unknown slugs render the not-found page (with a
 * `noindex` tag) via `notFound()`.
 */
export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { locale } = await getDictionary();
  const service = getServiceBySlug(slug, locale);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.excerpt,
    path: ROUTES.service(service.slug),
    locale,
  });
}

export default async function ServicePage({ params }: PageProps<"/[lang]/services/[slug]">) {
  const { slug } = await params;
  const { locale, t, href } = await getDictionary();
  const service = getServiceBySlug(slug, locale);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={t.services.serviceEyebrow}
        title={service.title}
        lead={service.excerpt}
        image={service.image}
        trail={[{ label: t.nav.services, href: href(ROUTES.services) }]}
      />
      <ServiceDetail service={service} />
      <ServicesIndex eyebrow={t.services.moreServices} title={t.services.exploreOther} excludeSlug={service.slug} />
      <EnquiryCta />
    </>
  );
}
