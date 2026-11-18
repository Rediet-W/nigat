import type { Locale } from "@/i18n/config";
import type { GalleryImage } from "@/types";

/**
 * PLACEHOLDER IMAGERY — representative origin and product photography.
 * Replace with Nigat Export's own farm, processing and shipment photos.
 * Sources and licences are listed on /credits.
 */
const GALLERY: { src: string; alt: Record<Locale, string> }[] = [
  { src: "/images/gallery-1.jpg", alt: { en: "Coffee cherries ripening on the branch", am: "በቅርንጫፍ ላይ የሚበስሉ የቡና ፍሬዎች" } },
  { src: "/images/gallery-2.jpg", alt: { en: "Coffee growing under shade trees", am: "በጥላ ዛፎች ሥር የሚበቅል ቡና" } },
  { src: "/images/gallery-3.jpg", alt: { en: "Green coffee beans ready for grading", am: "ደረጃ ለመውጣት የተዘጋጀ ጥሬ ቡና" } },
  { src: "/images/gallery-4.jpg", alt: { en: "Roasted coffee beans in a cooling tray", am: "በማቀዝቀዣ ትሪ ላይ ያለ የተቆላ ቡና" } },
  { src: "/images/gallery-5.jpg", alt: { en: "Coffee sacks stacked at origin", am: "በምንጩ የተደረደሩ የቡና ጆንያዎች" } },
  { src: "/images/gallery-6.jpg", alt: { en: "Worker checking beans at a coffee roastery", am: "በቡና መቁያ ቤት ፍሬዎችን የሚፈትሽ ሠራተኛ" } },
  { src: "/images/gallery-7.jpg", alt: { en: "Teff growing near a village in Oromia", am: "በኦሮሚያ በአንድ መንደር አቅራቢያ የሚበቅል ጤፍ" } },
  { src: "/images/gallery-8.jpg", alt: { en: "Barley field in evening light", am: "በምሽት ብርሃን የገብስ ማሳ" } },
  { src: "/images/gallery-9.jpg", alt: { en: "Wheat grain close up", am: "በቅርበት የሚታይ የስንዴ ፍሬ" } },
  { src: "/images/gallery-10.jpg", alt: { en: "Maize kernels", am: "የበቆሎ ፍሬዎች" } },
  { src: "/images/gallery-11.jpg", alt: { en: "White sesame seeds", am: "ነጭ ሰሊጥ" } },
  { src: "/images/gallery-12.jpg", alt: { en: "Red lentils", am: "ቀይ ምስር" } },
];

export function getGalleryImages(locale: Locale): GalleryImage[] {
  return GALLERY.map((image) => ({ src: image.src, alt: image.alt[locale] }));
}
