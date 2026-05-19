/* ============================================================
   ECONOS — Playwright config
   ─────────────────────────────────────────────────────────────
   Smoke tests against a Vite preview build. The preview server is
   started automatically (`npm run preview`) before tests run.
   ============================================================ */

import { defineConfig, devices } from '@playwright/test';

const PORT = 4173;
const BASE = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  timeout: 30_000,
  expect: { timeout: 5_000 },

  use: {
    baseURL: BASE,
    trace:  'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      testIgnore: /mobile\.spec\.js$/
    },
    {
      /* Catches mobile-only regressions: sidebar hidden, right-rail
         stacked, mobile-nav visible, no horizontal scroll. */
      name: 'mobile-chrome',
      use: { ...devices['Pixel 7'] },
      testMatch: /mobile\.spec\.js$/
    }
  ],

  /* Build once, then preview the static /dist directory. The
     `reuseExistingServer` flag lets `npm run test:e2e` re-use an
     already-running server during local iteration.

     `npm run preview` already specifies `--port 4173 --host 127.0.0.1`
     — IPv4 binding is required because CI runners can resolve
     `localhost` to IPv6 only, while Playwright's baseURL is 127.0.0.1.
     stdout/stderr are surfaced so a build/preview failure on CI shows
     up in the test logs instead of hiding behind ERR_CONNECTION_REFUSED. */
  webServer: {
    command: 'npm run build && npm run preview',
    url: BASE,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: 'pipe',
    stderr: 'pipe'
  }
});
