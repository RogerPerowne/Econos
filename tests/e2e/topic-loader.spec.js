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
  await boot(page, '/learn/causes-of-inflation-and-deflation');

  const cases = await page.evaluate(() => {
    const T = window.TopicLoader;
    return {
      home:      T.routes.home(),
      learn:     T.routes.learn(),
      learnArg:  T.routes.learn('positive-externalities'),
      linkDef:   T.routes.link('intro'),
      linkOpen:  T.routes.link('chain-open'),
      land:      T.routes.land('a'),
      quiz:      T.routes.quiz('main'),
      quizSet:   T.routes.quiz('causes', 'causes-of-inflation-and-deflation')
    };
  });

  expect(cases.home).toBe('/');
  expect(cases.learn).toBe('/learn/causes-of-inflation-and-deflation');
  expect(cases.learnArg).toBe('/learn/pos-externalities');
  expect(cases.linkDef).toBe('/link/causes-of-inflation-and-deflation/intro');
  expect(cases.linkOpen).toBe('/link/causes-of-inflation-and-deflation/chain-open');
  expect(cases.land).toBe('/land/causes-of-inflation-and-deflation/a');
  expect(cases.quiz).toBe('/quiz/causes-of-inflation-and-deflation/main');
  expect(cases.quizSet).toBe('/quiz/causes-of-inflation-and-deflation/causes');
});

test('parsePath round-trips canonical URLs', async ({ page }) => {
  await boot(page, '/learn/causes-of-inflation-and-deflation');

  const cases = await page.evaluate(() => {
    const p = window.TopicLoader.parsePath;
    return {
      home:   p('/'),
      learn:  p('/learn/causes-of-inflation-and-deflation'),
      link:   p('/link/causes-of-inflation-and-deflation/chain'),
      open:   p('/link/causes-of-inflation-and-deflation/chain-open'),
      land:   p('/land/causes-of-inflation-and-deflation/a'),
      quiz:   p('/quiz/causes-of-inflation-and-deflation/main'),
      slug:   p('/learn/pos-externalities'),
      bogus:  p('/some/random/path')
    };
  });

  expect(cases.home).toEqual({ shell: 'home' });
  expect(cases.learn).toMatchObject({ shell: 'learn', topic: 'causes-of-inflation-and-deflation' });
  expect(cases.link).toMatchObject({ shell: 'link', topic: 'causes-of-inflation-and-deflation', station: 'chain' });
  expect(cases.open).toMatchObject({ shell: 'link', topic: 'causes-of-inflation-and-deflation', station: 'chain-open' });
  expect(cases.land).toMatchObject({ shell: 'land', topic: 'causes-of-inflation-and-deflation', station: 'a' });
  expect(cases.quiz).toMatchObject({ shell: 'quiz', topic: 'causes-of-inflation-and-deflation', quizSet: 'main' });
  expect(cases.slug).toMatchObject({ shell: 'learn', topic: 'positive-externalities' });
  expect(cases.bogus).toBeNull();
});

test('getTopic / getStation read the current pathname', async ({ page }) => {
  await boot(page, '/link/causes-of-inflation-and-deflation/chain-open');
  const state = await page.evaluate(() => ({
    topic:   window.TopicLoader.getTopic(),
    station: window.TopicLoader.getStation(),
    shell:   window.TopicLoader.getShell()
  }));
  expect(state).toEqual({ topic: 'causes-of-inflation-and-deflation', station: 'chain-open', shell: 'link' });
});
