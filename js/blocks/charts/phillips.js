/* js/blocks/charts/phillips.js
   ───────────────────────────────────────────────────────────────────────────
   Phillips-curve chart family for the declarative econ-diagram engine.

   A SECOND reference family (after adas) that exercises the new engine
   primitives the spec calls for:
     • a LINEAR short-run Phillips curve (SRPC, downward-sloping)
     • a VERTICAL long-run Phillips curve (LRPC at the NAIRU)
     • a PARALLEL SHIFT of the SRPC (rising inflation expectations → stagflation)
     • named POINTS computed by curve intersection, recomputed per view's shifts
     • a multi-view A→B→C Friedman/Phelps walk with MOVEMENT ARROWS

   Axes: x = unemployment rate, y = inflation rate. As with the other engine
   families, curves live directly in screen/plot coordinates (y grows DOWN on
   screen — a higher inflation rate sits HIGHER on the chart, i.e. smaller y).

   Registers via window.ECONOS_ECON_DIAGRAM.register('phillips', { … }).
   Loads via <script defer> AFTER econ-diagram.js in every shell.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';
  var API = window.ECONOS_ECON_DIAGRAM;
  if (!API || !API.register) {
    if (window.console) console.warn('[econDiagram] engine not loaded before phillips family');
    return;
  }

  // Plot box matches the adas family's proportions for visual consistency.
  // x in [80,680] = unemployment; y in [40,520] = inflation (smaller y = higher).
  // SRPC0: downward sloping line. Pick slope/c so it crosses the NAIRU
  // (x = 380, the LRPC) at y = 305 (mid-chart, the "expected inflation" anchor).
  //   y = slope*x + c, slope = -0.55, through (380,305): c = 305 + 0.55*380 = 514.
  // SRPC at low unemployment (x=200) → y = 514 - 110 = 404? No — recompute:
  //   y(200) = -0.55*200 + 514 = 404 (lower on screen = lower inflation) — but
  //   low unemployment should mean HIGH inflation (small y). Flip: a downward
  //   SRPC in (unemployment, inflation) space has NEGATIVE slope in econ terms,
  //   which in screen space (y down) is POSITIVE slope. Use slope +0.55.
  //   Through (380,305): c = 305 - 0.55*380 = 96.
  var SLOPE = 0.55;
  var NAIRU_X = 380;
  var ANCHOR_Y = 305;
  var C0 = ANCHOR_Y - SLOPE * NAIRU_X; // 96

  API.register('phillips', {
    viewBox: { w: 780, h: 580 },
    plot:    { xMin: 80, xMax: 680, yMin: 40, yMax: 520 },
    axes: {
      xLabel: 'U', xSub: 'unemployment %',
      yLabel: 'π', ySub: 'inflation %'
    },
    anchors: [{ kind: 'vertical', x: NAIRU_X, label: 'NAIRU', tone: 'slate' }],
    baseline: {
      // Vertical long-run Phillips curve at the NAIRU.
      LRPC: { kind: 'vertical', x: NAIRU_X, tone: 'green', display: 'LRPC' },
      // Short-run Phillips curve (linear, upward in screen space).
      SRPC: { kind: 'linear', slope: SLOPE, c: C0, tone: 'blue', display: 'SRPC₀' }
    },
    // Named points the views reference. Each is recomputed with the view's
    // shifts when rendered.
    points: {
      // A: starting point — SRPC0 ∩ LRPC (on the long-run equilibrium).
      A: { on: ['SRPC', 'LRPC'], label: 'A', tone: 'blue' },
      // B: short-run boom — SRPC shifted is read at a lower unemployment x.
      B: { onCurve: 'SRPC', x: 240, label: 'B', tone: 'amber' },
      // C: new long-run equilibrium after expectations adjust (SRPC ∩ LRPC,
      // with the SRPC parallel-shifted up — supplied by the view's shifts).
      C: { on: ['SRPC', 'LRPC'], label: 'C', tone: 'rose' },
      // S: 1970s stagflation — high unemployment AND high inflation. Read on
      // the SRPC at a higher-than-NAIRU unemployment (x = 480 > NAIRU_X 380).
      // Used in the canonical stagflation view: shifts:{SRPC:170} pushes the
      // curve UP, so onCurve SRPC at x=480 lands at higher inflation AND
      // higher unemployment than A — the supply-shock equilibrium.
      S: { onCurve: 'SRPC', x: 480, label: 'S', tone: 'rose' }
    },
    equilibrium: { from: ['SRPC', 'LRPC'], baseLabel: 'A' }
  });

})();
