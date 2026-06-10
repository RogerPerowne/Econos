/* ============================================================
   Monopoly profit-maximising equilibrium (cost-function-driven).
   Phase 3: replaces the hand-rolled monopolyProfitMax. Four base curves
   (AC, MC, AR=D, MR) with a 4-step construction reveal:
     mp-1 MR=MC · mp-2 drop to Qₘ · mp-3 up to AR for Pₘ · mp-4 AC + profit
   MC=MR solved by the engine; demand P=22−0.1Q, MR=22−0.2Q.
   ============================================================ */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_MONOPOLY_PROFIT_MAX_SPEC = window.ECONOS_FIRM.monopolyProfitMax({
    fc: 200,
    vc: [10, -0.15, 0.00125],
    qMax: 130,
    yMax: 26,
    qMin: 16,
    demand: { a: 22, b: 0.1 },
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } }
  });
})();
