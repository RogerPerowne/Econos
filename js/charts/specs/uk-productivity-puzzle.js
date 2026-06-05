/* ============================================================
   UK Productivity Puzzle – engine spec for ukProductivityPuzzle.
   Supply-side topic Card 7 (DEEPEN – UK CONTEXT).

   Visual story:
     • X-axis: 2000–2024 (24 years), ticks every 4 years.
     • Y-axis: Output per hour (no absolute scale, conceptual).
     • Pre-crisis trend (1.5%/yr linear, green dashed) extrapolated
       through 2024 – what productivity "would have done" without
       the puzzle.
     • Actual path (blue solid) matches trend until 2008, then
       flattens dramatically – the puzzle.
     • Shaded gap between trend and actual after 2008 – "lost
       momentum".
     • Financial-crisis marker at 2008.
     • Labels: "Pre-crisis trend" along the dashed line, "Actual
       path" along the solid line, "Productivity gap (lost
       momentum)" inside the shaded region.
   ============================================================ */
(function () {
  'use strict';

  // Year-to-chart-x mapping: 2000 = 0, 2024 = 1.
  // 2008 financial crisis: (2008-2000)/24 = 0.333
  var X2008 = 0.333;

  // Pre-crisis trend: linear 1.5%/yr productivity growth.
  // Anchored so 2000 sits at y=0.20 (lower portion) and 2024 sits
  // at y=0.92 (upper portion) – visually striking trajectory.
  // Trend y at any x: y = 0.20 + 0.72·x
  var TREND_AT_2008 = 0.20 + 0.72 * X2008; // ≈ 0.44

  // Actual path: matches trend until 2008, then flattens with mild
  // upward slope (~0.3%/yr) for the next 16 years. Ends ~0.58.
  var ACTUAL_AT_2024 = 0.58;

  window.ECONOS_UK_PRODUCTIVITY_PUZZLE_SPEC = {
    width: 720,
    height: 360,
    chartArea: { x: 70, y: 36, width: 600, height: 250 },
    className: 'uk-productivity-puzzle-svg',
    axes: {
      x: { label: 'Year' },
      y: { label: 'Output per hour' }
    },

    curves: [
      // Pre-crisis trend (linear, dashed green) from 2000 to 2024
      { d: 'M 0,0.20 L 1.0,0.92',
        tone: 'green', strokeWidth: 2.4, dashed: '7 4',
        label: 'Pre-crisis trend', labelDx: -8, labelDy: -10, anchor: 'end' },

      // Actual path: matches trend 2000-2008, then flattens.
      // Cubic Bezier to flatten smoothly after 2008.
      { d: 'M 0,0.20 L ' + X2008 + ',' + TREND_AT_2008 +
           ' C ' + (X2008 + 0.10) + ',' + (TREND_AT_2008 + 0.02) +
           ' ' + (X2008 + 0.20) + ',' + (TREND_AT_2008 + 0.04) +
           ' 1.0,' + ACTUAL_AT_2024,
        tone: 'blue', strokeWidth: 2.8,
        label: 'Actual path', labelDx: -8, labelDy: 14, anchor: 'end' }
    ],

    polygons: [
      // Productivity gap (lost momentum) – shaded region between
      // actual and trend after 2008. Vertices traced clockwise:
      // (2008, trend=actual) → (2024, trend) → (2024, actual) → back to (2008).
      // Approximated via straight segments since the gap is the
      // key visual, not the curvature.
      { points: [
          [X2008,    TREND_AT_2008],   // 2008 trend = actual
          [1.0,      0.92],            // 2024 trend
          [1.0,      ACTUAL_AT_2024],  // 2024 actual
          [X2008,    TREND_AT_2008]    // close back to 2008
        ],
        fill: '#EDE9FE', opacity: 0.6 }
    ],

    arrows: [
      // Financial crisis vertical dashed marker at 2008.
      { x1: X2008, y1: 0, x2: X2008, y2: 1.0,
        tone: 'slate', strokeWidth: 1.2, dashed: '4 3', buffer: 0 }
    ],

    points: [
      // Financial crisis dot at the 2008 inflection
      { x: X2008, y: TREND_AT_2008, tone: 'slate', radius: 5 }
    ],

    texts: [
      // X-axis year ticks (using texts rather than the engine's
      // numeric tick system since the y-axis is conceptual).
      { x: 0,     y: -0.06, text: '2000', tone: 'slate', fontSize: 11, anchor: 'middle' },
      { x: 0.167, y: -0.06, text: '2004', tone: 'slate', fontSize: 11, anchor: 'middle' },
      { x: X2008, y: -0.06, text: '2008', tone: 'slate', fontSize: 11, bold: true, anchor: 'middle' },
      { x: 0.500, y: -0.06, text: '2012', tone: 'slate', fontSize: 11, anchor: 'middle' },
      { x: 0.667, y: -0.06, text: '2016', tone: 'slate', fontSize: 11, anchor: 'middle' },
      { x: 0.833, y: -0.06, text: '2020', tone: 'slate', fontSize: 11, anchor: 'middle' },
      { x: 1.0,   y: -0.06, text: '2024', tone: 'slate', fontSize: 11, anchor: 'middle' },

      // "Financial crisis" callout above the 2008 marker
      { x: X2008, y: 1.05, text: 'Financial crisis', tone: 'slate', fontSize: 11, bold: true, anchor: 'middle' },

      // "Productivity gap (lost momentum)" label inside the shaded region.
      // Positioned at the centroid-ish of the gap polygon: ~(0.7, 0.65).
      { x: 0.70, y: 0.72, text: 'Productivity gap',  tone: 'purple', bold: true, fontSize: 13, anchor: 'middle' },
      { x: 0.70, y: 0.66, text: '(lost momentum)',   tone: 'purple', italic: true, fontSize: 11, anchor: 'middle' }
    ]
  };
})();
