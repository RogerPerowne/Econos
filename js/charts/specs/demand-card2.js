/* ============================================================
   Demand card 3 – INTERACTIVE "movements along the demand curve"
   (icons key: demandMovements; className dmove-svg). Rendered via the
   interactiveDiagram block.

   Persistent: the demand line D and the reference point B (£8, 30).
   Declared layers reveal one movement at a time:
     layer-contract → A (£10, 20) + B→A arrow · price rises, contraction
     layer-extend   → C (£6,  40) + B→C arrow · price falls, extension
   Arrows are offset 0.028 perpendicular (up-right) so they run parallel
   to the line, not over it.
   ============================================================ */
(function () {
  'use strict';

  var A = { x: 0.333, y: 0.833 };
  var B = { x: 0.500, y: 0.667 };
  var C = { x: 0.667, y: 0.500 };
  var o = 0.028;

  window.ECONOS_DEMAND_CARD2_SPEC = {
    width: 700,
    height: 480,
    chartArea: { x: 84, y: 40, width: 534, height: 372 },
    className: 'dmove-svg',
    layers: ['layer-contract', 'layer-extend'],
    layerMode: 'exclusive',
    defs:
      '<marker id="dm-red-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#DC2626"/></marker>' +
      '<marker id="dm-green-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>',
    axes: {
      x: { label: 'Quantity demanded' },
      y: { label: 'Price (£)' }
    },

    curves: [
      { d: 'M 0.12,1.046 L 1.00,0.166', tone: 'blue', strokeWidth: 3 }
    ],

    points: [
      /* persistent reference point B */
      { x: B.x, y: B.y, tone: 'blue', radius: 6 },
      { layer: 'layer-contract', x: A.x, y: A.y, tone: 'red',   radius: 6 },
      { layer: 'layer-extend',   x: C.x, y: C.y, tone: 'green', radius: 6 }
    ],

    arrows: [
      /* persistent B leaders */
      { x1: 0, y1: B.y, x2: B.x, y2: B.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: B.x, y1: B.y, x2: B.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      /* contraction B → A */
      { layer: 'layer-contract', x1: B.x + o, y1: B.y + o, x2: A.x + o, y2: A.y + o,
        tone: 'red', strokeWidth: 2.6, markerEnd: 'dm-red-end', buffer: 0.02 },
      { layer: 'layer-contract', x1: 0, y1: A.y, x2: A.x, y2: A.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { layer: 'layer-contract', x1: A.x, y1: A.y, x2: A.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      /* extension B → C */
      { layer: 'layer-extend', x1: B.x + o, y1: B.y + o, x2: C.x + o, y2: C.y + o,
        tone: 'green', strokeWidth: 2.6, markerEnd: 'dm-green-end', buffer: 0.02 },
      { layer: 'layer-extend', x1: 0, y1: C.y, x2: C.x, y2: C.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { layer: 'layer-extend', x1: C.x, y1: C.y, x2: C.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 }
    ],

    texts: [
      { x: 0.93, y: 0.30, text: 'D', tone: 'blue', bold: true, fontSize: 15, anchor: 'middle' },
      /* persistent B labelling */
      { x: -0.02, y: B.y, text: '8', tone: 'slate', fontSize: 13, anchor: 'end' },
      { x: B.x, y: -0.06, text: '30', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { x: B.x - 0.02, y: B.y - 0.055, text: 'B', tone: 'blue', bold: true, fontSize: 15, anchor: 'end' },
      /* contraction */
      { layer: 'layer-contract', x: -0.02, y: A.y, text: '10', tone: 'slate', fontSize: 13, anchor: 'end' },
      { layer: 'layer-contract', x: A.x, y: -0.06, text: '20', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { layer: 'layer-contract', x: A.x - 0.02, y: A.y - 0.055, text: 'A', tone: 'red', bold: true, fontSize: 15, anchor: 'end' },
      { layer: 'layer-contract', x: 0.30, y: 0.95, text: 'Contraction', tone: 'red', bold: true, fontSize: 12, anchor: 'start' },
      /* extension */
      { layer: 'layer-extend', x: -0.02, y: C.y, text: '6', tone: 'slate', fontSize: 13, anchor: 'end' },
      { layer: 'layer-extend', x: C.x, y: -0.06, text: '40', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { layer: 'layer-extend', x: C.x - 0.02, y: C.y - 0.055, text: 'C', tone: 'green', bold: true, fontSize: 15, anchor: 'end' },
      { layer: 'layer-extend', x: 0.72, y: 0.56, text: 'Extension', tone: 'green', bold: true, fontSize: 12, anchor: 'start' }
    ]
  };
})();
