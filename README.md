# KX Page — React + Vite + Tailwind (latest)

A minimal React app scaffolded with Vite and styled using Tailwind CSS (latest). TypeScript is enabled by default.

## Requirements

- Node.js 18+ (LTS recommended)
- npm 9+

## Quick start

```powershell
# install dependencies
npm install

# start dev server (http://localhost:5173 by default)
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
```

## Tech stack

- React 19
- Vite 7
- TypeScript 5
- Tailwind CSS 4 (via @tailwindcss/postcss)

## Project structure

```text
.
├─ index.html
├─ src/
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ vite.config.ts
├─ tsconfig.json
├─ postcss.config.js
├─ tailwind.config.js
└─ package.json
```

## Notes

- Tailwind v4 uses a new PostCSS plugin. The config is set via `@tailwindcss/postcss` in `postcss.config.js`.
- CSS utilities come from Tailwind via the directives in `src/index.css`.

## License

MIT
