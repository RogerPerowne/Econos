/* ============================================================
   Supply card 1 – INTERACTIVE "big picture" supply curve (icons key:
   supplyBigPicture; className sbig-svg). Mirror of demand-card1 with an
   UPWARD-sloping curve. Rendered via the interactiveDiagram block.

   Persistent: the upward supply line S. Layers reveal one point:
     layer-a → A (£6, 20)  "a lower price → less supplied"
     layer-b → B (£10, 40) "a higher price → more supplied"

   Canonical supply line (slope +1): y = x + 0.166, through
     A(0.333,0.500) · B-mid(0.500,0.667) · C(0.667,0.833).
   Endpoints: (0.12,0.286) → (0.88,1.046).
   ============================================================ */
(function () {
  'use strict';

  var A = { x: 0.333, y: 0.500 }; // £6,  q20
  var B = { x: 0.667, y: 0.833 }; // £10, q40

  window.ECONOS_SUPPLY_CARD1_SPEC = {
    width: 700,
    height: 480,
    chartArea: { x: 84, y: 40, width: 534, height: 372 },
    className: 'sbig-svg',
    layers: ['layer-a', 'layer-b'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Quantity supplied' },
      y: { label: 'Price (£)' }
    },

    curves: [
      { d: 'M 0.12,0.286 L 0.88,1.046', tone: 'blue', strokeWidth: 3 }
    ],

    points: [
      { layer: 'layer-a', x: A.x, y: A.y, tone: 'blue', radius: 6 },
      { layer: 'layer-b', x: B.x, y: B.y, tone: 'blue', radius: 6 }
    ],

    arrows: [
      { layer: 'layer-a', x1: 0, y1: A.y, x2: A.x, y2: A.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { layer: 'layer-a', x1: A.x, y1: A.y, x2: A.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { layer: 'layer-b', x1: 0, y1: B.y, x2: B.x, y2: B.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { layer: 'layer-b', x1: B.x, y1: B.y, x2: B.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 }
    ],

    texts: [
      { x: 0.76, y: 1.00, text: 'S', tone: 'blue', bold: true, fontSize: 15, anchor: 'start' },
      { layer: 'layer-a', x: -0.02, y: A.y, text: '6', tone: 'slate', fontSize: 13, anchor: 'end' },
      { layer: 'layer-a', x: A.x, y: -0.06, text: '20', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { layer: 'layer-a', x: A.x - 0.04, y: A.y + 0.03, text: 'A', tone: 'blue', bold: true, fontSize: 15, anchor: 'end' },
      { layer: 'layer-b', x: -0.02, y: B.y, text: '10', tone: 'slate', fontSize: 13, anchor: 'end' },
      { layer: 'layer-b', x: B.x, y: -0.06, text: '40', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { layer: 'layer-b', x: B.x - 0.04, y: B.y + 0.03, text: 'B', tone: 'blue', bold: true, fontSize: 15, anchor: 'end' }
    ]
  };
})();
