/* ============================================================
   Consumption Function — engine spec for consumptionFunction.
   Consumption card 1 "C = a + bY".

   Classic Keynesian consumption function diagram:
     • upward-sloping linear line C = a + bY
     • y-intercept dot at (0, a) — autonomous consumption
     • slope triangle near the upper-right showing b = MPC
     • brace + label "a" on the y-axis below the intercept

   Not a perspective candidate: both schools agree on the basic
   shape (linear, positive intercept, slope < 1). The Keynesian
   contribution is the IDEA of an autonomous baseline + MPC —
   the diagram is just that idea visualised.
   ============================================================ */
(function () {
  'use strict';

  // C-line endpoints in chart-coords. Line goes from (0, a/Cmax)
  // up to the upper-right (slope b = MPC ≈ 0.6 of chart units).
  var INTERCEPT = { x: 0,     y: 0.333 };
  var TOP_RIGHT = { x: 0.944, y: 0.833 };

  window.ECONOS_CONSUMPTION_FUNCTION_SPEC = {
    width: 560,
    height: 320,
    chartArea: { x: 160, y: 40, width: 360, height: 240 },
    className: 'consumption-function-svg',
    axes: {
      x: { label: 'Y' },
      y: { label: 'C' }
    },

    curves: [
      { d: 'M ' + INTERCEPT.x + ',' + INTERCEPT.y + ' L ' + TOP_RIGHT.x + ',' + TOP_RIGHT.y,
        tone: 'blue', label: 'C = a + bY', strokeWidth: 3.5,
        labelDx: 8, labelDy: -2, anchor: 'start' }
    ],

    points: [
      // Autonomous-consumption intercept dot at (0, a)
      { x: INTERCEPT.x, y: INTERCEPT.y, tone: 'blue', radius: 5.5 }
    ],

    // Slope triangle near upper-right showing the b = MPC slope.
    // Horizontal segment (run) and vertical segment (rise) — engine
    // arrow primitives, no markers because these are just gridlines.
    arrows: [
      { x1: 0.611, y1: 0.592, x2: 0.778, y2: 0.592,
        tone: 'slate', strokeWidth: 1.3, dashed: '4 3', buffer: 0 },
      { x1: 0.778, y1: 0.592, x2: 0.778, y2: 0.679,
        tone: 'slate', strokeWidth: 1.3, dashed: '4 3', buffer: 0 }
    ],

    texts: [
      // Slope triangle annotation: "b = MPC"
      { x: 0.811, y: 0.617, text: 'b = MPC',
        tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'start' },

      // Brace label for autonomous consumption (a) on the y-axis
      { x: -0.111, y: 0.300, text: 'a',
        tone: 'slate', bold: true, italic: true, fontSize: 13, anchor: 'end' },
      { x: -0.111, y: 0.233, text: '(autonomous)',
        tone: 'slate', fontSize: 10, anchor: 'end' }
    ]
  };
})();
