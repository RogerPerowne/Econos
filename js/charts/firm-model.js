/* ============================================================
   ECONOS – Firm cost/revenue model → chart-engine spec builder.

   The accuracy upgrade learnt from the standalone "Marco's Pizzeria"
   lesson (docs/reference/marcos-pizzeria.html): instead of hand-plotting
   cost curves point-by-point (which lets MC drift off the minima of AVC
   and AC), declare the economics ONCE as a cubic cost function and DERIVE
   every curve from it. Because MC is the exact derivative of total cost,
   the textbook geometry is then guaranteed, not eyeballed:

     VC(Q)  = b1·Q + b2·Q² + b3·Q³        (variable cost)
     TC(Q)  = FC + VC(Q)
     MC(Q)  = b1 + 2·b2·Q + 3·b3·Q²       (dVC/dQ — the "Nike tick")
     AVC(Q) = b1 + b2·Q + b3·Q²           (VC/Q)
     AFC(Q) = FC / Q                       (falling hyperbola)
     AC(Q)  = AFC(Q) + AVC(Q)

   With Marco's calibration (FC=200, VC=10Q−0.15Q²+0.00125Q³):
     • MC minimum  £4   at Q=40
     • MC = AVC    at Q=60  (the AVC minimum)
     • MC = AC     at Q≈75  (the AC minimum)

   The builder samples each derived curve into a normalised polyline
   (chart space 0..1, y up) and hands the crossings to the chart engine
   as `point.intersection: { curves:[…] }`, so ECONOS_PPF SOLVES where
   MC cuts AVC and AC rather than trusting a typed-in coordinate. Specs
   stay pure data (coefficients + extents) — no JS functions are embedded
   — which keeps them portable for the future platform migration.

   USAGE
     window.ECONOS_MARCOS_COST_SPEC = window.ECONOS_FIRM.costCurves({
       fc: 200,
       vc: [10, -0.15, 0.00125],
       qMax: 120, yMax: 30, qMin: 12,
       curves: ['AFC','AVC','AC','MC'],
       axes: { x:{label:'Output (pizzas/day)'}, y:{label:'£ per unit'} }
     });
   ============================================================ */
(function () {
  'use strict';

  // Default colour family per curve — consistent across every firm
  // diagram on the site so students re-read the same curve the same way.
  var CURVE_TONE = { MC: 'rose', AVC: 'amber', AC: 'blue', AFC: 'slate', ATC: 'blue' };
  var CURVE_LABEL = { MC: 'MC', AVC: 'AVC', AC: 'AC', AFC: 'AFC', ATC: 'ATC' };

  function round(n, dp) { var f = Math.pow(10, dp == null ? 4 : dp); return Math.round(n * f) / f; }

  /* Evaluate the four derived cost functions from the cubic VC model.
     vc coefficients are [b1, b2, b3] for Q, Q², Q³. */
  function makeModel(fc, vc) {
    var b1 = vc[0] || 0, b2 = vc[1] || 0, b3 = vc[2] || 0;
    return {
      vc:  function (q) { return b1 * q + b2 * q * q + b3 * q * q * q; },
      mc:  function (q) { return b1 + 2 * b2 * q + 3 * b3 * q * q; },
      avc: function (q) { return q > 0 ? b1 + b2 * q + b3 * q * q : NaN; },
      afc: function (q) { return q > 0 ? fc / q : NaN; },
      ac:  function (q) { return q > 0 ? fc / q + (b1 + b2 * q + b3 * q * q) : NaN; }
    };
  }

  /* Sample fn(Q) over [qMin..qMax] into a normalised polyline path
     ("M x,y L x,y …") in chart space, where x = Q/qAxis and
     y = £/yAxis. Points whose value falls outside [0, yAxis] are
     clipped at the sample level so an off-stage tail never distorts
     the engine's bounds checks. */
  function samplePath(fn, qMin, qMax, qAxis, yAxis, n) {
    var pts = [];
    for (var i = 0; i <= n; i++) {
      var q = qMin + (qMax - qMin) * (i / n);
      var v = fn(q);
      if (!isFinite(v)) continue;
      var x = q / qAxis;
      var y = v / yAxis;
      if (y < 0 || y > 1) continue;            // keep within the stage
      pts.push(round(x, 4) + ',' + round(y, 4));
    }
    if (pts.length < 2) return null;
    return 'M ' + pts.join(' L ');
  }

  /* Build a full ECONOS_PPF spec for a short-run cost-curve family.
     Returns a plain spec object (pure data) ready for ECONOS_PPF.render. */
  function costCurves(opts) {
    opts = opts || {};
    var fc = opts.fc != null ? opts.fc : 200;
    var vc = opts.vc || [10, -0.15, 0.00125];
    var qAxis = opts.qMax != null ? opts.qMax : 120;
    var yAxis = opts.yMax != null ? opts.yMax : 30;
    var qMin = opts.qMin != null ? opts.qMin : 12;
    var qMax = opts.qSampleMax != null ? opts.qSampleMax : qAxis - 2;
    var n = opts.samples != null ? opts.samples : 56;
    var which = opts.curves || ['AFC', 'AVC', 'AC', 'MC'];

    var M = makeModel(fc, vc);
    var fnFor = { MC: M.mc, AVC: M.avc, AC: M.ac, AFC: M.afc };

    // Curve label x-anchors live at the right edge; nudge each vertically
    // so the four right-hand labels never collide.
    var labelDy = { MC: -4, AC: -6, AVC: 8, AFC: 10 };

    var curves = which.map(function (id) {
      var d = samplePath(fnFor[id], qMin, qMax, qAxis, yAxis, n);
      var c = {
        id: id,
        d: d,
        tone: CURVE_TONE[id] || 'slate',
        label: CURVE_LABEL[id] || id,
        strokeWidth: id === 'MC' ? 2.8 : 2.2,
        labelDx: 6,
        labelDy: labelDy[id] != null ? labelDy[id] : 0,
        anchor: 'start'
      };
      if (id === 'AFC') c.dashed = '5 4';
      return c;
    }).filter(function (c) { return c.d; });

    // Solved crossings: MC cuts AVC at min-AVC, MC cuts AC at min-AC.
    // `near` hints in chart space steer the solver to the right hit.
    var points = [];
    var have = {};
    which.forEach(function (id) { have[id] = true; });

    if (opts.markCrossings !== false && have.MC && have.AVC) {
      points.push({
        intersection: { curves: ['MC', 'AVC'], near: [0.5, 0.19] },
        tone: 'amber', radius: 4.5,
        label: 'min AVC', labelDx: -10, labelDy: 6, anchor: 'end'
      });
    }
    if (opts.markCrossings !== false && have.MC && have.AC) {
      points.push({
        intersection: { curves: ['MC', 'AC'], near: [0.63, 0.28] },
        tone: 'blue', radius: 4.5,
        label: 'min AC', labelDx: 8, labelDy: -10, anchor: 'start'
      });
    }

    return {
      width: opts.width || 720,
      height: opts.height || 380,
      chartArea: opts.chartArea || { x: 58, y: 26, width: 628, height: 300 },
      className: opts.className || 'firm-cost-curves-svg',
      background: '#FFFFFF',
      axes: opts.axes || { x: { label: 'Output (Q)' }, y: { label: '£ per unit' } },
      curves: curves,
      points: points,
      texts: opts.texts || []
    };
  }

  window.ECONOS_FIRM = {
    costCurves: costCurves,
    makeModel: makeModel,
    samplePath: samplePath
  };
})();
