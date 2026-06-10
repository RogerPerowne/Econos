/* ============================================================
   Average cost family — AFC / AVC / AC (cost-function-driven).
   Phase 3: replaces the hand-rolled averageCostFamilyChart. All three
   averages are derived from the SAME cubic cost model used by the Total
   Cost chart, so the topic is internally consistent:
     AFC = FC/Q (falling hyperbola)
     AVC = VC/Q (U-shaped)
     AC  = AFC + AVC (U-shaped, sitting above AVC by the AFC gap; its
           minimum is to the RIGHT of AVC's because falling AFC keeps
           pulling AC down after AVC has bottomed out)

   Costs-topic calibration:  FC = £40 ;  VC = 40Q − 7.4Q² + 0.6Q³
     → AFC(4)=£10, AVC(4)=£20, AC(4)=£30 ;  AVC min ≈£17 (Q≈6),
       AC min ≈£23 (Q≈7).
   Layered acf-1 (AFC) / acf-2 (AVC) / acf-3 (AC) for the 3-step reveal.
   ============================================================ */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_AVG_COST_FAMILY_SPEC = window.ECONOS_FIRM.costCurves({
    fc: 40,
    vc: [40, -7.4, 0.6],
    qMin: 2,
    qSampleMax: 10,
    qMax: 11,
    yMax: 54,
    samples: 64,
    curves: ['AFC', 'AVC', 'AC'],
    layers: ['acf-1', 'acf-2', 'acf-3'],
    markCrossings: false,
    axes: { x: { label: 'Output (pizzas/day)' }, y: { label: '£ per unit' } }
  });
})();
