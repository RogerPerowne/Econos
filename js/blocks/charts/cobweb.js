/* js/blocks/charts/cobweb.js
   ───────────────────────────────────────────────────────────────────────────
   Cobweb (agricultural / commodity price-instability) chart families for the
   declarative econ-diagram engine.

   Registers TWO sibling families:

     'cobweb'           Convergent cobweb — supply MORE elastic than demand;
                        the rectangular staircase spirals INWARD toward (Q*,P*).
     'cobwebDivergent'  Divergent cobweb — supply LESS elastic than demand;
                        the staircase spirals OUTWARD, away from equilibrium.

   Both share one market geometry (D, S, equilibrium E) and differ ONLY in the
   slope of S — which is exactly what decides convergence vs divergence — plus
   the pre-computed staircase corner points the view connects with arrows.

   Registered via window.ECONOS_ECON_DIAGRAM.register(name, { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.

   ── Screen-space convention (identical to supplyDemand) ────────────────────
   Axes: x = Quantity (Q), y = Price (P). Screen y grows DOWN, so a higher
   price has a SMALLER y-coordinate.
     Demand (D): downward-sloping in econ → POSITIVE screen slope.
     Supply (S): upward-sloping in econ   → NEGATIVE screen slope.

   ── Baseline equilibrium ───────────────────────────────────────────────────
   Anchored at screen (Q*, P*) = (380, 280), comfortably inside the plot box
   [80–680] × [40–520] with room for the staircase to swing in every direction.

   Demand (shared by BOTH families):
     D: slope = +0.8,  c = 280 − 0.8 × 380 = −24      →  D(x) = 0.8x − 24
     Inverse:  Q = (P + 24) / 0.8

   ── WHAT MAKES A COBWEB CONVERGE OR DIVERGE ────────────────────────────────
   The cobweb iterates: from a price P, producers set NEXT period's quantity on
   supply (Q = S⁻¹(P), the production lag), then the market clears THAT quantity
   on demand giving the next price (P' = D(Q)). The map P → P' has gain
   |slope_D / slope_S| (screen slopes). So:

     |slope_S| > |slope_D|  → gain < 1 → oscillations SHRINK → CONVERGENT
     |slope_S| < |slope_D|  → gain > 1 → oscillations GROW   → DIVERGENT

   In econ terms a STEEPER screen-slope supply is a FLATTER (more elastic)
   supply curve, so convergence ⇔ supply more elastic than demand — exactly the
   teaching on the target card (learn-it card "The Cobweb Model").

   ── FAMILY 'cobweb'  (CONVERGENT) ──────────────────────────────────────────
   Supply steeper in screen space (more elastic in econ): slope = −1.2.
     S: c = 280 − (−1.2) × 380 = 736                  →  S(x) = −1.2x + 736
     Inverse:  Q = (736 − P) / 1.2
     Eq check: S(380) = −1.2×380 + 736 = 280 = P* ✓   |1.2| > |0.8| → converges
   Staircase from a starting price P0 = 200 (above P*; lower screen y):
     Q1 = S⁻¹(200)   = 446.67   P1 = D(Q1) = 333.33
     Q2 = S⁻¹(333.3) = 335.56   P2 = D(Q2) = 244.44
     Q3 = S⁻¹(244.4) = 409.63   P3 = D(Q3) = 303.70
     Q4 = S⁻¹(303.7) = 360.25   P4 = D(Q4) = 264.20
   Prices 200 → 333 → 244 → 304 → 264 close on 280; quantities close on 380. ✓

   ── FAMILY 'cobwebDivergent'  (DIVERGENT) ──────────────────────────────────
   Supply flatter in screen space (less elastic in econ): slope = −0.55.
     S: c = 280 − (−0.55) × 380 = 489                 →  S(x) = −0.55x + 489
     Inverse:  Q = (489 − P) / 0.55
     Eq check: S(380) = −0.55×380 + 489 = 280 = P* ✓  |0.55| < |0.8| → diverges
   Staircase from a SMALL perturbation P0 = 255 (just above P*) so the outward
   spiral stays on-screen for four readable steps:
     Q1 = S⁻¹(255)   = 425.45   P1 = D(Q1) = 316.36
     Q2 = S⁻¹(316.4) = 313.88   P2 = D(Q2) = 227.11
     Q3 = S⁻¹(227.1) = 476.17   P3 = D(Q3) = 356.93
     Q4 = S⁻¹(356.9) = 240.12   P4 = D(Q4) = 168.10
   Prices 255 → 316 → 227 → 357 → 168 swing ever wider; quantities 425 → 314 →
   476 → 240 fan outward. All corners stay inside [80–680] × [40–520]. ✓

   ── HOW THE STAIRCASE IS DRAWN ─────────────────────────────────────────────
   The engine has no native "staircase" primitive, so the cobweb is expressed as
   a chain of NAMED CORNER POINTS plus movement arrows between consecutive
   corners (arrows:[['c0','c1'],['c1','c2'], …] with bow:0 for straight
   rectangular steps). The corners alternate landing ON the supply curve (a
   horizontal step: price held, quantity chosen for next period) and ON the
   demand curve (a vertical step: quantity sold, market price revealed):

     c0 = (Q1, P0)  on S   ← producers pick Q1 from the starting price P0
     c1 = (Q1, P1)  on D   ← that Q1 clears the market at price P1
     c2 = (Q2, P1)  on S   ← producers pick Q2 from P1
     c3 = (Q2, P2)  on D   …and so on, spiralling in (or out).

   Each corner is given as an explicit `at:[x,y]` point (coordinates verified
   above) so the migrated card just lists the corner names in `points` and the
   consecutive pairs in `arrows`. A view can also drop in E, P0…P_n axis markers
   as needed. All values are pre-computed here; the engine renders them as-is.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before cobweb family');
    return;
  }

  // ── Shared geometry ────────────────────────────────────────────────────────
  var VB   = { w: 780, h: 580 };
  var PLOT = { xMin: 80, xMax: 680, yMin: 40, yMax: 520 };
  var AXES = { xLabel: 'Q', xSub: 'quantity', yLabel: 'P', ySub: 'price' };

  // Demand is identical for both families.
  var D_SLOPE = 0.8;
  var D_C     = 280 - D_SLOPE * 380;  // = −24
  var EQ_X    = 380;
  var EQ_Y    = 280;

  // Demand helper (screen space) — used to verify the corner arithmetic.
  function D(x) { return D_SLOPE * x + D_C; }

  // ── CONVERGENT family ──────────────────────────────────────────────────────
  // Supply steeper than demand in screen space → spirals inward.
  var CV_S_SLOPE = -1.2;
  var CV_S_C     = EQ_Y - CV_S_SLOPE * EQ_X;            // = 736
  function CV_Sinv(P) { return (CV_S_C - P) / -CV_S_SLOPE; } // (736−P)/1.2

  // Starting (perturbation) price, then iterate P → Q on S → P on D.
  var CV_P0 = 200;
  var CV_Q1 = CV_Sinv(CV_P0);          // 446.67
  var CV_P1 = D(CV_Q1);                // 333.33
  var CV_Q2 = CV_Sinv(CV_P1);          // 335.56
  var CV_P2 = D(CV_Q2);                // 244.44
  var CV_Q3 = CV_Sinv(CV_P2);          // 409.63
  var CV_P3 = D(CV_Q3);                // 303.70
  var CV_Q4 = CV_Sinv(CV_P3);          // 360.25
  var CV_P4 = D(CV_Q4);                // 264.20

  API.register('cobweb', {
    viewBox: VB,
    plot:    PLOT,
    axes:    AXES,
    anchors: [],

    baseline: {
      // Demand — downward in econ; positive screen slope.
      D: { kind: 'linear', slope: D_SLOPE, c: D_C, tone: 'blue', display: 'D' },
      // Supply — upward in econ; negative (steep) screen slope → convergence.
      S: { kind: 'linear', slope: CV_S_SLOPE, c: CV_S_C, tone: 'rose', display: 'S' }
    },

    points: {
      // Long-run market equilibrium the staircase spirals toward.
      E:  { on: ['D', 'S'], label: 'E', tone: 'slate' },

      // Staircase corner points (alternating S-corner / D-corner). Coordinates
      // pre-computed and verified in the header. Connect c0→c1→c2… with arrows.
      c0: { at: [CV_Q1, CV_P0], label: '', tone: 'amber' }, // on S, price P0
      c1: { at: [CV_Q1, CV_P1], label: '', tone: 'amber' }, // on D, price P1
      c2: { at: [CV_Q2, CV_P1], label: '', tone: 'amber' }, // on S
      c3: { at: [CV_Q2, CV_P2], label: '', tone: 'amber' }, // on D, price P2
      c4: { at: [CV_Q3, CV_P2], label: '', tone: 'amber' }, // on S
      c5: { at: [CV_Q3, CV_P3], label: '', tone: 'amber' }, // on D, price P3
      c6: { at: [CV_Q4, CV_P3], label: '', tone: 'amber' }, // on S
      c7: { at: [CV_Q4, CV_P4], label: '', tone: 'amber' }, // on D, price P4

      // Optional labelled price/quantity markers for a fully-annotated view.
      P0: { at: [CV_Q1, CV_P0], label: 'P₀', tone: 'purple' },
      P1: { at: [CV_Q1, CV_P1], label: 'P₁', tone: 'purple' },
      P2: { at: [CV_Q2, CV_P2], label: 'P₂', tone: 'purple' },
      Q1: { at: [CV_Q1, EQ_Y],  label: 'Q₁', tone: 'slate' },
      Q2: { at: [CV_Q2, EQ_Y],  label: 'Q₂', tone: 'slate' }
    },

    equilibrium: { from: ['D', 'S'], baseLabel: 'E' }
  });

  // ── DIVERGENT family ───────────────────────────────────────────────────────
  // Supply flatter than demand in screen space → spirals outward.
  var DV_S_SLOPE = -0.55;
  var DV_S_C     = EQ_Y - DV_S_SLOPE * EQ_X;            // = 489
  function DV_Sinv(P) { return (DV_S_C - P) / -DV_S_SLOPE; } // (489−P)/0.55

  var DV_P0 = 255;
  var DV_Q1 = DV_Sinv(DV_P0);          // 425.45
  var DV_P1 = D(DV_Q1);                // 316.36
  var DV_Q2 = DV_Sinv(DV_P1);          // 313.88
  var DV_P2 = D(DV_Q2);                // 227.11
  var DV_Q3 = DV_Sinv(DV_P2);          // 476.17
  var DV_P3 = D(DV_Q3);                // 356.93
  var DV_Q4 = DV_Sinv(DV_P3);          // 240.12
  var DV_P4 = D(DV_Q4);                // 168.10

  API.register('cobwebDivergent', {
    viewBox: VB,
    plot:    PLOT,
    axes:    AXES,
    anchors: [],

    baseline: {
      D: { kind: 'linear', slope: D_SLOPE, c: D_C, tone: 'blue', display: 'D' },
      // Supply — flatter screen slope than demand → divergence.
      S: { kind: 'linear', slope: DV_S_SLOPE, c: DV_S_C, tone: 'rose', display: 'S' }
    },

    points: {
      E:  { on: ['D', 'S'], label: 'E', tone: 'slate' },

      c0: { at: [DV_Q1, DV_P0], label: '', tone: 'amber' }, // on S, price P0
      c1: { at: [DV_Q1, DV_P1], label: '', tone: 'amber' }, // on D, price P1
      c2: { at: [DV_Q2, DV_P1], label: '', tone: 'amber' }, // on S
      c3: { at: [DV_Q2, DV_P2], label: '', tone: 'amber' }, // on D, price P2
      c4: { at: [DV_Q3, DV_P2], label: '', tone: 'amber' }, // on S
      c5: { at: [DV_Q3, DV_P3], label: '', tone: 'amber' }, // on D, price P3
      c6: { at: [DV_Q4, DV_P3], label: '', tone: 'amber' }, // on S
      c7: { at: [DV_Q4, DV_P4], label: '', tone: 'amber' }, // on D, price P4

      P0: { at: [DV_Q1, DV_P0], label: 'P₀', tone: 'purple' },
      P1: { at: [DV_Q1, DV_P1], label: 'P₁', tone: 'purple' },
      P2: { at: [DV_Q2, DV_P2], label: 'P₂', tone: 'purple' },
      Q1: { at: [DV_Q1, EQ_Y],  label: 'Q₁', tone: 'slate' },
      Q2: { at: [DV_Q2, EQ_Y],  label: 'Q₂', tone: 'slate' }
    },

    equilibrium: { from: ['D', 'S'], baseLabel: 'E' }
  });

})();
