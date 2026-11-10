import { siteConfig } from "../config/site.js";

/**
 * Muestra el logotipo oficial si está configurado (siteConfig.logo).
 * Si no, muestra el nombre comercial en texto. No es una versión del logotipo.
 */
export default function Logo({ className = "" }) {
  if (siteConfig.logo) {
    return (
      <img
        src={siteConfig.logo}
        alt={siteConfig.logoAlt}
        className={`logo-img ${className}`}
        decoding="async"
      />
    );
  }

  return (
    <span className={`wordmark ${className}`}>
      <span className="wordmark__top">Asesoría</span>
      <span className="wordmark__bottom">Plástica y Estética</span>
    </span>
  );
}
