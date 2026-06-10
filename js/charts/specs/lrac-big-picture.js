/* LRAC — the U-shaped big picture with three regions (economies of scale →
   minimum efficient scale → diseconomies). Generated from a flat-bottomed U. */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_LRAC_BIG_PICTURE_SPEC = window.ECONOS_FIRM.lrac({
    ymin: 10, qa: 45, qb: 75, ka: 0.013, kb: 0.008,
    qMax: 120, yMax: 30, qMin: 10, regions: true, mes: true,
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Average cost (£)' } }
  });
})();
