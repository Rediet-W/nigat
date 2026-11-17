import type { Metadata } from "next";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

/** Builds consistent per-page metadata (title template lives in the root layout). */
export function createMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}
