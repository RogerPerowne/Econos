#!/usr/bin/env node
/* ============================================================
   scripts/audit-labels.mjs — measure label-to-curve distance
   for every labelled curve in every chart spec.

   The dev-mode lint catches HARD failures (label off-stage, label
   clash). It doesn't catch "label sits 60 pixels from its curve and
   the reader can't tell which line it belongs to" — the visual issue
   the user flagged on the MSC curve in private-vs-social.

   For each labelled curve:
     1. Render the spec and read back the curve-label bbox.
     2. Sample the curve path at 40 points (cubic curves via
        cubicPoint, line segments at endpoints).
     3. Compute min distance from the LABEL CENTER to any curve
        sample point, in PIXEL space.
     4. Report curves where the distance exceeds 28 px (≈ two label
        heights). These are the ones whose label looks disconnected
        from the line it names.

   Run as `node scripts/audit-labels.mjs`. Output is grouped by spec,
   sorted by max distance descending so the worst offenders surface
   first.
   ============================================================ */

import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const FAR_THRESHOLD = 28;       // pixels — label-to-own-curve "far" warning
const AMBIGUITY_RATIO = 0.7;    // flag if (dist to nearest OTHER label) < AMBIGUITY_RATIO × (dist to own curve)
                                // — label that looks like it belongs to a different curve

const root = process.cwd();
const ppfSrc = readFileSync(resolve(root, 'js/charts/ppf.js'), 'utf8');
const specsDir = resolve(root, 'js/charts/specs');
const specFiles = readdirSync(specsDir).filter(f => f.endsWith('.js')).sort();

/* Parse an SVG path d-attribute into a list of pixel sample points
   along the path. Supports M, L, C (the only commands chart specs use).
   `scaleX(x)` and `scaleY(y)` map chart 0..1 coords to pixel coords. */
function samplePath(d, scaleX, scaleY, n = 40) {
  // Split into commands. d looks like "M 0,0.8 L 0.5,0.3 C 0.6,0.2 0.7,0.1 1,0".
  const tokens = d.match(/[MLC]\s*[^MLC]+/gi) || [];
  const points = [];
  let lastX = 0, lastY = 0;
  for (const tok of tokens) {
    const cmd = tok[0].toUpperCase();
    const nums = tok.slice(1).split(/[\s,]+/).filter(Boolean).map(Number);
    if (cmd === 'M' || cmd === 'L') {
      lastX = nums[0]; lastY = nums[1];
      points.push([scaleX(lastX), scaleY(lastY)]);
    } else if (cmd === 'C') {
      const P = [[lastX, lastY], [nums[0], nums[1]], [nums[2], nums[3]], [nums[4], nums[5]]];
      // Sample n points along the cubic between the previous endpoint and (nums[4],nums[5]).
      for (let i = 1; i <= n; i++) {
        const t = i / n;
        const u = 1 - t;
        const cx = u*u*u*P[0][0] + 3*u*u*t*P[1][0] + 3*u*t*t*P[2][0] + t*t*t*P[3][0];
        const cy = u*u*u*P[0][1] + 3*u*u*t*P[1][1] + 3*u*t*t*P[2][1] + t*t*t*P[3][1];
        points.push([scaleX(cx), scaleY(cy)]);
      }
      lastX = nums[4]; lastY = nums[5];
    }
  }
  return points;
}

/* Distance from (px, py) to the nearest of the curve sample points. */
function distToCurve(px, py, samples) {
  let best = Infinity;
  for (const [x, y] of samples) {
    const dx = x - px, dy = y - py;
    const d2 = dx*dx + dy*dy;
    if (d2 < best) best = d2;
  }
  return Math.sqrt(best);
}

const findings = [];

for (const file of specFiles) {
  const w = { ECONOS_DEV: true };
  /* eslint-disable-next-line no-new-func */
  new Function('window', ppfSrc)(w);
  const specSrc = readFileSync(join(specsDir, file), 'utf8');
  try {
    /* eslint-disable-next-line no-new-func */
    new Function('window', specSrc)(w);
  } catch (err) {
    continue;
  }
  const specKeys = Object.keys(w).filter(k => k.startsWith('ECONOS_') && k.endsWith('_SPEC'));
  for (const specKey of specKeys) {
    const spec = w[specKey];
    if (!spec || typeof spec !== 'object') continue;
    try { w.ECONOS_PPF.render(spec); } catch (err) { continue; }
    const boxes = w.ECONOS_PPF.lastPlacedBoxes || [];

    // Build a [chartArea, curves] list — one entry per panel (or one
    // entry for single-panel specs).
    const panels = (spec.panels && spec.panels.length)
      ? spec.panels.map(p => ({ area: p.chartArea, curves: p.curves || [] }))
      : [{ area: spec.chartArea, curves: spec.curves || [] }];

    for (const { area, curves } of panels) {
      if (!area) continue;
      const scaleX = x => area.x + x * area.width;
      const scaleY = y => area.y + area.height - y * area.height;
      for (const curve of curves) {
        if (!curve.label) continue;
        const samples = samplePath(curve.d, scaleX, scaleY);
        if (!samples.length) continue;
        // Find this curve's label bbox in placedBoxes — match by text.
        // Multiple panels may share a curve label (e.g. MPC in private-
        // vs-social); use the one whose center sits inside this panel
        // area, otherwise nearest.
        const matches = boxes.filter(b => b.text === curve.label);
        if (!matches.length) continue;
        let bbox = matches.find(b =>
          b.x >= area.x - 30 && b.x + b.w <= area.x + area.width + 30 &&
          b.y >= area.y - 30 && b.y + b.h <= area.y + area.height + 30
        ) || matches[0];
        const cx = bbox.x + bbox.w / 2, cy = bbox.y + bbox.h / 2;
        const dist = distToCurve(cx, cy, samples);
        // Distance to nearest OTHER curve's label (in the same panel) —
        // proxy for "label looks like it belongs to a different curve".
        let nearestOtherDist = Infinity, nearestOtherText = '';
        for (const ob of boxes) {
          if (ob === bbox || ob.text === curve.label) continue;
          // Same-panel only — labels from different panels can't be confused
          const inSamePanel =
            ob.x >= area.x - 30 && ob.x + ob.w <= area.x + area.width + 30 &&
            ob.y >= area.y - 30 && ob.y + ob.h <= area.y + area.height + 30;
          if (!inSamePanel) continue;
          // Skip if layers/perspectives are mutually exclusive — labels
          // in different reveal layers never co-display, so they can't
          // be confused for each other at runtime (matches the engine's
          // clash-detector skip rule).
          if (bbox.layer && ob.layer && bbox.layer !== ob.layer) continue;
          if (bbox.perspective && ob.perspective && bbox.perspective !== ob.perspective) continue;
          const ocx = ob.x + ob.w / 2, ocy = ob.y + ob.h / 2;
          const d = Math.hypot(ocx - cx, ocy - cy);
          if (d < nearestOtherDist) { nearestOtherDist = d; nearestOtherText = ob.text; }
        }
        const isFar = dist > FAR_THRESHOLD;
        const isAmbiguous = nearestOtherDist < AMBIGUITY_RATIO * Math.max(dist, 12);
        if (isFar || isAmbiguous) {
          findings.push({
            file, spec: specKey, label: curve.label,
            dist: Math.round(dist),
            nearestOther: nearestOtherText,
            nearestOtherDist: Math.round(nearestOtherDist),
            issues: [isFar && 'far', isAmbiguous && 'ambiguous'].filter(Boolean).join('+'),
            labelDx: curve.labelDx, labelDy: curve.labelDy,
            anchor: curve.anchor || 'start'
          });
        }
      }
    }
  }
}

if (!findings.length) {
  console.log('label-audit: OK — every labelled curve passes both checks');
  process.exit(0);
}

// Group by file, sort each file's findings by max distance descending.
const byFile = new Map();
for (const f of findings) {
  if (!byFile.has(f.file)) byFile.set(f.file, []);
  byFile.get(f.file).push(f);
}
const sortedFiles = Array.from(byFile.entries()).sort((a, b) => {
  const maxA = Math.max(...a[1].map(f => f.dist));
  const maxB = Math.max(...b[1].map(f => f.dist));
  return maxB - maxA;
});

const far = findings.filter(f => f.issues.includes('far')).length;
const amb = findings.filter(f => f.issues.includes('ambiguous')).length;
console.log('label-audit: ' + findings.length + ' label finding(s) — ' + far + ' far, ' + amb + ' ambiguous\n');
for (const [file, fs] of sortedFiles) {
  fs.sort((a, b) => b.dist - a.dist);
  console.log(file);
  for (const f of fs) {
    const tag = f.issues === 'far'       ? `${f.dist}px far     `
              : f.issues === 'ambiguous' ? `nr "${f.nearestOther}" (${f.nearestOtherDist}px vs ${f.dist}px own)`
              :                            `${f.dist}px far + ambiguous (nr "${f.nearestOther}" @ ${f.nearestOtherDist}px)`;
    console.log('  ' + tag.padEnd(54) + ' — ' + f.label.padEnd(12) +
      '  [' + f.spec + ']');
  }
}
