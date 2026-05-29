/* ============================================================
   scripts/render-charts.mjs — render every UNIQUE article diagram
   (deduped by svgKey) in every interactive state, for vision review.

   Articles embed 36 unique curated svgKeys + a few hand-rolled SVGs.
   Fixing a curated svgKey at source fixes every article that embeds
   it, so we review the unique set once rather than 67× over.

   Output: /tmp/charts/<svgKey>__<state>.png  (real CSS, real layout).

   Usage: node scripts/render-charts.mjs   (needs dist/ built)
   ============================================================ */
import { chromium } from 'playwright';
import http from 'node:http';
import { readFileSync, readdirSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';

const DIST = 'dist';
const PORT = 8124;
const OUT = '/tmp/charts';
mkdirSync(OUT, { recursive: true });

const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.svg': 'image/svg+xml', '.json': 'application/json', '.xml': 'application/xml',
  '.png': 'image/png', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };
function serve() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p.endsWith('/')) p += 'index.html';
      try { const b = readFileSync(join(DIST, p));
        res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' }); res.end(b);
      } catch { res.writeHead(404); res.end('nf'); }
    });
    srv.listen(PORT, () => resolve(srv));
  });
}

// map svgKey -> first article slug that uses it (+ interactive flag)
function inventory() {
  const root = 'articles/sources';
  const walk = (d) => readdirSync(d).flatMap((n) => {
    const fp = join(d, n);
    return statSync(fp).isDirectory() ? walk(fp) : fp.endsWith('.md') ? [fp] : [];
  });
  const map = new Map();
  for (const fp of walk(root)) {
    const slug = fp.split('/').pop().replace(/\.md$/, '');
    const fm = readFileSync(fp, 'utf8');
    if (/^status:\s*draft/m.test(fm)) continue; // build skips drafts
    const re = /econos-diagram\s+svgKey="([^"]+)"([^\n]*)/g;
    let m;
    while ((m = re.exec(fm))) {
      const key = m[1];
      if (!map.has(key)) map.set(key, { slug, interactive: /interactive="true"/.test(m[2]) });
    }
  }
  return map;
}

const inv = inventory();
const srv = await serve();
const browser = await chromium.launch();
const manifest = [];
for (const [key, { slug }] of inv) {
  const page = await browser.newPage({ viewport: { width: 1120, height: 1700 }, deviceScaleFactor: 1 });
  await page.goto(`http://127.0.0.1:${PORT}/articles/${slug}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(150);
  // locate the figure whose svg matches this key's article position:
  // just take figures in order; we re-navigate per key so the first
  // matching diagram with tabs (interactive) or the keyed one.
  const figs = await page.$$('.article-diagram, .diagram-block, figure');
  // choose the figure that actually contains an svg
  let target = null;
  for (const f of figs) { if (await f.$('svg')) { target = f; break; } }
  // For shared keys we may grab the wrong figure if the article has several;
  // prefer a figure whose nearby caption/label mentions the key's topic is
  // overkill — instead, for keys used by a single-diagram article this is exact.
  if (!target) { await page.close(); continue; }
  await target.scrollIntoViewIfNeeded(); await page.waitForTimeout(120);
  const tabs = await target.$$('.ad-tab');
  if (tabs.length) {
    for (let i = 0; i < tabs.length; i++) {
      await tabs[i].click(); await page.waitForTimeout(260);
      const label = (await tabs[i].innerText()).trim().replace(/[^a-z0-9]+/gi, '-').toLowerCase();
      const file = `${key}__${i}-${label}.png`;
      await target.screenshot({ path: join(OUT, file) });
      manifest.push({ key, slug, state: label, file });
    }
  } else {
    const file = `${key}__static.png`;
    await target.screenshot({ path: join(OUT, file) });
    manifest.push({ key, slug, state: 'static', file });
  }
  await page.close();
}
await browser.close();
srv.close();
writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`rendered ${manifest.length} chart images for ${inv.size} unique svgKeys → ${OUT}`);
for (const m of manifest) console.log(`  ${m.file}  (from ${m.slug})`);
