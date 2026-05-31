/* ============================================================
   Econos — minimal PPF chart engine (v1).

   One function: window.ECONOS_PPF.render(spec) -> SVG string.

   Spec shape: see dev/ppf-engine-test.html for a worked example.

   Coordinate convention:
     - All input x/y in points/zones/curves are normalised 0..1
       in CHART space, with y growing UP (econ convention).
     - The engine maps to SVG pixel space (y down) inside the
       chart area, leaving padding for axes + labels.

   Axis-label convention (Roger's rule):
     - X label: below right end of X-axis, RIGHT-ALIGNED to arrowhead tip.
     - Y label: just ABOVE Y-axis arrowhead, no clash.
   ============================================================ */
(function () {
  'use strict';

  var TONES = {
    blue:   { stroke: '#2563EB', label: '#2563EB' },
    amber:  { stroke: '#D97706', label: '#D97706' },
    rose:   { stroke: '#DC2626', label: '#DC2626' },
    green:  { stroke: '#059669', label: '#059669' },
    purple: { stroke: '#7C3AED', label: '#7C3AED' },
    slate:  { stroke: '#475569', label: '#475569' }
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
      '<text x="' + (area.x - 10) + '" y="' + (bottom + 14) + '" font-size="11" fill="#94A3B8" text-anchor="middle">O</text>',
      // Y label — above arrowhead, centred on axis line
      yLabel ? '<text x="' + area.x + '" y="' + (yArrowTip - 10) + '" font-size="12" font-weight="700" fill="#334155" text-anchor="middle">' + yLabel + '</text>' : '',
      // X label — below axis line, right-aligned to arrowhead tip
      xLabel ? '<text x="' + (xArrowTip + 5) + '" y="' + (bottom + 16) + '" font-size="12" font-weight="700" fill="#334155" text-anchor="end">' + xLabel + '</text>' : '',
      '</g>'
    ].join('');
  }

  function renderCurve(curve, scale) {
    var t = tone(curve.tone);
    var dAbs = scalePath(curve.d, scale);
    var labelHtml = '';
    if (curve.label) {
      var last = curve.d.match(/([0-9.\-]+)\s*,\s*([0-9.\-]+)\s*$/);
      var lx, ly;
      if (last) {
        lx = scale.sx(parseFloat(last[1])) + 6;
        ly = scale.sy(parseFloat(last[2])) - 6;
      } else {
        lx = scale.sx(0.7); ly = scale.sy(0.05);
      }
      labelHtml = '<text x="' + lx + '" y="' + ly + '" font-size="13" font-weight="700" fill="' + t.label + '">' + curve.label + '</text>';
    }
    return '<g class="chart-curve"><path d="' + dAbs + '" fill="none" stroke="' + t.stroke + '" stroke-width="3"/>' + labelHtml + '</g>';
  }

  function renderPoint(pt, scale) {
    var t = tone(pt.tone);
    var cx = scale.sx(pt.x);
    var cy = scale.sy(pt.y);
    var lblX = cx + 10;
    var lblY = cy;
    var labelHtml = pt.label ? '<text x="' + lblX + '" y="' + lblY + '" font-size="13" font-weight="700" fill="' + t.label + '" dominant-baseline="middle">' + pt.label + '</text>' : '';
    var descHtml = pt.desc ? '<text x="' + (lblX + 14) + '" y="' + lblY + '" font-size="12" fill="#475569" dominant-baseline="middle">' + pt.desc + '</text>' : '';
    return '<g class="chart-point"><circle cx="' + cx + '" cy="' + cy + '" r="7" fill="' + t.stroke + '"/>' + labelHtml + descHtml + '</g>';
  }

  function renderZone(zone, scale) {
    var t = tone(zone.tone);
    return '<text x="' + scale.sx(zone.x) + '" y="' + scale.sy(zone.y) + '" font-size="11" fill="' + t.label + '" font-style="italic">' + zone.text + '</text>';
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
      parts.push('<text x="' + (x + 26) + '" y="' + (y + 5) + '" font-size="13" font-weight="700" fill="#334155">' + legend.title.text + '</text>');
      y += 44;
    }

    (legend.sections || []).forEach(function (section) {
      if (section.header) {
        var ht = tone(section.header.tone || 'blue');
        parts.push('<text x="' + (x + 20) + '" y="' + y + '" font-size="10" font-weight="800" fill="' + ht.stroke + '" letter-spacing="2">' + section.header.text + '</text>');
        y += 26;
      }
      if (section.rows) {
        section.rows.forEach(function (row) {
          var rt = tone(row.tone || 'slate');
          parts.push('<circle cx="' + (x + 27) + '" cy="' + y + '" r="7" fill="' + rt.stroke + '"/>');
          parts.push('<text x="' + (x + 42) + '" y="' + (y + 5) + '" font-size="13" font-weight="600" fill="#334155">' + row.text + '</text>');
          y += 28;
        });
      } else if (section.body) {
        section.body.forEach(function (line) {
          parts.push('<text x="' + (x + 20) + '" y="' + (y + 5) + '" font-size="13" font-weight="600" fill="#334155">' + line + '</text>');
          y += 18;
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

  function render(spec) {
    var width = spec.width || 560;
    var height = spec.height || 440;
    var area = spec.chartArea || { x: 60, y: 50, width: width - 100, height: height - 100 };
    var scale = makeScale(area);
    var parts = [];
    parts.push('<svg class="econos-chart" viewBox="0 0 ' + width + ' ' + height + '" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">');
    parts.push('<rect width="' + width + '" height="' + height + '" fill="#F8FAFC" rx="12"/>');
    parts.push(renderDivider(spec.divider));
    parts.push(renderAxes(area, spec.axes || {}));
    (spec.curves || []).forEach(function (c) { parts.push(renderCurve(c, scale)); });
    (spec.zones || []).forEach(function (z) { parts.push(renderZone(z, scale)); });
    (spec.points || []).forEach(function (p) { parts.push(renderPoint(p, scale)); });
    parts.push(renderLegend(spec.legend));
    parts.push('</svg>');
    return parts.join('');
  }

  window.ECONOS_PPF = { render: render };
})();
