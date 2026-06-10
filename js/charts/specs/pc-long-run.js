/* Perfect competition — long-run equilibrium (normal profit only).
   Free entry/exit drives price to min AC, where P = MC = AC: the firm
   makes normal profit (no rectangle). FC=200, VC=10Q−0.15Q²+0.00125Q³ ;
   price £8.45 ≈ min AC. */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  var FC = 200, VC = [10, -0.15, 0.00125], qAxis = 130, yAxis = 20, qMin = 22;
  var M = window.ECONOS_FIRM.makeModel(FC, VC);
  var pStar = M.ac(window.ECONOS_FIRM.solveCross(M.mc, M.ac, qMin, qAxis - 2)); // min AC exactly
  window.ECONOS_PC_LONG_RUN_SPEC = window.ECONOS_FIRM.costRevenue({
    fc: FC, vc: VC, qMax: qAxis, yMax: yAxis, qMin: qMin, samples: 60,
    curves: ['MC', 'AC'], demand: { type: 'horizontal', price: pStar },
    revealLayers: ['pclr-1', 'pclr-2', 'pclr-3'],
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } }
  });
})();
