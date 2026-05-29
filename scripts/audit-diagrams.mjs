/* ============================================================
   scripts/audit-diagrams.mjs — automated article-diagram audit.

   Renders every diagram in every built article in a real browser
   (with its CSS), then runs deterministic checks that catch the
   error classes manual review keeps surfacing:

     • blank        — diagram is just axes / near-empty
     • overlap      — two visible <text> labels collide (e.g. "ADP")
     • clipped      — a visible label runs outside the SVG frame

   CRITICAL: every check honours *effective* opacity/visibility up
   the ancestor chain, so the layer-based interactive diagrams (which
   stack hidden states at opacity:0 / display:none) are not counted.
   That is the exact mistake a naive bare-SVG check makes.

   Usage:  node scripts/audit-diagrams.mjs
   Assumes `npm run build` has produced dist/. Serves dist on a
   throwaway port, audits, prints a report, exits non-zero on findings.
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

// In-browser audit of one page. Returns findings per diagram.
const PAGE_AUDIT = `(() => {
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
  const figs = [...document.querySelectorAll('.article-diagram, .diagram-block, figure')]
    .filter((f) => f.querySelector('svg'));
  const out = [];
  figs.forEach((fig, i) => {
    const svg = fig.querySelector('svg');
    const svgR = svg.getBoundingClientRect();
    const findings = [];
    // visible drawing primitives (exclude the bg rect that fills the frame)
    const prims = [...svg.querySelectorAll('path,line,polyline,polygon,circle')]
      .filter((e) => eff(e) > 0.05)
      .filter((e) => { const r = e.getBoundingClientRect(); return area(r) > 4; });
    if (prims.length < 5) findings.push('blank:' + prims.length + '-primitives');
    // visible text labels
    const texts = [...svg.querySelectorAll('text')]
      .filter((t) => eff(t) > 0.05 && t.textContent.trim())
      .map((t) => ({ s: t.textContent.trim(), r: t.getBoundingClientRect() }))
      .filter((x) => area(x.r) > 1);
    // text-text overlaps (different strings, heavy overlap)
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
    if (findings.length) out.push({ i, findings: [...new Set(findings)] });
  });
  return out;
})()`;

const srv = await serve();
const browser = await chromium.launch();
const slugs = articleSlugs();
let total = 0;
const report = [];
for (const slug of slugs) {
  const page = await browser.newPage({ viewport: { width: 1100, height: 1600 } });
  await page.goto(`http://127.0.0.1:${PORT}/articles/${slug}/`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(150);
  const res = await page.evaluate(PAGE_AUDIT);
  await page.close();
  if (res.length) {
    report.push({ slug, res });
    total += res.reduce((n, d) => n + d.findings.length, 0);
  }
}
await browser.close();
srv.close();

console.log(`\n=== diagram audit: ${slugs.length} articles scanned ===`);
if (!report.length) {
  console.log('✓ no findings');
} else {
  for (const { slug, res } of report) {
    console.log(`\n${slug}`);
    for (const d of res) console.log(`  [diagram ${d.i}] ${d.findings.join('  ')}`);
  }
  console.log(`\n${total} finding(s) across ${report.length} article(s)`);
}
process.exit(report.length ? 1 : 0);
