import { useMemo, useState } from "react";
import { categories, activeServices } from "../data/services.js";
import ServiceCard from "./ServiceCard.jsx";

const ALL = "todos";

export default function Services() {
  const [filter, setFilter] = useState(ALL);

  const visibleCategories = useMemo(
    () => categories.filter((c) => activeServices.some((s) => s.category === c.id)),
    []
  );

  const groups = visibleCategories
    .filter((c) => filter === ALL || c.id === filter)
    .map((c) => ({ ...c, items: activeServices.filter((s) => s.category === c.id) }));

  return (
    <section id="servicios" className="section services" aria-labelledby="services-title">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Servicios</p>
          <h2 id="services-title" className="section__title">
            Tratamientos y procedimientos
          </h2>
          <p className="section__lead">
            Explora nuestro catálogo y consulta por WhatsApp los precios, la disponibilidad y la ciudad
            donde se ofrece cada servicio.
          </p>
        </header>

        <div className="filters reveal" role="group" aria-label="Filtrar servicios por categoría">
          <button
            type="button"
            className={`filter ${filter === ALL ? "is-active" : ""}`}
            aria-pressed={filter === ALL}
            onClick={() => setFilter(ALL)}
          >
            Todos
          </button>
          {visibleCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`filter ${filter === c.id ? "is-active" : ""}`}
              aria-pressed={filter === c.id}
              onClick={() => setFilter(c.id)}
            >
              {c.title}
            </button>
          ))}
        </div>

        {groups.map((group) => (
          <div key={group.id} className="service-group">
            <div className="service-group__head">
              <h3 className="service-group__title">{group.title}</h3>
              <p className="service-group__desc">{group.description}</p>
            </div>
            {group.surgical && (
              <p className="notice" role="note">
                Los procedimientos quirúrgicos requieren valoración médica especializada, exámenes previos
                y consentimiento informado. La decisión sobre su realización corresponde al profesional.
              </p>
            )}
            <div className="service-grid">
              {group.items.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        ))}

        <p className="services__note">
          La disponibilidad de cada servicio puede variar según la ciudad. Los precios se informan de forma
          personalizada.
        </p>
      </div>
    </section>
  );
}
