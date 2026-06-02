/* ============================================================
   Consumer & Producer Surplus diagram — declarative spec for
   cpsDiagram. Used by card 1 of the CPS topic.

   Static diagram (no step-state interactivity). Shows:
     - Downward D and upward S curves
     - Equilibrium E at (Q_e, P_e)
     - Blue CS triangle above P_e, below D
     - Amber PS triangle below P_e, above S

   Mirrors the welfareSurplusDiagram styling (taller aspect, thick
   curves, engine-traced welfareRegions at subtle opacity, clear E
   marker + Pₑ/Qₑ ticks) but keeps demand/supply labels rather than
   MB/MC, since this is the market-exchange intro card.

   CS and PS are auto-traced by the engine from the D / S curves and
   the price line at y = E.y — no hand-computed polygon corners.
   ============================================================ */
(function () {
  'use strict';

  var E = { x: 0.472, y: 0.500 };

  window.ECONOS_CPS_DIAGRAM_SPEC = {
    width: 480,
    height: 420,
    chartArea: { x: 60, y: 50, width: 360, height: 320 },
    className: 'cps-static-svg',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    welfareRegions: [
      { type: 'consumer-surplus', curve: 'D', price: E.y, tone: 'blue', opacity: 0.18 },
      { type: 'producer-surplus', curve: 'S', price: E.y, tone: 'amber', opacity: 0.18 }
    ],

    curves: [
      // Demand — downward (blue)
      { id: 'D', d: 'M 0,0.938 L 0.944,0.063',
        tone: 'blue', label: 'D', strokeWidth: 3, labelDx: 8, labelDy: 4 },
      // Supply — upward (amber/orange)
      { id: 'S', d: 'M 0,0.063 L 0.944,0.938',
        tone: 'amber', label: 'S', strokeWidth: 3, labelDx: 8, labelDy: -4 }
    ],

    arrows: [
      // Dashed equilibrium gridlines
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

      // Axis tick labels — italic subscript-style Pₑ, Qₑ
      { x: -0.020, y: E.y,    text: 'Pₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { x: E.x,    y: -0.055, text: 'Qₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' }
    ]
  };
})();
