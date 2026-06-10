/* ============================================================
   Allocative efficiency — engine spec for toeAllocativeDiagram
   (Types of Efficiency 3.4.1 Card 3). Replaces the hand-rolled SVG.

   Demand (marginal benefit) against MC (marginal cost to society);
   the engine solves their crossing for the P = MC point. 3-step reveal:
     ta-1  demand = what consumers value
     ta-2  MC = what one more unit costs society
     ta-3  the allocatively efficient point (P*, Q*) + condition chip
   ============================================================ */
(function () {
  'use strict';
  window.ECONOS_TOE_ALLOCATIVE_SPEC = {
    width: 460, height: 320,
    chartArea: { x: 58, y: 20, width: 384, height: 264 },
    className: 'toe-allocative-svg',
    layers: ['ta-1', 'ta-2', 'ta-3'],
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } },
    curves: [
      { id: 'D', d: 'M 0.06,0.88 L 0.90,0.18', tone: 'blue',
        label: 'D = MB', strokeWidth: 2.4, labelDx: 6, labelDy: 2,
        anchor: 'start', layer: 'ta-1' },
      { id: 'MC', d: 'M 0.06,0.10 C 0.35,0.18 0.62,0.42 0.90,0.85',
        tone: 'rose', label: 'MC', strokeWidth: 2.4, labelDx: 6,
        labelDy: -4, anchor: 'start', layer: 'ta-2' }
    ],
    points: [
      { layer: 'ta-3',
        intersection: { curves: ['D', 'MC'], near: [0.60, 0.43] },
        tone: 'green', radius: 6, hollow: true,
        gridlines: 'slate', ticks: { x: 'Q*', y: 'P*' } }
    ],
    boxedLabels: [
      { x: 0.060, y: 0.560, w: 0.300, h: 0.160,
        tone: 'amber', lines: ['CONDITION', 'P = MC'], layer: 'ta-3' }
    ]
  };
})();
