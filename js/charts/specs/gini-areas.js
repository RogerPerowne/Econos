/* ============================================================
   Gini Areas – engine spec for giniAreas.
   Inequality 4.2.2 card 5 "The Gini coefficient".

   The Lorenz diagram with the two areas the Gini coefficient is built
   from: area A between the 45° line of equality and the Lorenz curve,
   and area B beneath the Lorenz curve. Gini = A / (A + B).

   Polygon vertices trace the same Lorenz cubic sampled at five points
   (t = 0, .25, .5, .75, 1):
     (0,0) (0.318,0.068) (0.594,0.226) (0.823,0.522) (1,1)
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_GINI_AREAS_SPEC = {
    width: 540,
    height: 360,
    chartArea: { x: 64, y: 28, width: 440, height: 286 },
    className: 'gini-areas-svg',
    axes: {
      x: { label: 'Cumulative share of population' },
      y: { label: 'Cumulative share of income' }
    },
    polygons: [
      /* Area A — the lens between the equality line and the Lorenz curve */
      { points: [[0, 0], [0.25, 0.25], [0.5, 0.5], [0.75, 0.75], [1, 1], [0.823, 0.522], [0.594, 0.226], [0.318, 0.068]], tone: 'blue', opacity: 0.22 },
      /* Area B — beneath the Lorenz curve down to the x-axis */
      { points: [[0, 0], [0.318, 0.068], [0.594, 0.226], [0.823, 0.522], [1, 1], [1, 0]], tone: 'green', opacity: 0.16 }
    ],
    curves: [
      { d: 'M 0,0 L 1,1', tone: 'slate', strokeWidth: 2, dashed: '5 4' },
      { d: 'M 0,0 C 0.45,0.05 0.80,0.22 1,1', tone: 'purple', strokeWidth: 3 }
    ],
    texts: [
      { x: 0.30, y: 0.58, text: 'Line of', tone: 'slate', bold: true, fontSize: 11, anchor: 'middle' },
      { x: 0.30, y: 0.51, text: 'equality (45°)', tone: 'slate', bold: true, fontSize: 11, anchor: 'middle' },
      { x: 0.46, y: 0.40, text: 'A', tone: 'blue', bold: true, fontSize: 20, anchor: 'middle' },
      { x: 0.66, y: 0.12, text: 'B', tone: 'green', bold: true, fontSize: 20, anchor: 'middle' },
      { x: 0.86, y: 0.40, text: 'Lorenz curve', tone: 'purple', bold: true, fontSize: 11, anchor: 'middle' }
    ]
  };
})();
