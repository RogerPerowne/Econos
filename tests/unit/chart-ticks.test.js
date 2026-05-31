/* ============================================================
   ppf.js — tick label dedup + collision detection
   ─────────────────────────────────────────────────────────────
   Locks in the cross-point tick awareness added with toolkit
   item #4. Two points that both want to label the same axis
   position with the same text get DEDUPED silently. Two
   different ticks placed within MIN_TICK_GAP (14px) on the
   same axis log a dev warning.
   ============================================================ */

import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

let renderFresh;
const SQUARE = { width: 400, height: 300, chartArea: { x: 50, y: 30, width: 300, height: 220 } };

beforeAll(() => {
  // Each call gets a fresh window so the warnings list isn't shared
  // across tests.
  const src = readFileSync(resolve(process.cwd(), 'js/charts/ppf.js'), 'utf8');
  renderFresh = (spec) => {
    const w = {};
    /* eslint-disable-next-line no-new-func */
    new Function('window', src)(w);
    const svg = w.ECONOS_PPF.render(spec);
    return { svg, warnings: w.ECONOS_PPF.lastWarnings || [] };
  };
});

describe('tick label dedup', () => {
  it('silently dedupes identical labels at the same axis position', () => {
    // Two points at the same Yf vertical line, both want a "Yf" x-tick.
    // Engine should render exactly ONE "Yf" tick.
    const spec = {
      ...SQUARE,
      curves: [{ id: 'LRAS', shape: { type: 'vertical', x: 0.65 } }],
      points: [
        { x: 0.65, y: 0.25, gridlines: 'slate', ticks: { x: 'Yf', y: 'P₁' }, tone: 'blue', radius: 5 },
        { x: 0.65, y: 0.45, gridlines: 'slate', ticks: { x: 'Yf', y: 'P₂' }, tone: 'blue', radius: 5 }
      ]
    };
    const { svg, warnings } = renderFresh(spec);
    const yfCount = (svg.match(/>Yf</g) || []).length;
    expect(yfCount).toBe(1);
    // Two DIFFERENT y-ticks (P₁ vs P₂) at different y-positions — no collision.
    expect(warnings.filter(m => m.includes('tick collision'))).toEqual([]);
  });

  it('warns when two different ticks collide on the same axis', () => {
    // Two points 5px apart on the y-axis with different tick labels.
    // (cy positions ≈ 192 and 196 — 4px apart, below MIN_TICK_GAP=14.)
    const spec = {
      ...SQUARE,
      points: [
        { x: 0.3, y: 0.30, gridlines: 'slate', ticks: { y: 'P₁' }, tone: 'blue', radius: 5 },
        { x: 0.3, y: 0.32, gridlines: 'slate', ticks: { y: 'P₂' }, tone: 'blue', radius: 5 }
      ]
    };
    const { warnings } = renderFresh(spec);
    const collisions = warnings.filter(m => m.includes('tick collision'));
    expect(collisions.length).toBe(1);
    expect(collisions[0]).toContain('y-axis');
    expect(collisions[0]).toContain('P₁');
    expect(collisions[0]).toContain('P₂');
  });

  it('no warning when ticks are comfortably spaced', () => {
    // 30px apart on the y-axis — well above MIN_TICK_GAP.
    const spec = {
      ...SQUARE,
      points: [
        { x: 0.3, y: 0.25, gridlines: 'slate', ticks: { y: 'P₁' }, tone: 'blue', radius: 5 },
        { x: 0.3, y: 0.40, gridlines: 'slate', ticks: { y: 'P₂' }, tone: 'blue', radius: 5 }
      ]
    };
    const { warnings } = renderFresh(spec);
    expect(warnings.filter(m => m.includes('tick collision'))).toEqual([]);
  });
});
