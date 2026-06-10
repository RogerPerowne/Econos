/* ============================================================
   Marginal cost — MC cutting AVC and AC at their minima.
   Phase 3: replaces the hand-rolled marginalCostChart. MC (the Nike tick)
   is the focus; AVC and AC are shown dashed as reference. Because MC is
   the exact derivative of total cost, the engine SOLVES the crossings and
   they land precisely on the AVC and AC minima — the textbook rule.

   Same cubic as the rest of the Costs topic (FC=£40,
   VC=40Q−7.4Q²+0.6Q³): MC min ≈£9.6 at Q≈4, MC=AVC at Q≈6, MC=AC at Q≈7.

   2-step reveal: mc-1 shows MC alone; mc-2 adds the dashed AVC/AC and the
   min-AVC / min-AC crossing dots.
   ============================================================ */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_MARGINAL_COST_SPEC = window.ECONOS_FIRM.costCurves({
    fc: 40,
    vc: [40, -7.4, 0.6],
    qMin: 2,
    qSampleMax: 10,
    qMax: 11,
    yMax: 54,
    samples: 64,
    curves: ['MC', 'AVC', 'AC'],
    layers: ['mc-1', 'mc-2', 'mc-2'],
    dashedCurves: ['AVC', 'AC'],
    markCrossings: true,
    crossingsLayer: 'mc-2',
    nearAVC: [0.56, 0.32],
    nearAC: [0.64, 0.43],
    axes: { x: { label: 'Output (pizzas/day)' }, y: { label: '£ per unit' } }
  });
})();
