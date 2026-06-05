/* ============================================================
   AD Movement vs Shift Interactive – engine spec for
   adMovementShiftInteractive.

   The crucial distinction:
     • Change in PRICE LEVEL → MOVEMENT along the same AD curve.
     • Change in any NON-PRICE component (C, I, G, X−M) → SHIFT of
       the whole AD curve.

   The diagram walks through both cases on one set of axes:

     V1  AD₁ + starting point A
     V2  MOVEMENT – P falls → output rises along the SAME AD₁ to B
     V3  SHIFT – back to original P, but a non-price determinant
         change shifts AD₁ → AD₂. New equilibrium at C is on a
         DIFFERENT curve, at the same price level but higher Y.

   Both schools agree on this distinction – no toggle.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_AD_MOVEMENT_SHIFT_INTERACTIVE_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'ad-movement-shift-svg',
    layers: ['mv-arrow', 'point-b', 'ad2', 'sh-arrow', 'point-c'],
    defs:
      '<marker id="adms-arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1D4ED8"/></marker>' +
      '<marker id="adms-arr-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#7C3AED"/></marker>',
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      // AD₁ – original curve, always visible.
      { id: 'AD1', d: 'M 0.10,0.85 L 0.85,0.15',
        tone: 'blue', label: 'AD₁', strokeWidth: 2.5,
        labelDx: -6, labelDy: -10, anchor: 'end' },
      // AD₂ – shifted RIGHT (V3+), parallel.
      { id: 'AD2', d: 'M 0.30,0.85 L 1.00,0.197',
        tone: 'purple', label: 'AD₂', strokeWidth: 2.5,
        labelDx: -4, labelDy: -10, anchor: 'end',
        layer: 'ad2' }
    ],

    points: [
      // Point A – always visible.
      { x: 0.366, y: 0.602,
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { y: 'P₁' },
        label: 'A', labelDx: -10, labelDy: -4, anchor: 'end' },
      // Point B (V2+) – same AD₁, lower P, higher Y.
      { x: 0.633, y: 0.353,
        tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'blue', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'B', labelDx: -10, labelDy: -4, anchor: 'end',
        layer: 'point-b' },
      // Point C (V3+) – same P₁ as A, but on AD₂ – shift.
      { x: 0.580, y: 0.602,
        tone: 'purple', radius: 5.5, hollow: true,
        gridlines: 'purple', ticks: { x: 'Y₃' },
        label: 'C', labelDx: 10, labelDy: -4, anchor: 'start',
        layer: 'point-c' }
    ],

    arrows: [
      // Movement arrow (V2): A → B along AD₁ (diagonal).
      { x1: 0.395, y1: 0.575, x2: 0.605, y2: 0.380,
        tone: 'blue', strokeWidth: 1.6, markerEnd: 'adms-arr-blue',
        buffer: 0, layer: 'mv-arrow' },
      // Shift arrow (V3): A → C horizontally, showing curve has shifted right.
      { x1: 0.395, y1: 0.602, x2: 0.550, y2: 0.602,
        tone: 'purple', strokeWidth: 1.6, markerEnd: 'adms-arr-purple',
        buffer: 0, layer: 'sh-arrow' }
    ],

    texts: [
      // Caption for movement (V2)
      { x: 0.55, y: 0.51, text: 'movement along', tone: 'blue', bold: true,
        fontSize: 10.5, anchor: 'middle', layer: 'mv-arrow' },
      // Caption for shift (V3)
      { x: 0.48, y: 0.640, text: 'shift', tone: 'purple', bold: true,
        fontSize: 10.5, anchor: 'middle', layer: 'sh-arrow' }
    ]
  };
})();
