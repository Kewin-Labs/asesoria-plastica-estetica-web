/**
 * Google Analytics 4 — opcional.
 * Solo se carga si existe la variable de entorno VITE_GA_ID con un identificador real.
 * No se incluye ningún identificador por defecto.
 */
export function initAnalytics() {
  const id = import.meta.env.VITE_GA_ID;
  if (!id || typeof window === "undefined") return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
}

/** Registra clics en WhatsApp como evento, si Analytics está activo. */
export function trackWhatsAppClick(location) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", { location });
  }
}
