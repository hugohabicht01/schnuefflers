# Schnüffler’s Dalmatiner

Bilingual static website for Schnüffler’s Dalmatiner in Hanau, built with Astro.

## Local development

Node.js 22.12 or newer is required.

```sh
npm install
npm run dev
```

Create and validate the production build:

```sh
npm run build
npm run preview
```

## Content and routes

- German is served from `/`.
- English is served from `/en/`.
- Shared contact and route data live in `src/data/site.ts`.
- Bilingual page content lives in the components under `src/components/`.
- Sanitized image sources live in `src/assets/`. The original photographs at the repository root are intentionally ignored because some contain private EXIF metadata.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys every push to `main`.

1. Create a public GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as the source.
3. Add `schnuefflers.de` as the custom domain. The repository already contains `public/CNAME`.
4. Configure the apex-domain DNS records at the domain registrar according to GitHub’s current custom-domain instructions. Optionally point `www` to the GitHub Pages hostname after the GitHub account name is known.
5. Once GitHub has issued the certificate, enable **Enforce HTTPS**.

The canonical production URL is configured in `astro.config.mjs`.

## Privacy

The website has no analytics, marketing scripts, embedded social feeds, external fonts or non-essential cookies. The privacy and legal pages should be reviewed whenever the hosting setup, contact methods or legal circumstances change.
