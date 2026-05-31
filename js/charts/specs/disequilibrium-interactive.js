/* ============================================================
   Disequilibrium Interactive — engine spec for disequilibriumInteractive.
   Price-determination card 2 (Excess Demand and Excess Supply).

   Layer wiring matches the existing disequilibrium-svg CSS:
     persistent  axes + demand + supply + E (Pₑ, Qₑ)
     base        title strip "Market in equilibrium" + legend
     shortage    P₁ horizontal + 2 dots at (Qs, P₁) and (Qd, P₁) +
                   "Shortage" label + UP price-direction arrow + legend
     surplus     P₂ horizontal + 2 dots at (Qd, P₂) and (Qs, P₂) +
                   "Surplus"  label + DOWN price-direction arrow + legend

   Chart geometry (viewBox 900×440):
     Chart area  x=60..560, y=43..400 → width 500, height 357
     Divider     x=595

   Key chart-space positions (0..1):
     D line     (0.080, 0.868) → (0.860, 0.084)
     S line     (0.080, 0.084) → (0.860, 0.868)
     E (Pₑ,Qₑ)  (0.470, 0.476)
     Shortage   P₁ y=0.252  Qs=0.248  Qd=0.692
     Surplus    P₂ y=0.700  Qd=0.248  Qs=0.692
   ============================================================ */
(function () {
  'use strict';

  var E = { x: 0.470, y: 0.476 };
  var P1_y = 0.252, Qs_short = 0.248, Qd_short = 0.692;
  var P2_y = 0.700, Qd_surp  = 0.248, Qs_surp  = 0.692;

  window.ECONOS_DISEQUILIBRIUM_SPEC = {
    width: 900,
    height: 440,
    chartArea: { x: 60, y: 43, width: 500, height: 357 },
    className: 'disequilibrium-svg',
    background: '#FFFFFF',
    divider: { x: 595, y1: 16, y2: 424 },
    defs:
      '<marker id="dq-up" markerWidth="10" markerHeight="10" refX="3" refY="0" orient="auto"><path d="M0,6 L3,0 L6,6 z" fill="#2563EB"/></marker>' +
      '<marker id="dq-down" markerWidth="10" markerHeight="10" refX="3" refY="6" orient="auto"><path d="M0,0 L3,6 L6,0 z" fill="#D97706"/></marker>',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    curves: [
      { layer: 'layer-demand',
        d: 'M 0.080,0.868 L 0.860,0.084',
        tone: 'blue', label: 'D', strokeWidth: 3.5 },
      { layer: 'layer-supply',
        d: 'M 0.080,0.084 L 0.860,0.868',
        tone: 'amber', label: 'S', strokeWidth: 3.5 }
    ],

    arrows: [
      /* ---- E equilibrium gridlines (persistent) ---- */
      { layer: 'layer-e1',
        x1: 0, y1: E.y, x2: E.x, y2: E.y,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-e1',
        x1: E.x, y1: E.y, x2: E.x, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },

      /* ---- shortage: P₁ horizontal blue + vertical dashes to Q-axis + UP price arrow ---- */
      { layer: 'layer-shortage',
        x1: 0, y1: P1_y, x2: Qd_short, y2: P1_y,
        tone: 'blue', strokeWidth: 2, dashed: '6 4', buffer: 0 },
      { layer: 'layer-shortage',
        x1: Qs_short, y1: P1_y, x2: Qs_short, y2: 0,
        tone: 'slate', strokeWidth: 1.2, dashed: '4 4', buffer: 0 },
      { layer: 'layer-shortage',
        x1: Qd_short, y1: P1_y, x2: Qd_short, y2: 0,
        tone: 'slate', strokeWidth: 1.2, dashed: '4 4', buffer: 0 },
      // Price-direction arrow on the LEFT side of P-axis (outside chart)
      // pointing UP to signal price rising back toward Pₑ
      { layer: 'layer-shortage',
        x1: -0.048, y1: 0.266, x2: -0.048, y2: 0.426,
        tone: 'blue', strokeWidth: 2.5, markerEnd: 'dq-up', buffer: 0 },

      /* ---- surplus: P₂ horizontal amber + vertical dashes + DOWN price arrow ---- */
      { layer: 'layer-surplus',
        x1: 0, y1: P2_y, x2: Qs_surp, y2: P2_y,
        tone: 'amber', strokeWidth: 2, dashed: '6 4', buffer: 0 },
      { layer: 'layer-surplus',
        x1: Qd_surp, y1: P2_y, x2: Qd_surp, y2: 0,
        tone: 'slate', strokeWidth: 1.2, dashed: '4 4', buffer: 0 },
      { layer: 'layer-surplus',
        x1: Qs_surp, y1: P2_y, x2: Qs_surp, y2: 0,
        tone: 'slate', strokeWidth: 1.2, dashed: '4 4', buffer: 0 },
      // DOWN arrow on left to signal price falling back toward Pₑ
      { layer: 'layer-surplus',
        x1: -0.048, y1: 0.686, x2: -0.048, y2: 0.527,
        tone: 'amber', strokeWidth: 2.5, markerEnd: 'dq-down', buffer: 0 }
    ],

    points: [
      // Persistent E equilibrium dot — solid dark
      { layer: 'layer-e1', x: E.x, y: E.y, tone: 'slate', radius: 6.5, label: 'E',
        labelDx: 12, labelDy: -10, anchor: 'start' },

      // Shortage state dots — solid dark on supply and demand curves
      { layer: 'layer-shortage', x: Qs_short, y: P1_y, tone: 'slate', radius: 5.5 },
      { layer: 'layer-shortage', x: Qd_short, y: P1_y, tone: 'slate', radius: 5.5 },

      // Surplus state dots
      { layer: 'layer-surplus', x: Qd_surp, y: P2_y, tone: 'slate', radius: 5.5 },
      { layer: 'layer-surplus', x: Qs_surp, y: P2_y, tone: 'slate', radius: 5.5 },

      // Title-strip dots (one per state)
      { layer: 'layer-base',     x: 0.028, y: 1.031, tone: 'green', radius: 7 },
      { layer: 'layer-shortage', x: 0.028, y: 1.031, tone: 'blue',  radius: 7 },
      { layer: 'layer-surplus',  x: 0.028, y: 1.031, tone: 'amber', radius: 7 }
    ],

    texts: [
      // Persistent E axis tick labels
      { layer: 'layer-e1', x: -0.028, y: E.y,    text: 'Pₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { layer: 'layer-e1', x: E.x,    y: -0.050, text: 'Qₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' },

      // Title strips (one per state)
      { layer: 'layer-base',     x: 0.060, y: 1.017,
        text: 'Market in equilibrium · supply meets demand at E', tone: 'slate', fontSize: 12, anchor: 'start' },
      { layer: 'layer-shortage', x: 0.060, y: 1.017,
        text: 'Excess demand (shortage) · price rises towards Pₑ', tone: 'slate', fontSize: 12, anchor: 'start' },
      { layer: 'layer-surplus',  x: 0.060, y: 1.017,
        text: 'Excess supply (surplus) · price falls towards Pₑ',  tone: 'slate', fontSize: 12, anchor: 'start' },

      // Shortage labels
      { layer: 'layer-shortage', x: -0.028, y: P1_y, text: 'P₁', tone: 'blue', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { layer: 'layer-shortage', x: Qs_short, y: -0.060, text: 'Qs', tone: 'slate', bold: true, italic: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-shortage', x: Qd_short, y: -0.060, text: 'Qd', tone: 'slate', bold: true, italic: true, fontSize: 12, anchor: 'middle' },
      // Big "Shortage" callout between the two dots
      { layer: 'layer-shortage', x: 0.470, y: 0.190, text: 'Shortage', tone: 'blue', bold: true, fontSize: 13, anchor: 'middle' },

      // Surplus labels
      { layer: 'layer-surplus', x: -0.028, y: P2_y, text: 'P₂', tone: 'amber', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { layer: 'layer-surplus', x: Qd_surp, y: -0.060, text: 'Qd', tone: 'slate', bold: true, italic: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-surplus', x: Qs_surp, y: -0.060, text: 'Qs', tone: 'slate', bold: true, italic: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-surplus', x: 0.470, y: 0.768, text: 'Surplus', tone: 'amber', bold: true, fontSize: 13, anchor: 'middle' }
    ],

    legends: [
      /* ---- BASE LEGEND ---- */
      {
        layer: 'layer-base',
        x: 600, y: 72,
        sections: [
          { header: { text: 'EQUILIBRIUM', tone: 'green' },
            body: [
              'At E: Qd = Qs.',
              'No shortage, no surplus.',
              'No tendency for price to change.'
            ]
          },
          { header: { text: 'DISTURB IT…', tone: 'gray' },
            body: [
              'Tap "Excess demand" to see what',
              'happens below Pₑ.',
              'Tap "Excess supply" to see what',
              'happens above Pₑ.'
            ]
          }
        ]
      },

      /* ---- SHORTAGE LEGEND ---- */
      {
        layer: 'layer-shortage',
        x: 600, y: 72,
        sections: [
          { header: { text: 'EXCESS DEMAND', tone: 'blue' },
            body: [
              'Price P₁ is below Pₑ.',
              { text: 'Qd > Qs → shortage.', tone: 'slate', bold: true },
              'Buyers compete for limited',
              'stock → bid the price up.',
              'Rising price reduces Qd and',
              'expands Qs → returns to E.'
            ]
          }
        ]
      },

      /* ---- SURPLUS LEGEND ---- */
      {
        layer: 'layer-surplus',
        x: 600, y: 72,
        sections: [
          { header: { text: 'EXCESS SUPPLY', tone: 'amber' },
            body: [
              'Price P₂ is above Pₑ.',
              { text: 'Qs > Qd → surplus.', tone: 'slate', bold: true },
              'Sellers with unsold stock cut',
              'prices to clear inventory.',
              'Falling price raises Qd and',
              'contracts Qs → returns to E.'
            ]
          }
        ]
      }
    ]
  };
})();
