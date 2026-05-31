/* ============================================================
   ppf.js — auto welfare-region shading
   ─────────────────────────────────────────────────────────────
   Locks in the contract for `welfareRegions: [{ type, curve,
   price, tone, opacity }]`. The engine compiles each region to
   a polygon by tracing along the named curve and closing at the
   reference price + y-axis.
   ============================================================ */

import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

let renderFresh;
const BASE = { width: 400, height: 300, chartArea: { x: 50, y: 30, width: 300, height: 220 } };

beforeAll(() => {
  const src = readFileSync(resolve(process.cwd(), 'js/charts/ppf.js'), 'utf8');
  renderFresh = (spec) => {
    const w = {};
    /* eslint-disable-next-line no-new-func */
    new Function('window', src)(w);
    const svg = w.ECONOS_PPF.render(spec);
    return { svg, spec, warnings: w.ECONOS_PPF.lastWarnings || [] };
  };
});

describe('welfare-region auto-shading', () => {
  it('compiles a consumer-surplus region for a straight demand curve', () => {
    // D: from (0, 0.9) to (0.9, 0). Linear, slope -1.
    // Price line at y=0.5 → intersection at x=0.4.
    // Consumer surplus triangle: (0, 0.5), (0.4, 0.5), traces D back to (0, 0.9).
    const spec = {
      ...BASE,
      curves: [{ id: 'D', d: 'M 0,0.9 L 0.9,0' }],
      welfareRegions: [{ type: 'consumer-surplus', curve: 'D', price: 0.5, tone: 'blue', opacity: 0.18 }]
    };
    const { svg, spec: out } = renderFresh(spec);
    expect(out.polygons.length).toBe(1);
    const poly = out.polygons[0];
    expect(poly.points[0]).toEqual([0, 0.5]);
    expect(poly.points[1][0]).toBeCloseTo(0.4, 2);
    expect(poly.points[1][1]).toBeCloseTo(0.5, 3);
    // Trace ends at (0, 0.9) — the demand-curve intercept on the y-axis.
    const last = poly.points[poly.points.length - 1];
    expect(last[0]).toBeCloseTo(0, 2);
    expect(last[1]).toBeCloseTo(0.9, 2);
    expect(svg).toContain('<polygon');
  });

  it('compiles a producer-surplus region for a straight supply curve', () => {
    // S: from (0, 0.1) to (0.9, 0.9). Linear, slope +1 (approx).
    // Price line at y=0.5 → intersection at x=0.4 (approx).
    const spec = {
      ...BASE,
      curves: [{ id: 'S', d: 'M 0,0.1 L 0.9,0.9' }],
      welfareRegions: [{ type: 'producer-surplus', curve: 'S', price: 0.5, tone: 'amber', opacity: 0.18 }]
    };
    const { spec: out } = renderFresh(spec);
    expect(out.polygons.length).toBe(1);
    const poly = out.polygons[0];
    expect(poly.points[0]).toEqual([0, 0.5]);
    expect(poly.points[1][0]).toBeCloseTo(0.45, 1);
    expect(poly.points[1][1]).toBeCloseTo(0.5, 3);
    const last = poly.points[poly.points.length - 1];
    expect(last[0]).toBeCloseTo(0, 2);
    expect(last[1]).toBeCloseTo(0.1, 2);
  });

  it('preserves author-supplied polygons alongside compiled welfare', () => {
    const spec = {
      ...BASE,
      curves: [{ id: 'D', d: 'M 0,0.9 L 0.9,0' }],
      polygons: [{ points: [[0.2, 0.2], [0.3, 0.3], [0.4, 0.2]], fill: '#888' }],
      welfareRegions: [{ type: 'consumer-surplus', curve: 'D', price: 0.5, tone: 'blue' }]
    };
    const { spec: out } = renderFresh(spec);
    expect(out.polygons.length).toBe(2);
  });

  it('unknown curve fails silently — leaves polygons empty', () => {
    const spec = {
      ...BASE,
      curves: [{ id: 'D', d: 'M 0,0.9 L 0.9,0' }],
      welfareRegions: [{ type: 'consumer-surplus', curve: 'NotARealCurve', price: 0.5, tone: 'blue' }]
    };
    const { spec: out } = renderFresh(spec);
    expect(out.polygons || []).toEqual([]);
  });
});
