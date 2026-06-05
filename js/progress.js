/* ============================================================
   ECONOS – Progress tracking
   ─────────────────────────────────────────────────────────────
   Centralised wrapper over localStorage so engines stop sprinkling
   `localStorage.getItem('econos_link_unlocked')` everywhere with
   silent-swallowed try/catch blocks.

   Per-topic state is keyed under `econos:<topic>:<key>` so two
   topics don't trample each other. A flat `econos_link_unlocked`
   key is kept (read-only) for back-compat with existing data.

   Public API:

     Progress.getLinkUnlocked()              // 0..5
     Progress.setLinkUnlocked(n)
     Progress.getLandUnlocked()              // 0..5
     Progress.setLandUnlocked(n)
     Progress.markStation(stage, station)    // record a visit
     Progress.hasVisited(stage, station)

   Each accessor returns a sane fallback when localStorage is
   unavailable (private-browsing Safari, quota exceeded, …) and
   never throws.
   ============================================================ */

(function () {
  'use strict';

  var STORAGE_PREFIX = 'econos:';

  /* Storage primitives – never throw. Return undefined on failure. */
  function readRaw(key) {
    try { return window.localStorage.getItem(key); }
    catch (e) { return null; }
  }
  function writeRaw(key, value) {
    try { window.localStorage.setItem(key, value); return true; }
    catch (e) { return false; }
  }

  function currentTopic() {
    try { return (window.TopicLoader && TopicLoader.getTopic()) || ''; }
    catch (e) { return ''; }
  }

  function topicKey(name) {
    return STORAGE_PREFIX + (currentTopic() || '_global') + ':' + name;
  }

  function readInt(key, fallback) {
    var raw = readRaw(key);
    var n = parseInt(raw == null ? '' : raw, 10);
    return isNaN(n) ? fallback : n;
  }

  /* ──────────────────────────────────────────────────────────────
     Link / Land unlocked-station tracking
     ─────────────────────────────────────────────────────────────
     All callers now go through Progress.* so storage is per-topic
     under `econos:<topic>:link_unlocked`. The legacy global key
     (`econos_link_unlocked`) is still READ as a one-time fallback so
     existing users get migrated on first load – first setLinkUnlocked
     call after that lands the value in the per-topic key. Writes to
     the legacy key were dropped after the engine sweep. */
  function getLinkUnlocked() {
    var perTopic = readInt(topicKey('link_unlocked'), -1);
    if (perTopic !== -1) return perTopic;
    return readInt('econos_link_unlocked', -1);
  }
  function setLinkUnlocked(n) {
    var v = String(parseInt(n, 10) || 0);
    writeRaw(topicKey('link_unlocked'), v);
  }

  function getLandUnlocked() {
    var perTopic = readInt(topicKey('land_unlocked'), -1);
    if (perTopic !== -1) return perTopic;
    return readInt('econos_land_unlocked', -1);
  }
  function setLandUnlocked(n) {
    var v = String(parseInt(n, 10) || 0);
    writeRaw(topicKey('land_unlocked'), v);
  }

  /* ──────────────────────────────────────────────────────────────
     Station visit history – used to colour rail dots per-station. */
  function visitedKey(stage) { return topicKey('visited_' + stage); }

  function getVisited(stage) {
    var raw = readRaw(visitedKey(stage));
    if (!raw) return {};
    try { return JSON.parse(raw) || {}; }
    catch (e) { return {}; }
  }
  function markStation(stage, station) {
    var v = getVisited(stage);
    v[station] = Date.now();
    writeRaw(visitedKey(stage), JSON.stringify(v));
  }
  function hasVisited(stage, station) {
    return Boolean(getVisited(stage)[station]);
  }

  window.Progress = {
    getLinkUnlocked: getLinkUnlocked,
    setLinkUnlocked: setLinkUnlocked,
    getLandUnlocked: getLandUnlocked,
    setLandUnlocked: setLandUnlocked,
    markStation:     markStation,
    hasVisited:      hasVisited
  };
})();
