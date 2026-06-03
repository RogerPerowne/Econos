/* ============================================================
   econos-diagrams.js — Econos Diagram Language (EDL) v1

   Pure-function coverage for the new semantic diagram engine. The
   engine is a browser-global IIFE, so we eval it against a mock
   `window` (the same trick the legacy chart tests + lint-charts.mjs
   use) and exercise the public API surface.

   These tests double as the executable proof that:
     - the legacy ECONOS_PPF path still works untouched, and
     - the new defaults (chevron arrows, layer-sorted render plan,
       derived equilibria) hold.
   ============================================================ */

import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

let EDL;
let PPF;

beforeAll(() => {
  const w = {};
  const edlSrc = readFileSync(resolve(process.cwd(), 'js/diagrams/econos-diagrams.js'), 'utf8');
  const ppfSrc = readFileSync(resolve(process.cwd(), 'js/charts/ppf.js'), 'utf8');
  /* eslint-disable no-new-func */
  new Function('window', ppfSrc)(w);
  new Function('window', edlSrc)(w);
  /* eslint-enable no-new-func */
  // Both engines share the same mock window, so EDL's closure-captured
  // `window.ECONOS_PPF` resolves to the legacy engine for delegation.
  EDL = w.ECONOS_DIAGRAMS;
  PPF = w.ECONOS_PPF;
});

describe('public API', () => {
  it('exposes window.ECONOS_DIAGRAMS with the documented surface', () => {
    expect(EDL).toBeTruthy();
    expect(typeof EDL.version).toBe('string');
    expect(typeof EDL.render).toBe('function');
    expect(typeof EDL.validate).toBe('function');
    expect(typeof EDL.compile).toBe('function');
    expect(typeof EDL.debug).toBe('function');
    expect(EDL.templates).toBeTruthy();
    expect(EDL.layers).toBeTruthy();
    expect(EDL.registry).toBeTruthy();
  });

  it('render() returns the full result envelope', () => {
    const out = EDL.render({ version: 1, type: 'market', intent: 'market-equilibrium' });
    expect(out).toHaveProperty('svg');
    expect(out).toHaveProperty('errors');
    expect(out).toHaveProperty('warnings');
    expect(out).toHaveProperty('derived');
    expect(out).toHaveProperty('renderPlan');
    expect(out).toHaveProperty('hidden');
    expect(out).toHaveProperty('collisionsResolved');
    expect(out.svg).toContain('<svg');
    expect(out.svg).toContain('role="img"');
  });
});

describe('validation', () => {
  it('rejects an unknown family', () => {
    const v = EDL.validate({ type: 'banana' });
    expect(v.valid).toBe(false);
    expect(v.errors.join(' ')).toMatch(/unknown family/);
  });

  it('rejects an intent that does not belong to the declared family', () => {
    const v = EDL.validate({ type: 'market', intent: 'tax-incidence' });
    expect(v.valid).toBe(false);
    expect(v.errors.join(' ')).toMatch(/belongs to family/);
  });

  it('warns (not errors) on unknown show tokens', () => {
    const v = EDL.validate({ type: 'market', intent: 'market-equilibrium', show: ['made-up'] });
    expect(v.valid).toBe(true);
    expect(v.warnings.join(' ')).toMatch(/unknown show token/);
  });

  it('accepts a well-formed semantic spec', () => {
    const v = EDL.validate({
      version: 1,
      type: 'market',
      intent: 'demand-shift-right',
      alt: { summary: 'demand rises' },
    });
    expect(v.valid).toBe(true);
    expect(v.errors).toHaveLength(0);
  });
});

describe('market geometry', () => {
  it('derives an equilibrium E1 for a plain market', () => {
    const out = EDL.render({ version: 1, type: 'market', intent: 'market-equilibrium' });
    expect(out.derived.E1).toBeTruthy();
    expect(out.derived.E1.x).toBeGreaterThan(0);
    expect(out.derived.E1.x).toBeLessThan(1);
    expect(out.derived.E1.y).toBeGreaterThan(0);
  });

  it('a demand shift right derives both E1 and E2 with E2 to the right and higher', () => {
    const out = EDL.render({ version: 1, type: 'market', intent: 'demand-shift-right' });
    expect(out.derived.E1).toBeTruthy();
    expect(out.derived.E2).toBeTruthy();
    expect(out.derived.E2.x).toBeGreaterThan(out.derived.E1.x);
    expect(out.derived.E2.y).toBeGreaterThan(out.derived.E1.y);
  });

  it('a supply shift right pushes price down and quantity up', () => {
    const out = EDL.render({ version: 1, type: 'market', intent: 'supply-shift-right' });
    expect(out.derived.E2.x).toBeGreaterThan(out.derived.E1.x);
    expect(out.derived.E2.y).toBeLessThan(out.derived.E1.y);
  });
});

describe('tax template', () => {
  it('renders a tax wedge with the consumer price above the producer price', () => {
    const out = EDL.render({
      version: 1,
      type: 'tax',
      intent: 'tax-incidence',
      tax: { size: 0.18 },
    });
    expect(out.errors).toHaveLength(0);
    expect(out.derived.consumerPrice).toBeGreaterThan(out.derived.producerPrice);
    // wedge ≈ tax per unit
    const wedge = out.derived.consumerPrice - out.derived.producerPrice;
    expect(Math.abs(wedge - 0.18)).toBeLessThan(0.02);
    expect(out.svg).toContain('Tax');
  });
});

describe('price controls', () => {
  it('a maximum price renders a shortage (Qd > Qs)', () => {
    const out = EDL.render({
      version: 1,
      type: 'price-control',
      intent: 'maximum-price-shortage',
    });
    expect(out.derived.kind).toBe('maximum');
    expect(out.derived.qd).toBeGreaterThan(out.derived.qs);
    expect(out.svg).toContain('Shortage');
  });

  it('a minimum price renders a surplus (Qs > Qd)', () => {
    const out = EDL.render({
      version: 1,
      type: 'price-control',
      intent: 'minimum-price-surplus',
    });
    expect(out.derived.kind).toBe('minimum');
    expect(out.derived.qs).toBeGreaterThan(out.derived.qd);
    expect(out.svg).toContain('Surplus');
  });
});

describe('externality template', () => {
  it('negative production externality over-produces (Qm > Q*) with a welfare loss', () => {
    const out = EDL.render({
      version: 1,
      type: 'externality',
      intent: 'negative-production-externality',
    });
    expect(out.derived.market.x).toBeGreaterThan(out.derived.social.x);
    expect(out.svg).toContain('Welfare loss');
  });
});

describe('arrow defaults', () => {
  it('default arrowhead is an open chevron marker, never a filled triangle', () => {
    const out = EDL.render({ version: 1, type: 'market', intent: 'demand-shift-right' });
    expect(out.svg).toContain('edl-chevron-');
    expect(out.svg).not.toContain('edl-triangle');
    // open chevron => fill:none on the marker path
    expect(out.svg).toMatch(/<marker id="edl-chevron[^>]*>\s*<path[^>]*fill="none"/);
  });
});

describe('render plan ordering', () => {
  it('elements are sorted ascending by layer', () => {
    const out = EDL.render({ version: 1, type: 'tax', intent: 'tax-incidence' });
    const layers = out.renderPlan.elements.map((e) => e.layer);
    for (let i = 1; i < layers.length; i++) {
      expect(layers[i]).toBeGreaterThanOrEqual(layers[i - 1]);
    }
  });

  it('regions paint before curves which paint before point/arrow labels', () => {
    const out = EDL.render({ version: 1, type: 'tax', intent: 'tax-incidence' });
    const L = EDL.layers;
    const firstOf = (kind) => out.renderPlan.elements.findIndex((e) => e.kind === kind);
    expect(L.regions).toBeLessThan(L.curvesMain);
    expect(L.curvesMain).toBeLessThan(L.pointLabels);
    // a region element, if present, comes before the first label element
    if (firstOf('region') !== -1 && firstOf('label') !== -1) {
      expect(firstOf('region')).toBeLessThan(firstOf('label'));
    }
  });
});

describe('teaching modes', () => {
  it('exam mode strips region fills and old-curve labels', () => {
    const learn = EDL.render({ version: 1, type: 'tax', intent: 'tax-incidence', mode: 'learn' });
    const exam = EDL.render({ version: 1, type: 'tax', intent: 'tax-incidence', mode: 'exam' });
    // learn mode fills the burden/DWL regions; exam mode does not
    expect(learn.svg).toMatch(/fill-opacity/);
    expect(exam.svg).not.toMatch(/fill-opacity="0\.[12]/);
    expect(exam.renderPlan.elements.length).toBeLessThanOrEqual(learn.renderPlan.elements.length);
  });

  it('debug mode adds diagnostic overlays / metadata', () => {
    const out = EDL.render({ version: 1, type: 'market', intent: 'demand-shift-right', mode: 'debug' });
    const kinds = out.renderPlan.elements.map((e) => e.kind);
    expect(kinds).toContain('debugbox');
    expect(out.svg).toContain('EDL debug');
  });

  it('debug() exposes the documented diagnostic bundle', () => {
    const d = EDL.debug({ version: 1, type: 'market', intent: 'market-equilibrium' });
    expect(d).toHaveProperty('normalisedSpec');
    expect(d).toHaveProperty('validation');
    expect(d).toHaveProperty('derivedGeometry');
    expect(d).toHaveProperty('renderPlan');
    expect(d).toHaveProperty('collisions');
    expect(d).toHaveProperty('hidden');
    expect(d).toHaveProperty('svg');
  });
});

describe('viewport modes', () => {
  it('card viewport hides more low-priority labels than article viewport', () => {
    const card = EDL.render({
      version: 1, type: 'externality', intent: 'negative-production-externality',
      viewport: 'card', show: ['msc', 'welfare-loss', 'takeaway'],
      teaching: { takeaway: 'A negative externality means private costs understate true social costs.' },
    });
    const article = EDL.render({
      version: 1, type: 'externality', intent: 'negative-production-externality',
      viewport: 'article', show: ['msc', 'welfare-loss', 'takeaway'],
      teaching: { takeaway: 'A negative externality means private costs understate true social costs.' },
    });
    expect(card.hidden.length).toBeGreaterThanOrEqual(article.hidden.length);
  });
});

describe('accessibility', () => {
  it('generates an alt summary when none is supplied', () => {
    const out = EDL.render({ version: 1, type: 'phillips', intent: 'long-run-phillips-curve' });
    expect(out.svg).toMatch(/aria-label="[^"]+"/);
    expect(out.svg).toContain('<title>');
  });
});

describe('legacy ECONOS_PPF compatibility', () => {
  it('the legacy engine still renders a raw path spec directly', () => {
    const svg = PPF.render({
      width: 200,
      height: 150,
      chartArea: { x: 30, y: 10, width: 150, height: 120 },
      axes: { x: { label: 'Q' }, y: { label: 'P' } },
      curves: [{ d: 'M 0,0 L 1,1', tone: 'blue' }],
    });
    expect(svg).toContain('<svg');
    expect(svg).toContain('Q');
  });

  it('EDL._isLegacySpec detects a legacy chart spec', () => {
    expect(EDL._isLegacySpec({ chartArea: {}, curves: [{ d: 'M 0,0' }] })).toBe(true);
    expect(EDL._isLegacySpec({ version: 1, type: 'market' })).toBe(false);
  });

  it('EDL.render delegates a legacy spec to ECONOS_PPF', () => {
    const out = EDL.render({
      width: 200,
      height: 150,
      chartArea: { x: 30, y: 10, width: 150, height: 120 },
      axes: { x: { label: 'Q' }, y: { label: 'P' } },
      curves: [{ d: 'M 0,0 L 1,1', tone: 'blue' }],
    });
    expect(out.svg).toContain('<svg');
    expect(out.warnings.join(' ')).toMatch(/legacy ECONOS_PPF/);
  });
});
