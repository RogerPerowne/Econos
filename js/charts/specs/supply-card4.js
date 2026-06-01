/* ============================================================
   Supply card 4 — declarative spec for supplyPsSvg.
   Producer Surplus diagram, 3 step states (base / ps / prise) —
   structural mirror of demand card 4 (Consumer Surplus) but with
   an upward-sloping S curve and rose-tinted PS triangles.

   Layer wiring matches the existing supply-ps-svg CSS:
     - Always visible: layer-axes, layer-supply
     - .show-base  → layer-legend-base
     - .show-ps    → layer-eq + layer-ps + layer-ps-label
     - .show-prise → layer-prise-ps + layer-prise

   Chart geometry (viewBox 900×440):
     Chart area: x=60–575, y=43–400 (width 515, height 357)
     Supply line: pixel (60, 375) → (560, 75)
                  → chart (0, 0.070) → (0.971, 0.910)
     Equilibrium: pixel (293, 235) → chart (0.452, 0.462)
     Raised P₂:   pixel (393, 175) → chart (0.647, 0.630)
   ============================================================ */
(function () {
  'use strict';

  var P_STAR = { x: 0.452, y: 0.462 };
  var P_2    = { x: 0.647, y: 0.630 };

  window.ECONOS_SUPPLY_CARD4_SPEC = {
    // Side-legend → HTML-below: see ppf-card1.js for the rationale.
    legendPosition: 'bottom',
    height: 440,
    chartArea: { x: 60, y: 43, width: 515, height: 357 },
    className: 'supply-ps-svg',
    background: '#FFFFFF',
    axes: {
      x: { label: 'Q' },
      y: { label: 'P' }
    },

    // PS triangles (filled rose polygons)
    polygons: [
      // Original PS triangle — vertices on the Y-axis from min-supply-price
      // (0, 0.070, where S meets axis) up to P*, plus the equilibrium corner.
      { layer: 'layer-ps',
        points: [[0, 0.070], [0, 0.462], [0.452, 0.462]],
        fill: '#FEE2E2', opacity: 0.85 },
      // Expanded PS triangle when price rises to P₂
      { layer: 'layer-prise-ps',
        points: [[0, 0.070], [0, 0.630], [0.647, 0.630]],
        fill: '#FEE2E2', opacity: 0.85 }
    ],

    curves: [
      { layer: 'layer-supply',
        d: 'M 0,0.070 L 0.971,0.910',
        tone: 'rose', label: 'S', strokeWidth: 3.5, labelDx: 10, labelDy: 0 }
    ],

    arrows: [
      // Equilibrium gridlines (show-ps)
      { layer: 'layer-eq',
        x1: 0, y1: P_STAR.y, x2: P_STAR.x, y2: P_STAR.y,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-eq',
        x1: P_STAR.x, y1: P_STAR.y, x2: P_STAR.x, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },

      // prise: faded P* refs
      { layer: 'layer-prise',
        x1: 0, y1: P_STAR.y, x2: P_2.x, y2: P_STAR.y,
        tone: 'slate', strokeWidth: 1, dashed: '4 4', buffer: 0, opacity: 0.3 },
      { layer: 'layer-prise',
        x1: P_STAR.x, y1: P_STAR.y, x2: P_STAR.x, y2: 0,
        tone: 'slate', strokeWidth: 1, dashed: '4 4', buffer: 0, opacity: 0.3 },
      // prise: new P₂/Q₂ gridlines
      { layer: 'layer-prise',
        x1: 0, y1: P_2.y, x2: P_2.x, y2: P_2.y,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { layer: 'layer-prise',
        x1: P_2.x, y1: P_2.y, x2: P_2.x, y2: 0,
        tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 }
    ],

    points: [
      { layer: 'layer-eq',
        x: P_STAR.x, y: P_STAR.y, tone: 'rose', radius: 6, hollow: true },
      { layer: 'layer-prise',
        x: P_2.x, y: P_2.y, tone: 'rose', radius: 6, hollow: true }
    ],

    texts: [
      // P*/Q* axis tick labels (show-ps)
      { layer: 'layer-eq', x: -0.03, y: P_STAR.y, text: 'P*', tone: 'slate', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-eq', x: P_STAR.x, y: -0.045, text: 'Q*', tone: 'slate', bold: true, fontSize: 12, anchor: 'middle' },
      // "PS" big label inside triangle (show-ps)
      { layer: 'layer-ps-label', x: 0.128, y: 0.294, text: 'PS', tone: 'rose', bold: true, fontSize: 18, anchor: 'middle' },

      // prise: faded P*, Q* refs
      { layer: 'layer-prise', x: -0.03, y: P_STAR.y, text: 'P*', tone: 'gray', bold: true, fontSize: 11, anchor: 'end' },
      { layer: 'layer-prise', x: P_STAR.x, y: -0.045, text: 'Q*', tone: 'gray', bold: true, fontSize: 11, anchor: 'middle' },
      // prise: new P₂, Q₂ labels
      { layer: 'layer-prise', x: -0.03, y: P_2.y, text: 'P₂', tone: 'rose', bold: true, fontSize: 12, anchor: 'end' },
      { layer: 'layer-prise', x: P_2.x, y: -0.045, text: 'Q₂', tone: 'rose', bold: true, fontSize: 12, anchor: 'middle' },
      // prise: PS label inside expanded triangle (slightly right of base position)
      { layer: 'layer-prise', x: 0.175, y: 0.294, text: 'PS', tone: 'rose', bold: true, fontSize: 18, anchor: 'middle' }
    ],

    legends: [
      {
        layer: 'layer-legend-base',
        x: 600,
        y: 72,
        sections: [
          { header: { text: 'THE SUPPLY CURVE', tone: 'slate' },
            body: [
              { text: 'Each point on S shows the',          tone: 'slate', bold: true },
              { text: 'minimum a seller would accept.',     tone: 'slate', bold: true }
            ]
          },
          { header: { text: 'MIN ACCEPTABLE PRICE', tone: 'gray' },
            body: [
              'Low-cost producers supply at low',
              'prices. Higher-cost sellers need',
              'a higher price to enter.'
            ]
          },
          { header: { text: 'THE MARKET PRICE', tone: 'gray' },
            body: [
              'Everyone receives the same price',
              'P* – but low-cost sellers earn a',
              'surplus. Tap to reveal it.'
            ]
          }
        ]
      },
      {
        layer: 'layer-ps-label',
        x: 600,
        y: 72,
        sections: [
          { header: { text: 'PRODUCER SURPLUS', tone: 'rose' },
            body: [
              { text: 'The rose triangle: sellers got', tone: 'slate', bold: true },
              { text: 'P* but would have accepted less.', tone: 'slate', bold: true }
            ]
          },
          { header: { text: 'THREE VERTICES', tone: 'gray' },
            body: [
              '① P-axis: where S meets the price',
              '   axis (min acceptable price)',
              '② (Q*, P*): equilibrium point',
              '③ (0, P*): market price on P-axis'
            ]
          },
          { header: { text: 'FORMULA', tone: 'gray' },
            body: [ 'PS = ½ × Q* × (P* − min supply P)' ]
          },
          { header: { text: 'KEY POINT', tone: 'gray' },
            body: [
              'PS is maximised at the free-market',
              'equilibrium. Taxes reduce it.'
            ]
          }
        ]
      },
      {
        layer: 'layer-prise',
        x: 600,
        y: 72,
        sections: [
          { header: { text: 'PRICE RISES → PS EXPANDS', tone: 'rose' },
            body: [
              { text: 'When price rises from P* to P₂,', tone: 'slate', bold: true },
              { text: 'producer surplus gets bigger.',   tone: 'slate', bold: true }
            ]
          },
          { header: { text: 'TWO GAINS', tone: 'gray' },
            body: [
              '① Existing sellers earn (P₂−P*) on',
              '   every unit already supplied',
              '② New sellers enter who weren\'t',
              '   profitable at P* – output extends',
              '   to Q₂'
            ]
          },
          { header: { text: 'REVERSE: PRICE FALLS', tone: 'gray' },
            body: [
              'PS shrinks – sellers earn less',
              'and some exit the market.'
            ]
          },
          { header: { text: 'EXAM POINT', tone: 'gray' },
            body: [
              'A tax lowers producer price → PS',
              'falls – part lost, part to govt.'
            ]
          }
        ]
      }
    ]
  };
})();
