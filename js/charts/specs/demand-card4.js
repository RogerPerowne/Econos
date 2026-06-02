/* ============================================================
   Demand card 4 — interactive "shifts in demand" via the standard
   `interactiveDiagram` block (svg left + description right, step
   buttons under the row), the same component used on Consumer &
   Producer Surplus card 2 (`cpsBuildInteractive`).

   Three mutually-exclusive view states (driven per-view by
   `show: ['layer-N']` in the card data):
     base → layer-base : D₁ solid only (starting point)
     incr → layer-incr : D₁ dashed + green D₂ + dashed → arrow
     decr → layer-decr : D₁ dashed + red D₃ + dashed ← arrow

   The engine emits a <style> block that hides all declared layers by
   default (opacity:0 + visibility:hidden); the id-advance click
   handler then reveals the layers named in the active view's `show`
   array. The first view's button is auto-clicked at render, so
   layer-base is visible on load.

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
    height: 480,            // taller than the old static chart
    chartArea: { x: 78, y: 40, width: 540, height: 372 },
    className: 'dshift-svg',
    layers: ['layer-base', 'layer-incr', 'layer-decr'],
    layerMode: 'exclusive', // only the active view's layer shows
    defs:
      '<marker id="ds-green-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>' +
      '<marker id="ds-red-end" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#DC2626"/></marker>',
    axes: {
      x: { label: 'Quantity demanded' },
      y: { label: 'Price' }
    },

    curves: [
      /* base — solid blue D₁ (label via explicit text below) */
      { layer: 'layer-base', d: 'M 0.12,1.046 L 1.00,0.166', tone: 'blue', strokeWidth: 3 },

      /* incr — dashed grey D₁ + solid green D₂ */
      { layer: 'layer-incr', d: 'M 0.12,1.046 L 1.00,0.166', tone: 'slate', strokeWidth: 2.4, dashed: '7 5', opacity: 0.55 },
      { layer: 'layer-incr', d: 'M 0.34,1.046 L 1.22,0.166', tone: 'green', strokeWidth: 3 },

      /* decr — dashed grey D₁ + solid red D₃ */
      { layer: 'layer-decr', d: 'M 0.12,1.046 L 1.00,0.166', tone: 'slate', strokeWidth: 2.4, dashed: '7 5', opacity: 0.55 },
      { layer: 'layer-decr', d: 'M -0.10,1.046 L 0.78,0.166', tone: 'red', strokeWidth: 3 }
    ],

    arrows: [
      { layer: 'layer-incr', x1: d1x + 0.03, y1: yMid, x2: d2x - 0.02, y2: yMid,
        tone: 'green', strokeWidth: 2.6, dashed: '6 4', markerEnd: 'ds-green-end', buffer: 0 },
      { layer: 'layer-decr', x1: d1x - 0.03, y1: yMid, x2: d3x + 0.02, y2: yMid,
        tone: 'red', strokeWidth: 2.6, dashed: '6 4', markerEnd: 'ds-red-end', buffer: 0 }
    ],

    texts: [
      /* curve labels — explicit, in-bounds, one per state, clear of the line */
      { layer: 'layer-base', x: 0.90, y: 0.40, text: 'D₁', tone: 'blue',  bold: true, fontSize: 15, anchor: 'middle' },

      { layer: 'layer-incr', x: 0.95, y: 0.46, text: 'D₂', tone: 'green', bold: true, fontSize: 15, anchor: 'middle' },
      { layer: 'layer-incr', x: 0.70, y: 0.30, text: 'D₁', tone: 'slate', fontSize: 13, anchor: 'middle', opacity: 0.6 },
      { layer: 'layer-incr', x: 0.86, y: 0.64, text: 'Increase', tone: 'green', bold: true, fontSize: 12, anchor: 'start' },

      { layer: 'layer-decr', x: 0.62, y: 0.24, text: 'D₃', tone: 'red',   bold: true, fontSize: 15, anchor: 'middle' },
      { layer: 'layer-decr', x: 0.92, y: 0.34, text: 'D₁', tone: 'slate', fontSize: 13, anchor: 'middle', opacity: 0.6 },
      { layer: 'layer-decr', x: 0.40, y: 0.64, text: 'Decrease', tone: 'red', bold: true, fontSize: 12, anchor: 'end' }
    ]
  };
})();
