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

   Commands:
     npm run dev       → http://localhost:5173 (Vite dev server)
     npm run build     → emits /dist (deploy this)
     npm run preview   → http://localhost:4173 against /dist
   ============================================================ */

import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();

/* Short git SHA used as a per-deploy cache-bust token. Falls back to a
   timestamp so `npm run build` works without a git repo. */
const BUILD_HASH = (() => {
  try { return execSync('git rev-parse --short HEAD', { cwd: ROOT }).toString().trim(); }
  catch { return Date.now().toString(36); }
})();

/* Every .html in the repo root is an entry point. */
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

/* ============================================================
   Topic-route plugin
   ─────────────────────────────────────────────────────────────
   Wires the site's path-based URL contract:

       /learn/<topic>             → learn.html
       /link/<topic>/<station>    → link.html
       /land/<topic>/<section>    → land.html
       /quiz/<topic>/<set>        → quiz.html

   In dev and preview the plugin is a Connect middleware that
   rewrites the request URL to the matching shell — the browser
   keeps the pretty URL, the shell HTML is served, and the
   client-side TopicLoader reads window.location.pathname to find
   the topic + station.

   At build time the same logic generates real per-route files
   under dist/<shell>/<topic>/<station>/index.html for every
   (topic, station) the registry says is available. Each generated
   file is a copy of the shell HTML with a topic-specific <title>,
   <meta description>, <meta og:title/description>, and
   <link rel=canonical> baked in. Real 200s, per-page SEO.
   ============================================================ */

const STATIONS = {
  link: ['intro','context','chain','chain-open','calc','data','extract','predict','diagram','depends','judge','complete','quiz'],
  land: ['intro','a','b','c','complete','quiz'],
  quiz: ['main','causes']
};
const SHELL_HTML = { learn: 'learn.html', link: 'link.html', land: 'land.html', quiz: 'quiz.html' };
const STANDALONE = new Set(['login','privacy-policy','terms','offline','404']);

/* Load js/topics.js as plain text and extract the registry. The
   file is an IIFE that assigns window.ECONOS_TOPICS — we eval it
   inside a stub `window` to get the array. Done once at build /
   server-start, not per request. */
function loadTopicRegistry() {
  const src = readFileSync(resolve(ROOT, 'js/topics.js'), 'utf8');
  const sandbox = { window: {} };
  // eslint-disable-next-line no-new-func
  (new Function('window', src))(sandbox.window);
  return sandbox.window.ECONOS_TOPICS || [];
}

function topicRoutes() {
  let registry = [];
  function ensureRegistry() {
    if (registry.length === 0) registry = loadTopicRegistry();
    return registry;
  }
  function topicById(id) {
    return ensureRegistry().find((t) => t.id === id);
  }

  /* Inject topic-specific SEO meta into a shell's HTML source.
     Idempotent: replaces the canonical / og:url / og:title /
     <title> if they exist, otherwise leaves the file untouched.
     `path` is the final URL path the file will live at. */
  function injectMeta(html, { topic, shell, station, path }) {
    if (!topic) return html;
    const t = topicById(topic);
    const topicName  = t ? t.name : topic;
    const stageName  = shell === 'learn' ? 'Learn It' : shell === 'link' ? 'Link It' : shell === 'land' ? 'Land It' : 'Quiz';
    const stationStr = station ? ' · ' + station.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : '';
    const title = `${topicName}${stationStr} · ${stageName} · Econos`;
    const desc  = t && t.sub
      ? `${stageName} — ${t.sub}. A-Level economics revision on Econos.`
      : `${stageName} for ${topicName}. A-Level economics revision on Econos.`;
    const canonical = 'https://econos.co.uk' + path;
    return html
      .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
      .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${desc}">`)
      .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${title}">`)
      .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${desc}">`)
      .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${canonical}">`)
      .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonical}">`);
  }

  /* parseUrl('/link/causes-of-inflation-and-deflation/chain-open') → { shell:'link', topic:'causes-of-inflation-and-deflation', station:'chain-open', file:'link.html' } */
  function parseUrl(rawPath) {
    if (!rawPath || rawPath === '/' || rawPath.includes('.')) return null;
    const parts = rawPath.split('/').filter(Boolean);
    const shell = parts[0];
    if (STANDALONE.has(shell)) {
      if (parts.length === 1) return { shell, file: shell + '.html' };
      return null;
    }
    if (!SHELL_HTML[shell]) return null;
    return { shell, topic: parts[1] || null, station: parts[2] || null, file: SHELL_HTML[shell] };
  }

  function devRewrite(req, _res, next) {
    try {
      const url = req.url || '/';
      const qIdx = url.indexOf('?');
      const path = qIdx >= 0 ? url.slice(0, qIdx) : url;
      const query = qIdx >= 0 ? url.slice(qIdx) : '';
      const route = parseUrl(path);
      if (route) {
        req.url = '/' + route.file + query;
      }
    } catch (e) { /* fall through to default handling */ }
    next();
  }

  function generateBuildOutputs() {
    const distDir = resolve(ROOT, 'dist');
    if (!existsSync(distDir)) return;
    const written = [];

    function writeRoute(shell, topic, station) {
      const sourcePath = resolve(distDir, SHELL_HTML[shell]);
      if (!existsSync(sourcePath)) return;
      const html = readFileSync(sourcePath, 'utf8');
      const urlPath = station
        ? `/${shell}/${topic}/${station}`
        : `/${shell}/${topic}`;
      const out = injectMeta(html, { topic, shell, station, path: urlPath });
      const dest = join(distDir, urlPath, 'index.html');
      mkdirSync(dirname(dest), { recursive: true });
      writeFileSync(dest, out);
      written.push(urlPath);
    }

    for (const topic of ensureRegistry()) {
      const avail = topic.available || {};
      if (avail.learn) writeRoute('learn', topic.id);
      if (avail.link)  STATIONS.link.forEach((s) => writeRoute('link', topic.id, s));
      if (avail.land)  STATIONS.land.forEach((s) => writeRoute('land', topic.id, s));
      if (avail.quiz !== false) STATIONS.quiz.forEach((s) => writeRoute('quiz', topic.id, s));
    }
    // eslint-disable-next-line no-console
    console.log(`[topic-routes] generated ${written.length} per-topic index.html files`);

    /* Write the sitemap at build time from the same registry, so it can
       never drift from the routes that actually exist. Standalone routes
       + every /learn/<topic> for an available topic. We keep stations
       and quiz sets out of the sitemap — they're internal session URLs
       and including 400+ entries would dilute the index. */
    const today = new Date().toISOString().slice(0, 10);
    const urls = [
      { loc: '/',                priority: '1.0', freq: 'weekly'  },
      { loc: '/privacy-policy',  priority: '0.3', freq: 'yearly'  },
      { loc: '/terms',           priority: '0.3', freq: 'yearly'  },
      { loc: '/articles/',       priority: '0.7', freq: 'weekly'  },
      { loc: '/articles/monopoly-a-level-economics/', priority: '0.6', freq: 'monthly' }
    ];
    for (const topic of ensureRegistry()) {
      if (!(topic.available && topic.available.learn)) continue;
      urls.push({ loc: `/learn/${topic.id}`, priority: '0.8', freq: 'weekly' });
    }
    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...urls.map((u) =>
        `  <url>\n    <loc>https://econos.co.uk${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.freq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`),
      '</urlset>',
      ''
    ].join('\n');
    writeFileSync(join(distDir, 'sitemap.xml'), xml);
    // eslint-disable-next-line no-console
    console.log(`[topic-routes] wrote sitemap.xml (${urls.length} URLs)`);
  }

  return {
    name: 'topic-routes',
    configureServer:        (server) => { server.middlewares.use(devRewrite); },
    configurePreviewServer: (server) => { server.middlewares.use(devRewrite); },
    closeBundle: generateBuildOutputs
  };
}

export default defineConfig({
  root: ROOT,
  publicDir: false,
  /* Absolute base — every emitted asset reference starts with /. Required
     because the topic-routes plugin copies shells into nested subdirectories
     (dist/learn/<topic>/index.html etc.); relative './assets/…' paths would
     resolve under the wrong directory there. */
  base: '/',
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

    /* Wires the path-based URL contract for dev, preview, and build. */
    topicRoutes(),

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
        /* sitemap.xml is generated at build time by topic-routes — no
           static source file to copy here. */
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
