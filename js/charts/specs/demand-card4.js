/* ============================================================
   Demand card 4 — "shifts in demand" chart (icons key: demandShifts).
   The old consumer-surplus diagram is retired (consumer surplus
   belongs in 1.2.7).

   Improved per review: D₁ is the faint dashed BASELINE (the "before"),
   and the two shifts are bold solid curves — green D₂ (increase, right)
   and red D₃ (decrease, left) — each reached by a dashed directional
   arrow. Green = increase, red = decrease (standard convention).

   Three parallel slope −1 lines; shift = ±0.22 in chart-x.
     D₁: y = 1.166 − x ; D₂: y = 1.386 − x ; D₃: y = 0.946 − x
   ============================================================ */
(function () {
  'use strict';

  var s = 0.22;     // horizontal shift
  var yMid = 0.55;  // price level for the shift arrows
  var d1x = 1.166 - yMid; // 0.616
  var d2x = d1x + s;      // 0.836
  var d3x = d1x - s;      // 0.396

  window.ECONOS_DEMAND_CARD4_SPEC = {
    width: 700,
    height: 360,
    chartArea: { x: 78, y: 38, width: 540, height: 262 },
    className: 'demand-shifts-svg',
    defs:
      '<marker id="ds-green-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>' +
      '<marker id="ds-red-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#DC2626"/></marker>',
    axes: {
      x: { label: 'Quantity demanded' },
      y: { label: 'Price' }
    },

    curves: [
      // D₁ — faint dashed baseline (the "before")
      { d: 'M 0.12,1.046 L 1.00,0.166',  tone: 'slate', strokeWidth: 2.4, dashed: '7 5', opacity: 0.55 },
      // D₃ — decrease (left), solid red
      { d: 'M -0.10,1.046 L 0.78,0.166', tone: 'red',   strokeWidth: 3 },
      // D₂ — increase (right), solid green
      { d: 'M 0.34,1.046 L 1.22,0.166',  tone: 'green', strokeWidth: 3 }
    ],

    arrows: [
      // increase: D₁ → D₂ (rightward, green dashed)
      { x1: d1x + 0.03, y1: yMid, x2: d2x - 0.02, y2: yMid,
        tone: 'green', strokeWidth: 2.6, dashed: '6 4', markerEnd: 'ds-green-end', buffer: 0 },
      // decrease: D₁ → D₃ (leftward, red dashed)
      { x1: d1x - 0.03, y1: yMid, x2: d3x + 0.02, y2: yMid,
        tone: 'red', strokeWidth: 2.6, dashed: '6 4', markerEnd: 'ds-red-end', buffer: 0 }
    ],

    texts: [
      // curve labels, colour-matched, each near its own line
      { x: 0.47, y: 0.30, text: 'D₃', tone: 'red',   bold: true, fontSize: 14, anchor: 'middle' },
      { x: 0.78, y: 0.34, text: 'D₁', tone: 'slate', bold: true, fontSize: 14, anchor: 'middle', opacity: 0.7 },
      { x: 1.00, y: 0.38, text: 'D₂', tone: 'green', bold: true, fontSize: 14, anchor: 'middle' },
      // arrow captions
      { x: d2x + 0.03, y: yMid + 0.07, text: 'Increase', tone: 'green', bold: true, fontSize: 12, anchor: 'start' },
      { x: d3x - 0.03, y: yMid + 0.07, text: 'Decrease', tone: 'red',   bold: true, fontSize: 12, anchor: 'end' }
    ]
  };
})();
