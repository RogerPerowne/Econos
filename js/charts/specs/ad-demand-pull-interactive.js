/* ============================================================
   AD Demand-Pull Interactive – engine spec for adDemandPullInteractive.
   Causes-of-inflation topic – card 2 "Demand-pull inflation".

   3-view AD-shift sequence with a Classical/Keynesian perspective
   toggle so students see the two textbook outcomes side by side
   for the SAME shock:

     CLASSICAL perspective (default)
       AS = vertical LRAS at Yf. AD₁ → AD₂ raises only the price
       level; Y stays at Yf. Pure long-run demand-pull inflation –
       the "money is neutral" result.

     KEYNESIAN perspective
       AS = sloped SRAS. AD₁ → AD₂ raises P AND Y in the short
       run. Both rise together – Keynes's short-run "excess demand"
       story.

   3 views (cumulative reveal):
     base    → AD₁, AS curve (perspective-specific), E₁
     view 1  → AD₂ + shift arrow
     view 2  → adds E₂ + dashed P₂/Y₂ gridlines + result chip

   The result chips embedded in the chart differ per perspective:
   Classical: "P↑, Y unchanged"; Keynesian: "P↑, Y↑". Strong visual
   anchor for the lesson.
   ============================================================ */
(function () {
  'use strict';

  // Classical equilibrium: E₁ on vertical LRAS at Yf.
  var YF = 0.514;
  var P1 = 0.481;                          // AD₁ at Yf
  var CL_E1 = { x: YF, y: P1 };
  var CL_E2 = { x: YF, y: 0.689 };         // AD₂ at Yf – Y unchanged, P up

  // Keynesian equilibrium: E₁ on AD₁ ∩ SRAS midpoint (same as
  // the AS-topic ad-shift-interactive spec for visual continuity).
  var KY_E1 = { x: 0.514, y: 0.481 };
  var KY_E2 = { x: 0.625, y: 0.591 };

  window.ECONOS_AD_DEMAND_PULL_INTERACTIVE_SPEC = {
    width: 440,
    height: 305,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'ad-demand-pull-interactive-svg',
    layers: ['idl-1', 'idl-2'],
    inverseLayers: ['idl-old-solid'],
    perspectives: ['classical', 'keynesian'],
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      /* ── Classical: vertical LRAS at Yf ───────────────────── */
      { d: 'M ' + YF + ',0 L ' + YF + ',1',
        tone: 'slate', label: 'LRAS', strokeWidth: 2.5,
        labelDx: 8, labelDy: -2, anchor: 'start',
        perspective: 'classical' },
      /* ── Keynesian: sloped SRAS ───────────────────────────── */
      { d: 'M 0.097,0.067 L 0.931,0.894',
        tone: 'slate', label: 'SRAS', strokeWidth: 2,
        labelDx: -6, labelDy: -6, anchor: 'end',
        perspective: 'keynesian' },

      /* ── Base AD₁ solid – hidden once the shift begins ─────── */
      { d: 'M 0.097,0.894 L 0.931,0.067',
        tone: 'blue', label: 'AD₁', strokeWidth: 2,
        labelDx: -6, labelDy: 6, anchor: 'end',
        layer: 'idl-old-solid' },
      /* ── Layer 1: AD₁ redrawn dashed (shifted-from) ────────── */
      { d: 'M 0.097,0.894 L 0.931,0.067',
        tone: 'blue', label: 'AD₁', strokeWidth: 1.6,
        dashed: '6 4', labelDx: -6, labelDy: 6, anchor: 'end',
        layer: 'idl-1' },
      /* ── Layer 1: AD₂ shifted right — same line, same colour ─ */
      // Curve trimmed to end AT chart x=1.0 (was 1.153 with auto-clip).
       // The visual is identical thanks to the clip, but the label is
       // now positioned relative to the VISIBLE end of the curve instead
       // of the off-stage extension – old setup put the label centre
       // ~46px from the line.
      { d: 'M 0.319,0.894 L 1.000,0.218',
        tone: 'blue', label: 'AD₂', strokeWidth: 2.5,
        labelDx: -6, labelDy: -6, anchor: 'end',
        layer: 'idl-1' }
    ],

    points: [
      /* Classical E₁ at (Yf, P₁) on vertical LRAS */
      { x: CL_E1.x, y: CL_E1.y, tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Yf', y: 'P₁' },
        label: 'E₁', labelDx: -10, labelDy: -4, anchor: 'end',
        perspective: 'classical' },
      /* Classical E₂ – directly ABOVE E₁ on vertical LRAS */
      { x: CL_E2.x, y: CL_E2.y, tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { y: 'P₂' },
        label: 'E₂', labelDx: 10, labelDy: -4, anchor: 'start',
        layer: 'idl-2', perspective: 'classical' },

      /* Keynesian E₁ on AD₁ ∩ SRAS */
      { x: KY_E1.x, y: KY_E1.y, tone: 'blue', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: -10, labelDy: -4, anchor: 'end',
        perspective: 'keynesian' },
      /* Keynesian E₂ on AD₂ ∩ SRAS – both P and Y rise */
      { x: KY_E2.x, y: KY_E2.y, tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 10, labelDy: -4, anchor: 'start',
        layer: 'idl-2', perspective: 'keynesian' }
    ],

    arrows: [
      /* AD shift arrow – shared (same AD₁→AD₂ shift in both perspectives) */
      // Seated in the gap between AD₁ (x≈0.156 at y=0.835) and AD₂
      // (x≈0.378) — the old 0.490→0.625 span sat to the RIGHT of AD₂.
      { x1: 0.190, y1: 0.835, x2: 0.330, y2: 0.835,
        tone: 'blue', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-blue', buffer: 0, layer: 'idl-1' }
    ],

    /* Result chips embed the per-perspective outcome inside the chart. */
    boxedLabels: [
      { x: 0.770, y: 0.780, w: 0.220, h: 0.150,
        tone: 'green', lines: ['RESULT', 'P ↑', 'Y unchanged'],
        layer: 'idl-2', perspective: 'classical' },
      { x: 0.770, y: 0.780, w: 0.220, h: 0.150,
        tone: 'green', lines: ['RESULT', 'P ↑', 'Y ↑'],
        layer: 'idl-2', perspective: 'keynesian' }
    ]
  };
})();
