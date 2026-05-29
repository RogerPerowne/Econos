/* ============================================================
   ECONOS — Exam-board registry
   ─────────────────────────────────────────────────────────────
   Single source of truth for the UK A-level economics exam
   boards Econos supports. The user's selected board is persisted
   via TopicLoader.getBoard / setBoard (key: econos:board) and
   read by every surface that displays a spec point or filters
   the topic grid.

   Each board carries:
     - id / name / short  → identity + display
     - divisionLabel       → the top-level grouping term the board
                             uses for its syllabus (Theme / Paper /
                             Component). Used in topbar chips and
                             topic-grid section headers.
     - isDefault           → which board to fall back to when the
                             user hasn't picked one (currently
                             edexcel_a).

   Boards are FULLY SEPARATED — each reads only its own data files
   under /js/data/<board>/<theme>/<topic>/. There is no cross-board
   fallback (the previous ECONOS_BOARD_OVERRIDES mechanism has
   been removed). Topics with no real content on a non-Edexcel-A
   board ship a placeholder learn-it.js that renders only the
   cover (intro view) — see vite.config.js's generatePlaceholders().
   ============================================================ */

(function () {
  'use strict';
  window.ECONOS_BOARDS = {
    edexcel_a: { id: 'edexcel_a', name: 'Edexcel A', short: 'Edexcel A', divisionLabel: 'Theme',     isDefault: true },
    edexcel_b: { id: 'edexcel_b', name: 'Edexcel B', short: 'Edexcel B', divisionLabel: 'Theme'     },
    aqa:       { id: 'aqa',       name: 'AQA',       short: 'AQA',       divisionLabel: 'Paper'    },
    ocr:       { id: 'ocr',       name: 'OCR',       short: 'OCR',       divisionLabel: 'Component' }
  };
  /* Iteration order — drives the picker UI and any board-listing
     callsite. Edexcel A first because it's the default. */
  window.ECONOS_BOARDS_ORDER = ['edexcel_a', 'edexcel_b', 'aqa', 'ocr'];

  /* Per-board top-level division labels, keyed by URL theme slug.
     Used by the topic grid section headers and the topbar chip
     to display the official spec wording for the user's board
     ("Paper 1 — Individuals, firms…" instead of bare "Theme 2").
     Slugs are stable; only the displayed label changes per board. */
  window.ECONOS_BOARD_DIVISIONS = {
    edexcel_a: {
      'theme-1': 'Theme 1 — Introduction to markets and market failure',
      'theme-2': 'Theme 2 — The UK economy: performance and policies',
      'theme-3': 'Theme 3 — Business behaviour and the labour market',
      'theme-4': 'Theme 4 — A global perspective'
    },
    edexcel_b: {
      'theme-1': 'Theme 1 — Markets, consumers and firms',
      'theme-2': 'Theme 2 — The wider economic environment',
      'theme-3': 'Theme 3 — The global economy',
      'theme-4': 'Theme 4 — Making markets work'
    },
    aqa: {
      'micro': 'Paper 1 — Individuals, firms, markets and market failure',
      'macro': 'Paper 2 — The national and international economy'
    },
    ocr: {
      'micro': 'Component 1 — Microeconomics',
      'macro': 'Component 2 — Macroeconomics'
    }
  };
})();
