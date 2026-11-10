/**
 * Configuración central del sitio.
 * Cualquier dato de contacto se modifica únicamente aquí.
 * Los campos vacíos ("") se ocultan automáticamente en la página.
 */
export const siteConfig = {
  name: "Asesoría Plástica y Estética",
  shortDescription:
    "Orientación personalizada sobre tratamientos estéticos, corporales y procedimientos de cirugía plástica.",

  // WhatsApp oficial: formato internacional, solo dígitos, sin "+" ni espacios.
  whatsappNumber: "573186867465",
  whatsappDisplay: "+57 318 686 7465",

  instagramUrl: "https://www.instagram.com/asesoriaplasticayestetica/",
  instagramHandle: "@asesoriaplasticayestetica",

  // PENDIENTE: correo electrónico de contacto por confirmar.
  email: "",

  // PENDIENTE: ruta del logotipo oficial dentro de /public (por ejemplo "/logo.svg" o "/logo.png").
  // Mientras esté vacío, se muestra el nombre comercial en texto.
  logo: "",
  logoAlt: "Logotipo de Asesoría Plástica y Estética",

  // PENDIENTE: fotografía principal del hero (por ejemplo "/images/hero.jpg").
  // Mientras esté vacío, se muestra una composición gráfica de marca.
  heroImage: "",

  // PENDIENTE: enlaces legales. Mientras estén vacíos, se muestran como "en preparación".
  legal: {
    privacyUrl: "",
    termsUrl: "",
  },

  messages: {
    general:
      "Hola, deseo recibir información sobre los servicios de Asesoría Plástica y Estética. ¿Podrían orientarme?",
    service: (serviceName) =>
      `Hola, deseo recibir información sobre ${serviceName}. ¿Podrían indicarme disponibilidad y precios?`,
  },

  disclaimer:
    "La información de este sitio es de carácter general y no sustituye la valoración ni la orientación de un profesional de la salud.",
};
