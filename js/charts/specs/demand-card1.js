/* ============================================================
   Demand card 1 – INTERACTIVE "big picture" demand curve (icons key:
   demandBigPicture; className dbig-svg). Part of the demand chart
   family rendered via the interactiveDiagram block (chart left,
   description right, step buttons below).

   Persistent: the downward demand line D (not in a declared layer, so
   it shows in every state). Declared layers reveal one point at a time:
     layer-a → point A (£10, 20)  "a higher price → less demanded"
     layer-b → point B (£6,  40)  "a lower price → more demanded"

   Canonical line (slope −1): A(0.333,0.833) · B(0.667,0.500).
   ============================================================ */
(function () {
  'use strict';

  var A = { x: 0.333, y: 0.833 };
  var B = { x: 0.667, y: 0.500 };

  window.ECONOS_DEMAND_CARD1_SPEC = {
    width: 700,
    height: 480,
    chartArea: { x: 84, y: 40, width: 534, height: 372 },
    className: 'dbig-svg',
    layers: ['layer-a', 'layer-b'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Quantity demanded' },
      y: { label: 'Price (£)' }
    },

    curves: [
      { d: 'M 0.12,1.046 L 1.00,0.166', tone: 'blue', strokeWidth: 3 }
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
      { x: 0.93, y: 0.30, text: 'D', tone: 'blue', bold: true, fontSize: 15, anchor: 'middle' },
      { layer: 'layer-a', x: -0.02, y: A.y, text: '10', tone: 'slate', fontSize: 13, anchor: 'end' },
      { layer: 'layer-a', x: A.x, y: -0.06, text: '20', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { layer: 'layer-a', x: A.x - 0.02, y: A.y - 0.055, text: 'A', tone: 'blue', bold: true, fontSize: 15, anchor: 'end' },
      { layer: 'layer-b', x: -0.02, y: B.y, text: '6', tone: 'slate', fontSize: 13, anchor: 'end' },
      { layer: 'layer-b', x: B.x, y: -0.06, text: '40', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { layer: 'layer-b', x: B.x - 0.02, y: B.y - 0.055, text: 'B', tone: 'blue', bold: true, fontSize: 15, anchor: 'end' }
    ]
  };
})();
