/* ============================================================
   Positive Externality Interactive — engine spec for
   posExternalityInteractive. Positive-externalities card.

   Mirror image of negExternalityInteractive: MSB sits ABOVE MPB
   (rather than MSC above MPC), and the welfare gap is a forgone
   gain at Q_m < Q*, not a DWL from over-production.

   Layer wiring matches posext-svg CSS:
     always       layer-axes + layer-base-curves + layer-market-eq
     base         + layer-legend-base
     extension    + layer-msb + layer-meb + layer-legend-extension
     shift        + layer-msb + layer-optimal + layer-legend-shift
     efficiency   + layer-msb + layer-optimal + layer-wfg + layer-legend-efficiency

   Chart-space positions:
     MPB (D)      (0.080, 0.560) → (0.860, 0.056)  (shallow downward)
     MPC=MSC      (0.080, 0.084) → (0.860, 0.868)  (upward supply)
     MSB          (0.080, 0.756) → (0.860, 0.252)  (parallel above MPB)
     E_market     (0.368, 0.373)  – MPC meets MPB
     E*           (0.486, 0.493)  – MSC meets MSB  (RIGHT of E_market)
     MEB bracket  at chart-x 0.640 between MPB (y=0.199) and MSB (y=0.395)
     Welfare-gain triangle: E_market, E*, MSB@Q_m (0.368, 0.569)
   ============================================================ */
(function () {
  'use strict';

  var Em   = { x: 0.368, y: 0.373 };
  var Eopt = { x: 0.486, y: 0.493 };
  var MsbAtQm = { x: 0.368, y: 0.569 };
  var MebBracket = { x: 0.640, yMpb: 0.199, yMsb: 0.395 };

  window.ECONOS_POS_EXTERNALITY_SPEC = {
    // Side-legend → HTML-below: see ppf-card1.js for the rationale.
    legendPosition: 'bottom',
    height: 440,
    chartArea: { x: 60, y: 43, width: 500, height: 357 },
    className: 'posext-svg',
    background: '#FFFFFF',
    axes: {
      x: { label: 'Q' },
      y: { label: 'P' }
    },

    curves: [
      { layer: 'layer-base-curves',
        d: 'M 0.080,0.560 L 0.860,0.056',
        tone: 'amber', label: 'D = MPB', strokeWidth: 3, labelDx: 8, labelDy: 4 },
      { layer: 'layer-base-curves',
        d: 'M 0.080,0.084 L 0.860,0.868',
        tone: 'green', label: 'MPC = MSC', strokeWidth: 3, labelDx: 8, labelDy: -4 },
      // MSB (blue dashed) — visible in extension/shift/efficiency.
      // Curve labelled near its right end inside the chart.
      { layer: 'layer-msb',
        d: 'M 0.080,0.756 L 0.860,0.252',
        tone: 'blue', label: 'MSB', strokeWidth: 3, dashed: '9 5', labelDx: 8, labelDy: 4 }
    ],

    arrows: [
      // Market eq gridlines (always)
      { layer: 'layer-market-eq',
        x1: 0, y1: Em.y, x2: Em.x, y2: Em.y,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-market-eq',
        x1: Em.x, y1: Em.y, x2: Em.x, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },

      // MEB indicator — thick vertical purple bar between MPB and MSB.
      // End-cap "ticks" dropped to avoid forming 90° corners that read
      // as a bent arrow.
      { layer: 'layer-meb',
        x1: MebBracket.x, y1: MebBracket.yMpb, x2: MebBracket.x, y2: MebBracket.yMsb,
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
      // Welfare-gain triangle (efficiency only) — vertices: E_market, E*, MSB@Q_m
      { layer: 'layer-wfg',
        points: [[Em.x, Em.y], [Eopt.x, Eopt.y], [MsbAtQm.x, MsbAtQm.y]],
        fill: '#DCFCE7', opacity: 0.85 }
    ],

    points: [
      // Market equilibrium — red hollow (always)
      { layer: 'layer-market-eq',
        x: Em.x, y: Em.y, tone: 'red', radius: 6, hollow: true,
        label: 'E_market', labelDx: 12, labelDy: -4, anchor: 'start' },
      // Socially optimal equilibrium — green hollow
      { layer: 'layer-optimal',
        x: Eopt.x, y: Eopt.y, tone: 'green', radius: 7, hollow: true,
        label: 'E*', labelDx: 0, labelDy: -16, anchor: 'middle' },

    ],

    titleStrips: [
      { layer: 'layer-legend-base',       tone: 'red',
        text: 'Free market equilibrium: MPC = MPB' },
      { layer: 'layer-legend-extension',  tone: 'purple',
        text: 'Consumption creates external benefits → MSB sits above MPB' },
      { layer: 'layer-legend-shift',      tone: 'green',
        text: 'Socially optimal output: where MSB = MSC' },
      { layer: 'layer-legend-efficiency', tone: 'green',
        text: 'Under-consumption → welfare gain triangle forgone' }
    ],

    texts: [
      // Persistent market-eq axis tick labels
      { layer: 'layer-market-eq', x: -0.028, y: Em.y,    text: 'P_m', tone: 'red', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-market-eq', x: Em.x,    y: -0.050, text: 'Q_m', tone: 'red', bold: true, fontSize: 12, anchor: 'middle' },

      // MEB label next to bracket
      { layer: 'layer-meb', x: MebBracket.x + 0.024, y: (MebBracket.yMpb + MebBracket.yMsb) / 2,
        text: 'MEB', tone: 'purple', bold: true, fontSize: 13, anchor: 'start' },

      // E* tick labels
      { layer: 'layer-optimal', x: -0.028, y: Eopt.y,    text: 'P*', tone: 'green', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-optimal', x: Eopt.x,  y: -0.050,   text: 'Q*', tone: 'green', bold: true, fontSize: 12, anchor: 'middle' },

      // Welfare-gain label inside green triangle
      { layer: 'layer-wfg', x: (Em.x + Eopt.x + MsbAtQm.x) / 3 + 0.020, y: (Em.y + Eopt.y + MsbAtQm.y) / 3,
        text: 'Welfare gain', tone: 'green', bold: true, fontSize: 11, anchor: 'middle' }
    ],

    legends: [
      /* ─── BASE LEGEND ─── */
      {
        layer: 'layer-legend-base',
        x: 600, y: 65,
        sections: [
          { header: { text: 'FREE MARKET OUTCOME', tone: 'red' },
            body: [
              'Consumers maximise utility at',
              'MPC = MPB → equilibrium at',
              { text: '(Q_m, P_m).', tone: 'slate', bold: true }
            ]
          },
          { header: { text: 'WHAT EACH CURVE MEANS', tone: 'gray' },
            body: [
              { text: 'D = MPB', tone: 'amber', bold: true },
              'Marginal private benefit – value to',
              'the consumer of one more unit.',
              { text: 'MPC = MSC', tone: 'green', bold: true },
              'Same private and social cost',
              '(no production externality).'
            ]
          },
          { header: { text: 'BUT THIS IGNORES…', tone: 'red' },
            body: [
              'External benefits to third parties',
              '(herd immunity, productivity).'
            ]
          }
        ]
      },

      /* ─── EXTENSION LEGEND ─── */
      {
        layer: 'layer-legend-extension',
        x: 600, y: 65,
        sections: [
          { header: { text: 'MSB = MPB + MEB', tone: 'purple' },
            body: [
              'MSB adds the benefit enjoyed by',
              'third parties to private benefit.',
              { text: 'Vertical gap = MEB', tone: 'slate', bold: true },
              '(marginal external benefit)'
            ]
          },
          { header: { text: 'EXAMPLES OF MEB', tone: 'gray' },
            body: [
              'Herd immunity from vaccination',
              'Productivity from education',
              'Lower crime from schooling',
              'Pollination from beekeeping'
            ]
          },
          { header: { text: 'THE PROBLEM', tone: 'purple' },
            body: [
              'Consumers don\'t capture MEB,',
              'so they consume too little.'
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
              'where MSB = MSC at',
              { text: '(Q*, P*).', tone: 'green', bold: true }
            ]
          },
          { header: { text: 'COMPARISON', tone: 'gray' },
            body: [
              { text: 'Q* > Q_m', tone: 'slate', bold: true },
              'Society wants more output.',
              { text: 'P* > P_m', tone: 'slate', bold: true },
              'Optimal price is higher.'
            ]
          },
          { header: { text: 'FREE MARKET FAILS', tone: 'green' },
            body: [
              'Without intervention the market',
              'under-produces by (Q* − Q_m).'
            ]
          }
        ]
      },

      /* ─── EFFICIENCY LEGEND ─── */
      {
        layer: 'layer-legend-efficiency',
        x: 600, y: 65,
        sections: [
          { header: { text: 'WELFARE GAIN FORGONE', tone: 'green' },
            body: [
              'Shaded triangle between Q_m',
              'and Q*, bounded above by',
              'MSB and below by MSC.',
              { text: 'For each unit Q_m → Q*:', tone: 'slate', bold: true },
              'MSB > MSC → society gains',
              '(MSB − MSC) of welfare.'
            ]
          },
          { header: { text: 'POLICY RESPONSE', tone: 'green' },
            body: [
              'A Pigouvian subsidy = MEB at Q*',
              'internalises the externality',
              'and closes the wedge.'
            ]
          },
          { header: { text: 'EXAM TECHNIQUE', tone: 'gray' },
            body: [
              'Label all six: D=MPB, MPC=MSC,',
              'MSB, E_m, E*, welfare gain.'
            ]
          }
        ]
      }
    ]
  };
})();
