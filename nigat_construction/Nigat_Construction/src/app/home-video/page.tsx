import { HomePage } from "@/features/home/HomePage";
import { pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("homeVideo");

export default function HomeVideoPage() {
  return <HomePage heroVariant="video" />;
}
