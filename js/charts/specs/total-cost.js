/* ============================================================
   Total cost — TFC / TVC / TC (cost-function-driven).
   Phase 3 of the firm-model upgrade: replaces the hand-rolled (wobbly)
   fixedVariableTotalChart with a generated diagram. TVC is the S-shaped
   cubic from the origin, TC = TFC + TVC (the same S shifted up by TFC),
   and the vertical gap between them is TFC at every output.

   Costs-topic calibration (preserves the card's quoted numbers):
     FC = £40 ;  VC = 25Q − 1.875Q² + 0.15625Q³
     → TVC(4) = £80,  TC(4) = £120  (and AC(4) = £30)
   Layered tfc-1 (TFC) / tfc-2 (TVC) / tfc-3 (TC) for the 3-step reveal.
   ============================================================ */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_TOTAL_COST_SPEC = window.ECONOS_FIRM.totalCost({
    fc: 40,
    vc: [25, -1.875, 0.15625],
    qMax: 9,
    qSampleMax: 8,
    yMax: 220,
    gapAtQ: 4.5,
    axes: { x: { label: 'Output (pizzas/day)' }, y: { label: 'Costs (£/day)' } }
  });
})();
