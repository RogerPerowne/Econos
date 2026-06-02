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
  /* The board registry must exist BEFORE parsePath runs — the
     v0.6.0 path scheme validates the board id against
     window.ECONOS_BOARDS. Stuff it on first. */
  window.ECONOS_BOARDS = {
    edexcel_a: { id: 'edexcel_a', name: 'Edexcel A', isDefault: true },
    edexcel_b: { id: 'edexcel_b', name: 'Edexcel B' },
    aqa:       { id: 'aqa',       name: 'AQA' },
    ocr:       { id: 'ocr',       name: 'OCR' }
  };
  /* Reset jsdom location to a known shell URL so the loader's
     boot-time legacy-redirect doesn't try to replaceState into
     an inert about:blank page. */
  window.history.replaceState(null, '', '/aqa/macro/inflation/learn-it');
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
       beforeAll set the location to /aqa/macro/inflation/learn. */
    expect(TopicLoader.parsePath('')).toMatchObject({
      board: 'aqa', theme: 'macro', topic: 'inflation', shell: 'learn'
    });
    expect(TopicLoader.parsePath()).toMatchObject({
      board: 'aqa', theme: 'macro', topic: 'inflation', shell: 'learn'
    });
  });

  it('parses /<board>/<theme>/<topic>/learn-it', () => {
    expect(TopicLoader.parsePath('/edexcel_a/theme-2/inflation/learn-it')).toMatchObject({
      board: 'edexcel_a', theme: 'theme-2', topic: 'inflation', shell: 'learn'
    });
  });

  it('parses /<board>/<theme>/<topic>/link-it/<station>', () => {
    expect(TopicLoader.parsePath('/aqa/macro/inflation/link-it/chain-open')).toMatchObject({
      board: 'aqa', theme: 'macro', topic: 'inflation', shell: 'link', station: 'chain-open'
    });
  });

  it('parses /<board>/<theme>/<topic>/land-it/<section>', () => {
    expect(TopicLoader.parsePath('/ocr/macro/inflation/land-it/a')).toMatchObject({
      board: 'ocr', theme: 'macro', topic: 'inflation', shell: 'land', station: 'a'
    });
  });

  it('rejects retired /quiz/ paths — Quiz shell was removed in v0.4.0', () => {
    expect(TopicLoader.parsePath('/quiz/inflation/main')).toBeNull();
  });

  it('rejects legacy single-prefix /learn-it/<topic> paths', () => {
    /* v0.5.x URL contract was retired in v0.6.0 — every topic URL
       must now start with a known board id. */
    expect(TopicLoader.parsePath('/learn-it/inflation')).toBeNull();
  });

  it('rejects an unknown board id', () => {
    expect(TopicLoader.parsePath('/wjec/macro/inflation/learn')).toBeNull();
  });

  it('returns null for paths missing required segments', () => {
    expect(TopicLoader.parsePath('/aqa/macro/inflation')).toBeNull();
    expect(TopicLoader.parsePath('/aqa/macro')).toBeNull();
    expect(TopicLoader.parsePath('/aqa')).toBeNull();
  });

  it('strips trailing slash before parsing', () => {
    expect(TopicLoader.parsePath('/aqa/macro/inflation/learn-it/')).toMatchObject({
      board: 'aqa', theme: 'macro', topic: 'inflation', shell: 'learn'
    });
  });
});

describe('TopicLoader exam-board selection', () => {
  /* The board registry is loaded into window before topic-loader.js
     in production via js/config/boards.js. For these tests we
     stuff it onto window first, then re-eval the loader so its
     internal defaultBoard / getBoard pick up the registry. */
  beforeAll(() => {
    window.ECONOS_BOARDS = {
      edexcel_a: { id: 'edexcel_a', name: 'Edexcel A', isDefault: true },
      aqa:       { id: 'aqa',       name: 'AQA' },
      ocr:       { id: 'ocr',       name: 'OCR' }
    };
    /* Reset URL to '/' so getBoard() doesn't read a board from
       the URL (the previous describe block pinned the URL to
       /aqa/...). v0.16+ getBoard prefers a valid board pinned
       in the URL over localStorage. */
    window.history.replaceState(null, '', '/');
    window.localStorage.clear();
    const src = readFileSync(resolve(process.cwd(), 'js/topic-loader.js'), 'utf8');
    // eslint-disable-next-line no-new-func
    new Function(src)();
  });

  it('defaults to the board with isDefault:true', () => {
    window.localStorage.clear();
    expect(window.TopicLoader.getBoard()).toBe('edexcel_a');
    expect(window.TopicLoader.getBoardName()).toBe('Edexcel A');
  });

  it('setBoard persists to localStorage and getBoard reads it back', () => {
    window.localStorage.clear();
    const ok = window.TopicLoader.setBoard('aqa');
    expect(ok).toBe(true);
    expect(window.TopicLoader.getBoard()).toBe('aqa');
    expect(window.TopicLoader.getBoardName()).toBe('AQA');
    expect(window.localStorage.getItem('econos:board')).toBe('aqa');
  });

  it('rejects unknown board ids and leaves selection unchanged', () => {
    window.TopicLoader.setBoard('aqa');
    const ok = window.TopicLoader.setBoard('not-a-real-board');
    expect(ok).toBe(false);
    expect(window.TopicLoader.getBoard()).toBe('aqa');
  });

  it('falls back to default when a stored value is no longer in the registry', () => {
    window.localStorage.setItem('econos:board', 'ccea');
    expect(window.TopicLoader.getBoard()).toBe('edexcel_a');
  });
});

describe('TopicLoader routes — topic-arg honouring', () => {
  /* Regression for the "Next topic" → wrong Learn It bug: the Link It /
     Land It completion footers call routes.learn(null, nextTopicId).
     makeShellRoute used to ignore the 2nd-arg topic whenever the 1st arg
     wasn't a string, so the URL fell back to the CURRENT topic (and 404'd
     when getTopic() didn't resolve). These pin the corrected contract. */
  beforeAll(() => {
    window.ECONOS_BOARDS = {
      edexcel_a: { id: 'edexcel_a', name: 'Edexcel A', isDefault: true }
    };
    window.ECONOS_TOPICS = [
      { id: 'topic-a', name: 'Topic A', boards: { edexcel_a: { spec: '1.1.1', included: true } } },
      { id: 'topic-b', name: 'Topic B', boards: { edexcel_a: { spec: '2.2.2', included: true } } }
    ];
    /* Current topic = topic-a (theme-1). The bug sent next-topic links here. */
    window.history.replaceState(null, '', '/edexcel_a/theme-1/topic-a/learn-it');
    window.localStorage.clear();
    const src = readFileSync(resolve(process.cwd(), 'js/topic-loader.js'), 'utf8');
    // eslint-disable-next-line no-new-func
    new Function(src)();
  });

  it('routes.learn(null, topic) targets the passed topic, not the current one', () => {
    expect(window.TopicLoader.routes.learn(null, 'topic-b'))
      .toBe('/edexcel_a/theme-2/topic-b/learn-it');
  });

  it('routes.learn(undefined, topic) behaves the same', () => {
    expect(window.TopicLoader.routes.learn(undefined, 'topic-b'))
      .toBe('/edexcel_a/theme-2/topic-b/learn-it');
  });

  it('routes.learn() with no args still emits the current topic cover', () => {
    expect(window.TopicLoader.routes.learn())
      .toBe('/edexcel_a/theme-1/topic-a/learn-it');
  });

  it('single topic-id arg and (sub, topic) forms are unaffected', () => {
    expect(window.TopicLoader.routes.learn('topic-b'))
      .toBe('/edexcel_a/theme-2/topic-b/learn-it');
    expect(window.TopicLoader.routes.learn('demand-pull', 'topic-b'))
      .toBe('/edexcel_a/theme-2/topic-b/learn-it/demand-pull');
  });
});
