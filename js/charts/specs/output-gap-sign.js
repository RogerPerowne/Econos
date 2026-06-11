/* ============================================================
   Output gap — the sign of the gap (outputGapSign).
   Output Gaps card 1. Two side-by-side time-series panels, both
   plotting the rising Potential (trend) output line (dashed green)
   against Actual output (solid blue) — same anatomy as
   output-gap-compare, but the story here is the SIGN:

   LEFT  — actual dips BELOW trend → negative (recessionary) gap,
           spare capacity, red gap arrow.
   RIGHT — actual overshoots ABOVE trend → positive (inflationary)
           gap, overheating, amber gap arrow.
   ============================================================ */
(function () {
  'use strict';

  // Shared trend line (identical geometry in both panels so the eye
  // compares below-trend vs above-trend directly).
  var TREND = 'M 0.05,0.30 L 0.95,0.82';

  window.ECONOS_OUTPUT_GAP_SIGN_SPEC = {
    width: 680,
    height: 300,
    className: 'output-gap-sign-svg',
    background: '#FFFFFF',
    defs:
      '<marker id="ogs-red-up" markerWidth="8" markerHeight="8" refX="4" refY="1" orient="auto"><polygon points="0,7 8,7 4,0" fill="#DC2626"/></marker>' +
      '<marker id="ogs-red-down" markerWidth="8" markerHeight="8" refX="4" refY="7" orient="auto"><polygon points="0,1 8,1 4,8" fill="#DC2626"/></marker>' +
      '<marker id="ogs-amber-up" markerWidth="8" markerHeight="8" refX="4" refY="1" orient="auto"><polygon points="0,7 8,7 4,0" fill="#D97706"/></marker>' +
      '<marker id="ogs-amber-down" markerWidth="8" markerHeight="8" refX="4" refY="7" orient="auto"><polygon points="0,1 8,1 4,8" fill="#D97706"/></marker>',
    divider: { x: 340, y1: 24, y2: 268 },

    panels: [
      /* ─── LEFT: negative (recessionary) gap ─── */
      {
        chartArea: { x: 48, y: 30, width: 262, height: 210 },
        title: 'Negative output gap',
        titleTone: 'blue',
        axes: { x: { label: 'Time' }, y: { label: 'Real output' } },
        curves: [
          { d: TREND, tone: 'green', strokeWidth: 2.4, dashed: '6 4',
            label: 'Potential (trend)', labelDx: -2, labelDy: -10, anchor: 'end' },
          { d: 'M 0.05,0.30 C 0.26,0.40 0.40,0.39 0.52,0.41 C 0.66,0.44 0.82,0.58 0.95,0.66',
            tone: 'blue', strokeWidth: 2.6,
            label: 'Actual', labelDx: 4, labelDy: 14, anchor: 'end' }
        ],
        arrows: [
          { x1: 0.62, y1: 0.455, x2: 0.62, y2: 0.624,
            tone: 'red', strokeWidth: 1.8,
            markerStart: 'ogs-red-down', markerEnd: 'ogs-red-up', buffer: 0 }
        ],
        texts: [
          { x: 0.63, y: 0.36, text: 'Spare capacity', tone: 'red', bold: true, anchor: 'middle' }
        ]
      },

      /* ─── RIGHT: positive (inflationary) gap ─── */
      {
        chartArea: { x: 388, y: 30, width: 262, height: 210 },
        title: 'Positive output gap',
        titleTone: 'amber',
        axes: { x: { label: 'Time' }, y: { label: 'Real output' } },
        curves: [
          { d: TREND, tone: 'green', strokeWidth: 2.4, dashed: '6 4',
            label: 'Potential (trend)', labelDx: -2, labelDy: 14, anchor: 'end' },
          { d: 'M 0.05,0.30 C 0.25,0.48 0.45,0.62 0.62,0.74 C 0.78,0.85 0.88,0.90 0.95,0.93',
            tone: 'blue', strokeWidth: 2.6,
            label: 'Actual', labelDx: -2, labelDy: -10, anchor: 'end' }
        ],
        arrows: [
          { x1: 0.62, y1: 0.640, x2: 0.62, y2: 0.728,
            tone: 'amber', strokeWidth: 1.8,
            markerStart: 'ogs-amber-down', markerEnd: 'ogs-amber-up', buffer: 0 }
        ],
        texts: [
          { x: 0.60, y: 0.50, text: 'Overheating', tone: 'amber', bold: true, anchor: 'middle' }
        ]
      },

      /* ─── Bottom caption ─── */
      {
        chartArea: { x: 0, y: 274, width: 680, height: 18 },
        axes: false,
        texts: [
          { x: 0.5, y: 0.5,
            text: 'The sign names the problem: below trend = spare capacity; above trend = overheating',
            tone: 'gray', italic: true, anchor: 'middle' }
        ]
      }
    ]
  };
})();
