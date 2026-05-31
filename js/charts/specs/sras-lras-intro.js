/* ============================================================
   SRAS + LRAS Intro — engine spec for srasLrasIntro.
   Aggregate-supply card 1 "Aggregate supply: the basic diagram".

   Layered for the ad-interactive view-switcher:
     view 1 → SRAS revealed
     view 2 → SRAS + LRAS + equilibrium point at (Yf, P₁)

   The "(full-capacity output)" sub-caption sits below the Yf tick
   and only reveals with the LRAS view, so it lives on layer 2.
   ============================================================ */
(function () {
  'use strict';

  var YF = 0.528;
  var P1 = 0.508;

  window.ECONOS_SRAS_LRAS_INTRO_SPEC = {
    width: 440,
    height: 300,
    chartArea: { x: 55, y: 18, width: 360, height: 254 },
    className: 'sras-lras-intro-svg',
    layers: ['idl-1', 'idl-2'],
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      // Layer 1 — upward-sloping SRAS
      { d: 'M 0.069,0.067 L 0.931,0.894',
        tone: 'blue', label: 'SRAS', strokeWidth: 2.5,
        labelDx: -6, labelDy: -6, anchor: 'end',
        layer: 'idl-1' },
      // Layer 2 — vertical LRAS at full-capacity output
      { d: 'M ' + YF + ',0 L ' + YF + ',0.992',
        tone: 'purple', label: 'LRAS', strokeWidth: 2.5,
        labelDx: 0, labelDy: -10, anchor: 'middle',
        layer: 'idl-2' }
    ],

    points: [
      // Layer 2 — equilibrium dot at (Yf, P₁) with dashed P₁ gridline + ticks
      { x: YF, y: P1, tone: 'purple', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Yf', y: 'P₁' },
        layer: 'idl-2' }
    ],

    texts: [
      // Layer 2 — Yf sub-caption below the tick
      { x: YF, y: -0.094, text: '(full-capacity output)',
        tone: 'slate', fontSize: 9, anchor: 'middle',
        layer: 'idl-2' }
    ]
  };
})();
