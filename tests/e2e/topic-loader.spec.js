/* ============================================================
   TopicLoader.routes + path parsing tests
   ─────────────────────────────────────────────────────────────
   Validates the canonical URL builders emit the path-based form
   and that parsePath round-trips them back to the right
   { shell, topic, station } shape. Runs the loader inside a
   thin HTML page rather than stubbing it in Node, so it
   exercises the real script as deployed.
   ============================================================ */

import { test, expect } from '@playwright/test';

async function boot(page, url) {
  await page.addInitScript(() => {
    try { localStorage.setItem('econosAuth', '1'); } catch (e) {}
  });
  await page.goto(url);
  await page.waitForFunction(() => typeof window.TopicLoader === 'object', null, { timeout: 5000 });
}

test('routes emit path-based URLs with hyphenated slugs', async ({ page }) => {
  await boot(page, '/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it');

  const cases = await page.evaluate(() => {
    const T = window.TopicLoader;
    return {
      home:      T.routes.home(),
      learn:     T.routes.learn(),
      learnArg:  T.routes.learn('positive-externalities'),
      linkDef:   T.routes.link('intro'),
      linkOpen:  T.routes.link('chain-open'),
      land:      T.routes.land('a')
    };
  });

  expect(cases.home).toBe('/');
  expect(cases.learn).toBe('/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it');
  expect(cases.learnArg).toBe('/edexcel_a/theme-1/positive-externalities/learn-it');
  /* `routes.link('intro')` collapses to the bare URL — `intro` is
     the cover view, addressed by the BARE shell URL, not a
     distinct sub-route. */
  expect(cases.linkDef).toBe('/edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it');
  expect(cases.linkOpen).toBe('/edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it/chain-open');
  expect(cases.land).toBe('/edexcel_a/theme-2/causes-of-inflation-and-deflation/land-it/a');
});

test('parsePath round-trips canonical URLs', async ({ page }) => {
  await boot(page, '/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it');

  const cases = await page.evaluate(() => {
    const p = window.TopicLoader.parsePath;
    return {
      home:   p('/'),
      learn:  p('/edexcel_a/theme-2/causes-of-inflation-and-deflation/learn-it'),
      link:   p('/edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it/chain'),
      open:   p('/edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it/chain-open'),
      land:   p('/edexcel_a/theme-2/causes-of-inflation-and-deflation/land-it/a'),
      quiz:   p('/quiz/causes-of-inflation-and-deflation/main'),
      slug:   p('/edexcel_a/theme-1/positive-externalities/learn-it'),
      bogus:  p('/some/random/path')
    };
  });

  expect(cases.home).toEqual({ shell: 'home' });
  expect(cases.learn).toMatchObject({ shell: 'learn', topic: 'causes-of-inflation-and-deflation' });
  expect(cases.link).toMatchObject({ shell: 'link', topic: 'causes-of-inflation-and-deflation', station: 'chain' });
  expect(cases.open).toMatchObject({ shell: 'link', topic: 'causes-of-inflation-and-deflation', station: 'chain-open' });
  expect(cases.land).toMatchObject({ shell: 'land', topic: 'causes-of-inflation-and-deflation', station: 'a' });
  /* /quiz/ contract retired in v0.4.0 — parsePath returns null. */
  expect(cases.quiz).toBeNull();
  expect(cases.slug).toMatchObject({ shell: 'learn', topic: 'positive-externalities' });
  expect(cases.bogus).toBeNull();
});

test('getTopic / getStation read the current pathname', async ({ page }) => {
  await boot(page, '/edexcel_a/theme-2/causes-of-inflation-and-deflation/link-it/chain-open');
  const state = await page.evaluate(() => ({
    topic:   window.TopicLoader.getTopic(),
    station: window.TopicLoader.getStation(),
    shell:   window.TopicLoader.getShell()
  }));
  expect(state).toEqual({ topic: 'causes-of-inflation-and-deflation', station: 'chain-open', shell: 'link' });
});
