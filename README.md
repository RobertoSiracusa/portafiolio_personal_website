# Portfolio Website

Portfolio personal construido con React + TypeScript + GSAP. Soporta i18n (Inglés / Español) con auto-detección del idioma del navegador.

## Estructura del proyecto

```
src/
├── i18n/
│   ├── translations.ts     ← ARCHIVO PRINCIPAL DE CONTENIDO (textos en EN + ES)
│   └── LanguageProvider.tsx ← Context + hook useT() / useLanguage()
├── config.ts               ← (legacy, no usado — todo el contenido vive en i18n/translations.ts)
├── App.tsx                 ← Rutas + LanguageProvider wrapping
├── context/
│   └── LoadingProvider.tsx ← Pantalla de carga inicial (desktop only)
├── components/
│   ├── Landing.tsx         ← Sección hero (nombre + títulos)
│   ├── About.tsx           ← Sección "Sobre Mí"
│   ├── WhatIDo.tsx         ← Sección de habilidades
│   ├── Career.tsx          ← Timeline de experiencia
│   ├── Work.tsx            ← Proyectos (scroll horizontal desktop)
│   ├── WorkImage.tsx       ← Componente de imagen de proyecto
│   ├── TechStackNew.tsx    ← Stack tecnológico con video
│   ├── CallToAction.tsx    ← Botón "Hire Me" / "Contrátame"
│   ├── Contact.tsx         ← Info de contacto
│   ├── Navbar.tsx          ← Navegación + Lenis smooth scroll + toggle EN/ES
│   ├── SocialIcons.tsx     ← GitHub + LinkedIn + Resume
│   ├── HoverLinks.tsx      ← Efecto hover en links
│   ├── Loading.tsx         ← Animación de carga
│   ├── Cursor.tsx          ← Cursor personalizado (desktop)
│   ├── MainContainer.tsx   ← Contenedor principal (monta secciones + GSAP timelines)
│   ├── styles/             ← CSS de cada componente
│   └── utils/
│       ├── GsapScroll.ts   ← Animaciones de scroll (GSAP + ScrollTrigger)
│       ├── initialFX.ts    ← Animaciones de entrada al cargar
│       └── splitText.ts    ← Split text para animaciones por palabra/caracter
├── utils/
│   └── textSplitter.ts     ← Motor de split text
└── pages/
    ├── MyWorks.tsx         ← Página con todos los proyectos
    └── MyWorks.css         ← Estilos de la página
```

## Internacionalización (i18n)

- **Auto-detección**: `navigator.language` empieza con `es*` → español, resto → inglés.
- **Persistencia**: localStorage key `lang` (sobrescribe auto-detect).
- **Toggle manual**: botón en Navbar (muestra el idioma alternativo: en español se ve "EN", en inglés "ES").
- **`<html lang>`**: actualizado dinámicamente para SEO + selectores CSS por idioma.

### Editar textos

Todo el contenido visible vive en `src/i18n/translations.ts`, dos objetos paralelos `en` y `es` con la misma estructura.

| Sección | Campo | Qué controla |
|---------|-------|--------------|
| Hero / Landing | `developer.name`, `developer.fullName`, `developer.title` | Nombre + título profesional |
| Landing UI | `ui.landing.{hello,an,role1,role2}` | "Hello! I'm" / "¡Hola! Soy", roles |
| About | `about.{title,description,motto}` | Texto principal + frase final destacada |
| Experiencia | `experiences[]` | Timeline (posición, empresa, período, descripción, tecnologías) |
| Proyectos | `projects[]` | Cards (título, categoría, tecnologías, imagen, descripción) |
| Habilidades | `skills.develop`, `skills.design` | Sección "What I Do" |
| Contacto | `contact.{email,github,linkedin}`, `social.location` | Links + ubicación |
| UI strings | `ui.nav`, `ui.career`, `ui.work`, `ui.contact`, `ui.myWorks`, `ui.loading`, `ui.cta`, `ui.techStack`, `ui.whatIDo`, `ui.socialIcons` | Etiquetas de cada sección |
| CV | `ui.cvFile` | Path al PDF (puede diferir EN/ES si quieres dos PDFs) |

### Agregar un idioma nuevo

1. Agregar `Lang` enum en `translations.ts` (ej: `"de"`).
2. Crear objeto `de: Translation = { ... }` siguiendo la misma estructura.
3. Añadirlo a `translations`: `{ en, es, de }`.
4. Ajustar `detectLang()` con la regla de detección.
5. Si los textos largos rompen layout, agregar overrides CSS con `html[lang="de"]` (ver Landing.css como referencia).

### Estilos por idioma

Algunos textos en español son más largos que en inglés y rompen layouts hardcodeados con `nowrap` o `width` fijo. Solución: selectores `html[lang="es"]` en CSS (ej: `Landing.css` final del archivo) que ajustan tamaños y permiten wrap.

## Imágenes / video / CV

- `src/assets/` — Imágenes importadas como módulos ES (Vite hashea):
  - `gasliLogo.jpeg`, `sodapallogo-removebg-preview.png`, `minecraftlogo.svg`
- Para agregar imagen: poner en `src/assets/`, importar en `translations.ts`, asignar a `projects[].image` en ambos idiomas (las imágenes se comparten entre EN y ES — solo cambia el texto).
- Si un proyecto no tiene imagen: `image: ""` → `Work.tsx` skipea render.
- `public/favicon.svg` — Favicon naranja (`#fb6419`).
- `public/video/video.webm` — Video sección TechStack.
- `public/CV_Roberto_Siracusa.pdf` — CV. Botón "RESUME"/"CV" en `SocialIcons.tsx` lee `ui.cvFile` de translations.

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

Vercel conectado al repo. `git push origin main` → build + deploy automático. PRs generan deploys preview con URL hasheada.

URL production: https://rs-personal-portfolio.vercel.app/

## Notas

- Pantalla de carga solo en desktop (>768px). Mobile salta al contenido.
- Cursor personalizado solo desktop.
- Sección Work: scroll horizontal con pin en desktop; mobile apila vertical.
- Título "WHAT I DO" no se traduce — depende de letter-split styling (`.hat-h2`, `.do-h2`).
- `vite.config.ts` no debe referenciar paquetes ausentes en `package.json` — rollup falla en build.
