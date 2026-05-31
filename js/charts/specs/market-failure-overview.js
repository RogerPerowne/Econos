/* ============================================================
   Market Failure Overview — engine spec for marketFailureOverview.
   Market-failure topic — card 1 "Market failure".

   The visual anchor for the concept. A simple supply-demand chart
   where the free-market equilibrium E_m and the socially optimal
   point E* are clearly DIFFERENT — and a small DWL triangle
   between them shows what society loses.

   Generic illustration: doesn't commit to over- or under-production
   (that's the next card). Both possibilities are shown by the dashed
   sliders and the DWL label is centred between them.
   ============================================================ */
(function () {
  'use strict';

  var EM = { x: 0.580, y: 0.450 };   // market equilibrium (where D = MPC)
  var ES = { x: 0.420, y: 0.580 };   // socially optimal (where MSB = MSC)

  window.ECONOS_MARKET_FAILURE_OVERVIEW_SPEC = {
    width: 480,
    height: 320,
    chartArea: { x: 55, y: 28, width: 380, height: 254 },
    className: 'market-failure-overview-svg',
    axes: {
      x: { label: 'Quantity (Q)' },
      y: { label: 'Price (P)' }
    },

    curves: [
      /* MPB (private demand) — the market sees this */
      { d: 'M 0.069,0.880 L 0.972,0.080',
        tone: 'blue', label: 'MPB = D', strokeWidth: 2.5,
        labelDx: -6, labelDy: 14, anchor: 'end' },
      /* MPC (private supply) — the market sees this */
      { d: 'M 0.069,0.080 L 0.972,0.880',
        tone: 'amber', label: 'MPC = S', strokeWidth: 2.5,
        labelDx: -6, labelDy: -6, anchor: 'end' },
      /* MSC (social cost) — dashed, shifted up from MPC */
      { d: 'M 0.069,0.270 L 0.785,0.880',
        tone: 'green', label: 'MSC', strokeWidth: 2.2, dashed: '6 4',
        labelDx: 8, labelDy: -4, anchor: 'start' }
    ],

    points: [
      /* Market equilibrium — where the price mechanism settles */
      { x: EM.x, y: EM.y, tone: 'blue', radius: 6, hollow: true,
        gridlines: 'slate', ticks: { x: 'Q_m' },
        label: 'E_m', labelDx: 10, labelDy: -4, anchor: 'start' },
      /* Social optimum — where MSB = MSC */
      { x: ES.x, y: ES.y, tone: 'green', radius: 7, hollow: true,
        gridlines: 'green', ticks: { x: 'Q*' },
        label: 'E*', labelDx: -10, labelDy: -4, anchor: 'end' }
    ],

    texts: [
      /* DWL caption pointing to the wedge between the two equilibria */
      { x: (EM.x + ES.x) / 2 + 0.040, y: (EM.y + ES.y) / 2 + 0.060,
        text: 'Welfare loss',
        tone: 'red', bold: true, italic: true, fontSize: 11,
        anchor: 'middle' }
    ]
  };
})();
