/* Perfect competition — long-run equilibrium (normal profit only).
   Free entry/exit drives price to min AC, where P = MC = AC: the firm
   makes normal profit (no rectangle). FC=200, VC=10Q−0.15Q²+0.00125Q³ ;
   price £8.45 ≈ min AC. */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_PC_LONG_RUN_SPEC = window.ECONOS_FIRM.costRevenue({
    fc: 200, vc: [10, -0.15, 0.00125], qMax: 130, yMax: 20, qMin: 22, samples: 60,
    curves: ['MC', 'AC'], demand: { type: 'horizontal', price: 8.45 },
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } }
  });
})();
