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
# #59 — no POLISH v* blocks in styles.css
# ------------------------------------------------------------
# All historical POLISH v# blocks have been renamed to descriptive
# DESIGN SYSTEM section headers or inlined into the canonical
# rules. No POLISH v# headers should exist any more — new fixes
# go straight into the appropriate section.
check_no_new_polish_blocks() {
  local hits
  hits=$(grep -nE 'POLISH v[0-9]+' styles.css 2>/dev/null || true)
  if [ -n "$hits" ]; then
    echo "lint: POLISH v* block(s) found (rename to descriptive DESIGN SYSTEM section header, or inline):"
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
LEGACY_FILES_RE='(topic|link_(intro|context|chain|chain_open|diagram|depends|judge|complete)|land_(intro|section_a|section_b|section_c|complete))\.html'

check_no_legacy_html_refs() {
  # Allowed:
  #   - js/topic-loader.js (PAGE_MAP),
  #   - js/engines/shell.js (defensive URL-alias check),
  #   - inside TopicLoader.buildUrl('...') calls (the supported entry-point).
  local hits
  hits=$(grep -nE "$LEGACY_FILES_RE" \
          --include='*.js' --include='*.html' -r . \
          --exclude-dir=node_modules --exclude-dir=.git \
          --exclude-dir=dist --exclude-dir=test-results --exclude-dir=playwright-report \
        | grep -vE '(js/topic-loader\.js|js/engines/shell\.js|scripts/lint\.sh|CHANGELOG\.md|tests/)' \
        | grep -vE "buildUrl\(['\"](topic|link_|land_)" || true)
  if [ -n "$hits" ]; then
    echo "lint: legacy per-section HTML names referenced outside TopicLoader.buildUrl():"
    echo "$hits"
    fail=1
  fi
}

# ------------------------------------------------------------
# Forbid re-introducing the legacy per-section HTML files at the
# repo root. The 14 redirect stubs were retired — any new file
# matching the legacy pattern is a regression.
# ------------------------------------------------------------
check_no_legacy_stub_files() {
  local hits
  hits=$(find . -maxdepth 1 -name '*.html' -printf '%f\n' 2>/dev/null \
        | grep -E "^$LEGACY_FILES_RE\$" || true)
  if [ -n "$hits" ]; then
    echo "lint: legacy per-section HTML stub file(s) re-introduced at repo root:"
    echo "$hits"
    fail=1
  fi
}

# ------------------------------------------------------------
# Every chart spec referenced as `ECONOS_FOO_SPEC` in icons.js
# must have a corresponding <script> tag in every shell HTML.
# If not, the shell loads icons.js before the spec, the spec
# variable is undefined when icons.js evaluates ECONOS_PPF.render(
# window.ECONOS_FOO_SPEC) → throws → the page never boots.
#
# This caught the regression where consumption-function.js,
# mec-diagram.js, etc. were added as spec files (and to sw.js)
# but NOT to learn-it.html / link-it.html / land-it.html →
# production blank-screened for all users.
# ------------------------------------------------------------
check_spec_scripts_loaded() {
  # For every ECONOS_FOO_SPEC referenced in icons.js, find the spec
  # file that DECLARES it (variable name doesn't always equal filename
  # — e.g. ECONOS_TAX_DIAGRAM_SPEC lives in tax-diagram-interactive.js).
  # Then check every shell HTML loads that file via <script>.
  local var
  for var in $(grep -oE 'ECONOS_[A-Z0-9_]+_SPEC' js/icons.js 2>/dev/null | sort -u); do
    local declaring_file
    declaring_file=$(grep -lE "window\.${var}\s*=" js/charts/specs/*.js 2>/dev/null | head -1)
    if [ -z "$declaring_file" ]; then
      echo "lint: icons.js references $var but no spec file declares it (window.${var} = …)"
      fail=1
      continue
    fi
    local stem
    stem=$(basename "$declaring_file" .js)
    for shell in learn-it.html link-it.html land-it.html; do
      if ! grep -q "/js/charts/specs/${stem}.js" "$shell"; then
        echo "lint: $shell missing <script src=\"/js/charts/specs/${stem}.js\"> (declares $var) — icons.js will crash on load"
        fail=1
      fi
    done
  done
}

main() {
  check_engine_navigation
  check_no_new_polish_blocks
  check_no_legacy_html_refs
  check_no_legacy_stub_files
  check_spec_scripts_loaded
  if [ "$fail" -ne 0 ]; then
    echo
    echo "lint: FAILED"
    exit 1
  fi
  echo "lint: OK"
}

main "$@"
