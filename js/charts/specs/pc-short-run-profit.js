/* Perfect competition — short-run supernormal profit (price-taker).
   AR=MR=P horizontal above min AC, so MC=P at Q* gives a profit rectangle.
   FC=200, VC=10Q−0.15Q²+0.00125Q³ ; market price £12 (min AC ≈ £8.45). */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_PC_SR_PROFIT_SPEC = window.ECONOS_FIRM.costRevenue({
    fc: 200, vc: [10, -0.15, 0.00125], qMax: 130, yMax: 20, qMin: 22, samples: 60,
    curves: ['MC', 'AC'], demand: { type: 'horizontal', price: 12 },
    revealLayers: ['pcsr-1', 'pcsr-2', 'pcsr-3', 'pcsr-4'],
    // AC dot + C* arrive with the rectangle stage; darker shading; the
    // Profit label sits left of where AC dives through the rectangle; the
    // AR=MR=P label shifts left clear of the rising AC crossing.
    acDotLayer: 3, profitOpacity: 0.7, profitLabelX: 0.15,
    axisTicks: { p: 'P*', c: 'C*' }, arLabelDx: -34,
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } }
  });
})();
