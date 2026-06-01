/* ============================================================
   Ceteris paribus worked example — movement along a demand curve.
   Used by topic 1.1.1 (Economics as a Social Science), card 2
   "Ceteris paribus": holding income/tastes/related prices/population
   constant, a price rise (P1 → P2) causes quantity demanded to fall
   (Q1 → Q2) — a movement UP the demand curve.

   Chart space (x = quantity, y = price):
     D line   (0.120, 0.860) → (0.880, 0.150)
     Point B  (Q1, P1) = (0.620, 0.360)  — original, lower-right
     Point A  (Q2, P2) = (0.300, 0.660)  — after price rise, upper-left
   ============================================================ */
(function () {
  'use strict';

  var A = { x: 0.300, y: 0.660 };  // Q2, P2
  var B = { x: 0.620, y: 0.360 };  // Q1, P1

  window.ECONOS_CETERIS_DEMAND_SPEC = {
    width: 440,
    height: 320,
    chartArea: { x: 58, y: 46, width: 330, height: 220 },
    className: 'ceteris-demand-svg',
    axes: {
      x: { label: 'Quantity demanded' },
      y: { label: 'Price (£)' }
    },

    curves: [
      { d: 'M 0.120,0.860 L 0.880,0.150',
        tone: 'blue', label: 'D', strokeWidth: 3, labelDx: 8, labelDy: 6 }
    ],

    points: [
      { x: B.x, y: B.y, tone: 'slate', radius: 5.5, gridlines: 'gray' },
      { x: A.x, y: A.y, tone: 'slate', radius: 5.5, gridlines: 'gray' }
    ],

    arrows: [
      /* price rises: red up-arrow just inside the y-axis */
      { x1: 0.045, y1: B.y + 0.02, x2: 0.045, y2: A.y - 0.02,
        tone: 'red', strokeWidth: 2, markerEnd: 'econos-arrow-red' },
      /* quantity falls: red left-arrow just above the x-axis */
      { x1: B.x - 0.02, y1: 0.045, x2: A.x + 0.02, y2: 0.045,
        tone: 'red', strokeWidth: 2, markerEnd: 'econos-arrow-red' }
    ],

    texts: [
      { x: -0.020, y: B.y, text: 'P₁', tone: 'slate', bold: true, fontSize: 13, anchor: 'end' },
      { x: -0.020, y: A.y, text: 'P₂', tone: 'slate', bold: true, fontSize: 13, anchor: 'end' },
      { x: B.x, y: -0.075, text: 'Q₁', tone: 'slate', bold: true, fontSize: 13, anchor: 'middle' },
      { x: A.x, y: -0.075, text: 'Q₂', tone: 'slate', bold: true, fontSize: 13, anchor: 'middle' }
    ]
  };
})();
