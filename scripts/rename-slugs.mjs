#!/usr/bin/env node
/* ============================================================
   ECONOS — One-shot slug rename
   ─────────────────────────────────────────────────────────────
   Rebuilds the topic identifier system so that:
     – the internal ID === the directory name === the URL slug
       (derived from each topic's display title)
     – data files drop the `data-` prefix
     – the `chain_open` station becomes `chain-open`
     – toSlug/fromSlug bijections disappear (identity)

   Idempotent on a clean tree: run once, commit, run again → no-op.
   ============================================================ */

import { execSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(process.argv[2] || '.');
const DRY  = process.env.DRY === '1';

/* Old internal ID  →  new URL/directory slug.
   Slugs derived from `name:` in js/topics.js: lowercase, `&`→`and`,
   strip punctuation, spaces → dashes. Hand-tweaked for collisions
   (none found) and readability (net_trade keeps the simple form). */
const SLUG_MAP = {
  basic_econ_problem:            'introduction-to-economics',
  factors_of_production:         'factors-of-production',
  ppf:                           'production-possibility-frontiers',
  specialisation_money:          'specialisation-and-money',
  economic_systems:              'economic-systems',
  demand:                        'demand',
  ped:                           'price-elasticity-of-demand',
  yed_xed:                       'income-and-cross-price-elasticity',
  supply:                        'supply',
  pes:                           'price-elasticity-of-supply',
  market_equilibrium:            'price-determination',
  price_functions:               'the-price-mechanism',
  consumer_producer_surplus:     'consumer-and-producer-surplus',
  indirect_taxes_subsidies:      'indirect-taxes-and-subsidies',
  behavioural_econ:              'behavioural-economics',
  market_failure:                'market-failure',
  neg_externalities:             'negative-externalities',
  pos_externalities:             'positive-externalities',
  public_goods:                  'public-goods',
  info_gaps:                     'information-gaps',
  taxes_subsidies_policy:        'taxes-and-subsidies-as-policy-tools',
  govt_failure:                  'government-failure',
  environmental_econ:            'environmental-economics',
  price_controls:                'government-intervention-in-markets',
  unstable_markets:              'unstable-commodity-markets',
  inflation_meas:                'inflation-measurement-and-costs',
  inflation:                     'causes-of-inflation-and-deflation',
  unemployment:                  'employment-and-unemployment',
  ad:                            'aggregate-demand',
  consumption:                   'consumption',
  investment:                    'investment',
  government_spending:           'government-spending',
  net_trade:                     'net-trade',
  agg_supply:                    'aggregate-supply',
  national_income:               'national-income',
  multiplier:                    'national-income-and-the-multiplier',
  growth_measure:                'measures-of-economic-performance',
  output_gaps:                   'output-gaps',
  growth_cycle:                  'trade-cycle-shocks-and-economic-growth',
  growth_impact:                 'the-impact-of-economic-growth',
  macro_objectives:              'macroeconomic-objectives-and-trade-offs',
  fiscal_policy:                 'demand-side-policies-fiscal',
  monetary:                      'demand-side-policies-monetary',
  supply_side:                   'supply-side-policies',
  macro_conflicts:               'macro-conflicts-and-trade-offs',
  sol_wellbeing:                 'standard-of-living-and-wellbeing',
  business_growth:               'business-growth',
  business_objectives:           'business-objectives',
  revenue:                       'revenue',
  short_run_costs:               'costs',
  long_run_costs:                'economies-and-diseconomies-of-scale',
  profits_shutdown:              'profits-and-losses',
  efficiency:                    'types-of-efficiency',
  perfect_competition:           'perfect-competition',
  monopolistic_competition:      'monopolistic-competition',
  oligopoly:                     'oligopoly',
  collusion_cartels:             'collusion-and-cartels',
  game_theory:                   'game-theory',
  monopoly:                      'monopoly',
  monopsony:                     'monopsony',
  contestability:                'contestable-markets',
  labour_markets:                'demand-for-labour',
  labour_supply_nmw:             'supply-of-labour',
  wage_determination:            'wage-determination',
  govt_intervention_t3:          'government-intervention',
  globalisation:                 'globalisation',
  trade_spec:                    'specialisation-and-trade',
  trading_blocs:                 'trading-blocs-and-wto',
  protectionism:                 'restrictions-on-free-trade',
  balance_of_payments:           'balance-of-payments',
  exchange_rates:                'exchange-rates',
  intl_competitiveness:          'international-competitiveness',
  poverty:                       'absolute-and-relative-poverty',
  income_inequality:             'inequality',
  measures_of_development:       'measures-of-development',
  factors_growth_development:    'factors-influencing-growth-and-development',
  strategies_growth_development: 'strategies-influencing-growth-and-development',
  financial_markets:             'role-of-financial-markets',
  financial_market_failure:      'market-failure-in-the-financial-sector',
  central_banks:                 'role-of-central-banks',
  public_expenditure:            'public-expenditure',
  taxation:                      'taxation',
  public_finances:               'public-sector-finances',
  macro_policies_global:         'macroeconomic-policies-in-a-global-context',

  /* Orphan content directories — present under js/data/ but not in
     the topics.js registry. Renamed for slug consistency. */
  barriers_entry:                'barriers-to-entry',
  bop_t2:                        'bop-t2',                        /* mechanical: avoids collision with the registered balance-of-payments */
  govt_intervention_subsidies:   'government-intervention-subsidies',
  govt_intervention_tax:         'government-intervention-taxes',
  monopoly_vs_competition:       'market-power-and-contestability',
  price_discrimination:          'price-discrimination',
  profit_cost_changes:           'changes-in-costs-and-revenues'
};

/* Sanity check: slugs must be unique. */
{
  const seen = new Set();
  for (const [k, v] of Object.entries(SLUG_MAP)) {
    if (seen.has(v)) { console.error(`Duplicate slug: ${v} (from ${k})`); process.exit(1); }
    seen.add(v);
  }
}

/* Stations that need renaming. Only chain_open → chain-open. */
const STATION_MAP = { chain_open: 'chain-open' };

/* Sort old IDs by length DESC so longer IDs are replaced before
   shorter ones (avoid `inflation` matching inside `inflation_meas`).
   We also use quoted-string and path-segment contexts to scope
   replacements safely. */
const ORDERED_IDS = Object.keys(SLUG_MAP).sort((a, b) => b.length - a.length);

function sh(cmd) {
  if (DRY) { console.log('[DRY]', cmd); return ''; }
  return execSync(cmd, { cwd: ROOT, stdio: ['ignore','pipe','pipe'] }).toString();
}

/* ── 1. Rename topic directories (git mv) ───────────────────── */
function renameTopicDirs() {
  const dataDir = join(ROOT, 'js/data');
  for (const [oldId, newSlug] of Object.entries(SLUG_MAP)) {
    if (oldId === newSlug) continue;
    const oldPath = join(dataDir, oldId);
    const newPath = join(dataDir, newSlug);
    if (!existsSync(oldPath)) continue;        // already renamed
    if (existsSync(newPath)) {                  // collision
      console.error(`Cannot rename ${oldId} → ${newSlug}: destination exists`);
      continue;
    }
    sh(`git mv "js/data/${oldId}" "js/data/${newSlug}"`);
    console.log(`dir  ${oldId} → ${newSlug}`);
  }
}

/* ── 2. Rename data files inside every topic dir (drop data- prefix) ── */
function renameDataFiles() {
  const dataDir = join(ROOT, 'js/data');
  const topics = readdirSync(dataDir).filter((d) => statSync(join(dataDir, d)).isDirectory());
  for (const topic of topics) {
    const tdir = join(dataDir, topic);
    for (const name of readdirSync(tdir)) {
      if (!name.startsWith('data-')) continue;
      const newName = name.slice(5);  // strip 'data-'
      sh(`git mv "js/data/${topic}/${name}" "js/data/${topic}/${newName}"`);
    }
  }
}

/* ── 3. Source-code rewrites ────────────────────────────────── */

/* Files we touch — everything under js/, tests/, plus the 5 root
   HTML files, vite.config.js, sw.js. Skip dist/, node_modules/. */
function listSourceFiles() {
  const out = [];
  function walk(dir, rel) {
    for (const entry of readdirSync(join(ROOT, dir))) {
      if (entry === 'node_modules' || entry === 'dist' || entry === '.git') continue;
      const full = join(dir, entry);
      const stat = statSync(join(ROOT, full));
      if (stat.isDirectory()) walk(full, rel);
      else if (/\.(js|mjs|html|xml|json|md|css)$/.test(entry)) out.push(full);
    }
  }
  walk('.', '');
  return out;
}

/* Topic IDs only appear as quoted strings or path segments. We do
   targeted replacements in those contexts so substrings (e.g. `ad`
   inside `aggregate_demand` text) never get caught. */
function rewriteFile(path) {
  const full = join(ROOT, path);
  const orig = readFileSync(full, 'utf8');
  let s = orig;

  /* Rename chain_open station everywhere (quoted-string only). */
  s = s.replace(/(['"])chain_open\1/g, '$1chain-open$1');

  /* Replace each old ID — longest first — in these contexts:
       '<id>'   "<id>"   /<id>/   /<id>$   <id>:   id: '<id>',
     The first three cover ~all references safely. */
  for (const oldId of ORDERED_IDS) {
    const newSlug = SLUG_MAP[oldId];
    if (oldId === newSlug) continue;
    const esc = oldId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // 'id' or "id"
    s = s.replace(new RegExp(`(['"])${esc}\\1`, 'g'), `$1${newSlug}$1`);
    // /id/ or /id$  (URL path segments — only when followed by / or end)
    s = s.replace(new RegExp(`/${esc}(?=[/'"?\\s)])`, 'g'), `/${newSlug}`);
    // js/data/<id>/ path inside source strings
    s = s.replace(new RegExp(`(js/data/)${esc}(/)`, 'g'), `$1${newSlug}$2`);
  }

  if (s !== orig) {
    if (DRY) console.log(`[DRY] rewrite ${path}`);
    else writeFileSync(full, s);
    return true;
  }
  return false;
}

function rewriteSources() {
  const files = listSourceFiles();
  let n = 0;
  for (const f of files) if (rewriteFile(f)) n++;
  console.log(`rewrote ${n} files`);
}

/* ── Run ─────────────────────────────────────────────────── */
const stage = process.argv[3] || 'all';
if (stage === 'dirs'  || stage === 'all') renameTopicDirs();
if (stage === 'files' || stage === 'all') renameDataFiles();
if (stage === 'rewrite' || stage === 'all') rewriteSources();
console.log(DRY ? '(dry run — nothing written)' : 'done');
