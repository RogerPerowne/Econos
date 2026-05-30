(function () {
  'use strict';

  // ─── Dev-mode gate (matches render-blocks.js convention) ──────────────────
  function isDevMode() {
    try {
      return (
        window.localStorage.getItem('econosDev') === '1' ||
        new URLSearchParams(window.location.search).get('dev') === '1'
      );
    } catch (err) {
      void err;
      return false;
    }
  }

  // ─── Known templates (read from the switch in js/app.js renderCard) ────────
  var KNOWN_TEMPLATES = new Set([
    'framing',
    'cause',
    'diagnose',
    'puzzle',
    'mechanisms',
    'demand-side-policies-monetary',
    'impacts',
    'deflation',
    'paired',
    'ad-interactive',
    'transmission-chain',
    'elasticity-explorer',
    'ped-five-frames',
    'pes-five-frames',
    'worked-example',
    'ped-calculation',
    'pes-calculation',
    'yed-calculation',
    'xed-calculation',
    'pes-explorer',
    'yed-explorer',
    'xed-explorer',
    'market-structures-comparison',
    'essay-scaffold',
    'welfare-gf-explorer',
    'regulatory-capture-explorer'
  ]);

  // ─── Known tones (from render-blocks.js VALID_TONES) ──────────────────────
  var KNOWN_TONES = new Set(['green', 'amber', 'blue', 'purple', 'rose', 'slate']);

  // ─── Known card-level metadata fields (agent build guidance + layout) ──────
  // These are all valid at the card object level and the validator will never
  // flag them as unknown. Fields that drive layout: density, layoutPreset.
  // Agent-only (non-rendering): mockupMap, visualBrief, buildNotes,
  //   layoutLock, hierarchy, preserveMockupLayout.
  //
  // VALID_DENSITIES is the subset that must match a specific enumeration;
  // the full field list is documented in docs/RENDER_BLOCKS.md.
  var VALID_DENSITIES = new Set(['airy', 'standard', 'compact', 'exam']);

  // ─── Content-length budgets (warn when exceeded) ──────────────────────────
  var BUDGETS = {
    tileHead:    42,   // tile block: head field
    tileBody:    140,  // tile block: body field
    flowTitle:   32,   // flow-type block: title field
    flowSub:     80,   // flow-type block: subtitle / sub field
    calloutText: 170,  // calloutStrip / tip block: text field
    examEdge:    240   // examEdge block: text field
  };

  // ─── Helpers ──────────────────────────────────────────────────────────────

  /**
   * Resolve the live block-type registry.
   * Falls back to a hard-coded baseline when the registry is not yet loaded
   * so the validator can report unknowns even in isolation.
   */
  function getKnownBlockTypes() {
    if (window.ECONOS_BLOCKS && typeof window.ECONOS_BLOCKS === 'object') {
      return new Set(Object.keys(window.ECONOS_BLOCKS));
    }
    // Hard-coded baseline matching render-blocks.js + js/blocks/*.js
    return new Set([
      // render-blocks.js core
      'sectionHeader', 'calloutStrip', 'tip', 'heroVisual', 'grid', 'tile',
      'bigIdea', 'examEdge', 'warning',
      // js/blocks/flow.js
      'mechanismChain', 'rippleCascade', 'opposingFlows', 'timeline',
      // js/blocks/compare.js
      'versusRows', 'decisionMatrix', 'trafficLight', 'glossaryRow',
      // js/blocks/data.js
      'metricCard', 'targetGauge', 'equationHero', 'workedExampleStrip', 'factChip',
      // js/blocks/structure.js
      'spectrum', 'caseStudies', 'satelliteDiagram', 'policyToolkit',
      // js/blocks/diagram.js
      'diagram'
    ]);
  }

  /**
   * Resolve the live diagram-type registry.
   * Falls back to a hard-coded baseline from js/diagrams/generators/*.js
   */
  function getKnownDiagramTypes() {
    if (window.ECONOS_DIAGRAMS && typeof window.ECONOS_DIAGRAMS === 'object') {
      // ECONOS_DIAGRAMS.resolve is a helper, not a diagram type — exclude it.
      return new Set(
        Object.keys(window.ECONOS_DIAGRAMS).filter(function (k) { return k !== 'resolve'; })
      );
    }
    // Hard-coded baseline from all generators
    return new Set([
      // adas.js
      'adasDiagram',
      // tax-controls.js
      'taxSubsidyDiagram', 'priceControlDiagram',
      // ppf.js
      'ppfDiagram',
      // mult-elas.js
      'multiplierDiagram', 'elasticityDiagram',
      // macro-misc.js
      'phillipsCurve', 'jCurveDiagram', 'fortyFiveDiagram', 'growthDiagram',
      // firm-labour.js
      'costCurvesDiagram', 'marketStructureDiagram', 'labourMarketDiagram'
    ]);
  }

  /**
   * Resolve the live icon/SVG registry keys.
   */
  function getKnownSvgKeys() {
    if (window.ECONOS_ICONS && typeof window.ECONOS_ICONS === 'object') {
      return new Set(Object.keys(window.ECONOS_ICONS));
    }
    return null; // Cannot validate without the registry loaded
  }

  /**
   * Return true when a card uses a tile-grid structural signature:
   * a blocks array that contains at least one 'grid' block whose children
   * are primarily 'tile' blocks (the most common tile-grid pattern).
   */
  function isTileGridCard(card) {
    if (!Array.isArray(card.blocks)) return false;
    return card.blocks.some(function (block) {
      if (!block || block.type !== 'grid') return false;
      var children = Array.isArray(block.children) ? block.children : [];
      var tileCount = children.filter(function (ch) {
        return ch && ch.type === 'tile';
      }).length;
      return tileCount >= 2;
    });
  }

  /**
   * Walk all blocks (including nested children in grid blocks) and call
   * visitor(block) for each.
   */
  function walkBlocks(blocks, visitor) {
    if (!Array.isArray(blocks)) return;
    blocks.forEach(function (block) {
      if (!block || typeof block !== 'object') return;
      visitor(block);
      if (Array.isArray(block.children)) {
        walkBlocks(block.children, visitor);
      }
    });
  }

  // ─── Core validation function ──────────────────────────────────────────────

  /**
   * validate(topic?)
   * ----------------
   * Validates the supplied topic object, or window.ECONOS_TOPIC if omitted.
   * Returns { errors: string[], warnings: string[] }.
   */
  function validate(topic) {
    var subject = topic || (typeof window !== 'undefined' && window.ECONOS_TOPIC) || null;

    var errors = [];
    var warnings = [];

    function err(msg) { errors.push(msg); }
    function warn(msg) { warnings.push(msg); }

    if (!subject) {
      err('No topic found: window.ECONOS_TOPIC is not defined and no topic was passed.');
      return { errors: errors, warnings: warnings };
    }

    var cards = Array.isArray(subject.cards) ? subject.cards : [];

    if (cards.length === 0) {
      warn('Topic has no cards array or the array is empty.');
      return { errors: errors, warnings: warnings };
    }

    var knownBlockTypes = getKnownBlockTypes();
    var knownDiagramTypes = getKnownDiagramTypes();
    var knownSvgKeys = getKnownSvgKeys();

    // ── Track ids for duplicate detection ─────────────────────────────────
    var seenIds = {};

    // ── Track consecutive-template anti-pattern ────────────────────────────
    var prevTemplate = null;

    // ── Tile-grid count for anti-pattern check ─────────────────────────────
    var tileGridCount = 0;

    cards.forEach(function (card, idx) {
      var label = 'Card[' + idx + ']' + (card && card.id ? ' (' + card.id + ')' : '');

      if (!card || typeof card !== 'object') {
        err(label + ': card is not an object.');
        prevTemplate = null;
        return;
      }

      // ── 1. Missing / empty id ──────────────────────────────────────────
      if (card.id == null || String(card.id).trim() === '') {
        err(label + ': missing or empty card id.');
      }

      // ── 2. Duplicate id ───────────────────────────────────────────────
      if (card.id != null && String(card.id).trim() !== '') {
        var normalId = String(card.id).trim();
        if (seenIds[normalId]) {
          err(label + ': duplicate card id "' + normalId + '" (first seen at index ' + seenIds[normalId].index + ').');
        } else {
          seenIds[normalId] = { index: idx };
        }
      }

      // ── 3. Unknown tone ───────────────────────────────────────────────
      if (card.tone !== undefined && !KNOWN_TONES.has(card.tone)) {
        warn(label + ': unknown tone "' + card.tone + '". Known tones: ' + Array.from(KNOWN_TONES).join(', ') + '.');
      }

      // ── 3b. density value check ───────────────────────────────────────
      // density is a known metadata field; warn if the value is not one of the
      // four CSS token modes (airy | standard | compact | exam).
      if (card.density !== undefined && !VALID_DENSITIES.has(card.density)) {
        warn(label + ': density "' + card.density + '" is not one of the allowed values: ' + Array.from(VALID_DENSITIES).join(', ') + '.');
      }

      // ── 4. Unknown template (only meaningful when blocks[] absent) ─────
      var usesBlocks = Array.isArray(card.blocks) && card.blocks.length > 0;
      if (!usesBlocks && card.template !== undefined) {
        if (!KNOWN_TEMPLATES.has(card.template)) {
          err(label + ': unknown template "' + card.template + '".');
        }
      }

      // ── 5. Blocks-level checks ────────────────────────────────────────
      if (usesBlocks) {
        walkBlocks(card.blocks, function (block) {
          var bLabel = label + ' block[' + block.type + ']';

          // 5a. Unknown block type
          if (block.type === undefined || block.type === null) {
            err(label + ': a block has no type property.');
            return;
          }
          if (!knownBlockTypes.has(block.type)) {
            err(bLabel + ': unknown block type "' + block.type + '".');
          }

          // 5a-bis. Required-field check per block type. Reads from the single
          // source of truth: window.ECONOS_BLOCK_SCHEMAS (js/blocks/_schema.js).
          // The same schema registry will drive the future form editor and the
          // doc generator; this validator is its first consumer.
          var schema = (typeof window !== 'undefined' && window.ECONOS_BLOCK_SCHEMAS)
            ? window.ECONOS_BLOCK_SCHEMAS[block.type]
            : null;
          if (schema && Array.isArray(schema.required)) {
            schema.required.forEach(function (field) {
              var value = block[field];
              var missing = value === undefined || value === null ||
                (Array.isArray(value) && value.length === 0) ||
                (typeof value === 'string' && value.trim() === '');
              if (missing) {
                err(bLabel + ': missing required field "' + field + '".');
              }
            });
          }

          // 5b. For diagram blocks: validate spec.type and svgKey
          if (block.type === 'diagram') {
            if (block.spec && typeof block.spec === 'object') {
              if (block.spec.type !== undefined && !knownDiagramTypes.has(block.spec.type)) {
                err(bLabel + ': unknown spec.type "' + block.spec.type + '".');
              }
            }
            if (block.svgKey !== undefined) {
              if (knownSvgKeys === null) {
                warn(bLabel + ': cannot validate svgKey "' + block.svgKey + '" — window.ECONOS_ICONS not yet loaded.');
              } else if (!knownSvgKeys.has(block.svgKey)) {
                err(bLabel + ': unknown svgKey "' + block.svgKey + '" (not in window.ECONOS_ICONS).');
              }
            }
          }

          // 5c. For heroVisual blocks: validate svgKey
          if (block.type === 'heroVisual' && block.svgKey !== undefined) {
            if (knownSvgKeys === null) {
              warn(bLabel + ': cannot validate svgKey "' + block.svgKey + '" — window.ECONOS_ICONS not yet loaded.');
            } else if (!knownSvgKeys.has(block.svgKey)) {
              err(bLabel + ': unknown svgKey "' + block.svgKey + '" (not in window.ECONOS_ICONS).');
            }
          }

          // ── 6. Content-length budgets ─────────────────────────────────

          // tile: head / body
          if (block.type === 'tile') {
            if (typeof block.head === 'string' && block.head.length > BUDGETS.tileHead) {
              warn(bLabel + ': tile.head exceeds ' + BUDGETS.tileHead + ' chars (' + block.head.length + '). Content: "' + block.head.slice(0, 60) + '".');
            }
            if (typeof block.body === 'string' && block.body.length > BUDGETS.tileBody) {
              warn(bLabel + ': tile.body exceeds ' + BUDGETS.tileBody + ' chars (' + block.body.length + ').');
            }
          }

          // calloutStrip / tip: text
          if (block.type === 'calloutStrip' || block.type === 'tip') {
            if (typeof block.text === 'string' && block.text.length > BUDGETS.calloutText) {
              warn(bLabel + ': callout text exceeds ' + BUDGETS.calloutText + ' chars (' + block.text.length + ').');
            }
          }

          // examEdge: text
          if (block.type === 'examEdge') {
            if (typeof block.text === 'string' && block.text.length > BUDGETS.examEdge) {
              warn(bLabel + ': examEdge.text exceeds ' + BUDGETS.examEdge + ' chars (' + block.text.length + ').');
            }
          }

          // flow-type blocks: title / subtitle fields
          // mechanismChain, rippleCascade, opposingFlows, timeline carry title/subtitle
          var FLOW_BLOCK_TYPES = new Set([
            'mechanismChain', 'rippleCascade', 'opposingFlows', 'timeline',
            'spectrum', 'satelliteDiagram', 'policyToolkit'
          ]);
          if (FLOW_BLOCK_TYPES.has(block.type)) {
            if (typeof block.title === 'string' && block.title.length > BUDGETS.flowTitle) {
              warn(bLabel + ': title exceeds ' + BUDGETS.flowTitle + ' chars (' + block.title.length + '). Content: "' + block.title.slice(0, 40) + '".');
            }
            if (typeof block.subtitle === 'string' && block.subtitle.length > BUDGETS.flowSub) {
              warn(bLabel + ': subtitle exceeds ' + BUDGETS.flowSub + ' chars (' + block.subtitle.length + ').');
            }
            if (typeof block.sub === 'string' && block.sub.length > BUDGETS.flowSub) {
              warn(bLabel + ': sub exceeds ' + BUDGETS.flowSub + ' chars (' + block.sub.length + ').');
            }
          }
        });
      }

      // ── 7. Anti-pattern: >2 tile-grid-style cards in a topic ──────────
      if (isTileGridCard(card)) {
        tileGridCount++;
        if (tileGridCount > 2) {
          warn(label + ': this is the ' + tileGridCount + 'th tile-grid-style card in this topic. The design rule allows at most 2.');
        }
      }

      // ── 8. Anti-pattern: two consecutive cards with the same primary template ──
      var currentTemplate = card.template || (usesBlocks ? '__blocks__' : '__generic__');
      if (prevTemplate !== null && prevTemplate === currentTemplate) {
        warn(label + ': consecutive cards share the same primary pattern/template ("' + currentTemplate + '"). Vary the storytelling pattern.');
      }
      prevTemplate = currentTemplate;
    });

    return { errors: errors, warnings: warnings };
  }

  // ─── Auto-run on DOMContentLoaded in dev mode only ────────────────────────

  function autoRun() {
    if (!isDevMode()) return;

    var report = validate();
    if (report.errors.length === 0 && report.warnings.length === 0) {
      console.groupCollapsed('[EconosDebug] validate — all clear');
      console.log('No issues found in ECONOS_TOPIC.');
      console.groupEnd();
      return;
    }

    if (report.errors.length > 0) {
      console.group('[EconosDebug] validate — ERRORS (' + report.errors.length + ')');
      report.errors.forEach(function (msg) { console.error(msg); });
      console.groupEnd();
    }

    if (report.warnings.length > 0) {
      console.group('[EconosDebug] validate — WARNINGS (' + report.warnings.length + ')');
      report.warnings.forEach(function (msg) { console.warn(msg); });
      console.groupEnd();
    }
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', autoRun);
    } else {
      autoRun();
    }
  }

  // ─── Public API ───────────────────────────────────────────────────────────
  if (typeof window !== 'undefined') {
    window.EconosDebug = window.EconosDebug || {};
    window.EconosDebug.validate = validate;
  }

})();
