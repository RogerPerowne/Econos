#!/usr/bin/env node
// One-off: strip Edexcel A learn-it.js to cover-only placeholders for the
// topics that come after macroeconomic-objectives-and-trade-offs (#40) in
// the homepage order. Re-read topic metadata (id/topicNum/theme/title)
// from each file before overwriting so the cover keeps its identity.
import { readFileSync, writeFileSync, existsSync } from 'fs';

const TO_STRIP = [
  // Theme 2 (after #40)
  ['theme-2','demand-side-policies-fiscal'],
  ['theme-2','demand-side-policies-monetary'],
  ['theme-2','supply-side-policies'],
  ['theme-2','macro-conflicts-and-trade-offs'],
  ['theme-2','standard-of-living-and-wellbeing'],
  // Theme 3
  ['theme-3','business-growth'],
  ['theme-3','business-objectives'],
  ['theme-3','revenue'],
  ['theme-3','costs'],
  ['theme-3','economies-and-diseconomies-of-scale'],
  ['theme-3','profits-and-losses'],
  ['theme-3','types-of-efficiency'],
  ['theme-3','perfect-competition'],
  ['theme-3','monopolistic-competition'],
  ['theme-3','oligopoly'],
  ['theme-3','collusion-and-cartels'],
  ['theme-3','game-theory'],
  ['theme-3','monopoly'],
  ['theme-3','monopsony'],
  ['theme-3','contestable-markets'],
  ['theme-3','demand-for-labour'],
  ['theme-3','supply-of-labour'],
  ['theme-3','wage-determination'],
  ['theme-3','government-intervention'],
  // Theme 4
  ['theme-4','globalisation'],
  ['theme-4','specialisation-and-trade'],
  ['theme-4','trading-blocs-and-wto'],
  ['theme-4','restrictions-on-free-trade'],
  ['theme-4','balance-of-payments'],
  ['theme-4','exchange-rates'],
  ['theme-4','international-competitiveness'],
  ['theme-4','absolute-and-relative-poverty'],
  ['theme-4','inequality'],
  ['theme-4','measures-of-development'],
  ['theme-4','factors-influencing-growth-and-development'],
  ['theme-4','strategies-influencing-growth-and-development'],
  ['theme-4','role-of-financial-markets'],
  ['theme-4','market-failure-in-the-financial-sector'],
  ['theme-4','role-of-central-banks'],
  ['theme-4','public-expenditure'],
  ['theme-4','taxation'],
  ['theme-4','public-sector-finances'],
  ['theme-4','macroeconomic-policies-in-a-global-context']
];

const grab = (src, key) => {
  const m = src.match(new RegExp(`${key}\\s*:\\s*['"\`]([^'"\`]+)['"\`]`));
  return m ? m[1] : null;
};

let stripped = 0, skipped = 0;
for (const [theme, slug] of TO_STRIP) {
  const path = `js/data/edexcel_a/${theme}/${slug}/learn-it.js`;
  if (!existsSync(path)) { console.log(`SKIP (missing): ${path}`); skipped++; continue; }
  const src = readFileSync(path, 'utf8');
  if (src.includes('PLACEHOLDER')) { console.log(`SKIP (already placeholder): ${slug}`); skipped++; continue; }
  const id       = grab(src,'id')       || slug;
  const topicNum = grab(src,'topicNum') || '';
  const themeStr = grab(src,'theme')    || 'Theme — coming soon';
  const title    = grab(src,'title')    || slug;
  const placeholder = `/* PLACEHOLDER — Learn It content not yet rebuilt for this topic.
   The cover view (intro) renders normally; clicking Start session
   no-ops because cards is empty. Replaced from the previous content
   on 2026-05-30 to remove pre-mockup-pipeline material that hadn't
   been reviewed. Replace this file with a full ad-interactive build
   once the topic is run through the ChatGPT → Claude mockup pipeline
   (see docs/DISPATCH_BRIEF.md).
*/
window.ECONOS_TOPIC = {
  id:          ${JSON.stringify(id)},
  topicNum:    ${JSON.stringify(topicNum)},
  theme:       ${JSON.stringify(themeStr)},
  title:       ${JSON.stringify(title)},
  estTime:     '—',
  goal:        'Coming soon.',
  intro: {
    summary:  ${JSON.stringify(title + ' — full Learn It content is in production.')},
    doInThis: 'Check back soon. This topic will be rebuilt using the same design system as the topics already shipped on this board.',
    outcomes: [],
    tip:      'Browse a finished topic in the meantime to see the design language this one will follow.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Coming soon', state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Coming soon', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Coming soon', state: 'locked' }
    ]
  },
  cards: []
};
`;
  writeFileSync(path, placeholder);
  console.log(`STRIPPED: ${slug}`);
  stripped++;
}
console.log(`\nDone. Stripped: ${stripped}, skipped: ${skipped}, total: ${TO_STRIP.length}`);
