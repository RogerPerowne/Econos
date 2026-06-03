/* ============================================================
   PPF card 4 — ppfBowedOutInteractive: three trades along a more
   moderately bowed PPF, designed so the chord slopes (OC values)
   read as 1/3, 1, 5/3 — straddling the 1-for-1 anchor.

   Curve `M 0,1 C 0.7,0.9 0.9,0.3 1,0` was picked over the previous
   extreme-bow curve because the old shape made the early triangles
   visually flat (curve stayed at y≈1 for the first third of the
   x-axis) — the lesson "early OC is small" became "early OC is
   invisible". A moderate bow keeps every triangle legibly sized.

   Trade Δx is 2 capital goods (was 1) so each triangle is large
   enough that the chord slope is the dominant visual:

     View 1 — CHEAP    (green) capital 1 → 3, consumer ≈ 9.8 → 9.2
              OC ≈ 1/3 — you gain ~3× what you give up.
     View 2 — EVEN     (blue)  capital 5 → 7, consumer ≈ 8.0 → 6.1
              OC ≈ 1   — the 1-for-1 trade, chord at ~45°.
     View 3 — COSTLY   (rose)  capital 7 → 9, consumer ≈ 6.1 → 2.7
              OC ≈ 5/3 — you give up ~1.7× what you gain.

   X-axis tick numerals are emitted ONLY at the capital values that
   currently matter (1, 3, 5, 7, 9) and they appear progressively as
   the learner reveals each view — the axis itself tells the story.
   Y-axis ticks are dropped: the badge carries the OC value and the
   chord slope carries the visual.

   Progressive reveal: engine emits each triangle into <g class="idl-N">
   with display:none; js/app.js shows layers 0..N-1 for view N, so
   the three trades accumulate.
   ============================================================ */
(function () {
  'use strict';

  // 2 capital goods per trade — large enough that the chord slope reads.
  var DELTA_X = 0.2;

  // Tick-numeral template — reused for the x-axis tick texts per view.
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
      // Moderately bowed PPF — uniformly curved rather than flat-then-steep
      // so every triangle along the curve has visible height.
      { id: 'ppf', d: 'M 0,1 C 0.7,0.9 0.9,0.3 1,0', tone: 'blue', label: 'PPF', strokeWidth: 2.5 }
    ],

    viewDefaultsHidden: true,
    views: [
      {
        // CHEAP — capital 1 → 3, OC ≈ 1/3. Gain 3× what you sacrifice.
        // fromT ≈ 0.0588 hits x = 0.1; engine solves the end-corner via Δx.
        key: 'cheap',
        contentLayer: 'idl-1',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.0493, deltaX: DELTA_X, label: 'OC ≈ 1/3', tone: 'green' }
        ],
        texts: [
          xTick(0.1, '1'),
          xTick(0.3, '3')
        ]
      },
      {
        // EVEN — capital 5 → 7, OC ≈ 1.0. The 1-for-1 trade.
        // fromT ≈ 0.302 hits x = 0.5.
        key: 'even',
        contentLayer: 'idl-2',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.2956, deltaX: DELTA_X, label: 'OC ≈ 1', tone: 'blue' }
        ],
        texts: [
          xTick(0.5, '5'),
          xTick(0.7, '7')
        ]
      },
      {
        // COSTLY — capital 7 → 9, OC ≈ 5/3. Sacrifice 1.7× what you gain.
        // fromT ≈ 0.479 hits x = 0.7.
        key: 'costly',
        contentLayer: 'idl-3',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.4730, deltaX: DELTA_X, label: 'OC ≈ 5/3', tone: 'rose' }
        ],
        texts: [
          xTick(0.9, '9')
        ]
      }
    ]
  };
})();
