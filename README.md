# Portfolio (Nuxt 4)

This repository runs a Nuxt 4 app and is configured for deployment to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Generate static site (GitHub Pages)

```bash
npm run generate
```

The generated static files are written to `.output/public`.

## GitHub Pages deployment

A workflow is provided at `.github/workflows/deploy.yml` that:

1. installs dependencies,
2. runs `npm run generate`,
3. uploads `.output/public`, and
4. deploys it to GitHub Pages.

To use it:

1. Set the default branch to `main` (or update workflow branch trigger).
2. In repository settings → Pages, set Source to **GitHub Actions**.
3. Push to `main` (or run the workflow manually).
