/* ============================================================
   ECONOS - Diagram specs (data-driven)
   -------------------------------------------------------------
   Each entry below is a JSON-style spec describing a chart.
   At load time (after icons.js), each spec is rendered via
   window.Diagram.render() and stored in window.ECONOS_ICONS
   under the SAME KEY as the legacy inline SVG. Engines reading
   `I.<name>` get the spec-rendered SVG transparently.

   To migrate a diagram:
     1. Add its spec here under the legacy key.
     2. Verify it renders correctly in place of the old SVG.
     3. Delete the inline SVG entry from js/icons.js.

   Coordinates are pixel positions in the SVG viewBox. The
   renderer doesn't yet do data-coord scaling - that's a future
   enhancement when more diagrams need it.

   This file targets the v2 renderer in js/engines/diagram.js,
   which adds:
     - annotation `layer: 'below'` (draw shading under the chart)
     - text annotation `rotate: N`  (any-angle rotated text)
     - text annotation `italic: true`
     - annotation `type: 'line'`    (plain line, not a chart curve)
     - null-check semantics for numeric defaults (dx, dy,
       strokeWidth, width, ...) so explicit 0 is honoured

   All v1 specs continue to render unchanged; the new fields are
   strictly opt-in.
   ============================================================ */

window.ECONOS_DIAGRAMS = {

  /* ────────────────────────────────────────────────────────────
     Kuznets curve - inverted U showing inequality vs development
     ──────────────────────────────────────────────────────────── */
  kuznetsCurve: {
    width: 480, height: 280, bg: 'bg', bgRadius: 8,
    axes: {
      x: { from: [60, 240], to: [440, 240], arrow: true, labelEnd: 'GDP / capita →', labelOrigin: '0' },
      y: { from: [60, 240], to: [60, 40],  arrow: true, labelStart: 'Inequality', labelSub: '(Gini)' }
    },
    guides: [
      { from: [250, 60], to: [250, 240], dash: 'short', stroke: 'line' }
    ],
    curves: [
      { path: 'M 60,200 Q 250,-70 440,180', stroke: 'blue', width: 3 }
    ],
    markers: [
      { at: [125, 148], r: 5, stroke: 'blue', strokeWidth: 2, labels: [
          { text: '① Agricultural',  at: [68, 200], weight: 700, color: 'blue' },
          { text: 'low income',      at: [68, 214], color: 'muted', size: 10 },
          { text: 'low inequality',  at: [68, 226], color: 'muted', size: 10 }
        ]
      },
      { at: [250, 55], r: 6, stroke: 'blue', strokeWidth: 2.5,
        labels: [{ text: '② Industrialising', at: [250, 44], anchor: 'middle', weight: 700, color: 'blue' }],
        chip: { at: [208, 78], w: 84, h: 20, radius: 4, bg: 'amber-bg', stroke: 'amber-deep', textColor: 'amber-deep', text: 'peak inequality' }
      },
      { at: [375, 148], r: 5, stroke: 'blue', strokeWidth: 2, labels: [
          { text: '③ Post-industrial', at: [372, 200], weight: 700, color: 'blue' },
          { text: 'high income',       at: [372, 214], color: 'muted', size: 10 },
          { text: 'falling inequality',at: [372, 226], color: 'muted', size: 10 }
        ]
      }
    ],
    annotations: [
      { type: 'text', at: [160, 115], text: '↗', color: 'blue', opacity: 0.7, size: 14 },
      { type: 'text', at: [320, 115], text: '↘', color: 'blue', opacity: 0.7, size: 14 }
    ]
  },

  /* ────────────────────────────────────────────────────────────
     UK CPI 2010-2026 - line chart with peak callout
     ──────────────────────────────────────────────────────────── */
  qeChart: {
    width: 480, height: 220, bg: 'white',
    guides: [
      { from: [50,127], to: [460,127], stroke: '#F3F4F6', dash: 'none' },
      { from: [50,100], to: [460,100], stroke: '#F3F4F6', dash: 'none' },
      { from: [50, 73], to: [460, 73], stroke: '#F3F4F6', dash: 'none' },
      { from: [50, 47], to: [460, 47], stroke: '#F3F4F6', dash: 'none' },
      { from: [50,153], to: [460,153], stroke: '#9CA3AF', dash: 'short' }
    ],
    axes: {
      x: { from: [50, 180], to: [460, 180],
           ticks: [
             {at: 50,  label: '2010'}, {at: 101, label: '2012'}, {at: 152, label: '2014'},
             {at: 204, label: '2016'}, {at: 255, label: '2018'}, {at: 306, label: '2020'},
             {at: 357, label: '2022'}, {at: 409, label: '2024'}, {at: 460, label: '2026'}
           ]
      },
      y: { from: [50, 180], to: [50, 20],
           title: { text: 'CPI %', at: [20, 100] },
           ticks: [
             {at: 184, label: '0%'},  {at: 157, label: '2%'},
             {at: 131, label: '4%'},  {at: 104, label: '6%'},
             {at:  77, label: '8%'},  {at:  51, label: '10%'}
           ]
      }
    },
    curves: [
      { points: [
          [50,133],[69,131],[76,127],[95,111],[108,124],[127,148],[146,153],[172,173],
          [185,180],[204,176],[223,159],[243,141],[251,139],[268,152],[293,160],[319,178],
          [332,171],[345,147],[355,108],[367,64],[379,32],[391,40],[404,93],[412,127],
          [422,153],[434,147],[454,130],[460,140]
        ],
        stroke: 'red', width: 2.5
      }
    ],
    markers: [
      { at: [379, 32], r: 3.5, stroke: 'red', strokeWidth: 2,
        chip: { at: [312, 22], w: 58, h: 20, radius: 4,
                bg: '#FFE4E6', stroke: 'red', textColor: 'red',
                text: 'Oct 2022 · 11.1%' }
      },
      { at: [185, 180], r: 2.8, stroke: 'red', strokeWidth: 1.5,
        labels: [{ text: 'Near 0%', at: [185, 172], anchor: 'middle', size: 9, weight: 700, color: 'red' }]
      }
    ],
    annotations: [
      { type: 'text', at: [55,  115], text: 'UK CPI', color: 'red', weight: 700, size: 11 },
      { type: 'text', at: [464, 156], text: '2% target', color: '#6B7280', weight: 700, size: 10 },
      { type: 'text', at: [460, 216], text: 'Source: ONS', color: '#9CA3AF', anchor: 'end', size: 8 }
    ]
  },

  /* ────────────────────────────────────────────────────────────
     AD/AS - Demand-pull. AD₁ → AD₂ shift right, P↑, Y↑.
     ──────────────────────────────────────────────────────────── */
  adAsDemandPull: {
    width: 480, height: 280,
    axes: {
      x: { from: [55, 235], to: [380, 235], stroke: '#374151', width: 1.5 },
      y: { from: [55, 235], to: [55, 35],   stroke: '#374151', width: 1.5 }
    },
    curves: [
      { line: [[65, 232], [350, 50]], stroke: '#475569', width: 2.2,
        label: { text: 'SRAS', at: [358, 50], color: '#475569', weight: 700, size: 12 } },
      { line: [[75, 60], [305, 230]],  stroke: 'muted-2',  width: 2, dash: 'medium',
        label: { text: 'AD₁', at: [60, 50], color: 'muted-2', weight: 600, size: 12 } },
      { line: [[135, 60], [365, 230]], stroke: 'green',    width: 3,
        label: { text: 'AD₂', at: [125, 50], color: 'green', weight: 800, size: 13 } }
    ],
    guides: [
      { from: [55, 149], to: [195, 149], stroke: 'muted-2', dash: 'dotted' },
      { from: [195, 235], to: [195, 149], stroke: 'muted-2', dash: 'dotted' },
      { from: [55, 128], to: [227, 128], stroke: 'green', width: 1.5, dash: 'short' },
      { from: [227, 235], to: [227, 128], stroke: 'green', width: 1.5, dash: 'short' }
    ],
    markers: [
      { at: [195, 149], r: 4.5, stroke: 'muted-2', strokeWidth: 2, labels: [
          { text: 'P₁', at: [50, 153], anchor: 'end', weight: 600, color: 'muted-2' },
          { text: 'Y₁', at: [195, 252], anchor: 'middle', weight: 600, color: 'muted-2' }
        ] },
      { at: [227, 128], r: 6, halo: true, stroke: 'green', strokeWidth: 2.5, labels: [
          { text: 'P₂', at: [50, 132], anchor: 'end', weight: 800, color: 'green' },
          { text: 'Y₂', at: [227, 252], anchor: 'middle', weight: 800, color: 'green' }
        ] }
    ],
    annotations: [
      { type: 'shiftArrow', from: [257, 192], to: [305, 192], color: 'green', label: 'AD shifts right' },
      { type: 'chip', at: [395, 95], w: 75, h: 58, radius: 10,
        bg: 'green-bg', stroke: 'green', textColor: 'green-deep', size: 13, weight: 800,
        text: ['RESULT', 'P ↑', 'Y ↑'] },
      { type: 'text', at: [48, 32],  text: 'P', anchor: 'end',   color: '#374151', weight: 700, size: 12 },
      { type: 'text', at: [385, 243], text: 'Y',                  color: '#374151', weight: 700, size: 12 }
    ]
  },

  /* ────────────────────────────────────────────────────────────
     AD/AS - Cost-push. SRAS₁ → SRAS₂ shift left, P↑, Y↓.
     ──────────────────────────────────────────────────────────── */
  adAsCostPush: {
    width: 480, height: 280,
    axes: {
      x: { from: [55, 235], to: [380, 235], stroke: '#374151', width: 1.5 },
      y: { from: [55, 235], to: [55, 35],   stroke: '#374151', width: 1.5 }
    },
    curves: [
      { line: [[55, 12], [380, 215]], stroke: 'blue', width: 2.2,
        label: { text: 'AD', at: [385, 215], color: 'blue', weight: 700, size: 12 } },
      { line: [[50, 165], [240, 50]], stroke: 'muted-2', width: 2, dash: 'medium',
        label: { text: 'SRAS₁', at: [245, 50], color: 'muted-2', weight: 600, size: 12 } },
      { line: [[50, 140], [240, 25]], stroke: 'amber', width: 3,
        label: { text: 'SRAS₂', at: [245, 22], color: 'amber-deep', weight: 800, size: 13 } }
    ],
    guides: [
      { from: [55, 105], to: [149, 105], stroke: 'muted-2', dash: 'dotted' },
      { from: [149, 235], to: [149, 105], stroke: 'muted-2', dash: 'dotted' },
      { from: [55, 93], to: [128, 93], stroke: 'amber', width: 1.5, dash: 'short' },
      { from: [128, 235], to: [128, 93], stroke: 'amber', width: 1.5, dash: 'short' }
    ],
    markers: [
      { at: [149, 105], r: 4.5, stroke: 'muted-2', strokeWidth: 2, labels: [
          { text: 'P₁', at: [50, 109], anchor: 'end', weight: 600, color: 'muted-2' },
          { text: 'Y₁', at: [149, 252], anchor: 'middle', weight: 600, color: 'muted-2' }
        ] },
      { at: [128, 93], r: 6, halo: true, stroke: 'amber-deep', strokeWidth: 2.5, labels: [
          { text: 'P₂', at: [50, 97], anchor: 'end', weight: 800, color: 'amber-deep' },
          { text: 'Y₂', at: [128, 252], anchor: 'middle', weight: 800, color: 'amber-deep' }
        ] }
    ],
    annotations: [
      { type: 'shiftArrow', from: [180, 150], to: [144, 130], color: 'amber-deep', label: 'SRAS shifts left' },
      { type: 'chip', at: [395, 95], w: 75, h: 58, radius: 10,
        bg: 'amber-bg', stroke: 'amber-deep', textColor: 'amber-deep', size: 13, weight: 800,
        text: ['RESULT', 'P ↑', 'Y ↓'] },
      { type: 'text', at: [48, 32],  text: 'P', anchor: 'end',   color: '#374151', weight: 700, size: 12 },
      { type: 'text', at: [385, 243], text: 'Y',                  color: '#374151', weight: 700, size: 12 }
    ]
  },

  /* ────────────────────────────────────────────────────────────
     NMW diagram - labour-market demand/supply with a wage floor
     above equilibrium, creating an unemployment gap.

     v2: unemployment-region rects use `layer: 'below'` so the
     demand/supply lines render on top in full strength rather
     than being dimmed by an overlay (the author's commented
     intent of "drawn first so curves sit on top" now actually
     happens).
     ──────────────────────────────────────────────────────────── */
  nmwDiagram: {
    width: 760, height: 440, bg: 'bg', bgRadius: 12,
    axes: {
      x: { from: [70, 390], to: [700, 390], arrow: true, stroke: '#334155',
           ticks: [
             { at: 380, label: 'Q_d', weight: 700, color: '#334155', size: 11, dy: 18 },
             { at: 525, label: 'Q_s', weight: 700, color: '#334155', size: 11, dy: 18 },
             { at: 245, label: 'Q_d', weight: 700, color: '#334155', size: 11, dy: 18 }
           ]
      },
      y: { from: [70, 390], to: [70, 30], arrow: true, stroke: '#334155',
           ticks: [
             { at: 225, label: 'W_e',  weight: 700, color: '#334155', size: 11 }
           ],
           title: { text: 'Wage (W)', at: [28, 215] }
      }
    },
    annotations: [
      /* Shaded unemployment region - now properly layered below curves. */
      { type: 'rect', layer: 'below', at: [245, 155], w: 280, h: 235, fill: '#FEE2E2', opacity: 0.18 },
      { type: 'rect', layer: 'below', at: [245, 370], w: 280, h: 20,  fill: '#FEE2E2', opacity: 0.85, radius: 3 },
      /* Employment-loss callout */
      { type: 'rect', at: [75, 60], w: 200, h: 30, fill: '#FEE2E2', opacity: 0.85, radius: 6 },
      { type: 'text', at: [175, 73], text: 'Q* falls: Q_e → Q_d', anchor: 'middle', color: '#DC2626', size: 10, weight: 600 },
      { type: 'text', at: [175, 85], text: '(employment loss)',   anchor: 'middle', color: '#DC2626', size: 9 },
      /* NMW dashed wage-floor label */
      { type: 'text', at: [440, 148], text: 'National Minimum Wage (W_NMW)', color: '#D97706', weight: 700, size: 11 },
      /* Unemployment gap label */
      { type: 'text', at: [385, 383], text: 'Unemployment gap', anchor: 'middle', color: '#DC2626', weight: 700, size: 10 },
      /* Axis titles outside the chart */
      { type: 'text', at: [385, 420], text: 'Employment (Q_L)', anchor: 'middle', color: '#334155', size: 11 },
      { type: 'text', at: [714, 394], text: 'Q_L', color: '#334155', weight: 700, size: 12 },
      { type: 'text', at: [50, 20],   text: 'W', anchor: 'middle', color: '#334155', weight: 700, size: 12 }
    ],
    curves: [
      { line: [[100, 80], [660, 370]], stroke: 'blue', width: 2.5,
        label: { text: 'Labour Demand', at: [664, 374], color: 'blue', weight: 700, size: 11 } },
      { line: [[100, 360], [660, 90]], stroke: '#059669', width: 2.5,
        label: { text: 'Labour Supply', at: [664, 88], color: '#059669', weight: 700, size: 11 } }
    ],
    guides: [
      { from: [380, 225], to: [380, 390], stroke: '#334155', width: 1.5, dash: '6 4', opacity: 0.6 },
      { from: [70, 225],  to: [380, 225], stroke: '#334155', width: 1.5, dash: '6 4', opacity: 0.6 },
      { from: [70, 155], to: [660, 155], stroke: '#D97706', width: 2.2, dash: '8 4' },
      { from: [245, 155], to: [245, 390], stroke: '#334155', width: 1.4, dash: '5 4', opacity: 0.7 },
      { from: [525, 155], to: [525, 390], stroke: '#334155', width: 1.4, dash: '5 4', opacity: 0.7 }
    ],
    markers: [
      { at: [380, 225], r: 5, stroke: '#334155', fill: '#334155' }
    ]
  },

  /* ────────────────────────────────────────────────────────────
     Monopoly supernormal profit - AR, MR, ATC, MC; profit rect
     between P_m and AC_m bounded by Q_m.

     v2: profit rect uses `layer: 'below'` so the ATC and MC
     curves render through it crisply.
     ──────────────────────────────────────────────────────────── */
  monopolySupernormalProfit: {
    width: 700, height: 460, bg: 'bg', bgRadius: 12,
    axes: {
      x: { from: [60, 400], to: [660, 400], arrow: true, stroke: '#334155',
           ticks: [{ at: 250, label: 'Q_m', weight: 700, color: '#334155', size: 11, dy: 15 }] },
      y: { from: [60, 400], to: [60, 40], arrow: true, stroke: '#334155',
           ticks: [
             { at: 178, label: 'P_m',  weight: 700, color: '#334155', size: 11 },
             { at: 245, label: 'AC_m', weight: 700, color: '#0EA5E9', size: 11 }
           ] }
    },
    annotations: [
      { type: 'rect', layer: 'below', at: [60, 178], w: 190, h: 67, fill: '#FEF3C7', stroke: '#D97706', strokeWidth: 1.5 },
      { type: 'text', at: [155, 208], text: 'Supernormal profit',     anchor: 'middle', color: '#D97706', weight: 700, size: 11 },
      { type: 'text', at: [155, 222], text: '(P_m - AC_m) x Q_m',     anchor: 'middle', color: '#D97706', size: 10 },
      { type: 'text', at: [256, 274], text: 'MR = MC', color: '#334155', weight: 600, size: 10 },
      { type: 'text', at: [20, 44],  text: 'Price', color: '#334155', weight: 600, size: 12 },
      { type: 'text', at: [650, 420], text: 'Q', color: '#334155', weight: 600, size: 12 }
    ],
    curves: [
      { line: [[60, 80], [640, 380]], stroke: 'blue', width: 2.5,
        label: { text: 'AR (Demand)', at: [645, 378], color: 'blue', weight: 600, size: 11 } },
      { line: [[60, 80], [370, 400]], stroke: '#64748B', width: 2,
        label: { text: 'MR', at: [374, 400], color: '#64748B', weight: 600, size: 11 } },
      { path: 'M80,140 C180,245 240,245 250,245 C280,245 355,260 370,260 C385,260 480,230 550,200',
        stroke: '#0EA5E9', width: 2.5,
        label: { text: 'ATC', at: [555, 198], color: '#0EA5E9', weight: 600, size: 11 } },
      { path: 'M60,270 C100,287 230,277 250,277 C270,277 330,262 370,260 C410,258 470,215 520,185',
        stroke: 'red', width: 2.5,
        label: { text: 'MC', at: [525, 183], color: 'red', weight: 600, size: 11 } }
    ],
    guides: [
      { from: [250, 178], to: [250, 400], stroke: '#334155', width: 1.5, dash: '6 4' },
      { from: [60, 178],  to: [250, 178], stroke: '#334155', width: 1.5, dash: '6 4' },
      { from: [60, 245],  to: [250, 245], stroke: '#0EA5E9', width: 1.3, dash: '5 4' }
    ],
    markers: [
      { at: [250, 277], r: 5, stroke: 'red', fill: 'red' },
      { at: [250, 178], r: 4, stroke: 'blue', fill: 'blue' }
    ]
  },

  /* ────────────────────────────────────────────────────────────
     Monopoly DWL - competitive vs monopoly eq with shaded CS,
     PS, and deadweight loss triangles.

     v2: all three welfare polygons use `layer: 'below'` so the
     demand, MR, and MC lines render through them cleanly.
     ──────────────────────────────────────────────────────────── */
  monopolyDwl: {
    width: 700, height: 460, bg: 'bg', bgRadius: 12,
    axes: {
      x: { from: [60, 400], to: [660, 400], arrow: true, stroke: '#334155' },
      y: { from: [60, 400], to: [60, 40], arrow: true, stroke: '#334155' }
    },
    annotations: [
      { type: 'polygon', layer: 'below', points: [[60,80],[393,252],[60,252]],            fill: '#DBEAFE', opacity: 0.7  },
      { type: 'polygon', layer: 'below', points: [[60,180],[254,180],[254,252],[60,252]], fill: '#DCFCE7', opacity: 0.8  },
      { type: 'polygon', layer: 'below', points: [[254,180],[393,252],[254,293]],         fill: '#FEE2E2', opacity: 0.85 },
      { type: 'text', at: [340, 248], text: 'DWL', color: 'red', weight: 700, size: 11 },
      { type: 'text', at: [20, 44],  text: 'Price', color: '#334155', weight: 600, size: 12 },
      { type: 'text', at: [650, 420], text: 'Q', color: '#334155', weight: 600, size: 12 }
    ],
    curves: [
      { line: [[60, 80], [640, 380]], stroke: 'blue', width: 2.5,
        label: { text: 'D = AR (= MB)', at: [645, 378], color: 'blue', weight: 600, size: 11 } },
      { line: [[60, 80], [350, 400]], stroke: '#64748B', width: 2,
        label: { text: 'MR', at: [352, 398], color: '#64748B', weight: 600, size: 11 } },
      { line: [[60, 350], [640, 180]], stroke: 'red', width: 2,
        label: { text: 'MC (= S under competition)', at: [645, 178], color: 'red', weight: 600, size: 11 } }
    ],
    guides: [
      { from: [254, 180], to: [254, 400], stroke: '#334155', width: 1.4, dash: '5 4', opacity: 0.7 }
    ],
    markers: [
      { at: [254, 180], r: 4, stroke: 'blue', fill: 'blue' },
      { at: [393, 252], r: 4, stroke: '#334155', fill: '#334155' }
    ]
  },

  /* ────────────────────────────────────────────────────────────
     Labour-market equilibrium - D_L (MRP) meets S_L at W*, Q*.

     - Wage-bill rectangle now correctly bounded by W* (top) and
       the x-axis (bottom). The original SVG had it extending
       ~25px ABOVE the equilibrium line, which looked buggy.
     - Wage-bill rect uses `layer: 'below'` so the equilibrium
       lines render crisply over the shading.
     - Curve labels: short symbol + small subtitle so they fit
       within the 700-wide viewBox (the original
       "Labour Demand (MRP)" overran the right edge).
     ──────────────────────────────────────────────────────────── */
  labourMarketEquilibrium: {
    width: 700, height: 420, bg: 'bg', bgRadius: 12,
    axes: {
      x: { from: [70, 370], to: [650, 370], arrow: true, stroke: '#334155', width: 2 },
      y: { from: [70, 370], to: [70, 30],   arrow: true, stroke: '#334155', width: 2,
           title: { text: 'Wage (W)', at: [30, 200], size: 11, color: '#334155' } }
    },
    annotations: [
      /* Wage-bill rectangle - bounded by W* (top) and the x-axis (bottom). */
      { type: 'rect', layer: 'below', at: [70, 205], w: 300, h: 165, fill: 'amber-deep', opacity: 0.16 },
      { type: 'text', at: [220, 280], text: 'Wage Bill',  anchor: 'middle', color: '#92400E', weight: 700, size: 13 },
      { type: 'text', at: [220, 298], text: '= W* × Q*',  anchor: 'middle', color: '#92400E', weight: 600, size: 11 },
      /* Axis-end caps */
      { type: 'text', at: [55, 18],   text: 'W',                anchor: 'middle', color: '#334155', weight: 700, size: 12 },
      { type: 'text', at: [665, 374], text: 'Q_L',                                color: '#334155', weight: 700, size: 12 },
      { type: 'text', at: [360, 400], text: 'Employment (Q_L)', anchor: 'middle', color: '#334155', size: 11 },
      /* Curve labels: short symbol + descriptive subtitle, both fit within viewBox */
      { type: 'text', at: [625, 345], text: 'D_L (MRP)',     color: 'blue',    weight: 700, size: 11 },
      { type: 'text', at: [625, 358], text: 'Labour Demand', color: 'blue',                 size: 9 },
      { type: 'text', at: [625, 78],  text: 'S_L',           color: '#059669', weight: 700, size: 11 },
      { type: 'text', at: [625, 91],  text: 'Labour Supply', color: '#059669',              size: 9 },
      /* Equilibrium projection labels */
      { type: 'text', at: [58, 209],  text: 'W*', anchor: 'end',    color: '#334155', weight: 700, size: 12 },
      { type: 'text', at: [370, 390], text: 'Q*', anchor: 'middle', color: '#334155', weight: 700, size: 12 }
    ],
    curves: [
      { line: [[90, 70],  [620, 340]], stroke: 'blue',    width: 2.5 },
      { line: [[90, 330], [620, 80]],  stroke: '#059669', width: 2.5 }
    ],
    guides: [
      { from: [370, 205], to: [370, 370], stroke: '#334155', width: 1.5, dash: '6 4', opacity: 0.7 },
      { from: [70, 205],  to: [370, 205], stroke: '#334155', width: 1.5, dash: '6 4', opacity: 0.7 }
    ],
    markers: [
      /* strokeWidth: 0 - explicit zero (honoured by v2 nc() helper). */
      { at: [370, 205], r: 5, fill: '#334155', strokeWidth: 0 }
    ]
  },

  /* ────────────────────────────────────────────────────────────
     Monopsony - S_L = AC_L, separate MC_L (steeper), MRP.

     - Wage-gap rect uses `layer: 'below'` so the supply and MRP
       curves stay crisp inside it.
     - MRP label split into short symbol + subtitle (the original
       "MRP (Labour Demand)" overran the 760-wide viewBox).
     - In-rect label is now "Wage gap (W* - W_m)" for clarity.
     ──────────────────────────────────────────────────────────── */
  monopsonyDiagram: {
    width: 760, height: 440, bg: 'bg', bgRadius: 12,
    axes: {
      x: { from: [70, 390], to: [700, 390], arrow: true, stroke: '#334155', width: 2 },
      y: { from: [70, 390], to: [70, 30],   arrow: true, stroke: '#334155', width: 2,
           title: { text: 'Wage / Cost', at: [28, 220], size: 11, color: '#334155' } }
    },
    annotations: [
      /* Wage-gap rect between W* (218) and W_m (245), width = Q_m */
      { type: 'rect', layer: 'below', at: [70, 218], w: 232, h: 27, fill: 'amber-deep', opacity: 0.22 },
      { type: 'text', at: [186, 235], text: 'Wage gap (W* − W_m)', anchor: 'middle', color: '#92400E', weight: 700, size: 10 },
      /* Axis caps and subtitle */
      { type: 'text', at: [50, 20],   text: 'W',                anchor: 'middle', color: '#334155', weight: 700, size: 12 },
      { type: 'text', at: [714, 394], text: 'Q_L',                                color: '#334155', weight: 700, size: 12 },
      { type: 'text', at: [385, 420], text: 'Employment (Q_L)', anchor: 'middle', color: '#334155', size: 11 },
      /* Curve labels - parallel structure (symbol + subtitle) */
      { type: 'text', at: [635, 78],  text: 'S_L = AC_L',    color: '#059669', weight: 700, size: 11 },
      { type: 'text', at: [635, 91],  text: 'Labour Supply', color: '#059669',              size: 9 },
      { type: 'text', at: [432, 62],  text: 'MC_L',          color: 'red',     weight: 700, size: 11 },
      { type: 'text', at: [432, 76],  text: 'Marginal Cost', color: 'red',                  size: 9 },
      { type: 'text', at: [655, 372], text: 'MRP',           color: 'blue',    weight: 700, size: 11 },
      { type: 'text', at: [655, 386], text: 'Labour Demand', color: 'blue',                 size: 9 },
      /* Monopsony eq labels W_m, Q_m */
      { type: 'text', at: [58, 249],  text: 'W_m', anchor: 'end',    color: '#334155', weight: 700, size: 11 },
      { type: 'text', at: [301, 408], text: 'Q_m', anchor: 'middle', color: '#334155', weight: 700, size: 11 },
      /* Competitive eq labels W*, Q* */
      { type: 'text', at: [58, 222],  text: 'W*',  anchor: 'end',    color: '#64748B', weight: 700, size: 11 },
      { type: 'text', at: [355, 408], text: 'Q*',  anchor: 'middle', color: '#64748B', weight: 700, size: 11 }
    ],
    curves: [
      { line: [[90, 350], [630, 80]],  stroke: '#059669', width: 2.5 },
      { line: [[90, 390], [430, 65]],  stroke: 'red',     width: 2.5 },
      { line: [[90, 80],  [650, 370]], stroke: 'blue',    width: 2.5 }
    ],
    guides: [
      /* Monopsony eq projections */
      { from: [301, 189], to: [301, 390], stroke: '#334155', width: 1.5, dash: '6 4', opacity: 0.7 },
      { from: [70, 245],  to: [301, 245], stroke: '#334155', width: 1.5, dash: '6 4', opacity: 0.7 },
      /* Competitive eq projections */
      { from: [355, 218], to: [355, 390], stroke: '#64748B', width: 1.2, dash: '5 4', opacity: 0.6 },
      { from: [70, 218],  to: [355, 218], stroke: '#64748B', width: 1.2, dash: '5 4', opacity: 0.6 }
    ],
    markers: [
      /* strokeWidth: 0 -> dot is exactly r pixels (matches hand-tuned originals). */
      { at: [301, 189], r: 5, fill: '#334155', strokeWidth: 0 },
      { at: [301, 245], r: 4, fill: '#059669', strokeWidth: 0 },
      { at: [355, 218], r: 5, fill: '#334155', strokeWidth: 0 }
    ]
  },

  /* ────────────────────────────────────────────────────────────
     Limit pricing - incumbent sets P_L below entrant's min AC so
     entry is unprofitable. Foregone-profit band (P_m → P_L) and
     entry-unprofitable strip (P_L → entrant AC) are shaded.

     - Both shading rectangles use `layer: 'below'` so D, MC, and
       the dashed P_m / P_L / entrant-AC lines render at full
       strength on top (no opacity hacking needed).
     - Curve labels shortened so they fit within the viewBox.
     ──────────────────────────────────────────────────────────── */
  limitPricingDiagram: {
    width: 760, height: 440, bg: 'bg', bgRadius: 12,
    axes: {
      x: { from: [70, 390], to: [720, 390], arrow: true, stroke: '#334155', width: 2 },
      y: { from: [70, 390], to: [70, 30],   arrow: true, stroke: '#334155', width: 2 }
    },
    annotations: [
      /* Title */
      { type: 'text', at: [380, 22], text: "Limit Pricing: Incumbent sets price below entrant's minimum AC to deter entry",
        anchor: 'middle', color: '#334155', weight: 700, size: 11 },
      /* Axis caps + subtitle */
      { type: 'text', at: [68, 16],   text: 'Price / Cost (P)', anchor: 'middle', color: '#334155', weight: 700, size: 11 },
      { type: 'text', at: [735, 394], text: 'Q',                                  color: '#334155', weight: 700, size: 11 },
      { type: 'text', at: [400, 415], text: 'Quantity (Q)',     anchor: 'middle', color: '#334155', weight: 700, size: 11 },
      /* Foregone-profit band - layered below */
      { type: 'rect', layer: 'below', at: [70, 100], w: 610, h: 135, fill: '#FEF3C7', opacity: 0.55 },
      { type: 'text', at: [375, 168], text: 'Foregone profit (cost of deterrence)',
        anchor: 'middle', color: 'amber-deep', weight: 700, size: 10 },
      /* Entry-unprofitable strip - layered below */
      { type: 'rect', layer: 'below', at: [70, 220], w: 610, h: 15, fill: '#FEE2E2', opacity: 0.85 },
      { type: 'text', at: [375, 231], text: 'Entry unprofitable zone',
        anchor: 'middle', color: 'red', weight: 700, size: 9 },
      /* Curve labels (symbol + subtitle, all fit within viewBox) */
      { type: 'text', at: [690, 364], text: 'D (AR)',     color: 'blue',       weight: 700, size: 11 },
      { type: 'text', at: [690, 378], text: 'Demand',     color: 'blue',                    size: 9 },
      { type: 'text', at: [688, 334], text: 'MC',         color: '#059669',    weight: 700, size: 11 },
      { type: 'text', at: [688, 348], text: 'Incumbent',  color: '#059669',                 size: 9 },
      { type: 'text', at: [688, 224], text: 'Entrant AC', color: 'amber-deep', weight: 700, size: 10 },
      /* Price-line axis labels (P_m, P_L, P_c) */
      { type: 'text', at: [60, 104], text: 'P_m',                 anchor: 'end', color: '#334155',    weight: 700, size: 10 },
      { type: 'text', at: [60, 116], text: '(profit-max price)',  anchor: 'end', color: '#334155',                 size: 8 },
      { type: 'text', at: [60, 239], text: 'P_L',                 anchor: 'end', color: 'amber-deep', weight: 700, size: 10 },
      { type: 'text', at: [60, 251], text: '(limit price)',       anchor: 'end', color: 'amber-deep',              size: 8 },
      { type: 'text', at: [60, 330], text: 'P_c',                 anchor: 'end', color: '#334155',    weight: 700, size: 10 },
      { type: 'text', at: [60, 342], text: '(competitive price)', anchor: 'end', color: '#334155',                 size: 8 },
      /* Conclusion box */
      { type: 'rect', at: [140, 48], w: 430, h: 30, fill: '#FEF3C7', radius: 6, opacity: 0.9 },
      { type: 'text', at: [355, 64], text: "Incumbent sets P_L &lt; Entrant's AC → entry yields a loss → entry deterred",
        anchor: 'middle', color: '#92400E', weight: 600, size: 9 }
    ],
    curves: [
      { line: [[70, 60],  [680, 360]], stroke: 'blue',        width: 2.4 },
      { line: [[70, 330], [680, 330]], stroke: '#059669',     width: 2 },
      { line: [[70, 220], [680, 220]], stroke: 'amber-deep',  width: 1.8, dash: '7 4' }
    ],
    guides: [
      { from: [70, 100], to: [680, 100], stroke: '#334155',    width: 1.3, dash: '5 4', opacity: 0.7 },
      { from: [70, 235], to: [680, 235], stroke: 'amber-deep', width: 1.5, dash: '5 4' }
    ]
  },

  /* ────────────────────────────────────────────────────────────
     Network effect - S-shaped value curve with a critical-mass
     threshold separating sub-critical (rose) and super-critical
     (green) regions. Two dots connected by a "network gap" arrow.

     - Region rectangles use `layer: 'below'` so the navy S-curve
       and entrant/incumbent dots stay crisp inside them.
     - Network-gap stem is a proper `type: 'line'` annotation
       (cleaner than squeezing it into the curves array).
     - Curve label "Network Value" fits within the viewBox.
     ──────────────────────────────────────────────────────────── */
  networkEffectDiagram: {
    width: 700, height: 420, bg: 'bg', bgRadius: 12,
    axes: {
      x: { from: [60, 370], to: [670, 370], arrow: true, stroke: '#334155', width: 2 },
      y: { from: [60, 370], to: [60, 30],   arrow: true, stroke: '#334155', width: 2 }
    },
    annotations: [
      /* Title */
      { type: 'text', at: [350, 22], text: 'Winner-takes-all: incumbent network advantage compounds over time',
        anchor: 'middle', color: '#334155', weight: 700, size: 11 },
      /* Sub-critical region - layered below curves */
      { type: 'rect', layer: 'below', at: [60, 30], w: 180, h: 340, fill: '#FEE2E2', opacity: 0.45 },
      { type: 'text', at: [150, 320], text: 'Sub-critical —',    anchor: 'middle', color: 'red', weight: 700, size: 9 },
      { type: 'text', at: [150, 333], text: 'network too small', anchor: 'middle', color: 'red', weight: 600, size: 9 },
      { type: 'text', at: [150, 346], text: 'to sustain',        anchor: 'middle', color: 'red', weight: 600, size: 9 },
      /* Super-critical region - layered below curves */
      { type: 'rect', layer: 'below', at: [240, 30], w: 420, h: 340, fill: '#DCFCE7', opacity: 0.35 },
      { type: 'text', at: [450, 320], text: 'Super-critical —',        anchor: 'middle', color: '#059669', weight: 700, size: 9 },
      { type: 'text', at: [450, 333], text: 'self-reinforcing growth', anchor: 'middle', color: '#059669', weight: 600, size: 9 },
      /* Critical-mass threshold labels (below x-axis) */
      { type: 'text', at: [240, 388], text: 'Critical mass', anchor: 'middle', color: '#334155', weight: 700, size: 9 },
      { type: 'text', at: [240, 400], text: 'threshold',     anchor: 'middle', color: '#334155', size: 9 },
      /* Axis caps and titles */
      { type: 'text', at: [58, 16],   text: 'Value to Each User', anchor: 'middle', color: '#334155', weight: 700, size: 11 },
      { type: 'text', at: [684, 374], text: 'U',                                    color: '#334155', weight: 700, size: 11 },
      { type: 'text', at: [370, 400], text: 'Number of Users',    anchor: 'middle', color: '#334155', weight: 700, size: 11 },
      /* Network Value curve label (compact, sits above the curve's right end) */
      { type: 'text', at: [600, 58], text: 'Network Value', anchor: 'middle', color: '#1E3A5F', weight: 700, size: 10 },
      /* Entrant labels */
      { type: 'text', at: [80, 270], text: 'Entrant position',       color: '#DC2626', weight: 700, size: 9 },
      { type: 'text', at: [80, 282], text: '(few users, low value)', color: '#DC2626',              size: 9 },
      /* Incumbent labels */
      { type: 'text', at: [490, 53], text: 'Incumbent position',         color: '#1E3A5F', weight: 700, size: 9 },
      { type: 'text', at: [490, 65], text: '(many users, high value)',   color: '#1E3A5F',              size: 9 },
      /* Double-headed network-gap arrow: stem (line annotation) + two arrowheads (polygons) */
      { type: 'line', from: [148, 360], to: [552, 360], stroke: '#334155', width: 1.5 },
      { type: 'polygon', points: [[148, 355], [148, 365], [138, 360]], fill: '#334155' },
      { type: 'polygon', points: [[552, 355], [552, 365], [562, 360]], fill: '#334155' },
      { type: 'text', at: [350, 354], text: 'Network gap — almost impossible to close',
        anchor: 'middle', color: '#334155', weight: 700, size: 9 }
    ],
    curves: [
      /* Sigmoid (S-shaped) Network Value curve */
      { path: 'M 60 355 C 110 353, 160 348, 200 335 C 220 325, 228 305, 240 280 C 255 248, 275 210, 310 175 C 360 128, 430 95, 520 80 C 580 72, 630 70, 660 68',
        stroke: '#1E3A5F', width: 2.8 }
    ],
    guides: [
      { from: [240, 30], to: [240, 370], stroke: '#334155', width: 1.5, dash: '6 4' },
      { from: [130, 285], to: [140, 344], stroke: '#DC2626', width: 1, dash: '3 2' },
      { from: [540, 68],  to: [556, 74],  stroke: '#1E3A5F', width: 1, dash: '3 2' }
    ],
    markers: [
      { at: [140, 350], r: 5, fill: '#DC2626', strokeWidth: 0 },
      { at: [560, 77],  r: 5, fill: '#1E3A5F', strokeWidth: 0 }
    ]
  },

  /* ────────────────────────────────────────────────────────────
     Free-rider problem - MSB (downward) and MC (upward) define a
     social optimum at Q*, but private market provides ≈ 0 because
     the good is non-excludable.

     - The opaque blue conclusion box at the bottom of the original
       was sitting directly over the right end of the MSB curve.
       Moved up into the empty upper-right region between title
       and curves.
     - Welfare-loss triangle uses `layer: 'below'` so the MSB and
       MC lines remain visible through the highlighted region.
     - "MSB (True social value)" shortened (it was being clipped).
     ──────────────────────────────────────────────────────────── */
  freeRiderDiagram: {
    width: 700, height: 440, bg: 'bg', bgRadius: 12,
    axes: {
      x: { from: [70, 390], to: [640, 390], arrow: true, stroke: '#334155', width: 2 },
      y: { from: [70, 390], to: [70, 45],   arrow: true, stroke: '#334155', width: 2 }
    },
    annotations: [
      /* Title */
      { type: 'text', at: [350, 28], text: 'Public Goods — Free Rider Problem &amp; Market Under-provision',
        anchor: 'middle', color: '#334155', weight: 700, size: 14 },
      /* Conclusion box - moved to upper-right empty zone where it doesn't overlap curves */
      { type: 'rect', at: [315, 48], w: 330, h: 58, fill: '#DBEAFE', radius: 6, stroke: 'blue', strokeWidth: 1.5 },
      { type: 'text', at: [480, 70], text: "Non-excludable → no revenue → private firms won't provide",
        anchor: 'middle', color: 'blue-deep', weight: 600, size: 9 },
      { type: 'text', at: [480, 87], text: '→ government must fund via taxation',
        anchor: 'middle', color: 'blue-deep', weight: 600, size: 9 },
      /* Axis caps */
      { type: 'text', at: [655, 394], text: 'Q',            color: '#334155', size: 12 },
      { type: 'text', at: [48, 50],   text: 'Value / Cost', anchor: 'end', color: '#334155', size: 12 },
      /* Welfare-loss triangle - layered below curves */
      { type: 'polygon', layer: 'below', points: [[80, 86], [327, 221], [80, 297]], fill: '#FEE2E2', opacity: 0.75 },
      { type: 'text', at: [165, 185], text: 'Market failure',      anchor: 'middle', color: 'red', weight: 700, size: 11 },
      { type: 'text', at: [165, 200], text: '(under-provision)',   anchor: 'middle', color: 'red', weight: 600, size: 10 },
      /* Curve labels - short symbol + subtitle, both fit within viewBox */
      { type: 'text', at: [568, 148], text: 'MC',           color: 'red',  weight: 700, size: 11 },
      { type: 'text', at: [568, 162], text: 'of provision', color: 'red',               size: 9 },
      { type: 'text', at: [588, 363], text: 'MSB',          color: 'blue', weight: 700, size: 11 },
      { type: 'text', at: [588, 377], text: 'Social value', color: 'blue',              size: 9 },
      /* Q* and P* projection labels */
      { type: 'text', at: [327, 407], text: 'Q* (social optimum)', anchor: 'middle', color: '#334155', weight: 600, size: 10 },
      { type: 'text', at: [58, 225],  text: 'P*',                  anchor: 'end',    color: '#334155', weight: 600, size: 10 },
      /* Market-outcome line label */
      { type: 'text', at: [88, 62], text: 'Market provides Q ≈ 0', color: 'red', weight: 600, size: 10 }
    ],
    curves: [
      { line: [[70, 300], [560, 150]], stroke: 'red',  width: 2.5 },
      { line: [[70, 80],  [580, 360]], stroke: 'blue', width: 2.5 },
      { line: [[80, 70], [80, 390]],   stroke: 'red',  width: 2.5 }
    ],
    guides: [
      { from: [327, 221], to: [327, 390], stroke: '#334155', width: 1.5, dash: '5 4' },
      { from: [70, 221],  to: [327, 221], stroke: '#334155', width: 1.5, dash: '5 4' }
    ]
  }

};

/* ────────────────────────────────────────────────────────────
   Bridge: render each spec into a string and overwrite the
   corresponding legacy SVG entry in window.ECONOS_ICONS.
   Runs once at load. Anything not yet converted keeps its
   inline SVG in js/icons.js.
   ──────────────────────────────────────────────────────────── */
(function () {
  if (!window.Diagram || !window.ECONOS_ICONS) return;
  Object.keys(window.ECONOS_DIAGRAMS).forEach(function (key) {
    window.ECONOS_ICONS[key] = window.Diagram.render(window.ECONOS_DIAGRAMS[key]);
  });
})();
