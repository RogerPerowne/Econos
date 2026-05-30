/* js/blocks/charts/jcurve.js
   ───────────────────────────────────────────────────────────────────────────
   J-curve (current account) chart family for the declarative econ-diagram
   engine.

   ECONOMICS ──────────────────────────────────────────────────────────────────
   After a currency depreciation the current account (CA) balance follows a
   characteristic J-shaped path:

     1. SHORT-RUN WORSENING  (J's downward stroke)
        Import prices rise immediately in domestic currency; export prices fall
        in foreign currency.  But import *volumes* and export *volumes* are
        sticky — contracts, habits, search frictions.  The Marshall-Lerner
        condition (|PED_X| + |PED_M| > 1) is NOT satisfied in the short run,
        so the CA balance deteriorates after the depreciation.

     2. VOLUME ADJUSTMENT  (J's curved base)
        Over months households and firms respond to price signals.  Import
        volumes fall; export volumes rise.  PED|s improve beyond the M-L
        threshold.  The CA balance stops worsening and begins to recover.

     3. LONG-RUN SURPLUS  (J's upward stroke)
        Once volumes have fully adjusted the competitiveness gain dominates.
        The CA moves into surplus (assuming elasticities are high enough).

   GEOMETRY ───────────────────────────────────────────────────────────────────
   Screen space: x increases RIGHT (time), y increases DOWN.
   The ZERO LINE (CA = 0) sits at y = 280 (middle of the 520-px plot height).
     • y > 280  →  below the zero line on screen  →  CA DEFICIT  (worsening)
     • y < 280  →  above the zero line on screen  →  CA SURPLUS  (improving)

   The J-curve (kind:'fn', shapes.jcurve) spans domain [80, 680].

   Parameter choice: depth=80, rise=180, trough=0.492, base=280.
     a = (depth+rise) × 3.2  =  832
     b = −depth × 3.2        = −256
     u_min = √(−b / 3a)      =  0.320

   Key x-coordinates derived analytically (all inside [80, 680]):
     t = 0   → x =  80   curve starts slightly in deficit (y ≈ 307)
                         (import prices already rising at moment of depr.)
     t = 0.172 → x ≈ 183  LOCAL MAX of screen-y  →  TROUGH of CA balance
                           (worst deficit, y ≈ 335; M-L not yet satisfied)
     t = 0.492 → x ≈ 375  INFLECTION, also the zero crossing (y = 280)
                           (M-L threshold crossed; volumes responding)
     t = 0.812 → x ≈ 567  LOCAL MIN of screen-y  →  PEAK surplus (y ≈ 225)
     t = 1   → x = 680   curve still in surplus (y ≈ 259)

   The zero-crossing-from-above root on the negative-u side is at
   t ≈ −0.063 → x ≈ 42, which is before the domain — so the curve is
   definitively in deficit throughout [80, 375] and in surplus throughout
   [375, 680]; no spurious re-crossings.

   Named points use onCurve/on (not hardcoded pixel positions) so the engine
   recomputes them with any future shift.

   Registers via window.ECONOS_ECON_DIAGRAM.register('jcurve', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before jcurve family');
    return;
  }

  var S = API.shapes; // named shape functions

  // ── Plot-space constants ────────────────────────────────────────────────────
  // Zero line in screen-y. Above this: CA surplus (lower y). Below: CA deficit.
  var ZERO_Y = 280;

  // J-curve fn parameters (see geometry notes at top).
  // depth=80, rise=180 keeps rise/depth = 2.25 < 3.13 so the curve starts in
  // deficit at x=80 (y ≈ 307 > 280). The cubic stays in surplus throughout
  // [375, 680] — no second return to deficit inside the visible domain.
  var JC_X0     = 80;
  var JC_X1     = 680;
  var JC_BASE   = ZERO_Y;  // inflection ≡ zero line
  var JC_DEPTH  = 80;
  var JC_RISE   = 180;
  var JC_TROUGH = 0.492;   // inflection fraction; local max at t ≈ 0.172, min at t ≈ 0.812

  // Pre-computed key x-values for named points (derived analytically above).
  var X_TROUGH   = 183;    // worst CA balance (local screen-y max)
  // X_RECOVERY = 375 — zero crossing; engine resolves via on:['jcurve','zero'] intersection
  var X_PEAK     = 567;    // best CA surplus (local screen-y min)

  // Depreciation-event x (vertical anchor).  Sits just inside the plot so it
  // doesn't overlap the y-axis (plot.xMin = 80).
  var X_T0 = 100;

  API.register('jcurve', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },

    axes: {
      xLabel: 't',  xSub: 'time after depreciation',
      yLabel: 'CA', ySub: 'current account balance'
    },

    // Vertical dashed reference: moment of the depreciation shock.
    anchors: [
      { kind: 'vertical', x: X_T0, label: 't₀', tone: 'slate' }
    ],

    baseline: {
      // ── J-curve of the current account ─────────────────────────────────────
      // kind:'fn' evaluated via the engine's shapes.jcurve. The curve:
      //   starts slightly below ZERO_Y (mild deficit at moment of depreciation),
      //   dips further below ZERO_Y (worsening — M-L not satisfied short run),
      //   passes back through ZERO_Y (inflection ≡ zero crossing),
      //   rises above ZERO_Y (improving — M-L satisfied, volumes adjust),
      //   and stays in surplus through the end of the domain.
      // NO KINK: the engine samples into a polyline with stroke-linejoin=round.
      jcurve: {
        kind:   'fn',
        f: function (x) {
          return S.jcurve(x, {
            x0:     JC_X0,
            x1:     JC_X1,
            base:   JC_BASE,
            depth:  JC_DEPTH,
            rise:   JC_RISE,
            trough: JC_TROUGH
          });
        },
        domain: [JC_X0, JC_X1],
        tone:   'blue',
        display: 'CA'
      },

      // ── Zero line ──────────────────────────────────────────────────────────
      // Horizontal reference at ZERO_Y.  The region BELOW this (higher screen-y)
      // is the CA deficit zone; the region ABOVE (lower screen-y) is surplus.
      zero: {
        kind:    'horizontal',
        y:       ZERO_Y,
        tone:    'slate',
        display: 'CA = 0'
      }
    },

    // ── Named points ────────────────────────────────────────────────────────
    // All resolved by the engine at render time against the live (shifted)
    // curves — no hardcoded pixel positions.
    points: {
      // Trough: worst CA deficit — local screen-y maximum of the J-curve.
      // Analytically at x ≈ 183 (t ≈ 0.172) where dy/du = 0 on the left branch.
      Trough: {
        onCurve: 'jcurve',
        x:       X_TROUGH,
        label:   'Trough',
        tone:    'rose'
      },

      // Recovery: CA returns to balance — intersection of J-curve and zero line.
      // Algebraically the inflection (u = 0) is also the zero crossing (y = base).
      // Using on:[] lets the engine compute this via numerical intersection so
      // any future shift still resolves correctly.
      Recovery: {
        on:    ['jcurve', 'zero'],
        label: 'Recovery',
        tone:  'amber'
      },

      // Peak: best CA surplus — local screen-y minimum.
      // Analytically at x ≈ 567 (t ≈ 0.812).
      Peak: {
        onCurve: 'jcurve',
        x:       X_PEAK,
        label:   'Peak',
        tone:    'green'
      }
    }
  });

})();
