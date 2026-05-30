/* js/blocks/charts/adas.js
   ───────────────────────────────────────────────────────────────────────────
   AD/AS chart family for the declarative econ-diagram engine.

   This used to live inline in js/blocks/econ-diagram.js. It now registers via
   the engine's public API so the engine core is family-agnostic:

     window.ECONOS_ECON_DIAGRAM.register('adas', { … })

   The definition is byte-for-byte the same geometry as before — the Conflicts
   C4 cards (chart:'adas') render pixel-identically. See the backward-compat
   assertion in tests/unit/econ-diagram.test.js.

   Loads via <script defer> AFTER econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';
  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before adas family');
    return;
  }

  API.register('adas', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },
    axes: {
      xLabel: 'Y', xSub: 'real output',
      yLabel: 'P', ySub: 'price level'
    },
    // Vertical reference at x=400 (LRAS / potential output).
    anchors: [{ kind: 'vertical', x: 400, label: 'LRAS', tone: 'slate' }],
    // Curves are defined by a slope + the c that puts the baseline equilibrium
    // at (400, 305). Engine derives endpoints from plot bounds.
    baseline: {
      AD:   { kind: 'linear', slope:  0.7, c: 25,  tone: 'blue',  display: 'AD₀'   },
      SRAS: { kind: 'linear', slope: -0.7, c: 585, tone: 'slate', display: 'SRAS₀' }
    },
    // Equilibrium computed from these two curves' intersection.
    equilibrium: { from: ['AD', 'SRAS'], baseLabel: 'E' }
  });

})();
