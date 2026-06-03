/* ============================================================
   Econos Diagrams - EDL foundation.

   Public API:
     window.ECONOS_DIAGRAMS.render(spec)    -> { svg, warnings, errors, derived, renderPlan }
     window.ECONOS_DIAGRAMS.validate(spec)  -> { valid, warnings, errors }
     window.ECONOS_DIAGRAMS.compile(spec)   -> render result without legacy fallback surprises

   Design principle:
     Authors describe the economics. The engine builds a render plan,
     assigns layers, avoids obvious clashes, and renders premium SVG.

   This file is deliberately additive. Existing ECONOS_PPF.render(spec)
   continues to work; legacy specs are delegated to the current engine.
   ============================================================ */
(function () {
  'use strict';

  var SVG_NS = 'http://www.w3.org/2000/svg';
  var LABEL_INK = '#0F172A';
  var AXIS_INK = '#334155';

  var LAYERS = {
    background: 0,
    zones: 10,
    regions: 20,
    gridlines: 30,
    axes: 40,
    curvesOld: 50,
    curvesMain: 60,
    arrowsBehind: 70,
    points: 80,
    tickLabels: 90,
    curveLabels: 100,
    pointLabels: 110,
    callouts: 120,
    arrowsFront: 130,
    debug: 999
  };

  var TONES = {
    demand: { stroke: '#2563EB', light: '#DBEAFE', text: '#1D4ED8' },
    supply: { stroke: '#059669', light: '#D1FAE5', text: '#047857' },
    blue: { stroke: '#2563EB', light: '#DBEAFE', text: '#1D4ED8' },
    green: { stroke: '#059669', light: '#D1FAE5', text: '#047857' },
    amber: { stroke: '#D97706', light: '#FEF3C7', text: '#B45309' },
    red: { stroke: '#DC2626', light: '#FEE2E2', text: '#B91C1C' },
    rose: { stroke: '#E11D48', light: '#FFE4E6', text: '#BE123C' },
    purple: { stroke: '#7C3AED', light: '#EDE9FE', text: '#6D28D9' },
    slate: { stroke: '#475569', light: '#F1F5F9', text: LABEL_INK },
    grey: { stroke: '#94A3B8', light: '#F8FAFC', text: LABEL_INK },
    gray: { stroke: '#94A3B8', light: '#F8FAFC', text: LABEL_INK }
  };

  function tone(name) { return TONES[name] || TONES.slate; }
  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function isLegacyChartSpec(spec) {
    return !!(spec && typeof spec === 'object' && !spec.version && (spec.curves || spec.points || spec.axes) && !spec.family && !spec.intent);
  }

  function scaleFor(width, height, padding) {
    var area = {
      x: padding.left,
      y: padding.top,
      width: width - padding.left - padding.right,
      height: height - padding.top - padding.bottom
    };
    return {
      area: area,
      sx: function (x) { return area.x + x * area.width; },
      sy: function (y) { return area.y + area.height - y * area.height; }
    };
  }

  function lineFromShape(shape) {
    var role = shape.role || shape.kind;
    var elasticity = shape.elasticity || 'normal';
    var shift = shape.shift || 0;
    var slope;
    if (role === 'demand') slope = elasticity === 'inelastic' ? -1.55 : elasticity === 'elastic' ? -0.65 : -1.05;
    else slope = elasticity === 'inelastic' ? 0.7 : elasticity === 'elastic' ? 1.5 : 1.05;
    var through = role === 'demand' ? [0.5 + shift, 0.55] : [0.5 + shift, 0.45];
    var x1 = 0.06, x2 = 0.94;
    var y1 = through[1] + slope * (x1 - through[0]);
    var y2 = through[1] + slope * (x2 - through[0]);
    return { x1: x1, y1: y1, x2: x2, y2: y2, slope: slope };
  }

  function intersectLines(a, b) {
    var x1 = a.x1, y1 = a.y1, x2 = a.x2, y2 = a.y2;
    var x3 = b.x1, y3 = b.y1, x4 = b.x2, y4 = b.y2;
    var denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (Math.abs(denom) < 1e-9) return null;
    var px = ((x1*y2 - y1*x2) * (x3 - x4) - (x1 - x2) * (x3*y4 - y3*x4)) / denom;
    var py = ((x1*y2 - y1*x2) * (y3 - y4) - (y1 - y2) * (x3*y4 - y3*x4)) / denom;
    return { x: px, y: py };
  }

  function boxForText(text, x, y, size, anchor) {
    var w = String(text || '').length * size * 0.58 + 8;
    var h = size * 1.25 + 6;
    return { x: anchor === 'end' ? x - w : anchor === 'middle' ? x - w / 2 : x, y: y - h / 2, w: w, h: h };
  }

  function overlaps(a, b) {
    return !(a.x + a.w < b.x || b.x + b.w < a.x || a.y + a.h < b.y || b.y + b.h < a.y);
  }

  function chooseLabelPosition(text, px, py, placed, opts) {
    var size = opts.size || 13;
    var candidates = opts.candidates || [
      { dx: 12, dy: -12, anchor: 'start' },
      { dx: 12, dy: 18, anchor: 'start' },
      { dx: -12, dy: -12, anchor: 'end' },
      { dx: -12, dy: 18, anchor: 'end' },
      { dx: 0, dy: -22, anchor: 'middle' },
      { dx: 0, dy: 28, anchor: 'middle' }
    ];
    for (var i = 0; i < candidates.length; i++) {
      var c = candidates[i];
      var box = boxForText(text, px + c.dx, py + c.dy, size, c.anchor);
      var hit = false;
      for (var j = 0; j < placed.length; j++) {
        if (overlaps(box, placed[j])) { hit = true; break; }
      }
      if (!hit) {
        placed.push(box);
        return { x: px + c.dx, y: py + c.dy, anchor: c.anchor, box: box };
      }
    }
    var fallback = candidates[0];
    var fbox = boxForText(text, px + fallback.dx, py + fallback.dy, size, fallback.anchor);
    placed.push(fbox);
    return { x: px + fallback.dx, y: py + fallback.dy, anchor: fallback.anchor, box: fbox, clashed: true };
  }

  function add(plan, element) {
    element.order = plan.elements.length;
    if (element.layer == null) element.layer = LAYERS.curvesMain;
    plan.elements.push(element);
  }

  function markerDefs() {
    return [
      '<defs>',
      '<marker id="edl-chevron" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">',
      '<path d="M 2 2 L 8 5 L 2 8" fill="none" stroke="context-stroke" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
      '</marker>',
      '<marker id="edl-dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">',
      '<circle cx="5" cy="5" r="3" fill="context-stroke"/>',
      '</marker>',
      '<marker id="edl-bar" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto">',
      '<path d="M 5 1 L 5 9" fill="none" stroke="context-stroke" stroke-width="1.8" stroke-linecap="round"/>',
      '</marker>',
      '</defs>'
    ].join('');
  }

  function compileMarket(spec, diagnostics) {
    var width = spec.width || 520;
    var height = spec.height || 360;
    var padding = spec.padding || { left: 58, right: 34, top: 34, bottom: 54 };
    var sc = scaleFor(width, height, padding);
    var plan = { width: width, height: height, elements: [], derived: {}, warnings: diagnostics.warnings };
    var axes = spec.axes || { x: { label: 'Quantity' }, y: { label: 'Price' } };
    var curves = spec.curves || {};
    var curveLines = {};
    var placed = [];

    add(plan, { type: 'axes', layer: LAYERS.axes, axes: axes, scale: sc });

    Object.keys(curves).forEach(function (key) {
      var c = curves[key];
      var baseShift = c.role === 'demand' || c.kind === 'demand' ? 0 : 0;
      if (c.shiftFrom && curves[c.shiftFrom]) {
        baseShift = c.direction === 'right' || c.direction === 'out' ? 0.14 : -0.14;
      }
      curveLines[key] = lineFromShape({ role: c.role || c.kind, elasticity: c.elasticity, shift: baseShift });
    });

    Object.keys(curveLines).forEach(function (key) {
      var c = curves[key];
      var line = curveLines[key];
      var role = c.role || c.kind || 'curve';
      var old = !!c.shiftFrom;
      add(plan, { type: 'lineCurve', id: key, layer: old ? LAYERS.curvesMain : LAYERS.curvesOld, line: line, label: c.label || key, tone: role, old: false, scale: sc });
    });

    var demandKeys = Object.keys(curves).filter(function (k) { return (curves[k].role || curves[k].kind) === 'demand'; });
    var supplyKeys = Object.keys(curves).filter(function (k) { return (curves[k].role || curves[k].kind) === 'supply'; });
    if (demandKeys.length && supplyKeys.length) {
      var d1 = demandKeys[0], s1 = supplyKeys[0];
      var e1 = intersectLines(curveLines[d1], curveLines[s1]);
      if (e1) plan.derived.E1 = e1;
      var d2 = demandKeys.length > 1 ? demandKeys[1] : d1;
      var s2 = supplyKeys.length > 1 ? supplyKeys[1] : s1;
      var e2 = intersectLines(curveLines[d2], curveLines[s2]);
      if (e2) plan.derived.E2 = e2;
    }

    Object.keys(plan.derived).forEach(function (id) {
      var p = plan.derived[id];
      var px = sc.sx(p.x), py = sc.sy(p.y);
      add(plan, { type: 'gridlines', layer: LAYERS.gridlines, point: p, scale: sc, tickX: id === 'E1' ? 'Q₁' : 'Q₂', tickY: id === 'E1' ? 'P₁' : 'P₂' });
      add(plan, { type: 'point', layer: LAYERS.points, id: id, point: p, tone: id === 'E1' ? 'slate' : 'purple', scale: sc });
      var lab = chooseLabelPosition(id, px, py, placed, { size: 13 });
      if (lab.clashed) diagnostics.warnings.push('Point label ' + id + ' used fallback position after collision checks.');
      add(plan, { type: 'text', layer: LAYERS.pointLabels, text: id, x: lab.x, y: lab.y, anchor: lab.anchor, size: 13, weight: 800, fill: LABEL_INK });
    });

    if (spec.show && spec.show.indexOf('shift-arrow') !== -1 && demandKeys.length > 1) {
      var from = curveLines[demandKeys[0]];
      var to = curveLines[demandKeys[1]];
      var t = 0.52;
      var p1 = { x: from.x1 + (from.x2 - from.x1) * t, y: from.y1 + (from.y2 - from.y1) * t };
      var p2 = { x: to.x1 + (to.x2 - to.x1) * t, y: to.y1 + (to.y2 - to.y1) * t };
      add(plan, { type: 'arrow', layer: LAYERS.arrowsFront, from: p1, to: p2, tone: 'purple', label: 'Shift', scale: sc, head: 'chevron', curve: true });
    }

    if (spec.teaching && spec.teaching.takeaway) {
      add(plan, { type: 'callout', layer: LAYERS.callouts, text: spec.teaching.takeaway, x: width / 2, y: height - 18, anchor: 'middle' });
    }

    return plan;
  }

  function renderElement(el) {
    var sc = el.scale;
    if (el.type === 'axes') {
      var a = sc.area, bottom = a.y + a.height, right = a.x + a.width;
      var xLab = el.axes.x && el.axes.x.label || 'Quantity';
      var yLab = el.axes.y && el.axes.y.label || 'Price';
      return '<g class="edl-axes"><line x1="' + a.x + '" y1="' + bottom + '" x2="' + (right + 8) + '" y2="' + bottom + '" stroke="' + AXIS_INK + '" stroke-width="2" stroke-linecap="round"/><line x1="' + a.x + '" y1="' + bottom + '" x2="' + a.x + '" y2="' + (a.y - 8) + '" stroke="' + AXIS_INK + '" stroke-width="2" stroke-linecap="round"/><text x="' + (right + 10) + '" y="' + (bottom + 22) + '" text-anchor="end" font-size="13" font-weight="800" fill="' + LABEL_INK + '">' + esc(xLab) + '</text><text x="' + a.x + '" y="' + (a.y - 16) + '" text-anchor="middle" font-size="13" font-weight="800" fill="' + LABEL_INK + '">' + esc(yLab) + '</text><text x="' + (a.x - 12) + '" y="' + (bottom + 16) + '" text-anchor="middle" font-size="12" fill="' + LABEL_INK + '">O</text></g>';
    }
    if (el.type === 'lineCurve') {
      var tt = tone(el.tone);
      var l = el.line;
      var x1 = sc.sx(l.x1), y1 = sc.sy(l.y1), x2 = sc.sx(l.x2), y2 = sc.sy(l.y2);
      var labX = x2 + 7, labY = y2 - 7;
      return '<g class="edl-curve"><line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + tt.stroke + '" stroke-width="3" stroke-linecap="round"/><text x="' + labX + '" y="' + labY + '" font-size="13" font-weight="800" fill="' + tt.text + '">' + esc(el.label) + '</text></g>';
    }
    if (el.type === 'gridlines') {
      var a2 = sc.area, p = el.point, cx = sc.sx(p.x), cy = sc.sy(p.y), bottom2 = a2.y + a2.height;
      return '<g class="edl-grid"><line x1="' + a2.x + '" y1="' + cy + '" x2="' + cx + '" y2="' + cy + '" stroke="#CBD5E1" stroke-width="1" stroke-dasharray="4 4"/><line x1="' + cx + '" y1="' + bottom2 + '" x2="' + cx + '" y2="' + cy + '" stroke="#CBD5E1" stroke-width="1" stroke-dasharray="4 4"/><text x="' + (a2.x - 12) + '" y="' + (cy + 4) + '" text-anchor="middle" font-size="12" font-weight="800" fill="' + LABEL_INK + '">' + esc(el.tickY) + '</text><text x="' + cx + '" y="' + (bottom2 + 18) + '" text-anchor="middle" font-size="12" font-weight="800" fill="' + LABEL_INK + '">' + esc(el.tickX) + '</text></g>';
    }
    if (el.type === 'point') {
      var tp = tone(el.tone); var pp = el.point;
      return '<circle cx="' + sc.sx(pp.x) + '" cy="' + sc.sy(pp.y) + '" r="5.5" fill="#FFFFFF" stroke="' + tp.stroke + '" stroke-width="3"/>';
    }
    if (el.type === 'text') {
      return '<text x="' + el.x + '" y="' + el.y + '" text-anchor="' + (el.anchor || 'middle') + '" font-size="' + (el.size || 13) + '" font-weight="' + (el.weight || 700) + '" fill="' + (el.fill || LABEL_INK) + '">' + esc(el.text) + '</text>';
    }
    if (el.type === 'arrow') {
      var ta = tone(el.tone); var f = el.from, to = el.to;
      var xA = sc.sx(f.x), yA = sc.sy(f.y), xB = sc.sx(to.x), yB = sc.sy(to.y);
      var d = el.curve ? 'M ' + xA + ',' + yA + ' Q ' + ((xA + xB) / 2 + 18) + ',' + ((yA + yB) / 2 - 18) + ' ' + xB + ',' + yB : 'M ' + xA + ',' + yA + ' L ' + xB + ',' + yB;
      return '<path d="' + d + '" fill="none" stroke="' + ta.stroke + '" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#edl-chevron)"/>';
    }
    if (el.type === 'callout') {
      var text = esc(el.text); var w = Math.min(420, Math.max(180, text.length * 6.2));
      return '<g class="edl-callout"><rect x="' + (el.x - w / 2) + '" y="' + (el.y - 24) + '" width="' + w + '" height="32" rx="12" fill="#F8FAFC" stroke="#E2E8F0"/><text x="' + el.x + '" y="' + (el.y - 3) + '" text-anchor="middle" font-size="12" font-weight="700" fill="' + LABEL_INK + '">' + text + '</text></g>';
    }
    return '';
  }

  function renderPlan(plan, diagnostics) {
    var elements = plan.elements.slice().sort(function (a, b) {
      if (a.layer !== b.layer) return a.layer - b.layer;
      return a.order - b.order;
    });
    var body = elements.map(renderElement).join('');
    var label = diagnostics.alt || 'Econos economics diagram';
    return '<svg class="econos-diagram" viewBox="0 0 ' + plan.width + ' ' + plan.height + '" xmlns="' + SVG_NS + '" role="img" aria-label="' + esc(label) + '" style="width:100%;height:auto;display:block;">' + markerDefs() + '<rect width="100%" height="100%" fill="#FFFFFF"/>' + body + '</svg>';
  }

  function validate(spec) {
    var errors = [], warnings = [];
    if (!spec || typeof spec !== 'object') errors.push('Diagram spec must be an object.');
    if (spec && !spec.version && !isLegacyChartSpec(spec)) warnings.push('Spec has no version. EDL specs should use version: 1.');
    if (spec && spec.type === 'market' && !spec.curves) errors.push('Market diagrams require curves.');
    return { valid: errors.length === 0, errors: errors, warnings: warnings };
  }

  function compile(spec) {
    var v = validate(spec);
    var diagnostics = { errors: v.errors.slice(), warnings: v.warnings.slice(), alt: spec && (spec.alt || spec.title) };
    if (diagnostics.errors.length) return { svg: '', errors: diagnostics.errors, warnings: diagnostics.warnings, derived: {}, renderPlan: { elements: [] } };
    if (spec.type === 'market' || spec.family === 'market') {
      var plan = compileMarket(spec, diagnostics);
      return { svg: renderPlan(plan, diagnostics), errors: diagnostics.errors, warnings: diagnostics.warnings, derived: plan.derived, renderPlan: plan };
    }
    diagnostics.errors.push('Unknown EDL diagram type: ' + (spec.type || spec.family || 'missing'));
    return { svg: '', errors: diagnostics.errors, warnings: diagnostics.warnings, derived: {}, renderPlan: { elements: [] } };
  }

  function render(spec) {
    if (isLegacyChartSpec(spec) && window.ECONOS_PPF && typeof window.ECONOS_PPF.render === 'function') {
      return { svg: window.ECONOS_PPF.render(spec), errors: [], warnings: ['Rendered through legacy ECONOS_PPF compatibility path.'], derived: {}, renderPlan: { legacy: true, elements: [] } };
    }
    return compile(spec);
  }

  window.ECONOS_DIAGRAMS = {
    version: '0.1.0-foundation',
    layers: LAYERS,
    tones: TONES,
    render: render,
    compile: compile,
    validate: validate
  };
})();
