/* js/blocks/charts/lorenz-kuznets.js
   ───────────────────────────────────────────────────────────────────────────
   Lorenz / Kuznets chart family for the declarative econ-diagram engine.

   Registers TWO chart families:

   ① 'lorenz' — the Lorenz curve + line of perfect equality.
       x-axis: cumulative share of population (left → right, poorest → richest).
       y-axis: cumulative share of income   (bottom → top, 0 % → 100 %).
       • lineOfEquality — 45° line from (0,0) to (1,1) in unit space.
         In plot/screen coords: from (xMin,yMax) to (xMax,yMin). Since
         screen y grows DOWNWARD, this has a NEGATIVE screen slope.
           slope = (yMin − yMax) / (xMax − xMin) = (40 − 520) / (680 − 80) = −0.80
           c     = yMax − slope * xMin            = 520 − (−0.8) * 80     = 584
       • lorenzCurve — convex (bowed inward, below the 45° line) using the
         built-in 'lorenz' shape. "Below" in econ terms = further from the
         origin = higher screen y. The lorenz shape maps unit t → t^g, and
         we supply the plot-space endpoints so the engine returns screen y
         directly. Gini coefficient = area between the two curves (shaded).

   ② 'kuznets' — the Kuznets inverted-U.
       x-axis: GDP per capita (rising development, left → right).
       y-axis: inequality (higher = more unequal, top of chart).
       • kubnetsCurve — a single fn curve using the built-in 'kuznets'
         (= 'laffer') shape, which computes a*4*t*(1−t). Because screen y
         grows DOWNWARD, a higher curve position (low screen y) represents
         HIGH inequality. We use a negative 'a' so the arch rises toward
         the top of the chart, plus a baseline offset that places the
         curve's endpoints at moderate-inequality height. Key numbers:
           base offset  ≈ 470  (screen y at low / high development)
           peak         ≈ 100  (screen y at middle development, max inequality)
           a = 100 − 470 = −370 → a*4*0.5*(1−0.5) = −370, final y = 100 ✓

   Geometry note: all coordinates are in plot space (pixels). The engine
   calls plotPoint() which clamps to the plot box without re-mapping, so
   f(x) must already return the intended screen y value.

   Loads via <script defer> AFTER js/blocks/econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before lorenz-kuznets family');
    return;
  }

  var S = API.shapes;

  /* ── Shared plot box (matches all other families for visual consistency) ── */
  var PLOT = { xMin: 80, xMax: 680, yMin: 40, yMax: 520 };

  /* ══════════════════════════════════════════════════════════════════════════
     ① LORENZ CHART
     ══════════════════════════════════════════════════════════════════════════

     AXES — cumulative population (x) vs cumulative income (y).
     Both axes run from 0 % (origin) to 100 % (far end).
     In screen space: x increases RIGHT (→ richer percentile groups),
     y increases DOWN so the BOTTOM of the plot = 0 % income (yMax = 520)
     and the TOP of the plot = 100 % income (yMin = 40).

     LINE OF EQUALITY:  y_screen = −0.80 · x + 584
       At x = 80  (left edge):  y = −64  + 584 = 520  ✓  (origin, 0 % pop)
       At x = 680 (right edge): y = −544 + 584 =  40  ✓  (top,   100 % inc)

     LORENZ CURVE: lorenz shape with x0=80, x1=680, y0=520, y1=40, g=2.2
       y = 520 + (40 − 520) · t^2.2 = 520 − 480·t^2.2   (t ∈ [0,1])
       At t = 0:   y = 520  (same as equality → curve starts at origin)
       At t = 0.5: y = 520 − 480·0.218 ≈ 415  (below / right of equality)
       At t = 1:   y =  40  (same as equality → ends at (100 %, 100 %))
     The lorenz shape therefore sits BELOW the 45° line (higher screen y for
     the same x) throughout the interior, which is economically correct:
     the bottom x % of the population holds less than x % of income.

     GINI area: between lineOfEquality (lower screen y, i.e. the "Top" curve
     in screen space) and lorenzCurve (higher screen y, i.e. the "Bottom"
     curve). areas.between must list the curve with LOWER screen y first.  */

  var LORENZ_SLOPE = (PLOT.yMin - PLOT.yMax) / (PLOT.xMax - PLOT.xMin); // −0.80
  var LORENZ_C     = PLOT.yMax - LORENZ_SLOPE * PLOT.xMin;               // 584

  API.register('lorenz', {
    viewBox: { w: 780, h: 580 },
    plot:    PLOT,
    axes: {
      xLabel: 'Pop', xSub: 'cumulative % of population',
      yLabel: 'Inc',  ySub: 'cumulative % of income'
    },
    baseline: {
      // 45° line of perfect equality — linear in screen space.
      lineOfEquality: {
        kind: 'linear',
        slope: LORENZ_SLOPE,
        c: LORENZ_C,
        tone: 'slate',
        display: 'Line of equality'
      },
      // Lorenz curve — convex, bowed below the equality line.
      // The built-in lorenz shape maps unit t → t^g and scales to [y0,y1].
      lorenzCurve: {
        kind: 'fn',
        f: function (x) {
          return S.lorenz(x, { x0: PLOT.xMin, x1: PLOT.xMax,
                               y0: PLOT.yMax, y1: PLOT.yMin, g: 2.2 });
        },
        domain: [PLOT.xMin, PLOT.xMax],
        tone: 'rose',
        display: 'Lorenz curve'
      }
    },
    // Named points for intersection/annotation.
    points: {
      // Origin — where both curves begin (0 % population, 0 % income).
      Origin: { at: [PLOT.xMin, PLOT.yMax], label: 'O', tone: 'slate' },
      // Perfect equality endpoint — top-right corner (100 %, 100 %).
      PerfectEq: { at: [PLOT.xMax, PLOT.yMin], label: '100%', tone: 'slate' },
      // Representative point on the Lorenz curve at the median percentile
      // (x = 380, t = 0.5), used to anchor labels in views.
      LorenzMid: {
        onCurve: 'lorenzCurve',
        x: 380,
        label: 'L',
        tone: 'rose'
      }
    }
  });

  /* ══════════════════════════════════════════════════════════════════════════
     ② KUZNETS CHART
     ══════════════════════════════════════════════════════════════════════════

     AXES — GDP per capita (x) vs inequality (y, higher = more unequal).
     In screen space: x increases RIGHT (→ more developed economy),
     y increases DOWN so TOP of chart = HIGH inequality (yMin = 40)
     and BOTTOM of chart = LOW inequality (yMax = 520).

     KUZNETS CURVE: built-in 'kuznets' shape (= laffer parabola) with a
     carefully chosen negative amplitude 'a' and a base offset:

       f(x) = base + S.kuznets(x, { x0, x1, a })
            = base + a·4·t·(1−t)       where t = (x − x0) / (x1 − x0)

     Choosing:  base = 470  (screen y for low-dev and high-dev → lower chart)
                a    = −370 (negative → peak dips toward TOP of screen)
       At t = 0.0:  y = 470 + 0             =  470  (pre-industrial, moderate ineq)
       At t = 0.5:  y = 470 + (−370)·1.0    =  100  (peak inequality, industrial)
       At t = 1.0:  y = 470 + 0             =  470  (post-industrial, moderate ineq)
     The arch peaks at screen y ≈ 100 (near the top of the chart = HIGH inequality),
     and the ends sit at screen y ≈ 470 (below mid-chart = lower inequality). ✓

     Representative points annotate the three development stages so views can
     show the rise-then-fall narrative with named points.  */

  var KUZ_BASE  = 470;  // screen y of the curve's endpoints
  var KUZ_A     = -370; // amplitude: negative → arch upward (low screen y = high ineq)
  var KUZ_X0    = PLOT.xMin;
  var KUZ_X1    = PLOT.xMax;
  var KUZ_PEAK_X = (KUZ_X0 + KUZ_X1) / 2; // x at which inequality peaks (t = 0.5)

  // Helper: evaluate the Kuznets curve at a given plot-space x.
  function kuzY(x) {
    return KUZ_BASE + S.kuznets(x, { x0: KUZ_X0, x1: KUZ_X1, a: KUZ_A });
  }

  API.register('kuznets', {
    viewBox: { w: 780, h: 580 },
    plot:    PLOT,
    axes: {
      xLabel: 'GDP', xSub: 'GDP per capita (development level)',
      yLabel: 'Ineq', ySub: 'inequality (e.g. Gini coefficient)'
    },
    baseline: {
      // The inverted-U Kuznets curve.
      kuznetsCurve: {
        kind: 'fn',
        f: kuzY,
        domain: [KUZ_X0, KUZ_X1],
        tone: 'amber',
        display: 'Kuznets curve'
      }
    },
    // Named points annotating three development stages on the curve.
    points: {
      // EarlyDev — pre-industrial / agrarian (left quarter of curve, low ineq).
      EarlyDev: {
        onCurve: 'kuznetsCurve',
        x: KUZ_X0 + (KUZ_X1 - KUZ_X0) * 0.18, // t ≈ 0.18
        label: 'A',
        tone: 'green'
      },
      // PeakIneq — peak inequality at middle-income / industrial take-off.
      PeakIneq: {
        onCurve: 'kuznetsCurve',
        x: KUZ_PEAK_X, // t = 0.50
        label: 'B',
        tone: 'rose'
      },
      // LateDev — post-industrial / service economy, inequality falling.
      LateDev: {
        onCurve: 'kuznetsCurve',
        x: KUZ_X0 + (KUZ_X1 - KUZ_X0) * 0.82, // t ≈ 0.82
        label: 'C',
        tone: 'green'
      }
    }
  });

})();
