#!/usr/bin/env node
/* ============================================================
   scripts/export-content.mjs — portable content export bridge.

   Makes Econos content easy to migrate to a Postgres + .NET (or any)
   backend WITHOUT changing the live site. It evaluates every topic
   data file (which only assign `window.ECONOS_*` plain objects) in a
   sandbox and emits one backend-agnostic JSON document:

       dist/export/content.json   (generated on demand, not committed)

   Plus a small committed sample (docs/schema/sample-topic.json) so the
   shape is reviewable in-repo. The content is already JSON-shaped, so
   this is a faithful dump, not a transform — see docs/CONTENT_MIGRATION.md
   for the target Postgres schema (docs/schema/postgres.sql) and how a
   .NET renderer reproduces the same HTML from this data.

   Read-only over js/data/**. Usage: node scripts/export-content.mjs
   ============================================================ */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import vm from 'node:vm';

const DATA_ROOT = 'js/data';
const OUT_DIR = 'dist/export';
const SAMPLE = 'docs/schema/sample-topic.json';

/* Evaluate the data files in a topic directory in one sandbox and
   return every ECONOS_* global they assign. Some data files embed
   computed URLs (e.g. `TopicLoader.routes.learn(...)`) inside their
   object literals, so the sandbox backs every unknown global with a
   universal chainable stub: any property access returns the stub and
   any call returns '' — so those calls yield placeholder strings
   instead of throwing. (URLs are recomputed by the target backend.) */
function makeStub() {
  const fn = function () { return ''; };
  return new Proxy(fn, {
    get: (_t, k) => {
      if (k === Symbol.toPrimitive || k === 'toString' || k === 'valueOf') return () => '';
      return makeStub();
    },
    apply: () => '',
  });
}

function evalTopic(files) {
  const store = {};
  // `window` is a proxy that records ECONOS_* assignments and returns a
  // chainable stub for any unknown read (so embedded TopicLoader.routes
  // calls etc. don't throw). The vm context keeps REAL JS built-ins
  // (Array, Object, Math, JSON, …); only window/self/globalThis and the
  // known runtime helper TopicLoader are stubbed.
  const win = new Proxy(store, {
    get: (_t, k) => (k in store ? store[k] : makeStub()),
    set: (_t, k, v) => { store[k] = v; return true; },
    has: () => true,
  });
  const sandbox = { window: win, self: win, globalThis: win, TopicLoader: makeStub(), document: makeStub() };
  const context = vm.createContext(sandbox);
  for (const f of files) {
    const code = readFileSync(f, 'utf8');
    try {
      vm.runInContext(code, context, { filename: f, timeout: 5000 });
    } catch (e) {
      console.warn(`  ! ${f}: ${e.message.split('\n')[0]}`);
    }
  }
  const out = {};
  for (const k of Object.keys(store)) {
    if (k.startsWith('ECONOS_')) out[k] = store[k];
  }
  return out;
}

function topicDirs() {
  const dirs = [];
  for (const board of readdirSync(DATA_ROOT)) {
    const boardPath = join(DATA_ROOT, board);
    let themes;
    try { themes = readdirSync(boardPath); } catch { continue; }
    for (const theme of themes) {
      const themePath = join(boardPath, theme);
      let topics;
      try { topics = readdirSync(themePath); } catch { continue; }
      for (const topic of topics) {
        const topicPath = join(themePath, topic);
        let files;
        try { files = readdirSync(topicPath).filter((f) => f.endsWith('.js')); } catch { continue; }
        if (files.length) dirs.push({ board, theme, topic, path: topicPath, files: files.map((f) => join(topicPath, f)) });
      }
    }
  }
  return dirs;
}

const dirs = topicDirs();
const topics = [];
for (const d of dirs) {
  const globals = evalTopic(d.files);
  const T = globals.ECONOS_TOPIC;
  if (!T) continue; // skip dirs without a topic record (placeholders)
  topics.push({
    board: d.board,
    theme: d.theme,
    slug: d.topic,
    topic: T,                                   // learn-it record (id, intro, cards[], …)
    link: globals.ECONOS_LINK_STATION ? Object.fromEntries(Object.entries(globals).filter(([k]) => k.startsWith('ECONOS_LINK'))) : undefined,
    quiz: globals.ECONOS_QUIZ,
  });
}

mkdirSync(OUT_DIR, { recursive: true });
const doc = { generatedAt: new Date().toISOString(), count: topics.length, topics };
writeFileSync(join(OUT_DIR, 'content.json'), JSON.stringify(doc, null, 2));
console.log(`export:content — ${topics.length} topics → ${join(OUT_DIR, 'content.json')}`);

// Commit a single small sample so the shape is reviewable in-repo.
const sample = topics.find((t) => t.slug === 'demand') || topics[0];
if (sample) {
  mkdirSync('docs/schema', { recursive: true });
  // trim cards to the first 2 to keep the sample small
  const trimmed = JSON.parse(JSON.stringify(sample));
  if (trimmed.topic && Array.isArray(trimmed.topic.cards)) trimmed.topic.cards = trimmed.topic.cards.slice(0, 2);
  trimmed.quiz = undefined; trimmed.link = undefined;
  writeFileSync(SAMPLE, JSON.stringify(trimmed, null, 2));
  console.log(`export:content — sample → ${SAMPLE} (topic '${sample.slug}', 2 cards)`);
}
