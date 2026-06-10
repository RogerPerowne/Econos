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

    // Optional per-curve reveal layers (parallel to `which`), e.g.
    // ['acf-1','acf-2','acf-3'] for a stepped AFC→AVC→AC interactiveDiagram.
    var layers = Array.isArray(opts.layers) ? opts.layers : null;

    // Optional set of curve ids to render dashed (e.g. ['AVC','AC'] when MC
    // is the focus and the averages are shown as reference lines).
    var dashed = Array.isArray(opts.dashedCurves) ? opts.dashedCurves : [];

    var curves = which.map(function (id, idx) {
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
      if (id === 'AFC' || dashed.indexOf(id) !== -1) c.dashed = '5 4';
      if (layers && layers[idx]) c.layer = layers[idx];
      return c;
    }).filter(function (c) { return c.d; });

    // Solved crossings: MC cuts AVC at min-AVC, MC cuts AC at min-AC.
    // `near` hints in chart space steer the solver to the right hit;
    // crossingsLayer puts the dots on a reveal layer when stepping.
    var points = [];
    var have = {};
    which.forEach(function (id) { have[id] = true; });
    var cLayer = opts.crossingsLayer || null;

    if (opts.markCrossings !== false && have.MC && have.AVC) {
      var pAvc = {
        intersection: { curves: ['MC', 'AVC'], near: opts.nearAVC || [0.5, 0.19] },
        tone: 'amber', radius: 4.5,
        label: 'min AVC', labelDx: -10, labelDy: 6, anchor: 'end'
      };
      if (cLayer) pAvc.layer = cLayer;
      points.push(pAvc);
    }
    if (opts.markCrossings !== false && have.MC && have.AC) {
      var pAc = {
        intersection: { curves: ['MC', 'AC'], near: opts.nearAC || [0.63, 0.28] },
        tone: 'blue', radius: 4.5,
        label: 'min AC', labelDx: 8, labelDy: -10, anchor: 'start'
      };
      if (cLayer) pAc.layer = cLayer;
      points.push(pAc);
    }

    var spec = {
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
    if (layers) spec.layers = layers;
    return spec;
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
      if (Math.abs(pStar - acStar) > 0.01 * yAxis) {
        texts.push({ x: nx / 2, y: (pStar + acStar) / 2 / yAxis,
          text: profit ? 'Profit' : 'Loss', tone: profit ? 'green' : 'rose', bold: true, anchor: 'middle' });
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

  /* Monopoly profit-maximising diagram, built as a 4-step reveal that
     matches the classic construction: the four curves (AC, MC, AR=D, MR)
     are the always-visible base; each step then adds construction marks.
       mp-1  MR = MC crossing (the output decision)
       mp-2  drop to Qₘ on the output axis
       mp-3  up to AR for Pₘ, across to the price axis
       mp-4  AC at Qₘ + the supernormal-profit rectangle
     Demand is linear (a − bQ); MR = a − 2bQ. Everything is derived from
     the cost cubic + demand, with the MC=MR point engine-solved. */
  function monopolyProfitMax(opts) {
    opts = opts || {};
    var fc = opts.fc != null ? opts.fc : 200;
    var vc = opts.vc || [10, -0.15, 0.00125];
    var qAxis = opts.qMax != null ? opts.qMax : 130;
    var yAxis = opts.yMax != null ? opts.yMax : 26;
    var qMin = opts.qMin != null ? opts.qMin : 16;
    var qSamp = opts.qSampleMax != null ? opts.qSampleMax : qAxis - 2;
    var n = opts.samples != null ? opts.samples : 60;
    var dem = opts.demand || { a: 22, b: 0.1 };
    var M = makeModel(fc, vc);
    var ar = function (q) { return dem.a - dem.b * q; };
    var mr = function (q) { return dem.a - 2 * dem.b * q; };
    var rightCap = qAxis * 0.9;
    var arEnd = Math.min(rightCap, dem.a / dem.b - 1);
    var mrEnd = Math.min(rightCap, dem.a / (2 * dem.b));

    // Always-visible base curves.
    var curves = [
      { id: 'AC', d: samplePath(M.ac, qMin, qSamp, qAxis, yAxis, n), tone: 'blue',
        label: 'AC', strokeWidth: 2.2, labelDx: 6, labelDy: -6, anchor: 'start' },
      { id: 'MC', d: samplePath(M.mc, qMin, qSamp, qAxis, yAxis, n), tone: 'rose',
        label: 'MC', strokeWidth: 2.8, labelDx: 6, labelDy: -4, anchor: 'start' },
      { id: 'AR', d: samplePath(ar, qMin, arEnd, qAxis, yAxis, 2), tone: 'green',
        label: 'AR (D)', strokeWidth: 2.4, labelDx: -4, labelDy: -8, anchor: 'end' },
      { id: 'MR', d: samplePath(mr, qMin, mrEnd, qAxis, yAxis, 2), tone: 'amber',
        label: 'MR', strokeWidth: 2.2, labelDx: -4, labelDy: -8, anchor: 'end' }
    ].filter(function (c) { return c.d; });

    var qm = solveCross(M.mc, mr, qMin, qSamp);
    // Four construction groups → reveal layers. Default mp-1..mp-4; callers
    // (e.g. monopolistic competition) can collapse them onto fewer steps by
    // repeating layer names, e.g. ['mcsr-1','mcsr-1','mcsr-2','mcsr-3'].
    var L = opts.groupLayers || ['mp-1', 'mp-2', 'mp-3', 'mp-4'];
    var qLabel = opts.qLabel || 'Qm', pLabel = opts.pLabel || 'Pm';
    var seen = {}, layerList = [];
    L.forEach(function (l) { if (!seen[l]) { seen[l] = 1; layerList.push(l); } });
    var polygons = [], points = [], texts = [];
    if (qm != null) {
      var nx = qm / qAxis, pmY = ar(qm) / yAxis, mcmY = M.mc(qm) / yAxis, acmY = M.ac(qm) / yAxis;
      var profit = ar(qm) >= M.ac(qm);
      // group 0: MR = MC
      points.push({ intersection: { curves: ['MC', 'MR'], near: [nx, mcmY] },
        tone: 'slate', radius: 4.5, label: 'MR = MC', labelDx: 8, labelDy: 15, anchor: 'start', layer: L[0] });
      // group 1: drop to Qm
      curves.push({ id: '_drop', shape: { type: 'vertical', x: nx, from: 0, to: mcmY },
        tone: 'slate', strokeWidth: 1.3, dashed: '3 3', layer: L[1] });
      texts.push({ x: nx, y: -0.05, text: qLabel, tone: 'slate', bold: true, anchor: 'middle', layer: L[1] });
      // group 2: up to AR for P*, across to price axis
      curves.push({ id: '_up', shape: { type: 'vertical', x: nx, from: mcmY, to: pmY },
        tone: 'green', strokeWidth: 1.4, dashed: '4 3', layer: L[2] });
      curves.push({ id: '_pm', shape: { type: 'horizontal', y: pmY, from: 0, to: nx },
        tone: 'green', strokeWidth: 1.4, dashed: '4 3', layer: L[2] });
      points.push({ x: nx, on: 'AR', tone: 'green', radius: 4.5, layer: L[2] });
      texts.push({ x: -0.012, y: pmY, text: pLabel, tone: 'green', bold: true, anchor: 'end', layer: L[2] });
      // group 3: AC at Qm + supernormal-profit / loss rectangle
      polygons.push({ points: [[0, acmY], [nx, acmY], [nx, pmY], [0, pmY]], tone: profit ? 'green' : 'rose', opacity: 0.22, layer: L[3] });
      curves.push({ id: '_ac', shape: { type: 'horizontal', y: acmY, from: 0, to: nx },
        tone: 'purple', strokeWidth: 1.3, dashed: '4 3', layer: L[3] });
      points.push({ x: nx, on: 'AC', tone: 'purple', radius: 4, layer: L[3] });
      texts.push({ x: -0.012, y: acmY, text: 'AC', tone: 'purple', bold: true, anchor: 'end', layer: L[3] });
      texts.push({ x: nx / 2, y: (acmY + pmY) / 2, text: profit ? 'Supernormal profit' : 'Loss', tone: profit ? 'green' : 'rose', bold: true, anchor: 'middle', layer: L[3] });
    }

    return {
      width: opts.width || 740, height: opts.height || 400,
      chartArea: opts.chartArea || { x: 58, y: 26, width: 648, height: 320 },
      className: opts.className || 'firm-monopoly-svg', background: '#FFFFFF',
      axes: opts.axes || { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } },
      layers: layerList,
      polygons: polygons, curves: curves, points: points, texts: texts
    };
  }

  /* Monopoly welfare / deadweight-loss diagram, as a 3-step reveal:
       mw-1  the monopoly outcome (Qₘ, Pₘ — output restricted, P > MC)
       mw-2  the competitive benchmark (Qc, Pc where P = MC)
       mw-3  the deadweight-loss triangle between Qₘ and Qc
     Base curves MC, AR (=D), MR (AC is dropped — the welfare story is
     MC vs demand, so the diagram stays clean). The DWL triangle uses the
     soft-fill + centroid-label shading style from the externality specs.
     Both equilibria are engine-solved (MC=MR for Qₘ, MC=AR for Qc). */
  function monopolyWelfare(opts) {
    opts = opts || {};
    var fc = opts.fc != null ? opts.fc : 320;
    var vc = opts.vc || [10, -0.15, 0.00125];
    var qAxis = opts.qMax != null ? opts.qMax : 130;
    var yAxis = opts.yMax != null ? opts.yMax : 26;
    var qMin = opts.qMin != null ? opts.qMin : 16;
    var qSamp = opts.qSampleMax != null ? opts.qSampleMax : qAxis - 2;
    var n = opts.samples != null ? opts.samples : 60;
    var dem = opts.demand || { a: 22, b: 0.1 };
    var M = makeModel(fc, vc);
    var ar = function (q) { return dem.a - dem.b * q; };
    var mr = function (q) { return dem.a - 2 * dem.b * q; };
    var rightCap = qAxis * 0.9;
    var arEnd = Math.min(rightCap, dem.a / dem.b - 1);
    var mrEnd = Math.min(rightCap, dem.a / (2 * dem.b));

    var curves = [
      { id: 'MC', d: samplePath(M.mc, qMin, qSamp, qAxis, yAxis, n), tone: 'rose',
        label: 'MC', strokeWidth: 2.8, labelDx: 6, labelDy: -4, anchor: 'start' },
      { id: 'AR', d: samplePath(ar, qMin, arEnd, qAxis, yAxis, 2), tone: 'green',
        label: 'AR (D)', strokeWidth: 2.4, labelDx: -4, labelDy: -8, anchor: 'end' },
      { id: 'MR', d: samplePath(mr, qMin, mrEnd, qAxis, yAxis, 2), tone: 'amber',
        label: 'MR', strokeWidth: 2.2, labelDx: -4, labelDy: -8, anchor: 'end' }
    ].filter(function (c) { return c.d; });

    var qm = solveCross(M.mc, mr, qMin, qSamp);
    var qc = solveCross(M.mc, ar, qMin, qSamp);
    var polygons = [], points = [], texts = [];
    if (qm != null && qc != null) {
      var nxm = qm / qAxis, pmY = ar(qm) / yAxis, mcmY = M.mc(qm) / yAxis;
      var nxc = qc / qAxis, pcY = ar(qc) / yAxis;
      // mw-1: monopoly outcome
      curves.push({ id: '_qm', shape: { type: 'vertical', x: nxm, from: 0, to: pmY },
        tone: 'slate', strokeWidth: 1.3, dashed: '3 3', layer: 'mw-1' });
      points.push({ x: nxm, on: 'AR', tone: 'green', radius: 5, layer: 'mw-1' });
      texts.push({ x: nxm, y: -0.05, text: 'Qm', tone: 'slate', bold: true, anchor: 'middle', layer: 'mw-1' });
      texts.push({ x: -0.012, y: pmY, text: 'Pm', tone: 'green', bold: true, anchor: 'end', layer: 'mw-1' });
      // mw-2: competitive benchmark (P = MC)
      curves.push({ id: '_qc', shape: { type: 'vertical', x: nxc, from: 0, to: pcY },
        tone: 'blue', strokeWidth: 1.3, dashed: '3 3', layer: 'mw-2' });
      points.push({ intersection: { curves: ['MC', 'AR'], near: [nxc, pcY] },
        tone: 'blue', radius: 5, label: 'P = MC', labelDx: 9, labelDy: -6, anchor: 'start', layer: 'mw-2' });
      texts.push({ x: nxc, y: -0.05, text: 'Qc', tone: 'blue', bold: true, anchor: 'middle', layer: 'mw-2' });
      texts.push({ x: -0.012, y: pcY, text: 'Pc', tone: 'blue', bold: true, anchor: 'end', layer: 'mw-2' });
      // mw-3: deadweight-loss triangle (Qm,Pm) – (Qm,MC@Qm) – (Qc,Pc)
      polygons.push({ points: [[nxm, pmY], [nxm, mcmY], [nxc, pcY]], fill: '#FCA5A5', opacity: 0.55, layer: 'mw-3' });
      texts.push({ x: (nxm + nxm + nxc) / 3 + 0.02, y: (pmY + mcmY + pcY) / 3, text: 'DWL', tone: 'red', bold: true, anchor: 'middle', layer: 'mw-3' });
    }

    return {
      width: opts.width || 740, height: opts.height || 400,
      chartArea: opts.chartArea || { x: 58, y: 26, width: 648, height: 320 },
      className: opts.className || 'firm-monopoly-welfare-svg', background: '#FFFFFF',
      axes: opts.axes || { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } },
      layers: ['mw-1', 'mw-2', 'mw-3'],
      polygons: polygons, curves: curves, points: points, texts: texts
    };
  }

  window.ECONOS_FIRM = {
    costCurves: costCurves,
    costRevenue: costRevenue,
    totalCost: totalCost,
    monopolyProfitMax: monopolyProfitMax,
    monopolyWelfare: monopolyWelfare,
    makeModel: makeModel,
    samplePath: samplePath,
    solveCross: solveCross
  };

  /* A straight demand line tangent to AC at q=qT. Because MC = AC + Q·AC′,
     the tangent line automatically satisfies MR = MC at qT — exactly the
     monopolistic-competition long-run equilibrium (P = AC, normal profit).
     Returns { ar, mr, a, m } where ar(q)=a+m·q, mr(q)=a+2m·q. */
  function tangentDemand(M, qT) {
    var h = 0.05;
    var m = (M.ac(qT + h) - M.ac(qT - h)) / (2 * h);   // AC′(qT) (negative)
    var a = M.ac(qT) - m * qT;
    return {
      a: a, m: m,
      ar: function (q) { return a + m * q; },
      mr: function (q) { return a + 2 * m * q; }
    };
  }

  /* Monopolistic competition — long-run equilibrium, as an EXCLUSIVE
     3-step reveal (each step is a self-contained sub-diagram; MC and AC are
     the always-on base):
       lr-1  short-run abnormal profit (SR demand, MC=MR, P>AC)
       lr-2  entry shifts the firm's demand left (old SR demand dashed, new
             LR demand solid)
       lr-3  long-run tangency — AR tangent to AC at Q*_LR, P=AC, normal profit
     SR demand is linear; the LR demand is the line tangent to AC at qLR. */
  function monopolisticLongRun(opts) {
    opts = opts || {};
    var fc = opts.fc != null ? opts.fc : 320;
    var vc = opts.vc || [10, -0.15, 0.00125];
    var qAxis = opts.qMax != null ? opts.qMax : 130;
    var yAxis = opts.yMax != null ? opts.yMax : 24;
    var qMin = opts.qMin != null ? opts.qMin : 16;
    var qSamp = opts.qSampleMax != null ? opts.qSampleMax : qAxis - 2;
    var n = opts.samples != null ? opts.samples : 60;
    var dem = opts.srDemand || { a: 20, b: 0.08 };
    var qLR = opts.qLR != null ? opts.qLR : 60;
    var M = makeModel(fc, vc);
    var arSR = function (q) { return dem.a - dem.b * q; };
    var mrSR = function (q) { return dem.a - 2 * dem.b * q; };
    var LR = tangentDemand(M, qLR);
    var cap = qAxis * 0.9;

    // Always-on base.
    var curves = [
      { id: 'MC', d: samplePath(M.mc, qMin, qSamp, qAxis, yAxis, n), tone: 'rose', label: 'MC', strokeWidth: 2.8, labelDx: 6, labelDy: -4, anchor: 'start' },
      { id: 'AC', d: samplePath(M.ac, qMin, qSamp, qAxis, yAxis, n), tone: 'blue', label: 'AC', strokeWidth: 2.2, labelDx: 6, labelDy: -6, anchor: 'start' }
    ];
    var polygons = [], points = [], texts = [];

    function vline(x, y0, y1, tone, dash, layer) {
      return { id: '_v' + curves.length, shape: { type: 'vertical', x: x, from: y0, to: y1 }, tone: tone, strokeWidth: 1.3, dashed: dash, layer: layer };
    }

    // ── lr-1: short-run abnormal profit ──
    var arSRend = Math.min(cap, dem.a / dem.b - 1), mrSRend = Math.min(cap, dem.a / (2 * dem.b));
    curves.push({ id: 'ARsr', d: samplePath(arSR, qMin, arSRend, qAxis, yAxis, 2), tone: 'green', label: 'D (SR)', strokeWidth: 2.4, labelDx: -4, labelDy: -8, anchor: 'end', layer: 'lr-1' });
    curves.push({ id: 'MRsr', d: samplePath(mrSR, qMin, mrSRend, qAxis, yAxis, 2), tone: 'amber', label: 'MR', strokeWidth: 2.0, labelDx: -4, labelDy: -8, anchor: 'end', layer: 'lr-1' });
    var qS = solveCross(M.mc, mrSR, qMin, qSamp);
    if (qS != null) {
      var nxs = qS / qAxis, pS = arSR(qS) / yAxis, acS = M.ac(qS) / yAxis;
      curves.push(vline(nxs, 0, pS, 'slate', '3 3', 'lr-1'));
      polygons.push({ points: [[0, acS], [nxs, acS], [nxs, pS], [0, pS]], tone: 'green', opacity: 0.22, layer: 'lr-1' });
      points.push({ x: nxs, on: 'ARsr', tone: 'green', radius: 4.5, layer: 'lr-1' });
      texts.push({ x: nxs, y: -0.05, text: 'Q₁', tone: 'slate', bold: true, anchor: 'middle', layer: 'lr-1' });
      texts.push({ x: nxs / 2, y: (acS + pS) / 2, text: 'Profit', tone: 'green', bold: true, anchor: 'middle', layer: 'lr-1' });
    }

    // ── lr-2: entry shifts demand left ──
    curves.push({ id: 'ARsr2', d: samplePath(arSR, qMin, arSRend, qAxis, yAxis, 2), tone: 'slate', dashed: '5 4', strokeWidth: 1.8, layer: 'lr-2' });
    var arLRend = Math.min(cap, -LR.a / LR.m - 1), mrLRend = Math.min(cap, -LR.a / (2 * LR.m));
    curves.push({ id: 'ARlr2', d: samplePath(LR.ar, qMin, arLRend, qAxis, yAxis, 2), tone: 'green', label: 'D (LR)', strokeWidth: 2.4, labelDx: -4, labelDy: -8, anchor: 'end', layer: 'lr-2' });
    curves.push({ id: 'MRlr2', d: samplePath(LR.mr, qMin, mrLRend, qAxis, yAxis, 2), tone: 'amber', strokeWidth: 2.0, layer: 'lr-2' });
    texts.push({ x: 0.5, y: 0.9, text: 'Entry shifts demand left →', tone: 'slate', bold: true, anchor: 'middle', layer: 'lr-2' });

    // ── lr-3: long-run tangency (P = AC, normal profit) ──
    curves.push({ id: 'ARlr', d: samplePath(LR.ar, qMin, arLRend, qAxis, yAxis, 2), tone: 'green', label: 'D (LR)', strokeWidth: 2.4, labelDx: -4, labelDy: -8, anchor: 'end', layer: 'lr-3' });
    curves.push({ id: 'MRlr', d: samplePath(LR.mr, qMin, mrLRend, qAxis, yAxis, 2), tone: 'amber', label: 'MR', strokeWidth: 2.0, labelDx: -4, labelDy: 10, anchor: 'end', layer: 'lr-3' });
    var nxl = qLR / qAxis, pL = M.ac(qLR) / yAxis;
    curves.push(vline(nxl, 0, pL, 'slate', '3 3', 'lr-3'));
    points.push({ x: nxl, on: 'AC', tone: 'green', radius: 5, label: 'P = AC', labelDx: 9, labelDy: -8, anchor: 'start', layer: 'lr-3' });
    texts.push({ x: nxl, y: -0.05, text: 'Q*', tone: 'slate', bold: true, anchor: 'middle', layer: 'lr-3' });
    texts.push({ x: 0.5, y: 0.9, text: 'Normal profit (P = AC)', tone: 'green', bold: true, anchor: 'middle', layer: 'lr-3' });

    return {
      width: opts.width || 740, height: opts.height || 400,
      chartArea: opts.chartArea || { x: 58, y: 26, width: 648, height: 320 },
      className: opts.className || 'firm-mc-longrun-svg', background: '#FFFFFF',
      axes: opts.axes || { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } },
      layers: ['lr-1', 'lr-2', 'lr-3'],
      polygons: polygons, curves: curves, points: points, texts: texts
    };
  }

  /* Monopolistic competition — long-run efficiency / excess capacity, as an
     exclusive 2-step reveal (MC, AC, LR demand are the base):
       mce-1  the LR tangency (AR tangent to AC at Q*_LR, P = AC)
       mce-2  + min-AC output (Q_min) and the excess-capacity gap Q*_LR < Q_min */
  function monopolisticEfficiency(opts) {
    opts = opts || {};
    var fc = opts.fc != null ? opts.fc : 320;
    var vc = opts.vc || [10, -0.15, 0.00125];
    var qAxis = opts.qMax != null ? opts.qMax : 130;
    var yAxis = opts.yMax != null ? opts.yMax : 24;
    var qMin = opts.qMin != null ? opts.qMin : 16;
    var qSamp = opts.qSampleMax != null ? opts.qSampleMax : qAxis - 2;
    var n = opts.samples != null ? opts.samples : 60;
    var qLR = opts.qLR != null ? opts.qLR : 60;
    var M = makeModel(fc, vc);
    var LR = tangentDemand(M, qLR);
    var cap = qAxis * 0.9;
    var arLRend = Math.min(cap, -LR.a / LR.m - 1), mrLRend = Math.min(cap, -LR.a / (2 * LR.m));
    var qMinAC = solveCross(M.mc, M.ac, qMin, qSamp); // min-AC where MC=AC

    var curves = [
      { id: 'MC', d: samplePath(M.mc, qMin, qSamp, qAxis, yAxis, n), tone: 'rose', label: 'MC', strokeWidth: 2.8, labelDx: 6, labelDy: -4, anchor: 'start' },
      { id: 'AC', d: samplePath(M.ac, qMin, qSamp, qAxis, yAxis, n), tone: 'blue', label: 'AC', strokeWidth: 2.2, labelDx: 6, labelDy: -6, anchor: 'start' },
      { id: 'AR', d: samplePath(LR.ar, qMin, arLRend, qAxis, yAxis, 2), tone: 'green', label: 'D (LR)', strokeWidth: 2.4, labelDx: -4, labelDy: -8, anchor: 'end' },
      { id: 'MR', d: samplePath(LR.mr, qMin, mrLRend, qAxis, yAxis, 2), tone: 'amber', label: 'MR', strokeWidth: 2.0, labelDx: -4, labelDy: 10, anchor: 'end' }
    ];
    var polygons = [], points = [], texts = [];
    var nxl = qLR / qAxis, pL = M.ac(qLR) / yAxis;
    // mce-1: tangency
    curves.push({ id: '_q1', shape: { type: 'vertical', x: nxl, from: 0, to: pL }, tone: 'slate', strokeWidth: 1.3, dashed: '3 3', layer: 'mce-1' });
    points.push({ x: nxl, on: 'AC', tone: 'green', radius: 5, label: 'P = AC', labelDx: 9, labelDy: -8, anchor: 'start', layer: 'mce-1' });
    texts.push({ x: nxl, y: -0.05, text: 'Q*', tone: 'slate', bold: true, anchor: 'middle', layer: 'mce-1' });
    // mce-2: excess capacity to min AC
    if (qMinAC != null) {
      var nxm = qMinAC / qAxis, acm = M.ac(qMinAC) / yAxis;
      curves.push({ id: '_qmin', shape: { type: 'vertical', x: nxm, from: 0, to: acm }, tone: 'blue', strokeWidth: 1.3, dashed: '3 3', layer: 'mce-2' });
      points.push({ intersection: { curves: ['MC', 'AC'], near: [nxm, acm] }, tone: 'blue', radius: 4.5, label: 'min AC', labelDx: 8, labelDy: -8, anchor: 'start', layer: 'mce-2' });
      texts.push({ x: nxm, y: -0.05, text: 'Q_min', tone: 'blue', bold: true, anchor: 'middle', layer: 'mce-2' });
      // excess-capacity bracket near the x-axis
      polygons.push({ points: [[nxl, 0.04], [nxm, 0.04], [nxm, 0.075], [nxl, 0.075]], tone: 'rose', opacity: 0.3, layer: 'mce-2' });
      texts.push({ x: (nxl + nxm) / 2, y: 0.12, text: 'Excess capacity', tone: 'rose', bold: true, anchor: 'middle', layer: 'mce-2' });
    }

    return {
      width: opts.width || 740, height: opts.height || 400,
      chartArea: opts.chartArea || { x: 58, y: 26, width: 648, height: 320 },
      className: opts.className || 'firm-mc-efficiency-svg', background: '#FFFFFF',
      axes: opts.axes || { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } },
      layers: ['mce-1', 'mce-2'],
      polygons: polygons, curves: curves, points: points, texts: texts
    };
  }

  window.ECONOS_FIRM.monopolisticLongRun = monopolisticLongRun;
  window.ECONOS_FIRM.monopolisticEfficiency = monopolisticEfficiency;
  window.ECONOS_FIRM.tangentDemand = tangentDemand;

  /* Solve fA(q) = fB(q) by scanning for the LAST sign change of (fA−fB).
     Used for downward-curve crossings (AR=MC, AR=AC) where the rising-branch
     solveCross assumption doesn't hold. */
  function solveEq(fA, fB, qMin, qMax) {
    var steps = 3000, prevQ = qMin, prevD = fA(qMin) - fB(qMin), best = null;
    for (var i = 1; i <= steps; i++) {
      var q = qMin + (qMax - qMin) * (i / steps);
      var d = fA(q) - fB(q);
      if ((prevD <= 0 && d > 0) || (prevD >= 0 && d < 0)) {
        best = prevQ + (q - prevQ) * Math.abs(prevD) / (Math.abs(prevD) + Math.abs(d));
      }
      prevQ = q; prevD = d;
    }
    return best;
  }

  /* Natural monopoly — falling AC across the whole market (very high fixed
     cost, low ~flat MC below AC throughout). A 4-step reveal tells the full
     regulation story:
       nm-1  economies of scale (AC falls across the market; MC < AC)
       nm-2  unregulated profit-max (MR=MC → Q₁, P₁, supernormal profit)
       nm-3  allocatively-efficient price P=MC (Q₃) — but P < AC ⇒ loss/subsidy
       nm-4  average-cost pricing P=AC (Q₂) — the firm breaks even
     Cost model: FC large, VC≈linear so MC is ~flat and AC = FC/Q + MC keeps
     falling. Demand linear (a − bQ). */
  function naturalMonopoly(opts) {
    opts = opts || {};
    var fc = opts.fc != null ? opts.fc : 300;
    var vc = opts.vc || [3, 0, 0];
    var qAxis = opts.qMax != null ? opts.qMax : 135;
    var yAxis = opts.yMax != null ? opts.yMax : 16;
    var qMin = opts.qMin != null ? opts.qMin : 30;
    var qSamp = opts.qSampleMax != null ? opts.qSampleMax : qAxis - 4;
    var n = opts.samples != null ? opts.samples : 60;
    var dem = opts.demand || { a: 15, b: 0.1 };
    var M = makeModel(fc, vc);
    var ar = function (q) { return dem.a - dem.b * q; };
    var mr = function (q) { return dem.a - 2 * dem.b * q; };
    var cap = qAxis * 0.92;
    var arEnd = Math.min(cap, dem.a / dem.b - 1), mrEnd = Math.min(cap, dem.a / (2 * dem.b));

    var curves = [
      { id: 'AC', d: samplePath(M.ac, qMin, qSamp, qAxis, yAxis, n), tone: 'blue', label: 'AC', strokeWidth: 2.4, labelDx: 6, labelDy: -6, anchor: 'start' },
      { id: 'MC', d: samplePath(M.mc, qMin, qSamp, qAxis, yAxis, n), tone: 'rose', label: 'MC', strokeWidth: 2.6, labelDx: 6, labelDy: -6, anchor: 'start' },
      { id: 'AR', d: samplePath(ar, qMin, arEnd, qAxis, yAxis, 2), tone: 'green', label: 'D', strokeWidth: 2.4, labelDx: 6, labelDy: -8, anchor: 'start' },
      { id: 'MR', d: samplePath(mr, qMin, mrEnd, qAxis, yAxis, 2), tone: 'amber', label: 'MR', strokeWidth: 2.0, labelDx: -4, labelDy: -8, anchor: 'end' }
    ];
    var polygons = [], points = [], texts = [];
    var nyx = function (q) { return q / qAxis; };

    // nm-1: economies of scale annotation
    texts.push({ x: 0.42, y: 0.9, text: 'Economies of scale: AC falls across the whole market', tone: 'purple', bold: true, anchor: 'middle', layer: 'nm-1' });

    // nm-2: unregulated MR = MC → Q₁, P₁, profit
    var q1 = solveCross(M.mc, mr, qMin, qSamp);
    if (q1 != null) {
      var x1 = nyx(q1), p1 = ar(q1) / yAxis, mc1 = M.mc(q1) / yAxis, ac1 = M.ac(q1) / yAxis;
      points.push({ intersection: { curves: ['MC', 'MR'], near: [x1, mc1] }, tone: 'slate', radius: 4, layer: 'nm-2' });
      curves.push({ id: '_d1', shape: { type: 'vertical', x: x1, from: 0, to: p1 }, tone: 'slate', strokeWidth: 1.2, dashed: '3 3', layer: 'nm-2' });
      polygons.push({ points: [[0, ac1], [x1, ac1], [x1, p1], [0, p1]], tone: 'green', opacity: 0.20, layer: 'nm-2' });
      points.push({ x: x1, on: 'AR', tone: 'green', radius: 4.5, layer: 'nm-2' });
      texts.push({ x: -0.012, y: p1, text: 'P₁', tone: 'green', bold: true, anchor: 'end', layer: 'nm-2' });
      texts.push({ x: x1, y: -0.05, text: 'Q₁', tone: 'slate', bold: true, anchor: 'middle', layer: 'nm-2' });
      texts.push({ x: x1 / 2, y: (ac1 + p1) / 2, text: 'Profit', tone: 'green', bold: true, anchor: 'middle', layer: 'nm-2' });
    }

    // nm-3: allocatively efficient P = MC → Q₃ (loss/subsidy)
    var q3 = solveEq(ar, M.mc, qMin, qSamp);
    if (q3 != null) {
      var x3 = nyx(q3), p3 = M.mc(q3) / yAxis, ac3 = M.ac(q3) / yAxis;
      curves.push({ id: '_d3', shape: { type: 'vertical', x: x3, from: 0, to: ac3 }, tone: 'rose', strokeWidth: 1.2, dashed: '3 3', layer: 'nm-3' });
      curves.push({ id: '_loss3', shape: { type: 'vertical', x: x3, from: p3, to: ac3 }, tone: 'rose', strokeWidth: 5, layer: 'nm-3' });
      points.push({ x: x3, on: 'MC', tone: 'rose', radius: 4.5, label: 'P = MC', labelDx: -8, labelDy: 14, anchor: 'end', layer: 'nm-3' });
      texts.push({ x: x3, y: -0.05, text: 'Q₃', tone: 'rose', bold: true, anchor: 'middle', layer: 'nm-3' });
      texts.push({ x: x3 - 0.015, y: (p3 + ac3) / 2, text: 'loss', tone: 'rose', bold: true, anchor: 'end', layer: 'nm-3' });
    }

    // nm-4: average-cost pricing P = AC → Q₂ (break even)
    var q2 = solveEq(ar, M.ac, qMin, qSamp);
    if (q2 != null) {
      var x2 = nyx(q2), p2 = M.ac(q2) / yAxis;
      curves.push({ id: '_d2', shape: { type: 'vertical', x: x2, from: 0, to: p2 }, tone: 'blue', strokeWidth: 1.2, dashed: '3 3', layer: 'nm-4' });
      points.push({ x: x2, on: 'AC', tone: 'blue', radius: 4.5, label: 'P = AC', labelDx: 8, labelDy: -8, anchor: 'start', layer: 'nm-4' });
      texts.push({ x: x2, y: -0.05, text: 'Q₂', tone: 'blue', bold: true, anchor: 'middle', layer: 'nm-4' });
      texts.push({ x: 0.5, y: 0.82, text: 'P = AC: break-even (fair return)', tone: 'blue', bold: true, anchor: 'middle', layer: 'nm-4' });
    }

    return {
      width: opts.width || 740, height: opts.height || 400,
      chartArea: opts.chartArea || { x: 58, y: 26, width: 648, height: 320 },
      className: opts.className || 'firm-natmonopoly-svg', background: '#FFFFFF',
      axes: opts.axes || { x: { label: 'Output (Q)' }, y: { label: 'Price / cost (£)' } },
      layers: ['nm-1', 'nm-2', 'nm-3', 'nm-4'],
      polygons: polygons, curves: curves, points: points, texts: texts
    };
  }

  window.ECONOS_FIRM.solveEq = solveEq;
  window.ECONOS_FIRM.naturalMonopoly = naturalMonopoly;

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

    // The TFC gap: a double-headed arrow spanning TVC→TC at gapQ. Drawn as
    // TWO arrows from the gap midpoint outward, each with a single markerEnd,
    // so both heads orient correctly (up to TC, down to TVC) — a shared
    // markerStart would orient forward and flip the lower head. Both ends are
    // inset so the heads sit inside the gap, clear of the lines.
    var gx = gapQ / qAxis, tvcY = M.vc(gapQ) / yAxis, tcY = tc(gapQ) / yAxis;
    var inset = (tcY - tvcY) * 0.17, midY = (tvcY + tcY) / 2;
    var arrows = [
      { x1: gx, y1: midY, x2: gx, y2: tcY - inset, tone: 'red', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-red', buffer: 0, layer: 'tfc-3' },
      { x1: gx, y1: midY, x2: gx, y2: tvcY + inset, tone: 'red', strokeWidth: 1.8,
        markerEnd: 'econos-arrow-red', buffer: 0, layer: 'tfc-3' }
    ];
    var texts = [{
      x: gx - 0.014, y: (tvcY + tcY) / 2, text: 'TFC', tone: 'red', bold: true,
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
