# Asesoría Plástica y Estética — Sitio web oficial

Landing page premium (negro y dorado) construida con **React + Vite**, lista para publicarse en **Netlify** desde **GitHub**.
Objetivo principal: generar contactos por WhatsApp (+57 318 686 7465).

---

## 1. Requisitos

- Node.js 18 o superior (recomendado 20 LTS) — https://nodejs.org
- Git — https://git-scm.com
- Cuenta en GitHub y en Netlify

## 2. Ejecutar localmente

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal (normalmente http://localhost:5173).

Para generar la versión de producción:

```bash
npm run build
npm run preview   # opcional: revisar la compilación en local
```

La compilación queda en la carpeta `dist/`.

## 3. Estructura

```
├── index.html                 Metadatos SEO y Open Graph
├── netlify.toml               Compilación, publicación y cabeceras de seguridad
├── public/
│   ├── favicon.svg            Favicon provisional (reemplazar por el del logotipo)
│   ├── robots.txt
│   └── images/                Ilustraciones provisionales (reemplazar por fotografías)
└── src/
    ├── config/site.js         ← Nombre, WhatsApp, Instagram, correo, logo, mensajes
    ├── data/services.js       ← Catálogo de servicios (editable)
    ├── data/locations.js      ← Sedes (se muestran como operativas solo si confirmed: true)
    ├── data/faq.js            ← Preguntas frecuentes
    ├── data/markets.js        ← Estructura para EE. UU. y España (desactivada)
    ├── utils/whatsapp.js      Generación de enlaces wa.me
    ├── utils/analytics.js     Google Analytics opcional (solo con VITE_GA_ID)
    ├── components/            Header, Hero, Services, ServiceCard, Trust, HowItWorks,
    │                          Locations, FAQ, FinalCTA, Footer, WhatsAppButton,
    │                          FloatingWhatsApp, Logo, Icons
    └── styles/                variables.css, global.css, sections.css
```

## 4. Tareas de edición frecuentes

| Quiero… | Archivo | Qué hacer |
|---|---|---|
| Cambiar el número de WhatsApp | `src/config/site.js` | Editar `whatsappNumber` (solo dígitos, con 57) y `whatsappDisplay` |
| Agregar el correo | `src/config/site.js` | Escribirlo en `email`. Mientras esté vacío no aparece |
| Poner el logotipo oficial | `public/` + `src/config/site.js` | Copiar el archivo (p. ej. `public/logo.svg`) y escribir `logo: "/logo.svg"` |
| Poner la foto del hero | `public/images/` + `src/config/site.js` | Copiar la foto y escribir `heroImage: "/images/hero.jpg"` |
| Ocultar un servicio | `src/data/services.js` | `active: false` |
| Agregar un servicio | `src/data/services.js` | Copiar un bloque y cambiar `id`, `name`, `category`, textos |
| Foto de un servicio | `src/data/services.js` | `image: "/images/nombre.jpg"` |
| Confirmar una sede | `src/data/locations.js` | Completar datos y poner `confirmed: true` |
| Enlazar políticas legales | `src/config/site.js` | `legal.privacyUrl` y `legal.termsUrl` |

Recomendación para fotografías: JPG o WebP, 1600 px de ancho como máximo, menos de 300 KB, con derechos de uso y autorización de las personas que aparezcan.

## 5. Publicar en GitHub

```bash
git init
git add .
git commit -m "Primera versión del sitio web"
git branch -M main
git remote add origin https://github.com/USUARIO/asesoria-plastica-estetica-web.git
git push -u origin main
```

(Antes, crea el repositorio vacío en https://github.com/new y reemplaza `USUARIO` por la cuenta correspondiente.)

## 6. Conectar con Netlify

1. Entra a https://app.netlify.com → **Add new site** → **Import an existing project**.
2. Elige **GitHub** y autoriza el acceso al repositorio.
3. Netlify leerá `netlify.toml`. Verifica:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Pulsa **Deploy**.
5. Cuando termine, abre la URL `https://NOMBRE.netlify.app` y verifica la lista de pruebas (sección 8).
6. Opcional: **Domain management** → conectar el dominio propio (Netlify emite el certificado HTTPS gratuito).

Google Analytics (opcional): en Netlify → *Site configuration* → *Environment variables*, crea `VITE_GA_ID` con el identificador real `G-…` y vuelve a desplegar.

## 7. Actualizar el sitio

Cada cambio enviado a la rama `main` se publica automáticamente:

```bash
git add .
git commit -m "Describe el cambio"
git push
```

Netlify compila y publica en uno o dos minutos. En *Deploys* puedes ver el estado o volver a una versión anterior.

## 8. Pruebas de funcionamiento (después de cada publicación)

- [ ] El botón "Agenda tu valoración" del encabezado abre WhatsApp al +57 318 686 7465.
- [ ] Los botones del hero, de "Cómo funciona", de preguntas frecuentes, de la llamada final, del pie de página y el botón flotante abren el chat correcto.
- [ ] El botón de cada servicio abre WhatsApp con el nombre del servicio en el mensaje.
- [ ] El enlace de Instagram abre @asesoriaplasticayestetica en una pestaña nueva.
- [ ] El menú móvil abre, cierra (también con Esc) y sus enlaces llevan a cada sección.
- [ ] Los filtros de servicios y el botón "Información general" funcionan.
- [ ] El acordeón de preguntas frecuentes funciona con ratón y teclado (Tab + Enter).
- [ ] No hay desplazamiento horizontal en el móvil.
- [ ] Se ve correctamente en un teléfono Android, un iPhone y un computador.
