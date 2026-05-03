# Playground

This is the visual development environment for `react-github-previews`. It is a Vite + React app that imports the parent library via `"react-github-pr-preview": "file:.."` and renders an interactive showcase of all component variants, themes, and visual effects.

## What's inside

- **Live component gallery** --- every variant (`default`, `compact`, `inline`, `detailed`) for both `GithubPrPreview` and `GithubRepoPreview`.
- **Theme switcher** --- all 11 themes including `light`, `dark`, `system`, `neobrutalism`, `neobrutalism-dark`, `terminal`, `minimalist`, `retro`, `hand-drawn`, `claymorphism`, and `claymorphism-dark`.
- **Effect toggles** --- `glass`, `gradient`, and `neumorphic` can be applied on top of any theme.
- **Skeleton demos** --- pulsing placeholders for every variant.
- **Localization samples** --- relative-time formatting in multiple locales.
- **Realistic demo data** --- PRs and repos drawn from actual open-source projects.

## Getting started

```bash
# From the repository root
cd playground
npm install
npm run dev
```

The dev server will start on `http://localhost:5173` (or the next available port).

## Available scripts

| Command          | Description                                   |
|------------------|-----------------------------------------------|
| `npm run dev`    | Start the Vite dev server with HMR            |
| `npm run build`  | Type-check and build for production           |
| `npm run preview`| Preview the production build locally            |
| `npm run lint`   | Run ESLint across the playground source       |

## Architecture

- `src/App.tsx` --- Main demo page. Contains all demo data, state management for theme/effect selection, and component rendering.
- `src/App.css` --- Playground-specific layout styles (not part of the library).
- `src/index.css` --- Global base styles and CSS resets.
- `src/main.tsx` --- Entry point.

The playground is **not published** --- it exists purely for local development, visual regression testing, and design exploration.
