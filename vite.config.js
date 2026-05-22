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
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();

/* Short git SHA used as a per-deploy cache-bust token. Falls back to a
   timestamp so `npm run build` works without a git repo. */
const BUILD_HASH = (() => {
  try { return execSync('git rev-parse --short HEAD', { cwd: ROOT }).toString().trim(); }
  catch { return Date.now().toString(36); }
})();

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
    /* Append ?v=<git-sha> to every <script src="js/..."> reference in the
       emitted HTML so browsers and CDNs never serve stale JS after a deploy. */
    {
      name: 'js-cache-bust',
      transformIndexHtml(html) {
        return html.replace(/(src=")(js\/[^"]+)(")/g, `$1$2?v=${BUILD_HASH}$3`);
      }
    },

    /* Patch CACHE_NAME in dist/sw.js so the service worker invalidates its
       cache-first store on every deploy. */
    {
      name: 'sw-version',
      closeBundle() {
        const swPath = resolve(ROOT, 'dist/sw.js');
        try {
          const src = readFileSync(swPath, 'utf8');
          writeFileSync(swPath, src.replace(/('econos-v)[^']*(')/g, `$1${BUILD_HASH}$2`));
        } catch { /* sw.js absent in dev mode — safe to skip */ }
      }
    },

    /* Copy classic JS + assets verbatim. They're loaded at runtime
       by paths the bundler would otherwise rewrite or drop. */
    viteStaticCopy({
      targets: [
        { src: 'js/**/*',     dest: 'js' },
        { src: 'assets/**/*', dest: 'assets' },
        { src: 'fonts/**/*',  dest: 'fonts' },
        { src: 'favicon.*',                  dest: '.' },
        { src: 'apple-touch-icon.png',       dest: '.' },
        { src: 'web-app-manifest-*.png',     dest: '.' },
        { src: 'site.webmanifest',           dest: '.' },
        { src: 'CNAME',                      dest: '.' },
        { src: 'robots.txt',                 dest: '.' },
        { src: 'sitemap.xml',                dest: '.' },
        { src: 'sw.js',                      dest: '.' },
        { src: '.well-known/**/*',           dest: '.well-known' }
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
