/* ============================================================
   Productive efficiency — engine spec for productiveEfficiencyDiagram
   (Types of Efficiency 3.4.1 Card 2). Replaces the hand-rolled SVG.

   Cost-function-driven (ECONOS_FIRM.costCurves) so MC provably cuts AC
   at its minimum — the whole point of the diagram. 3-step reveal:
     pe-1  the AC U-shape
     pe-2  MC cutting through it
     pe-3  the efficient point Q* (engine-solved MC = AC crossing) with
           dashed guides + the condition chip
   ============================================================ */
(function () {
  'use strict';
  if (!window.ECONOS_FIRM) return;
  var FC = 200, VC = [10, -0.15, 0.00125], qAxis = 130, yAxis = 20, qMin = 22;
  var M = window.ECONOS_FIRM.makeModel(FC, VC);
  var qStar = window.ECONOS_FIRM.solveCross(M.mc, M.ac, qMin, qAxis - 2); // min AC
  var pStar = M.ac(qStar);

  var spec = window.ECONOS_FIRM.costCurves({
    fc: FC, vc: VC, qMax: qAxis, yMax: yAxis, qMin: qMin, samples: 60,
    curves: ['AC', 'MC'],
    layers: ['pe-1', 'pe-2'],
    markCrossings: false,
    width: 460, height: 320,
    chartArea: { x: 58, y: 20, width: 384, height: 264 },
    className: 'productive-efficiency-svg',
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Cost (£)' } }
  });

  spec.points.push({
    layer: 'pe-3',
    intersection: { curves: ['MC', 'AC'], near: [qStar / qAxis, pStar / yAxis] },
    tone: 'green', radius: 6, hollow: true,
    gridlines: 'slate', ticks: { x: 'Q*', y: 'min AC' }
  });
  spec.boxedLabels = [
    { x: 0.330, y: 0.985, w: 0.310, h: 0.160,
      tone: 'green', lines: ['CONDITION', 'MC = AC'], layer: 'pe-3' }
  ];

  window.ECONOS_PRODUCTIVE_EFFICIENCY_SPEC = spec;
})();
