/**
 * data.js — Econos data-display block-component module (Phase 1)
 *
 * Registers onto window.ECONOS_BLOCKS (created by render-blocks.js):
 *   metricCard       — headline metric with optional target + status pill
 *   targetGauge      — horizontal gauge bar, value vs a target band
 *   equationHero     — large centred equation with coloured token chips
 *   workedExampleStrip — left-to-right calculation strip with a result
 *   factChip         — small inline UK-fact chip
 *
 * Assumes render-blocks.js has already run (window.ECONOS_BLOCK_UTILS +
 * window.ECONOS_BLOCKS exist before this file is evaluated).
 */
(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var B = window.ECONOS_BLOCKS;

  // ─── helpers ────────────────────────────────────────────────────────────────

  /**
   * Clamp a number between lo and hi (inclusive).
   */
  function clamp(v, lo, hi) {
    return Math.min(hi, Math.max(lo, v));
  }

  /**
   * Convert a value in [min, max] to a percentage string safe for inline CSS.
   * Returns '0%' when the range is zero/invalid.
   */
  function toPercent(value, min, max) {
    var range = Number(max) - Number(min);
    if (!isFinite(range) || range === 0) return '0%';
    var pct = clamp((Number(value) - Number(min)) / range, 0, 1) * 100;
    return pct.toFixed(2) + '%';
  }

  // ─── metricCard ─────────────────────────────────────────────────────────────
  //
  // {
  //   label:   string          (card heading)
  //   value:   string|number   (the headline figure)
  //   target?: string|number   (comparison target)
  //   status?: string          (short pill label, e.g. "On track")
  //   tone:    tone            (colour theme)
  //   display?:'number'|'badge'
  // }

  B.metricCard = function metricCard(block) {
    var tone = U.toneClass(block.tone, 'blue');
    var label = block.label != null ? U.escapeHtml(block.label) : '';
    var value = block.value != null ? U.escapeHtml(block.value) : '';
    var display = block.display === 'badge' ? 'badge' : 'number';

    var valueHtml;
    if (display === 'badge') {
      valueHtml = '<span class="metric-card__value metric-card__value--badge">' + value + '</span>';
    } else {
      valueHtml = '<span class="metric-card__value metric-card__value--number">' + value + '</span>';
    }

    var targetHtml = '';
    if (block.target != null) {
      targetHtml =
        '<div class="metric-card__target">' +
          '<span class="metric-card__target-label">Target</span>' +
          '<span class="metric-card__target-value">' + U.escapeHtml(block.target) + '</span>' +
        '</div>';
    }

    var statusHtml = '';
    if (block.status != null && String(block.status).trim() !== '') {
      statusHtml =
        '<span class="metric-card__status">' + U.escapeHtml(block.status) + '</span>';
    }

    return (
      '<div class="metric-card ' + tone + '" data-overflow-watch>' +
        '<div class="metric-card__header">' +
          '<span class="metric-card__label text-fit-2">' + label + '</span>' +
          statusHtml +
        '</div>' +
        valueHtml +
        targetHtml +
      '</div>'
    );
  };

  // ─── targetGauge ────────────────────────────────────────────────────────────
  //
  // {
  //   label:       string
  //   value:       number
  //   targetRange: [lo, hi]   (the target band, within [min,max])
  //   min:         number
  //   max:         number
  //   tone:        tone
  // }

  B.targetGauge = function targetGauge(block) {
    var tone = U.toneClass(block.tone, 'green');
    var label = block.label != null ? U.escapeHtml(block.label) : '';

    var min = Number(block.min);
    var max = Number(block.max);
    var value = Number(block.value);
    var range = Array.isArray(block.targetRange) ? block.targetRange : [min, max];
    var lo = Number(range[0]);
    var hi = Number(range[1]);

    // Percentage positions along the track
    var valuePct = toPercent(value, min, max);

    // Compute band width and position as percentage of full range
    var fullRange = isFinite(max - min) && (max - min) !== 0 ? max - min : 1;
    var bandWidthPct = (clamp(hi, min, max) - clamp(lo, min, max)) / fullRange * 100;
    bandWidthPct = clamp(bandWidthPct, 0, 100).toFixed(2) + '%';

    var bandLeftPct = ((clamp(lo, min, max) - min) / fullRange * 100).toFixed(2) + '%';
    var valueLeftPct = valuePct;

    // Labels
    var minLabel = isFinite(min) ? U.escapeHtml(min) : '';
    var maxLabel = isFinite(max) ? U.escapeHtml(max) : '';
    var valueLabel = isFinite(value) ? U.escapeHtml(value) : '';

    return (
      '<div class="target-gauge ' + tone + '" data-overflow-watch>' +
        '<div class="target-gauge__label text-fit-2">' + label + '</div>' +
        '<div class="target-gauge__track" role="img" aria-label="' +
            U.escapeAttr(block.label || '') + ': value ' + U.escapeAttr(value) +
            ', target range ' + U.escapeAttr(lo) + ' to ' + U.escapeAttr(hi) + '">' +
          '<div class="target-gauge__band" style="--gauge-band-left:' + bandLeftPct + ';--gauge-band-width:' + bandWidthPct + '"></div>' +
          '<div class="target-gauge__marker" style="--gauge-value-pct:' + valueLeftPct + '">' +
            '<span class="target-gauge__marker-label">' + valueLabel + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="target-gauge__axis">' +
          '<span class="target-gauge__axis-min">' + minLabel + '</span>' +
          '<span class="target-gauge__axis-max">' + maxLabel + '</span>' +
        '</div>' +
      '</div>'
    );
  };

  // ─── equationHero ────────────────────────────────────────────────────────────
  //
  // {
  //   equation: Array< {token, tone} | string >
  //     — string items are rendered as plain operators ('+', '=', etc.)
  //     — object items become coloured chips
  //   caption?: string
  // }

  B.equationHero = function equationHero(block) {
    var items = Array.isArray(block.equation) ? block.equation : [];
    var caption = block.caption != null ? U.escapeHtml(block.caption) : '';

    var chipsHtml = items.map(function (item) {
      if (item == null) return '';
      if (typeof item === 'string') {
        // Plain operator / separator
        return '<span class="eq-hero__op" aria-hidden="true">' + U.escapeHtml(item) + '</span>';
      }
      if (typeof item === 'object' && item.token != null) {
        var chipTone = U.toneClass(item.tone, 'slate');
        return (
          '<span class="eq-hero__chip ' + chipTone + '">' +
            U.escapeHtml(item.token) +
          '</span>'
        );
      }
      return '';
    }).join('');

    var captionHtml = caption
      ? '<p class="eq-hero__caption text-fit-2">' + caption + '</p>'
      : '';

    return (
      '<figure class="eq-hero" data-overflow-watch>' +
        '<div class="eq-hero__row" role="math" aria-label="' +
            U.escapeAttr(items.map(function (i) {
              return typeof i === 'string' ? i : (i && i.token ? i.token : '');
            }).join(' ')) + '">' +
          chipsHtml +
        '</div>' +
        captionHtml +
      '</figure>'
    );
  };

  // ─── workedExampleStrip ──────────────────────────────────────────────────────
  //
  // {
  //   scenario: string          (top-line context sentence)
  //   steps:    [{label, value}] (ordered calculation steps)
  //   result:   string|number   (final answer)
  // }

  B.workedExampleStrip = function workedExampleStrip(block) {
    var scenario = block.scenario != null ? U.escapeHtml(block.scenario) : '';
    var steps    = Array.isArray(block.steps) ? block.steps : [];
    var result   = block.result != null ? U.escapeHtml(block.result) : '';

    var scenarioHtml = scenario
      ? '<div class="we-strip__scenario text-fit-2">' + scenario + '</div>'
      : '';

    var stepsHtml = steps
      .filter(function (s) { return s != null && (s.label != null || s.value != null); })
      .map(function (s, idx) {
        var stepLabel = s.label != null ? U.escapeHtml(s.label) : '';
        var stepValue = s.value != null ? U.escapeHtml(s.value) : '';
        var arrow = idx > 0
          ? '<span class="we-strip__arrow" aria-hidden="true">→</span>'
          : '';
        return (
          arrow +
          '<div class="we-strip__step">' +
            (stepLabel ? '<span class="we-strip__step-label">' + stepLabel + '</span>' : '') +
            (stepValue ? '<span class="we-strip__step-value">' + stepValue + '</span>' : '') +
          '</div>'
        );
      })
      .join('');

    var resultHtml = result
      ? '<span class="we-strip__arrow we-strip__arrow--result" aria-hidden="true">＝</span>' +
        '<div class="we-strip__result">' + result + '</div>'
      : '';

    return (
      '<div class="we-strip" data-overflow-watch>' +
        scenarioHtml +
        '<div class="we-strip__row">' +
          stepsHtml +
          resultHtml +
        '</div>' +
      '</div>'
    );
  };

  // ─── factChip ────────────────────────────────────────────────────────────────
  //
  // {
  //   label:  string           (short descriptor, e.g. "UK inflation")
  //   value:  string|number    (the figure)
  //   date?:  string           (context date, e.g. "Jan 2024")
  //   tone:   tone
  // }

  B.factChip = function factChip(block) {
    var tone  = U.toneClass(block.tone, 'slate');
    var label = block.label != null ? U.escapeHtml(block.label) : '';
    var value = block.value != null ? U.escapeHtml(block.value) : '';
    var date  = block.date  != null ? U.escapeHtml(block.date)  : '';

    var dateHtml = date
      ? '<span class="fact-chip__date">' + date + '</span>'
      : '';

    return (
      '<div class="fact-chip ' + tone + '" data-overflow-watch>' +
        (label ? '<span class="fact-chip__label">' + label + '</span>' : '') +
        (value ? '<span class="fact-chip__value">' + value + '</span>' : '') +
        dateHtml +
      '</div>'
    );
  };

})();
