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
  // Add an entry here ONLY when a dev-mode engine warning is a known false
  // positive (e.g. label clash in mutually exclusive layers that the
  // layer-skip rule can't infer). Every entry MUST link to a CHANGELOG note.

  // ── Curve-label completeness (v0.159.2): curves the rule flags but that
  // are correctly identified another way, so a `label` would be wrong or
  // redundant. Reviewed and intentional.
  // j-curve: the solid slate segment is the pre-devaluation steady-state
  // current-account baseline (a reference line), not a named economic curve.
  { spec: 'ECONOS_J_CURVE_INTERACTIVE_SPEC', signature: 'curve "?" has no label' },
  // lorenz-compare: the flagged curve in each panel is the 45° line of
  // equality (a reference line); the Lorenz curves are named by the
  // Country A/B and Year 1/2 texts placed beside them.
  { spec: 'ECONOS_LORENZ_COMPARE_SPEC', signature: 'has no label (panel 0)' },
  { spec: 'ECONOS_LORENZ_COMPARE_SPEC', signature: 'has no label (panel 1)' },
  // sras-zones: SRASg is the green spare-capacity SEGMENT of one continuous
  // SRAS curve whose steep orange segment (SRASo) already carries the single
  // 'SRAS' label — labelling the segment too would double-name the line.
  { spec: 'ECONOS_SRAS_ZONES_SPEC', signature: 'curve "SRASg" has no label' },
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
    for (const msg of curveLabelFindings(spec)) {
      allFindings.push({ file, specKey, kind: 'unlabelled', message: msg, known: isKnown(specKey, msg) });
    }
  }
}

function classify(msg) {
  if (msg.includes('drifts')) return 'drift';
  if (msg.includes('tick collision')) return 'tick';
  if (msg.includes('label clash')) return 'label';
  if (msg.includes('no label')) return 'unlabelled';
  if (msg.includes('intersection')) return 'intersection';
  return 'other';
}

/* Curve-label completeness check.

   Every SOLID, plotted economic curve should identify itself with a
   `label` (MC, AC, AR, D, S, …) — a stranger shouldn't meet an unnamed
   line. We deliberately skip:
     - construction guides / droplines: `shape`-only curves (no sampled
       `d` path), or ids prefixed `_` (e.g. `_qline`, `_drop`, `_ac`);
     - dashed "before"/ghost curves used to show a shift — these are
       intentionally faded and usually named by the solid "after" curve
       plus a shift arrow.
   A curve counts as identified if it carries `curve.label` OR a free
   `texts` entry sits near its path (many specs name lines with a manually
   placed text — e.g. "D", "AC₂ (after innovation)" — rather than the
   built-in label), OR a sibling curve with the same id elsewhere in the
   spec is labelled (the same economic line drawn across reveal layers).
   The engine's existing clash/off-stage checks already police WHERE a
   label sits; this polices WHETHER one exists at all. Runs on single
   specs and on every panel of a multi-panel spec. */
function pathPoints(d) {
  const nums = (String(d).match(/-?\d*\.?\d+(?:e-?\d+)?/g) || []).map(Number);
  const raw = [];
  for (let i = 0; i + 1 < nums.length; i += 2) raw.push([nums[i], nums[i + 1]]);
  // Densify: interpolate along each segment so a label beside the MIDDLE of a
  // two-point line (the common D/S case) still counts as "near the path".
  const pts = [];
  for (let i = 0; i < raw.length; i++) {
    pts.push(raw[i]);
    if (i + 1 < raw.length) {
      const a = raw[i], b = raw[i + 1];
      for (let s = 1; s < 10; s++) pts.push([a[0] + (b[0] - a[0]) * s / 10, a[1] + (b[1] - a[1]) * s / 10]);
    }
  }
  return pts;
}
function textNearPath(curve, texts, thresh) {
  const pts = pathPoints(curve.d);
  if (!pts.length) return false;
  const t2 = thresh * thresh;
  return (texts || []).some(function (t) {
    if (!t || t.x == null || t.y == null) return false;
    return pts.some(function (p) {
      const dx = p[0] - t.x, dy = p[1] - t.y;
      return dx * dx + dy * dy <= t2;
    });
  });
}
function curveLabelFindings(spec) {
  const out = [];
  // ids that carry a label somewhere (same line drawn across reveal layers).
  const labelledIds = {};
  function collectIds(curves) {
    (curves || []).forEach(function (c) {
      if (c && c.id && c.label != null && String(c.label).trim()) labelledIds[c.id] = true;
    });
  }
  collectIds(spec.curves);
  (spec.panels || []).forEach(function (p) { collectIds(p.curves); });

  function check(curves, texts, panelTag) {
    (curves || []).forEach(function (c) {
      if (!c || typeof c !== 'object') return;
      if (!c.d) return;                                          // guide/dropline (shape only)
      if (typeof c.id === 'string' && c.id.charAt(0) === '_') return; // construction line
      if (c.dashed) return;                                      // ghost "before" curve
      if (c.label != null && String(c.label).trim()) return;     // labelled directly
      if (c.id && labelledIds[c.id]) return;                     // labelled on a sibling layer
      if (textNearPath(c, texts, 0.14)) return;                  // named by a nearby free text
      out.push('curve "' + (c.id || '?') + '" has no label' + panelTag);
    });
  }
  check(spec.curves, spec.texts, '');
  (spec.panels || []).forEach(function (p, i) { check(p.curves, p.texts, ' (panel ' + i + ')'); });
  return out;
}


const ICONS = { drift: '↔', tick: '◇', label: '⌬', unlabelled: '🏷', intersection: '×', parse: '⚠', render: '✗', empty: '∅', other: '·' };

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
