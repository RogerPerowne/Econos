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

  /* Parse an SVG path d-string into a list of segments. Each segment is
     {type:'line', p0, p1} or {type:'cubic', p0, p1, p2, p3}. Supports the
     absolute commands actually used in chart specs: M (move), L (line),
     C (cubic Bezier). Returns null on parse failure.

     The segments share endpoints — segment N's p1/p3 equals segment N+1's
     p0. This makes intersection sampling trivial: just iterate segments.

     Used by the intersection solver (`point.intersection: { curves: [...] }`)
     so authors can declare equilibrium points by curve identity rather
     than hand-computing coordinates. */
  function parsePath(d) {
    if (typeof d !== 'string') return null;
    var tokens = d.match(/[MLC]|-?[\d.]+/g);
    if (!tokens) return null;
    var segments = [];
    var cursor = null;
    var i = 0;
    while (i < tokens.length) {
      var cmd = tokens[i++];
      if (cmd === 'M') {
        cursor = [parseFloat(tokens[i++]), parseFloat(tokens[i++])];
      } else if (cmd === 'L') {
        if (!cursor) return null;
        var p1 = [parseFloat(tokens[i++]), parseFloat(tokens[i++])];
        segments.push({ type: 'line', p0: cursor, p1: p1 });
        cursor = p1;
      } else if (cmd === 'C') {
        if (!cursor) return null;
        var c1 = [parseFloat(tokens[i++]), parseFloat(tokens[i++])];
        var c2 = [parseFloat(tokens[i++]), parseFloat(tokens[i++])];
        var c3 = [parseFloat(tokens[i++]), parseFloat(tokens[i++])];
        segments.push({ type: 'cubic', p0: cursor, p1: c1, p2: c2, p3: c3 });
        cursor = c3;
      } else {
        return null;
      }
    }
    return segments.length ? segments : null;
  }

  /* Named curve shapes. Compile to an SVG `d` string at render time.
     Authors can replace raw paths with a named recipe:

       linear      slope-and-point or two-point line. Clipped to the
                   chart-space [0..1] square so a slope-3 line still
                   renders cleanly.
       vertical    vertical line at chart-x = x, optionally cropped
                   to [from, to] on the y-axis.
       horizontal  mirror of vertical.
       keynesianAS the textbook reverse-L: flat horizontal range,
                   smooth cubic-Bezier bottleneck, asymptotic vertical
                   at full-capacity output. Parameters: flatY, kneeX,
                   capacityX, top (default 0.95). Control points are
                   chosen so the curve is C¹-continuous at both joins
                   (horizontal tangent at the knee, vertical tangent
                   at the capacity limit). One recipe, one consistent
                   shape across every Keynesian AD-AS chart.

     Falls back to null (caller keeps the explicit `d`) if the shape
     is unrecognised. */
  function compileShape(shape) {
    if (!shape || typeof shape !== 'object') return null;
    var type = shape.type;
    if (type === 'linear') {
      // Line through `through: [x, y]` with `slope: m`, extending across
      // the chart [0..1]. Falls back to two-point form when `from`/`to`
      // are given instead.
      if (Array.isArray(shape.from) && Array.isArray(shape.to)) {
        return 'M ' + shape.from[0] + ',' + shape.from[1] +
               ' L ' + shape.to[0] + ',' + shape.to[1];
      }
      if (Array.isArray(shape.through) && typeof shape.slope === 'number') {
        var m = shape.slope;
        var px = shape.through[0], py = shape.through[1];
        var range = shape.extend || [0, 1];
        var x1 = range[0], x2 = range[1];
        var y1 = py + m * (x1 - px);
        var y2 = py + m * (x2 - px);
        return 'M ' + x1 + ',' + y1 + ' L ' + x2 + ',' + y2;
      }
      return null;
    }
    if (type === 'vertical') {
      var vx = shape.x;
      var vy1 = shape.from != null ? shape.from : 0;
      var vy2 = shape.to != null ? shape.to : 0.992;
      return 'M ' + vx + ',' + vy1 + ' L ' + vx + ',' + vy2;
    }
    if (type === 'horizontal') {
      var hy = shape.y;
      var hx1 = shape.from != null ? shape.from : 0;
      var hx2 = shape.to != null ? shape.to : 1;
      return 'M ' + hx1 + ',' + hy + ' L ' + hx2 + ',' + hy;
    }
    if (type === 'keynesianAS') {
      // Reverse-L shape with three regions:
      //   1. Flat horizontal at y=flatY from x=0.05 to x=kneeX
      //   2. Smooth cubic Bezier bottleneck up to (capacityX, top)
      //   3. Asymptotic vertical — the bezier ends with vertical
      //      tangent so the curve effectively goes straight up.
      // C¹-continuous at both joins. Control points derived so the
      // bottleneck is gentle near the flat and steep near the top
      // — the textbook "knee" picture.
      var flatY = shape.flatY != null ? shape.flatY : 0.15;
      var kneeX = shape.kneeX != null ? shape.kneeX : 0.45;
      var capX  = shape.capacityX != null ? shape.capacityX : 0.65;
      var top   = shape.top != null ? shape.top : 0.95;
      var startX = shape.startX != null ? shape.startX : 0.05;
      // First control point: extends the horizontal tangent from the
      // knee a fraction of the way to capX (keeps the flat genuinely
      // flat for the first portion of the transition).
      var c1x = kneeX + (capX - kneeX) * 0.535;
      var c1y = flatY;
      // Second control point: sits on the vertical line at capX with
      // a y just above flatY (keeps the curve mostly low until it
      // shoots up near the cap).
      var c2x = capX;
      var c2y = flatY + (top - flatY) * 0.0513;
      return 'M ' + startX + ',' + flatY +
             ' L ' + kneeX + ',' + flatY +
             ' C ' + c1x + ',' + c1y +
             ' '   + c2x + ',' + c2y +
             ' '   + capX + ',' + top;
    }
    return null;
  }

  /* Sample y on a parsed path at a given x. Used by the welfare-region
     compiler to trace the top/bottom edge of a CS or PS triangle along
     the underlying demand or supply curve. Returns null if x is outside
     the path's x-extent. */
  function pathYAtX(path, targetX) {
    for (var i = 0; i < path.length; i++) {
      var seg = path[i];
      if (seg.type === 'line') {
        var x0 = seg.p0[0], x1 = seg.p1[0];
        if (targetX >= Math.min(x0, x1) - 1e-9 && targetX <= Math.max(x0, x1) + 1e-9) {
          if (Math.abs(x1 - x0) < 1e-9) return seg.p0[1];
          var t = (targetX - x0) / (x1 - x0);
          return seg.p0[1] + t * (seg.p1[1] - seg.p0[1]);
        }
      } else if (seg.type === 'cubic') {
        var P = [seg.p0, seg.p1, seg.p2, seg.p3];
        var t2 = findTAtX(P, targetX);
        if (t2 != null) return cubicPoint(P, t2)[1];
      }
    }
    return null;
  }

  /* Auto-compile welfare regions (consumer surplus, producer surplus,
     etc.) to polygons. The author declares the region by curve identity
     and a reference price; the engine traces along the curve to build
     the polygon. Removes the need to hand-compute triangle corners.

       welfareRegions: [
         { type: 'consumer-surplus', curve: 'D', price: 0.5,
           tone: 'blue', opacity: 0.18 },
         { type: 'producer-surplus', curve: 'S', price: 0.5,
           tone: 'amber', opacity: 0.18 }
       ]

     Consumer surplus = area bounded by demand (above price line),
     the horizontal price line, and the y-axis. For straight demand
     curves this is a triangle; for curved demand it traces samples.

     Producer surplus = mirror, bounded by supply (below price), the
     horizontal price line, and the y-axis. */
  var WELFARE_SAMPLES = 24;
  function compileWelfareRegion(region, pathRegistry) {
    var path = pathRegistry[region.curve];
    if (!path) return null;
    var price = region.price;
    // Find the x where the curve crosses y=price (right edge of the polygon).
    var crossings = intersectPaths(path, [{ type: 'line', p0: [0, price], p1: [1, price] }]);
    if (!crossings.length) return null;
    var qStar = crossings[0][0];
    var type = region.type;
    var points;
    if (type === 'consumer-surplus') {
      // Walk back from (qStar, price) along the curve to x=0, then
      // close down to (0, price). Top edge traces the demand curve;
      // bottom edge is horizontal at the price.
      points = [[0, price], [qStar, price]];
      var step = qStar / WELFARE_SAMPLES;
      for (var i = WELFARE_SAMPLES; i >= 0; i--) {
        var x = i * step;
        var y = pathYAtX(path, x);
        if (y != null) points.push([x, y]);
      }
    } else if (type === 'producer-surplus') {
      // Symmetric: top edge horizontal at price, bottom edge traces
      // the supply curve.
      points = [[0, price], [qStar, price]];
      var step2 = qStar / WELFARE_SAMPLES;
      for (var j = WELFARE_SAMPLES; j >= 0; j--) {
        var x2 = j * step2;
        var y2 = pathYAtX(path, x2);
        if (y2 != null) points.push([x2, y2]);
      }
    } else {
      return null;
    }
    return {
      points: points,
      fill: region.fill || (region.tone === 'amber' ? '#F59E0B' : region.tone === 'blue' ? '#3B82F6' : '#10B981'),
      opacity: region.opacity != null ? region.opacity : 0.18,
      layer: region.layer,
      perspective: region.perspective
    };
  }

  /* Find all intersection points between two segments. Returns a list
     of [x, y] tuples (usually 0, 1, or 2 points). Handles:
       - line ∩ line   (closed-form)
       - line ∩ cubic  (sample-and-bisect for sign changes)
       - cubic ∩ cubic (NOT IMPLEMENTED — none of our charts need it yet) */
  function intersectLineLine(a, b) {
    var x1 = a.p0[0], y1 = a.p0[1], x2 = a.p1[0], y2 = a.p1[1];
    var x3 = b.p0[0], y3 = b.p0[1], x4 = b.p1[0], y4 = b.p1[1];
    var denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (Math.abs(denom) < 1e-9) return [];
    var t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denom;
    var u = ((x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2)) / denom;
    if (t < -1e-6 || t > 1 + 1e-6 || u < -1e-6 || u > 1 + 1e-6) return [];
    return [[x1 + t * (x2 - x1), y1 + t * (y2 - y1)]];
  }

  function intersectLineCubic(line, cubic) {
    // Cross-product sign function: f(t) = (B(t)-p0) × (p1-p0)
    // Zero where the cubic crosses the (infinite) line through p0→p1.
    var lx0 = line.p0[0], ly0 = line.p0[1];
    var dx = line.p1[0] - lx0, dy = line.p1[1] - ly0;
    var P = [cubic.p0, cubic.p1, cubic.p2, cubic.p3];
    function f(t) {
      var pt = cubicPoint(P, t);
      return (pt[0] - lx0) * dy - (pt[1] - ly0) * dx;
    }
    var STEPS = 80, hits = [];
    var prevF = f(0), prevT = 0;
    for (var s = 1; s <= STEPS; s++) {
      var t = s / STEPS;
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
        // Check that the intersection ALSO lies within the line segment's
        // extent (not just the infinite line).
        var len = Math.sqrt(dx * dx + dy * dy);
        if (len > 1e-9) {
          var u = ((pt[0] - lx0) * dx + (pt[1] - ly0) * dy) / (len * len);
          if (u >= -1e-6 && u <= 1 + 1e-6) hits.push([pt[0], pt[1]]);
        }
      }
      prevF = ff; prevT = t;
    }
    return hits;
  }

  function intersectSegments(a, b) {
    if (a.type === 'line' && b.type === 'line') return intersectLineLine(a, b);
    if (a.type === 'line' && b.type === 'cubic') return intersectLineCubic(a, b);
    if (a.type === 'cubic' && b.type === 'line') return intersectLineCubic(b, a);
    return []; // cubic ∩ cubic not yet needed
  }

  /* Find every intersection between two parsed paths (lists of segments). */
  function intersectPaths(path1, path2) {
    var hits = [];
    path1.forEach(function (s1) {
      path2.forEach(function (s2) {
        intersectSegments(s1, s2).forEach(function (p) { hits.push(p); });
      });
    });
    return hits;
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
  // Minimum pixel gap between two tick labels on the same axis before
  // the engine considers them visually collided. ~14px ≈ font size for
  // MIN_LABEL_SIZE=12 with a bit of leading.
  var MIN_TICK_GAP = 14;

  /* Render dashed gridlines (axis → point on both axes) plus optional
     tick labels on each axis. Tick labels are tracked in `ctx` so:
       - Identical labels at the same axis position (within MIN_TICK_GAP)
         are DEDUPED — the second call is silently skipped. Saves the
         author from re-declaring `ticks: { x: 'Yf' }` on every point
         that sits at the same vertical line.
       - DIFFERENT labels close together (within MIN_TICK_GAP) log a dev
         warning naming both. Catches the silent-collision case where
         two points land 8px apart on the y-axis and their ticks render
         on top of each other invisibly. */
  function renderPointGridlines(pt, scale, area, ctx) {
    if (!pt.gridlines) return '';
    var gridTone = typeof pt.gridlines === 'string' ? tone(pt.gridlines) : tone(pt.tone);
    var t = tone(pt.tone);
    var cx = scale.sx(pt.x);
    var cy = scale.sy(pt.y);
    var parts = [
      '<line x1="' + area.x + '" y1="' + cy + '" x2="' + cx + '" y2="' + cy + '" stroke="' + gridTone.stroke + '" stroke-width="1" stroke-dasharray="4 3"/>',
      '<line x1="' + cx + '" y1="' + (area.y + area.height) + '" x2="' + cx + '" y2="' + cy + '" stroke="' + gridTone.stroke + '" stroke-width="1" stroke-dasharray="4 3"/>'
    ];

    // Track placed tick labels per axis so we can dedupe and detect
    // collisions across calls. Stored on ctx so the state lives for the
    // lifetime of a single render() pass.
    if (ctx && !ctx.placedTicks) ctx.placedTicks = { x: [], y: [] };

    function placeTick(axis, pos, text, x, y) {
      if (!ctx) return true;
      var existing = ctx.placedTicks[axis];
      // Perspective- and layer-aware: two ticks in DIFFERENT
      // perspectives (or mutually-exclusive layers) never render at
      // the same time, so a position overlap is fine. Only flag a
      // collision when both ticks could conceivably be visible
      // together — same perspective + compatible layer.
      var persp = pt.perspective || null;
      var layer = pt.layer || null;
      for (var i = 0; i < existing.length; i++) {
        var prev = existing[i];
        if (Math.abs(prev.pos - pos) < MIN_TICK_GAP) {
          if (prev.perspective && persp && prev.perspective !== persp) continue;
          if (prev.text === text) {
            return false; // duplicate label — silently skip
          }
          var msg = '[ECONOS_PPF] tick collision on ' + axis + '-axis: "' +
            prev.text + '" at ' + prev.pos.toFixed(1) + ' vs "' + text +
            '" at ' + pos.toFixed(1) + ' (gap ' +
            Math.abs(prev.pos - pos).toFixed(1) + 'px < ' + MIN_TICK_GAP + 'px)';
          ctx.devWarnings.push(msg);
          try { console.warn(msg); } catch (e) {}
        }
      }
      existing.push({ pos: pos, text: text, x: x, y: y, perspective: persp, layer: layer });
      return true;
    }

    if (pt.ticks && pt.ticks.y) {
      var ty = pt.ticks.y;
      if (placeTick('y', cy, ty, area.x - 10, cy + 4)) {
        parts.push('<text x="' + (area.x - 10) + '" y="' + (cy + 4) + '" font-size="' + MIN_LABEL_SIZE + '" font-weight="700" fill="' + t.label + '" text-anchor="middle">' + ty + '</text>');
      }
    }
    if (pt.ticks && pt.ticks.x) {
      var tx = pt.ticks.x;
      if (placeTick('x', cx, tx, cx, area.y + area.height + 17)) {
        parts.push('<text x="' + cx + '" y="' + (area.y + area.height + 17) + '" font-size="' + MIN_LABEL_SIZE + '" font-weight="700" fill="' + t.label + '" text-anchor="middle">' + tx + '</text>');
      }
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

     Returns an object `{ bg, fg }` so the caller can render the
     shaded rect BEHIND the curves (so the lines and dots remain
     readable on top) while the text content sits on TOP of the
     whole chart (so it stays readable). The connector dashed line
     stays with the bg layer so it doesn't crash through other text.

     NO white base — the rect is fully transparent except for the
     low-alpha tint. Roger's brief: "shaded panels must be
     transparent so they don't obscure the lines". */
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
    var rectAttrs = 'x="' + x + '" y="' + yTop + '" width="' + w + '" height="' + h + '" rx="5"';
    return {
      bg: connector + '<rect ' + rectAttrs + ' fill="' + fillTone + '" stroke="' + strokeTone + '"/>',
      fg: textParts
    };
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
    // Shaded backgrounds FIRST (polygons + boxed-label rects) so curves
    // and labels render on top — the chart never gets obscured by its
    // own shading. boxedLabel TEXT is appended LAST so it stays
    // readable above the curves.
    (view.polygons || []).forEach(function (p) { parts.push(renderPolygon(p, scale)); });
    var boxedFgs = [];
    (view.boxedLabels || []).forEach(function (b) {
      var rendered = renderBoxedLabel(b, scale, area);
      parts.push(rendered.bg);
      if (rendered.fg) boxedFgs.push(rendered.fg);
    });
    (view.curves || []).forEach(function (c) { parts.push(renderCurve(c, scale)); });
    (view.arrows || []).forEach(function (a) { parts.push(renderArrow(a, scale, ctx.curveRegistry, ctx)); });
    (view.ocTriangles || []).forEach(function (tri) { parts.push(renderOcTriangle(tri, scale, ctx.curveRegistry)); });
    (view.points || []).forEach(function (p) {
      parts.push(renderPointGridlines(p, scale, area, ctx));
      parts.push(renderPoint(p, scale, ctx, area));
    });
    (view.zones || []).forEach(function (z) { parts.push(renderZone(z, scale)); });
    (view.texts || []).forEach(function (t) { parts.push(renderText(t, scale, ctx, area)); });
    // BoxedLabel text overlays go last — readable above everything.
    boxedFgs.forEach(function (fg) { parts.push(fg); });
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

    // Items can carry BOTH `layer: 'idl-N'` (narrative reveal) AND
    // `perspective: 'classical'|'keynesian'` (school-of-thought toggle).
    // Inner-first: perspective wraps first, then layer wraps on top —
    // hiding the layer hides both; hiding the perspective hides only
    // that variant while keeping the layer reveal intact.
    function maybeWrap(shape, rendered) {
      if (shape.perspective) rendered = wrapLayer('perspective-' + shape.perspective, [rendered]);
      if (shape.layer) rendered = wrapLayer(shape.layer, [rendered]);
      return rendered;
    }

    // Shaded backgrounds (polygons + boxedLabel rects) FIRST so curves
    // and dots render on top of them. Roger's rule: shading must never
    // obscure the chart's lines and labels.
    (panel.polygons || []).forEach(function (p) {
      parts.push(maybeWrap(p, renderPolygon(p, scale)));
    });
    var panelBoxedFgs = [];
    (panel.boxedLabels || []).forEach(function (b) {
      var rendered = renderBoxedLabel(b, scale, area);
      parts.push(maybeWrap(b, rendered.bg));
      if (rendered.fg) panelBoxedFgs.push(maybeWrap(b, rendered.fg));
    });
    (panel.curves || []).forEach(function (c) {
      parts.push(maybeWrap(c, renderCurve(c, scale)));
    });
    (panel.zones || []).forEach(function (z) { parts.push(maybeWrap(z, renderZone(z, scale))); });
    (panel.arrows || []).forEach(function (a) { parts.push(maybeWrap(a, renderArrow(a, scale, ctx.curveRegistry, ctx))); });
    (panel.points || []).forEach(function (p) {
      var renderedDot = renderPointGridlines(p, scale, area, ctx) + renderPoint(p, scale, ctx, area);
      parts.push(maybeWrap(p, renderedDot));
    });
    (panel.texts || []).forEach(function (t) { parts.push(maybeWrap(t, renderText(t, scale, ctx, area))); });
    // BoxedLabel text overlays last — readable on top of curves/dots.
    panelBoxedFgs.forEach(function (fg) { parts.push(fg); });

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

  /* Composable templates. `spec.template: 'ad-as'` (or 'supply-demand',
     'ppf', 'cost-curves') applies a recipe of defaults — chart area,
     axis labels, standard marker defs — that the spec can selectively
     override. Author fields ALWAYS win over template fields. Each
     template is a partial spec; missing fields fall through to the
     engine's own defaults. */
  var TEMPLATES = {
    'ad-as': {
      width: 440, height: 340,
      chartArea: { x: 55, y: 35, width: 360, height: 254 },
      axes: { x: { label: 'Real output (Y)' }, y: { label: 'Price level (P)' } }
    },
    'supply-demand': {
      width: 440, height: 340,
      chartArea: { x: 55, y: 35, width: 360, height: 254 },
      axes: { x: { label: 'Quantity (Q)' }, y: { label: 'Price (P)' } }
    },
    'ppf': {
      width: 440, height: 340,
      chartArea: { x: 55, y: 35, width: 360, height: 254 },
      axes: { x: { label: 'Good B' }, y: { label: 'Good A' } }
    },
    'cost-curves': {
      width: 440, height: 340,
      chartArea: { x: 55, y: 35, width: 360, height: 254 },
      axes: { x: { label: 'Quantity (Q)' }, y: { label: 'Cost / Revenue' } }
    }
  };

  function applyTemplate(spec) {
    if (!spec || !spec.template) return spec;
    var tmpl = TEMPLATES[spec.template];
    if (!tmpl) return spec;
    // Shallow merge: spec wins on any explicitly-set field. For nested
    // objects (chartArea, axes), spec also wins as a whole — overriding
    // any one field of chartArea means setting the whole object.
    var merged = {};
    Object.keys(tmpl).forEach(function (k) { merged[k] = tmpl[k]; });
    Object.keys(spec).forEach(function (k) {
      if (spec[k] !== undefined) merged[k] = spec[k];
    });
    return merged;
  }

  /* Build SVG accessibility metadata for a spec. Returns
     `{ title, desc }`. Spec can override either:

       altTitle: 'Custom short summary'
       altDesc:  'Long-form description with all the detail.'

     Otherwise the engine scans curves + points + axes (across all
     panels and views) and assembles a sensible sentence:

       title: "Chart with AD₁, AD₂, LRAS curves and E₁, E₂ points"
       desc:  "Real output (Y) on x-axis, Price level (P) on y-axis.
               Curves: AD₁, AD₂, LRAS. Points: E₁ at (0.65, 0.25),
               E₂ at (0.65, 0.37)."

     Crude but covers the screen-reader baseline: a non-sighted user
     gets at least the structure of the chart instead of "image". */
  function escapeXml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function buildAltText(spec) {
    if (spec.altTitle && spec.altDesc) {
      return { title: escapeXml(spec.altTitle), desc: escapeXml(spec.altDesc) };
    }
    var sources = Array.isArray(spec.panels) && spec.panels.length ? spec.panels : [spec];
    var curveLabels = [], pointDescs = [], axes = null;
    sources.forEach(function (src) {
      if (!axes && src.axes) axes = src.axes;
      (src.curves || []).forEach(function (c) {
        if (c.label) curveLabels.push(c.label);
      });
      (src.points || []).forEach(function (p) {
        if (p.label || p.id) {
          var n = p.label || p.id;
          if (p.x != null && p.y != null) {
            pointDescs.push(n + ' at (' + p.x.toFixed(2) + ', ' + p.y.toFixed(2) + ')');
          } else {
            pointDescs.push(n);
          }
        }
      });
      (src.views || []).forEach(function (v) {
        (v.curves || []).forEach(function (c) { if (c.label) curveLabels.push(c.label); });
        (v.points || []).forEach(function (p) {
          if (p.label || p.id) {
            var n = p.label || p.id;
            if (p.x != null && p.y != null) {
              pointDescs.push(n + ' at (' + p.x.toFixed(2) + ', ' + p.y.toFixed(2) + ')');
            }
          }
        });
      });
    });
    // Dedupe in order.
    function dedupe(a) { var s = {}, out = []; a.forEach(function (x) { if (!s[x]) { s[x] = 1; out.push(x); } }); return out; }
    curveLabels = dedupe(curveLabels);
    pointDescs = dedupe(pointDescs);
    var title;
    if (spec.altTitle) {
      title = spec.altTitle;
    } else if (curveLabels.length && pointDescs.length) {
      title = 'Chart with ' + curveLabels.join(', ') + ' curves and ' +
              pointDescs.map(function (p) { return p.split(' at ')[0]; }).join(', ') + ' points';
    } else if (curveLabels.length) {
      title = 'Chart with ' + curveLabels.join(', ') + ' curves';
    } else {
      title = 'Econos chart';
    }
    var descParts = [];
    if (axes) {
      var xl = axes.x && axes.x.label;
      var yl = axes.y && axes.y.label;
      if (xl && yl) descParts.push(xl + ' on x-axis, ' + yl + ' on y-axis.');
    }
    if (curveLabels.length) descParts.push('Curves: ' + curveLabels.join(', ') + '.');
    if (pointDescs.length) descParts.push('Points: ' + pointDescs.join(', ') + '.');
    return {
      title: escapeXml(title),
      desc: escapeXml(spec.altDesc || (descParts.join(' ') || title))
    };
  }

  function render(specInput) {
    // Defensive: if a spec script tag is missing from the shell HTML,
    // window.ECONOS_FOO_SPEC is undefined and icons.js's top-level
    // `ECONOS_PPF.render(window.ECONOS_FOO_SPEC)` would crash the entire
    // page. Return a visible-but-non-fatal placeholder instead so the
    // rest of the app still boots. Surfaces the bug in DevTools without
    // bricking content.
    if (!specInput || typeof specInput !== 'object') {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[ECONOS_PPF] render() called with no spec — likely a missing <script src="…/specs/X.js"> in the shell HTML. Page boots but this chart will be empty.');
      }
      return '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chart unavailable"><rect width="400" height="200" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2" rx="8"/><text x="200" y="100" font-family="Inter, sans-serif" font-size="13" fill="#92400E" text-anchor="middle" dominant-baseline="middle">Chart spec missing (see console)</text></svg>';
    }
    var spec = applyTemplate(specInput);
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
    // Auto-generate accessibility metadata. Spec may override either
    // field with explicit text; otherwise the engine scans curves +
    // points + axes and assembles a single descriptive sentence.
    // Emitted as `<title>` (short, hover + screen-reader summary) and
    // `<desc>` (longer description) per SVG accessibility guidelines.
    var altMeta = buildAltText(spec);
    // Extend the viewBox up by 16px so the y-axis label (which sits at
    // y≈ area.y - 15, with ascender ~10px above that) has safe headroom.
    // Without this, "Price level" etc. clip at the top of the SVG on
    // every chart whose chartArea.y < 30.
    parts.push('<svg class="' + className + '" viewBox="0 -16 ' + width + ' ' + (height + 16) + '" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif" role="img" aria-labelledby="econos-chart-title econos-chart-desc">');
    parts.push('<title id="econos-chart-title">' + altMeta.title + '</title>');
    parts.push('<desc id="econos-chart-desc">' + altMeta.desc + '</desc>');

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
    // Cumulative idl-* layer styles for the ad-interactive view-switcher.
    // `spec.layers: ['idl-1', 'idl-2']` declares the layers; engine emits:
    //   .idl-N { display: none }                  (hidden by default)
    //   .sv-show-N .idl-1, .sv-show-N .idl-2 {…}  (view N shows layers 1..N)
    // Items reach the layers via `layer: 'idl-1'` on any primitive — the
    // existing `maybeWrap` already produces `<g class="idl-N">` wrappers.
    // `spec.inverseLayers: ['idl-old-solid']` are layers that are SHOWN by
    // default and HIDDEN whenever any view is active. Used by shift charts
    // where the original solid curve must vanish once the user steps into
    // a view that overlays a dashed version of the same curve.
    // `spec.layerMode: 'exclusive'` switches the reveal pattern so view N
    // shows ONLY layer N (instead of layers 1..N). Used by side-by-side
    // shape comparisons like Classical-vs-Keynesian LRAS.
    // `spec.layerAliases: { 'idl-1': ['show-classical'], 'idl-2': ['show-keynesian'] }`
    // adds extra parent classes that reveal a layer — used by the
    // static-article engine which swaps `show-<state>` on the wrapper
    // instead of the SPA's `sv-show-N`.
    var layerCss = '';
    if (Array.isArray(spec.layers) && spec.layers.length) {
      var exclusive = spec.layerMode === 'exclusive';
      var aliases = spec.layerAliases || {};
      // Layers are hidden via opacity + visibility (not display) so the
      // transition between hidden/shown is animatable. visibility flips
      // after the opacity fade so hidden layers don't trap pointer
      // events; the delayed-visibility trick keeps the fade-out smooth.
      var fadeOut = 'opacity:0;visibility:hidden;transition:opacity .35s ease-out,visibility 0s linear .35s';
      var fadeIn  = 'opacity:1;visibility:visible;transition:opacity .35s ease-out';
      var hides = spec.layers.map(function (l) { return '.' + l + '{' + fadeOut + '}'; }).join('');
      var reveals = spec.layers.map(function (l, i) {
        var n = i + 1;
        var visible = exclusive ? [l] : spec.layers.slice(0, n);
        var sel = visible.map(function (vl) { return '.sv-show-' + n + ' .' + vl; }).join(',');
        return sel + '{' + fadeIn + '}';
      }).join('');
      var aliasReveals = Object.keys(aliases).map(function (layerName) {
        return aliases[layerName].map(function (parent) {
          return '.' + parent + ' .' + layerName + '{' + fadeIn + '}';
        }).join('');
      }).join('');
      var inverseCss = '';
      if (Array.isArray(spec.inverseLayers) && spec.inverseLayers.length) {
        // Inverse layers are shown BY DEFAULT and fade out when any view
        // activates — opposite direction from idl-N.
        var inverseShow = spec.inverseLayers.map(function (l) { return '.' + l + '{' + fadeIn + '}'; }).join('');
        var inverseHides = spec.layers.map(function (_, i) {
          var n = i + 1;
          return spec.inverseLayers.map(function (l) { return '.sv-show-' + n + ' .' + l; }).join(',');
        }).join(',');
        inverseCss = inverseShow + inverseHides + '{' + fadeOut + '}';
      }
      layerCss = '<style>' + hides + reveals + aliasReveals + inverseCss + '</style>';
    }
    // `spec.perspectives: ['classical', 'keynesian']` declares a binary
    // school-of-thought toggle. Primitives opt in via `perspective:
    // 'classical'` (or 'keynesian'); the engine wraps them in
    // `<g class="perspective-X">` and emits CSS so only the perspective
    // matching the wrapper's `.chart-<name>` class is visible. Items
    // without a perspective field are shared base content — visible
    // under every perspective. There is no `'both'` value: shared
    // primitives simply omit the field.
    var perspectiveCss = '';
    if (Array.isArray(spec.perspectives) && spec.perspectives.length) {
      // Same opacity+visibility pattern as the idl layers so toggling
      // Classical → Keynesian cross-fades the two AS shapes instead
      // of swap-cutting.
      var pFadeOut = 'opacity:0;visibility:hidden;transition:opacity .35s ease-out,visibility 0s linear .35s';
      var pFadeIn  = 'opacity:1;visibility:visible;transition:opacity .35s ease-out';
      var pHides = spec.perspectives.map(function (p) { return '.perspective-' + p; }).join(',') + '{' + pFadeOut + '}';
      var pReveals = spec.perspectives.map(function (p) {
        return '.chart-' + p + ' .perspective-' + p + '{' + pFadeIn + '}';
      }).join('');
      perspectiveCss = '<style>' + pHides + pReveals + '</style>';
    }
    // Built-in arrow markers — emitted in every chart's <defs> so authors
    // can write `markerEnd: 'econos-arrow-blue'` instead of hand-rolling
    // their own. ALL markers are designed as RIGHT-POINTING triangles
    // (tip at the +X end of local coords) with `orient="auto"`. The
    // browser auto-rotates each marker to align with the line's tangent
    // direction at the endpoint — so the SAME marker arrows-up on a
    // vertical line going up, arrows-down on a line going down, and
    // arrows-right on a horizontal line. Per-spec hand-rolled markers
    // that pointed up or down in LOCAL coords have produced HORIZONTAL
    // arrowheads on vertical lines (the auto-rotation rotates them into
    // the wrong axis). Use these built-ins instead.
    var builtInArrows = [
      ['blue',  '#2563EB'],
      ['amber', '#D97706'],
      ['green', '#059669'],
      ['red',   '#DC2626'],
      ['slate', '#475569'],
      ['rose',  '#E11D48'],
      ['purple','#7C3AED']
    ].map(function (pair) {
      return '<marker id="econos-arrow-' + pair[0] + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="' + pair[1] + '"/></marker>';
    }).join('');
    parts.push('<defs>' + clips + layerCss + perspectiveCss + builtInArrows + (spec.defs || '') + '</defs>');

    var bg = spec.background || '#FFFFFF';
    // y=-16/height=H+16 matches the extended viewBox above so the white
    // card fill covers the headroom strip too.
    parts.push('<rect x="0" y="-16" width="' + width + '" height="' + (height + 16) + '" fill="' + bg + '" rx="12"/>');
    parts.push(renderDivider(spec.divider));
    parts.push(renderDividers(spec.dividers));

    // Approach B: build a single CONTEXT that the render functions consult
    // for cross-element awareness. The context carries:
    //   - curveRegistry:  curve id → parsed cubic control points
    //   - pointRegistry:  point id → { x, y } in chart space
    //   - arrows:         every arrow with from/to references (for label
    //                     placement and for resolving from/to → coords)
    var ctx = { curveRegistry: {}, pathRegistry: {}, pointRegistry: {}, allPoints: [], arrows: [], placedBoxes: [], devWarnings: [] };

    function registerCurve(c) {
      if (c && c.id) {
        var parsed = parseCubic(c.d);
        if (parsed) ctx.curveRegistry[c.id] = parsed;
        // Also register a fully-parsed segment list (line + cubic
        // segments) so the intersection solver can resolve points by
        // curve identity instead of hand-computed coordinates.
        var path = parsePath(c.d);
        if (path) ctx.pathRegistry[c.id] = path;
      }
    }

    /* Resolve `point.intersection: { curves: ['AD1', 'AS'], near: [x, y] }`
       to actual chart-space coordinates by computing every intersection
       between the two named paths and picking the one nearest the `near`
       hint. If `near` is omitted, picks the first hit.

       Behaviour matrix:
         - intersection only        → engine fills in pt.x, pt.y
         - x/y only                 → unchanged (legacy)
         - intersection AND x/y     → engine ASSERTS the explicit
                                       coordinates match the solver's
                                       answer within `INTERSECTION_TOL`
                                       chart-units. Drift logs a dev
                                       warning naming the point so the
                                       author can fix the constant.
                                       The solver's answer wins.

       Logs (not throws) so a broken spec still renders. */
    var INTERSECTION_TOL = 0.005; // chart-space units (~1.5px at default scale)
    function resolveIntersection(pt) {
      if (!pt || !pt.intersection || !Array.isArray(pt.intersection.curves)) return;
      var ids = pt.intersection.curves;
      var name = pt.id || ids.join('×');
      if (ids.length !== 2) return;
      var p1 = ctx.pathRegistry[ids[0]], p2 = ctx.pathRegistry[ids[1]];
      if (!p1 || !p2) {
        ctx.devWarnings.push('intersection ' + name + ': unknown curve(s) ' + ids.join(', '));
        return;
      }
      var hits = intersectPaths(p1, p2);
      if (!hits.length) {
        ctx.devWarnings.push('intersection ' + name + ': no crossing of ' + ids.join(' × '));
        return;
      }
      var hint = pt.intersection.near;
      var chosen = hits[0];
      if (hint && Array.isArray(hint) && hits.length > 1) {
        var bestDist = Infinity;
        hits.forEach(function (h) {
          var dx = h[0] - hint[0], dy = h[1] - hint[1];
          var d2 = dx * dx + dy * dy;
          if (d2 < bestDist) { bestDist = d2; chosen = h; }
        });
      }
      // Geometry assertion: if the spec also gave explicit x/y, verify
      // it agrees with the solver. Drift > INTERSECTION_TOL is the
      // textbook "hand-computed intersection point that slid off the
      // curve" bug — author should remove the constants or fix them.
      if (pt.x != null && pt.y != null) {
        var dx = chosen[0] - pt.x, dy = chosen[1] - pt.y;
        var drift = Math.sqrt(dx * dx + dy * dy);
        if (drift > INTERSECTION_TOL) {
          var msg = '[ECONOS_PPF] intersection ' + name + ': declared (' +
            pt.x.toFixed(3) + ', ' + pt.y.toFixed(3) + ') drifts ' +
            drift.toFixed(4) + ' from solver (' + chosen[0].toFixed(3) +
            ', ' + chosen[1].toFixed(3) + ')';
          ctx.devWarnings.push(msg);
          try { console.warn(msg); } catch (e) {}
        }
      }
      pt.x = chosen[0];
      pt.y = chosen[1];
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
    // Pre-pass: compile any `shape: { type: 'linear'|'vertical'|
    // 'horizontal'|'keynesianAS' }` declarations to a raw `d` string.
    // Lets specs declare textbook shapes by name (one source of truth
    // for, say, the Keynesian reverse-L) without losing the ability to
    // hand-author a `d` when needed. Author-supplied `d` always wins.
    function compileCurveShape(c) {
      if (c && c.shape && !c.d) {
        var d = compileShape(c.shape);
        if (d) c.d = d;
      }
    }
    collectFrom.forEach(function (src) {
      (src.curves || []).forEach(compileCurveShape);
      (src.views || []).forEach(function (v) {
        (v.curves || []).forEach(compileCurveShape);
      });
    });
    // First pass: register every curve (path) so the intersection solver
    // can see all curves before any point tries to resolve against them.
    collectFrom.forEach(function (src) {
      (src.curves || []).forEach(registerCurve);
      (src.views || []).forEach(function (v) {
        (v.curves || []).forEach(registerCurve);
      });
    });
    // Second pass: resolve `point.intersection: { curves: [...] }` to real
    // (x, y) coordinates, then register points and arrows. Done in a
    // separate pass so a point referencing a curve declared LATER in the
    // spec still resolves correctly.
    collectFrom.forEach(function (src) {
      (src.points || []).forEach(resolveIntersection);
      (src.points || []).forEach(registerPoint);
      registerArrows(src.arrows);
      (src.views || []).forEach(function (v) {
        (v.points || []).forEach(resolveIntersection);
        (v.points || []).forEach(registerPoint);
        registerArrows(v.arrows);
      });
    });
    // Third pass: compile `welfareRegions: [{ type, curve, price, ... }]`
    // to ordinary polygons so the existing polygon renderer handles them.
    // Author still has full polygon control; this is just a recipe for
    // the most common shapes (CS triangle, PS triangle) to avoid hand-
    // computing corners that drift when the underlying curve changes.
    function compileWelfares(src) {
      if (!Array.isArray(src.welfareRegions)) return;
      src.polygons = src.polygons || [];
      src.welfareRegions.forEach(function (region) {
        var poly = compileWelfareRegion(region, ctx.pathRegistry);
        if (poly) src.polygons.push(poly);
      });
    }
    collectFrom.forEach(function (src) {
      compileWelfares(src);
      (src.views || []).forEach(compileWelfares);
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
        boxedLabels: spec.boxedLabels,
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
