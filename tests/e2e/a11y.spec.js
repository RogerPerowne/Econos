/* ============================================================
   Accessibility regression tests
   ─────────────────────────────────────────────────────────────
   axe-core runs on each canonical page. Violations of WCAG 2.1
   A/AA fail the build. New rules can be added in the `rules`
   array below if a third-party widget produces unavoidable noise.

   Run locally: npm run test:e2e -- a11y
   ============================================================ */

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

async function login(page) {
  await page.addInitScript(() => {
    try {
      localStorage.setItem('econosAuth', '1');
      localStorage.setItem('econos_link_unlocked', '5');
      localStorage.setItem('econos_land_unlocked', '5');
    } catch (e) {}
  });
}

async function assertAxeClean(page, label) {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'best-practice'])
    .disableRules([
      /* "All page content should be contained by landmarks" — fails
         on skip-link + mobile-nav at top of body. The skip-link is
         a deliberate top-level escape hatch; mobile-nav IS a nav
         landmark. Best-practice noise, not a real bug. */
      'region'
    ])
    /* WCAG 1.4.3 explicitly exempts disabled controls from
       colour-contrast requirements; axe doesn't know that. */
    .exclude('.is-disabled')
    .exclude('[disabled]')
    .analyze();
  if (results.violations.length) {
    console.log(`\nAxe violations on ${label}:`);
    for (const v of results.violations) {
      console.log(`  [${v.impact}] ${v.id}: ${v.help}`);
      for (const n of v.nodes.slice(0, 3)) {
        console.log(`    - ${n.target.join(' ')}`);
      }
    }
  }
  expect(results.violations, `axe violations on ${label}`).toEqual([]);
}

test('home page is accessible', async ({ page }) => {
  await login(page);
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await assertAxeClean(page, '/');
});

test('Learn It shell is accessible', async ({ page }) => {
  await login(page);
  await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it');
  /* Wait for the engine to paint #main-content, then for the
     interactive-widget init RAF to settle. */
  await page.waitForSelector('#main-content', { state: 'attached' });
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
  await assertAxeClean(page, '/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it');
});

test('Link It intro is accessible', async ({ page }) => {
  await login(page);
  await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it/intro');
  // Wait for the intro engine to paint its first card — the h1 lives
  // inside `.intro-card`. Without this, axe runs before the SPA's
  // boot completes and fails `page-has-heading-one` spuriously.
  await page.waitForSelector('.intro-card', { state: 'attached', timeout: 10_000 });
  await page.waitForLoadState('networkidle');
  await assertAxeClean(page, '/edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it/intro');
});

test('Land It intro is accessible', async ({ page }) => {
  await login(page);
  await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/land-it/intro');
  // Same wait pattern as the Link It test — `.intro-card` is the
  // first SPA-rendered element that contains the h1.
  await page.waitForSelector('.intro-card', { state: 'attached', timeout: 10_000 });
  await page.waitForLoadState('networkidle');
  await assertAxeClean(page, '/edexcel_a/theme-2/causes-of-inflation-and-deflation/land-it/intro');
});

/* Hand-rolled art SVGs carry no native accessible name, so app.js wraps each
   content visual in a role="img" + aria-label container (and engine charts
   keep their own role="img" + aria-labelledby). The topic-cover hero is
   decorative — the <h1> already names the topic — so it's aria-hidden.
   These tests lock that contract in. */
test('topic-cover hero is marked decorative', async ({ page }) => {
  await login(page);
  await page.goto('/edexcel_a/theme-3/perfect-competition/learn-it');
  await page.waitForSelector('#main-content', { state: 'attached' });
  await page.waitForLoadState('networkidle');
  const hero = page.locator('.illust-bars').first();
  await expect(hero).toHaveAttribute('aria-hidden', 'true');
});

test('content visuals expose an accessible name', async ({ page }) => {
  await login(page);
  // Card 1 carries two hand-rolled visuals (market hub + market spectrum).
  await page.goto('/edexcel_a/theme-3/perfect-competition/learn-it/perfect-competition-the-big-picture');
  await page.waitForSelector('#main-content', { state: 'attached' });
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
  // Every role="img" inside the content area must have a non-empty name
  // (aria-label for hand-rolled wrappers, aria-labelledby for engine charts).
  const unnamed = await page.$$eval('#main-content [role="img"]', (els) =>
    els
      .filter((el) => {
        const label = (el.getAttribute('aria-label') || '').trim();
        const ref = el.getAttribute('aria-labelledby');
        return !label && !ref;
      })
      .map((el) => el.outerHTML.slice(0, 80))
  );
  expect(unnamed, `role="img" elements with no accessible name: ${JSON.stringify(unnamed)}`).toEqual([]);
  // And the two hand-rolled wrappers are actually present + labelled.
  const names = await page.$$eval('#main-content [role="img"][aria-label]', (els) =>
    els.map((el) => el.getAttribute('aria-label').trim()).filter(Boolean)
  );
  expect(names.length).toBeGreaterThanOrEqual(2);
});

/* Content + post-interaction states. The tests above only cover the
   covers/intros; these scan a content-heavy Learn card AND the revealed /
   stepped states of the interactive widgets — where muted-grey caption
   text and inactive-pill contrast actually live, and where a code-minifier
   or inline style can quietly drop a colour below AA. */
test('Worked-example card is accessible with every step revealed', async ({ page }) => {
  await login(page);
  await page.goto('/edexcel_a/theme-2/national-income-and-the-multiplier/learn-it/worked-example-calculating-the-multiplier-effect');
  await page.waitForSelector('#main-content .we-step', { state: 'attached', timeout: 10_000 });
  await page.waitForLoadState('networkidle');
  // Reveal every step so the answer panels (and unlocked conclusion) are scanned.
  const buttons = page.locator('[data-action="we-reveal"]');
  const n = await buttons.count();
  for (let i = 0; i < n; i++) await buttons.nth(i).click();
  await page.waitForTimeout(300);
  await assertAxeClean(page, 'multiplier worked-example (all steps revealed)');
});

test('Interactive-diagram card is accessible when stepped through', async ({ page }) => {
  await login(page);
  await page.goto('/edexcel_a/theme-2/national-income-and-the-multiplier/learn-it/the-multiplier-in-action');
  await page.waitForSelector('#main-content [data-id-root]', { state: 'attached', timeout: 10_000 });
  await page.waitForLoadState('networkidle');
  // Advance every step so later views, the active step pill and the
  // analysis panels are all in the DOM when axe runs.
  const steps = page.locator('[data-action="id-advance"]');
  const n = await steps.count();
  for (let i = 0; i < n; i++) { await steps.nth(i).click(); await page.waitForTimeout(120); }
  await page.waitForTimeout(200);
  await assertAxeClean(page, 'multiplier interactive-diagram (stepped)');
});
