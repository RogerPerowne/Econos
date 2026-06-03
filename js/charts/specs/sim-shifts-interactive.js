/* ============================================================
   Simultaneous Shifts Interactive — engine spec for
   simultaneousShiftsInteractive (Price-determination card 4). Layered
   spec for the `interactiveDiagram` block: BOTH curves shift, so one
   variable is determinate and the other is ambiguous.

   Persistent: original D, S, E.
   States (show: ['layer-*']):
     layer-both → D→D₂ and S→S₂ (both right): Q rises (certain),
                  P ambiguous (shown ≈ unchanged with equal shifts).
     layer-dups → D→D₂ (right) and S→S₃ (left): P rises (certain),
                  Q ambiguous (shown ≈ unchanged).

   New equilibria solved from the shifted pairs:
     both: (0.70, 0.488)   d-up/s-down: (0.522, 0.658)
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_SIM_SHIFTS_SPEC = {
    width: 700,
    height: 480,
    chartArea: { x: 84, y: 40, width: 534, height: 372 },
    className: 'pd-sim-svg',
    layers: ['layer-both', 'layer-dups'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    curves: [
      { d: 'M 0.10,0.886 L 0.94,0.091', tone: 'blue',  label: 'D', strokeWidth: 3, labelDx: 8, labelDy: -4 },
      { d: 'M 0.10,0.091 L 0.94,0.886', tone: 'amber', label: 'S', strokeWidth: 3, labelDx: 8, labelDy: -4 },

      /* both increase */
      { layer: 'layer-both', d: 'M 0.28,0.886 L 1.12,0.091', tone: 'green', strokeWidth: 2.6 },
      { layer: 'layer-both', d: 'M 0.28,0.091 L 1.12,0.886', tone: 'green', strokeWidth: 2.6 },

      /* demand up, supply down */
      { layer: 'layer-dups', d: 'M 0.28,0.886 L 1.12,0.091', tone: 'green',  strokeWidth: 2.6 },
      { layer: 'layer-dups', d: 'M -0.08,0.091 L 0.76,0.886', tone: 'purple', strokeWidth: 2.6 }
    ],

    points: [
      { x: 0.52, y: 0.49, tone: 'slate', radius: 6, label: 'E', labelDx: -14, labelDy: -9, anchor: 'end' },
      { layer: 'layer-both', x: 0.70, y: 0.488, tone: 'green', radius: 6, hollow: true },
      { layer: 'layer-dups', x: 0.522, y: 0.658, tone: 'purple', radius: 6, hollow: true }
    ],

    arrows: [
      { layer: 'layer-both', x1: 0, y1: 0.488, x2: 0.70, y2: 0.488, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-both', x1: 0.70, y1: 0.488, x2: 0.70, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-dups', x1: 0, y1: 0.658, x2: 0.522, y2: 0.658, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-dups', x1: 0.522, y1: 0.658, x2: 0.522, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 }
    ],

    texts: [
      { layer: 'layer-both', x: 0.95, y: 0.36, text: 'D₂', tone: 'green', bold: true, fontSize: 13, anchor: 'middle' },
      { layer: 'layer-both', x: 0.95, y: 0.66, text: 'S₂', tone: 'green', bold: true, fontSize: 13, anchor: 'middle' },
      { layer: 'layer-both', x: 0.73, y: 0.52, text: 'E₂', tone: 'green', bold: true, fontSize: 13, anchor: 'start' },
      { layer: 'layer-both', x: 0.40, y: -0.155, text: 'Q rises · P ambiguous', tone: 'green', bold: true, fontSize: 12, anchor: 'middle' },

      { layer: 'layer-dups', x: 0.95, y: 0.36, text: 'D₂', tone: 'green',  bold: true, fontSize: 13, anchor: 'middle' },
      { layer: 'layer-dups', x: 0.46, y: 0.74, text: 'S₃', tone: 'purple', bold: true, fontSize: 13, anchor: 'middle' },
      { layer: 'layer-dups', x: 0.545, y: 0.69, text: 'E₂', tone: 'purple', bold: true, fontSize: 13, anchor: 'start' },
      { layer: 'layer-dups', x: 0.40, y: -0.155, text: 'P rises · Q ambiguous', tone: 'purple', bold: true, fontSize: 12, anchor: 'middle' }
    ]
  };
})();
