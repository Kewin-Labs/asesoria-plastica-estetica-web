/**
 * Ubicaciones.
 *
 * Una sede solo se muestra como operativa cuando confirmed: true.
 * Los campos vacíos no se muestran.
 * services: ids de src/data/services.js disponibles en esa sede (solo datos confirmados).
 */
export const locations = [
  {
    id: "bucaramanga",
    city: "Bucaramanga",
    region: "Santander, Colombia",
    confirmed: false,
    address: "",
    hours: "",
    phone: "",
    mapsUrl: "",
    services: [],
  },
  {
    id: "bogota",
    city: "Bogotá",
    region: "Cundinamarca, Colombia",
    confirmed: false,
    address: "",
    hours: "",
    phone: "",
    mapsUrl: "",
    services: [],
  },
  {
    id: "medellin",
    city: "Medellín",
    region: "Antioquia, Colombia",
    confirmed: false,
    address: "",
    hours: "",
    phone: "",
    mapsUrl: "",
    services: [],
  },
];
