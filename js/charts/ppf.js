/* ============================================================
   Econos — minimal PPF chart engine (v1).

   One function: window.ECONOS_PPF.render(spec) -> SVG string.

   Spec shape: see dev/ppf-engine-test.html for a worked example.

   Coordinate convention:
     - All input x/y in points/zones/curves are normalised 0..1
       in CHART space, with y growing UP (econ convention).
     - The engine maps to SVG pixel space (y down) inside the
       chart area, leaving padding for axes + labels.

   Site-wide rendering rules (enforced in the engine, not per-spec):
     - Axis-label placement:
         X label below right end of X-axis, RIGHT-ALIGNED to arrowhead tip.
         Y label just ABOVE Y-axis arrowhead, no clash.
     - MIN_LABEL_SIZE: no rendered text drops below this size (currently 12px).
       The engine clamps any spec value below it.
     - LABEL_INK: all text fills default to near-black. Tones with a 'gray'
       semantic still drive STROKES (dots, lines, dashes) but never label
       text — labels are always readable, never muted to gray.
     - ARROW_BUFFER (14px): every arrow (line or path) has its start + end
       pulled inward by ARROW_BUFFER pixels along the tangent at each end.
       Sized to clear a typical point's radius (6–9px) plus the arrowhead
       so arrowheads don't land inside their target dot. Specs can override
       per-arrow with `arrow.buffer`.
     - Point-label auto-offset for gridlined points: when `pt.gridlines`
       is set, the label is auto-positioned upper-right of the dot (Δy=-9)
       instead of straight right, so the horizontal dashed gridline running
       through the dot's row doesn't slice the label text. Override per
       point with `pt.labelDx` / `pt.labelDy`.
     - Axis-adjacent text labels live OUTSIDE the chart area, not inside.
       Specs place them at x<0 (left of Y-axis), x>1 (right of plot), or
       y<0 (below X-axis). The engine auto-aligns text-anchor based on x
       sign: x<0 → end-anchored, x>1 → start-anchored, else middle.
     - Perpendicular shift arrows are declarative — specs name a source
       curve, an anchor parameter t, and a target curve:
         { perpendicular: { from: 'ppf1', t: 0.5, to: 'ppf2' } }
       Engine computes the tangent at t on `from`, rotates 90°, then
       numerically finds where that normal ray intersects `to`. The arrow
       spans from the anchor on `from` to the intersection on `to`, so
       outward-shift arrows truly sit BETWEEN PPF₁ and PPF₂, and
       inward-shift arrows truly sit BETWEEN PPF₁ and PPF₃.
     - BACKGROUND: chart canvas is white by default. Specs override
       with `background: '<color>'` only when the chart deliberately
       needs a tinted backdrop (rare). Default is '#FFFFFF'.

   Anchor-based positioning (Approach B):
     - Point IDs: any point can carry an `id` field. Used as a reference
       target by other elements.
     - Arrow point references: arrows can declare `from: 'pointId'` /
       `to: 'pointId'` INSTEAD of x1/y1/x2/y2. Engine resolves the IDs to
       chart-space positions when rendering.
     - Curve membership: a point can declare `on: 'curveId'` saying "I
       sit on this curve". The engine then knows the curve's local
       tangent at the point, which determines the "attainable" direction
       (inside the curve, toward origin).
     - Smart label placement: when a point has `on:` declared (and
       optionally has arrows touching it via from/to references), the
       engine picks the label's side automatically — preferring the
       attainable region and avoiding any arrow's approach direction.
       Authors don't write labelDx/labelDy/anchor. Override remains
       available via explicit labelDx/labelDy/anchor.

   Dev-mode collision warnings:
     - Set window.ECONOS_DEV = true (or append ?dev=1 to the URL the
       page is loaded from) to log bounding-box overlap warnings to the
       console. The engine tracks every rendered text/dot/arrow and
       reports pair-wise overlaps. Cheap insurance against new clash
       patterns the smart placement doesn't yet catch.
   ============================================================ */
(function () {
  'use strict';

  var MIN_LABEL_SIZE = 12;
  var LABEL_INK = '#0F172A';
  // ARROW_BUFFER bumped from 8 → 14 so the arrowhead clears a typical
  // point's radius (6–9px) with visible breathing room — no more
  // arrowheads landing inside the target dot.
  var ARROW_BUFFER = 14;

  function clampSize(s) { return Math.max(MIN_LABEL_SIZE, s || MIN_LABEL_SIZE); }

  var TONES = {
    blue:   { stroke: '#2563EB', label: '#2563EB' },
    amber:  { stroke: '#D97706', label: '#D97706' },
    rose:   { stroke: '#DC2626', label: '#DC2626' },
    red:    { stroke: '#DC2626', label: '#DC2626' },
    green:  { stroke: '#059669', label: '#059669' },
    purple: { stroke: '#7C3AED', label: '#7D23CB' },
    cyan:   { stroke: '#0891B2', label: '#0891B2' },
    slate:  { stroke: '#475569', label: LABEL_INK },
    gray:   { stroke: '#94A3B8', label: LABEL_INK }
  };

  function tone(name) { return TONES[name] || TONES.slate; }

  function makeScale(area, clipId) {
    return {
      sx: function (x) { return area.x + x * area.width; },
      sy: function (y) { return area.y + area.height - y * area.height; },
      // clipId tells renderCurve which clipPath to apply when auto-clipping.
      // In single-panel charts every curve uses the same chart-area clip.
      // In multi-panel charts each panel gets its own clipPath id so a
      // curve declared inside panel N is never clipped against panel 0's
      // bounds (which would erase curves outside the first panel).
      clipId: clipId || 'econos-chart-clip'
    };
  }

  /* Convert a relative path `d` (coords in 0..1, y up) to absolute
     SVG pixel space. Supports M, L, C, Q, T (S not supported in v1). */
  function scalePath(d, scale) {
    return d.replace(/([MLCQT])\s*([0-9.\-,\s]+)/g, function (_, cmd, args) {
      var nums = args.trim().split(/[\s,]+/).map(Number);
      var out = [];
      for (var i = 0; i < nums.length; i += 2) {
        out.push(scale.sx(nums[i]).toFixed(1), scale.sy(nums[i + 1]).toFixed(1));
      }
      return cmd + ' ' + out.join(',');
    });
  }

  function renderAxes(area, axes) {
    var bottom = area.y + area.height;
    var right = area.x + area.width;
    var yArrowTip = area.y - 5;
    var xArrowTip = right + 5;
    var yLabel = (axes.y && axes.y.label) || '';
    var xLabel = (axes.x && axes.x.label) || '';

    return [
      '<g class="chart-axes">',
      // Y-axis line + arrowhead
      '<line x1="' + area.x + '" y1="' + bottom + '" x2="' + area.x + '" y2="' + yArrowTip + '" stroke="#334155" stroke-width="2"/>',
      '<polygon points="' + area.x + ',' + (yArrowTip - 5) + ' ' + (area.x - 4) + ',' + (yArrowTip + 7) + ' ' + (area.x + 4) + ',' + (yArrowTip + 7) + '" fill="#334155"/>',
      // X-axis line + arrowhead
      '<line x1="' + area.x + '" y1="' + bottom + '" x2="' + xArrowTip + '" y2="' + bottom + '" stroke="#334155" stroke-width="2"/>',
      '<polygon points="' + (xArrowTip + 5) + ',' + bottom + ' ' + (xArrowTip - 7) + ',' + (bottom - 4) + ' ' + (xArrowTip - 7) + ',' + (bottom + 4) + '" fill="#334155"/>',
      // Origin label
      '<text x="' + (area.x - 10) + '" y="' + (bottom + 14) + '" font-size="' + MIN_LABEL_SIZE + '" fill="' + LABEL_INK + '" text-anchor="middle">O</text>',
      // Y label — above arrowhead, centred on axis line
      yLabel ? '<text x="' + area.x + '" y="' + (yArrowTip - 10) + '" font-size="' + clampSize(13) + '" font-weight="700" fill="' + LABEL_INK + '" text-anchor="middle">' + yLabel + '</text>' : '',
      // X label — below axis line, right-aligned to arrowhead tip
      xLabel ? '<text x="' + (xArrowTip + 5) + '" y="' + (bottom + 18) + '" font-size="' + clampSize(13) + '" font-weight="700" fill="' + LABEL_INK + '" text-anchor="end">' + xLabel + '</text>' : '',
      '</g>'
    ].join('');
  }

  function renderCurve(curve, scale) {
    var t = tone(curve.tone);
    var dAbs = scalePath(curve.d, scale);
    var sw = curve.strokeWidth || 3;
    var dashAttr = curve.dashed ? ' stroke-dasharray="' + curve.dashed + '"' : '';
    var opacityAttr = curve.opacity != null ? ' opacity="' + curve.opacity + '"' : '';
    // Auto-clip curves to chart area so lines that extend beyond 0..1
    // (e.g. shifted demand/supply curves) don't bleed into the axis-label
    // gutter. The curve label is a separate <text> and isn't clipped.
    var clipAttr = curve.clip === false ? '' : ' clip-path="url(#' + (scale.clipId || 'econos-chart-clip') + ')"';
    var labelHtml = '';
    if (curve.label) {
      var last = curve.d.match(/([0-9.\-]+)\s*,\s*([0-9.\-]+)\s*$/);
      var lx, ly;
      if (last) {
        lx = scale.sx(parseFloat(last[1])) + (curve.labelDx != null ? curve.labelDx : 6);
        ly = scale.sy(parseFloat(last[2])) + (curve.labelDy != null ? curve.labelDy : -6);
      } else {
        lx = scale.sx(0.7); ly = scale.sy(0.05);
      }
      labelHtml = '<text x="' + lx + '" y="' + ly + '" font-size="' + clampSize(13) + '" font-weight="700" fill="' + t.label + '">' + curve.label + '</text>';
    }
    return '<path d="' + dAbs + '" fill="none" stroke="' + t.stroke + '" stroke-width="' + sw + '"' + dashAttr + opacityAttr + clipAttr + '/>' + labelHtml;
  }

  /* Pull point A toward B by `distance` pixels along the AB direction. */
  function pullToward(from, toward, distance) {
    var dx = toward[0] - from[0];
    var dy = toward[1] - from[1];
    var len = Math.sqrt(dx * dx + dy * dy);
    if (len < 0.001) return from;
    // Cap the pull so a too-large buffer can't overshoot past the
    // other endpoint and reverse the arrow's direction (which makes
    // `marker-end orient="auto"` rotate the head 180°, frequently
    // mis-read as a "90° bent" arrow). 45% leaves a small visible
    // segment between the buffered endpoints.
    var capped = Math.min(distance, len * 0.45);
    return [from[0] + dx / len * capped, from[1] + dy / len * capped];
  }

  /* Shorten both ends of a (pixel-space) path by `buffer` pixels along
     its tangent at each end. Handles M followed by L / Q / C / T.
     For a quadratic 'M P0 Q P1 P2', start direction is P0→P1 and end
     direction is P1→P2. For a line 'M P0 L P1', direction is just P0→P1. */
  function applyPathBuffer(dPixels, buffer) {
    if (!buffer) return dPixels;
    var tokens = [];
    var re = /([MLCQT])\s*([\d.\-,\s]+)/g;
    var m;
    while ((m = re.exec(dPixels))) {
      var nums = m[2].trim().split(/[\s,]+/).map(Number);
      var pairs = [];
      for (var i = 0; i < nums.length; i += 2) pairs.push([nums[i], nums[i + 1]]);
      tokens.push({ cmd: m[1], pairs: pairs });
    }
    if (!tokens.length) return dPixels;

    // Pull START inward toward the next control/anchor
    var first = tokens[0];
    var next = tokens[1];
    if (first && first.cmd === 'M' && next && next.pairs.length) {
      first.pairs[0] = pullToward(first.pairs[0], next.pairs[0], buffer);
    }

    // Pull END inward toward the previous control/anchor
    var last = tokens[tokens.length - 1];
    if (last && last.pairs.length) {
      var endIdx = last.pairs.length - 1;
      var prev;
      if (last.pairs.length >= 2) {
        prev = last.pairs[endIdx - 1];
      } else if (tokens.length >= 2) {
        var penult = tokens[tokens.length - 2];
        prev = penult.pairs[penult.pairs.length - 1];
      }
      if (prev) last.pairs[endIdx] = pullToward(last.pairs[endIdx], prev, buffer);
    }

    return tokens.map(function (tk) {
      return tk.cmd + ' ' + tk.pairs.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
    }).join(' ');
  }

  /* Cubic Bezier point at parameter t (P is array of 4 [x,y] pairs) */
  function cubicPoint(P, t) {
    var u = 1 - t;
    return [
      u*u*u*P[0][0] + 3*u*u*t*P[1][0] + 3*u*t*t*P[2][0] + t*t*t*P[3][0],
      u*u*u*P[0][1] + 3*u*u*t*P[1][1] + 3*u*t*t*P[2][1] + t*t*t*P[3][1]
    ];
  }

  /* Cubic Bezier tangent (first derivative) at parameter t */
  function cubicTangent(P, t) {
    var u = 1 - t;
    return [
      3*u*u*(P[1][0]-P[0][0]) + 6*u*t*(P[2][0]-P[1][0]) + 3*t*t*(P[3][0]-P[2][0]),
      3*u*u*(P[1][1]-P[0][1]) + 6*u*t*(P[2][1]-P[1][1]) + 3*t*t*(P[3][1]-P[2][1])
    ];
  }

  /* Parse 'M x0,y0 C x1,y1 x2,y2 x3,y3' into 4 control points */
  function parseCubic(d) {
    var nums = d.match(/-?[\d.]+/g);
    if (!nums || nums.length < 8) return null;
    return [
      [parseFloat(nums[0]), parseFloat(nums[1])],
      [parseFloat(nums[2]), parseFloat(nums[3])],
      [parseFloat(nums[4]), parseFloat(nums[5])],
      [parseFloat(nums[6]), parseFloat(nums[7])]
    ];
  }

  /* Compute a unit normal to the tangent. The returned vector points
     AWAY from origin for direction='outward', TOWARD origin for 'inward'. */
  function unitNormal(tangent, anchor, direction) {
    var nx = -tangent[1], ny = tangent[0];        // 90° CCW rotation
    var mag = Math.sqrt(nx*nx + ny*ny);
    if (mag < 1e-6) return [0, 0];
    nx /= mag; ny /= mag;
    var awayFromOrigin = (nx * anchor[0] + ny * anchor[1]) > 0;
    var wantAway = direction !== 'inward';
    if (awayFromOrigin !== wantAway) { nx = -nx; ny = -ny; }
    return [nx, ny];
  }

  /* Find parameter t on cubic curve P such that B(t).x equals targetX.
     Assumes x is monotonically increasing along the curve (true for any
     standard PPF). Returns null if targetX is outside the curve's x range. */
  function findTAtX(P, targetX) {
    var x0 = P[0][0], x3 = P[3][0];
    if (targetX < Math.min(x0, x3) || targetX > Math.max(x0, x3)) return null;
    var lo = 0, hi = 1;
    for (var i = 0; i < 40; i++) {
      var mid = (lo + hi) / 2;
      if (cubicPoint(P, mid)[0] < targetX) lo = mid;
      else hi = mid;
    }
    return (lo + hi) / 2;
  }

  /* Find parameter t on cubic curve P such that B(t) lies on the ray
     from `anchor` in direction `normal`. Returns the intersection point
     in chart space, or null if no intersection in t∈[0,1].
     Method: f(t) = cross-product of (B(t)-anchor) and normal; sample for
     a sign-change, then binary-search to convergence. Only accepts
     intersections on the positive side of the ray (forward of anchor). */
  function rayIntersectCubic(anchor, normal, P) {
    function f(t) {
      var pt = cubicPoint(P, t);
      return (pt[0] - anchor[0]) * normal[1] - (pt[1] - anchor[1]) * normal[0];
    }
    var STEPS = 80;
    var prevF = f(0), prevT = 0;
    for (var i = 1; i <= STEPS; i++) {
      var t = i / STEPS;
      var ff = f(t);
      if ((prevF <= 0 && ff > 0) || (prevF >= 0 && ff < 0)) {
        var lo = prevT, hi = t;
        for (var j = 0; j < 30; j++) {
          var mid = (lo + hi) / 2;
          var fm = f(mid);
          if ((prevF <= 0 && fm <= 0) || (prevF >= 0 && fm >= 0)) lo = mid;
          else hi = mid;
        }
        var tFinal = (lo + hi) / 2;
        var pt = cubicPoint(P, tFinal);
        // Ensure intersection is forward along the normal, not behind anchor
        var s = (pt[0] - anchor[0]) * normal[0] + (pt[1] - anchor[1]) * normal[1];
        if (s > 0) return pt;
      }
      prevF = ff; prevT = t;
    }
    return null;
  }

  /* Does the spec's arrow list include any arrow that touches `ptId`
     via its from/to references? Used by renderPoint to decide whether
     smart label placement should kick in. */
  function arrowsTouchPoint(ctx, ptId) {
    return (ctx.arrows || []).some(function (a) {
      return a.from === ptId || a.to === ptId;
    });
  }

  /* Arrow rendering — supports four shapes:
       { d: '...' }                                   raw path in 0..1 space
       { x1, y1, x2, y2 }                             straight line in 0..1 space
       { from: 'A', to: 'B' }                         line between two referenced points
       { perpendicular: { curve, t, length, direction } }  geometric perpendicular
     All shapes are shortened at both ends by ARROW_BUFFER (per-arrow override). */
  function renderArrow(arrow, scale, curveRegistry, ctx) {
    var t = tone(arrow.tone);
    var sw = arrow.strokeWidth || 2;
    var buffer = arrow.buffer != null ? arrow.buffer : ARROW_BUFFER;
    var dashAttr = arrow.dashed ? ' stroke-dasharray="' + arrow.dashed + '"' : '';
    var capAttr = arrow.lineCap ? ' stroke-linecap="' + arrow.lineCap + '"' : '';
    var mStart = arrow.markerStart ? ' marker-start="url(#' + arrow.markerStart + ')"' : '';
    var mEnd = arrow.markerEnd ? ' marker-end="url(#' + arrow.markerEnd + ')"' : '';
    var dPix;

    // Resolve from/to point references into x1/y1/x2/y2.
    if ((arrow.from || arrow.to) && ctx && ctx.pointRegistry) {
      var src = arrow.from && ctx.pointRegistry[arrow.from];
      var dst = arrow.to   && ctx.pointRegistry[arrow.to];
      if (src && dst) {
        dPix = 'M ' + scale.sx(src.x) + ',' + scale.sy(src.y) + ' L ' + scale.sx(dst.x) + ',' + scale.sy(dst.y);
        dPix = applyPathBuffer(dPix, buffer);
        return '<path d="' + dPix + '" fill="none" stroke="' + t.stroke + '" stroke-width="' + sw + '"' + dashAttr + capAttr + mStart + mEnd + '/>';
      }
    }
    if (arrow.perpendicular) {
      var spec = arrow.perpendicular;
      var fromKey = spec.from || spec.curve;
      var P = curveRegistry && curveRegistry[fromKey];
      if (!P) return '<!-- perpendicular arrow: source curve "' + fromKey + '" not found -->';
      var anchor = cubicPoint(P, spec.t);
      var tangent = cubicTangent(P, spec.t);

      var startCh, endCh;
      if (spec.to) {
        // Span between curves: cast normal ray from anchor on `from`,
        // find where it hits the target curve `to`, draw arrow from
        // anchor to intersection. Tries both perpendicular directions
        // and uses whichever side `to` actually lies on.
        var target = curveRegistry[spec.to];
        if (!target) return '<!-- perpendicular arrow: target curve "' + spec.to + '" not found -->';
        var nOut = unitNormal(tangent, anchor, 'outward');
        var nIn = [-nOut[0], -nOut[1]];
        var hit = rayIntersectCubic(anchor, nOut, target);
        if (!hit) hit = rayIntersectCubic(anchor, nIn, target);
        if (!hit) return '<!-- perpendicular arrow: no intersection between "' + fromKey + '" and "' + spec.to + '" -->';
        startCh = anchor;
        endCh = hit;
      } else {
        // Fixed-length perpendicular centred on anchor (no target curve)
        var normal = unitNormal(tangent, anchor, spec.direction);
        var half = (spec.length || 0.1) / 2;
        startCh = [anchor[0] - normal[0]*half, anchor[1] - normal[1]*half];
        endCh = [anchor[0] + normal[0]*half, anchor[1] + normal[1]*half];
      }
      dPix = 'M ' + scale.sx(startCh[0]) + ',' + scale.sy(startCh[1]) + ' L ' + scale.sx(endCh[0]) + ',' + scale.sy(endCh[1]);
    } else if (arrow.d) {
      dPix = scalePath(arrow.d, scale);
    } else {
      dPix = 'M ' + scale.sx(arrow.x1) + ',' + scale.sy(arrow.y1) + ' L ' + scale.sx(arrow.x2) + ',' + scale.sy(arrow.y2);
    }
    dPix = applyPathBuffer(dPix, buffer);
    return '<path d="' + dPix + '" fill="none" stroke="' + t.stroke + '" stroke-width="' + sw + '"' + dashAttr + capAttr + mStart + mEnd + '/>';
  }

  /* Optional dashed gridlines + axis-tick labels for a point.
     `pt.gridlines` may be `true` (use point's tone), or a tone-name string
     ('gray', 'amber', etc.) to override the gridline colour. */
  function renderPointGridlines(pt, scale, area) {
    if (!pt.gridlines) return '';
    var gridTone = typeof pt.gridlines === 'string' ? tone(pt.gridlines) : tone(pt.tone);
    var t = tone(pt.tone);
    var cx = scale.sx(pt.x);
    var cy = scale.sy(pt.y);
    var parts = [
      '<line x1="' + area.x + '" y1="' + cy + '" x2="' + cx + '" y2="' + cy + '" stroke="' + gridTone.stroke + '" stroke-width="1" stroke-dasharray="4 3"/>',
      '<line x1="' + cx + '" y1="' + (area.y + area.height) + '" x2="' + cx + '" y2="' + cy + '" stroke="' + gridTone.stroke + '" stroke-width="1" stroke-dasharray="4 3"/>'
    ];
    if (pt.ticks && pt.ticks.y) {
      parts.push('<text x="' + (area.x - 10) + '" y="' + (cy + 4) + '" font-size="' + MIN_LABEL_SIZE + '" font-weight="700" fill="' + t.label + '" text-anchor="middle">' + pt.ticks.y + '</text>');
    }
    if (pt.ticks && pt.ticks.x) {
      parts.push('<text x="' + cx + '" y="' + (area.y + area.height + 17) + '" font-size="' + MIN_LABEL_SIZE + '" font-weight="700" fill="' + t.label + '" text-anchor="middle">' + pt.ticks.x + '</text>');
    }
    return parts.join('');
  }

  /* Standalone text label.

     Two placement modes:
       - Explicit: spec gives x/y in chart space.
       - Anchored: spec gives `near: 'pointId'`. Engine looks up the
         point and uses the smart side-picker to place the text next
         to it, avoiding curves, arrows, and other placed labels.
     `item.anchor` always wins if set; otherwise auto-derived. */
  function renderText(item, scale, ctx, area) {
    var t = tone(item.tone || 'slate');
    var bold = item.bold ? ' font-weight="700"' : '';
    var italic = item.italic ? ' font-style="italic"' : '';
    var size = clampSize(item.fontSize);

    var x, y, anchor;
    if (item.near && ctx && ctx.pointRegistry[item.near]) {
      var target = ctx.pointRegistry[item.near];
      var pseudoPoint = { id: item.near, x: target.x, y: target.y, on: target.on };
      // Annotations get a bigger offset (extraOffset=14) than direct
      // point labels, so the annotation sits clear of the dot's own
      // label rather than overlapping it.
      var auto = smartLabelPosition(pseudoPoint, ctx, scale, 7, area, item.text, size, 14);
      if (auto.bbox && ctx.placedBoxes) ctx.placedBoxes.push(auto.bbox);
      x = scale.sx(target.x) + auto.dx;
      y = scale.sy(target.y) + auto.dy;
      anchor = item.anchor || auto.anchor;
    } else {
      x = scale.sx(item.x);
      y = scale.sy(item.y);
      anchor = item.anchor;
      if (!anchor) {
        anchor = item.x < 0 ? 'end' : (item.x > 1 ? 'start' : 'middle');
      }
    }
    var opacity = item.opacity != null ? ' opacity="' + item.opacity + '"' : '';
    // Optional rotation. `item.rotate` is degrees (negative = counter-
    // clockwise). Used for vertical-reading axis labels like "P falls"
    // alongside a y-axis direction arrow.
    var rotate = item.rotate ? ' transform="rotate(' + item.rotate + ' ' + x + ' ' + y + ')"' : '';
    return '<text x="' + x + '" y="' + y + '" font-size="' + size + '" fill="' + t.label + '" text-anchor="' + anchor + '"' + bold + italic + opacity + rotate + '>' + item.text + '</text>';
  }

  /* Estimate a text element's bounding box in PIXEL space.
     Width approximation: 0.58 × fontSize × character count (works for
     proportional fonts at 12-13pt). Height: 1.15 × fontSize. */
  function estimateTextBox(text, fontSize, x, y, anchor) {
    var size = fontSize || MIN_LABEL_SIZE;
    var w = 0.58 * size * (text || '').length;
    var h = 1.15 * size;
    var left = anchor === 'end' ? x - w : (anchor === 'middle' ? x - w / 2 : x);
    var top = y - h / 2;  // dominant-baseline=middle approximation
    return { x: left, y: top, w: w, h: h, text: text };
  }

  function boxesOverlap(a, b) {
    return !(a.x + a.w < b.x || b.x + b.w < a.x || a.y + a.h < b.y || b.y + b.h < a.y);
  }

  function isInsideArea(box, area, margin) {
    margin = margin || 2;
    return box.x >= area.x - margin && box.y >= area.y - margin
        && box.x + box.w <= area.x + area.width + margin
        && box.y + box.h <= area.y + area.height + margin;
  }

  /* Heuristic side picker for point labels (Approach B v1).

     Given a point and the rendering context (curves, arrows, placed
     bboxes, chart area), pick the cleanest side for the label among
     {right, below, left, above}.

     Rules, in order:
       1. If the point has `on: 'curveId'`, eliminate the side that's
          OUTSIDE the curve (away from origin for a PPF).
       2. If any arrow touches this point (via from/to references),
          eliminate the side closest to the other endpoint's direction.
       3. Eliminate sides where the label would overflow the chart area.
       4. Eliminate sides where the label would overlap an already-placed
          label (label-to-label collision).
       5. Among remaining sides, prefer right > below > left > above
          (reading order).

     Returns { dx, dy, anchor } in pixel space relative to the dot. */
  function smartLabelPosition(pt, ctx, scale, r, area, labelText, fontSize, extraOffset) {
    extraOffset = extraOffset || 0;
    var SIDES = {
      right: { dx: r + 3 + extraOffset, dy: 0, anchor: 'start' },
      below: { dx: 0, dy: r + 14 + extraOffset, anchor: 'middle' },
      left:  { dx: -(r + 3 + extraOffset), dy: 0, anchor: 'end' },
      above: { dx: 0, dy: -(r + 8 + extraOffset), anchor: 'middle' }
    };
    var SIDE_VEC = { right: [1, 0], below: [0, -1], left: [-1, 0], above: [0, 1] };

    var eliminated = {};
    var why = {};
    function elim(side, reason) { if (side && !eliminated[side]) { eliminated[side] = reason; why[side] = reason; } }

    var cx = scale.sx(pt.x);
    var cy = scale.sy(pt.y);

    // Rule 1: avoid the side OUTSIDE the curve.
    if (pt.on && ctx.curveRegistry[pt.on]) {
      var P = ctx.curveRegistry[pt.on];
      var t = findTAtX(P, pt.x);
      if (t != null) {
        var tangent = cubicTangent(P, t);
        var outward = unitNormal(tangent, [pt.x, pt.y], 'outward');
        var worst = null, worstDot = -Infinity;
        ['right', 'below', 'left', 'above'].forEach(function (s) {
          var v = SIDE_VEC[s];
          var d = v[0] * outward[0] + v[1] * outward[1];
          if (d > worstDot) { worstDot = d; worst = s; }
        });
        elim(worst, 'outside curve');
      }
    }

    // Rule 2: avoid each arrow's other-endpoint direction.
    (ctx.arrows || []).forEach(function (arrow) {
      var targetId = arrow.to;
      var sourceId = arrow.from;
      if (targetId !== pt.id && sourceId !== pt.id) return;
      var otherId = targetId === pt.id ? sourceId : targetId;
      var other = ctx.pointRegistry[otherId];
      if (!other) return;
      var dx = other.x - pt.x, dy = other.y - pt.y;
      var worst = null, worstDot = -Infinity;
      ['right', 'below', 'left', 'above'].forEach(function (s) {
        var v = SIDE_VEC[s];
        var d = v[0] * dx + v[1] * dy;
        if (d > worstDot) { worstDot = d; worst = s; }
      });
      elim(worst, 'arrow path');
    });

    // Rules 3 + 4: bounds check + label-to-label collision check.
    // Compute the candidate bbox for each remaining side; eliminate the
    // side if the bbox would overflow the chart or overlap a placed label.
    var priority = ['right', 'below', 'left', 'above'];
    for (var i = 0; i < priority.length; i++) {
      var s = priority[i];
      if (eliminated[s]) continue;
      var off = SIDES[s];
      var bbox = estimateTextBox(labelText, fontSize || clampSize(13), cx + off.dx, cy + off.dy, off.anchor);
      if (!isInsideArea(bbox, area)) { elim(s, 'overflows chart'); continue; }
      var clash = (ctx.placedBoxes || []).some(function (b) { return boxesOverlap(bbox, b); });
      if (clash) { elim(s, 'overlaps label'); continue; }
      return { dx: off.dx, dy: off.dy, anchor: off.anchor, bbox: bbox };
    }
    // All sides eliminated — return right as fallback (with warning if dev mode).
    if (typeof window !== 'undefined' && window.ECONOS_DEV) {
      try { console.warn('[ECONOS_PPF] All sides eliminated for label "' + labelText + '" at point ' + (pt.id || '?'), why); } catch (e) {}
    }
    var fallback = SIDES.right;
    var fbbox = estimateTextBox(labelText, fontSize || clampSize(13), cx + fallback.dx, cy + fallback.dy, fallback.anchor);
    return { dx: fallback.dx, dy: fallback.dy, anchor: fallback.anchor, bbox: fbbox };
  }

  /* Filled polygon — points are a list of [x, y] in 0..1 chart space.
     Renders as <polygon> with the tone fill at the given opacity. */
  function renderPolygon(poly, scale) {
    var t = tone(poly.tone || 'green');
    var pts = (poly.points || []).map(function (p) {
      return scale.sx(p[0]) + ',' + scale.sy(p[1]);
    }).join(' ');
    var opacity = poly.opacity != null ? poly.opacity : 0.85;
    var fill = poly.fill || t.stroke + '33'; // 20% alpha tint of tone
    return '<polygon points="' + pts + '" fill="' + fill + '" opacity="' + opacity + '"/>';
  }

  /* Universal label-vs-other-points repulsion.

     Given a point's INITIAL label position (computed by spec or smart
     placement), check whether the resulting label box overlaps any
     OTHER visible dot in the same layer. If it does, sweep through the
     four diagonal quadrants (upper-right, upper-left, lower-right,
     lower-left) and return the first clean one. The initial position
     stays preferred when it's already clean — spec-author intent wins.

     Layer-aware: two points in mutually-exclusive state layers
     (e.g. layer-shortage vs layer-surplus) never push each other,
     because they're never on screen at the same time. */
  function autoRepelLabel(pt, ctx, scale, r, cx, cy, initDx, initDy, initAnchor) {
    var fallback = { dx: initDx, dy: initDy, anchor: initAnchor };
    if (!pt.label || !ctx || !ctx.allPoints || ctx.allPoints.length < 2) return fallback;

    var size = clampSize(13);
    var lblW = 0.58 * size * (pt.label.length || 1);
    var lblH = 1.15 * size;

    // Filter to OTHER visible points in the same layer (or no layer = always-visible).
    var others = [];
    for (var i = 0; i < ctx.allPoints.length; i++) {
      var op = ctx.allPoints[i];
      if (op.x === pt.x && op.y === pt.y) continue;
      if (pt.layer && op.layer && pt.layer !== op.layer) continue;
      others.push({ px: scale.sx(op.x), py: scale.sy(op.y), r: op.r || 7 });
    }
    if (!others.length) return fallback;

    var off = Math.max(8, r + 4);
    var candidates = [
      { dx: initDx,  dy: initDy,  anchor: initAnchor }, // try spec position first
      { dx:  off, dy: -off,    anchor: 'start' },
      { dx: -off, dy: -off,    anchor: 'end' },
      { dx:  off, dy:  off+4,  anchor: 'start' },
      { dx: -off, dy:  off+4,  anchor: 'end' }
    ];

    function labelBox(c) {
      var x = c.anchor === 'end' ? cx + c.dx - lblW
            : c.anchor === 'middle' ? cx + c.dx - lblW / 2
            : cx + c.dx;
      var y = cy + c.dy - lblH / 2;
      return { x: x, y: y, w: lblW, h: lblH };
    }
    function clashes(c) {
      var b = labelBox(c);
      for (var j = 0; j < others.length; j++) {
        var o = others[j];
        var clx = Math.max(b.x, Math.min(o.px, b.x + b.w));
        var cly = Math.max(b.y, Math.min(o.py, b.y + b.h));
        var dx = o.px - clx, dy = o.py - cly;
        var pad = o.r + 6;  // dot radius + 6px clearance
        if (dx * dx + dy * dy < pad * pad) return true;
      }
      return false;
    }

    for (var k = 0; k < candidates.length; k++) {
      if (!clashes(candidates[k])) return candidates[k];
    }
    return fallback;  // every quadrant clashes — give up gracefully
  }

  function renderPoint(pt, scale, ctx, area) {
    var t = tone(pt.tone);
    var cx = scale.sx(pt.x);
    var cy = scale.sy(pt.y);
    var r = pt.radius || 7;
    // Smart label placement when the point declares `on:` (curve
    // membership) OR an arrow references this point's id. Otherwise
    // fall back to the legacy gridlines-aware default.
    var useSmart = ctx && (pt.on || (pt.id && arrowsTouchPoint(ctx, pt.id)));
    var auto;
    if (useSmart) {
      auto = smartLabelPosition(pt, ctx, scale, r, area, pt.label, clampSize(13));
      // Track this label's bbox so later labels can avoid it.
      if (auto.bbox && ctx.placedBoxes) ctx.placedBoxes.push(auto.bbox);
    } else {
      var hasGridlines = !!pt.gridlines;
      auto = { dx: r + 3, dy: hasGridlines ? -9 : 0, anchor: 'start' };
    }
    var initDx = pt.labelDx != null ? pt.labelDx : auto.dx;
    var initDy = pt.labelDy != null ? pt.labelDy : auto.dy;
    var initAnchor = pt.anchor || auto.anchor || 'start';

    // Auto label repulsion — pick the (dx, dy, anchor) that puts the
    // label box clear of every OTHER point's dot in the same layer.
    // The initial position (from spec or smart placement) is preferred;
    // only override if it overlaps a neighbouring dot.
    var picked = autoRepelLabel(pt, ctx, scale, r, cx, cy, initDx, initDy, initAnchor);
    var lblX = cx + picked.dx;
    var lblY = cy + picked.dy;
    var anchor = picked.anchor;
    var symbolHtml = pt.symbol ? '<text x="' + cx + '" y="' + (cy + 1) + '" font-size="' + Math.round(r * 1.4) + '" font-weight="900" fill="#fff" text-anchor="middle" dominant-baseline="middle">' + pt.symbol + '</text>' : '';
    var labelHtml = pt.label ? '<text x="' + lblX + '" y="' + lblY + '" font-size="' + clampSize(13) + '" font-weight="700" fill="' + t.label + '" text-anchor="' + anchor + '" dominant-baseline="middle">' + pt.label + '</text>' : '';
    var descHtml = pt.desc ? '<text x="' + (lblX + 14) + '" y="' + lblY + '" font-size="' + MIN_LABEL_SIZE + '" fill="' + LABEL_INK + '" text-anchor="' + anchor + '" dominant-baseline="middle">' + pt.desc + '</text>' : '';
    // Hollow points render as an open circle (stroke only, white fill).
    // Used for equilibrium markers like the demand chart's (Q*, P*) dot.
    var circle = pt.hollow
      ? '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#FFFFFF" stroke="' + t.stroke + '" stroke-width="2.5"/>'
      : '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + t.stroke + '"/>';
    return '<g class="chart-point">' + circle + symbolHtml + labelHtml + descHtml + '</g>';
  }

  /* Boxed annotation label — rounded rect with one or more lines of
     centred text inside. Position is the TOP-LEFT corner in chart space;
     dimensions are also chart-space (engine scales to pixels). Optionally
     draws a dashed connector line from the nearest box edge to a target
     point in chart space.

     Lines can be plain strings (use the box's default tone) or per-line
     style objects `{ text, tone, bold }` for callouts that need mixed
     colours.

     The box renders a solid WHITE base under the tinted overlay so the
     callout cleanly covers any curve/dot that happens to sit beneath
     it — labels never have the chart bleeding through them. */
  function renderBoxedLabel(b, scale, area) {
    var t = tone(b.tone || 'amber');
    var x = scale.sx(b.x);
    var yTop = scale.sy(b.y);
    var w = (b.w || 0.2) * area.width;
    var h = (b.h || 0.06) * area.height;
    var fillTone = t.stroke + '14';     // 8% alpha tint of the tone
    var strokeTone = t.stroke + '50';   // 31% alpha
    var lines = b.lines || [];
    var lineH = h / Math.max(1, lines.length);
    var textParts = lines.map(function (line, i) {
      var ly = yTop + lineH * (i + 0.5) + 4;
      var isObj = line && typeof line === 'object';
      var lineText = isObj ? line.text : line;
      var lineTone = isObj && line.tone ? tone(line.tone).label : t.label;
      var lineWeight = isObj && line.bold === false ? '600' : '700';
      var align = isObj && line.align ? line.align : 'middle';
      var tx = align === 'start' ? (x + 8) : align === 'end' ? (x + w - 8) : (x + w / 2);
      return '<text x="' + tx + '" y="' + ly + '" font-size="' + MIN_LABEL_SIZE + '" font-weight="' + lineWeight + '" fill="' + lineTone + '" text-anchor="' + align + '">' + lineText + '</text>';
    }).join('');
    var connector = '';
    if (b.connectorTo) {
      var cx2 = scale.sx(b.connectorTo.x);
      var cy2 = scale.sy(b.connectorTo.y);
      // Start the connector at the box EDGE midpoint closest to the
      // target — never from inside the box, otherwise the dashed line
      // appears to cross the box's label text (the box fill is tinted
      // and semi-transparent so internal line segments show through).
      var bcx = x + w / 2;
      var bcy = yTop + h / 2;
      var dx = cx2 - bcx;
      var dy = cy2 - bcy;
      var horizontal = Math.abs(dx) / w > Math.abs(dy) / h;
      var sX, sY;
      if (horizontal) {
        sX = dx > 0 ? (x + w) : x;
        sY = bcy;
      } else {
        sX = bcx;
        sY = dy > 0 ? (yTop + h) : yTop;
      }
      connector = '<line x1="' + sX + '" y1="' + sY + '" x2="' + cx2 + '" y2="' + cy2 + '" stroke="' + t.stroke + '" stroke-width="1.2" stroke-dasharray="4 3"/>';
    }
    // Two-rect stack: solid white base + tinted overlay. The white base
    // ensures the callout reliably covers any chart content beneath it.
    var rectAttrs = 'x="' + x + '" y="' + yTop + '" width="' + w + '" height="' + h + '" rx="5"';
    return connector +
           '<rect ' + rectAttrs + ' fill="#FFFFFF"/>' +
           '<rect ' + rectAttrs + ' fill="' + fillTone + '" stroke="' + strokeTone + '"/>' +
           textParts;
  }

  function renderZone(zone, scale) {
    var t = tone(zone.tone);
    // Zone labels support an `anchor` field ('start' | 'middle' | 'end').
    // Auto-anchor by x position: x near right edge → 'end' (text grows
    // left from x, so the label stays inside the SVG when pinned to a
    // top-right or bottom-right corner).
    var anchor = zone.anchor;
    if (!anchor) {
      anchor = zone.x > 0.7 ? 'end' : (zone.x < 0.3 ? 'start' : 'middle');
    }
    return '<text x="' + scale.sx(zone.x) + '" y="' + scale.sy(zone.y) + '" font-size="' + MIN_LABEL_SIZE + '" font-weight="600" fill="' + t.label + '" font-style="italic" text-anchor="' + anchor + '">' + zone.text + '</text>';
  }

  /* ------------------------------------------------------------------ *
     Legend renderer.

     Spec:
       legend: {
         x: 600,                              // left edge of legend column
         title: { tone, text },               // optional one-line header chip
         sections: [
           { header: { text, tone },          // optional small uppercase header
             rows: [{ tone, text }, ...]     // OR
             body: ['line1', 'line2', ...]
           }
         ]
       }
     ------------------------------------------------------------------ */
  function renderLegend(legend) {
    if (!legend) return '';
    var x = legend.x || 600;
    var y = legend.y || 31;
    var parts = ['<g class="chart-legend">'];

    if (legend.title) {
      var tt = tone(legend.title.tone || 'blue');
      parts.push('<circle cx="' + (x + 12) + '" cy="' + y + '" r="6" fill="' + tt.stroke + '"/>');
      parts.push('<text x="' + (x + 26) + '" y="' + (y + 5) + '" font-size="' + clampSize(13) + '" font-weight="700" fill="' + LABEL_INK + '">' + legend.title.text + '</text>');
      y += 44;
    }

    (legend.sections || []).forEach(function (section) {
      if (section.header) {
        var ht = tone(section.header.tone || 'blue');
        // Headers: bumped from 10 → 12 (engine floor), letter-spaced for the punchy look
        parts.push('<text x="' + (x + 20) + '" y="' + y + '" font-size="' + MIN_LABEL_SIZE + '" font-weight="800" fill="' + ht.stroke + '" letter-spacing="1.5">' + section.header.text + '</text>');
        y += 26;
      }
      if (section.rows) {
        section.rows.forEach(function (row) {
          var rt = tone(row.tone || 'slate');
          var marker = row.marker || 'dot';
          if (marker === 'dot') {
            parts.push('<circle cx="' + (x + 27) + '" cy="' + y + '" r="7" fill="' + rt.stroke + '"/>');
          } else if (marker === 'line') {
            parts.push('<line x1="' + (x + 20) + '" y1="' + y + '" x2="' + (x + 40) + '" y2="' + y + '" stroke="' + rt.stroke + '" stroke-width="2.5"/>');
          }
          var mainText = row.label || row.text || '';
          // Row text never gray — coloured if the row carries a tone+line marker, else near-black
          var mainTone = row.labelTone ? tone(row.labelTone).label : (row.marker === 'line' ? rt.label : LABEL_INK);
          var mainWeight = row.bold || row.marker === 'line' ? '700' : '600';
          parts.push('<text x="' + (x + 42) + '" y="' + (y + 5) + '" font-size="' + clampSize(13) + '" font-weight="' + mainWeight + '" fill="' + mainTone + '">' + mainText + '</text>');
          y += 20;
          if (row.subLines) {
            row.subLines.forEach(function (sub) {
              var subText = typeof sub === 'string' ? sub : sub.text;
              var subTone = typeof sub === 'string' ? LABEL_INK : tone(sub.tone || 'slate').label;
              parts.push('<text x="' + (x + 42) + '" y="' + (y + 5) + '" font-size="' + MIN_LABEL_SIZE + '" fill="' + subTone + '">' + subText + '</text>');
              y += 18;
            });
            y += 4;
          } else {
            y += 10;
          }
        });
      } else if (section.body) {
        section.body.forEach(function (line) {
          var lineText = typeof line === 'string' ? line : line.text;
          var lineTone = typeof line === 'string' ? LABEL_INK : tone(line.tone || 'slate').label;
          var lineWeight = typeof line === 'object' && line.bold ? '700' : '600';
          var lineSize = clampSize(typeof line === 'object' && line.fontSize ? line.fontSize : 13);
          var lineItalic = typeof line === 'object' && line.italic ? ' font-style="italic"' : '';
          parts.push('<text x="' + (x + 20) + '" y="' + (y + 5) + '" font-size="' + lineSize + '" font-weight="' + lineWeight + '" fill="' + lineTone + '"' + lineItalic + '>' + lineText + '</text>');
          y += 20;
        });
      }
      y += 14;
    });

    parts.push('</g>');
    return parts.join('');
  }

  function renderDivider(divider) {
    if (!divider) return '';
    // Allow horizontal dividers via x1/x2 explicit pair, vertical via x only.
    var stroke = divider.stroke || '#CBD5E1';
    var sw = divider.strokeWidth || 1;
    var dashAttr = divider.dashed === false ? '' : ' stroke-dasharray="' + (divider.dashed || '5 4') + '"';
    if (divider.x1 != null && divider.x2 != null) {
      return '<line x1="' + divider.x1 + '" y1="' + (divider.y1 || 16) + '" x2="' + divider.x2 + '" y2="' + (divider.y2 || 424) + '" stroke="' + stroke + '" stroke-width="' + sw + '"' + dashAttr + '/>';
    }
    return '<line x1="' + divider.x + '" y1="' + (divider.y1 || 16) + '" x2="' + divider.x + '" y2="' + (divider.y2 || 424) + '" stroke="' + stroke + '" stroke-width="' + sw + '"' + dashAttr + '/>';
  }

  /* Render multiple dividers — spec.dividers takes an array. Used by
     multi-panel charts that need internal dividers within a panel
     (e.g. panel "(b) Tax incidence" has a vertical divider between
     its inelastic / elastic sub-charts). Each divider entry supports
     the same { x, y1, y2, stroke, strokeWidth, dashed } fields plus
     { x1, x2, y } for horizontal dividers. */
  function renderDividers(dividers) {
    if (!Array.isArray(dividers)) return '';
    return dividers.map(renderDivider).join('');
  }

  /* Wrap a list of SVG element strings inside a named <g class="...">.
     Optionally set style="display:none" so the legacy interactiveDiagram
     progressive-reveal JS (which toggles display per layer) can take over. */
  function wrapLayer(className, contentStrs, hidden) {
    if (!contentStrs.length) return '';
    var styleAttr = hidden ? ' style="display:none"' : '';
    return '<g class="' + className + '"' + styleAttr + '>' + contentStrs.join('') + '</g>';
  }

  /* Opportunity-cost triangle: anchor point on a named curve, horizontal
     extent Δx, engine finds the second corner by inverting the curve so
     BOTH triangle corners sit on the curve. Renders:
       - blue dot at start corner (size 4.5)
       - green horizontal arrow → "gain in Good B" (Δx)
       - red vertical arrow → "sacrifice of Good A" (Δy, derived from curve)
       - gray dashed hypotenuse connecting start↔end (chord of the curve)
       - tone-coloured badge above the triangle with the label text
     This guarantees the visual matches the economics: equal Δx across
     triangles → progressively taller Δy as the curve steepens → the
     classic "increasing opportunity cost" picture. */
  function renderOcTriangle(spec, scale, curveRegistry) {
    var P = curveRegistry && curveRegistry[spec.curve];
    if (!P) return '<!-- ocTriangle: curve "' + spec.curve + '" not found -->';
    var start = cubicPoint(P, spec.fromT);
    var endT = findTAtX(P, start[0] + spec.deltaX);
    if (endT == null) return '<!-- ocTriangle: Δx too large for curve -->';
    var end = cubicPoint(P, endT);

    var anchorTone = tone(spec.tone || 'blue');
    var gainTone = tone(spec.gainTone || 'green');
    var sacTone = tone(spec.sacrificeTone || 'rose');

    var sX = scale.sx(start[0]), sY = scale.sy(start[1]);
    var eX = scale.sx(end[0]), eY = scale.sy(end[1]);
    var cornerX = eX, cornerY = sY;  // bottom-right of the right triangle (same y as start)

    // Horizontal arrow (Good B gain) — short buffer so the arrowhead clears the dot
    var gainBuffer = 4;
    var gainStartX = sX + gainBuffer;
    var hPath = 'M ' + gainStartX + ',' + sY + ' L ' + (cornerX - 0) + ',' + cornerY;

    // Vertical arrow (Good A sacrifice) — from the corner up to the end point on PPF
    var sacPath = 'M ' + cornerX + ',' + cornerY + ' L ' + eX + ',' + (eY + 0);

    // Dashed hypotenuse from start to end
    var hyp = '<line x1="' + sX + '" y1="' + sY + '" x2="' + eX + '" y2="' + eY + '" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3 2"/>';

    // Badge: rectangle + centred label, positioned above the start corner
    var badgeText = spec.label || '';
    var badgeW = Math.max(48, badgeText.length * 7);
    var badgeH = 18;
    var badgeX = sX - badgeW - 6;
    var badgeY = sY - badgeH - 6;
    var badgeBg = anchorTone.stroke + '22';   // tinted with alpha
    var badge = '<rect x="' + badgeX + '" y="' + badgeY + '" width="' + badgeW + '" height="' + badgeH + '" rx="4" fill="' + badgeBg + '"/>' +
                '<text x="' + (badgeX + badgeW/2) + '" y="' + (badgeY + badgeH - 5) + '" font-size="' + MIN_LABEL_SIZE + '" font-weight="700" fill="' + anchorTone.label + '" text-anchor="middle">' + badgeText + '</text>';

    // Internal triangle arrows are short — use a tiny buffer so they
    // stay visible. The default ARROW_BUFFER (8px) is for longer arrows
    // between labelled points.
    var triBuf = 2;
    return [
      hyp,
      '<circle cx="' + sX + '" cy="' + sY + '" r="4.5" fill="' + anchorTone.stroke + '"/>',
      '<path d="' + applyPathBuffer(hPath, triBuf) + '" fill="none" stroke="' + gainTone.stroke + '" stroke-width="1.5" marker-end="url(#' + (spec.gainMarker || 'ppfboi-gn') + ')"/>',
      '<path d="' + applyPathBuffer(sacPath, triBuf) + '" fill="none" stroke="' + sacTone.stroke + '" stroke-width="1.5" marker-end="url(#' + (spec.sacrificeMarker || 'ppfboi-sac') + ')"/>',
      badge
    ].join('');
  }

  /* Render the contents of a single view's content layer */
  function renderViewContent(view, scale, area, ctx) {
    var parts = [];
    // Polygons FIRST so curves/lines render on top of region fills
    // (CS / PS / govt rectangles / DWL triangles inside a view).
    (view.polygons || []).forEach(function (p) { parts.push(renderPolygon(p, scale)); });
    (view.curves || []).forEach(function (c) { parts.push(renderCurve(c, scale)); });
    (view.arrows || []).forEach(function (a) { parts.push(renderArrow(a, scale, ctx.curveRegistry, ctx)); });
    (view.ocTriangles || []).forEach(function (tri) { parts.push(renderOcTriangle(tri, scale, ctx.curveRegistry)); });
    (view.boxedLabels || []).forEach(function (b) { parts.push(renderBoxedLabel(b, scale, area)); });
    (view.points || []).forEach(function (p) {
      parts.push(renderPointGridlines(p, scale, area));
      parts.push(renderPoint(p, scale, ctx, area));
    });
    (view.zones || []).forEach(function (z) { parts.push(renderZone(z, scale)); });
    (view.texts || []).forEach(function (t) { parts.push(renderText(t, scale, ctx, area)); });
    return parts;
  }

  /* Render a single panel's content into the parts array.
     Used by both the legacy single-chartArea path and the multi-panel
     path (`spec.panels: [...]`). The panel shape is identical to a
     top-level spec — chartArea, axes, curves, polygons, arrows, points,
     texts, zones, views, legends — except it never carries its own
     viewBox / width / height / background / divider (those are svg-wide). */
  function renderPanelContent(panel, ctx, parts, clipId) {
    var area = panel.chartArea;
    var scale = makeScale(area, clipId);

    // Optional panel container box — drawn FIRST so chart content sits on top.
    // Used by macro grids (taxSubsidyFourPanels) that frame each panel with
    // a rounded white card.
    if (panel.box) {
      var b = panel.box;
      var fill = b.fill || '#FFFFFF';
      var stroke = b.stroke || '#E2E8F0';
      var sw = b.strokeWidth || 1;
      var rx = b.rx != null ? b.rx : 8;
      parts.push('<rect x="' + b.x + '" y="' + b.y + '" width="' + b.width + '" height="' + b.height + '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '" rx="' + rx + '"/>');
    }

    // Per-panel axes (skip rendering when axes:false). Skipped also when
    // the panel is just a container shell with no chartArea content.
    if (panel.axes !== false && area) {
      parts.push(wrapLayer('layer-axes', [renderAxes(area, panel.axes || {})]));
    }

    // Optional panel title — positioned above chartArea by default, or at
    // an absolute SVG y when `panel.titleY` is given.
    if (panel.title) {
      var titleX = panel.titleX != null ? panel.titleX
                 : (panel.box ? panel.box.x + panel.box.width / 2 : (area ? area.x + area.width / 2 : 0));
      var titleY = panel.titleY != null ? panel.titleY
                 : (area ? area.y - 12 : (panel.box ? panel.box.y + 17 : 12));
      var tt = tone(panel.titleTone || 'slate');
      var titleSize = panel.titleSize || 12;
      parts.push('<text x="' + titleX + '" y="' + titleY + '" font-size="' + titleSize + '" font-weight="800" fill="' + tt.label + '" text-anchor="middle">' + panel.title + '</text>');
    }

    // If the panel is a pure container (box + title only, no chartArea),
    // skip the rest of the per-panel rendering — there's nothing to draw.
    if (!area) return;

    function maybeWrap(shape, rendered) {
      return shape.layer ? wrapLayer(shape.layer, [rendered]) : rendered;
    }

    (panel.polygons || []).forEach(function (p) {
      parts.push(maybeWrap(p, renderPolygon(p, scale)));
    });
    (panel.curves || []).forEach(function (c) {
      parts.push(maybeWrap(c, renderCurve(c, scale)));
    });
    (panel.zones || []).forEach(function (z) { parts.push(maybeWrap(z, renderZone(z, scale))); });
    (panel.arrows || []).forEach(function (a) { parts.push(maybeWrap(a, renderArrow(a, scale, ctx.curveRegistry, ctx))); });
    (panel.points || []).forEach(function (p) {
      var renderedDot = renderPointGridlines(p, scale, area) + renderPoint(p, scale, ctx, area);
      parts.push(maybeWrap(p, renderedDot));
    });
    (panel.texts || []).forEach(function (t) { parts.push(maybeWrap(t, renderText(t, scale, ctx, area))); });

    (panel.legends || []).forEach(function (lg) {
      var rendered = renderLegend(lg);
      parts.push(lg.layer ? wrapLayer(lg.layer, [rendered]) : rendered);
    });

    var hideViews = !!panel.viewDefaultsHidden;
    (panel.views || []).forEach(function (view) {
      var contentLayer = view.contentLayer || ('layer-' + view.key);
      var legendLayer = view.legendLayer || ('layer-legend-' + view.key);
      var hidden = view.hidden != null ? view.hidden : hideViews;
      parts.push(wrapLayer(contentLayer, renderViewContent(view, scale, area, ctx), hidden));
      if (view.legend) parts.push(wrapLayer(legendLayer, [renderLegend(view.legend)], hidden));
    });

    if (panel.legend && !(panel.views || []).length) parts.push(renderLegend(panel.legend));
  }

  function render(spec) {
    var width = spec.width || 560;
    var height = spec.height || 440;
    var className = spec.className || 'econos-chart';

    // Multi-panel path: `spec.panels: [...]` means render each panel's
    // shapes into a single SVG, with each panel using its own chartArea
    // as a self-contained coordinate system. Used by side-by-side
    // comparison diagrams (PED elastic-vs-inelastic, PES, 4-panel
    // tax-vs-subsidy). Single-panel (legacy) path stays unchanged.
    var panels = spec.panels;
    var isMulti = Array.isArray(panels) && panels.length > 0;
    var area = isMulti ? null : (spec.chartArea || { x: 60, y: 50, width: width - 100, height: height - 100 });

    var parts = [];
    parts.push('<svg class="' + className + '" viewBox="0 0 ' + width + ' ' + height + '" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">');

    // Per-panel auto-clips for `renderCurve`'s automatic clipping. Single-
    // panel charts use the legacy id `econos-chart-clip`; multi-panel
    // charts emit numbered clips and let each panel scope its own.
    var clips = '';
    if (isMulti) {
      panels.forEach(function (p, i) {
        // Skip container-only panels (box + title, no chartArea) — they
        // have no curves to clip.
        if (!p.chartArea) return;
        var a = p.chartArea;
        clips += '<clipPath id="econos-chart-clip-' + i + '"><rect x="' + a.x + '" y="' + a.y + '" width="' + a.width + '" height="' + a.height + '"/></clipPath>';
      });
      // Legacy fallback clip — uses the first chartArea-bearing panel.
      var firstWithArea = panels.find ? panels.find(function (p) { return p.chartArea; })
                                       : (function () { for (var i = 0; i < panels.length; i++) if (panels[i].chartArea) return panels[i]; return null; })();
      if (firstWithArea) {
        var first = firstWithArea.chartArea;
        clips += '<clipPath id="econos-chart-clip"><rect x="' + first.x + '" y="' + first.y + '" width="' + first.width + '" height="' + first.height + '"/></clipPath>';
      }
    } else {
      clips = '<clipPath id="econos-chart-clip"><rect x="' + area.x + '" y="' + area.y + '" width="' + area.width + '" height="' + area.height + '"/></clipPath>';
    }
    parts.push('<defs>' + clips + (spec.defs || '') + '</defs>');

    var bg = spec.background || '#FFFFFF';
    parts.push('<rect width="' + width + '" height="' + height + '" fill="' + bg + '" rx="12"/>');
    parts.push(renderDivider(spec.divider));
    parts.push(renderDividers(spec.dividers));

    // Approach B: build a single CONTEXT that the render functions consult
    // for cross-element awareness. The context carries:
    //   - curveRegistry:  curve id → parsed cubic control points
    //   - pointRegistry:  point id → { x, y } in chart space
    //   - arrows:         every arrow with from/to references (for label
    //                     placement and for resolving from/to → coords)
    var ctx = { curveRegistry: {}, pointRegistry: {}, allPoints: [], arrows: [], placedBoxes: [], devWarnings: [] };

    function registerCurve(c) {
      if (c && c.id) {
        var parsed = parseCubic(c.d);
        if (parsed) ctx.curveRegistry[c.id] = parsed;
      }
    }
    function registerPoint(p) {
      if (p && p.id) ctx.pointRegistry[p.id] = { x: p.x, y: p.y, on: p.on };
      // Also track every point's position + layer for automatic label
      // repulsion in renderPoint. Layer-aware so points in mutually-
      // exclusive state layers don't push each other around.
      if (p && p.x != null && p.y != null) {
        ctx.allPoints.push({ x: p.x, y: p.y, layer: p.layer, r: p.radius || 7 });
      }
    }
    function registerArrows(arrows) {
      (arrows || []).forEach(function (a) { if (a.from || a.to) ctx.arrows.push(a); });
    }

    // Collect cross-reference data from EVERY panel (multi) or the top
    // level (single), plus all views, so labels/arrows can reference
    // points/curves across the whole spec.
    var collectFrom = isMulti ? panels : [spec];
    collectFrom.forEach(function (src) {
      (src.curves || []).forEach(registerCurve);
      (src.points || []).forEach(registerPoint);
      registerArrows(src.arrows);
      (src.views || []).forEach(function (v) {
        (v.curves || []).forEach(registerCurve);
        (v.points || []).forEach(registerPoint);
        registerArrows(v.arrows);
      });
    });

    // Render each panel (multi-panel) or the spec itself (single-panel).
    if (isMulti) {
      panels.forEach(function (panel, i) {
        renderPanelContent(panel, ctx, parts, 'econos-chart-clip-' + i);
      });
    } else {
      // Synthesize a panel from the spec's top-level shape fields so
      // single-panel and multi-panel paths share the same rendering code.
      renderPanelContent({
        chartArea: area,
        axes: spec.axes,
        curves: spec.curves,
        polygons: spec.polygons,
        zones: spec.zones,
        arrows: spec.arrows,
        points: spec.points,
        texts: spec.texts,
        legends: spec.legends,
        legend: spec.legend,
        views: spec.views,
        viewDefaultsHidden: spec.viewDefaultsHidden
      }, ctx, parts);
    }

    parts.push('</svg>');

    // Dev-mode post-render collision scan. Pairs of placed label
    // bboxes are checked for overlap; each overlap is logged. The
    // smart placement should prevent most overlaps; this is a
    // safety net for patterns the heuristic doesn't yet catch.
    var devOn = (typeof window !== 'undefined' && window.ECONOS_DEV);
    if (devOn && ctx.placedBoxes.length > 1) {
      for (var i = 0; i < ctx.placedBoxes.length; i++) {
        for (var j = i + 1; j < ctx.placedBoxes.length; j++) {
          if (boxesOverlap(ctx.placedBoxes[i], ctx.placedBoxes[j])) {
            var msg = '[ECONOS_PPF] label clash: "' + ctx.placedBoxes[i].text + '" ↔ "' + ctx.placedBoxes[j].text + '"';
            ctx.devWarnings.push(msg);
            try { console.warn(msg, ctx.placedBoxes[i], ctx.placedBoxes[j]); } catch (e) {}
          }
        }
      }
    }
    // Stash for programmatic inspection (test harnesses can read this).
    if (typeof window !== 'undefined' && window.ECONOS_PPF) {
      window.ECONOS_PPF.lastWarnings = ctx.devWarnings;
      window.ECONOS_PPF.lastPlacedBoxes = ctx.placedBoxes;
    }

    return parts.join('');
  }

  window.ECONOS_PPF = { render: render };
})();
