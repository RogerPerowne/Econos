/* ============================================================
   ECONOS — Vitest config
   ─────────────────────────────────────────────────────────────
   Unit tests for pure functions that don't need a browser:
     • TopicLoader URL parsing + slug bijection
     • Progress.js localStorage logic (mocked via jsdom)
     • SW activate handler — pure-function refactor in sw.js

   E2E suite still owns shell smoke tests, mobile responsive,
   a11y, account menu, JSON-LD, CSP. Unit lives in tests/unit/.
   ============================================================ */

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/unit/**/*.test.js'],
    environment: 'jsdom',
    globals: false,
    reporters: process.env.CI ? ['github-actions', 'default'] : 'default'
  }
});
