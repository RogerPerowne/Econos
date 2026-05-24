#!/usr/bin/env node
// Headless driver for the Econos static SPA.
//
// Usage (run from repo root, with a static server already listening):
//   node .claude/skills/run-econos/driver.mjs <url> [output-png] [card-index]
//
// <url>           Full URL including ?topic=<id>. Required.
// [output-png]    Default /tmp/econos.png
// [card-index]    Default -1 (stay on the session intro view).
//                 0 = click "Start session" → land on card 0.
//                 N = click "Start session" then advance N times.
//
// Example:
//   node .claude/skills/run-econos/driver.mjs \
//     'http://127.0.0.1:8765/learn.html?topic=factors_of_production' \
//     /tmp/econos-land.png 1
//
// Handles the auth gate by setting econosAuth=1 in localStorage before
// navigating.

import { chromium } from 'playwright-core';

const url = process.argv[2];
const out = process.argv[3] || '/tmp/econos.png';
const cardIndex = process.argv[4] !== undefined ? parseInt(process.argv[4], 10) : -1;

if (!url) {
  console.error('usage: driver.mjs <url> [output-png] [card-index]');
  process.exit(2);
}

const browser = await chromium.launch({
  args: ['--no-sandbox', '--disable-gpu'],
});
const context = await browser.newContext({
  viewport: { width: 1024, height: 1400 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

const origin = new URL(url).origin;
await page.goto(`${origin}/`);
await page.evaluate(() => localStorage.setItem('econosAuth', '1'));

await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

if (cardIndex >= 0) {
  await page.click('[data-action="start-session"]');
  await page.waitForTimeout(400);
  for (let i = 0; i < cardIndex; i += 1) {
    await page.click('[data-action="next"]');
    await page.waitForTimeout(300);
  }
  await page.waitForTimeout(500);
}

await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log(out);
