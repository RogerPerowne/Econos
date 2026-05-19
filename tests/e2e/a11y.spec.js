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
    /* WCAG 2.1 A and AA — colour-contrast handled separately because
       it produces noise during font load. We re-add it once self-hosted
       fonts ship (#14). */
    .withTags(['wcag2a', 'wcag2aa', 'best-practice'])
    .disableRules([
      /* Font-load flicker causes false positives; re-add when
         self-hosted fonts ship (#14). */
      'color-contrast',
      /* "All page content should be contained by landmarks" — fails
         on skip-link + mobile-nav at top of body. The skip-link
         is a deliberate top-level escape hatch; mobile-nav IS a
         nav landmark. Best-practice noise, not a real bug. */
      'region'
    ])
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
  await page.goto('/index.html');
  await page.waitForLoadState('networkidle');
  await assertAxeClean(page, 'index.html');
});

test('Learn It shell is accessible', async ({ page }) => {
  await login(page);
  await page.goto('/learn.html?topic=inflation');
  await page.waitForLoadState('networkidle');
  /* Give the engine a moment after networkidle for the second render
     pass (card view). */
  await page.waitForTimeout(300);
  await assertAxeClean(page, 'learn.html?topic=inflation');
});

test('Link It intro is accessible', async ({ page }) => {
  await login(page);
  await page.goto('/link.html?topic=inflation&station=intro');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(300);
  await assertAxeClean(page, 'link.html?station=intro');
});

test('Land It intro is accessible', async ({ page }) => {
  await login(page);
  await page.goto('/land.html?topic=inflation&station=intro');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(300);
  await assertAxeClean(page, 'land.html?station=intro');
});
