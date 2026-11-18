import { notFound } from "next/navigation";

/**
 * Any URL that matches no page (`/en/anything`, `/am/anything`) renders the
 * localized not-found page inside the root layout.
 */
export default function CatchAllPage() {
  notFound();
}
