import { siteConfig } from "../config/site.js";
import { buildWhatsAppUrl } from "../utils/whatsapp.js";
import { trackWhatsAppClick } from "../utils/analytics.js";
import { locations } from "../data/locations.js";
import { navLinks } from "./Header.jsx";
import Logo from "./Logo.jsx";
import { WhatsAppIcon, InstagramIcon, MailIcon } from "./Icons.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  const confirmedLocations = locations.filter((l) => l.confirmed);
  const { privacyUrl, termsUrl } = siteConfig.legal;

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>{siteConfig.shortDescription}</p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <h2 className="footer__title">Navegación</h2>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Contacto</h2>
          <ul className="footer__contact">
            <li>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-whatsapp="footer"
                onClick={() => trackWhatsAppClick("footer")}
              >
                <WhatsAppIcon /> {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
                <InstagramIcon /> {siteConfig.instagramHandle}
              </a>
            </li>
            {siteConfig.email && (
              <li>
                <a href={`mailto:${siteConfig.email}`}>
                  <MailIcon /> {siteConfig.email}
                </a>
              </li>
            )}
          </ul>
          {confirmedLocations.length > 0 && (
            <ul className="footer__locations">
              {confirmedLocations.map((l) => (
                <li key={l.id}>
                  <strong>{l.city}</strong>
                  {l.address && <span> · {l.address}</span>}
                  {l.hours && <span> · {l.hours}</span>}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="footer__title">Legal</h2>
          <ul>
            <li>
              {privacyUrl ? (
                <a href={privacyUrl}>Política de tratamiento de datos personales</a>
              ) : (
                <span className="muted">Política de tratamiento de datos personales (en preparación)</span>
              )}
            </li>
            <li>
              {termsUrl ? (
                <a href={termsUrl}>Términos y condiciones</a>
              ) : (
                <span className="muted">Términos y condiciones (en preparación)</span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__disclaimer">{siteConfig.disclaimer}</p>
        <p>
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
