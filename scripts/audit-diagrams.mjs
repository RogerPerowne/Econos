/* ============================================================
   scripts/audit-diagrams.mjs — automated article-diagram audit.

   Renders every diagram in every built article in a real browser
   (with its CSS) and runs deterministic checks against docs/diagram-spec.md
   for the error classes manual review keeps surfacing:

     • blank        — diagram is empty / just axes (decorative or unbaked)
     • overlap      — two visible <text> labels collide (e.g. "ADP")
     • clipped      — a visible label runs outside the SVG frame

   Hardening notes:
     • Honours *effective* opacity/visibility up the ancestor chain, so the
       layer-based interactive diagrams (hidden states at opacity:0 /
       display:none) are not counted — the mistake a naive check makes.
     • Walks EVERY interactive tab state, not just the baked default, so a
       clash that only appears on a non-default tab is still caught.
     • Blank check counts shapes AND <rect>/<text>, so matrix / payoff-grid
       diagrams (built from rects+text) are not false-flagged as blank.

   Usage:  node scripts/audit-diagrams.mjs   (needs dist/ built)
   Serves dist on a throwaway port, audits, prints a report, exits
   non-zero on findings.
   ============================================================ */
import { chromium } from 'playwright';
import http from 'node:http';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';

const DIST = 'dist';
const PORT = 8123;

const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.svg': 'image/svg+xml', '.json': 'application/json', '.xml': 'application/xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };

function serve() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p.endsWith('/')) p += 'index.html';
      const fp = join(DIST, p);
      try {
        const body = readFileSync(fp);
        res.writeHead(200, { 'Content-Type': MIME[extname(fp)] || 'application/octet-stream' });
        res.end(body);
      } catch { res.writeHead(404); res.end('nf'); }
    });
    srv.listen(PORT, () => resolve(srv));
  });
}

function articleSlugs() {
  const base = join(DIST, 'articles');
  return readdirSync(base).filter((d) => {
    try { return statSync(join(base, d, 'index.html')).isFile(); } catch { return false; }
  });
}

// Per-figure audit, evaluated in-page against a figure element handle.
const CHECK_FIG = (fig) => {
  const eff = (el) => {
    let o = 1, n = el;
    while (n && n.nodeType === 1) {
      const s = getComputedStyle(n);
      if (s.display === 'none' || s.visibility === 'hidden') return 0;
      const op = parseFloat(s.opacity);
      if (!isNaN(op)) o *= op;
      n = n.parentElement;
    }
    return o;
  };
  const area = (r) => Math.max(0, r.width) * Math.max(0, r.height);
  const inter = (a, b) => {
    const x = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
    const y = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
    return x * y;
  };
  const svg = fig.querySelector('svg');
  if (!svg) return [];
  const svgR = svg.getBoundingClientRect();
  const findings = [];
  // visible drawing shapes (exclude any rect that fills ~the whole frame = bg)
  const shapes = [...svg.querySelectorAll('path,line,polyline,polygon,circle')]
    .filter((e) => eff(e) > 0.05)
    .filter((e) => area(e.getBoundingClientRect()) > 4);
  const rects = [...svg.querySelectorAll('rect')]
    .filter((e) => eff(e) > 0.05)
    .filter((e) => { const r = e.getBoundingClientRect(); return area(r) > 16 && area(r) < area(svgR) * 0.9; });
  const texts = [...svg.querySelectorAll('text')]
    .filter((t) => eff(t) > 0.05 && t.textContent.trim())
    .map((t) => ({ s: t.textContent.trim(), r: t.getBoundingClientRect() }))
    .filter((x) => area(x.r) > 1);
  // blank: almost no content of any kind (shapes + rects + labels)
  if (shapes.length + rects.length + texts.length < 6) {
    findings.push('blank:' + shapes.length + 's/' + rects.length + 'r/' + texts.length + 't');
  }
  // overlapping labels (different strings, heavy overlap)
  for (let a = 0; a < texts.length; a++) {
    for (let b = a + 1; b < texts.length; b++) {
      const ov = inter(texts[a].r, texts[b].r);
      const min = Math.min(area(texts[a].r), area(texts[b].r));
      if (min > 0 && ov / min > 0.55 && texts[a].s !== texts[b].s) {
        findings.push('overlap:"' + texts[a].s + '"x"' + texts[b].s + '"');
      }
    }
  }
  // labels clipped outside the frame
  for (const t of texts) {
    if (t.r.right > svgR.right + 2 || t.r.left < svgR.left - 2) {
      findings.push('clipped:"' + t.s + '"');
    }
  }
  return [...new Set(findings)];
};

const srv = await serve();
const browser = await chromium.launch();
const slugs = articleSlugs();
let total = 0;
const report = [];
for (const slug of slugs) {
  const page = await browser.newPage({ viewport: { width: 1100, height: 1600 } });
  await page.goto(`http://127.0.0.1:${PORT}/articles/${slug}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(150);
  const figs = await page.$$('.article-diagram, .diagram-block, figure');
  const figFindings = [];
  for (let i = 0; i < figs.length; i++) {
    const fig = figs[i];
    if (!(await fig.$('svg'))) continue;
    const tabs = await fig.$$('.ad-tab');
    const states = tabs.length ? tabs.length : 1;
    const seen = new Set();
    for (let s = 0; s < states; s++) {
      if (tabs.length) { await tabs[s].click(); await page.waitForTimeout(480); }
      const f = await page.evaluate(CHECK_FIG, fig);
      const tag = tabs.length ? ` @state${s}` : '';
      for (const item of f) seen.add(item + tag);
    }
    if (seen.size) figFindings.push({ i, findings: [...seen] });
  }
  await page.close();
  if (figFindings.length) {
    report.push({ slug, figs: figFindings });
    total += figFindings.reduce((n, d) => n + d.findings.length, 0);
  }
}
await browser.close();
srv.close();

console.log(`\n=== diagram audit: ${slugs.length} articles scanned ===`);
if (!report.length) {
  console.log('✓ no findings');
} else {
  for (const { slug, figs } of report) {
    console.log(`\n${slug}`);
    for (const d of figs) console.log(`  [diagram ${d.i}] ${d.findings.join('  ')}`);
  }
  console.log(`\n${total} finding(s) across ${report.length} article(s)`);
}
process.exit(report.length ? 1 : 0);
