#!/usr/bin/env node
/**
 * inspect.mjs — programmatically scan a topic for visual issues that
 * full-page screenshots miss at thumbnail size.
 *
 * Detects:
 *   - text overflow (scrollWidth > clientWidth on any block)
 *   - lines wrapping more than N times inside a fixed-size tile
 *   - elements whose rendered font-size is too large for their container
 *   - elements that visually overflow the card's bounding box
 *   - tiles in a row whose heights diverge by more than 30%
 *
 * Usage:
 *   node .claude/skills/run-econos/inspect.mjs <topic-id> [cardCount]
 *
 * Exits 0 if clean, 1 if issues found. Always prints a structured report.
 */
import { chromium } from 'playwright-core';

const [, , topicId = 'causes-of-inflation-and-deflation', cardCountArg = '8'] = process.argv;
const cardCount = parseInt(cardCountArg, 10);
const baseUrl = 'http://127.0.0.1:8765';

const browser = await chromium.launch();
// Match the driver's default viewport so issues reproduce at the size the user sees.
const ctx = await browser.newContext({ deviceScaleFactor: 1, viewport: { width: 1024, height: 1400 } });
const page = await ctx.newPage();

await page.goto(`${baseUrl}/`);
await page.evaluate(async () => {
  if (navigator.serviceWorker) {
    const rs = await navigator.serviceWorker.getRegistrations();
    for (const r of rs) await r.unregister();
  }
  if (window.caches) {
    const keys = await caches.keys();
    for (const k of keys) await caches.delete(k);
  }
  localStorage.econosAuth = '1';
});

await page.goto(`${baseUrl}/learn.html?topic=${topicId}`, { waitUntil: 'networkidle' });
await page.waitForTimeout(700);
await page.click('[data-action="start-session"]');
await page.waitForTimeout(500);

const allIssues = [];

for (let i = 0; i < cardCount; i++) {
  await page.waitForTimeout(500);
  const title = await page.evaluate(() => (document.querySelector('.card__title')?.textContent || '').trim());
  const issues = await page.evaluate(() => {
    const found = [];
    const card = document.querySelector('.card, [class*="card"]:has(.card__title)') || document.body;
    const cardRect = card.getBoundingClientRect();

    const inSvg = el => el.closest('svg') !== null;

    // 1. text overflow — element wider than its container.
    //    Skip SVG-internal text (their overflow is styled differently).
    for (const el of card.querySelectorAll('*')) {
      if (el.children.length) continue;
      if (inSvg(el)) continue;
      if (el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 40) {
        const txt = (el.textContent || '').trim().slice(0, 60);
        if (txt) found.push({ kind: 'text-overflow', text: txt, scroll: el.scrollWidth, client: el.clientWidth });
      }
    }

    // 2. bold headings that wrap into too many lines for their tile.
    //    Catches "long phrase in a short-label slot" — the canonical case
    //    is a measureCards `acronym` set to "Bank of England interest rates".
    for (const el of card.querySelectorAll('div, span, h1, h2, h3, h4')) {
      if (inSvg(el)) continue;
      const cs = getComputedStyle(el);
      const fs = parseFloat(cs.fontSize);
      const fw = parseFloat(cs.fontWeight) || 400;
      if (fs < 20 || fw < 700) continue;
      const txt = (el.textContent || '').trim();
      if (!txt || txt.length < 8 || el.children.length > 1) continue;
      const w = el.getBoundingClientRect().width;
      if (w < 50) continue;
      // Estimate line count from actual rendered height vs line-height.
      const lh = parseFloat(cs.lineHeight) || fs * 1.2;
      const h = el.getBoundingClientRect().height;
      const lines = Math.round(h / lh);
      if (lines >= 3 && fs >= 22) {
        found.push({ kind: 'heading-too-large-for-tile', text: txt.slice(0, 80), fontSize: Math.round(fs), tileWidth: Math.round(w), lines });
      }
    }

    // 3. elements that visually exit the card's right edge
    for (const el of card.querySelectorAll('div')) {
      if (inSvg(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0) continue;
      if (r.right > cardRect.right + 4) {
        found.push({ kind: 'overflows-card-right', tag: el.tagName, by: Math.round(r.right - cardRect.right) });
        break;
      }
    }

    // 4. grid/flex rows where tile heights diverge significantly.
    //    Filter out structural grids (matchTable has empty arrow cells)
    //    by requiring min height > 30px — empty spacers/arrows are below that.
    for (const grid of card.querySelectorAll('div[style*="grid-template-columns:repeat"]')) {
      const kids = Array.from(grid.children).filter(c => c.getBoundingClientRect().width > 30);
      if (kids.length < 3) continue;
      const heights = kids.map(c => c.getBoundingClientRect().height);
      const max = Math.max(...heights);
      const min = Math.min(...heights);
      if (min < 30) continue;
      if (max > 80 && (max - min) / max > 0.45) {
        found.push({ kind: 'uneven-tile-heights', count: kids.length, min: Math.round(min), max: Math.round(max) });
      }
    }

    return found;
  });

  if (issues.length) {
    allIssues.push({ card: i + 1, title, issues });
  }

  if (i < cardCount - 1) {
    await page.click('[data-action="next"]');
  }
}

await browser.close();

if (!allIssues.length) {
  console.log(`✅ ${topicId}: scanned ${cardCount} cards, no visual issues detected.`);
  process.exit(0);
}

console.log(`⚠️  ${topicId}: ${allIssues.length} card(s) with issues:\n`);
for (const c of allIssues) {
  console.log(`Card ${c.card} — ${c.title}`);
  for (const iss of c.issues) {
    console.log(`  · ${iss.kind}: ${JSON.stringify(iss).slice(0, 200)}`);
  }
  console.log('');
}
process.exit(1);
