/* Natural monopoly — falling AC across the whole market, with the full
   4-step regulation story (economies of scale → unregulated MR=MC → P=MC
   allocative/subsidy → P=AC break-even). High FC, ~flat MC below AC. */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_NATURAL_MONOPOLY_SPEC = window.ECONOS_FIRM.naturalMonopoly({
    fc: 300, vc: [3, 0, 0], qMax: 135, yMax: 16, qMin: 30,
    demand: { a: 15, b: 0.1 },
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } }
  });
})();
