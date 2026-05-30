/* js/blocks/_schema.js
   ───────────────────────────────────────────────────────────────────────────
   The single source of truth for block-type field shapes. Used today by the
   validator (js/render-validate.js) — and intended to be used tomorrow by:
     • A form-based editor (auto-generate per-block inputs from the schema)
     • A doc generator (auto-emit per-block reference into RENDER_BLOCKS.md)
     • The future CMS / Postgres backend (validate cards on insert/update)

   Shape:
     ECONOS_BLOCK_SCHEMAS[<blockType>] = {
       required: [<fieldName>, ...],          // missing → validator error
       optional: [<fieldName>, ...],          // accepted, no error if absent
       arrays:   { <fieldName>: {             // schema for the items in an array
         required: [...],
         optional: [...]
       } },
       group:    'core' | 'compare' | 'flow' | 'structure' | 'data' | 'game' | 'diagram',
       summary:  'one-line description (used by editor + doc generator)'
     }

   Adding a new block type? See docs/ADDING_NEW_BLOCKS.md. The 9-step recipe
   makes adding an entry here step 2.
   ─────────────────────────────────────────────────────────────────────────── */
(function (global) {
  'use strict';

  var SCHEMAS = {
    /* ── Core (js/render-blocks.js) ──────────────────────────────────────── */
    sectionHeader: {
      required: ['label'],
      optional: ['icon', 'rule'],
      group: 'core',
      summary: 'Section divider with label and optional rule.'
    },
    calloutStrip: {
      required: ['text'],
      optional: ['tone', 'icon'],
      group: 'core',
      summary: 'Toned callout strip with optional icon.'
    },
    tip: {
      required: ['text'],
      optional: ['tone', 'icon'],
      group: 'core',
      summary: 'Alias of calloutStrip — same renderer, semantic intent: "tip".'
    },
    heroVisual: {
      required: ['svgKey'],
      optional: ['height', 'caption'],
      group: 'core',
      summary: 'Static SVG hero from window.ECONOS_ICONS.'
    },
    grid: {
      required: ['children'],
      optional: ['cols', 'gap', 'cycleTones'],
      group: 'core',
      summary: 'CSS-grid wrapper; children rendered recursively. cycleTones:true auto-assigns tones to untoned children.'
    },
    tile: {
      required: ['head'],
      optional: ['tone', 'icon', 'body', 'colSpan', 'rowSpan', 'span'],
      group: 'core',
      summary: 'Coloured content tile with optional icon, head, body.'
    },
    bigIdea: {
      required: ['text'],
      optional: [],
      group: 'core',
      summary: 'Always-green concept statement.'
    },
    examEdge: {
      required: ['text'],
      optional: ['title'],
      group: 'core',
      summary: 'Purple exam-edge callout.'
    },
    warning: {
      required: ['text'],
      optional: ['icon'],
      group: 'core',
      summary: 'Amber caveat callout.'
    },

    /* ── Compare group (js/blocks/compare.js) ────────────────────────────── */
    versusRows: {
      required: ['rows'],
      optional: ['left', 'right'],
      arrays: { rows: { required: ['criterion', 'left', 'right'] } },
      group: 'compare',
      summary: 'Criteria × alternatives comparison table.'
    },
    decisionMatrix: {
      required: ['rows'],
      optional: ['columns'],
      arrays: { rows: { required: ['cells'] } },
      group: 'compare',
      summary: 'Scrollable multi-column data table.'
    },
    trafficLight: {
      required: [],
      optional: ['green', 'amber', 'red'],
      group: 'compare',
      summary: 'Green/amber/red verdict bands. Any omitted band is hidden.'
    },
    glossaryRow: {
      required: ['terms'],
      optional: [],
      arrays: { terms: { required: ['term', 'definition'] } },
      group: 'compare',
      summary: 'Horizontal term/definition strip.'
    },
    pair: {
      required: ['left', 'right'],
      optional: ['vsLabel'],
      group: 'compare',
      summary: 'Two-column side-by-side with optional centre "vs" badge.'
    },

    /* ── Flow group (js/blocks/flow.js) ──────────────────────────────────── */
    mechanismChain: {
      required: ['steps'],
      optional: ['breakpoints'],
      arrays: {
        steps: { required: ['label'], optional: ['detail'] },
        breakpoints: { required: ['label'], optional: ['tone'] }
      },
      group: 'flow',
      summary: 'Horizontal text-only causal chain (label → label → label).'
    },
    stepChain: {
      required: ['steps'],
      optional: ['cycleTones'],
      arrays: {
        steps: { required: ['head'], optional: ['body', 'tone', 'icon'] }
      },
      group: 'flow',
      summary: 'Rich numbered tile chain with arrows. Tones auto-cycle.'
    },
    rippleCascade: {
      required: ['rounds'],
      optional: ['initial', 'leakageArrows'],
      arrays: { rounds: { required: ['round', 'amount'] } },
      group: 'flow',
      summary: 'Decreasing-bar multiplier rounds with optional leakage arrows.'
    },
    opposingFlows: {
      required: ['left', 'right'],
      optional: ['result'],
      group: 'flow',
      summary: 'Two opposing arrows netting to a result.'
    },
    timeline: {
      required: ['events'],
      optional: [],
      arrays: { events: { required: ['year', 'title'], optional: ['tone', 'body'] } },
      group: 'flow',
      summary: 'Vertical chronological event list with year markers.'
    },

    /* ── Structure group (js/blocks/structure.js) ────────────────────────── */
    spectrum: {
      required: ['bands'],
      optional: ['axis'],
      arrays: { bands: { required: ['label'], optional: ['tone', 'icon'] } },
      group: 'structure',
      summary: 'Regime bands along a labelled axis.'
    },
    caseStudies: {
      required: ['cases'],
      optional: ['cols'],
      arrays: { cases: { required: ['title'], optional: ['cause', 'outcome', 'verdict', 'tone'] } },
      group: 'structure',
      summary: 'Grid of case-study tiles with verdict pill.'
    },
    satelliteDiagram: {
      required: ['centre', 'satellites'],
      optional: [],
      arrays: { satellites: { required: ['label'], optional: ['metric', 'tone'] } },
      group: 'structure',
      summary: 'Central concept + satellite chips (CSS, no SVG).'
    },
    policyToolkit: {
      required: ['tools'],
      optional: [],
      arrays: { tools: { required: ['label'], optional: ['bestFor', 'risk', 'tone'] } },
      group: 'structure',
      summary: 'Policy-option cards (label / best-for / risk).'
    },

    /* ── Data group (js/blocks/data.js) ──────────────────────────────────── */
    metricCard: {
      required: ['label', 'value'],
      optional: ['tone', 'delta', 'context'],
      group: 'data',
      summary: 'Single big numeric metric with optional delta and context.'
    },
    targetGauge: {
      required: ['actual', 'target'],
      optional: ['label', 'tone'],
      group: 'data',
      summary: 'Visual gauge showing actual vs target.'
    },
    equationHero: {
      required: ['equation'],
      optional: ['terms', 'caption'],
      group: 'data',
      summary: 'Big LHS = RHS equation with optional term definitions underneath.'
    },
    workedExampleStrip: {
      required: ['steps'],
      optional: ['scenario'],
      arrays: { steps: { required: ['label'], optional: ['detail', 'answer'] } },
      group: 'data',
      summary: 'Inline horizontal worked-example strip.'
    },
    factChip: {
      required: ['label'],
      optional: ['value', 'tone', 'source'],
      group: 'data',
      summary: 'Inline source-cited fact chip.'
    },

    /* ── Game theory group (js/blocks/game.js) ───────────────────────────── */
    payoffMatrix: {
      required: ['rows'],
      optional: ['rowPlayer', 'colPlayer', 'colLabels'],
      arrays: {
        rows: {
          required: ['label', 'cells'],
          optional: []
        }
      },
      group: 'game',
      summary: 'Strategic-form N×M payoff matrix with row/column player labels and optional Nash-equilibrium cell highlighting. cells:[{a,b,nash?}].'
    },

    /* ── Diagram group (js/blocks/diagram.js + js/blocks/econ-diagram.js) ─ */
    diagram: {
      required: [],
      optional: ['spec', 'svgKey', 'caption', 'height'],
      group: 'diagram',
      summary: 'Static SVG diagram — pass spec:{type,…} for a generator, or svgKey for a legacy icon.'
    },
    econDiagram: {
      required: ['chart', 'views'],
      optional: [],
      arrays: { views: { required: ['label'], optional: ['shifts', 'points', 'arrows', 'areas', 'brackets', 'analysis'] } },
      group: 'diagram',
      summary: 'Declarative interactive economic diagram. chart names a registered family (\'adas\', \'phillips\'). Each view: shifts:{curveId:Δ|{dx,dy}}, points:[namedPoints], arrows:[[A,B,{tone}]], areas:[{between,x,tone,hatch}], brackets:[{x|between,y,label,tone}], analysis. Engine computes every coordinate (line/curve intersections, label placement, CSS-only step toggle). Curve kinds: linear, vertical, horizontal, fn, curve.'
    }
  };

  global.ECONOS_BLOCK_SCHEMAS = SCHEMAS;

  /* Convenience: return the list of all known block types. */
  global.ECONOS_BLOCK_SCHEMA_TYPES = Object.keys(SCHEMAS);

})(typeof window !== 'undefined' ? window : globalThis);
