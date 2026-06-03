/* ============================================================
   Disequilibrium Interactive — engine spec for disequilibriumInteractive
   (Price-determination card 2). Layered spec for the `interactiveDiagram`
   block (chart left, description right, steps below).

   Persistent: D (downward), S (upward), equilibrium E.
   Mutually-exclusive states (show: ['layer-*']):
     layer-base     → Pₑ/Qₑ reference lines at E
     layer-surplus  → price P₁ above Pₑ: Qd < Qs → surplus (excess supply)
     layer-short    → price P₂ below Pₑ: Qd > Qs → shortage (excess demand)

   The excess is shown as a double-headed arrow BELOW the quantity axis,
   spanning Qd→Qs, with dashed droplines from the two curve points.

   Geometry (chart-space, y up):
     D: (0.10,0.886) → (0.94,0.091)   S: (0.10,0.091) → (0.94,0.886)
     E ≈ (0.52,0.49)
     P₁ = 0.66 : Qd=0.34 (on D), Qs=0.70 (on S)
     P₂ = 0.32 : Qd=0.70 (on D), Qs=0.34 (on S)
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_DISEQUILIBRIUM_SPEC = {
    width: 700,
    height: 500,
    chartArea: { x: 84, y: 38, width: 534, height: 384 },
    className: 'pd-diseq-svg',
    layers: ['layer-base', 'layer-surplus', 'layer-short'],
    layerMode: 'exclusive',
    defs:
      '<marker id="pd-a-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#B45309"/></marker>' +
      '<marker id="pd-a-start" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto"><path d="M8,0 L8,6 L0,3 z" fill="#B45309"/></marker>' +
      '<marker id="pd-b-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#1E3A8A"/></marker>' +
      '<marker id="pd-b-start" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto"><path d="M8,0 L8,6 L0,3 z" fill="#1E3A8A"/></marker>',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    curves: [
      { d: 'M 0.10,0.886 L 0.94,0.091', tone: 'blue',  label: 'D', strokeWidth: 3, labelDx: 8, labelDy: -4 },
      { d: 'M 0.10,0.091 L 0.94,0.886', tone: 'amber', label: 'S', strokeWidth: 3, labelDx: 8, labelDy: -4 }
    ],

    points: [
      { x: 0.52, y: 0.49, tone: 'slate', radius: 6, label: 'E', labelDx: 11, labelDy: -9, anchor: 'start' },
      { layer: 'layer-surplus', x: 0.34, y: 0.66, tone: 'blue',  radius: 5 },
      { layer: 'layer-surplus', x: 0.70, y: 0.66, tone: 'amber', radius: 5 },
      { layer: 'layer-short', x: 0.70, y: 0.32, tone: 'blue',  radius: 5 },
      { layer: 'layer-short', x: 0.34, y: 0.32, tone: 'amber', radius: 5 }
    ],

    arrows: [
      /* base — Pₑ/Qₑ leaders */
      { layer: 'layer-base', x1: 0, y1: 0.49, x2: 0.52, y2: 0.49, tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 },
      { layer: 'layer-base', x1: 0.52, y1: 0.49, x2: 0.52, y2: 0, tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 },

      /* surplus — P₁ price line, droplines, excess arrow BELOW axis, price pressure */
      { layer: 'layer-surplus', x1: 0, y1: 0.66, x2: 0.70, y2: 0.66, tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 },
      { layer: 'layer-surplus', x1: 0.34, y1: 0.66, x2: 0.34, y2: -0.085, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-surplus', x1: 0.70, y1: 0.66, x2: 0.70, y2: -0.085, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-surplus', x1: 0.345, y1: -0.085, x2: 0.695, y2: -0.085, tone: 'amber', strokeWidth: 2.4, markerStart: 'pd-a-start', markerEnd: 'pd-a-end', buffer: 0 },
      { layer: 'layer-surplus', x1: 0.06, y1: 0.63, x2: 0.06, y2: 0.52, tone: 'amber', strokeWidth: 2.4, markerEnd: 'pd-a-end', buffer: 0 },

      /* shortage — P₂ price line, droplines, excess arrow BELOW axis, price pressure */
      { layer: 'layer-short', x1: 0, y1: 0.32, x2: 0.70, y2: 0.32, tone: 'slate', strokeWidth: 1.4, dashed: '5 4', buffer: 0 },
      { layer: 'layer-short', x1: 0.34, y1: 0.32, x2: 0.34, y2: -0.085, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-short', x1: 0.70, y1: 0.32, x2: 0.70, y2: -0.085, tone: 'slate', strokeWidth: 1, dashed: '4 3', buffer: 0 },
      { layer: 'layer-short', x1: 0.345, y1: -0.085, x2: 0.695, y2: -0.085, tone: 'blue', strokeWidth: 2.4, markerStart: 'pd-b-start', markerEnd: 'pd-b-end', buffer: 0 },
      { layer: 'layer-short', x1: 0.06, y1: 0.35, x2: 0.06, y2: 0.46, tone: 'blue', strokeWidth: 2.4, markerEnd: 'pd-b-end', buffer: 0 }
    ],

    texts: [
      { layer: 'layer-base', x: -0.02, y: 0.49, text: 'Pₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { layer: 'layer-base', x: 0.52, y: -0.07, text: 'Qₑ', tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'middle' },

      { layer: 'layer-surplus', x: -0.02, y: 0.66, text: 'P₁', tone: 'amber', bold: true, fontSize: 13, anchor: 'end' },
      { layer: 'layer-surplus', x: 0.34, y: -0.05, text: 'Q₁', tone: 'blue',  bold: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-surplus', x: 0.70, y: -0.05, text: 'Q₂', tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-surplus', x: 0.52, y: -0.155, text: 'Surplus = excess supply (Q₂ − Q₁)', tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' },

      { layer: 'layer-short', x: -0.02, y: 0.32, text: 'P₂', tone: 'blue', bold: true, fontSize: 13, anchor: 'end' },
      { layer: 'layer-short', x: 0.70, y: -0.05, text: 'Q₁', tone: 'blue',  bold: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-short', x: 0.34, y: -0.05, text: 'Q₂', tone: 'amber', bold: true, fontSize: 12, anchor: 'middle' },
      { layer: 'layer-short', x: 0.52, y: -0.155, text: 'Shortage = excess demand (Q₁ − Q₂)', tone: 'blue', bold: true, fontSize: 12, anchor: 'middle' }
    ]
  };
})();
