/* ============================================================
   Lorenz Curve – engine spec for lorenzCurve.
   Inequality 4.2.2 card 3 "The Lorenz curve".

   A single Lorenz diagram: the 45° line of equality (dashed) and a
   bowed Lorenz curve below it. Cumulative % of population (x) against
   cumulative % of income (y). The further the curve sits below the
   diagonal, the greater the inequality.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_LORENZ_CURVE_SPEC = {
    width: 560,
    height: 360,
    chartArea: { x: 96, y: 28, width: 432, height: 286 },
    className: 'lorenz-curve-svg',
    layers: ['idl-1', 'idl-2', 'idl-3'],
    axes: {
      x: { label: 'Cumulative % of population' },
      y: { label: 'Cumulative % of income' }
    },
    curves: [
      { d: 'M 0,0 L 1,1', tone: 'slate', strokeWidth: 2, dashed: '5 4', layer: 'idl-1' },
      { d: 'M 0,0 C 0.45,0.05 0.80,0.22 1,1', tone: 'purple', strokeWidth: 3, layer: 'idl-2' }
    ],
    points: [
      { x: 0, y: 0, tone: 'slate', radius: 4, layer: 'idl-1' },
      { x: 1, y: 1, tone: 'slate', radius: 4, layer: 'idl-1' }
    ],
    texts: [
      { x: 0.30, y: 0.60, text: 'Line of equality (45°)', tone: 'slate', bold: true, fontSize: 12, anchor: 'middle', layer: 'idl-1' },
      { x: 0.80, y: 0.30, text: 'Lorenz curve', tone: 'purple', bold: true, fontSize: 12, anchor: 'middle', layer: 'idl-2' },
      { x: 0.40, y: 0.78, text: 'Closer to the line', tone: 'green', fontSize: 11, anchor: 'middle', layer: 'idl-3' },
      { x: 0.40, y: 0.71, text: '= more equal', tone: 'green', bold: true, fontSize: 11, anchor: 'middle', layer: 'idl-3' }
    ]
  };
})();
