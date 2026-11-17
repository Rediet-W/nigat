import { SectionTitle } from "@/components/ui/SectionTitle";
import { MAP_EMBED_URL } from "@/constants/site";
import { getDictionary } from "@/i18n/server";

/** Contact page map. The pinned place is set by MAP_COORDINATES in src/constants/site.ts. */
export async function MapSection() {
  const t = await getDictionary();
  return (
    <div className="google-map">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <SectionTitle subtitle={t.map.subtitle} title={t.map.title} description={t.map.description} center />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="google-map-iframe wow fadeInUp" data-wow-delay="0.4s">
              <iframe
                src={MAP_EMBED_URL}
                title={t.map.iframeTitle}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
