import { locations } from "../data/locations.js";
import { services } from "../data/services.js";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { PinIcon } from "./Icons.jsx";

export default function Locations() {
  return (
    <section id="ubicaciones" className="section locations" aria-labelledby="locations-title">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Ubicaciones</p>
          <h2 id="locations-title" className="section__title">
            Bucaramanga, Bogotá y Medellín
          </h2>
          <p className="section__lead">
            Estamos preparando la información detallada de atención en cada ciudad. Consulta por WhatsApp
            la disponibilidad en la tuya.
          </p>
        </header>

        <div className="locations__grid">
          {locations.map((loc) => {
            const locServices = services.filter((s) => loc.services.includes(s.id));
            return (
              <article key={loc.id} className="location reveal">
                <div className="location__head">
                  <PinIcon width={22} height={22} />
                  <div>
                    <h3>{loc.city}</h3>
                    <p className="location__region">{loc.region}</p>
                  </div>
                </div>

                {loc.confirmed ? (
                  <dl className="location__info">
                    {loc.address && (
                      <>
                        <dt>Dirección</dt>
                        <dd>{loc.address}</dd>
                      </>
                    )}
                    {loc.hours && (
                      <>
                        <dt>Horario</dt>
                        <dd>{loc.hours}</dd>
                      </>
                    )}
                    {loc.phone && (
                      <>
                        <dt>Teléfono</dt>
                        <dd>{loc.phone}</dd>
                      </>
                    )}
                    {locServices.length > 0 && (
                      <>
                        <dt>Servicios</dt>
                        <dd>{locServices.map((s) => s.name).join(", ")}</dd>
                      </>
                    )}
                  </dl>
                ) : (
                  <p className="location__pending">Información de atención próximamente.</p>
                )}

                <div className="location__actions">
                  {loc.confirmed && loc.mapsUrl && (
                    <a
                      href={loc.mapsUrl}
                      className="btn btn--ghost btn--sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en Google Maps
                    </a>
                  )}
                  <WhatsAppButton
                    variant="ghost"
                    size="sm"
                    message={`Hola, deseo saber si tienen atención en ${loc.city} y qué servicios están disponibles.`}
                    trackingLabel={`location:${loc.id}`}
                    ariaLabel={`Consultar por WhatsApp la atención en ${loc.city}`}
                  >
                    Consultar en {loc.city}
                  </WhatsAppButton>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
