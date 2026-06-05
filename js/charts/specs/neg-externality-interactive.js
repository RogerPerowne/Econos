/* ============================================================
   Negative Externality Interactive – engine spec for
   negExternalityInteractive. Negative-externalities card 2.
   "The most important diagram in market failure" per the lede.

   Layer wiring matches the existing negext-svg CSS:
     always       layer-axes + layer-base-curves + layer-market-eq
     base         + layer-legend-base
     extension    + layer-msc + layer-mec + layer-legend-extension
     shift        + layer-msc + layer-optimal + layer-legend-shift
     efficiency   + layer-msc + layer-optimal + layer-dwl + layer-legend-efficiency

   Chart geometry (viewBox 900×440):
     Chart area   x=60..560, y=43..400 → width 500, height 357
     Divider      x=595
   Chart-space positions:
     MPC          (0.080, 0.084) → (0.860, 0.868)  (green upward = supply)
     D = MSB      (0.080, 0.868) → (0.860, 0.084)  (amber downward = demand)
     MSC          (0.080, 0.308) → (0.860, 1.092)  (blue dashed, parallel above MPC)
     E_market     (0.470, 0.476)  – MPC meets MSB
     E*           (0.358, 0.588)  – MSC meets MSB
     MEC bracket  at chart-x 0.680 between MPC (y=0.910) and MSC (y=0.686)
     DWL apex     E*, top corner (Q_m, MSC@Q_m)=(0.470, 0.700), bot E_market
   ============================================================ */
(function () {
  'use strict';

  var Em = { x: 0.470, y: 0.476 };
  var Eopt = { x: 0.358, y: 0.588 };
  // MSC at Q_m (i.e. at chart-x = Em.x)
  var MscAtQm = { x: 0.470, y: 0.700 };
  // MEC bracket position (vertical bar between MPC and MSC at chart-x 0.680)
  var MecBracket = { x: 0.680, yMpc: 0.910, yMsc: 0.686 };

  window.ECONOS_NEG_EXTERNALITY_SPEC = {
    // Side-legend → HTML-below: see ppf-card1.js for the rationale.
    legendPosition: 'bottom',
    height: 440,
    chartArea: { x: 60, y: 43, width: 500, height: 357 },
    className: 'negext-svg',
    background: '#FFFFFF',
    axes: {
      x: { label: 'Q' },
      y: { label: 'P' }
    },

    /* Always-visible base curves. All label positions UNSET so the
     * auto-placer (v0.41.18+) handles them. */
    curves: [
      { layer: 'layer-base-curves',
        d: 'M 0.080,0.868 L 0.860,0.084',
        tone: 'amber', label: 'D = MSB', strokeWidth: 3 },
      { layer: 'layer-base-curves',
        d: 'M 0.080,0.084 L 0.860,0.868',
        tone: 'green', label: 'MPC', strokeWidth: 3 },
      // MSC (blue dashed) – visible in extension/shift/efficiency.
      { layer: 'layer-msc',
        d: 'M 0.080,0.308 L 0.860,1.092',
        tone: 'blue', label: 'MSC', strokeWidth: 3, dashed: '9 5' }
    ],

    arrows: [
      // Market eq gridlines (always visible)
      { layer: 'layer-market-eq',
        x1: 0, y1: Em.y, x2: Em.x, y2: Em.y,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-market-eq',
        x1: Em.x, y1: Em.y, x2: Em.x, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },

      // MEC indicator – thick vertical purple bar between MPC and MSC.
      // The end-cap "tick" lines from the legacy version were dropped
      // because they form 90° corners with the main bar that read as
      // a bent arrow rather than a measurement bracket. The bar plus
      // the "MEC" label beside it communicates the same vertical gap
      // without the visual ambiguity.
      { layer: 'layer-mec',
        x1: MecBracket.x, y1: MecBracket.yMpc, x2: MecBracket.x, y2: MecBracket.yMsc,
        tone: 'purple', strokeWidth: 3, buffer: 0 },

      // Optimal point gridlines (shift + efficiency)
      { layer: 'layer-optimal',
        x1: 0, y1: Eopt.y, x2: Eopt.x, y2: Eopt.y,
        tone: 'green', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-optimal',
        x1: Eopt.x, y1: Eopt.y, x2: Eopt.x, y2: 0,
        tone: 'green', strokeWidth: 1.5, dashed: '5 4', buffer: 0 }
    ],

    polygons: [
      // DWL triangle (efficiency only)
      { layer: 'layer-dwl',
        points: [[Eopt.x, Eopt.y], [MscAtQm.x, MscAtQm.y], [Em.x, Em.y]],
        fill: '#FEE2E2', opacity: 0.75 }
    ],

    points: [
      // Market equilibrium – red hollow (always visible)
      { layer: 'layer-market-eq',
        x: Em.x, y: Em.y, tone: 'red', radius: 6, hollow: true,
        label: 'Eₘ', labelDx: 12, labelDy: -4, anchor: 'start' },
      // Socially optimal equilibrium – green hollow
      { layer: 'layer-optimal',
        x: Eopt.x, y: Eopt.y, tone: 'green', radius: 7, hollow: true,
        label: 'E*', labelDx: 0, labelDy: -16, anchor: 'middle' },
    ],

    // titleStrips removed (v0.41.20). Each was a single dot + text
    // header – a one-entry "legend" in the user's sense: a coloured
    // dot referring to one thing, with the text repeating the lede
    // of the card. Per the universal rule, single-entry legends are
    // always redundant and come out. The four headers ("Free market
    // equilibrium: MPC = MSB", "Production imposes external costs →
    // MSC sits above MPC", etc.) live in the card body anyway.
    texts: [
      // Persistent Eₘ axis tick labels
      { layer: 'layer-market-eq', x: -0.028, y: Em.y,    text: 'Pₘ', tone: 'red', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-market-eq', x: Em.x,    y: -0.050, text: 'Qₘ', tone: 'red', bold: true, fontSize: 12, anchor: 'middle' },

      // MEC text label next to bracket
      { layer: 'layer-mec', x: MecBracket.x + 0.024, y: (MecBracket.yMpc + MecBracket.yMsc) / 2,
        text: 'MEC', tone: 'purple', bold: true, fontSize: 13, anchor: 'start' },

      // E* axis tick labels
      { layer: 'layer-optimal', x: -0.028, y: Eopt.y,    text: 'P*', tone: 'green', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-optimal', x: Eopt.x,  y: -0.050,   text: 'Q*', tone: 'green', bold: true, fontSize: 12, anchor: 'middle' },

      // DWL label inside red triangle
      { layer: 'layer-dwl', x: (Eopt.x + MscAtQm.x + Em.x) / 3 + 0.020, y: (Eopt.y + MscAtQm.y + Em.y) / 3,
        text: 'DWL', tone: 'red', bold: true, fontSize: 13, anchor: 'middle' }
    ],

    legends: [
      /* ─── BASE LEGEND ─── */
      /* Each body entry is now ONE complete short sentence, so the
       * narrow HTML legend column wraps cleanly instead of breaking
       * mid-phrase. The old "what each curve means" section was a
       * straight duplicate of the on-chart D=MSB / MPC labels and is
       * gone; the analysis panel below carries the teaching prose. */
      {
        layer: 'layer-legend-base',
        x: 600, y: 65,
        sections: [
          { header: { text: 'FREE MARKET OUTCOME', tone: 'red' },
            body: [
              'MPC (supply) meets D = MSB (demand) at the market equilibrium Eₘ.',
              { text: 'Output Qₘ · Price Pₘ', tone: 'slate', bold: true }
            ]
          },
          { header: { text: 'THE BLIND SPOT', tone: 'gray' },
            body: [
              'This price reflects only the firm\'s own cost – the harm done to third parties stays invisible.'
            ]
          }
        ]
      },

      /* ─── EXTENSION LEGEND ─── */
      {
        layer: 'layer-legend-extension',
        x: 600, y: 65,
        sections: [
          { header: { text: 'MSC = MPC + MEC', tone: 'purple' },
            body: [
              'MSC stacks the cost imposed on third parties on top of the firm\'s private cost.'
            ]
          },
          { header: { text: 'THE GAP', tone: 'purple' },
            body: [
              { text: 'Vertical gap = MEC', tone: 'slate', bold: true },
              'The marginal external cost – pollution, noise, CO₂. Producers don\'t pay it, so they over-produce.'
            ]
          }
        ]
      },

      /* ─── SHIFT LEGEND ─── */
      {
        layer: 'layer-legend-shift',
        x: 600, y: 65,
        sections: [
          { header: { text: 'THE SOCIAL OPTIMUM', tone: 'green' },
            body: [
              'Welfare is highest where MSC = MSB, at E* (Q*, P*).'
            ]
          },
          { header: { text: 'OPTIMUM vs MARKET', tone: 'gray' },
            body: [
              { text: 'Q* < Qₘ  and  P* > Pₘ', tone: 'slate', bold: true },
              'Society wants less output at a higher price; the market over-produces by Qₘ − Q*.'
            ]
          }
        ]
      },

      /* ─── EFFICIENCY LEGEND ─── */
      {
        layer: 'layer-legend-efficiency',
        x: 600, y: 65,
        sections: [
          { header: { text: 'DEADWEIGHT WELFARE LOSS', tone: 'red' },
            body: [
              'The red triangle between Q* and Qₘ – bounded above by MSC, below by MSB.',
              { text: 'Each extra unit: MSC > MSB', tone: 'slate', bold: true }
            ]
          },
          { header: { text: 'THE FIX', tone: 'red' },
            body: [
              'A Pigouvian tax = MEC at Q* shifts MPC up to MSC and erases the loss.'
            ]
          }
        ]
      }
    ]
  };
})();
