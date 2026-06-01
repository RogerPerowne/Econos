/* ============================================================
   PPF — "the big picture" (1.1.4 card 1).
   A clean static frontier: A on the curve (productively
   efficient), B inside (inefficient / unemployed), C outside
   (unattainable). Rendered in a diagramPanel (chart left,
   colour-coded description right) — the 1.1.1 treatment.

   Mockup axis convention: Capital goods ↑, Consumer goods →.
   Dimensions mirror the 1.1.1 supply-demand chart so on-chart
   fonts render at the same on-screen size.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_PPF_BIGPIC_SPEC = {
    width: 440,
    height: 360,
    chartArea: { x: 58, y: 46, width: 330, height: 264 },
    className: 'ppf-svg',
    axes: {
      x: { label: 'Consumer goods' },
      y: { label: 'Capital goods' }
    },
    curves: [
      { id: 'ppf1', d: 'M 0,0.92 C 0.42,0.92 0.92,0.42 0.92,0.04', tone: 'blue', strokeWidth: 3 }
    ],
    points: [
      // A — on the frontier (declared on:'ppf1' so it sits exactly on the curve)
      { x: 0.46, on: 'ppf1', tone: 'blue',  label: 'A', anchor: 'start', labelDx: 11, labelDy: -4 },
      // B — inside the frontier
      { x: 0.26, y: 0.30,    tone: 'amber', label: 'B', anchor: 'start', labelDx: 11, labelDy: -4 },
      // C — outside the frontier
      { x: 0.74, y: 0.66,    tone: 'green', label: 'C', anchor: 'start', labelDx: 11, labelDy: -4 }
    ]
  };
})();
