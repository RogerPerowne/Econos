/* js/blocks/charts/labour-market.js
   ───────────────────────────────────────────────────────────────────────────
   Labour-market chart family for the declarative econ-diagram engine.

   Covers three canonical labour-market models from UK A-level economics:
     1. COMPETITIVE MARKET — LD (MRP) ∩ LS gives E (wage W*, employment L*).
     2. MINIMUM WAGE (Wmin > W*) — horizontal line above E; excess supply
        between Ld (labour demanded at Wmin) and Ls (labour supplied at Wmin)
        is shown as an unemployment bracket.
     3. MONOPSONY — a Marginal Cost of Labour curve (MCL) lies above the Supply
        curve. The monopsonist hires where MRP = MCL (employment Lm < L*); the
        wage is then read off the Supply curve at Lm (Wm < W*).

   ── SCREEN-SPACE CONVENTIONS ─────────────────────────────────────────────
   Axes: x = Quantity of labour (right → more labour).
         y = Wage (smaller y value = higher on screen = higher wage).

   Labour Demand (LD): in economics LD slopes DOWN — a higher wage means fewer
   workers are demanded.  In screen space (y DOWN), a higher wage is a SMALLER
   y, and a larger quantity corresponds to a LOWER wage (LARGER y).  So LD has
   a POSITIVE screen slope: y increases as x increases.

   Labour Supply (LS): slopes UP in economics — a higher wage attracts more
   workers.  In screen space LS has a NEGATIVE slope: y decreases as x increases.

   MCL (Monopsony): rises faster than LS in econ space.  In screen space MCL
   has a MORE NEGATIVE slope than LS and shares the same y-intercept (at L=0
   both MCL and LS start from the same base wage; MCL then rises faster, i.e.
   its screen y falls faster as x grows).

   Registers via window.ECONOS_ECON_DIAGRAM.register('labourMarket', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before labourMarket family');
    return;
  }

  // ── Geometry constants ───────────────────────────────────────────────────
  //
  // Plot box: x in [80,680], y in [40,520].  Target equilibrium E at (380, 280)
  // — roughly centred, leaving room above for min-wage / MCL annotations.
  //
  // Labour Demand (LD): positive screen slope (demand falls as wage rises).
  //   y = LD_SLOPE * x + LD_C, through (380, 280):
  //   LD_C = 280 - 0.65*380 = 33.
  //   Check endpoints: x=80 → y=85 (high wage, low demand);
  //                    x=680 → y=475 (low wage, high demand). ✓
  var LD_SLOPE = 0.65;
  var LD_C     = 33;   // 280 - 0.65*380

  // Labour Supply (LS): negative screen slope (supply rises as wage rises).
  //   y = LS_SLOPE * x + LS_C, through (380, 280):
  //   LS_C = 280 + 0.65*380 = 527.
  //   Check endpoints: x=80 → y=475 (low wage, low supply);
  //                    x=680 → y=85 (high wage, high supply). ✓
  //
  // Intersection with LD: 0.65x+33 = -0.65x+527 → 1.3x=494 → x=380, y=280. ✓
  var LS_SLOPE = -0.65;
  var LS_C     = 527;  // 280 + 0.65*380

  // Competitive equilibrium coordinates (exact): EQ_X = 380 (L*), EQ_Y = 280 (W* screen).
  // The engine resolves E via on:['LD','LS'] intersection — no hardcoded pixel needed.

  // Minimum wage: sits ABOVE the competitive wage, i.e. SMALLER y than EQ_Y.
  // Wmin at y=170 → about 110 px above E on screen.
  var WMIN_Y = 170;

  // Labour demanded at Wmin (on LD curve): x = (WMIN_Y - LD_C) / LD_SLOPE.
  //   x = (170 - 33) / 0.65 = 210.8 ≈ 211.
  var LD_AT_WMIN = (WMIN_Y - LD_C) / LD_SLOPE; // ≈ 210.8

  // Labour supplied at Wmin (on LS curve): x = (WMIN_Y - LS_C) / LS_SLOPE.
  //   x = (170 - 527) / -0.65 = 548.5 ≈ 549.
  var LS_AT_WMIN = (WMIN_Y - LS_C) / LS_SLOPE; // ≈ 548.5

  // MCL (Monopsony Marginal Cost of Labour):
  //   In econ space MCL = 2 × marginal factor cost, so it is TWICE AS STEEP as LS
  //   and shares the same y-intercept.  In screen space:
  //     LS:  y = -0.65x + 527
  //     MCL: y = -1.30x + 527   (double the screen-space gradient)
  //   At any given x, MCL sits ABOVE LS on screen (smaller y = higher wage). ✓
  var MCL_SLOPE = -1.30;
  var MCL_C     = 527; // same intercept as LS at x=0

  // Monopsony employment Lm: MRP = MCL → LD ∩ MCL.
  //   0.65x + 33 = -1.30x + 527 → 1.95x = 494 → x = 253.3.
  var LM_X = 494 / 1.95; // ≈ 253.3

  // MCL at Lm (the "MRP=MCL" intersection y, shown as the MCL point):
  //   y = 0.65*253.3 + 33 ≈ 197.6
  // This is only needed to define the named point; it is computed by the engine.

  // Monopsony wage Wm: read off LS at Lm.
  //   y = -0.65*253.3 + 527 ≈ 362.4
  // Again computed by the engine via onCurve; confirmed here for sanity.
  // Wm (y≈362) > W* (y=280) in screen → Wm is LOWER on chart → correct:
  // monopsonist pays LESS than the competitive wage. ✓

  API.register('labourMarket', {

    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },

    axes: {
      xLabel: 'L',   xSub: 'quantity of labour',
      yLabel: 'W',   ySub: 'wage'
    },

    // No persistent anchor lines needed; equilibrium labels carry the story.
    anchors: [],

    baseline: {
      // ── Labour Demand = Marginal Revenue Product ─────────────────────────
      // Positive screen slope: demand falls as wages rise (higher x = lower wage).
      LD: {
        kind: 'linear', slope: LD_SLOPE, c: LD_C,
        tone: 'blue', display: 'LD (MRP)'
      },

      // ── Labour Supply ─────────────────────────────────────────────────────
      // Negative screen slope: supply rises as wages rise.
      LS: {
        kind: 'linear', slope: LS_SLOPE, c: LS_C,
        tone: 'green', display: 'LS'
      },

      // ── Marginal Cost of Labour (monopsony) ───────────────────────────────
      // Steeper negative slope than LS; same y-intercept (at L=0 MCL = LS,
      // then diverges upward faster).  Views that do NOT include 'MCL' in their
      // points array will still render this curve faded/solid — that is fine
      // because views can hide curves via the display field; but since we keep
      // MCL in the baseline so a single family covers all three scenarios, we
      // mark it with a distinct tone so authors can identify it.
      MCL: {
        kind: 'linear', slope: MCL_SLOPE, c: MCL_C,
        tone: 'rose', display: 'MCL'
      },

      // ── Minimum wage line ─────────────────────────────────────────────────
      // Horizontal at y=WMIN_Y (above competitive equilibrium).  Present in the
      // baseline so the engine always knows about it; views decide when to show
      // the related named points and annotations.
      Wmin: {
        kind: 'horizontal', y: WMIN_Y,
        tone: 'amber', display: 'Wmin'
      }
    },

    // ── Named points ─────────────────────────────────────────────────────────
    // All computed by the engine from curve intersections or onCurve readings.
    // Coordinates here are for documentation; the engine re-derives them from
    // the baseline + any view shifts.
    points: {

      // E: competitive equilibrium — LD ∩ LS → (380, 280).
      E: {
        on: ['LD', 'LS'],
        label: 'E', tone: 'slate'
      },

      // Ld: labour DEMANDED at the minimum wage — LD at y=Wmin.
      // Engine reads LD at x where LD = WMIN_Y: onCurve + x value.
      // x ≈ 211; placed via onCurve so it tracks any LD shift.
      Ld: {
        onCurve: 'LD', x: LD_AT_WMIN,
        label: 'Ld', tone: 'amber'
      },

      // Ls: labour SUPPLIED at the minimum wage — LS at y=Wmin.
      // x ≈ 549.
      Ls: {
        onCurve: 'LS', x: LS_AT_WMIN,
        label: 'Ls', tone: 'amber'
      },

      // Em: monopsony point — MCL ∩ LD gives the employment level Lm.
      // The x-coordinate where MRP = MCL.
      Em: {
        on: ['LD', 'MCL'],
        label: 'Em', tone: 'rose'
      },

      // Wm: monopsony wage — read off LS at Lm (x ≈ 253).
      // The monopsonist pays the Supply curve wage at their chosen employment.
      Wm: {
        onCurve: 'LS', x: LM_X,
        label: 'Wm', tone: 'rose'
      }
    },

    // Legacy equilibrium for view-0 (competitive baseline) — gives E₀ label
    // when a view uses the implicit equilibrium rather than explicit points.
    equilibrium: { from: ['LD', 'LS'], baseLabel: 'E' }

  });

})();
