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

  /* Numerically solve MC(Q) = MR(Q) by scanning for the sign change of
     (MC − MR) on the rising branch of MC, then linearly interpolating.
     Returns the Q at the profit-maximising crossing, or null. */
  function solveCross(fA, fB, qMin, qMax) {
    var steps = 2000, prevQ = qMin, prevD = fA(qMin) - fB(qMin), best = null;
    for (var i = 1; i <= steps; i++) {
      var q = qMin + (qMax - qMin) * (i / steps);
      var d = fA(q) - fB(q);
      if (prevD <= 0 && d > 0) {                       // MC rises through MR
        best = prevQ + (q - prevQ) * (-prevD) / (d - prevD);
      } else if (best == null && prevD >= 0 && d < 0) { // fallback: any cross
        best = prevQ + (q - prevQ) * (prevD) / (prevD - d);
      }
      prevQ = q; prevD = d;
    }
    return best;
  }

  /* Full short-run firm diagram: cost curves + revenue (AR/MR) with the
     profit-maximising output (MC=MR) solved, the price read up to AR, and
     the supernormal-profit / loss rectangle shaded. Demand is either
     { type:'linear', a, b }  → AR = a − bQ, MR = a − 2bQ  (downward), or
     { type:'horizontal', price } → AR = MR = price (a price-taker).
     Specs stay pure data; the geometry is derived from the model here. */
  function costRevenue(opts) {
    opts = opts || {};
    var fc = opts.fc != null ? opts.fc : 200;
    var vc = opts.vc || [10, -0.15, 0.00125];
    var qAxis = opts.qMax != null ? opts.qMax : 130;
    var yAxis = opts.yMax != null ? opts.yMax : 26;
    var qMin = opts.qMin != null ? opts.qMin : 16;
    var qMax = opts.qSampleMax != null ? opts.qSampleMax : qAxis - 2;
    var n = opts.samples != null ? opts.samples : 60;
    var which = opts.curves || ['MC', 'AC'];
    var dem = opts.demand || { type: 'linear', a: 22, b: 0.1 };

    var M = makeModel(fc, vc);
    var fnFor = { MC: M.mc, AVC: M.avc, AC: M.ac, AFC: M.afc };

    var ar = dem.type === 'horizontal'
      ? function () { return dem.price; }
      : function (q) { return dem.a - dem.b * q; };
    var mr = dem.type === 'horizontal'
      ? ar
      : function (q) { return dem.a - 2 * dem.b * q; };
    var horizontal = dem.type === 'horizontal';

    // ── Cost curves ──
    var labelDy = { MC: -4, AC: -6, AVC: 8, AFC: 10 };
    var curves = which.map(function (id) {
      var d = samplePath(fnFor[id], qMin, qMax, qAxis, yAxis, n);
      var c = {
        id: id, d: d, tone: CURVE_TONE[id] || 'slate',
        label: CURVE_LABEL[id] || id, strokeWidth: id === 'MC' ? 2.8 : 2.2,
        labelDx: 6, labelDy: labelDy[id] != null ? labelDy[id] : 0, anchor: 'start'
      };
      if (id === 'AFC') c.dashed = '5 4';
      return c;
    }).filter(function (c) { return c.d; });

    // ── Revenue curves ── (ends kept inside the stage so the right-hand
    // labels never spill off the SVG; AR/MR are straight, so 2 samples.)
    var rightCap = qAxis * 0.90;
    var arEnd = horizontal ? qMax : Math.min(rightCap, dem.a / dem.b - 1);
    var mrEnd = horizontal ? qMax : Math.min(rightCap, dem.a / (2 * dem.b));
    curves.push({
      id: 'AR', d: samplePath(ar, qMin, arEnd, qAxis, yAxis, 2),
      tone: 'green', label: horizontal ? 'AR = MR = P' : 'AR (D)',
      strokeWidth: 2.4, labelDx: -4, labelDy: -8, anchor: 'end'
    });
    if (!horizontal) {
      curves.push({
        id: 'MR', d: samplePath(mr, qMin, mrEnd, qAxis, yAxis, 2),
        tone: 'purple', label: 'MR', strokeWidth: 2.2, labelDx: -4, labelDy: -8, anchor: 'end'
      });
    }
    curves = curves.filter(function (c) { return c.d; });

    // ── Profit-maximising output (MC = MR) ──
    var qStar = solveCross(M.mc, mr, qMin, qMax);
    var points = [], polygons = [], texts = [];
    var have = {}; which.forEach(function (id) { have[id] = true; });

    if (qStar != null) {
      var pStar = ar(qStar), acStar = M.ac(qStar), mcStar = M.mc(qStar);
      var nx = qStar / qAxis;
      var profit = pStar > acStar;

      // Dashed guide lines to the axes (drawn behind via low z = first curves
      // would clip; use thin slate dashed shapes registered without labels).
      curves.unshift({
        id: '_qline', shape: { type: 'vertical', x: nx, from: 0, to: Math.max(pStar, acStar) / yAxis },
        tone: 'slate', strokeWidth: 1.2, dashed: '4 4'
      });
      curves.unshift({
        id: '_pline', shape: { type: 'horizontal', y: pStar / yAxis, from: 0, to: nx },
        tone: 'slate', strokeWidth: 1.2, dashed: '4 4'
      });

      // Supernormal-profit (or loss) rectangle between P* and AC* over 0..Q*.
      polygons.push({
        points: [[0, acStar / yAxis], [nx, acStar / yAxis], [nx, pStar / yAxis], [0, pStar / yAxis]],
        tone: profit ? 'green' : 'rose', opacity: 0.22
      });

      // Key marked points — engine SOLVES / SNAPS each onto its curve.
      // Price-taker: AR=MR=P, so MC=MR and P* are the SAME point (one dot).
      // Downward demand: MC=MR sits below the price read up to AR (two dots).
      if (horizontal) {
        points.push({
          intersection: { curves: ['MC', 'AR'], near: [nx, pStar / yAxis] },
          tone: 'green', radius: 4.5, label: 'MC=MR=P', labelDx: 8, labelDy: -8, anchor: 'start'
        });
      } else {
        points.push({
          intersection: { curves: ['MC', 'MR'], near: [nx, mcStar / yAxis] },
          tone: 'slate', radius: 4.5, label: 'MC=MR', labelDx: 7, labelDy: 16, anchor: 'start'
        });
        points.push({
          x: nx, on: 'AR', tone: 'green', radius: 4.5,
          label: 'P*', labelDx: 8, labelDy: -8, anchor: 'start'
        });
      }
      if (have.AC) {
        points.push({ x: nx, on: 'AC', tone: 'blue', radius: 4 });
      }
      texts.push({ x: nx, y: -0.055, text: 'Q*', tone: 'slate', bold: true, anchor: 'middle' });
      if (profit) {
        texts.push({ x: nx / 2, y: (pStar + acStar) / 2 / yAxis, text: 'Profit', tone: 'green', bold: true, anchor: 'middle' });
      }
    }

    // min-AC is OFF by default here: in many calibrations the profit-max
    // output sits very close to min-AC, so the dots would collide. Turn on
    // only when the diagram is specifically about productive efficiency.
    if (opts.markMinAC === true && have.MC && have.AC) {
      points.push({
        intersection: { curves: ['MC', 'AC'], near: [0.45, 0.45] },
        tone: 'blue', radius: 3.5, label: 'min AC', labelDx: -8, labelDy: 16, anchor: 'end'
      });
    }

    return {
      width: opts.width || 740,
      height: opts.height || 400,
      chartArea: opts.chartArea || { x: 58, y: 26, width: 648, height: 320 },
      className: opts.className || 'firm-cost-revenue-svg',
      background: '#FFFFFF',
      axes: opts.axes || { x: { label: 'Output (Q)' }, y: { label: '£ per unit' } },
      polygons: polygons,
      curves: curves,
      points: points,
      texts: texts
    };
  }

  window.ECONOS_FIRM = {
    costCurves: costCurves,
    costRevenue: costRevenue,
    totalCost: totalCost,
    makeModel: makeModel,
    samplePath: samplePath,
    solveCross: solveCross
  };

  /* Total-cost diagram: TFC (horizontal), TVC (the S-shaped cubic from the
     origin) and TC = TFC + TVC (the same S shifted up by TFC). The vertical
     gap between TC and TVC is TFC at every output — marked with a double
     arrow. Layered (tfc-1/2/3) so an interactiveDiagram can reveal TFC →
     +TVC → +TC. Total (not per-unit) £ on the y-axis. */
  function totalCost(opts) {
    opts = opts || {};
    var fc = opts.fc != null ? opts.fc : 40;
    var vc = opts.vc || [25, -1.875, 0.15625];
    var qAxis = opts.qMax != null ? opts.qMax : 9;
    var qMax = opts.qSampleMax != null ? opts.qSampleMax : 8;
    var n = opts.samples != null ? opts.samples : 60;
    var M = makeModel(fc, vc);
    var tc = function (q) { return fc + M.vc(q); };
    var yAxis = opts.yMax != null ? opts.yMax : Math.ceil((tc(qMax) * 1.1) / 20) * 20;
    var gapQ = opts.gapAtQ != null ? opts.gapAtQ : qMax * 0.55;

    var curves = [
      { id: 'TFC', shape: { type: 'horizontal', y: fc / yAxis, from: 0, to: qMax / qAxis },
        tone: 'green', label: 'TFC', strokeWidth: 2.2, labelDx: 6, labelDy: 0, anchor: 'start',
        layer: 'tfc-1' },
      { id: 'TVC', d: samplePath(M.vc, 0, qMax, qAxis, yAxis, n),
        tone: 'amber', label: 'TVC', strokeWidth: 2.6, labelDx: 6, labelDy: 4, anchor: 'start',
        layer: 'tfc-2' },
      { id: 'TC', d: samplePath(tc, 0, qMax, qAxis, yAxis, n),
        tone: 'blue', label: 'TC', strokeWidth: 2.6, labelDx: 6, labelDy: -4, anchor: 'start',
        layer: 'tfc-3' }
    ];

    // The TFC gap: a double-headed arrow from TVC up to TC at gapQ.
    var gx = gapQ / qAxis, tvcY = M.vc(gapQ) / yAxis, tcY = tc(gapQ) / yAxis;
    var arrows = [{
      x1: gx, y1: tvcY, x2: gx, y2: tcY, tone: 'red', strokeWidth: 1.8,
      markerStart: 'econos-arrow-red', markerEnd: 'econos-arrow-red', buffer: 0, layer: 'tfc-3'
    }];
    var texts = [{
      x: gx - 0.012, y: (tvcY + tcY) / 2, text: 'TFC', tone: 'red', bold: true,
      anchor: 'end', layer: 'tfc-3'
    }];

    return {
      width: opts.width || 720,
      height: opts.height || 380,
      chartArea: opts.chartArea || { x: 56, y: 24, width: 632, height: 300 },
      className: opts.className || 'firm-total-cost-svg',
      background: '#FFFFFF',
      axes: opts.axes || { x: { label: 'Output' }, y: { label: 'Costs (£)' } },
      layers: ['tfc-1', 'tfc-2', 'tfc-3'],
      curves: curves,
      arrows: arrows,
      texts: texts
    };
  }

  window.ECONOS_FIRM.totalCost = totalCost;
})();
