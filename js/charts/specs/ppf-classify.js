/* ============================================================
   PPF — "classify the point" (1.1.4 card 2).
   Redesigned (v0.41.12) to tell a DIFFERENT story than card 1.
   Card 1 defines the frontier (one point, feasible vs infeasible).
   Card 2 classifies the THREE REGIONS using shaded tints and
   three example points (A on the curve, B inside, C outside).

   The shading carries the lesson: amber under = underused,
   green above = unattainable, the blue line itself = efficient.
   The points then act as classification examples sitting in
   each region.

   Mockup axis convention: Capital goods ↑, Consumer goods →.
   ============================================================ */
(function () {
  'use strict';

  // Same 12 samples as ppf-big-picture.js, traced along the cubic
  // `M 0,0.92 C 0.42,0.92 0.92,0.42 0.92,0.04`. Used to build the two
  // region polygons with curved boundaries.
  var CURVE_SAMPLES = [
    [0.000, 0.920], [0.106, 0.910], [0.214, 0.881], [0.321, 0.836],
    [0.425, 0.776], [0.525, 0.704], [0.618, 0.623], [0.702, 0.533],
    [0.775, 0.437], [0.835, 0.338], [0.881, 0.237], [0.910, 0.137],
    [0.920, 0.040]
  ];

  // Underused region: under the curve, bounded by curve + axes.
  var UNDERUSED = CURVE_SAMPLES.concat([[0.92, 0], [0, 0]]);

  // Unattainable region: above the curve, bounded by curve + chart
  // top/right edges. Curve reversed (right→left) so the polygon
  // winds consistently.
  var UNATTAINABLE = CURVE_SAMPLES.slice().reverse().concat([[0, 1], [0, 0.92]]);
  // Append the top edge separately so the polygon closes via (1,1):
  // walk: rev curve (0.92,0.04)→(0,0.92), then (0,1), (1,1), (1,0.04), back to (0.92,0.04)
  UNATTAINABLE = CURVE_SAMPLES.slice().reverse()    // (0.92,0.04) → (0,0.92)
    .concat([[0, 1], [1, 1], [1, 0.04]]);            // up, across, down

  window.ECONOS_PPF_CLASSIFY_SPEC = {
    width: 440,
    height: 360,
    chartArea: { x: 58, y: 46, width: 330, height: 264 },
    className: 'ppf-svg',
    axes: {
      x: { label: 'Consumer goods' },
      y: { label: 'Capital goods' }
    },
    polygons: [
      // Underused region — amber wash under the curve.
      { points: UNDERUSED, tone: 'amber', opacity: 0.14 },
      // Unattainable region — green wash above the curve.
      { points: UNATTAINABLE, tone: 'green', opacity: 0.14 }
    ],
    curves: [
      // The frontier itself — blue, just labelled "PPF". The
      // "efficient" classification is carried by the curve's
      // position between the amber and green region shadings, not
      // by a long curve label (which put its centre 76px from
      // the line).
      { id: 'ppf1', d: 'M 0,0.92 C 0.42,0.92 0.92,0.42 0.92,0.04', tone: 'blue', strokeWidth: 3,
        label: 'PPF', labelDx: -10, labelDy: -10, anchor: 'end' }
    ],
    points: [
      // A — on the frontier (snapped via on:'ppf1')
      { x: 0.46, on: 'ppf1', tone: 'blue', label: 'A', anchor: 'start', labelDx: 11, labelDy: -4 },
      // B — inside (underused region)
      { x: 0.24, y: 0.28, tone: 'amber', label: 'B', anchor: 'start', labelDx: 11, labelDy: -4 },
      // C — outside (unattainable region)
      { x: 0.76, y: 0.68, tone: 'green', label: 'C', anchor: 'start', labelDx: 11, labelDy: -4 }
    ],
    texts: [
      // Region labels — single line each, anchored inside each shaded
      // zone, away from the A/B/C dots so they read as region tags
      // (not point descriptions).
      { x: 0.18, y: 0.15, text: 'Underused (inside)',     tone: 'amber', fontSize: 12, anchor: 'middle', bold: true },
      { x: 0.78, y: 0.92, text: 'Unattainable (outside)', tone: 'green', fontSize: 12, anchor: 'middle', bold: true }
    ]
  };
})();
