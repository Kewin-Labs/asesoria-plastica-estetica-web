import { buildWhatsAppUrl } from "../utils/whatsapp.js";
import { trackWhatsAppClick } from "../utils/analytics.js";
import { WhatsAppIcon } from "./Icons.jsx";

/**
 * Botón/enlace de WhatsApp reutilizable.
 * - message: texto prellenado (por defecto el mensaje general).
 * - variant: "primary" | "outline" | "ghost"
 * - trackingLabel: identificador de la ubicación del botón (para Analytics).
 */
export default function WhatsAppButton({
  children = "Consultar por WhatsApp",
  message,
  variant = "primary",
  size,
  icon = true,
  trackingLabel = "general",
  className = "",
  ariaLabel,
}) {
  const href = buildWhatsAppUrl(message);
  const classes = ["btn", `btn--${variant}`, size ? `btn--${size}` : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      data-whatsapp={trackingLabel}
      onClick={() => trackWhatsAppClick(trackingLabel)}
    >
      {icon && <WhatsAppIcon />}
      <span>{children}</span>
    </a>
  );
}
