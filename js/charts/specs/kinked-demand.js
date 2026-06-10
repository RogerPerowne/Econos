/* Oligopoly — the kinked demand curve. Elastic above the kink, inelastic
   below; MR discontinuous (vertical gap under the kink); MC₁/MC₂ both pass
   through the gap so price stays at P*. 3-step reveal kdc-1/2/3. */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_KINKED_DEMAND_SPEC = window.ECONOS_FIRM.kinkedDemand({
    Pk: 10, Qk: 50, b1: 0.08, b2: 0.15, mc1: 3, mc2: 5,
    qMax: 100, yMax: 16, qMin: 8,
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } }
  });
})();
