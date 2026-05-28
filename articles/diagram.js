/* ============================================================
   articles/diagram.js — drives the interactive diagrams embedded
   in static article pages (emitted by the :::econos-diagram
   directive with `interactive`).

   The visual model mirrors the SPA exactly: each diagram SVG holds
   stacked `layer-*` groups, and diagram.css fades them in/out based
   on a single `show-<state>` class on the `.ad-interactive__diagram`
   stage. This controller just swaps that class (and the matching
   tab/panel `.is-active`) when a step tab is clicked.

   Progressive enhancement: the build bakes the first state's
   `show-*` class and `.is-active` into the markup, so with JS off
   the diagram still renders one clean state (never the overlap).

   Classic IIFE, no dependencies — matches the rest of the codebase.
   ============================================================ */
(function () {
  'use strict';

  function activate(root, state) {
    var stage = root.querySelector('.ad-interactive__diagram');
    if (stage) {
      // Drop any existing show-* class, add the requested one.
      stage.className = stage.className.replace(/\bshow-\S+/g, '').trim();
      stage.classList.add('show-' + state);
      stage.setAttribute('data-ad-state', state);
    }
    root.querySelectorAll('.ad-tab').forEach(function (tab) {
      var on = tab.getAttribute('data-state') === state;
      tab.classList.toggle('is-active', on);
      tab.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    root.querySelectorAll('.ad-panel').forEach(function (panel) {
      panel.classList.toggle('is-active', panel.getAttribute('data-state') === state);
    });
  }

  function wire(root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('.ad-tab'));
    if (!tabs.length) return;

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        activate(root, tab.getAttribute('data-state'));
      });
      // Left/right arrow keys step between tabs, like a toolbar.
      tab.addEventListener('keydown', function (e) {
        var dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!dir) return;
        e.preventDefault();
        var next = tabs[(i + dir + tabs.length) % tabs.length];
        next.focus();
        activate(root, next.getAttribute('data-state'));
      });
    });

    // Normalise to the first tab's state in case the markup default
    // and the baked show-* class ever drift.
    var active = root.querySelector('.ad-tab.is-active') || tabs[0];
    activate(root, active.getAttribute('data-state'));
  }

  function init() {
    document.querySelectorAll('.article-interactive').forEach(wire);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
