/* ============================================================
   PPF card 4 — ppfBowedOutInteractive: three trades along a
   quarter-circle PPF, designed so the chord slopes (OC values)
   triple each time: 1/3 → 1 → 3.

   Curve `M 0,1 C 0.5523,1 1,0.5523 1,0` is the canonical cubic-
   Bezier approximation to a quarter-arc of the unit circle (the
   magic constant 4(√2−1)/3 ≈ 0.5523). In 0..10 chart units it
   satisfies x² + y² ≈ 100 to four decimals at every sampled
   point — the standard "smoothly bowed PPF" textbook shape, not
   the flat-then-cliff shape the engine had been producing.

   Trade Δx is 2 capital goods. Endpoints land on integer y so the
   sacrifice can be read straight off the chord:

     View 1 — CHEAP    (green) capital 2 → 4, consumer 9.8 → 9.2
              OC ≈ 1/3 — you gain three times what you give up.
     View 2 — EVEN     (blue)  capital 6 → 8, consumer 8.0 → 6.0
              OC = 1   — the 1-for-1 trade, chord at 45°.
     View 3 — COSTLY   (rose)  capital 8 → 10, consumer 6.0 → 0.0
              OC = 3   — you give up three times what you gain.

   X-axis tick numerals appear ONLY at the capital values that
   currently matter (2, 4, 6, 8) and reveal progressively as the
   learner clicks each view. 10 is omitted because the curve label
   and axis-end label already crowd that corner; the badge carries
   the magnitude.

   Progressive reveal: engine emits each triangle into <g class="idl-N">
   with display:none; js/app.js shows layers 0..N-1 for view N, so
   the three trades accumulate.
   ============================================================ */
(function () {
  'use strict';

  // 2 capital goods per trade — large enough that the chord slope reads.
  var DELTA_X = 0.2;

  function xTick(x, label) {
    return { x: x, y: -0.04, text: String(label), tone: 'slate', fontSize: 11, anchor: 'middle' };
  }

  window.ECONOS_PPF_CARD2_SPEC = {
    width: 440,
    height: 300,
    chartArea: { x: 55, y: 30, width: 340, height: 238 },
    axes: {
      x: { label: 'Capital goods' },
      y: { label: 'Consumer goods' }
    },
    curves: [
      // Quarter-circle PPF — cubic Bezier approximation. Smoothly bowed,
      // x² + y² ≈ 100 everywhere.
      { id: 'ppf', d: 'M 0,1 C 0.5523,1 1,0.5523 1,0', tone: 'blue', label: 'PPF', strokeWidth: 2.5 }
    ],

    viewDefaultsHidden: true,
    views: [
      {
        // CHEAP — capital 2 → 4, OC ≈ 1/3.
        key: 'cheap',
        contentLayer: 'idl-1',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.1240, deltaX: DELTA_X, label: 'OC ≈ 1/3', tone: 'green' }
        ],
        texts: [
          xTick(0.2, '2'),
          xTick(0.4, '4')
        ]
      },
      {
        // EVEN — capital 6 → 8, OC = 1 exactly. Chord at 45°.
        key: 'even',
        contentLayer: 'idl-2',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.4076, deltaX: DELTA_X, label: 'OC = 1', tone: 'blue' }
        ],
        texts: [
          xTick(0.6, '6'),
          xTick(0.8, '8')
        ]
      },
      {
        // COSTLY — capital 8 → ~10, OC ≈ 3. End vertex hits the x-axis.
        // Δx is 0.199 (not 0.2) because findTAtX's bounds check rejects
        // exact-endpoint targets — start[0] computes to 0.80000194 due
        // to binary-search precision, so start[0] + 0.2 = 1.00000194 > 1
        // and the engine omits the triangle. 0.199 stays safely inside.
        key: 'costly',
        contentLayer: 'idl-3',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.5923, deltaX: 0.199, label: 'OC ≈ 3', tone: 'rose' }
        ],
        texts: []
      }
    ]
  };
})();
