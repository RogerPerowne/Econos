/* ============================================================
   SRAS Shift Directions – engine spec for srasShiftDirections.
   Short-run-aggregate-supply card 4 "Shifts in SRAS".

   AD held fixed; SRAS₁ is the reference. Two scenarios are revealed as
   MUTUALLY EXCLUSIVE swap layers (each view passes an explicit `show`):
     view 1 → base equilibrium E₁ only
     view 2 → INCREASE: SRAS₂ right (green) → lower P, higher Y   ('inc')
     view 3 → DECREASE: SRAS₃ left  (rose)  → higher P, lower Y    ('dec')

   Equilibria are declared via `intersection` so the engine solves each
   crossing exactly – no hand-typed equilibrium coordinates.
   ============================================================ */
(function () {
  'use strict';

  window.ECONOS_SRAS_SHIFT_DIRECTIONS_SPEC = {
    width: 460,
    height: 312,
    chartArea: { x: 56, y: 20, width: 374, height: 264 },
    className: 'sras-shift-directions-svg',
    layers: ['inc', 'dec'],
    defs:
      '<marker id="srd-arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/></marker>' +
      '<marker id="srd-arr-rose" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#E11D48"/></marker>',
    axes: {
      x: { label: 'Real output (Y)' },
      y: { label: 'Price level (P)' }
    },

    curves: [
      // AD – fixed, always visible
      { id: 'AD', d: 'M 0.080,0.860 L 0.920,0.120',
        tone: 'blue', label: 'AD', strokeWidth: 2,
        labelDx: -6, labelDy: 8, anchor: 'end' },
      // SRAS₁ – reference, always visible
      { id: 'SRAS1', d: 'M 0.140,0.120 L 0.820,0.880',
        tone: 'slate', label: 'SRAS₁', strokeWidth: 2.2,
        labelDx: 6, labelDy: -4, anchor: 'start' },
      // SRAS₂ – right shift (increase)
      { id: 'SRAS2', d: 'M 0.340,0.120 L 0.980,0.834',
        tone: 'green', label: 'SRAS₂', strokeWidth: 2.4,
        labelDx: -6, labelDy: 12, anchor: 'end', layer: 'inc' },
      // SRAS₃ – left shift (decrease)
      { id: 'SRAS3', d: 'M 0.000,0.230 L 0.660,0.967',
        tone: 'rose', label: 'SRAS₃', strokeWidth: 2.4,
        labelDx: -6, labelDy: -4, anchor: 'end', layer: 'dec' }
    ],

    points: [
      // Base E₁
      { intersection: { curves: ['AD', 'SRAS1'] },
        tone: 'slate', radius: 5.5, hollow: true,
        gridlines: 'slate', ticks: { x: 'Y₁', y: 'P₁' },
        label: 'E₁', labelDx: 11, labelDy: -4, anchor: 'start' },
      // Increase: E₂ (lower P, higher Y)
      { intersection: { curves: ['AD', 'SRAS2'] },
        tone: 'green', radius: 5.5, hollow: true,
        gridlines: 'green', ticks: { x: 'Y₂', y: 'P₂' },
        label: 'E₂', labelDx: 11, labelDy: 10, anchor: 'start', layer: 'inc' },
      // Decrease: E₃ (higher P, lower Y)
      { intersection: { curves: ['AD', 'SRAS3'] },
        tone: 'rose', radius: 5.5, hollow: true,
        gridlines: 'rose', ticks: { x: 'Y₃', y: 'P₃' },
        label: 'E₃', labelDx: -11, labelDy: -6, anchor: 'end', layer: 'dec' }
    ],

    arrows: [
      // Increase: right-shift arrow
      { x1: 0.470, y1: 0.560, x2: 0.620, y2: 0.560,
        tone: 'green', strokeWidth: 1.6, markerEnd: 'srd-arr-green', buffer: 0, layer: 'inc' },
      // Decrease: left-shift arrow
      { x1: 0.470, y1: 0.560, x2: 0.320, y2: 0.560,
        tone: 'rose', strokeWidth: 1.6, markerEnd: 'srd-arr-rose', buffer: 0, layer: 'dec' }
    ]
  };
})();
