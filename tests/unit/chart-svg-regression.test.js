/* ============================================================
   chart-svg-regression.test.js — visual regression via SVG markup
   ─────────────────────────────────────────────────────────────
   The engine renders every chart spec to deterministic SVG
   markup server-side. This test snapshots that markup, one
   entry per spec. A behaviour change in the engine (curve
   geometry shifts, label placement moves, default styling
   tweaks) shows up as a snapshot diff on `npm run test:unit`.

   Why markup, not pixels — pixel-diffing needs a headless
   browser, an image-diff library and tolerance tuning. SVG
   strings are deterministic strings; vitest's built-in
   `toMatchSnapshot()` handles them with zero infra.

   Intentional change workflow:
     1. Make the engine / spec change.
     2. Run `npx vitest run -u` to refresh snapshots.
     3. Eyeball the diff in `__snapshots__/` and the PR.
     4. Commit the updated `.snap` file alongside the code.

   Unintentional change workflow:
     1. `npm run test:unit` fails with a snapshot diff.
     2. Read the diff — what curve / label / coord shifted?
     3. Fix the regression, not the snapshot.
   ============================================================ */

import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = process.cwd();
const specsDir = resolve(root, 'js/charts/specs');
const specFiles = readdirSync(specsDir).filter(f => f.endsWith('.js')).sort();

const renderedByKey = new Map();

beforeAll(() => {
  const ppfSrc = readFileSync(resolve(root, 'js/charts/ppf.js'), 'utf8');
  const firmSrc = readFileSync(resolve(root, 'js/charts/firm-model.js'), 'utf8');
  for (const file of specFiles) {
    const w = {};
    /* eslint-disable-next-line no-new-func */
    new Function('window', ppfSrc)(w);
    /* eslint-disable-next-line no-new-func */
    new Function('window', firmSrc)(w);
    const specSrc = readFileSync(join(specsDir, file), 'utf8');
    /* eslint-disable-next-line no-new-func */
    new Function('window', specSrc)(w);
    const specKeys = Object.keys(w).filter(k => k.startsWith('ECONOS_') && k.endsWith('_SPEC'));
    for (const key of specKeys) {
      const spec = w[key];
      if (!spec || typeof spec !== 'object') continue;
      const svg = w.ECONOS_PPF.render(spec);
      renderedByKey.set(`${file}::${key}`, svg);
    }
  }
});

describe('chart SVG regression', () => {
  it('discovered specs match the manifest', () => {
    expect(renderedByKey.size).toBeGreaterThan(0);
    expect(Array.from(renderedByKey.keys()).sort()).toMatchSnapshot('manifest');
  });

  // Generate one test per spec so a diff fingerprints the failing chart.
  // We sort to keep the snapshot order stable across filesystem listings.
  for (const file of specFiles) {
    it(`${file} renders unchanged SVG markup`, () => {
      const keysForFile = Array.from(renderedByKey.keys())
        .filter(k => k.startsWith(`${file}::`))
        .sort();
      expect(keysForFile.length).toBeGreaterThan(0);
      for (const key of keysForFile) {
        const specName = key.split('::')[1];
        expect(renderedByKey.get(key)).toMatchSnapshot(specName);
      }
    });
  }
});
