---
name: econos-ship-changes
description: Use whenever shipping a change on Econos to main. Documents the mandatory "backup main first" step plus the full push → PR → squash-merge → reset → force-push workflow. Trigger when the user asks to commit, push, ship, deploy, merge, or land changes; also auto-load when other Econos skills wrap up an edit.
---

# Shipping changes on Econos

Every change that lands on `main` follows the same five-step sequence. **Step 0 (backup) is mandatory** — do not skip it. A backup branch costs nothing to create and saves the day when a merge needs to be undone.

## The five steps

### 0. Back up `main` first

Before any push that will eventually merge, snapshot the current `origin/main` to a dated backup branch:

```bash
git fetch origin main
ECONOS_SKIP_E2E=1 git push origin origin/main:refs/heads/backup/main-$(date +%Y-%m-%d)-pre-<short-task-name>
```

Conventions:
- Branch name: `backup/main-YYYY-MM-DD-pre-<task>` (e.g. `backup/main-2026-05-24-pre-skills`).
- Always use `ECONOS_SKIP_E2E=1` on the backup push — it's a state snapshot, not a code change, and the pre-push hook would otherwise run the full e2e suite against a pre-existing failure (the amber a11y test) and refuse.
- Multiple backups in one day? Suffix with the task name; the dash separator keeps them sortable and self-documenting.

### 1. Develop on the session's designated branch

Use the branch the system prompt specifies — typically `claude/development`, sometimes a session-specific `claude/<task>` branch. Never create extra feature branches.

### 2. Commit and push to the dev branch

```bash
git add <specific files>          # avoid `git add -A` — picks up unintended files
git commit -m "Concise message"
ECONOS_SKIP_E2E=1 git push -u origin <dev-branch>
```

Use `ECONOS_SKIP_E2E=1` when the only failing e2e is the pre-existing home-page a11y issue. If your change *did* touch home-page styling or accessibility, run `npm run test:e2e` first and fix the regression.

### 3. Open a PR and squash-merge

Use the GitHub MCP tools:

```
mcp__github__create_pull_request
  owner: RogerPerowne
  repo: Econos
  title: <under 70 chars>
  head: <dev-branch>
  base: main
  body: ## Summary / ## Test plan

mcp__github__merge_pull_request
  owner: RogerPerowne
  repo: Econos
  pullNumber: <from create response>
  merge_method: squash
```

Do not use `gh` CLI — it isn't available. Do not open PRs with `git push`-driven URL prompts.

### 4. Reset the dev branch to `main` and force-push

```bash
git fetch origin main
git reset --hard origin/main          # still on <dev-branch>
ECONOS_SKIP_E2E=1 git push -u origin <dev-branch> --force
```

This keeps the dev branch lined up with main and ready for the next task. Force-push is correct here — the dev branch is a personal workspace, not a shared collaboration branch.

## Doing it as one unit

All five steps run as a single atomic flow per logical task. Don't do step 0 and then leave the rest for later — the backup loses meaning if the merge happens days afterwards.

```bash
# 0. Backup
ECONOS_SKIP_E2E=1 git push origin origin/main:refs/heads/backup/main-$(date +%Y-%m-%d)-pre-skills

# 1-2. Commit + push (assumes you're already on the dev branch)
git add <files>
git commit -m "..."
ECONOS_SKIP_E2E=1 git push -u origin <dev-branch>

# 3. PR (via MCP tools — see above)

# 4. Reset
git fetch origin main && git reset --hard origin/main && \
  ECONOS_SKIP_E2E=1 git push -u origin <dev-branch> --force
```

## When NOT to follow this

- **Drafts the user explicitly wants kept open.** If you've been asked to leave a PR open for review, stop at step 3 — don't merge.
- **Force-push to main.** Never. The dev-branch force-push (step 4) is fine because the dev branch is personal; force-pushing main rewrites history for everyone. Warn the user if they ask for it.
- **Skipping hooks (`--no-verify`).** Only with explicit user permission. If a hook fails, investigate the underlying issue rather than bypassing it. `ECONOS_SKIP_E2E=1` is the sanctioned escape hatch for the known a11y failure.

## Restoring from a backup branch

If a merged change needs to be unwound:

```bash
# Inspect what's on the backup
git log origin/backup/main-2026-05-24-pre-skills --oneline -10

# Reset main to the backup (DESTRUCTIVE — confirm with user first)
git push origin origin/backup/main-2026-05-24-pre-skills:main --force-with-lease
```

Always use `--force-with-lease` instead of `--force` when targeting main. And always confirm with the user before pressing the lever — this rewrites history.
