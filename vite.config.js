/* ============================================================
   ECONOS — Vite config
   ─────────────────────────────────────────────────────────────
   The codebase is hand-written classic IIFE scripts that publish
   onto window.* and dynamically load per-topic data files via
   appendChild(<script>). Vite is happiest with ES modules — so we
   use it ONLY for:

     • dev server (auto-reload on HTML / CSS changes)
     • CSS hashing + minification
     • multi-page HTML entry handling

   JS files stay where they are at runtime (/js/**) and are NOT
   bundled. vite-plugin-static-copy mirrors them verbatim into
   /dist/js/. The HTML <script src="js/foo.js"> tags resolve to
   the same path in dev and prod.

   A future tranche migrates engines to ES modules so Vite can
   tree-shake and per-topic-split them; the current setup is a
   no-regression starting point.

   Commands:
     npm run dev       → http://localhost:5173 (Vite dev server)
     npm run build     → emits /dist (deploy this)
     npm run preview   → http://localhost:4173 against /dist
   ============================================================ */

import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { readdirSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = process.cwd();

/* Every .html in the repo root is an entry point. Includes the
   four shells + index/login/quiz + the 14 legacy redirect stubs
   so external bookmarks keep working after deploy. */
function htmlEntries() {
  const entries = {};
  for (const name of readdirSync(ROOT)) {
    if (!name.endsWith('.html')) continue;
    const full = resolve(ROOT, name);
    if (!statSync(full).isFile()) continue;
    entries[name.replace(/\.html$/, '')] = full;
  }
  return entries;
}

export default defineConfig({
  root: ROOT,
  publicDir: false,
  base: './',
  appType: 'mpa',

  plugins: [
    /* Copy classic JS + assets verbatim. They're loaded at runtime
       by paths the bundler would otherwise rewrite or drop. */
    viteStaticCopy({
      targets: [
        { src: 'js/**/*',     dest: 'js' },
        { src: 'assets/**/*', dest: 'assets' },
        { src: 'favicon.*',                  dest: '.' },
        { src: 'apple-touch-icon.png',       dest: '.' },
        { src: 'web-app-manifest-*.png',     dest: '.' },
        { src: 'site.webmanifest',           dest: '.' },
        { src: 'CNAME',                      dest: '.' }
      ]
    })
  ],

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2017',
    sourcemap: true,
    /* We don't want Vite to touch our classic <script src="js/*">
       references in the HTML — they should resolve to the verbatim
       copies emitted by viteStaticCopy. Setting modulePreload off and
       keeping the entries to HTML only lets the HTML pass through. */
    modulePreload: false,
    rollupOptions: {
      input: htmlEntries()
    },
    /* Inline tiny assets so we don't end up with a million hashed
       requests for icons. */
    assetsInlineLimit: 2048
  },

  server: {
    port: 5173,
    open: false,
    fs: { allow: [ROOT] }
  },

  preview: {
    port: 4173
  }
});
