/* ============================================================
   J-Curve Interactive — engine spec for jCurveInteractive.
   Net-trade topic — Marshall-Lerner J-curve dynamics after a
   currency devaluation.

   3-layer cumulative reveal:
     base    → axes + zero baseline + pre-devaluation flat segment
                + devaluation event marker (vertical dashed line at t=tD)
     view 1  → dip into deficit (short-run PED_X + PED_M < 1) —
                CA worsens after devaluation
     view 2  → recovery extension (medium-run PED_X + PED_M > 1) —
                CA rises through zero into surplus, completing the "J"
     view 3  → ALTERNATIVE history: Marshall-Lerner fails. Dashed
                purple path stays in deficit forever + formula callout

   Y-axis is signed: surplus above zero, deficit below. Zero
   baseline at chart-y=0.492 (preserved from the original geometry).
   ============================================================ */
(function () {
  'use strict';

  // chartArea 345×258 inside a 440×300 viewBox.
  // SVG y=155 (zero line) → chart-y = 1 - (155-24)/258 = 0.492.
  var ZERO = 0.492;
  var T_DEV = 0.116;   // SVG x=110 — when devaluation happens

  window.ECONOS_J_CURVE_INTERACTIVE_SPEC = {
    width: 440,
    height: 300,
    chartArea: { x: 70, y: 24, width: 345, height: 258 },
    className: 'j-curve-interactive-svg',
    layers: ['idl-1', 'idl-2', 'idl-3'],
    axes: {
      x: { label: 'Time' },
      y: { label: 'Current account' }
    },

    curves: [
      /* Base: zero baseline + pre-devaluation flat at the baseline */
      { d: 'M 0,' + ZERO + ' L 1,' + ZERO,
        tone: 'slate', strokeWidth: 1.2, dashed: '5 4' },
      { d: 'M 0,' + ZERO + ' L ' + T_DEV + ',' + ZERO,
        tone: 'slate', strokeWidth: 2.5 },

      /* Devaluation event marker — vertical dashed line at t_D */
      { d: 'M ' + T_DEV + ',0.671 L ' + T_DEV + ',0.504',
        tone: 'red', strokeWidth: 1.5, dashed: '4 3' },

      /* View 1: dip into deficit (PED_X + PED_M < 1) */
      { d: 'M 0,' + ZERO + ' L ' + T_DEV + ',' + ZERO + ' C 0.145,0.465 0.304,0.132 0.377,0.140',
        tone: 'red', strokeWidth: 2.8,
        layer: 'idl-1' },

      /* View 2: recovery extension (PED_X + PED_M > 1) — completes the J */
      { d: 'M 0.377,0.140 C 0.435,0.147 0.557,0.333 0.638,' + ZERO + ' C 0.701,0.628 0.855,0.744 0.971,0.791',
        tone: 'red', strokeWidth: 2.8,
        layer: 'idl-2' },

      /* View 3: Marshall-Lerner fails — dashed purple stays in deficit */
      { d: 'M ' + T_DEV + ',' + ZERO + ' C 0.188,0.415 0.313,0.116 0.383,0.116 C 0.458,0.116 0.667,0.093 0.986,0.101',
        tone: 'purple', strokeWidth: 2.2, dashed: '9 5',
        layer: 'idl-3' }
    ],

    points: [
      /* Layer 1: trough marker at the bottom of the dip */
      { x: 0.377, y: 0.140, tone: 'red', radius: 4.5,
        layer: 'idl-1' },
      /* Layer 2: zero-crossing dot where CA returns to balance */
      { x: 0.638, y: ZERO, tone: 'red', radius: 4,
        layer: 'idl-2' }
    ],

    texts: [
      /* Base: signed Y-axis region labels */
      { x: -0.020, y: 0.795, text: 'Surplus +', tone: 'green', bold: true,
        anchor: 'end' },
      { x: -0.020, y: 0.225, text: 'Deficit −',  tone: 'red', bold: true,
        anchor: 'end' },

      /* Base: devaluation event caption next to its marker */
      { x: T_DEV + 0.010, y: 0.690, text: 'devaluation',
        tone: 'red', bold: true },

      /* Layer 1: PED < 1 region annotation under the dip */
      { x: 0.304, y: 0.085, text: 'PED < 1 → CA worsens',
        tone: 'red', bold: true, anchor: 'middle',
        layer: 'idl-1' },

      /* Layer 2: PED > 1 annotation in the surplus recovery + J-curve label */
      { x: 0.826, y: 0.640, text: 'PED > 1 → CA improves',
        tone: 'green', bold: true, anchor: 'middle',
        layer: 'idl-2' },
      { x: 0.516, y: 0.380, text: 'J-curve',
        tone: 'red', bold: true, italic: true,
        layer: 'idl-2' },

      /* Layer 3: failed-path label */
      { x: 0.783, y: 0.151, text: 'M-L fails: CA stays worse',
        tone: 'purple', bold: true, anchor: 'middle',
        layer: 'idl-3' }
    ],

    boxedLabels: [
      /* Layer 3: Marshall-Lerner formula callout */
      { x: 0.493, y: 0.853, w: 0.480, h: 0.130,
        tone: 'purple',
        lines: ['Marshall-Lerner condition', '|PED_X| + |PED_M| > 1'],
        layer: 'idl-3' }
    ]
  };
})();
