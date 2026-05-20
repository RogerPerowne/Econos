# Econos — Claude Code Instructions

## Git workflow

**Default for every push.** Every time you push work to the active development
branch (whether `claude/development` or a session-specific `claude/...` branch),
follow the full flow automatically — do not stop at the push and wait for the
user to ask for a PR. The user has standing authorisation for this sequence.

1. Develop on the session's designated branch (the one specified in the system
   prompt — typically `claude/development`, sometimes a session-specific
   `claude/...` branch). Never create extra feature branches.
2. **Push → PR → squash-merge → reset → force-push** as a single unit:

```bash
git push -u origin <dev-branch>
# open PR via GitHub MCP (head=<dev-branch>, base=main) → squash-merge
git fetch origin main
git reset --hard origin/main           # while still on <dev-branch>
git push -u origin <dev-branch> --force
```

3. Do this once per logical task — not after every individual commit. If
   several commits land before the PR is opened, that's fine; the squash
   collapses them.

## Repository

- Owner: RogerPerowne
- Repo: Econos
- Default branch: main
- Development branch: claude/development

## URL & routing rules

The site has **exactly six HTML files at the repo root**:

```
index.html  learn.html  link.html  land.html  quiz.html  login.html
```

**Do not add new HTML files at the repo root.** A new topic or station
never needs new HTML — it needs new data + (occasionally) a router
station entry.

### Shell URLs

- `learn.html?topic=<id>` — Learn It cards.
- `link.html?topic=<id>&station=<intro|context|chain|chain_open|diagram|depends|judge|complete|quiz>` — Link It stations, routed by `LinkRouter` (`js/engines/link-router.js`).
- `land.html?topic=<id>&station=<intro|a|b|c|complete|quiz>` — Land It sections, routed by `LandRouter`.
- `quiz.html?topic=<id>&quiz=<set>` — Topic quizzes (separate engine; will be folded into the Learn shell in a future tranche).

### Legacy filenames are gone

Old per-section URLs (`topic.html`, `link_chain.html`, `land_section_a.html`, etc.) **do not exist as files or HTTP routes**. `scripts/lint.sh` blocks them from being re-introduced.

The aliasing layer in `js/topic-loader.js` (`PAGE_MAP`) is kept because **per-topic data files still write the legacy names** for backwards compatibility — e.g. `backUrl: TopicLoader.buildUrl('link_intro.html')`. The loader rewrites that to `link.html?topic=…&station=intro` before the URL ever hits the network. **New code may write the canonical form:** `TopicLoader.buildUrl('link.html', { station: 'intro' })`.

### Navigation contract (enforced by lint)

- **Engines must never call `window.location.href` / `.replace` directly.** Use `TopicLoader.go(url)` so SPA routers can intercept. `scripts/lint.sh` fails the build on a violation.
- The two router files (`link-router.js`, `land-router.js`) are allowed to call `window.location.href` as the cross-shell escape hatch.

## Conventions enforced by CI

- `npm run lint` must pass (repo lint + ESLint with `--max-warnings=0`).
- `npm run test:e2e` must pass (18 Playwright tests across desktop + mobile + a11y).
- `pre-commit` runs the lint; `pre-push` runs the e2e suite. Override with `--no-verify` or `ECONOS_SKIP_E2E=1` only when you genuinely know better.

## Adding a new topic

1. Create `js/data/<topic-id>/` with at minimum `data-topic.js`.
2. Add `data-land-*.js`, `data-link-*.js`, `data-quiz-*.js` files as the content matures.
3. Register the topic in `js/topics.js`.

No new HTML, no engine changes. The shells discover the data through
`TopicLoader.loadData(...)` at runtime.
