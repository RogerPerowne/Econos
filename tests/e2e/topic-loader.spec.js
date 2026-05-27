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
  await boot(page, '/learn/inflation');

  const cases = await page.evaluate(() => {
    const T = window.TopicLoader;
    return {
      home:      T.routes.home(),
      learn:     T.routes.learn(),
      learnArg:  T.routes.learn('pos_externalities'),
      linkDef:   T.routes.link('intro'),
      linkOpen:  T.routes.link('chain-open'),
      land:      T.routes.land('a'),
      quiz:      T.routes.quiz('main'),
      quizSet:   T.routes.quiz('causes', 'inflation')
    };
  });

  expect(cases.home).toBe('/');
  expect(cases.learn).toBe('/learn/inflation');
  expect(cases.learnArg).toBe('/learn/pos-externalities');
  expect(cases.linkDef).toBe('/link/inflation/intro');
  expect(cases.linkOpen).toBe('/link/inflation/chain-open');
  expect(cases.land).toBe('/land/inflation/a');
  expect(cases.quiz).toBe('/quiz/inflation/main');
  expect(cases.quizSet).toBe('/quiz/inflation/causes');
});

test('parsePath round-trips canonical URLs', async ({ page }) => {
  await boot(page, '/learn/inflation');

  const cases = await page.evaluate(() => {
    const p = window.TopicLoader.parsePath;
    return {
      home:   p('/'),
      learn:  p('/learn/inflation'),
      link:   p('/link/inflation/chain'),
      open:   p('/link/inflation/chain-open'),
      land:   p('/land/inflation/a'),
      quiz:   p('/quiz/inflation/main'),
      slug:   p('/learn/pos-externalities'),
      bogus:  p('/some/random/path')
    };
  });

  expect(cases.home).toEqual({ shell: 'home' });
  expect(cases.learn).toMatchObject({ shell: 'learn', topic: 'inflation' });
  expect(cases.link).toMatchObject({ shell: 'link', topic: 'inflation', station: 'chain' });
  expect(cases.open).toMatchObject({ shell: 'link', topic: 'inflation', station: 'chain_open' });
  expect(cases.land).toMatchObject({ shell: 'land', topic: 'inflation', station: 'a' });
  expect(cases.quiz).toMatchObject({ shell: 'quiz', topic: 'inflation', quizSet: 'main' });
  expect(cases.slug).toMatchObject({ shell: 'learn', topic: 'pos_externalities' });
  expect(cases.bogus).toBeNull();
});

test('getTopic / getStation read the current pathname', async ({ page }) => {
  await boot(page, '/link/inflation/chain-open');
  const state = await page.evaluate(() => ({
    topic:   window.TopicLoader.getTopic(),
    station: window.TopicLoader.getStation(),
    shell:   window.TopicLoader.getShell()
  }));
  expect(state).toEqual({ topic: 'inflation', station: 'chain_open', shell: 'link' });
});
