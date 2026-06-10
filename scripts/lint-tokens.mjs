#!/usr/bin/env node
/* ============================================================
   scripts/lint-tokens.mjs — design-token drift reporter.

   The design language defines tokens in styles.css :root: colours
   (`--econ-*`), type (`--fs-*`/`--fw-*`/`--lh-*`), spacing (`--sp-*`),
   radii (`--r-*`). This script measures how consistently the codebase
   USES them: it flags raw literals that exactly duplicate a token value
   (e.g. `#0B1426` where `var(--econ-ink)` should be used; `font-weight:700`
   where `var(--fw-bold)` should be), per file, with a total to drive down.

   It also reports OFF-SCALE literals — sizes / line-heights / radii that do
   not match any token (e.g. `font-size:14px`, `border-radius:12px`) — as a
   separate count, since those are the rationalisation backlog (snapping them
   to the scale is a visual change that needs sign-off).

   Reporter only (exit 0). Usage: node scripts/lint-tokens.mjs [--list]
   ============================================================ */
import { readFileSync } from 'node:fs';

const list = process.argv.includes('--list');
const check = process.argv.includes('--check');

/* Ratchet baseline for --check (CI gate). This is the count of raw literals
   that EXACTLY duplicate a design token (`dup`). It must never grow: tokenise
   the new literal, or — if it is an unavoidable inline-SVG presentation
   attribute (fill=/stroke=/stop-color=, which can't take a CSS var) — leave it
   and DO NOT raise this number without a note here. When the SVG→engine
   migration removes literals, lower this to lock the win.
   Off-scale literals (`off`) are intentionally NOT gated — snapping them to the
   scale is a visual change that needs sign-off, so they stay report-only.

   Baseline history: …→6201 after the Theme-3 chart migration; raised to 6207
   (v0.155.9) for the 6 inline-SVG fills added when the revenueThreeMetrics card
   visual gained combining arrows + enlarged tiles (hand-rolled card art, not a
   chart — the fills can't take a CSS var). */
const DUP_BASELINE = 6207;

const css = readFileSync('styles.css', 'utf8');

// ---- parse the :root token block ----
const rs = css.indexOf(':root {');
let depth = 0;
let i = css.indexOf('{', rs);
let end = i;
for (; i < css.length; i++) {
  if (css[i] === '{') depth++;
  else if (css[i] === '}') { depth--; if (depth === 0) { end = i; break; } }
}
const root = css.slice(rs, end + 1);
const def = (re) => { const m = {}; let x; while ((x = re.exec(root))) m[x[2]] = x[1]; return m; };
const colourTok = (() => { const m = {}; let x; const re = /(--econ-[a-z0-9-]+):\s*(#[0-9a-fA-F]{6})\b/g; while ((x = re.exec(root))) { const h = x[2].toUpperCase(); if (!m[h] || x[1].length < m[h].length) m[h] = x[1]; } return m; })();
const weightTok = def(/(--fw-[a-z]+):\s*(\d{3})\b/g);   // 700 -> --fw-bold
const sizeTok = def(/(--fs-[a-z0-9]+):\s*(\d{1,2})px\b/g); // 18 -> --fs-lg
const lhTok = def(/(--lh-[a-z]+):\s*(1\.[0-9])\b/g);     // 1.5 -> --lh-normal
const radTok = def(/(--r-[a-z0-9]+):\s*(\d{1,3})px\b/g); // 14 -> --r-lg

// ---- per-file scan ----
function scan(text) {
  const out = { dup: 0, off: 0 };
  // colour hex duplicating a token
  text.replace(/#[0-9a-fA-F]{6}(?![0-9a-fA-F])/g, (h) => { if (colourTok[h.toUpperCase()]) out.dup++; return h; });
  // numeric props: count token-duplicates vs off-scale (literal not in the token set)
  const num = [
    [/font-weight:\s*(\d{3})\b/g, weightTok],
    [/font-size:\s*([0-9.]+)px\b/g, sizeTok],
    [/line-height:\s*(1\.[0-9]+)\b/g, lhTok],
    [/border-radius:\s*(\d{1,3})px\b/g, radTok],
  ];
  for (const [re, tok] of num) {
    let m;
    while ((m = re.exec(text))) {
      const v = m[1].replace(/\.0$/, '');
      if (tok[v] || tok[String(parseInt(v, 10))]) out.dup++;
      else out.off++;
    }
  }
  return out;
}

const tryRead = (f) => { try { return readFileSync(f, 'utf8'); } catch { return ''; } };
const targets = [
  ['styles.css (outside :root)', css.slice(end + 1)],
  ['js/app.js', readFileSync('js/app.js', 'utf8')],
  ['js/icons.js', tryRead('js/icons.js')],
];

let dup = 0;
let off = 0;
console.log('design-token drift (raw literals that duplicate a token) + off-scale (no token):\n');
console.log('   dup  off   file');
for (const [label, text] of targets) {
  const r = scan(text);
  dup += r.dup; off += r.off;
  console.log(`  ${String(r.dup).padStart(4)} ${String(r.off).padStart(4)}   ${label}`);
}
console.log(`\n  ${String(dup).padStart(4)} ${String(off).padStart(4)}   TOTAL`);
console.log('\ndup = should be a token (tokenise it). off = off-scale literal (rationalisation backlog — visual change, needs sign-off).');

if (check) {
  if (dup > DUP_BASELINE) {
    console.error(
      `\n✗ token-dup ratchet: ${dup} raw literals duplicate a token, above the ` +
      `baseline of ${DUP_BASELINE} (+${dup - DUP_BASELINE}).\n` +
      `  Tokenise the new literal(s) with var(--…). If it is an inline-SVG ` +
      `attribute that genuinely cannot use a CSS var, migrate the visual to ` +
      `the chart engine instead of raising DUP_BASELINE in scripts/lint-tokens.mjs.`
    );
    process.exit(1);
  }
  if (dup < DUP_BASELINE) {
    console.log(
      `\n✓ token-dup below baseline (${dup} < ${DUP_BASELINE}). Lower DUP_BASELINE ` +
      `to ${dup} in scripts/lint-tokens.mjs to lock in the reduction.`
    );
  } else {
    console.log(`\n✓ token-dup at baseline (${dup}). No new drift.`);
  }
  process.exit(0);
}

console.log('Reporter only — exit 0.' + (list ? '' : ' (Use --list for the colour breakdown.)'));
process.exit(0);
