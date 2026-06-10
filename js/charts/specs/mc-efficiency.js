/* Monopolistic competition — long-run efficiency / excess capacity.
   Exclusive 2-step reveal: mce-1 LR tangency (P=AC at Q*_LR) → mce-2 mark the
   min-AC output (Q_min) and the excess-capacity gap Q*_LR < Q_min. */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_MC_EFFICIENCY_SPEC = window.ECONOS_FIRM.monopolisticEfficiency({
    fc: 320, vc: [10, -0.15, 0.00125], qMax: 130, yMax: 24, qMin: 16, qLR: 60,
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } }
  });
})();
