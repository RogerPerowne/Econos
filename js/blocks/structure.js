(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var B = window.ECONOS_BLOCKS;

  /* ------------------------------------------------------------------ *
   * spectrum
   * { axis: { left, right, label }, bands: [{ label, tone, icon?, body }] }
   * 4–6 equal-width bands along one labelled dimension.
   * ------------------------------------------------------------------ */
  B.spectrum = function spectrum(block) {
    var axis = block.axis && typeof block.axis === 'object' ? block.axis : {};
    var axisLeft = axis.left ? U.escapeHtml(axis.left) : '';
    var axisRight = axis.right ? U.escapeHtml(axis.right) : '';
    var axisLabel = axis.label ? U.escapeHtml(axis.label) : '';
    var bands = Array.isArray(block.bands) ? block.bands : [];

    var axisHtml = '';
    if (axisLeft || axisRight || axisLabel) {
      axisHtml =
        '<div class="econ-spectrum__axis" aria-label="' +
        U.escapeAttr(axisLabel) +
        '">' +
        (axisLeft ? '<span class="econ-spectrum__axis-left">' + axisLeft + '</span>' : '') +
        (axisLabel ? '<span class="econ-spectrum__axis-label">' + axisLabel + '</span>' : '') +
        (axisRight ? '<span class="econ-spectrum__axis-right">' + axisRight + '</span>' : '') +
        '</div>';
    }

    var bandsHtml = bands
      .map(function (band) {
        if (!band || typeof band !== 'object') return '';
        var tone = U.toneClass(band.tone, 'slate');
        var iconHtml = band.icon ? U.renderIcon(band.icon, 'disc') : '';
        var labelHtml = band.label
          ? '<div class="econ-spectrum__band-label">' + U.escapeHtml(band.label) + '</div>'
          : '';
        var bodyHtml = band.body
          ? '<div class="econ-spectrum__band-body text-fit-2">' + band.body + '</div>'
          : '';
        return (
          '<div class="econ-spectrum__band ' +
          tone +
          '" data-overflow-watch>' +
          (iconHtml ? '<div class="econ-spectrum__band-icon">' + iconHtml + '</div>' : '') +
          labelHtml +
          bodyHtml +
          '</div>'
        );
      })
      .join('');

    return (
      '<div class="econ-spectrum">' +
      axisHtml +
      '<div class="econ-spectrum__track" style="--econ-spectrum-count:' +
      bands.length +
      '">' +
      bandsHtml +
      '</div>' +
      '</div>'
    );
  };

  /* ------------------------------------------------------------------ *
   * caseStudies
   * { cols?, cases: [{ title, cause, outcome, verdict, tone }] }
   * Grid of case-study tiles ending in a coloured verdict pill.
   * ------------------------------------------------------------------ */
  B.caseStudies = function caseStudies(block) {
    var cases = Array.isArray(block.cases) ? block.cases : [];
    var cols = block.cols && Number.isInteger(block.cols) && block.cols > 0 && block.cols <= 4
      ? block.cols
      : null;

    var tilesHtml = cases
      .map(function (c) {
        if (!c || typeof c !== 'object') return '';
        var tone = U.toneClass(c.tone, 'slate');
        var titleHtml = c.title
          ? '<div class="econ-case__title">' + U.escapeHtml(c.title) + '</div>'
          : '';
        var causeHtml = c.cause
          ? '<div class="econ-case__row"><span class="econ-case__row-label">Cause</span><span class="econ-case__row-value text-fit-2">' +
            c.cause +
            '</span></div>'
          : '';
        var outcomeHtml = c.outcome
          ? '<div class="econ-case__row"><span class="econ-case__row-label">Outcome</span><span class="econ-case__row-value text-fit-2">' +
            c.outcome +
            '</span></div>'
          : '';
        var verdictHtml = c.verdict
          ? '<div class="econ-case__verdict ' + tone + '">' + U.escapeHtml(c.verdict) + '</div>'
          : '';
        return (
          '<article class="econ-case ' + tone + '" data-overflow-watch>' +
          titleHtml +
          '<div class="econ-case__body">' +
          causeHtml +
          outcomeHtml +
          '</div>' +
          verdictHtml +
          '</article>'
        );
      })
      .join('');

    var styleAttr = cols ? ' style="--econ-case-cols:' + cols + '"' : '';
    return '<div class="econ-case-grid"' + styleAttr + '>' + tilesHtml + '</div>';
  };

  /* ------------------------------------------------------------------ *
   * satelliteDiagram
   * { centre: { label, value }, satellites: [{ label, metric, tone }] }
   * Central object with surrounding satellite chips (CSS layout, no SVG).
   * ------------------------------------------------------------------ */
  B.satelliteDiagram = function satelliteDiagram(block) {
    var centre = block.centre && typeof block.centre === 'object' ? block.centre : {};
    var satellites = Array.isArray(block.satellites) ? block.satellites : [];

    var centreHtml =
      '<div class="econ-satellite__centre" aria-label="Centre: ' +
      U.escapeAttr(centre.label || '') +
      '">' +
      (centre.value
        ? '<div class="econ-satellite__centre-value">' + U.escapeHtml(centre.value) + '</div>'
        : '') +
      (centre.label
        ? '<div class="econ-satellite__centre-label">' + U.escapeHtml(centre.label) + '</div>'
        : '') +
      '</div>';

    var satellitesHtml = satellites
      .map(function (sat) {
        if (!sat || typeof sat !== 'object') return '';
        var tone = U.toneClass(sat.tone, 'slate');
        var metricHtml = sat.metric
          ? '<span class="econ-satellite__chip-metric">' + U.escapeHtml(sat.metric) + '</span>'
          : '';
        var labelHtml = sat.label
          ? '<span class="econ-satellite__chip-label">' + U.escapeHtml(sat.label) + '</span>'
          : '';
        return (
          '<div class="econ-satellite__chip ' + tone + '">' +
          metricHtml +
          labelHtml +
          '</div>'
        );
      })
      .join('');

    return (
      '<div class="econ-satellite" data-overflow-watch>' +
      '<div class="econ-satellite__orbit">' +
      satellitesHtml +
      centreHtml +
      '</div>' +
      '</div>'
    );
  };

  /* ------------------------------------------------------------------ *
   * policyToolkit
   * { tools: [{ label, tone, bestFor, risk }] }
   * Grid of policy-option cards (label / best for / risk), 2-up to 4-up auto.
   * ------------------------------------------------------------------ */
  B.policyToolkit = function policyToolkit(block) {
    var tools = Array.isArray(block.tools) ? block.tools : [];

    var toolsHtml = tools
      .map(function (tool) {
        if (!tool || typeof tool !== 'object') return '';
        var tone = U.toneClass(tool.tone, 'slate');
        var labelHtml = tool.label
          ? '<div class="econ-policy__label">' + U.escapeHtml(tool.label) + '</div>'
          : '';
        var bestForHtml = tool.bestFor
          ? '<div class="econ-policy__row">' +
            '<span class="econ-policy__row-key">Best for</span>' +
            '<span class="econ-policy__row-val text-fit-2">' +
            U.escapeHtml(tool.bestFor) +
            '</span>' +
            '</div>'
          : '';
        var riskHtml = tool.risk
          ? '<div class="econ-policy__row econ-policy__row--risk">' +
            '<span class="econ-policy__row-key">Risk</span>' +
            '<span class="econ-policy__row-val text-fit-2">' +
            U.escapeHtml(tool.risk) +
            '</span>' +
            '</div>'
          : '';
        return (
          '<article class="econ-policy__card ' + tone + '" data-overflow-watch>' +
          labelHtml +
          bestForHtml +
          riskHtml +
          '</article>'
        );
      })
      .join('');

    return '<div class="econ-policy-toolkit">' + toolsHtml + '</div>';
  };
})();
