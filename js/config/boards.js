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
     `js/data/<board>/<topic>/` and list the topic id here:

       window.ECONOS_BOARD_OVERRIDES.aqa['monopoly'] = true;

     The TopicLoader checks this set before fetching and prefers
     the board-specific path when listed. Topics NOT listed fall
     back to `js/data/<topic>/` — the Edexcel A baseline.

     The set is intentionally empty for now: every board sees the
     Edexcel A content until per-board variants are authored. */
  window.ECONOS_BOARD_OVERRIDES = {
    edexcel_b: {},
    aqa:       {},
    ocr:       {}
  };
})();
