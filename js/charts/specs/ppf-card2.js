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
    // Stage enlarged from 440×300 → 460×350 so the axis labels
    // ("Consumer goods" above the y-arrow, "Capital goods" below the
    // x-arrow) and the curve-end "PPF" label have breathing room
    // around the corners where they previously crowded the chart.
    width: 460,
    height: 350,
    chartArea: { x: 60, y: 40, width: 360, height: 270 },
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
        // Badge nudged down-right into the consumable region so it doesn't
        // sit on the curve or fall outside the chart.
        key: 'cheap',
        contentLayer: 'idl-1',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.1240, deltaX: DELTA_X, label: 'OC ≈ 1/3', tone: 'green',
            labelDx: 0.10, labelDy: -0.20 }
        ],
        texts: [
          xTick(0.2, '2'),
          xTick(0.4, '4')
        ]
      },
      {
        // EVEN — capital 6 → 8, OC = 1 exactly. Chord at 45°.
        // Badge sits below-left of the start, well below the curve at x≈0.65.
        key: 'even',
        contentLayer: 'idl-2',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.4076, deltaX: DELTA_X, label: 'OC = 1', tone: 'blue',
            labelDx: -0.10, labelDy: -0.25 }
        ],
        texts: [
          xTick(0.6, '6'),
          xTick(0.8, '8')
        ]
      },
      {
        // COSTLY — capital 8 → ~10, OC ≈ 3.
        // Δx is 0.199 (not 0.2) because findTAtX's bounds check rejects
        // exact-endpoint targets — start[0] computes to 0.80000194 due
        // to binary-search precision. Badge nudged left into the triangle
        // interior so it doesn't sit on the curve.
        key: 'costly',
        contentLayer: 'idl-3',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.5923, deltaX: 0.199, label: 'OC ≈ 3', tone: 'rose',
            labelDx: -0.20, labelDy: -0.25 }
        ],
        texts: []
      }
    ]
  };
})();
