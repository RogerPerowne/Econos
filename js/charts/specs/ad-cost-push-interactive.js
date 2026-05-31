/* ============================================================
   AD Cost-Push Interactive — engine spec for adCostPushInteractive.
   Causes-of-inflation topic — card 3 "Cost-push inflation".

   3-view SRAS-leftward shift sequence. AD stays fixed; the
   pressure comes from the supply side (oil shock, wage round,
   regulation, weak £). The new equilibrium has P↑ and Y↓ —
   the diagnostic tell of cost-push (vs demand-pull's P↑, Y↑).

     base    → AD, SRAS₁, E₁ at (Y₁, P₁)
     view 1  → SRAS₁ redrawn dashed + new SRAS₂ to the left
               + leftward shift arrow
     view 2  → adds E₂ + dashed P₂/Y₂ gridlines + result chip

   No perspective toggle: both Classical and Keynesian schools
   agree on the cost-push mechanics — a leftward AS shift raises
   P and reduces Y. The school-of-thought split is about AD-side
   shocks (see ad-demand-pull-interactive), not supply-side.

   `inverseLayers: ['idl-old-solid']` swaps SRAS₁ solid for dashed
   when any view becomes active.
   ============================================================ */
(function () {
  'use strict';

  // E₁ at AD ∩ SRAS₁ midpoint (matches the demand-pull spec's
  // Keynesian starting point so the two charts share E₁ visually).
  var E1 = { x: 0.514, y: 0.481 };
  // E₂: SRAS₂ shifted left → equilibrium slides UP and LEFT along
  // AD. Same Δx as demand-pull but in the opposite direction.
  var E2 = { x: 0.403, y: 0.591 };

  window.ECONOS_AD_COST_PUSH_INTERACTIVE_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'ad-cost-push-interactive-svg',
    layers: ['idl-1', 'idl-2'],
    inverseLayers: ['idl-old-solid'],
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
      // Layer 1: SRAS₂ shifted left (cost shock)
      { d: 'M -0.125,0.067 L 0.709,0.894',
        tone: 'amber', label: 'SRAS₂', strokeWidth: 2.5,
        labelDx: -6, labelDy: -6, anchor: 'end',
        layer: 'idl-1' }
    ],

    points: [
      { x: E1.x, y: E1.y, tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: 10, labelDy: -4, anchor: 'start' },
      { x: E2.x, y: E2.y, tone: 'amber', radius: 5.5, hollow: true,
        gridlines: 'amber', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: -10, labelDy: -4, anchor: 'end',
        layer: 'idl-2' }
    ],

    arrows: [
      // Layer 1: leftward SRAS shift arrow
      { x1: 0.430, y1: 0.224, x2: 0.300, y2: 0.224,
        tone: 'amber', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-amber', buffer: 0, layer: 'idl-1' }
    ],

    boxedLabels: [
      { x: 0.770, y: 0.780, w: 0.220, h: 0.150,
        tone: 'amber', lines: ['RESULT', 'P ↑', 'Y ↓'],
        layer: 'idl-2' }
    ]
  };
})();
