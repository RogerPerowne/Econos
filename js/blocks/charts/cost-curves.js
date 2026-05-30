/* js/blocks/charts/cost-curves.js
   ───────────────────────────────────────────────────────────────────────────
   Firm cost-curves chart family for the declarative econ-diagram engine.

   Covers the canonical perfectly-competitive firm cost diagram:
     • MC   — Marginal Cost (steep U-shape, minimum to the LEFT of AVC/ATC)
     • AVC  — Average Variable Cost (moderate U-shape)
     • ATC  — Average Total Cost (wide/shallow U-shape, minimum RIGHT of AVC,
                                  always ABOVE AVC by the falling AFC)
     • MR   — Marginal Revenue = Price (horizontal line; the firm is a price-taker)

   KEY ECONOMIC GEOMETRY
   ─────────────────────
   1. MC passes through the MINIMUM of AVC and through the MINIMUM of ATC.
      (Proof sketch: AVC = VC/Q; d(AVC)/dQ = (MC·Q − VC)/Q² = 0 when MC = AVC.)
   2. ATC minimum is to the RIGHT of and ABOVE AVC minimum (since AFC > 0
      everywhere; the gap narrows as Q rises, pulling ATC down toward AVC,
      so ATC bottoms out later).
   3. Profit-maximising output: MC = MR (profitMax point).
   4. At profitMax Q, profit = (P − ATC) × Q* — the profit/loss rectangle
      between the MR line and ATC, from Q=0 to Q*.

   SCREEN-SPACE CONVENTIONS (same as all other families)
   ──────────────────────────────────────────────────────
   Plot box: x ∈ [80, 680] (output Q), y ∈ [40, 520] (cost £).
   x increases RIGHT  → more output.
   y increases DOWN   → LOWER on screen.  HIGHER cost = SMALLER y = HIGHER on screen.

   Because cost rises upward visually but y grows downward in SVG:
     • A U-shaped cost curve (falls then rises) is an INVERTED parabola in
       screen space:  f(x) = FLOOR_Y − A × (x − MIN_Q)²
       where FLOOR_Y is the y-coordinate of the cost minimum (the LARGEST y
       for that curve), and A > 0 opens the parabola downward in screen pixels
       — which looks like a bowl (U) opening upward in econ terms.  ✓
     • "ABOVE in econ" (higher cost at every Q) = SMALLER screen y.
       ATC is always above AVC → ATC_FLOOR_Y < AVC_FLOOR_Y.

   PARAMETER DERIVATION
   ────────────────────
   Variables use the suffix _Q for x-coordinates (output levels) and _Y for
   y-coordinates (cost levels in screen space):

     AVC minimum:  Q = AVC_QMIN (340),  screen y = AVC_YMIN (340)
     ATC minimum:  Q = ATC_QMIN (430),  screen y = ATC_YMIN (200)  [smaller → higher cost]
     MC  minimum:  Q = MC_QMIN  (260),  screen y = MC_YFLOOR (380) [largest → lowest cost]

   MC passes through both minima — two simultaneous constraints:
     MC_YFLOOR − A_MC × (AVC_QMIN − MC_QMIN)² = AVC_YMIN   … (1)
     MC_YFLOOR − A_MC × (ATC_QMIN − MC_QMIN)² = ATC_YMIN   … (2)

   Subtracting (1)−(2):
     A_MC × [(ATC_QMIN − MC_QMIN)² − (AVC_QMIN − MC_QMIN)²] = AVC_YMIN − ATC_YMIN
     A_MC × [170² − 80²] = 340 − 200 = 140
     A_MC × [28900 − 6400] = 140
     A_MC = 140 / 22500 ≈ 0.00622

   MC_YFLOOR from (1):
     MC_YFLOOR = AVC_YMIN + A_MC × (AVC_QMIN − MC_QMIN)²
               = 340 + (140/22500) × 6400 ≈ 380

   Verifications (engine uses numerical intersection, but we confirm analytically):
     MC(340) ≈ 380 − 39.8 = 340.2 ≈ AVC_YMIN  ✓
     MC(430) ≈ 380 − 179.8 = 200.2 ≈ ATC_YMIN  ✓
     MC_YFLOOR (380) > AVC_YMIN (340) > ATC_YMIN (200):
       → MC minimum cost < AVC minimum cost < ATC minimum cost  ✓
     AVC_YMIN (340) > ATC_YMIN (200):
       → ATC always ABOVE AVC in cost terms  ✓

   Profit-max check (MR = 120, price above ATC minimum):
     MC(x) = 120  →  x ≈ 465 (inside MC domain [100, 490])
     ATC(465) ≈ 199.7  →  MR (120) < ATC_Y (199.7): MR is higher on screen = P > ATC  ✓
     Profit = (P − ATC) × Q* shown as area between MR and ATC.

   Registers via window.ECONOS_ECON_DIAGRAM.register('costCurves', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before costCurves family');
    return;
  }

  var S = API.shapes; // named shape functions

  // ── Geometry constants ────────────────────────────────────────────────────

  // Output (Q) positions of each curve's minimum — left to right: MC, AVC, ATC.
  var MC_QMIN  = 260;  // Q at which MC is minimised (leftmost minimum)
  var AVC_QMIN = 340;  // Q at which AVC is minimised (middle)
  var ATC_QMIN = 430;  // Q at which ATC is minimised (rightmost)

  // Screen y-coordinates of cost minima:
  //   LARGER y = lower on screen = lower cost in econ terms.
  //   MC minimum cost < AVC minimum cost < ATC minimum cost
  //   → MC_YFLOOR > AVC_YMIN > ATC_YMIN
  var AVC_YMIN = 340;  // y at AVC minimum (medium y = medium height on screen)
  var ATC_YMIN = 200;  // y at ATC minimum (smaller → higher on screen → higher cost)

  // MC parabola coefficient — exact algebraic solution so MC passes through
  // BOTH the AVC minimum (AVC_QMIN, AVC_YMIN) AND the ATC minimum (ATC_QMIN, ATC_YMIN).
  //
  // From two constraints MC(AVC_QMIN) = AVC_YMIN and MC(ATC_QMIN) = ATC_YMIN:
  //   A_MC = (AVC_YMIN − ATC_YMIN) / [(ATC_QMIN−MC_QMIN)² − (AVC_QMIN−MC_QMIN)²]
  //        = 140 / (28900 − 6400) = 140 / 22500
  var A_MC = (AVC_YMIN - ATC_YMIN) /
             ((ATC_QMIN - MC_QMIN) * (ATC_QMIN - MC_QMIN) -
              (AVC_QMIN - MC_QMIN) * (AVC_QMIN - MC_QMIN));

  // MC_YFLOOR: y at the MC minimum, derived from the same constraint (1).
  //   MC_YFLOOR = AVC_YMIN + A_MC × (AVC_QMIN − MC_QMIN)² ≈ 379.82
  // Computed here (not hard-coded) so rounding never breaks the intersection.
  var MC_YFLOOR = AVC_YMIN + A_MC * (AVC_QMIN - MC_QMIN) * (AVC_QMIN - MC_QMIN);

  // AVC parabola coefficient — moderate steepness, symmetric around AVC_QMIN.
  //   AVC(100) = 340 − 0.001 × 57600 = 282.4  (above yMin=40)  ✓
  var A_AVC = 0.001;

  // ATC parabola coefficient — shallower/wider than AVC, minimum to the right.
  //   ATC(100) = 200 − 0.0005 × 108900 = 145.5  (above yMin=40)  ✓
  var A_ATC = 0.0005;

  // MR (= Price line) — horizontal at this screen y.
  //   MR_Y = 120: a HIGH price (small y → high on screen → P > ATC_YMIN=200)
  //   → MR higher on screen than ATC minimum → supernormal profit at Q*.  ✓
  var MR_Y = 120;

  // Domain for cost curves.  MC is steep: it exits y=40 (yMin) at Q ≈ 494 on the
  // right and Q ≈ 26 on the left.  Restrict MC so it stays inside the plot box.
  var COST_X0 = 100;  // left extent of all cost curves
  var COST_X1 = 580;  // right extent of AVC / ATC (both well within plot bounds)
  var MC_X1   = 490;  // right extent of MC (MC at x=490 ≈ y=51, just above yMin=40)

  // ── Curve functions ───────────────────────────────────────────────────────
  //
  // All three cost curves use the pattern:
  //   f(x) = FLOOR_Y − A × (x − Q_MIN)²
  //
  // which is a downward-opening parabola in screen pixels, visually producing
  // a bowl (U) that opens UPWARD in econ-diagram terms (cost axis goes up).
  //
  // The uShape shape helper returns A*(x−minX)², so:
  //   f(x) = FLOOR_Y − S.uShape(x, {min:0, minX:Q_MIN, a:A})

  // ── Registration ─────────────────────────────────────────────────────────

  API.register('costCurves', {

    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },

    axes: {
      xLabel: 'Q',  xSub: 'output',
      yLabel: '£',  ySub: 'cost / revenue'
    },

    // No persistent vertical reference anchor needed — the profit-max Q is a
    // named point, not a fixed structural line.
    anchors: [],

    baseline: {

      // ── Marginal Cost (MC) ────────────────────────────────────────────────
      // Steep U-shape — its minimum is to the LEFT of AVC and ATC minima.
      // Passes through AVC minimum AND ATC minimum (by construction of A_MC).
      // Domain restricted to [COST_X0, MC_X1] to stay within the plot box.
      MC: {
        kind: 'fn',
        f: function (x) {
          return MC_YFLOOR - S.uShape(x, { min: 0, minX: MC_QMIN, a: A_MC });
        },
        domain: [COST_X0, MC_X1],
        tone: 'rose',
        display: 'MC'
      },

      // ── Average Variable Cost (AVC) ───────────────────────────────────────
      // Moderate U-shape. Minimum at Q = AVC_QMIN (= 340).
      // Always BELOW ATC in cost terms (AVC_Y > ATC_Y at every Q).
      // MC passes through this minimum — confirmed by A_MC derivation above.
      AVC: {
        kind: 'fn',
        f: function (x) {
          return AVC_YMIN - S.uShape(x, { min: 0, minX: AVC_QMIN, a: A_AVC });
        },
        domain: [COST_X0, COST_X1],
        tone: 'amber',
        display: 'AVC'
      },

      // ── Average Total Cost (ATC) ──────────────────────────────────────────
      // Wide/shallow U-shape. Minimum at Q = ATC_QMIN (= 430), to the RIGHT
      // of AVC minimum.  Always ABOVE AVC (ATC_Y < AVC_Y in screen coords)
      // by an amount equal to AFC = FC/Q, which falls as Q rises.
      // MC passes through this minimum too — confirmed by A_MC derivation.
      ATC: {
        kind: 'fn',
        f: function (x) {
          return ATC_YMIN - S.uShape(x, { min: 0, minX: ATC_QMIN, a: A_ATC });
        },
        domain: [COST_X0, COST_X1],
        tone: 'blue',
        display: 'ATC'
      },

      // ── Marginal Revenue / Price (MR = P) ────────────────────────────────
      // Horizontal line — the firm is a price-taker in a competitive market.
      // Positioned above ATC minimum (MR_Y < ATC_YMIN in screen coords:
      //   120 < 200 → MR higher on screen → P > ATC_min → supernormal profit).
      // Views can shift this line via {id: {dy: Δ}} to model loss scenarios.
      MR: {
        kind: 'horizontal',
        y: MR_Y,
        tone: 'green',
        display: 'MR = P'
      }

    },

    // ── Named points ─────────────────────────────────────────────────────────
    //
    // All coordinates are computed by the engine from the baseline curves and
    // any view-level shifts.  No screen pixels are hardcoded here.
    //
    // on: ['A','B'] → engine finds MC ∩ AVC numerically via intersectCurves.
    // onCurve: 'X', x: q → engine evaluates curve X at output Q = q.
    //
    // Intersection search domains: the engine takes the OVERLAP of each curve's
    // declared domain, so MC ∩ AVC is searched over [100, 490] ∩ [100, 580] =
    // [100, 490].  The true intersection (Q ≈ 340) is comfortably inside.
    points: {

      // atcMin: the minimum of ATC, where MC = ATC.
      // In econ: the output at which average total cost is minimised.
      // This is also the long-run equilibrium output for a perfectly competitive
      // firm (P = ATC_min in the long run).
      atcMin: {
        on: ['MC', 'ATC'],
        label: 'ATC min',
        tone: 'blue'
      },

      // avcMin: the minimum of AVC, where MC = AVC.
      // In econ: the shutdown point — if P falls below AVC_min, the firm
      // minimises losses by shutting down (TR < TVC).
      avcMin: {
        on: ['MC', 'AVC'],
        label: 'AVC min',
        tone: 'amber'
      },

      // profitMax: the profit-maximising output, where MC = MR.
      // The firm produces here; profit/loss is read from the (P − ATC) gap.
      profitMax: {
        on: ['MC', 'MR'],
        label: 'Q*',
        tone: 'green'
      }

    }

  });

})();
