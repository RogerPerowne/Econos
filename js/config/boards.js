/* ============================================================
   ECONOS — Exam-board registry
   ─────────────────────────────────────────────────────────────
   Single source of truth for the UK A-level economics exam
   boards Econos supports. The user's selected board is persisted
   via TopicLoader.getBoard / setBoard (key: econos:board) and
   read by every surface that displays a spec point or filters
   the topic grid.

   Filling in per-topic per-board spec numbers is a separate
   content workstream — this file just declares the boards. The
   schema for per-topic mappings lives alongside each topic's
   data file; see CLAUDE.md "Multi-exam-board" for the contract.
   ============================================================ */

(function () {
  'use strict';
  window.ECONOS_BOARDS = {
    edexcel_a: { id: 'edexcel_a', name: 'Edexcel A', short: 'Edexcel A', isDefault: true },
    edexcel_b: { id: 'edexcel_b', name: 'Edexcel B', short: 'Edexcel B' },
    aqa:       { id: 'aqa',       name: 'AQA',       short: 'AQA' },
    ocr:       { id: 'ocr',       name: 'OCR',       short: 'OCR' }
  };
  /* Iteration order — drives the picker UI and any board-listing
     callsite. Edexcel A first because it's the default. */
  window.ECONOS_BOARDS_ORDER = ['edexcel_a', 'edexcel_b', 'aqa', 'ocr'];

  /* Per-board topic data overrides.
     ─────────────────────────────────────────────────────────────
     When a board publishes a variant of a topic with different
     cards or framing, drop the data files at
     `js/data/<board>/<topic>/` and register them here per-file:

       window.ECONOS_BOARD_OVERRIDES.aqa['monopoly'] = { learn: true };

     The TopicLoader checks each (board, topic, file) tuple before
     fetching and prefers the board-specific path when listed.
     Combinations NOT listed fall back to `js/data/<topic>/` — the
     Edexcel A baseline.

     Per-file granularity matters: a board can ship a custom
     Learn It topic.js while still inheriting the Edexcel A
     baseline for Link / Land on the same topic. That's how the
     current overrides ship — only learn.js is rewritten per
     board so far. */
  window.ECONOS_BOARD_OVERRIDES = {
    edexcel_b: {
      'causes-of-inflation-and-deflation':   { learn: true },
      'aggregate-demand':                    { learn: true },
      'aggregate-supply':                    { learn: true },
      'employment-and-unemployment':         { learn: true },
      'national-income-and-the-multiplier':  { learn: true }
    },
    aqa: {
      'causes-of-inflation-and-deflation':   { learn: true },
      'aggregate-demand':                    { learn: true },
      'aggregate-supply':                    { learn: true },
      'employment-and-unemployment':         { learn: true },
      'national-income-and-the-multiplier':  { learn: true }
    },
    ocr: {
      'causes-of-inflation-and-deflation':   { learn: true },
      'aggregate-demand':                    { learn: true },
      'aggregate-supply':                    { learn: true },
      'employment-and-unemployment':         { learn: true },
      'national-income-and-the-multiplier':  { learn: true }
    }
  };
})();
