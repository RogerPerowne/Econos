/* js/blocks/charts/laffer.js
   ───────────────────────────────────────────────────────────────────────────
   Laffer-curve chart family for the declarative econ-diagram engine.

   The Laffer curve shows the relationship between the tax rate (x) and the
   tax revenue collected (y). It is an inverted-U (hill) shape because:
     • At a 0% rate → zero revenue.
     • As the rate rises, revenue rises (competitive / supply-side zone).
     • At 100% → zero revenue (nobody works / no economic activity).
   The peak is the revenue-maximising rate, conventionally labelled t*.

   This family registers three landmark points:
     tStar — the revenue-maximising rate at the curve's peak (x = 380, the
              domain midpoint, because the parabola is symmetric).
     tLow  — a below-t* rate that yields the same revenue as tHigh.
     tHigh — an above-t* rate symmetric to tLow (same revenue, higher rate).

   An additional baseline curve `xAxis` (horizontal at yMax = 520) serves as
   the revenue floor so that area fills (competitive vs prohibitive zones) can
   be composed without hard-coded coordinates.

   Coordinate conventions
   ──────────────────────
   Plot box: xMin=80, xMax=680 (tax rate 0→100 %),
             yMin=40, yMax=520 (tax revenue — small y = high revenue).
   Screen y grows DOWN; revenue grows UP → high revenue maps to small y.
   The `laffer` shape (a parabola 4t(1−t), t ∈ [0,1]) returns 1 at the peak
   and 0 at both endpoints, so we invert and scale:
     f(x) = yMax − amplitude × shapes.laffer(x, {x0, x1, a:1})
   where amplitude = yMax − peak_y. With peak_y = 100, amplitude = 420.

   Registers via window.ECONOS_ECON_DIAGRAM.register('laffer', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';
  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before laffer family');
    return;
  }
  var S = API.shapes; // named shape functions

  // ── Geometry constants ────────────────────────────────────────────────────
  // Domain matches the full plot width: x=80 (0% rate) → x=680 (100% rate).
  var X0 = 80;   // left endpoint — zero rate
  var X1 = 680;  // right endpoint — 100 % rate
  var Y_FLOOR = 520;  // yMax: revenue = 0; sits ON the x-axis
  var Y_PEAK  = 100;  // y at the revenue-maximising rate t* (top of curve)
  var AMPLITUDE = Y_FLOOR - Y_PEAK; // 420 plot-units

  // t* sits at the parabola's peak: t = 0.5 → x = X0 + 0.5*(X1-X0) = 380.
  var T_STAR_X = X0 + 0.5 * (X1 - X0); // 380

  // Equal-revenue pair symmetric around t*: choose t = 1/6 and t = 5/6.
  //   shapes.laffer at t=1/6: 4 × (1/6) × (5/6) = 20/36 ≈ 0.5556
  //   y_screen = 520 − 420 × 0.5556 ≈ 287
  // Both sides land at the same screen y (by symmetry of the parabola).
  var T_LOW_X  = X0 + (1 / 6) * (X1 - X0); // ≈ 180 — below-t* rate
  var T_HIGH_X = X0 + (5 / 6) * (X1 - X0); // ≈ 580 — above-t* rate (prohibitive zone)
  // Screen y at the equal-revenue level:
  //   revenue_fraction = 4 × (1/6) × (5/6) = 20/36
  //   Y_EQUAL_REV = Y_FLOOR − AMPLITUDE × (20/36) ≈ 287
  // tLow and tHigh named points resolve via onCurve at their respective x values.

  API.register('laffer', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },
    axes: {
      xLabel: 't',  xSub: 'tax rate %',
      yLabel: 'R',  ySub: 'tax revenue'
    },
    // Vertical reference at t* = 380 (the revenue-maximising rate).
    anchors: [{ kind: 'vertical', x: T_STAR_X, label: 't*', tone: 'slate' }],

    baseline: {
      // ── The Laffer curve itself ─────────────────────────────────────────
      // kind:'fn' evaluated at every sampled x by renderGenericCurve.
      // The parabola peaks at t=0.5 (x=380) and returns to yMax at both ends.
      laffer: {
        kind: 'fn',
        f: function (x) {
          // shapes.laffer(x, {x0,x1,a:1}) = 4×t×(1−t) in [0,1], peaks at t=0.5.
          // Invert so peak → small y (high on chart) and endpoints → yMax (x-axis).
          return Y_FLOOR - AMPLITUDE * S.laffer(x, { x0: X0, x1: X1, a: 1 });
        },
        domain: [X0, X1],
        tone: 'blue',
        display: 'Laffer curve'
      },
      // ── Revenue floor — horizontal at yMax ──────────────────────────────
      // Acts as the "zero revenue" baseline for area fills in views that shade
      // the competitive vs prohibitive zones beneath the curve.
      xAxis: {
        kind: 'horizontal',
        y: Y_FLOOR,
        tone: 'slate',
        display: ''     // no label — this is a structural reference curve only
      }
    },

    // ── Named points ────────────────────────────────────────────────────────
    // Resolved by the engine at render time using resolvePoint().
    points: {
      // Revenue-maximising rate. onCurve uses evalCurve, which evaluates the
      // fn at x=T_STAR_X — always the parabola's algebraic peak.
      tStar: {
        onCurve: 'laffer', x: T_STAR_X,
        label: 't*', tone: 'amber'
      },
      // Below-t* rate (competitive zone). Same revenue as tHigh.
      tLow: {
        onCurve: 'laffer', x: T_LOW_X,
        label: 'tₗ', tone: 'green'
      },
      // Above-t* rate (prohibitive zone). Same revenue as tLow.
      tHigh: {
        onCurve: 'laffer', x: T_HIGH_X,
        label: 'tₕ', tone: 'rose'
      }
    }
  });

})();
