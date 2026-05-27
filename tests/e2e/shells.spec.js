/* ============================================================
   Shell smoke tests
   ─────────────────────────────────────────────────────────────
   Verify the four canonical pages render their key chrome
   elements for an example topic (inflation). Catches regressions
   in routing, Shell.renderStages, mobile-nav injection, etc.

   All URLs are the path-based canonical form: /learn/inflation,
   /link/inflation/chain, etc. The Vite preview server's
   topic-routes middleware rewrites these to the right base shell
   transparently.
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

test.describe('Home page', () => {
  test('index renders topic grid with path-based shell links', async ({ page }) => {
    await login(page);
    await page.goto('/');

    await expect(page).toHaveTitle(/econos/i);

    const hrefs = await page.$$eval('a[href]', as =>
      as.map(a => a.getAttribute('href') || ''));
    /* Topic cards must use path form: /learn/<topic-slug>. */
    const learnLinks = hrefs.filter(h => /^\/learn\/[a-z0-9-]+/.test(h));
    expect(learnLinks.length).toBeGreaterThan(0);
    /* And not the old query-string form or .html extension. */
    expect(hrefs.some(h => /\?topic=/.test(h))).toBe(false);
    expect(hrefs.some(h => /\.html(\?|#|$)/.test(h))).toBe(false);
    /* And no legacy per-section filenames anywhere. */
    expect(hrefs.some(h => /topic\.html|link_\w+\.html|land_\w+\.html/.test(h)))
      .toBe(false);
  });
});

test.describe('Learn It shell', () => {
  test('inflation renders chrome + stage widget', async ({ page }) => {
    await login(page);
    await page.goto('/learn/inflation');

    await expect(page).toHaveTitle(/Learn It · Econos/i);

    const skip = page.locator('a.skip-link');
    await expect(skip).toHaveCount(1);

    await expect(page.locator('.mobile-nav')).toHaveCount(1);

    const stages = page.locator('.stages .stage');
    await expect(stages).toHaveCount(3);
    await expect(stages.nth(0)).toHaveAttribute('data-stage-pos', '1');
    await expect(stages.nth(1)).toHaveAttribute('data-stage-pos', '2');
    await expect(stages.nth(2)).toHaveAttribute('data-stage-pos', '3');

    /* On the intro/cover card, Learn It shows as 'available' (not yet
       started, not current) — the user hasn't clicked Start Session. */
    await expect(stages.nth(0)).toHaveClass(/is-available/);
  });
});

test.describe('Link It shell', () => {
  test('intro deep-links + chain station shows amber theme', async ({ page }) => {
    await login(page);
    await page.goto('/link/inflation/intro');
    await expect(page).toHaveTitle(/Link it · Intro/i);
    await expect(page.locator('.app.theme--link')).toHaveCount(1);

    await page.goto('/link/inflation/chain');
    await expect(page).toHaveTitle(/Link it · Chain/i);
    await expect(page.locator('.app.theme--link')).toHaveCount(1);
  });

  test('unknown station shows friendly not-found', async ({ page }) => {
    await login(page);
    await page.goto('/link/inflation/nope');
    await expect(page.locator('text=Station not found')).toBeVisible();
  });
});

test.describe('Land It shell', () => {
  test('intro station renders + rose theme', async ({ page }) => {
    await login(page);
    await page.goto('/land/inflation/intro');
    await expect(page).toHaveTitle(/Land it · Intro/i);
    await expect(page.locator('.app.theme--land')).toHaveCount(1);

    const current = page.locator('.stages .stage.is-current');
    await expect(current).toHaveAttribute('data-stage-pos', '3');
  });
});

test.describe('Legacy query-string URLs', () => {
  test('inbound ?topic=… is rewritten to the canonical path', async ({ page }) => {
    await login(page);
    await page.goto('/learn?topic=inflation');
    /* TopicLoader's boot-time redirect rewrites the URL. Wait for it. */
    await page.waitForFunction(() => location.pathname === '/learn/inflation', null, { timeout: 5000 });
    expect(new URL(page.url()).pathname).toBe('/learn/inflation');
  });
});

test.describe('Accessibility — keyboard navigation', () => {
  test('Tab reveals skip-link first on the learn shell', async ({ page }) => {
    await login(page);
    await page.goto('/learn/inflation');
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement &&
      (document.activeElement.className || '') + '|' +
      (document.activeElement.textContent || '').trim());
    expect(focused).toContain('skip-link');
  });
});
