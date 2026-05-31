/* ============================================================
   Demand card 1 — declarative spec for demandLawCurve.

   Legacy was a hybrid: left side "What is demand?" definition + a
   green callout box, right side the chart. Per the migration plan
   (rebuild hybrids as pure engine charts + text in description
   panel), the left text panel is dropped — the card's keyPoints +
   keyTerms already convey the definition. This spec renders the
   chart only.

   Chart: demand schedule with three plotted points A, B, C and a
   straight demand line through them. Italic caption at the bottom.

   Data points (£price, qty): A (12, 10) · B (8, 20) · C (4, 30).
   Mapped into chart space with the demand-line slope so the line
   passes exactly through all three:
     A → (0.237, 0.915)
     B → (0.474, 0.610)
     C → (0.711, 0.305)
   Line endpoints (extended to chart bounds; auto-clip handles
   overflow): (0.142, 1.038) → (0.921, 0.034).
   ============================================================ */
(function () {
  'use strict';

  var A = { x: 0.237, y: 0.915 };
  var B = { x: 0.474, y: 0.610 };
  var C = { x: 0.711, y: 0.305 };

  window.ECONOS_DEMAND_CARD1_SPEC = {
    width: 700,
    height: 400,
    chartArea: { x: 90, y: 40, width: 520, height: 280 },
    className: 'demand-law-svg',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price (£)' }
    },

    curves: [
      { d: 'M 0.142,1.038 L 0.921,0.034',
        tone: 'green', label: 'D', strokeWidth: 3, labelDx: 10, labelDy: 0 }
    ],

    arrows: [
      // Dashed gridlines from P-axis to each data point
      { x1: 0, y1: A.y, x2: A.x, y2: A.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: 0, y1: B.y, x2: B.x, y2: B.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: 0, y1: C.y, x2: C.x, y2: C.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      // Dashed gridlines from each data point down to Q-axis
      { x1: A.x, y1: A.y, x2: A.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: B.x, y1: B.y, x2: B.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: C.x, y1: C.y, x2: C.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 }
    ],

    points: [
      // Single-line label "A (£12, 10)" sits above-right of each dot, clear of
      // the line. Same pattern as card 7 — neater than the legacy stacked
      // letter+coord layout and avoids letter/coord/line collisions.
      { x: A.x, y: A.y, tone: 'green', radius: 6, label: 'A (£12, 10)',
        labelDx: 10, labelDy: -16, anchor: 'start' },
      { x: B.x, y: B.y, tone: 'green', radius: 6, label: 'B (£8, 20)',
        labelDx: 10, labelDy: -16, anchor: 'start' },
      { x: C.x, y: C.y, tone: 'green', radius: 6, label: 'C (£4, 30)',
        labelDx: 10, labelDy: -16, anchor: 'start' }
    ],

    texts: [

      // P-axis tick labels (£12, £8, £4, 0)
      { x: -0.018, y: A.y, text: '12', tone: 'slate', fontSize: 13, anchor: 'end' },
      { x: -0.018, y: B.y, text: '8',  tone: 'slate', fontSize: 13, anchor: 'end' },
      { x: -0.018, y: C.y, text: '4',  tone: 'slate', fontSize: 13, anchor: 'end' },

      // Q-axis tick labels (10, 20, 30) — dropped "40" to keep clear of the
      // engine's "Quantity" axis label, which sits right-aligned to the arrowhead.
      { x: A.x, y: -0.055, text: '10', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { x: B.x, y: -0.055, text: '20', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { x: C.x, y: -0.055, text: '30', tone: 'slate', fontSize: 13, anchor: 'middle' },

      // Italic caption below the chart
      { x: 0.5, y: -0.16, text: 'As price falls, quantity increases – shown by a downward-sloping demand curve.',
        tone: 'gray', italic: true, fontSize: 13, anchor: 'middle' }
    ]
  };
})();
