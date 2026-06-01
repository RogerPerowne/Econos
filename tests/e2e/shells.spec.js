/* ============================================================
   Shell smoke tests
   ─────────────────────────────────────────────────────────────
   Verify the four canonical pages render their key chrome
   elements for an example topic (inflation). Catches regressions
   in routing, Shell.renderStages, mobile-nav injection, etc.

   All URLs are the path-based canonical form: /learn-it/<slug>,
   /link-it/<slug>/<station>, etc. The Vite preview server's
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
    /* Topic cards must use the v0.6.0 path form:
       /<board>/<theme>/<topic-slug>/learn */
    const learnLinks = hrefs.filter(h =>
      /^\/(edexcel_a|edexcel_b|aqa|ocr)\/[a-z0-9-]+\/[a-z0-9-]+\/learn-it$/.test(h));
    expect(learnLinks.length).toBeGreaterThan(0);
    /* And no query-string, .html extension, or legacy filenames. */
    expect(hrefs.some(h => /\?topic=/.test(h))).toBe(false);
    expect(hrefs.some(h => /\.html(\?|#|$)/.test(h))).toBe(false);
    expect(hrefs.some(h => /topic\.html|link_\w+\.html|land_\w+\.html/.test(h)))
      .toBe(false);
    /* And no v0.5.x single-prefix URLs either. */
    expect(hrefs.some(h => /^\/(learn|link|land)\//.test(h))).toBe(false);
  });
});

test.describe('Per-topic SEO metadata', () => {
  test('Learn shell ships LearningResource JSON-LD', async ({ page }) => {
    await login(page);
    await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it');
    const ld = await page.evaluate(() => {
      const n = document.querySelector('script[type="application/ld+json"]');
      return n ? JSON.parse(n.textContent) : null;
    });
    expect(ld).toMatchObject({
      '@type': 'LearningResource',
      learningResourceType: 'Concept',
      educationalLevel: 'A-level',
      inLanguage: 'en-GB',
      url: 'https://econos.co.uk/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it'
    });
    expect(ld.name).toMatch(/Causes of Inflation/);
  });

  test('Land section ships AssessmentExercise JSON-LD with Section label', async ({ page }) => {
    await login(page);
    await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/land-it/section-a');
    const ld = await page.evaluate(() => {
      const n = document.querySelector('script[type="application/ld+json"]');
      return n ? JSON.parse(n.textContent) : null;
    });
    expect(ld).toMatchObject({
      '@type': 'LearningResource',
      learningResourceType: 'AssessmentExercise'
    });
    expect(ld.name).toMatch(/Section A/);
  });

  /* /quiz/ standalone shell retired in v0.4.0 — quiz pools now live
     inside learn.js. No Quiz JSON-LD to assert. */
});

test.describe('Per-topic stage availability', () => {
  test('Learn shell locks stages a topic does not have data for', async ({ page }) => {
    /* 'production-possibility-frontiers' ships learn + link but no land
       (per js/topics.js). The build emits a meta tag listing the
       available stages; the runtime stages widget reads it and
       locks the rest. */
    await login(page);
    await page.goto('/edexcel_a/theme-1/production-possibility-frontiers/learn-it');

    const meta = await page.evaluate(() =>
      document.querySelector('meta[name="econos-availability"]')?.getAttribute('content'));
    expect(meta).toBe('learn,link');

    const stages = page.locator('.stages .stage');
    /* Position 1 = Learn (current), 2 = Link (open/available), 3 = Land (locked). */
    await expect(stages.nth(2)).toHaveClass(/is-locked/);
    await expect(stages.nth(2)).toHaveAttribute('title', /Coming soon/);
    /* The mobile-stages strip mirrors the same state. */
    const mobile = page.locator('.mobile-stages .mobile-stages__item');
    await expect(mobile.nth(2)).toHaveClass(/is-locked/);
    await expect(mobile.nth(2)).toHaveAttribute('title', /Coming soon/);
  });
});

test.describe('Content Security Policy', () => {
  /* Lock in the script-src 'unsafe-inline' removal on the protected
     shells. The home page + articles still ship looser CSPs because
     their inline <script> blocks haven't been externalised yet. */
  const TIGHTENED = [
    '/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it',
    '/edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it/intro',
    '/edexcel_a/theme-2/causes-of-inflation-and-deflation/land-it/intro',
    '/login'
  ];
  for (const path of TIGHTENED) {
    test(`${path} ships script-src 'self' (no unsafe-inline)`, async ({ page }) => {
      await login(page);
      await page.goto(path);
      const csp = await page.evaluate(() => {
        const m = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
        return m ? m.getAttribute('content') : null;
      });
      expect(csp).toBeTruthy();
      expect(csp).toContain("script-src 'self';");
      expect(csp).not.toContain("script-src 'self' 'unsafe-inline'");
    });
  }
});

test.describe('Exam-board picker', () => {
  test('picker is in the account menu and selecting a board persists across reload', async ({ page }) => {
    await login(page);
    /* Switch board from inside the Learn It shell. Non-Edexcel-A
       boards ship placeholder learn-it pages for every topic (cover
       view only); switching board navigates to the equivalent
       learn-it page on the new board. */
    await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it/intro');
    await page.waitForLoadState('networkidle');

    /* Open the menu and confirm the four boards render. */
    await page.locator('.topbar__avatar').click();
    const menu = page.locator('#econ-account-menu');
    await expect(menu).toBeVisible();
    const boards = menu.locator('.account-menu__board');
    await expect(boards).toHaveCount(4);

    /* Edexcel A is active by default. */
    const active = menu.locator('.account-menu__board.is-active');
    await expect(active).toHaveAttribute('data-board', 'edexcel_a');

    /* Select AQA — the click navigates to the AQA equivalent URL. */
    await Promise.all([
      page.waitForLoadState('load'),
      menu.locator('.account-menu__board[data-board="aqa"]').click()
    ]);

    /* The URL now begins with /aqa/ and the stored board is AQA. */
    await expect(page).toHaveURL(/^https?:\/\/[^/]+\/aqa\//);
    const stored = await page.evaluate(() => localStorage.getItem('econos:board'));
    expect(stored).toBe('aqa');
    await expect(page.locator('.sidebar__user-board')).toHaveText('AQA');

    /* Reopen the menu — AQA is now the active radio. */
    await page.locator('.topbar__avatar').click();
    await expect(menu.locator('.account-menu__board.is-active')).toHaveAttribute('data-board', 'aqa');
  });
});

test.describe('Account menu', () => {
  test('topbar avatar opens the menu and Escape closes it', async ({ page }) => {
    await login(page);
    await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it/intro');
    await page.waitForLoadState('networkidle');

    const trigger = page.locator('.topbar__avatar');
    const menu    = page.locator('#econ-account-menu');

    await expect(menu).toBeHidden();
    await trigger.click();
    await expect(menu).toBeVisible();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');

    await page.keyboard.press('Escape');
    await expect(menu).toBeHidden();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  test('Log out bounces to /login', async ({ page }) => {
    /* The login() helper uses addInitScript to set econosAuth on every
       page load — so we can't assert the cleared flag here without the
       reload immediately re-setting it. The meaningful contract is the
       redirect to /login; that only fires if the logout handler ran. */
    await login(page);
    await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it/intro');
    await page.waitForLoadState('networkidle');

    await page.locator('.topbar__avatar').click();
    await page.locator('.account-menu__item[data-action="logout"]').click();

    await page.waitForURL((url) => url.pathname === '/login' || url.pathname === '/login.html');
    expect(new URL(page.url()).pathname.replace(/\.html$/, '')).toBe('/login');
  });
});

test.describe('Learn It shell', () => {
  test('inflation renders chrome + stage widget', async ({ page }) => {
    await login(page);
    await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it');

    await expect(page).toHaveTitle(/Learn It · Econos/i);

    const skip = page.locator('a.skip-link');
    await expect(skip).toHaveCount(1);

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
    await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it/intro');
    await expect(page).toHaveTitle(/Link it · Intro/i);
    await expect(page.locator('.app.theme--link')).toHaveCount(1);

    await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it/chain');
    await expect(page).toHaveTitle(/Link it · Chain/i);
    await expect(page.locator('.app.theme--link')).toHaveCount(1);
  });

  test('unknown station shows friendly not-found', async ({ page }) => {
    await login(page);
    await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it/nope');
    await expect(page.locator('text=Station not found')).toBeVisible();
  });
});

test.describe('Land It shell', () => {
  test('intro station renders + rose theme', async ({ page }) => {
    await login(page);
    await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/land-it/intro');
    await expect(page).toHaveTitle(/Land it · Intro/i);
    await expect(page.locator('.app.theme--land')).toHaveCount(1);

    const current = page.locator('.stages .stage.is-current');
    await expect(current).toHaveAttribute('data-stage-pos', '3');
  });
});

test.describe('Accessibility — keyboard navigation', () => {
  test('Tab reveals skip-link first on the learn shell', async ({ page }) => {
    await login(page);
    await page.goto('/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it');
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement &&
      (document.activeElement.className || '') + '|' +
      (document.activeElement.textContent || '').trim());
    expect(focused).toContain('skip-link');
  });
});
