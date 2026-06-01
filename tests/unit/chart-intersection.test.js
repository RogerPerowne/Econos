/* ============================================================
   ppf.js — curve intersection solver
   ─────────────────────────────────────────────────────────────
   Locks in the contract for `point.intersection: { curves: [...] }`,
   the spec field that lets authors declare an equilibrium point by
   curve identity instead of hand-computed (x, y) coordinates.

   The solver handles:
     - line ∩ line   (closed-form)
     - line ∩ cubic  (sample-and-bisect for sign changes)

   ppf.js is a browser IIFE that publishes to `window.ECONOS_PPF`,
   so the test simulates a window object, requires the file, and
   probes the resolver via `window.ECONOS_PPF.render(spec)` —
   which mutates the spec's points in place with resolved coords.
   ============================================================ */

import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

let render;

beforeAll(() => {
  const w = {};
  const src = readFileSync(resolve(process.cwd(), 'js/charts/ppf.js'), 'utf8');
  /* eslint-disable no-new-func */
  new Function('window', src)(w);
  render = w.ECONOS_PPF.render;
});

function pt(spec) { return spec.points[0]; }
const SQUARE = { width: 400, height: 300, chartArea: { x: 50, y: 30, width: 300, height: 220 } };

describe('intersection solver', () => {
  it('resolves line × line to closed-form coordinates', () => {
    const spec = {
      ...SQUARE,
      curves: [
        { id: 'AD',   d: 'M 0.050,0.850 L 0.850,0.050' }, // y = -x + 0.9
        { id: 'LRAS', d: 'M 0.650,0 L 0.650,0.992' }      // x = 0.65
      ],
      points: [{ id: 'E1', intersection: { curves: ['AD', 'LRAS'] }, tone: 'blue', radius: 5 }]
    };
    render(spec);
    expect(pt(spec).x).toBeCloseTo(0.650, 3);
    expect(pt(spec).y).toBeCloseTo(0.250, 3);
  });

  it('resolves line × cubic on a Keynesian reverse-L AS curve', () => {
    const spec = {
      ...SQUARE,
      curves: [
        { id: 'AD', d: 'M 0.050,0.850 L 0.850,0.050' },
        { id: 'AS', d: 'M 0.050,0.150 L 0.450,0.150 C 0.557,0.150 0.650,0.191 0.650,0.950' }
      ],
      points: [{ id: 'E1', intersection: { curves: ['AD', 'AS'], near: [0.6, 0.3] }, tone: 'amber', radius: 5 }]
    };
    render(spec);
    expect(pt(spec).x).toBeCloseTo(0.600, 2);
    expect(pt(spec).y).toBeCloseTo(0.300, 2);
  });

  it('uses the `near` hint to pick between multiple intersections', () => {
    // AD₂ shifted right intersects the SAME reverse-L Keynesian curve
    // higher up on the steep section.
    const spec = {
      ...SQUARE,
      curves: [
        { id: 'AD2', d: 'M 0.050,0.970 L 0.950,0.070' },     // y = -x + 1.02
        { id: 'AS',  d: 'M 0.050,0.150 L 0.450,0.150 C 0.557,0.150 0.650,0.191 0.650,0.950' }
      ],
      points: [{ id: 'E2', intersection: { curves: ['AD2', 'AS'], near: [0.62, 0.4] }, tone: 'amber', radius: 5 }]
    };
    render(spec);
    expect(pt(spec).x).toBeCloseTo(0.621, 2);
    expect(pt(spec).y).toBeCloseTo(0.398, 2);
  });

  it('leaves x/y unchanged when intersection target is unknown', () => {
    const spec = {
      ...SQUARE,
      curves: [{ id: 'AD', d: 'M 0.0,0.8 L 0.8,0.0' }],
      points: [{
        id: 'E1', x: 0.5, y: 0.5,
        intersection: { curves: ['AD', 'DoesNotExist'] },
        tone: 'blue', radius: 5
      }]
    };
    render(spec);
    expect(pt(spec).x).toBeCloseTo(0.5, 3);
    expect(pt(spec).y).toBeCloseTo(0.5, 3);
  });
});

describe('geometry assertion', () => {
  it('passes silently when declared coords match the solved intersection', () => {
    const w = {};
    const src = readFileSync(resolve(process.cwd(), 'js/charts/ppf.js'), 'utf8');
    /* eslint-disable-next-line no-new-func */
    new Function('window', src)(w);
    const spec = {
      ...SQUARE,
      curves: [
        { id: 'AD',   d: 'M 0.050,0.850 L 0.850,0.050' },
        { id: 'LRAS', d: 'M 0.650,0 L 0.650,0.992' }
      ],
      points: [{
        id: 'E1', x: 0.650, y: 0.250,
        intersection: { curves: ['AD', 'LRAS'] },
        tone: 'blue', radius: 5
      }]
    };
    w.ECONOS_PPF.render(spec);
    const drifts = (w.ECONOS_PPF.lastWarnings || []).filter(m => m.includes('drifts'));
    expect(drifts).toEqual([]);
  });

  it('flags drift when declared coords disagree with the solved intersection', () => {
    const w = {};
    const src = readFileSync(resolve(process.cwd(), 'js/charts/ppf.js'), 'utf8');
    /* eslint-disable-next-line no-new-func */
    new Function('window', src)(w);
    const spec = {
      ...SQUARE,
      curves: [
        { id: 'AD',   d: 'M 0.050,0.850 L 0.850,0.050' },
        { id: 'LRAS', d: 'M 0.650,0 L 0.650,0.992' }
      ],
      // Author claims E₁ is at (0.65, 0.30) but AD ∩ LRAS = (0.65, 0.25)
      // — should fire the drift warning.
      points: [{
        id: 'E1', x: 0.650, y: 0.300,
        intersection: { curves: ['AD', 'LRAS'] },
        tone: 'blue', radius: 5
      }]
    };
    w.ECONOS_PPF.render(spec);
    const drifts = (w.ECONOS_PPF.lastWarnings || []).filter(m => m.includes('drifts'));
    expect(drifts.length).toBe(1);
    expect(drifts[0]).toContain('E1');
    expect(drifts[0]).toContain('0.300');
  });
});

/* ============================================================
   on:-snap — a point declared `on: 'curveId'` has its y resolved
   from the curve at the point's x, so dots are guaranteed to sit
   on the line (not just hinted for label placement). Drift beyond
   tolerance warns but still snaps.
   ============================================================ */
describe('on:-curve snap', () => {
  it('snaps a drifted point onto a straight line at its x', () => {
    const spec = {
      ...SQUARE,
      curves: [{ id: 'D', d: 'M 0.000,1.000 L 1.000,0.000' }], // y = 1 - x
      // declared y is wrong (0.30); the curve at x=0.40 is y=0.60
      points: [{ x: 0.40, y: 0.30, on: 'D' }]
    };
    render(spec);
    expect(pt(spec).y).toBeCloseTo(0.60, 5);
  });

  it('leaves an already-correct on-curve point unchanged', () => {
    const spec = {
      ...SQUARE,
      curves: [{ id: 'D', d: 'M 0.000,1.000 L 1.000,0.000' }],
      points: [{ x: 0.25, y: 0.75, on: 'D' }]
    };
    render(spec);
    expect(pt(spec).y).toBeCloseTo(0.75, 5);
  });
});
