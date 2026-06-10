/* LRAC — the U-shaped big picture (economies of scale → MES → diseconomies),
   with the SRAC envelope on a second reveal layer (els-2). Step 1 shows the
   LRAC U + regions; step 2 adds the short-run AC curves, each tangent to LRAC. */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  window.ECONOS_LRAC_BIG_PICTURE_SPEC = window.ECONOS_FIRM.lrac({
    ymin: 10, qa: 45, qb: 75, ka: 0.013, kb: 0.008,
    qMax: 120, yMax: 30, qMin: 10, regions: true, mes: true,
    srac: [25, 60, 95], sracCurvature: 0.035, layer: 'els-2', layers: ['els-2'],
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Cost (£)' } }
  });
})();
