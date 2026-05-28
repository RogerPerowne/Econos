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
    land: Object.keys(s.land || {}),
    quiz: Array.isArray(s.quizSets) ? s.quizSets : []
  };
}
const STATIONS = loadStations();

function topicRoutes() {
  let registry = [];
  function ensureRegistry() {
    if (registry.length === 0) registry = loadTopicRegistry();
    return registry;
  }
  function topicById(id) {
    return ensureRegistry().find((t) => t.id === id);
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
    const resourceType =
      shell === 'learn' ? 'Concept' :
      shell === 'link'  ? 'ApplicationExercise' :
      shell === 'land'  ? 'AssessmentExercise' :
      /* quiz */          'Quiz';
    const stationStr = station ? ' · ' + formatStationLabel(shell, station) : '';
    const stageName = shell === 'learn' ? 'Learn It' : shell === 'link' ? 'Link It' : shell === 'land' ? 'Land It' : 'Quiz';
    const ld = {
      '@context': 'https://schema.org',
      '@type': shell === 'quiz' ? 'Quiz' : 'LearningResource',
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
    const stageName  = shell === 'learn' ? 'Learn It' : shell === 'link' ? 'Link It' : shell === 'land' ? 'Land It' : 'Quiz';
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
    const availList = ['learn', 'link', 'land', 'quiz']
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
     files. Point /learn/<topic> at /learn/<topic>/index.html (not the
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
</head>
<body>
${renderTopnav()}
  <main class="article" id="main-content">
${breadcrumb}
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
${wantMore}
${footer}
  </main>
</body>
</html>
`;
  }

  function renderTopnav() {
    return `  <nav class="topnav" role="navigation" aria-label="Main navigation">
    <a href="/" class="topnav__logo" aria-label="econos home">
      <img src="/assets/logo-wordmark-mark.png" alt="econos — Learn it. Link it. Land it." height="44">
    </a>
    <ul class="topnav__links" role="list">
      <li><a href="/#how-it-works">How it works</a></li>
      <li><a href="/#features">Features</a></li>
      <li><a href="/#topics">Topics</a></li>
      <li><a href="/articles/" class="is-active">Articles</a></li>
      <li><a href="/#audience">About</a></li>
    </ul>
    <div class="topnav__actions">
      <a href="/login" class="btn btn--outline">Log in</a>
      <a href="/learn/causes-of-inflation-and-deflation" class="btn btn--solid">Get started</a>
    </div>
  </nav>`;
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

    /* Markdown-sourced articles. */
    const sourcesDir = join(articlesSrc, 'sources');
    const markdownEntries = [];
    if (existsSync(sourcesDir)) {
      for (const name of readdirSync(sourcesDir)) {
        if (!name.endsWith('.md')) continue;
        if (name.startsWith('_')) continue; // template files use leading underscore
        const slug = name.replace(/\.md$/, '');
        const raw = readFileSync(join(sourcesDir, name), 'utf8');
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
          keywords: fm.keywords || [],
          read_minutes: fm.read_minutes || 0,
          status: fm.status || 'live'
        });
      }
    }

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
       sit after topic-routes). Read, insert, write back. */
    const sitemapPath = join(distDir, 'sitemap.xml');
    if (existsSync(sitemapPath)) {
      const today = new Date().toISOString().slice(0, 10);
      const articleUrls = finalIdx.map((a) =>
        `  <url>\n    <loc>https://econos.co.uk${a.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`
      ).join('\n');
      const src = readFileSync(sitemapPath, 'utf8');
      /* Drop the stub /articles/* entries the topic-routes plugin
         injects so we don't double-list them. */
      const stripped = src.replace(/\s*<url>\s*<loc>https:\/\/econos\.co\.uk\/articles\/[^<]*<\/loc>[\s\S]*?<\/url>/g, '');
      const next = stripped.replace('</urlset>', `${articleUrls}\n</urlset>`);
      writeFileSync(sitemapPath, next);
    }

    // eslint-disable-next-line no-console
    console.log(`[article-routes] ${handRolledSlugs.size} hand-rolled, ${markdownEntries.length} from Markdown; search-index has ${finalIdx.length} entries`);
  }

  /* Dev / preview: serve articles/ directly. Vite's MPA mode doesn't
     pick up nested HTML by default, so a small middleware maps
     /articles/<slug>/ → the hand-rolled file or, if a markdown source
     exists, renders it on the fly. */
  function devMiddleware(req, _res, next) {
    try {
      const url = req.url || '/';
      const m = url.match(/^\/articles\/?(?:([a-z0-9-]+)\/?)?(?:\?.*)?$/);
      if (!m) return next();
      const slug = m[1];
      if (!slug) { req.url = '/articles/index.html'; return next(); }
      /* Prefer a markdown source if one exists. */
      const mdPath = resolve(ROOT, 'articles/sources', slug + '.md');
      if (existsSync(mdPath)) {
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
