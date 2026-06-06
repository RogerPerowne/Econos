-- ============================================================
-- Econos content — target Postgres schema (migration reference)
--
-- This is the canonical relational shape for migrating Econos
-- content to a Postgres + .NET backend. It is NOT used by the live
-- site (which loads the JS data files directly); it documents where
-- the exported content (npm run export:content -> dist/export/content.json)
-- lands. See docs/CONTENT_MIGRATION.md for the field-level contract.
--
-- Design notes
--  * Content is already JSON-shaped, so each card's box payload is
--    kept as JSONB rather than over-normalising 25+ box types into
--    tables. The box "type" (data key) + its schema are documented in
--    CONTENT_MIGRATION.md; the front-end resolves JSONB -> component.
--  * Colour is NEVER stored. Boxes carry a semantic tone NAME only;
--    hence the `tone` enum below. The CSS `.tone-*` classes resolve
--    the actual palette, so the DB stays theme-clean and re-skinnable.
-- ============================================================

-- Six brand tones. Data references a tone by name; CSS owns the colour.
CREATE TYPE econ_tone AS ENUM ('green', 'amber', 'blue', 'purple', 'rose', 'slate');

-- Exam boards (edexcel_a is the content baseline today).
CREATE TABLE boards (
  id    text PRIMARY KEY,          -- 'edexcel_a' | 'edexcel_b' | 'aqa' | 'ocr'
  name  text NOT NULL,
  short text NOT NULL
);

-- One row per (board, topic). `slug` is the URL segment + data dir name.
CREATE TABLE topics (
  id         bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  board_id   text NOT NULL REFERENCES boards(id),
  theme      text NOT NULL,         -- 'theme-1' | 'micro' | 'macro' | …
  slug       text NOT NULL,         -- 'demand'
  title      text NOT NULL,
  spec       text,                  -- bare spec sub-section, e.g. '2.1'
  est_time   text,
  goal       text,
  intro      jsonb,                 -- { heroKey, summary, doInThis, outcomes[], stages, tip }
  position   int  NOT NULL DEFAULT 0,
  UNIQUE (board_id, slug)
);

-- Ordered cards within a Learn-It topic. `body` is the full card object
-- (its box keys: keyTerms, causes, flow, tip, examEdge, …) as JSONB.
-- `template` mirrors the renderer dispatch ('framing','cause',…); NULL
-- means the generic renderer.
CREATE TABLE cards (
  id         bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  topic_id   bigint NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
  position   int    NOT NULL,
  card_slug  text   NOT NULL,       -- title-derived slug, e.g. 'demand-pull-inflation'
  title      text,
  template   text,
  body       jsonb  NOT NULL,       -- the card object (all box payloads)
  UNIQUE (topic_id, position)
);

-- Link-It and quiz content travel as JSONB bundles keyed to the topic.
CREATE TABLE topic_link (
  topic_id bigint PRIMARY KEY REFERENCES topics(id) ON DELETE CASCADE,
  data     jsonb NOT NULL          -- all ECONOS_LINK_* records
);
CREATE TABLE topic_quiz (
  topic_id bigint PRIMARY KEY REFERENCES topics(id) ON DELETE CASCADE,
  data     jsonb NOT NULL          -- ECONOS_QUIZ
);

CREATE INDEX cards_topic_pos_idx ON cards (topic_id, position);
CREATE INDEX topics_board_idx    ON topics (board_id);
-- Query boxes by type, e.g. every card carrying a keyTerms block:
CREATE INDEX cards_body_gin      ON cards USING gin (body jsonb_path_ops);
