/* ============================================================
   Buffer Stock Bands – engine spec for bufferStockBands.
   Development Strategies: Interventionist 4.3.3 card 7 "Buffer stocks".

   A commodity price oscillating over time between a floor (where the
   agency buys to support the price) and a ceiling (where it sells from
   stock to cap the price). The shaded band is the stability range.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_BUFFER_STOCK_SPEC = {
    width: 600,
    height: 320,
    chartArea: { x: 58, y: 30, width: 500, height: 250 },
    className: 'buffer-stock-svg',
    axes: {
      x: { label: 'Time' },
      y: { label: 'Price' }
    },
    polygons: [
      /* the stability band between floor and ceiling */
      { points: [[0, 0.32], [1, 0.32], [1, 0.68], [0, 0.68]], tone: 'green', opacity: 0.45 }
    ],
    curves: [
      { d: 'M 0,0.68 L 1,0.68', tone: 'blue', dashed: '5 4', strokeWidth: 1.8 },
      { d: 'M 0,0.32 L 1,0.32', tone: 'rose', dashed: '5 4', strokeWidth: 1.8 },
      { d: 'M 0.02,0.50 C 0.10,0.68 0.18,0.68 0.26,0.50 C 0.34,0.32 0.42,0.32 0.50,0.50 C 0.58,0.68 0.66,0.68 0.74,0.50 C 0.82,0.32 0.90,0.32 0.98,0.50', tone: 'purple', strokeWidth: 2.6 }
    ],
    texts: [
      { x: 0.5, y: 0.78, text: 'Ceiling — agency sells', tone: 'blue', bold: true, fontSize: 11.5, anchor: 'middle' },
      { x: 0.5, y: 0.22, text: 'Floor — agency buys', tone: 'rose', bold: true, fontSize: 11.5, anchor: 'middle' }
    ]
  };
})();
