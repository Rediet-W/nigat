import { ServiceCard } from "@/features/services/components/ServiceCard";
import { SERVICES } from "@/constants/services";
import { localize } from "@/i18n/localize";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";

export async function ServicesGrid() {
  const dict = await getDictionary();
  return (
    <div className="page-services">
      <div className="container">
        <div className="row">
          {localize(SERVICES, dict.content.services).map((service, index) => (
            <div className="col-xl-3 col-md-6" key={service.id}>
              <ServiceCard service={service} delay={wowDelay(index % 8)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
