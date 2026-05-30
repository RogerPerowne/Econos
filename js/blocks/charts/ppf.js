/* js/blocks/charts/ppf.js
   ───────────────────────────────────────────────────────────────────────────
   Production Possibility Frontier (PPF) chart family for the declarative
   econ-diagram engine.

   Registers via window.ECONOS_ECON_DIAGRAM.register('ppf', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.

   ── GEOMETRY ──────────────────────────────────────────────────────────────
   Axes:
     x (horizontal) → Consumer goods (0 = none, xMax = maximum)
     y (screen, grows DOWN) → Capital goods: small y = many, large y = few.
       yMin (≈ top of chart) = maximum capital goods output
       yMax (≈ bottom) = zero capital goods (all resources on consumer goods)

   The origin of the PPF diagram (zero of both goods) sits at the BOTTOM-LEFT
   corner of the plot box: screen coords (xMin, yMax) = (80, 520).

   Frontier shape — convexPPF (quarter-ellipse, concave to origin):
     f(x) = cy + ry * √(1 − ((x − cx) / rx)²)
     With cx = xMin = 80, cy = yMax = 520, rx = 600, ry = −480 (negative so
     the curve rises toward yMin as x moves away from cx):
       x = 80  → y = 520 + (−480)·1   = 40   (top: all capital, no consumer)
       x = 680 → y = 520 + (−480)·0   = 520  (bottom: all consumer, no capital)
       x = 380 → y ≈ 520 + (−480)·0.866 ≈ 104 (mid: bows far from origin ✓)
     The mid-frontier y (104) lies well above the straight-line mid (280),
     confirming the curve bows OUTWARD from the origin as required. The outward
     bulge captures the increasing opportunity cost of specialisation — moving
     further along the frontier requires sacrificing ever-more units of the
     other good.

   PPF growth (PPF2):
     Applying shift {dy: −60} to PPF1 translates the entire frontier upward in
     screen space, moving it outward from the origin. This represents an
     increase in productive capacity (technology improvement, more resources)
     that raises the maximum attainable output of BOTH goods simultaneously.
     The upper intercept moves from y ≈ 40 to y ≈ −20 (clamped to yMin on
     screen); the lower intercept's clamping keeps the curve anchored. A
     rightward dx shift can be combined to expand the consumer-goods axis.

   Named points:
     A — on PPF1 at x = 220 (capital-goods biased — more K, fewer C)
     B — on PPF1 at x = 500 (consumer-goods biased — more C, fewer K)
     I — at screen coords (310, 340): inside the frontier → inefficiency
         (At x = 310, PPF1 is at y ≈ 89; I at y = 340 is well below → inside ✓)

   The A→B movement arrow in the opportunity-cost view shows that gaining
   more consumer goods requires sacrificing capital goods — the engine
   computes both points' positions on the frontier automatically so the arrow
   sits on the curve without any hardcoded pixel values.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';
  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before ppf family');
    return;
  }

  var S = API.shapes;

  // ── Frontier parameters ──────────────────────────────────────────────────
  // Quarter-ellipse: centre at lower-left corner of plot, negative ry so the
  // arc sweeps upward-rightward (bowing outward from the origin).
  var PPF_CX = 80;   // = plot.xMin — left intercept sits on the y-axis
  var PPF_CY = 520;  // = plot.yMax — right intercept sits on the x-axis
  var PPF_RX = 600;  // span from cx to right edge: xMax − xMin = 680 − 80
  var PPF_RY = -480; // negative → arc rises to yMin; magnitude = yMax − yMin

  // ── Domain of the frontier (full plot width) ─────────────────────────────
  var DOMAIN = [80, 680];

  API.register('ppf', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },
    axes: {
      xLabel: 'C',  xSub: 'consumer goods',
      yLabel: 'K',  ySub: 'capital goods'
    },

    // ── Baseline curves ─────────────────────────────────────────────────────
    // PPF1: the initial frontier. A single kind:'fn' curve evaluated via the
    // engine's convexPPF shape.  One curve is all that is needed — shifts on
    // PPF1 produce PPF2 (growth) in later views.
    baseline: {
      PPF1: {
        kind:   'fn',
        f: function (x) {
          return S.convexPPF(x, {
            cx: PPF_CX,
            cy: PPF_CY,
            rx: PPF_RX,
            ry: PPF_RY
          });
        },
        domain: DOMAIN,
        tone:   'blue',
        display: 'PPF₀'
      }
    },

    // ── Named points ────────────────────────────────────────────────────────
    // The engine resolves each point's screen coordinates at render time using
    // the current view's shifts, so no pixel values are hardcoded here.
    points: {
      // A: production point on PPF1 biased toward capital goods (few C, many K).
      A: { onCurve: 'PPF1', x: 220, label: 'A', tone: 'blue' },

      // B: production point on PPF1 biased toward consumer goods (many C, few K).
      // Moving A→B demonstrates the opportunity cost of producing more C: K falls.
      B: { onCurve: 'PPF1', x: 500, label: 'B', tone: 'amber' },

      // I: inefficient point — INSIDE the frontier. At x = 310 the frontier sits
      // near y ≈ 89; placing I at y = 340 puts it well below the frontier on
      // screen (lower y = more K on this axis) → inside, not on the boundary.
      I: { at: [310, 340], label: 'I', tone: 'rose' }
    }
  });

})();
