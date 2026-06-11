/* Perfect competition — long-run efficiency (allocative + productive).
   At the long-run equilibrium P = MC = min AC, the firm is BOTH allocatively
   efficient (P = MC) and productively efficient (output at min AC). Built via
   costRevenue with a horizontal price set exactly to min AC. */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  var FC = 200, VC = [10, -0.15, 0.00125], qAxis = 130, yAxis = 20, qMin = 22;
  var M = window.ECONOS_FIRM.makeModel(FC, VC);
  var qStar = window.ECONOS_FIRM.solveCross(M.mc, M.ac, qMin, qAxis - 2); // min AC (MC=AC)
  var pStar = M.ac(qStar);
  var spec = window.ECONOS_FIRM.costRevenue({
    fc: FC, vc: VC, qMax: qAxis, yMax: yAxis, qMin: qMin, samples: 60,
    curves: ['MC', 'AC'], demand: { type: 'horizontal', price: pStar },
    revealLayers: ['pcef-1', 'pcef-2', 'pcef-3'],
    axisTicks: { p: 'P*' },
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } }
  });
  // Annotate the efficiency point (P = MC = min AC) — revealed with the
  // decision stage (pcef-3).
  spec.texts.push({
    x: qStar / qAxis - 0.02, y: pStar / yAxis + 0.16,
    text: 'P = MC = min AC', tone: 'blue', bold: true, anchor: 'middle', layer: 'pcef-3'
  });
  window.ECONOS_PC_EFFICIENCY_SPEC = spec;
})();
