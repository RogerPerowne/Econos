/* ============================================================
   Negative Externality Interactive — engine spec for
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
    width: 900,
    height: 440,
    chartArea: { x: 60, y: 43, width: 500, height: 357 },
    className: 'negext-svg',
    background: '#FFFFFF',
    divider: { x: 595, y1: 16, y2: 424 },
    axes: {
      x: { label: 'Q' },
      y: { label: 'P' }
    },

    /* Always-visible base curves */
    curves: [
      { layer: 'layer-base-curves',
        d: 'M 0.080,0.868 L 0.860,0.084',
        tone: 'amber', label: 'D = MSB', strokeWidth: 3, labelDx: 8, labelDy: 4 },
      { layer: 'layer-base-curves',
        d: 'M 0.080,0.084 L 0.860,0.868',
        tone: 'green', label: 'MPC', strokeWidth: 3, labelDx: 8, labelDy: -4 },
      // MSC (blue dashed) — visible in extension/shift/efficiency.
      // Curve extends past chart top (auto-clipped); label offset back
      // toward the chart so it sits just above the visible end, not
      // floating in the title-strip area.
      { layer: 'layer-msc',
        d: 'M 0.080,0.308 L 0.860,1.092',
        tone: 'blue', label: 'MSC', strokeWidth: 3, dashed: '9 5', labelDx: -38, labelDy: 24 }
    ],

    arrows: [
      // Market eq gridlines (always visible)
      { layer: 'layer-market-eq',
        x1: 0, y1: Em.y, x2: Em.x, y2: Em.y,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-market-eq',
        x1: Em.x, y1: Em.y, x2: Em.x, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },

      // MEC indicator — thick vertical purple bar between MPC and MSC.
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
      // Market equilibrium — red hollow (always visible)
      { layer: 'layer-market-eq',
        x: Em.x, y: Em.y, tone: 'red', radius: 6, hollow: true,
        label: 'E_market', labelDx: 12, labelDy: -4, anchor: 'start' },
      // Socially optimal equilibrium — green hollow
      { layer: 'layer-optimal',
        x: Eopt.x, y: Eopt.y, tone: 'green', radius: 7, hollow: true,
        label: 'E*', labelDx: 0, labelDy: -16, anchor: 'middle' },

      // Title-strip dots
      { layer: 'layer-legend-base',       x: 0.028, y: 1.031, tone: 'red',    radius: 7 },
      { layer: 'layer-legend-extension',  x: 0.028, y: 1.031, tone: 'purple', radius: 7 },
      { layer: 'layer-legend-shift',      x: 0.028, y: 1.031, tone: 'green',  radius: 7 },
      { layer: 'layer-legend-efficiency', x: 0.028, y: 1.031, tone: 'red',    radius: 7 }
    ],

    texts: [
      // Persistent E_market axis tick labels
      { layer: 'layer-market-eq', x: -0.028, y: Em.y,    text: 'P_m', tone: 'red', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-market-eq', x: Em.x,    y: -0.050, text: 'Q_m', tone: 'red', bold: true, fontSize: 12, anchor: 'middle' },

      // MEC text label next to bracket
      { layer: 'layer-mec', x: MecBracket.x + 0.024, y: (MecBracket.yMpc + MecBracket.yMsc) / 2,
        text: 'MEC', tone: 'purple', bold: true, fontSize: 13, anchor: 'start' },

      // E* axis tick labels
      { layer: 'layer-optimal', x: -0.028, y: Eopt.y,    text: 'P*', tone: 'green', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-optimal', x: Eopt.x,  y: -0.050,   text: 'Q*', tone: 'green', bold: true, fontSize: 12, anchor: 'middle' },

      // DWL label inside red triangle
      { layer: 'layer-dwl', x: (Eopt.x + MscAtQm.x + Em.x) / 3 + 0.020, y: (Eopt.y + MscAtQm.y + Em.y) / 3,
        text: 'DWL', tone: 'red', bold: true, fontSize: 13, anchor: 'middle' },

      // Title strips per state
      { layer: 'layer-legend-base',       x: 0.060, y: 1.017,
        text: 'Free market equilibrium: MPC = MSB', tone: 'slate', fontSize: 12, anchor: 'start' },
      { layer: 'layer-legend-extension',  x: 0.060, y: 1.017,
        text: 'Production imposes external costs → MSC sits above MPC', tone: 'slate', fontSize: 12, anchor: 'start' },
      { layer: 'layer-legend-shift',      x: 0.060, y: 1.017,
        text: 'Socially optimal output: where MSC = MSB', tone: 'slate', fontSize: 12, anchor: 'start' },
      { layer: 'layer-legend-efficiency', x: 0.060, y: 1.017,
        text: 'Overproduction → deadweight welfare loss triangle', tone: 'slate', fontSize: 12, anchor: 'start' }
    ],

    legends: [
      /* ─── BASE LEGEND ─── */
      {
        layer: 'layer-legend-base',
        x: 600, y: 65,
        sections: [
          { header: { text: 'FREE MARKET OUTCOME', tone: 'red' },
            body: [
              'Producers maximise profit at',
              'MPC = MSB → equilibrium at',
              { text: '(Q_m, P_m).', tone: 'slate', bold: true }
            ]
          },
          { header: { text: 'WHAT EACH CURVE MEANS', tone: 'gray' },
            body: [
              { text: 'D = MSB', tone: 'amber', bold: true },
              'Marginal social benefit – value',
              'to society of one more unit.',
              { text: 'MPC', tone: 'green', bold: true },
              'Marginal private cost – what',
              'the firm itself pays.'
            ]
          },
          { header: { text: 'BUT THIS IGNORES…', tone: 'red' },
            body: [
              'External costs on third parties',
              '(pollution, congestion).'
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
              'MSC adds the cost imposed on',
              'third parties to private cost.',
              { text: 'Vertical gap = MEC', tone: 'slate', bold: true },
              '(marginal external cost)'
            ]
          },
          { header: { text: 'EXAMPLES OF MEC', tone: 'gray' },
            body: [
              'Air pollution from a factory',
              'Noise from late-night venues',
              'Congestion from extra cars',
              'CO₂ emissions from cement'
            ]
          },
          { header: { text: 'THE PROBLEM', tone: 'purple' },
            body: [
              'Producers don\'t pay MEC, so',
              'they produce too much.'
            ]
          }
        ]
      },

      /* ─── SHIFT LEGEND ─── */
      {
        layer: 'layer-legend-shift',
        x: 600, y: 65,
        sections: [
          { header: { text: 'THE OPTIMUM', tone: 'green' },
            body: [
              'Society maximises welfare',
              'where MSC = MSB at',
              { text: '(Q*, P*).', tone: 'green', bold: true }
            ]
          },
          { header: { text: 'COMPARISON', tone: 'gray' },
            body: [
              { text: 'Q* < Q_m', tone: 'slate', bold: true },
              'Society wants less output.',
              { text: 'P* > P_m', tone: 'slate', bold: true },
              'Optimal price is higher.'
            ]
          },
          { header: { text: 'FREE MARKET FAILS', tone: 'green' },
            body: [
              'Without intervention the market',
              'overproduces by (Q_m − Q*).'
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
              'Shaded triangle between Q*',
              'and Q_m, bounded above by',
              'MSC and below by MSB.',
              { text: 'For each over-produced unit:', tone: 'slate', bold: true },
              'MSC > MSB → society loses',
              '(MSC − MSB) of welfare.'
            ]
          },
          { header: { text: 'POLICY RESPONSE', tone: 'red' },
            body: [
              'A Pigouvian tax = MEC at Q*',
              'internalises the externality',
              'and eliminates the DWL.'
            ]
          },
          { header: { text: 'EXAM TECHNIQUE', tone: 'gray' },
            body: [
              'Label all six: D=MSB, MPC,',
              'MSC, E_m, E*, DWL.'
            ]
          }
        ]
      }
    ]
  };
})();
