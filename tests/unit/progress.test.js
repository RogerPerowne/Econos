/* ============================================================
   progress.js — Progress.* unit tests
   ─────────────────────────────────────────────────────────────
   Progress tracks per-topic unlock state in localStorage. The
   contract (from js/progress.js):

     • getLink/LandUnlocked() returns the integer count, or
       falls back to the legacy global key, then -1.
     • setLink/LandUnlocked(n) writes the per-topic key only;
       legacy writes are intentionally not performed.
     • markStation(stage, station) records a timestamp in a
       JSON-encoded map under `econos:<topic>:visited_<stage>`.
     • All readers/writers swallow localStorage errors and
       return falsy defaults — never throw.

   Tests run under jsdom so window.localStorage exists. The
   topic-loader sources are eval'd first so Progress's
   currentTopic() lookup resolves.
   ============================================================ */

import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

function loadLoaderAndProgress(initialPath) {
  /* Fresh scope each test — eval the loader + Progress into a
     clean jsdom window so localStorage state from a previous
     test never leaks. */
  window.history.replaceState(null, '', initialPath);
  delete window.TopicLoader;
  delete window.Progress;
  for (const file of ['js/topic-loader.js', 'js/progress.js']) {
    const src = readFileSync(resolve(process.cwd(), file), 'utf8');
    // eslint-disable-next-line no-new-func
    new Function(src)();
  }
}

describe('Progress.getLinkUnlocked / setLinkUnlocked', () => {
  beforeEach(() => {
    window.localStorage.clear();
    loadLoaderAndProgress('/learn/inflation');
  });

  it('returns -1 before anything is set (no legacy fallback)', () => {
    expect(window.Progress.getLinkUnlocked()).toBe(-1);
  });

  it('falls back to the legacy econos_link_unlocked global key', () => {
    window.localStorage.setItem('econos_link_unlocked', '4');
    expect(window.Progress.getLinkUnlocked()).toBe(4);
  });

  it('prefers the per-topic key over the legacy global', () => {
    window.localStorage.setItem('econos_link_unlocked', '4');
    window.Progress.setLinkUnlocked(7);
    expect(window.Progress.getLinkUnlocked()).toBe(7);
    expect(window.localStorage.getItem('econos:inflation:link_unlocked')).toBe('7');
  });

  it('isolates state across topics', () => {
    loadLoaderAndProgress('/learn/inflation');
    window.Progress.setLinkUnlocked(3);

    loadLoaderAndProgress('/learn/demand');
    expect(window.Progress.getLinkUnlocked()).toBe(-1);
    window.Progress.setLinkUnlocked(5);

    loadLoaderAndProgress('/learn/inflation');
    expect(window.Progress.getLinkUnlocked()).toBe(3);
  });
});

describe('Progress.markStation / hasVisited', () => {
  beforeEach(() => {
    window.localStorage.clear();
    loadLoaderAndProgress('/link/inflation/chain');
  });

  it('records a visit and reads it back', () => {
    expect(window.Progress.hasVisited('link', 'chain')).toBe(false);
    window.Progress.markStation('link', 'chain');
    expect(window.Progress.hasVisited('link', 'chain')).toBe(true);
  });

  it('tracks multiple stations under the same stage', () => {
    window.Progress.markStation('link', 'chain');
    window.Progress.markStation('link', 'diagram');
    expect(window.Progress.hasVisited('link', 'chain')).toBe(true);
    expect(window.Progress.hasVisited('link', 'diagram')).toBe(true);
    expect(window.Progress.hasVisited('link', 'judge')).toBe(false);
  });

  it('keeps link and land visit maps separate', () => {
    window.Progress.markStation('link', 'chain');
    expect(window.Progress.hasVisited('link', 'chain')).toBe(true);
    expect(window.Progress.hasVisited('land', 'chain')).toBe(false);
  });

  it('survives corrupted JSON in the visited map (returns false, does not throw)', () => {
    window.localStorage.setItem('econos:inflation:visited_link', 'NOT JSON');
    expect(() => window.Progress.hasVisited('link', 'chain')).not.toThrow();
    expect(window.Progress.hasVisited('link', 'chain')).toBe(false);
  });
});
