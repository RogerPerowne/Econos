/* ============================================================
   ppf.js — composable templates
   ─────────────────────────────────────────────────────────────
   Locks in the contract for `spec.template: 'ad-as'` etc. —
   the spec field that pulls in a named recipe of defaults
   (chart area, axis labels) so authors don't have to retype
   the same boilerplate across charts in the same family.
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

describe('templates', () => {
  it('ad-as template sets chart area + axes for a minimal spec', () => {
    const spec = { template: 'ad-as' };
    const svg = render(spec);
    expect(svg).toContain('Real output (Y)');
    expect(svg).toContain('Price level (P)');
    expect(svg).toContain('viewBox="0 -16 440 356"');
  });

  it('supply-demand template uses Q on x and P on y', () => {
    const svg = render({ template: 'supply-demand' });
    expect(svg).toContain('Quantity (Q)');
    expect(svg).toContain('Price (P)');
  });

  it('author width overrides template width', () => {
    const svg = render({ template: 'ad-as', width: 600 });
    expect(svg).toContain('viewBox="0 -16 600 356"');
  });

  it('author axes override template axes', () => {
    const svg = render({
      template: 'ad-as',
      axes: { x: { label: 'GDP' }, y: { label: 'CPI' } }
    });
    expect(svg).toContain('GDP');
    expect(svg).toContain('CPI');
    expect(svg).not.toContain('Real output (Y)');
  });

  it('unknown template name is ignored gracefully', () => {
    const spec = {
      template: 'does-not-exist',
      width: 400, height: 300,
      chartArea: { x: 50, y: 30, width: 300, height: 220 },
      axes: { x: { label: 'X' }, y: { label: 'Y' } }
    };
    const svg = render(spec);
    expect(svg).toContain('viewBox="0 -16 400 316"');
  });
});
