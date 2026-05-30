/**
 * scripts/check-diagram-refs.mjs
 * ================================
 * Reference check: every svgKey / visualKey referenced in js/data/**\/*.js
 * must resolve in window.ECONOS_ICONS after all icon + diagram files load.
 *
 * Usage:  node scripts/check-diagram-refs.mjs
 *
 * Exit 0 = PASS, Exit 1 = FAIL (missing keys listed).
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(__dirname, '..');

/* ── 1. Set up a minimal browser-like global ─────────────────────────────── */
globalThis.window = globalThis.window || {};
globalThis.window.ECONOS_ICONS    = globalThis.window.ECONOS_ICONS    || {};
globalThis.window.ECONOS_DIAGRAMS = globalThis.window.ECONOS_DIAGRAMS || {};

/* Helper: eval a JS file in the current global context */
function evalFile(filePath) {
  const src = readFileSync(filePath, 'utf8');
  // Stub out any browser-only globals that files might reference
  const wrapped = `
(function(window, globalThis) {
  ${src}
})(globalThis.window, globalThis);
`;
  try {
    // Using Function constructor so 'this' is globalThis
    new Function('window', 'globalThis', src)(globalThis.window, globalThis);
  } catch (e) {
    // Some files reference TopicLoader etc — swallow those errors; we only care
    // about ECONOS_ICONS / ECONOS_DIAGRAMS side-effects.
    if (!e.message.includes('TopicLoader') &&
        !e.message.includes('is not defined') &&
        !e.message.includes('Cannot read')) {
      console.warn(`  [warn] ${filePath}: ${e.message}`);
    }
  }
}

/* ── 2. Load icons.js ────────────────────────────────────────────────────── */
console.log('Loading js/icons.js …');
evalFile(join(REPO, 'js/icons.js'));

/* ── 3. Load all generators ──────────────────────────────────────────────── */
const genDir = join(REPO, 'js/diagrams/generators');
const generators = readdirSync(genDir).filter(f => f.endsWith('.js')).sort();
console.log(`Loading ${generators.length} generator file(s) …`);
for (const f of generators) {
  evalFile(join(genDir, f));
}

/* ── 4. Load all static diagram files ───────────────────────────────────── */
const staticDir = join(REPO, 'js/diagrams/static');
const statics = readdirSync(staticDir).filter(f => f.endsWith('.js')).sort();
console.log(`Loading ${statics.length} static diagram file(s) …`);
for (const f of statics) {
  evalFile(join(staticDir, f));
}

const registeredKeys = new Set([
  ...Object.keys(globalThis.window.ECONOS_ICONS    || {}),
  ...Object.keys(globalThis.window.ECONOS_DIAGRAMS || {}),
]);
console.log(`  → ${registeredKeys.size} keys registered in ECONOS_ICONS ∪ ECONOS_DIAGRAMS\n`);

/* ── 5. Scan data files for referenced keys ──────────────────────────────── */
function walkDir(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walkDir(full, results);
    } else if (entry.endsWith('.js')) {
      results.push(full);
    }
  }
  return results;
}

const dataDir = join(REPO, 'js/data');
const dataFiles = walkDir(dataDir);

// Patterns that reference diagram keys:
//   visualKey: 'someKey'
//   svgKey: 'someKey'
//   interactiveDiagram: { svgKey: 'someKey', ... }
//   interactiveDiagram: 'someKey'   (bare string, less common)
const KEY_PATTERNS = [
  /\bvisualKey\s*:\s*['"]([a-zA-Z][a-zA-Z0-9_]*)['"](?!\s*\+)/g,
  /\bsvgKey\s*:\s*['"]([a-zA-Z][a-zA-Z0-9_]*)['"](?!\s*\+)/g,
  /\binteractiveDiagram\s*:\s*['"]([a-zA-Z][a-zA-Z0-9_]*)['"]/g,
];

const referencedKeys = new Map(); // key → [file, ...]
let totalRefs = 0;

for (const filePath of dataFiles) {
  const src = readFileSync(filePath, 'utf8');
  const relPath = filePath.replace(REPO + '/', '').replace(REPO + '\\', '');
  for (const pattern of KEY_PATTERNS) {
    pattern.lastIndex = 0;
    let m;
    while ((m = pattern.exec(src)) !== null) {
      const key = m[1];
      if (!referencedKeys.has(key)) referencedKeys.set(key, []);
      referencedKeys.get(key).push(relPath);
      totalRefs++;
    }
  }
}

console.log(`Scanned ${dataFiles.length} data file(s), found ${totalRefs} diagram key reference(s) across ${referencedKeys.size} unique key(s).\n`);

/* ── 6. Assert all referenced keys are registered ────────────────────────── */
const missing = [];
for (const [key, files] of referencedKeys) {
  if (!registeredKeys.has(key)) {
    missing.push({ key, files: [...new Set(files)] });
  }
}

const resolved = referencedKeys.size - missing.length;

if (missing.length === 0) {
  console.log(`PASS  ${referencedKeys.size} unique keys referenced, ${resolved} resolved, 0 missing.`);
  process.exit(0);
} else {
  console.error(`FAIL  ${referencedKeys.size} unique keys referenced, ${resolved} resolved, ${missing.length} MISSING:\n`);
  for (const { key, files } of missing) {
    console.error(`  ✗  ${key}`);
    for (const f of files) {
      console.error(`       referenced in: ${f}`);
    }
  }
  process.exit(1);
}
