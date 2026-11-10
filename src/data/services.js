/**
 * Catálogo de servicios.
 *
 * ESTADO: catálogo PRELIMINAR, pendiente de validación por la empresa
 * (disponibilidad, profesionales responsables y sedes donde se ofrece cada servicio).
 *
 * Cómo editar:
 *  - Para ocultar un servicio: active: false
 *  - Para agregar uno: copia un bloque, cambia id, name, category y textos.
 *  - Para usar una fotografía real: coloca el archivo en /public/images y escribe su ruta en image.
 *    Si image está vacío, se usa la ilustración de la categoría.
 *  - validated: true cuando la empresa confirme el servicio.
 *  - cities: ciudades donde se ofrece, solo cuando esté confirmado (por ejemplo ["Bucaramanga"]).
 */

export const categories = [
  {
    id: "corporales",
    title: "Tratamientos corporales",
    description: "Protocolos no quirúrgicos orientados al cuidado del contorno corporal.",
    image: "/images/corporales.svg",
  },
  {
    id: "complementarios",
    title: "Tratamientos complementarios",
    description: "Alternativas que pueden integrarse a un plan de cuidado definido en valoración.",
    image: "/images/complementarios.svg",
  },
  {
    id: "cirugia",
    title: "Procedimientos de cirugía plástica",
    description: "Procedimientos quirúrgicos que requieren valoración médica especializada.",
    image: "/images/cirugia.svg",
    surgical: true,
  },
];

export const services = [
  // ——— Tratamientos corporales ———
  {
    id: "hidrolipoclasia",
    name: "Hidrolipoclasia",
    category: "corporales",
    summary: "Procedimiento no quirúrgico orientado al tratamiento de la grasa localizada.",
    details:
      "Combina la infiltración de una solución en la zona a tratar con la aplicación de ultrasonido. El número de sesiones, la indicación y los cuidados se definen en la valoración profesional previa.",
    image: "",
    active: true,
    validated: false,
    cities: [],
  },
  {
    id: "posthidro",
    name: "Tratamiento posthidro",
    category: "corporales",
    summary: "Sesiones de acompañamiento posteriores a la hidrolipoclasia.",
    details:
      "Conjunto de técnicas complementarias que se realizan después de la hidrolipoclasia, según el protocolo indicado por el profesional.",
    image: "",
    active: true,
    validated: false,
    cities: [],
  },
  {
    id: "maderoterapia",
    name: "Maderoterapia",
    category: "corporales",
    summary: "Técnica de masaje manual con instrumentos de madera.",
    details:
      "Utiliza piezas de madera de distintas formas y tamaños para realizar maniobras de masaje sobre zonas específicas del cuerpo. Suele integrarse a protocolos corporales.",
    image: "",
    active: true,
    validated: false,
    cities: [],
  },
  {
    id: "vacumterapia",
    name: "Vacumterapia",
    category: "corporales",
    summary: "Técnica de succión controlada aplicada sobre la piel.",
    details:
      "Emplea presión negativa mediante un equipo especializado. Se utiliza como parte de protocolos corporales y de drenaje, según la valoración.",
    image: "",
    active: true,
    validated: false,
    cities: [],
  },
  {
    id: "radiofrecuencia",
    name: "Radiofrecuencia",
    category: "corporales",
    summary: "Tecnología que aplica calor controlado en los tejidos.",
    details:
      "Se emplea en protocolos de cuidado corporal y de la piel. La frecuencia y el número de sesiones dependen de la valoración de cada persona.",
    image: "",
    active: true,
    validated: false,
    cities: [],
  },
  {
    id: "cavitacion",
    name: "Cavitación",
    category: "corporales",
    summary: "Tratamiento con ultrasonido de baja frecuencia.",
    details:
      "Se utiliza dentro de protocolos orientados a la grasa localizada. Su indicación y el número de sesiones se determinan en la valoración.",
    image: "",
    active: true,
    validated: false,
    cities: [],
  },
  {
    id: "corrientes-rusas",
    name: "Corrientes rusas",
    category: "corporales",
    summary: "Electroestimulación que genera contracciones musculares.",
    details:
      "Técnica de estimulación eléctrica empleada como complemento en protocolos de tonificación corporal, según la indicación profesional.",
    image: "",
    active: true,
    validated: false,
    cities: [],
  },
  {
    id: "levantamiento-gluteos",
    name: "Levantamiento de glúteos",
    category: "corporales",
    summary: "Protocolo corporal no quirúrgico enfocado en la zona glútea.",
    details:
      "Puede combinar distintas técnicas corporales. El protocolo y su duración se definen de forma personalizada en la valoración.",
    image: "",
    active: true,
    validated: false,
    cities: [],
  },

  // ——— Tratamientos complementarios ———
  {
    id: "carboxiterapia",
    name: "Carboxiterapia",
    category: "complementarios",
    summary: "Aplicación controlada de dióxido de carbono (CO₂) medicinal.",
    details:
      "Se realiza mediante microinyecciones en zonas específicas, después de una valoración profesional que determina su indicación.",
    image: "",
    active: true,
    validated: false,
    cities: [],
  },
  {
    id: "vitamina-c",
    name: "Vitamina C",
    category: "complementarios",
    summary: "Tratamiento con vitamina C dentro de un plan de cuidado.",
    details:
      "La forma de aplicación y su indicación se definen en la valoración. Consulta con nuestros asesores para conocer los detalles.",
    image: "",
    active: true,
    validated: false,
    cities: [],
  },
  {
    id: "musculo-estriado",
    name: "Tratamientos de músculo estriado",
    category: "complementarios",
    summary: "Tratamientos complementarios relacionados con el músculo estriado.",
    details:
      "Nuestros asesores pueden darte información general sobre este tratamiento y orientarte para solicitar una valoración.",
    image: "",
    active: true,
    validated: false,
    cities: [],
  },

  // ——— Cirugía plástica ———
  {
    id: "lipoescultura-vaser",
    name: "Lipoescultura VASER",
    category: "cirugia",
    summary: "Procedimiento quirúrgico que utiliza tecnología de ultrasonido VASER.",
    details:
      "Es un procedimiento de cirugía plástica. Requiere valoración médica especializada, exámenes previos, información sobre riesgos y cuidados, y firma del consentimiento informado.",
    image: "",
    active: true,
    validated: false,
    surgical: true,
    cities: [],
  },
];

export const activeServices = services.filter((s) => s.active);

export function getCategory(id) {
  return categories.find((c) => c.id === id);
}
