# Blue Lotus Spa Malad

Premium Next.js SPA website for Blue Lotus Spa Malad in Malad West, Mumbai.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS v4
- TypeScript
- Framer Motion
- React Icons

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Validation

```bash
npm run lint
npm run build
```

## Node Server Deployment

This project is configured for a Node.js server deployment with Next.js
standalone output, not static export.

```bash
npm ci
npm run build
node .next/standalone/server.js
```

Deploy the generated `.next/standalone` folder. The `postbuild` step copies
`public` and `.next/static` into that folder so video files and Next chunks are
served by the standalone server.

## Project Notes

- Keep business data, SEO data, routes, slugs, contact links, and asset paths stable unless a redirect/content plan is made.
- `next-env.d.ts`, `.next/`, and `node_modules/` are generated locally and ignored by Git.
- Public assets live under `public/images`, `public/service`, `public/gallery`, and `public/blogs`.
