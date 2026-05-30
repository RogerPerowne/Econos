/**
 * diagram.js — Econos 'diagram' block-component module
 * =====================================================
 * Self-registers ECONOS_BLOCKS.diagram onto window.ECONOS_BLOCKS.
 *
 * Load order (required before this file):
 *   render-blocks.js            → window.ECONOS_BLOCKS + window.ECONOS_BLOCK_UTILS
 *   js/diagrams/econ-svg.js     → window.EconSvg
 *   js/diagrams/generators/*.js → window.ECONOS_DIAGRAMS.*
 *   js/diagrams/index.js        → window.ECONOS_DIAGRAMS.resolve()
 *
 * Block shape:
 * {
 *   type:    'diagram',
 *   spec?:   { type: 'adasDiagram' | 'ppfDiagram' | ..., ...generatorConfig }
 *   svgKey?: string   (fallback: looks up window.ECONOS_ICONS[svgKey])
 *   caption?: string  (optional caption below the visual)
 *   height?:  number  (override CSS --hero-visual-height, in px)
 * }
 *
 * Resolution order:
 *   1. If spec is given: call window.ECONOS_DIAGRAMS[spec.type](spec)
 *   2. Else if svgKey is given: use window.ECONOS_ICONS[svgKey]
 *   3. Empty string (dev-mode console.warn logged)
 *
 * The rendered HTML reuses the .hero-visual frame already styled by
 * econ-blocks.css — no additional CSS is required.
 */

(function () {
  'use strict';

  var U = window.ECONOS_BLOCK_UTILS;
  var B = window.ECONOS_BLOCKS;

  /**
   * Resolve SVG markup from a diagram block definition.
   * @param {Object} block
   * @returns {string} Raw SVG markup or ''
   */
  function resolveSvg(block) {
    // 1. Generator path: spec.type must be a key on ECONOS_DIAGRAMS
    if (block.spec && block.spec.type) {
      var diagrams = window.ECONOS_DIAGRAMS;
      if (diagrams && typeof diagrams[block.spec.type] === 'function') {
        return diagrams[block.spec.type](block.spec);
      }
      // Fallback: try the resolve() helper (also handles string keys)
      if (diagrams && typeof diagrams.resolve === 'function') {
        return diagrams.resolve(block.spec);
      }
      if (U.isDevMode()) {
        console.warn('[Econos blocks] Unknown diagram generator:', block.spec.type);
      }
      return '';
    }

    // 2. Legacy SVG icon path (same as heroVisual)
    if (block.svgKey) {
      var icons = window.ECONOS_ICONS;
      if (icons && icons[block.svgKey]) {
        return icons[block.svgKey];
      }
      if (U.isDevMode()) {
        console.warn('[Econos blocks] Unknown svgKey for diagram block:', block.svgKey);
      }
      return '';
    }

    if (U.isDevMode()) {
      console.warn('[Econos blocks] diagram block missing both spec.type and svgKey');
    }
    return '';
  }

  /**
   * ECONOS_BLOCKS.diagram(block) → HTML string
   *
   * Renders inside the existing .hero-visual frame so it picks up
   * all sizing, caption, and overflow-watch behaviour without new CSS.
   */
  B.diagram = function diagram(block) {
    var svgHtml = resolveSvg(block);

    var styles = [];
    if (typeof block.height === 'number' && isFinite(block.height)) {
      styles.push('--hero-visual-height:' + block.height + 'px');
    }
    var styleAttr = styles.length ? ' style="' + styles.join(';') + '"' : '';

    var caption = block.caption
      ? '<div class="hero-visual__caption text-fit-1">' + U.escapeHtml(block.caption) + '</div>'
      : '';

    return (
      '<figure class="hero-visual diagram-block"' + styleAttr + ' data-overflow-watch>' +
        '<div class="hero-visual__media">' + svgHtml + '</div>' +
        caption +
      '</figure>'
    );
  };

})();
