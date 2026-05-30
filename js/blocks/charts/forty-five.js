/* js/blocks/charts/forty-five.js
   ───────────────────────────────────────────────────────────────────────────
   Keynesian 45-degree / income-expenditure chart family for the declarative
   econ-diagram engine.

   Axes:
     x = National income Y (real output / income)
     y = Planned expenditure AE (aggregate expenditure = C + I + G + NX)

   The two baseline curves are:
     45°  — the 45-degree line where AE = Y (equilibrium locus). Every point
            on this line is a possible equilibrium. Slope = 1 in econ space,
            which maps to screen slope −1 (y decreases as x increases, i.e.
            the line runs from the bottom-left corner of the plot up to the
            top-right). The intercept c45 = yMax + xMin = 520 + 80 = 600 so
            that the line passes through the economic origin (econ_Y=0 ↔
            screen_x=xMin=80, econ_AE=0 ↔ screen_y=yMax=520).

     AE   — the planned-expenditure schedule: AE = a + b·Y where a > 0
            (autonomous expenditure) and 0 < b < 1 (MPC). In screen space
            this is also a negatively sloped line, but LESS steep than the
            45° line (|slope| < 1). At low Y (small x) the AE line sits
            ABOVE (smaller screen y) the 45° line because autonomous spending
            makes planned expenditure exceed output — firms draw down stocks,
            output rises. At the intersection AE = Y: the equilibrium.

   Econ-space translation
   ──────────────────────
   The engine uses screen coordinates directly: x increases right, y
   increases DOWN. Higher values on the AE axis therefore correspond to
   SMALLER screen y. The mapping is:
     econ_Y   = screen_x − xMin      (xMin = 80)
     econ_AE  = yMax − screen_y      (yMax = 520)

   For a line AE = a + b·Y:
     screen_y = yMax − a − b·(screen_x − xMin)
              = (yMax − a + b·xMin) − b·screen_x
   So:  slope_screen = −b,   c_screen = yMax − a + b·xMin

   For the 45-degree line (b = 1, a = 0):
     slope_screen = −1,   c_screen = yMax + xMin = 600

   Equilibrium at screen (xEq, yEq):
     Solving −1·x + 600 = −b·x + cAE  →  x = (600 − cAE) / (1 − b)
   Choose xEq = 350, b = 0.6:
     cAE = 600 − 350·(1 − 0.6) = 600 − 140 = 460,  yEq = −350 + 600 = 250

   Multiplier view: ΔI = 60 econ units → AE shifts up → screen dy = −60.
     New cAE = 460 − 60 = 400
     New xEq = (600 − 400) / 0.4 = 500,  new yEq = 100
     ΔY = 500 − 350 = 150,  multiplier = ΔY/ΔI = 150/60 = 2.5 = 1/(1−b) ✓

   Registers via window.ECONOS_ECON_DIAGRAM.register('fortyFive', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before fortyFive family');
    return;
  }

  // ── Geometry constants ────────────────────────────────────────────────────
  // Plot box (same as adas/phillips for visual consistency).
  var X_MIN = 80;
  var X_MAX = 680;
  var Y_MIN = 40;
  var Y_MAX = 520;

  // 45-degree line: AE = Y in econ space → screen slope −1, c = Y_MAX + X_MIN.
  var SLOPE_45  = -1;
  var C_45      = Y_MAX + X_MIN;               // 600

  // AE line: MPC = 0.6, so screen slope = −0.6.
  // Baseline equilibrium at screen x = 350 (econ Y* = 350 − 80 = 270 units).
  var MPC       = 0.6;
  var SLOPE_AE  = -MPC;                        // −0.6
  var X_EQ0     = 350;                         // equilibrium x in screen/plot space
  var C_AE      = C_45 - X_EQ0 * (1 - MPC);   // 460 — places AE ∩ 45° at x=350

  // Multiplier shift: ΔI = 60 econ units upward → screen dy = −60.
  // New AE intercept after shift: C_AE − 60 = 400
  // New equilibrium x: (C_45 − (C_AE − 60)) / (1 − MPC) = 500 (engine re-intersects at runtime)

  // ── Register the chart family ─────────────────────────────────────────────
  API.register('fortyFive', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: X_MIN, xMax: X_MAX, yMin: Y_MIN, yMax: Y_MAX },

    axes: {
      xLabel: 'Y',  xSub: 'national income',
      yLabel: 'AE', ySub: 'planned expenditure'
    },

    // No LRAS-style vertical anchor — the Keynesian cross has no fixed-output
    // reference line in the baseline (Y* is endogenously determined by the
    // intersection of AE and the 45° line).

    baseline: {
      // 45-degree line — the equilibrium locus (AE = Y). Slope −1 in screen
      // space produces a line that rises to the right at 45° visually (higher
      // Y → proportionally higher AE at every point on this line).
      fortyfive: {
        kind: 'linear', slope: SLOPE_45, c: C_45,
        tone: 'slate', display: '45°'
      },
      // Planned-expenditure schedule. Slope −0.6 is shallower than the 45°
      // line, so it crosses from above (AE > Y, expansionary gap) to below
      // (AE < Y, contractionary gap) at the equilibrium x. Positive autonomous
      // spending (intercept) ensures AE > 0 even when Y = 0.
      AE: {
        kind: 'linear', slope: SLOPE_AE, c: C_AE,
        tone: 'blue', display: 'AE₀'
      }
    },

    // Named points — recomputed by the engine for each view's shifts.
    points: {
      // E0: baseline equilibrium (AE ∩ 45° line).
      E0: { on: ['AE', 'fortyfive'], label: 'E₀', tone: 'slate' },
      // E1: new equilibrium after AE shifts up by ΔI (multiplier view).
      // The engine re-intersects AE (with its dy shift) against the 45° line.
      E1: { on: ['AE', 'fortyfive'], label: 'E₁', tone: 'amber' }
    }
  });

})();
