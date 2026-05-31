/* ============================================================
   Demand card 2 — declarative spec for demandInteractive.
   Movement Along vs Shift of the Demand Curve. Three step states
   match the legacy demand-svg CSS in styles.css (.show-X):

     base       → layer-axes + layer-demand-base + layer-e1 + layer-legend-base
     extension  → same minus layer-e1 minus layer-legend-base,
                   plus layer-extension + layer-legend-extension
     shift      → axes + layer-shift + layer-legend-shift (D₁ base hidden)

   Chart geometry (viewBox 900×440):
     chart area  x=60..560, y=43..400  → width 500, height 357
     divider     x=595
     title strip dot + text at pixel y=32 (chart-y 1.031)

   Key positions in chart-space (0..1, y up):
     D₁ line     (0.080, 0.868) → (0.860, 0.084)
     E₁ at P₁,Q₁ (0.470, 0.476)
     E₂ contract (0.304, 0.644)
     E₃ extend   (0.650, 0.294)
     D₀ left     (-0.060, 0.868) → (0.720, 0.084)
     D₂ right    (0.220, 0.868) → (1.000, 0.084)
     Q₀ shift-L  (0.330, 0.476)
     Q₂ shift-R  (0.610, 0.476)
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_DEMAND_CARD2_SPEC = {
    width: 900,
    height: 440,
    chartArea: { x: 60, y: 43, width: 500, height: 357 },
    className: 'demand-svg',
    background: '#F8FAFC',
    divider: { x: 595, y1: 16, y2: 424 },
    defs:
      '<marker id="dm-amber-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#D97706"/></marker>' +
      '<marker id="dm-amber-start" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto"><path d="M8,0 L8,6 L0,3 z" fill="#D97706"/></marker>' +
      '<marker id="dm-green-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>' +
      '<marker id="dm-red-start" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto"><path d="M8,0 L8,6 L0,3 z" fill="#DC2626"/></marker>',
    axes: {
      x: { label: 'Q' },
      y: { label: 'P' }
    },

    curves: [
      // Base D₁ — always visible except in shift state
      { layer: 'layer-demand-base',
        d: 'M 0.080,0.868 L 0.860,0.084',
        tone: 'blue', label: 'D₁', strokeWidth: 3.5 },
      // Shift-state D₁ — same line dashed/faded (visible only when curve toggled on)
      { layer: 'layer-shift',
        d: 'M 0.080,0.868 L 0.860,0.084',
        tone: 'blue', strokeWidth: 2, dashed: '9 5', opacity: 0.55 },
      // Shift D₀ left
      { layer: 'layer-shift',
        d: 'M -0.060,0.868 L 0.720,0.084',
        tone: 'blue', label: 'D₀', strokeWidth: 2.5, labelDx: 8 },
      // Shift D₂ right
      { layer: 'layer-shift',
        d: 'M 0.220,0.868 L 1.000,0.084',
        tone: 'blue', label: 'D₂', strokeWidth: 2.5, labelDx: 8 }
    ],

    arrows: [
      /* ---- base layer: E₁ gridlines ---- */
      { layer: 'layer-e1',
        x1: 0, y1: 0.476, x2: 0.470, y2: 0.476,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-e1',
        x1: 0.470, y1: 0.476, x2: 0.470, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },

      /* ---- extension layer: E₂ contraction + E₃ extension gridlines + amber arrow ---- */
      // E₂ horiz + vert
      { layer: 'layer-extension',
        x1: 0, y1: 0.644, x2: 0.304, y2: 0.644,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-extension',
        x1: 0.304, y1: 0.644, x2: 0.304, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      // E₃ horiz + vert
      { layer: 'layer-extension',
        x1: 0, y1: 0.294, x2: 0.650, y2: 0.294,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-extension',
        x1: 0.650, y1: 0.294, x2: 0.650, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      // Amber double-headed arrow along D₁ from E₂ to E₃
      { layer: 'layer-extension',
        x1: 0.320, y1: 0.631, x2: 0.636, y2: 0.311,
        tone: 'amber', strokeWidth: 2.5,
        markerStart: 'dm-amber-start', markerEnd: 'dm-amber-end', buffer: 0 },

      /* ---- shift layer: Q₀, Q₂ vert gridlines + green horiz arrow ---- */
      { layer: 'layer-shift',
        x1: 0.330, y1: 0.476, x2: 0.330, y2: 0,
        tone: 'red', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-shift',
        x1: 0.610, y1: 0.476, x2: 0.610, y2: 0,
        tone: 'green', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-shift',
        x1: 0.356, y1: 0.476, x2: 0.584, y2: 0.476,
        tone: 'green', strokeWidth: 3.5,
        markerStart: 'dm-red-start', markerEnd: 'dm-green-end', buffer: 0 }
    ],

    points: [
      /* ---- base ---- */
      { layer: 'layer-e1', x: 0.470, y: 0.476, tone: 'blue', radius: 6, hollow: true },

      /* ---- extension ---- */
      { layer: 'layer-extension', x: 0.304, y: 0.644, tone: 'red',   radius: 6, hollow: true },
      { layer: 'layer-extension', x: 0.650, y: 0.294, tone: 'green', radius: 6, hollow: true },

      /* ---- shift ---- */
      { layer: 'layer-shift', x: 0.330, y: 0.476, tone: 'red',   radius: 6, hollow: true },
      // E₁ reference dot — smaller, filled grey
      { layer: 'layer-shift', x: 0.470, y: 0.476, tone: 'slate', radius: 4 },
      { layer: 'layer-shift', x: 0.610, y: 0.476, tone: 'green', radius: 6, hollow: true },

      /* ---- title-strip dots (one per state) ---- */
      { layer: 'layer-legend-base', x: 0.028, y: 1.031, tone: 'blue',  radius: 7 },
      { layer: 'layer-extension',   x: 0.028, y: 1.031, tone: 'amber', radius: 7 },
      { layer: 'layer-shift',       x: 0.028, y: 1.031, tone: 'green', radius: 7 }
    ],

    texts: [
      /* ---- TITLE STRIP (one per state, all positioned the same) ---- */
      // base — blue
      { layer: 'layer-legend-base', x: 0.060, y: 1.017, text: 'Demand slopes downward · inverse price-quantity relationship',
        tone: 'slate', fontSize: 12, anchor: 'start' },
      // extension — amber dot uses layer-extension (the legend layer toggles separately, but the strip belongs to the diagram state)
      { layer: 'layer-extension', x: 0.060, y: 1.017, text: 'Price changes → slide ALONG the demand curve',
        tone: 'slate', fontSize: 12, anchor: 'start' },
      // shift — green
      { layer: 'layer-shift', x: 0.060, y: 1.017, text: 'Non-price factors → SHIFT the whole demand curve',
        tone: 'slate', fontSize: 12, anchor: 'start' },

      /* ---- base axis tick labels ---- */
      { layer: 'layer-e1', x: -0.028, y: 0.476, text: 'P₁', tone: 'slate', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-e1', x: 0.470, y: -0.050, text: 'Q₁', tone: 'slate', bold: true, fontSize: 12, anchor: 'middle' },

      /* ---- extension labels ---- */
      { layer: 'layer-extension', x: -0.028, y: 0.644, text: 'P₂', tone: 'red',   bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-extension', x: 0.304,  y: -0.050, text: 'Q₂', tone: 'red',   bold: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-extension', x: -0.028, y: 0.294, text: 'P₃', tone: 'green', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-extension', x: 0.650,  y: -0.050, text: 'Q₃', tone: 'green', bold: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-extension', x: 0.320,  y: 0.678,  text: 'contraction', tone: 'red',   bold: true, fontSize: 11, anchor: 'start' },
      { layer: 'layer-extension', x: 0.560,  y: 0.238,  text: 'extension',   tone: 'green', bold: true, fontSize: 11, anchor: 'start' },

      /* ---- shift labels ---- */
      // Faded D₁ reference label at end of dashed curve
      { layer: 'layer-shift', x: 0.880, y: 0.084, text: 'D₁', tone: 'blue', bold: true, fontSize: 13, anchor: 'start', opacity: 0.55 },
      { layer: 'layer-shift', x: 0.330, y: -0.050, text: 'Q₀', tone: 'red',   bold: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-shift', x: 0.470, y: -0.050, text: 'Q₁', tone: 'slate', bold: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-shift', x: 0.610, y: -0.050, text: 'Q₂', tone: 'green', bold: true, fontSize: 12, anchor: 'middle' }
    ],

    legends: [
      /* ---- BASE LEGEND ---- */
      {
        layer: 'layer-legend-base',
        x: 600,
        y: 72,
        sections: [
          { header: { text: 'THE DEMAND CURVE', tone: 'blue' },
            body: [
              { text: 'Downward sloping: higher',  tone: 'slate', bold: true },
              { text: 'prices → less demanded.',  tone: 'slate', bold: true }
            ]
          },
          { header: { text: 'TWO REASONS', tone: 'gray' },
            body: [
              { text: '① Substitution effect:', tone: 'slate', bold: true },
              'good becomes expensive relative',
              'to substitutes',
              { text: '② Income effect:', tone: 'slate', bold: true },
              'real purchasing power falls as',
              'price rises'
            ]
          },
          { header: { text: 'AT EQUILIBRIUM', tone: 'gray' },
            body: [ 'Quantity demanded Q₁ at price P₁.' ]
          }
        ]
      },

      /* ---- EXTENSION LEGEND ---- */
      {
        layer: 'layer-legend-extension',
        x: 600,
        y: 72,
        sections: [
          { header: { text: 'MOVEMENT ALONG CURVE', tone: 'amber' },
            body: [
              'Only a price change causes this –',
              'the curve itself stays fixed.'
            ]
          },
          { header: { text: 'CONTRACTION (E₂)', tone: 'red' },
            body: [ 'P rises → Q falls', 'Move up the curve' ]
          },
          { header: { text: 'EXTENSION (E₃)', tone: 'green' },
            body: [ 'P falls → Q rises', 'Move down the curve' ]
          },
          { header: { text: 'EXAM LANGUAGE', tone: 'amber' },
            body: [
              'Say "quantity demanded rises/falls,"',
              'not "demand rises/falls."'
            ]
          }
        ]
      },

      /* ---- SHIFT LEGEND ---- */
      {
        layer: 'layer-legend-shift',
        x: 600,
        y: 72,
        sections: [
          { header: { text: 'SHIFT OF DEMAND', tone: 'green' },
            body: [
              'A non-price determinant changes –',
              'the whole curve moves.'
            ]
          },
          { header: { text: 'D₂ – RIGHT (INCREASE)', tone: 'blue' },
            body: [ '↑ income, ↑ tastes,', '↑ substitute price' ]
          },
          { header: { text: 'D₀ – LEFT (DECREASE)', tone: 'blue' },
            body: [ '↓ income, ↓ tastes,', '↑ complement price' ]
          },
          { header: { text: 'REMEMBER', tone: 'green' },
            body: [ 'Q changes at EVERY price –', 'not just P₁.' ]
          }
        ]
      }
    ]
  };
})();
