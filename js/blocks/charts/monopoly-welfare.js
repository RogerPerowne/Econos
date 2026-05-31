/* js/blocks/charts/monopoly-welfare.js
   ───────────────────────────────────────────────────────────────────────────
   Market-level MONOPOLY WELFARE chart family for the declarative econ-diagram
   engine. Registers the 'monopolyWelfare' family via:

     window.ECONOS_ECON_DIAGRAM.register('monopolyWelfare', { … })

   ── What this family teaches ────────────────────────────────────────────────
   The static welfare cost of unchecked market power, drawn at the INDUSTRY
   (market) level — the corrected welfare diagram from the "Market Power and
   Contestability" topic (learn-it card 4, "The Welfare Cost of Unchecked
   Market Power").

   The same cost structure is shared between two regimes:

     • Perfect competition — industry supply S = ΣMC of price-taking firms meets
       market demand D at the competitive equilibrium Ec = (Qc, Pc). Here
       P = MC at the margin, so there is NO deadweight loss; consumer surplus is
       maximised.

     • Monopoly takeover — one firm inherits the SAME cost stack (so its MC = the
       old industry S curve) and now faces market D as its own AR, with marginal
       revenue MR below AR. Profit-max at MR = MC gives Qm < Qc; the price Pm is
       read UP to AR at Qm, giving Pm > Pc. Output is restricted, price raised.

   Welfare decomposition versus the competitive baseline:
       – remaining consumer surplus (smaller, blue),
       – a transfer from consumers to the monopolist (former CS now PS, amber),
       – the DEADWEIGHT-LOSS triangle (rose + hatch) between D and MC over
         [Qm, Qc] — value destroyed because units consumers value above MC go
         unproduced.

   ── Screen-space convention (shared with supply-demand / market-structure) ──
   Axes: x = Quantity (Q), y = Price / Cost (P,C). Screen y grows DOWN, so a
   higher price has a SMALLER y-coordinate.

     D = AR  : downward-sloping demand in econ → POSITIVE screen slope.
     MR      : same price-axis intercept as AR, TWICE the (screen) slope, so it
               bisects the horizontal distance to the y-axis. MR lies BELOW AR
               in price terms (larger screen y at any given Q).
     MC = S  : upward-sloping supply in econ → NEGATIVE screen slope.

   ── Curve algebra (s = x − xMin = quantity in px from the origin at x=80) ────
   The y-axis sits at xMin = 80. Writing every curve in terms of s lets the
   "MR hits the Q-axis at half AR's intercept" property fall out exactly.

     AR : y = 80 + 0.85·s          (price-axis intercept 80 at Q=0)
            AR reaches the Q-axis (y = 520, i.e. P = 0) at
              s = (520 − 80)/0.85 = 517.6  →  x ≈ 597.6

     MR : y = 80 + 1.70·s          (same intercept 80, twice the slope)
            MR reaches the Q-axis (y = 520) at
              s = (520 − 80)/1.70 = 258.8  →  x ≈ 338.8
            258.8 = 517.6 / 2  →  MR's Q-axis intercept is HALF AR's ✓
            (For a linear AR, MR = a − 2b·Q — the standard bisection result.)

     MC : y = 464 − 0.35·s         (upward supply in econ; negative screen slope)
            S = ΣMC, the industry supply curve under perfect competition.

   ── Equilibria (the engine recomputes these numerically per view) ───────────
   Competitive  Ec = D ∩ MC :
       80 + 0.85·s = 464 − 0.35·s  →  1.20·s = 384  →  s = 320  →  x = 400 (Qc)
       Pc = 80 + 0.85·320 = 352   (screen y; the competitive price)

   Monopoly output Qm = MR ∩ MC :
       80 + 1.70·s = 464 − 0.35·s  →  2.05·s = 384  →  s = 187.32 → x ≈ 267.3 (Qm)
       MR=MC level  = 464 − 0.35·187.32 ≈ 398.4 (screen y, where profit-max binds)
       Pm read UP to AR at Qm = 80 + 0.85·187.32 ≈ 239.2 (screen y)

   Economics check:
       Qm (267) < Qc (400)             → monopoly RESTRICTS output            ✓
       Pm (239 screen) < Pc (352 screen) on screen → smaller y = HIGHER price,
                                          so Pm > Pc in econ                    ✓
       DWL triangle between D (top, smaller y) and MC (bottom-right) over
       [Qm, Qc] = [267.3, 400]: vertices Em (apex on D at Qm), Ec (on D∩MC),
       and MC@Qm (the MR=MC point directly below Em on MC).                    ✓

   ── Transfer rectangle (optional CS→PS transfer) ────────────────────────────
   The amber transfer is the area gained by the monopolist from consumers:
   the rectangle bounded ABOVE by the monopoly price line Pm (y = 239.2) and
   BELOW by the competitive price line Pc (y = 352) over [0, Qm] = [80, 267.3].
   Two horizontal reference lines (PmLine, PcLine) carry no display label so
   they render as quiet boundaries when an area references them; the named
   points Pm / Pc / Ec label the levels instead.

   ── Per-view visibility ─────────────────────────────────────────────────────
   MR, PmLine and PcLine are flagged `optional:true`, so the competitive view
   (show:['D','MC']) shows only D + MC + Ec, while the monopoly / welfare views
   opt MR (and the price lines) in via `show`. This keeps the PC baseline free
   of stray monopoly apparatus.

   Loads via <script defer> AFTER econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before monopolyWelfare family');
    return;
  }

  // ── Plot geometry (shared with the other micro families) ───────────────────
  var PLOT = { xMin: 80, xMax: 680, yMin: 40, yMax: 520 };
  var VB   = { w: 780, h: 580 };
  var X0   = PLOT.xMin;   // 80 — the y-axis / Q origin

  // ── Curve parameters, in terms of s = x − X0 ───────────────────────────────
  // y = INTERCEPT + SLOPE·(x − X0) = (INTERCEPT − SLOPE·X0) + SLOPE·x.
  // The engine's linear curves use y = slope·x + c, so c = INTERCEPT − slope·X0.

  var AR_SLOPE = 0.85;            // demand: positive screen slope (downward econ)
  var AR_INT   = 80;             // price-axis intercept at Q=0 (screen y)
  var AR_C     = AR_INT - AR_SLOPE * X0;   // = 80 − 0.85·80 = 12

  var MR_SLOPE = 2 * AR_SLOPE;   // 1.70 — twice AR's slope, same intercept
  var MR_INT   = AR_INT;         // 80 — shares the price-axis intercept
  var MR_C     = MR_INT - MR_SLOPE * X0;   // = 80 − 1.70·80 = −56
  // MR exits the plot (y > yMax = 520) at s = (520 − 80)/1.70 ≈ 258.8 → x ≈ 338.8.
  // Cap the domain there so the engine labels MR at its visible Q-axis endpoint.
  var MR_DOMAIN = [X0, 339];

  var MC_SLOPE = -0.35;          // supply S = ΣMC: negative screen slope
  var MC_INT   = 464;            // screen y at Q=0 (cost intercept)
  var MC_C     = MC_INT - MC_SLOPE * X0;   // = 464 + 0.35·80 = 492

  // ── Derived equilibrium coordinates (for the price reference lines/points) ──
  // Competitive Ec = D ∩ MC: s = 320 → x = 400, Pc (screen y) = 352.
  var PC_Y = AR_INT + AR_SLOPE * 320;      // 80 + 0.85·320 = 352
  // Monopoly Qm = MR ∩ MC: s ≈ 187.32 → x ≈ 267.3, Pm (screen y) ≈ 239.2.
  var SM   = 384 / 2.05;         // ≈ 187.317
  var QM   = X0 + SM;            // ≈ 267.32
  var PM_Y = AR_INT + AR_SLOPE * SM;       // ≈ 239.22

  API.register('monopolyWelfare', {
    viewBox: VB,
    plot:    PLOT,

    axes: {
      xLabel: 'Q', xSub: 'quantity',
      yLabel: 'P', ySub: 'price / cost'
    },

    // No exogenous vertical anchors — a market diagram has no fixed-Q line.
    anchors: [],

    // ── Baseline curves ───────────────────────────────────────────────────────
    baseline: {
      // Demand = Average Revenue: downward-sloping in econ (positive screen
      // slope). Under monopoly this is the firm's AR; under PC it is market D.
      D: {
        kind: 'linear', slope: AR_SLOPE, c: AR_C,
        tone: 'blue', display: 'D=AR'
      },

      // Marginal Revenue: same price-axis intercept as AR, twice the slope, so
      // it bisects the horizontal gap to the y-axis. Lies below AR in price.
      // Opt-in (monopoly / welfare views) so the PC baseline stays uncluttered.
      MR: {
        kind: 'fn',
        f: function (x) { return MR_SLOPE * x + MR_C; },
        domain: MR_DOMAIN,
        optional: true,
        tone: 'purple', display: 'MR'
      },

      // Marginal Cost = industry supply S = ΣMC: upward-sloping in econ
      // (negative screen slope). Shared cost stack across both regimes.
      MC: {
        kind: 'linear', slope: MC_SLOPE, c: MC_C,
        tone: 'rose', display: 'MC=S'
      },

      // Monopoly price level Pm (screen y ≈ 239.2): upper edge of the CS→PS
      // transfer rectangle. Quiet reference line (no display label) — the Pm
      // named point labels the level when a welfare view opts it in.
      PmLine: {
        kind: 'horizontal', y: PM_Y,
        optional: true, tone: 'amber', display: ''
      },

      // Competitive price level Pc (screen y = 352): lower edge of the transfer
      // rectangle. Quiet reference line — the Ec / Pc named points label it.
      PcLine: {
        kind: 'horizontal', y: PC_Y,
        optional: true, tone: 'slate', display: ''
      }
    },

    // ── Named points (recomputed per view with that view's shifts) ─────────────
    points: {
      // Competitive equilibrium Ec — D ∩ MC. P = MC, no deadweight loss.
      //   D(400) = MC(400) ⇒ Pc (screen y) = 352, Qc = 400.
      Ec: { on: ['D', 'MC'], label: 'Ec', tone: 'slate' },

      // Monopoly profit-max quantity Qm — MR ∩ MC (the MR = MC point on MC).
      //   resolves at x ≈ 267.3, screen y ≈ 398.4.
      Qm: { on: ['MR', 'MC'], label: 'MR=MC', tone: 'purple' },

      // Monopoly price Pm — read UP from Qm to the AR (=D) curve.
      //   D(267.3) ≈ 239.2 (screen y) → Pm > Pc. Apex of the DWL triangle.
      Pm: { onCurve: 'D', x: QM, label: 'Pm', tone: 'amber' },

      // MC at the monopoly quantity Qm — the third DWL-triangle vertex, sitting
      // directly below Pm on the MC curve (this is the MR=MC level on MC).
      //   MC(267.3) ≈ 398.4 (screen y).
      McAtQm: { onCurve: 'MC', x: QM, label: 'MC@Qm', tone: 'rose' }
    },

    // Legacy equilibrium fallback — used when a view omits `points`. Shows the
    // competitive crossing (and fades it in later views) for visual continuity.
    equilibrium: { from: ['D', 'MC'], baseLabel: 'Ec' }
  });

})();
