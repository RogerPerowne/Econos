/* ============================================================
   ECONOS — Logger
   ─────────────────────────────────────────────────────────────
   Thin wrapper over console.* with a single runtime flag so we
   can ship a production build with logs off. Defaults to verbose
   in dev (hostname is localhost / 127.0.0.1) and quiet otherwise.

     Logger.info('LinkRouter', 'loading', station);
     Logger.warn('TopicLoader', 'missing data file', file);
     Logger.error('Shell', 'bad opts', opts);

   Toggle at runtime from devtools:

     window.ECONOS_LOG = true;   // or false
   ============================================================ */
(function () {
  'use strict';

  function isDevHost() {
    try {
      var h = (location && location.hostname) || '';
      return h === 'localhost' || h === '127.0.0.1' || h === '';
    } catch (e) { return false; }
  }

  function enabled() {
    if (typeof window.ECONOS_LOG === 'boolean') return window.ECONOS_LOG;
    return isDevHost();
  }

  function fmt(tag) { return '[econos:' + tag + ']'; }

  function info(tag /*, ...args */) {
    if (!enabled() || !window.console) return;
    var args = Array.prototype.slice.call(arguments, 1);
    console.log.apply(console, [fmt(tag)].concat(args));
  }
  function warn(tag /*, ...args */) {
    if (!enabled() || !window.console) return;
    var args = Array.prototype.slice.call(arguments, 1);
    console.warn.apply(console, [fmt(tag)].concat(args));
  }
  /* Errors always logged — they reflect bugs the user should report. */
  function error(tag /*, ...args */) {
    if (!window.console) return;
    var args = Array.prototype.slice.call(arguments, 1);
    console.error.apply(console, [fmt(tag)].concat(args));
  }

  window.Logger = { info: info, warn: warn, error: error };
})();
