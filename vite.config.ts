// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Fully static output: "/" is prerendered to plain HTML at build time, so
    // the deployed site needs no server runtime (static hosting, e.g. Netlify).
    pages: [{ path: "/" }],
    prerender: { enabled: true },
  },
  // Self-hosting deploy target. Inside Lovable's own build the Cloudflare
  // preset is pinned and this override is ignored; builds elsewhere (e.g.
  // Netlify CI) produce a plain static site in dist/.
  nitro: { preset: "netlify-static" },
});
