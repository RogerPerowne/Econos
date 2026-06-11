/* ============================================================
   AD Shift Interactive – engine spec for adShiftInteractive.
   Aggregate-supply card 7 chart 1 "Demand-side stimulus".

   A rightward AD shift on a sloped SRAS – short-run analysis:
     base    → SRAS, AD₁ solid, E₁ at AD₁ ∩ SRAS midpoint
     view 1  → AD₁ redrawn DASHED + new AD₂ solid further right
               + rightward shift arrow
     view 2  → adds E₂ on AD₂ ∩ SRAS (Y₂ > Y₁ AND P₂ > P₁)
               + gridlines/ticks

   The lesson is short-run "demand-pull inflation": AD stimulus
   raises both output and the price level. Card 3 owns the
   Classical/Keynesian long-run debate; this card stays clean
   short-run for a focused demand-vs-supply comparison.

   `inverseLayers: ['idl-old-solid']` swaps AD₁ solid for dashed
   when any view becomes active.

   Yf₁ (=E₁.x) sits at the AD₁ ∩ SRAS midpoint so the original
   equilibrium is the geometric centre. AD₂ shifts right by 0.222
   (parallel translate, same slope as AD₁) – E₂ lands cleanly at
   the right-of-centre AD₂ ∩ SRAS intersection.
   ============================================================ */
(function () {
  'use strict';

  var E1 = { x: 0.514, y: 0.481 };
  var E2 = { x: 0.625, y: 0.591 };

  window.ECONOS_AD_SHIFT_INTERACTIVE_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'ad-shift-interactive-svg',
    layers: ['idl-1', 'idl-2'],
    inverseLayers: ['idl-old-solid'],

    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      // Base SRAS – always visible, upward sloping
      { d: 'M 0.097,0.067 L 0.931,0.894',
        tone: 'slate', label: 'SRAS', strokeWidth: 2,
        labelDx: -6, labelDy: -6, anchor: 'end' },
      // Base AD₁ solid – hidden once any view becomes active
      { d: 'M 0.097,0.894 L 0.931,0.067',
        tone: 'blue', label: 'AD₁', strokeWidth: 2,
        labelDx: -6, labelDy: 6, anchor: 'end',
        layer: 'idl-old-solid' },
      // Layer 1: AD₁ redrawn dashed (replaces the solid)
      { d: 'M 0.097,0.894 L 0.931,0.067',
        tone: 'blue', label: 'AD₁', strokeWidth: 1.6,
        dashed: '6 4', labelDx: -6, labelDy: 6, anchor: 'end',
        layer: 'idl-1' },
      // Layer 1: new AD₂ solid blue, shifted right (clipped at right edge)
      // Curve trimmed to end AT chart x=1.0 (same as ad-demand-pull's
      // AD₂) so the label anchors on the VISIBLE curve end, not the
      // off-stage extension. Auto-clip means the visual is unchanged.
      { d: 'M 0.319,0.894 L 1.000,0.218',
        tone: 'blue', label: 'AD₂', strokeWidth: 2.2,
        labelDx: -6, labelDy: -6, anchor: 'end',
        layer: 'idl-1' }
    ],

    points: [
      // Base E₁ at AD₁ ∩ SRAS
      { x: E1.x, y: E1.y, tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: -10, labelDy: -4, anchor: 'end' },
      // Layer 2: E₂ at AD₂ ∩ SRAS – both Y and P rise
      { x: E2.x, y: E2.y, tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'blue', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 10, labelDy: -4, anchor: 'start',
        layer: 'idl-2' }
    ],

    arrows: [
      // Layer 1: rightward AD shift arrow, mid-upper area
      { x1: 0.490, y1: 0.835, x2: 0.625, y2: 0.835,
        tone: 'blue', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-blue', buffer: 0, layer: 'idl-1' }
    ]
  };
})();
