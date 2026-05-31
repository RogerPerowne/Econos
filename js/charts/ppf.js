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
     - ARROW_BUFFER: every arrow (line or path) has its start + end pulled
       inward by ARROW_BUFFER pixels along the tangent at each end, so the
       arrow visually clears its source/destination points and adjacent
       curves. Specs can override per-arrow with `arrow.buffer`.
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
   ============================================================ */
(function () {
  'use strict';

  var MIN_LABEL_SIZE = 12;
  var LABEL_INK = '#0F172A';
  var ARROW_BUFFER = 8;

  function clampSize(s) { return Math.max(MIN_LABEL_SIZE, s || MIN_LABEL_SIZE); }

  var TONES = {
    blue:   { stroke: '#2563EB', label: '#2563EB' },
    amber:  { stroke: '#D97706', label: '#D97706' },
    rose:   { stroke: '#DC2626', label: '#DC2626' },
    green:  { stroke: '#059669', label: '#059669' },
    purple: { stroke: '#7C3AED', label: '#7D23CB' },
    cyan:   { stroke: '#0891B2', label: '#0891B2' },
    slate:  { stroke: '#475569', label: LABEL_INK },
    gray:   { stroke: '#94A3B8', label: LABEL_INK }
  };

  function tone(name) { return TONES[name] || TONES.slate; }

  function makeScale(area) {
    return {
      sx: function (x) { return area.x + x * area.width; },
      sy: function (y) { return area.y + area.height - y * area.height; }
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
    return '<path d="' + dAbs + '" fill="none" stroke="' + t.stroke + '" stroke-width="' + sw + '"' + dashAttr + opacityAttr + '/>' + labelHtml;
  }

  /* Pull point A toward B by `distance` pixels along the AB direction. */
  function pullToward(from, toward, distance) {
    var dx = toward[0] - from[0];
    var dy = toward[1] - from[1];
    var len = Math.sqrt(dx * dx + dy * dy);
    if (len < 0.001) return from;
    return [from[0] + dx / len * distance, from[1] + dy / len * distance];
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

  /* Arrow rendering — supports three shapes:
       { d: '...' }                                   raw path in 0..1 space
       { x1, y1, x2, y2 }                             straight line in 0..1 space
       { perpendicular: { curve, t, length, direction } }  geometric perpendicular
     All three are shortened at both ends by ARROW_BUFFER (per-arrow override). */
  function renderArrow(arrow, scale, curveRegistry) {
    var t = tone(arrow.tone);
    var sw = arrow.strokeWidth || 2;
    var buffer = arrow.buffer != null ? arrow.buffer : ARROW_BUFFER;
    var dashAttr = arrow.dashed ? ' stroke-dasharray="' + arrow.dashed + '"' : '';
    var capAttr = arrow.lineCap ? ' stroke-linecap="' + arrow.lineCap + '"' : '';
    var mStart = arrow.markerStart ? ' marker-start="url(#' + arrow.markerStart + ')"' : '';
    var mEnd = arrow.markerEnd ? ' marker-end="url(#' + arrow.markerEnd + ')"' : '';
    var dPix;
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

  /* Standalone text label, with optional italic + bold */
  function renderText(item, scale) {
    var t = tone(item.tone || 'slate');
    var bold = item.bold ? ' font-weight="700"' : '';
    var italic = item.italic ? ' font-style="italic"' : '';
    var size = clampSize(item.fontSize);
    // Auto text-anchor for axis-adjacent labels (overridable via item.anchor)
    var anchor = item.anchor;
    if (!anchor) {
      anchor = item.x < 0 ? 'end' : (item.x > 1 ? 'start' : 'middle');
    }
    return '<text x="' + scale.sx(item.x) + '" y="' + scale.sy(item.y) + '" font-size="' + size + '" fill="' + t.label + '" text-anchor="' + anchor + '"' + bold + italic + '>' + item.text + '</text>';
  }

  function renderPoint(pt, scale) {
    var t = tone(pt.tone);
    var cx = scale.sx(pt.x);
    var cy = scale.sy(pt.y);
    var lblX = cx + 10;
    var lblY = cy;
    var labelHtml = pt.label ? '<text x="' + lblX + '" y="' + lblY + '" font-size="' + clampSize(13) + '" font-weight="700" fill="' + t.label + '" dominant-baseline="middle">' + pt.label + '</text>' : '';
    var descHtml = pt.desc ? '<text x="' + (lblX + 14) + '" y="' + lblY + '" font-size="' + MIN_LABEL_SIZE + '" fill="' + LABEL_INK + '" dominant-baseline="middle">' + pt.desc + '</text>' : '';
    return '<g class="chart-point"><circle cx="' + cx + '" cy="' + cy + '" r="7" fill="' + t.stroke + '"/>' + labelHtml + descHtml + '</g>';
  }

  function renderZone(zone, scale) {
    var t = tone(zone.tone);
    return '<text x="' + scale.sx(zone.x) + '" y="' + scale.sy(zone.y) + '" font-size="' + MIN_LABEL_SIZE + '" font-weight="600" fill="' + t.label + '" font-style="italic">' + zone.text + '</text>';
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
    var y = 31;
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
    return '<line x1="' + divider.x + '" y1="' + (divider.y1 || 16) + '" x2="' + divider.x + '" y2="' + (divider.y2 || 424) + '" stroke="#CBD5E1" stroke-width="1" stroke-dasharray="5 4"/>';
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
  function renderViewContent(view, scale, area, curveRegistry) {
    var parts = [];
    (view.curves || []).forEach(function (c) { parts.push(renderCurve(c, scale)); });
    (view.arrows || []).forEach(function (a) { parts.push(renderArrow(a, scale, curveRegistry)); });
    (view.ocTriangles || []).forEach(function (tri) { parts.push(renderOcTriangle(tri, scale, curveRegistry)); });
    (view.points || []).forEach(function (p) {
      parts.push(renderPointGridlines(p, scale, area));
      parts.push(renderPoint(p, scale));
    });
    (view.zones || []).forEach(function (z) { parts.push(renderZone(z, scale)); });
    (view.texts || []).forEach(function (t) { parts.push(renderText(t, scale)); });
    return parts;
  }

  function render(spec) {
    var width = spec.width || 560;
    var height = spec.height || 440;
    var area = spec.chartArea || { x: 60, y: 50, width: width - 100, height: height - 100 };
    var scale = makeScale(area);
    var className = spec.className || 'econos-chart';

    var parts = [];
    parts.push('<svg class="' + className + '" viewBox="0 0 ' + width + ' ' + height + '" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">');
    if (spec.defs) parts.push('<defs>' + spec.defs + '</defs>');
    parts.push('<rect width="' + width + '" height="' + height + '" fill="#F8FAFC" rx="12"/>');
    parts.push(renderDivider(spec.divider));
    parts.push(wrapLayer('layer-axes', [renderAxes(area, spec.axes || {})]));

    // Build a registry of curves by id so view arrows can reference them
    // for perpendicular geometry. Includes top-level curves AND every
    // view's curves (so PPF₂/PPF₃ defined inside the shift view are
    // discoverable as intersection targets). Parses each cubic `d` once.
    var curveRegistry = {};
    function registerCurve(c) {
      if (c && c.id) {
        var parsed = parseCubic(c.d);
        if (parsed) curveRegistry[c.id] = parsed;
      }
    }
    (spec.curves || []).forEach(registerCurve);
    (spec.views || []).forEach(function (v) {
      (v.curves || []).forEach(registerCurve);
    });

    // Always-visible curves (each curve can carry its own layer name for opacity targeting)
    (spec.curves || []).forEach(function (c) {
      var rendered = renderCurve(c, scale);
      parts.push(c.layer ? wrapLayer(c.layer, [rendered]) : rendered);
    });

    // Top-level points / zones (for single-view charts like v1)
    (spec.zones || []).forEach(function (z) { parts.push(renderZone(z, scale)); });
    (spec.points || []).forEach(function (p) {
      parts.push(renderPointGridlines(p, scale, area));
      parts.push(renderPoint(p, scale));
    });

    // Multi-view: each view emits a content layer + a legend layer.
    // If the spec sets `viewDefaultsHidden`, each view's content/legend
    // layer is emitted with style="display:none" so a layer-toggling
    // engine (the legacy interactiveDiagram code) can reveal them.
    var hideViews = !!spec.viewDefaultsHidden;
    (spec.views || []).forEach(function (view) {
      var contentLayer = view.contentLayer || ('layer-' + view.key);
      var legendLayer = view.legendLayer || ('layer-legend-' + view.key);
      var hidden = view.hidden != null ? view.hidden : hideViews;
      parts.push(wrapLayer(contentLayer, renderViewContent(view, scale, area, curveRegistry), hidden));
      if (view.legend) parts.push(wrapLayer(legendLayer, [renderLegend(view.legend)], hidden));
    });

    // Top-level legend (single-view charts)
    if (spec.legend && !(spec.views || []).length) parts.push(renderLegend(spec.legend));

    parts.push('</svg>');
    return parts.join('');
  }

  window.ECONOS_PPF = { render: render };
})();
