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
| `Loading.tsx` | "Welcome", texto del marquee ("AI Engineer", "Full Stack Developer") |
| `About.tsx` | "For me, Coding is art." (en morado, separado del párrafo) |
| `Navbar.tsx` | Links de navegación |
| `Contact.tsx` | Textos del formulario |
| `CallToAction.tsx` | "Hire Me →" |

### Imágenes de proyectos

- `public/images/` — Foto personal (`mypicnbg.png`)
- Las imágenes de proyectos se referencian en `config.ts` → `projects[].image`
- Agregar imágenes en `public/images/` y actualizar la ruta en config

### Video

- `public/video/video.webm` — Video usado en la sección TechStack

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

Configurado para Vercel (`vercel.json`). Push a main y Vercel hace build automático.

## Notas

- La pantalla de carga solo aparece en desktop (>768px). En mobile se salta directo al contenido.
- El cursor personalizado solo funciona en desktop.
- La sección Work usa scroll horizontal con pin en desktop; en mobile se apila verticalmente.
