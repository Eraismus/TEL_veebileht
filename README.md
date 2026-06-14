# TEL Research Group Website

Astro static website for a research group page with bilingual Estonian/English content stored as versioned files in GitHub.

## Local Development

```sh
npm install
npm run dev
```

Build before publishing:

```sh
npm run build
```

## Editing Content

Most website content lives in JSON files under `src/content/`:

- `site.json` - group profile, focus areas, contact details
- `members.json` - people
- `projects.json` - research projects
- `products.json` - tools, platforms, materials, and other outputs
- `plan.json` - roadmap and next steps

Each visible text field has Estonian (`et`) and English (`en`) versions. Edit these files directly in GitHub to update the website.

## Deployment

The site is configured for GitHub Pages. Pushing to `main` runs the GitHub Actions workflow in `.github/workflows/deploy.yml`.
