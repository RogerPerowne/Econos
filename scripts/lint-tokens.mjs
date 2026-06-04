#!/usr/bin/env node
/* ============================================================
   scripts/lint-tokens.mjs — design-token drift reporter.

   The design language already defines a full token set in
   `styles.css` :root (colours `--econ-*`, type `--fs-`/`--fw-`/`--lh-`,
   spacing `--sp-`, radii `--r-`, shadows). This script measures how
   consistently those tokens are USED: it flags raw 6-digit hex literals
   that exactly duplicate a defined colour token (e.g. `#0B1426` where
   `var(--econ-ink)` should be used).

   It is a REPORTER, not a blocking gate (yet): it prints the drift count
   per file so the consistency sweep has a number to drive to zero. Once
   the count is low it can be wired into `npm run lint` as blocking.

   Usage:  node scripts/lint-tokens.mjs [--list]
   ============================================================ */
import { readFileSync } from 'node:fs';

const list = process.argv.includes('--list');
const css = readFileSync('styles.css', 'utf8');

// Build hex → preferred token map from the :root definitions.
const rootStart = css.indexOf(':root {');
let depth = 0;
let i = css.indexOf('{', rootStart);
let end = i;
for (; i < css.length; i++) {
  if (css[i] === '{') depth++;
  else if (css[i] === '}') { depth--; if (depth === 0) { end = i; break; } }
}
const rootBlock = css.slice(rootStart, end + 1);
const map = {};
const def = /(--econ-[a-z0-9-]+):\s*(#[0-9a-fA-F]{6})\b/g;
let m;
while ((m = def.exec(rootBlock))) {
  const hex = m[2].toUpperCase();
  if (!map[hex] || m[1].length < map[hex].length) map[hex] = m[1];
}

// Scan a chunk of text for tokenisable hex literals; return {count, hits{hex:n}}.
function scan(text) {
  const hits = {};
  let count = 0;
  const re = /#[0-9a-fA-F]{6}(?![0-9a-fA-F])/g;
  let h;
  while ((h = re.exec(text))) {
    const v = h[0].toUpperCase();
    if (map[v]) { count++; hits[v] = (hits[v] || 0) + 1; }
  }
  return { count, hits };
}

const targets = [
  ['styles.css (outside :root)', css.slice(end + 1)],
  ['js/app.js', readFileSync('js/app.js', 'utf8')],
  ['js/icons.js', tryRead('js/icons.js')],
];
function tryRead(f) { try { return readFileSync(f, 'utf8'); } catch { return ''; } }

let total = 0;
console.log('design-token drift — raw hex literals that duplicate a colour token:\n');
for (const [label, text] of targets) {
  const { count, hits } = scan(text);
  total += count;
  console.log(`  ${String(count).padStart(4)}  ${label}`);
  if (list && count) {
    Object.entries(hits).sort((a, b) => b[1] - a[1]).forEach(([v, n]) => {
      console.log(`        ${v} → var(${map[v]})  ×${n}`);
    });
  }
}
console.log(`\n  ${String(total).padStart(4)}  TOTAL tokenisable drift`);
console.log('\n(Run with --list to see per-hex breakdown. Reporter only — exit 0.)');
process.exit(0);
