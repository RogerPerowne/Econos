import { chromium } from 'playwright-core';
const url = process.argv[2];
const out = process.argv[3];
const cardIndex = parseInt(process.argv[4], 10);
const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-gpu'] });
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
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
