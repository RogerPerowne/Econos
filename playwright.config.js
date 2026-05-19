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
     already-running server during local iteration. */
  webServer: {
    command: 'npm run build && npm run preview -- --port ' + PORT,
    port: PORT,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  }
});
