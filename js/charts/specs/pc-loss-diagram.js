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
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } }
  });
})();
