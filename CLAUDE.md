# Econos — Claude Code Instructions

## Git workflow

1. **Always develop on `claude/development`** — never create new feature branches.
2. After completing any task, **create a PR from `claude/development` into `main`** and **merge it** (squash merge).
3. After merging, **pull `main` locally and reset `claude/development` to match main**, so the branch stays up to date.

### Standard sequence after finishing work

```bash
git push -u origin claude/development
# create PR via GitHub MCP → merge (squash) into main
git fetch origin main
git checkout claude/development
git reset --hard origin/main
git push -u origin claude/development --force
```

## Repository

- Owner: RogerPerowne
- Repo: Econos
- Default branch: main
- Development branch: claude/development
