/* ============================================================
   ppf.js — named curve shapes
   ─────────────────────────────────────────────────────────────
   Locks in the contract for `curve.shape: { type, … }` — the
   spec field that lets authors declare a textbook curve shape
   by name instead of hand-typing an SVG path d-string.

   Supported types (this PR):
     linear      slope+point or two-point line
     vertical    vertical line at chart-x = x
     horizontal  horizontal line at chart-y = y
     keynesianAS reverse-L AS: flat → bottleneck → vertical
   ============================================================ */

import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

let render;
const SQUARE = { width: 400, height: 300, chartArea: { x: 50, y: 30, width: 300, height: 220 } };

beforeAll(() => {
  const w = {};
  const src = readFileSync(resolve(process.cwd(), 'js/charts/ppf.js'), 'utf8');
  /* eslint-disable no-new-func */
  new Function('window', src)(w);
  render = w.ECONOS_PPF.render;
});

describe('named shapes', () => {
  it('compiles a linear slope-and-point shape, intersection solver agrees', () => {
    // AD₁: line through (0.65, 0.25) with slope -1 → y = -x + 0.9.
    // LRAS: vertical at x = 0.65.
    // Intersection must be (0.65, 0.25) — the textbook E₁ at Yf.
    const spec = {
      ...SQUARE,
      curves: [
        { id: 'AD',   shape: { type: 'linear', through: [0.65, 0.25], slope: -1 } },
        { id: 'LRAS', shape: { type: 'vertical', x: 0.65 } }
      ],
      points: [{ id: 'E1', intersection: { curves: ['AD', 'LRAS'] }, tone: 'blue', radius: 5 }]
    };
    render(spec);
    expect(spec.curves[0].d).toMatch(/^M /);
    expect(spec.curves[1].d).toMatch(/^M 0\.65,/);
    expect(spec.points[0].x).toBeCloseTo(0.65, 2);
    expect(spec.points[0].y).toBeCloseTo(0.25, 2);
  });

  it('horizontal shape produces a flat path', () => {
    const spec = {
      ...SQUARE,
      curves: [{ id: 'flat', shape: { type: 'horizontal', y: 0.15, from: 0.05, to: 0.45 } }]
    };
    render(spec);
    expect(spec.curves[0].d).toBe('M 0.05,0.15 L 0.45,0.15');
  });

  it('keynesianAS shape produces a reverse-L; intersection sits on the steep section', () => {
    // Default Keynesian AS: flatY 0.15, kneeX 0.45, capacityX 0.65, top 0.95.
    // Intersect with AD₁ slope -1 through (0.65, 0.25). The crossing on the
    // steep section must match the hand-derived (0.600, 0.300).
    const spec = {
      ...SQUARE,
      curves: [
        { id: 'AD', shape: { type: 'linear', through: [0.65, 0.25], slope: -1 } },
        { id: 'AS', shape: { type: 'keynesianAS' } }
      ],
      points: [{ id: 'E1', intersection: { curves: ['AD', 'AS'], near: [0.6, 0.3] }, tone: 'amber', radius: 5 }]
    };
    render(spec);
    expect(spec.curves[1].d).toMatch(/^M 0\.05,0\.15 L 0\.45,0\.15 C/);
    expect(spec.points[0].x).toBeCloseTo(0.600, 2);
    expect(spec.points[0].y).toBeCloseTo(0.300, 2);
  });

  it('keynesianAS parameters are respected', () => {
    const spec = {
      ...SQUARE,
      curves: [{
        id: 'AS',
        shape: { type: 'keynesianAS', flatY: 0.20, kneeX: 0.40, capacityX: 0.70, top: 0.90 }
      }]
    };
    render(spec);
    expect(spec.curves[0].d).toMatch(/M 0\.05,0\.2 L 0\.4,0\.2 C .* 0\.7,0\.9$/);
  });

  it('author-supplied d wins over shape', () => {
    const spec = {
      ...SQUARE,
      curves: [{
        id: 'AD',
        d: 'M 0.1,0.1 L 0.9,0.9',
        shape: { type: 'linear', through: [0.5, 0.5], slope: -1 }
      }]
    };
    render(spec);
    expect(spec.curves[0].d).toBe('M 0.1,0.1 L 0.9,0.9');
  });
});
