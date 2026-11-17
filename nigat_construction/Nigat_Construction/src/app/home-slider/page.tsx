import { HomePage } from "@/features/home/HomePage";
import { pageMetadata } from "@/i18n/server";

export const generateMetadata = pageMetadata("homeSlider");

export default function HomeSliderPage() {
  return <HomePage heroVariant="slider" />;
}
