/* ============================================================
   Monopoly welfare / deadweight loss (cost-function-driven).
   Phase 3: replaces the hand-rolled monopolyWelfare. Base curves MC,
   AR(=D), MR; a 3-step reveal builds the welfare case:
     mw-1 monopoly outcome (Qₘ, Pₘ) · mw-2 competitive benchmark (Qc, Pc,
     P=MC) · mw-3 the deadweight-loss triangle.
   Both equilibria engine-solved (MC=MR for Qₘ, MC=AR for Qc); demand
   P=22−0.1Q. Same FC=320 calibration as the profit-max diagram.
   ============================================================ */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_MONOPOLY_WELFARE_SPEC = window.ECONOS_FIRM.monopolyWelfare({
    fc: 320,
    vc: [10, -0.15, 0.00125],
    qMax: 130,
    yMax: 26,
    qMin: 16,
    demand: { a: 22, b: 0.1 },
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } }
  });
})();
