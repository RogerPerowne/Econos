/* ============================================================
   TopicLoader.buildUrl PAGE_MAP unit-ish tests
   ─────────────────────────────────────────────────────────────
   Validates every legacy filename rewrites to the expected shell
   + station. Runs the loader inside a thin HTML page rather than
   stubbing it in Node, so it exercises the real script as deployed.
   ============================================================ */

import { test, expect } from '@playwright/test';

test('PAGE_MAP rewrites legacy filenames to shell URLs', async ({ page }) => {
  await page.addInitScript(() => {
    try { localStorage.setItem('econosAuth', '1'); } catch (e) {}
  });
  await page.goto('/learn?topic=inflation');
  /* Wait for TopicLoader to be on window. */
  await page.waitForFunction(() => typeof window.TopicLoader === 'object', null, { timeout: 5000 });

  const cases = {
    'topic.html':           '/learn?topic=inflation',
    'link_intro.html':      '/link?topic=inflation&station=intro',
    'link_context.html':    '/link?topic=inflation&station=context',
    'link_chain.html':      '/link?topic=inflation&station=chain',
    'link_chain_open.html': '/link?topic=inflation&station=chain_open',
    'link_diagram.html':    '/link?topic=inflation&station=diagram',
    'link_depends.html':    '/link?topic=inflation&station=depends',
    'link_judge.html':      '/link?topic=inflation&station=judge',
    'link_complete.html':   '/link?topic=inflation&station=complete',
    'land_intro.html':      '/land?topic=inflation&station=intro',
    'land_section_a.html':  '/land?topic=inflation&station=a',
    'land_section_b.html':  '/land?topic=inflation&station=b',
    'land_section_c.html':  '/land?topic=inflation&station=c',
    'land_complete.html':   '/land?topic=inflation&station=complete'
  };

  for (const [legacy, expected] of Object.entries(cases)) {
    const got = await page.evaluate((l) => TopicLoader.buildUrl(l), legacy);
    expect(got, `buildUrl('${legacy}')`).toBe(expected);
  }
});

test('passthrough for known shells', async ({ page }) => {
  await page.addInitScript(() => {
    try { localStorage.setItem('econosAuth', '1'); } catch (e) {}
  });
  await page.goto('/learn?topic=demand');
  await page.waitForFunction(() => typeof window.TopicLoader === 'object', null, { timeout: 5000 });

  const cases = {
    'learn.html': '/learn?topic=demand',
    'link.html':  '/link?topic=demand',
    'land.html':  '/land?topic=demand',
    'quiz.html':  '/quiz?topic=demand',
    'index.html': '/?topic=demand'
  };
  for (const [src, expected] of Object.entries(cases)) {
    const got = await page.evaluate((s) => TopicLoader.buildUrl(s), src);
    expect(got, `buildUrl('${src}')`).toBe(expected);
  }
});
