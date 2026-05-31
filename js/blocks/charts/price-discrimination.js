/* js/blocks/charts/price-discrimination.js
   ───────────────────────────────────────────────────────────────────────────
   Price-discrimination chart family for the declarative econ-diagram engine.

   Registers via window.ECONOS_ECON_DIAGRAM.register('priceDiscrimination', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.

   ── WHAT THIS FAMILY DRAWS ─────────────────────────────────────────────────
   A SINGLE price-setting sub-market: Average Revenue (= demand), Marginal
   Revenue (same price-axis intercept, twice the slope), and a constant
   Marginal Cost (= AC) line. It supports the two examinable PD diagrams on
   the Edexcel price-discrimination Learn-It card:

     firstDegreePd  — one market. Single-price monopoly profit-max (MR=MC → Qm,
                      price read up to AR → Pm) PLUS the whole area under AR
                      down to MC over [0, Qc] shaded as the surplus the firm
                      captures under perfect (first-degree) discrimination.

     thirdDegreePd  — two sub-markets side by side (the migrated card lays two
                      of these out in a grid). An INELASTIC market (steep AR)
                      gets a higher price; an ELASTIC market (flat AR) gets a
                      lower price; MC is the same level in both and each market
                      maximises profit at its own MR = MC. To make the two
                      panels easy to place, this family carries BOTH variants in
                      one baseline:
                        AR_inelastic / MR_inelastic   (steep → high price)
                        AR_elastic   / MR_elastic     (flat  → low price)
                      A view shows ONE variant set with show:[…] (plus MC).
                      The default FD curves (AR/MR) are a third, mid-slope set.

   ── SCREEN-SPACE CONVENTION (same as marketStructure / supply-demand) ───────
   Axes: x = Quantity (Q), y = Price / Cost.  y grows DOWN, so a SMALLER screen
   y is a HIGHER price. A demand/AR curve that falls in econ space therefore has
   a POSITIVE screen slope. MR shares AR's price-axis intercept c and has TWICE
   the screen slope (for linear demand P = a − bQ → MR = a − 2bQ).

   ── PLOT BOX ────────────────────────────────────────────────────────────────
   x ∈ [80, 680], y ∈ [40, 520]. MC is horizontal at screen y = 380 (low on the
   chart = a low price/cost level), shared by every variant so the side-by-side
   third-degree panels read off a common marginal cost.

   ── ALGEBRA (curve form y = slope·x + c; profit-max where MR = MC) ───────────
   MC level: MC_Y = 380.

   FIRST-DEGREE / single-market default set  (AR, MR):
     AR: slope = 0.55, c = 50.   MR: slope = 1.10 (= 2×0.55), c = 50.
       AR@80  = 0.55·80 + 50  =  94   (top price, screen y small = high P)
       Profit-max Qm (MR = MC): 1.10·x + 50 = 380 → x = 300
         Pm = AR(300) = 0.55·300 + 50 = 215  (screen y; read up to AR)        ✓
       Competitive Qc (AR = MC): 0.55·x + 50 = 380 → x = 600
         At Qc the last unit's price just equals MC — perfect-PD output.       ✓
     First-degree surplus capture = area under AR down to MC over [0, Qc]
       → areas:[{ between:['AR','MC'], x:[80, 600] }] (whole AR-above-MC wedge).
     Single-price CS triangle (for contrast) = area between AR and the Pm price
       line over [0, Qm] → bound by AR and PmLine over [80, 300].

   THIRD-DEGREE — INELASTIC market (steep AR → high price, low Q):
     AR_inelastic: slope = 0.85, c = 40.  MR_inelastic: slope = 1.70, c = 40.
       Profit-max Qi (MR = MC): 1.70·x + 40 = 380 → x = 200
         Pi = AR_inelastic(200) = 0.85·200 + 40 = 210  (screen y → HIGH price)  ✓
       Revenue rectangle = [0, Qi] × Pi (bound by PiLine and MC, [80, 200]).

   THIRD-DEGREE — ELASTIC market (flat AR → low price, high Q):
     AR_elastic: slope = 0.40, c = 120.  MR_elastic: slope = 0.80, c = 120.
       Profit-max Qe (MR = MC): 0.80·x + 120 = 380 → x = 325
         Pe = AR_elastic(325) = 0.40·325 + 120 = 250  (screen y → LOW price)    ✓
       Revenue rectangle = [0, Qe] × Pe (bound by PeLine and MC, [80, 325]).

   Teaching check: Pi (screen y 210) < Pe (screen y 250) → in econ the INELASTIC
   market's price is HIGHER, and Qi (200) < Qe (325) → its quantity is LOWER.
   This is the third-degree rule: higher price to the less elastic group, lower
   price to the more elastic group, with MR equalised to a common MC.           ✓

   ── DOMAINS ──────────────────────────────────────────────────────────────────
   Each MR is capped so its label lands at the visible end (MR drops below the
   plot's lower edge well before xMax). The cap x is ⌊(yMax − c)/slope⌋:
     MR:           (520 − 50)/1.10 ≈ 427
     MR_inelastic: (520 − 40)/1.70 ≈ 282
     MR_elastic:   (520 − 120)/0.80 = 500
   AR variants are capped likewise so a steep AR doesn't run off-box.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before priceDiscrimination family');
    return;
  }

  // ── Shared geometry ────────────────────────────────────────────────────────
  var PLOT = { xMin: 80, xMax: 680, yMin: 40, yMax: 520 };
  var VB   = { w: 780, h: 580 };

  var MC_Y = 380;          // constant marginal cost (= AC) in screen y

  // First-degree / single-market default demand set.
  var AR_SLOPE = 0.55, AR_C = 50;
  var FD_QM = 300;         // MR = MC : (380 − 50)/1.10
  var FD_PM = 215;         // AR(300) — single-price monopoly price (screen y)

  // Third-degree — inelastic (steep) market.
  var ARI_SLOPE = 0.85, ARI_C = 40;
  var INEL_Q = 200;        // MR_inelastic = MC : (380 − 40)/1.70
  var INEL_P = 210;        // AR_inelastic(200) — HIGH price (screen y)

  // Third-degree — elastic (flat) market.
  var ARE_SLOPE = 0.40, ARE_C = 120;
  var ELAS_Q = 325;        // MR_elastic = MC : (380 − 120)/0.80
  var ELAS_P = 250;        // AR_elastic(325) — LOW price (screen y)

  // MR domain caps so each MR labels at its visible lower endpoint.
  var MR_HI   = 427;       // ⌊(520 − 50)/1.10⌋
  var MRI_HI  = 282;       // ⌊(520 − 40)/1.70⌋
  var MRE_HI  = 500;       //  (520 − 120)/0.80
  // AR caps (keep steep variants inside the box; flat AR_elastic never clips).
  var AR_HI   = 680;
  var ARI_HI  = 560;       // ⌊(520 − 40)/0.85⌋ ≈ 564
  var ARE_HI  = 680;

  API.register('priceDiscrimination', {
    viewBox: VB,
    plot:    PLOT,
    axes: {
      xLabel: 'Q', xSub: 'quantity',
      yLabel: 'P', ySub: 'price / cost'
    },

    // No exogenous vertical anchors — a price-setting market has none.
    anchors: [],

    baseline: {
      // ── Constant marginal cost (= average cost) ────────────────────────────
      // Horizontal at MC_Y. Shared by every variant so the third-degree panels
      // read off a common MC. Labelled 'MC=AC' (constant MC ⇒ MC = AC).
      MC: {
        kind: 'horizontal', y: MC_Y,
        tone: 'rose', display: 'MC=AC'
      },

      // ── First-degree / single-market default demand set ────────────────────
      // AR = demand (downward in econ → positive screen slope).
      AR: {
        kind: 'fn',
        f: function (x) { return AR_SLOPE * x + AR_C; },
        domain: [PLOT.xMin, AR_HI],
        tone: 'blue', display: 'AR=D'
      },
      // MR: same price-axis intercept as AR, twice the screen slope.
      MR: {
        kind: 'fn',
        f: function (x) { return 2 * AR_SLOPE * x + AR_C; },
        domain: [PLOT.xMin, MR_HI],
        tone: 'purple', display: 'MR'
      },
      // Single-price monopoly price level — the CS/PS boundary for the
      // contrast area in the first-degree story. Quiet line (labelled by Pm).
      PmLine: {
        kind: 'horizontal', y: FD_PM,
        optional: true, tone: 'slate', display: ''
      },

      // ── Third-degree: INELASTIC (steep AR → high price) ─────────────────────
      AR_inelastic: {
        kind: 'fn',
        f: function (x) { return ARI_SLOPE * x + ARI_C; },
        domain: [PLOT.xMin, ARI_HI],
        optional: true, tone: 'blue', display: 'AR (inelastic)'
      },
      MR_inelastic: {
        kind: 'fn',
        f: function (x) { return 2 * ARI_SLOPE * x + ARI_C; },
        domain: [PLOT.xMin, MRI_HI],
        optional: true, tone: 'purple', display: 'MR'
      },
      // Price level in the inelastic market — bounds its revenue rectangle.
      PiLine: {
        kind: 'horizontal', y: INEL_P,
        optional: true, tone: 'slate', display: ''
      },

      // ── Third-degree: ELASTIC (flat AR → low price) ─────────────────────────
      AR_elastic: {
        kind: 'fn',
        f: function (x) { return ARE_SLOPE * x + ARE_C; },
        domain: [PLOT.xMin, ARE_HI],
        optional: true, tone: 'blue', display: 'AR (elastic)'
      },
      MR_elastic: {
        kind: 'fn',
        f: function (x) { return 2 * ARE_SLOPE * x + ARE_C; },
        domain: [PLOT.xMin, MRE_HI],
        optional: true, tone: 'purple', display: 'MR'
      },
      // Price level in the elastic market — bounds its revenue rectangle.
      PeLine: {
        kind: 'horizontal', y: ELAS_P,
        optional: true, tone: 'slate', display: ''
      }
    },

    // ── Named points (recomputed per view's shifts) ────────────────────────────
    points: {
      // ── First-degree / single-market ──────────────────────────────────────
      // Profit-max quantity where MR = MC (numerical intersection).
      profitMaxQ: { on: ['MR', 'MC'], label: 'Qm', tone: 'purple' },
      // Price read up to AR at the profit-max quantity (single-price monopoly).
      priceOnAR:  { onCurve: 'AR', x: FD_QM, label: 'Pm', tone: 'slate' },
      // Competitive / perfect-PD output where AR = MC (last unit priced at MC).
      compQ:      { on: ['AR', 'MC'], label: 'Qc', tone: 'green' },

      // ── Third-degree: inelastic market ─────────────────────────────────────
      inelQ:      { on: ['MR_inelastic', 'MC'], label: 'Qᵢ', tone: 'purple' },
      inelP:      { onCurve: 'AR_inelastic', x: INEL_Q, label: 'Pᵢ', tone: 'slate' },

      // ── Third-degree: elastic market ───────────────────────────────────────
      elasQ:      { on: ['MR_elastic', 'MC'], label: 'Qₑ', tone: 'purple' },
      elasP:      { onCurve: 'AR_elastic', x: ELAS_Q, label: 'Pₑ', tone: 'slate' }
    }
  });

})();
