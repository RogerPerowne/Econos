/* ============================================================
   Output Gap — Cyclical vs Structural deficit (outputGapCompare).
   Public Sector Finances card 4. Two side-by-side time-series
   panels, both plotting a rising Potential (trend) output line
   (dashed green) against Actual output (solid blue).

   LEFT  — recession: actual output dips well BELOW the trend, so a
           negative output gap opens up. The deficit here is cyclical
           (it fades as the economy recovers back to trend).
   RIGHT — at/near trend: actual output tracks the trend, so the gap
           is roughly zero — yet the budget can still be in deficit.
           That borrowing is structural (built into the budget).

   Single SVG, two independent coordinate systems via panels:[],
   matching the elastic-vs-inelastic multi-panel pattern.
   ============================================================ */
(function () {
  'use strict';

  // Shared trend line endpoints (identical geometry in both panels so
  // the eye compares "below trend" vs "on trend" directly).
  var TREND = 'M 0.05,0.30 L 0.95,0.82';

  window.ECONOS_OUTPUT_GAP_COMPARE_SPEC = {
    width: 680,
    height: 300,
    className: 'output-gap-compare-svg',
    background: '#FFFFFF',
    defs:
      '<marker id="ogc-gap-up" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 0,8 8,4" fill="#DC2626"/></marker>' +
      '<marker id="ogc-gap-down" markerWidth="8" markerHeight="8" refX="2" refY="4" orient="auto"><polygon points="8,0 8,8 0,4" fill="#DC2626"/></marker>',
    divider: { x: 340, y1: 24, y2: 268 },

    panels: [
      /* ─── LEFT: recession — actual dips below trend ─── */
      {
        chartArea: { x: 48, y: 30, width: 262, height: 210 },
        title: 'Output gap (recession)',
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
          // Negative output gap: vertical double arrow between actual and trend.
          { x1: 0.62, y1: 0.455, x2: 0.62, y2: 0.624,
            tone: 'red', strokeWidth: 1.8,
            markerStart: 'ogc-gap-down', markerEnd: 'ogc-gap-up', buffer: 0 }
        ],
        texts: [
          { x: 0.63, y: 0.36, text: 'Negative gap', tone: 'red', bold: true, anchor: 'middle' }
        ]
      },

      /* ─── RIGHT: at/near trend — actual tracks the trend ─── */
      {
        chartArea: { x: 388, y: 30, width: 262, height: 210 },
        title: 'Output gap (at or near trend)',
        titleTone: 'green',
        axes: { x: { label: 'Time' }, y: { label: 'Real output' } },
        curves: [
          { d: TREND, tone: 'green', strokeWidth: 2.4, dashed: '6 4',
            label: 'Potential (trend)', labelDx: -2, labelDy: -10, anchor: 'end' },
          { d: 'M 0.05,0.295 C 0.32,0.45 0.58,0.60 0.95,0.79',
            tone: 'blue', strokeWidth: 2.6,
            label: 'Actual', labelDx: 4, labelDy: 14, anchor: 'end' }
        ],
        texts: [
          { x: 0.50, y: 0.13, text: 'Gap ≈ 0', tone: 'green', bold: true, anchor: 'middle' }
        ]
      },

      /* ─── Bottom caption ─── */
      {
        chartArea: { x: 0, y: 274, width: 680, height: 18 },
        axes: false,
        texts: [
          { x: 0.5, y: 0.5,
            text: 'Same trend — a cyclical gap fades with recovery; a structural deficit does not',
            tone: 'gray', italic: true, anchor: 'middle' }
        ]
      }
    ]
  };
})();
