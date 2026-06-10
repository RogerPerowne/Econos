/* ============================================================
   Marco's Pizzeria — profit maximisation under monopolistic competition.
   Phase 2 of the firm-model upgrade: the full firm diagram. The cost
   curves (MC, AC) meet the revenue curves (AR/demand, MR) and the engine
   SOLVES the profit-maximising output where MC=MR, reads the price up to
   AR, and shades the supernormal-profit rectangle.

   Model (docs/reference/marcos-pizzeria.html):
     FC=200, VC=10Q−0.15Q²+0.00125Q³ ;  demand P=22−0.1Q, MR=22−0.2Q
     → MC=MR at Q≈71, P≈£14.90, AC≈£8.46, supernormal profit ≈£457/day
   ============================================================ */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_MARCOS_PROFIT_MAX_SPEC = window.ECONOS_FIRM.costRevenue({
    fc: 200,
    vc: [10, -0.15, 0.00125],
    qMax: 130,
    yMax: 26,
    qMin: 18,
    samples: 60,
    curves: ['MC', 'AC'],
    demand: { type: 'linear', a: 22, b: 0.1 },
    axes: { x: { label: 'Output (pizzas/day)' }, y: { label: '£ per unit' } }
  });
})();
