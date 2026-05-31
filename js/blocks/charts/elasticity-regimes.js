/* js/blocks/charts/elasticity-regimes.js
   ───────────────────────────────────────────────────────────────────────────
   Elasticity-regimes chart family for the declarative econ-diagram engine.

   Registers via window.ECONOS_ECON_DIAGRAM.register('elasticityRegimes', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.

   Built to express three teaching surfaces faithfully:
     • PED — the five demand regimes  (perfectly inelastic → perfectly elastic)
       Target: js/data/edexcel_a/theme-1/price-elasticity-of-demand/learn-it.js
               card 'ped_4' (Reading the PED coefficient, five frames).
     • PES — the five supply regimes  (perfectly inelastic → perfectly elastic)
       Target: js/data/edexcel_a/theme-1/price-elasticity-of-supply/learn-it.js
               card 'pes_4' (Reading the PES coefficient, five frames).
     • Tax incidence by elasticity — the same tax landing in a steep-D market
       vs a flat-D market; the burden follows the LESS elastic side.
       Target: js/data/edexcel_a/theme-1/indirect-taxes-and-subsidies/learn-it.js
               card 'indirect_taxes_subsidies_4' (Elasticity and who pays).

   ── Screen-space convention ────────────────────────────────────────────────
   Axes: x = Quantity (Q), y = Price (P).  Screen space: y grows DOWN, so a
   higher price has a SMALLER y-coordinate (same convention as supplyDemand).

   Demand: downward-sloping in econ → POSITIVE screen slope.
   Supply: upward-sloping in econ   → NEGATIVE screen slope.

   ── The COMMON PIVOT ───────────────────────────────────────────────────────
   Every demand variant AND every supply variant passes through the SAME point
   (Q*, P*) = (380, 280), centred in the plot box [80–680, 40–520]. This lets a
   view swap one elasticity for another (e.g. D_unit → D_inelastic) and keep the
   equilibrium fixed, so the eye sees ONLY the change in steepness — exactly the
   pedagogy of the "five regimes" frames.

   For a line y = m·x + c through (380, 280):  c = 280 − m·380.

   ── Demand variants (positive screen slope; c = 280 − m·380) ────────────────
     D_unit        m = +0.80  → c = −24    (moderate slope; |PED| ~ 1 reference)
     D_inelastic   m = +2.50  → c = −670   (STEEP — small QD response to ΔP)
     D_elastic     m = +0.25  → c = +185   (FLAT  — large QD response to ΔP)
     D_perfInelastic  vertical at x = 380  (PED = 0;  ΔP → no ΔQ)
     D_perfElastic    horizontal at y = 280 (PED = ∞; price fixed, any Q)
   Verification (all hit the pivot):
     D_unit(380)      = 0.80·380 − 24  = 280 ✓
     D_inelastic(380) = 2.50·380 − 670 = 280 ✓
     D_elastic(380)   = 0.25·380 + 185 = 280 ✓

   ── Supply variants (negative screen slope; c = 280 − m·380) ────────────────
     S_unit        m = −0.80  → c = 584   (moderate; PES ~ 1 reference)
     S_inelastic   m = −2.50  → c = 1230  (STEEP — small QS response to ΔP)
     S_elastic     m = −0.25  → c = 375   (FLAT  — large QS response to ΔP)
     S_perfInelastic  vertical at x = 380 (PES = 0; fixed quantity)
     S_perfElastic    horizontal at y = 280 (PES = ∞; price fixed, any Q)
   Verification:
     S_unit(380)      = −0.80·380 + 584  = 280 ✓
     S_inelastic(380) = −2.50·380 + 1230 = 280 ✓
     S_elastic(380)   = −0.25·380 + 375  = 280 ✓

   Steep-line c values (−670, 1230) fall far outside the plot; the engine clips
   each line to the plot box (lineEndpoints), so only the visible steep segment
   through the pivot is drawn — the intended "near-vertical" look.

   ── Tax-incidence apparatus ─────────────────────────────────────────────────
   A plain supply curve S (= S_unit reused as 'S') and a parallel tax-shifted
   copy S_taxed. A specific tax shifts S UP in econ by a constant wedge; in
   screen space that is dy = −80 on the c-intercept:
     S       : m = −0.80, c = 584
     S_taxed : m = −0.80, c = 584 − 80 = 504   (S+T, drawn above S in econ)
   The wedge between S and S_taxed is 80 screen-px at every Q (a SPECIFIC tax).

   The two-panel card pairs a STEEP-demand market against a FLAT-demand market,
   both taxed by this same 80-px wedge. New equilibrium = D ∩ S_taxed:

     STEEP demand (D_inelastic ∩ S_taxed):
       2.5x − 670 = −0.8x + 504 → x = 355.8 (Qt), Pc(screen y) = 219.4
       Pre-tax P* = 280.  Pc is 60.6 px ABOVE P* in price (lower screen y).
       Producer keeps Pp = Pc + wedge = 299.4 (19.4 px BELOW P*).
       Consumer share ≈ 76%, producer share ≈ 24%  → burden on consumers.

     FLAT demand (D_elastic ∩ S_taxed):
       0.25x + 185 = −0.8x + 504 → x = 303.8 (Qt), Pc(screen y) = 261.0
       Pc is only 19 px above P*.  Pp = 341.0 (61 px below P*).
       Consumer share ≈ 24%, producer share ≈ 76%  → burden on producers.

   So the SAME tax lands on the consumer in the inelastic-D market and on the
   producer in the elastic-D market: "the burden follows the less elastic side."
   The card quotes 87/36; the engine reproduces the SAME direction and a clean
   symmetric 76/24 split (the exact split is a free parameter of the chosen
   slopes — the teaching is the direction, which is exact here).

   The post-tax price levels (Pc / Pp) are exposed as named points and as quiet
   horizontal reference lines so a view can bracket the consumer/producer wedges.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';
  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before elasticityRegimes family');
    return;
  }

  // ── Pivot anchor (screen) ──────────────────────────────────────────────────
  var PX = 380;   // pivot Q*
  var PY = 280;   // pivot P* (screen y)
  function cFor(m) { return PY - m * PX; }   // intercept through the pivot

  // ── Demand slopes (positive screen slope) ─────────────────────────────────
  var D_UNIT_M = 0.80,  D_UNIT_C = cFor(D_UNIT_M);   // −24
  var D_INEL_M = 2.50,  D_INEL_C = cFor(D_INEL_M);   // −670 (steep)
  var D_ELAS_M = 0.25,  D_ELAS_C = cFor(D_ELAS_M);   // +185 (flat)

  // ── Supply slopes (negative screen slope) ─────────────────────────────────
  var S_UNIT_M = -0.80, S_UNIT_C = cFor(S_UNIT_M);   // 584
  var S_INEL_M = -2.50, S_INEL_C = cFor(S_INEL_M);   // 1230 (steep)
  var S_ELAS_M = -0.25, S_ELAS_C = cFor(S_ELAS_M);   // 375  (flat)

  // ── Tax apparatus ──────────────────────────────────────────────────────────
  // Specific tax: S shifts up in econ by an 80-px screen wedge (smaller c).
  var TAX_DY   = 80;                 // screen-px wedge between S and S_taxed
  var S_TAX_C  = S_UNIT_C - TAX_DY;  // 504

  function inter(m1, c1, m2, c2) { var x = (c2 - c1) / (m1 - m2); return { x: x, y: m1 * x + c1 }; }

  // Post-tax equilibria (D ∩ S_taxed) for the two incidence panels.
  var STEEP = inter(D_INEL_M, D_INEL_C, S_UNIT_M, S_TAX_C); // {x:355.8, y:219.4}
  var FLAT  = inter(D_ELAS_M, D_ELAS_C, S_UNIT_M, S_TAX_C); // {x:303.8, y:261.0}

  var STEEP_QT = STEEP.x, STEEP_PC = STEEP.y, STEEP_PP = STEEP_PC + TAX_DY; // 299.4
  var FLAT_QT  = FLAT.x,  FLAT_PC  = FLAT.y,  FLAT_PP  = FLAT_PC + TAX_DY;  // 341.0

  API.register('elasticityRegimes', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },

    axes: {
      xLabel: 'Q', xSub: 'quantity',
      yLabel: 'P', ySub: 'price'
    },

    anchors: [],

    // ── Baseline curves ──────────────────────────────────────────────────────
    // All variants are `optional` so the base view (no show:[]) is empty of
    // stray lines; each regime/incidence view opts in exactly the curves it
    // needs via show:[…].
    baseline: {
      // ── Demand regimes (all through the pivot 380,280) ─────────────────────
      D_unit:          { kind: 'linear',     slope: D_UNIT_M, c: D_UNIT_C, optional: true, tone: 'blue',   display: 'D' },
      D_inelastic:     { kind: 'linear',     slope: D_INEL_M, c: D_INEL_C, optional: true, tone: 'blue',   display: 'D (inelastic)' },
      D_elastic:       { kind: 'linear',     slope: D_ELAS_M, c: D_ELAS_C, optional: true, tone: 'blue',   display: 'D (elastic)' },
      D_perfInelastic: { kind: 'vertical',   x: PX,                        optional: true, tone: 'blue',   display: 'D (PED = 0)' },
      D_perfElastic:   { kind: 'horizontal', y: PY,                        optional: true, tone: 'blue',   display: 'D (PED = ∞)' },

      // ── Supply regimes (all through the pivot 380,280) ─────────────────────
      S_unit:          { kind: 'linear',     slope: S_UNIT_M, c: S_UNIT_C, optional: true, tone: 'rose',   display: 'S' },
      S_inelastic:     { kind: 'linear',     slope: S_INEL_M, c: S_INEL_C, optional: true, tone: 'rose',   display: 'S (inelastic)' },
      S_elastic:       { kind: 'linear',     slope: S_ELAS_M, c: S_ELAS_C, optional: true, tone: 'rose',   display: 'S (elastic)' },
      S_perfInelastic: { kind: 'vertical',   x: PX,                        optional: true, tone: 'rose',   display: 'S (PES = 0)' },
      S_perfElastic:   { kind: 'horizontal', y: PY,                        optional: true, tone: 'rose',   display: 'S (PES = ∞)' },

      // ── Tax-incidence apparatus ────────────────────────────────────────────
      // Plain supply (= S_unit geometry, but a distinct id so a tax view can
      // show S alongside the tax-shifted copy without colliding with the PES
      // regime ids). Pair with D_inelastic (steep) or D_elastic (flat).
      S:       { kind: 'linear', slope: S_UNIT_M, c: S_UNIT_C, optional: true, tone: 'rose',  display: 'S' },
      // Specific tax: parallel copy shifted up in econ by an 80-px wedge.
      S_taxed: { kind: 'linear', slope: S_UNIT_M, c: S_TAX_C,  optional: true, tone: 'rose',  display: 'S+tax' },

      // Quiet horizontal price levels bounding the consumer/producer wedges.
      // No display label — the Pc/Pp named points label these levels instead.
      PcSteepLine: { kind: 'horizontal', y: STEEP_PC, optional: true, tone: 'blue',  display: '' },
      PpSteepLine: { kind: 'horizontal', y: STEEP_PP, optional: true, tone: 'rose',  display: '' },
      PcFlatLine:  { kind: 'horizontal', y: FLAT_PC,  optional: true, tone: 'blue',  display: '' },
      PpFlatLine:  { kind: 'horizontal', y: FLAT_PP,  optional: true, tone: 'rose',  display: '' },
      // Pre-tax price reference (P*) — shared by both incidence panels.
      P0Line:      { kind: 'horizontal', y: PY,        optional: true, tone: 'slate', display: '' }
    },

    // ── Named points ────────────────────────────────────────────────────────
    points: {
      // Pivot equilibrium — resolves on whichever D/S pair a view shows. Use the
      // inline-point form in a regime view, or one of these for the tax panels.
      E0:       { at: [PX, PY], label: 'E₀', tone: 'slate', pLabel: 'P₀', yLabel: 'Q₀' },

      // ── Steep-D (inelastic) tax panel ──────────────────────────────────────
      // Et: post-tax equilibrium = D_inelastic ∩ S_taxed (engine-resolved).
      Et_steep: { on: ['D_inelastic', 'S_taxed'], label: 'Eₜ', tone: 'rose' },
      // Pc: price consumers pay after tax (above P₀). Pp: price producers keep.
      Pc_steep: { at: [STEEP_QT, STEEP_PC], label: 'Pc', tone: 'blue' },
      Pp_steep: { at: [STEEP_QT, STEEP_PP], label: 'Pp', tone: 'rose' },
      Qt_steep: { at: [STEEP_QT, PY],       label: 'Qₜ', tone: 'slate' },

      // ── Flat-D (elastic) tax panel ─────────────────────────────────────────
      Et_flat:  { on: ['D_elastic', 'S_taxed'], label: 'Eₜ', tone: 'rose' },
      Pc_flat:  { at: [FLAT_QT, FLAT_PC],   label: 'Pc', tone: 'blue' },
      Pp_flat:  { at: [FLAT_QT, FLAT_PP],   label: 'Pp', tone: 'rose' },
      Qt_flat:  { at: [FLAT_QT, PY],        label: 'Qₜ', tone: 'slate' }
    }
  });

})();
