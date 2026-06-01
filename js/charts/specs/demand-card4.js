/* ============================================================
   Demand card 4 — declarative spec for demandCsSvg.
   Consumer Surplus diagram, 3 step states (base / cs / pfall).

   Layer wiring matches the existing demand-cs-svg CSS in styles.css:
     - Always visible: layer-axes, layer-demand
     - .show-base   → layer-legend-base
     - .show-cs     → layer-eq + layer-cs + layer-cs-label
     - .show-pfall  → layer-pfall-cs + layer-pfall

   Chart geometry mapped from the legacy SVG (viewBox 900×440):
     - Chart area: x=60-575, y=43-400 (width 515, height 357)
     - Demand line endpoints: (60, 65) → (560, 375) in pixels,
       which is chart-space (0, 0.938) → (0.971, 0.070)
     - Equilibrium: (318, 225) → chart (0.501, 0.490)
     - Expanded P₂ marker: (423, 290) → chart (0.705, 0.308)

   The right-panel legend area starts at pixel x=628 in legacy; engine
   legends use that as `x`. Each of the 3 legend variants is in its
   own layer wrapper so CSS show-X rules toggle the right one.
   ============================================================ */
(function () {
  'use strict';

  var P_STAR = { x: 0.501, y: 0.490 };
  var P_2    = { x: 0.705, y: 0.308 };

  window.ECONOS_DEMAND_CARD4_SPEC = {
    // Side-legend → HTML-below: see ppf-card1.js for the rationale.
    legendPosition: 'bottom',
    height: 440,
    chartArea: { x: 60, y: 43, width: 515, height: 357 },
    className: 'demand-cs-svg',
    background: '#FFFFFF',
    axes: {
      x: { label: 'Q' },
      y: { label: 'P' }
    },

    // CS triangles (filled green polygons). Each lives in its own layer
    // that the .show-cs / .show-pfall CSS rules toggle on.
    polygons: [
      // Original CS triangle — vertices on the Y-axis from D-intercept
      // down to P*, plus the equilibrium corner (Q*, P*).
      { layer: 'layer-cs',
        points: [[0, 0.938], [0, 0.490], [0.501, 0.490]],
        fill: '#D1FAE5', opacity: 0.85 },
      // Expanded triangle when price falls to P₂
      { layer: 'layer-pfall-cs',
        points: [[0, 0.938], [0, 0.308], [0.705, 0.308]],
        fill: '#D1FAE5', opacity: 0.85 }
    ],

    curves: [
      // Demand curve — straight line from D-intercept to (Q-axis, 0)
      { layer: 'layer-demand',
        d: 'M 0,0.938 L 0.971,0.070',
        tone: 'green', label: 'D', strokeWidth: 3.5, labelDx: 10, labelDy: 0 }
    ],

    // Equilibrium markers (show-cs)
    arrows: [
      // Dashed horizontal gridline from P* to equilibrium
      { layer: 'layer-eq',
        x1: 0, y1: 0.490, x2: 0.501, y2: 0.490,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      // Dashed vertical gridline from equilibrium down to Q*
      { layer: 'layer-eq',
        x1: 0.501, y1: 0.490, x2: 0.501, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },

      // pfall: faded original P* references
      { layer: 'layer-pfall',
        x1: 0, y1: 0.490, x2: 0.705, y2: 0.490,
        tone: 'slate', strokeWidth: 1, dashed: '4 4', buffer: 0, opacity: 0.3 },
      { layer: 'layer-pfall',
        x1: 0.501, y1: 0.490, x2: 0.501, y2: 0,
        tone: 'slate', strokeWidth: 1, dashed: '4 4', buffer: 0, opacity: 0.3 },
      // pfall: new P₂ Q₂ gridlines
      { layer: 'layer-pfall',
        x1: 0, y1: 0.308, x2: 0.705, y2: 0.308,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-pfall',
        x1: 0.705, y1: 0.308, x2: 0.705, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 }
    ],

    points: [
      // Equilibrium dot — hollow green circle, in layer-eq
      { layer: 'layer-eq',
        x: P_STAR.x, y: P_STAR.y, tone: 'green', radius: 6, hollow: true },
      // P₂ marker — hollow green circle, in layer-pfall
      { layer: 'layer-pfall',
        x: P_2.x, y: P_2.y, tone: 'green', radius: 6, hollow: true }
    ],

    // Axis tick labels (P*, Q*, P₂, Q₂ + faded copies on pfall).
    // All position OUTSIDE the chart axes via negative x / negative y.
    texts: [
      // P* axis label (cs state)
      { layer: 'layer-eq', x: -0.03, y: 0.490, text: 'P*', tone: 'slate', bold: true, fontSize: 12, anchor: 'end' },
      // Q* axis label (cs state)
      { layer: 'layer-eq', x: 0.501, y: -0.045, text: 'Q*', tone: 'slate', bold: true, fontSize: 12, anchor: 'middle' },
      // "CS" big label inside triangle (cs-label state)
      { layer: 'layer-cs-label', x: 0.151, y: 0.644, text: 'CS', tone: 'green', bold: true, fontSize: 18, anchor: 'middle' },

      // pfall: faded P*, Q* refs
      { layer: 'layer-pfall', x: -0.03, y: 0.490, text: 'P*', tone: 'gray', bold: true, fontSize: 11, anchor: 'end' },
      { layer: 'layer-pfall', x: 0.501, y: -0.045, text: 'Q*', tone: 'gray', bold: true, fontSize: 11, anchor: 'middle' },
      // pfall: new P₂, Q₂ labels
      { layer: 'layer-pfall', x: -0.03, y: 0.308, text: 'P₂', tone: 'green', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-pfall', x: 0.705, y: -0.045, text: 'Q₂', tone: 'green', bold: true, fontSize: 12, anchor: 'middle' },
      // pfall: CS label inside expanded triangle (different position)
      { layer: 'layer-pfall', x: 0.184, y: 0.532, text: 'CS', tone: 'green', bold: true, fontSize: 18, anchor: 'middle' }
    ],

    // Right-side legend variants — each in its own layer so the CSS
    // .show-X rule toggles the right one on. Engine legend renderer
    // already handles title strip + section headers + body lines.
    legends: [
      {
        layer: 'layer-legend-base',
        x: 600,
        y: 72,
        sections: [
          { header: { text: 'THE DEMAND CURVE', tone: 'slate' },
            body: [
              { text: 'Each point on D shows the', tone: 'slate', bold: true },
              { text: 'maximum a buyer would pay.', tone: 'slate', bold: true }
            ]
          },
          { header: { text: 'WILLINGNESS TO PAY', tone: 'gray' },
            body: [
              'At Q=1, a buyer might pay £100.',
              "At Q=10, they'd only pay £40.",
              'Diminishing marginal utility.'
            ]
          },
          { header: { text: 'THE MARKET PRICE', tone: 'gray' },
            body: [
              'Everyone pays the same market',
              'price P* – but those with higher',
              'WTP get a bonus. Tap to reveal it.'
            ]
          }
        ]
      },
      {
        layer: 'layer-cs-label',
        x: 600,
        y: 72,
        sections: [
          { header: { text: 'CONSUMER SURPLUS', tone: 'green' },
            body: [
              { text: 'The green triangle: buyers paid', tone: 'slate', bold: true },
              { text: 'P* but were willing to pay more.', tone: 'slate', bold: true }
            ]
          },
          { header: { text: 'THREE VERTICES', tone: 'gray' },
            body: [
              '① P-axis: where D meets the price',
              '   axis (max willingness to pay)',
              '② (Q*, P*): equilibrium point',
              '③ (0, P*): market price on P-axis'
            ]
          },
          { header: { text: 'FORMULA', tone: 'gray' },
            body: [ 'CS = ½ × Q* × (max WTP − P*)' ]
          },
          { header: { text: 'KEY POINT', tone: 'gray' },
            body: [
              'CS is maximised at the free-market',
              'equilibrium. Any distortion shrinks it.'
            ]
          }
        ]
      },
      {
        layer: 'layer-pfall',
        x: 600,
        y: 72,
        sections: [
          { header: { text: 'PRICE FALLS → CS EXPANDS', tone: 'green' },
            body: [
              { text: 'When price drops from P* to P₂,', tone: 'slate', bold: true },
              { text: 'consumer surplus gets bigger.', tone: 'slate', bold: true }
            ]
          },
          { header: { text: 'TWO GAINS', tone: 'gray' },
            body: [
              '① Existing buyers save (P*−P₂) on',
              '   every unit – the rectangle widens',
              '② New buyers enter who weren\'t',
              '   willing to pay P* – the triangle',
              '   extends to Q₂'
            ]
          },
          { header: { text: 'REVERSE: PRICE RISES', tone: 'gray' },
            body: [
              'CS shrinks – buyers either pay',
              'more or leave the market entirely.'
            ]
          },
          { header: { text: 'EXAM POINT', tone: 'gray' },
            body: [
              'A tax raises consumer price → CS',
              'falls – part lost, part to govt revenue.'
            ]
          }
        ]
      }
    ]
  };
})();
