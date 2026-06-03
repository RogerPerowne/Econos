/* ============================================================
   SRAS Right Shift Interactive — engine spec for srasRightShiftInteractive.
   Aggregate-supply card 7 chart 2 "Supply-side improvement".

   A rightward SRAS shift (productivity boost / lower input costs):
     base    → AD, SRAS₁ solid, E₁ at AD ∩ SRAS₁ midpoint
     view 1  → SRAS₁ redrawn DASHED + new SRAS₂ solid further right
               + rightward shift arrow
     view 2  → adds E₂ on AD ∩ SRAS₂ (Y₂ > Y₁ AND P₂ < P₁)
               + gridlines/ticks

   Contrast with chart 1 on the same card (ad-shift-interactive):
   demand stimulus raises P and Y together; supply improvement
   raises Y while pushing P down. Same chart geometry mirrored —
   makes the comparison visually crisp.

   `inverseLayers: ['idl-old-solid']` swaps SRAS₁ solid for dashed
   when any view becomes active.
   ============================================================ */
(function () {
  'use strict';

  var E1 = { x: 0.514, y: 0.481 };
  var E2 = { x: 0.625, y: 0.371 };

  window.ECONOS_SRAS_RIGHT_SHIFT_INTERACTIVE_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'sras-right-shift-interactive-svg',
    layers: ['idl-1', 'idl-2'],
    inverseLayers: ['idl-old-solid'],
    defs:
      '<marker id="srs-arr-green-r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/></marker>',
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      // Base AD — always visible
      { d: 'M 0.097,0.894 L 0.931,0.067',
        tone: 'blue', label: 'AD', strokeWidth: 2,
        labelDx: -6, labelDy: 6, anchor: 'end' },
      // Base SRAS₁ solid — hidden once any view becomes active
      { d: 'M 0.097,0.067 L 0.931,0.894',
        tone: 'slate', label: 'SRAS₁', strokeWidth: 2,
        labelDx: -6, labelDy: -6, anchor: 'end',
        layer: 'idl-old-solid' },
      // Layer 1: SRAS₁ redrawn dashed
      { d: 'M 0.097,0.067 L 0.931,0.894',
        tone: 'slate', label: 'SRAS₁', strokeWidth: 1.6,
        dashed: '6 4', labelDx: -6, labelDy: -6, anchor: 'end',
        layer: 'idl-1' },
      // Layer 1: SRAS₂ shifted right (clipped at right edge)
      { d: 'M 0.319,0.067 L 1.153,0.894',
        tone: 'green', label: 'SRAS₂', strokeWidth: 2.2,
        // labelDx=-32 keeps the "SRAS₂" (38px wide) right edge inside
        // the 440-wide SVG. Curve auto-clips at x=1.0 but the label
        // anchors to the un-clipped endpoint.
        labelDx: -32, labelDy: -16, anchor: 'end',
        layer: 'idl-1' }
    ],

    points: [
      // Base E₁ at AD ∩ SRAS₁
      { x: E1.x, y: E1.y, tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: -10, labelDy: -4, anchor: 'end' },
      // Layer 2: E₂ at AD ∩ SRAS₂ — Y rises, P falls
      { x: E2.x, y: E2.y, tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 10, labelDy: -4, anchor: 'start',
        layer: 'idl-2' }
    ],

    arrows: [
      // Layer 1: rightward SRAS shift arrow
      { x1: 0.300, y1: 0.224, x2: 0.430, y2: 0.224,
        tone: 'green', strokeWidth: 1.8,
        markerEnd: 'srs-arr-green-r', buffer: 0, layer: 'idl-1' }
    ]
  };
})();
