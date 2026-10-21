# Project Rules

## Architecture
- The site ships fully static: `vite.config.ts` prerenders `/` (tanstackStart `pages` + `prerender.enabled`) and pins nitro preset `netlify-static` for self-hosted builds (Lovable's own build keeps its Cloudflare preset). Do not add server functions or revert the prerender — the owner deploys the built `dist/` output to Netlify (`netlify.toml` pins the build command and publish dir). Lovable-preview-only server plumbing (custom `src/server.ts` SSR wrapper, example server fns) was deliberately removed.
