/* ============================================================
   Marco's Pizzeria — profit maximisation under PERFECT COMPETITION.
   Phase 2 of the firm-model upgrade, price-taker case: AR = MR = the
   market price (a horizontal line), and the engine solves the
   profit-maximising output where MC = MR = P on the rising MC branch.

   Model (docs/reference/marcos-pizzeria.html):
     FC=200, VC=10Q−0.15Q²+0.00125Q³ ;  market price P=£12
     → MC=P at Q≈86, AC≈£8.67, supernormal profit ≈£286/day
       (min AC ≈£8.45 at Q≈75 — productive efficiency sits to the left)
   ============================================================ */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_MARCOS_PROFIT_MAX_PC_SPEC = window.ECONOS_FIRM.costRevenue({
    fc: 200,
    vc: [10, -0.15, 0.00125],
    qMax: 130,
    yMax: 24,
    qMin: 18,
    samples: 60,
    curves: ['MC', 'AVC', 'AC'],
    demand: { type: 'horizontal', price: 12 },
    markMinAC: true,
    axes: { x: { label: 'Output (pizzas/day)' }, y: { label: '£ per unit' } }
  });
})();
