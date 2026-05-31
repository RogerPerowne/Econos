/* ============================================================
   Welfare Surplus diagram — engine spec for welfareSurplusDiagram.
   Used by price-determination card 5 (Allocative Efficiency).

   Same structural pattern as cpsDiagram but with MB (marginal
   benefit) and MC (marginal cost) curves instead of D and S, since
   the topic is about welfare/allocative efficiency rather than
   market exchange.

   Chart-space positions:
     MB line    (0, 0.938) → (0.944, 0.063)
     MC line    (0, 0.063) → (0.944, 0.938)
     E          (0.472, 0.500)
     CS verts   (0,0.938) (0,0.500) (E.x, E.y)
     PS verts   (0,0.500) (0,0.063) (E.x, E.y)
   ============================================================ */
(function () {
  'use strict';

  var E = { x: 0.472, y: 0.500 };

  window.ECONOS_WELFARE_SURPLUS_SPEC = {
    width: 480,
    height: 420,
    chartArea: { x: 60, y: 50, width: 360, height: 320 },
    className: 'welfare-surplus-svg',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    polygons: [
      // Consumer surplus (blue) — above Pₑ, below MB
      { points: [[0, 0.938], [0, 0.500], [E.x, E.y]],
        fill: '#3B82F6', opacity: 0.18 },
      // Producer surplus (amber) — below Pₑ, above MC
      { points: [[0, 0.500], [0, 0.063], [E.x, E.y]],
        fill: '#F59E0B', opacity: 0.18 }
    ],

    curves: [
      // Marginal benefit (demand-like, downward, blue)
      { d: 'M 0,0.938 L 0.944,0.063',
        tone: 'blue', label: 'MB', strokeWidth: 3, labelDx: 8, labelDy: 4 },
      // Marginal cost (supply-like, upward, amber)
      { d: 'M 0,0.063 L 0.944,0.938',
        tone: 'amber', label: 'MC', strokeWidth: 3, labelDx: 8, labelDy: -4 }
    ],

    arrows: [
      { x1: 0, y1: E.y, x2: E.x, y2: E.y,
        tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 },
      { x1: E.x, y1: E.y, x2: E.x, y2: 0,
        tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 }
    ],

    points: [
      { x: E.x, y: E.y, tone: 'slate', radius: 6, label: 'E',
        labelDx: 12, labelDy: -10, anchor: 'start' }
    ],

    texts: [
      // CS / PS labels inside the triangles
      { x: 0.150, y: 0.730, text: 'Consumer', tone: 'blue', bold: true, fontSize: 12, anchor: 'middle' },
      { x: 0.150, y: 0.685, text: 'surplus',  tone: 'blue', bold: true, fontSize: 12, anchor: 'middle' },
      { x: 0.150, y: 0.350, text: 'Producer', tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' },
      { x: 0.150, y: 0.305, text: 'surplus',  tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' },

      // Axis tick labels
      { x: -0.020, y: E.y,    text: 'Pₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { x: E.x,    y: -0.055, text: 'Qₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' }
    ]
  };
})();
