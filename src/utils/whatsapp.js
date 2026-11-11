import { siteConfig } from "../config/site.js";
import { getAttribution, refCode } from "./attribution.js";

/**
 * Genera un enlace de WhatsApp con el número oficial y un mensaje codificado.
 * Formato: https://wa.me/573186867465?text=MENSAJE_CODIFICADO
 * Si la visita llegó con UTM o ref, agrega una línea "Ref: <código>" al mensaje.
 */
export function buildWhatsAppUrl(message = siteConfig.messages.general) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  const ref = refCode(getAttribution());
  const text = ref
    ? [message, `Ref: ${ref}`].filter(Boolean).join("\n")
    : message;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function serviceWhatsAppUrl(serviceName) {
  return buildWhatsAppUrl(siteConfig.messages.service(serviceName));
}
