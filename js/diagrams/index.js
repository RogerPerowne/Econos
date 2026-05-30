/**
 * js/diagrams/index.js — Diagram system loader/index
 * ====================================================
 * Load order:
 *   1. js/diagrams/econ-svg.js          → window.EconSvg
 *   2. js/diagrams/generators/*.js      → each self-registers onto window.ECONOS_DIAGRAMS
 *   3. THIS FILE                        → guarantees window.ECONOS_DIAGRAMS exists
 *                                         and exposes a resolve() helper
 *
 * This file does NOT load or bundle the generators; it is a thin
 * runtime guarantee + resolve helper for use by render-blocks.
 */

(function (global) {
  'use strict';

  // Guarantee the global registry exists even if loaded before any generator.
  global.ECONOS_DIAGRAMS = global.ECONOS_DIAGRAMS || {};

  /**
   * resolve(keyOrSpec)
   * ------------------
   * Given either a string key  (e.g. 'adasDiagram')  or a spec object
   * { type: 'adasDiagram', ...config }, calls the matching generator and
   * returns the SVG string.  Falls back to window.ECONOS_ICONS for legacy
   * svgKey strings.  Returns '' when nothing resolves.
   *
   * @param {string|Object} keyOrSpec
   * @returns {string} SVG markup or ''
   */
  function resolve(keyOrSpec) {
    if (!keyOrSpec) { return ''; }

    // String key → try generators first, then icons
    if (typeof keyOrSpec === 'string') {
      var gen = global.ECONOS_DIAGRAMS[keyOrSpec];
      if (typeof gen === 'function') { return gen({}); }
      if (global.ECONOS_ICONS && global.ECONOS_ICONS[keyOrSpec]) {
        return global.ECONOS_ICONS[keyOrSpec];
      }
      return '';
    }

    // Spec object: { type, ...cfg }
    if (typeof keyOrSpec === 'object' && keyOrSpec.type) {
      var fn = global.ECONOS_DIAGRAMS[keyOrSpec.type];
      if (typeof fn === 'function') { return fn(keyOrSpec); }
    }

    return '';
  }

  global.ECONOS_DIAGRAMS.resolve = resolve;

}(typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : this));
