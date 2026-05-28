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
import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync, existsSync, cpSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { execSync } from 'node:child_process';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import mdContainer from 'markdown-it-container';

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

       /<board>/<theme>/<topic>/learn → learn.html
       /link/<topic>/<station>    → link.html
       /land/<topic>/<section>    → land.html

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

/* URL segments for each shell. Topic registry uses the short
   form (`available: { learn, link, land }`) — the URL form
   adds the imperative suffix the user-facing branding uses. */
const SHELL_URL = { learn: 'learn-it', link: 'link-it', land: 'land-it' };
const URL_SHELL = { 'learn-it': 'learn', 'link-it': 'link', 'land-it': 'land' };
const SHELL_HTML = { 'learn-it': 'learn-it.html', 'link-it': 'link-it.html', 'land-it': 'land-it.html' };
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

/* Same trick for js/config/stations.js — single source of truth shared
   with the runtime routers (link-router / land-router). The build path
   generator and the routers will never see different station lists. */
function loadStations() {
  const src = readFileSync(resolve(ROOT, 'js/config/stations.js'), 'utf8');
  const sandbox = { window: {} };
  // eslint-disable-next-line no-new-func
  (new Function('window', src))(sandbox.window);
  const s = sandbox.window.ECONOS_STATIONS || {};
  return {
    link: Object.keys(s.link || {}),
    land: Object.keys(s.land || {})
  };
}
const STATIONS = loadStations();

/* Load js/icons.js the same way to extract window.ECONOS_ICONS — the
   key → SVG-string map that powers every learn-it visualKey. Articles
   can now opt into the same diagrams via :::econos-diagram { svgKey="…" }.
   Done once at build / server-start. */
function loadIconsLib() {
  try {
    const src = readFileSync(resolve(ROOT, 'js/icons.js'), 'utf8');
    const sandbox = { window: {} };
    // eslint-disable-next-line no-new-func
    (new Function('window', src))(sandbox.window);
    return sandbox.window.ECONOS_ICONS || {};
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('[article-routes] could not load js/icons.js:', e.message);
    return {};
  }
}
const ICONS_LIB = loadIconsLib();

function topicRoutes() {
  let registry = [];
  function ensureRegistry() {
    if (registry.length === 0) registry = loadTopicRegistry();
    return registry;
  }
  function topicById(id) {
    return ensureRegistry().find((t) => t.id === id);
  }

  /* Mirror of TopicLoader.themeFor(topic, board) — derives the
     theme-slug a given (topic, board) pair lives under. Used by
     the URL builders + the per-(board, theme, topic, shell)
     route generator below. Edexcel A / B use theme-1..theme-4
     from the spec's first digit; AQA / OCR use micro / macro
     (AQA's split is the second digit of the spec; OCR's is
     read off the topic's Edexcel A theme since OCR's bare
     numbering is ambiguous). */
  function themeForBoard(topic, board) {
    if (!topic || !topic.boards) return 'misc';
    const spec = topic.boards[board] && topic.boards[board].spec;
    if (board === 'edexcel_a' || board === 'edexcel_b') {
      return spec ? 'theme-' + String(spec).charAt(0) : 'misc';
    }
    if (board === 'aqa') {
      if (!spec) return 'misc';
      const parts = String(spec).split('.');
      return parts[1] === '1' ? 'micro' : 'macro';
    }
    if (board === 'ocr') {
      const ea = topic.boards.edexcel_a && topic.boards.edexcel_a.spec;
      if (!ea) return 'misc';
      const d = String(ea).charAt(0);
      if (d === '1' || d === '3') return 'micro';
      if (d === '2' || d === '4') return 'macro';
      return 'misc';
    }
    return 'misc';
  }

  /* Human-readable station label for titles and JSON-LD. Land sections
     get a "Section " prefix because the bare letter reads as filler.
     Other shells just title-case the slug. */
  function formatStationLabel(shell, station) {
    const titled = station.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    if (shell === 'land' && /^[A-C]$/.test(titled)) return 'Section ' + titled;
    return titled;
  }

  /* Build the LearningResource JSON-LD body for a generated topic shell.
     Google's rich-results indexer reads this; it's the strongest single
     SEO lever after canonical URLs. learningResourceType varies by shell
     so each stage gets the right intent signal. */
  function topicJsonLd({ topicName, sub, shell, station, canonical }) {
    /* `shell` here is the short form (learn / link / land); the URL
       segment uses the suffixed form (learn-it / link-it / land-it). */
    const resourceType =
      shell === 'learn' ? 'Concept' :
      shell === 'link'  ? 'ApplicationExercise' :
      /* land */          'AssessmentExercise';
    const stationStr = station ? ' · ' + formatStationLabel(shell, station) : '';
    const stageName = shell === 'learn' ? 'Learn It' : shell === 'link' ? 'Link It' : 'Land It';
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: `${topicName}${stationStr} · ${stageName}`,
      description: sub
        ? `${stageName} — ${sub}.`
        : `${stageName} for ${topicName} (A-Level economics).`,
      url: canonical,
      inLanguage: 'en-GB',
      educationalLevel: 'A-level',
      educationalUse: 'revision',
      learningResourceType: resourceType,
      audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
      about: { '@type': 'Thing', name: topicName },
      isPartOf: { '@type': 'Course', name: 'A-Level Economics (Edexcel A)', provider: { '@type': 'Organization', name: 'Econos', url: 'https://econos.co.uk' } },
      publisher: { '@type': 'Organization', name: 'Econos', url: 'https://econos.co.uk', logo: { '@type': 'ImageObject', url: 'https://econos.co.uk/assets/logo-full.png' } }
    };
    return `<script type="application/ld+json">${JSON.stringify(ld)}</script>`;
  }

  /* Inject topic-specific SEO meta + JSON-LD into a shell's HTML source.
     Idempotent: replaces the canonical / og:url / og:title / <title> if
     they exist; appends the JSON-LD block immediately before </head>.
     `path` is the final URL path the file will live at. */
  function injectMeta(html, { topic, shell, station, path }) {
    if (!topic) return html;
    const t = topicById(topic);
    const topicName  = t ? t.name : topic;
    const stageName  = shell === 'learn' ? 'Learn It' : shell === 'link' ? 'Link It' : 'Land It';
    const stationStr = station ? ' · ' + formatStationLabel(shell, station) : '';
    const title = `${topicName}${stationStr} · ${stageName} · Econos`;
    const desc  = t && t.sub
      ? `${stageName} — ${t.sub}. A-Level economics revision on Econos.`
      : `${stageName} for ${topicName}. A-Level economics revision on Econos.`;
    const canonical = 'https://econos.co.uk' + path;
    const ld = topicJsonLd({ topicName, sub: t && t.sub, shell, station, canonical });
    /* Per-topic stage availability — emitted as a meta tag so the
       runtime stages widget can lock unavailable stages instead of
       offering broken click targets. */
    const avail = (t && t.available) || {};
    const availList = ['learn', 'link', 'land']
      .filter((s) => avail[s] !== false)
      .join(',');
    const availMeta = `<meta name="econos-availability" content="${availList}">`;
    return html
      .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
      .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${desc}">`)
      .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${title}">`)
      .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${desc}">`)
      .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${canonical}">`)
      .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonical}">`)
      .replace(/<\/head>/, `${availMeta}\n${ld}\n</head>`);
  }

  /* Canonical form: /<board>/<theme>/<topic>/<shell>(/<sub>).
       parseUrl('/aqa/macro/causes-of-inflation-and-deflation/link-it/chain-open')
         → { board:'aqa', theme:'macro', topic:'causes-...',
             shell:'link', urlShell:'link-it',
             station:'chain-open', file:'link-it.html' }
     `shell` is the short form used internally (`available.link`
     in the registry); `urlShell` is what appeared in the URL.
     Standalone routes (/login, /privacy-policy, …) still take
     precedence so /<board>/<theme>/<topic>/<shell> can never
     shadow them. */
  const BOARDS_FOR_URLS = ['edexcel_a', 'edexcel_b', 'aqa', 'ocr'];
  function parseUrl(rawPath) {
    if (!rawPath || rawPath === '/' || rawPath.includes('.')) return null;
    const parts = rawPath.split('/').filter(Boolean);
    const first = parts[0];
    if (STANDALONE.has(first)) {
      if (parts.length === 1) return { shell: first, file: first + '.html' };
      return null;
    }
    /* Must start with a known board id. */
    if (!BOARDS_FOR_URLS.includes(first)) return null;
    if (parts.length < 4) return null;
    const [board, theme, topic, urlShell] = parts;
    if (!SHELL_HTML[urlShell]) return null;
    const shell = URL_SHELL[urlShell];
    const sub = parts[4] || null;
    return { board, theme, topic, shell, urlShell, station: sub, file: SHELL_HTML[urlShell] };
  }

  /* Dev rewrite: no per-topic dist/ files exist yet — point path URLs
     at the base shell HTML and let TopicLoader read the pathname. */
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

  /* Preview rewrite: dist/ has the per-topic generated index.html
     files. Point /<board>/.../<shell> at <path>/index.html (not the
     base shell) so the preview server delivers the same per-page
     <title> / <meta> / JSON-LD that production would. */
  function previewRewrite(req, _res, next) {
    try {
      const url = req.url || '/';
      const qIdx = url.indexOf('?');
      const path = qIdx >= 0 ? url.slice(0, qIdx) : url;
      const query = qIdx >= 0 ? url.slice(qIdx) : '';
      const route = parseUrl(path);
      if (route && route.topic) {
        const indexPath = path.replace(/\/$/, '') + '/index.html';
        const indexFile = resolve(ROOT, 'dist' + indexPath);
        req.url = (existsSync(indexFile) ? indexPath : '/' + route.file) + query;
      } else if (route) {
        req.url = '/' + route.file + query;
      }
    } catch (e) { /* fall through to default handling */ }
    next();
  }

  function generateBuildOutputs() {
    const distDir = resolve(ROOT, 'dist');
    if (!existsSync(distDir)) return;
    const written = [];

    function writeRoute(board, theme, topicId, shell, station) {
      /* `shell` is the registry short-form (learn / link / land);
         the URL segment is the suffixed form via SHELL_URL. */
      const urlShell = SHELL_URL[shell];
      const sourcePath = resolve(distDir, SHELL_HTML[urlShell]);
      if (!existsSync(sourcePath)) return;
      const html = readFileSync(sourcePath, 'utf8');
      const urlPath = station
        ? `/${board}/${theme}/${topicId}/${urlShell}/${station}`
        : `/${board}/${theme}/${topicId}/${urlShell}`;
      const out = injectMeta(html, { topic: topicId, shell, station, path: urlPath });
      const dest = join(distDir, urlPath, 'index.html');
      mkdirSync(dirname(dest), { recursive: true });
      writeFileSync(dest, out);
      written.push(urlPath);
    }

    /* Every available (board × topic × shell × station) combination
       gets a real generated page. Topic stays the same across boards
       — only the URL prefix changes. */
    for (const topic of ensureRegistry()) {
      const avail = topic.available || {};
      for (const board of BOARDS_FOR_URLS) {
        const boardEntry = topic.boards && topic.boards[board];
        if (boardEntry && boardEntry.included === false) continue;
        const theme = themeForBoard(topic, board);
        if (avail.learn) writeRoute(board, theme, topic.id, 'learn');
        if (avail.link)  STATIONS.link.forEach((s) => writeRoute(board, theme, topic.id, 'link', s));
        if (avail.land)  STATIONS.land.forEach((s) => writeRoute(board, theme, topic.id, 'land', s));
      }
    }
    // eslint-disable-next-line no-console
    console.log(`[topic-routes] generated ${written.length} per-(board, topic) index.html files`);

    /* Write the sitemap at build time from the same registry, so it can
       never drift from the routes that actually exist. Standalone routes
       + every /<board>/<theme>/<topic>/learn for an available (board, topic)
       pair. We keep stations and sections out of the sitemap — they're
       internal session URLs and including thousands of entries would
       dilute the index. */
    const today = new Date().toISOString().slice(0, 10);
    /* Article URLs are appended later by article-routes from the
       authoritative search-index, so we don't duplicate them here. */
    const urls = [
      { loc: '/',                priority: '1.0', freq: 'weekly'  },
      { loc: '/privacy-policy',  priority: '0.3', freq: 'yearly'  },
      { loc: '/terms',           priority: '0.3', freq: 'yearly'  },
      { loc: '/articles/',       priority: '0.7', freq: 'weekly'  }
    ];
    for (const topic of ensureRegistry()) {
      if (!(topic.available && topic.available.learn)) continue;
      for (const board of BOARDS_FOR_URLS) {
        const boardEntry = topic.boards && topic.boards[board];
        if (boardEntry && boardEntry.included === false) continue;
        const theme = themeForBoard(topic, board);
        urls.push({ loc: `/${board}/${theme}/${topic.id}/learn-it`, priority: '0.8', freq: 'weekly' });
      }
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

    /* IndexNow key file. The IndexNow protocol (used by Bing,
       Yandex and Seznam — and on Google's "we might support it
       later" roadmap) verifies ownership by reading a publicly
       served `<key>.txt` whose body is the key itself. The CI
       deploy job POSTs the sitemap URLs to api.indexnow.org;
       this file is what those engines fetch back to confirm.

       The key is intentionally hard-coded — it's public anyway
       (literally served at /<key>.txt). Rotate only if leaked. */
    const INDEXNOW_KEY = 'f50a6f1a73f22cc3dd6b52af512f63c0';
    writeFileSync(join(distDir, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY);
  }

  return {
    name: 'topic-routes',
    configureServer:        (server) => { server.middlewares.use(devRewrite); },
    configurePreviewServer: (server) => { server.middlewares.use(previewRewrite); },
    closeBundle: generateBuildOutputs
  };
}

/* ============================================================
   Article-routes plugin
   ─────────────────────────────────────────────────────────────
   Articles are long-form SEO content that lives at /articles/<slug>/.
   Two source formats coexist:

     1. Hand-rolled HTML:  articles/<slug>/index.html
        Pinned exemplars with bespoke per-article visuals (the
        monopoly article uses custom two-col cause-cards, a chain
        widget, a want-more preview tile, etc.). Copied through
        verbatim. Their metadata is read from articles/search-index.json.

     2. Markdown sources:  articles/sources/<slug>.md
        YAML frontmatter (title, description, theme, spec,
        keywords, read_minutes, dates, friction blurb, at-a-glance
        facts, want_more config, FAQ entries) plus a Markdown body
        with `:::section { eyebrow, color, icon }` containers
        wrapping each prose section. Rendered through markdown-it
        with HTML pass-through enabled so authors can drop raw SVG
        for bespoke diagrams where needed.

   On build, both formats land at dist/articles/<slug>/index.html.
   The hub (dist/articles/index.html) + dist/articles/articles.css +
   dist/articles/search-index.json all get rebuilt from this
   plugin so a) the articles surface actually deploys, and b) the
   index never drifts from what's on disk.

   Sitemap entries for articles get appended to the already-emitted
   dist/sitemap.xml by replacing the closing </urlset> tag.
   ============================================================ */

/* Interactive diagram presets for articles.

   The SPA's interactive diagrams stack every step as a `layer-*`
   group in one SVG and reveal them one at a time by swapping a
   `show-<state>` class on the wrapper (the CSS state machine lives
   in articles/diagram.css, ported from styles.css; diagram.js does
   the swapping). This registry maps a diagram svgKey to its ordered
   steps — the state token (which must match the show-<state> class),
   a tab label, and the explanatory caption shown for that step.

   `::: econos-diagram svgKey="…" interactive="true"` expands into a
   stepper using this registry. Step labels/order mirror the matching
   learn-it cards so the article and the SPA teach the same build-up.
   A diagram without an entry here falls back to a clean static render
   of its base state (diagram.css hides the non-base layers anyway). */
const INTERACTIVE_PRESETS = {
  negExternalityInteractive: [
    { state: 'base',       label: 'Market equilibrium',     desc: 'MPC (private supply) meets MSB (demand) at the free-market output — the market ignores any cost imposed on third parties.' },
    { state: 'extension',  label: 'Add MSC and MEC',        desc: 'MSC sits above MPC; the vertical gap between them is the marginal external cost (MEC) borne by third parties.' },
    { state: 'shift',      label: 'Socially optimal output', desc: 'Welfare is maximised where MSC = MSB, at the lower output Q* and higher price P*.' },
    { state: 'efficiency', label: 'Deadweight welfare loss', desc: 'Between Q* and the market output, every extra unit costs society more than it benefits — the shaded triangle is the welfare loss.' }
  ],
  posExternalityInteractive: [
    { state: 'base',       label: 'Market equilibrium',     desc: 'MPB (demand) meets supply at the free-market output — the market ignores the benefit spilling over to third parties.' },
    { state: 'extension',  label: 'Add MSB and MEB',        desc: 'MSB sits above MPB; the vertical gap is the marginal external benefit (MEB) enjoyed by third parties.' },
    { state: 'shift',      label: 'Socially optimal output', desc: 'Welfare is maximised where MSB = MSC, at the higher output Q*.' },
    { state: 'efficiency', label: 'Welfare gain forgone',    desc: 'The unaided market under-consumes; the shaded triangle is the welfare society loses by stopping short of Q*.' }
  ],
  demandInteractive: [
    { state: 'base',      label: 'The demand curve', desc: 'Demand slopes down: as price falls, quantity demanded rises, other things held equal.' },
    { state: 'extension', label: 'Movement along',   desc: 'A change in the good’s own price moves you along the curve — a change in quantity demanded, not a change in demand.' },
    { state: 'shift',     label: 'Demand shifts',    desc: 'A change in a non-price determinant (income, tastes, the price of substitutes) shifts the whole curve left or right.' }
  ],
  ppfInteractive: [
    { state: 'base',       label: 'Construction',     desc: 'The frontier shows the maximum combinations of two goods an economy can produce with its resources fully and efficiently employed.' },
    { state: 'extension',  label: 'Opportunity cost', desc: 'Moving along the frontier means giving up some of one good to gain more of the other — that forgone output is the opportunity cost.' },
    { state: 'shift',      label: 'Shifts',           desc: 'More or better resources — investment, net immigration, new technology — shift the whole frontier outward; the reverse shifts it in.' },
    { state: 'efficiency', label: 'Efficiency',       desc: 'Points on the curve are productively efficient; points inside are inefficient; points beyond are unattainable with today’s resources.' }
  ],
  phillipsInteractive: [
    { state: 'base',      label: 'The original Phillips curve', desc: 'The 1958 relationship: lower unemployment came with higher wage and price inflation — an apparent stable trade-off.' },
    { state: 'extension', label: 'The long-run curve',          desc: 'Friedman and Phelps (1968): once inflation expectations adjust, the long-run Phillips curve is vertical at the natural rate of unemployment.' },
    { state: 'shift',     label: '1970s stagflation',           desc: 'High inflation and high unemployment together broke the simple trade-off and shifted the short-run curve outward.' }
  ],
  disequilibriumInteractive: [
    { state: 'base',     label: 'Market in equilibrium',     desc: 'At the market-clearing price, quantity demanded equals quantity supplied — no shortage and no surplus.' },
    { state: 'shortage', label: 'Excess demand (shortage)',  desc: 'A price below equilibrium leaves quantity demanded above quantity supplied; the shortage bids the price up.' },
    { state: 'surplus',  label: 'Excess supply (surplus)',   desc: 'A price above equilibrium leaves quantity supplied above quantity demanded; the surplus pushes the price down.' }
  ],
  adInteractive: [
    { state: 'base',      label: 'The AD curve',     desc: 'Aggregate demand slopes down for three macro reasons: the real-balance effect, the interest-rate effect, and the trade (net-exports) effect.' },
    { state: 'extension', label: 'Movement along AD', desc: 'A change in the general price level slides you along AD — a change in the quantity of real output demanded, not a change in AD itself.' },
    { state: 'shift',     label: 'AD shifts',        desc: 'A change in any component of AD — consumption, investment, government spending or net exports — shifts the whole curve left or right.' }
  ],
  cpsSvg: [
    { state: 'base',  label: 'Equilibrium',      desc: 'Demand and supply cross at the market price P* and quantity Q*.' },
    { state: 'cs',    label: 'Consumer surplus', desc: 'The area below demand and above the price: what buyers were willing to pay minus what they actually paid.' },
    { state: 'ps',    label: 'Producer surplus', desc: 'The area above supply and below the price: what sellers received minus their minimum acceptable price.' },
    { state: 'total', label: 'Total surplus',    desc: 'Consumer plus producer surplus — the total welfare a competitive market generates at equilibrium.' },
    { state: 'dwl',   label: 'Deadweight loss',  desc: 'Restrict output below Q* and the shaded triangle of mutually beneficial trades that no longer happen is lost.' }
  ]
};

function articleRoutes() {
  const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
  /* :::section { eyebrow, color, icon } … ::: — one section per
     prose block, with the eyebrow chrome the monopoly article uses. */
  md.use(mdContainer, 'section', {
    validate: (params) => params.trim().startsWith('section'),
    render: (tokens, idx) => {
      if (tokens[idx].nesting !== 1) return '</section>\n';
      const raw = tokens[idx].info.trim().slice('section'.length).trim();
      const attrs = parseAttrs(raw);
      const colorMod = attrs.color ? ` section__eyebrow--${escapeAttr(attrs.color)}` : '';
      const iconSvg = ICONS[attrs.icon] || ICONS.spark;
      const eyebrowText = attrs.eyebrow ? escapeHtml(attrs.eyebrow) : '';
      return `<section class="section">\n`
           + `  <div class="section__eyebrow${colorMod}">${iconSvg}${eyebrowText}</div>\n`;
    }
  });

  /* :::callout { variant } … ::: — neutral container for highlight
     blocks like the "exam move" note inside a real-world chain. */
  md.use(mdContainer, 'callout', {
    validate: (params) => params.trim().startsWith('callout'),
    render: (tokens, idx) => {
      if (tokens[idx].nesting !== 1) return '</aside>\n';
      const raw = tokens[idx].info.trim().slice('callout'.length).trim();
      const attrs = parseAttrs(raw);
      const variant = attrs.variant ? ` callout--${escapeAttr(attrs.variant)}` : '';
      return `<aside class="callout${variant}">\n`;
    }
  });

  /* :::two-col — side-by-side comparison grid. Usually wraps two
     :::card blocks. Renders the same .two-col layout the monopoly
     article uses; CSS in articles/articles.css already styles it. */
  md.use(mdContainer, 'two-col', {
    validate: (params) => params.trim().startsWith('two-col'),
    render: (tokens, idx) => tokens[idx].nesting === 1
      ? `<div class="two-col">\n`
      : `</div>\n`
  });

  /* :::card { variant="mr|ar|…" title="…" } — single comparison card
     inside :::two-col. Variant maps to a .cause-card--<variant>
     colour modifier; title becomes an <h3>. Body is Markdown — drop
     raw <svg class="cause-card__diagram"> inline at the end of the
     body for the per-card mini-diagram. */
  md.use(mdContainer, 'card', {
    validate: (params) => params.trim().startsWith('card'),
    render: (tokens, idx) => {
      if (tokens[idx].nesting !== 1) return '</div></article>\n';
      const raw = tokens[idx].info.trim().slice('card'.length).trim();
      const attrs = parseAttrs(raw);
      const variant = attrs.variant ? ` cause-card--${escapeAttr(attrs.variant)}` : '';
      const heading = attrs.title ? `<h3>${escapeHtml(attrs.title)}</h3>\n` : '';
      return `<article class="cause-card${variant}"><div>\n${heading}`;
    }
  });

  /* :::diagram { caption="…" } — wraps inline raw SVG (or other
     HTML) in the .diagram-block container the existing CSS expects.
     Caption attr is rendered after the body inside .diagram-block__
     caption, and runs through markdown-it's inline renderer so
     **bold** and *italic* and inline links work. We pop the attrs
     off a closure-scoped stack so the caption survives until the
     close token. */
  const diagramStack = [];
  md.use(mdContainer, 'diagram', {
    validate: (params) => params.trim().startsWith('diagram'),
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        const raw = tokens[idx].info.trim().slice('diagram'.length).trim();
        diagramStack.push(parseAttrs(raw));
        return `<div class="diagram-block">\n`;
      }
      const attrs = diagramStack.pop() || {};
      const captionHtml = attrs.caption ? md.renderInline(attrs.caption) : '';
      const caption = captionHtml
        ? `<p class="diagram-block__caption">${captionHtml}</p>\n`
        : '';
      return `${caption}</div>\n`;
    }
  });

  /* :::econos-diagram { svgKey="adDemandPullInteractive" caption="…" } —
     wraps a learn-it SVG (looked up in ECONOS_ICONS) in the same
     .diagram-block markup the :::diagram directive uses. Lets articles
     reuse the canonical diagrams from the SPA without duplicating SVGs. */
  const econDiagramStack = [];
  md.use(mdContainer, 'econos-diagram', {
    validate: (params) => params.trim().startsWith('econos-diagram'),
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        const raw = tokens[idx].info.trim().slice('econos-diagram'.length).trim();
        const attrs = parseAttrs(raw);
        const svg = (attrs.svgKey && ICONS_LIB[attrs.svgKey]) || '';
        const ariaLabel = attrs.label || attrs.svgKey || 'diagram';
        const preset = attrs.interactive === 'true' ? INTERACTIVE_PRESETS[attrs.svgKey] : null;

        /* Interactive: emit a self-contained stepper (stage + tabs +
           panels) here, and have the close token render nothing. */
        if (preset && svg) {
          econDiagramStack.push({ interactive: true });
          const first = preset[0].state;
          const tabs = preset.map((p, i) =>
            `<button type="button" class="ad-tab${i === 0 ? ' is-active' : ''}" data-state="${escapeAttr(p.state)}" aria-pressed="${i === 0 ? 'true' : 'false'}">`
            + `<span class="ad-tab__num">${i + 1}</span>`
            + `<span class="ad-tab__label">${escapeHtml(p.label)}</span>`
            + `</button>`).join('');
          const panels = preset.map((p, i) =>
            `<div class="ad-panel${i === 0 ? ' is-active' : ''}" data-state="${escapeAttr(p.state)}">`
            + `<div class="ad-panel__title">${escapeHtml(p.label)}</div>`
            + `<div class="ad-panel__body">${md.renderInline(p.desc)}</div>`
            + `</div>`).join('');
          const captionHtml = attrs.caption ? md.renderInline(attrs.caption) : '';
          const caption = captionHtml ? `<p class="article-interactive__caption">${captionHtml}</p>` : '';
          return `<figure class="article-diagram article-interactive" aria-label="${escapeAttr(ariaLabel)}">\n`
            + `  <div class="ad-interactive__diagram show-${escapeAttr(first)}" data-ad-state="${escapeAttr(first)}">${svg}</div>\n`
            + `  <div class="ad-interactive__tabs" role="group" aria-label="Diagram steps" style="grid-template-columns:repeat(${preset.length}, minmax(0, 1fr));">${tabs}</div>\n`
            + `  <div class="ad-interactive__panels">${panels}</div>\n`
            + `  ${caption}</figure>\n`;
        }

        econDiagramStack.push({ attrs });
        return `<div class="diagram-block article-diagram" role="img" aria-label="${escapeAttr(ariaLabel)}">\n${svg}\n`;
      }
      const top = econDiagramStack.pop() || {};
      if (top.interactive) return '';
      const attrs = top.attrs || {};
      const captionHtml = attrs.caption ? md.renderInline(attrs.caption) : '';
      const caption = captionHtml
        ? `<p class="diagram-block__caption">${captionHtml}</p>\n`
        : '';
      return `${caption}</div>\n`;
    }
  });

  /* :::econ-insight { portraitKey="economistFriedman" tone="amber" label="…"
                       attribution="Milton Friedman, …" } — mirrors the
     learn-it engine's economistQuote block: portrait left, quote right,
     small-caps eyebrow label, attribution after the quote. Body of the
     container is the quote text (markdown). Tone palette matches the
     section eyebrow colours (green/amber/blue/pink/purple/rose). */
  const insightStack = [];
  md.use(mdContainer, 'econ-insight', {
    validate: (params) => params.trim().startsWith('econ-insight'),
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        const raw = tokens[idx].info.trim().slice('econ-insight'.length).trim();
        const attrs = parseAttrs(raw);
        insightStack.push(attrs);
        const tone = attrs.tone ? ` article-econ-insight--${escapeAttr(attrs.tone)}` : '';
        const portrait = (attrs.portraitKey && ICONS_LIB[attrs.portraitKey]) || '';
        const portraitCell = portrait
          ? `<div class="article-econ-insight__portrait" aria-hidden="true">${portrait}</div>\n`
          : '';
        const label = attrs.label
          ? `<div class="article-econ-insight__label">${escapeHtml(attrs.label)}</div>\n`
          : '<div class="article-econ-insight__label">Economist insight</div>\n';
        return `<aside class="article-econ-insight${tone}">\n${portraitCell}<div class="article-econ-insight__body">\n${label}<blockquote class="article-econ-insight__quote">\n`;
      }
      const attrs = insightStack.pop() || {};
      const attribution = attrs.attribution
        ? `<footer class="article-econ-insight__attr">${md.renderInline(attrs.attribution)}</footer>\n`
        : '';
      return `</blockquote>\n${attribution}</div>\n</aside>\n`;
    }
  });

  /* Parse "key=value key2=\"quoted value\"" attribute strings off a
     directive opening line. Returns an object. Keeps the surface small
     — no nested quotes, no escaping — because directive params should
     stay simple. */
  function parseAttrs(s) {
    const out = {};
    const re = /(\w[\w-]*)\s*=\s*(?:"([^"]*)"|(\S+))/g;
    let m;
    while ((m = re.exec(s))) {
      out[m[1]] = m[2] !== undefined ? m[2] : m[3];
    }
    return out;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function escapeAttr(s) { return String(s).replace(/[^a-z0-9_-]/gi, ''); }

  /* Tiny inline-SVG palette used by section eyebrows. Keeps the
     plugin self-contained — no runtime fetch, no dependency on the
     site's JS icon registry. Add new keys here as future article
     directives need them. */
  const ICONS = {
    bulb:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M9 18h6M10 22h4M12 2a7 7 0 014 12.5V17H8v-2.5A7 7 0 0112 2z"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>',
    globe:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13 13 0 010 18M12 3a13 13 0 000 18"/></svg>',
    scale:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M12 3v18M3 7h18M3 7l3 8a3 3 0 006 0M21 7l-3 8a3 3 0 01-6 0"/></svg>',
    cap:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M2 9l10-5 10 5-10 5L2 9z"/><path d="M6 11v5c0 1 3 3 6 3s6-2 6-3v-5"/></svg>',
    spark:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/></svg>',
    check:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M5 13l4 4L19 7"/></svg>'
  };

  /* Render the full HTML page for one Markdown-sourced article.
     The chrome (topnav + breadcrumb + article header + at-a-glance
     sidebar + want-more CTA + article footer) is templated here so
     it's identical across every article and lives in one place. */
  function renderArticle({ slug, frontmatter: fm, body }) {
    const url = `https://econos.co.uk/articles/${slug}/`;
    const title = `${fm.title} | Econos`;
    const desc  = fm.description || '';
    const renderedBody = md.render(body);

    /* JSON-LD: always Article schema; FAQPage too when frontmatter
       supplies a faq array. Both are emitted as separate <script>
       blocks so Google's parser handles each cleanly. */
    const articleLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: fm.title,
      description: desc,
      author: { '@type': 'Person', name: fm.author || 'Roger Perowne', jobTitle: 'A-level Economics teacher' },
      publisher: { '@type': 'Organization', name: 'Econos', url: 'https://econos.co.uk' },
      datePublished: fm.published || fm.dates?.published,
      dateModified: fm.modified || fm.dates?.modified || fm.published || fm.dates?.published,
      mainEntityOfPage: url,
      about: fm.about || fm.keywords || [],
      educationalLevel: 'A-level',
      learningResourceType: 'Article',
      inLanguage: 'en-GB'
    };
    const ldBlocks = [
      `<script type="application/ld+json">${JSON.stringify(articleLd)}</script>`
    ];
    if (Array.isArray(fm.faq) && fm.faq.length) {
      const faqLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: fm.faq.map((qa) => ({
          '@type': 'Question',
          name: qa.q,
          acceptedAnswer: { '@type': 'Answer', text: qa.a }
        }))
      };
      ldBlocks.push(`<script type="application/ld+json">${JSON.stringify(faqLd)}</script>`);
    }

    const breadcrumb = renderBreadcrumb(fm);
    const glance = renderGlance(fm);
    const friction = renderFriction(fm);
    const wantMore = renderWantMore(fm);
    const footer = renderArticleFooter(fm);
    const specMeta = renderSpecMeta(fm);
    const boardPills = renderBoardPills(fm);
    const knowledgeCheck = renderKnowledgeCheck(fm);

    return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(desc)}">
  <meta name="theme-color" content="#FAF8F4">
  <link rel="canonical" href="${url}">
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Econos">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${escapeHtml(fm.title)}">
  <meta property="og:description" content="${escapeHtml(desc)}">
  <meta property="og:image" content="https://econos.co.uk/assets/logo-full.png">
  <meta name="twitter:card" content="summary_large_image">
  ${ldBlocks.join('\n  ')}
  <link rel="preload" as="font" type="font/woff2" href="/fonts/inter-variable.woff2" crossorigin>
  <link rel="stylesheet" href="/fonts.css">
  <link rel="stylesheet" href="/articles/articles.css">
  <link rel="stylesheet" href="/articles/diagram.css">
</head>
<body>
${renderTopnav()}
  <main class="article" id="main-content">
${breadcrumb}
${boardPills}
    <div class="article-grid">
      <header class="article-header">
        <h1>${escapeHtml(fm.title)}</h1>
        ${fm.lede ? `<p class="article-lede">${escapeHtml(fm.lede)}</p>` : ''}
        <div class="article-meta">
          <span>${fm.read_minutes ? `${fm.read_minutes} min read` : ''}</span>
          ${specMeta}
        </div>
${friction}
      </header>
${glance}
    </div>
${renderedBody}
${knowledgeCheck}
${wantMore}
${footer}
  </main>
${renderSiteFooter()}
  <script defer src="/articles/diagram.js"></script>
  <script defer src="/articles/quiz.js"></script>
</body>
</html>
`;
  }

  function renderTopnav() {
    /* Articles moved to the footer in v0.8 — the homepage CTA + the
       generated article pages all link to /articles/ from the
       Footer's Library column. Keeps the topnav focused on the
       three Learn-It funnel anchors. */
    return `  <nav class="topnav" role="navigation" aria-label="Main navigation">
    <a href="/" class="topnav__logo" aria-label="Econos home">
      <img src="/assets/logo-wordmark-mark.png" alt="Econos — Learn it. Link it. Land it." height="44">
    </a>
    <ul class="topnav__links" role="list">
      <li><a href="/#how-it-works">How it works</a></li>
      <li><a href="/#features">Features</a></li>
      <li><a href="/#topics">Topics</a></li>
      <li><a href="/#audience">About</a></li>
    </ul>
    <div class="topnav__actions">
      <a href="/login" class="btn btn--outline">Log in</a>
      <a href="/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it" class="btn btn--solid">Get started</a>
    </div>
  </nav>`;
  }

  /* Site footer with multi-column link grid + brand strip.
     Shared across every article page AND the articles hub. The
     homepage has its own richer hp-footer (with the L/L/L legend)
     so we don't render the article variant there. */
  function renderSiteFooter() {
    return `  <footer class="site-footer" role="contentinfo">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <div class="site-footer__brandmark">Econos</div>
        <p class="site-footer__tagline">Learn it. Link it. Land it. — A-level economics revision built around the frameworks examiners reward.</p>
      </div>
      <nav class="site-footer__cols" aria-label="Footer navigation">
        <div class="site-footer__col">
          <h3>Learn</h3>
          <ul>
            <li><a href="/#topics">All topics</a></li>
            <li><a href="/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it">Start a session</a></li>
            <li><a href="/#how-it-works">How it works</a></li>
          </ul>
        </div>
        <div class="site-footer__col">
          <h3>Library</h3>
          <ul>
            <li><a href="/articles/">All articles</a></li>
            <li><a href="/articles/feed.xml">RSS feed</a></li>
          </ul>
        </div>
        <div class="site-footer__col">
          <h3>Account</h3>
          <ul>
            <li><a href="/login">Log in</a></li>
            <li><a href="/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it">Get started</a></li>
          </ul>
        </div>
        <div class="site-footer__col">
          <h3>Legal</h3>
          <ul>
            <li><a href="/privacy-policy">Privacy policy</a></li>
            <li><a href="/terms">Terms</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="site-footer__bottom">
      <span>© Econos</span>
      <span class="site-footer__legend">
        <span class="site-footer__dot site-footer__dot--green"></span> Learn it
        <span class="site-footer__dot site-footer__dot--yellow"></span> Link it
        <span class="site-footer__dot site-footer__dot--pink"></span> Land it
      </span>
    </div>
  </footer>`;
  }

  function renderBreadcrumb(fm) {
    const crumbs = Array.isArray(fm.breadcrumb) ? fm.breadcrumb : [
      { label: 'Articles', href: '/articles/' },
      { label: fm.title || 'Article' }
    ];
    const items = crumbs.map((c, i) => {
      const isLast = i === crumbs.length - 1;
      if (isLast || !c.href) return `<li aria-current="page">${escapeHtml(c.label)}</li>`;
      return `<li><a href="${escapeAttrUrl(c.href)}">${escapeHtml(c.label)}</a></li>`;
    }).join('\n        ');
    return `    <nav class="breadcrumb" aria-label="Breadcrumb">
      <ol>
        ${items}
      </ol>
    </nav>`;
  }

  function escapeAttrUrl(s) { return String(s).replace(/"/g, '&quot;'); }

  function renderFriction(fm) {
    if (!fm.friction) return '';
    const parasRaw = Array.isArray(fm.friction) ? fm.friction : [fm.friction];
    const paras = parasRaw.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n            ');
    return `        <aside class="friction" aria-label="The friction">
          <div class="friction__icon">${ICONS.check}</div>
          <div>
            <h2>The friction</h2>
            ${paras}
          </div>
        </aside>`;
  }

  function renderGlance(fm) {
    if (!Array.isArray(fm.glance) || !fm.glance.length) return '';
    const facts = fm.glance.map((f) => `        <div class="fact">
          <span class="fact__icon">${ICONS.check}</span>
          <div>
            <div class="fact__label">${escapeHtml(f.label)}</div>
            <div class="fact__value">${escapeHtml(f.value)}</div>
          </div>
        </div>`).join('\n');
    const cta = fm.glance_cta && fm.glance_cta.href
      ? `        <a href="${escapeAttrUrl(fm.glance_cta.href)}" class="at-a-glance__cta">${escapeHtml(fm.glance_cta.label || 'Explore the full topic →')}</a>`
      : '';
    const heading = fm.glance_title || (fm.title ? `${fm.title.split(/[?:.]/)[0].trim()} at a glance` : 'At a glance');
    return `      <aside class="at-a-glance" aria-label="Key facts">
        <h2>${escapeHtml(heading)}</h2>
${facts}
${cta}
      </aside>`;
  }

  /* Knowledge-check section appended to every article that ships a
     `questions:` array in its frontmatter. Three cards (easy / medium /
     hard) coloured green / amber / rose to match the home-page
     Learn It / Link It / Land It palette. Each card is a native
     <details> element — no JS required, indexable by Google, accessible
     out of the box. Question shape matches the per-topic learn-it.js
     quiz pool format so authors can lift questions wholesale. */
  const QC_DIFFICULTY = {
    easy:   { label: 'Easy',         classMod: 'easy'   },
    medium: { label: 'Intermediate', classMod: 'medium' },
    hard:   { label: 'Hardest',      classMod: 'hard'   }
  };
  function renderKnowledgeCheck(fm) {
    if (!Array.isArray(fm.questions) || fm.questions.length === 0) return '';
    const cards = fm.questions.slice(0, 3).map((q, i) => {
      const diff = QC_DIFFICULTY[q.difficulty] || QC_DIFFICULTY[['easy','medium','hard'][i] || 'medium'];
      const hasOpts = Array.isArray(q.opts) && q.opts.length;
      /* Interactive MCQ. Each option is a button carrying data-correct;
         quiz.js (loaded on every article page) reveals the verdict only
         after the reader CLICKS an option — green tick on the right
         answer, red cross on a wrong pick, then the explanation.

         Progressive enhancement: with JS off the feedback block (correct
         answer + explanation) is visible by default and nothing is
         pre-highlighted green, so the answer is still reachable and
         indexable. quiz.js adds `is-quiz` on load, which hides the
         feedback until a click. `ans` is the 0-indexed correct option. */
      let optsBlock = '';
      if (hasOpts) {
        const items = q.opts.map((opt, oi) => {
          const correct = oi === q.ans;
          return `<li><button type="button" class="article-qc__opt" data-correct="${correct ? 'true' : 'false'}">`
            + `<span class="article-qc__opt-text">${escapeHtml(String(opt))}</span>`
            + `<span class="article-qc__icon" aria-hidden="true"></span>`
            + `</button></li>`;
        }).join('');
        optsBlock = `<ul class="article-qc__opts" role="list">${items}</ul>`;
      }
      const correctText = (hasOpts && q.opts[q.ans] !== undefined)
        ? `<p class="article-qc__answer"><strong>Correct answer:</strong> ${escapeHtml(String(q.opts[q.ans]))}</p>`
        : (q.ans !== undefined ? `<p class="article-qc__answer"><strong>Answer:</strong> ${escapeHtml(String(q.ans))}</p>` : '');
      const exp = q.exp
        ? `<p class="article-qc__exp">${md.renderInline(String(q.exp))}</p>`
        : '';
      return `        <div class="article-qc__card article-qc__card--${diff.classMod}" data-qc-card>
          <span class="article-qc__chip">${diff.label}</span>
          <p class="article-qc__q">${escapeHtml(String(q.q || ''))}</p>
          ${optsBlock}
          <div class="article-qc__feedback" aria-live="polite">
            ${correctText}
            ${exp}
          </div>
        </div>`;
    }).join('\n');
    return `    <section class="article-qc" aria-labelledby="qc-heading">
      <header class="article-qc__head">
        <h2 id="qc-heading">Check your knowledge</h2>
        <p>Three multiple-choice questions — easy, intermediate, hard. Pick an option to see the answer.</p>
      </header>
${cards}
    </section>`;
  }

  function renderWantMore(fm) {
    if (!fm.want_more) return '';
    const wm = fm.want_more;
    const primary = wm.primary_href
      ? `<a href="${escapeAttrUrl(wm.primary_href)}" class="cta-primary">${escapeHtml(wm.primary_label || 'Explore the full topic →')}</a>`
      : '';
    const secondary = wm.secondary_href
      ? `<a href="${escapeAttrUrl(wm.secondary_href)}" class="cta-secondary">${escapeHtml(wm.secondary_label || 'Sign up free')}</a>`
      : '';
    return `    <section class="want-more" aria-labelledby="more">
      <div>
        <h2 id="more">${escapeHtml(wm.title || 'Want more depth?')}</h2>
        ${wm.subtitle ? `<p class="want-more__sub">${escapeHtml(wm.subtitle)}</p>` : ''}
        <div class="want-more__ctas">
          ${primary}
          ${secondary}
        </div>
      </div>
    </section>`;
  }

  /* Board label registry — kept in step with js/config/boards.js.
     Duplicated here because the build runs in Node and doesn't load
     the browser registry. Add new boards in both places. */
  const BOARD_LABELS = {
    edexcel_a: 'Edexcel A',
    edexcel_b: 'Edexcel B',
    aqa:       'AQA',
    ocr:       'OCR'
  };
  const BOARD_ORDER = ['edexcel_a', 'edexcel_b', 'aqa', 'ocr'];

  /* `fm.spec` is either a legacy string ("Edexcel A · 3.4.5") or a
     per-board object: { edexcel_a: "3.4.5", aqa: null, ... }. The
     article HTML is static — emit every populated board variant so
     SEO sees every mapping, and so users on any board find a spec
     point they recognise. */
  function specEntries(fm) {
    if (!fm.spec) return [];
    if (typeof fm.spec === 'string') return [{ label: '', value: fm.spec }];
    const entries = [];
    for (const id of BOARD_ORDER) {
      const v = fm.spec[id];
      if (v) entries.push({ label: BOARD_LABELS[id] || id, value: String(v) });
    }
    return entries;
  }

  function renderSpecMeta(fm) {
    const entries = specEntries(fm);
    if (!entries.length) return '';
    const inline = entries
      .map(e => e.label ? `${escapeHtml(e.label)} ${escapeHtml(e.value)}` : escapeHtml(e.value))
      .join(' · ');
    return `<span>A-level (${inline})</span>`;
  }

  /* Which boards this article applies to. Per-board object spec
     pins it down; legacy string spec is treated as Edexcel A only. */
  function applicableBoards(fm) {
    const out = new Set();
    if (fm.spec && typeof fm.spec === 'object' && !Array.isArray(fm.spec)) {
      for (const id of BOARD_ORDER) if (fm.spec[id]) out.add(id);
    } else if (typeof fm.spec === 'string' && fm.spec) {
      out.add('edexcel_a');
    }
    return out;
  }

  /* Four-pip row at the top of every article showing which exam
     boards the article applies to. Mirrors the home-page topic
     stage-pip visual: pills are filled with that board's palette
     colour when applicable (green/yellow/pink/purple, the third
     extending the Learn/Link/Land trio with purple for OCR),
     hollow grey when not. The per-board spec number (when
     present) renders inside the filled pip so a student can
     spot their reference at a glance. */
  function renderBoardPills(fm) {
    const applicable = applicableBoards(fm);
    if (applicable.size === 0) return '';
    const pills = BOARD_ORDER.map((id) => {
      const active = applicable.has(id);
      const spec = (active && fm.spec && typeof fm.spec === 'object') ? fm.spec[id] : null;
      const specHtml = (active && spec)
        ? `<span class="article-boards__spec">${escapeHtml(String(spec))}</span>`
        : '';
      return `      <span class="article-boards__pill article-boards__pill--${id}${active ? ' is-active' : ''}"
        role="listitem"
        aria-label="${escapeHtml(BOARD_LABELS[id])}${active ? ' — applies' : ' — does not apply'}">
        <span class="article-boards__name">${escapeHtml(BOARD_LABELS[id])}</span>${specHtml}
      </span>`;
    }).join('\n');
    return `    <div class="article-boards" role="list" aria-label="Applicable exam boards">
      <span class="article-boards__label">For:</span>
${pills}
    </div>`;
  }

  function renderArticleFooter(fm) {
    const updated = fm.modified || fm.dates?.modified || fm.published || fm.dates?.published || '';
    const entries = specEntries(fm);
    const specLine = entries.length
      ? `<div class="article-footer__item">${ICONS.cap} Mapped to ${entries
          .map(e => e.label ? `${escapeHtml(e.label)} ${escapeHtml(e.value)}` : escapeHtml(e.value))
          .join(' · ')}</div>`
      : '';
    return `    <footer class="article-footer">
      ${specLine}
      ${updated ? `<div class="article-footer__item">Last updated: ${escapeHtml(formatDate(updated))}</div>` : ''}
    </footer>`;
  }

  function formatDate(iso) {
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return String(iso);
      return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch { return String(iso); }
  }

  /* Build / write everything article-related at closeBundle. */
  function generate() {
    const distDir = resolve(ROOT, 'dist');
    if (!existsSync(distDir)) return;
    const articlesSrc  = resolve(ROOT, 'articles');
    const articlesDist = join(distDir, 'articles');
    mkdirSync(articlesDist, { recursive: true });

    /* Hub + CSS — verbatim copies. */
    if (existsSync(join(articlesSrc, 'index.html'))) {
      writeFileSync(join(articlesDist, 'index.html'), readFileSync(join(articlesSrc, 'index.html'), 'utf8'));
    }
    if (existsSync(join(articlesSrc, 'articles.css'))) {
      writeFileSync(join(articlesDist, 'articles.css'), readFileSync(join(articlesSrc, 'articles.css'), 'utf8'));
    }
    /* Interactive-diagram support: the ported layer state-machine CSS
       and the tab controller. Verbatim copies, same as articles.css. */
    for (const asset of ['diagram.css', 'diagram.js', 'quiz.js']) {
      if (existsSync(join(articlesSrc, asset))) {
        writeFileSync(join(articlesDist, asset), readFileSync(join(articlesSrc, asset), 'utf8'));
      }
    }

    /* Hand-rolled articles — copy every articles/<slug>/index.html
       through verbatim. Skip the 'sources' directory. */
    const handRolledSlugs = new Set();
    for (const name of readdirSync(articlesSrc)) {
      if (name === 'sources') continue;
      const dir = join(articlesSrc, name);
      let s; try { s = statSync(dir); } catch { continue; }
      if (!s.isDirectory()) continue;
      const htmlPath = join(dir, 'index.html');
      if (!existsSync(htmlPath)) continue;
      const destDir = join(articlesDist, name);
      mkdirSync(destDir, { recursive: true });
      cpSync(htmlPath, join(destDir, 'index.html'));
      handRolledSlugs.add(name);
    }

    /* Markdown-sourced articles.
       Walks articles/sources/ recursively so authors can drop
       sources into theme subfolders (microeconomics/, macroeconomics/,
       finance/, etc.). The folder structure is editorial — every
       article still publishes to a flat /articles/<slug>/ URL so
       the URL contract is unaffected by the source layout. */
    const sourcesDir = join(articlesSrc, 'sources');
    const markdownEntries = [];
    function walkSources(dir) {
      if (!existsSync(dir)) return;
      for (const name of readdirSync(dir)) {
        if (name.startsWith('_') || name.startsWith('.')) continue;
        const full = join(dir, name);
        const s = statSync(full);
        if (s.isDirectory()) { walkSources(full); continue; }
        if (!name.endsWith('.md')) continue;
        const slug = name.replace(/\.md$/, '');
        const raw = readFileSync(full, 'utf8');
        const { data: fm, content } = matter(raw);
        if (fm.draft === true || fm.status === 'draft') continue;
        const html = renderArticle({ slug, frontmatter: fm, body: content });
        const destDir = join(articlesDist, slug);
        mkdirSync(destDir, { recursive: true });
        writeFileSync(join(destDir, 'index.html'), html);
        markdownEntries.push({
          slug,
          url: `/articles/${slug}/`,
          title: fm.title || slug,
          description: fm.description || '',
          theme: fm.theme || '',
          spec: specEntries(fm).map(e => e.label ? `${e.label} ${e.value}` : e.value).join(' · '),
          /* Per-board spec map (object shape) ships verbatim so the
             hub can render pills + filter by board. Empty object
             when an article has no per-board mapping. */
          board_specs: (fm.spec && typeof fm.spec === 'object' && !Array.isArray(fm.spec))
            ? Object.fromEntries(BOARD_ORDER.filter((b) => fm.spec[b]).map((b) => [b, String(fm.spec[b])]))
            : (typeof fm.spec === 'string' && fm.spec ? { edexcel_a: fm.spec } : {}),
          boards: Array.from(applicableBoards(fm)),
          keywords: fm.keywords || [],
          read_minutes: fm.read_minutes || 0,
          status: fm.status || 'live',
          /* Surfaced for the sitemap lastmod + future hub
             "Updated" badges. */
          published: fm.published || fm.dates?.published || '',
          modified:  fm.modified  || fm.dates?.modified  || ''
        });
      }
    }
    walkSources(sourcesDir);

    /* Search index — preserve hand-rolled entries from the source
       index.json, replace markdown entries with freshly-built ones. */
    let existingIdx = [];
    const existingIdxPath = join(articlesSrc, 'search-index.json');
    if (existsSync(existingIdxPath)) {
      try { existingIdx = JSON.parse(readFileSync(existingIdxPath, 'utf8')); }
      catch { /* malformed — start fresh */ }
    }
    const markdownSlugs = new Set(markdownEntries.map((e) => e.slug));
    const preservedHandRolled = existingIdx.filter(
      (e) => handRolledSlugs.has(e.slug) && !markdownSlugs.has(e.slug)
    );
    const finalIdx = [...preservedHandRolled, ...markdownEntries];
    writeFileSync(join(articlesDist, 'search-index.json'), JSON.stringify(finalIdx, null, 2) + '\n');

    /* Append article URLs to sitemap.xml — the topic-routes plugin
       already wrote it during this same closeBundle (vite runs the
       plugins in the order they appear in the plugins array, and we
       sit after topic-routes). Read, insert, write back.

       lastmod uses each article's frontmatter `modified` date
       (falling back to `published`, then today) so Google sees
       accurate per-article freshness signals — important for
       articles where the underlying SPA content has been updated
       but the markdown source hasn't, or vice versa. */
    const sitemapPath = join(distDir, 'sitemap.xml');
    if (existsSync(sitemapPath)) {
      const today = new Date().toISOString().slice(0, 10);
      const isoDate = (d) => {
        if (!d) return null;
        const dt = new Date(d);
        return isNaN(dt.getTime()) ? null : dt.toISOString().slice(0, 10);
      };
      const articleUrls = finalIdx.map((a) => {
        const lastmod = isoDate(a.modified) || isoDate(a.published) || today;
        return `  <url>\n    <loc>https://econos.co.uk${a.url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`;
      }).join('\n');
      const src = readFileSync(sitemapPath, 'utf8');
      /* Drop the stub /articles/* entries the topic-routes plugin
         injects so we don't double-list them. */
      const stripped = src.replace(/\s*<url>\s*<loc>https:\/\/econos\.co\.uk\/articles\/[^<]*<\/loc>[\s\S]*?<\/url>/g, '');
      const next = stripped.replace('</urlset>', `${articleUrls}\n</urlset>`);
      writeFileSync(sitemapPath, next);
    }

    /* RSS feed for the article library.
       ─────────────────────────────────────────────────────────────
       Two reasons to ship this:
         1. Submit /articles/feed.xml to Google Search Console as a
            second sitemap-type source. Google specifically uses RSS
            updates as a recrawl signal — historically faster pickup
            than a sitemap-only setup for new posts.
         2. Lets a reader subscribe to new articles via any RSS
            reader without needing email signup. Low-cost moat.
       Items are sorted newest-first by published date. */
    const rssItems = finalIdx
      .slice()
      .sort((a, b) => {
        const aP = a.published ? new Date(a.published).getTime() : 0;
        const bP = b.published ? new Date(b.published).getTime() : 0;
        return bP - aP;
      })
      .map((a) => {
        const pub = a.published ? new Date(a.published) : new Date();
        return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>https://econos.co.uk${a.url}</link>
      <guid isPermaLink="true">https://econos.co.uk${a.url}</guid>
      <description>${escapeXml(a.description)}</description>
      <pubDate>${pub.toUTCString()}</pubDate>
    </item>`;
      }).join('\n');
    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Econos — A-level economics articles</title>
    <link>https://econos.co.uk/articles/</link>
    <description>Plain-English A-level economics articles. Inflation, GDP, monopolies, monetary policy — explained for revision, with UK examples.</description>
    <language>en-GB</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://econos.co.uk/articles/feed.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>
`;
    writeFileSync(join(articlesDist, 'feed.xml'), rssXml);

    // eslint-disable-next-line no-console
    console.log(`[article-routes] ${handRolledSlugs.size} hand-rolled, ${markdownEntries.length} from Markdown; search-index has ${finalIdx.length} entries; wrote feed.xml`);
  }

  function escapeXml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  /* Dev / preview: serve articles/ directly. Vite's MPA mode doesn't
     pick up nested HTML by default, so a small middleware maps
     /articles/<slug>/ → the hand-rolled file or, if a markdown source
     exists, renders it on the fly. Also maps the filter-landing
     URLs (/articles/board/<id>/, /articles/theme/<slug>/,
     /articles/board/<id>/theme/<slug>/) → the same articles
     hub page; the per-shell <meta> tags are absent in dev so the
     hub falls back to URL-path parsing for the initial filter. */
  function devMiddleware(req, _res, next) {
    try {
      const url = (req.url || '/').split('?')[0];
      const m = url.match(/^\/articles\/?(?:([a-z0-9-]+)\/?)?$/);
      if (!m) return next();
      const slug = m[1];
      if (!slug) { req.url = '/articles/index.html'; return next(); }
      /* Prefer a markdown source if one exists.
         Walks articles/sources/ recursively to find <slug>.md. */
      const findSource = (dir) => {
        if (!existsSync(dir)) return null;
        for (const name of readdirSync(dir)) {
          const full = join(dir, name);
          let s; try { s = statSync(full); } catch { continue; }
          if (s.isDirectory()) {
            const found = findSource(full);
            if (found) return found;
          } else if (name === slug + '.md') {
            return full;
          }
        }
        return null;
      };
      const mdPath = findSource(resolve(ROOT, 'articles/sources'));
      if (mdPath) {
        const raw = readFileSync(mdPath, 'utf8');
        const { data: fm, content } = matter(raw);
        if (!(fm.draft === true || fm.status === 'draft')) {
          const html = renderArticle({ slug, frontmatter: fm, body: content });
          _res.setHeader('Content-Type', 'text/html; charset=utf-8');
          _res.end(html);
          return;
        }
      }
      const htmlPath = resolve(ROOT, 'articles', slug, 'index.html');
      if (existsSync(htmlPath)) { req.url = `/articles/${slug}/index.html`; }
    } catch (e) { /* fall through */ }
    next();
  }

  return {
    name: 'article-routes',
    configureServer:        (server) => { server.middlewares.use(devMiddleware); },
    configurePreviewServer: (server) => { server.middlewares.use(devMiddleware); },
    closeBundle: generate
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
        /* Match both `src="js/foo.js"` and `src="/js/foo.js"` — the
           historical regex missed the leading-slash form, so topics.js
           and every other shell-loaded script kept being served stale
           from the service worker cache after a deploy. */
        return html.replace(/(src=")(\/?js\/[^"]+)(")/g, `$1$2?v=${BUILD_HASH}$3`);
      }
    },

    /* Wires the path-based URL contract for dev, preview, and build. */
    topicRoutes(),
    articleRoutes(),

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
