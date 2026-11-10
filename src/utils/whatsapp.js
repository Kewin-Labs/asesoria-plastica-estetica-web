import { siteConfig } from "../config/site.js";

/**
 * Genera un enlace de WhatsApp con el número oficial y un mensaje codificado.
 * Formato: https://wa.me/573186867465?text=MENSAJE_CODIFICADO
 */
export function buildWhatsAppUrl(message = siteConfig.messages.general) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function serviceWhatsAppUrl(serviceName) {
  return buildWhatsAppUrl(siteConfig.messages.service(serviceName));
}
