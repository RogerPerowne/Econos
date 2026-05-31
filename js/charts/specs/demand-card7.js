/* ============================================================
   Demand card 7 — declarative spec for demandScheduleCurve.

   Legacy was a hybrid: schedule TABLE on the left + chart on the
   right. Per the migration plan (rebuild hybrids as pure engine
   charts + supporting text outside the SVG), the table is dropped:
   each plotted point's label already reads "A (12, 10)" etc., so
   the table is fully redundant with the chart.

   Five plotted points along a straight downward demand curve:
     A (P=12, Q=10)  B (10, 20)  C (8, 30)  D (6, 40)  E (4, 50)

   Chart-space positions:
     A → (0.193, 0.873)
     B → (0.386, 0.683)
     C → (0.578, 0.492)
     D → (0.771, 0.302)
     E → (0.964, 0.111)
   Line endpoints (auto-clipped at chart bounds):
     (0.096, 0.968) → (1.024, 0.052).
   ============================================================ */
(function () {
  'use strict';

  var A = { x: 0.193, y: 0.873 };
  var B = { x: 0.386, y: 0.683 };
  var C = { x: 0.578, y: 0.492 };
  var D = { x: 0.771, y: 0.302 };
  var E = { x: 0.964, y: 0.111 };

  window.ECONOS_DEMAND_CARD7_SPEC = {
    width: 700,
    height: 400,
    chartArea: { x: 90, y: 40, width: 520, height: 280 },
    className: 'demand-schedule-svg',
    axes: {
      x: { label: 'Quantity' },
      y: { label: 'Price (£)' }
    },

    curves: [
      { d: 'M 0.096,0.968 L 1.024,0.052',
        tone: 'green', label: 'D', strokeWidth: 3, labelDx: 10, labelDy: 0 }
    ],

    arrows: [
      // Dashed gridlines from P-axis to each data point
      { x1: 0, y1: A.y, x2: A.x, y2: A.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: 0, y1: B.y, x2: B.x, y2: B.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: 0, y1: C.y, x2: C.x, y2: C.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: 0, y1: D.y, x2: D.x, y2: D.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: 0, y1: E.y, x2: E.x, y2: E.y, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      // Dashed gridlines down from each data point to Q-axis
      { x1: A.x, y1: A.y, x2: A.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: B.x, y1: B.y, x2: B.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: C.x, y1: C.y, x2: C.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: D.x, y1: D.y, x2: D.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 },
      { x1: E.x, y1: E.y, x2: E.x, y2: 0, tone: 'slate', strokeWidth: 1, dashed: '3 3', buffer: 0 }
    ],

    points: [
      // A–D: label upper-right of dot. E: label lower-left (to keep clear of
      // the chart's right edge / "Quantity" axis label).
      { x: A.x, y: A.y, tone: 'green', radius: 6, label: 'A (12, 10)',
        labelDx: 10, labelDy: -16, anchor: 'start' },
      { x: B.x, y: B.y, tone: 'green', radius: 6, label: 'B (10, 20)',
        labelDx: 10, labelDy: -16, anchor: 'start' },
      { x: C.x, y: C.y, tone: 'green', radius: 6, label: 'C (8, 30)',
        labelDx: 10, labelDy: -16, anchor: 'start' },
      { x: D.x, y: D.y, tone: 'green', radius: 6, label: 'D (6, 40)',
        labelDx: 10, labelDy: -16, anchor: 'start' },
      { x: E.x, y: E.y, tone: 'green', radius: 6, label: 'E (4, 50)',
        labelDx: -10, labelDy: 22, anchor: 'end' }
    ],

    texts: [
      // P-axis tick labels
      { x: -0.018, y: A.y, text: '12', tone: 'slate', fontSize: 13, anchor: 'end' },
      { x: -0.018, y: B.y, text: '10', tone: 'slate', fontSize: 13, anchor: 'end' },
      { x: -0.018, y: C.y, text: '8',  tone: 'slate', fontSize: 13, anchor: 'end' },
      { x: -0.018, y: D.y, text: '6',  tone: 'slate', fontSize: 13, anchor: 'end' },
      { x: -0.018, y: E.y, text: '4',  tone: 'slate', fontSize: 13, anchor: 'end' },

      // Q-axis tick labels (10, 20, 30, 40) — "50" dropped to keep clear of "Quantity" label.
      { x: A.x, y: -0.055, text: '10', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { x: B.x, y: -0.055, text: '20', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { x: C.x, y: -0.055, text: '30', tone: 'slate', fontSize: 13, anchor: 'middle' },
      { x: D.x, y: -0.055, text: '40', tone: 'slate', fontSize: 13, anchor: 'middle' }
    ]
  };
})();
