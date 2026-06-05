/* ============================================================
   Shifts Interactive – engine spec for shiftsInteractive
   (Price-determination card 3). Layered spec for the
   `interactiveDiagram` block: one curve shifts, the equilibrium moves.

   Persistent: original D, S, E.
   States (show: ['layer-*']):
     layer-dinc → D → D₂ (right): E₂ higher P, higher Q
     layer-ddec → D → D₃ (left):  E₃ lower P, lower Q
     layer-sinc → S → S₂ (right): E₂ lower P, higher Q
     layer-sdec → S → S₃ (left):  E₃ higher P, lower Q

   D (0.10,0.886)→(0.94,0.091), S (0.10,0.091)→(0.94,0.886), E≈(0.52,0.49).
   Shift = ±0.18 in chart-x; new equilibria solved on the opposite curve.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_SHIFTS_SPEC = {
    width: 700,
    height: 480,
    chartArea: { x: 84, y: 40, width: 534, height: 372 },
    className: 'pd-shift-svg',
    layers: ['layer-dinc', 'layer-ddec', 'layer-sinc', 'layer-sdec'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    curves: [
      { d: 'M 0.10,0.886 L 0.94,0.091', tone: 'blue',  label: 'D', strokeWidth: 3, labelDx: 8, labelDy: -4 },
      { d: 'M 0.10,0.091 L 0.94,0.886', tone: 'amber', label: 'S', strokeWidth: 3, labelDx: 8, labelDy: -4 },

      { layer: 'layer-dinc', d: 'M 0.28,0.886 L 1.12,0.091', tone: 'green',  strokeWidth: 2.6 },
      { layer: 'layer-ddec', d: 'M -0.08,0.886 L 0.76,0.091', tone: 'purple', strokeWidth: 2.6 },
      { layer: 'layer-sinc', d: 'M 0.28,0.091 L 1.12,0.886', tone: 'green',  strokeWidth: 2.6 },
      { layer: 'layer-sdec', d: 'M -0.08,0.091 L 0.76,0.886', tone: 'purple', strokeWidth: 2.6 }
    ],

    points: [
      { x: 0.52, y: 0.49, tone: 'slate', radius: 6, label: 'E', labelDx: 11, labelDy: -9, anchor: 'start' },
      { layer: 'layer-dinc', x: 0.611, y: 0.573, tone: 'green',  radius: 6, hollow: true },
      { layer: 'layer-ddec', x: 0.432, y: 0.404, tone: 'purple', radius: 6, hollow: true },
      { layer: 'layer-sinc', x: 0.611, y: 0.404, tone: 'green',  radius: 6, hollow: true },
      { layer: 'layer-sdec', x: 0.432, y: 0.573, tone: 'purple', radius: 6, hollow: true }
    ],

    arrows: [
      { layer: 'layer-dinc', x1: 0, y1: 0.573, x2: 0.611, y2: 0.573, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-dinc', x1: 0.611, y1: 0.573, x2: 0.611, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-ddec', x1: 0, y1: 0.404, x2: 0.432, y2: 0.404, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-ddec', x1: 0.432, y1: 0.404, x2: 0.432, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-sinc', x1: 0, y1: 0.404, x2: 0.611, y2: 0.404, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-sinc', x1: 0.611, y1: 0.404, x2: 0.611, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-sdec', x1: 0, y1: 0.573, x2: 0.432, y2: 0.573, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-sdec', x1: 0.432, y1: 0.573, x2: 0.432, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 }
    ],

    texts: [
      { layer: 'layer-dinc', x: 0.93, y: 0.36, text: 'D₂', tone: 'green',  bold: true, fontSize: 14, anchor: 'middle' },
      { layer: 'layer-dinc', x: 0.645, y: 0.61, text: 'E₂', tone: 'green', bold: true, fontSize: 13, anchor: 'start' },
      { layer: 'layer-ddec', x: 0.55, y: 0.17, text: 'D₃', tone: 'purple', bold: true, fontSize: 14, anchor: 'middle' },
      { layer: 'layer-ddec', x: 0.40, y: 0.43, text: 'E₃', tone: 'purple', bold: true, fontSize: 13, anchor: 'end' },
      { layer: 'layer-sinc', x: 0.93, y: 0.70, text: 'S₂', tone: 'green',  bold: true, fontSize: 14, anchor: 'middle' },
      { layer: 'layer-sinc', x: 0.645, y: 0.44, text: 'E₂', tone: 'green', bold: true, fontSize: 13, anchor: 'start' },
      { layer: 'layer-sdec', x: 0.45, y: 0.73, text: 'S₃', tone: 'purple', bold: true, fontSize: 14, anchor: 'middle' },
      { layer: 'layer-sdec', x: 0.40, y: 0.60, text: 'E₃', tone: 'purple', bold: true, fontSize: 13, anchor: 'end' }
    ]
  };
})();
