/* ============================================================
   Consumer & Producer Surplus diagram — declarative spec for
   cpsDiagram. Used by cards 1 and 2 of the CPS topic.

   Static diagram (no step-state interactivity). Shows:
     - Downward D and upward S curves
     - Equilibrium E at (Q_e, P_e)
     - Blue CS triangle above P_e, below D
     - Amber PS triangle below P_e, above S

   Per the migration plan the legacy right-side legend (Consumer
   surplus / Producer surplus / Equilibrium / P_e / Q_e meaning)
   drops — the card data already carries this content in `causes`
   and `keyTerms` blocks above/below the diagram.

   Chart-space positions (chart area: x=70..510, y=30..280):
     D line     (0.000, 0.960) → (0.914, 0.040)
     S line     (0.000, 0.040) → (0.914, 0.960)
     E          (0.457, 0.500)
     CS verts   (0,0.960) (0,0.500) (0.457,0.500)
     PS verts   (0,0.500) (0,0.040) (0.457,0.500)
   ============================================================ */
(function () {
  'use strict';

  var E = { x: 0.457, y: 0.500 };

  window.ECONOS_CPS_DIAGRAM_SPEC = {
    width: 600,
    height: 320,
    chartArea: { x: 70, y: 30, width: 440, height: 240 },
    className: 'cps-static-svg',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    polygons: [
      // CS triangle (blue) — above P_e, below D
      { points: [[0, 0.960], [0, 0.500], [E.x, E.y]],
        fill: '#DBEAFE', opacity: 0.85 },
      // PS triangle (amber) — below P_e, above S
      { points: [[0, 0.500], [0, 0.040], [E.x, E.y]],
        fill: '#FEF3C7', opacity: 0.85 }
    ],

    curves: [
      // Demand — downward
      { d: 'M 0,0.960 L 0.914,0.040',
        tone: 'blue', label: 'D', strokeWidth: 2.8, labelDx: 8, labelDy: 4 },
      // Supply — upward (orange via 'amber' tone)
      { d: 'M 0,0.040 L 0.914,0.960',
        tone: 'amber', label: 'S', strokeWidth: 2.8, labelDx: 8, labelDy: -4 }
    ],

    arrows: [
      // Dashed equilibrium gridlines
      { x1: 0, y1: E.y, x2: E.x, y2: E.y,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 3', buffer: 0 },
      { x1: E.x, y1: E.y, x2: E.x, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 3', buffer: 0 }
    ],

    points: [
      // Solid dark equilibrium dot
      { x: E.x, y: E.y, tone: 'slate', radius: 6, label: 'E',
        labelDx: 12, labelDy: -8, anchor: 'start' }
    ],

    texts: [
      // CS label inside the blue triangle
      { x: 0.13, y: 0.745, text: 'Consumer surplus',
        tone: 'blue', bold: true, fontSize: 13, anchor: 'middle' },
      // PS label inside the amber triangle
      { x: 0.13, y: 0.260, text: 'Producer surplus',
        tone: 'amber', bold: true, fontSize: 13, anchor: 'middle' },

      // Axis tick labels — italic subscript-style Pₑ, Qₑ
      { x: -0.020, y: E.y,  text: 'Pₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { x: E.x,    y: -0.055, text: 'Qₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' }
    ]
  };
})();
