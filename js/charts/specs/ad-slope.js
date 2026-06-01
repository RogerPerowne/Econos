/* ============================================================
   AD Slope Diagram — engine spec for adSlopeDiagram.
   Aggregate-demand topic, card 2 "Why AD slopes downward".

   Static chart: single AD curve from upper-left to lower-right.
   Two equilibrium dots E₁ (Y₁, P₁) and E₂ (Y₂, P₂) showing that
   a lower price level corresponds to higher real output. Two
   small "direction" arrows sit OUTSIDE the chart area: "P falls"
   along the y-axis (red, rotated -90°) and "output rises" along
   the x-axis (green, horizontal).

   Chart-space positions:
     AD line  (0.139, 0.833) → (0.917, 0.083)
     E₁      (0.306, 0.667) — upper-left, lower output, higher price
     E₂      (0.694, 0.292) — lower-right, higher output, lower price
   ============================================================ */
(function () {
  'use strict';

  var E1 = { x: 0.306, y: 0.667 };
  var E2 = { x: 0.694, y: 0.292 };

  window.ECONOS_AD_SLOPE_SPEC = {
    width: 480,
    height: 320,
    chartArea: { x: 70, y: 40, width: 360, height: 240 },
    className: 'ad-slope-svg',
    defs:
      '<marker id="ads-arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#E11D48"/></marker>' +
      '<marker id="ads-arr-grn" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#15803D"/></marker>',
    axes: {
      x: { label: 'Y' },
      y: { label: 'P' }
    },

    curves: [
      { d: 'M 0.139,0.833 L 0.917,0.083',
        tone: 'blue', label: 'AD', strokeWidth: 3.5, labelDx: 8, labelDy: 4 }
    ],

    arrows: [
      // Dashed gridlines for E₁ and E₂
      { x1: 0, y1: E1.y, x2: E1.x, y2: E1.y, tone: 'slate', strokeWidth: 1.3, dashed: '4 3', buffer: 0 },
      { x1: E1.x, y1: E1.y, x2: E1.x, y2: 0, tone: 'slate', strokeWidth: 1.3, dashed: '4 3', buffer: 0 },
      { x1: 0, y1: E2.y, x2: E2.x, y2: E2.y, tone: 'slate', strokeWidth: 1.3, dashed: '4 3', buffer: 0 },
      { x1: E2.x, y1: E2.y, x2: E2.x, y2: 0, tone: 'slate', strokeWidth: 1.3, dashed: '4 3', buffer: 0 },

      // "P falls" arrow OUTSIDE chart on left of y-axis, pointing DOWN.
      // Pulled further LEFT (chart-x -0.110) and shortened vertically so
      // its top doesn't sit at the same y as P₁ label and its bottom
      // doesn't sit at the same y as P₂ label — clears the "looks like
      // it's touching" perception both labels have.
      { x1: -0.110, y1: 0.595, x2: -0.110, y2: 0.380,
        tone: 'rose', strokeWidth: 2, markerEnd: 'ads-arr-red', buffer: 0 },
      // "Output rises" arrow BELOW chart, pointing RIGHT
      { x1: 0.347, y1: -0.075, x2: 0.653, y2: -0.075,
        tone: 'green', strokeWidth: 2, markerEnd: 'ads-arr-grn', buffer: 0 }
    ],

    points: [
      // Hollow blue equilibrium dots
      { x: E1.x, y: E1.y, tone: 'blue', radius: 6, hollow: true,
        label: 'E₁', labelDx: 10, labelDy: -8, anchor: 'start' },
      { x: E2.x, y: E2.y, tone: 'blue', radius: 6, hollow: true,
        label: 'E₂', labelDx: 10, labelDy: -8, anchor: 'start' }
    ],

    texts: [
      // Axis tick labels
      { x: -0.022, y: E1.y, text: 'P₁', tone: 'blue', bold: true, fontSize: 12, anchor: 'end' },
      { x: -0.022, y: E2.y, text: 'P₂', tone: 'blue', bold: true, fontSize: 12, anchor: 'end' },
      { x: E1.x,    y: -0.075, text: 'Y₁', tone: 'blue', bold: true, fontSize: 12, anchor: 'middle' },
      { x: E2.x,    y: -0.075, text: 'Y₂', tone: 'blue', bold: true, fontSize: 12, anchor: 'middle' },

      // "P falls" caption BELOW the arrow head (mirrors how
      // "Output rises" sits below the bottom-edge arrow). Horizontal
      // text, anchored at the arrow's x, well below the P₂ tick label
      // so the two never share a vertical line.
      { x: -0.110, y: 0.220, text: 'P falls', tone: 'rose', bold: true, anchor: 'middle' },
      // "Output rises" caption below the bottom arrow
      { x: 0.500, y: -0.135, text: 'Output rises', tone: 'green', bold: true, anchor: 'middle' }
    ]
  };
})();
