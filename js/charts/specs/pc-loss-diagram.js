/* Perfect competition — short-run loss but keep producing (price-taker).
   Price below AC (loss) but above min AVC (revenue still covers variable
   cost), so the firm produces and minimises the loss. Loss rectangle red.
   FC=200, VC=10Q−0.15Q²+0.00125Q³ ; price £7 (min AVC £5.50, min AC £8.45). */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_PC_LOSS_SPEC = window.ECONOS_FIRM.costRevenue({
    fc: 200, vc: [10, -0.15, 0.00125], qMax: 130, yMax: 20, qMin: 22, samples: 60,
    curves: ['MC', 'AVC', 'AC'], demand: { type: 'horizontal', price: 7 },
    revealLayers: ['pcl-1', 'pcl-2', 'pcl-3', 'pcl-4'],
    // Same treatment as the profit diagram: AC dot + C* with the rectangle
    // stage, darker loss shading, P*/C* read off the y-axis.
    acDotLayer: 3, profitOpacity: 0.7, axisTicks: { p: 'P*', c: 'C*' },
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } }
  });
})();
