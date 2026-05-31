/* js/blocks/charts/lrac.js
   ───────────────────────────────────────────────────────────────────────────
   Long-Run Average Cost (LRAC) / economies-of-scale chart family for the
   declarative econ-diagram engine.

   Registers via window.ECONOS_ECON_DIAGRAM.register('lrac', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.

   ── WHAT IT TEACHES ─────────────────────────────────────────────────────────
   Targets the LRAC / economies-of-scale / limit-pricing visuals behind:
     • barriers-to-entry (Edexcel A 3.9): "Economies of scale" structural
       barrier — incumbents at large scale enjoy low AC; small entrants face
       high AC. Minimum Efficient Scale (MES) is the lowest output at which
       LRAC is minimised. Strategic "limit pricing": the incumbent sets price
       just below the entrant's minimum viable LRAC, deterring entry while
       still covering its own (lower) LRAC.
     • market-power-and-contestability (Edexcel A 3.10): "Natural monopoly
       cost advantage" — when LRAC is still falling at the scale of market
       demand, one firm serves demand at lower AC than several smaller rivals.

   ── SCREEN-SPACE CONVENTION (same as the other families) ────────────────────
   Axes: x = Output (Q), y = Cost / Price (£). Screen space: y grows DOWN, so a
   LOW cost sits LOW on the chart (LARGE screen y) and a HIGH cost sits HIGH on
   the chart (SMALL screen y).

   The textbook U-shaped LRAC — high AC at low output, falling to a minimum,
   then rising again with diseconomies — therefore maps to an INVERTED-U in
   screen y: small screen y (high on chart = high cost) at the extremes, and a
   MAXIMUM screen y (low on chart = lowest cost) at the minimum-cost output.

     f(x) = LRAC_PEAK_Y − LRAC_A · (x − MES_X)²

   where LRAC_PEAK_Y is the LARGEST screen y (the lowest-cost level) reached at
   x = MES_X. This is the same downward-opening-parabola trick the marketStructure
   family uses for its U-shaped MC/ATC curves. A single smooth kind:'fn' curve —
   no kinks at the turning point.

   ── GEOMETRY (worked here so the economics is verifiable) ───────────────────
   Plot box: x ∈ [80, 680] (output), y ∈ [40, 520] (cost). Constants:

     MES_X       = 300   output at minimum LRAC (the MES) — left-of-centre so
                         the diseconomies arm has room to rise on the right
     LRAC_PEAK_Y = 420   screen y at the cost minimum (low on chart = low cost)
     LRAC_A      = 0.0016 curvature

   Curve samples (f(x) = 420 − 0.0016·(x − 300)²):
       x =  80  → y ≈ 342.6   (small scale → HIGH cost, high on chart)
       x = 150  → y ≈ 384.0   (small entrant scale → still fairly high cost)
       x = 200  → y ≈ 404.0
       x = 300  → y = 420.0    (MES → LOWEST cost, lowest point on chart)
       x = 400  → y ≈ 404.0
       x = 500  → y ≈ 356.0    (diseconomies → cost rising again)
       x = 680  → y ≈ 189.0    (large scale → HIGH cost from diseconomies)

   Economies of scale  = the falling arm, x ∈ [80, 300] (LRAC falls as Q rises:
                         screen y RISES toward the minimum).
   Diseconomies of scale = the rising arm, x ∈ [300, 680] (LRAC rises as Q rises:
                         screen y FALLS away from the minimum).
   The MES vertical anchor at x = 300 splits the two regions.

   ── LIMIT-PRICING VIEW ──────────────────────────────────────────────────────
   An entrant can only reach small scale (its viable output is capped — it lacks
   the incumbent's accumulated scale). At ENTRANT_Q = 160 the entrant's lowest
   achievable LRAC is f(160) ≈ 388.6 (HIGHER cost than the incumbent's minimum,
   since 388.6 < 420 in screen y → higher on chart → higher cost).

   The incumbent (which produces at/near MES, cost ≈ 420 = lowest) sets a LIMIT
   PRICE at LIMIT_Y = 405. This price is:
     • BELOW the entrant's minimum viable LRAC (405 > 388.6 in screen y → lower
       on chart → lower price than the entrant could ever break even at), so the
       entrant would make a loss at any output it can reach → entry deterred; and
     • ABOVE the incumbent's own LRAC minimum (405 < 420 in screen y → higher on
       chart → higher price than the incumbent's cost), so the incumbent still
       covers its costs and earns some profit.
   The incumbent sacrifices the gap between the textbook profit-max price and the
   limit price to keep the market to itself — the classic strategic barrier.

   ── NATURAL-MONOPOLY REFERENCE ──────────────────────────────────────────────
   MarketDemandScale is an opt-in vertical reference at x = 240, drawn to the
   LEFT of MES (300). It lets a view show "market demand is met while LRAC is
   still falling" → a single firm serving the whole market is cheaper than
   several smaller firms → the natural-monopoly cost advantage. Opt-in only so it
   does not clutter the basic MES view.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before lrac family');
    return;
  }

  // ── Frontier parameters (all in screen space; small y = high cost) ──────────
  var MES_X       = 300;     // output at minimum LRAC = the Minimum Efficient Scale
  var LRAC_PEAK_Y = 420;     // screen y at the cost minimum (low on chart = low cost)
  var LRAC_A      = 0.0016;  // curvature of the U (downward-opening in screen y)
  var DOMAIN      = [80, 680];

  function lrac(x) {
    return LRAC_PEAK_Y - LRAC_A * (x - MES_X) * (x - MES_X);
  }

  // ── Limit-pricing constants ────────────────────────────────────────────────
  var ENTRANT_Q = 160;            // largest scale a small entrant can reach
  var LIMIT_Y   = 405;            // incumbent's limit price: below entrant cost,
                                  // above incumbent's own LRAC minimum (420)

  // ── Natural-monopoly market-demand reference (left of MES) ──────────────────
  var DEMAND_X  = 240;            // market demand scale, still on the falling arm

  API.register('lrac', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },

    axes: {
      xLabel: 'Q', xSub: 'output',
      yLabel: 'C', ySub: 'cost / price (£)'
    },

    // MES vertical reference line (always available; views may rely on it to
    // split economies from diseconomies). Drawn as a faint dashed anchor.
    anchors: [
      { kind: 'vertical', x: MES_X, label: 'MES' }
    ],

    // ── Baseline curves ──────────────────────────────────────────────────────
    baseline: {
      // The long-run average cost curve. A single smooth kind:'fn' U-shape
      // (inverted-U in screen y). Falling arm left of MES = economies of scale;
      // rising arm right of MES = diseconomies of scale.
      LRAC: {
        kind: 'fn',
        f: lrac,
        domain: DOMAIN,
        tone: 'slate',
        display: 'LRAC'
      },

      // Limit-price line — horizontal at LIMIT_Y. Opt-in (only the limit-pricing
      // view shows it) so it does not appear as a stray line in the MES view.
      // Carries no curve label of its own (the Pl point labels the level).
      LimitPrice: {
        kind: 'horizontal',
        y: LIMIT_Y,
        optional: true,
        tone: 'rose',
        display: ''
      },

      // Natural-monopoly market-demand scale — vertical at DEMAND_X, left of MES,
      // so it lands while LRAC is still falling. Opt-in via show in that view.
      MarketDemandScale: {
        kind: 'vertical',
        x: DEMAND_X,
        optional: true,
        tone: 'blue',
        display: 'D'
      }
    },

    // ── Named points ──────────────────────────────────────────────────────────
    // Recomputed per view from the LRAC curve (no hardcoded pixel positions).
    points: {
      // MES: the minimum-efficient-scale point — lowest LRAC, on the curve at
      // the bottom of the U. f(300) = 420 (the cost minimum).
      MES: {
        onCurve: 'LRAC', x: MES_X,
        label: 'MES', tone: 'green'
      },

      // Entrant: where a small-scale entrant sits on the LRAC — at ENTRANT_Q,
      // up the falling arm where cost is still high. f(160) ≈ 388.6.
      // Its cost is HIGHER than the incumbent's minimum → it cannot match the
      // incumbent's price.
      Entrant: {
        onCurve: 'LRAC', x: ENTRANT_Q,
        label: 'Entrant AC', tone: 'rose'
      },

      // Incumbent: where the incumbent produces — at MES (lowest cost). Same
      // coordinates as MES but labelled for the limit-pricing story.
      Incumbent: {
        onCurve: 'LRAC', x: MES_X,
        label: 'Incumbent AC', tone: 'slate'
      },

      // Pl: the limit-price level read at the entrant's scale. Sits BELOW the
      // entrant's LRAC (lower on chart = lower price), so the entrant loses
      // money at any output it can reach. at:[x,y] places the marker explicitly
      // on the LimitPrice line above the entrant's output.
      Pl: {
        at: [ENTRANT_Q, LIMIT_Y],
        label: 'Pₗ (limit price)', tone: 'rose'
      },

      // DemandPoint: where market demand scale meets LRAC (natural-monopoly
      // view). f(240) ≈ 414.2 — LRAC still falling at the scale of market demand.
      DemandPoint: {
        onCurve: 'LRAC', x: DEMAND_X,
        label: 'LRAC at D', tone: 'blue'
      }
    }
  });

})();
