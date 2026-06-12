/* ============================================================
   LRAS Shift Diagram – engine spec for lrasShiftDiagram.
   Aggregate-supply card 5 "Shifts in LRAS – capacity expansion".

   A rightward LRAS shift (capacity growth – better technology,
   higher productivity, more capital, more labour):
     base    → AD, SRAS, LRAS₁ solid, E₁ at the triple intersection
     view 1  → LRAS₁ redrawn DASHED + new LRAS₂ solid further
               right + rightward shift arrow at top
     view 2  → adds E₂ on the AD ∩ LRAS₂ intersection
               (Y₂ > Y₁, P₂ < P₁) + gridlines/ticks + growth arrow

   `inverseLayers: ['idl-old-solid']` swaps the LRAS₁ solid for a
   dashed variant the moment a view becomes active.

   Yf₁ is placed at the AD ∩ SRAS midpoint so the original LRAS₁
   intersects all three curves at E₁. Yf₂ is shifted right by ~25%
   of chart width – capacity-growth visible without compressing
   the right edge.

   Both Classical and Keynesian schools agree on what rightward
   LRAS shifts mean (more capacity → potential output rises), so
   no perspective toggle here.
   ============================================================ */
(function () {
  'use strict';

  // Geometry – same AD/SRAS family as sras-shift-interactive so
  // the AS topic's charts share a visual vocabulary.
  var Yf1 = 0.514;          // E₁.x – AD ∩ SRAS midpoint
  var Yf2 = 0.764;          // Yf₁ + 0.25 – clean rightward shift
  var E1  = { x: Yf1, y: 0.481 };   // SRAS(Yf₁) = AD(Yf₁)
  var E2  = { x: Yf2, y: 0.232 };   // AD(Yf₂) – long-run eq on AD

  window.ECONOS_LRAS_SHIFT_DIAGRAM_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'lras-shift-diagram-svg',
    layers: ['sras', 'idl-1', 'idl-2'],
    inverseLayers: ['idl-old-solid'],

    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      // Base AD – always visible, downward sloping
      { d: 'M 0.097,0.894 L 0.931,0.067',
        tone: 'blue', label: 'AD', strokeWidth: 2,
        labelDx: -6, labelDy: 6, anchor: 'end' },
      // SRAS – shown in Today/Capacity-grows; dropped on the Tomorrow
      // view so the long-run growth story reads as a clean AD + LRAS
      // shift (E₂ sits on AD ∩ LRAS₂, no stray SRAS to float off).
      { d: 'M 0.097,0.067 L 0.931,0.894',
        tone: 'slate', label: 'SRAS', strokeWidth: 2,
        labelDx: -6, labelDy: -6, anchor: 'end', layer: 'sras' },
      // Base LRAS₁ solid – hidden once any view becomes active
      { d: 'M ' + Yf1 + ',0 L ' + Yf1 + ',1',
        tone: 'green', label: 'LRAS₁', strokeWidth: 2.5,
        labelDx: 0, labelDy: -10, anchor: 'middle',
        layer: 'idl-old-solid' },
      // Layer 1: LRAS₁ redrawn dashed (replaces the solid)
      { d: 'M ' + Yf1 + ',0 L ' + Yf1 + ',1',
        tone: 'green', label: 'LRAS₁', strokeWidth: 1.8,
        dashed: '6 4',
        labelDx: 0, labelDy: -10, anchor: 'middle',
        layer: 'idl-1' },
      // Layer 1: new LRAS₂ solid green, shifted right
      { d: 'M ' + Yf2 + ',0 L ' + Yf2 + ',1',
        tone: 'green', label: 'LRAS₂', strokeWidth: 2.5,
        labelDx: 0, labelDy: -10, anchor: 'middle',
        layer: 'idl-1' }
    ],

    points: [
      // Base E₁ at the triple intersection with dashed gridlines + ticks
      { x: E1.x, y: E1.y, tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: -10, labelDy: -4, anchor: 'end' },
      // Layer 2: E₂ at the new AD ∩ LRAS₂ intersection
      { x: E2.x, y: E2.y, tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 10, labelDy: -4, anchor: 'start',
        layer: 'idl-2' }
    ],

    arrows: [
      // Layer 1: rightward shift arrow near the top of the chart
      { x1: Yf1 + 0.020, y1: 0.929, x2: Yf2 - 0.020, y2: 0.929,
        tone: 'green', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-green', buffer: 0, layer: 'idl-1' },
      // Layer 2: growth arrow along the x-axis
      { x1: Yf1 + 0.020, y1: -0.039, x2: Yf2 - 0.020, y2: -0.039,
        tone: 'green', strokeWidth: 1.5,
        markerEnd: 'econos-arrow-green', buffer: 0, layer: 'idl-2' }
    ]
  };
})();
