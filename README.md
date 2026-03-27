# Sonrisa Perfecta — Sitio Web Clínica Dental

Sitio web estático para la Clínica Dental Sonrisa Perfecta, construido con [Astro](https://astro.build) y listo para deployar en **Cloudflare Pages**.

## Requisitos

- Node.js v18.17.1 o superior
- npm v9 o superior

---

## Instalación

Clona el repositorio e instala las dependencias:

```bash
npm install
```

---

## Desarrollo local

Inicia el servidor de desarrollo con recarga en caliente:

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:4321](http://localhost:4321).

---

## Build para producción

Genera los archivos estáticos optimizados en la carpeta `dist/`:

```bash
npm run build
```

Para previsualizar el build localmente antes de deployar:

```bash
npm run preview
```

---

## Deploy en Cloudflare Pages

### Opción A — Desde el Dashboard de Cloudflare

1. Sube el repositorio a GitHub o GitLab.
2. En [Cloudflare Pages](https://pages.cloudflare.com), crea un nuevo proyecto y conéctalo a tu repositorio.
3. Configura los parámetros de build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `18` (en Variables de entorno: `NODE_VERSION = 18`)
4. Haz clic en **Save and Deploy**.

### Opción B — Con Wrangler CLI

```bash
npm install -g wrangler
wrangler pages deploy dist --project-name=sonrisa-perfecta
```

---

## Estructura del proyecto

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── blog/
│   │       ├── habitos-esmalte-dental.md
│   │       ├── cuando-poner-brackets.md
│   │       └── implantes-dentales-mitos.md
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── nosotros.astro
│       └── blog/
│           ├── index.astro
│           └── [slug].astro
├── astro.config.mjs
├── package.json
└── README.md
```

---

## Tecnologías utilizadas

- **Astro 4** — Framework estático con rendimiento máximo
- **CSS vanilla** — Sin frameworks adicionales, estilos inline en cada componente
- **Google Fonts** — Tipografía Inter
- **Cloudflare Pages** — Hosting estático CDN global

---

## Contacto

Clínica Dental Sonrisa Perfecta
San José, Costa Rica
📞 +506 2234-5678
