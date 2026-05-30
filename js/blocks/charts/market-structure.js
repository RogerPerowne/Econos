/* js/blocks/charts/market-structure.js
   ───────────────────────────────────────────────────────────────────────────
   Market-structure chart family for the declarative econ-diagram engine.

   Covers imperfect-competition geometry centred on the monopoly model, with a
   perfect-competition baseline added so a single family can illustrate both.

   Curves registered in the baseline
   ──────────────────────────────────
   AR   — Average Revenue = market demand (linear, downward-sloping).
           In screen space y grows DOWN, so a falling demand curve has a
           POSITIVE screen slope (larger x → larger y → lower on chart → lower P).

   MR   — Marginal Revenue (linear, same y-intercept as AR, TWICE the
           screen slope). For a straight-line demand the MR bisects the
           horizontal distance to the y-axis: same c, slope = 2 × slope_AR.
           MR is always BELOW AR in price terms (larger screen y at any given Q).

   MC   — Marginal Cost (kind:'fn', custom downward-opening parabola).
           In screen space a textbook U-shaped MC curve — HIGH cost at low and
           high Q, LOW cost at the minimum — maps to an INVERTED-U in screen y:
             small y (high on chart = high cost) at extremes,
             large y (low on chart = low cost) at the minimum.
           Formula: f(x) = MC_PEAK_Y − MC_A × (x − MC_MIN_X)²
           where MC_PEAK_Y (max screen y) represents the minimum-cost level.

   ATC  — Average Total Cost (kind:'fn', same downward-opening parabola form).
           Lies ABOVE MC everywhere except at ATC's own minimum where MC = ATC.
           Its minimum is to the RIGHT of MC's minimum (standard textbook shape).
           Formula: f(x) = ATC_PEAK_Y − ATC_A × (x − ATC_MIN_X)²
           ATC_PEAK_Y = MC(ATC_MIN_X) so MC crosses ATC at ATC's minimum.

   P_PC — Competitive price (kind:'horizontal'). Set at y = ATC_PEAK_Y so the
           horizontal line is tangent to ATC at its minimum: P = min ATC = MC.
           Labelled 'P=AR=MR' to signal it is both the firm's AR and MR in
           the perfectly competitive case.

   Profit-maximisation geometry
   ────────────────────────────
   Monopoly profit-max: MC = MR. The engine resolves this numerically via the
   intersectCurves sampler. With the chosen parameters the intersection falls at
   Q ≈ 280 (screen x), giving price P ≈ 248 (screen y on AR) and ATC ≈ 391.
   Since AR < ATC in screen y (AR is higher on chart = higher price), the region
   between AR and ATC from x = plot.xMin to x ≈ 280 is supernormal profit.

   Perfect competition: the firm takes P_PC as given (AR = MR = P_PC). The
   profit-maximising Q is where MC = P_PC, found at x ≈ 320 — exactly at
   ATC's minimum, yielding normal profit (zero economic profit).

   Axes: x = Quantity (Q), y = Price / Cost (P,C). Standard micro convention.

   Registers via window.ECONOS_ECON_DIAGRAM.register('marketStructure', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before marketStructure family');
    return;
  }

  // ── Geometry constants ─────────────────────────────────────────────────────
  // Plot box identical to the other families for visual consistency.
  // x in [80, 680] = quantity Q; y in [40, 520] = price/cost (small y = high P).

  // AR / Demand: y = AR_SLOPE × x + AR_C.
  // Positive screen slope → downward-sloping demand curve in econ space.
  // Chosen so the curve spans most of the chart without clipping.
  var AR_SLOPE = 0.6;
  var AR_C     = 80;   // y-intercept (P-intercept in econ terms)

  // MR: same y-intercept as AR, twice the slope.
  // Mathematically: for demand P = a − b·Q → MR = a − 2b·Q.
  // In screen space (slope sign inverted): MR_SLOPE = 2 × AR_SLOPE, same c.
  var MR_SLOPE = 2 * AR_SLOPE; // 1.2
  var MR_C     = AR_C;          // 80 — shares the price-axis intercept

  // MR exits the plot (y > yMax = 520) at x = (520 − 80) / 1.2 ≈ 367.
  // Declare a domain so the engine labels MR at its visible endpoint.
  var MR_DOMAIN_LO = 80;
  var MR_DOMAIN_HI = 366;  // ⌊(520 − MR_C) / MR_SLOPE⌋

  // MC (Marginal Cost) — downward-opening parabola.
  // MC_PEAK_Y: max screen y at the cost minimum (low on chart = low cost).
  // MC_MIN_X:  screen x where MC is at its minimum.
  // MC_A:      curvature; chosen so MC = MR at x ≈ 280 (profit-max Q).
  //   Derivation: MC(280) = MR(280)
  //   440 − MC_A·(280 − 180)² = 1.2·280 + 80 = 416
  //   MC_A = (440 − 416) / 10000 = 0.0024
  var MC_PEAK_Y = 440;   // minimum cost in screen y (low on chart)
  var MC_MIN_X  = 180;   // Q at MC minimum
  var MC_A      = 0.0024;
  var MC_DOMAIN_LO = 80;
  var MC_DOMAIN_HI = 560; // curve stays within plot bounds across this range

  // ATC (Average Total Cost) — downward-opening parabola.
  // ATC_MIN_X must be to the RIGHT of MC_MIN_X (textbook property: ATC min
  // is at a higher Q than MC min, and MC crosses ATC from below at ATC's min).
  // ATC_PEAK_Y = MC(ATC_MIN_X) ensures MC = ATC exactly at ATC's minimum.
  //   MC(320) = 440 − 0.0024·(320 − 180)² = 440 − 47.04 ≈ 392.96
  var ATC_MIN_X  = 320;
  var ATC_PEAK_Y = MC_PEAK_Y - MC_A * (ATC_MIN_X - MC_MIN_X) * (ATC_MIN_X - MC_MIN_X);
  // ATC_PEAK_Y ≈ 392.96 — set curvature gently so ATC is visible above MC.
  var ATC_A      = 0.001;
  var ATC_DOMAIN_LO = 80;
  var ATC_DOMAIN_HI = 620; // clipped to plot bounds by the engine

  // Competitive price: horizontal at y = ATC_PEAK_Y (= min ATC = MC at that Q).
  // A competitive firm takes this as given → P = AR = MR = P_PC.
  var P_PC_Y = ATC_PEAK_Y; // ≈ 393

  // Profit-max Q for the monopoly case: MC ∩ MR ≈ x = 280.
  // Used for the priceOnAR point (read price up the AR curve).
  var PROFIT_MAX_Q = 280;

  // ── Register the family ────────────────────────────────────────────────────
  API.register('marketStructure', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },
    axes: {
      xLabel: 'Q', xSub: 'quantity',
      yLabel: 'P', ySub: 'price / cost'
    },

    // ── Baseline curves ──────────────────────────────────────────────────────
    baseline: {
      // Average Revenue = Demand: downward-sloping in econ space.
      // Positive screen slope: AR_SLOPE > 0, so y rises as x rises (lower P).
      AR: {
        kind: 'linear',
        slope: AR_SLOPE,
        c:     AR_C,
        tone:  'blue',
        display: 'AR=D'
      },

      // Marginal Revenue: same price-intercept as AR, twice the screen slope.
      // MR lies below AR (larger screen y = lower P at any given Q).
      // kind:'fn' lets us cap the domain so the label appears at the visible end.
      MR: {
        kind: 'fn',
        f: function (x) { return MR_SLOPE * x + MR_C; },
        domain: [MR_DOMAIN_LO, MR_DOMAIN_HI],
        tone:  'purple',
        display: 'MR'
      },

      // Marginal Cost: U-shaped in econ space → inverted-U in screen y.
      // f(x) = MC_PEAK_Y − MC_A·(x − MC_MIN_X)²
      // Maximum screen y (lowest on chart = lowest cost) at x = MC_MIN_X.
      // Rising on both sides of MC_MIN_X in screen y terms → falling cost
      // to the left, rising cost to the right.
      MC: {
        kind: 'fn',
        f: function (x) {
          return MC_PEAK_Y - MC_A * (x - MC_MIN_X) * (x - MC_MIN_X);
        },
        domain: [MC_DOMAIN_LO, MC_DOMAIN_HI],
        tone:  'amber',
        display: 'MC'
      },

      // Average Total Cost: same parabola form, wider and flatter than MC.
      // ATC_PEAK_Y is set exactly to MC(ATC_MIN_X) so the curves touch at
      // ATC's minimum — the textbook MC-crosses-ATC-from-below condition.
      ATC: {
        kind: 'fn',
        f: function (x) {
          return ATC_PEAK_Y - ATC_A * (x - ATC_MIN_X) * (x - ATC_MIN_X);
        },
        domain: [ATC_DOMAIN_LO, ATC_DOMAIN_HI],
        tone:  'green',
        display: 'ATC'
      },

      // Competitive price: horizontal at min ATC. Represents the long-run
      // competitive equilibrium price where P = min ATC = MC (normal profit).
      // Also serves as the firm's AR = MR = P in the perfect-competition view.
      P_PC: {
        kind: 'horizontal',
        y:    P_PC_Y,   // ≈ 393 — same level as ATC minimum
        tone: 'slate',
        display: 'P=AR=MR'
      }
    },

    // ── Named points ──────────────────────────────────────────────────────────
    // These are resolved by the engine at render time from the baseline curves.
    // Views declare which points to render; the engine recomputes coordinates
    // from the current curve shifts.
    points: {
      // Monopoly profit-maximising quantity: intersection of MC and MR.
      // The engine's numerical sampler (intersectCurves) finds this at x ≈ 280.
      profitMaxQ: {
        on:    ['MC', 'MR'],
        label: 'Qm',
        tone:  'amber'
      },

      // Monopoly price: read up from profit-max Q to the AR curve.
      // The x coordinate matches the MC ∩ MR intersection; declared as a fixed
      // x = PROFIT_MAX_Q because onCurve requires an explicit x value.
      priceOnAR: {
        onCurve: 'AR',
        x:       PROFIT_MAX_Q,  // ≈ 280; engine evaluates AR(280) = 248
        label:   'Pm',
        tone:    'amber'
      },

      // Competitive equilibrium: MC ∩ P_PC. Falls at x ≈ 320 = ATC minimum
      // where P = min ATC = MC → normal profit (zero economic profit).
      compEquil: {
        on:    ['MC', 'P_PC'],
        label: 'Qc',
        tone:  'slate'
      }
    }
  });

})();
