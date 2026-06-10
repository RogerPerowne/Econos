/* ============================================================
   Total cost — TFC / TVC / TC (cost-function-driven).
   Phase 3 of the firm-model upgrade: replaces the hand-rolled (wobbly)
   fixedVariableTotalChart with a generated diagram. TVC is the S-shaped
   cubic from the origin, TC = TFC + TVC (the same S shifted up by TFC),
   and the vertical gap between them is TFC at every output.

   Costs-topic calibration (preserves the card's quoted numbers):
     FC = £40 ;  VC = 40Q − 7.4Q² + 0.6Q³
     → TVC(4) = £80,  TC(4) = £120  (and AC(4) = £30)
   The stronger cubic gives a pronounced S — TVC rises, eases through the
   middle (increasing returns) then climbs steeply (diminishing returns) —
   matching the reference. Layered tfc-1/2/3 for the 3-step reveal.
   ============================================================ */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_TOTAL_COST_SPEC = window.ECONOS_FIRM.totalCost({
    fc: 40,
    vc: [40, -7.4, 0.6],
    qMax: 9,
    qSampleMax: 8,
    yMax: 240,
    gapAtQ: 4.5,
    axes: { x: { label: 'Output (pizzas/day)' }, y: { label: 'Costs (£/day)' } }
  });
})();
