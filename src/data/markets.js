/**
 * Mercados internacionales FUTUROS.
 *
 * Esta estructura prepara futuras páginas de destino para campañas.
 * NO representa sedes existentes. Mientras enabled sea false, no se muestra nada en el sitio.
 *
 * Al activar un mercado se deberá validar: idioma y moneda, regulación de publicidad
 * de servicios de salud del país, tratamiento de datos personales, canales de contacto
 * y la forma real de atención (por ejemplo, pacientes que viajan a Colombia).
 */
export const markets = [
  {
    id: "us",
    country: "Estados Unidos",
    locale: "en-US",
    language: "en",
    currency: "USD",
    enabled: false,
    path: "/us",
    headline: "",
    description: "",
  },
  {
    id: "es",
    country: "España",
    locale: "es-ES",
    language: "es",
    currency: "EUR",
    enabled: false,
    path: "/es",
    headline: "",
    description: "",
  },
];
