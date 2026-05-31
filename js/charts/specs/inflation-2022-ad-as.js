/* ============================================================
   Inflation 2022 AD-AS — engine spec for inflation2022AdAs.
   Macro-conflicts topic — card 4 "The 2021–23 inflation surge".

   3-view exclusive-layer AD-AS sequence telling the UK story:
     view 1  → Baseline E₀ on AD₀ ∩ SRAS₀ at LRAS (full capacity)
     view 2  → Both shocks: AD₁ shifted right (post-COVID rebound,
                stimulus) and SRAS₁ shifted left (energy / supply
                shock) → E₁ at HIGHER P, LOWER Y. Stagflation.
     view 3  → BoE response: AD₂ shifted LEFT from AD₁ (rate hikes,
                tighter policy). SRAS₁ persists short-run. E₂ slides
                back down: lower P than E₁, but Y still below Y₀.

   LRAS is always visible (light dashed) as the long-run anchor.
   Mutually exclusive layers — each view is a snapshot in time.
   ============================================================ */
(function () {
  'use strict';

  // chartArea 540×260 inside a 640×340 viewBox.
  var YF  = 0.481;                       // LRAS at SVG x=320 → chart 0.481
  var E0  = { x: 0.426, y: 0.423 };      // SVG (290, 170)
  var E1  = { x: 0.361, y: 0.587 };      // SVG (255, 127.5)
  var E2  = { x: 0.287, y: 0.510 };      // SVG (215, 147.5)

  window.ECONOS_INFLATION_2022_AD_AS_SPEC = {
    width: 640,
    height: 340,
    chartArea: { x: 60, y: 20, width: 540, height: 260 },
    className: 'inflation-2022-ad-as-svg',
    layers: ['idl-1', 'idl-2', 'idl-3'],
    layerMode: 'exclusive',
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      /* LRAS — always visible as the long-run anchor */
      { d: 'M ' + YF + ',0 L ' + YF + ',1',
        tone: 'slate', label: 'LRAS', strokeWidth: 1.2, dashed: '5 5',
        opacity: 0.6,
        labelDx: 8, labelDy: -2, anchor: 'start' },

      /* ── View 1: pre-shock baseline ─────────────────────── */
      { d: 'M 0.056,0.808 L 0.833,0.000',
        tone: 'blue', label: 'AD₀', strokeWidth: 2.6,
        labelDx: -6, labelDy: 14, anchor: 'end',
        layer: 'idl-1' },
      { d: 'M 0.056,0.038 L 0.889,0.904',
        tone: 'slate', label: 'SRAS₀', strokeWidth: 2.6,
        labelDx: -6, labelDy: -6, anchor: 'end',
        layer: 'idl-1' },

      /* ── View 2: both shocks hit ───────────────────────── */
      // AD₀ faded
      { d: 'M 0.056,0.808 L 0.833,0.000',
        tone: 'slate', label: 'AD₀', strokeWidth: 1.8, dashed: '5 4',
        opacity: 0.55,
        labelDx: -6, labelDy: 14, anchor: 'end',
        layer: 'idl-2' },
      // SRAS₀ faded
      { d: 'M 0.056,0.038 L 0.889,0.904',
        tone: 'slate', label: 'SRAS₀', strokeWidth: 1.8, dashed: '5 4',
        opacity: 0.55,
        labelDx: -6, labelDy: -6, anchor: 'end',
        layer: 'idl-2' },
      // AD₁ shifted right
      { d: 'M 0.130,0.827 L 0.889,0.038',
        tone: 'blue', label: 'AD₁', strokeWidth: 2.6,
        labelDx: -6, labelDy: 14, anchor: 'end',
        layer: 'idl-2' },
      // SRAS₁ shifted left
      { d: 'M 0.000,0.212 L 0.704,0.942',
        tone: 'red', label: 'SRAS₁', strokeWidth: 2.6,
        labelDx: -6, labelDy: -6, anchor: 'end',
        layer: 'idl-2' },

      /* ── View 3: BoE response ──────────────────────────── */
      { d: 'M 0.056,0.808 L 0.833,0.000',
        tone: 'slate', label: 'AD₀', strokeWidth: 1.4, dashed: '5 4',
        opacity: 0.4,
        labelDx: -6, labelDy: 14, anchor: 'end',
        layer: 'idl-3' },
      { d: 'M 0.130,0.827 L 0.889,0.038',
        tone: 'slate', label: 'AD₁', strokeWidth: 1.4, dashed: '5 4',
        opacity: 0.4,
        labelDx: -6, labelDy: 14, anchor: 'end',
        layer: 'idl-3' },
      // SRAS₁ still in place (supply shock persists short-run)
      { d: 'M 0.000,0.212 L 0.704,0.942',
        tone: 'red', label: 'SRAS₁', strokeWidth: 2.4,
        labelDx: -6, labelDy: -6, anchor: 'end',
        layer: 'idl-3' },
      // AD₂ shifted left (BoE tightens)
      { d: 'M 0.056,0.750 L 0.778,0.000',
        tone: 'blue', label: 'AD₂', strokeWidth: 2.6,
        labelDx: -6, labelDy: 14, anchor: 'end',
        layer: 'idl-3' }
    ],

    points: [
      /* View 1: E₀ at full capacity */
      { x: E0.x, y: E0.y, tone: 'slate', radius: 6, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₀', y: 'P₀' },
        label: 'E₀', labelDx: 12, labelDy: -4, anchor: 'start',
        layer: 'idl-1' },

      /* View 2: E₀ faded, E₁ at stagflation point */
      { x: E0.x, y: E0.y, tone: 'slate', radius: 5, hollow: true,
        opacity: 0.55,
        label: 'E₀', labelDx: -12, labelDy: -4, anchor: 'end',
        layer: 'idl-2' },
      { x: E1.x, y: E1.y, tone: 'red', radius: 7, hollow: true,
        gridlines: 'red', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: 12, labelDy: -4, anchor: 'start',
        layer: 'idl-2' },

      /* View 3: E₀, E₁ faded; E₂ at the post-tightening eq */
      { x: E0.x, y: E0.y, tone: 'slate', radius: 4, hollow: true,
        opacity: 0.45,
        label: 'E₀', labelDx: 10, labelDy: 8, anchor: 'start',
        layer: 'idl-3' },
      { x: E1.x, y: E1.y, tone: 'slate', radius: 4, hollow: true,
        opacity: 0.45,
        label: 'E₁', labelDx: 12, labelDy: -6, anchor: 'start',
        layer: 'idl-3' },
      { x: E2.x, y: E2.y, tone: 'green', radius: 7, hollow: true,
        gridlines: 'green', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 14, labelDy: -4, anchor: 'start',
        layer: 'idl-3' }
    ],

    arrows: [
      /* View 2: rightward AD shift + leftward SRAS shift */
      { x1: 0.593, y1: 0.423, x2: 0.667, y2: 0.404,
        tone: 'blue', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-blue', buffer: 0, layer: 'idl-2' },
      { x1: 0.296, y1: 0.808, x2: 0.213, y2: 0.769,
        tone: 'red', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-red', buffer: 0, layer: 'idl-2' },

      /* View 3: leftward AD shift (BoE tightens) */
      { x1: 0.556, y1: 0.423, x2: 0.481, y2: 0.404,
        tone: 'blue', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-blue', buffer: 0, layer: 'idl-3' }
    ]
  };
})();
