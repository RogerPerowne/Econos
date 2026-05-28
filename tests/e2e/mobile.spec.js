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
  await page.goto('/');
  await expectNoHorizontalScroll(page);
  /* Topic grid still renders */
  await expect(page.locator('#topics-root')).toBeVisible();
});

test('Learn shell collapses chrome on mobile', async ({ page }) => {
  await login(page);
  await page.goto('/learn/causes-of-inflation-and-deflation');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(300);

  /* Sidebar is hidden on mobile (display:none from @media <=900px). */
  await expect(page.locator('.sidebar')).toBeHidden();
  /* No duplicate top-bar on mobile — the session topbar is the only
     top chrome. The legacy .mobile-nav block was removed. */
  await expect(page.locator('.mobile-nav')).toHaveCount(0);
  await expect(page.locator('.topbar')).toBeVisible();
  await expectNoHorizontalScroll(page);
});

test('mobile stages strip gives Learn/Link/Land jump points', async ({ page }) => {
  await login(page);
  await page.goto('/learn/causes-of-inflation-and-deflation');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(300);

  /* Strip is visible on mobile, sticks directly under the topbar. */
  const strip = page.locator('.mobile-stages');
  await expect(strip).toBeVisible();
  await expect(strip.locator('.mobile-stages__item')).toHaveCount(3);

  /* Learn is the current stage; Link and Land should be reachable links. */
  await expect(strip.locator('.mobile-stages__item.is-current')).toHaveAttribute('data-stage-pos', '1');
  const linkPill = strip.locator('a.mobile-stages__item[data-stage-pos="2"]');
  await expect(linkPill).toHaveAttribute('href', '/link/causes-of-inflation-and-deflation/intro');
});

test('Link station renders on mobile with stacked rail', async ({ page }) => {
  await login(page);
  await page.goto('/link/causes-of-inflation-and-deflation/intro');
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
  await page.goto('/learn/causes-of-inflation-and-deflation');
  await page.waitForLoadState('networkidle');
  await page.keyboard.press('Tab');
  const cls = await page.evaluate(() =>
    document.activeElement ? document.activeElement.className : '');
  expect(cls).toContain('skip-link');
});
