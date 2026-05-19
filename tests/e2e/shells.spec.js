/* ============================================================
   Shell smoke tests
   ─────────────────────────────────────────────────────────────
   Verify the four canonical pages render their key chrome
   elements for an example topic (inflation). Catches regressions
   in routing, Shell.renderStages, mobile-nav injection, etc.
   ============================================================ */

import { test, expect } from '@playwright/test';

/* Auth gate + progress stubs. Engines guard direct access to
   inner stations (chain, diagram, etc.) and redirect to context
   if Progress.getLinkUnlocked() < N. For tests we pretend everything
   is unlocked so we exercise the actual station code. */
async function login(page) {
  await page.addInitScript(() => {
    try {
      localStorage.setItem('econosAuth', '1');
      localStorage.setItem('econos_link_unlocked', '5'); // past every station
      localStorage.setItem('econos_land_unlocked', '5');
    } catch (e) {}
  });
}

test.describe('Home page', () => {
  test('index renders topic grid + new shell links', async ({ page }) => {
    await login(page);
    await page.goto('/index.html');

    /* Skip-link is mounted by shell.js — but index doesn't load
       shell.js. So we don't expect it on the home page. */
    await expect(page).toHaveTitle(/econos/i);

    /* Topic cards should link to learn / link / land shells, not
       the legacy per-section pages. */
    const hrefs = await page.$$eval('a[href*=".html"]', as =>
      as.map(a => a.getAttribute('href') || ''));
    const onlyShells = hrefs.filter(h => /\.html/.test(h));
    expect(onlyShells.length).toBeGreaterThan(0);
    /* No legacy filenames in the link generators. */
    expect(onlyShells.some(h => /topic\.html|link_\w+\.html|land_\w+\.html/.test(h)))
      .toBe(false);
  });
});

test.describe('Learn It shell', () => {
  test('inflation renders chrome + stage widget', async ({ page }) => {
    await login(page);
    await page.goto('/learn.html?topic=inflation');

    /* Page title set by HTML (router only updates on station-aware shells). */
    await expect(page).toHaveTitle(/Learn It · econos/i);

    /* Skip-link auto-injected by Shell. */
    const skip = page.locator('a.skip-link');
    await expect(skip).toHaveCount(1);

    /* Mobile-nav auto-injected (hidden on desktop via CSS — assert it's
       in the DOM, not visible). */
    await expect(page.locator('.mobile-nav')).toHaveCount(1);

    /* Stage widget with three positions. */
    const stages = page.locator('.stages .stage');
    await expect(stages).toHaveCount(3);
    /* data-stage-pos attributes — required by polish CSS. */
    await expect(stages.nth(0)).toHaveAttribute('data-stage-pos', '1');
    await expect(stages.nth(1)).toHaveAttribute('data-stage-pos', '2');
    await expect(stages.nth(2)).toHaveAttribute('data-stage-pos', '3');

    /* aria-current on the current stage. */
    const current = page.locator('.stages .stage.is-current');
    await expect(current).toHaveAttribute('aria-current', 'step');
  });
});

test.describe('Link It shell', () => {
  test('intro station deep-links + chain station shows amber theme', async ({ page }) => {
    await login(page);
    await page.goto('/link.html?topic=inflation');
    await expect(page).toHaveTitle(/Link it · Intro/i);
    /* Theme class on .app */
    await expect(page.locator('.app.theme--link')).toHaveCount(1);

    /* Deep-link to chain station. */
    await page.goto('/link.html?topic=inflation&station=chain');
    await expect(page).toHaveTitle(/Link it · Chain/i);
    await expect(page.locator('.app.theme--link')).toHaveCount(1);
  });

  test('unknown station shows friendly not-found', async ({ page }) => {
    await login(page);
    await page.goto('/link.html?topic=inflation&station=nope');
    await expect(page.locator('text=Station not found')).toBeVisible();
  });
});

test.describe('Land It shell', () => {
  test('intro station renders + rose theme', async ({ page }) => {
    await login(page);
    await page.goto('/land.html?topic=inflation&station=intro');
    await expect(page).toHaveTitle(/Land it · Intro/i);
    await expect(page.locator('.app.theme--land')).toHaveCount(1);

    /* Stage widget should show Learn=done, Link=done, Land=current. */
    const current = page.locator('.stages .stage.is-current');
    await expect(current).toHaveAttribute('data-stage-pos', '3');
  });
});

test.describe('Legacy redirects', () => {
  test('link_chain.html redirects to link.html?station=chain', async ({ page }) => {
    await login(page);
    await page.goto('/link_chain.html?topic=inflation');
    await page.waitForURL(/link\.html\?topic=inflation&station=chain/, { timeout: 5000 });
  });

  test('topic.html redirects to learn.html', async ({ page }) => {
    await login(page);
    await page.goto('/topic.html?topic=inflation');
    await page.waitForURL(/learn\.html\?topic=inflation/, { timeout: 5000 });
  });
});

test.describe('Accessibility — keyboard navigation', () => {
  test('Tab reveals skip-link first on the learn shell', async ({ page }) => {
    await login(page);
    await page.goto('/learn.html?topic=inflation');
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement &&
      (document.activeElement.className || '') + '|' +
      (document.activeElement.textContent || '').trim());
    expect(focused).toContain('skip-link');
  });
});
