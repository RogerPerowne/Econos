/* ============================================================
   AD Movement vs Shift – engine spec for adMovementShift.
   Aggregate-demand card 3 ("Movement along vs shifts of AD").

   2-panel comparison (uses the engine's panels: [...] field):
     LEFT  Movement along AD – single curve, two dots, curved
           "slide" arrow along the curve (price level changes)
     RIGHT Shift of AD       – AD₁ dashed grey ref + AD₂ solid
           green shifted right + horizontal "shift right" arrow

   Each panel has a header pill (rounded rect with text) above the
   chart and a "trigger:" cause chip at the bottom. Pills + chips
   are container-only panels (box + title, no chartArea).

   Chart geometry per panel:
     chartArea  240×150 (x = 50 or 380, y = 70..220)
     AD line    sloping down-right
   ============================================================ */
(function () {
  'use strict';

  // Pixel widths for the pills + chips (same in both panels)
  var PILL_W = 220, PILL_H = 24, CHIP_W = 220, CHIP_H = 22;

  // Helper: container-only "pill" panel for a coloured header badge
  function pill(x, y, fill, stroke, color, text) {
    return {
      box: { x: x, y: y, width: PILL_W, height: PILL_H, fill: fill, stroke: stroke, rx: 12 },
      title: text,
      titleTone: color,
      titleY: y + 16,
      titleSize: 10
    };
  }
  // Helper: container-only "chip" panel for the bottom cause caption
  function chip(x, y, fill, stroke, color, text) {
    return {
      box: { x: x, y: y, width: CHIP_W, height: CHIP_H, fill: fill, stroke: stroke, rx: 11 },
      title: text,
      titleTone: color,
      titleY: y + 14,
      titleSize: 10
    };
  }

  window.ECONOS_AD_MOVEMENT_SHIFT_SPEC = {
    width: 640,
    height: 280,
    className: 'ad-movement-shift-svg',

    // Vertical divider down the middle separating the two panels
    divider: { x: 320, y1: 20, y2: 260, stroke: '#E2E8F0', dashed: '4 4' },

    panels: [
      /* ─── LEFT header pill ─── */
      pill(40, 8, '#F1F5F9', '#CBD5E1', 'slate', 'MOVEMENT ALONG AD'),

      /* ─── LEFT chart ─── */
      {
        chartArea: { x: 50, y: 70, width: 240, height: 150 },
        axes: { x: { label: 'Y' }, y: { label: 'P' } },
        curves: [
          { d: 'M 0.063,0.867 L 0.896,0.067',
            tone: 'blue', label: 'AD', strokeWidth: 3, labelDx: 8, labelDy: 4 }
        ],
        arrows: [
          // Dashed gridlines for both points
          { x1: 0, y1: 0.667, x2: 0.271, y2: 0.667, tone: 'slate', strokeWidth: 1, dashed: '2 2', buffer: 0 },
          { x1: 0.271, y1: 0.667, x2: 0.271, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '2 2', buffer: 0 },
          { x1: 0, y1: 0.267, x2: 0.688, y2: 0.267, tone: 'slate', strokeWidth: 1, dashed: '2 2', buffer: 0 },
          { x1: 0.688, y1: 0.267, x2: 0.688, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '2 2', buffer: 0 },
          // Curved "slide" arrow along the AD curve (quadratic Bézier)
          { d: 'M 0.333,0.600 Q 0.479,0.433 0.625,0.300',
            tone: 'slate', strokeWidth: 2.2, markerEnd: 'econos-arrow-slate', buffer: 0 }
        ],
        points: [
          { x: 0.271, y: 0.667, tone: 'blue', radius: 5, hollow: true },
          { x: 0.688, y: 0.267, tone: 'blue', radius: 5 }
        ],
        texts: [
          // Subhead above the chart (chart-y > 1 is above the chart area)
          // Subhead – placed at chart-y > 1 (above chart area). Shifted RIGHT
// of the y-axis P label by offsetting x past x=0.
{ x: 0.560, y: 1.090, text: 'price level changes · same curve', tone: 'gray', anchor: 'middle' },
          // Axis tick labels
          { x: -0.025, y: 0.667, text: 'P₁', tone: 'blue', bold: true, anchor: 'end' },
          { x: -0.025, y: 0.267, text: 'P₂', tone: 'blue', bold: true, anchor: 'end' },
          { x: 0.271, y: -0.113, text: 'Y₁', tone: 'blue', bold: true, anchor: 'middle' },
          { x: 0.688, y: -0.113, text: 'Y₂', tone: 'blue', bold: true, anchor: 'middle' },
          // "slide" label sitting above the curved arrow
          { x: 0.542, y: 0.480, text: 'slide', tone: 'slate', bold: true, anchor: 'middle' }
        ]
      },

      /* ─── LEFT cause chip at the bottom ─── */
      chip(40, 247, '#EFF6FF', '#2563EB', 'blue', 'trigger: price level (P) changes'),

      /* ─── RIGHT header pill ─── */
      pill(370, 8, '#ECFDF5', '#10B981', 'green', 'SHIFT OF AD CURVE'),

      /* ─── RIGHT chart ─── */
      {
        chartArea: { x: 380, y: 70, width: 240, height: 150 },
        axes: { x: { label: 'Y' }, y: { label: 'P' } },
        curves: [
          // AD₁ dashed grey reference
          { d: 'M 0.042,0.867 L 0.708,0.067',
            tone: 'gray', label: 'AD₁', strokeWidth: 2, dashed: '4 3', labelDx: -22, labelDy: 4 },
          // AD₂ solid green, shifted right.
          // Right panel ends at pixel x=620; old labelDx=8 placed the
          // 23-px-wide "AD₂" text starting at pixel 608, overflowing the
          // panel by ~11px. labelDx=-10 + anchor 'end' tucks it inside.
          { d: 'M 0.250,0.867 L 0.917,0.067',
            tone: 'blue', label: 'AD₂', strokeWidth: 3, labelDx: -10, labelDy: 4, anchor: 'end' }
        ],
        arrows: [
          // Horizontal "shift right" arrow in the clear lower-middle space
          { x1: 0.417, y1: 0.300, x2: 0.625, y2: 0.300,
            tone: 'green', strokeWidth: 2.4, markerEnd: 'econos-arrow-green', buffer: 0 }
        ],
        texts: [
          { x: 0.500, y: 1.090, text: 'whole curve moves · C/I/G/X−M change', tone: 'gray', anchor: 'middle' },
          { x: 0.521, y: 0.180, text: 'shift right', tone: 'green', bold: true, anchor: 'middle' }
        ]
      },

      /* ─── RIGHT cause chip at the bottom ─── */
      chip(370, 247, '#ECFDF5', '#10B981', 'green', 'trigger: C / I / G / (X−M) changes')
    ]
  };
})();
