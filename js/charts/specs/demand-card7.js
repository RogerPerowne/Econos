/* ============================================================
   Demand card 2 – INTERACTIVE "why the demand curve slopes down"
   (icons key: demandSlopeCurve; className dslope-svg). Rendered via the
   interactiveDiagram block.

   The price steps DOWN the curve (A → B → C) so quantity demanded rises;
   each step pairs with one reason for the downward slope. Persistent
   demand line D; one point revealed per state.
     layer-a → A (£10, 20)  · substitution effect
     layer-b → B (£8,  30)  · real-income effect
     layer-c → C (£6,  40)  · diminishing marginal utility
   ============================================================ */
(function () {
  'use strict';

  var A = { x: 0.333, y: 0.833 };
  var B = { x: 0.500, y: 0.667 };
  var C = { x: 0.667, y: 0.500 };

  window.ECONOS_DEMAND_CARD7_SPEC = {
    width: 700,
    height: 480,
    chartArea: { x: 84, y: 40, width: 534, height: 372 },
    className: 'dslope-svg',
    layers: ['layer-a', 'layer-b', 'layer-c'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Quantity demanded' },
      y: { label: 'Price (£)' }
    },

    curves: [
      { d: 'M 0.12,1.046 L 1.00,0.166', tone: 'blue', strokeWidth: 3 }
    ],

    points: [
      { layer: 'layer-a', x: A.x, y: A.y, tone: 'green',  radius: 6 },
      { layer: 'layer-b', x: B.x, y: B.y, tone: 'amber',  radius: 6 },
      { layer: 'layer-c', x: C.x, y: C.y, tone: 'purple', radius: 6 }
    ],

    arrows: [
      { layer: 'layer-a', x1: 0, y1: A.y, x2: A.x, y2: A.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { layer: 'layer-a', x1: A.x, y1: A.y, x2: A.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { layer: 'layer-b', x1: 0, y1: B.y, x2: B.x, y2: B.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { layer: 'layer-b', x1: B.x, y1: B.y, x2: B.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { layer: 'layer-c', x1: 0, y1: C.y, x2: C.x, y2: C.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { layer: 'layer-c', x1: C.x, y1: C.y, x2: C.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 }
    ],

    texts: [
      { x: 0.93, y: 0.30, text: 'D', tone: 'blue', bold: true, fontSize: 15, anchor: 'middle' },
      { layer: 'layer-a', x: -0.02, y: A.y, text: '10', tone: 'slate', fontSize: 13, anchor: 'end' },
      { layer: 'layer-a', x: A.x, y: -0.06, text: '20', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { layer: 'layer-a', x: A.x - 0.02, y: A.y - 0.055, text: 'A', tone: 'green', bold: true, fontSize: 15, anchor: 'end' },
      { layer: 'layer-b', x: -0.02, y: B.y, text: '8', tone: 'slate', fontSize: 13, anchor: 'end' },
      { layer: 'layer-b', x: B.x, y: -0.06, text: '30', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { layer: 'layer-b', x: B.x - 0.02, y: B.y - 0.055, text: 'B', tone: 'amber', bold: true, fontSize: 15, anchor: 'end' },
      { layer: 'layer-c', x: -0.02, y: C.y, text: '6', tone: 'slate', fontSize: 13, anchor: 'end' },
      { layer: 'layer-c', x: C.x, y: -0.06, text: '40', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { layer: 'layer-c', x: C.x - 0.02, y: C.y - 0.055, text: 'C', tone: 'purple', bold: true, fontSize: 15, anchor: 'end' }
    ]
  };
})();
