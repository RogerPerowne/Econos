/* scripts/check-econ-diagrams.mjs
   ───────────────────────────────────────────────────────────────────────────
   Validates every `econDiagram` block in js/data against the registered chart
   families: the chart must exist, and every curve/point a view references
   (show, hide, shifts, areas.between, brackets.between, points, arrows) must be
   a real curve id or named point in that family.

   This is the anti-invention gate for the chart-migration sweep: a migrated
   card that references a curve or point the family doesn't define fails here
   rather than rendering a silently-broken diagram.

   Loads the engine + all chart families the same way the unit tests do
   (new Function(src) under a stubbed window), reads window.ECONOS_ECON_DIAGRAM
   .charts for the registry, then loads each data file under stubbed globals to
   capture window.ECONOS_TOPIC and walk its blocks.

   Exit 1 on any error. Usage: node scripts/check-econ-diagrams.mjs
   ─────────────────────────────────────────────────────────────────────────── */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';

const ROOT = process.cwd();

/* ── stubbed browser globals ─────────────────────────────────────────────── */
globalThis.window = globalThis.window || {};
window.ECONOS_BLOCK_UTILS = { escapeHtml: (s) => String(s == null ? '' : s), isDevMode: () => false };
window.ECONOS_BLOCKS = {};
window.console = console;
// Data files reach for TopicLoader.routes.*(...) and a few accessors at load.
globalThis.TopicLoader = {
  routes: new Proxy({}, { get: () => () => '' }),
  getBoard: () => 'edexcel_a', getBoardName: () => '', setBoard: () => false,
  go: () => {}
};

function load(relPath) {
  const src = readFileSync(resolve(ROOT, relPath), 'utf8');
  // eslint-disable-next-line no-new-func
  new Function(src)();
}

/* ── 1. build the family registry ────────────────────────────────────────── */
load('js/blocks/econ-diagram.js');
const chartsDir = resolve(ROOT, 'js/blocks/charts');
for (const f of readdirSync(chartsDir)) {
  if (f.endsWith('.js')) load(join('js/blocks/charts', f));
}
const FAMILIES = window.ECONOS_ECON_DIAGRAM.charts;

function familyRefs(fam) {
  const curves = new Set(Object.keys(fam.baseline || {}));
  const points = new Set(Object.keys(fam.points || {}));
  // The legacy equilibrium baseLabel is a valid implicit point name too.
  if (fam.equilibrium && fam.equilibrium.baseLabel) points.add(fam.equilibrium.baseLabel);
  return { curves, points };
}

/* ── 2. collect econDiagram blocks from a topic object ───────────────────── */
function walkBlocks(blocks, out) {
  if (!Array.isArray(blocks)) return;
  for (const b of blocks) {
    if (!b || typeof b !== 'object') continue;
    if (b.type === 'econDiagram') out.push(b);
    if (Array.isArray(b.children)) walkBlocks(b.children, out);
  }
}

function collectFromTopic(topic) {
  const out = [];
  const cards = (topic && topic.cards) || [];
  for (const c of cards) {
    if (Array.isArray(c.blocks)) walkBlocks(c.blocks, out);
  }
  return out;
}

/* ── 3. validate one block ───────────────────────────────────────────────── */
function validateBlock(block, where, errors) {
  const fam = FAMILIES[block.chart];
  if (!fam) {
    errors.push(`${where}: unknown chart family '${block.chart}'`);
    return;
  }
  const { curves, points } = familyRefs(fam);
  const checkCurve = (id, ctx) => {
    if (!curves.has(id)) errors.push(`${where}: ${ctx} references unknown curve '${id}' (family '${block.chart}')`);
  };
  const checkPoint = (name, ctx) => {
    if (!points.has(name)) errors.push(`${where}: ${ctx} references unknown point '${name}' (family '${block.chart}')`);
  };
  for (const v of block.views || []) {
    (v.show || []).forEach((id) => checkCurve(id, `view '${v.label}' show`));
    (v.hide || []).forEach((id) => checkCurve(id, `view '${v.label}' hide`));
    Object.keys(v.shifts || {}).forEach((id) => checkCurve(id, `view '${v.label}' shifts`));
    (v.points || []).forEach((p) => checkPoint(p, `view '${v.label}' points`));
    (v.areas || []).forEach((a) => (a.between || []).forEach((id) => checkCurve(id, `view '${v.label}' area`)));
    (v.brackets || []).forEach((br) => (br.between || []).forEach((p) => checkPoint(p, `view '${v.label}' bracket`)));
    (v.arrows || []).forEach((ar) => {
      if (Array.isArray(ar)) { checkPoint(ar[0], `view '${v.label}' arrow`); checkPoint(ar[1], `view '${v.label}' arrow`); }
    });
  }
}

/* ── 4. walk all data files ──────────────────────────────────────────────── */
function dataFiles(dir, acc) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) dataFiles(full, acc);
    else if (name.endsWith('.js')) acc.push(full);
  }
  return acc;
}

const files = dataFiles(resolve(ROOT, 'js/data'), []);
const errors = [];
const loadFailures = [];
let blockCount = 0, fileCount = 0;

for (const file of files) {
  const rel = file.slice(ROOT.length + 1).replace(/\\/g, '/');
  window.ECONOS_TOPIC = undefined;
  try {
    load(rel);
  } catch (e) {
    // Only flag files that actually contain an econDiagram (so we don't fail on
    // unrelated load quirks in non-diagram data files).
    if (/econDiagram/.test(readFileSync(file, 'utf8'))) loadFailures.push(`${rel}: load error — ${e.message}`);
    continue;
  }
  const topic = window.ECONOS_TOPIC;
  if (!topic) continue;
  const blocks = collectFromTopic(topic);
  if (blocks.length) fileCount++;
  blocks.forEach((b, i) => { blockCount++; validateBlock(b, `${rel} [econDiagram #${i + 1}]`, errors); });
}

/* ── 5. report ───────────────────────────────────────────────────────────── */
console.log(`check-econ-diagrams: ${blockCount} econDiagram block(s) across ${fileCount} file(s); ${Object.keys(FAMILIES).length} families registered.`);
if (loadFailures.length) {
  console.error(`\n${loadFailures.length} file(s) with econDiagram failed to load:`);
  loadFailures.forEach((m) => console.error('  ⚠ ' + m));
}
if (errors.length) {
  console.error(`\n✗ ${errors.length} invalid reference(s):`);
  errors.forEach((m) => console.error('  ✗ ' + m));
  process.exit(1);
}
if (loadFailures.length) process.exit(1);
console.log('✓ all econDiagram references resolve.');
