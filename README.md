# Diego Pineda — Portfolio (D.A.P.C. SYSTEM v7.30)

[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

Portafolio web personal e interactivo de **Diego Alessandro Pineda Calagua** ([@zentoo31](https://github.com/zentoo31)). Diseñado bajo una estética retro-futurista de terminal y sistema operativo ("D.A.P.C. SYSTEM v7.30"), con fondo espacial dinámico, paleta oscura y acentos verde terminal.

> **Idioma / Language:**
> [Español](#español) · [English](#english)

---

<a id="español"></a>
## Español

### Propósito del Proyecto
Este repositorio alberga el sitio web personal y portafolio profesional de Diego Alessandro Pineda Calagua, estudiante de Ingeniería de Sistemas en Perú. El sitio tiene como objetivo:
- Presentar su perfil profesional, formación académica y certificaciones en redes y ciberseguridad otorgadas por Cisco.
- Exhibir proyectos destacados en desarrollo web, aplicaciones de escritorio, herramientas CLI y aplicaciones móviles con inteligencia artificial.
- Ofrecer un canal de contacto directo y acceso a sus perfiles sociales (LinkedIn, GitHub).
- Proporcionar una experiencia visual inmersiva mediante una interfaz temática de sistema operativo (OS dashboard) con reloj en tiempo real, barra de estado de red, animaciones fluidas y navegación reactiva.

---

### Stack Tecnológico

| Categoría | Tecnología | Versión / Detalle |
| :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) | `16.3.3` (App Router, Turbopack, React Compiler habilitado) |
| **Librería Core** | [React](https://react.dev/) | `19.2.8` |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) | `^5` (Tipado estricto) |
| **Estilos** | [Tailwind CSS](https://tailwindcss.com/) | `v4` (`@tailwindcss/postcss`, `tw-animate-css`) |
| **Animaciones** | [Motion](https://motion.dev/) | `^13.1.1` (Transiciones fluidas y fondo espacial dinámico) |
| **Componentes e Iconos** | [Lucide React](https://lucide.dev/) / Base UI | `@base-ui/react`, `shadcn`, `clsx`, `tailwind-merge`, `cva` |
| **Tipografía** | [Geist Sans & Mono](https://vercel.com/font) | Integradas vía `next/font/google` (`geist`) |
| **Linter** | [ESLint](https://eslint.org/) | `^9` (`eslint-config-next`) |

---

### Rutas Actuales

La aplicación utiliza Next.js App Router organizado bajo una agrupación de rutas `src/app/(pages)/`:

* **`/` (Raíz)**
  Redirecciona automáticamente del lado del servidor a `/overview` mediante `redirect("/overview")` en `src/app/page.tsx`.

* **`/overview` (Resumen)**
  Vista principal del portafolio. Incluye:
  - Presentación biográfica y fotografía de perfil (`/photo.jpg`).
  - Tarjetas métricas de resumen: Tecnologías (`08+`), Experiencia (`1A`) y Enfoque (`100%`).
  - Sección **Estudios**: Ingeniería de Sistemas (2022 — Actualidad).
  - Sección **Certificados**: Certificaciones verificadas de Cisco (CCNA, CyberOps Associate, Linux Essentials, Networking Fundamentals).

* **`/projects` (Proyectos)**
  Muestra el catálogo de proyectos con capturas de pantalla, descripción, tecnologías y enlaces a repositorios y demostraciones en vivo:
  - **Portfolio personal**: Sitio web personal en Next.js, React, TypeScript y Tailwind CSS.
  - **Starter**: Aplicación de escritorio creada con Electron, React, TypeScript y Vite para automatizar tareas posteriores a la instalación de Windows.
  - **db-pos-creator**: Herramienta CLI en Python (BeautifulSoup) para web scraping de productos y generación de bases de datos (MongoDB, PostgreSQL, MySQL, SQL Server).
  - **RouteIQ**: Aplicación móvil Android (Java, Firebase) para información y pago de rutas de transporte público integrada con un chatbot GEMINI AI.

* **`/contact` (Contacto)**
  Sección de contacto directo con enlaces a ubicación (Perú), correo electrónico, LinkedIn y GitHub, además del formulario de contacto interactivo.

---

### Comportamiento del Formulario de Contacto (mailto)

> **Nota importante:** Este proyecto **no utiliza backend, base de datos ni API de envío de correo en el servidor**.

- El formulario en `/contact` captura los campos `Nombre`, `Email` y `Mensaje`.
- Al pulsar **"Enviar mensaje"**, el controlador del formulario intercepta el envío (`handleSubmit`), codifica los valores con `encodeURIComponent` y ejecuta:
  ```ts
  window.location.href = `mailto:zentoo31@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  ```
- Esto invoca directamente el cliente de correo predeterminado del sistema operativo del visitante (como Outlook, Apple Mail, Thunderbird o Gmail) con el destinatario, asunto y mensaje prellenados.
- Asimismo, la página ofrece accesos directos a:
  - **Email directo:** `mailto:zentoo31@gmail.com`
  - **LinkedIn:** [diego-pineda-53223a21a](https://www.linkedin.com/in/diego-pineda-53223a21a/)
  - **GitHub:** [@zentoo31](https://github.com/zentoo31)

---

### Estructura del Proyecto

```text
kahawai/
├── public/                       # Archivos estáticos públicos servidos en la raíz
│   ├── screen/                   # Capturas de pantalla de los proyectos
│   │   ├── portfolio_screen.png  # Captura de Portfolio
│   │   ├── routeiq_screen.png    # Captura de RouteIQ
│   │   └── starter_screen.png    # Captura de Starter
│   ├── photo.jpg                 # Fotografía de perfil principal
│   ├── icon.ico / icon.svg       # Favicons del sitio
│   └── profile-placeholder.svg   # Placeholder para proyectos sin captura
├── src/
│   ├── app/                      # App Router de Next.js
│   │   ├── (pages)/              # Grupo de páginas que comparten el shell OS
│   │   │   ├── contact/page.tsx  # Página /contact
│   │   │   ├── overview/page.tsx # Página /overview
│   │   │   └── projects/page.tsx # Página /projects
│   │   ├── globals.css           # Configuración de Tailwind CSS y temas de color
│   │   ├── layout.tsx            # RootLayout con TopBar, Sidebar y SpaceBackground
│   │   ├── page.tsx              # Raíz con redirección a /overview
│   │   ├── robots.ts             # Metadatos para generación de robots.txt
│   │   └── sitemap.ts            # Metadatos para generación de sitemap.xml
│   ├── assets/                   # Recursos gráficos importados en componentes
│   │   ├── cisco_logo.webp       # Logo de Cisco para certificados
│   │   ├── focus.gif             # Animación para tarjeta de enfoque
│   │   ├── mc_experiencie.gif    # Animación para tarjeta de experiencia
│   │   └── tecnologia.gif        # Animación para tarjeta de tecnologías
│   ├── components/               # Componentes de React
│   │   ├── os/                   # Elementos del sistema operativo (interfaz OS)
│   │   │   ├── sidebar.tsx       # Barra lateral de navegación y enlaces sociales
│   │   │   └── topBar.tsx        # Barra superior con estado del sistema y reloj
│   │   ├── pages/                # Vistas y componentes de contenido por página
│   │   │   ├── contact-content.tsx   # Contenido y formulario de contacto
│   │   │   ├── overview-content.tsx  # Contenido del resumen profesional
│   │   │   └── projects-content.tsx  # Cuadrícula y presentación de proyectos
│   │   └── ui/                   # Componentes de interfaz reutilizables
│   │       ├── button.tsx            # Botón con variantes
│   │       ├── clock.tsx             # Reloj en vivo (hora peruana es-PE)
│   │       ├── overview-card.tsx     # Tarjeta métrica de resumen
│   │       ├── project-card.tsx      # Tarjeta individual de proyecto
│   │       └── space-background.tsx  # Animación de estrellas espaciales en segundo plano
│   ├── data/                     # Datos estáticos del portafolio
│   │   ├── contact.ts            # Opciones y enlaces de contacto
│   │   ├── overview-cards.json   # Tarjetas métricas de la vista general
│   │   ├── overview.ts           # Información académica y certificados de Cisco
│   │   └── projects.json         # Listado completo de proyectos y metadatos
│   ├── i18n/                     # Internacionalización y diccionarios
│   │   ├── dictionaries.ts       # Diccionarios de textos bilingües (es / en)
│   │   ├── language-provider.tsx # Context Provider para cambio de idioma
│   │   └── types.ts              # Definición de tipos de diccionario
│   └── lib/                      # Funciones auxiliares y utilidades
│       └── utils.ts              # Utilidad `cn` para merge de clases Tailwind
├── next.config.ts                # Configuración de Next.js (React Compiler habilitado)
├── package.json                  # Dependencias y scripts del proyecto
├── postcss.config.mjs            # Configuración de PostCSS para Tailwind v4
└── tsconfig.json                 # Configuración del compilador de TypeScript
```

---

### Ubicación de Datos y Recursos (Data & Assets)

Si deseas actualizar el contenido del portafolio o sustituir imágenes, consulta las siguientes ubicaciones:

* **Información y Proyectos:**
  - `src/data/projects.json`: Proyectos destacados (títulos, descripciones, tecnologías, capturas y enlaces).
  - `src/data/overview-cards.json`: Métricas de la pantalla principal (tecnologías, experiencia, mentalidad/enfoque).
  - `src/data/overview.ts`: Formación académica y certificados de Cisco (CCNA, CyberOps, etc.).
  - `src/data/contact.ts`: Datos de contacto (correo, enlaces a LinkedIn y GitHub).

* **Imágenes y Recursos Gráficos:**
  - `public/photo.jpg`: Fotografía del autor mostrada en `/overview`.
  - `public/screen/`: Capturas de pantalla utilizadas en las tarjetas de proyectos (`portfolio_screen.png`, `routeiq_screen.png`, `starter_screen.png`).
  - `src/assets/`: Logotipos y GIFs animados empleados dentro de componentes (`cisco_logo.webp`, `tecnologia.gif`, `focus.gif`, `mc_experiencie.gif`).

---

### Comandos Disponibles

En el directorio del proyecto se pueden ejecutar los siguientes comandos mediante npm:

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor de desarrollo local (Next.js con hot reload en http://localhost:3000)
npm run dev

# 3. Ejecutar el análisis estático de código (ESLint)
npm run lint

# 4. Compilar la aplicación para producción (optimización de assets y React Compiler)
npm run build

# 5. Iniciar el servidor de producción (requiere haber ejecutado 'npm run build' previamente)
npm start
```

> **Aviso sobre pruebas:** El proyecto **no cuenta con una suite de pruebas automatizadas configurada** (no existen scripts de test en `package.json`).

---

### Despliegue

La aplicación está lista para desplegarse en plataformas compatibles con Next.js 16:

1. **Despliegue en Vercel (Recomendado):**
   - Importar el repositorio en [Vercel](https://vercel.com/).
   - El framework es detectado automáticamente como **Next.js**.
   - Comando de compilación: `npm run build`.
   - Directorio de salida: `.next` (predeterminado).
   - No se requieren variables de entorno obligatorias para el funcionamiento estándar del sitio.

2. **Despliegue en Servidores Propios / Contenedores:**
   - Requiere entorno con **Node.js 20+** o superior.
   - Ejecutar la secuencia estándar:
     ```bash
     npm install --frozen-lockfile
     npm run build
     npm start
     ```
   - El servicio responderá por defecto en el puerto `3000` (configurable con la variable `PORT`).

---

### Arquitectura Técnica y Mantenimiento

#### Arquitectura de la Aplicación
- **Límites Servidor/Cliente (RSC & Client Components):** El shell del layout (`RootLayout` en `src/app/layout.tsx`) y las páginas de ruta (`overview`, `projects`, `contact`) se renderizan de forma estática en el servidor para optimizar el SEO y la velocidad de carga inicial. Los componentes interactivos (`TopBar`, `Sidebar`, `SpaceBackground`, `Clock`, `LanguageProvider`) incorporan la directiva `'use client'` para gestionar el estado, animaciones y eventos de interfaz.
- **Sistema de Internacionalización (i18n):** Se gestiona a través de un contexto de React (`LanguageProvider` en `src/i18n/language-provider.tsx`) que sincroniza y persiste el idioma seleccionado en `localStorage` (clave `portfolio_lang`). Los textos bilingües están completamente centralizados y fuertemente tipados en `src/i18n/dictionaries.ts`.
- **Estrategia SEO y Metadatos:** Los metadatos raíz bilingües (título, descripción, Open Graph, Twitter cards, canonical) se configuran en `src/app/layout.tsx`. Los archivos de rastreo `robots.txt` y `sitemap.xml` se generan de forma estática mediante rutas de metadatos nativas de Next.js (`src/app/robots.ts` y `src/app/sitemap.ts`), admitiendo configuración de dominio canónico vía la variable de entorno `NEXT_PUBLIC_SITE_URL`.

#### Guía de Mantenimiento
- **Actualización de Textos y Traducciones:** Modificar o incorporar claves en `src/i18n/dictionaries.ts`, asegurando la correspondencia entre los objetos `es` y `en` de acuerdo con la interfaz `Dictionary` en `src/i18n/types.ts`.
- **Incorporación de Proyectos:** Registrar los metadatos del nuevo proyecto en `src/i18n/dictionaries.ts` (en `projects.items` tanto en español como en inglés) y en `src/data/projects.json`. Las imágenes y capturas deben colocarse en `public/screen/`.
- **Configuración de Dominio y Producción:** Para asociar un nuevo dominio canónico en producción, establecer la variable de entorno `NEXT_PUBLIC_SITE_URL` en la plataforma de despliegue (ej. Vercel) o actualizar el fallback por defecto en `src/app/layout.tsx`, `robots.ts` y `sitemap.ts`.

---

<a id="english"></a>
## English

### Project Purpose
This repository contains the interactive personal portfolio of **Diego Alessandro Pineda Calagua**, a Systems Engineering student based in Peru. The portfolio aims to:
- Showcase his professional background, technical skills, academic studies, and verified Cisco certifications (CCNA, CyberOps Associate, Linux Essentials, Networking Fundamentals).
- Highlight featured projects spanning modern web development, desktop applications, CLI scrapers, and AI-powered mobile apps.
- Provide a clear channel for professional contact and quick access to social profiles (LinkedIn, GitHub).
- Offer an immersive user experience built around an OS/terminal aesthetic ("D.A.P.C. SYSTEM v7.30") featuring animated space backgrounds, real-time clock, system status indicators, and responsive layouts.

---

### Tech Stack

| Category | Technology | Version / Details |
| :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) | `16.3.3` (App Router, Turbopack, React Compiler enabled) |
| **Core Library** | [React](https://react.dev/) | `19.2.8` |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5` (Strict typing) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `v4` (`@tailwindcss/postcss`, `tw-animate-css`) |
| **Animations** | [Motion](https://motion.dev/) | `^13.1.1` (Smooth UI animations & dynamic starfield) |
| **UI & Icons** | [Lucide React](https://lucide.dev/) / Base UI | `@base-ui/react`, `shadcn`, `clsx`, `tailwind-merge`, `cva` |
| **Fonts** | [Geist Sans & Mono](https://vercel.com/font) | Loaded via `next/font/google` (`geist`) |
| **Linter** | [ESLint](https://eslint.org/) | `^9` (`eslint-config-next`) |

---

### Current Routes

The site uses the Next.js App Router organized inside `src/app/(pages)/`:

* **`/` (Root)**
  Server-side redirect to `/overview` defined in `src/app/page.tsx` (`redirect("/overview")`).

* **`/overview` (Overview / Resumen)**
  Main landing view presenting:
  - Personal bio and profile photo (`/photo.jpg`).
  - Key metric cards: Technologies (`08+`), Experience (`1A`), and Mindset/Focus (`100%`).
  - **Education**: Systems Engineering (2022 — Present).
  - **Certifications**: Verified Cisco badges (CCNA, CyberOps Associate, Linux Essentials, Networking Fundamentals).

* **`/projects` (Projects / Proyectos)**
  Showcases real-world projects with descriptions, technology badges, screenshots, and live/repository links:
  - **Personal Portfolio**: Next.js, React, TypeScript, and Tailwind CSS portfolio website.
  - **Starter**: Desktop utility developed with Electron, React, TypeScript, and Vite to automate post-installation Windows tasks.
  - **db-pos-creator**: Python CLI scraper using BeautifulSoup to scrape grocery data from Plaza Vea and generate relational/document databases.
  - **RouteIQ**: Android mobile application (Java, Firebase) for transit routes and payments with integrated GEMINI AI assistant.

* **`/contact` (Contact / Contacto)**
  Direct contact channels (Email, LinkedIn, GitHub, Location: Peru) and an interactive contact form.

---

### Contact Form Behavior (mailto)

> **Important Note:** This portfolio **does not use a backend, database, or server-side mail delivery API**.

- The contact form on `/contact` collects `Name`, `Email`, and `Message`.
- Upon submitting the form (`handleSubmit`), the handler builds a formatted URL with `encodeURIComponent` and executes:
  ```ts
  window.location.href = `mailto:zentoo31@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  ```
- This triggers the visitor's default email client (such as Outlook, Apple Mail, Thunderbird, or webmail) with pre-populated recipient, subject line, and message body.
- Direct contact links are also available:
  - **Email:** `mailto:zentoo31@gmail.com`
  - **LinkedIn:** [diego-pineda-53223a21a](https://www.linkedin.com/in/diego-pineda-53223a21a/)
  - **GitHub:** [@zentoo31](https://github.com/zentoo31)

---

### Project Structure

```text
kahawai/
├── public/                       # Static public assets served from root
│   ├── screen/                   # Project preview screenshots
│   │   ├── portfolio_screen.png  # Portfolio screenshot
│   │   ├── routeiq_screen.png    # RouteIQ screenshot
│   │   └── starter_screen.png    # Starter screenshot
│   ├── photo.jpg                 # Profile picture
│   ├── icon.ico / icon.svg       # Site icons
│   └── profile-placeholder.svg   # Placeholder graphic
├── src/
│   ├── app/                      # Next.js App Router root
│   │   ├── (pages)/              # Route group sharing the OS shell layout
│   │   │   ├── contact/page.tsx  # /contact route
│   │   │   ├── overview/page.tsx # /overview route
│   │   │   └── projects/page.tsx # /projects route
│   │   ├── globals.css           # Tailwind CSS imports and custom themes
│   │   ├── layout.tsx            # Root layout containing TopBar, Sidebar, SpaceBackground
│   │   ├── page.tsx              # Root route redirecting to /overview
│   │   ├── robots.ts             # Metadata route generating robots.txt
│   │   └── sitemap.ts            # Metadata route generating sitemap.xml
│   ├── assets/                   # Static graphics imported inside components
│   │   ├── cisco_logo.webp       # Cisco logo for certificates
│   │   ├── focus.gif             # Animated graphic for focus card
│   │   ├── mc_experiencie.gif    # Animated graphic for experience card
│   │   └── tecnologia.gif        # Animated graphic for technology card
│   ├── components/               # React components
│   │   ├── os/                   # OS shell layout elements
│   │   │   ├── sidebar.tsx       # Navigation bar & social links
│   │   │   └── topBar.tsx        # System header bar & live clock
│   │   ├── pages/                # Page content modules
│   │   │   ├── contact-content.tsx   # Contact page view & mailto form
│   │   │   ├── overview-content.tsx  # Overview page content
│   │   │   └── projects-content.tsx  # Projects showcase view
│   │   └── ui/                   # Modular UI components
│   │       ├── button.tsx            # Styled button component
│   │       ├── clock.tsx             # Real-time clock (es-PE locale)
│   │       ├── overview-card.tsx     # Stat metric card component
│   │       ├── project-card.tsx      # Project showcase card
│   │       └── space-background.tsx  # Starfield animated background
│   ├── data/                     # Local data definitions
│   │   ├── contact.ts            # Contact options and metadata
│   │   ├── overview-cards.json   # Overview metric cards data
│   │   ├── overview.ts           # Education and Cisco certificates data
│   │   └── projects.json         # Featured projects details and links
│   ├── i18n/                     # Internationalization and localized dictionaries
│   │   ├── dictionaries.ts       # Bilingual translation dictionaries (es / en)
│   │   ├── language-provider.tsx # React Context provider for language state
│   │   └── types.ts              # Dictionary TypeScript definitions
│   └── lib/                      # Helper utilities
│       └── utils.ts              # `cn` className merger helper
├── next.config.ts                # Next.js configuration (React Compiler enabled)
├── package.json                  # Scripts and dependencies
├── postcss.config.mjs            # PostCSS configuration for Tailwind v4
└── tsconfig.json                 # TypeScript compiler options
```

---

### Data & Assets Locations

To customize or update portfolio data and assets:

* **Data Sources:**
  - `src/data/projects.json`: Featured projects (titles, descriptions, stack tags, images, URLs).
  - `src/data/overview-cards.json`: Metric cards on overview (tech count, experience, focus).
  - `src/data/overview.ts`: Academic education and Cisco certificates data.
  - `src/data/contact.ts`: Direct contact links (email, LinkedIn, GitHub).

* **Static Assets:**
  - `public/photo.jpg`: Main author photo shown in `/overview`.
  - `public/screen/`: Screenshots displayed on project cards (`portfolio_screen.png`, `routeiq_screen.png`, `starter_screen.png`).
  - `src/assets/`: Media assets imported by UI components (`cisco_logo.webp`, `tecnologia.gif`, `focus.gif`, `mc_experiencie.gif`).

---

### Available Commands

The following commands are defined in `package.json`:

```bash
# Install dependencies
npm install

# Start development server (Next.js with fast refresh at http://localhost:3000)
npm run dev

# Run static code analysis with ESLint
npm run lint

# Build the project for production (Next.js production bundle with React Compiler)
npm run build

# Start the production server (after running npm run build)
npm start
```

> **Testing Note:** There is currently **no automated testing framework or test command configured** in this project.

---

### Deployment Notes

This application is ready for deployment on any Next.js 16 compatible hosting environment:

1. **Vercel (Recommended):**
   - Connect the repository to [Vercel](https://vercel.com/).
   - Framework preset is automatically detected as **Next.js**.
   - Build Command: `npm run build`.
   - Output Directory: `.next` (default).
   - No custom environment variables are required for standard operation.

2. **Self-Hosted / Container Environments:**
   - Requires **Node.js 20+**.
   - Build and start using:
     ```bash
     npm install --frozen-lockfile
     npm run build
     npm start
     ```
   - By default, Next.js listens on port `3000` (customizable via the `PORT` environment variable).

---

### Technical Architecture & Maintenance

#### Application Architecture
- **Server/Client Boundaries (RSC & Client Components):** The layout shell (`RootLayout` in `src/app/layout.tsx`) and route pages (`overview`, `projects`, `contact`) are statically prerendered server components for optimized SEO performance and initial load speed. Interactive interface elements (`TopBar`, `Sidebar`, `SpaceBackground`, `Clock`, `LanguageProvider`) use `'use client'` to manage state, animations, and user interactions.
- **Internationalization (i18n) Architecture:** Driven by a React context provider (`LanguageProvider` in `src/i18n/language-provider.tsx`) that synchronizes and persists the active locale in `localStorage` under key `portfolio_lang`. Localized strings are strictly typed and centralized in `src/i18n/dictionaries.ts`.
- **SEO & Metadata Architecture:** Comprehensive bilingual root metadata (title, description, Open Graph, Twitter cards, canonical) is configured in `src/app/layout.tsx`. Search engine discovery files `robots.txt` and `sitemap.xml` are statically generated using native Next.js App Router metadata route handlers (`src/app/robots.ts` and `src/app/sitemap.ts`), supporting canonical domain overrides via `NEXT_PUBLIC_SITE_URL`.

#### Maintenance Guide
- **Updating Copy and Translations:** Edit or add keys in `src/i18n/dictionaries.ts`, maintaining strict alignment between `es` and `en` definitions against the `Dictionary` interface in `src/i18n/types.ts`.
- **Adding or Modifying Projects:** Register new project entries in `src/i18n/dictionaries.ts` (inside `projects.items` for both English and Spanish) and in `src/data/projects.json`. Screenshot assets belong in `public/screen/`.
- **SEO & Domain Configuration:** When pointing the portfolio to a custom production domain, specify `NEXT_PUBLIC_SITE_URL` in the deployment environment variables (e.g., in Vercel project settings) or update the fallback in `src/app/layout.tsx`, `robots.ts`, and `sitemap.ts`.
