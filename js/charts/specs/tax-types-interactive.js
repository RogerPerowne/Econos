/* ============================================================
   Tax Types Interactive — engine spec for taxTypesInteractive.
   Indirect-taxes-and-subsidies + government-intervention-in-markets.

   2-layer exclusive comparison of two tax mechanics:
     base    → free-market D, S, E₀ at (Q₀, P₀)
     view 1  → SPECIFIC tax (e.g. fuel duty £T/litre) — supply
                curve shifts PARALLEL up by constant £T at every
                quantity. The wedge between S and S+T is constant.
     view 2  → AD VALOREM tax (e.g. 20% VAT) — supply curve
                PIVOTS up so the wedge widens as price rises.

   Mutually exclusive: each view shows ITS tax type only, not both
   stacked. `layerMode: 'exclusive'`.

   Geometry preserved from the original.
   ============================================================ */
(function () {
  'use strict';

  var E0 = { x: 0.544, y: 0.478 };

  window.ECONOS_TAX_TYPES_INTERACTIVE_SPEC = {
    width: 440,
    height: 300,
    chartArea: { x: 55, y: 18, width: 360, height: 247 },
    className: 'tax-types-interactive-svg',
    layers: ['idl-1', 'idl-2'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Quantity (Q)' },
      y: { label: 'Price (P)' }
    },

    curves: [
      /* Base: D and S — always visible */
      { d: 'M 0.069,0.903 L 0.972,0.093',
        tone: 'blue', label: 'D', strokeWidth: 2.5,
        labelDx: 6, labelDy: -4, anchor: 'start' },
      { d: 'M 0.069,0.093 L 0.944,0.797',
        tone: 'green', label: 'S', strokeWidth: 2.5,
        labelDx: 6, labelDy: -4, anchor: 'start' },

      /* View 1 — SPECIFIC tax: parallel shift up by 0.162 */
      { d: 'M 0.069,0.255 L 0.944,0.959',
        tone: 'blue', label: 'S + T (specific)', strokeWidth: 2.2,
        dashed: '7 4',
        labelDx: -10, labelDy: -8, anchor: 'end',
        layer: 'idl-1' },

      /* View 2 — AD VALOREM tax: pivot from origin so the gap
         widens at high prices */
      { d: 'M 0.069,0.117 L 0.944,1.077',
        tone: 'amber', label: 'S + T% (ad valorem)', strokeWidth: 2.2,
        dashed: '7 4',
        labelDx: -10, labelDy: -8, anchor: 'end',
        layer: 'idl-2' }
    ],

    points: [
      { x: E0.x, y: E0.y, tone: 'slate', radius: 4.5,
        gridlines: 'slate', ticks: { x: 'Q₀', y: 'P₀' } },

      /* View 1: post-tax equilibrium on D ∩ (S+T specific) */
      { x: 0.450, y: 0.563, tone: 'blue', radius: 4.5,
        gridlines: 'blue', ticks: { x: 'Qt', y: 'Pc' },
        layer: 'idl-1' },
      /* View 2: post-tax equilibrium on D ∩ (S+T% ad valorem) */
      { x: 0.475, y: 0.539, tone: 'amber', radius: 4.5,
        layer: 'idl-2' }
    ],

    boxedLabels: [
      { x: 0.230, y: 0.910, w: 0.460, h: 0.072,
        tone: 'blue', lines: ['Parallel shift — constant gap'],
        layer: 'idl-1' },
      { x: 0.230, y: 0.815, w: 0.460, h: 0.072,
        tone: 'amber', lines: ['Pivot shift — widening gap'],
        layer: 'idl-2' }
    ]
  };
})();
