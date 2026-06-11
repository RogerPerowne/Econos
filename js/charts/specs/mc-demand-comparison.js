/* ============================================================
   Price taker vs price maker – engine spec for mcDemandComparison.
   Card 2 of Monopolistic Competition: the payoff of differentiation
   is the SHAPE of the firm's demand curve.

   Left panel  perfect competition – identical products, so the firm
               is a price taker: AR = MR = D is perfectly elastic at
               the market price.
   Right panel monopolistic competition – differentiation creates
               preferences and loyalty, so the firm faces its OWN
               downward-sloping demand. Drawn shallow on purpose:
               close substitutes keep it relatively elastic.

   The bottom caption carries the message: differentiation tilts the
   demand curve – some price-making power, but never much.
   ============================================================ */
(function () {
  'use strict';

  var P_y = 0.52; // shared market-price level so the panels read together

  window.ECONOS_MC_DEMAND_COMPARISON_SPEC = {
    width: 660,
    height: 290,
    className: 'mc-demand-compare-svg',
    background: '#FFFFFF',
    divider: { x: 330, y1: 22, y2: 275 },

    panels: [
      /* ─── LEFT panel: PERFECT COMPETITION (price taker) ─── */
      {
        chartArea: { x: 45, y: 28, width: 265, height: 217 },
        title: 'Perfect competition',
        titleTone: 'green',
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        curves: [
          { id: 'AR', d: 'M 0.06,' + P_y + ' L 0.94,' + P_y,
            tone: 'green', label: 'AR = MR = D', strokeWidth: 2.5,
            labelDx: -6, labelDy: -10, anchor: 'end' }
        ],
        texts: [
          { x: -0.060, y: P_y, text: 'P', tone: 'green', bold: true, anchor: 'end' },
          { x: 0.5, y: 0.16, text: 'Identical products → price taker', tone: 'slate', italic: true, anchor: 'middle' }
        ]
      },

      /* ─── RIGHT panel: MONOPOLISTIC COMPETITION (price maker, a bit) ─── */
      {
        chartArea: { x: 375, y: 28, width: 265, height: 217 },
        title: 'Monopolistic competition',
        titleTone: 'blue',
        axes: { x: { label: 'Q' }, y: { label: 'P' } },
        curves: [
          { id: 'AR', d: 'M 0.06,0.80 L 0.94,0.24',
            tone: 'blue', label: 'AR (D)', strokeWidth: 2.5,
            labelDx: -8, labelDy: -10, anchor: 'end' }
        ],
        texts: [
          { x: 0.5, y: 0.16, text: 'Differentiated → some pricing power', tone: 'slate', italic: true, anchor: 'middle' },
          { x: 0.5, y: 0.04, text: 'Shallow: close substitutes', tone: 'slate', italic: true, anchor: 'middle' }
        ]
      },

      /* ─── Bottom caption panel (no axes) ─── */
      {
        chartArea: { x: 0, y: 268, width: 660, height: 16 },
        axes: false,
        texts: [
          { x: 0.5, y: 0.5,
            text: 'Differentiation tilts the demand curve — the firm gains some price-making power, but never much',
            tone: 'gray', italic: true, anchor: 'middle' }
        ]
      }
    ]
  };
})();
