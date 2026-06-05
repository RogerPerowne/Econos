/* ============================================================
   ECONOS – YED & XED Explorer

   Two widgets in one file:
     window.EconosYed  – Income Elasticity of Demand (Engel curve)
     window.EconosXed  – Cross-Price Elasticity of Demand

   Both use the same SVG layout and CSS classes as elasticity-explorer.js.
   The curve is always linear: Dependent = a + b·Independent.
   The midpoint formula is the same in both cases; sign and classification
   differ.

   YED: Income (Y) on X-axis, QD on Y-axis.
        b > 0 → normal good; b < 0 → inferior good.
        YED = %ΔQD / %ΔY.

   XED: Price of good B (P_B) on X-axis, QD of good A on Y-axis.
        b > 0 → substitutes; b < 0 → complements.
        XED = %ΔQD_A / %ΔP_B.
   ============================================================ */

(function (global) {

  /* ---- Shared SVG geometry ---- */
  var CHART = { x0: 80, x1: 620, y0: 60, y1: 400 };

  /* ---- Shared coordinate helpers (parametrised per mode) ---- */
  function makeCoords(xMax, yMax) {
    var xPx = CHART.x1 - CHART.x0, yPx = CHART.y1 - CHART.y0;
    return {
      xMax: xMax, yMax: yMax,
      toSvgX: function (x)  { return CHART.x0 + (x / xMax) * xPx; },
      fromSvgX: function(sx) { return (sx - CHART.x0) / xPx * xMax; },
      toSvgY: function (y)  { return CHART.y1 - (y / yMax) * yPx; }
    };
  }

  /* ---- Midpoint elasticity formula (shared) ---- */
  function midpoint(x1, y1, x2, y2) {
    var dY = y2 - y1, dX = x2 - x1;
    if (dY === 0 && dX === 0) return null;
    var avgY = (y1 + y2) / 2, avgX = (x1 + x2) / 2;
    if (avgY === 0 || avgX === 0) return null;
    var pctY = dY / avgY, pctX = dX / avgX;
    if (pctX === 0) return { value: Infinity, pctY: pctY, pctX: 0 };
    return { value: pctY / pctX, pctY: pctY, pctX: pctX };
  }

  function fmtV(v) {
    if (!isFinite(v)) return v > 0 ? '+∞' : '−∞';
    var s = v >= 0 ? '+' : '−';
    return s + Math.abs(v).toFixed(2);
  }
  function fmtPct(x) {
    var pct = x * 100, s = pct >= 0 ? '+' : '−';
    return s + Math.abs(pct).toFixed(1) + '%';
  }

  /* ---- Shared SVG builder ---- */
  function buildSvg(cfg) {
    var idPfx = cfg.id;
    return ''
      + '<svg class="ee-svg" viewBox="0 0 720 460" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">'
      +   '<defs>'
      +     '<clipPath id="' + idPfx + '-clip"><rect x="' + CHART.x0 + '" y="' + CHART.y0 + '" width="' + (CHART.x1 - CHART.x0) + '" height="' + (CHART.y1 - CHART.y0) + '"/></clipPath>'
      +     '<marker id="' + idPfx + '-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0B1426"/></marker>'
      +   '</defs>'
      + '<line x1="' + CHART.x0 + '" y1="' + CHART.y1 + '" x2="' + (CHART.x1+18) + '" y2="' + CHART.y1 + '" stroke="#0B1426" stroke-width="1.5" marker-end="url(#' + idPfx + '-arr)"/>'
      + '<line x1="' + CHART.x0 + '" y1="' + (CHART.y0-18) + '" x2="' + CHART.x0 + '" y2="' + CHART.y1 + '" stroke="#0B1426" stroke-width="1.5" marker-start="url(#' + idPfx + '-arr)"/>'
      + '<text x="' + (CHART.x1+26) + '" y="' + (CHART.y1+5) + '" font-size="13" font-weight="700" fill="#0B1426">' + cfg.xLabel + '</text>'
      + '<text x="' + (CHART.x0-14) + '" y="' + (CHART.y0-24) + '" font-size="13" font-weight="700" fill="#0B1426" text-anchor="middle">' + cfg.yLabel + '</text>'
      + '<text x="' + (CHART.x0-12) + '" y="' + (CHART.y1+5) + '" font-size="12" fill="#64748B" text-anchor="end">O</text>'

      + '<g clip-path="url(#' + idPfx + '-clip)">'
      +   '<line data-w="curve" x1="0" y1="0" x2="0" y2="0" stroke="' + cfg.curveColor + '" stroke-width="2.5"/>'
      + '</g>'
      + '<text data-w="curve-label" x="0" y="0" font-size="14" font-weight="700" fill="' + cfg.curveColor + '">' + cfg.curveName + '</text>'

      + '<line data-w="g1-x" x1="0" y1="0" x2="0" y2="0" stroke="#D97706" stroke-width="1.5" stroke-dasharray="5 4"/>'
      + '<line data-w="g1-y" x1="0" y1="0" x2="0" y2="0" stroke="#D97706" stroke-width="1.5" stroke-dasharray="5 4"/>'
      + '<line data-w="g2-x" x1="0" y1="0" x2="0" y2="0" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="5 4"/>'
      + '<line data-w="g2-y" x1="0" y1="0" x2="0" y2="0" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="5 4"/>'

      + '<text data-w="x1-label" x="0" y="0" font-size="12" font-weight="700" fill="#D97706" text-anchor="middle">X₁</text>'
      + '<text data-w="y1-label" x="0" y="0" font-size="12" font-weight="700" fill="#D97706" text-anchor="end">Y₁</text>'
      + '<text data-w="x2-label" x="0" y="0" font-size="12" font-weight="700" fill="#2563EB" text-anchor="middle">X₂</text>'
      + '<text data-w="y2-label" x="0" y="0" font-size="12" font-weight="700" fill="#2563EB" text-anchor="end">Y₂</text>'

      + '<g data-w="handle1" class="ee-handle" tabindex="0" role="slider" aria-label="Point A">'
      +   '<circle r="14" fill="#D97706" fill-opacity="0.12"/>'
      +   '<circle r="8" fill="white" stroke="#D97706" stroke-width="3"/>'
      +   '<text dx="14" dy="-12" font-size="13" font-weight="800" fill="#D97706">A</text>'
      + '</g>'
      + '<g data-w="handle2" class="ee-handle" tabindex="0" role="slider" aria-label="Point B">'
      +   '<circle r="14" fill="#2563EB" fill-opacity="0.12"/>'
      +   '<circle r="8" fill="white" stroke="#2563EB" stroke-width="3"/>'
      +   '<text dx="14" dy="-12" font-size="13" font-weight="800" fill="#2563EB">B</text>'
      + '</g>'

      + '<text x="' + (CHART.x1-8) + '" y="' + (CHART.y0+18) + '" font-size="11" fill="#94A3B8" text-anchor="end" font-style="italic">drag A and B along the curve</text>'
      + '</svg>';
  }

  /* ---- Shared shell builder ---- */
  function buildShell(cfg, presets, spectrumHtml) {
    var btns = presets.map(function (p) {
      return '<button type="button" class="ee-preset" data-w-preset="' + p.key + '">' + p.label + '</button>';
    }).join('');
    return ''
      + '<div class="ee-grid">'
      +   '<div class="ee-chart-wrap">' + buildSvg(cfg) + '</div>'
      +   '<div class="ee-readouts">'
      +     '<div class="ee-formula" data-w="formula">'
      +       '<div class="ee-formula__head">' + cfg.formulaHead + '</div>'
      +       '<div class="ee-formula__line ee-formula__line--def">'
      +         cfg.formulaLabel
      +       '</div>'
      +       '<div class="ee-formula__line" data-w="formula-sub"></div>'
      +       '<div class="ee-formula__line ee-formula__line--result" data-w="formula-result"></div>'
      +     '</div>'
      +     '<div class="ee-chip" data-w="chip"><span class="ee-chip__dot"></span><span class="ee-chip__label" data-w="chip-label"></span></div>'
      +     spectrumHtml
      +     '<div class="ee-tr">'
      +       '<div class="ee-tr__head">' + cfg.panelHead + '</div>'
      +       '<div class="ee-tr__row">'
      +         '<div class="ee-tr__cell ee-tr__cell--p1"><div class="ee-tr__cell-label">' + cfg.panelLabelA + '</div><div class="ee-tr__cell-value" data-w="pct-x"></div></div>'
      +         '<div class="ee-tr__arrow" data-w="cmp-arrow">vs</div>'
      +         '<div class="ee-tr__cell ee-tr__cell--p2"><div class="ee-tr__cell-label">' + cfg.panelLabelB + '</div><div class="ee-tr__cell-value" data-w="pct-y"></div></div>'
      +       '</div>'
      +       '<div class="ee-tr__verdict" data-w="verdict"></div>'
      +     '</div>'
      +   '</div>'
      + '</div>'
      + '<div class="ee-preset-bar">'
      +   '<div class="ee-preset-bar__head">Try a real example</div>'
      +   '<div class="ee-preset-bar__btns">' + btns + '</div>'
      +   '<div class="ee-preset-note" data-w="preset-note"></div>'
      + '</div>';
  }

  /* ---- Shared controller factory ---- */
  function makeController(cfg, presets, classifyFn, hostClass, initGuard) {
    var specHtml = ''
      + '<div class="ee-spectrum">'
      +   '<div class="ee-spectrum__bar" style="grid-template-columns:' + cfg.specCols + ';">';
    cfg.specSegs.forEach(function (s) {
      specHtml += '<div class="ee-spectrum__seg" style="background:' + s.bg + ';color:' + s.fg + ';">' + s.label + '</div>';
    });
    specHtml += '</div><div class="ee-spectrum__marker" data-w="marker"></div></div>';

    function init(root) {
      if (!root || root[initGuard]) return;
      root[initGuard] = true;
      root.innerHTML = buildShell(cfg, presets, specHtml);

      var def = presets[cfg.defaultIdx || 0];
      var state = { a: def.a, b: def.b, x1: def.x1, x2: def.x2, note: def.note };

      var coords = makeCoords(cfg.xMax, cfg.yMax);
      var svg = root.querySelector('.ee-svg');

      function q(sel) { return root.querySelector('[data-w="' + sel + '"]'); }
      var els = {
        curve:  q('curve'), curveLabel: q('curve-label'),
        h1: q('handle1'), h2: q('handle2'),
        g1x: q('g1-x'), g1y: q('g1-y'), g2x: q('g2-x'), g2y: q('g2-y'),
        x1l: q('x1-label'), y1l: q('y1-label'), x2l: q('x2-label'), y2l: q('y2-label'),
        fSub: q('formula-sub'), fRes: q('formula-result'),
        chip: q('chip'), chipLbl: q('chip-label'),
        marker: q('marker'),
        pctX: q('pct-x'), pctY: q('pct-y'), cmpArrow: q('cmp-arrow'), verdict: q('verdict'),
        presetNote: q('preset-note')
      };

      function curveY(x) { return state.a + state.b * x; }

      /* x-range where curve sits inside the chart */
      function xRange() {
        var lo, hi;
        if (state.b > 0) {
          lo = Math.max(0, Math.ceil(-state.a / state.b));
          hi = Math.min(cfg.xMax, Math.floor((cfg.yMax - state.a) / state.b));
        } else if (state.b < 0) {
          lo = Math.max(0, Math.ceil((cfg.yMax - state.a) / state.b));
          hi = Math.min(cfg.xMax, Math.floor(-state.a / state.b));
        } else {
          lo = 0; hi = cfg.xMax;
        }
        if (lo >= hi) { lo = 0; hi = cfg.xMax; }
        return [lo, hi];
      }

      function clampX(x) {
        var r = xRange();
        return Math.max(r[0], Math.min(r[1], Math.round(x)));
      }

      function setHandle(el, x, y) {
        el.setAttribute('transform', 'translate(' + coords.toSvgX(x) + ',' + coords.toSvgY(y) + ')');
      }

      function setLine(el, x1, y1, x2, y2) {
        el.setAttribute('x1', x1); el.setAttribute('y1', y1);
        el.setAttribute('x2', x2); el.setAttribute('y2', y2);
      }

      function render() {
        var y1 = curveY(state.x1), y2 = curveY(state.x2);
        var r = xRange();

        /* Curve endpoints */
        var ya = curveY(r[0]), yb = curveY(r[1]);
        setLine(els.curve, coords.toSvgX(r[0]), coords.toSvgY(ya), coords.toSvgX(r[1]), coords.toSvgY(yb));

        /* Curve label – near the end with higher x */
        var ly = curveY(r[1]);
        els.curveLabel.setAttribute('x', coords.toSvgX(r[1]) + 6);
        els.curveLabel.setAttribute('y', coords.toSvgY(ly) + 4);

        /* Handles */
        setHandle(els.h1, state.x1, y1);
        setHandle(els.h2, state.x2, y2);

        /* Guide lines */
        setLine(els.g1x, coords.toSvgX(state.x1), coords.toSvgY(y1), coords.toSvgX(state.x1), coords.toSvgY(0));
        setLine(els.g1y, coords.toSvgX(0), coords.toSvgY(y1), coords.toSvgX(state.x1), coords.toSvgY(y1));
        setLine(els.g2x, coords.toSvgX(state.x2), coords.toSvgY(y2), coords.toSvgX(state.x2), coords.toSvgY(0));
        setLine(els.g2y, coords.toSvgX(0), coords.toSvgY(y2), coords.toSvgX(state.x2), coords.toSvgY(y2));

        /* Axis labels */
        els.x1l.setAttribute('x', coords.toSvgX(state.x1)); els.x1l.setAttribute('y', coords.toSvgY(0) + 18);
        els.y1l.setAttribute('x', coords.toSvgX(0) - 6);    els.y1l.setAttribute('y', coords.toSvgY(y1) + 4);
        els.x2l.setAttribute('x', coords.toSvgX(state.x2)); els.x2l.setAttribute('y', coords.toSvgY(0) + 18);
        els.y2l.setAttribute('x', coords.toSvgX(0) - 6);    els.y2l.setAttribute('y', coords.toSvgY(y2) + 4);
        els.x1l.textContent = cfg.fmtX(state.x1) + ' (A)';
        els.y1l.textContent = cfg.fmtY(y1);
        els.x2l.textContent = cfg.fmtX(state.x2) + ' (B)';
        els.y2l.textContent = cfg.fmtY(y2);

        /* Elasticity */
        var m = midpoint(state.x1, y1, state.x2, y2);
        if (!m) return;
        var v = m.value;

        els.fSub.innerHTML = cfg.formulaName + ' = <span class="ee-frac"><span class="ee-num">' + fmtPct(m.pctY) + '</span><span class="ee-den">' + fmtPct(m.pctX) + '</span></span>';
        els.fRes.innerHTML = cfg.formulaName + ' = <strong>' + fmtV(v) + '</strong>';

        var cls = classifyFn(v);
        els.chip.style.setProperty('--ee-chip-color', cls.color);
        els.chipLbl.textContent = cls.label;

        /* Spectrum marker – tanh scale centred on zero for YED/XED */
        var t = 0.5 + 0.5 * Math.tanh((isFinite(v) ? v : (v > 0 ? 5 : -5)) / cfg.specScale);
        els.marker.style.left = (Math.max(0, Math.min(1, t)) * 100) + '%';

        /* Response panel */
        els.pctX.textContent = fmtPct(m.pctX);
        els.pctY.textContent = fmtPct(m.pctY);

        var verdict = '';
        if (Math.abs(m.pctX) > 0.001) {
          verdict = cfg.verdictFn(v, m);
          var sameDir = (m.pctY * m.pctX) > 0;
          els.cmpArrow.textContent = sameDir ? (Math.abs(m.pctY) > Math.abs(m.pctX) ? '↑ more' : '↑ less') : '↓ opposite';
          els.cmpArrow.style.color = sameDir ? '#059669' : '#DC2626';
        } else {
          verdict = 'Move A and B to see the elasticity calculation.';
          els.cmpArrow.textContent = 'vs';
          els.cmpArrow.style.color = '#94A3B8';
        }
        els.verdict.innerHTML = verdict;
        els.presetNote.textContent = state.note || '';
      }

      /* ---- Drag handling ---- */
      var active = null;

      function svgX(evt) {
        var pt = svg.createSVGPoint();
        pt.x = evt.clientX;
        var ctm = svg.getScreenCTM();
        return ctm ? pt.matrixTransform(ctm.inverse()).x : 0;
      }

      svg.addEventListener('pointerdown', function (e) {
        var h = e.target.closest && e.target.closest('[data-w="handle1"],[data-w="handle2"]');
        if (!h) return;
        active = h.getAttribute('data-w');
        els[active === 'handle1' ? 'h1' : 'h2'].classList.add('is-dragging');
        svg.setPointerCapture && svg.setPointerCapture(e.pointerId);
        e.preventDefault();
      });
      window.addEventListener('pointermove', function (e) {
        if (!active) return;
        var x = clampX(coords.fromSvgX(svgX(e)));
        if (active === 'handle1') state.x1 = x; else state.x2 = x;
        render();
      });
      function pointerUp() {
        if (!active) return;
        els[active === 'handle1' ? 'h1' : 'h2'].classList.remove('is-dragging');
        active = null;
      }
      window.addEventListener('pointerup', pointerUp);
      window.addEventListener('pointercancel', pointerUp);

      /* Keyboard */
      function addKey(handleEl, which) {
        handleEl.addEventListener('keydown', function (e) {
          var step = e.shiftKey ? 5 : 1, k = which === 'h1' ? 'x1' : 'x2';
          if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            state[k] = clampX(state[k] - step); e.preventDefault(); render();
          } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            state[k] = clampX(state[k] + step); e.preventDefault(); render();
          }
        });
      }
      addKey(els.h1, 'h1');
      addKey(els.h2, 'h2');

      /* Preset buttons */
      root.querySelectorAll('[data-w-preset]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var p = presets.filter(function(x){return x.key===btn.getAttribute('data-w-preset');})[0] || presets[0];
          state.a = p.a; state.b = p.b; state.x1 = p.x1; state.x2 = p.x2; state.note = p.note;
          root.querySelectorAll('[data-w-preset]').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
          render();
        });
      });
      var defBtn = root.querySelector('[data-w-preset="' + presets[cfg.defaultIdx || 0].key + '"]');
      if (defBtn) defBtn.classList.add('is-active');

      render();
    }

    function initAll(scope) {
      (scope || document).querySelectorAll('.' + hostClass).forEach(function (el) { init(el); });
    }

    return { init: init, initAll: initAll };
  }

  /* ==================================================================
     YED – Income Elasticity of Demand
     ================================================================== */
  var YED_PRESETS = [
    { key: 'bus',    label: 'Bus travel',      a: 80,   b: -0.75, x1: 25, x2: 68, note: 'As incomes rise, people switch to cars → bus travel is an inferior good (YED < 0).' },
    { key: 'bread',  label: 'Basic food',      a: 90,   b: 0.5,   x1: 20, x2: 80, note: 'Food is a necessity – demand rises slowly with income; YED = 0–1.' },
    { key: 'origin', label: 'Unit elastic',    a: 0,    b: 2.0,   x1: 20, x2: 80, note: 'Engel curve through the origin → YED = 1 at every point.' },
    { key: 'meals',  label: 'Restaurant meals',a: -20,  b: 2.5,   x1: 20, x2: 68, note: 'Demand rises more than income → luxury good (YED > 1).' },
    { key: 'hols',   label: 'Foreign holidays',a: -40,  b: 3.5,   x1: 15, x2: 55, note: 'High luxury – surges in booms, collapses in recessions (YED >> 1).' }
  ];

  function classifyYed(v) {
    if (!isFinite(v) || v < -0.05) return { label: 'Inferior good',    color: '#DC2626' };
    if (v < 0.95)                   return { label: 'Normal necessity', color: '#D97706' };
    if (v < 1.05)                   return { label: 'Unit elastic',     color: '#2563EB' };
    return                                 { label: 'Luxury good',      color: '#7C3AED' };
  }

  var YED_CFG = {
    id: 'yed', xLabel: 'Y', yLabel: 'QD',
    curveColor: '#7C3AED', curveName: 'Engel',
    formulaHead: 'YED – income elasticity of demand',
    formulaLabel: 'YED = <span class="ee-frac"><span class="ee-num">%ΔQD</span><span class="ee-den">%ΔY</span></span>',
    formulaName: 'YED',
    xMax: 100, yMax: 200, defaultIdx: 1,
    fmtX: function(v) { return '£' + v + 'k'; },
    fmtY: function(v) { return 'Q=' + Math.round(v); },
    specCols: '1fr 1fr 1fr 1fr',
    specSegs: [
      { label: 'Inferior', bg: '#FEE2E2', fg: '#DC2626' },
      { label: 'Necessity', bg: '#FEF3C7', fg: '#B45309' },
      { label: 'Unit', bg: '#DBEAFE', fg: '#1D4ED8' },
      { label: 'Luxury', bg: '#EDE9FE', fg: '#6D28D9' }
    ],
    specScale: 1.5,
    panelHead: 'Income & demand response (A → B)',
    panelLabelA: '% Δ Income',
    panelLabelB: '% Δ QD',
    verdictFn: function (v) {
      if (v < 0) return 'Income ↑ → QD ↓ → <strong>inferior good</strong>. Consumers trade up as they get richer.';
      if (v < 1) return 'Income ↑ → QD ↑ (less than proportionally) → <strong>normal necessity</strong>. Recession-resilient.';
      if (Math.abs(v - 1) < 0.05) return 'Income and QD change at the same rate → <strong>unit elastic</strong>. Classic Engel curve through origin.';
      return 'Income ↑ → QD ↑ (more than proportionally) → <strong>luxury good</strong>. Highly sensitive to economic cycles.';
    }
  };

  global.EconosYed = makeController(YED_CFG, YED_PRESETS, classifyYed, 'yed-root', '__yedInit');

  /* ==================================================================
     XED – Cross-Price Elasticity of Demand
     ================================================================== */
  var XED_PRESETS = [
    { key: 'coke',    label: 'Coke / Pepsi',     a: 20,  b: 20,   x1: 2,  x2: 7,  note: 'Strong substitutes – Coke price rise → Pepsi demand surges.' },
    { key: 'tea',     label: 'Tea / Coffee',      a: 60,  b: 5,    x1: 2,  x2: 14, note: 'Moderate substitutes – some switching, but preference remains.' },
    { key: 'indep',   label: 'Independent goods', a: 100, b: 0,    x1: 3,  x2: 15, note: 'XED = 0 – goods are unrelated; price of B has no effect on demand for A.' },
    { key: 'petrol',  label: 'Petrol & car trips',a: 180, b: -10,  x1: 3,  x2: 12, note: 'Complements – costlier petrol → fewer car journeys; XED < 0.' },
    { key: 'teamilk', label: 'Tea & milk',        a: 160, b: -12,  x1: 2,  x2: 10, note: 'Complements – tea and milk consumed together; rising milk price cuts tea demand.' }
  ];

  function classifyXed(v) {
    if (v > 0.3)               return { label: 'Substitutes',       color: '#059669' };
    if (v > 0.05)              return { label: 'Weak substitutes',  color: '#D97706' };
    if (Math.abs(v) <= 0.05)   return { label: 'Independent',       color: '#64748B' };
    if (v > -0.3)              return { label: 'Weak complements',  color: '#2563EB' };
    return                            { label: 'Complements',       color: '#7C3AED' };
  }

  var XED_CFG = {
    id: 'xed', xLabel: 'P_B', yLabel: 'QD_A',
    curveColor: '#2563EB', curveName: 'XD',
    formulaHead: 'XED – cross-price elasticity of demand',
    formulaLabel: 'XED = <span class="ee-frac"><span class="ee-num">%ΔQD_A</span><span class="ee-den">%ΔP_B</span></span>',
    formulaName: 'XED',
    xMax: 20, yMax: 200, defaultIdx: 0,
    fmtX: function(v) { return '£' + v.toFixed(0); },
    fmtY: function(v) { return 'Q=' + Math.round(v); },
    specCols: '1fr 1fr 1fr',
    specSegs: [
      { label: 'Complements', bg: '#EDE9FE', fg: '#6D28D9' },
      { label: 'Independent', bg: '#F1F5F9', fg: '#475569' },
      { label: 'Substitutes', bg: '#DCFCE7', fg: '#166534' }
    ],
    specScale: 0.8,
    panelHead: 'Price of B & demand for A (A → B)',
    panelLabelA: '% Δ Price of B',
    panelLabelB: '% Δ Demand for A',
    verdictFn: function (v) {
      if (v > 0.05) return 'P_B ↑ → QD_A ↑ → goods are <strong>substitutes</strong>. Consumers switch from B to A when B gets pricier.';
      if (v < -0.05) return 'P_B ↑ → QD_A ↓ → goods are <strong>complements</strong>. B gets pricier → less of B demanded → less of A needed too.';
      return 'P_B change has no effect on QD_A → goods are <strong>independent</strong> (XED ≈ 0).';
    }
  };

  global.EconosXed = makeController(XED_CFG, XED_PRESETS, classifyXed, 'xed-root', '__xedInit');

})(window);
