/* ============================================================
   Demand card 4 — INTERACTIVE "shifts in demand" (icons key:
   demandShifts; className dshift-svg). Three states stepped via the
   ad-interactive tabs:
     base → D₁ solid (starting point)
     incr → D₁ dashed + green D₂ (shift right, increase)
     decr → D₁ dashed + red D₃ (shift left, decrease)
   Each state is a self-contained layer (layer-base / layer-incr /
   layer-decr); the CSS state machine in styles.css fades whole layers.

   Parallel slope −1 lines; shift = ±0.22 in chart-x.
   ============================================================ */
(function () {
  'use strict';

  var yMid = 0.55;
  var d1x = 1.166 - yMid; // 0.616
  var d2x = d1x + 0.22;   // 0.836
  var d3x = d1x - 0.22;   // 0.396

  window.ECONOS_DEMAND_CARD4_SPEC = {
    width: 700,
    height: 360,
    chartArea: { x: 78, y: 38, width: 540, height: 262 },
    className: 'dshift-svg',
    defs:
      '<marker id="ds-green-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>' +
      '<marker id="ds-red-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#DC2626"/></marker>',
    axes: {
      x: { label: 'Quantity demanded' },
      y: { label: 'Price' }
    },

    curves: [
      /* base — solid blue D₁ */
      { layer: 'layer-base', d: 'M 0.12,1.046 L 1.00,0.166', tone: 'blue', label: 'D₁', strokeWidth: 3, labelDx: 12, labelDy: 6 },

      /* incr — dashed grey D₁ + solid green D₂ */
      { layer: 'layer-incr', d: 'M 0.12,1.046 L 1.00,0.166', tone: 'slate', strokeWidth: 2.4, dashed: '7 5', opacity: 0.55 },
      { layer: 'layer-incr', d: 'M 0.34,1.046 L 1.22,0.166', tone: 'green', label: 'D₂', strokeWidth: 3, labelDx: 10, labelDy: 6 },

      /* decr — dashed grey D₁ + solid red D₃ */
      { layer: 'layer-decr', d: 'M 0.12,1.046 L 1.00,0.166', tone: 'slate', strokeWidth: 2.4, dashed: '7 5', opacity: 0.55 },
      { layer: 'layer-decr', d: 'M -0.10,1.046 L 0.78,0.166', tone: 'red', label: 'D₃', strokeWidth: 3, labelDx: -2, labelDy: 6 }
    ],

    arrows: [
      { layer: 'layer-incr', x1: d1x + 0.03, y1: yMid, x2: d2x - 0.02, y2: yMid,
        tone: 'green', strokeWidth: 2.6, dashed: '6 4', markerEnd: 'ds-green-end', buffer: 0 },
      { layer: 'layer-decr', x1: d1x - 0.03, y1: yMid, x2: d3x + 0.02, y2: yMid,
        tone: 'red', strokeWidth: 2.6, dashed: '6 4', markerEnd: 'ds-red-end', buffer: 0 }
    ],

    texts: [
      { layer: 'layer-incr', x: d2x + 0.03, y: yMid + 0.08, text: 'Increase', tone: 'green', bold: true, fontSize: 12, anchor: 'start' },
      { layer: 'layer-decr', x: d3x - 0.03, y: yMid + 0.08, text: 'Decrease', tone: 'red', bold: true, fontSize: 12, anchor: 'end' }
    ]
  };
})();
