/* ============================================================
   ECONOS – PES Explorer (interactive Price Elasticity of Supply widget)

   Mirror of elasticity-explorer.js but for an upward-sloping supply curve.
   Supply curve parametrised as P = c + d·Q (c can be negative/zero/positive).

   PES (midpoint method) = (%ΔQS) / (%ΔP) – always positive.

   Geometric rule (always tested in exams):
     c > 0  → supply hits P-axis above origin → PES < 1 at every point
     c = 0  → supply passes through origin   → PES = 1 everywhere
     c < 0  → supply hits Q-axis right of O  → PES > 1 at every point
   ============================================================ */

window.EconosPes = (function () {

  /* ---- Chart geometry (same viewBox as PED explorer) ---- */
  var CHART = { x0: 80, x1: 620, y0: 60, y1: 400, qMax: 200, pMax: 20 };

  function qToX(q) { return CHART.x0 + (q / CHART.qMax) * (CHART.x1 - CHART.x0); }
  function xToQ(x) { return ((x - CHART.x0) / (CHART.x1 - CHART.x0)) * CHART.qMax; }
  function pToY(p) { return CHART.y1 - (p / CHART.pMax) * (CHART.y1 - CHART.y0); }

  /* ---- Supply curve P = c + d·Q ---- */
  function curvePS(state, q) { return state.c + state.d * q; }

  /* Q-range where the supply curve is inside the chart (P between 0 and pMax) */
  function qRange(state) {
    var qLow  = Math.max(0, Math.ceil(-state.c / state.d));
    var qHigh = Math.min(CHART.qMax, Math.floor((CHART.pMax - state.c) / state.d));
    if (qLow >= qHigh) { qLow = 0; qHigh = CHART.qMax; }
    return [qLow, qHigh];
  }

  function snapQ(q) { return Math.round(q); }

  /* ---- PES (midpoint method) ---- */
  function pes(p1, q1, p2, q2) {
    var dQ = q2 - q1, dP = p2 - p1;
    if (dQ === 0 && dP === 0) return null;
    var avgQ = (q1 + q2) / 2;
    var avgP = (p1 + p2) / 2;
    if (avgQ === 0 || avgP === 0) return null;
    var pctQ = dQ / avgQ;
    var pctP = dP / avgP;
    if (pctP === 0) return { value: Infinity, pctQ: pctQ, pctP: 0 };
    return { value: pctQ / pctP, pctQ: pctQ, pctP: pctP };
  }

  function classify(pesV) {
    if (!isFinite(pesV) || pesV > 50)  return { key: 'pe',   label: 'Perfectly elastic',   color: '#7C3AED' };
    if (pesV < 0.02)                   return { key: 'pi',   label: 'Perfectly inelastic', color: '#DC2626' };
    if (pesV > 1.05)                   return { key: 'el',   label: 'Elastic',             color: '#059669' };
    if (pesV < 0.95)                   return { key: 'in',   label: 'Inelastic',           color: '#D97706' };
    return                                    { key: 'unit', label: 'Unit elastic',         color: '#2563EB' };
  }

  /* ---- Presets ---- */
  var PRESETS = [
    { key: 'fish',    label: 'Fresh fish (today)',  c: -160,  d: 2,       q1: 82,  q2: 87,  note: 'Cannot catch more fish today – supply is fixed; PES ≈ 0.05.' },
    { key: 'housing', label: 'UK housing',          c: -30,   d: 0.25,    q1: 140, q2: 170, note: 'Planning rules and long build times → very inelastic supply.' },
    { key: 'oil',     label: 'Oil (medium run)',    c: -10,   d: 0.15,    q1: 110, q2: 150, note: 'Existing wells limit short-run supply; new drilling takes time.' },
    { key: 'origin',  label: 'Through origin',      c: 0,     d: 0.10,    q1: 50,  q2: 150, note: 'Supply through origin → PES = 1 at every point on the curve.' },
    { key: 'mfg',     label: 'Manufactured goods',  c: 5,     d: 0.075,   q1: 27,  q2: 107, note: 'Easy capacity expansion; new firms can enter → elastic supply.' },
    { key: 'horiz',   label: 'Perfectly elastic',   c: 9.999, d: 0.00001, q1: 40,  q2: 160, note: 'Horizontal supply – any quantity at the going price; PES = ∞.' }
  ];

  function presetByKey(k) {
    for (var i = 0; i < PRESETS.length; i++) if (PRESETS[i].key === k) return PRESETS[i];
    return PRESETS[2]; // default: oil
  }

  /* ---- Formatters ---- */
  function fmtP(p)  { return '£' + p.toFixed(2); }
  function fmtQ(q)  { return Math.round(q).toLocaleString(); }
  function fmtPes(v){ return !isFinite(v) || v > 50 ? '∞' : v.toFixed(2); }
  function fmtPct(x){
    var pct = x * 100;
    var sign = pct >= 0 ? '+' : '−';
    return sign + Math.abs(pct).toFixed(1) + '%';
  }

  /* ============================================================
     Build the static shell
     ============================================================ */
  function buildShell() {
    return ''
      + '<div class="ee-grid">'
      +   '<div class="ee-chart-wrap">' + buildSvg() + '</div>'
      +   '<div class="ee-readouts">'

      // Formula panel
      +     '<div class="ee-formula" data-pes="formula">'
      +       '<div class="ee-formula__head">PES – midpoint formula</div>'
      +       '<div class="ee-formula__line ee-formula__line--def">'
      +         'PES = <span class="ee-frac"><span class="ee-num">%ΔQS</span><span class="ee-den">%ΔP</span></span>'
      +       '</div>'
      +       '<div class="ee-formula__line" data-pes="formula-sub"></div>'
      +       '<div class="ee-formula__line ee-formula__line--result" data-pes="formula-result"></div>'
      +     '</div>'

      // Classification chip
      +     '<div class="ee-chip" data-pes="chip">'
      +       '<span class="ee-chip__dot"></span>'
      +       '<span class="ee-chip__label" data-pes="chip-label"></span>'
      +     '</div>'

      // Spectrum
      +     '<div class="ee-spectrum">'
      +       '<div class="ee-spectrum__bar">'
      +         '<div class="ee-spectrum__seg ee-spectrum__seg--in">Inelastic</div>'
      +         '<div class="ee-spectrum__seg ee-spectrum__seg--unit">Unit</div>'
      +         '<div class="ee-spectrum__seg ee-spectrum__seg--el">Elastic</div>'
      +       '</div>'
      +       '<div class="ee-spectrum__marker" data-pes="marker"></div>'
      +     '</div>'

      // Supply-response panel (replaces TR rectangles)
      +     '<div class="ee-tr">'
      +       '<div class="ee-tr__head">Supply response (A → B)</div>'
      +       '<div class="ee-tr__row">'
      +         '<div class="ee-tr__cell ee-tr__cell--p1">'
      +           '<div class="ee-tr__cell-label">Price change</div>'
      +           '<div class="ee-tr__cell-value" data-pes="pct-p"></div>'
      +         '</div>'
      +         '<div class="ee-tr__arrow" data-pes="sr-arrow">vs</div>'
      +         '<div class="ee-tr__cell ee-tr__cell--p2">'
      +           '<div class="ee-tr__cell-label">Quantity response</div>'
      +           '<div class="ee-tr__cell-value" data-pes="pct-q"></div>'
      +         '</div>'
      +       '</div>'
      +       '<div class="ee-tr__verdict" data-pes="sr-verdict"></div>'
      +     '</div>'

      +   '</div>'
      + '</div>'
      + buildPresetBar();
  }

  function buildPresetBar() {
    var btns = PRESETS.map(function (p) {
      return '<button type="button" class="ee-preset" data-pes-preset="' + p.key + '">' + p.label + '</button>';
    }).join('');
    return ''
      + '<div class="ee-preset-bar">'
      +   '<div class="ee-preset-bar__head">Try a real market</div>'
      +   '<div class="ee-preset-bar__btns">' + btns + '</div>'
      +   '<div class="ee-preset-note" data-pes="preset-note"></div>'
      + '</div>';
  }

  function buildSvg() {
    return ''
      + '<svg class="ee-svg" viewBox="0 0 720 460" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">'
      +   '<defs>'
      +     '<clipPath id="pes-clip"><rect x="' + CHART.x0 + '" y="' + CHART.y0 + '" width="' + (CHART.x1 - CHART.x0) + '" height="' + (CHART.y1 - CHART.y0) + '"/></clipPath>'
      +     '<marker id="pes-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0B1426"/></marker>'
      +   '</defs>'

      // Axes
      +   '<line x1="' + CHART.x0 + '" y1="' + CHART.y1 + '" x2="' + (CHART.x1 + 18) + '" y2="' + CHART.y1 + '" stroke="#0B1426" stroke-width="1.5" marker-end="url(#pes-arrow)"/>'
      +   '<line x1="' + CHART.x0 + '" y1="' + (CHART.y0 - 18) + '" x2="' + CHART.x0 + '" y2="' + CHART.y1 + '" stroke="#0B1426" stroke-width="1.5" marker-start="url(#pes-arrow)"/>'
      +   '<text x="' + (CHART.x1 + 24) + '" y="' + (CHART.y1 + 5) + '" font-size="13" font-weight="700" fill="#0B1426">Q</text>'
      +   '<text x="' + (CHART.x0 - 12) + '" y="' + (CHART.y0 - 22) + '" font-size="13" font-weight="700" fill="#0B1426" text-anchor="middle">P</text>'
      +   '<text x="' + (CHART.x0 - 12) + '" y="' + (CHART.y1 + 5) + '" font-size="12" fill="#64748B" text-anchor="end">O</text>'

      // The supply curve
      +   '<g clip-path="url(#pes-clip)">'
      +     '<line data-pes="curve" x1="0" y1="0" x2="0" y2="0" stroke="#059669" stroke-width="2.5"/>'
      +   '</g>'
      +   '<text data-pes="curve-label" x="0" y="0" font-size="14" font-weight="700" fill="#059669">S</text>'

      // Guide lines from handles to axes
      +   '<line data-pes="g1-x" x1="0" y1="0" x2="0" y2="0" stroke="#D97706" stroke-width="1.5" stroke-dasharray="5 4"/>'
      +   '<line data-pes="g1-y" x1="0" y1="0" x2="0" y2="0" stroke="#D97706" stroke-width="1.5" stroke-dasharray="5 4"/>'
      +   '<line data-pes="g2-x" x1="0" y1="0" x2="0" y2="0" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="5 4"/>'
      +   '<line data-pes="g2-y" x1="0" y1="0" x2="0" y2="0" stroke="#2563EB" stroke-width="1.5" stroke-dasharray="5 4"/>'

      // Axis labels for the four co-ordinate values
      +   '<text data-pes="p1-label" x="0" y="0" font-size="12" font-weight="700" fill="#D97706" text-anchor="end">P₁</text>'
      +   '<text data-pes="q1-label" x="0" y="0" font-size="12" font-weight="700" fill="#D97706" text-anchor="middle">Q₁</text>'
      +   '<text data-pes="p2-label" x="0" y="0" font-size="12" font-weight="700" fill="#2563EB" text-anchor="end">P₂</text>'
      +   '<text data-pes="q2-label" x="0" y="0" font-size="12" font-weight="700" fill="#2563EB" text-anchor="middle">Q₂</text>'

      // Draggable handles
      +   '<g data-pes="handle1" class="ee-handle" tabindex="0" role="slider" aria-label="Point A">'
      +     '<circle r="14" fill="#D97706" fill-opacity="0.12"/>'
      +     '<circle r="8" fill="white" stroke="#D97706" stroke-width="3"/>'
      +     '<text dx="14" dy="-12" font-size="13" font-weight="800" fill="#D97706">A</text>'
      +   '</g>'
      +   '<g data-pes="handle2" class="ee-handle" tabindex="0" role="slider" aria-label="Point B">'
      +     '<circle r="14" fill="#2563EB" fill-opacity="0.12"/>'
      +     '<circle r="8" fill="white" stroke="#2563EB" stroke-width="3"/>'
      +     '<text dx="14" dy="-12" font-size="13" font-weight="800" fill="#2563EB">B</text>'
      +   '</g>'

      + '<text x="' + (CHART.x1 - 8) + '" y="' + (CHART.y0 + 18) + '" font-size="11" fill="#94A3B8" text-anchor="end" font-style="italic">drag A and B along the curve</text>'
      + '</svg>';
  }

  /* ============================================================
     Controller
     ============================================================ */
  function init(root) {
    if (!root || root.__pesInit) return;
    root.__pesInit = true;
    root.innerHTML = buildShell();

    var defPreset = presetByKey('oil');
    var state = {
      c: defPreset.c, d: defPreset.d,
      q1: defPreset.q1, q2: defPreset.q2,
      active: null,
      presetNote: defPreset.note
    };

    var svg = root.querySelector('.ee-svg');
    var els = {
      curve:        root.querySelector('[data-pes="curve"]'),
      curveLabel:   root.querySelector('[data-pes="curve-label"]'),
      handle1:      root.querySelector('[data-pes="handle1"]'),
      handle2:      root.querySelector('[data-pes="handle2"]'),
      g1x:          root.querySelector('[data-pes="g1-x"]'),
      g1y:          root.querySelector('[data-pes="g1-y"]'),
      g2x:          root.querySelector('[data-pes="g2-x"]'),
      g2y:          root.querySelector('[data-pes="g2-y"]'),
      p1Label:      root.querySelector('[data-pes="p1-label"]'),
      q1Label:      root.querySelector('[data-pes="q1-label"]'),
      p2Label:      root.querySelector('[data-pes="p2-label"]'),
      q2Label:      root.querySelector('[data-pes="q2-label"]'),
      formulaSub:   root.querySelector('[data-pes="formula-sub"]'),
      formulaResult:root.querySelector('[data-pes="formula-result"]'),
      chip:         root.querySelector('[data-pes="chip"]'),
      chipLabel:    root.querySelector('[data-pes="chip-label"]'),
      marker:       root.querySelector('[data-pes="marker"]'),
      pctP:         root.querySelector('[data-pes="pct-p"]'),
      pctQ:         root.querySelector('[data-pes="pct-q"]'),
      srArrow:      root.querySelector('[data-pes="sr-arrow"]'),
      srVerdict:    root.querySelector('[data-pes="sr-verdict"]'),
      presetNote:   root.querySelector('[data-pes="preset-note"]')
    };

    function setHandle(handleEl, q, p) {
      handleEl.setAttribute('transform', 'translate(' + qToX(q) + ',' + pToY(p) + ')');
    }

    function render() {
      var p1 = curvePS(state, state.q1);
      var p2 = curvePS(state, state.q2);

      // Supply curve endpoints
      var range = qRange(state);
      var qA = range[0], qB = range[1];
      els.curve.setAttribute('x1', qToX(qA));
      els.curve.setAttribute('y1', pToY(curvePS(state, qA)));
      els.curve.setAttribute('x2', qToX(qB));
      els.curve.setAttribute('y2', pToY(curvePS(state, qB)));

      // Curve label near the upper-right end of the supply curve
      els.curveLabel.setAttribute('x', qToX(qB) + 6);
      els.curveLabel.setAttribute('y', pToY(curvePS(state, qB)) - 4);

      // Handles
      setHandle(els.handle1, state.q1, p1);
      setHandle(els.handle2, state.q2, p2);

      // Guide lines to axes
      els.g1x.setAttribute('x1', qToX(state.q1)); els.g1x.setAttribute('y1', pToY(p1));
      els.g1x.setAttribute('x2', qToX(state.q1)); els.g1x.setAttribute('y2', pToY(0));
      els.g1y.setAttribute('x1', qToX(0));         els.g1y.setAttribute('y1', pToY(p1));
      els.g1y.setAttribute('x2', qToX(state.q1)); els.g1y.setAttribute('y2', pToY(p1));
      els.g2x.setAttribute('x1', qToX(state.q2)); els.g2x.setAttribute('y1', pToY(p2));
      els.g2x.setAttribute('x2', qToX(state.q2)); els.g2x.setAttribute('y2', pToY(0));
      els.g2y.setAttribute('x1', qToX(0));         els.g2y.setAttribute('y1', pToY(p2));
      els.g2y.setAttribute('x2', qToX(state.q2)); els.g2y.setAttribute('y2', pToY(p2));

      // Axis labels
      els.p1Label.setAttribute('x', qToX(0) - 6); els.p1Label.setAttribute('y', pToY(p1) + 4);
      els.q1Label.setAttribute('x', qToX(state.q1)); els.q1Label.setAttribute('y', pToY(0) + 18);
      els.p2Label.setAttribute('x', qToX(0) - 6); els.p2Label.setAttribute('y', pToY(p2) + 4);
      els.q2Label.setAttribute('x', qToX(state.q2)); els.q2Label.setAttribute('y', pToY(0) + 18);
      els.p1Label.textContent = 'P₁ ' + fmtP(p1);
      els.q1Label.textContent = 'Q₁ ' + fmtQ(state.q1);
      els.p2Label.textContent = 'P₂ ' + fmtP(p2);
      els.q2Label.textContent = 'Q₂ ' + fmtQ(state.q2);

      // PES math
      var r = pes(p1, state.q1, p2, state.q2);
      if (r) {
        var pesV = r.value; // always positive for supply
        var absPes = Math.abs(pesV);

        els.formulaSub.innerHTML =
          'PES = <span class="ee-frac"><span class="ee-num">' + fmtPct(r.pctQ) + '</span><span class="ee-den">' + fmtPct(r.pctP) + '</span></span>';
        els.formulaResult.innerHTML = 'PES = <strong>+' + fmtPes(absPes) + '</strong>';

        var cls = classify(absPes);
        els.chip.style.setProperty('--ee-chip-color', cls.color);
        els.chipLabel.textContent = cls.label;

        // Spectrum marker (same log scale as PED)
        var t;
        if (!isFinite(absPes) || absPes > 50) t = 1;
        else if (absPes <= 0)                  t = 0;
        else                                   t = 0.5 + 0.5 * Math.tanh(Math.log(absPes) / 1.4);
        els.marker.style.left = (Math.max(0, Math.min(1, t)) * 100) + '%';

        // Supply-response panel
        els.pctP.textContent = fmtPct(r.pctP);
        els.pctQ.textContent = fmtPct(r.pctQ);

        var verdict = '';
        if (Math.abs(r.pctP) > 0.001) {
          var bigger = Math.abs(r.pctQ) > Math.abs(r.pctP);
          var equal  = Math.abs(Math.abs(r.pctQ) - Math.abs(r.pctP)) < 0.005;
          els.srArrow.textContent = bigger ? '↑ more' : (equal ? '= same' : '↓ less');
          els.srArrow.style.color = bigger ? '#059669' : (equal ? '#2563EB' : '#D97706');
          if (equal) {
            verdict = 'QS changes by the same proportion as price → <strong>unit elastic</strong> supply.';
          } else if (bigger) {
            verdict = 'QS changes <em>more</em> than proportionally → supply is <strong>elastic</strong>. Producers can scale output readily.';
          } else {
            verdict = 'QS changes <em>less</em> than proportionally → supply is <strong>inelastic</strong>. Producers face constraints on expanding output.';
          }
        } else {
          verdict = 'Move A and B to compare the quantity response to a price change.';
        }
        els.srVerdict.innerHTML = verdict;
      }

      els.presetNote.textContent = state.presetNote || '';
    }

    /* ---- Drag handling ---- */
    function svgPoint(evt) {
      var pt = svg.createSVGPoint();
      pt.x = evt.clientX; pt.y = evt.clientY;
      var ctm = svg.getScreenCTM();
      if (!ctm) return { x: 0, y: 0 };
      return pt.matrixTransform(ctm.inverse());
    }

    function pickHandle(target) {
      var h = target.closest && target.closest('[data-pes="handle1"], [data-pes="handle2"]');
      return h ? h.getAttribute('data-pes') : null;
    }

    function clampQ(q) {
      var range = qRange(state);
      return Math.max(range[0], Math.min(range[1], snapQ(q)));
    }

    function onPointerDown(evt) {
      var which = pickHandle(evt.target);
      if (!which) return;
      state.active = which;
      els[which].classList.add('is-dragging');
      svg.setPointerCapture && svg.setPointerCapture(evt.pointerId);
      evt.preventDefault();
    }

    function onPointerMove(evt) {
      if (!state.active) return;
      var loc = svgPoint(evt);
      var q = clampQ(xToQ(loc.x));
      if (state.active === 'handle1') state.q1 = q;
      else                            state.q2 = q;
      render();
    }

    function onPointerUp() {
      if (!state.active) return;
      els[state.active].classList.remove('is-dragging');
      state.active = null;
    }

    svg.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    /* Keyboard support */
    function onKey(handleEl, which) {
      handleEl.addEventListener('keydown', function (e) {
        var step = e.shiftKey ? 10 : 1;
        var k = which === 'handle1' ? 'q1' : 'q2';
        if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
          state[k] = clampQ(state[k] - step);
          e.preventDefault(); render();
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
          state[k] = clampQ(state[k] + step);
          e.preventDefault(); render();
        }
      });
    }
    onKey(els.handle1, 'handle1');
    onKey(els.handle2, 'handle2');

    /* ---- Preset buttons ---- */
    root.querySelectorAll('[data-pes-preset]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var p = presetByKey(btn.getAttribute('data-pes-preset'));
        state.c = p.c; state.d = p.d;
        state.q1 = p.q1; state.q2 = p.q2;
        state.presetNote = p.note;
        root.querySelectorAll('[data-pes-preset]').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
        render();
      });
    });
    var defaultBtn = root.querySelector('[data-pes-preset="oil"]');
    if (defaultBtn) defaultBtn.classList.add('is-active');

    render();
  }

  function initAll(scope) {
    var roots = (scope || document).querySelectorAll('.pes-root');
    for (var i = 0; i < roots.length; i++) init(roots[i]);
  }

  return { init: init, initAll: initAll };

})();
