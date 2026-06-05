/* ============================================================
   Tax Incidence Interactive – engine spec for taxIncidenceInteractive.
   CPS topic, indirect-taxes-and-subsidies topic,
   government-intervention-in-markets topic.

   Mirror of subsidyInteractive – same chart pattern but for a
   per-unit tax instead of a subsidy:
     base    → D, S, S+T (taxed supply shifted UP/left), E₀ at
                D ∩ S, E_t at D ∩ (S+T) – labelled Pc (consumer
                pays MORE), Pp (producer receives LESS), Qt.
                Vertical tax bracket between Pp and Pc.
     view 1  → consumer BURDEN region – rectangle from y-axis to
                Qt between P₀ and Pc (above original price).
     view 2  → adds producer BURDEN region – between P₀ and Pp
                (below original price).
     view 3  → adds total TAX REVENUE outline – dashed purple
                rectangle = £T × Qt.

   Geometry preserved from the original.
   ============================================================ */
(function () {
  'use strict';

  var E0 = { x: 0.544, y: 0.478 };  // SVG (251, 147)
  var Et = { x: 0.403, y: 0.603 };  // SVG (200, 116) – on D at Pc
  var Pc = 0.603;                    // consumer pays more (higher)
  var Pp = 0.360;                    // producer receives less (lower) – SVG y=176
  var Qt = 0.403;                    // taxed quantity

  window.ECONOS_TAX_INCIDENCE_INTERACTIVE_SPEC = {
    width: 440,
    height: 300,
    chartArea: { x: 55, y: 18, width: 360, height: 247 },
    className: 'tax-incidence-interactive-svg',
    layers: ['idl-1', 'idl-2', 'idl-3'],
    axes: {
      x: { label: 'Quantity (Q)' },
      y: { label: 'Price (P)' }
    },

    curves: [
      { d: 'M 0.069,0.903 L 0.972,0.093',
        tone: 'blue', label: 'D', strokeWidth: 2.5,
        labelDx: 6, labelDy: -4, anchor: 'start' },
      { d: 'M 0.069,0.093 L 0.944,0.797',
        tone: 'green', label: 'S', strokeWidth: 2.5,
        labelDx: 6, labelDy: -4, anchor: 'start' },
      { d: 'M 0.069,0.336 L 0.944,1.040',
        tone: 'blue', label: 'S + T', strokeWidth: 2.2,
        dashed: '7 4',
        labelDx: 6, labelDy: -4, anchor: 'start' }
    ],

    points: [
      { x: E0.x, y: E0.y, tone: 'slate', radius: 4.5,
        gridlines: 'slate', ticks: { x: 'Q₀', y: 'P₀' } },
      { x: Et.x, y: Et.y, tone: 'blue', radius: 4.5,
        gridlines: 'blue', ticks: { x: 'Qt', y: 'Pc' } }
    ],

    texts: [
      /* Pp horizontal label on the y-axis */
      { x: -0.020, y: Pp, text: 'Pp', tone: 'red', bold: true,
        anchor: 'end' },

      /* Layer 1: consumer burden rectangle label */
      { x: Qt / 2, y: (E0.y + Pc) / 2, text: 'Consumer burden',
        tone: 'blue', bold: true, anchor: 'middle',
        layer: 'idl-1' },
      /* Layer 2: producer burden rectangle label */
      { x: Qt / 2, y: (E0.y + Pp) / 2, text: 'Producer burden',
        tone: 'red', bold: true, anchor: 'middle',
        layer: 'idl-2' },
      /* Layer 3: tax revenue caption above the outline */
      { x: Qt / 2, y: Pc + 0.075, text: 'Tax revenue = £T × Qt',
        tone: 'purple', bold: true, anchor: 'middle',
        layer: 'idl-3' },

      /* Tax bracket caption (right of the bracket) */
      { x: Qt + 0.025, y: (Pc + Pp) / 2, text: 'Tax = £T',
        tone: 'slate', bold: true }
    ],

    boxedLabels: [
      /* Layer 1: consumer burden – between Pc and P₀ */
      { x: 0, y: Pc, w: Qt, h: Pc - E0.y,
        tone: 'blue', lines: [],
        layer: 'idl-1' },
      /* Layer 2: producer burden – between P₀ and Pp */
      { x: 0, y: E0.y, w: Qt, h: E0.y - Pp,
        tone: 'red', lines: [],
        layer: 'idl-2' },
      /* Layer 3: full tax revenue outline – between Pc and Pp */
      { x: 0, y: Pc, w: Qt, h: Pc - Pp,
        tone: 'purple', lines: [],
        layer: 'idl-3' }
    ]
  };
})();
