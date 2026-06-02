/* ============================================================
   Demand card 4 — repurposed as a "shifts in demand" chart (icons
   key: demandShifts). The old consumer-surplus diagram is retired
   (consumer surplus belongs in the price-mechanism topic, 1.2.7).

   Three parallel slope −1 demand lines: D₁ (centre, the canonical
   line), D₂ shifted right (increase), D₃ shifted left (decrease).
   Horizontal arrows at a mid price show the curve moving at every
   price. Shift = ±0.22 in chart-x.
   ============================================================ */
(function () {
  'use strict';

  var s = 0.22;     // horizontal shift
  var yMid = 0.55;  // price level for the shift arrows
  // D₁: y = 1.166 − x ; D₂: y = 1.386 − x ; D₃: y = 0.946 − x
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
      '<marker id="ds-purple-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7C3AED"/></marker>',
    axes: {
      x: { label: 'Quantity demanded' },
      y: { label: 'Price' }
    },

    curves: [
      { d: 'M -0.10,1.046 L 0.78,0.166', tone: 'purple', strokeWidth: 2.6 }, // D₃ left
      { d: 'M 0.12,1.046 L 1.00,0.166',  tone: 'blue',   strokeWidth: 3 },   // D₁ centre
      { d: 'M 0.34,1.046 L 1.22,0.166',  tone: 'green',  strokeWidth: 2.6 }  // D₂ right
    ],

    arrows: [
      // increase: D₁ → D₂ (rightward, green)
      { x1: d1x + 0.03, y1: yMid, x2: d2x - 0.01, y2: yMid,
        tone: 'green', strokeWidth: 3, markerEnd: 'ds-green-end', buffer: 0 },
      // decrease: D₁ → D₃ (leftward, purple)
      { x1: d1x - 0.03, y1: yMid, x2: d3x + 0.01, y2: yMid,
        tone: 'purple', strokeWidth: 3, markerEnd: 'ds-purple-end', buffer: 0 }
    ],

    points: [
      { x: d3x, y: yMid, tone: 'purple', radius: 5, hollow: true },
      { x: d1x, y: yMid, tone: 'blue',   radius: 5 },
      { x: d2x, y: yMid, tone: 'green',  radius: 5, hollow: true }
    ],

    texts: [
      // curve labels, each near its own line, colour-matched
      { x: 0.49, y: 0.40, text: 'D₃', tone: 'purple', bold: true, fontSize: 14, anchor: 'middle' },
      { x: 0.72, y: 0.40, text: 'D₁', tone: 'blue',   bold: true, fontSize: 14, anchor: 'middle' },
      { x: 0.95, y: 0.44, text: 'D₂', tone: 'green',  bold: true, fontSize: 14, anchor: 'middle' },
      // arrow captions
      { x: d2x + 0.02, y: yMid + 0.06, text: 'Increase', tone: 'green',  bold: true, fontSize: 12, anchor: 'start' },
      { x: d3x - 0.02, y: yMid + 0.06, text: 'Decrease', tone: 'purple', bold: true, fontSize: 12, anchor: 'end' }
    ]
  };
})();
