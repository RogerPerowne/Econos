/* ============================================================
   Demand card 7 — repurposed for "why the demand curve slopes down"
   (icons key: demandSlopeCurve).

   The same canonical demand line as card 1, now with three plotted
   points A, B, C. The three reasons (substitution / real-income /
   diminishing marginal utility) are taught as tiles on the card, not
   as chart callouts — keeps the diagram clean and clash-free.

   Points on the slope −1 line:
     A (£10, 20) → (0.333, 0.833)
     B (£8,  30) → (0.500, 0.667)
     C (£6,  40) → (0.667, 0.500)
   ============================================================ */
(function () {
  'use strict';

  var A = { x: 0.333, y: 0.833 };
  var B = { x: 0.500, y: 0.667 };
  var C = { x: 0.667, y: 0.500 };

  window.ECONOS_DEMAND_CARD7_SPEC = {
    width: 700,
    height: 360,
    chartArea: { x: 92, y: 38, width: 510, height: 256 },
    className: 'demand-slope-svg',
    axes: {
      x: { label: 'Quantity demanded' },
      y: { label: 'Price (£)' }
    },

    curves: [
      { d: 'M 0.12,1.046 L 1.00,0.166',
        tone: 'blue', label: 'D', strokeWidth: 3, labelDx: 12, labelDy: 6 }
    ],

    arrows: [
      { x1: 0, y1: A.y, x2: A.x, y2: A.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: A.x, y1: A.y, x2: A.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: 0, y1: B.y, x2: B.x, y2: B.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: B.x, y1: B.y, x2: B.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: 0, y1: C.y, x2: C.x, y2: C.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: C.x, y1: C.y, x2: C.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 }
    ],

    points: [
      { x: A.x, y: A.y, tone: 'blue', radius: 6, label: 'A', labelDx: -15, labelDy: -8, anchor: 'end', bold: true },
      { x: B.x, y: B.y, tone: 'blue', radius: 6, label: 'B', labelDx: -15, labelDy: -8, anchor: 'end', bold: true },
      { x: C.x, y: C.y, tone: 'blue', radius: 6, label: 'C', labelDx: -15, labelDy: -8, anchor: 'end', bold: true }
    ],

    texts: [
      { x: -0.02, y: A.y, text: '10', tone: 'slate', fontSize: 13, anchor: 'end' },
      { x: -0.02, y: B.y, text: '8',  tone: 'slate', fontSize: 13, anchor: 'end' },
      { x: -0.02, y: C.y, text: '6',  tone: 'slate', fontSize: 13, anchor: 'end' },
      { x: A.x, y: -0.06, text: '20', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { x: B.x, y: -0.06, text: '30', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { x: C.x, y: -0.06, text: '40', tone: 'slate', fontSize: 13, anchor: 'middle' }
    ]
  };
})();
