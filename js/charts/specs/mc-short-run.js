/* Monopolistic competition — short-run profit max (downward demand).
   Same builder as monopoly, collapsed onto a 3-step reveal:
     mcsr-1 MR=MC + drop to Q* · mcsr-2 up to AR for P* · mcsr-3 AC + profit.
   Flatter (more elastic) demand than monopoly. FC=320 cubic. */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_MC_SHORT_RUN_SPEC = window.ECONOS_FIRM.monopolyProfitMax({
    fc: 320, vc: [10, -0.15, 0.00125], qMax: 130, yMax: 24, qMin: 16,
    demand: { a: 20, b: 0.08 },
    groupLayers: ['mcsr-1', 'mcsr-1', 'mcsr-2', 'mcsr-3'],
    qLabel: 'Q*', pLabel: 'P*',
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } }
  });
})();
