/* ============================================================
   Allocative Efficiency diagram — engine spec for
   allocativeEfficiencyDiagram. CPS topic card 5.

   Structural twin of cpsDiagram / welfareSurplusDiagram, but each
   curve gets DUAL labels (D = MB, S = MC) to underline that the
   demand curve is consumers' marginal benefit and the supply
   curve is producers' marginal cost. The italic caption beneath
   the Q-axis spells out the pedagogical point.

   Chart-space positions (chart area: x=80..490, y=40..320):
     D/MB     (0, 0.933) → (0.977, 0)
     S/MC     (0, 0) → (0.977, 0.933)
     E        (0.489, 0.467)
   ============================================================ */
(function () {
  'use strict';

  var E = { x: 0.489, y: 0.467 };

  window.ECONOS_ALLOCATIVE_EFFICIENCY_SPEC = {
    width: 540,
    height: 380,
    chartArea: { x: 80, y: 40, width: 410, height: 280 },
    className: 'allocative-eff-svg',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    polygons: [
      // CS triangle (blue) — above Pₑ, below MB curve
      { points: [[0, 0.933], [0, E.y], [E.x, E.y]],
        fill: '#3B82F6', opacity: 0.18 },
      // PS triangle (amber) — below Pₑ, above MC curve
      { points: [[0, 0], [0, E.y], [E.x, E.y]],
        fill: '#F59E0B', opacity: 0.18 }
    ],

    curves: [
      // D / MB (downward, blue)
      { d: 'M 0,0.933 L 0.977,0', tone: 'blue', label: 'D',
        strokeWidth: 2.8, labelDx: 8, labelDy: 4 },
      // S / MC (upward, amber)
      { d: 'M 0,0 L 0.977,0.933', tone: 'amber', label: 'S',
        strokeWidth: 2.8, labelDx: 8, labelDy: -4 }
    ],

    arrows: [
      // Equilibrium dashed gridlines
      { x1: 0, y1: E.y, x2: E.x, y2: E.y,
        tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 },
      { x1: E.x, y1: E.y, x2: E.x, y2: 0,
        tone: 'slate', strokeWidth: 1.4, dashed: '5 3', buffer: 0 }
    ],

    points: [
      { x: E.x, y: E.y, tone: 'slate', radius: 6, label: 'E',
        labelDx: 12, labelDy: -10, anchor: 'start' }
    ],

    texts: [
      // CS / PS labels inside the triangles
      { x: 0.135, y: 0.700, text: 'Consumer', tone: 'blue', bold: true, fontSize: 12, anchor: 'middle' },
      { x: 0.135, y: 0.650, text: 'surplus',  tone: 'blue', bold: true, fontSize: 12, anchor: 'middle' },
      { x: 0.135, y: 0.280, text: 'Producer', tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' },
      { x: 0.135, y: 0.230, text: 'surplus',  tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' },

      // Dual curve labels — second label on each curve at the AXIS-meeting end
      // MB sits above the chart on the D's upper end (y-axis intercept)
      { x: 0.060, y: 0.948, text: 'MB', tone: 'blue', bold: true, fontSize: 13, anchor: 'start' },
      // MC sits below the chart on the S's lower end (y-axis intercept)
      { x: 0.060, y: 0.030, text: 'MC', tone: 'amber', bold: true, fontSize: 13, anchor: 'start' },

      // Axis tick labels
      { x: -0.020, y: E.y, text: 'Pₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { x: E.x, y: -0.055, text: 'Qₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' },

      // Italic caption beneath the Qₑ label
      { x: E.x, y: -0.135, text: '(Allocatively efficient output)',
        tone: 'gray', italic: true, fontSize: 11, anchor: 'middle' }
    ]
  };
})();
