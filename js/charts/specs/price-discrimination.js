/* ============================================================
   Third-degree price discrimination (thirdDegreePd) — engine spec.

   Migrated from a hand-rolled two-panel SVG (whose prices and
   quantities were drawn ~equal, contradicting the lesson) to the
   ECONOS_FIRM.priceDiscrimination builder, so the geometry is
   guaranteed: MR = MC is solved in each market, the price is snapped
   onto demand, and both panels share one scale so the asymmetry —
   the inelastic market pays a HIGHER price for FEWER units — reads
   straight off the comparison.

   Calibration (common MC = £6, scale Q≤100, £≤20):
     • Market A (elastic):  D = 13 − 0.07Q → Q_A ≈ 50, P_A = £9.50
     • Market B (inelastic): D = 19 − 0.17Q → Q_B ≈ 38, P_B = £12.50
   ============================================================ */
(function () {
  'use strict';
  window.ECONOS_PRICE_DISC_SPEC = window.ECONOS_FIRM.priceDiscrimination({
    mc: 6, qMax: 100, yMax: 20,
    markets: [
      { a: 13, b: 0.07, title: 'Elastic: students / leisure', titleTone: 'blue', sub: 'A' },
      { a: 19, b: 0.17, title: 'Inelastic: business / domestic', titleTone: 'amber', sub: 'B' }
    ]
  });
})();
