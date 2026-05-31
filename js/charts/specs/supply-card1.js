/* ============================================================
   Supply card 1 — declarative spec for supplyCurveBasic.

   Legacy was hybrid: chart on the left + numbered "1. What supply
   means / 2. Law of supply / 3. Ceteris paribus" text on the right.
   Per the migration plan, the right panel is dropped — the same
   content is already covered by the card's keyTerms (Law of supply,
   Supply curve, Extension of supply) and keyPoints below the
   diagram. This spec renders the chart only.

   The chart shows the law of supply: as price rises from P₁ to P₂,
   quantity supplied rises from Q₁ to Q₂. Plotted as two dots on a
   straight upward-sloping S curve with dashed projection lines.

   Chart-space positions:
     (Q₁, P₁) → (0.324, 0.317)
     (Q₂, P₂) → (0.595, 0.577)
   S line endpoints (auto-clipped):
     (0.054, 0.057) → (0.973, 0.943)
   ============================================================ */
(function () {
  'use strict';

  var P1 = { x: 0.324, y: 0.317 };
  var P2 = { x: 0.595, y: 0.577 };

  window.ECONOS_SUPPLY_CARD1_SPEC = {
    width: 700,
    height: 400,
    chartArea: { x: 90, y: 40, width: 520, height: 280 },
    className: 'supply-basic-svg',
    axes: {
      x: { label: 'Q' },
      y: { label: 'P' }
    },

    curves: [
      { d: 'M 0.054,0.057 L 0.973,0.943',
        tone: 'green', label: 'S', strokeWidth: 3, labelDx: 10, labelDy: 0 }
    ],

    arrows: [
      // Dashed projections from P-axis to each dot
      { x1: 0, y1: P1.y, x2: P1.x, y2: P1.y, tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { x1: 0, y1: P2.y, x2: P2.x, y2: P2.y, tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      // Dashed projections from each dot down to Q-axis
      { x1: P1.x, y1: P1.y, x2: P1.x, y2: 0, tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 },
      { x1: P2.x, y1: P2.y, x2: P2.x, y2: 0, tone: 'slate', strokeWidth: 1.5, dashed: '5 4', buffer: 0 }
    ],

    points: [
      // Two solid dark dots marking (Q₁, P₁) and (Q₂, P₂).
      { x: P1.x, y: P1.y, tone: 'slate', radius: 6 },
      { x: P2.x, y: P2.y, tone: 'slate', radius: 6 }
    ],

    texts: [
      // P-axis tick labels (italic, matching the legacy's italic style)
      { x: -0.025, y: P1.y, text: 'P₁', tone: 'slate', bold: true, italic: true, fontSize: 14, anchor: 'end' },
      { x: -0.025, y: P2.y, text: 'P₂', tone: 'slate', bold: true, italic: true, fontSize: 14, anchor: 'end' },
      // Q-axis tick labels
      { x: P1.x, y: -0.055, text: 'Q₁', tone: 'slate', bold: true, italic: true, fontSize: 14, anchor: 'middle' },
      { x: P2.x, y: -0.055, text: 'Q₂', tone: 'slate', bold: true, italic: true, fontSize: 14, anchor: 'middle' }
    ]
  };
})();
