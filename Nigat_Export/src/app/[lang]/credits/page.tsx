import type { Metadata } from "next";
import { PageHero } from "@/components/layout";
import { Section, TextLink } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import type { Locale } from "@/i18n/config";
import { fill } from "@/i18n/dictionaries";
import { getDictionary } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  return createMetadata({
    title: t.credits.metaTitle,
    description: t.credits.metaDescription,
    path: ROUTES.credits,
    locale,
  });
}

interface ImageCredit {
  title: Record<Locale, string>;
  creator: string;
  license: string;
  licenseUrl: string;
  source: string;
  usedFor: Record<Locale, string>;
}

const CREDITS: ImageCredit[] = [
  {
    title: { en: "Coffee cherries", am: "የቡና ፍሬዎች" },
    creator: "WordPress Photo Directory contributor",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://wordpress.org/photos/",
    usedFor: { en: "Home hero, gallery", am: "የዋና ገጽ መክፈቻ፣ ፎቶዎች" },
  },
  {
    title: { en: "Coffee sacks", am: "የቡና ጆንያዎች" },
    creator: "Downtowngal",
    license: "Public domain",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Coffee_sacks.jpg",
    usedFor: { en: "Products hero, gallery", am: "የምርቶች ገጽ መክፈቻ፣ ፎቶዎች" },
  },
  {
    title: { en: "Worker at a coffee roastery", am: "በቡና መቁያ ቤት የሚሠራ ሠራተኛ" },
    creator: "Jameswasswa",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:A_worker_at_the_roastery_checks_on_the_progress_of_coffee_beans_in_the_roasting_machine.jpg",
    usedFor: { en: "Services hero, processing service, gallery", am: "የአገልግሎቶች ገጽ መክፈቻ፣ የማቀነባበር አገልግሎት፣ ፎቶዎች" },
  },
  {
    title: { en: "Coffee under native shade", am: "በሀገር በቀል ዛፎች ጥላ ሥር ያለ ቡና" },
    creator: "DivyaCM",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Coffee_under_native_species_shade2_DM.jpg",
    usedFor: { en: "About hero, gallery", am: "የስለ እኛ ገጽ መክፈቻ፣ ፎቶዎች" },
  },
  {
    title: { en: "Green coffee beans", am: "ጥሬ ቡና" },
    creator: "Michael Allen Smith, INeedCoffee",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Green_Coffee_Beans_(4075921494).jpg",
    usedFor: { en: "Gallery hero", am: "የፎቶዎች ገጽ መክፈቻ" },
  },
  {
    title: { en: "Green bean coffee", am: "ያልተቆላ የቡና ፍሬ" },
    creator: "DeaPeaJay",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Green_Bean_Coffee.jpg",
    usedFor: { en: "Green coffee category, gallery", am: "የጥሬ ቡና ዘርፍ፣ ፎቶዎች" },
  },
  {
    title: { en: "Roasted coffee beans", am: "የተቆላ ቡና" },
    creator: "Sridhar Rao",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Coffee_beans_roasted.jpg",
    usedFor: { en: "FAQs hero, roasted coffee category, gallery", am: "የጥያቄዎች ገጽ መክፈቻ፣ የተቆላ ቡና ዘርፍ፣ ፎቶዎች" },
  },
  {
    title: { en: "Shipping containers, Port of Rotterdam", am: "የጭነት ኮንቴይነሮች፣ የሮተርዳም ወደብ" },
    creator: "AgainErick",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Shipping_container_stacks_-_Port_of_Rotterdam_-_2014_-_2.jpg",
    usedFor: { en: "Contact hero, logistics service, about section", am: "የአድራሻ ገጽ መክፈቻ፣ የሎጂስቲክስ አገልግሎት፣ የስለ እኛ ክፍል" },
  },
  {
    title: { en: "Sorghum field", am: "የማሽላ ማሳ" },
    creator: "Ll1324",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Sorghum_Field_El_Salvador_2011.jpg",
    usedFor: { en: "Not-found page", am: "ገጹ አልተገኘም ገጽ" },
  },
  {
    title: { en: "Barley field in evening sun", am: "በምሽት ፀሐይ የገብስ ማሳ" },
    creator: "Gerda Arendt",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Barley_field,_Ehrenbach,_evening_sun.jpg",
    usedFor: { en: "Principles band, gallery", am: "የመርሆዎች ክፍል፣ ፎቶዎች" },
  },
  {
    title: { en: "Teff village, Oromia", am: "የጤፍ መንደር፣ ኦሮሚያ" },
    creator: "Timothy A. Gonsalves",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Teff_Village_Oromia_Ethiopia_Oct19_R16_02202.jpg",
    usedFor: { en: "Teff category, gallery", am: "የጤፍ ዘርፍ፣ ፎቶዎች" },
  },
  {
    title: { en: "Wheat grain", am: "የስንዴ ፍሬ" },
    creator: "WordPress Photo Directory contributor",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://wordpress.org/photos/",
    usedFor: { en: "Wheat & barley category, gallery", am: "የስንዴና ገብስ ዘርፍ፣ ፎቶዎች" },
  },
  {
    title: { en: "Maize kernels", am: "የበቆሎ ፍሬዎች" },
    creator: "Judgefloro",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Jf8678Maize_kernels_Lubaofvf_02.JPG",
    usedFor: { en: "Maize & sorghum category, gallery", am: "የበቆሎና ማሽላ ዘርፍ፣ ፎቶዎች" },
  },
  {
    title: { en: "White sesame seeds", am: "ነጭ ሰሊጥ" },
    creator: "Sanjay ach",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    source: "https://commons.wikimedia.org/wiki/File:Sa_white_sesame_seeds.jpg",
    usedFor: { en: "Pulses & oilseeds category, gallery", am: "የጥራጥሬና የቅባት እህሎች ዘርፍ፣ ፎቶዎች" },
  },
  {
    title: { en: "Women drying coffee", am: "ቡና የሚያደርቁ ሴቶች" },
    creator: "Philip Asedri Dradrio",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Women_drying_coffee.jpg",
    usedFor: { en: "Sourcing service, about section", am: "የምርት ማሰባሰብ አገልግሎት፣ የስለ እኛ ክፍል" },
  },
  {
    title: { en: "Barley grain in hands", am: "በእጅ የተያዘ የገብስ ፍሬ" },
    creator: "Carl Davies, CSIRO",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    source: "https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_10909_BARLEYmax_grain.jpg",
    usedFor: { en: "Quality service, about section", am: "የጥራት አገልግሎት፣ የስለ እኛ ክፍል" },
  },
  {
    title: { en: "Red lentils", am: "ቀይ ምስር" },
    creator: "Fumikas Sagisavas",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Red_lentils_(1).jpg",
    usedFor: { en: "Gallery", am: "ፎቶዎች" },
  },
];

export default async function CreditsPage() {
  const { locale, t, href } = await getDictionary();

  return (
    <>
      <PageHero
        eyebrow={t.credits.heroEyebrow}
        title={t.credits.heroTitle}
        lead={t.credits.heroLead}
        image="/images/band-landscape.jpg"
        size="compact"
      />

      <Section>
        <div className="max-w-[64rem]">
          <p className="type-lead text-steel">{t.credits.intro}</p>

          <ul className="mt-12 border-t border-line">
            {CREDITS.map((credit) => (
              <li key={credit.title.en} className="border-b border-line py-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <div>
                    <p className="type-h4">{credit.title[locale]}</p>
                    <p className="mt-1 text-sm text-steel">{credit.creator}</p>
                  </div>
                  <p className="text-sm text-steel sm:text-right">
                    <a
                      href={credit.licenseUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
                    >
                      {credit.license}
                    </a>
                    {" · "}
                    <a
                      href={credit.source}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
                    >
                      {t.credits.source}
                    </a>
                  </p>
                </div>
                <p className="mt-3 text-sm text-steel">{fill(t.credits.usedFor, { places: credit.usedFor[locale] })}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <TextLink href={href(ROUTES.home)}>{t.common.backToHome}</TextLink>
          </div>
        </div>
      </Section>
    </>
  );
}
