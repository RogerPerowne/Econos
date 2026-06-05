/* ============================================================
   Supply card 3 – INTERACTIVE "movements along the supply curve"
   (icons key: supplyMovements; className smove-svg). Mirror of
   demand-card2 with an upward curve. Rendered via interactiveDiagram.

   Persistent: the supply line S and the reference point B (£8, 30).
   Layers reveal one movement at a time:
     layer-contract → A (£6, 20) + B→A arrow · price FALLS, contraction
     layer-extend   → C (£10,40) + B→C arrow · price RISES, extension
   Arrows offset 0.028 perpendicular (down-right of a slope +1 line).
   ============================================================ */
(function () {
  'use strict';

  var A = { x: 0.333, y: 0.500 };
  var B = { x: 0.500, y: 0.667 };
  var C = { x: 0.667, y: 0.833 };
  var o = 0.028;

  window.ECONOS_SUPPLY_CARD2_SPEC = {
    width: 700,
    height: 480,
    chartArea: { x: 84, y: 40, width: 534, height: 372 },
    className: 'smove-svg',
    layers: ['layer-contract', 'layer-extend'],
    layerMode: 'exclusive',
    defs:
      '<marker id="sm-red-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#DC2626"/></marker>' +
      '<marker id="sm-green-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>',
    axes: {
      x: { label: 'Quantity supplied' },
      y: { label: 'Price (£)' }
    },

    curves: [
      { d: 'M 0.12,0.286 L 0.88,1.046', tone: 'blue', strokeWidth: 3 }
    ],

    points: [
      { x: B.x, y: B.y, tone: 'blue', radius: 6 },
      { layer: 'layer-contract', x: A.x, y: A.y, tone: 'red',   radius: 6 },
      { layer: 'layer-extend',   x: C.x, y: C.y, tone: 'green', radius: 6 }
    ],

    arrows: [
      { x1: 0, y1: B.y, x2: B.x, y2: B.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: B.x, y1: B.y, x2: B.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      /* contraction B → A (price falls, down) */
      { layer: 'layer-contract', x1: B.x + o, y1: B.y - o, x2: A.x + o, y2: A.y - o,
        tone: 'red', strokeWidth: 2.6, markerEnd: 'sm-red-end', buffer: 0.02 },
      { layer: 'layer-contract', x1: 0, y1: A.y, x2: A.x, y2: A.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { layer: 'layer-contract', x1: A.x, y1: A.y, x2: A.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      /* extension B → C (price rises, up) */
      { layer: 'layer-extend', x1: B.x + o, y1: B.y - o, x2: C.x + o, y2: C.y - o,
        tone: 'green', strokeWidth: 2.6, markerEnd: 'sm-green-end', buffer: 0.02 },
      { layer: 'layer-extend', x1: 0, y1: C.y, x2: C.x, y2: C.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { layer: 'layer-extend', x1: C.x, y1: C.y, x2: C.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 }
    ],

    texts: [
      { x: 0.76, y: 1.00, text: 'S', tone: 'blue', bold: true, fontSize: 15, anchor: 'start' },
      { x: -0.02, y: B.y, text: '8', tone: 'slate', fontSize: 13, anchor: 'end' },
      { x: B.x, y: -0.06, text: '30', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { x: B.x - 0.04, y: B.y + 0.03, text: 'B', tone: 'blue', bold: true, fontSize: 15, anchor: 'end' },
      { layer: 'layer-contract', x: -0.02, y: A.y, text: '6', tone: 'slate', fontSize: 13, anchor: 'end' },
      { layer: 'layer-contract', x: A.x, y: -0.06, text: '20', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { layer: 'layer-contract', x: A.x - 0.04, y: A.y + 0.03, text: 'A', tone: 'red', bold: true, fontSize: 15, anchor: 'end' },
      { layer: 'layer-contract', x: 0.40, y: 0.40, text: 'Contraction', tone: 'red', bold: true, fontSize: 12, anchor: 'start' },
      { layer: 'layer-extend', x: -0.02, y: C.y, text: '10', tone: 'slate', fontSize: 13, anchor: 'end' },
      { layer: 'layer-extend', x: C.x, y: -0.06, text: '40', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { layer: 'layer-extend', x: C.x - 0.04, y: C.y + 0.03, text: 'C', tone: 'green', bold: true, fontSize: 15, anchor: 'end' },
      { layer: 'layer-extend', x: 0.70, y: 0.74, text: 'Extension', tone: 'green', bold: true, fontSize: 12, anchor: 'start' }
    ]
  };
})();
