/* ============================================================
   lint-card-lengths.mjs — staging-safety check (WARNING, not fatal).

   Long descriptions stretch the card / interactive-diagram staging
   and make stage height jump between cards. This script loads every
   topic's learn-it.js in a sandbox and flags the staging-sensitive
   string fields that exceed a sensible budget. It NEVER fails the
   build — it prints warnings so authors (and Claude) trim copy. The
   long-standing 280-char rule for ad-interactive step bodies lives
   here now too, alongside the generic-renderer fields it used to
   miss.

   Budgets are per-field, tuned to where the text actually sits:
     - interactiveDiagram view.body / ad-interactive step.body  280
       (these sit BESIDE the diagram in a fixed row — the classic
       "stretching the staging" case)
     - interactiveDiagram view.analysis                         360
       (lower panel, a little more room)
     - diagramPanel bullets (each)                              170
     - comparison left/right caption                            170
     - branches[].sub                                           200
   ============================================================ */
import { readFileSync } from 'node:fs';
import { globSync } from 'node:fs';
import { resolve } from 'node:path';

const BUDGETS = {
  stepBody: 280,
  viewBody: 280,
  viewAnalysis: 360,
  bullet: 170,
  caption: 170,
  branchSub: 200
};

const plain = (s) => String(s == null ? '' : s).replace(/<[^>]+>/g, '');
const len = (s) => plain(s).length;

function loadTopic(file) {
  const src = readFileSync(file, 'utf8');
  const sandbox = {
    window: {},
    TopicLoader: { routes: new Proxy({}, { get: () => () => '' }), getBoard: () => 'edexcel_a' }
  };
  // eslint-disable-next-line no-new-func
  const fn = new Function('window', 'TopicLoader', src + '\nreturn window.ECONOS_TOPIC;');
  return fn(sandbox.window, sandbox.TopicLoader);
}

const warnings = [];
function check(file, cardId, field, text, budget) {
  const n = len(text);
  if (n > budget) {
    warnings.push(`${file}  [${cardId}] ${field}: ${n} chars (>${budget})`);
  }
}

const files = globSync('js/data/**/learn-it.js', { cwd: resolve(process.cwd()) });
for (const rel of files) {
  const file = resolve(process.cwd(), rel);
  let topic;
  try { topic = loadTopic(file); } catch { continue; } // unparseable in sandbox — skip
  if (!topic || !Array.isArray(topic.cards)) continue;
  for (const c of topic.cards) {
    const id = c.id || c.title || '?';
    // ad-interactive steps
    (c.steps || []).forEach((s) => check(rel, id, `step "${s.key}" body`, s.body, BUDGETS.stepBody));
    // interactiveDiagram views
    const idlist = Array.isArray(c.interactiveDiagram) ? c.interactiveDiagram
      : (c.interactiveDiagram ? [c.interactiveDiagram] : []);
    idlist.forEach((idobj) => (idobj.views || []).forEach((v) => {
      check(rel, id, 'interactiveDiagram view.body', v.body, BUDGETS.viewBody);
      check(rel, id, 'interactiveDiagram view.analysis', v.analysis, BUDGETS.viewAnalysis);
    }));
    // diagramPanel bullets
    if (c.diagramPanel && Array.isArray(c.diagramPanel.bullets)) {
      c.diagramPanel.bullets.forEach((b, i) => check(rel, id, `diagramPanel.bullets[${i}]`, b, BUDGETS.bullet));
    }
    // comparison captions
    if (c.comparison) {
      ['left', 'right'].forEach((side) => {
        const cap = c.comparison[side] && c.comparison[side].caption;
        if (cap) check(rel, id, `comparison.${side}.caption`, cap, BUDGETS.caption);
      });
    }
    // branches subs
    (c.branches || []).forEach((b, i) => check(rel, id, `branches[${i}].sub`, b.sub, BUDGETS.branchSub));
  }
}

if (warnings.length) {
  console.warn('card-lengths: ' + warnings.length + ' over-budget field(s) — trim to keep staging stable:');
  warnings.forEach((w) => console.warn('  ⚠ ' + w));
} else {
  console.log('card-lengths: OK — all staging-sensitive copy within budget');
}
// Always exit 0 — this is a warning, never a build failure.
process.exit(0);
