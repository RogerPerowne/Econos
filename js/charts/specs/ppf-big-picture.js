/* ============================================================
   PPF – "the big picture" (1.1.4 card 1).
   Redesigned (v0.41.12) to tell a DIFFERENT story than card 2.
   Card 1 defines what a PPF IS – the boundary of feasible
   production. Card 2 classifies points by region.

   This chart shades the entire region UNDER the curve as
   "feasible" (everything achievable with current resources)
   and the region ABOVE as "infeasible". A single point sits ON
   the curve to anchor the idea of "maximum achievable mix".
   No A/B/C classification here – that's card 2's job.

   Mockup axis convention: Capital goods ↑, Consumer goods →.
   ============================================================ */
(function () {
  'use strict';

  // 12 samples along the cubic Bezier `M 0,0.92 C 0.42,0.92 0.92,0.42 0.92,0.04`,
  // precomputed in /tmp/sample-ppf.mjs. Used to trace the curved boundary
  // of the feasible-region polygon (polygons are straight-segment, so
  // sampling the cubic is the only way to get a smooth boundary).
  var CURVE_SAMPLES = [
    [0.000, 0.920], [0.106, 0.910], [0.214, 0.881], [0.321, 0.836],
    [0.425, 0.776], [0.525, 0.704], [0.618, 0.623], [0.702, 0.533],
    [0.775, 0.437], [0.835, 0.338], [0.881, 0.237], [0.910, 0.137],
    [0.920, 0.040]
  ];

  // Feasible region: curve samples → corner (0.92, 0) → corner (0, 0) → back to start.
  var FEASIBLE = CURVE_SAMPLES.concat([[0.92, 0], [0, 0]]);

  window.ECONOS_PPF_BIGPIC_SPEC = {
    width: 440,
    height: 360,
    chartArea: { x: 58, y: 46, width: 330, height: 264 },
    className: 'ppf-svg',
    axes: {
      x: { label: 'Consumer goods' },
      y: { label: 'Capital goods' }
    },
    polygons: [
      // Shaded feasible region – everything the economy CAN produce.
      // Light blue tint so the curve still reads on top.
      { points: FEASIBLE, tone: 'blue', opacity: 0.35 }
    ],
    curves: [
      { id: 'ppf1', d: 'M 0,0.92 C 0.42,0.92 0.92,0.42 0.92,0.04', tone: 'blue', strokeWidth: 3,
        label: 'PPF', labelDx: -10, labelDy: -10, anchor: 'end' }
    ],
    points: [
      // A single anchor point on the frontier – drives home that "the
      // PPF is the maximum achievable mix". No A/B/C classification
      // (card 2's job).
      { x: 0.46, on: 'ppf1', tone: 'blue', label: 'On the frontier', anchor: 'start', labelDx: 12, labelDy: -6 }
    ],
    texts: [
      // Two region labels – single line each so they don't clash with
      // each other or with the point label. "Feasible" sits deep inside
      // the shaded region; "Beyond resources" floats in the un-shaded
      // upper-right where it can't be confused with the curve label.
      { x: 0.22, y: 0.25, text: 'Feasible production',     tone: 'slate', fontSize: 13, anchor: 'middle', bold: true },
      { x: 0.78, y: 0.92, text: 'Beyond current resources', tone: 'slate', fontSize: 12, anchor: 'middle' }
    ]
  };
})();
