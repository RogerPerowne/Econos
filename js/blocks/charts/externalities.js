/* js/blocks/charts/externalities.js
   ───────────────────────────────────────────────────────────────────────────
   Externalities chart families for the declarative econ-diagram engine.

   Registers two families:

     'externalities-neg'   Negative production externality (e.g. pollution).
                           Three curves: MPB (=Demand), MPC (=Supply), MSC
                           (=MPC parallel-shifted up by the per-unit external
                           cost). Market equilibrium at MPC∩MPB; social
                           optimum at MSC∩MPB. Market overproduces at too
                           low a price — the classic deadweight-loss triangle.

     'externalities-pos'   Positive production externality (e.g. R&D spill-
                           overs). Three curves: MPC (=Supply), MPB (=Demand),
                           MSB (=MPB parallel-shifted up by the per-unit
                           external benefit). Market equilibrium at MPC∩MPB;
                           social optimum at MPC∩MSB. Market underproduces —
                           the welfare-gain triangle lies between MSB and MPB
                           from market Q to social Q.

   Screen-space convention (same as adas / phillips):
     x increases RIGHT  → quantity
     y increases DOWN   → price falls visually as y grows

   Because y↓ on screen means P↓ in econ:
     • Downward demand (MPB/MSB): x↑ → P↓ → screen y↑  → POSITIVE screen slope
     • Upward supply  (MPC/MSC):  x↑ → P↑ → screen y↓  → NEGATIVE screen slope
     • "Above" in econ (higher cost/benefit at every Q) = smaller screen y
       = a smaller intercept c for the same (negative or positive) slope.

   Geometry chosen so both equilibria land comfortably inside the plot box
   (x:[80,680], y:[40,520]) with ~60 px clearance from each edge.

   Loads via <script defer> AFTER econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';
  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before externalities family');
    return;
  }

  /* ── Shared plot geometry ─────────────────────────────────────────────────
     Both families share the same viewBox / axes label positions so that
     switching between them in a compare context looks consistent.           */
  var PLOT = { xMin: 80, xMax: 680, yMin: 40, yMax: 520 };
  var VB   = { w: 780, h: 580 };

  /* ════════════════════════════════════════════════════════════════════════
     FAMILY 1: 'externalities-neg'  —  Negative production externality
     ════════════════════════════════════════════════════════════════════════

     Target coordinates
       Market equilibrium  (MPB ∩ MPC):   Qm ≈ 430, Pm ≈ 280
       Social optimum      (MPB ∩ MSC):   Qs ≈ 370, Ps ≈ 241

     Curve algebra (screen space, y = slope * x + c):

       MPB: positive screen slope = 0.65
            through (430, 280):  c = 280 − 0.65 × 430 = 0.5 ≈ 0
            → MPB: slope = 0.65, c = 0

       MPC: negative screen slope = −0.65
            through (430, 280):  c = 280 + 0.65 × 430 = 559.5 ≈ 560
            → MPC: slope = −0.65, c = 560

       External cost per unit (in screen Δy) = 80 px
       MSC is MPC shifted UP in econ (higher P at every Q)
             = same slope, c reduced by 80 (lower screen y = higher price)
            → MSC: slope = −0.65, c = 480

     Verify social optimum (MPB ∩ MSC):
       0.65·x = −0.65·x + 480  →  1.30·x = 480  →  x ≈ 369
       y = 0.65 × 369 ≈ 240  ✓ (inside plot, ~60 px above yMin)

     Economics check:
       Qs (369) < Qm (430)  → market OVER-produces             ✓
       Ps (240) > Pm (280 screen) — Ps is higher ON SCREEN
         but screen y smaller means HIGHER price in econ        ✓
       Welfare-loss triangle: bounded by MSC (top/left in econ,
         i.e. lower screen y), MPB (bottom in econ, i.e. higher
         screen y), from x = Qs to x = Qm.                     ✓   */

  var MPB_SLOPE  =  0.65;
  var MPB_C      =  0;       // MPB: y = 0.65x + 0  (downward demand in econ)

  var MPC_SLOPE  = -0.65;
  var MPC_C      =  560;     // MPC: y = -0.65x + 560 (upward supply in econ)

  var EXT_COST   =  80;      // external cost in screen Δy
  var MSC_C      =  MPC_C - EXT_COST;  // 480: above MPC in econ (lower screen y)

  API.register('externalities-neg', {
    viewBox: VB,
    plot:    PLOT,
    axes: {
      xLabel: 'Q', xSub: 'quantity',
      yLabel: 'P', ySub: 'price / cost'
    },
    baseline: {
      /* MPB = private marginal benefit = demand (downward sloping in econ,
         positive slope in screen space). */
      MPB: {
        kind: 'linear', slope: MPB_SLOPE, c: MPB_C,
        tone: 'blue', display: 'MPB'
      },
      /* MPC = private marginal cost = supply (upward sloping in econ,
         negative slope in screen space). */
      MPC: {
        kind: 'linear', slope: MPC_SLOPE, c: MPC_C,
        tone: 'slate', display: 'MPC'
      },
      /* MSC = social marginal cost = MPC + external cost per unit.
         Parallel to MPC, above it in econ (lower c in screen space). */
      MSC: {
        kind: 'linear', slope: MPC_SLOPE, c: MSC_C,
        tone: 'rose', display: 'MSC'
      }
    },
    /* Named points recomputed per view's shifts. */
    points: {
      /* Market equilibrium — MPC ∩ MPB.
         The market ignores external costs and produces here.              */
      marketEq: {
        on: ['MPC', 'MPB'],
        label: 'Qm', tone: 'slate'
      },
      /* Social optimum — MSC ∩ MPB.
         Where production should be to maximise social welfare.            */
      socialEq: {
        on: ['MSC', 'MPB'],
        label: 'Qs', tone: 'rose'
      },
      /* DWL-triangle apex on MSC at the market quantity Qm = 430.
         The deadweight-loss triangle has vertices:
           socialEq (apex, at MPB ∩ MSC),
           marketEq (lower-right, at Qm on MPB),
           mscAtMarket (upper-right, at Qm on MSC — sits directly above
                        marketEq because MSC > MPC by EXT_COST at every Q).
         Use these three together (areas:[{between:['MSC','MPB'],x:[Qs,Qm]}])
         to shade the DWL or annotate it.                                  */
      mscAtMarket: {
        onCurve: 'MSC',
        x:       430,           // matches marketEq's Qm coordinate
        label:   'MSC@Qm',
        tone:    'amber'
      }
    }
  });

  /* ════════════════════════════════════════════════════════════════════════
     FAMILY 2: 'externalities-pos'  —  Positive production externality
     ════════════════════════════════════════════════════════════════════════

     Target coordinates
       Market equilibrium  (MPC ∩ MPB):   Qm ≈ 430, Pm ≈ 280
       Social optimum      (MPC ∩ MSB):   Qs ≈ 491, Ps ≈ 241

     Curve algebra:

       MPC: same as above (slope = −0.65, c = 560)
       MPB: same as above (slope =  0.65, c = 0)

       External benefit per unit (in screen Δy) = 80 px
       MSB is MPB shifted UP in econ (higher benefit at every Q)
             = same positive slope, c reduced by 80 (lower screen y = higher value)
            → MSB: slope = 0.65, c = −80

     Verify social optimum (MPC ∩ MSB):
       −0.65·x + 560 = 0.65·x − 80
       640 = 1.30·x  →  x ≈ 492
       y = 0.65 × 492 − 80 ≈ 240  ✓ (inside plot)

     Economics check:
       Qs (492) > Qm (430)  → market UNDER-produces                ✓
       Ps (240) < Pm (280) in screen — Ps is higher in econ (lower
         screen y = higher P), reflecting lower cost at social Q    ✓
       Welfare-gain triangle: between MSB (lower screen y = higher
         value) and MPB (higher screen y = lower private value),
         from x = Qm to x = Qs.                                     ✓   */

  var EXT_BEN    =  80;      // external benefit in screen Δy
  var MSB_C      =  MPB_C - EXT_BEN;   // −80: above MPB in econ (lower screen y)

  API.register('externalities-pos', {
    viewBox: VB,
    plot:    PLOT,
    axes: {
      xLabel: 'Q', xSub: 'quantity',
      yLabel: 'P', ySub: 'price / benefit'
    },
    baseline: {
      /* MPC = private marginal cost = supply. */
      MPC: {
        kind: 'linear', slope: MPC_SLOPE, c: MPC_C,
        tone: 'slate', display: 'MPC'
      },
      /* MPB = private marginal benefit = demand. */
      MPB: {
        kind: 'linear', slope: MPB_SLOPE, c: MPB_C,
        tone: 'blue', display: 'MPB'
      },
      /* MSB = social marginal benefit = MPB + external benefit per unit.
         Parallel to MPB, above it in econ (lower c in screen space).     */
      MSB: {
        kind: 'linear', slope: MPB_SLOPE, c: MSB_C,
        tone: 'green', display: 'MSB'
      }
    },
    points: {
      /* Market equilibrium — MPC ∩ MPB. */
      marketEq: {
        on: ['MPC', 'MPB'],
        label: 'Qm', tone: 'slate'
      },
      /* Social optimum — MPC ∩ MSB. */
      socialEq: {
        on: ['MPC', 'MSB'],
        label: 'Qs', tone: 'green'
      },
      /* Welfare-gain-triangle apex on MSB at the market quantity Qm = 430.
         The welfare-gain triangle (the gain forgone by underproduction) has
         vertices:
           marketEq (lower-left, at Qm on MPB),
           msbAtMarket (upper-left, at Qm on MSB — directly above marketEq),
           socialEq (apex, at MPC ∩ MSB at the larger Qs).
         Use these three together to shade the welfare gain.               */
      msbAtMarket: {
        onCurve: 'MSB',
        x:       430,           // matches marketEq's Qm coordinate
        label:   'MSB@Qm',
        tone:    'amber'
      }
    }
  });

})();
