/* ============================================================
   ppf.js — auto-derived alt text
   ─────────────────────────────────────────────────────────────
   Locks in the SVG accessibility metadata emission. Every chart
   now ships with `<title>` and `<desc>` elements wired via
   `role="img"` + `aria-labelledby`, so screen readers get a
   description of the chart's structure instead of a bare "image".

   - altTitle / altDesc in the spec override auto-generation
   - Otherwise the engine scans curves + points + axes to build
     a sensible default
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
    return w.ECONOS_PPF.render(spec);
  };
});

describe('alt text', () => {
  it('emits role="img" and aria-labelledby on the root svg', () => {
    const svg = renderFresh({ ...BASE });
    expect(svg).toContain('role="img"');
    expect(svg).toContain('aria-labelledby="econos-chart-title econos-chart-desc"');
    expect(svg).toContain('<title id="econos-chart-title">');
    expect(svg).toContain('<desc id="econos-chart-desc">');
  });

  it('auto-derives title from curve labels and point labels', () => {
    const svg = renderFresh({
      ...BASE,
      curves: [
        { id: 'AD', label: 'AD₁', d: 'M 0,0.9 L 0.9,0' },
        { id: 'LRAS', label: 'LRAS', d: 'M 0.5,0 L 0.5,0.9' }
      ],
      points: [{ id: 'E', label: 'E₁', x: 0.5, y: 0.4, radius: 5 }]
    });
    expect(svg).toMatch(/<title id="econos-chart-title">Chart with AD₁, LRAS curves and E₁ points<\/title>/);
  });

  it('auto-derives desc with axes + curve list + point coords', () => {
    const svg = renderFresh({
      ...BASE,
      axes: { x: { label: 'Real output (Y)' }, y: { label: 'Price level (P)' } },
      curves: [{ id: 'AD', label: 'AD', d: 'M 0,0.9 L 0.9,0' }],
      points: [{ id: 'E1', label: 'E₁', x: 0.5, y: 0.4, radius: 5 }]
    });
    expect(svg).toContain('Real output (Y) on x-axis, Price level (P) on y-axis.');
    expect(svg).toContain('Curves: AD.');
    expect(svg).toContain('E₁ at (0.50, 0.40)');
  });

  it('spec altTitle and altDesc override the auto-generation', () => {
    const svg = renderFresh({
      ...BASE,
      altTitle: 'Custom title goes here',
      altDesc: 'Custom description of the chart for screen readers.',
      curves: [{ label: 'AD', d: 'M 0,0.9 L 0.9,0' }]
    });
    expect(svg).toContain('<title id="econos-chart-title">Custom title goes here</title>');
    expect(svg).toContain('<desc id="econos-chart-desc">Custom description of the chart for screen readers.</desc>');
  });

  it('XML-escapes user-supplied alt text', () => {
    const svg = renderFresh({
      ...BASE,
      altTitle: 'A & B < C > D'
    });
    expect(svg).toContain('A &amp; B &lt; C &gt; D');
  });
});
