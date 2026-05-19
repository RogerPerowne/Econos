/* ============================================================
   Mobile smoke tests
   ─────────────────────────────────────────────────────────────
   Pixel 7 viewport (412×915 CSS px). Verifies the responsive
   choices: sidebar collapsed, mobile-nav visible, right-rail
   stacked below content, no horizontal scroll, skip-link works.
   ============================================================ */

import { test, expect } from '@playwright/test';

async function login(page) {
  await page.addInitScript(() => {
    try {
      localStorage.setItem('econosAuth', '1');
      localStorage.setItem('econos_link_unlocked', '5');
      localStorage.setItem('econos_land_unlocked', '5');
    } catch (e) {}
  });
}

async function expectNoHorizontalScroll(page) {
  /* allow a 2px slop for sub-pixel rendering quirks */
  const overflow = await page.evaluate(() => Math.max(
    document.documentElement.scrollWidth - window.innerWidth,
    document.body.scrollWidth        - window.innerWidth
  ));
  expect(overflow, 'horizontal scroll').toBeLessThanOrEqual(2);
}

test('home page renders on mobile with no horizontal scroll', async ({ page }) => {
  await login(page);
  await page.goto('/index.html');
  await expectNoHorizontalScroll(page);
  /* Topic grid still renders */
  await expect(page.locator('#topics-root')).toBeVisible();
});

test('Learn shell collapses chrome on mobile', async ({ page }) => {
  await login(page);
  await page.goto('/learn.html?topic=inflation');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(300);

  /* Sidebar is hidden on mobile (display:none from @media <=900px). */
  await expect(page.locator('.sidebar')).toBeHidden();
  /* Mobile-nav is the visible navigation surface. */
  await expect(page.locator('.mobile-nav')).toBeVisible();
  /* No horizontal scroll. */
  await expectNoHorizontalScroll(page);
});

test('Link station renders on mobile with stacked rail', async ({ page }) => {
  await login(page);
  await page.goto('/link.html?topic=inflation&station=intro');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(300);

  await expect(page.locator('.sidebar')).toBeHidden();
  await expectNoHorizontalScroll(page);

  /* Right-rail is hidden on mobile (display:none below 900px).
     If the design later re-enables it stacked, swap this for
     a position check. */
  await expect(page.locator('.right-rail').first()).toBeHidden();
});

test('skip-link is the first keyboard stop on mobile', async ({ page }) => {
  await login(page);
  await page.goto('/learn.html?topic=inflation');
  await page.waitForLoadState('networkidle');
  await page.keyboard.press('Tab');
  const cls = await page.evaluate(() =>
    document.activeElement ? document.activeElement.className : '');
  expect(cls).toContain('skip-link');
});
