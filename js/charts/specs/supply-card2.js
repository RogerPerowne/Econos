/* ============================================================
   Supply card 2 — declarative spec for supplyInteractive.
   Movement Along vs Shift of the Supply Curve. Structural mirror
   of demand card 2 but with an UPWARD-sloping S curve and red tone.

   Layer wiring matches the existing supply-svg CSS:
     base       S₁ + E₁ + base legend
     extension  S₁ + E₁ + E₂ extension (up-right, green) + E₃
                  contraction (down-left, red) + amber arrow
     shift      S₁ dashed faded + S₀ + S₂ + Q₀/Q₁/Q₂ markers +
                  single-colour shift arrows (green right = increase,
                  red left = decrease)

   Chart geometry (viewBox 900×440):
     Chart area   x=60..560, y=43..400 → width 500, height 357
     Divider      x=595
     S₁ line      (0.080, 0.084) → (0.860, 0.868)  – UP-right
     E₁ at P₁,Q₁  (0.470, 0.476)
     E₂ extend    (0.636, 0.644)  – price up, q up (green)
     E₃ contract  (0.288, 0.294)  – price down, q down (red)
     S₀ left      (-0.060, 0.084) → (0.720, 0.868)
     S₂ right     (0.220, 0.084) → (1.000, 0.868)
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_SUPPLY_CARD2_SPEC = {
    width: 900,
    height: 440,
    chartArea: { x: 60, y: 43, width: 500, height: 357 },
    className: 'supply-svg',
    background: '#F8FAFC',
    divider: { x: 595, y1: 16, y2: 424 },
    defs:
      '<marker id="sp-amber-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#D97706"/></marker>' +
      '<marker id="sp-amber-start" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto"><path d="M8,0 L8,6 L0,3 z" fill="#D97706"/></marker>' +
      '<marker id="sp-green-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>' +
      '<marker id="sp-red-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#DC2626"/></marker>',
    axes: {
      x: { label: 'Q' },
      y: { label: 'P' }
    },

    curves: [
      // Base S₁ — always visible except in shift state (CSS hides layer-supply-base)
      { layer: 'layer-supply-base',
        d: 'M 0.080,0.084 L 0.860,0.868',
        tone: 'red', label: 'S₁', strokeWidth: 3.5 },
      // Shift-state S₁ — same line dashed/faded
      { layer: 'layer-shift',
        d: 'M 0.080,0.084 L 0.860,0.868',
        tone: 'red', strokeWidth: 2, dashed: '9 5', opacity: 0.55 },
      // Shift S₀ left
      { layer: 'layer-shift',
        d: 'M -0.060,0.084 L 0.720,0.868',
        tone: 'red', label: 'S₀', strokeWidth: 2.5, labelDx: 8 },
      // Shift S₂ right
      { layer: 'layer-shift',
        d: 'M 0.220,0.084 L 1.000,0.868',
        tone: 'red', label: 'S₂', strokeWidth: 2.5, labelDx: 8 }
    ],

    arrows: [
      /* ---- base: E₁ gridlines ---- */
      { layer: 'layer-e1',
        x1: 0, y1: 0.476, x2: 0.470, y2: 0.476,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-e1',
        x1: 0.470, y1: 0.476, x2: 0.470, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },

      /* ---- extension: E₂ extension (up-right) + E₃ contraction (down-left) ---- */
      // E₂ extension horiz + vert
      { layer: 'layer-extension',
        x1: 0, y1: 0.644, x2: 0.636, y2: 0.644,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-extension',
        x1: 0.636, y1: 0.644, x2: 0.636, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      // E₃ contraction horiz + vert
      { layer: 'layer-extension',
        x1: 0, y1: 0.294, x2: 0.288, y2: 0.294,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-extension',
        x1: 0.288, y1: 0.294, x2: 0.288, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      // Amber double-headed arrow along S₁ from E₃ to E₂ (up-right)
      { layer: 'layer-extension',
        x1: 0.300, y1: 0.308, x2: 0.622, y2: 0.628,
        tone: 'amber', strokeWidth: 2.5,
        markerStart: 'sp-amber-start', markerEnd: 'sp-amber-end', buffer: 0 },

      /* ---- shift: Q₀ + Q₂ vert gridlines + single-colour horiz arrows ---- */
      { layer: 'layer-shift',
        x1: 0.330, y1: 0.476, x2: 0.330, y2: 0,
        tone: 'red', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-shift',
        x1: 0.610, y1: 0.476, x2: 0.610, y2: 0,
        tone: 'green', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      // Green Q₁ → Q₂ rightward (increase)
      { layer: 'layer-shift',
        x1: 0.480, y1: 0.476, x2: 0.602, y2: 0.476,
        tone: 'green', strokeWidth: 3.5, markerEnd: 'sp-green-end', buffer: 0 },
      // Red Q₁ → Q₀ leftward (decrease)
      { layer: 'layer-shift',
        x1: 0.460, y1: 0.476, x2: 0.338, y2: 0.476,
        tone: 'red', strokeWidth: 3.5, markerEnd: 'sp-red-end', buffer: 0 }
    ],

    points: [
      /* ---- base ---- */
      { layer: 'layer-e1', x: 0.470, y: 0.476, tone: 'red', radius: 6, hollow: true },

      /* ---- extension ---- */
      { layer: 'layer-extension', x: 0.636, y: 0.644, tone: 'green', radius: 6, hollow: true },
      { layer: 'layer-extension', x: 0.288, y: 0.294, tone: 'red',   radius: 6, hollow: true },

      /* ---- shift ---- */
      { layer: 'layer-shift', x: 0.330, y: 0.476, tone: 'red',   radius: 6, hollow: true },
      { layer: 'layer-shift', x: 0.470, y: 0.476, tone: 'slate', radius: 4 },
      { layer: 'layer-shift', x: 0.610, y: 0.476, tone: 'green', radius: 6, hollow: true },

      /* ---- title-strip dots ---- */
      { layer: 'layer-legend-base', x: 0.028, y: 1.031, tone: 'red',   radius: 7 },
      { layer: 'layer-extension',   x: 0.028, y: 1.031, tone: 'amber', radius: 7 },
      { layer: 'layer-shift',       x: 0.028, y: 1.031, tone: 'green', radius: 7 }
    ],

    texts: [
      // Title strips
      { layer: 'layer-legend-base', x: 0.060, y: 1.017,
        text: 'Supply slopes upward · higher prices incentivise more production',
        tone: 'slate', fontSize: 12, anchor: 'start' },
      { layer: 'layer-extension', x: 0.060, y: 1.017,
        text: 'Price changes → slide ALONG the supply curve',
        tone: 'slate', fontSize: 12, anchor: 'start' },
      { layer: 'layer-shift', x: 0.060, y: 1.017,
        text: 'Non-price factors → SHIFT the whole supply curve',
        tone: 'slate', fontSize: 12, anchor: 'start' },

      // Base axis tick labels
      { layer: 'layer-e1', x: -0.028, y: 0.476, text: 'P₁', tone: 'slate', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-e1', x: 0.470, y: -0.050, text: 'Q₁', tone: 'slate', bold: true, fontSize: 12, anchor: 'middle' },

      // Extension labels
      { layer: 'layer-extension', x: -0.028, y: 0.644, text: 'P₂', tone: 'green', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-extension', x: 0.636,  y: -0.050, text: 'Q₂', tone: 'green', bold: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-extension', x: -0.028, y: 0.294, text: 'P₃', tone: 'red', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-extension', x: 0.288,  y: -0.050, text: 'Q₃', tone: 'red', bold: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-extension', x: 0.652,  y: 0.678,  text: 'extension',   tone: 'green', bold: true, fontSize: 11, anchor: 'start' },
      { layer: 'layer-extension', x: 0.180,  y: 0.238,  text: 'contraction', tone: 'red',   bold: true, fontSize: 11, anchor: 'start' },

      // Shift labels
      { layer: 'layer-shift', x: 0.880, y: 0.874, text: 'S₁', tone: 'red', bold: true, fontSize: 13, anchor: 'start', opacity: 0.55 },
      { layer: 'layer-shift', x: 0.330, y: -0.050, text: 'Q₀', tone: 'red',   bold: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-shift', x: 0.470, y: -0.050, text: 'Q₁', tone: 'slate', bold: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-shift', x: 0.610, y: -0.050, text: 'Q₂', tone: 'green', bold: true, fontSize: 12, anchor: 'middle' }
    ],

    legends: [
      /* ---- BASE LEGEND ---- */
      {
        layer: 'layer-legend-base',
        x: 600, y: 72,
        sections: [
          { header: { text: 'THE SUPPLY CURVE', tone: 'red' },
            body: [
              { text: 'Upward sloping: higher prices', tone: 'slate', bold: true },
              { text: 'make production more profitable', tone: 'slate', bold: true },
              { text: '→ more is supplied.', tone: 'slate', bold: true }
            ]
          },
          { header: { text: 'WHY IT SLOPES UP', tone: 'gray' },
            body: [
              { text: '① Profit motive:', tone: 'slate', bold: true },
              'higher prices cover rising',
              'marginal costs',
              { text: '② New entrants:', tone: 'slate', bold: true },
              'higher prices attract new firms',
              'into the market'
            ]
          },
          { header: { text: 'AT EQUILIBRIUM', tone: 'gray' },
            body: [ 'Quantity supplied Q₁ at price P₁.' ]
          }
        ]
      },

      /* ---- EXTENSION LEGEND ---- */
      {
        layer: 'layer-legend-extension',
        x: 600, y: 72,
        sections: [
          { header: { text: 'MOVEMENT ALONG CURVE', tone: 'amber' },
            body: [ 'Only a price change causes this.' ]
          },
          { header: { text: 'EXTENSION (E₂)', tone: 'green' },
            body: [ 'P rises → Q supplied rises', 'Move up the curve.' ]
          },
          { header: { text: 'CONTRACTION (E₃)', tone: 'red' },
            body: [ 'P falls → Q supplied falls', 'Move down the curve.' ]
          },
          { header: { text: 'EXAM LANGUAGE', tone: 'amber' },
            body: [
              'Say "quantity supplied rises/falls,"',
              'not "supply rises/falls."'
            ]
          }
        ]
      },

      /* ---- SHIFT LEGEND ---- */
      {
        layer: 'layer-legend-shift',
        x: 600, y: 72,
        sections: [
          { header: { text: 'SHIFT OF SUPPLY', tone: 'green' },
            body: [
              'A non-price determinant changes –',
              'the whole curve moves.'
            ]
          },
          { header: { text: 'S₂ – RIGHT (INCREASE)', tone: 'red' },
            body: [
              'Lower costs / Better technology /',
              'More producers / Subsidies'
            ]
          },
          { header: { text: 'S₀ – LEFT (DECREASE)', tone: 'red' },
            body: [
              'Higher wages / Input price rise /',
              'New tax / Supply shock'
            ]
          },
          { header: { text: 'REMEMBER', tone: 'green' },
            body: [
              'At every price, more (S₂) or less',
              '(S₀) is supplied.'
            ]
          }
        ]
      }
    ]
  };
})();
