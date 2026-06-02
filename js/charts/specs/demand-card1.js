/* ============================================================
   Demand card 1 — declarative spec for the "big picture" demand
   curve (icons key: demandBigPicture).

   A clean downward-sloping demand line with two labelled points and
   two plain-English annotations. Straight line (house style); the
   points sit exactly on it.

   Canonical demand line used across the Demand topic (slope −1 in
   chart space): passes through
     A (£10, 20) → (0.333, 0.833)
     B (£8,  30) → (0.500, 0.667)
     C (£6,  40) → (0.667, 0.500)
   Line endpoints (extended past the plotted points, auto-clip):
     (0.12, 1.046) → (1.00, 0.166).
   Card 1 plots A and C (labelled A and B) to keep it uncluttered.
   ============================================================ */
(function () {
  'use strict';

  var A = { x: 0.333, y: 0.833 }; // £10, q20
  var B = { x: 0.667, y: 0.500 }; // £6,  q40

  window.ECONOS_DEMAND_CARD1_SPEC = {
    width: 700,
    height: 380,
    chartArea: { x: 92, y: 40, width: 500, height: 270 },
    className: 'demand-big-picture-svg',
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
      { x1: B.x, y1: B.y, x2: B.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 }
    ],

    points: [
      { x: A.x, y: A.y, tone: 'blue', radius: 6, label: 'A', labelDx: -15, labelDy: -8, anchor: 'end', bold: true },
      { x: B.x, y: B.y, tone: 'blue', radius: 6, label: 'B', labelDx: -15, labelDy: -8, anchor: 'end', bold: true }
    ],

    texts: [
      { x: -0.02, y: A.y, text: '10', tone: 'slate', fontSize: 13, anchor: 'end' },
      { x: -0.02, y: B.y, text: '6',  tone: 'slate', fontSize: 13, anchor: 'end' },
      { x: A.x, y: -0.06, text: '20', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { x: B.x, y: -0.06, text: '40', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { x: 0.52, y: 0.94,  text: 'At a higher price,',            tone: 'blue', fontSize: 12.5, anchor: 'start' },
      { x: 0.52, y: 0.885, text: 'quantity demanded is lower.',   tone: 'blue', fontSize: 12.5, anchor: 'start' },
      { x: 0.73, y: 0.40,  text: 'At a lower price,',             tone: 'blue', fontSize: 12.5, anchor: 'start' },
      { x: 0.73, y: 0.345, text: 'quantity demanded is higher.',  tone: 'blue', fontSize: 12.5, anchor: 'start' }
    ]
  };
})();
