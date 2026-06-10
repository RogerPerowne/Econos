/* Minimum efficient scale — the LRAC U with the three regions and MES marked.
   Same flat-bottomed U as the big picture; emphasises the MES output. */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  var spec = window.ECONOS_FIRM.lrac({
    ymin: 10, qa: 45, qb: 75, ka: 0.013, kb: 0.008,
    qMax: 120, yMax: 30, qMin: 10, regions: true, mes: true,
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Average cost (£)' } }
  });
  spec.texts.push({ x: 60 / 120, y: -0.05, text: 'Q at MES', tone: 'blue', bold: true, anchor: 'middle' });
  window.ECONOS_MES_CHART_SPEC = spec;
})();
