# RCN Dallas site

Static site built with [Vite](https://vitejs.dev/) and TypeScript.

- **Run locally:** `npm install` then `npm run dev`
- **Production build:** `npm run build` (output in `dist/`)
- **Content:** card-style blocks are driven from `src/content/site.ts`; English and Spanish copy from `src/i18n/translations.ts`
- **GitHub Pages:** enable **Settings → Pages → Build and deployment → Source: GitHub Actions**; pushes to `main` use `.github/workflows/deploy.yml`
