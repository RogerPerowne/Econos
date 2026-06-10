#!/usr/bin/env node
/* ============================================================
   scripts/lint-charts.mjs — CI gate for chart-engine warnings.

   Loads ppf.js + every spec under js/charts/specs/, renders each
   one against a mock window with ECONOS_DEV=true, and fails the
   build if ANY spec produces a dev warning. Warnings include:

     - intersection drift  (declared coords disagree with the
                            curve-intersection solver)
     - tick collision      (two ticks <14px apart on the same axis)
     - label clash         (two placed text bboxes overlap)
     - intersection misses (curves don't actually cross)

   Run as part of `npm run lint`. Skip with `--allow-warnings` in
   the rare case you genuinely need to ship a chart with a known
   warning (e.g. mid-refactor checkpoint).

   This is the third tier in the chart-quality pipeline:
     1. ESLint                 — JS syntax + style
     2. lint.sh                — repo-level grep rules (white bg,
                                 forbidden navigation patterns, etc.)
     3. lint-charts.mjs        — engine-level geometry & layout
   ============================================================ */

import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const allowWarnings = process.argv.includes('--allow-warnings');

/* Tracked tech debt — issues SURFACED by the v0.41.11 engine change
   (curve-label bboxes now tracked in placedBoxes, panel-aware off-stage
   check). Each entry is { spec, signature } where signature is a
   substring of the warning message that uniquely identifies the issue.
   The lint still REPORTS these (so they're visible) but doesn't FAIL
   on them, so the new engine checks can be enforced for future
   regressions without blocking shipping fixes elsewhere.

   TODO(v0.42): work through this list one chart at a time and remove
   each entry. New chart bugs MUST NOT be added here without a fix
   plan documented in CHANGELOG. */
const KNOWN_ISSUES = [
  // Empty as of v0.41.13 — all 9 issues surfaced by the v0.41.11 engine
  // change have been resolved. Add an entry here ONLY when the dev-mode
  // engine warning is a known false positive (e.g. label clash in
  // mutually exclusive layers that the layer-skip rule can't infer).
  // Every entry MUST link to a CHANGELOG note or open issue.
];
function isKnown(specKey, message) {
  return KNOWN_ISSUES.some(k => k.spec === specKey && message.includes(k.signature));
}

const root = process.cwd();
const ppfSrc = readFileSync(resolve(root, 'js/charts/ppf.js'), 'utf8');
// Shared chart libraries that some specs build on (e.g. the firm cost/
// revenue model builder). Loaded after the engine, before each spec.
const firmSrc = readFileSync(resolve(root, 'js/charts/firm-model.js'), 'utf8');
const specsDir = resolve(root, 'js/charts/specs');
const specFiles = readdirSync(specsDir).filter(f => f.endsWith('.js')).sort();

let failedSpecs = 0;
const allFindings = [];

for (const file of specFiles) {
  const w = { ECONOS_DEV: true };
  // Load engine
  /* eslint-disable-next-line no-new-func */
  new Function('window', ppfSrc)(w);
  // Load shared chart libraries (firm cost/revenue model builder)
  /* eslint-disable-next-line no-new-func */
  new Function('window', firmSrc)(w);
  // Load spec
  const specSrc = readFileSync(join(specsDir, file), 'utf8');
  try {
    /* eslint-disable-next-line no-new-func */
    new Function('window', specSrc)(w);
  } catch (err) {
    allFindings.push({ file, kind: 'parse', message: err.message });
    failedSpecs++;
    continue;
  }
  // Find every ECONOS_*_SPEC declared on the window and render it.
  const specKeys = Object.keys(w).filter(k => k.startsWith('ECONOS_') && k.endsWith('_SPEC'));
  if (!specKeys.length) {
    allFindings.push({ file, kind: 'empty', message: 'no ECONOS_*_SPEC exported' });
    failedSpecs++;
    continue;
  }
  for (const specKey of specKeys) {
    const spec = w[specKey];
    if (!spec || typeof spec !== 'object') continue;
    let warnings = [];
    try {
      w.ECONOS_PPF.render(spec);
      warnings = w.ECONOS_PPF.lastWarnings || [];
    } catch (err) {
      allFindings.push({ file, specKey, kind: 'render', message: err.message });
      failedSpecs++;
      continue;
    }
    for (const msg of warnings) {
      allFindings.push({ file, specKey, kind: classify(msg), message: msg, known: isKnown(specKey, msg) });
    }
  }
}

function classify(msg) {
  if (msg.includes('drifts')) return 'drift';
  if (msg.includes('tick collision')) return 'tick';
  if (msg.includes('label clash')) return 'label';
  if (msg.includes('intersection')) return 'intersection';
  return 'other';
}

const ICONS = { drift: '↔', tick: '◇', label: '⌬', intersection: '×', parse: '⚠', render: '✗', empty: '∅', other: '·' };

const newFindings = allFindings.filter(f => !f.known);
const knownFindings = allFindings.filter(f => f.known);

if (!allFindings.length) {
  console.log('chart-lint: OK — ' + specFiles.length + ' specs render without warnings');
  process.exit(0);
}

// Group findings by file for readable output.
const byFile = new Map();
for (const f of allFindings) {
  if (!byFile.has(f.file)) byFile.set(f.file, []);
  byFile.get(f.file).push(f);
}
for (const [file, findings] of byFile) {
  console.log('\n' + file);
  for (const f of findings) {
    const tag = f.known ? '[known] ' : '';
    console.log('  ' + (ICONS[f.kind] || '·') + ' ' + tag + (f.specKey ? f.specKey + ' — ' : '') + f.message);
  }
}
console.log(
  '\nchart-lint: ' + newFindings.length + ' new finding(s)' +
  (knownFindings.length ? ' + ' + knownFindings.length + ' known issue(s) (TODO list in scripts/lint-charts.mjs)' : '') +
  ' across ' + byFile.size + ' file(s)'
);

if (allowWarnings) {
  console.log('chart-lint: --allow-warnings set, exiting 0 despite findings');
  process.exit(0);
}
// Pass when only KNOWN tracked-debt issues remain — they're reported above
// for visibility but don't block shipping. Any NEW finding fails the lint.
process.exit(newFindings.length ? 1 : 0);
