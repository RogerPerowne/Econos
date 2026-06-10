/* ============================================================
   Full cost diagram — AFC / AVC / AC / MC composite.
   Phase 3: replaces the hand-rolled fullCostDiagram. The complete
   short-run family on one set of axes, all derived from the topic's
   single cubic (FC=£40, VC=40Q−7.4Q²+0.6Q³): AFC falls, AVC and AC are
   U-shaped, and MC (the Nike tick) cuts AVC and AC exactly at their
   minima — the crossings solved by the engine. Static (no reveal).
   ============================================================ */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_FULL_COST_SPEC = window.ECONOS_FIRM.costCurves({
    fc: 40,
    vc: [40, -7.4, 0.6],
    qMin: 2,
    qSampleMax: 10,
    qMax: 11,
    yMax: 54,
    samples: 64,
    curves: ['AFC', 'AVC', 'AC', 'MC'],
    markCrossings: true,
    nearAVC: [0.56, 0.32],
    nearAC: [0.64, 0.43],
    axes: { x: { label: 'Output (pizzas/day)' }, y: { label: '£ per unit' } }
  });
})();
