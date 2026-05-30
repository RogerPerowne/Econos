(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var B = window.ECONOS_BLOCKS;

  /* ─────────────────────────────────────────────────────────────
     mechanismChain
     { steps:[{label, detail?}], breakpoints?:[{label, tone}] }
     Horizontal causal chain A → B → C with optional caveat chips.
     Stacks vertically on mobile (≤640 px).
  ───────────────────────────────────────────────────────────── */
  B.mechanismChain = function mechanismChain(block) {
    var steps = Array.isArray(block.steps) ? block.steps : [];
    if (!steps.length) return '';

    var stepHtml = steps.map(function (step, i) {
      if (!step || typeof step !== 'object') return '';
      var label = step.label != null ? U.escapeHtml(step.label) : '';
      if (!label) return '';
      var detail = step.detail != null
        ? '<span class="mchain__step-detail">' + U.escapeHtml(step.detail) + '</span>'
        : '';
      var arrow = i < steps.length - 1
        ? '<span class="mchain__arrow" aria-hidden="true">&#8594;</span>'
        : '';
      return (
        '<li class="mchain__step">' +
          '<span class="mchain__step-label">' + label + '</span>' +
          detail +
        '</li>' +
        (arrow ? '<li class="mchain__arrow-item" aria-hidden="true">' + arrow + '</li>' : '')
      );
    }).join('');

    var bpHtml = '';
    var breakpoints = Array.isArray(block.breakpoints) ? block.breakpoints : [];
    if (breakpoints.length) {
      var chips = breakpoints.map(function (bp) {
        if (!bp || bp.label == null) return '';
        var toneClass = U.toneClass(bp.tone, 'amber');
        return '<li class="mchain__bp-chip ' + toneClass + '">' + U.escapeHtml(bp.label) + '</li>';
      }).filter(Boolean).join('');
      if (chips) {
        bpHtml = '<ul class="mchain__breakpoints" role="list">' + chips + '</ul>';
      }
    }

    return (
      '<div class="mchain" data-overflow-watch>' +
        '<ul class="mchain__chain" role="list">' + stepHtml + '</ul>' +
        bpHtml +
      '</div>'
    );
  };

  /* ─────────────────────────────────────────────────────────────
     rippleCascade
     { initial, rounds:[{round, amount}], leakageArrows?:[string] }
     Decreasing rounds of a multiplier ripple with leakage labels.
  ───────────────────────────────────────────────────────────── */
  B.rippleCascade = function rippleCascade(block) {
    var rounds = Array.isArray(block.rounds) ? block.rounds : [];
    if (block.initial == null && !rounds.length) return '';

    var leakage = Array.isArray(block.leakageArrows) ? block.leakageArrows : [];

    var rowsHtml = '';

    if (block.initial != null) {
      rowsHtml += (
        '<li class="rcascade__row rcascade__row--initial">' +
          '<span class="rcascade__round-label">Initial injection</span>' +
          '<span class="rcascade__bar-wrap">' +
            '<span class="rcascade__bar" style="--rcascade-width:100%"></span>' +
          '</span>' +
          '<span class="rcascade__amount">' + U.escapeHtml(block.initial) + '</span>' +
        '</li>'
      );
    }

    var total = rounds.length;
    rounds.forEach(function (r, i) {
      if (!r || r.amount == null) return;
      var roundLabel = r.round != null ? U.escapeHtml(r.round) : ('Round ' + (i + 1));
      /* Bar width shrinks with each round; minimum 10% so last bar is visible */
      var widthPct = Math.max(10, Math.round(100 * (total - i) / (total + 1)));
      var leakageLabel = leakage[i] != null
        ? '<span class="rcascade__leakage">' + U.escapeHtml(leakage[i]) + '</span>'
        : '';
      rowsHtml += (
        '<li class="rcascade__row">' +
          '<span class="rcascade__round-label">' + roundLabel + '</span>' +
          '<span class="rcascade__bar-wrap">' +
            '<span class="rcascade__bar" style="--rcascade-width:' + widthPct + '%"></span>' +
            leakageLabel +
          '</span>' +
          '<span class="rcascade__amount">' + U.escapeHtml(r.amount) + '</span>' +
        '</li>'
      );
    });

    return (
      '<div class="rcascade" data-overflow-watch>' +
        '<ul class="rcascade__list" role="list">' + rowsHtml + '</ul>' +
      '</div>'
    );
  };

  /* ─────────────────────────────────────────────────────────────
     opposingFlows
     { positive:{label,value,tone}, negative:{label,value,tone},
       result:{label,value} }
     Two opposing arrows that net to a result (e.g. Exports vs Imports).
  ───────────────────────────────────────────────────────────── */
  B.opposingFlows = function opposingFlows(block) {
    var pos = block.positive || {};
    var neg = block.negative || {};
    var res = block.result || {};

    if (!pos.label && !neg.label) return '';

    var posClass = U.toneClass(pos.tone, 'green');
    var negClass = U.toneClass(neg.tone, 'rose');

    var posHtml = pos.label != null
      ? (
        '<div class="oflows__side oflows__side--pos ' + posClass + '">' +
          '<span class="oflows__arrow oflows__arrow--pos" aria-hidden="true">&#8593;</span>' +
          '<span class="oflows__label">' + U.escapeHtml(pos.label) + '</span>' +
          (pos.value != null ? '<span class="oflows__value">' + U.escapeHtml(pos.value) + '</span>' : '') +
        '</div>'
      )
      : '';

    var negHtml = neg.label != null
      ? (
        '<div class="oflows__side oflows__side--neg ' + negClass + '">' +
          '<span class="oflows__arrow oflows__arrow--neg" aria-hidden="true">&#8595;</span>' +
          '<span class="oflows__label">' + U.escapeHtml(neg.label) + '</span>' +
          (neg.value != null ? '<span class="oflows__value">' + U.escapeHtml(neg.value) + '</span>' : '') +
        '</div>'
      )
      : '';

    var resHtml = res.label != null
      ? (
        '<div class="oflows__result">' +
          '<span class="oflows__result-equals" aria-hidden="true">=</span>' +
          '<span class="oflows__result-label">' + U.escapeHtml(res.label) + '</span>' +
          (res.value != null ? '<span class="oflows__result-value">' + U.escapeHtml(res.value) + '</span>' : '') +
        '</div>'
      )
      : '';

    return (
      '<div class="oflows" data-overflow-watch>' +
        '<div class="oflows__row">' +
          posHtml +
          '<span class="oflows__vs" aria-hidden="true">vs</span>' +
          negHtml +
        '</div>' +
        resHtml +
      '</div>'
    );
  };

  /* ─────────────────────────────────────────────────────────────
     timeline
     { events:[{year, title, tone, body}] }
     Vertical timeline of real-world episodes.
  ───────────────────────────────────────────────────────────── */
  B.timeline = function timeline(block) {
    var events = Array.isArray(block.events) ? block.events : [];
    if (!events.length) return '';

    var itemsHtml = events.map(function (ev) {
      if (!ev || typeof ev !== 'object') return '';
      if (ev.year == null && ev.title == null) return '';
      var toneClass = U.toneClass(ev.tone, 'blue');
      var year = ev.year != null
        ? '<span class="tline__year">' + U.escapeHtml(ev.year) + '</span>'
        : '';
      var title = ev.title != null
        ? '<span class="tline__title">' + U.escapeHtml(ev.title) + '</span>'
        : '';
      var body = ev.body != null
        ? '<p class="tline__body text-fit-1">' + U.escapeHtml(ev.body) + '</p>'
        : '';
      return (
        '<li class="tline__item ' + toneClass + '">' +
          '<span class="tline__dot" aria-hidden="true"></span>' +
          '<div class="tline__content">' +
            '<div class="tline__head">' + year + title + '</div>' +
            body +
          '</div>' +
        '</li>'
      );
    }).filter(Boolean).join('');

    if (!itemsHtml) return '';

    return (
      '<div class="tline" data-overflow-watch>' +
        '<ol class="tline__list">' + itemsHtml + '</ol>' +
      '</div>'
    );
  };

  /* ─────────────────────────────────────────────────────────────
     stepChain
     { steps: [{ head, body, tone?, icon? }, ...], cycleTones?: true }
     Rich numbered tile chain with arrow separators between steps.
     Each step renders as a tile with a numbered badge in the top-left.
     If `cycleTones: true` (default) and a step omits `tone`, tones are
     cycled green → amber → blue → purple → rose. If a step has an
     explicit `icon`, it overrides the auto-number badge.
     Covers the "5-step mechanism" mockup pattern (e.g. stagflation chain)
     that previously required hand-rolled SVG.
  ───────────────────────────────────────────────────────────── */
  var STEP_TONE_CYCLE = ['blue', 'amber', 'green', 'purple', 'rose'];

  B.stepChain = function stepChain(block) {
    var steps = Array.isArray(block.steps) ? block.steps : [];
    if (!steps.length) return '';

    var cycle = block.cycleTones !== false;

    var stepsHtml = steps.map(function (step, i) {
      if (!step || typeof step !== 'object') return '';
      var resolvedTone = step.tone
        || (cycle ? STEP_TONE_CYCLE[i % STEP_TONE_CYCLE.length] : 'slate');
      var toneCls = U.toneClass(resolvedTone, 'slate');
      var badge = step.icon
        ? U.renderIcon(step.icon, 'disc')
        : '<span class="step-chain__badge" aria-hidden="true">' + (i + 1) + '</span>';
      var head = step.head != null ? '<h3 class="step-chain__head">' + U.escapeHtml(step.head) + '</h3>' : '';
      var body = step.body != null ? '<p class="step-chain__body text-fit-1">' + U.escapeHtml(step.body) + '</p>' : '';
      var arrow = i < steps.length - 1
        ? '<span class="step-chain__arrow" aria-hidden="true">&#8594;</span>'
        : '';
      return (
        '<li class="step-chain__step ' + toneCls + '" data-overflow-watch>' +
          badge + head + body +
        '</li>' +
        (arrow ? '<li class="step-chain__arrow-cell" aria-hidden="true">' + arrow + '</li>' : '')
      );
    }).join('');

    return (
      '<div class="step-chain" data-overflow-watch>' +
        '<ol class="step-chain__list" role="list">' + stepsHtml + '</ol>' +
      '</div>'
    );
  };

})();
