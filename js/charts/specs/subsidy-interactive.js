/* ============================================================
   Subsidy Interactive – engine spec for subsidyInteractive.
   CPS topic, indirect-taxes-and-subsidies topic,
   government-intervention-in-markets topic.

   Cumulative 3-layer reveal of a subsidy on a supply-and-demand
   diagram:
     base    → D, S, S₁ (subsidised supply, shifted DOWN/right),
                E₀ at AD ∩ S₀ midpoint, E_c at D ∩ S₁ – labelled
                Pc (consumer pays), Pp (producer receives), Qs.
                Vertical subsidy bracket between Pp and Pc.
     view 1  → highlight the CONSUMER benefit region – the
                rectangle from y-axis to Qs between P₀ and Pc.
     view 2  → adds the PRODUCER benefit region – from y-axis to
                Qs between Pp and P₀.
     view 3  → adds the TOTAL SUBSIDY COST outline – dashed
                purple rectangle = £S × Qs.

   Geometry preserved from the original hand-rolled SVG so the
   visual swap is seamless.
   ============================================================ */
(function () {
  'use strict';

  var E0 = { x: 0.542, y: 0.482 };  // SVG (250, 146)
  var Ec = { x: 0.644, y: 0.389 };  // SVG (287, 169) – on S₁ at consumer price
  var Pc = 0.389;                    // consumer price (lower)
  var Pp = 0.551;                    // producer receives (higher) – was SVG y=129
  var Qs = 0.644;                    // subsidised quantity

  window.ECONOS_SUBSIDY_INTERACTIVE_SPEC = {
    width: 440,
    height: 300,
    chartArea: { x: 55, y: 18, width: 360, height: 247 },
    className: 'subsidy-interactive-svg',
    layers: ['idl-1', 'idl-2', 'idl-3'],
    axes: {
      x: { label: 'Quantity (Q)' },
      y: { label: 'Price (P)' }
    },

    curves: [
      { d: 'M 0.069,0.903 L 0.972,0.093',
        tone: 'blue', label: 'D', strokeWidth: 2.5,
        labelDx: 6, labelDy: -4, anchor: 'start' },
      { d: 'M 0.153,0.223 L 0.944,0.749',
        tone: 'green', label: 'S', strokeWidth: 2.5,
        labelDx: 6, labelDy: -4, anchor: 'start' },
      { d: 'M 0.153,0.061 L 0.944,0.587',
        tone: 'green', label: 'S₁', strokeWidth: 2,
        dashed: '7 4', opacity: 0.85,
        labelDx: 6, labelDy: 4, anchor: 'start' }
    ],

    points: [
      { x: E0.x, y: E0.y, tone: 'slate', radius: 4.5,
        gridlines: 'slate', ticks: { x: 'Q₀', y: 'P₀' } },
      { x: Ec.x, y: Ec.y, tone: 'green', radius: 4.5,
        gridlines: 'green', ticks: { x: 'Qs', y: 'Pc' } }
    ],

    texts: [
      /* Pp horizontal label on the y-axis */
      { x: -0.020, y: Pp, text: 'Pp', tone: 'green', bold: true,
        anchor: 'end' },

      /* Layer 1: consumer benefit rectangle label */
      { x: Qs / 2, y: (E0.y + Pc) / 2, text: 'Consumer benefit',
        tone: 'blue', bold: true, anchor: 'middle',
        layer: 'idl-1' },
      /* Layer 2: producer benefit rectangle label */
      { x: Qs / 2, y: (E0.y + Pp) / 2, text: 'Producer benefit',
        tone: 'green', bold: true, anchor: 'middle',
        layer: 'idl-2' },
      /* Layer 3: total subsidy cost caption above the outline */
      { x: Qs / 2, y: Pp + 0.075, text: 'Subsidy cost = £S × Qs',
        tone: 'purple', bold: true, anchor: 'middle',
        layer: 'idl-3' },

      /* Subsidy bracket caption (right of the bracket) */
      { x: Qs + 0.020, y: (Pc + Pp) / 2, text: 'Subsidy = £S',
        tone: 'slate', bold: true }
    ],

    boxedLabels: [
      /* Layer 1: consumer benefit highlight – between P₀ and Pc, x-axis to Qs */
      { x: 0, y: E0.y, w: Qs, h: E0.y - Pc,
        tone: 'blue', lines: [],
        layer: 'idl-1' },
      /* Layer 2: producer benefit highlight – between Pp and P₀ */
      { x: 0, y: Pp, w: Qs, h: Pp - E0.y,
        tone: 'green', lines: [],
        layer: 'idl-2' },
      /* Layer 3: full subsidy cost outline – between Pp and Pc */
      { x: 0, y: Pp, w: Qs, h: Pp - Pc,
        tone: 'purple', lines: [],
        layer: 'idl-3' }
    ]
  };
})();
