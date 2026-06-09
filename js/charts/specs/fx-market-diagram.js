/* ============================================================
   FX Market Diagram – engine spec for fxMarketDiagram.
   Exchange Rates 4.1.8 card 2. The market for pounds: demand for £
   (downward) meets supply of £ (upward) at the equilibrium exchange
   rate E* and quantity Q*. Static single-panel chart.
     D: 'M 0,0.95 L 0.95,0.05'  (y = 0.95 - 0.9474x)
     S: 'M 0.05,0.05 L 0.95,0.95' (y = x)
     E = (0.488, 0.488)
   ============================================================ */
(function () {
  'use strict';
  var E = { x: 0.488, y: 0.488 };

  window.ECONOS_FX_MARKET_SPEC = {
    width: 470,
    height: 360,
    chartArea: { x: 70, y: 40, width: 330, height: 268 },
    className: 'fx-market-svg',
    background: '#FFFFFF',
    axes: { x: { label: 'Quantity of £' }, y: { label: 'Exchange rate of £' } },
    curves: [
      { d: 'M 0,0.95 L 0.95,0.05', tone: 'blue',  label: 'D £', strokeWidth: 2.8, labelDx: 6, labelDy: 12 },
      { d: 'M 0.05,0.05 L 0.95,0.95', tone: 'green', label: 'S £', strokeWidth: 2.8, labelDx: 6, labelDy: -6 }
    ],
    arrows: [
      { x1: 0, y1: E.y, x2: E.x, y2: E.y, tone: 'slate', strokeWidth: 1.3, dashed: '5 3', buffer: 0 },
      { x1: E.x, y1: E.y, x2: E.x, y2: 0, tone: 'slate', strokeWidth: 1.3, dashed: '5 3', buffer: 0 }
    ],
    points: [
      { x: E.x, y: E.y, tone: 'slate', radius: 5.5 }
    ],
    texts: [
      { x: E.x + 0.03, y: E.y + 0.055, text: 'E', tone: 'slate', bold: true, fontSize: 14, anchor: 'start' },
      { x: -0.02, y: E.y, text: 'E*', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { x: E.x, y: -0.06, text: 'Q*', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' }
    ]
  };
})();
