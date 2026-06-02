/* ============================================================
   Supply card 4 — INTERACTIVE "shifts in supply" (icons key:
   supplyShifts; className sshift-svg). The old producer-surplus diagram
   is retired (producer surplus belongs in 1.2.7). Mirror of
   demand-card4 with an upward curve and the green=increase /
   red=decrease convention.

   States (mutually exclusive via show: ['layer-*']):
     base → S₁ solid (starting point)
     incr → S₁ dashed + green S₂ (shift right, increase)
     decr → S₁ dashed + red S₃ (shift left, decrease)
   Slope +1 lines; shift = ±0.22 in chart-x. Arrows at a mid price.
   ============================================================ */
(function () {
  'use strict';

  var yMid = 0.60;
  var s1x = yMid - 0.166; // S₁: y = x + 0.166 → x = y − 0.166 = 0.434
  var s2x = s1x + 0.22;   // 0.654
  var s3x = s1x - 0.22;   // 0.214

  window.ECONOS_SUPPLY_CARD4_SPEC = {
    width: 700,
    height: 480,
    chartArea: { x: 84, y: 40, width: 534, height: 372 },
    className: 'sshift-svg',
    layers: ['layer-base', 'layer-incr', 'layer-decr'],
    layerMode: 'exclusive',
    defs:
      '<marker id="ss-green-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>' +
      '<marker id="ss-red-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#DC2626"/></marker>',
    axes: {
      x: { label: 'Quantity supplied' },
      y: { label: 'Price' }
    },

    curves: [
      /* base — solid blue S₁ */
      { layer: 'layer-base', d: 'M 0.12,0.286 L 0.88,1.046', tone: 'blue', strokeWidth: 3 },

      /* incr — dashed grey S₁ + solid green S₂ (right) */
      { layer: 'layer-incr', d: 'M 0.12,0.286 L 0.88,1.046', tone: 'slate', strokeWidth: 2.4, dashed: '7 5', opacity: 0.55 },
      { layer: 'layer-incr', d: 'M 0.34,0.286 L 1.10,1.046', tone: 'green', strokeWidth: 3 },

      /* decr — dashed grey S₁ + solid red S₃ (left) */
      { layer: 'layer-decr', d: 'M 0.12,0.286 L 0.88,1.046', tone: 'slate', strokeWidth: 2.4, dashed: '7 5', opacity: 0.55 },
      { layer: 'layer-decr', d: 'M -0.10,0.286 L 0.66,1.046', tone: 'red', strokeWidth: 3 }
    ],

    arrows: [
      { layer: 'layer-incr', x1: s1x + 0.03, y1: yMid, x2: s2x - 0.02, y2: yMid,
        tone: 'green', strokeWidth: 2.6, dashed: '6 4', markerEnd: 'ss-green-end', buffer: 0 },
      { layer: 'layer-decr', x1: s1x - 0.03, y1: yMid, x2: s3x + 0.02, y2: yMid,
        tone: 'red', strokeWidth: 2.6, dashed: '6 4', markerEnd: 'ss-red-end', buffer: 0 }
    ],

    texts: [
      /* one bold curve label per state + faint S₁ on the dashed baseline */
      { layer: 'layer-base', x: 0.74, y: 1.00, text: 'S₁', tone: 'blue', bold: true, fontSize: 15, anchor: 'start' },

      { layer: 'layer-incr', x: 0.96, y: 1.00, text: 'S₂', tone: 'green', bold: true, fontSize: 15, anchor: 'start' },
      { layer: 'layer-incr', x: 0.66, y: 0.98, text: 'S₁', tone: 'slate', fontSize: 13, anchor: 'end', opacity: 0.6 },
      { layer: 'layer-incr', x: s2x + 0.03, y: yMid - 0.07, text: 'Increase', tone: 'green', bold: true, fontSize: 12, anchor: 'start' },

      { layer: 'layer-decr', x: 0.50, y: 1.00, text: 'S₃', tone: 'red', bold: true, fontSize: 15, anchor: 'start' },
      { layer: 'layer-decr', x: 0.86, y: 1.00, text: 'S₁', tone: 'slate', fontSize: 13, anchor: 'start', opacity: 0.6 },
      { layer: 'layer-decr', x: s3x - 0.03, y: yMid - 0.07, text: 'Decrease', tone: 'red', bold: true, fontSize: 12, anchor: 'end' }
    ]
  };
})();
