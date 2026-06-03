#!/usr/bin/env node
/* ============================================================
   scripts/convert-legacy-charts.mjs — legacy → EDL migration advisor.

   Scans the legacy chart specs under js/charts/specs/ (and, with a
   flag, topic data files) and classifies each against the Econos
   Diagram Language families, with a confidence score and a suggested
   EDL skeleton. It is a SUGGESTION engine — it never rewrites content
   unless you pass --write (reserved; not implemented destructively).

   Classifications:
     market-equilibrium · demand-shift · supply-shift · tax · subsidy ·
     price-control · externality · ppf · ad-as · phillips · unknown

   Usage:
     node scripts/convert-legacy-charts.mjs            # report all
     node scripts/convert-legacy-charts.mjs --min 0.5  # only confident
     node scripts/convert-legacy-charts.mjs --json     # machine output
     node scripts/convert-legacy-charts.mjs --file foo # one spec file

   Exit code is always 0 — this is advisory tooling, not a gate.
   ============================================================ */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const minArg = args.indexOf('--min');
const minConf = minArg !== -1 ? parseFloat(args[minArg + 1]) : 0;
const fileArg = args.indexOf('--file');
const onlyFile = fileArg !== -1 ? args[fileArg + 1] : null;

const root = process.cwd();
const specsDir = resolve(root, 'js/charts/specs');

/* ---- signal dictionary: regex hints → family weight ---- */
const SIGNALS = [
  { re: /\bMSC\b|\bMPC\b|\bMSB\b|\bMPB\b|externalit|welfare[- ]?loss/i, family: 'externality', w: 0.55 },
  { re: /\btax\b|\bS\s*\+\s*tax\b|wedge|incidence/i, family: 'tax', w: 0.5 },
  { re: /subsid/i, family: 'subsidy', w: 0.55 },
  { re: /price[- ]?ceiling|price[- ]?floor|maximum price|minimum price|shortage|surplus|MUP/i, family: 'price-control', w: 0.5 },
  { re: /\bLRAS\b|\bSRAS\b|\bAD\b|aggregate (demand|supply)|keynesian|classical|price level|real output/i, family: 'ad-as', w: 0.5 },
  { re: /\bPPF\b|production possibilit|opportunity cost|frontier|capital goods|consumer goods/i, family: 'ppf', w: 0.55 },
  { re: /phillips|NAIRU|natural rate|inflation.*unemployment|unemployment.*inflation/i, family: 'phillips', w: 0.6 },
  { re: /\bdemand\b|\bsupply\b|equilibrium|\bD1?\b.*\bS1?\b/i, family: 'market', w: 0.25 },
];

const SHIFT_RE = /shift|D₂|S₂|D2|S2|→|outward|inward|rightward|leftward/i;
const DEMAND_RE = /demand/i;
const SUPPLY_RE = /supply/i;

function classify(text) {
  const scores = {};
  for (const sig of SIGNALS) {
    if (sig.re.test(text)) scores[sig.family] = (scores[sig.family] || 0) + sig.w;
  }
  // pick the top family
  let best = 'unknown';
  let bestScore = 0;
  for (const [fam, sc] of Object.entries(scores)) {
    if (sc > bestScore) {
      best = fam;
      bestScore = sc;
    }
  }
  // refine market into a specific intent
  let intent = null;
  if (best === 'market') {
    if (SHIFT_RE.test(text)) {
      if (DEMAND_RE.test(text) && !SUPPLY_RE.test(text)) intent = 'demand-shift';
      else if (SUPPLY_RE.test(text) && !DEMAND_RE.test(text)) intent = 'supply-shift';
      else intent = 'market-shift';
    } else {
      intent = 'market-equilibrium';
    }
  }
  const confidence = Math.min(0.95, bestScore);
  return { family: best, intent, confidence };
}

function suggestSkeleton(family, intent) {
  const skel = { version: 1, type: family === 'unknown' ? 'market' : family };
  switch (family) {
    case 'market':
      skel.intent = intent === 'demand-shift' ? 'demand-shift-right'
        : intent === 'supply-shift' ? 'supply-shift-right'
        : 'market-equilibrium';
      break;
    case 'tax':
      skel.intent = 'tax-incidence';
      skel.tax = { size: 0.18, imposedOn: 'producers' };
      skel.show = ['tax-wedge', 'consumer-burden', 'producer-burden', 'deadweight-loss'];
      break;
    case 'subsidy':
      skel.intent = 'subsidy-incidence';
      skel.subsidy = { size: 0.18, paidTo: 'producers' };
      skel.show = ['subsidy-wedge', 'government-cost'];
      break;
    case 'price-control':
      skel.intent = 'maximum-price-shortage';
      break;
    case 'externality':
      skel.intent = 'negative-production-externality';
      skel.show = ['msc', 'welfare-loss'];
      break;
    case 'ppf':
      skel.intent = 'ppf-outward-shift';
      break;
    case 'ad-as':
      skel.intent = 'ad-shift-right';
      break;
    case 'phillips':
      skel.intent = 'short-run-phillips-curve';
      break;
    default:
      skel.intent = 'market-equilibrium';
  }
  skel.mode = 'learn';
  skel.viewport = 'card';
  skel.alt = { summary: 'TODO: describe the economics in one sentence.' };
  return skel;
}

/* ---- scan ---- */
if (!existsSync(specsDir)) {
  console.error('convert-legacy-charts: no js/charts/specs directory found.');
  process.exit(0);
}
let files = readdirSync(specsDir).filter((f) => f.endsWith('.js')).sort();
if (onlyFile) files = files.filter((f) => f.includes(onlyFile));

const results = files.map((file) => {
  const text = readFileSync(join(specsDir, file), 'utf8');
  const { family, intent, confidence } = classify(text);
  return {
    file: `js/charts/specs/${file}`,
    family,
    intent,
    confidence: Math.round(confidence * 100) / 100,
    suggestion: suggestSkeleton(family, intent),
  };
});

const filtered = results.filter((r) => r.confidence >= minConf);

if (asJson) {
  console.log(JSON.stringify(filtered, null, 2));
  process.exit(0);
}

const byFamily = {};
filtered.forEach((r) => {
  byFamily[r.family] = (byFamily[r.family] || 0) + 1;
});

console.log('Econos legacy-chart → EDL migration advisor');
console.log('===========================================\n');
filtered
  .sort((a, b) => b.confidence - a.confidence)
  .forEach((r) => {
    const bar = '█'.repeat(Math.round(r.confidence * 10)).padEnd(10, '·');
    console.log(`${bar} ${r.confidence.toFixed(2)}  ${r.family}${r.intent ? ' · ' + r.intent : ''}`);
    console.log(`           ${r.file}`);
  });

console.log('\nSummary by candidate family:');
Object.entries(byFamily)
  .sort((a, b) => b[1] - a[1])
  .forEach(([fam, n]) => console.log(`  ${String(n).padStart(3)}  ${fam}`));
console.log(`\n${filtered.length} of ${results.length} specs shown (min confidence ${minConf}).`);
console.log('\nThis is advisory only — no files were modified. Re-author flagged specs');
console.log('as EDL using docs/DIAGRAM_MIGRATION_GUIDE.md. Run with --json for skeletons.');
