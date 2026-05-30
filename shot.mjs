import { chromium } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1000, height: 800 } });  // no deviceScaleFactor
await ctx.addInitScript(() => { localStorage.setItem('econosAuth','1'); localStorage.setItem('econos:board','edexcel_a'); });
const page = await ctx.newPage();
await page.goto('http://127.0.0.1:4173/edexcel_a/theme-2/macroeconomic-objectives-and-trade-offs/learn-it/', { waitUntil: 'networkidle' });
await page.waitForTimeout(700);
const start = await page.$('.stage'); if (start) { await start.click(); await page.waitForTimeout(400); }
for (let i = 0; i < 5; i++) { const n = await page.$('button:has-text("Next card")'); if (n) { await n.click(); await page.waitForTimeout(300); } }
const tq = await page.$('button:has-text("Take the quiz")'); if (tq) { await tq.click(); await page.waitForTimeout(500); }
for (let i = 0; i < 5; i++) {
  const label = await page.$eval('.quiz-type-badge', el => el.textContent.trim()).catch(()=>'?');
  if (label === 'Calculate') {
    const input = await page.$('.quiz-ni-input'); if (input) await input.fill('3.5');
    const sub = await page.$('.quiz-btn--submit:not([disabled])'); if (sub) await sub.click();
  } else { const o = await page.$('.quiz-opt'); if (o) await o.click(); }
  await page.waitForTimeout(250);
  const next = await page.$('.quiz-next-row button'); if (next) await next.click();
  await page.waitForTimeout(350);
}
const items = await page.$$('.quiz-cat-item');
const buckets = await page.$$('.quiz-cat-bucket');
for (let i = 0; i < items.length; i++) {
  await items[i].click(); await page.waitForTimeout(40);
  await buckets[i % buckets.length].click(); await page.waitForTimeout(40);
}
const sub = await page.$('.quiz-btn--submit:not([disabled])'); if (sub) await sub.click();
await page.waitForTimeout(500);
const root = await page.$('#quiz-root');
await root.screenshot({ path: '/tmp/cat-graded.png' });
await browser.close();
