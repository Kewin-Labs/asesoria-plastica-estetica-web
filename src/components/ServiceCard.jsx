import { useId, useState } from "react";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { siteConfig } from "../config/site.js";
import { getCategory } from "../data/services.js";
import { ChevronIcon } from "./Icons.jsx";

export default function ServiceCard({ service }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();
  const category = getCategory(service.category);
  const image = service.image || category?.image;
  const isPhoto = Boolean(service.image);

  return (
    <article className={`service-card ${service.surgical ? "service-card--surgical" : ""}`}>
      <div className="service-card__media">
        <img
          src={image}
          alt={isPhoto ? service.name : ""}
          loading="lazy"
          decoding="async"
          width="600"
          height="400"
        />
        <span className="service-card__tag">
          {service.surgical ? "Procedimiento quirúrgico" : category?.title}
        </span>
      </div>

      <div className="service-card__body">
        <h3 className="service-card__title">{service.name}</h3>
        <p className="service-card__summary">{service.summary}</p>

        <button
          type="button"
          className="service-card__more"
          aria-expanded={open}
          aria-controls={detailsId}
          onClick={() => setOpen((v) => !v)}
        >
          Información general
          <ChevronIcon className={open ? "is-rotated" : ""} />
        </button>
        <div id={detailsId} className="service-card__details" hidden={!open}>
          <p>{service.details}</p>
          {service.cities?.length > 0 && (
            <p className="service-card__cities">Disponible en: {service.cities.join(", ")}</p>
          )}
        </div>

        <WhatsAppButton
          variant="outline"
          message={siteConfig.messages.service(service.name)}
          trackingLabel={`service:${service.id}`}
          className="service-card__cta"
          ariaLabel={`Consultar por WhatsApp sobre ${service.name}`}
        >
          Consultar por WhatsApp
        </WhatsAppButton>
      </div>
    </article>
  );
}
