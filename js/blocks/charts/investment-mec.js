/* js/blocks/charts/investment-mec.js
   ───────────────────────────────────────────────────────────────────────────
   Investment / Marginal-Efficiency-of-Capital (MEC, a.k.a. MEI) chart family
   for the declarative econ-diagram engine.

   Registers via window.ECONOS_ECON_DIAGRAM.register('mec', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.

   ── THE ECONOMICS ──────────────────────────────────────────────────────────
   The MEC curve plots the expected rate of return on capital against the level
   of planned investment. Firms rank projects by expected return and undertake
   every project whose MEC exceeds the interest rate r (the cost of borrowing).
   As more is invested the marginal project earns less → MEC slopes DOWN in
   r–I space (higher r ⇒ less investment). The decision rule:
       invest while MEC > r ;  stop where MEC = r.
   So equilibrium investment I* is read off where the horizontal interest-rate
   line r* crosses MEC.

   Two shocks the card teaches:
     • A RATE CUT — r* falls. The economy moves DOWN ALONG the SAME MEC curve
       to a larger I (cheaper borrowing makes more projects worthwhile).
     • A CONFIDENCE / TECH BOOST — "animal spirits", better expected profits or
       new technology raise the expected return on every project, shifting the
       WHOLE MEC curve RIGHTWARD (MEC₂). At the same interest rate, I rises.

   ── SCREEN-SPACE CONVENTION (same as supply-demand / adas) ──────────────────
   Axes:  x (horizontal) = Investment I ;  y (screen, grows DOWN) = interest
   rate r.  Because y grows DOWN, a HIGHER interest rate sits at a SMALLER y.

   MEC is "downward-sloping in econ" (as I rises, r falls): in screen space y
   grows as x grows ⇒ POSITIVE screen slope — exactly the demand-curve case in
   supply-demand.js (D_SLOPE = +0.8). A rightward MEC shift uses dx > 0.

   ── BASELINE GEOMETRY ───────────────────────────────────────────────────────
   Equilibrium anchored at screen (I*, r*) = (380, 280) — central, with room
   for shifts in all directions inside the plot box [80–680, 40–520].

     MEC: slope = +0.8,  c = 280 − 0.8 × 380 = −24
       MEC(380) = 0.8 × 380 − 24 = 280 ✓   (crosses r* at I*)

     r* line — horizontal at y = 280 (the base interest rate). Opt-in: views
       declare show:['MEC','RStar'] so it does NOT appear as a stray line where
       a view supplies its own rate line instead.

   ── DERIVED VIEW COORDINATES (all worked here so the economics is verifiable
      without opening the engine) ─────────────────────────────────────────────

   View "Base":  I* where MEC = r* (280):
       0.8·I − 24 = 280  →  I = (280 + 24)/0.8 = 380          → I* = 380 ✓

   View "Rate cut":  r falls to r₂.  Lower r in econ = LARGER screen y.
       Pick r₂ = 340 (screen).  I₂ where MEC = 340:
       0.8·I − 24 = 340  →  I = (340 + 24)/0.8 = 455          → I₂ = 455 ✓
       I₂ (455) > I* (380) — cheaper borrowing raises investment, a MOVEMENT
       DOWN ALONG MEC (same curve). The RCut line is a second horizontal at
       y = 340; the movement arrow runs from (380,280) to (455,340).

   View "Confidence boost":  MEC shifts RIGHT by dx = +120, r held at r* = 280.
       New MEC₂: c = −24 − 0.8 × 120 = −120.
       I₃ where MEC₂ = 280:
       0.8·I − 120 = 280  →  I = (280 + 120)/0.8 = 500        → I₃ = 500 ✓
       I₃ (500) > I* (380) at the SAME interest rate — a rightward SHIFT of the
       whole schedule (higher expected returns on every project).

   ── BASELINE CURVE SET ──────────────────────────────────────────────────────
   MEC     — the investment-demand schedule; receives the rightward dx shift in
             the confidence view. tone blue (it is the demand-side schedule).
   RStar   — horizontal interest-rate line at r* = 280 (opt-in). tone slate.
   RCut    — horizontal interest-rate line at the lower r₂ = 340 (opt-in).
             tone amber — used only in the rate-cut view.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before mec family');
    return;
  }

  // ── Baseline parameters ─────────────────────────────────────────────────────
  // Equilibrium anchor: screen (I*, r*) = (380, 280).
  var MEC_SLOPE = 0.8;                    // downward in econ ⇒ +ve screen slope
  var MEC_C     = 280 - MEC_SLOPE * 380;  // = −24

  var RSTAR_Y = 280;   // base interest rate r* (screen y)
  var RCUT_Y  = 340;   // lower interest rate r₂ after a rate cut (larger y = lower r)

  // Confidence / tech shift of the whole MEC schedule (rightward in econ).

  API.register('mec', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },

    axes: {
      xLabel: 'I', xSub: 'investment',
      yLabel: 'r', ySub: 'interest rate'
    },

    // No exogenous vertical anchor — investment has no fixed-capacity line.
    anchors: [],

    // ── Baseline curves ──────────────────────────────────────────────────────
    baseline: {
      // MEC (= MEI) — marginal efficiency of capital / investment demand.
      // Downward-sloping in r–I econ space; positive screen slope. A rightward
      // shift (dx > 0) raises investment at every interest rate.
      MEC: {
        kind: 'linear', slope: MEC_SLOPE, c: MEC_C,
        tone: 'blue', display: 'MEC₀'
      },
      // Base interest-rate line r*. Horizontal; investment is read off MEC at
      // this rate. Opt-in so it never shows as a stray line in a view that
      // supplies its own rate line.
      RStar: {
        kind: 'horizontal', y: RSTAR_Y,
        optional: true,
        tone: 'slate', display: 'r*'
      },
      // Lower interest-rate line r₂ after a rate cut (larger screen y = lower r
      // in econ). Opt-in: only the rate-cut view shows it.
      RCut: {
        kind: 'horizontal', y: RCUT_Y,
        optional: true,
        tone: 'amber', display: 'r₂'
      }
    },

    // ── Named points ───────────────────────────────────────────────────────
    // All recomputed per view from that view's shifts.
    //   on:['A','B']      → intersection of curves A and B (with their shifts)
    //   onCurve:'X', x    → evaluate curve X at the given x (with its shift)
    points: {
      // I*: base equilibrium investment — MEC ∩ r*.  MEC(380)=280=RSTAR_Y ✓
      // Recomputed with the confidence dx shift in the confidence view, where it
      // lands at MEC₂ ∩ r* = 500.
      Istar: { on: ['MEC', 'RStar'], label: 'I*', tone: 'slate' },

      // I2: investment after a rate cut — MEC ∩ r₂ (same MEC curve, lower rate).
      //   MEC(455)=340=RCUT_Y ✓  → a movement DOWN ALONG MEC.
      I2: { on: ['MEC', 'RCut'], label: 'I₂', tone: 'amber' },

      // I3: investment after a confidence/tech boost — MEC₂ ∩ r* at the same r*.
      //   Same on:['MEC','RStar'] spec; in the confidence view the engine applies
      //   the MEC dx shift so this resolves to MEC₂ ∩ r* = 500.
      I3: { on: ['MEC', 'RStar'], label: 'I₃', tone: 'green' }
    }
  });

})();
