/* ============================================================
   Simultaneous Shifts Interactive — engine spec for
   simultaneousShiftsInteractive. Price-determination card 4.

   Layer wiring matches the sim-shifts-svg CSS:
     persistent   axes
     show-both-up        layer-both-up
     show-d-up-s-down    layer-d-up-s-down
     show-d-down-s-up    layer-d-down-s-up
     show-both-down      layer-both-down

   Each of the 4 states shows BOTH curves shifted. One outcome
   variable is certain, the other ambiguous:
     both-up         Q rises  (P ambiguous)  → Q₂ vert line only
     d-up-s-down     P rises  (Q ambiguous)  → P₂ horiz line only
     d-down-s-up     P falls  (Q ambiguous)  → P₂ horiz line only
     both-down       Q falls  (P ambiguous)  → Q₂ vert line only

   Chart-space positions (chart area: x=60..560, y=43..400):
     D₁ ref (0.080, 0.868) → (0.860, 0.084)
     S₁ ref (0.080, 0.084) → (0.860, 0.868)
     D right (0.240, 0.868) → (1.000, 0.104)
     D left  (-0.080, 0.868) → (0.700, 0.084)
     S right (0.240, 0.084) → (1.000, 0.849)
     S left  (-0.080, 0.084) → (0.700, 0.868)
     E₁      (0.470, 0.476)
     E₂      both-up (0.630, 0.476)
             d-up-s-down (0.470, 0.636)
             d-down-s-up (0.470, 0.317)
             both-down (0.310, 0.476)
   ============================================================ */
(function () {
  'use strict';

  var E1 = { x: 0.470, y: 0.476 };
  var E2_bu = { x: 0.630, y: 0.476 };
  var E2_du = { x: 0.470, y: 0.636 };
  var E2_dd = { x: 0.470, y: 0.317 };
  var E2_bd = { x: 0.310, y: 0.476 };

  // Tag the "certain" variable for each state — drives which dashed
  // ref line (vertical for Q certain, horizontal for P certain) renders.
  function fadedE1(layer) {
    return [
      { layer: layer, x1: 0, y1: E1.y, x2: E1.x, y2: E1.y, tone: 'slate', strokeWidth: 1.2, dashed: '5 4', buffer: 0, opacity: 0.40 },
      { layer: layer, x1: E1.x, y1: E1.y, x2: E1.x, y2: 0,  tone: 'slate', strokeWidth: 1.2, dashed: '5 4', buffer: 0, opacity: 0.40 }
    ];
  }
  function fadedE1Texts(layer) {
    return [
      { layer: layer, x: -0.028, y: E1.y, text: 'P₁', tone: 'gray', italic: true, fontSize: 12, anchor: 'end' },
      { layer: layer, x: E1.x, y: -0.050, text: 'Q₁', tone: 'gray', italic: true, fontSize: 12, anchor: 'middle' }
    ];
  }

  window.ECONOS_SIM_SHIFTS_SPEC = {
    width: 900,
    height: 440,
    chartArea: { x: 60, y: 43, width: 500, height: 357 },
    className: 'sim-shifts-svg',
    background: '#FFFFFF',
    divider: { x: 595, y1: 16, y2: 424 },
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price' }
    },

    curves: [
      /* ─── BOTH UP (D right + S right) ─── */
      { layer: 'layer-both-up', d: 'M 0.080,0.868 L 0.860,0.084', tone: 'blue', strokeWidth: 2.5, dashed: '8 5', opacity: 0.45 },
      { layer: 'layer-both-up', d: 'M 0.240,0.868 L 1.000,0.104', tone: 'blue', label: 'D₂', strokeWidth: 3.5, labelDx: 8 },
      { layer: 'layer-both-up', d: 'M 0.080,0.084 L 0.860,0.868', tone: 'amber', strokeWidth: 2.5, dashed: '8 5', opacity: 0.45 },
      { layer: 'layer-both-up', d: 'M 0.240,0.084 L 1.000,0.849', tone: 'amber', label: 'S₂', strokeWidth: 3.5, labelDx: 8, labelDy: -4 },

      /* ─── D UP, S DOWN ─── */
      { layer: 'layer-d-up-s-down', d: 'M 0.080,0.868 L 0.860,0.084', tone: 'blue', strokeWidth: 2.5, dashed: '8 5', opacity: 0.45 },
      { layer: 'layer-d-up-s-down', d: 'M 0.240,0.868 L 1.000,0.104', tone: 'blue', label: 'D₂', strokeWidth: 3.5, labelDx: 8 },
      { layer: 'layer-d-up-s-down', d: 'M 0.080,0.084 L 0.860,0.868', tone: 'amber', strokeWidth: 2.5, dashed: '8 5', opacity: 0.45 },
      { layer: 'layer-d-up-s-down', d: 'M -0.080,0.084 L 0.700,0.868', tone: 'amber', label: 'S₂', strokeWidth: 3.5, labelDx: 8, labelDy: -4 },

      /* ─── D DOWN, S UP ─── */
      { layer: 'layer-d-down-s-up', d: 'M 0.080,0.868 L 0.860,0.084', tone: 'blue', strokeWidth: 2.5, dashed: '8 5', opacity: 0.45 },
      { layer: 'layer-d-down-s-up', d: 'M -0.080,0.868 L 0.700,0.084', tone: 'blue', label: 'D₂', strokeWidth: 3.5, labelDx: 8 },
      { layer: 'layer-d-down-s-up', d: 'M 0.080,0.084 L 0.860,0.868', tone: 'amber', strokeWidth: 2.5, dashed: '8 5', opacity: 0.45 },
      { layer: 'layer-d-down-s-up', d: 'M 0.240,0.084 L 1.000,0.849', tone: 'amber', label: 'S₂', strokeWidth: 3.5, labelDx: 8, labelDy: -4 },

      /* ─── BOTH DOWN (D left + S left) ─── */
      { layer: 'layer-both-down', d: 'M 0.080,0.868 L 0.860,0.084', tone: 'blue', strokeWidth: 2.5, dashed: '8 5', opacity: 0.45 },
      { layer: 'layer-both-down', d: 'M -0.080,0.868 L 0.700,0.084', tone: 'blue', label: 'D₂', strokeWidth: 3.5, labelDx: 8 },
      { layer: 'layer-both-down', d: 'M 0.080,0.084 L 0.860,0.868', tone: 'amber', strokeWidth: 2.5, dashed: '8 5', opacity: 0.45 },
      { layer: 'layer-both-down', d: 'M -0.080,0.084 L 0.700,0.868', tone: 'amber', label: 'S₂', strokeWidth: 3.5, labelDx: 8, labelDy: -4 }
    ],

    arrows: [].concat(
      // Persistent (per state) E₁ faded gridlines
      fadedE1('layer-both-up'),
      fadedE1('layer-d-up-s-down'),
      fadedE1('layer-d-down-s-up'),
      fadedE1('layer-both-down'),

      [
        // E₂ partial gridlines — only the CERTAIN variable's line shown
        // both-up: Q rises → vertical Q₂ line only (green)
        { layer: 'layer-both-up', x1: E2_bu.x, y1: E2_bu.y, x2: E2_bu.x, y2: 0,
          tone: 'green', strokeWidth: 1.3, dashed: '5 4', buffer: 0 },
        // d-up-s-down: P rises → horizontal P₂ line only (green)
        { layer: 'layer-d-up-s-down', x1: 0, y1: E2_du.y, x2: E2_du.x, y2: E2_du.y,
          tone: 'green', strokeWidth: 1.3, dashed: '5 4', buffer: 0 },
        // d-down-s-up: P falls → horizontal P₂ line only (red)
        { layer: 'layer-d-down-s-up', x1: 0, y1: E2_dd.y, x2: E2_dd.x, y2: E2_dd.y,
          tone: 'red', strokeWidth: 1.3, dashed: '5 4', buffer: 0 },
        // both-down: Q falls → vertical Q₂ line only (red)
        { layer: 'layer-both-down', x1: E2_bd.x, y1: E2_bd.y, x2: E2_bd.x, y2: 0,
          tone: 'red', strokeWidth: 1.3, dashed: '5 4', buffer: 0 }
      ]
    ),

    points: [
      // Faded E₁ ref + E₂ new per state
      { layer: 'layer-both-up', x: E1.x, y: E1.y, tone: 'gray', radius: 4.5 },
      { layer: 'layer-both-up', x: E2_bu.x, y: E2_bu.y, tone: 'green', radius: 6.5, label: 'E₂' },

      { layer: 'layer-d-up-s-down', x: E1.x, y: E1.y, tone: 'gray', radius: 4.5 },
      { layer: 'layer-d-up-s-down', x: E2_du.x, y: E2_du.y, tone: 'green', radius: 6.5, label: 'E₂' },

      { layer: 'layer-d-down-s-up', x: E1.x, y: E1.y, tone: 'gray', radius: 4.5 },
      { layer: 'layer-d-down-s-up', x: E2_dd.x, y: E2_dd.y, tone: 'red', radius: 6.5, label: 'E₂' },

      { layer: 'layer-both-down', x: E1.x, y: E1.y, tone: 'gray', radius: 4.5 },
      { layer: 'layer-both-down', x: E2_bd.x, y: E2_bd.y, tone: 'red', radius: 6.5, label: 'E₂' },

      // Title strip dots per state
      { layer: 'layer-both-up',     x: 0.095, y: 1.031, tone: 'green', radius: 7 },
      { layer: 'layer-d-up-s-down', x: 0.095, y: 1.031, tone: 'blue',  radius: 7 },
      { layer: 'layer-d-down-s-up', x: 0.095, y: 1.031, tone: 'blue',  radius: 7 },
      { layer: 'layer-both-down',   x: 0.095, y: 1.031, tone: 'red',   radius: 7 }
    ],

    texts: [].concat(
      fadedE1Texts('layer-both-up'),
      fadedE1Texts('layer-d-up-s-down'),
      fadedE1Texts('layer-d-down-s-up'),
      fadedE1Texts('layer-both-down'),
      [
        // E₂ tick labels for the CERTAIN variable only
        { layer: 'layer-both-up', x: E2_bu.x, y: -0.050, text: 'Q₂', tone: 'green', bold: true, italic: true, fontSize: 13, anchor: 'middle' },
        { layer: 'layer-d-up-s-down', x: -0.028, y: E2_du.y, text: 'P₂', tone: 'green', bold: true, italic: true, fontSize: 13, anchor: 'end' },
        { layer: 'layer-d-down-s-up', x: -0.028, y: E2_dd.y, text: 'P₂', tone: 'red',   bold: true, italic: true, fontSize: 13, anchor: 'end' },
        { layer: 'layer-both-down', x: E2_bd.x, y: -0.050, text: 'Q₂', tone: 'red',   bold: true, italic: true, fontSize: 13, anchor: 'middle' },

        // Title strips
        { layer: 'layer-both-up',     x: 0.450, y: 1.017, text: 'Demand and supply both increase → Q rises, P ambiguous', tone: 'slate', fontSize: 12, anchor: 'middle' },
        { layer: 'layer-d-up-s-down', x: 0.450, y: 1.017, text: 'Demand rises, supply falls → P rises, Q ambiguous',      tone: 'slate', fontSize: 12, anchor: 'middle' },
        { layer: 'layer-d-down-s-up', x: 0.450, y: 1.017, text: 'Demand falls, supply rises → P falls, Q ambiguous',      tone: 'slate', fontSize: 12, anchor: 'middle' },
        { layer: 'layer-both-down',   x: 0.450, y: 1.017, text: 'Demand and supply both decrease → Q falls, P ambiguous', tone: 'slate', fontSize: 12, anchor: 'middle' }
      ]
    ),

    legends: [
      /* ─── BOTH UP ─── */
      {
        layer: 'layer-both-up',
        x: 600, y: 72,
        sections: [
          { header: { text: 'D AND S BOTH RISE', tone: 'green' },
            body: [ 'D shifts right · S shifts right.' ]
          },
          { header: { text: 'PREDICTABLE', tone: 'gray' },
            body: [ { text: 'Quantity   RISES ↑', tone: 'green', bold: true } ]
          },
          { header: { text: 'AMBIGUOUS', tone: 'gray' },
            body: [ 'Price depends on which', 'shift is larger.' ]
          }
        ]
      },
      /* ─── D UP, S DOWN ─── */
      {
        layer: 'layer-d-up-s-down',
        x: 600, y: 72,
        sections: [
          { header: { text: 'D RIGHT · S LEFT', tone: 'blue' },
            body: [ 'D shifts right (more buyers).', 'S shifts left (less production).' ]
          },
          { header: { text: 'PREDICTABLE', tone: 'gray' },
            body: [ { text: 'Price   RISES ↑', tone: 'green', bold: true } ]
          },
          { header: { text: 'AMBIGUOUS', tone: 'gray' },
            body: [ 'Quantity could go either way.' ]
          }
        ]
      },
      /* ─── D DOWN, S UP ─── */
      {
        layer: 'layer-d-down-s-up',
        x: 600, y: 72,
        sections: [
          { header: { text: 'D LEFT · S RIGHT', tone: 'blue' },
            body: [ 'D shifts left (fewer buyers).', 'S shifts right (more production).' ]
          },
          { header: { text: 'PREDICTABLE', tone: 'gray' },
            body: [ { text: 'Price   FALLS ↓', tone: 'red', bold: true } ]
          },
          { header: { text: 'AMBIGUOUS', tone: 'gray' },
            body: [ 'Quantity could go either way.' ]
          }
        ]
      },
      /* ─── BOTH DOWN ─── */
      {
        layer: 'layer-both-down',
        x: 600, y: 72,
        sections: [
          { header: { text: 'D AND S BOTH FALL', tone: 'red' },
            body: [ 'D shifts left · S shifts left.' ]
          },
          { header: { text: 'PREDICTABLE', tone: 'gray' },
            body: [ { text: 'Quantity   FALLS ↓', tone: 'red', bold: true } ]
          },
          { header: { text: 'AMBIGUOUS', tone: 'gray' },
            body: [ 'Price depends on which', 'shift is larger.' ]
          }
        ]
      }
    ]
  };
})();
