/* ============================================================
   Shifts Interactive — engine spec for shiftsInteractive.
   Price-determination card 3 (Analysing Shifts: Demand and Supply).

   Layer wiring matches the existing shifts-svg CSS:
     persistent  axes
     show-demand-right   layer-demand-right
     show-demand-left    layer-demand-left
     show-supply-right   layer-supply-right
     show-supply-left    layer-supply-left

   Each state renders its own 3 curves (faded original + solid shift +
   the opposing curve solid) so the engine spec describes 4 self-
   contained subdiagrams sharing the chart axes.

   Chart geometry (viewBox 900×440):
     Chart area  x=60..560, y=43..400 → width 500, height 357
     Divider     x=595

   Base curve endpoints (chart-space):
     D₁  (0.080, 0.868) → (0.860, 0.084)
     S₁  (0.080, 0.084) → (0.860, 0.868)
     E₁  (0.470, 0.476)

   Shifts (right = +0.240 in starting x; left = -0.200 in starting x):
     D₂ right (0.280, 0.868) → (1.000, 0.146)
     D₂ left  (-0.120, 0.868) → (0.660, 0.084)
     S₂ right (0.280, 0.084) → (1.000, 0.807)
     S₂ left  (-0.120, 0.084) → (0.660, 0.868)
   ============================================================ */
(function () {
  'use strict';

  var E1 = { x: 0.470, y: 0.476 };
  var E2_dr = { x: 0.570, y: 0.577 }; // demand right
  var E2_dl = { x: 0.370, y: 0.375 }; // demand left
  var E2_sr = { x: 0.570, y: 0.375 }; // supply right
  var E2_sl = { x: 0.370, y: 0.577 }; // supply left

  // Tiny helpers to keep the per-state declarations terse.
  function fadedE1(layer) {
    return [
      // Faded E₁ gridlines
      { layer: layer, x1: 0, y1: E1.y, x2: E1.x, y2: E1.y, tone: 'slate', strokeWidth: 1.2, dashed: '5 4', buffer: 0, opacity: 0.45 },
      { layer: layer, x1: E1.x, y1: E1.y, x2: E1.x, y2: 0,  tone: 'slate', strokeWidth: 1.2, dashed: '5 4', buffer: 0, opacity: 0.45 }
    ];
  }
  function fadedE1Texts(layer) {
    return [
      { layer: layer, x: -0.028, y: E1.y, text: 'P₁', tone: 'gray', italic: true, fontSize: 12, anchor: 'end' },
      { layer: layer, x: E1.x, y: -0.050, text: 'Q₁', tone: 'gray', italic: true, fontSize: 12, anchor: 'middle' }
    ];
  }
  function newEqGridlines(layer, E2, tone) {
    return [
      { layer: layer, x1: 0, y1: E2.y, x2: E2.x, y2: E2.y, tone: tone, strokeWidth: 1.3, dashed: '5 4', buffer: 0 },
      { layer: layer, x1: E2.x, y1: E2.y, x2: E2.x, y2: 0, tone: tone, strokeWidth: 1.3, dashed: '5 4', buffer: 0 }
    ];
  }

  window.ECONOS_SHIFTS_SPEC = {
    width: 900,
    height: 440,
    chartArea: { x: 60, y: 43, width: 500, height: 357 },
    className: 'shifts-svg',
    background: '#FFFFFF',
    divider: { x: 595, y1: 16, y2: 424 },
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    curves: [
      /* ─── DEMAND RIGHT ─── */
      // Faded D₁ ref (no label – D₂ carries the active label)
      { layer: 'layer-demand-right', d: 'M 0.080,0.868 L 0.860,0.084', tone: 'blue', strokeWidth: 2.5, dashed: '8 5', opacity: 0.45 },
      // D₂ shifted right (active)
      { layer: 'layer-demand-right', d: 'M 0.280,0.868 L 1.000,0.146', tone: 'blue', label: 'D₂', strokeWidth: 3.5, labelDx: 8 },
      // S (solid amber)
      { layer: 'layer-demand-right', d: 'M 0.080,0.084 L 0.860,0.868', tone: 'amber', label: 'S', strokeWidth: 3.5, labelDx: 8, labelDy: -4 },

      /* ─── DEMAND LEFT ─── */
      { layer: 'layer-demand-left', d: 'M 0.080,0.868 L 0.860,0.084', tone: 'blue', strokeWidth: 2.5, dashed: '8 5', opacity: 0.45 },
      { layer: 'layer-demand-left', d: 'M -0.120,0.868 L 0.660,0.084', tone: 'blue', label: 'D₂', strokeWidth: 3.5, labelDx: 8 },
      { layer: 'layer-demand-left', d: 'M 0.080,0.084 L 0.860,0.868', tone: 'amber', label: 'S', strokeWidth: 3.5, labelDx: 8, labelDy: -4 },

      /* ─── SUPPLY RIGHT ─── */
      { layer: 'layer-supply-right', d: 'M 0.080,0.084 L 0.860,0.868', tone: 'amber', strokeWidth: 2.5, dashed: '8 5', opacity: 0.45 },
      { layer: 'layer-supply-right', d: 'M 0.280,0.084 L 1.000,0.807', tone: 'amber', label: 'S₂', strokeWidth: 3.5, labelDx: 8, labelDy: -4 },
      { layer: 'layer-supply-right', d: 'M 0.080,0.868 L 0.860,0.084', tone: 'blue', label: 'D', strokeWidth: 3.5, labelDx: 8, labelDy: 4 },

      /* ─── SUPPLY LEFT ─── */
      { layer: 'layer-supply-left', d: 'M 0.080,0.084 L 0.860,0.868', tone: 'amber', strokeWidth: 2.5, dashed: '8 5', opacity: 0.45 },
      { layer: 'layer-supply-left', d: 'M -0.120,0.084 L 0.660,0.868', tone: 'amber', label: 'S₂', strokeWidth: 3.5, labelDx: 8, labelDy: -4 },
      { layer: 'layer-supply-left', d: 'M 0.080,0.868 L 0.860,0.084', tone: 'blue', label: 'D', strokeWidth: 3.5, labelDx: 8, labelDy: 4 }
    ],

    arrows: [].concat(
      // Demand right: faded E₁ + new E₂ gridlines (blue)
      fadedE1('layer-demand-right'),
      newEqGridlines('layer-demand-right', E2_dr, 'blue'),
      // Demand left
      fadedE1('layer-demand-left'),
      newEqGridlines('layer-demand-left', E2_dl, 'blue'),
      // Supply right (amber gridlines)
      fadedE1('layer-supply-right'),
      newEqGridlines('layer-supply-right', E2_sr, 'amber'),
      // Supply left
      fadedE1('layer-supply-left'),
      newEqGridlines('layer-supply-left', E2_sl, 'amber')
    ),

    points: [
      /* Faded E₁ dot + new E₂ dot per state. E₂ label sits on the
         OPPOSITE side of E₂ from E₁ so the label never lands between
         the two dots or on top of the active curve. */
      // demand-right: E₂ is upper-right of E₁ → label upper-right of E₂
      { layer: 'layer-demand-right', x: E1.x, y: E1.y, tone: 'gray', radius: 4.5 },
      { layer: 'layer-demand-right', x: E2_dr.x, y: E2_dr.y, tone: 'blue', radius: 6.5, label: 'E₂', labelDx: 12, labelDy: -10, anchor: 'start' },

      // demand-left: E₂ is lower-left of E₁ → label lower-left of E₂
      { layer: 'layer-demand-left', x: E1.x, y: E1.y, tone: 'gray', radius: 4.5 },
      { layer: 'layer-demand-left', x: E2_dl.x, y: E2_dl.y, tone: 'blue', radius: 6.5, label: 'E₂', labelDx: -12, labelDy: 16, anchor: 'end' },

      // supply-right: E₂ is lower-right of E₁ → label lower-right of E₂
      { layer: 'layer-supply-right', x: E1.x, y: E1.y, tone: 'gray', radius: 4.5 },
      { layer: 'layer-supply-right', x: E2_sr.x, y: E2_sr.y, tone: 'amber', radius: 6.5, label: 'E₂', labelDx: 12, labelDy: 16, anchor: 'start' },

      // supply-left: E₂ is upper-left of E₁ → label upper-left of E₂
      { layer: 'layer-supply-left', x: E1.x, y: E1.y, tone: 'gray', radius: 4.5 },
      { layer: 'layer-supply-left', x: E2_sl.x, y: E2_sl.y, tone: 'amber', radius: 6.5, label: 'E₂', labelDx: -12, labelDy: -10, anchor: 'end' },

      /* Title-strip dots */
      { layer: 'layer-demand-right', x: 0.028, y: 1.031, tone: 'blue',  radius: 7 },
      { layer: 'layer-demand-left',  x: 0.028, y: 1.031, tone: 'blue',  radius: 7 },
      { layer: 'layer-supply-right', x: 0.028, y: 1.031, tone: 'amber', radius: 7 },
      { layer: 'layer-supply-left',  x: 0.028, y: 1.031, tone: 'amber', radius: 7 }
    ],

    texts: [].concat(
      // Faded E₁ axis tick labels per state
      fadedE1Texts('layer-demand-right'),
      fadedE1Texts('layer-demand-left'),
      fadedE1Texts('layer-supply-right'),
      fadedE1Texts('layer-supply-left'),

      // E₂ axis tick labels per state
      [
        { layer: 'layer-demand-right', x: -0.028, y: E2_dr.y, text: 'P₂', tone: 'blue',  bold: true, italic: true, fontSize: 13, anchor: 'end' },
        { layer: 'layer-demand-right', x: E2_dr.x, y: -0.050, text: 'Q₂', tone: 'blue',  bold: true, italic: true, fontSize: 13, anchor: 'middle' },

        { layer: 'layer-demand-left', x: -0.028, y: E2_dl.y, text: 'P₂', tone: 'blue',  bold: true, italic: true, fontSize: 13, anchor: 'end' },
        { layer: 'layer-demand-left', x: E2_dl.x, y: -0.050, text: 'Q₂', tone: 'blue',  bold: true, italic: true, fontSize: 13, anchor: 'middle' },

        { layer: 'layer-supply-right', x: -0.028, y: E2_sr.y, text: 'P₂', tone: 'amber', bold: true, italic: true, fontSize: 13, anchor: 'end' },
        { layer: 'layer-supply-right', x: E2_sr.x, y: -0.050, text: 'Q₂', tone: 'amber', bold: true, italic: true, fontSize: 13, anchor: 'middle' },

        { layer: 'layer-supply-left', x: -0.028, y: E2_sl.y, text: 'P₂', tone: 'amber', bold: true, italic: true, fontSize: 13, anchor: 'end' },
        { layer: 'layer-supply-left', x: E2_sl.x, y: -0.050, text: 'Q₂', tone: 'amber', bold: true, italic: true, fontSize: 13, anchor: 'middle' },

        // Title strips
        { layer: 'layer-demand-right', x: 0.060, y: 1.017, text: 'Demand increases · D shifts right → higher P and Q', tone: 'slate', fontSize: 12, anchor: 'start' },
        { layer: 'layer-demand-left',  x: 0.060, y: 1.017, text: 'Demand decreases · D shifts left → lower P and Q',  tone: 'slate', fontSize: 12, anchor: 'start' },
        { layer: 'layer-supply-right', x: 0.060, y: 1.017, text: 'Supply increases · S shifts right → lower P, higher Q', tone: 'slate', fontSize: 12, anchor: 'start' },
        { layer: 'layer-supply-left',  x: 0.060, y: 1.017, text: 'Supply decreases · S shifts left → higher P, lower Q',  tone: 'slate', fontSize: 12, anchor: 'start' }
      ]
    ),

    legends: [
      /* ─── DEMAND RIGHT LEGEND ─── */
      {
        layer: 'layer-demand-right',
        x: 600, y: 72,
        sections: [
          { header: { text: 'DEMAND INCREASES', tone: 'blue' },
            body: [ 'D shifts right.', 'Excess demand at old P₁.' ]
          },
          { header: { text: 'NEW EQUILIBRIUM', tone: 'gray' },
            body: [
              { text: 'Price:     RISES ↑',    tone: 'green', bold: true },
              { text: 'Quantity: RISES ↑',     tone: 'green', bold: true },
              'P₂ > P₁  ·  Q₂ > Q₁'
            ]
          }
        ]
      },
      /* ─── DEMAND LEFT LEGEND ─── */
      {
        layer: 'layer-demand-left',
        x: 600, y: 72,
        sections: [
          { header: { text: 'DEMAND DECREASES', tone: 'blue' },
            body: [ 'D shifts left.', 'Excess supply at old P₁.' ]
          },
          { header: { text: 'NEW EQUILIBRIUM', tone: 'gray' },
            body: [
              { text: 'Price:     FALLS ↓',    tone: 'red', bold: true },
              { text: 'Quantity: FALLS ↓',     tone: 'red', bold: true },
              'P₂ < P₁  ·  Q₂ < Q₁'
            ]
          }
        ]
      },
      /* ─── SUPPLY RIGHT LEGEND ─── */
      {
        layer: 'layer-supply-right',
        x: 600, y: 72,
        sections: [
          { header: { text: 'SUPPLY INCREASES', tone: 'amber' },
            body: [ 'S shifts right.', 'Excess supply at old P₁.' ]
          },
          { header: { text: 'NEW EQUILIBRIUM', tone: 'gray' },
            body: [
              { text: 'Price:     FALLS ↓',    tone: 'red', bold: true },
              { text: 'Quantity: RISES ↑',     tone: 'green', bold: true },
              'P₂ < P₁  ·  Q₂ > Q₁'
            ]
          }
        ]
      },
      /* ─── SUPPLY LEFT LEGEND ─── */
      {
        layer: 'layer-supply-left',
        x: 600, y: 72,
        sections: [
          { header: { text: 'SUPPLY DECREASES', tone: 'amber' },
            body: [ 'S shifts left.', 'Excess demand at old P₁.' ]
          },
          { header: { text: 'NEW EQUILIBRIUM', tone: 'gray' },
            body: [
              { text: 'Price:     RISES ↑',    tone: 'green', bold: true },
              { text: 'Quantity: FALLS ↓',     tone: 'red', bold: true },
              'P₂ > P₁  ·  Q₂ < Q₁'
            ]
          }
        ]
      }
    ]
  };
})();
