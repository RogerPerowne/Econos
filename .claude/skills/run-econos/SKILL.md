---
name: run-econos
description: Use to launch the Econos static SPA in this container and take screenshots of specific topic cards. The driver bypasses the auth gate, navigates by card index, and writes full-page PNGs to disk. Trigger when the user asks to "run econos", "launch the app", "screenshot a card", "preview the page", "show me how it looks", or wants visual verification after editing a topic, SVG, or card.
---

# Running Econos

Econos is a static SPA — no build step required to serve it. The site has an auth gate (`localStorage.econosAuth = '1'`) and cards are reached by SPA-internal navigation, not URL params. This skill ships a Playwright driver at `.claude/skills/run-econos/driver.mjs` that handles both.

All commands below are run from the repo root (`/home/user/Econos`).

## Prerequisites

Playwright (`playwright-core`) is already a devDependency. The driver lets Playwright auto-discover the chromium binary, so as long as `playwright install chromium` has been run at least once on this host, no path configuration is needed. Verified working on this container — chromium is at `/opt/pw-browsers/chromium-1223/` and Playwright finds it automatically.

If the driver errors with `browserType.launch: Executable doesn't exist`:

```bash
npx playwright install chromium
```

## Run (agent path) — screenshot a topic card

Three steps: build the dist/, start a static file server pointing at it,
then call the driver. URLs are path-based (`/learn/<slug>/`) so the dist
build is required — the source tree only has `learn.html` at the root.

```bash
# 1. Build the dist (once, or after editing topic data).
npm run build >/dev/null

# 2. Start the static server (once per session) inside dist/.
( cd dist && python3 -m http.server 8765 --bind 127.0.0.1 >/dev/null 2>&1 & )

# 3. Screenshot a card. Args: <url> [output.png] [card-index]
node .claude/skills/run-econos/driver.mjs \
  'http://127.0.0.1:8765/learn/factors-of-production/' \
  /tmp/econos-card.png \
  1
```

- **`card-index`** is the position in the topic's `cards: [...]` array. `-1` (default) stays on the session-intro view. `0` clicks "Start session" and lands on the first card. `N` advances to card N by clicking the Next button (N − 1) times after starting.
- Output is a full-page PNG at the path given (defaults to `/tmp/econos.png`).
- View it with `Read` (Claude can render PNGs directly).

The driver:
1. Sets `localStorage.econosAuth = '1'` on the origin so the auth gate passes.
2. Navigates to the URL with `waitUntil: 'networkidle'`.
3. Clicks `[data-action="start-session"]` if a card index ≥ 0 was passed.
4. Clicks `[data-action="next"]` N times to reach card N.
5. Takes a full-page screenshot at 1024×1400 viewport, 2× device-pixel ratio.

## Run (human path)

```bash
npm run dev
```

Opens Vite dev server on `localhost:5173`. Useless in this headless container — for visual verification use the agent path above.

## Test (the project's e2e suite)

```bash
npm run test:e2e
```

Runs the Playwright tests in `tests/e2e/`. Note: as of the last verified run, one a11y test fails on the home page (`hp-audience-card__link--amber` has insufficient colour contrast, `#f39e0b on #ffffff = 2.16:1`) — this is a pre-existing prod issue, not caused by recent changes. Skip with `ECONOS_SKIP_E2E=1` on git pushes if you didn't touch the home page styling.

## Inspect — scan for visual issues a screenshot hides

Full-page screenshots **lie at thumbnail size**. A bold 26px heading that wraps to 4 lines inside a narrow tile reads as "looks fine" in a 600px-tall preview but as "broken layout" to the user. After editing a topic, always run the bundled inspector before declaring the work done:

```bash
node .claude/skills/run-econos/inspect.mjs <topic-id> [cardCount]

# example
node .claude/skills/run-econos/inspect.mjs inflation 8
```

The inspector clicks through every card at the same 1024×1400 viewport the driver uses and checks each card for:

| Check | What it catches |
|-------|-----------------|
| `text-overflow` | A leaf element whose `scrollWidth > clientWidth` — text is being clipped or cut off. |
| `heading-too-large-for-tile` | Bold ≥22px text wrapping to ≥3 lines inside a tile. Canonical case: a long phrase in a "short label" slot (e.g. measureCards `acronym: 'Bank of England interest rates'`). |
| `overflows-card-right` | A block visually exits the card's right edge — common with wide tables or matchTable grids. |
| `uneven-tile-heights` | Tiles in a row whose max/min height differs by >45% — a tile is starved of content or one is too dense. |

Exit code is 0 if clean, 1 if anything is flagged. Run it after every batch of card edits — it costs ~15s and routinely surfaces issues the agent's eye misses.

When an issue is reported, fix it in data or in the renderer, not by ignoring the warning. The most common remedies:

- **`heading-too-large-for-tile`** — split the long string into `acronym` (short, e.g. "BoE rates") and `fullName` (long descriptor below), or reduce the heading font size for the block.
- **`overflows-card-right`** — narrow the block's intrinsic width, or wrap it in a `overflow-x:auto` container if it's a table.
- **`uneven-tile-heights`** — match content density, or set `align-items: stretch` on the grid so tiles share a height.

## Gotchas

- **Auth gate.** `js/auth-check.js` redirects to `login.html` unless `localStorage.econosAuth === '1'`. The driver handles this by visiting `/` first to seed localStorage on the right origin. Skip that step → you screenshot the login page.
- **Card navigation is not URL-driven.** `?card=N` in the URL does nothing. You must click "Start session" then click "Next" N times. Hence the `[card-index]` arg on the driver.
- **`waitUntil: 'networkidle'` isn't enough alone.** Inline data files run synchronously but the renderer paints on a microtask. The driver adds a 500–800ms `waitForTimeout` after navigation/clicks so SVGs are fully painted.
- **Service worker cache.** Econos uses a v* cache (currently `econos-v9`) that persists across reloads via `js/sw.js`. If a screenshot looks stale, hard-reload by deleting the SW: `await page.evaluate(() => navigator.serviceWorker?.getRegistrations().then(rs => rs.forEach(r => r.unregister())))`.
- **SSL handshake errors in stdout.** Headless chrome prints `SSL error code 1` lines on first startup. Harmless — it's trying outbound HTTPS for telemetry that doesn't exist in the container. Ignore.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Screenshot shows login page | Auth bypass failed. Verify origin matches: driver visits `${origin}/` before setting localStorage. |
| Driver hangs at `goto` | Static server didn't start, or dist/ not built. `curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8765/learn/factors-of-production/` should return 200. |
| `Error: browserType.launch: Executable doesn't exist` | Chromium not installed for Playwright on this host — run `npx playwright install chromium`. |
| Blank page on screenshot | Card index too high — exceeded `cards.length - 1`. Check the topic's `data-topic.js`. |
| Screenshot taken but card content missing | Increase `waitForTimeout` to 1500ms after `start-session` click; some cards have heavy DOM. |

## When this skill ships changes back to main

Follow the workflow in the `econos-ship-changes` skill — never push to a development branch without first backing up `main` to a dated branch.
