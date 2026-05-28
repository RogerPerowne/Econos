/* ============================================================
   topic-loader.js — pure-function unit tests
   ─────────────────────────────────────────────────────────────
   Faster, narrower companion to topic-loader.spec.js (Playwright
   in a real browser). Covers slug bijection and parsePath
   without booting Chromium. Loaded by running the source file
   in a jsdom context.

   The loader is a classic IIFE that publishes window.TopicLoader,
   so we just eval its source into a fresh window. No build step.
   ============================================================ */

import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

let TopicLoader;

beforeAll(() => {
  /* Reset jsdom location to a known shell URL so the loader's
     boot-time legacy-redirect doesn't try to replaceState into
     an inert about:blank page. */
  window.history.replaceState(null, '', '/learn/inflation');
  const src = readFileSync(resolve(process.cwd(), 'js/topic-loader.js'), 'utf8');
  // eslint-disable-next-line no-new-func
  new Function(src)();
  TopicLoader = window.TopicLoader;
});

describe('TopicLoader parsePath', () => {
  it('returns { shell: "home" } for the root path', () => {
    expect(TopicLoader.parsePath('/')).toEqual({ shell: 'home' });
  });

  it('falls back to window.location.pathname when called with no path', () => {
    /* Documented contract: empty / falsy input means "use the current URL".
       beforeAll set the location to /learn/inflation. */
    expect(TopicLoader.parsePath('')).toMatchObject({ shell: 'learn', topic: 'inflation' });
    expect(TopicLoader.parsePath()).toMatchObject({ shell: 'learn', topic: 'inflation' });
  });

  it('parses /learn/<topic>', () => {
    expect(TopicLoader.parsePath('/learn/inflation')).toMatchObject({
      shell: 'learn', topic: 'inflation'
    });
  });

  it('parses /link/<topic>/<station>', () => {
    expect(TopicLoader.parsePath('/link/inflation/chain-open')).toMatchObject({
      shell: 'link', topic: 'inflation', station: 'chain-open'
    });
  });

  it('parses /land/<topic>/<section>', () => {
    expect(TopicLoader.parsePath('/land/inflation/a')).toMatchObject({
      shell: 'land', topic: 'inflation', station: 'a'
    });
  });

  it('parses /quiz/<topic>/<set> into quizSet, not station', () => {
    const r = TopicLoader.parsePath('/quiz/inflation/main');
    expect(r).toMatchObject({ shell: 'quiz', topic: 'inflation', quizSet: 'main' });
    expect(r.station).toBeUndefined();
  });

  it('returns null for unknown shells', () => {
    expect(TopicLoader.parsePath('/something/random/path')).toBeNull();
  });

  it('strips trailing slash before parsing', () => {
    expect(TopicLoader.parsePath('/learn/inflation/')).toMatchObject({
      shell: 'learn', topic: 'inflation'
    });
  });
});
