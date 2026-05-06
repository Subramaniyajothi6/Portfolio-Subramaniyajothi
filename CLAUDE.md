# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build
npm run lint      # ESLint check
npm run preview   # Preview production build
```

## Architecture

Single-page React portfolio app built with Vite, React 19, Tailwind CSS v4, and Three.js.

**Entry point:** `src/main.jsx` → `src/App.jsx`

**Sections** (`src/sections/`) are lazy-loaded via `React.lazy` + `Suspense` and render in page order: `Navbar` → `Hero` → `About` → `SkillSet` → `Projects` → `Experiences` → `Contact` → `Footer`.

**Components** (`src/components/`) are shared UI primitives used across sections.

**Data** (`src/constants/index.js`) is the single source of truth for all portfolio content: `myProjects`, `mySocials`, `experiences`, `reviews`. Update content here.

**API** (`src/api.js`) — Axios client pointing to the deployed backend at `https://subramaniyajothi-portfolio-backend.vercel.app/api/v1`. The Contact form POSTs to `/contact` and falls back through three different payload shapes if the first attempts fail.

## Styling

Tailwind CSS v4 (imported via `@tailwindcss/vite` plugin — no `tailwind.config.js` theming, config is in `tailwind.config.js` only for plugin setup). Custom theme tokens are defined in `src/index.css` under `@theme`:

- **Colors:** `primary` (bg), `midnight`, `navy`, `indigo`, `storm`, `aqua`, `mint`, `royal`, `lavender`, `fuchsia`, `coral`
- **Utility classes:** `.c-space` (horizontal padding), `.section-spacing` (min-height + margin), `.text-heading`, `.grid-default-color`, `.grid-special-color`, `.grid-black-color`

## Three.js / 3D

- `Hero` section renders a 3D astronaut GLB model (`public/models/tenhun_falling_spaceman_fanart.glb`) via `@react-three/fiber` Canvas + `@react-three/drei`
- Camera follows mouse via `useFrame` + `maath` easing in `Rig()`
- `src/components/globe.jsx` uses the `cobe` library for the interactive globe in the About section
- `src/components/Astronaut.jsx` loads the GLB with `useGLTF`

## Animation

GSAP (`@gsap/react`) and Motion (`motion`) are both available. `src/components/Particles.jsx` renders an animated particle field used as the Contact section background.
