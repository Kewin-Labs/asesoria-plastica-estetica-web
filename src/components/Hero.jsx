import { siteConfig } from "../config/site.js";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { ArrowIcon } from "./Icons.jsx";

export default function Hero() {
  const image = siteConfig.heroImage || "/images/hero-art.svg";
  const isPhoto = Boolean(siteConfig.heroImage);

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Asesoría Plástica y Estética</p>
          <h1 id="hero-title" className="hero__title">
            Tu bienestar, <em>tu belleza,</em> tu confianza.
          </h1>
          <p className="hero__text">
            Conoce nuestros servicios estéticos y recibe orientación personalizada para encontrar la
            alternativa adecuada para ti.
          </p>
          <div className="hero__actions">
            <WhatsAppButton size="lg" trackingLabel="hero">
              Consultar por WhatsApp
            </WhatsAppButton>
            <a href="#servicios" className="btn btn--outline btn--lg">
              <span>Descubrir nuestros servicios</span>
              <ArrowIcon />
            </a>
          </div>
        </div>

        <figure className={`hero__media ${isPhoto ? "hero__media--photo" : ""}`}>
          <img
            src={image}
            alt={isPhoto ? "Ambiente de atención de Asesoría Plástica y Estética" : ""}
            fetchpriority="high"
            decoding="async"
          />
          <span className="hero__frame" aria-hidden="true" />
        </figure>
      </div>
    </section>
  );
}
