/* js/blocks/charts/growth.js
   ───────────────────────────────────────────────────────────────────────────
   Long-run economic growth chart family for the declarative econ-diagram engine.

   Models long-run growth as a rightward shift of LRAS (Long-Run Aggregate
   Supply), showing an increase in the economy's productive capacity /
   potential output.  Uses the standard AD / LRAS / SRAS framework.

   Axes: x = Real output (Y), y = Price level (P).

   Screen-coordinate conventions (inherited from the adas family):
     • Higher screen y  →  lower position on chart  →  lower Price level P.
     • AD is downward-sloping (higher Y → lower P):
         screen slope POSITIVE  (+0.7).  As x ↑, y ↑ → point moves DOWN → P falls.
     • SRAS is upward-sloping (higher Y → higher P):
         screen slope NEGATIVE  (−0.7).  As x ↑, y ↓ → point moves UP → P rises.
     • LRAS is vertical at potential output Y*.

   Baseline geometry: all three curves are set to intersect at (380, 305),
   the mid-chart triple-equilibrium point.  c values derived as:
     AD:   c = 305 − 0.7 × 380 = 39
     SRAS: c = 305 + 0.7 × 380 = 571

   Growth view: LRAS shifts RIGHT by Δx = +140 (Y* 380 → 520).  AD and SRAS
   stay constant (supply-side / productivity-led growth with no demand
   stimulus).  The new long-run equilibrium E₁ is where AD intersects LRAS₁:
     y_E1 = AD(520) = 0.7 × 520 + 39 = 403  (lower price level than E₀ = 305)
   So growth raises potential output AND lowers the price level — correct
   economics.  E₁ sits inside the plot box at (520, 403). ✓

   Named points:
     E₀  →  on:['AD','SRAS']  →  (380, 305) — initial triple-equilibrium.
             Uses AD ∩ SRAS so it stays anchored when only LRAS shifts.
     E₁  →  on:['AD','LRAS']  →  (520, 403) after LRAS dx=+140.
             Vertical × linear intersection: the engine evaluates AD at the
             shifted LRAS x-position; no hardcoded pixel coordinates.

   Registers as 'growth' via window.ECONOS_ECON_DIAGRAM.register().
   Loads via <script defer> AFTER econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before growth family');
    return;
  }

  // ── Baseline geometry constants ─────────────────────────────────────────
  // Triple-equilibrium at (Y*, P*) in screen coords = (380, 305) — mid-chart.
  var Y_STAR  = 380;   // initial LRAS / potential output x-position
  var P_STAR  = 305;   // initial equilibrium price level (screen y)
  var SLOPE   = 0.7;   // magnitude shared by AD (+SLOPE) and SRAS (−SLOPE)

  // AD:   y = +SLOPE × x + C_AD   →  C_AD  = P_STAR − SLOPE × Y_STAR
  var C_AD   = P_STAR - SLOPE * Y_STAR;   //  305 − 266  =  39

  // SRAS: y = −SLOPE × x + C_SRAS  →  C_SRAS = P_STAR + SLOPE × Y_STAR
  var C_SRAS = P_STAR + SLOPE * Y_STAR;   //  305 + 266  =  571

  API.register('growth', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },

    axes: {
      xLabel: 'Y', xSub: 'real output',
      yLabel: 'P', ySub: 'price level'
    },

    // Static reference anchor — marks the initial potential-output level Y*
    // as a faint dashed vertical so the starting position is always visible.
    anchors: [{ kind: 'vertical', x: Y_STAR, label: 'Y*', tone: 'slate' }],

    // ── Baseline curves ──────────────────────────────────────────────────
    // All three intersect at (380, 305) when no shifts are applied.
    baseline: {
      // Aggregate Demand: downward-sloping (positive screen slope).
      // Higher Y → lower P: as x ↑, screen y ↑ → point moves down the chart.
      AD:   { kind: 'linear',   slope:  SLOPE,  c: C_AD,   tone: 'blue',  display: 'AD'    },

      // Long-Run Aggregate Supply: vertical at potential output Y*.
      // Shifts RIGHT to represent growth in productive capacity.
      LRAS: { kind: 'vertical', x: Y_STAR,                 tone: 'green', display: 'LRAS₀' },

      // Short-Run Aggregate Supply: upward-sloping (negative screen slope).
      // Higher Y → higher P: as x ↑, screen y ↓ → point moves up the chart.
      SRAS: { kind: 'linear',   slope: -SLOPE,  c: C_SRAS, tone: 'slate', display: 'SRAS₀' }
    },

    // ── Named points ─────────────────────────────────────────────────────
    // E₀: initial long-run equilibrium at (380, 305).
    //   Defined as AD ∩ SRAS so the engine recomputes it at runtime and it
    //   stays at (380, 305) in views where only LRAS shifts (AD and SRAS
    //   are unshifted).
    //
    // E₁: new long-run equilibrium after LRAS shifts right (dx = +140).
    //   Defined as AD ∩ LRAS.  For a vertical LRAS the engine evaluates
    //   AD at the shifted LRAS x-position: y = AD(520) = 0.7×520 + 39 = 403.
    //   Result: (520, 403) — higher output, lower price level.
    points: {
      E0: { on: ['AD', 'SRAS'], label: 'E₀', tone: 'slate' },
      E1: { on: ['AD', 'LRAS'], label: 'E₁', tone: 'green' }
    }
  });

})();
