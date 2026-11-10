# Datos pendientes, verificación y segunda fase

Sitio web — Asesoría Plástica y Estética · Versión 1.0 · Octubre de 2026

## 1. Datos pendientes de confirmación

### Críticos (antes de publicar en el dominio oficial)

| # | Dato | Dónde se configura | Estado actual en el sitio |
|---|---|---|---|
| 1 | Archivo original del logotipo (SVG o PNG con fondo transparente) | `public/` + `siteConfig.logo` | Se muestra el nombre en texto |
| 2 | Validación del catálogo: servicios ofrecidos, profesionales responsables y sedes | `src/data/services.js` (`validated`, `cities`) | 12 servicios preliminares, sin ciudad asignada |
| 3 | Revisión de las descripciones de cada servicio por un profesional de la salud | `src/data/services.js` | Textos generales y prudentes, sin promesas |
| 4 | Política de tratamiento de datos personales (Ley 1581 de 2012) | `siteConfig.legal.privacyUrl` | "En preparación", sin enlace |
| 5 | Fotografías profesionales (hero y servicios) con derechos de uso | `public/images/` | Ilustraciones gráficas provisionales |

### Importantes

| # | Dato | Dónde |
|---|---|---|
| 6 | Correo electrónico de contacto | `siteConfig.email` (hoy oculto) |
| 7 | Dirección, horario, teléfono y Google Maps de cada sede | `src/data/locations.js` |
| 8 | Servicios disponibles por sede | `locations.js → services` |
| 9 | Dominio definitivo (para canonical, og:url, og:image y sitemap) | `index.html`, `public/robots.txt` |
| 10 | Términos y condiciones | `siteConfig.legal.termsUrl` |
| 11 | Imagen para redes sociales (1200 × 630 px) | `public/og-image.jpg` + `index.html` |

### Para revisar con la empresa

- **"Vacunterapia"**: en el sitio se escribió **"Vacumterapia"**, que es la forma más usada. Confirmar el nombre que usa la empresa.
- **"Tratamientos relacionados con músculo estriado"**: el nombre es poco claro para el público. Confirmar si se refiere a tonificación muscular, a tratamiento de estrías u otro servicio.
- **"Levantamiento de glúteos"**: se presentó como protocolo **no quirúrgico**. Confirmar que no corresponde a un procedimiento quirúrgico.
- **"Vitamina C"**: confirmar la vía de aplicación (tópica, mesoterapia, sueroterapia) y quién la realiza.
- **Nombre comercial**: el sitio usa "Asesoría Plástica y Estética" (singular), como indica el brief. En otros documentos aparece "Asesorías Plásticas y Estéticas". Unificar.

## 2. Verificación realizada

| Prueba | Resultado |
|---|---|
| Compilación del código (esbuild, el mismo motor que usa Vite) | Sin errores |
| Enlaces de WhatsApp | 23 enlaces, todos al 573186867465, todos `target="_blank"` + `rel="noopener noreferrer"` |
| Mensaje general y mensaje por servicio | Correctos y codificados con `encodeURIComponent` |
| Instagram | Enlace correcto y seguro |
| Correo vacío | No genera enlaces `mailto:` rotos |
| Filtros, "Información general", acordeón, menú móvil | Funcionan |
| Desplazamiento horizontal en 390 px y 1440 px | 0 px |
| Errores de JavaScript | Ninguno |
| Un solo `h1`, todas las imágenes con `alt` | Sí |

**No verificado todavía:** `npm install` y `npm run build` con Vite (sin acceso al registro de npm en el entorno de trabajo), y la carga de Google Fonts. Ejecutar ambos en local o en Netlify en la primera publicación.

## 3. Recomendaciones para una segunda fase (CRM y automatización)

Propuestas pendientes de aprobación, alineadas con el flujo Marketing → Lead → WhatsApp → IA → CRM → Venta.

1. **Medición desde el primer día:** activar Google Analytics 4 (`VITE_GA_ID`) y Search Console. El sitio ya registra el evento `whatsapp_click` con la ubicación de cada botón. Agregar el Pixel de Meta cuando haya campañas.
2. **Atribución de origen:** agregar parámetros UTM a los enlaces de campañas e incluir un código corto de origen en el mensaje de WhatsApp (p. ej. "Ref: IG-HIDRO"), para que el CRM pueda atribuir cada conversación al canal y a la campaña.
3. **WhatsApp Business API + Chatwoot:** centralizar las conversaciones de todas las sedes en una bandeja compartida con asignación por ciudad y por asesor.
4. **n8n:** registrar cada lead en el CRM con fuente, servicio de interés y ciudad; enviar recordatorios de valoración y hacer seguimiento de leads sin respuesta.
5. **Agente de IA para la primera respuesta:** solo preguntas frecuentes, horarios y calificación (servicio y ciudad). Escala siempre a un humano y **nunca** diagnostica, recomienda tratamientos ni promete resultados.
6. **Formulario de contacto:** solo cuando exista un sistema real de envío y una política de datos publicada, con consentimiento explícito y sin pedir datos de salud ni fotografías.
7. **Páginas por ciudad y por servicio:** cuando se confirmen las sedes, mejoran el SEO local (Bucaramanga, Bogotá, Medellín).
8. **Páginas internacionales (EE. UU., España):** activar `src/data/markets.js` solo después de validar la regulación de publicidad en salud, el idioma, la moneda y la forma real de atención de cada mercado.
