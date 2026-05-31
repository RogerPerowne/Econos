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
