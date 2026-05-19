/* ============================================================
   ECONOS - Data-driven diagram renderer
   -------------------------------------------------------------
   Diagrams (charts, plots, conceptual graphs) are described as
   JSON-serializable specs. This file converts a spec into an
   SVG string. Authors declare WHAT a diagram shows; the renderer
   handles the SVG construction details.

   Usage from a data file:

     {
       template: 'diagnose',
       title:   'Spotting the difference',
       diagramSpec: {
         width: 480, height: 280,
         bg: '#F8FAFC', bgRadius: 8,
         axes: { ... },
         curves: [ ... ],
         markers: [ ... ],
         guides: [ ... ],
         annotations: [ ... ]
       }
     }

   The card renderer checks for `c.diagramSpec` and calls
   Diagram.render(spec) to produce the SVG.

   -----------------------------------------------------------
   Render layer order (back to front):

     1. bg                                       (spec.bg)
     2. annotations with `layer: 'below'`        (background shading)
     3. axes                                     (spec.axes)
     4. guides                                   (spec.guides)
     5. curves                                   (spec.curves)
     6. markers                                  (spec.markers)
     7. annotations (default, layer: 'above')    (labels, callouts)

   The `layer: 'below'` field lets a rect / polygon / line sit
   behind the chart so curves and dashed projections render on
   top without being dimmed by an overlay. Default behaviour
   (annotation above the chart) is unchanged when `layer` is
   absent or set to 'above'.

   -----------------------------------------------------------
   Other features added in this version:

     - text annotations: `rotate: -90` rotates around `at`
     - text annotations: `italic: true` renders font-style italic
     - new annotation `type: 'line'` (plain straight line, used
       for connectors and double-headed arrow stems)
     - numeric defaults (dx, dy, width, strokeWidth, r, size,
       weight, ...) use null-checks so explicit `0` is honoured
       (previously fell back to the default because `||` treats
       0 as falsy)
     - polygon `fill-opacity` default is now 1 (was 0.75); set
       opacity explicitly when partial transparency is wanted
   ============================================================ */

(function () {
  'use strict';

  /* Brand-colour shortcuts so specs read better:
     `stroke: 'blue'` instead of `stroke: '#2563EB'`. */
  var COLOR_TOKENS = {
    ink:        '#0B1426',
    'ink-soft': '#374151',
    muted:      '#64748B',
    'muted-2':  '#94A3B8',
    line:       '#CBD5E1',
    bg:         '#F8FAFC',
    white:      '#FFFFFF',
    green:      '#10B981',
    'green-deep':'#047857',
    'green-bg':  '#ECFDF5',
    amber:      '#F39E0B',
    'amber-deep':'#D97706',
    'amber-bg':  '#FEF3C7',
    rose:       '#E11D48',
    'rose-deep':'#C71C50',
    'rose-bg':  '#FEF2F4',
    blue:       '#2563EB',
    'blue-deep':'#1E40AF',
    'blue-bg':  '#EFF6FF',
    red:        '#DC2626',
    purple:     '#7D23CB'
  };

  function color(c) {
    if (!c) return 'currentColor';
    return COLOR_TOKENS[c] || c;
  }

  /* Dash patterns - short aliases. */
  var DASH = { dotted: '2 2', short: '3 3', medium: '5 4', long: '9 5' };
  function dash(d) {
    if (!d) return null;
    return DASH[d] || d;
  }

  function attr(name, val) {
    return (val == null || val === '') ? '' : ' ' + name + '="' + val + '"';
  }

  /* Null-coalesce: returns def when v is null or undefined.
     Unlike (v || def), this preserves explicit 0 (and empty string). */
  function nc(v, def) {
    return v == null ? def : v;
  }

  /* ---------------- AXES ---------------- */
  function renderAxes(a, w, h) {
    if (!a) return '';
    var out = '';
    var arrowSize = 6;
    if (a.x) {
      var x = a.x;
      var fx = x.from || [60, h - 40];
      var tx = x.to   || [w - 40, h - 40];
      out += '<line x1="' + fx[0] + '" y1="' + fx[1] + '" x2="' + tx[0] + '" y2="' + tx[1] +
             '" stroke="' + color(x.stroke || 'ink-soft') + '" stroke-width="' + nc(x.width, 1.5) +
             '" stroke-linecap="round"/>';
      if (x.arrow !== false && x.arrow !== undefined) {
        out += '<polygon points="' + tx[0] + ',' + (tx[1]-5) + ' ' + tx[0] + ',' + (tx[1]+5) + ' ' +
               (tx[0]+arrowSize+6) + ',' + tx[1] + '" fill="' + color(x.stroke || 'ink-soft') + '"/>';
      }
      if (x.labelEnd) {
        out += '<text x="' + (tx[0]+10) + '" y="' + (tx[1]+16) + '" font-size="11" font-weight="700" fill="' +
               color(x.labelColor || 'ink-soft') + '">' + x.labelEnd + '</text>';
      }
      if (x.labelOrigin) {
        out += '<text x="' + (fx[0]-12) + '" y="' + (fx[1]+16) + '" font-size="10" fill="' +
               color('muted') + '">' + x.labelOrigin + '</text>';
      }
      /* Tick labels along x-axis: each { at, label, anchor? } draws a label
         below the axis at the given pixel x-position. */
      if (x.ticks) {
        x.ticks.forEach(function (t) {
          out += '<text x="' + t.at + '" y="' + (fx[1] + nc(t.dy, 20)) + '" font-size="' +
                 nc(t.size, 10) + '" fill="' + color(t.color || 'muted') +
                 '" text-anchor="' + (t.anchor || 'middle') + '">' + t.label + '</text>';
        });
      }
    }
    if (a.y) {
      var y = a.y;
      var fy = y.from || [60, h - 40];
      var ty = y.to   || [60, 40];
      out += '<line x1="' + fy[0] + '" y1="' + fy[1] + '" x2="' + ty[0] + '" y2="' + ty[1] +
             '" stroke="' + color(y.stroke || 'ink-soft') + '" stroke-width="' + nc(y.width, 1.5) +
             '" stroke-linecap="round"/>';
      if (y.arrow !== false && y.arrow !== undefined) {
        out += '<polygon points="' + (ty[0]-5) + ',' + ty[1] + ' ' + (ty[0]+5) + ',' + ty[1] + ' ' +
               ty[0] + ',' + (ty[1]-arrowSize-6) + '" fill="' + color(y.stroke || 'ink-soft') + '"/>';
      }
      if (y.labelStart) {
        out += '<text x="' + ty[0] + '" y="' + (ty[1]-20) + '" font-size="11" font-weight="700" fill="' +
               color(y.labelColor || 'ink-soft') + '" text-anchor="middle">' + y.labelStart + '</text>';
      }
      if (y.labelSub) {
        out += '<text x="' + ty[0] + '" y="' + (ty[1]-6) + '" font-size="10" fill="' +
               color('muted') + '" text-anchor="middle">' + y.labelSub + '</text>';
      }
      /* Tick labels along y-axis. */
      if (y.ticks) {
        y.ticks.forEach(function (t) {
          out += '<text x="' + (fy[0] - nc(t.dx, 6)) + '" y="' + (t.at + nc(t.dy, 4)) + '" font-size="' +
                 nc(t.size, 11) + '" fill="' + color(t.color || 'muted') +
                 '" text-anchor="' + (t.anchor || 'end') + '">' + t.label + '</text>';
        });
      }
      /* Rotated axis title (e.g. "CPI %" running up the y-axis). */
      if (y.title) {
        var tt = y.title;
        var tx_pos = tt.at ? tt.at[0] : (ty[0] - 30);
        var ty_pos = tt.at ? tt.at[1] : ((fy[1] + ty[1]) / 2);
        out += '<text x="' + tx_pos + '" y="' + ty_pos + '" font-size="' + nc(tt.size, 10) +
               '" fill="' + color(tt.color || 'muted') + '" text-anchor="middle" ' +
               'transform="rotate(-90 ' + tx_pos + ' ' + ty_pos + ')">' + tt.text + '</text>';
      }
    }
    return out;
  }

  /* ---------------- CURVES / LINES ---------------- */
  function renderCurves(curves) {
    if (!curves) return '';
    return curves.map(function (c) {
      var d;
      if (c.path) {
        d = c.path;
      } else if (c.line) {
        // straight line shortcut: line: [[x1,y1],[x2,y2]]
        d = 'M ' + c.line[0][0] + ',' + c.line[0][1] + ' L ' + c.line[1][0] + ',' + c.line[1][1];
      } else if (c.points) {
        // polyline through points
        d = 'M ' + c.points.map(function (p) { return p[0] + ',' + p[1]; }).join(' L ');
      } else if (c.parabola) {
        // [from, peak, to] - quadratic bezier through 3 points
        var p = c.parabola;
        var cp = [2*p[1][0] - 0.5*(p[0][0]+p[2][0]), 2*p[1][1] - 0.5*(p[0][1]+p[2][1])];
        d = 'M ' + p[0][0] + ',' + p[0][1] + ' Q ' + cp[0] + ',' + cp[1] + ' ' + p[2][0] + ',' + p[2][1];
      } else { return ''; }
      var out = '<path d="' + d + '" fill="' + (c.fill || 'none') + '" stroke="' +
                color(c.stroke || 'blue') + '" stroke-width="' + nc(c.width, 3) +
                '" stroke-linecap="round"' + attr('stroke-dasharray', dash(c.dash)) +
                attr('opacity', c.opacity) + '/>';
      if (c.label) {
        var L = typeof c.label === 'string' ? { text: c.label } : c.label;
        var lp = L.at || (c.line ? c.line[1] : c.points ? c.points[c.points.length-1] : [0,0]);
        // Null-check so `dx: 0` (or `dy: 0`) is honoured rather than coerced to the default.
        var ldx = nc(L.dx, 8);
        var ldy = nc(L.dy, 0);
        out += '<text x="' + (lp[0] + ldx) + '" y="' + (lp[1] + ldy) + '" font-size="' +
               nc(L.size, 13) + '" font-weight="' + nc(L.weight, 700) + '" fill="' +
               color(L.color || c.stroke || 'blue') + '"' + attr('text-anchor', L.anchor) + '>' +
               L.text + '</text>';
      }
      return out;
    }).join('');
  }

  /* ---------------- GUIDE LINES ---------------- */
  function renderGuides(guides) {
    if (!guides) return '';
    return guides.map(function (g) {
      return '<line x1="' + g.from[0] + '" y1="' + g.from[1] + '" x2="' + g.to[0] + '" y2="' + g.to[1] +
             '" stroke="' + color(g.stroke || 'line') + '" stroke-width="' + nc(g.width, 1) +
             '"' + attr('stroke-dasharray', dash(g.dash || 'short')) +
             attr('opacity', g.opacity) + '/>';
    }).join('');
  }

  /* ---------------- MARKERS (equilibrium dots etc.) ---------------- */
  function renderMarkers(markers) {
    if (!markers) return '';
    return markers.map(function (m) {
      var r = nc(m.r, 5);
      var stroke = color(m.stroke || m.color || 'blue');
      var fill = m.halo ? stroke : (m.fill || color('white'));
      // null-check so `strokeWidth: 0` (matching original size for stroke-less dots) works.
      var sw = nc(m.strokeWidth, 2);
      var out = '';
      if (m.halo) {
        out += '<circle cx="' + m.at[0] + '" cy="' + m.at[1] + '" r="' + (r + 1.5) +
               '" fill="' + color('white') + '"/>';
      }
      out += '<circle cx="' + m.at[0] + '" cy="' + m.at[1] + '" r="' + r +
             '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '"/>';
      if (m.labels) {
        m.labels.forEach(function (L) {
          out += '<text x="' + L.at[0] + '" y="' + L.at[1] + '" font-size="' + nc(L.size, 11) +
                 '" font-weight="' + nc(L.weight, 600) + '" fill="' + color(L.color || 'muted') +
                 '"' + attr('text-anchor', L.anchor) + '>' + L.text + '</text>';
        });
      }
      if (m.chip) {
        out += renderChip(m.chip);
      }
      return out;
    }).join('');
  }

  /* ---------------- CHIPS (callout pills near markers) ---------------- */
  function renderChip(chip) {
    var w = nc(chip.w, 84), h = nc(chip.h, 20);
    var x = chip.at[0], y = chip.at[1];
    var out = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h +
              '" rx="' + nc(chip.radius, 4) + '" fill="' + color(chip.bg || 'amber-bg') +
              '" stroke="' + color(chip.stroke || 'amber-deep') + '" stroke-width="1"/>';
    if (chip.text) {
      var lines = Array.isArray(chip.text) ? chip.text : [chip.text];
      var lineH = (h - 8) / lines.length;
      lines.forEach(function (t, i) {
        out += '<text x="' + (x + w/2) + '" y="' + (y + 8 + lineH * (i + 0.6)) +
               '" font-size="' + nc(chip.size, 10) + '" font-weight="' + nc(chip.weight, 700) +
               '" fill="' + color(chip.textColor || 'amber-deep') + '" text-anchor="middle">' + t + '</text>';
      });
    }
    return out;
  }

  /* ---------------- ANNOTATIONS ----------------
     Annotation types: text (default), chip, rect, polygon, line, shiftArrow.
     Any annotation may carry `layer: 'below'` to render before
     axes/curves (useful for shading regions). Default is 'above'.

     Text annotations also support:
       rotate: N       rotate by N degrees around the annotation's `at`
       italic: true    render in italic
  */
  function renderAnnotations(anns) {
    if (!anns) return '';
    return anns.map(function (a) {
      if (a.type === 'text' || !a.type) {
        var rotateAttr = a.rotate != null
          ? ' transform="rotate(' + a.rotate + ' ' + a.at[0] + ' ' + a.at[1] + ')"'
          : '';
        var italicAttr = a.italic ? ' font-style="italic"' : '';
        return '<text x="' + a.at[0] + '" y="' + a.at[1] + '" font-size="' + nc(a.size, 12) +
               '" font-weight="' + nc(a.weight, 600) + '" fill="' + color(a.color || 'ink-soft') +
               '"' + italicAttr + attr('text-anchor', a.anchor) + attr('opacity', a.opacity) +
               rotateAttr + '>' + a.text + '</text>';
      }
      if (a.type === 'chip') return renderChip(a);
      if (a.type === 'rect') {
        return '<rect x="' + a.at[0] + '" y="' + a.at[1] + '" width="' + a.w + '" height="' + a.h +
               '" fill="' + color(a.fill || 'amber-bg') + '"' +
               attr('fill-opacity', a.opacity) +
               attr('stroke', a.stroke ? color(a.stroke) : null) +
               attr('stroke-width', a.strokeWidth) +
               attr('rx', a.radius) + '/>';
      }
      if (a.type === 'polygon') {
        var pts = a.points.map(function (p) { return p[0] + ',' + p[1]; }).join(' ');
        /* Default fill-opacity is SVG's natural 1 (was 0.75 in v1).
           Set `opacity:` explicitly if partial transparency is wanted. */
        return '<polygon points="' + pts +
               '" fill="' + color(a.fill || 'green-bg') + '"' +
               attr('fill-opacity', a.opacity) +
               attr('stroke', a.stroke ? color(a.stroke) : null) +
               attr('stroke-width', a.strokeWidth) + '/>';
      }
      if (a.type === 'line') {
        /* Plain straight-line annotation. Use for connector lines, the
           stem of a double-headed arrow (combine with two polygon
           arrowheads), or any decorative line that isn't a chart curve
           or a dashed projection guide. */
        return '<line x1="' + a.from[0] + '" y1="' + a.from[1] +
               '" x2="' + a.to[0] + '" y2="' + a.to[1] +
               '" stroke="' + color(a.stroke || 'ink-soft') +
               '" stroke-width="' + nc(a.width, 1.5) +
               '" stroke-linecap="round"' +
               attr('stroke-dasharray', dash(a.dash)) +
               attr('opacity', a.opacity) + '/>';
      }
      if (a.type === 'shiftArrow') {
        var col = color(a.color || 'green');
        var mid = 'shift-' + Math.random().toString(36).slice(2,8);
        return '<defs><marker id="' + mid + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">' +
               '<path d="M 0 0 L 10 5 L 0 10 z" fill="' + col + '"/></marker></defs>' +
               '<path d="M ' + a.from[0] + ' ' + a.from[1] + ' L ' + a.to[0] + ' ' + a.to[1] +
               '" stroke="' + col + '" stroke-width="' + nc(a.width, 2.5) + '" fill="none" marker-end="url(#' + mid + ')"/>' +
               (a.label ? '<text x="' + ((a.from[0]+a.to[0])/2) + '" y="' + ((a.from[1]+a.to[1])/2 + 16) +
                 '" font-size="10" font-weight="700" fill="' + col + '" text-anchor="middle" letter-spacing="1">' +
                 a.label + '</text>' : '');
      }
      return '';
    }).join('');
  }

  /* ---------------- ROOT ---------------- */
  function render(spec) {
    if (!spec) return '';
    var w = spec.width || 480, h = spec.height || 280;
    var out = '<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" height="auto" ' +
              'preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" ' +
              'font-family="Inter, sans-serif" class="diagram"' +
              (spec.ariaLabel ? ' aria-label="' + spec.ariaLabel + '"' : '') + '>';
    if (spec.bg) {
      out += '<rect width="' + w + '" height="' + h + '" fill="' + color(spec.bg) +
             '" rx="' + nc(spec.bgRadius, 0) + '"/>';
    }

    /* Split annotations into below-chart and above-chart layers.
       Default (no `layer` field) is 'above', preserving prior behaviour
       for every spec written against the v1 renderer. */
    var anns = spec.annotations || [];
    var below = [], above = [];
    for (var i = 0; i < anns.length; i++) {
      (anns[i].layer === 'below' ? below : above).push(anns[i]);
    }

    out += renderAnnotations(below);
    out += renderAxes(spec.axes, w, h);
    out += renderGuides(spec.guides);
    out += renderCurves(spec.curves);
    out += renderMarkers(spec.markers);
    out += renderAnnotations(above);
    out += '</svg>';
    return out;
  }

  window.Diagram = {
    render: render,
    colors: COLOR_TOKENS
  };
})();
