/* ============================================================
   PPF card 4 — ppfBowedOutInteractive: three points on the curve,
   three economically distinct opportunity-cost stories.

   The point of the diagram is NOT just "OC rises along the curve".
   It's that the SAME +1 capital good costs a different amount of
   consumer goods depending on where you are, and the three values
   straddle 1.0 — so the three triangles correspond to three
   qualitatively different trades:

     View 1 — CHEAP  (green) capital ≈ 2 → 3, consumer 9.6 → 9.1
              OC ≈ 0.5 — you gain MORE than you give up.
     View 2 — EVEN   (blue)  capital ≈ 5 → 6, consumer 7.6 → 6.5
              OC ≈ 1.0 — a roughly 1-for-1 trade.
     View 3 — COSTLY (rose)  capital ≈ 8 → 9, consumer 3.8 → 2.2
              OC ≈ 1.5 — you give up MORE than you gain.

   Each triangle has Δx = 0.1 chart-units = 1 capital good. Both
   axes are calibrated 0..1 chart = 0..10 units, so chart-slope of
   the dashed chord equals real OC and can be read straight off the
   axis ticks. Tone progression green → blue → rose maps to the
   "ahead / even / behind" framing in the card prose, not to a
   generic "low/med/high" gradient.

   Progressive reveal: engine emits each triangle into <g class="idl-N">
   with display:none; js/app.js shows layers 0..N-1 for view N, so the
   three triangles accumulate as the learner clicks through.
   ============================================================ */
(function () {
  'use strict';

  // 1 capital good — keeps the off-axis read clean (integers everywhere).
  var DELTA_X = 0.1;

  window.ECONOS_PPF_CARD2_SPEC = {
    width: 440,
    height: 300,
    chartArea: { x: 55, y: 30, width: 340, height: 238 },
    axes: {
      x: { label: 'Capital goods' },
      y: { label: 'Consumer goods' }
    },
    curves: [
      // PPF spans the full 0..10 / 0..10 chart so axis-tick numerals
      // line up with the curve endpoints (10, 0) and (0, 10).
      { id: 'ppf', d: 'M 0,1 C 0.55,1 1.0,0.05 1.0,0', tone: 'blue', label: 'PPF', strokeWidth: 2.5 }
    ],

    // Numeric tick labels on both axes (chart 0..1 = 0..10 units). The
    // engine's renderAxes doesn't draw ticks itself, so we place the
    // numerals via the `texts` field — anchored just outside the chart
    // area on each side. Skip 0 (origin "O") and 10 (collides with the
    // axis-end labels / curve label).
    texts: [
      { x: 0.2, y: -0.04, text: '2',  tone: 'slate', fontSize: 11, anchor: 'middle' },
      { x: 0.4, y: -0.04, text: '4',  tone: 'slate', fontSize: 11, anchor: 'middle' },
      { x: 0.6, y: -0.04, text: '6',  tone: 'slate', fontSize: 11, anchor: 'middle' },
      { x: 0.8, y: -0.04, text: '8',  tone: 'slate', fontSize: 11, anchor: 'middle' },
      { x: -0.025, y: 0.2, text: '2', tone: 'slate', fontSize: 11, anchor: 'end' },
      { x: -0.025, y: 0.4, text: '4', tone: 'slate', fontSize: 11, anchor: 'end' },
      { x: -0.025, y: 0.6, text: '6', tone: 'slate', fontSize: 11, anchor: 'end' },
      { x: -0.025, y: 0.8, text: '8', tone: 'slate', fontSize: 11, anchor: 'end' }
    ],

    viewDefaultsHidden: true,
    views: [
      {
        // CHEAP — capital 2 → 3, sacrifice ≈ 0.5 consumer goods. Gain > sacrifice.
        key: 'cheap',
        contentLayer: 'idl-1',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.124, deltaX: DELTA_X, label: 'OC ≈ 0.5', tone: 'green' }
        ]
      },
      {
        // EVEN — capital 5 → 6, sacrifice ≈ 1.0 consumer goods. 1-for-1.
        key: 'even',
        contentLayer: 'idl-2',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.331, deltaX: DELTA_X, label: 'OC ≈ 1.0', tone: 'blue' }
        ]
      },
      {
        // COSTLY — capital 8 → 9, sacrifice ≈ 1.5 consumer goods. Sacrifice > gain.
        key: 'costly',
        contentLayer: 'idl-3',
        ocTriangles: [
          { curve: 'ppf', fromT: 0.593, deltaX: DELTA_X, label: 'OC ≈ 1.5', tone: 'rose' }
        ]
      }
    ]
  };
})();
