/* ============================================================
   Dynamic efficiency — engine spec for dynamicEfficiencyDiagram
   (Types of Efficiency 3.4.1 Card 4). Replaces the hand-rolled
   twin-panel SVG with a single staged shift diagram.

   AC₁ (today) shifts down to AC₂ after innovation — cheaper at EVERY
   output, the time-based gain. Standard shift styling: the shifted-from
   curve dashes once a view is active (`inverseLayers`), shift arrows sit
   between the curves. Reveal:
     base  AC₁ solid (de-old-solid, hidden once stepping starts)
     de-1  AC₁ dashed + AC₂ + two downward shift arrows + innovation chip
     de-2  same-output comparison: dots on both curves at Q̄ + the
           vertical gain arrow + result chip
   ============================================================ */
(function () {
  'use strict';
  var AC1 = 'M 0.10,0.85 C 0.33,0.30 0.57,0.30 0.90,0.78';
  var AC2 = 'M 0.10,0.61 C 0.33,0.06 0.57,0.06 0.90,0.54';
  window.ECONOS_DYNAMIC_EFFICIENCY_SPEC = {
    width: 460, height: 320,
    chartArea: { x: 58, y: 20, width: 384, height: 264 },
    className: 'dynamic-efficiency-svg',
    layers: ['de-1', 'de-2'],
    inverseLayers: ['de-old-solid'],
    axes: { x: { label: 'Output (Q)' }, y: { label: 'Average cost (£)' } },
    curves: [
      // AC₁ solid — visible until the reveal starts
      { id: 'AC1S', d: AC1, tone: 'blue', label: 'AC₁ (today)',
        strokeWidth: 2.4, labelDx: -2, labelDy: -14, anchor: 'end',
        layer: 'de-old-solid' },
      // AC₁ redrawn dashed once AC₂ arrives
      { id: 'AC1', d: AC1, tone: 'blue', label: 'AC₁ (today)',
        strokeWidth: 1.8, dashed: '6 4', labelDx: -2, labelDy: -14,
        anchor: 'end', layer: 'de-1' },
      // AC₂ is labelled via texts[] below — a curve-end label has no
      // clash-free corridor where the two curves converge at the right.
      { id: 'AC2', d: AC2, tone: 'green', strokeWidth: 2.6, layer: 'de-1' }
    ],
    texts: [
      { x: 0.72, y: 0.085, text: 'AC₂ (after innovation)', tone: 'green',
        bold: true, anchor: 'middle', layer: 'de-1' }
    ],
    points: [
      { layer: 'de-2', x: 0.50, on: 'AC1', tone: 'blue', radius: 5, hollow: true },
      { layer: 'de-2', x: 0.50, on: 'AC2', tone: 'green', radius: 5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Q̄' } }
    ],
    arrows: [
      // Two downward shift arrows that sit cleanly BETWEEN the curves.
      // Endpoints are seated ~0.03 inside each curve at their x (AC₁.y and
      // AC₂.y solved from the cubics): x=0.24 → AC₁ 0.585 / AC₂ 0.345;
      // x=0.76 → AC₁ 0.600 / AC₂ 0.360. Raw coords that ignored the actual
      // curve geometry let the heads overshoot past AC₂ — hence "not between
      // the lines". buffer:0 because the inset is already baked into y1/y2.
      { layer: 'de-1', x1: 0.24, y1: 0.555, x2: 0.24, y2: 0.375,
        tone: 'green', strokeWidth: 1.8, markerEnd: 'econos-arrow-green', buffer: 0 },
      { layer: 'de-1', x1: 0.76, y1: 0.570, x2: 0.76, y2: 0.390,
        tone: 'green', strokeWidth: 1.8, markerEnd: 'econos-arrow-green', buffer: 0 },
      // The same-output cost saving at Q̄ (AC₁ 0.430 / AC₂ 0.190 at x=0.50).
      { layer: 'de-2', x1: 0.50, y1: 0.400, x2: 0.50, y2: 0.220,
        tone: 'amber', strokeWidth: 2, markerEnd: 'econos-arrow-amber', buffer: 0 }
    ],
    boxedLabels: [
      { x: 0.330, y: 0.985, w: 0.330, h: 0.150,
        tone: 'green', lines: ['INNOVATION', 'AC shifts down'], layer: 'de-1' },
      { x: 0.060, y: 0.260, w: 0.330, h: 0.160,
        tone: 'amber', lines: ['SAME OUTPUT', 'lower cost'], layer: 'de-2' }
    ]
  };
})();
