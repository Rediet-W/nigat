import { PageHero } from "@/components/layout";
import { Section, TextLink } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Image credits",
  description: "Sources and licences for the representative photography used on the Nigat Export website.",
  path: ROUTES.credits,
});

interface ImageCredit {
  title: string;
  creator: string;
  license: string;
  licenseUrl: string;
  source: string;
  usedFor: string;
}

const CREDITS: ImageCredit[] = [
  {
    title: "Coffee cherries",
    creator: "WordPress Photo Directory contributor",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://wordpress.org/photos/",
    usedFor: "Home hero, gallery",
  },
  {
    title: "Coffee sacks",
    creator: "Downtowngal",
    license: "Public domain",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Coffee_sacks.jpg",
    usedFor: "Products hero, gallery",
  },
  {
    title: "Worker at a coffee roastery",
    creator: "Jameswasswa",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:A_worker_at_the_roastery_checks_on_the_progress_of_coffee_beans_in_the_roasting_machine.jpg",
    usedFor: "Services hero, processing service, gallery",
  },
  {
    title: "Coffee under native shade",
    creator: "DivyaCM",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Coffee_under_native_species_shade2_DM.jpg",
    usedFor: "About hero, gallery",
  },
  {
    title: "Green coffee beans",
    creator: "Michael Allen Smith, INeedCoffee",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Green_Coffee_Beans_(4075921494).jpg",
    usedFor: "Gallery hero",
  },
  {
    title: "Green bean coffee",
    creator: "DeaPeaJay",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    source: "https://commons.wikimedia.org/wiki/File:Green_Bean_Coffee.jpg",
    usedFor: "Green coffee category, gallery",
  },
  {
    title: "Roasted coffee beans",
    creator: "Sridhar Rao",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Coffee_beans_roasted.jpg",
    usedFor: "FAQs hero, roasted coffee category, gallery",
  },
  {
    title: "Shipping containers, Port of Rotterdam",
    creator: "AgainErick",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Shipping_container_stacks_-_Port_of_Rotterdam_-_2014_-_2.jpg",
    usedFor: "Contact hero, logistics service, about section",
  },
  {
    title: "Sorghum field",
    creator: "Ll1324",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Sorghum_Field_El_Salvador_2011.jpg",
    usedFor: "Not-found page",
  },
  {
    title: "Barley field in evening sun",
    creator: "Gerda Arendt",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Barley_field,_Ehrenbach,_evening_sun.jpg",
    usedFor: "Principles band, gallery",
  },
  {
    title: "Teff village, Oromia",
    creator: "Timothy A. Gonsalves",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Teff_Village_Oromia_Ethiopia_Oct19_R16_02202.jpg",
    usedFor: "Teff category, gallery",
  },
  {
    title: "Wheat grain",
    creator: "WordPress Photo Directory contributor",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://wordpress.org/photos/",
    usedFor: "Wheat & barley category, gallery",
  },
  {
    title: "Maize kernels",
    creator: "Judgefloro",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Jf8678Maize_kernels_Lubaofvf_02.JPG",
    usedFor: "Maize & sorghum category, gallery",
  },
  {
    title: "White sesame seeds",
    creator: "Sanjay ach",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    source: "https://commons.wikimedia.org/wiki/File:Sa_white_sesame_seeds.jpg",
    usedFor: "Pulses & oilseeds category, gallery",
  },
  {
    title: "Women drying coffee",
    creator: "Philip Asedri Dradrio",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Women_drying_coffee.jpg",
    usedFor: "Sourcing service, about section",
  },
  {
    title: "Barley grain in hands",
    creator: "Carl Davies, CSIRO",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    source: "https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_10909_BARLEYmax_grain.jpg",
    usedFor: "Quality service, about section",
  },
  {
    title: "Red lentils",
    creator: "Fumikas Sagisavas",
    license: "CC0 1.0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Red_lentils_(1).jpg",
    usedFor: "Gallery",
  },
];

export default function CreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="Credits"
        title="Image credits"
        lead="The photography on this site is representative. Sources and licences are listed below."
        image="/images/band-landscape.jpg"
        size="compact"
      />

      <Section>
        <div className="max-w-[64rem]">
          <p className="type-lead text-steel">
            CC BY and CC BY-SA images are used under the terms of their respective licences. Public-domain and CC0
            images are used without attribution requirements. Images may have been cropped or resized for layout;
            adaptations of CC BY-SA images remain available under the same licence. These photographs are
            placeholders and should be replaced with Nigat Export&apos;s own photography before launch.
          </p>

          <ul className="mt-12 border-t border-line">
            {CREDITS.map((credit) => (
              <li key={credit.title} className="border-b border-line py-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <div>
                    <p className="type-h4">{credit.title}</p>
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
                      Source
                    </a>
                  </p>
                </div>
                <p className="mt-3 text-sm text-steel">Used for: {credit.usedFor}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <TextLink href={ROUTES.home}>Back to home</TextLink>
          </div>
        </div>
      </Section>
    </>
  );
}
