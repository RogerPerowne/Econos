/* js/blocks/charts/keynesian-as.js
   ───────────────────────────────────────────────────────────────────────────
   Keynesian AS / Classical-vs-Keynesian chart family for the declarative
   econ-diagram engine.

   Registers via window.ECONOS_ECON_DIAGRAM.register('keynesianAS', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.

   ── PURPOSE ────────────────────────────────────────────────────────────────
   Supports the two-views-of-LRAS teaching (Edexcel A Theme 2, card
   'lras-curve'): the CLASSICAL view (LRAS vertical at full-employment output
   Yf) versus the KEYNESIAN view (the reverse-L / inverted-L shape — perfectly
   elastic / horizontal where there is spare capacity, curving upward through an
   intermediate range, then near-VERTICAL as the economy approaches Yf). The
   family also drives the "spare capacity vs near-Yf" demonstration: the SAME
   rightward shift in AD raises real output a LOT when AD sits on the flat range,
   but mostly raises the price level once AD sits on the steep tail near Yf.

   ── SCREEN-SPACE CONVENTION ────────────────────────────────────────────────
   Axes: x = Y (real output), y = P (price level). Same as the 'adas' family.
   Screen space: y grows DOWN, so a HIGHER price level has a SMALLER y. An
   econ "downward-sloping" AD therefore has a POSITIVE screen slope (as Y rises,
   the screen y rises i.e. price falls), exactly like Demand in supplyDemand.js.

   Plot box [80–680, 40–520]. Full-employment output Yf sits at x = 540, a
   little right of centre, leaving the flat Keynesian range room on the left and
   a labelling margin on the right.

   ── CURVES ─────────────────────────────────────────────────────────────────
   AD          — linear, downward-sloping in econ → POSITIVE screen slope
                 (m = 0.62). Shiftable left/right via dx. Baseline c chosen so
                 the baseline AD crosses BOTH the Keynesian curve (mid, rising
                 range) and the Classical vertical at sensible, mid-plot prices.
   ClassicalAS — vertical at Yf = 540 (the classical/long-run LRAS: output is
                 capacity-determined, independent of the price level).
   KeynesianAS — kind:'curve' reverse-L sampled points: flat (perfectly
                 elastic) at low output on the left, curving upward through the
                 intermediate range, then steeply rising (near-vertical) as it
                 approaches Yf at x = 540. tone slate (dark supply curve).

   ── AD GEOMETRY (screen) ───────────────────────────────────────────────────
   AD: y = 0.62·x + c.  Baseline c = 130.
     AD(540) = 0.62·540 + 130 = 464.8   → Classical equilibrium price (mid-plot).
     AD ∩ KeynesianAS ≈ (428, 395)       → Keynesian equilibrium in the rising
                                            range (numerically by the engine).
   Shift algebra (engine: shiftedC = c − slope·dx):
     dx > 0 shifts AD RIGHT (c falls → curve moves down-right in screen space).

   ── KEYNESIAN CURVE SAMPLE POINTS (screen x = Y, y = P, y grows DOWN) ───────
   Flat at y ≈ 450 (low price) for x in [80, 260]; bends upward (y falls = P
   rises) through [260, 490]; then a steep near-vertical tail [490, 540] that
   piles up against Yf. Catmull-rom through these gives a smooth flat→rising→
   steep curve with NO kinks. The tail's last samples crowd x toward 540 so the
   curve reads as "vertical-ish" near Yf without ever crossing it.

   ── "SPARE CAPACITY vs NEAR-Yf" DEMONSTRATION (AD shifts on KeynesianAS) ────
   Starting from baseline AD (c = 130) and applying dx:
     dx = −150 → AD ∩ Keyn ≈ (344, 436)  (deep spare capacity, flat range)
     dx =  −30 → AD ∩ Keyn ≈ (415, 406)  (ΔY ≈ +71, ΔP small — output rises a lot)
     dx =  +90 → AD ∩ Keyn ≈ (462, 361)  (ΔY ≈ +47 shrinking, ΔP ≈ +45 growing)
   i.e. equal AD shifts buy ever-less extra output and ever-more inflation as the
   economy climbs the steepening curve toward Yf — the card's key evaluation.

   The engine resolves every equilibrium (AD ∩ KeynesianAS, AD ∩ ClassicalAS)
   numerically per view shift, so no pixel coordinates are hardcoded in points.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';
  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before keynesianAS family');
    return;
  }

  // ── Full-employment output (screen x) ─────────────────────────────────────
  var YF_X = 540;

  // ── AD (linear, positive screen slope = downward-sloping in econ) ─────────
  var AD_SLOPE = 0.62;
  var AD_C     = 130;   // AD(540) = 0.62·540 + 130 = 464.8 (classical eq price)

  // ── Keynesian reverse-L sample points (screen space) ──────────────────────
  // Flat → rising → near-vertical tail approaching Yf (x = 540). Monotonic in x.
  var KEYN_POINTS = [
    { x:  80, y: 450 },  // perfectly elastic floor (low P) — deep spare capacity
    { x: 180, y: 450 },
    { x: 260, y: 448 },  // still essentially flat
    { x: 320, y: 442 },  // intermediate range begins to bend up (P rising)
    { x: 370, y: 430 },
    { x: 410, y: 410 },
    { x: 450, y: 378 },
    { x: 490, y: 320 },  // curve steepening
    { x: 515, y: 255 },
    { x: 530, y: 170 },
    { x: 538, y:  90 },  // near-vertical tail piling up against Yf
    { x: 540, y:  60 }   // touches Yf line at the top — capacity ceiling
  ];

  API.register('keynesianAS', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },

    axes: {
      xLabel: 'Y', xSub: 'real output',
      yLabel: 'P', ySub: 'price level'
    },

    // Vertical reference at full-employment output Yf (the capacity ceiling that
    // BOTH the classical vertical and the Keynesian tail sit on).
    anchors: [{ kind: 'vertical', x: YF_X, label: 'Yf', tone: 'slate' }],

    // ── Baseline curves ─────────────────────────────────────────────────────
    baseline: {
      // Aggregate demand — downward-sloping in econ → positive screen slope.
      // Shifts right (dx > 0) / left (dx < 0) to drive both the comparison
      // views and the spare-capacity demonstration.
      AD: {
        kind: 'linear', slope: AD_SLOPE, c: AD_C,
        tone: 'blue', display: 'AD₀'
      },

      // Classical (long-run) AS — vertical at Yf. Output is capacity-determined;
      // the price level cannot raise sustainable output. Opt-in so the Keynesian
      // view can hide it and show only the reverse-L curve instead.
      ClassicalAS: {
        kind: 'vertical', x: YF_X,
        optional: true,
        tone: 'green', display: 'LRAS'
      },

      // Keynesian AS — the reverse-L: flat (perfectly elastic) where there is
      // spare capacity, curving up through the intermediate range, then steeply
      // near-vertical as it approaches Yf. Opt-in so the Classical view can show
      // only the vertical line.
      KeynesianAS: {
        kind: 'curve', points: KEYN_POINTS,
        optional: true,
        tone: 'slate', display: 'AS'
      }
    },

    // ── Named points ──────────────────────────────────────────────────────
    // Both equilibria are resolved by the engine per view (with this view's AD
    // shift applied), so no screen coordinates are hardcoded.
    points: {
      // Classical equilibrium: AD ∩ ClassicalAS (always at Y = Yf; only the
      // price level moves as AD shifts).
      Ec: { on: ['AD', 'ClassicalAS'], label: 'E', tone: 'green' },

      // Keynesian equilibrium: AD ∩ KeynesianAS — lands in the flat range,
      // the rising range, or the steep tail depending on the AD shift.
      Ek: { on: ['AD', 'KeynesianAS'], label: 'E', tone: 'amber' },

      // Spare-capacity demonstration markers. Each resolves AD ∩ KeynesianAS at
      // a DIFFERENT AD shift, so they are placed as INLINE points in the demo
      // view's `points` array (which carries per-state shifts via separate
      // views). Defined here too for reuse: they all sit on AD ∩ KeynesianAS and
      // differ only by the view's shift, so a single name is reused across the
      // demo's stepped views.
      Edemo: { on: ['AD', 'KeynesianAS'], label: 'E', tone: 'amber' }
    }
  });

})();
