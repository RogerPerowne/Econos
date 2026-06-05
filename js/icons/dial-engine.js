/* ============================================================
   ECONOS – Dial engine.
   Sibling to the chart engine (js/charts/ppf.js). Renders gauges
   (semicircle dials) from a tiny spec, so authors get geometric
   accuracy for free – the pointer ALWAYS lands on the arc and the
   target band ALWAYS uses arc-on-radius endpoints.

   The previous hand-rolled gauges (macro-cockpit etc.) drifted on
   both because the pointer length and the target-band endpoints
   were eyeballed in raw SVG. Same parametrisation here drives all
   three primitives, so they can't disagree.

   USAGE
     ECONOS_DIALS.render({
       type: 'gauge',
       size: 160,             // svg width; height derived
       value: 2.8,            // current reading
       min: 0, max: 6,        // value range mapped to the semicircle
       target: [1.5, 2.5],    // optional green band
       tone: 'rose'           // colour family for bg arc (and any
                              //   subtle accents that pick it up)
     })

   GEOMETRY
     For a semicircle gauge centred at (cx, cy) with radius r,
     parametrised by t ∈ [0, 1] (0 = left baseline, 1 = right):

       position(t) = { x: cx − r·cos(π·t),  y: cy − r·sin(π·t) }

     • t=0   → (cx − r, cy)   – left baseline
     • t=0.5 → (cx,     cy−r) – top
     • t=1   → (cx + r, cy)   – right baseline

     Background arc:    position(0) → position(1)
     Target band:       position(t_targetMin) → position(t_targetMax)
     Pointer endpoint:  position(t_value)     – distance from
                          centre = exactly r, so the tip always
                          lands on the arc.
   ============================================================ */
(function () {
  'use strict';

  /* Colour palette – mirrors the chart engine's PATTERN_TONES naming
     so a `tone: 'rose'` looks identical on a gauge and on a chart. */
  var TONES = {
    rose:    { dark: '#E11D48', light: '#FECDD3' },
    red:     { dark: '#DC2626', light: '#FECACA' },
    amber:   { dark: '#F59E0B', light: '#FED7AA' },
    yellow:  { dark: '#EAB308', light: '#FEF08A' },
    green:   { dark: '#16A34A', light: '#86EFAC' },
    teal:    { dark: '#0D9488', light: '#99F6E4' },
    blue:    { dark: '#2563EB', light: '#BFDBFE' },
    indigo:  { dark: '#4F46E5', light: '#C7D2FE' },
    purple:  { dark: '#8B5CF6', light: '#C4B5FD' },
    slate:   { dark: '#475569', light: '#CBD5E1' }
  };

  /* Green target band is intentional – every dial that has a target
     uses the same green so the eye can read "in/out of target zone"
     across all 7 dashboard tiles without re-learning per tile. */
  var TARGET_COLOUR = '#16A34A';

  /* Pointer + centre dot use near-black so they read on any tone. */
  var PIN_COLOUR = '#0B1426';

  function position(cx, cy, r, t) {
    var angle = Math.PI * t;
    return {
      x: cx - r * Math.cos(angle),
      y: cy - r * Math.sin(angle)
    };
  }

  function clamp01(t) {
    if (t < 0) return 0;
    if (t > 1) return 1;
    return t;
  }

  function fmt(n) { return n.toFixed(2); }

  function renderGauge(spec) {
    var size = spec.size || 160;
    var W    = size;
    var cx   = size / 2;
    var r    = size * 0.375;            // ~60 when size is 160 (matches legacy)
    var pad  = size * 0.09375;          // ~15 for size 160 – matches the
                                        //   legacy viewBox 160×90 layout so
                                        //   gauges drop in visually identical.
    var cy   = pad + r;                 // baseline y – ~75 for size 160
    var H    = cy + pad;                // mirror top + bottom margins

    var min  = spec.min != null ? spec.min : 0;
    var max  = spec.max != null ? spec.max : 100;
    var val  = spec.value != null ? spec.value : min;

    if (max === min) max = min + 1;  // defensive – avoid /0
    var tVal = clamp01((val - min) / (max - min));

    var tone = TONES[spec.tone] || TONES.slate;
    var aria = spec.ariaLabel ||
      ('Gauge showing ' + val + ' out of ' + max +
       (spec.target ? ' (target ' + spec.target[0] + '–' + spec.target[1] + ')' : ''));

    var pStart = position(cx, cy, r, 0);
    var pEnd   = position(cx, cy, r, 1);
    var sw     = spec.strokeWidth || 8;

    var parts = [];
    parts.push('<svg class="econos-gauge" viewBox="0 0 ' + W + ' ' + H +
               '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + aria +
               '" style="width:100%;height:auto;display:block;">');

    /* Background arc – light tone version of the tile's accent. */
    parts.push('<path d="M ' + fmt(pStart.x) + ' ' + fmt(pStart.y) +
               ' A ' + r + ' ' + r + ' 0 0 1 ' + fmt(pEnd.x) + ' ' + fmt(pEnd.y) +
               '" stroke="' + tone.light + '" stroke-width="' + sw +
               '" fill="none" stroke-linecap="round"/>');

    /* Target band (green) – optional. Endpoints derived from the SAME
       parametrisation as the pointer, so they're guaranteed to lie on
       the bg arc. */
    if (Array.isArray(spec.target) && spec.target.length === 2 && spec.target[1] > spec.target[0]) {
      var tT0 = clamp01((spec.target[0] - min) / (max - min));
      var tT1 = clamp01((spec.target[1] - min) / (max - min));
      var pT0 = position(cx, cy, r, tT0);
      var pT1 = position(cx, cy, r, tT1);
      parts.push('<path d="M ' + fmt(pT0.x) + ' ' + fmt(pT0.y) +
                 ' A ' + r + ' ' + r + ' 0 0 1 ' + fmt(pT1.x) + ' ' + fmt(pT1.y) +
                 '" stroke="' + TARGET_COLOUR + '" stroke-width="' + sw +
                 '" fill="none" stroke-linecap="round"/>');
    }

    /* Pointer – centre to the value's point on the arc. Length = r
       exactly, by construction. */
    var pVal = position(cx, cy, r, tVal);
    parts.push('<line x1="' + cx + '" y1="' + cy +
               '" x2="' + fmt(pVal.x) + '" y2="' + fmt(pVal.y) +
               '" stroke="' + PIN_COLOUR + '" stroke-width="' + (spec.pinWidth || 2.4) +
               '" stroke-linecap="round"/>');

    /* Centre cap. */
    parts.push('<circle cx="' + cx + '" cy="' + cy + '" r="4" fill="' + PIN_COLOUR + '"/>');

    parts.push('</svg>');
    return parts.join('');
  }

  function render(spec) {
    if (!spec || typeof spec !== 'object') {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[ECONOS_DIALS] render() called with no spec.');
      }
      return '<!-- ECONOS_DIALS: missing spec -->';
    }
    if (spec.type === 'gauge') return renderGauge(spec);
    if (typeof console !== 'undefined' && console.warn) {
      console.warn('[ECONOS_DIALS] unknown spec.type "' + spec.type + '" – only "gauge" is implemented today.');
    }
    return '<!-- ECONOS_DIALS: unknown type "' + (spec.type || '') + '" -->';
  }

  window.ECONOS_DIALS = { render: render };
})();
