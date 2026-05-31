/* ============================================================
   MEC Diagram — engine spec for mecDiagram.
   Investment topic — Marginal Efficiency of Capital.

   Classic downward-sloping MEC curve with a single equilibrium
   dot at the market interest rate r, showing the equilibrium
   capital stock Q*:
     • convex downward MEC curve
     • r₁ horizontal gridline + Q* vertical gridline
     • dot at (Q*, r₁) on the MEC curve

   Both schools agree on the MEC shape (downward-sloping in r);
   the disagreement is about WHAT determines r and how
   responsive investment is to changes in r — separate topic.
   ============================================================ */
(function () {
  'use strict';

  var EQ = { x: 0.450, y: 0.458 };  // (Q*, r₁) on the MEC curve

  window.ECONOS_MEC_DIAGRAM_SPEC = {
    width: 560,
    height: 380,
    chartArea: { x: 120, y: 40, width: 400, height: 280 },
    className: 'mec-diagram-svg',
    axes: {
      x: { label: 'Capital stock (Q)' },
      y: { label: 'Real return (r %)' }
    },

    curves: [
      // MEC: downward-sloping convex curve. Cubic Bezier control
      // points keep the curve steep near the top-left (high MEC at
      // low Q) and flatten as Q grows.
      { d: 'M 0.050,0.929 C 0.200,0.679 0.350,0.357 0.950,0.071',
        tone: 'blue', label: 'MEC', strokeWidth: 3.5,
        labelDx: 8, labelDy: 2, anchor: 'start' }
    ],

    points: [
      { x: EQ.x, y: EQ.y, tone: 'blue', radius: 6.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Q*', y: 'r₁' } }
    ]
  };
})();
