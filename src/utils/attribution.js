/**
 * Atribución de origen (Fase 1).
 *
 * Captura los parámetros UTM y `ref` de la URL de entrada, los guarda en el
 * navegador durante 30 días y permite incluir un código de origen en el mensaje
 * de WhatsApp (p. ej. "Ref: ig-hidro"). No guarda datos personales.
 *
 * Los valores vienen de la URL, así que se sanitizan antes de usarse.
 */

const STORAGE_KEY = "apeAttribution";
const TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 días
const MAX_LEN = 40;
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "ref"];

/** Solo minúsculas, dígitos, guion y guion bajo; longitud máxima MAX_LEN. */
export function sanitizeValue(raw) {
  if (typeof raw !== "string") return "";
  return raw
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, MAX_LEN);
}

/** Lee los parámetros de origen de una cadena de búsqueda (p. ej. window.location.search). */
export function parseAttribution(search) {
  const params = new URLSearchParams(search || "");
  const data = {};
  for (const key of PARAMS) {
    const value = sanitizeValue(params.get(key) || "");
    if (value) data[key] = value;
  }
  return Object.keys(data).length ? data : null;
}

/** Código corto para el mensaje: ref explícito, o campaña, o fuente. */
export function refCode(data) {
  if (!data) return "";
  return data.ref || data.utm_campaign || data.utm_source || "";
}

/**
 * Guarda la atribución de la visita actual si la URL trae parámetros.
 * Una visita sin parámetros no sobrescribe una atribución vigente.
 */
export function captureAttribution() {
  try {
    if (typeof window === "undefined") return;
    const data = parseAttribution(window.location.search);
    if (!data) return;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ data, savedAt: Date.now() })
    );
  } catch {
    // Almacenamiento bloqueado (modo privado, políticas del navegador): el sitio sigue funcionando.
  }
}

/** Devuelve la atribución vigente (no expirada) o null. */
export function getAttribution() {
  try {
    if (typeof window === "undefined") return null;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const stored = JSON.parse(raw);
    if (!stored || typeof stored.savedAt !== "number" || !stored.data) return null;
    if (Date.now() - stored.savedAt > TTL_MS) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return stored.data;
  } catch {
    return null;
  }
}
