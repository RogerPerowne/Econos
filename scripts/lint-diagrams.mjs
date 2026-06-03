#!/usr/bin/env node
/* ============================================================
   scripts/lint-diagrams.mjs — EDL spec linter.

   Loads the Econos Diagram Language engine, then scans for EDL
   semantic specs (files that declare `window.ECONOS_EDL_SPEC` /
   `window.ECONOS_EDL_SPECS`, or a `*.edl.json` spec) and checks
   each against the house rules:

     - no raw <svg> / hand-authored marker strings in a spec
     - known family / type / intent
     - known show tokens
     - no duplicate element ids
     - alt text present (warning)
     - no `triangle` arrowhead unless head explicitly set
     - no raw x/y equilibrium points in semantic mode
     - no unmanaged layer numbers
     - no labelDx / labelDy unless allowManualLayout: true
     - engine renders without errors

   This is intentionally NON-destructive and currently scoped to
   discovered EDL spec files; legacy js/charts/specs/*.js are linted
   by lint-charts.mjs and are out of scope here. As EDL content
   ships, point SCAN_DIRS at it.

   Usage:  node scripts/lint-diagrams.mjs [--verbose]
   Exit:   non-zero if any spec produces an error-level finding.
   ============================================================ */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, resolve, extname } from 'node:path';

const verbose = process.argv.includes('--verbose');
const root = process.cwd();

/* ---- load the engine against a mock window ---- */
const edlSrc = readFileSync(resolve(root, 'js/diagrams/econos-diagrams.js'), 'utf8');
const win = {};
/* eslint-disable-next-line no-new-func */
new Function('window', edlSrc)(win);
const EDL = win.ECONOS_DIAGRAMS;
if (!EDL) {
  console.error('lint-diagrams: failed to load window.ECONOS_DIAGRAMS');
  process.exit(2);
}
const REG = EDL.registry;

/* ---- discover EDL spec files ---- */
const SCAN_DIRS = ['js/diagrams/specs', 'js/data'];
const findings = [];
const note = (file, level, message) => findings.push({ file, level, message });

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const fp = join(dir, name);
    const st = statSync(fp);
    if (st.isDirectory()) return walk(fp);
    return [fp];
  });
}

// Pull candidate EDL spec objects out of a JS/JSON file. We look for
// either `*.edl.json` payloads or `window.ECONOS_EDL...` assignments.
function extractSpecs(file) {
  const ext = extname(file);
  const text = readFileSync(file, 'utf8');
  const specs = [];
  if (ext === '.json' && /\.edl\.json$/.test(file)) {
    try {
      const obj = JSON.parse(text);
      (Array.isArray(obj) ? obj : [obj]).forEach((s) => specs.push({ raw: text, spec: s }));
    } catch (err) {
      note(file, 'error', 'invalid JSON: ' + err.message);
    }
    return specs;
  }
  if (ext === '.js' && /ECONOS_EDL/.test(text)) {
    const w = {};
    try {
      /* eslint-disable-next-line no-new-func */
      new Function('window', text)(w);
    } catch (err) {
      note(file, 'error', 'failed to eval spec file: ' + err.message);
      return specs;
    }
    Object.keys(w)
      .filter((k) => /ECONOS_EDL/.test(k))
      .forEach((k) => {
        const v = w[k];
        (Array.isArray(v) ? v : [v]).forEach((s) => specs.push({ raw: text, spec: s }));
      });
  }
  return specs;
}

/* ---- per-spec checks ---- */
function lintSpec(file, raw, spec) {
  const where = `${file}`;

  // raw SVG smell
  if (/<svg|<marker|<path\b/i.test(JSON.stringify(spec))) {
    note(where, 'error', 'raw SVG / marker string found inside an EDL spec — specs must be semantic');
  }

  // family / intent
  const family = spec.type || (spec.intent && REG.intents[spec.intent]);
  if (!family) {
    note(where, 'error', 'missing `type` and no resolvable `intent`');
  } else if (REG.families.indexOf(family) === -1) {
    note(where, 'error', `unknown family/type \`${family}\``);
  }
  if (spec.intent && !REG.intents[spec.intent]) {
    note(where, 'error', `unknown intent \`${spec.intent}\``);
  }
  if (spec.intent && family && REG.intents[spec.intent] && REG.intents[spec.intent] !== family) {
    note(where, 'error', `intent \`${spec.intent}\` does not belong to family \`${family}\``);
  }

  // show tokens
  (spec.show || []).forEach((tok) => {
    if (REG.showTokens.indexOf(tok) === -1) note(where, 'error', `unknown show token \`${tok}\``);
  });

  // alt text
  if (!spec.alt || (!spec.alt.summary && !spec.alt.long)) {
    note(where, 'warn', 'no alt text — add alt.summary for accessibility');
  }

  // arrowheads: no triangle unless explicitly requested per-arrow
  (spec.arrows || []).forEach((a, i) => {
    if (a.head === 'triangle') {
      note(where, 'warn', `arrow[${i}] uses a filled triangle head — prefer the default chevron`);
    }
  });

  // duplicate ids across declared collections
  const ids = [];
  ['curves', 'points', 'arrows', 'regions'].forEach((coll) => {
    const c = spec[coll];
    if (!c) return;
    const list = Array.isArray(c) ? c : Object.keys(c).map((k) => ({ id: k }));
    list.forEach((el) => {
      if (el && el.id) ids.push(el.id);
    });
  });
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) note(where, 'error', `duplicate element ids: ${[...new Set(dupes)].join(', ')}`);

  // raw equilibrium coords in semantic mode
  const semantic = !!(spec.type || spec.intent);
  if (semantic) {
    (spec.points || []).forEach((p) => {
      if (/equil|^E\d?$|^E$/i.test(p.id || p.label || '') && typeof p.x === 'number') {
        note(where, 'error', `point \`${p.id || p.label}\` types a raw equilibrium coordinate — let the engine solve it`);
      }
    });
    // manual layout knobs
    const json = JSON.stringify(spec);
    if (/labelD[xy]/.test(json) && !spec.allowManualLayout) {
      note(where, 'error', 'labelDx/labelDy present without allowManualLayout: true');
    }
  }

  // unmanaged layer numbers (must be a known layer name or number)
  const layerNames = Object.keys(EDL.layers);
  const layerNums = Object.values(EDL.layers);
  (spec.arrows || []).concat(spec.curves || []).forEach((el) => {
    if (el && el.layer != null) {
      const ok = layerNames.indexOf(el.layer) !== -1 || layerNums.indexOf(el.layer) !== -1;
      if (!ok) note(where, 'warn', `layer \`${el.layer}\` is not a managed EDL layer`);
    }
  });

  // it must actually render
  const out = EDL.render(spec);
  if (out.errors && out.errors.length) {
    out.errors.forEach((e) => note(where, 'error', 'render error: ' + e));
  }
  if (verbose && out.warnings && out.warnings.length) {
    out.warnings.forEach((wmsg) => note(where, 'warn', 'render warning: ' + wmsg));
  }
}

/* ---- run ---- */
let scanned = 0;
SCAN_DIRS.forEach((dir) => {
  walk(resolve(root, dir)).forEach((file) => {
    extractSpecs(file).forEach(({ raw, spec }) => {
      scanned++;
      lintSpec(file, raw, spec);
    });
  });
});

const errors = findings.filter((f) => f.level === 'error');
const warns = findings.filter((f) => f.level === 'warn');

if (!scanned) {
  console.log('lint-diagrams: no EDL specs found yet (scanned ' + SCAN_DIRS.join(', ') + ').');
  console.log('  → EDL content is authored inline today; this gate activates as specs land.');
  process.exit(0);
}

findings.forEach((f) => {
  const tag = f.level === 'error' ? 'ERROR' : 'warn ';
  console.log(`[${tag}] ${f.file}: ${f.message}`);
});
console.log(`\nlint-diagrams: ${scanned} spec(s), ${errors.length} error(s), ${warns.length} warning(s).`);
process.exit(errors.length ? 1 : 0);
