/* ============================================================
   Market Equilibrium – engine spec for equilibriumBasic
   (Price-determination card 1). Layered spec for the
   `interactiveDiagram` block.

   Persistent: D (downward), S (upward).
   States (show: ['layer-*']):
     []              → just the two curves
     layer-e         → equilibrium E with Pₑ/Qₑ leaders
     layer-e+clear   → adds the "Qd = Qs at E" market-clearing note

   D: (0.10,0.886) → (0.94,0.091)   S: (0.10,0.091) → (0.94,0.886)
   E ≈ (0.52,0.49)
   ============================================================ */
(function () {
  'use strict';

  var E = { x: 0.52, y: 0.49 };

  window.ECONOS_EQUILIBRIUM_BASIC_SPEC = {
    width: 700,
    height: 480,
    chartArea: { x: 84, y: 40, width: 534, height: 372 },
    className: 'pd-eqm-svg',
    layers: ['layer-e', 'layer-clear'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    curves: [
      { d: 'M 0.10,0.886 L 0.94,0.091', tone: 'blue',  label: 'D', strokeWidth: 3, labelDx: 8, labelDy: -4 },
      { d: 'M 0.10,0.091 L 0.94,0.886', tone: 'amber', label: 'S', strokeWidth: 3, labelDx: 8, labelDy: -4 }
    ],

    points: [
      { layer: 'layer-e', x: E.x, y: E.y, tone: 'slate', radius: 6, label: 'E', labelDx: 12, labelDy: -9, anchor: 'start' },
      { layer: 'layer-clear', x: E.x, y: E.y, tone: 'green', radius: 11, hollow: true }
    ],

    arrows: [
      { layer: 'layer-e', x1: 0, y1: E.y, x2: E.x, y2: E.y, tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 },
      { layer: 'layer-e', x1: E.x, y1: E.y, x2: E.x, y2: 0, tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 }
    ],

    texts: [
      { layer: 'layer-e', x: -0.02, y: E.y, text: 'Pₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { layer: 'layer-e', x: E.x, y: -0.07, text: 'Qₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' },
      { layer: 'layer-clear', x: 0.66, y: 0.40, text: 'Qd = Qs', tone: 'green', bold: true, fontSize: 13, anchor: 'start' },
      { layer: 'layer-clear', x: 0.66, y: 0.345, text: 'no pressure on price', tone: 'green', fontSize: 11.5, anchor: 'start' }
    ]
  };
})();
