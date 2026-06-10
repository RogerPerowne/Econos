/* Monopolistic competition — long-run equilibrium (entry erodes profit).
   Exclusive 3-step reveal: lr-1 short-run abnormal profit → lr-2 entry shifts
   the firm's demand left → lr-3 long-run tangency (AR tangent to AC, P=AC,
   normal profit). LR demand is the line tangent to AC at Q*_LR=60. */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_MC_LONG_RUN_SPEC = window.ECONOS_FIRM.monopolisticLongRun({
    fc: 320, vc: [10, -0.15, 0.00125], qMax: 130, yMax: 24, qMin: 16,
    srDemand: { a: 20, b: 0.08 }, qLR: 60,
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } }
  });
})();
