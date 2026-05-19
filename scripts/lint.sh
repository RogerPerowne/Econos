#!/usr/bin/env bash
# ============================================================
# ECONOS — repo-local lint checks
# ------------------------------------------------------------
# Runs on every CI build (and is safe to wire into a pre-commit
# hook). Each check exits non-zero on violation and prints a
# pointer to the offending file. Add new checks as functions
# below and call them from main().
# ============================================================

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

fail=0

# ------------------------------------------------------------
# #58 — no window.location.* in engines
# ------------------------------------------------------------
# Engines must navigate via TopicLoader.go() so SPA routers can
# intercept. The router files themselves are allowed to call
# window.location.href as the cross-shell escape hatch.
check_engine_navigation() {
  local hits
  hits=$(grep -nE 'window\.location\.(href|replace)' js/engines/*-engine.js js/engines/*-intro.js 2>/dev/null || true)
  if [ -n "$hits" ]; then
    echo "lint: engines using window.location.* (use TopicLoader.go instead):"
    echo "$hits"
    fail=1
  fi
}

# ------------------------------------------------------------
# #59 — no new POLISH v* blocks at the bottom of styles.css
# ------------------------------------------------------------
# The polish-vN pattern was a temporary scaffold while the
# design tool and live repo were merging. Going forward, fixes
# go into the canonical sections of styles.css — no v10, v11, ...
# We allow v2..v9 (the historical blocks). New ones fail the lint.
check_no_new_polish_blocks() {
  local hits
  hits=$(grep -nE 'POLISH v(1[0-9]|[2-9][0-9])' styles.css 2>/dev/null || true)
  if [ -n "$hits" ]; then
    echo "lint: new POLISH v* block(s) introduced (inline fixes into canonical sections instead):"
    echo "$hits"
    fail=1
  fi
}

# ------------------------------------------------------------
# Forbid the legacy per-section HTML filenames in source.
# All navigation must go via TopicLoader.buildUrl() which rewrites
# them to learn.html / link.html / land.html shells. Hard-coded
# refs would silently 404 after the SPA migration.
# ------------------------------------------------------------
check_no_legacy_html_refs() {
  # Allowed:
  #   - js/topic-loader.js (PAGE_MAP),
  #   - js/engines/shell.js (defensive URL-alias check),
  #   - the legacy redirect stubs (marked with LEGACY_REDIRECT — see #65),
  #   - inside TopicLoader.buildUrl('...') calls (the supported entry-point).
  # Files containing the marker comment are auto-detected via grep -L below.
  local legacy_stubs allowed_files hits
  legacy_stubs=$(grep -l 'LEGACY_REDIRECT' -- *.html 2>/dev/null || true)
  hits=$(grep -nE "(topic|link_(intro|context|chain|chain_open|diagram|depends|judge|complete)|land_(intro|section_a|section_b|section_c|complete))\.html" \
          --include='*.js' --include='*.html' -r . \
          --exclude-dir=node_modules --exclude-dir=.git \
        | grep -vE '(js/topic-loader\.js|js/engines/shell\.js|scripts/lint\.sh|CHANGELOG\.md)' \
        | grep -vE "buildUrl\(['\"](topic|link_|land_)" || true)
  # Drop hits from legacy redirect stub files
  if [ -n "$legacy_stubs" ]; then
    while IFS= read -r stub; do
      [ -z "$stub" ] && continue
      hits=$(echo "$hits" | grep -vE "^\./${stub//./\\.}:") || true
    done <<< "$legacy_stubs"
  fi
  if [ -n "$hits" ]; then
    echo "lint: legacy per-section HTML names referenced outside TopicLoader.buildUrl():"
    echo "$hits"
    fail=1
  fi
}

main() {
  check_engine_navigation
  check_no_new_polish_blocks
  check_no_legacy_html_refs
  if [ "$fail" -ne 0 ]; then
    echo
    echo "lint: FAILED"
    exit 1
  fi
  echo "lint: OK"
}

main "$@"
