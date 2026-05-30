/**
 * scripts/split-diagrams.mjs
 * ---------------------------
 * Deterministic codemod: relocates economics-diagram SVGs from js/icons.js
 * into js/diagrams/static/<group>.js, keeping the shim in ECONOS_ICONS.
 *
 * Usage:  node scripts/split-diagrams.mjs [repoRoot]
 *         (repoRoot defaults to cwd)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { createRequire } from 'module';

// ---------- config ----------------------------------------------------------

const repoRoot = resolve(process.argv[2] ?? '.');

// ---- MOVE patterns: confident economics diagrams only ----------------------
// Each regex is tested against the key name (case-insensitive unless flagged).
const MOVE_PATTERNS = [
  // AD / AS family
  /^adAs/i,
  /^adDemand/i,
  /^adCostPush/i,
  /^adComposition/i,
  /^adMovementShift/i,
  /^adShift/i,
  /^adInteractive$/i,
  /^adVsSupply/i,
  /^adAs/i,

  // SRAS / LRAS
  /^sras/i,
  /^lras/i,

  // AD standalone (non-hero, non-composition)
  /^adSlope/i,

  // Multiplier
  /^multiplier/i,

  // PPF / PPC
  /^ppf/i,
  /^ppc/i,

  // Demand / Supply curves (economics diagrams, not UI glyphs)
  /^demandInteractive$/i,
  /^supplyInteractive$/i,
  /^demandCsSvg$/i,
  /^supplyPsSvg$/i,
  /^cpsDiagram$/i,
  /^cpsSvg$/i,
  /^demandLawCurve$/i,
  /^demandScheduleCurve$/i,
  /^supplyCurveBasic$/i,
  /^demandShiftMini$/i,
  /^derivedDemandFlow$/i,
  /^realMarketsGrid$/i,
  /^welfareSurplus/i,
  /^equilibriumBasic$/i,
  /^simultaneousShifts/i,
  /^shiftsInteractive$/i,
  /^disequilibrium/i,
  /^marketInteractive$/i,
  /^supplyPolicy/i,

  // Phillips curve
  /^phillips/i,

  // Lorenz / Gini
  /^lorenz/i,
  /^gini/i,

  // Externalities
  /^negExternality/i,
  /^posExternality/i,
  /^lemonMarket/i,
  /^freeRider/i,

  // Price controls
  /^priceControls/i,
  /^priceCeiling/i,
  /^priceFloor/i,
  /^priceCeilingMini/i,

  // Tax / Subsidy
  /^tax(?!Types|Incidence)/i,  // taxDiagram, taxMini, taxSurplus, taxDiagramInteractive etc
  /^taxTypes/i,
  /^taxIncidence/i,
  /^taxSubsidy/i,
  /^subsidy/i,

  // Welfare / DWL
  /^welfare/i,
  /^deadweight/i,
  /^dwl/i,
  /^allocativeEfficiency/i,

  // Cost curves
  /^shortRunCost/i,
  /^lrac/i,
  /^mcLrTangency$/i,
  /^profitsShutdown/i,
  /^revMax/i,

  // Monopoly / market power
  /^monopoly/i,
  /^naturalMonopoly/i,
  /^firstDegreePd$/i,
  /^thirdDegreePd$/i,
  /^kinkedDemand/i,
  /^limitPricing/i,
  /^networkEffect/i,
  /^mesBarrier/i,
  /^cartel/i,

  // Firm-level / competition
  /^firmLevel/i,
  /^marketLevel/i,
  /^contestability/i,
  /^perfectCompetition/i,

  // Labour market
  /^labour/i,
  /^monopsony/i,
  /^backwardBending/i,
  /^nmwDiagram$/i,

  // J-Curve / BOP
  /^jCurve/i,
  /^bopJCurve/i,
  /^currentAccount/i,
  /^netTrade/i,

  // Trade / tariff
  /^tariff/i,
  /^tradingBloc/i,

  // Consumption / Investment function (economics diagrams)
  /^consumptionFunction$/i,
  /^investmentFeedback/i,

  // MEC
  /^mecDiagram$/i,

  // Crowding out / loanable funds
  /^crowdingOut/i,

  // Auto-stabilisers
  /^autoStabilisers/i,

  // Gov multiplier
  /^govMultiplier/i,

  // Cobweb
  /^cobweb/i,

  // Kuznets
  /^kuznets/i,

  // Prisoners' dilemma
  /^prisonersDilemma/i,

  // Behavioural economics
  /^biasGallery/i,
  /^presentBias/i,
  /^boundedSelfControl/i,
  /^ukNudges/i,
  /^bitFramework/i,
  /^policySpectrum/i,
  /^prospectTheory/i,
  /^nudgeDefault/i,
  /^whyNotRational/i,
  /^twoSystems/i,

  // Gov failure
  /^govtFailure/i,
  /^regulatoryCapture/i,

  // National income / circular flow
  /^nationalIncome/i,
  /^circularFlow/i,
  /^fortyFive/i,
  /^eniTwinJW45$/i,
  /^eniAdAsCore$/i,
  /^eniOutputGapsTwin$/i,

  // Macro dashboards / growth / trade cycle
  /^growthScorecards$/i,
  /^growthScorecard$/i,
  /^actualVsPotential/i,
  /^tradeWaveCycle$/i,
  /^demandShocksTwin$/i,
  /^supplyShocksTwin$/i,
  /^macroObjectivesScorecard$/i,
  /^macroDashboard/i,
  /^causesOfGrowth/i,
  /^growthSustainability/i,
  /^incomeSpectrum/i,

  // Multiplier rounds/propensities
  /^multiplierRounds$/i,
  /^multiplierPropensities$/i,
  /^multiplierAdAs$/i,

  // QE
  /^qeChart$/i,

  // Output gaps / fiscal context
  /^outputGap/i,

  // Globalisation / business growth
  /^globalisation/i,
  /^businessGrowth/i,

  // Elasticity diagrams
  /^elasticVsInelastic/i,
  /^elasticityIncidence/i,

  // Specific named diagrams
  /^demandPullDiagram$/i,
  /^costPushDiagram$/i,
  /^fiscalDragChart$/i,
];

// ---- KEEP patterns (override MOVE): UI, hero, portraits, pictorial ---------
const KEEP_PATTERNS = [
  // UI / chrome
  /^home$/,
  /^topics$/,
  /^progress$/,
  /^practice$/,
  /^planner$/,
  /^messages$/,
  /^settings$/,
  /^flame$/,
  /^arrowLeft$/,
  /^arrowRight$/,
  /^chevDown$/,
  /^exit$/,
  /^check$/,
  /^lock$/,
  /^target$/,
  /^clock$/,
  /^bulb$/,
  /^star$/,
  /^info$/,
  /^cap$/,
  /^trophy$/,
  /^chart$/,
  /^scale$/,
  /^globe$/,
  /^building$/,
  /^users$/,
  /^database$/,
  /^trendUp$/,
  /^trendDown$/,
  /^trendCurve/,
  /^receiptPound$/,
  /^shoeRun$/,
  /^peopleArrow$/,
  /^cloudQuestion$/,
  /^globeNet$/,
  /^cog$/,
  /^cart$/,
  /^pound$/,
  /^bookmark$/,
  /^eye$/,
  /^brandGlyph$/,
  /^priceTagDown$/,
  /^cartClock$/,
  /^factoryCut$/,
  /^scaleBalanceDebt$/,
  /^anchorLock$/,
  /^speechAnchor$/,

  // Hero illustrations (all hero* keys)
  /^hero/i,

  // Economist portraits
  /^economist/i,

  // Pictorial / scene illustrations
  /^basket$/,
  /^priceCompare$/,
  /^branchDiagram$/,
  /^labourClassification$/,
  /^japanMap$/,
  /^landTypesSvg$/,
  /^capitalTypesSvg$/,
  /^enterpriseCombinationSvg$/,

  // The plain "cpsSvg" and demandCs/supplyPs might be simple static decorations
  // Decision: move cpsDiagram but keep the raw SVG helpers if they're scene-ish
  // Actually cpsSvg, demandCsSvg, supplyPsSvg are economics area diagrams — moved above
];

// ---- Family grouping for output files -------------------------------------
// Order matters: first match wins.
const FAMILY_MAP = [
  { group: 'ad-as',         pattern: /^(adAs|adDemand|adCostPush|adComposition|adMovement|adShift|adInteractive|adVsSupply|adSlope|adAs|sras|lras|qeChart|adAs)/i },
  { group: 'multiplier',    pattern: /^(multiplier|govMultiplier|crowdingOut|autoStabilisers|consumptionFunction|investmentFeedback|mecDiagram|fiscalDrag)/i },
  { group: 'ppf',           pattern: /^(ppf|ppc)/i },
  { group: 'supply-demand', pattern: /^(demandInteractive|supplyInteractive|welfareSurplus|equilibriumBasic|simultaneous|shiftsInteractive|disequilibrium|marketInteractive|demandLawCurve|demandScheduleCurve|supplyCurveBasic|demandShiftMini|derivedDemand|realMarketsGrid|supplyPolicy)/i },
  { group: 'welfare-tax',   pattern: /^(tax|subsidy|welfare|deadweight|dwl|allocativeEfficiency|priceCeiling|priceFloor|priceControls)/i },
  { group: 'phillips-lorenz', pattern: /^(phillips|lorenz|gini)/i },
  { group: 'externalities', pattern: /^(negExternality|posExternality|lemonMarket|freeRider)/i },
  { group: 'costs-firm',    pattern: /^(shortRunCost|lrac|mcLrTangency|profitsShutdown|revMax|firmLevel|marketLevel)/i },
  { group: 'monopoly',      pattern: /^(monopoly|naturalMonopoly|firstDegree|thirdDegree|kinkedDemand|limitPricing|networkEffect|mesBarrier|cartel)/i },
  { group: 'contestability',pattern: /^(contestability)/i },
  { group: 'labour',        pattern: /^(labour|monopsony|backwardBending|nmwDiagram)/i },
  { group: 'trade-bop',     pattern: /^(jCurve|bopJCurve|currentAccount|netTrade|tariff|tradingBloc|globalisation)/i },
  { group: 'behavioural',   pattern: /^(biasGallery|presentBias|boundedSelf|ukNudges|bitFramework|policySpectrum|prospectTheory|nudgeDefault|whyNotRational|twoSystems)/i },
  { group: 'macro-national',pattern: /^(nationalIncome|circularFlow|fortyFive|eni|tradeWaveCycle|demandShocksTwin|supplyShocksTwin|actualVsPotential|growthScorecard|macroObjectivesScorecard|macroDashboard|causesOfGrowth|growthSustainability|incomeSpectrum|multiplierRounds|multiplierPropensities|multiplierAdAs|outputGap)/i },
  { group: 'market-failure',pattern: /^(govtFailure|regulatoryCapture|businessGrowth|cobweb|kuznets|prisonersDilemma)/i },
  { group: 'elasticity',    pattern: /^(elasticVsInelastic|elasticityIncidence)/i },
  { group: 'cs-ps',         pattern: /^(demandCsSvg|supplyPsSvg|cpsDiagram|cpsSvg)/i },
  { group: 'demand-pull',   pattern: /^(demandPullDiagram|costPushDiagram)/i },
  { group: 'price-controls',pattern: /^(priceCeilingMini|taxMini|subsidyMini)/i },
];

// ---------------------------------------------------------------------------

function shouldMove(key) {
  // Keep always wins
  if (KEEP_PATTERNS.some(p => p.test(key))) return false;
  // Move if any pattern matches
  return MOVE_PATTERNS.some(p => p.test(key));
}

function getFamily(key) {
  for (const { group, pattern } of FAMILY_MAP) {
    if (pattern.test(key)) return group;
  }
  return 'misc-diagrams';
}

// ---------------------------------------------------------------------------
// 1. Load icons.js as data
// ---------------------------------------------------------------------------

const iconsPath = join(repoRoot, 'js', 'icons.js');
const iconsCode = readFileSync(iconsPath, 'utf8');

const win = {};
(new Function('window', iconsCode))(win);
const allIcons = win.ECONOS_ICONS;
if (!allIcons) throw new Error('ECONOS_ICONS not found after eval');

const allKeys = Object.keys(allIcons);
console.log(`Loaded ${allKeys.length} keys from icons.js`);

// ---------------------------------------------------------------------------
// 2. Build move-list
// ---------------------------------------------------------------------------

const moveKeys = [];
const keepKeys = [];
const uncertainKept = [];

for (const key of allKeys) {
  if (shouldMove(key)) {
    moveKeys.push(key);
  } else {
    keepKeys.push(key);
    // Flag anything that looks slightly diagram-ish but was kept
    if (/diagram|chart|curve|flow|model|svgKey/i.test(key) &&
        !KEEP_PATTERNS.some(p => p.test(key))) {
      uncertainKept.push(key);
    }
  }
}

// Group moved keys
const groups = {};
for (const key of moveKeys) {
  const g = getFamily(key);
  groups[g] = groups[g] || [];
  groups[g].push(key);
}

console.log('\n=== PROPOSED MOVE LIST ===');
console.log(`Moving: ${moveKeys.length}  |  Keeping: ${keepKeys.length}`);
for (const [g, ks] of Object.entries(groups)) {
  console.log(`\n  [${g}] (${ks.length} keys)`);
  ks.forEach(k => console.log(`    ${k}`));
}
console.log('\n=== KEEPING ===');
keepKeys.forEach(k => console.log(`  ${k}`));

if (uncertainKept.length > 0) {
  console.log('\n=== UNCERTAIN (kept conservatively) ===');
  uncertainKept.forEach(k => console.log(`  ${k}`));
}

// ---------------------------------------------------------------------------
// 3. Emit one file per group under js/diagrams/static/
// ---------------------------------------------------------------------------

const staticDir = join(repoRoot, 'js', 'diagrams', 'static');
if (!existsSync(staticDir)) {
  mkdirSync(staticDir, { recursive: true });
}

const emittedFiles = [];

for (const [group, keys] of Object.entries(groups)) {
  const entries = keys
    .map(k => `  ${JSON.stringify(k)}: ${JSON.stringify(allIcons[k])}`)
    .join(',\n');

  const content = `/* js/diagrams/static/${group}.js — auto-generated by scripts/split-diagrams.mjs */
/* DO NOT EDIT BY HAND — re-run the codemod to regenerate */
(function () {
  window.ECONOS_DIAGRAMS = window.ECONOS_DIAGRAMS || {};
  window.ECONOS_ICONS = window.ECONOS_ICONS || {};
  var D = {
${entries}
  };
  Object.assign(window.ECONOS_DIAGRAMS, D);
  Object.assign(window.ECONOS_ICONS, D);
})();
`;

  const outPath = join(staticDir, `${group}.js`);
  writeFileSync(outPath, content, 'utf8');
  emittedFiles.push(outPath);
  console.log(`Wrote ${outPath}  (${keys.length} keys)`);
}

// ---------------------------------------------------------------------------
// 4. Rewrite js/icons.js with kept keys only
// ---------------------------------------------------------------------------

const keptEntries = keepKeys
  .map(k => `  ${JSON.stringify(k)}: ${JSON.stringify(allIcons[k])}`)
  .join(',\n');

const newIconsContent = `/* ============================================================
   ECONOS – icon definitions (inline SVG strings)
   Economics DIAGRAM SVGs have been relocated to js/diagrams/static/
   and are now registered via both window.ECONOS_DIAGRAMS and
   window.ECONOS_ICONS by those files.
   ============================================================ */

window.ECONOS_ICONS = {
${keptEntries}
};
`;

writeFileSync(iconsPath, newIconsContent, 'utf8');
console.log(`\nRewritten js/icons.js with ${keepKeys.length} kept keys.`);

// ---------------------------------------------------------------------------
// 5. Write report
// ---------------------------------------------------------------------------

const report = {
  movedCount: moveKeys.length,
  keptCount: keepKeys.length,
  groups: groups,
  movedKeys: moveKeys,
  uncertainKept,
};

const reportPath = join(repoRoot, 'scripts', 'split-report.json');
writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
console.log(`Report written to ${reportPath}`);

console.log('\nDone. Run: node --check js/icons.js && node --check on static files.');
