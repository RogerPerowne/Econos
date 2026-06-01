/* ============================================================
   dial-engine.js — gauge primitive snapshot + geometry tests.

   The engine's main job is GEOMETRIC ACCURACY — pointer length and
   target-band endpoints both derive from the same parametrisation
   as the background arc, so the pointer tip always lands on the
   arc and the target band's endpoints always sit on the arc.

   We assert that explicitly (distance == radius) rather than only
   relying on snapshot equality, because a future change that
   silently introduces a 2-pixel drift would still pass a snapshot
   refresh but visibly break the dial.
   ============================================================ */

import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

let render;
const PIN_TIP_RE = /<line[^>]*x2="([0-9.]+)"[^>]*y2="([0-9.]+)"/;
const ARC_RE     = /<path d="M ([0-9.]+) ([0-9.]+) A 60 60 0 0 1 ([0-9.]+) ([0-9.]+)"[^>]*stroke="#16A34A"/;

beforeAll(() => {
  const w = {};
  const src = readFileSync(resolve(process.cwd(), 'js/icons/dial-engine.js'), 'utf8');
  /* eslint-disable no-new-func */
  new Function('window', src)(w);
  render = w.ECONOS_DIALS.render;
});

describe('dial-engine — gauge', () => {
  it('pointer tip lands exactly on the arc radius', () => {
    const svg = render({ type: 'gauge', size: 160, value: 2.8, min: 0, max: 6, tone: 'red' });
    const m = svg.match(PIN_TIP_RE);
    expect(m).toBeTruthy();
    const tipX = parseFloat(m[1]);
    const tipY = parseFloat(m[2]);
    // Centre at (80, 75), radius 60 for size=160.
    const dx = tipX - 80;
    const dy = tipY - 75;
    const distance = Math.sqrt(dx * dx + dy * dy);
    expect(Math.abs(distance - 60)).toBeLessThan(0.01);
  });

  it('target-band endpoints also land on the arc radius', () => {
    const svg = render({ type: 'gauge', size: 160, value: 5.0, min: 0, max: 12, target: [4, 5], tone: 'blue' });
    const m = svg.match(ARC_RE);
    expect(m).toBeTruthy();
    const [x0, y0, x1, y1] = m.slice(1).map(parseFloat);
    const d0 = Math.sqrt((x0 - 80) ** 2 + (y0 - 75) ** 2);
    const d1 = Math.sqrt((x1 - 80) ** 2 + (y1 - 75) ** 2);
    expect(Math.abs(d0 - 60)).toBeLessThan(0.01);
    expect(Math.abs(d1 - 60)).toBeLessThan(0.01);
  });

  it('value clamps to [min, max] when out of range', () => {
    const high = render({ type: 'gauge', size: 160, value: 100, min: 0, max: 10, tone: 'green' });
    const low  = render({ type: 'gauge', size: 160, value: -50, min: 0, max: 10, tone: 'green' });
    // Both render without throwing; tip stays on the radius.
    const mHigh = high.match(PIN_TIP_RE);
    const mLow  = low.match(PIN_TIP_RE);
    const dH = Math.sqrt((parseFloat(mHigh[1]) - 80) ** 2 + (parseFloat(mHigh[2]) - 75) ** 2);
    const dL = Math.sqrt((parseFloat(mLow[1])  - 80) ** 2 + (parseFloat(mLow[2])  - 75) ** 2);
    expect(Math.abs(dH - 60)).toBeLessThan(0.01);
    expect(Math.abs(dL - 60)).toBeLessThan(0.01);
  });

  it('snapshot of the inflation dial matches', () => {
    const svg = render({
      type: 'gauge', size: 160, value: 2.8, min: 0, max: 6,
      target: [1.5, 2.5], tone: 'red',
      ariaLabel: 'UK CPI inflation 2.8%, target 1.5–2.5%'
    });
    expect(svg).toMatchSnapshot();
  });

  it('unknown spec.type returns a comment placeholder', () => {
    const out = render({ type: 'banana' });
    expect(out).toContain('ECONOS_DIALS: unknown type');
  });

  it('missing spec is handled gracefully', () => {
    expect(render(null)).toContain('ECONOS_DIALS: missing spec');
    expect(render(undefined)).toContain('ECONOS_DIALS: missing spec');
  });
});
