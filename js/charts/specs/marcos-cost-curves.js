/* ============================================================
   Marco's Pizzeria — short-run cost-curve family (cost-function-driven).
   Proof-of-concept for the firm-model upgrade: the MC "Nike tick" plus
   the U-shaped AVC and AC, all derived from one cubic cost function, with
   the MC=AVC and MC=AC crossings SOLVED by the engine at the curve minima.

   Model (docs/reference/marcos-pizzeria.html):
     FC = 200,  VC = 10Q − 0.15Q² + 0.00125Q³
     → MC min £4 @ Q=40 ·  MC=AVC @ Q=60 ·  MC=AC @ Q≈75
   ============================================================ */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_MARCOS_COST_SPEC = window.ECONOS_FIRM.costCurves({
    fc: 200,
    vc: [10, -0.15, 0.00125],
    qMax: 120,
    yMax: 30,
    qMin: 12,
    samples: 60,
    curves: ['AFC', 'AVC', 'AC', 'MC'],
    axes: { x: { label: 'Output (pizzas/day)' }, y: { label: '£ per unit' } }
  });
})();
