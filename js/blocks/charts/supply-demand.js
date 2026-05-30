/* js/blocks/charts/supply-demand.js
   ───────────────────────────────────────────────────────────────────────────
   Supply-and-demand chart family for the declarative econ-diagram engine.

   Registers the 'supplyDemand' family via:
     window.ECONOS_ECON_DIAGRAM.register('supplyDemand', { … })

   ── Screen-space convention ────────────────────────────────────────────────
   Axes: x = Quantity (Q), y = Price (P).
   Screen space: y grows DOWN, so a higher price has a SMALLER y-coordinate.

   Demand (D): downward-sloping in econ (as Q rises, P falls).
     In screen space y increases as x increases → POSITIVE screen slope.

   Supply (S): upward-sloping in econ (as Q rises, P rises).
     In screen space y decreases as x increases → NEGATIVE screen slope.

   This mirrors the AD/AS convention exactly:
     AD   (+slope) ↔ Demand (+slope)
     SRAS (−slope) ↔ Supply (−slope)

   ── Baseline equilibrium ──────────────────────────────────────────────────
   Anchored at (Q*, P*) = (380, 280) in screen space — comfortably inside
   the plot box [80–680, 40–520] with room for shifts in all directions.

     D: slope = +0.8,  c = 280 − 0.8 × 380 = −24
     S: slope = −0.8,  c = 280 + 0.8 × 380 = 584

   Verification:
     D(380) = 0.8 × 380 − 24 = 280  ✓
     S(380) = −0.8 × 380 + 584 = 280 ✓

   ── Curve constants derived from algebra ──────────────────────────────────
   The following quantities are worked out here and referenced in the
   `points` map below so the reader can verify the economics without
   opening the engine source.

   Price ceiling at y = 320  (lower price than P*; y_ceiling > y_equilibrium):
     Qs at ceiling:  S(x)=320  →  x = (584−320)/0.8 = 330
     Qd at ceiling:  D(x)=320  →  x = (320+24)/0.8  = 430
     Shortage: Qd (430) > Qs (330) ✓

   Price floor at y = 240  (higher price than P*; y_floor < y_equilibrium):
     Qd at floor:    D(x)=240  →  x = (240+24)/0.8  = 330
     Qs at floor:    S(x)=240  →  x = (584−240)/0.8 = 430
     Surplus: Qs (430) > Qd (330) ✓

   Indirect tax — S shifts UP in econ (dy = −60 in screen space):
     New S: y = −0.8x + 524  (c = 584 + (−60))
     New E: 0.8x − 24 = −0.8x + 524  →  x ≈ 342.5, y ≈ 250
     Tax wedge = 60 screen y units (= magnitude of dy) at any Q ✓

   Subsidy — S shifts DOWN in econ (dy = +60 in screen space):
     New S: y = −0.8x + 644  (c = 584 + 60)
     New E: 0.8x − 24 = −0.8x + 644  →  x ≈ 417.5, y ≈ 310

   Demand increase — D shifts right (dx = +80):
     New D: c = −24 − 0.8 × 80 = −88  (shiftedC = D_C − slope × dx)
     New E: 0.8x − 88 = −0.8x + 584  →  x = 420, y = 248

   ── Baseline curve set ────────────────────────────────────────────────────
   D, S        — the core market curves; receive per-view shifts. A plain view
                 (no `show`/`hide`) renders D + S + their equilibrium E only.
   PriceLine   — horizontal at P* (y = 280); the equilibrium price reference
                 line used as the CS/PS boundary in the welfare view. Opt-in
                 via `show:['D','S','PriceLine']` in the welfare view.
   PriceCeiling, PriceFloor — horizontal reference lines for the price-control
                 views. Opt-in per view via `show` so they do NOT appear as
                 stray lines in the baseline or shift views.

   ── Per-view visibility (engine `show`/`hide`) ─────────────────────────────
   The engine renders ALL baseline curves by default, so a view that wants
   ONLY a subset must declare `show:[curveIds]` (renders just those, plus any
   curves its points/areas/brackets reference). The documented sampleViews
   below therefore set `show:['D','S']` on the market views and add the price
   reference line each control/welfare view needs. The baseline view shows
   D + S + E and nothing else — no stray horizontal lines.

   ── Documented sampleViews (mirrored in dev/renderer-lab.html) ─────────────
     Baseline        show:['D','S']                              → D, S, E
     Demand increase show:['D','S']                shifts D dx80 → D, S, E₁
     Indirect tax    show:['D','S']                shifts S dy-60
     Price ceiling   show:['D','S','PriceCeiling'] points Qs/Qd_ceiling
     Price floor     show:['D','S','PriceFloor']   points Qd/Qs_floor
     Welfare         show:['D','S','PriceLine']    areas CS + PS

   ── The engine computes all intersections ─────────────────────────────────
   Points declared with on:['D','S'] are resolved numerically per view shift.
   Only the price-control Qs/Qd quantities are hardcoded (they are derived
   from independent arithmetic, not from a curve intersection).

   Loads via <script defer> AFTER econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before supplyDemand family');
    return;
  }

  // ── Baseline curve parameters ──────────────────────────────────────────────
  // Equilibrium anchor: screen (Q*, P*) = (380, 280).

  var D_SLOPE =  0.8;                   // Demand: positive screen slope
  var S_SLOPE = -0.8;                   // Supply: negative screen slope

  var D_C = 280 - D_SLOPE * 380;       // = −24
  var S_C = 280 - S_SLOPE * 380;       // = 584

  // Equilibrium price in screen y — boundary between CS (above) and PS (below).
  var EQ_Y = 280;

  // Price-control y-levels (screen space):
  //   CEILING_Y > EQ_Y → below equilibrium price (lower P) → shortage
  //   FLOOR_Y   < EQ_Y → above equilibrium price (higher P) → surplus
  var CEILING_Y = 320;
  var FLOOR_Y   = 240;

  // Quantity endpoints at price-control levels (derived algebraically above).
  var QS_CEILING = 330;   // Qs at ceiling: S(330)=320 ✓
  var QD_CEILING = 430;   // Qd at ceiling: D(430)=320 ✓
  var QD_FLOOR   = 330;   // Qd at floor:   D(330)=240 ✓
  var QS_FLOOR   = 430;   // Qs at floor:   S(430)=240 ✓

  // ── Tax / subsidy wedge points ────────────────────────────────────────────
  // Canonical indirect-tax view shifts S UP in econ by 60 screen-y units
  // (dy = −60). New equilibrium:
  //   D(x) = S_taxed(x)   →  0.8x − 24 = −0.8x + 524  →  x = 342.5
  //   y    = 0.8(342.5) − 24                          →  y = 250
  // Pc = post-tax consumer price = y at new equilibrium = 250 (above P*).
  // Pp = price producers receive = post-tax price MINUS tax per unit = 310
  //      (below P* by the same amount that Pc is above it).
  // Qt = post-tax quantity (smaller than Q*, dead-weight loss emerges).
  var TAX_DY     = -60;            // S shift in screen y (negative = up in econ)
  var TAX_QT     = 342.5;
  var TAX_PC     = 250;            // consumer price after tax (above P*)
  var TAX_PP     = TAX_PC - TAX_DY; // producer keeps (Pc) - (tax) = 310 in screen y
  // Subsidy view: S shifts DOWN in econ (dy = +60 screen y).
  // New eq: 0.8x − 24 = −0.8x + 644 → x = 417.5, y = 310. Consumer pays Pc=310;
  // producer receives Pc + subsidy = 250 (smaller y, i.e. higher in econ).
  var SUB_DY     = 60;
  var SUB_QSUB   = 417.5;
  var SUB_PC     = 310;            // consumer price after subsidy (below P*)
  var SUB_PP     = SUB_PC - SUB_DY; // producer receives 250

  API.register('supplyDemand', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },

    axes: {
      xLabel: 'Q', xSub: 'quantity',
      yLabel: 'P', ySub: 'price'
    },

    // No structural vertical anchors — a basic market has no exogenous Q* line.
    anchors: [],

    // ── Baseline curves ────────────────────────────────────────────────────
    baseline: {
      // Demand: downward-sloping in P-Q econ space; positive screen slope.
      // Shifts rightward (dx > 0) → higher Q and P at new equilibrium.
      D: {
        kind: 'linear', slope: D_SLOPE, c: D_C,
        tone: 'blue', display: 'D₀'
      },
      // Supply: upward-sloping in P-Q econ space; negative screen slope.
      // Shifts up in econ (dy < 0 screen) for tax; down (dy > 0) for subsidy.
      S: {
        kind: 'linear', slope: S_SLOPE, c: S_C,
        tone: 'rose', display: 'S₀'
      },
      // Equilibrium price line — at P* = EQ_Y. Serves as the upper boundary of
      // PS and lower boundary of CS for the welfare-area decomposition. Opt-in
      // only: the welfare view sets show:['D','S','PriceLine'] so it does NOT
      // appear as a stray horizontal line in the baseline / shift views.
      PriceLine: {
        kind: 'horizontal', y: EQ_Y,
        optional: true,
        tone: 'slate', display: 'P*'
      },
      // Price ceiling — horizontal line below equilibrium price.
      // Lower on the price axis (higher screen y) → shortage emerges.
      // Opt-in: the price-ceiling view sets show:['D','S','PriceCeiling'].
      PriceCeiling: {
        kind: 'horizontal', y: CEILING_Y,
        optional: true,
        tone: 'amber', display: 'Pmax'
      },
      // Price floor — horizontal line above equilibrium price.
      // Higher on the price axis (lower screen y) → surplus emerges.
      // Opt-in: the price-floor view sets show:['D','S','PriceFloor'].
      PriceFloor: {
        kind: 'horizontal', y: FLOOR_Y,
        optional: true,
        tone: 'purple', display: 'Pmin'
      }
    },

    // ── Named points ──────────────────────────────────────────────────────
    // All are recomputed for each view using that view's shifts.
    //   on: ['A','B']       → intersection of curves A and B (with their shifts)
    //   onCurve:'X', x:<n> → evaluate curve X at the given x (with its shift)
    points: {
      // ── Market equilibrium ────────────────────────────────────────────────
      // E: baseline equilibrium — D ∩ S.  Recomputed automatically with any
      //    view shift so the engine always finds the correct new crossing.
      E:  { on: ['D', 'S'], label: 'E',  tone: 'slate' },
      // E1: post-shift equilibrium in the same view as E (e.g. demand increase
      //     vs baseline, shown faded).  Both use on:['D','S'] — the engine
      //     applies this view's shifts so they resolve to the same new point
      //     unless used across views with different shifts.
      E1: { on: ['D', 'S'], label: 'E₁', tone: 'amber' },

      // ── Price-ceiling quantity markers ─────────────────────────────────
      // Qs: quantity supplied at the ceiling price (on the S curve).
      //   S(330) = −0.8×330 + 584 = 320 = CEILING_Y ✓
      Qs_ceiling: { onCurve: 'S', x: QS_CEILING, label: 'Qₛ', tone: 'rose' },
      // Qd: quantity demanded at the ceiling price (on the D curve).
      //   D(430) = 0.8×430 − 24 = 320 = CEILING_Y ✓
      Qd_ceiling: { onCurve: 'D', x: QD_CEILING, label: 'Qd', tone: 'blue' },

      // ── Price-floor quantity markers ───────────────────────────────────
      // Qd: quantity demanded at the floor price (on the D curve).
      //   D(330) = 0.8×330 − 24 = 240 = FLOOR_Y ✓
      Qd_floor:   { onCurve: 'D', x: QD_FLOOR,   label: 'Qd', tone: 'blue' },
      // Qs: quantity supplied at the floor price (on the S curve).
      //   S(430) = −0.8×430 + 584 = 240 = FLOOR_Y ✓
      Qs_floor:   { onCurve: 'S', x: QS_FLOOR,   label: 'Qₛ', tone: 'rose' },

      // ── Indirect-tax wedge markers ─────────────────────────────────────
      // Use these in the tax view (shifts:{S:{dy:-60}} or sample 'tax' view).
      // Pc: post-tax consumer price — read at the new equilibrium quantity.
      // Pp: producer-received price — Pc minus the tax (per-unit wedge).
      // Qt: post-tax quantity — sits to the LEFT of Q* (tax reduces output).
      Pc_tax:     { at: [TAX_QT, TAX_PC], label: 'Pc', tone: 'rose'  },
      Pp_tax:     { at: [TAX_QT, TAX_PP], label: 'Pp', tone: 'amber' },
      Qt_tax:     { at: [TAX_QT, EQ_Y],   label: 'Qt', tone: 'slate' },

      // ── Subsidy wedge markers ──────────────────────────────────────────
      // Use these in the subsidy view (shifts:{S:{dy:+60}} or sample 'subsidy').
      // Pc: post-subsidy consumer price (lower than P*).
      // Pp: producer-received price (higher than P*; consumer price + subsidy).
      // Qsub: post-subsidy quantity (sits to the RIGHT of Q* — subsidy expands output).
      Pc_sub:     { at: [SUB_QSUB, SUB_PC], label: 'Pc', tone: 'green'  },
      Pp_sub:     { at: [SUB_QSUB, SUB_PP], label: 'Pp', tone: 'amber'  },
      Qsub:       { at: [SUB_QSUB, EQ_Y],   label: 'Qsub', tone: 'slate' }
    },

    // Legacy equilibrium fallback — used when a view omits `points`.
    // The engine shows this equilibrium (and fades it in subsequent views)
    // to maintain visual continuity without requiring explicit point lists.
    equilibrium: { from: ['D', 'S'], baseLabel: 'E' }
  });

})();
