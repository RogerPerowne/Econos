/* ============================================================
   SRAS Shift Interactive – engine spec for srasShiftInteractive.
   Aggregate-supply card 4 "Shifts in SRAS – cost shocks".

   Demonstrates a leftward SRAS shift (cost-push):
     base    → AD, SRAS₁ solid, E₁ at (Y₁, P₁) with dashed gridlines
     view 1  → SRAS₁ redrawn DASHED (idl-old-solid hides original solid),
               new SRAS₂ solid red, left-shift arrow
     view 2  → adds E₂ + P₂/Y₂ dashed gridlines + "Stagflation" badge

   `inverseLayers: ['idl-old-solid']` swaps the SRAS₁ solid for a
   dashed variant the moment the user steps into a view.
   ============================================================ */
(function () {
  'use strict';

  var E1 = { x: 0.514, y: 0.480 };
  var E2 = { x: 0.425, y: 0.567 };

  window.ECONOS_SRAS_SHIFT_INTERACTIVE_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'sras-shift-interactive-svg',
    layers: ['idl-1', 'idl-2'],
    inverseLayers: ['idl-old-solid'],
    defs:
      '<marker id="srs-arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626"/></marker>',
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      // Base AD line (always visible)
      { d: 'M 0.097,0.894 L 0.931,0.067',
        tone: 'blue', label: 'AD', strokeWidth: 2,
        labelDx: -6, labelDy: 6, anchor: 'end' },
      // Base SRAS₁ solid – hidden once any view becomes active
      { d: 'M 0.097,0.067 L 0.931,0.894',
        tone: 'slate', label: 'SRAS₁', strokeWidth: 2,
        labelDx: -6, labelDy: -6, anchor: 'end',
        layer: 'idl-old-solid' },
      // Layer 1: SRAS₁ redrawn dashed (replaces the solid)
      { d: 'M 0.097,0.067 L 0.931,0.894',
        tone: 'slate', label: 'SRAS₁', strokeWidth: 1.6,
        dashed: '6 4', labelDx: -6, labelDy: -6, anchor: 'end',
        layer: 'idl-1' },
      // Layer 1: new SRAS₂ solid red, shifted left
      { d: 'M 0.097,0.244 L 0.875,1.016',
        tone: 'rose', label: 'SRAS₂', strokeWidth: 2.2,
        labelDx: -6, labelDy: -6, anchor: 'end',
        layer: 'idl-1' }
    ],

    points: [
      // Base E₁ with P₁/Y₁ dashed gridlines and ticks
      { x: E1.x, y: E1.y, tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: 10, labelDy: -4, anchor: 'start' },
      // Layer 2: E₂ in red with P₂/Y₂ red-dashed gridlines and ticks
      { x: E2.x, y: E2.y, tone: 'rose', radius: 5.5, hollow: true,
        gridlines: 'rose', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: -10, labelDy: -4, anchor: 'end',
        layer: 'idl-2' }
    ],

    arrows: [
      // Layer 1: left-shift arrow showing SRAS moving left
      { x1: 0.583, y1: 0.579, x2: 0.492, y2: 0.579,
        tone: 'rose', strokeWidth: 1.5,
        markerEnd: 'srs-arr-red', buffer: 0, layer: 'idl-1' }
    ],

    boxedLabels: [
      // Layer 2: top-left "Stagflation" callout
      { x: 0.019, y: 0.835, w: 0.239, h: 0.071,
        tone: 'rose', lines: ['Stagflation'],
        layer: 'idl-2' }
    ]
  };
})();
