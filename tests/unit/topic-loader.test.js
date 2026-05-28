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

  it('rejects retired /quiz/ paths — Quiz shell was removed in v0.4.0', () => {
    /* The standalone /quiz/<topic>/<set> URL contract is gone; quiz
       pools now live inside learn.js. parsePath returns null so the
       SPA falls through to the not-found path. */
    expect(TopicLoader.parsePath('/quiz/inflation/main')).toBeNull();
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
