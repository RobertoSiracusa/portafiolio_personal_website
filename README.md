# Portfolio Website

Portfolio personal construido con React + TypeScript + GSAP.

## Estructura del proyecto

```
src/
├── config.ts              ← ARCHIVO PRINCIPAL DE CONTENIDO (textos, datos, links)
├── App.tsx                ← Rutas de la app (/, /myworks)
├── context/
│   └── LoadingProvider.tsx ← Pantalla de carga inicial (desktop only)
├── components/
│   ├── Landing.tsx        ← Sección hero (nombre + títulos)
│   ├── About.tsx          ← Sección "About Me"
│   ├── WhatIDo.tsx        ← Sección de habilidades
│   ├── Career.tsx         ← Timeline de experiencia
│   ├── Work.tsx           ← Proyectos (scroll horizontal desktop)
│   ├── WorkImage.tsx      ← Componente de imagen de proyecto
│   ├── TechStackNew.tsx   ← Stack tecnológico con video
│   ├── CallToAction.tsx   ← Botón "Hire Me"
│   ├── Contact.tsx        ← Formulario/info de contacto
│   ├── Navbar.tsx         ← Barra de navegación + Lenis smooth scroll
│   ├── SocialIcons.tsx    ← GitHub + LinkedIn icons
│   ├── HoverLinks.tsx     ← Efecto hover en links
│   ├── Loading.tsx        ← Animación de carga (auto-trigger, sin modelo 3D)
│   ├── Cursor.tsx         ← Cursor personalizado (desktop)
│   ├── MainContainer.tsx  ← Contenedor principal (monta secciones + GSAP timelines)
│   ├── styles/            ← CSS de cada componente
│   └── utils/
│       ├── GsapScroll.ts  ← Animaciones de scroll (GSAP + ScrollTrigger)
│       ├── initialFX.ts   ← Animaciones de entrada al cargar
│       └── splitText.ts   ← Split text para animaciones por palabra/caracter
├── utils/
│   └── textSplitter.ts   ← Motor de split text
└── pages/
    ├── MyWorks.tsx        ← Página con todos los proyectos
    └── MyWorks.css        ← Estilos de la página
```

## Dónde modificar textos y datos

### `src/config.ts` — Archivo central de contenido

Aquí se controla casi todo el texto visible del sitio:

| Sección | Campo en config | Qué controla |
|---------|----------------|--------------|
| Hero / Landing | `developer.name`, `developer.fullName` | Nombre que aparece arriba |
| Hero / Landing | `developer.title` | Título profesional |
| About | `about.title`, `about.description` | Texto de la sección "About Me" |
| Experiencia | `experiences[]` | Cards del timeline (posición, empresa, período, descripción, tecnologías) |
| Proyectos | `projects[]` | Cards de proyectos (título, categoría, tecnologías, imagen, descripción) |
| Habilidades | `skills.develop`, `skills.design` | Sección "What I Do" (título, descripción, herramientas) |
| Contacto | `contact.email`, `contact.github`, `contact.linkedin` | Links de contacto |
| Social | `social.*` | GitHub username, email, ubicación |

### Textos hardcodeados en componentes

Algunos textos están directamente en los componentes, no en config:

| Archivo | Qué tiene hardcodeado |
|---------|----------------------|
| `Landing.tsx` | "Hello! I'm", "An", "CSE Student", "Full-Stack Developer" |
| `Loading.tsx` | "Welcome", texto del marquee ("CSE Student", "Full Stack Developer") |
| `About.tsx` | "For me, Coding is art." (en morado, separado del párrafo) |
| `Navbar.tsx` | Links de navegación |
| `Contact.tsx` | Textos del formulario |
| `CallToAction.tsx` | "Hire Me →" |

### Imágenes de proyectos

- `src/assets/` — Imágenes importadas como módulos ES (Vite las hashea, sirven en Vercel):
  - `gasliLogo.jpeg` → GasliApp
  - `sodapallogo-removebg-preview.png` → SodaPal
  - `minecraftlogo.svg` → Minecraft Syncronizer
- Para agregar imagen nueva: poner archivo en `src/assets/`, importar en `config.ts`, asignar a `projects[].image`
- Si un proyecto no tiene imagen, dejar `image: ""` → `Work.tsx` skipea el render (sin icono roto)
- `public/favicon.svg` — Círculo naranja (`#fb6419`) usado como favicon

### Video

- `public/video/video.webm` — Video usado en la sección TechStack

### CV / Resume

- `public/CV_Roberto_Siracusa.pdf` — CV en PDF servido como asset estático
- Botón "RESUME" en `SocialIcons.tsx` apunta a `/CV_Roberto_Siracusa.pdf`, abre en pestaña nueva
- Para actualizar: reemplazar el PDF en `public/` (mismo nombre) o cambiar `href` en `SocialIcons.tsx:72`

## Tech stack

- **React 18** — UI
- **TypeScript** — Tipado
- **GSAP + ScrollTrigger** — Animaciones de scroll y entrada
- **Lenis** — Smooth scroll
- **Vite** — Build tool
- **React Router** — Navegación
- **Vercel** — Deploy

## Comandos

```bash
npm install      # Instalar dependencias
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
```

## Deploy

Vercel conectado al repo. `git push origin main` → Vercel build + deploy automático en `<project>.vercel.app`. PRs generan deploys preview con URL hasheada. Tab `Deployments` en GitHub muestra historial.

URL production actual: https://portafiolio-personal-website.vercel.app/ (renombrar proyecto en Vercel para acortar).

## Notas

- La pantalla de carga solo aparece en desktop (>768px). En mobile se salta directo al contenido.
- El cursor personalizado solo funciona en desktop.
- La sección Work usa scroll horizontal con pin en desktop; en mobile se apila verticalmente.
- Mobile: `landing-container` usa `justify-content: center` para centrar verticalmente intro + subtitles. Foto mobile fue removida.
- `vite.config.ts` no debe referenciar paquetes que no estén en `package.json` (ej: `three`, `@react-three/*`) — rollup falla en build.
