/* ============================================================
   sw.js — activate upgrade behaviour
   ─────────────────────────────────────────────────────────────
   Locks in the reload-on-cache-upgrade contract that was added
   to fix the "unstyled chrome at the top of the page after
   deploy" bug. Without this, a tab loaded mid-deploy runs old
   JS against new CSS until the user manually hard-refreshes.

   The activateUpgrade function is pulled from sw.js by source
   so we don't have to dual-maintain it. sw.js itself can't be
   required directly under the package's `type: "module"` flag
   without renaming, and we don't want to maintain a parallel
   ESM copy of the same function — so just eval the function
   body out of the source string.
   ============================================================ */

import { describe, it, expect, vi, beforeAll } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

let activateUpgrade;

beforeAll(() => {
  const src = readFileSync(resolve(process.cwd(), 'sw.js'), 'utf8');
  /* Match the function declaration through to its closing brace.
     The function lives inside an IIFE in sw.js so its top-level
     indent is 2 spaces — match a closing brace at exactly that
     column so the non-greedy `+?` doesn't terminate at an inner
     block. The signature pattern requires `(` after the name so
     the comment mentioning "activateUpgrade" earlier in the file
     doesn't win. */
  const match = src.match(/async function activateUpgrade\([\s\S]+?\n {2}\}/);
  if (!match) throw new Error('activateUpgrade not found in sw.js');
  // eslint-disable-next-line no-new-func
  activateUpgrade = new Function(match[0] + '; return activateUpgrade;')();
});

function makeCaches(keys) {
  return {
    keys: vi.fn(async () => [...keys]),
    delete: vi.fn(async () => true)
  };
}

function makeClients(openWindows) {
  return {
    claim: vi.fn(async () => {}),
    matchAll: vi.fn(async () => openWindows)
  };
}

describe('activateUpgrade', () => {
  it('reloads every open window when an older cache existed', async () => {
    const navigate = vi.fn(async () => {});
    const cachesApi = makeCaches(['econos-v52', 'econos-current']);
    const clientsApi = makeClients([
      { url: 'https://econos.co.uk/learn-it/inflation', navigate },
      { url: 'https://econos.co.uk/link-it/inflation/chain', navigate }
    ]);

    await activateUpgrade('econos-current', cachesApi, clientsApi);

    expect(cachesApi.delete).toHaveBeenCalledTimes(1);
    expect(cachesApi.delete).toHaveBeenCalledWith('econos-v52');
    expect(clientsApi.claim).toHaveBeenCalledOnce();
    expect(navigate).toHaveBeenCalledTimes(2);
    expect(navigate).toHaveBeenNthCalledWith(1, 'https://econos.co.uk/learn-it/inflation');
    expect(navigate).toHaveBeenNthCalledWith(2, 'https://econos.co.uk/link-it/inflation/chain');
  });

  it('does not reload windows on a first install (no older cache)', async () => {
    const navigate = vi.fn(async () => {});
    const cachesApi = makeCaches(['econos-current']);
    const clientsApi = makeClients([
      { url: 'https://econos.co.uk/', navigate }
    ]);

    await activateUpgrade('econos-current', cachesApi, clientsApi);

    expect(cachesApi.delete).not.toHaveBeenCalled();
    expect(clientsApi.claim).toHaveBeenCalledOnce();
    expect(navigate).not.toHaveBeenCalled();
  });

  it('survives a client whose navigate() rejects (e.g. window closed)', async () => {
    const goodNavigate = vi.fn(async () => {});
    const badNavigate  = vi.fn(async () => { throw new Error('window gone'); });
    const cachesApi = makeCaches(['econos-old', 'econos-current']);
    const clientsApi = makeClients([
      { url: '/a', navigate: badNavigate },
      { url: '/b', navigate: goodNavigate }
    ]);

    /* Should not throw — the per-client .catch in activateUpgrade
       swallows individual navigation failures. */
    await expect(activateUpgrade('econos-current', cachesApi, clientsApi)).resolves.toBeUndefined();
    expect(badNavigate).toHaveBeenCalledOnce();
    expect(goodNavigate).toHaveBeenCalledOnce();
  });

  it('deletes every non-current cache, not just one', async () => {
    const cachesApi = makeCaches(['econos-v50', 'econos-v51', 'econos-v52', 'econos-current']);
    const clientsApi = makeClients([]);

    await activateUpgrade('econos-current', cachesApi, clientsApi);

    expect(cachesApi.delete).toHaveBeenCalledTimes(3);
    expect(cachesApi.delete).toHaveBeenCalledWith('econos-v50');
    expect(cachesApi.delete).toHaveBeenCalledWith('econos-v51');
    expect(cachesApi.delete).toHaveBeenCalledWith('econos-v52');
  });
});
