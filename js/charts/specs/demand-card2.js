/* ============================================================
   Demand card 2 — repurposed as a STATIC "movements along the demand
   curve" chart (icons key: demandMovements). The old version was a
   cramped three-state interactive; the topic now splits movements
   (this spec) and shifts (card 4) into two clean static charts.

   Same canonical demand line (slope −1). Reference point B; a price
   rise contracts quantity up to A, a price fall extends it down to C.
   The two arrows are offset 0.028 perpendicular (up-right) so they
   run parallel to the line instead of over it.
     A (£10, 20) → (0.333, 0.833)
     B (£8,  30) → (0.500, 0.667)
     C (£6,  40) → (0.667, 0.500)
   ============================================================ */
(function () {
  'use strict';

  var A = { x: 0.333, y: 0.833 };
  var B = { x: 0.500, y: 0.667 };
  var C = { x: 0.667, y: 0.500 };
  var o = 0.028; // perpendicular offset (up-right of a slope −1 line)

  window.ECONOS_DEMAND_CARD2_SPEC = {
    width: 700,
    height: 360,
    chartArea: { x: 92, y: 38, width: 510, height: 256 },
    className: 'demand-movements-svg',
    defs:
      '<marker id="dm-red-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#DC2626"/></marker>' +
      '<marker id="dm-green-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>',
    axes: {
      x: { label: 'Quantity demanded' },
      y: { label: 'Price (£)' }
    },

    curves: [
      { d: 'M 0.12,1.046 L 1.00,0.166',
        tone: 'blue', label: 'D', strokeWidth: 3, labelDx: 12, labelDy: 6 }
    ],

    arrows: [
      // leaders for the three points
      { x1: 0, y1: A.y, x2: A.x, y2: A.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: A.x, y1: A.y, x2: A.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: 0, y1: C.y, x2: C.x, y2: C.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: C.x, y1: C.y, x2: C.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      // contraction: B → A (price rises, quantity falls) — red, offset up-right
      { x1: B.x + o, y1: B.y + o, x2: A.x + o, y2: A.y + o,
        tone: 'red', strokeWidth: 2.6, markerEnd: 'dm-red-end', buffer: 0.02 },
      // extension: B → C (price falls, quantity rises) — green, offset up-right
      { x1: B.x + o, y1: B.y + o, x2: C.x + o, y2: C.y + o,
        tone: 'green', strokeWidth: 2.6, markerEnd: 'dm-green-end', buffer: 0.02 }
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
      { x: C.x, y: -0.06, text: '40', tone: 'slate', fontSize: 13, anchor: 'middle' },
      // arrow labels, sat in clear space up-right of each arrow
      { x: 0.30, y: 0.94, text: 'Contraction (price rises)', tone: 'red',   bold: true, fontSize: 12.5, anchor: 'start' },
      { x: 0.70, y: 0.56, text: 'Extension (price falls)',   tone: 'green', bold: true, fontSize: 12.5, anchor: 'start' }
    ]
  };
})();
