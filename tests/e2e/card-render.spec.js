/* ============================================================
   Card render integrity tests
   ─────────────────────────────────────────────────────────────
   The most complex card renderers (the four elasticity
   calculators, the worked-example chain, the stepped
   interactive-diagram) build their HTML inline in app.js and had
   no test coverage. Rather than brittle full-HTML snapshots —
   which would break on every copy edit — these assert behavioural
   INVARIANTS that survive content edits but catch real breakage:

     • no template placeholder leaks into the rendered text
       ("undefined", "NaN", "[object Object]") — the class of bug
       behind the framing-card missing-lede and the \n-in-HTML fixes;
     • no uncaught page errors or console errors while rendering
       AND while stepping through every revealed state.

   Runs against the minified preview build (see playwright.config),
   so it also guards against a minify-induced regression.
   ============================================================ */

import { test, expect } from '@playwright/test';

async function login(page) {
  await page.addInitScript(() => {
    try { localStorage.setItem('econosAuth', '1'); } catch (e) {}
  });
}

/* One representative card per complex / previously-untested renderer. */
const CARDS = [
  ['PED calculator',        '/edexcel_a/theme-1/price-elasticity-of-demand/learn-it/calculating-ped-step-by-step'],
  ['PES calculator',        '/edexcel_a/theme-1/price-elasticity-of-supply/learn-it/worked-example-calculating-pes'],
  ['YED calculator',        '/edexcel_a/theme-1/income-and-cross-price-elasticity/learn-it/worked-example-calculating-yed'],
  ['XED calculator',        '/edexcel_a/theme-1/income-and-cross-price-elasticity/learn-it/worked-example-calculating-xed'],
  ['Worked-example chain',  '/edexcel_a/theme-2/national-income-and-the-multiplier/learn-it/worked-example-calculating-the-multiplier-effect'],
  ['Interactive diagram',   '/edexcel_a/theme-2/national-income-and-the-multiplier/learn-it/the-multiplier-in-action'],
  ['Framing / keyTerms card', '/edexcel_a/misc/barriers-to-entry/learn-it/network-effects-as-entry-barriers']
];

/* Reveal/step actions across the templates under test. Navigation
   actions (back, card-idx) are deliberately excluded so the card
   under test stays put. */
const REVEAL_ACTIONS = ['ped-solve', 'we-reveal', 'reveal-cell', 'id-advance', 'ad-step', 'reveal-scenario', 'reveal-cliffhanger'];
const SENTINELS = ['undefined', 'NaN', '[object Object]'];

/* Browser noise that isn't an app bug. The frame-ancestors CSP
   directive is intentionally shipped via <meta> (no server headers on
   GitHub Pages); Chromium logs that it ignores it there. Not our code. */
const IGNORE_CONSOLE = [/frame-ancestors' is ignored/i];

for (const [name, url] of CARDS) {
  test(`${name} renders without leaked placeholders or errors`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
    page.on('console', (m) => {
      if (m.type() === 'error' && !IGNORE_CONSOLE.some((re) => re.test(m.text()))) {
        errors.push(`console: ${m.text()}`);
      }
    });

    await login(page);
    await page.goto(url);
    await page.waitForSelector('#main-content', { state: 'attached' });
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(400);

    // Reveal every interactive state so hidden panels are scanned too.
    const sel = REVEAL_ACTIONS.map((a) => `#main-content [data-action="${a}"]`).join(',');
    const buttons = page.locator(sel);
    const n = await buttons.count();
    for (let i = 0; i < n; i++) {
      const b = buttons.nth(i);
      if (await b.isVisible().catch(() => false)) {
        await b.click({ timeout: 2000 }).catch(() => {});
      }
    }
    await page.waitForTimeout(200);

    const text = await page.locator('#main-content').innerText();
    for (const s of SENTINELS) {
      expect(text, `${name}: leaked "${s}" in rendered text`).not.toContain(s);
    }
    expect(errors, `${name}: console/page errors during render + interaction`).toEqual([]);
  });
}
