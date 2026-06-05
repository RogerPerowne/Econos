/* ============================================================
   ECONOS – Elasticity Explorer (interactive PED widget)

   Drop a <div class="ee-root" data-ee-config='...'></div> into the
   page and call EconosElasticity.init(rootEl).  The widget renders
   itself; no other code on the page is required.

   The widget renders a draggable demand curve with two handles,
   midpoint-formula PED math, a tone-coded classification chip,
   and live total-revenue rectangles.  Preset buttons reload the
   curve with real-world calibrations.
   ============================================================ */

window.EconosElasticity = (function () {

  /* ---- Chart geometry (SVG viewBox 0 0 720 460) ---- */
  var CHART = {
    x0: 80, x1: 620,        // pixel x range
    y0: 60, y1: 400,        // pixel y range (y0 = top)
    qMax: 200, pMax: 20     // axis maxima
  };

  function qToX(q) { return CHART.x0 + (q / CHART.qMax) * (CHART.x1 - CHART.x0); }
  function xToQ(x) { return ((x - CHART.x0) / (CHART.x1 - CHART.x0)) * CHART.qMax; }
  function pToY(p) { return CHART.y1 - (p / CHART.pMax) * (CHART.y1 - CHART.y0); }

  /* ---- Curve parametrised by intercept a and slope b: P = a - b·Q ---- */
  function curveP(state, q) { return state.a - state.b * q; }

  /* Q-range over which the curve sits inside the chart */
  function qRange(state) {
    var qMin = Math.max(0, (state.a - CHART.pMax) / state.b);
    var qMax = Math.min(CHART.qMax, state.a / state.b);
    if (!isFinite(qMin)) qMin = 0;
    if (!isFinite(qMax)) qMax = CHART.qMax;
    return [qMin, qMax];
  }

  /* Snap Q for clean readouts (whole numbers) */
  function snapQ(q) { return Math.round(q); }

  /* ---- PED math (midpoint method) ---- */
  function ped(p1, q1, p2, q2) {
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

  function classify(absPed) {
    if (!isFinite(absPed))           return { key: 'pe',   label: 'Perfectly elastic',   color: '#7C3AED' };
    if (absPed === 0)                return { key: 'pi',   label: 'Perfectly inelastic', color: '#DC2626' };
    if (absPed > 1.05)               return { key: 'el',   label: 'Elastic',             color: '#059669' };
    if (absPed < 0.95)               return { key: 'in',   label: 'Inelastic',           color: '#D97706' };
    return                                   { key: 'unit', label: 'Unit elastic',        color: '#2563EB' };
  }

  /* ---- Preset scenarios (intercept a, slope b, sensible starting points) ---- */
  var PRESETS = [
    { key: 'insulin',  label: 'Insulin',          a: 19.5, b: 0.005, p1: 8,  p2: 14, note: 'Life-saving good – quantity barely moves with price.' },
    { key: 'petrolsr', label: 'Petrol (short-run)', a: 18, b: 0.04,  p1: 8,  p2: 12, note: 'Locked-in habits, no alternatives yet → inelastic.' },
    { key: 'petrollr', label: 'Petrol (long-run)',  a: 18, b: 0.08,  p1: 6,  p2: 12, note: 'Time to switch to EVs / public transport → more elastic.' },
    { key: 'cars',     label: 'Family cars',        a: 18, b: 0.10,  p1: 6,  p2: 12, note: 'Many substitutes and large share of income → roughly unit.' },
    { key: 'luxury',   label: 'Designer handbags', a: 18, b: 0.16,  p1: 4,  p2: 10, note: 'Many luxury substitutes, postpone-able → highly elastic.' },
    { key: 'pcfirm',   label: 'A perfect-comp firm', a: 10.001, b: 0.00001, p1: 9.999, p2: 10, note: 'Faces a horizontal demand curve – any price above market = zero sales.' }
  ];

  function presetByKey(k) {
    for (var i = 0; i < PRESETS.length; i++) if (PRESETS[i].key === k) return PRESETS[i];
    return PRESETS[1]; // default: petrol short-run
  }

  /* ---- Number formatting ---- */
  function fmtP(p)  { return '£' + p.toFixed(2); }
  function fmtQ(q)  { return Math.round(q).toLocaleString(); }
  function fmtPed(v){
    if (!isFinite(v)) return '∞';
    return v.toFixed(2);
  }
  function fmtPct(x){
    var pct = x * 100;
    var sign = pct >= 0 ? '+' : '−';
    return sign + Math.abs(pct).toFixed(1) + '%';
  }
  function fmtTR(p, q){
    var tr = p * q;
    if (tr >= 1000) return '£' + Math.round(tr).toLocaleString();
    return '£' + tr.toFixed(0);
  }

  /* ============================================================
     Build the static SVG + readouts shell for the widget
     ============================================================ */
  function buildShell() {
    return ''
      + '<div class="ee-grid">'
      +   '<div class="ee-chart-wrap">'
      +     buildSvg()
      +   '</div>'
      +   '<div class="ee-readouts">'
      +     '<div class="ee-formula" data-ee="formula">'
      +       '<div class="ee-formula__head">PED – midpoint formula</div>'
      +       '<div class="ee-formula__line ee-formula__line--def">'
      +         'PED = <span class="ee-frac"><span class="ee-num">%ΔQ</span><span class="ee-den">%ΔP</span></span>'
      +       '</div>'
      +       '<div class="ee-formula__line" data-ee="formula-sub"></div>'
      +       '<div class="ee-formula__line ee-formula__line--result" data-ee="formula-result"></div>'
      +     '</div>'
      +     '<div class="ee-chip" data-ee="chip">'
      +       '<span class="ee-chip__dot"></span>'
      +       '<span class="ee-chip__label" data-ee="chip-label"></span>'
      +     '</div>'
      +     '<div class="ee-spectrum">'
      +       '<div class="ee-spectrum__bar">'
      +         '<div class="ee-spectrum__seg ee-spectrum__seg--in">Inelastic</div>'
      +         '<div class="ee-spectrum__seg ee-spectrum__seg--unit">Unit</div>'
      +         '<div class="ee-spectrum__seg ee-spectrum__seg--el">Elastic</div>'
      +       '</div>'
      +       '<div class="ee-spectrum__marker" data-ee="marker"></div>'
      +     '</div>'
      +     '<div class="ee-tr">'
      +       '<div class="ee-tr__head">Total revenue (P × Q)</div>'
      +       '<div class="ee-tr__row">'
      +         '<div class="ee-tr__cell ee-tr__cell--p1">'
      +           '<div class="ee-tr__cell-label">At point A</div>'
      +           '<div class="ee-tr__cell-value" data-ee="tr1"></div>'
      +         '</div>'
      +         '<div class="ee-tr__arrow" data-ee="tr-arrow">→</div>'
      +         '<div class="ee-tr__cell ee-tr__cell--p2">'
      +           '<div class="ee-tr__cell-label">At point B</div>'
      +           '<div class="ee-tr__cell-value" data-ee="tr2"></div>'
      +         '</div>'
      +       '</div>'
      +       '<div class="ee-tr__verdict" data-ee="tr-verdict"></div>'
      +     '</div>'
      +   '</div>'
      + '</div>'
      + buildPresetBar();
  }

  function buildPresetBar() {
    var btns = PRESETS.map(function (p) {
      return '<button type="button" class="ee-preset" data-ee-preset="' + p.key + '">'
        +    p.label + '</button>';
    }).join('');
    return ''
      + '<div class="ee-preset-bar">'
      +   '<div class="ee-preset-bar__head">Try a real market</div>'
      +   '<div class="ee-preset-bar__btns">' + btns + '</div>'
      +   '<div class="ee-preset-note" data-ee="preset-note"></div>'
      + '</div>';
  }

  function buildSvg() {
    return ''
      + '<svg class="ee-svg" viewBox="0 0 720 460" xmlns="http://www.w3.org/2000/svg" font-family="Inter, sans-serif">'
      +   '<defs>'
      +     '<clipPath id="ee-clip"><rect x="' + CHART.x0 + '" y="' + CHART.y0 + '" width="' + (CHART.x1 - CHART.x0) + '" height="' + (CHART.y1 - CHART.y0) + '"/></clipPath>'
      +     '<marker id="ee-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0B1426"/></marker>'
      +   '</defs>'

      // Axes
      +   '<line x1="' + CHART.x0 + '" y1="' + CHART.y1 + '" x2="' + (CHART.x1 + 18) + '" y2="' + CHART.y1 + '" stroke="#0B1426" stroke-width="1.5" marker-end="url(#ee-arrow)"/>'
      +   '<line x1="' + CHART.x0 + '" y1="' + (CHART.y0 - 18) + '" x2="' + CHART.x0 + '" y2="' + CHART.y1 + '" stroke="#0B1426" stroke-width="1.5" marker-start="url(#ee-arrow)"/>'
      +   '<text x="' + (CHART.x1 + 24) + '" y="' + (CHART.y1 + 5) + '" font-size="13" font-weight="700" fill="#0B1426">Q</text>'
      +   '<text x="' + (CHART.x0 - 12) + '" y="' + (CHART.y0 - 22) + '" font-size="13" font-weight="700" fill="#0B1426" text-anchor="middle">P</text>'
      +   '<text x="' + (CHART.x0 - 12) + '" y="' + (CHART.y1 + 5) + '" font-size="12" fill="#64748B" text-anchor="end">O</text>'

      // TR rectangles (drawn under the curve)
      +   '<g clip-path="url(#ee-clip)">'
      +     '<rect data-ee="tr1-rect" x="0" y="0" width="0" height="0" fill="#D97706" fill-opacity="0.10" stroke="#D97706" stroke-width="1.5" stroke-dasharray="4 3"/>'
      +     '<rect data-ee="tr2-rect" x="0" y="0" width="0" height="0" fill="#059669" fill-opacity="0.10" stroke="#059669" stroke-width="1.5" stroke-dasharray="4 3"/>'
      +   '</g>'

      // The demand curve itself
      +   '<g clip-path="url(#ee-clip)">'
      +     '<line data-ee="curve" x1="0" y1="0" x2="0" y2="0" stroke="#2563EB" stroke-width="2.5"/>'
      +   '</g>'
      +   '<text data-ee="curve-label" x="0" y="0" font-size="14" font-weight="700" fill="#2563EB">D</text>'

      // Guide lines from each handle to the axes
      +   '<line data-ee="g1-x" x1="0" y1="0" x2="0" y2="0" stroke="#D97706" stroke-width="1.5" stroke-dasharray="5 4"/>'
      +   '<line data-ee="g1-y" x1="0" y1="0" x2="0" y2="0" stroke="#D97706" stroke-width="1.5" stroke-dasharray="5 4"/>'
      +   '<line data-ee="g2-x" x1="0" y1="0" x2="0" y2="0" stroke="#059669" stroke-width="1.5" stroke-dasharray="5 4"/>'
      +   '<line data-ee="g2-y" x1="0" y1="0" x2="0" y2="0" stroke="#059669" stroke-width="1.5" stroke-dasharray="5 4"/>'

      // Axis tick labels for the four points
      +   '<text data-ee="p1-label"  x="0" y="0" font-size="12" font-weight="700" fill="#D97706" text-anchor="end">P₁</text>'
      +   '<text data-ee="q1-label"  x="0" y="0" font-size="12" font-weight="700" fill="#D97706" text-anchor="middle">Q₁</text>'
      +   '<text data-ee="p2-label"  x="0" y="0" font-size="12" font-weight="700" fill="#059669" text-anchor="end">P₂</text>'
      +   '<text data-ee="q2-label"  x="0" y="0" font-size="12" font-weight="700" fill="#059669" text-anchor="middle">Q₂</text>'

      // Draggable handles (rendered last so they're on top)
      +   '<g data-ee="handle1" class="ee-handle" tabindex="0" role="slider" aria-label="Point A">'
      +     '<circle r="14" fill="#D97706" fill-opacity="0.12"/>'
      +     '<circle r="8" fill="white" stroke="#D97706" stroke-width="3"/>'
      +     '<text dx="14" dy="-12" font-size="13" font-weight="800" fill="#D97706">A</text>'
      +   '</g>'
      +   '<g data-ee="handle2" class="ee-handle" tabindex="0" role="slider" aria-label="Point B">'
      +     '<circle r="14" fill="#059669" fill-opacity="0.12"/>'
      +     '<circle r="8" fill="white" stroke="#059669" stroke-width="3"/>'
      +     '<text dx="14" dy="-12" font-size="13" font-weight="800" fill="#059669">B</text>'
      +   '</g>'

      // Hint text
      +   '<text x="' + (CHART.x1 - 8) + '" y="' + (CHART.y0 + 18) + '" font-size="11" fill="#94A3B8" text-anchor="end" font-style="italic">drag A and B along the curve</text>'

      + '</svg>';
  }

  /* ============================================================
     Controller – wire up handles, render loop
     ============================================================ */
  function init(root) {
    if (!root || root.__eeInit) return;
    root.__eeInit = true;
    root.innerHTML = buildShell();

    var state = (function () {
      var p = presetByKey('petrolsr');
      return {
        a: p.a, b: p.b,
        q1: (p.a - p.p1) / p.b,
        q2: (p.a - p.p2) / p.b,
        active: null,
        presetNote: p.note
      };
    })();

    var svg = root.querySelector('.ee-svg');
    var els = {
      curve:        root.querySelector('[data-ee="curve"]'),
      curveLabel:   root.querySelector('[data-ee="curve-label"]'),
      handle1:      root.querySelector('[data-ee="handle1"]'),
      handle2:      root.querySelector('[data-ee="handle2"]'),
      tr1rect:      root.querySelector('[data-ee="tr1-rect"]'),
      tr2rect:      root.querySelector('[data-ee="tr2-rect"]'),
      g1x:          root.querySelector('[data-ee="g1-x"]'),
      g1y:          root.querySelector('[data-ee="g1-y"]'),
      g2x:          root.querySelector('[data-ee="g2-x"]'),
      g2y:          root.querySelector('[data-ee="g2-y"]'),
      p1Label:      root.querySelector('[data-ee="p1-label"]'),
      q1Label:      root.querySelector('[data-ee="q1-label"]'),
      p2Label:      root.querySelector('[data-ee="p2-label"]'),
      q2Label:      root.querySelector('[data-ee="q2-label"]'),
      formulaSub:   root.querySelector('[data-ee="formula-sub"]'),
      formulaResult:root.querySelector('[data-ee="formula-result"]'),
      chip:         root.querySelector('[data-ee="chip"]'),
      chipLabel:    root.querySelector('[data-ee="chip-label"]'),
      marker:       root.querySelector('[data-ee="marker"]'),
      tr1:          root.querySelector('[data-ee="tr1"]'),
      tr2:          root.querySelector('[data-ee="tr2"]'),
      trArrow:      root.querySelector('[data-ee="tr-arrow"]'),
      trVerdict:    root.querySelector('[data-ee="tr-verdict"]'),
      presetNote:   root.querySelector('[data-ee="preset-note"]')
    };

    function setHandle(handle, q, p) {
      handle.setAttribute('transform', 'translate(' + qToX(q) + ',' + pToY(p) + ')');
    }

    function setRect(rect, p, q, _q0) {
      // Rectangle from (0, p) down to (q, 0)  – but using q0 for clarity (here q0=0)
      var x = qToX(0);
      var y = pToY(p);
      var w = qToX(q) - qToX(0);
      var h = pToY(0) - pToY(p);
      rect.setAttribute('x', x);
      rect.setAttribute('y', y);
      rect.setAttribute('width',  Math.max(0, w));
      rect.setAttribute('height', Math.max(0, h));
    }

    function render() {
      var p1 = curveP(state, state.q1);
      var p2 = curveP(state, state.q2);

      // Curve endpoints (where it meets the chart edges)
      var range = qRange(state);
      var qA = range[0], qB = range[1];
      els.curve.setAttribute('x1', qToX(qA));
      els.curve.setAttribute('y1', pToY(curveP(state, qA)));
      els.curve.setAttribute('x2', qToX(qB));
      els.curve.setAttribute('y2', pToY(curveP(state, qB)));

      // Curve label at lower-right end
      els.curveLabel.setAttribute('x', qToX(qB) + 6);
      els.curveLabel.setAttribute('y', pToY(curveP(state, qB)) + 4);

      // TR rectangles
      setRect(els.tr1rect, p1, state.q1);
      setRect(els.tr2rect, p2, state.q2);

      // Handles
      setHandle(els.handle1, state.q1, p1);
      setHandle(els.handle2, state.q2, p2);

      // Guide lines
      els.g1x.setAttribute('x1', qToX(state.q1)); els.g1x.setAttribute('y1', pToY(p1));
      els.g1x.setAttribute('x2', qToX(state.q1)); els.g1x.setAttribute('y2', pToY(0));
      els.g1y.setAttribute('x1', qToX(0));        els.g1y.setAttribute('y1', pToY(p1));
      els.g1y.setAttribute('x2', qToX(state.q1)); els.g1y.setAttribute('y2', pToY(p1));
      els.g2x.setAttribute('x1', qToX(state.q2)); els.g2x.setAttribute('y1', pToY(p2));
      els.g2x.setAttribute('x2', qToX(state.q2)); els.g2x.setAttribute('y2', pToY(0));
      els.g2y.setAttribute('x1', qToX(0));        els.g2y.setAttribute('y1', pToY(p2));
      els.g2y.setAttribute('x2', qToX(state.q2)); els.g2y.setAttribute('y2', pToY(p2));

      // Axis tick labels
      els.p1Label.setAttribute('x', qToX(0) - 6); els.p1Label.setAttribute('y', pToY(p1) + 4);
      els.q1Label.setAttribute('x', qToX(state.q1)); els.q1Label.setAttribute('y', pToY(0) + 18);
      els.p2Label.setAttribute('x', qToX(0) - 6); els.p2Label.setAttribute('y', pToY(p2) + 4);
      els.q2Label.setAttribute('x', qToX(state.q2)); els.q2Label.setAttribute('y', pToY(0) + 18);

      els.p1Label.textContent = 'P₁ ' + fmtP(p1);
      els.q1Label.textContent = 'Q₁ ' + fmtQ(state.q1);
      els.p2Label.textContent = 'P₂ ' + fmtP(p2);
      els.q2Label.textContent = 'Q₂ ' + fmtQ(state.q2);

      // PED math
      var r = ped(p1, state.q1, p2, state.q2);
      if (r && isFinite(r.value)) {
        var absV = Math.abs(r.value);
        els.formulaSub.innerHTML =
          'PED = <span class="ee-frac"><span class="ee-num">' + fmtPct(r.pctQ) + '</span><span class="ee-den">' + fmtPct(r.pctP) + '</span></span>';
        els.formulaResult.innerHTML = 'PED = <strong>' + (r.value < 0 ? '−' : '+') + fmtPed(absV) + '</strong> &nbsp; <span class="ee-mod">|PED| = ' + fmtPed(absV) + '</span>';

        var c = classify(absV);
        els.chip.style.setProperty('--ee-chip-color', c.color);
        els.chipLabel.textContent = c.label;

        // Spectrum marker: log scale, |PED|=1 sits in the middle.
        var t;
        if (!isFinite(absV))      t = 1;
        else if (absV <= 0)       t = 0;
        else                      t = 0.5 + 0.5 * Math.tanh(Math.log(absV) / 1.4);
        t = Math.max(0, Math.min(1, t));
        els.marker.style.left = (t * 100) + '%';

        // TR
        var tr1 = p1 * state.q1;
        var tr2 = p2 * state.q2;
        els.tr1.textContent = fmtTR(p1, state.q1);
        els.tr2.textContent = fmtTR(p2, state.q2);
        var deltaTR = tr2 - tr1;
        var pricedirection = p2 > p1 ? 'rose' : (p2 < p1 ? 'fell' : 'unchanged');
        var trWord = Math.abs(deltaTR) < 0.5 ? 'unchanged' : (deltaTR > 0 ? 'rose' : 'fell');
        els.trArrow.textContent = deltaTR > 0.5 ? '↑' : (deltaTR < -0.5 ? '↓' : '→');
        els.trArrow.style.color = deltaTR > 0.5 ? '#059669' : (deltaTR < -0.5 ? '#DC2626' : '#94A3B8');
        var verdict = '';
        if (pricedirection !== 'unchanged') {
          verdict = 'Price ' + pricedirection + ' → revenue ' + trWord + '. ';
          if (trWord !== 'unchanged') {
            if ((pricedirection === 'rose' && trWord === 'rose') || (pricedirection === 'fell' && trWord === 'fell')) {
              verdict += 'Demand is <strong>inelastic</strong> here – quantity moved less than price.';
            } else {
              verdict += 'Demand is <strong>elastic</strong> here – quantity moved more than price.';
            }
          } else {
            verdict += 'Demand is <strong>unit elastic</strong> at this point.';
          }
        } else {
          verdict = 'Move the points to compare revenue at two prices.';
        }
        els.trVerdict.innerHTML = verdict;
      }

      els.presetNote.textContent = state.presetNote || '';
    }

    /* ---- Drag handling ---- */
    function svgPoint(evt) {
      var pt = svg.createSVGPoint();
      pt.x = evt.clientX; pt.y = evt.clientY;
      var ctm = svg.getScreenCTM();
      if (!ctm) return { x: 0, y: 0 };
      var loc = pt.matrixTransform(ctm.inverse());
      return { x: loc.x, y: loc.y };
    }

    function pickHandle(target) {
      var h = target.closest && target.closest('[data-ee="handle1"], [data-ee="handle2"]');
      if (!h) return null;
      return h.getAttribute('data-ee');
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
      var q = Math.max(0, Math.min(CHART.qMax, xToQ(loc.x)));
      q = snapQ(q);
      var p = curveP(state, q);
      // Clamp so we stay inside the chart and stay on the visible part of the curve
      if (p < 0)            { q = state.a / state.b; }
      if (p > CHART.pMax)   { q = (state.a - CHART.pMax) / state.b; }
      q = Math.max(0, Math.min(CHART.qMax, snapQ(q)));
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

    /* Keyboard support for accessibility */
    function onKey(handleEl, which) {
      handleEl.addEventListener('keydown', function (e) {
        var step = e.shiftKey ? 10 : 1;
        var k = which === 'handle1' ? 'q1' : 'q2';
        if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
          state[k] = Math.max(0, state[k] - step);
          e.preventDefault(); render();
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
          state[k] = Math.min(CHART.qMax, state[k] + step);
          e.preventDefault(); render();
        }
      });
    }
    onKey(els.handle1, 'handle1');
    onKey(els.handle2, 'handle2');

    /* ---- Preset buttons ---- */
    root.querySelectorAll('[data-ee-preset]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var p = presetByKey(btn.getAttribute('data-ee-preset'));
        state.a = p.a; state.b = p.b;
        state.q1 = (p.a - p.p1) / p.b;
        state.q2 = (p.a - p.p2) / p.b;
        state.presetNote = p.note;
        root.querySelectorAll('[data-ee-preset]').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
        render();
      });
    });
    // mark default preset
    var defaultBtn = root.querySelector('[data-ee-preset="petrolsr"]');
    if (defaultBtn) defaultBtn.classList.add('is-active');

    render();
  }

  /* Initialise any not-yet-initialised explorers currently in the DOM */
  function initAll(scope) {
    var roots = (scope || document).querySelectorAll('.ee-root');
    for (var i = 0; i < roots.length; i++) init(roots[i]);
  }

  return { init: init, initAll: initAll };

})();
