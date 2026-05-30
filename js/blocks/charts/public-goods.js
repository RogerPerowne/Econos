/* js/blocks/charts/public-goods.js
   ───────────────────────────────────────────────────────────────────────────
   Public-goods chart family for the declarative econ-diagram engine.

   Demonstrates public-good provision via VERTICAL SUMMATION of individual
   marginal benefit (MB) curves. The key public-good insight: every consumer
   benefits from the SAME unit, so the social marginal benefit is obtained by
   adding individual WTPs at each quantity (vertical sum), NOT by summing
   quantities at each price (horizontal sum used for private-good markets).

   Baseline curves
   ───────────────
   MBA  — Consumer A's individual marginal benefit (downward-sloping demand)
   MBB  — Consumer B's individual marginal benefit (downward-sloping demand)
   ΣMB  — Social (vertical) sum of MBA and MBB: steeper slope, sits ABOVE
           both individual curves at every quantity (higher combined WTP).
   MC   — Marginal cost of the public good (horizontal = constant unit cost)

   Screen-space orientation (y increases DOWN, low y = high price):
   ────────────────────────────────────────────────────────────────
   A downward-sloping demand (high P → low Q, low P → high Q) has a POSITIVE
   screen slope (as x increases, the line moves downward, i.e. y increases).
   The VERTICAL SUM in econ space (adding prices at each Q) translates to:

     ΣMB_screen(Q) = MBA_screen(Q) + MBB_screen(Q) − yMax

   where yMax = 520 is the screen y of the Q-axis (the "zero price" line).
   This ensures ΣMB sits ABOVE both individual curves (smaller y = higher P).

   Geometry derivation
   ───────────────────
   Plot box: xMin=80, xMax=680, yMin=40, yMax=520. yMax=520 is the x-axis.
   yMax used as price-zero reference for the vertical-summation formula.

   MBA: slope=0.35, c_A=240
     y(80)=268, y(400)=380, y(680)=478  — all within [40,520] ✓
   MBB: slope=0.25, c_B=290
     y(80)=310, y(400)=390, y(680)=460  — all within [40,520] ✓

   Note: MBA has a lower y than MBB at most quantities below x≈500,
   meaning consumer A has a HIGHER willingness to pay (lower y = higher P).

   ΣMB: slope = 0.35+0.25 = 0.60, c_Σ = 240+290−520 = 10
     y(80)=58, y(400)=250, y(680)=418   — all within [40,520] ✓
   Verification that ΣMB is above MBA at Q=400:
     ΣMB(400)=250 < MBA(400)=380 ✓  (lower y = higher price = higher combined WTP)
   Verification that ΣMB is above MBB at Q=400:
     ΣMB(400)=250 < MBB(400)=390 ✓

   MC: horizontal at y=250 (constant marginal cost).
   Social optimum: ΣMB ∩ MC → 0.6*Q + 10 = 250 → Q* = 400, y* = 250.

   Price decomposition at Q*=400 (checks out):
     MBA price  = yMax − MBA(400)  = 520−380 = 140
     MBB price  = yMax − MBB(400)  = 520−390 = 130
     MC price   = yMax − MC_y      = 520−250 = 270
     MBA+MBB    = 140+130          = 270 = MC ✓  (Samuelson optimality condition)

   Registers via window.ECONOS_ECON_DIAGRAM.register('publicGoods', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before publicGoods family');
    return;
  }

  // ── Baseline curve parameters ────────────────────────────────────────────
  // Screen space: positive slope = downward-sloping demand (y grows DOWN).
  // Plot box: xMin=80, xMax=680, yMin=40, yMax=520.

  var MBA_SLOPE = 0.35;   // Consumer A individual MB (downward-sloping demand, +ve screen slope)
  var MBA_C     = 240;    // MBA(400) = 0.35·400+240 = 380 (mid-chart, upper region)

  var MBB_SLOPE = 0.25;   // Consumer B individual MB (lower WTP overall, shallower slope)
  var MBB_C     = 290;    // MBB(400) = 0.25·400+290 = 390

  // Vertical sum: slope = MBA_SLOPE + MBB_SLOPE; intercept = MBA_C + MBB_C − yMax.
  // yMax=520 is the x-axis (zero-price line in screen space).
  var YMAX      = 520;
  var SMB_SLOPE = MBA_SLOPE + MBB_SLOPE;             // 0.60
  var SMB_C     = MBA_C + MBB_C - YMAX;              // 10

  // Social optimum: ΣMB ∩ MC. MC is horizontal at y=250.
  // 0.6·Q + 10 = 250 → Q* = 400.
  var MC_Y      = 250;    // Marginal cost of the public good (screen y, constant)
  var OPT_X     = (MC_Y - SMB_C) / SMB_SLOPE;        // 400

  API.register('publicGoods', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },

    axes: {
      xLabel: 'Q', xSub: 'quantity of public good',
      yLabel: 'P', ySub: 'price / marginal benefit'
    },

    // Vertical anchor marks the socially optimal quantity on the Q-axis.
    anchors: [
      { kind: 'vertical', x: OPT_X, label: 'Q*', tone: 'slate' }
    ],

    // ── Baseline curves ────────────────────────────────────────────────────
    // All four curves are always registered; views control which are visible
    // by referencing them in points / areas / analysis. The engine renders
    // every curve in baseline unless the view sets display:false via a shift
    // (not supported — all curves are always drawn; use view analysis text
    // to guide attention, or suppress via a views[] points array).
    baseline: {
      // Individual marginal benefit — Consumer A (higher WTP at most quantities)
      MBA: {
        kind:    'linear',
        slope:   MBA_SLOPE,
        c:       MBA_C,
        tone:    'blue',
        display: 'MB_A'
      },
      // Individual marginal benefit — Consumer B
      MBB: {
        kind:    'linear',
        slope:   MBB_SLOPE,
        c:       MBB_C,
        tone:    'purple',
        display: 'MB_B'
      },
      // Vertical (social) sum of MBA and MBB — steeper slope, sits ABOVE
      // both individual curves because it represents the combined WTP of
      // both consumers for the same unit of the public good.
      SMB: {
        kind:    'linear',
        slope:   SMB_SLOPE,
        c:       SMB_C,
        tone:    'rose',
        display: 'ΣMB'
      },
      // Marginal cost of the public good (horizontal = constant unit cost).
      MC: {
        kind:    'horizontal',
        y:       MC_Y,
        tone:    'green',
        display: 'MC'
      }
    },

    // ── Named points ────────────────────────────────────────────────────────
    // The engine resolves these lazily (per view + any shifts applied).
    points: {
      // Social optimum: ΣMB ∩ MC at (Q*=400, y=250).
      Eopt: {
        on:    ['SMB', 'MC'],
        label: 'E*',
        tone:  'rose'
      },
      // Consumer A's individual contribution at Q* (on MBA at x=OPT_X).
      Pa: {
        onCurve: 'MBA',
        x:       OPT_X,
        label:   'P_A',
        tone:    'blue'
      },
      // Consumer B's individual contribution at Q* (on MBB at x=OPT_X).
      Pb: {
        onCurve: 'MBB',
        x:       OPT_X,
        label:   'P_B',
        tone:    'purple'
      }
    }
  });

})();
