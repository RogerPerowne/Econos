/* ============================================================
   Econos Diagram Language (EDL) — econos-diagrams.js

   Public global: window.ECONOS_DIAGRAMS

   What this is
   ------------
   A *domain-specific* economics diagram engine. Authors describe the
   economics (a market, a tax, an externality, a PPF...) in a small
   semantic spec; the engine solves the geometry, layering, labels,
   arrows and rendering. It is NOT a generic charting library.

       const out = window.ECONOS_DIAGRAMS.render({
         version: 1,
         type: 'market',
         intent: 'demand-shift-right'
       });
       out.svg          // string of SVG
       out.warnings     // string[]
       out.derived      // solved geometry (equilibria, wedges...)
       out.renderPlan   // layer-sorted element list
       out.hidden       // labels dropped by the collision pass
       out.collisionsResolved

   Relationship to the legacy chart engine (window.ECONOS_PPF)
   -----------------------------------------------------------
   The older engine in js/charts/ppf.js stays untouched and keeps
   driving all current Learn It / Link It / Land It content. EDL
   *detects* a legacy chart spec (raw `curves: [{ d: 'M ...' }]`,
   `chartArea`, etc.) and transparently delegates to ECONOS_PPF, so a
   single render() entry point can serve both worlds during migration.
   See the LEGACY section at the foot of this file.

   File organisation (intended future split)
   -----------------------------------------
   The static <script> loading + the node test harness (which evals
   this file with `new Function('window', src)`) both want a single
   browser global with no ES-module imports. So EDL ships as ONE
   bundled IIFE, but is internally sectioned to mirror the planned
   module tree. When a bundler lands, lift each banner into its file:

     registry.js   -> §REGISTRY        themes.js   -> §THEME
     layers.js     -> §LAYERS          markers.js  -> §MARKERS
     geometry/*    -> §GEOMETRY        layout/*    -> §LAYOUT
     validate.js   -> §VALIDATE        normalise.js-> §NORMALISE
     compile.js    -> §COMPILE         render-*.js -> §RENDER
     templates/*   -> §TEMPLATES       legacy/*    -> §LEGACY

   House style (see docs/DIAGRAM_LANGUAGE_GUIDE.md)
   -----------------------------------------------
   - Premium, calm, Apple/Notion-like. White / pale-grey ground.
   - Open chevron arrowheads by default, never filled triangles.
   - Round line caps + joins. Soft borders, low-opacity region fills.
   - UK English. Short dashes only, never long dashes.
   ============================================================ */
(function () {
  'use strict';

  var VERSION = '1.0.0';

  /* ==========================================================
     §REGISTRY — the allowed vocabulary of the language.

     Everything the validator and linter check lives here so the
     grammar has a single source of truth.
     ========================================================== */
  var REGISTRY = {
    // `families`, `intents` (intent -> family) and `showTokens` are all
    // DERIVED from the §FAMILIES descriptor map by rebuildGrammar(), so a
    // family's vocabulary lives in exactly one place and adding a family is
    // a single registerFamily() call rather than an edit in four spots.
    // These start empty and are filled at load (and on every registerFamily).
    families: [],
    intents: {},

    // Base show tokens understood by the core families. A family may
    // contribute additional tokens via its descriptor; rebuildGrammar()
    // unions them into this list. The validator warns on anything unknown.
    baseShowTokens: [
      'equilibrium',
      'equilibrium-before',
      'equilibrium-after',
      'shift-arrow',
      'price-change',
      'quantity-change',
      'price-line',
      'quantity-line',
      'guides',
      'ticks',
      'tax-wedge',
      'subsidy-wedge',
      'consumer-burden',
      'producer-burden',
      'consumer-benefit',
      'producer-benefit',
      'government-cost',
      'government-revenue',
      'deadweight-loss',
      'shortage',
      'surplus',
      'price-cap',
      'price-floor',
      'mpb',
      'msb',
      'mpc',
      'msc',
      'external-cost',
      'external-benefit',
      'welfare-loss',
      'social-optimum',
      'free-market',
      'correction-arrow',
      'efficient-point',
      'inefficient-point',
      'unattainable-point',
      'opportunity-cost',
      'zones',
      'frontier-before',
      'frontier-after',
      'lras',
      'keynesian',
      'output-gap',
      'natural-rate',
      'expectations',
      'movement',
      'takeaway',
    ],

    arrowKinds: [
      'shift',
      'movement',
      'price-change',
      'quantity-change',
      'wedge',
      'bracket',
      'shortage',
      'surplus',
      'cause-effect',
      'perpendicular-between-curves',
      'flow',
    ],

    routes: [
      'auto',
      'direct',
      'curved',
      'orthogonal',
      'vertical',
      'horizontal',
      'bracket',
      'perpendicular',
      'arc',
    ],

    heads: [
      'chevron',
      'chevron-small',
      'double-chevron',
      'dot',
      'bar',
      'bracket',
      'triangle',
    ],

    tones: [
      'demand',
      'supply',
      'old',
      'gain',
      'loss',
      'neutral',
      'accent',
      'social',
      'private',
      'ink',
    ],

    viewports: ['card', 'stage', 'article', 'full'],
    modes: ['learn', 'exam', 'debug'],
  };

  /* ==========================================================
     §FAMILIES — one descriptor per diagram family.

     This is the source of truth the REGISTRY indices are derived
     from. A descriptor is a PLAIN, SERIALISABLE record of the
     family's vocabulary plus two code hooks:

       {
         family:      string,           // the family id
         axes:        { x, y },         // default axis labels
         intents:     [intentId, ...],  // intents this family owns
         showTokens:  [token, ...],     // tokens BEYOND the base set
         defaultShow: { intent: [token,...] },  // intent-only defaults
         normalise:   fn(spec),         // optional: fill family defaults  (CODE)
         template:    fn(spec)->built,  // the scene builder              (CODE)
       }

     The data fields (everything except `normalise`/`template`) are
     exactly what `grammar()` dumps — the shape you would seed a
     Postgres reference table from. The two function hooks stay in the
     engine, keyed by `family`. That seam is what lets the grammar be
     stored as data without the renderer chasing it into the database.

     Adding a family — including a future `costs` or multi-state
     family — is one `registerFamily({...})` call. No edits to the
     validator, normaliser, axis map or default-show map: they all read
     through here. That is the fix for "EDL only does the eight
     families": the eight are not special, they are merely the eight
     that ship registered.
     ========================================================== */
  var FAMILIES = {};
  var FAMILY_AXES = {}; // derived: family -> { x, y } axis labels
  var TEMPLATES = {}; // derived: family -> scene builder (also set by registerFamily)

  // Declarative annotation vocabulary — the sanctioned escape hatch that
  // replaces hand-authored <svg>. See applyAnnotations().
  var ANNOTATION_TYPES = ['label', 'marker', 'bracket', 'region', 'segment', 'arrow'];

  // Rebuild the flat REGISTRY indices (families / intents / showTokens)
  // and FAMILY_AXES from the FAMILIES descriptors. Called once at load and
  // again after every registerFamily() so the language stays consistent.
  function rebuildGrammar() {
    var families = [];
    var intents = {};
    var tokens = REGISTRY.baseShowTokens.slice();
    Object.keys(FAMILIES).forEach(function (fam) {
      var d = FAMILIES[fam];
      families.push(fam);
      (d.intents || []).forEach(function (it) {
        intents[it] = fam;
      });
      (d.showTokens || []).forEach(function (t) {
        tokens.push(t);
      });
      FAMILY_AXES[fam] = d.axes || { x: 'Quantity', y: 'Price' };
    });
    REGISTRY.families = families;
    REGISTRY.intents = intents;
    REGISTRY.showTokens = uniq(tokens);
  }

  // Public extensibility seam. Register (or extend) a family from one
  // descriptor; new vocabulary becomes valid immediately. Built-in
  // families are registered the same way below — they are not special.
  function registerFamily(desc) {
    if (!desc || typeof desc.family !== 'string') {
      throw new Error('registerFamily: descriptor needs a string `family`');
    }
    if (desc.intents && !Array.isArray(desc.intents)) {
      throw new Error('registerFamily: `intents` must be an array of intent ids');
    }
    FAMILIES[desc.family] = assign(
      { intents: [], showTokens: [], defaultShow: {}, axes: { x: 'Quantity', y: 'Price' } },
      FAMILIES[desc.family] || {},
      desc
    );
    if (typeof desc.template === 'function') TEMPLATES[desc.family] = desc.template;
    rebuildGrammar();
    return FAMILIES[desc.family];
  }

  /* ----- Built-in family descriptors (metadata + normalise hooks).
     Their `template` functions are defined in §TEMPLATES and wired on
     afterwards (templates reference geometry helpers declared later in
     the file, so they cannot be attached here). ----- */
  registerFamily({
    family: 'market',
    axes: { x: 'Quantity', y: 'Price' },
    intents: [
      'market-equilibrium',
      'demand-shift-right',
      'demand-shift-left',
      'supply-shift-right',
      'supply-shift-left',
      'simultaneous-demand-and-supply-shift',
    ],
    defaultShow: {
      'market-equilibrium': ['equilibrium', 'guides'],
      'demand-shift-right': ['equilibrium', 'shift-arrow', 'price-change', 'quantity-change'],
      'demand-shift-left': ['equilibrium', 'shift-arrow', 'price-change', 'quantity-change'],
      'supply-shift-right': ['equilibrium', 'shift-arrow', 'price-change', 'quantity-change'],
      'supply-shift-left': ['equilibrium', 'shift-arrow', 'price-change', 'quantity-change'],
      'simultaneous-demand-and-supply-shift': ['equilibrium', 'shift-arrow'],
    },
    normalise: function (spec) {
      if (!spec.curves || !Object.keys(spec.curves).length) {
        spec.curves = {
          D1: { role: 'demand', elasticity: 'normal' },
          S: { role: 'supply', elasticity: 'normal' },
        };
      }
    },
  });

  registerFamily({
    family: 'tax',
    axes: { x: 'Quantity', y: 'Price' },
    intents: [
      'tax-incidence',
      'tax-inelastic-demand',
      'tax-elastic-demand',
      'tax-inelastic-supply',
      'tax-elastic-supply',
      'tax-revenue-and-deadweight-loss',
    ],
    defaultShow: {
      'tax-incidence': ['tax-wedge', 'consumer-burden', 'producer-burden', 'deadweight-loss'],
      'tax-inelastic-demand': ['tax-wedge', 'consumer-burden', 'producer-burden'],
      'tax-elastic-demand': ['tax-wedge', 'consumer-burden', 'producer-burden'],
      'tax-inelastic-supply': ['tax-wedge', 'consumer-burden', 'producer-burden'],
      'tax-elastic-supply': ['tax-wedge', 'consumer-burden', 'producer-burden'],
      'tax-revenue-and-deadweight-loss': ['tax-wedge', 'government-revenue', 'deadweight-loss'],
    },
    normalise: function (spec) {
      spec.demand = spec.demand || {};
      spec.supply = spec.supply || {};
      if (spec.intent === 'tax-inelastic-demand') spec.demand.elasticity = spec.demand.elasticity || 'inelastic';
      if (spec.intent === 'tax-elastic-demand') spec.demand.elasticity = spec.demand.elasticity || 'elastic';
      if (spec.intent === 'tax-inelastic-supply') spec.supply.elasticity = spec.supply.elasticity || 'inelastic';
      if (spec.intent === 'tax-elastic-supply') spec.supply.elasticity = spec.supply.elasticity || 'elastic';
    },
  });

  registerFamily({
    family: 'subsidy',
    axes: { x: 'Quantity', y: 'Price' },
    intents: ['subsidy-incidence', 'subsidy-consumer-benefit', 'subsidy-producer-benefit', 'subsidy-cost'],
    defaultShow: {
      'subsidy-incidence': ['subsidy-wedge', 'consumer-benefit', 'producer-benefit', 'government-cost'],
      'subsidy-consumer-benefit': ['subsidy-wedge', 'consumer-benefit'],
      'subsidy-producer-benefit': ['subsidy-wedge', 'producer-benefit'],
      'subsidy-cost': ['subsidy-wedge', 'government-cost'],
    },
  });

  registerFamily({
    family: 'price-control',
    axes: { x: 'Quantity', y: 'Price' },
    intents: ['maximum-price-shortage', 'minimum-price-surplus'],
    defaultShow: {
      'maximum-price-shortage': ['price-cap', 'shortage'],
      'minimum-price-surplus': ['price-floor', 'surplus'],
    },
  });

  registerFamily({
    family: 'externality',
    axes: { x: 'Quantity', y: 'Price' },
    intents: [
      'negative-production-externality',
      'positive-consumption-externality',
      'welfare-loss-externality',
      'socially-optimal-output',
    ],
    defaultShow: {
      'negative-production-externality': ['msc', 'welfare-loss'],
      'positive-consumption-externality': ['msb', 'welfare-loss'],
      'welfare-loss-externality': ['welfare-loss'],
      'socially-optimal-output': ['social-optimum', 'welfare-loss'],
    },
  });

  registerFamily({
    family: 'ppf',
    axes: { x: 'Consumer goods', y: 'Capital goods' },
    intents: [
      'ppf-basic',
      'ppf-efficient-inefficient-unattainable',
      'ppf-outward-shift',
      'ppf-inward-shift',
      'ppf-opportunity-cost',
      'ppf-specialisation',
    ],
    defaultShow: {
      'ppf-basic': [],
      'ppf-efficient-inefficient-unattainable': ['efficient-point', 'inefficient-point', 'unattainable-point'],
      'ppf-outward-shift': ['frontier-after'],
      'ppf-inward-shift': ['frontier-after'],
      'ppf-opportunity-cost': ['opportunity-cost'],
      'ppf-specialisation': ['opportunity-cost'],
    },
  });

  registerFamily({
    family: 'ad-as',
    axes: { x: 'Real output (Y)', y: 'Price level (P)' },
    intents: [
      'ad-shift-right',
      'ad-shift-left',
      'sras-shift-left',
      'sras-shift-right',
      'classical-lras',
      'keynesian-as',
      'output-gap',
    ],
    defaultShow: {
      'ad-shift-right': ['equilibrium'],
      'ad-shift-left': ['equilibrium'],
      'sras-shift-right': ['equilibrium'],
      'sras-shift-left': ['equilibrium'],
      'classical-lras': ['lras', 'equilibrium'],
      'keynesian-as': ['equilibrium'],
      'output-gap': ['lras', 'output-gap'],
    },
  });

  registerFamily({
    family: 'phillips',
    axes: { x: 'Unemployment (%)', y: 'Inflation (%)' },
    intents: ['short-run-phillips-curve', 'long-run-phillips-curve', 'expectations-shift'],
    defaultShow: {
      'short-run-phillips-curve': [],
      'long-run-phillips-curve': ['natural-rate'],
      'expectations-shift': ['expectations'],
    },
  });

  /* ==========================================================
     §LAYERS — central draw-order map.

     Every renderable element MUST carry a layer. The renderer sorts
     by (layer, priority, declaration-index) so paint order is data,
     never a side effect of the call order.
     ========================================================== */
  var LAYERS = {
    background: 0,
    zones: 10,
    regions: 20,
    gridlines: 30,
    axes: 40,
    curvesOld: 50,
    curvesMain: 60,
    arrowsBehind: 70,
    points: 80,
    tickLabels: 90,
    curveLabels: 100,
    pointLabels: 110,
    callouts: 120,
    arrowsFront: 130,
    debug: 999,
  };

  /* ==========================================================
     §THEME — Econos colours, typography, strokes, viewports.
     ========================================================== */
  var THEME = {
    ink: '#0F172A',
    axis: '#334155',
    grid: '#E9EDF3',
    guide: '#CBD5E1',
    paper: '#FFFFFF',
    pillBg: '#F8FAFC',
    pillBorder: '#E2E8F0',
    examInk: '#1E293B',
    examCurve: '#334155',

    tones: {
      demand: { stroke: '#2563EB', fill: '#2563EB', soft: '#DBEAFE' },
      supply: { stroke: '#D97706', fill: '#D97706', soft: '#FEF3C7' },
      old: { stroke: '#94A3B8', fill: '#94A3B8', soft: '#F1F5F9' },
      gain: { stroke: '#059669', fill: '#10B981', soft: '#D1FAE5' },
      loss: { stroke: '#DC2626', fill: '#EF4444', soft: '#FEE2E2' },
      neutral: { stroke: '#475569', fill: '#64748B', soft: '#F1F5F9' },
      accent: { stroke: '#7C3AED', fill: '#7C3AED', soft: '#EDE9FE' },
      social: { stroke: '#059669', fill: '#059669', soft: '#D1FAE5' },
      private: { stroke: '#2563EB', fill: '#2563EB', soft: '#DBEAFE' },
      ink: { stroke: '#0F172A', fill: '#0F172A', soft: '#E2E8F0' },
    },

    font:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    size: {
      axis: 13,
      curve: 13,
      point: 12,
      callout: 12,
      tick: 12,
      pill: 12,
    },
    minLabel: 11,
    strokeMain: 2.2,
    strokeOld: 1.7,
    strokeGuide: 1.1,
    strokeAxis: 1.6,
    pointR: 4.2,
  };

  var VIEWPORTS = {
    card: { w: 520, h: 360, margin: { l: 54, r: 30, t: 22, b: 46 }, density: 'compact' },
    stage: { w: 640, h: 440, margin: { l: 62, r: 40, t: 26, b: 54 }, density: 'rich' },
    article: { w: 760, h: 520, margin: { l: 70, r: 56, t: 30, b: 62 }, density: 'rich' },
    full: { w: 920, h: 620, margin: { l: 78, r: 66, t: 36, b: 70 }, density: 'rich' },
  };

  /* ==========================================================
     §UTIL — tiny self-contained helpers (no dependencies).
     ========================================================== */
  function clone(o) {
    if (o === null || typeof o !== 'object') return o;
    if (Array.isArray(o)) return o.map(clone);
    var out = {};
    Object.keys(o).forEach(function (k) {
      out[k] = clone(o[k]);
    });
    return out;
  }

  function assign() {
    var args = Array.prototype.slice.call(arguments);
    return Object.assign.apply(null, [{}].concat(args));
  }

  function r2(n) {
    return Math.round(n * 100) / 100;
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function clampUnit(v) {
    return Math.max(0, Math.min(1, v));
  }

  function uniq(arr) {
    var seen = {};
    return arr.filter(function (x) {
      if (seen[x]) return false;
      seen[x] = true;
      return true;
    });
  }

  // Estimated text width — good enough for the collision pass without
  // a live DOM (the node test harness has no measuring context).
  function textWidth(text, size) {
    return String(text).length * size * 0.56 + 4;
  }

  /* ==========================================================
     §GEOMETRY — line/curve defs, intersections, sampling, regions.

     Data space: x in [0,1] (quantity / output), y in [0,1]
     (price / cost), y growing UP (economics convention). The
     renderer maps to SVG pixels.

     A "def" is one of:
       { type:'linear',   m, b }            y = m*x + b
       { type:'vertical', x }               x = const
       { type:'horizontal', y }             y = const
       { type:'concave', xMax, yMax, k }    bowed-out PPF frontier
       { type:'keynesian', floor, kink, full, ceil }  reverse-L AS
       { type:'phillips', floor, amp, p }   convex SRPC
     ========================================================== */
  function linear(m, b) {
    return { type: 'linear', m: m, b: b };
  }

  // Build a straight line through an anchor with a given slope.
  function lineThrough(ax, ay, slope) {
    return linear(slope, ay - slope * ax);
  }

  // Translate a line horizontally by dx in quantity (parallel shift).
  function shiftLineX(def, dx) {
    if (def.type === 'vertical') return { type: 'vertical', x: def.x + dx };
    if (def.type === 'horizontal') return assign(def);
    return linear(def.m, def.b - def.m * dx);
  }

  // Translate a line vertically by dy in price (tax / subsidy wedge).
  function shiftLineY(def, dy) {
    if (def.type === 'horizontal') return { type: 'horizontal', y: def.y + dy };
    if (def.type === 'vertical') return assign(def);
    return linear(def.m, def.b + dy);
  }

  function yAtX(def, x) {
    switch (def.type) {
      case 'linear':
        return def.m * x + def.b;
      case 'horizontal':
        return def.y;
      case 'vertical':
        return null; // undefined for a vertical line
      case 'concave': {
        var t = x / def.xMax;
        if (t >= 1) return 0;
        if (t <= 0) return def.yMax;
        var k = def.k || 2;
        return def.yMax * Math.pow(1 - Math.pow(t, k), 1 / k);
      }
      case 'keynesian': {
        // flat 'floor' until the kink, then rises steeply toward 'ceil'
        // as output approaches the 'full' capacity ceiling.
        if (x <= def.kink) return def.floor;
        var span = Math.max(1e-6, def.full - def.kink);
        var t2 = Math.min(1, (x - def.kink) / span);
        return def.floor + (def.ceil - def.floor) * Math.pow(t2, 2.1);
      }
      case 'phillips':
        return def.floor + def.amp * Math.pow(1 - clampUnit(x), def.p || 1.7);
      default:
        return null;
    }
  }

  function xAtY(def, y) {
    if (def.type === 'linear') return (y - def.b) / def.m;
    if (def.type === 'vertical') return def.x;
    if (def.type === 'horizontal') return null;
    // numeric for curved defs
    var lo = 0;
    var hi = 1;
    for (var i = 0; i < 40; i++) {
      var mid = (lo + hi) / 2;
      var ym = yAtX(def, mid);
      if (ym == null) break;
      // y decreasing in x for our curved defs
      if (ym > y) lo = mid;
      else hi = mid;
    }
    return (lo + hi) / 2;
  }

  // Intersection of two defs. Analytic for linear pairs; numeric
  // bisection otherwise. Returns { x, y } in data space or null.
  function intersect(d1, d2) {
    if (d1.type === 'vertical' && d2.type === 'vertical') return null;
    if (d1.type === 'vertical') return { x: d1.x, y: yAtX(d2, d1.x) };
    if (d2.type === 'vertical') return { x: d2.x, y: yAtX(d1, d2.x) };
    if (d1.type === 'linear' && d2.type === 'linear') {
      if (Math.abs(d1.m - d2.m) < 1e-9) return null;
      var x = (d2.b - d1.b) / (d1.m - d2.m);
      return { x: x, y: yAtX(d1, x) };
    }
    // numeric: find sign change of f = y1 - y2 across [0,1]
    var f = function (xx) {
      return yAtX(d1, xx) - yAtX(d2, xx);
    };
    var prevX = 0;
    var prevF = f(0);
    var steps = 240;
    for (var i = 1; i <= steps; i++) {
      var cx = i / steps;
      var cf = f(cx);
      if (prevF === 0) return { x: prevX, y: yAtX(d1, prevX) };
      if (prevF * cf < 0) {
        var lo = prevX;
        var hi = cx;
        for (var j = 0; j < 50; j++) {
          var mid = (lo + hi) / 2;
          var fm = f(mid);
          if (prevF * fm <= 0) hi = mid;
          else lo = mid;
        }
        var xm = (lo + hi) / 2;
        return { x: xm, y: yAtX(d1, xm) };
      }
      prevX = cx;
      prevF = cf;
    }
    return null;
  }

  // Sample a def into a polyline of data-space points for drawing.
  function sampleDef(def, x0, x1, n) {
    var pts = [];
    if (def.type === 'linear') {
      pts.push({ x: x0, y: yAtX(def, x0) });
      pts.push({ x: x1, y: yAtX(def, x1) });
      return pts;
    }
    if (def.type === 'vertical') {
      pts.push({ x: def.x, y: 0 });
      pts.push({ x: def.x, y: 1 });
      return pts;
    }
    if (def.type === 'horizontal') {
      pts.push({ x: x0, y: def.y });
      pts.push({ x: x1, y: def.y });
      return pts;
    }
    var steps = n || 44;
    for (var i = 0; i <= steps; i++) {
      var x = x0 + ((x1 - x0) * i) / steps;
      pts.push({ x: x, y: yAtX(def, x) });
    }
    return pts;
  }

  /* ==========================================================
     §ELASTICITY — semantic elasticity -> slope magnitude.
     ========================================================== */
  var ELASTICITY_SLOPE = {
    'perfectly-elastic': 0,
    elastic: 0.5,
    normal: 0.9,
    unit: 1.0,
    inelastic: 1.8,
    'perfectly-inelastic': null, // vertical
  };

  function demandDef(elasticity, anchorX, anchorY) {
    var key = elasticity || 'normal';
    if (key === 'perfectly-inelastic') return { type: 'vertical', x: anchorX };
    var mag = ELASTICITY_SLOPE[key];
    if (mag == null) mag = ELASTICITY_SLOPE.normal;
    if (mag === 0) return { type: 'horizontal', y: anchorY };
    return lineThrough(anchorX, anchorY, -mag);
  }

  function supplyDef(elasticity, anchorX, anchorY) {
    var key = elasticity || 'normal';
    if (key === 'perfectly-inelastic') return { type: 'vertical', x: anchorX };
    var mag = ELASTICITY_SLOPE[key];
    if (mag == null) mag = ELASTICITY_SLOPE.normal;
    if (mag === 0) return { type: 'horizontal', y: anchorY };
    return lineThrough(anchorX, anchorY, mag);
  }

  /* ==========================================================
     §SCENE — a neutral, family-agnostic description of what to
     draw, in DATA space. Templates build a Scene; the compiler
     turns a Scene into a layered render plan.

     This is the seam that keeps templates purely about economics
     and the renderer purely about pixels.
     ========================================================== */
  function Scene() {
    return {
      curves: [], // { id, def, x0,x1, tone, style, width, dashed, label, labelAt }
      points: [], // { id, x, y, label, tone, priority, gridlines, dropTo }
      segments: [], // { id, p1, p2, tone, dashed, width }
      regions: [], // { id, polygon:[{x,y}], tone, opacity, label, labelAt }
      arrows: [], // { id, kind, p1, p2, route, head, tone, label, layer, curveDir }
      ticks: [], // { axis, value, label, priority }
      callouts: [], // { id, x, y, text, tone, priority, anchor }
      axes: { x: { label: 'Quantity' }, y: { label: 'Price' }, showOrigin: true },
    };
  }

  /* ----- Scene authoring helpers (used by templates) ----- */
  function addCurve(scene, c) {
    scene.curves.push(
      assign({ x0: 0, x1: 1, tone: 'neutral', width: THEME.strokeMain, labelAt: 'end' }, c)
    );
  }
  function addPoint(scene, p) {
    scene.points.push(assign({ tone: 'ink', priority: 85, gridlines: false }, p));
  }
  function addRegion(scene, rg) {
    scene.regions.push(assign({ tone: 'neutral', opacity: 0.16 }, rg));
  }
  function addCallout(scene, c) {
    scene.callouts.push(assign({ tone: 'accent', priority: 65, anchor: 'middle' }, c));
  }
  function dropGuides(scene, pt, opts) {
    // dashed guide lines from a point to each axis + ticks.
    var o = opts || {};
    scene.segments.push({
      id: pt.id + '-gx',
      p1: { x: pt.x, y: 0 },
      p2: { x: pt.x, y: pt.y },
      tone: 'old',
      dashed: '4 4',
      width: THEME.strokeGuide,
    });
    scene.segments.push({
      id: pt.id + '-gy',
      p1: { x: 0, y: pt.y },
      p2: { x: pt.x, y: pt.y },
      tone: 'old',
      dashed: '4 4',
      width: THEME.strokeGuide,
    });
    if (o.priceLabel) {
      scene.ticks.push({ axis: 'y', value: pt.y, label: o.priceLabel, priority: 80 });
    }
    if (o.quantityLabel) {
      scene.ticks.push({ axis: 'x', value: pt.x, label: o.quantityLabel, priority: 80 });
    }
  }

  /* ==========================================================
     §TEMPLATES — one builder per family. Each receives the
     normalised spec and returns { scene, derived, warnings, alt }.

     Templates never touch pixels. They place economics in data
     space and let the compiler/renderer handle the rest.
     ========================================================== */
  // TEMPLATES and FAMILY_AXES are declared in §FAMILIES (above) and
  // populated from the family descriptors; the builder functions below
  // attach themselves onto TEMPLATES, then a wiring pass copies them onto
  // each FAMILIES descriptor (see "wire built-in templates" below).

  // Shared base equilibrium so single-elasticity changes rotate a
  // curve about a stable centre rather than sliding the whole picture.
  var BASE = { x: 0.5, y: 0.52 };

  function showHas(show, token) {
    return show.indexOf(token) !== -1;
  }

  /* ---------- MARKET ---------- */
  TEMPLATES.market = function (spec) {
    var scene = Scene();
    var warnings = [];
    var show = spec.show;
    scene.axes.x.label = spec.axes.x.label;
    scene.axes.y.label = spec.axes.y.label;

    var dEl = (spec.curves.D1 && spec.curves.D1.elasticity) || 'normal';
    var sEl = (spec.curves.S && spec.curves.S.elasticity) || 'normal';
    var D1 = demandDef(dEl, BASE.x, BASE.y);
    var S1 = supplyDef(sEl, BASE.x, BASE.y);
    var E1 = intersect(D1, S1);

    addCurve(scene, { id: 'D1', def: D1, tone: 'demand', label: 'D', labelAt: 'end' });
    addCurve(scene, { id: 'S', def: S1, tone: 'supply', label: 'S', labelAt: 'end' });

    var derived = { E1: E1, curves: { D1: D1, S: S1 } };

    // Decide what moves from the intent / curve declarations.
    var shift = spec.shift || {};
    var dDir = directionFor(spec, 'demand');
    var sDir = directionFor(spec, 'supply');
    var mag = shift.size || 0.2;

    var D2 = null;
    var S2 = null;
    var E2 = null;

    if (dDir) {
      D2 = shiftLineX(D1, dDir === 'right' ? mag : -mag);
    }
    if (sDir) {
      S2 = shiftLineX(S1, sDir === 'right' ? mag : -mag);
    }

    if (D2 || S2) {
      var dCur = D2 || D1;
      var sCur = S2 || S1;
      E2 = intersect(dCur, sCur);
      derived.E2 = E2;
      // dim the original moved curve, draw the new one solid.
      if (D2) {
        recolourOld(scene, 'D1');
        addCurve(scene, {
          id: 'D2',
          def: D2,
          tone: 'demand',
          label: dDir === 'right' ? 'D₂' : 'D₂',
          labelAt: 'end',
        });
        // relabel original
        labelCurve(scene, 'D1', 'D₁');
      }
      if (S2) {
        recolourOld(scene, 'S');
        addCurve(scene, { id: 'S2', def: S2, tone: 'supply', label: 'S₂', labelAt: 'end' });
        labelCurve(scene, 'S', 'S₁');
      }
    }

    // equilibrium points
    var wantBefore =
      showHas(show, 'equilibrium') ||
      showHas(show, 'equilibrium-before') ||
      (!E2 && show.length === 0);
    var wantAfter = showHas(show, 'equilibrium-after') || (E2 && showHas(show, 'equilibrium'));

    if (E1 && (wantBefore || !E2)) {
      addPoint(scene, {
        id: 'E1',
        x: E1.x,
        y: E1.y,
        label: E2 ? 'E₁' : 'E',
        tone: 'ink',
        gridlines: showHas(show, 'guides') || showHas(show, 'ticks') || !E2,
        priority: 85,
      });
      if (showHas(show, 'guides') || showHas(show, 'ticks') || !E2) {
        dropGuides(scene, { id: 'E1', x: E1.x, y: E1.y }, {
          priceLabel: E2 ? 'P₁' : 'P*',
          quantityLabel: E2 ? 'Q₁' : 'Q*',
        });
      }
    }
    if (E2 && (wantAfter || E2)) {
      addPoint(scene, {
        id: 'E2',
        x: E2.x,
        y: E2.y,
        label: 'E₂',
        tone: 'accent',
        gridlines: true,
        priority: 85,
      });
      dropGuides(scene, { id: 'E2', x: E2.x, y: E2.y }, {
        priceLabel: 'P₂',
        quantityLabel: 'Q₂',
      });
    }

    // shift arrow (semantic — a short horizontal nudge between curves)
    if (E2 && (showHas(show, 'shift-arrow') || show.length === 0)) {
      if (D2) pushShiftArrow(scene, D1, D2, dDir, 'demand', 'Demand');
      if (S2) pushShiftArrow(scene, S1, S2, sDir, 'supply', 'Supply');
    }

    // price / quantity change indicators on the axes
    if (E1 && E2 && showHas(show, 'price-change')) {
      pushAxisChange(scene, 'price', E1.y, E2.y);
    }
    if (E1 && E2 && showHas(show, 'quantity-change')) {
      pushAxisChange(scene, 'quantity', E1.x, E2.x);
    }

    addTakeaway(scene, spec, show);
    return { scene: scene, derived: derived, warnings: warnings, alt: marketAlt(spec, derived) };
  };

  /* ---------- TAX ---------- */
  TEMPLATES.tax = function (spec) {
    var scene = Scene();
    var warnings = [];
    var show = spec.show;
    scene.axes.x.label = spec.axes.x.label;
    scene.axes.y.label = spec.axes.y.label;

    var dEl = (spec.demand && spec.demand.elasticity) || 'normal';
    var sEl = (spec.supply && spec.supply.elasticity) || 'normal';
    var D = demandDef(dEl, BASE.x, BASE.y);
    var S1 = supplyDef(sEl, BASE.x, BASE.y);
    var E1 = intersect(D, S1);

    var t = (spec.tax && spec.tax.size) || 0.18;
    var S2 = shiftLineY(S1, t); // specific tax: parallel upward shift
    var E2 = intersect(D, S2);
    var qTax = E2.x;
    var pc = E2.y; // consumer price
    var pp = yAtX(S1, qTax); // producer price (read off original supply)

    addCurve(scene, { id: 'D', def: D, tone: 'demand', label: 'D', labelAt: 'end' });
    recolourTone(scene, addReturnCurve(scene, { id: 'S1', def: S1, tone: 'old', label: 'S', labelAt: 'end' }));
    addCurve(scene, { id: 'S2', def: S2, tone: 'supply', label: 'S + tax', labelAt: 'end' });
    labelCurve(scene, 'S1', 'S');

    var derived = {
      E1: E1,
      E2: E2,
      curves: { D: D, S1: S1, S2: S2 },
      consumerPrice: pc,
      producerPrice: pp,
      taxPerUnit: t,
      quantity: qTax,
    };

    addPoint(scene, { id: 'E1', x: E1.x, y: E1.y, label: 'E', tone: 'ink', priority: 80 });
    addPoint(scene, { id: 'Ec', x: qTax, y: pc, label: '', tone: 'demand', priority: 78 });
    addPoint(scene, { id: 'Ep', x: qTax, y: pp, label: '', tone: 'supply', priority: 78 });

    // price guides for Pc, P*, Pp
    scene.ticks.push({ axis: 'y', value: pc, label: 'Pᴄ', priority: 80 });
    scene.ticks.push({ axis: 'y', value: E1.y, label: 'P*', priority: 78 });
    scene.ticks.push({ axis: 'y', value: pp, label: 'Pₚ', priority: 80 });
    scene.ticks.push({ axis: 'x', value: qTax, label: 'Qₜ', priority: 80 });
    scene.ticks.push({ axis: 'x', value: E1.x, label: 'Q*', priority: 76 });
    horizGuide(scene, 'gpc', pc, qTax, 'old');
    horizGuide(scene, 'gpp', pp, qTax, 'old');
    vertGuide(scene, 'gqt', qTax, Math.max(pc, pp), 'old');

    if (showHas(show, 'tax-wedge')) {
      scene.arrows.push({
        id: 'wedge',
        kind: 'wedge',
        p1: { x: qTax - 0.012, y: pp },
        p2: { x: qTax - 0.012, y: pc },
        route: 'vertical',
        head: 'double-chevron',
        tone: 'accent',
        layer: 'arrowsFront',
        label: 'Tax',
        labelSide: 'left',
      });
    }
    if (showHas(show, 'consumer-burden')) {
      addRegion(scene, {
        id: 'cons-burden',
        tone: 'demand',
        opacity: 0.14,
        polygon: [
          { x: 0, y: E1.y },
          { x: qTax, y: E1.y },
          { x: qTax, y: pc },
          { x: 0, y: pc },
        ],
        label: 'Consumer burden',
        labelAt: { x: qTax * 0.5, y: (E1.y + pc) / 2 },
      });
    }
    if (showHas(show, 'producer-burden')) {
      addRegion(scene, {
        id: 'prod-burden',
        tone: 'supply',
        opacity: 0.16,
        polygon: [
          { x: 0, y: pp },
          { x: qTax, y: pp },
          { x: qTax, y: E1.y },
          { x: 0, y: E1.y },
        ],
        label: 'Producer burden',
        labelAt: { x: qTax * 0.5, y: (pp + E1.y) / 2 },
      });
    }
    if (showHas(show, 'government-revenue')) {
      addRegion(scene, {
        id: 'gov-rev',
        tone: 'neutral',
        opacity: 0.1,
        polygon: [
          { x: 0, y: pp },
          { x: qTax, y: pp },
          { x: qTax, y: pc },
          { x: 0, y: pc },
        ],
      });
    }
    if (showHas(show, 'deadweight-loss')) {
      addRegion(scene, {
        id: 'dwl',
        tone: 'loss',
        opacity: 0.2,
        polygon: [
          { x: qTax, y: pc },
          { x: qTax, y: pp },
          { x: E1.x, y: E1.y },
        ],
        label: 'DWL',
        labelAt: { x: (qTax + E1.x) / 2 + 0.02, y: E1.y },
      });
    }

    addTakeaway(scene, spec, show);
    return {
      scene: scene,
      derived: derived,
      warnings: warnings,
      alt: { summary: taxAlt(spec, derived) },
    };
  };

  /* ---------- SUBSIDY ---------- */
  TEMPLATES.subsidy = function (spec) {
    var scene = Scene();
    var warnings = [];
    var show = spec.show;
    scene.axes.x.label = spec.axes.x.label;
    scene.axes.y.label = spec.axes.y.label;

    var dEl = (spec.demand && spec.demand.elasticity) || 'normal';
    var sEl = (spec.supply && spec.supply.elasticity) || 'normal';
    var D = demandDef(dEl, BASE.x, BASE.y);
    var S1 = supplyDef(sEl, BASE.x, BASE.y);
    var E1 = intersect(D, S1);

    var s = (spec.subsidy && spec.subsidy.size) || 0.18;
    var S2 = shiftLineY(S1, -s); // subsidy: parallel downward shift
    var E2 = intersect(D, S2);
    var qSub = E2.x;
    var pc = E2.y; // consumer pays
    var pp = yAtX(S1, qSub); // producer receives (paid + subsidy)

    addReturnCurve(scene, { id: 'S1', def: S1, tone: 'old', label: 'S', labelAt: 'end' });
    addCurve(scene, { id: 'D', def: D, tone: 'demand', label: 'D', labelAt: 'end' });
    addCurve(scene, { id: 'S2', def: S2, tone: 'supply', label: 'S + subsidy', labelAt: 'end' });
    labelCurve(scene, 'S1', 'S');

    var derived = {
      E1: E1,
      E2: E2,
      curves: { D: D, S1: S1, S2: S2 },
      consumerPrice: pc,
      producerPrice: pp,
      subsidyPerUnit: s,
      quantity: qSub,
    };

    addPoint(scene, { id: 'E1', x: E1.x, y: E1.y, label: 'E', tone: 'ink', priority: 80 });
    scene.ticks.push({ axis: 'y', value: pp, label: 'Pₚ', priority: 80 });
    scene.ticks.push({ axis: 'y', value: E1.y, label: 'P*', priority: 76 });
    scene.ticks.push({ axis: 'y', value: pc, label: 'Pᴄ', priority: 80 });
    scene.ticks.push({ axis: 'x', value: qSub, label: 'Qₛ', priority: 80 });
    scene.ticks.push({ axis: 'x', value: E1.x, label: 'Q*', priority: 76 });
    horizGuide(scene, 'gpc2', pc, qSub, 'old');
    horizGuide(scene, 'gpp2', pp, qSub, 'old');
    vertGuide(scene, 'gqs', qSub, Math.max(pc, pp), 'old');

    if (showHas(show, 'subsidy-wedge')) {
      scene.arrows.push({
        id: 'subwedge',
        kind: 'wedge',
        p1: { x: qSub + 0.012, y: pc },
        p2: { x: qSub + 0.012, y: pp },
        route: 'vertical',
        head: 'double-chevron',
        tone: 'gain',
        layer: 'arrowsFront',
        label: 'Subsidy',
        labelSide: 'right',
      });
    }
    if (showHas(show, 'government-cost')) {
      addRegion(scene, {
        id: 'gov-cost',
        tone: 'gain',
        opacity: 0.14,
        polygon: [
          { x: 0, y: pc },
          { x: qSub, y: pc },
          { x: qSub, y: pp },
          { x: 0, y: pp },
        ],
        label: 'Government cost',
        labelAt: { x: qSub * 0.5, y: (pc + pp) / 2 },
      });
    }
    if (showHas(show, 'consumer-benefit')) {
      addRegion(scene, {
        id: 'cons-benefit',
        tone: 'demand',
        opacity: 0.14,
        polygon: [
          { x: 0, y: pc },
          { x: qSub, y: pc },
          { x: qSub, y: E1.y },
          { x: 0, y: E1.y },
        ],
      });
    }
    if (showHas(show, 'producer-benefit')) {
      addRegion(scene, {
        id: 'prod-benefit',
        tone: 'supply',
        opacity: 0.16,
        polygon: [
          { x: 0, y: E1.y },
          { x: qSub, y: E1.y },
          { x: qSub, y: pp },
          { x: 0, y: pp },
        ],
      });
    }

    addTakeaway(scene, spec, show);
    return {
      scene: scene,
      derived: derived,
      warnings: warnings,
      alt: { summary: subsidyAlt(spec, derived) },
    };
  };

  /* ---------- PRICE CONTROL ---------- */
  TEMPLATES['price-control'] = function (spec) {
    var scene = Scene();
    var warnings = [];
    var show = spec.show;
    scene.axes.x.label = spec.axes.x.label;
    scene.axes.y.label = spec.axes.y.label;

    var D = demandDef('normal', BASE.x, BASE.y);
    var S = supplyDef('normal', BASE.x, BASE.y);
    var E = intersect(D, S);
    addCurve(scene, { id: 'D', def: D, tone: 'demand', label: 'D', labelAt: 'end' });
    addCurve(scene, { id: 'S', def: S, tone: 'supply', label: 'S', labelAt: 'end' });
    addPoint(scene, { id: 'E', x: E.x, y: E.y, label: 'E', tone: 'ink', priority: 80 });

    var isMax =
      spec.intent === 'maximum-price-shortage' ||
      (spec.control && spec.control.type === 'maximum') ||
      showHas(show, 'price-cap');
    var gap = (spec.control && spec.control.gap) || 0.18;
    var pLevel = isMax ? E.y - gap : E.y + gap;

    // controlled price line spanning the plot
    scene.segments.push({
      id: 'pc-line',
      p1: { x: 0, y: pLevel },
      p2: { x: 1, y: pLevel },
      tone: isMax ? 'loss' : 'accent',
      dashed: '',
      width: THEME.strokeMain - 0.4,
    });
    var qd = xAtY(D, pLevel);
    var qs = xAtY(S, pLevel);

    var derived = {
      E: E,
      curves: { D: D, S: S },
      controlPrice: pLevel,
      qd: qd,
      qs: qs,
      gap: Math.abs(qd - qs),
      kind: isMax ? 'maximum' : 'minimum',
    };

    scene.ticks.push({
      axis: 'y',
      value: pLevel,
      label: isMax ? 'Pₘₐₓ' : 'Pₘᵢₙ',
      priority: 82,
    });
    // label each quantity by what it IS (demand vs supply), not by which
    // side it happens to fall on — these swap between a max and min price.
    scene.ticks.push({ axis: 'x', value: qs, label: 'Qₛ', priority: 78 });
    scene.ticks.push({ axis: 'x', value: qd, label: 'Qᴅ', priority: 78 });
    vertGuide(scene, 'gqd', qd, pLevel, 'old');
    vertGuide(scene, 'gqs2', qs, pLevel, 'old');

    if (isMax && (showHas(show, 'shortage') || show.length === 0)) {
      scene.arrows.push({
        id: 'shortage',
        kind: 'shortage',
        p1: { x: qs, y: pLevel },
        p2: { x: qd, y: pLevel },
        route: 'bracket',
        head: 'double-chevron',
        tone: 'loss',
        layer: 'arrowsFront',
        label: 'Shortage',
        bracketDir: 'down',
      });
    }
    if (!isMax && (showHas(show, 'surplus') || show.length === 0)) {
      scene.arrows.push({
        id: 'surplus',
        kind: 'surplus',
        p1: { x: qd, y: pLevel },
        p2: { x: qs, y: pLevel },
        route: 'bracket',
        head: 'double-chevron',
        tone: 'accent',
        layer: 'arrowsFront',
        label: 'Surplus',
        bracketDir: 'up',
      });
    }

    addTakeaway(scene, spec, show);
    var sum = isMax
      ? 'A maximum price below equilibrium creates excess demand (a shortage).'
      : 'A minimum price above equilibrium creates excess supply (a surplus).';
    return { scene: scene, derived: derived, warnings: warnings, alt: { summary: sum } };
  };

  /* ---------- EXTERNALITY ---------- */
  TEMPLATES.externality = function (spec) {
    var scene = Scene();
    var warnings = [];
    var show = spec.show;
    scene.axes.x.label = spec.axes.x.label;
    scene.axes.y.label = spec.axes.y.label;

    var positive =
      spec.intent === 'positive-consumption-externality' ||
      (spec.externality && spec.externality.sign === 'positive');
    var ext = (spec.externality && spec.externality.size) || 0.2;

    // Benefit (demand-side) and cost (supply-side) baselines.
    var benefit = demandDef('normal', BASE.x, BASE.y); // MPB
    var cost = supplyDef('normal', BASE.x, BASE.y); // MPC
    var MSB;
    var MSC;
    var derived = {};

    if (positive) {
      // positive consumption externality: MSB above MPB; MPC=MSC.
      MSB = shiftLineX(benefit, ext); // social benefit further right
      MSC = cost;
      addReturnCurve(scene, { id: 'MPB', def: benefit, tone: 'old', label: 'MPB', labelAt: 'end' });
      addCurve(scene, { id: 'MSB', def: MSB, tone: 'social', label: 'MSB', labelAt: 'end' });
      addCurve(scene, { id: 'MSC', def: MSC, tone: 'supply', label: 'MPC = MSC', labelAt: 'end' });
    } else {
      // negative production externality: MSC above MPC; MPB=MSB.
      MSC = shiftLineY(cost, ext);
      MSB = benefit;
      addReturnCurve(scene, { id: 'MPC', def: cost, tone: 'old', label: 'MPC', labelAt: 'end' });
      addCurve(scene, { id: 'MSC', def: MSC, tone: 'loss', label: 'MSC', labelAt: 'end' });
      addCurve(scene, { id: 'MSB', def: MSB, tone: 'demand', label: 'MPB = MSB', labelAt: 'end' });
    }

    var marketEq = positive ? intersect(benefit, cost) : intersect(benefit, cost);
    var socialEq = intersect(MSB, MSC);
    derived.market = marketEq;
    derived.social = socialEq;

    // Dots carry no word labels — the Qₘ / Q* ticks and the welfare-loss
    // pill already name them, and long captions fight the triangle.
    addPoint(scene, { id: 'Qm', x: marketEq.x, y: marketEq.y, label: '', tone: 'ink', priority: 80 });
    addPoint(scene, { id: 'Qs', x: socialEq.x, y: socialEq.y, label: '', tone: 'gain', priority: 84 });
    addCallout(scene, {
      id: 'mkt-note',
      x: marketEq.x + 0.02,
      y: marketEq.y - 0.05,
      text: 'Free market',
      tone: 'neutral',
      priority: 58,
      anchor: 'start',
    });
    scene.ticks.push({ axis: 'x', value: marketEq.x, label: 'Qₘ', priority: 78 });
    scene.ticks.push({ axis: 'x', value: socialEq.x, label: 'Q*', priority: 80 });
    vertGuide(scene, 'gqm', marketEq.x, marketEq.y, 'old');
    vertGuide(scene, 'gqs3', socialEq.x, socialEq.y, 'old');

    if (showHas(show, 'welfare-loss') || show.length === 0) {
      // welfare loss triangle between Qm and Q*, bounded by the two
      // social curves; vertices at the social optimum and the two
      // readings at Qm.
      var qm = marketEq.x;
      addRegion(scene, {
        id: 'wloss',
        tone: 'loss',
        opacity: 0.22,
        polygon: [
          { x: socialEq.x, y: socialEq.y },
          { x: qm, y: yAtX(MSC, qm) },
          { x: qm, y: yAtX(MSB, qm) },
        ],
        label: 'Welfare loss',
        labelAt: { x: (socialEq.x + qm) / 2 + 0.03, y: (yAtX(MSC, qm) + yAtX(MSB, qm)) / 2 },
      });
    }
    if (showHas(show, 'correction-arrow')) {
      scene.arrows.push({
        id: 'correct',
        kind: 'quantity-change',
        p1: { x: marketEq.x, y: 0.04 },
        p2: { x: socialEq.x, y: 0.04 },
        route: 'horizontal',
        head: 'chevron',
        tone: 'accent',
        layer: 'arrowsFront',
        label: positive ? 'Subsidy → Q*' : 'Tax → Q*',
      });
    }

    addTakeaway(scene, spec, show);
    var sum = positive
      ? 'A positive consumption externality: MSB exceeds MPB, so the free market under-provides at Qm below the social optimum Q*.'
      : 'A negative production externality: MSC exceeds MPC, so the free market over-produces at Qm above the social optimum Q*, with a welfare-loss triangle.';
    return { scene: scene, derived: derived, warnings: warnings, alt: { summary: sum } };
  };

  /* ---------- PPF ---------- */
  TEMPLATES.ppf = function (spec) {
    var scene = Scene();
    var warnings = [];
    var show = spec.show;
    scene.axes.x.label = spec.axes.x.label || 'Consumer goods';
    scene.axes.y.label = spec.axes.y.label || 'Capital goods';
    scene.axes.showOrigin = true;

    var frontier = { type: 'concave', xMax: 0.86, yMax: 0.86, k: 2 };
    addCurve(scene, { id: 'PPF1', def: frontier, tone: 'demand', label: 'PPF', labelAt: 'mid' });
    var derived = { frontier: frontier };

    var shiftKind = null;
    if (spec.intent === 'ppf-outward-shift' || showHas(show, 'frontier-after')) shiftKind = 'out';
    if (spec.intent === 'ppf-inward-shift') shiftKind = 'in';
    if (spec.shift && spec.shift.direction) {
      shiftKind = spec.shift.direction === 'in' ? 'in' : 'out';
    }

    if (shiftKind) {
      var factor = shiftKind === 'out' ? 1.18 : 0.8;
      var frontier2 = { type: 'concave', xMax: 0.86 * factor, yMax: 0.86 * factor, k: 2 };
      // clamp drawing range to plot
      labelCurve(scene, 'PPF1', 'PPF₁');
      recolourOld(scene, 'PPF1');
      addCurve(scene, {
        id: 'PPF2',
        def: frontier2,
        tone: shiftKind === 'out' ? 'gain' : 'loss',
        label: shiftKind === 'out' ? 'PPF₂' : 'PPF₂',
        labelAt: 'mid',
        x0: 0,
        x1: Math.min(1, frontier2.xMax),
      });
      derived.frontier2 = frontier2;
      // perpendicular shift arrow between frontiers
      var t = 0.5;
      var mx1 = frontier.xMax * t;
      var p1 = { x: mx1, y: yAtX(frontier, mx1) };
      var p2 = { x: frontier2.xMax * t, y: yAtX(frontier2, frontier2.xMax * t) };
      scene.arrows.push({
        id: 'ppf-shift',
        kind: 'perpendicular-between-curves',
        p1: p1,
        p2: p2,
        route: 'direct',
        head: 'chevron',
        tone: 'neutral',
        layer: 'arrowsFront',
        label: shiftKind === 'out' ? 'Growth' : 'Decline',
      });
    }

    if (
      showHas(show, 'efficient-point') ||
      showHas(show, 'inefficient-point') ||
      showHas(show, 'unattainable-point') ||
      spec.intent === 'ppf-efficient-inefficient-unattainable'
    ) {
      var ex = 0.5;
      addPoint(scene, {
        id: 'A',
        x: ex,
        y: yAtX(frontier, ex),
        label: 'A · efficient',
        tone: 'gain',
        priority: 82,
      });
      addPoint(scene, {
        id: 'B',
        x: 0.32,
        y: yAtX(frontier, 0.32) * 0.55,
        label: 'B · inefficient',
        tone: 'accent',
        priority: 80,
      });
      addPoint(scene, {
        id: 'C',
        x: 0.74,
        y: yAtX(frontier, 0.74) + 0.22,
        label: 'C · unattainable',
        tone: 'loss',
        priority: 80,
      });
    }

    if (showHas(show, 'opportunity-cost') || spec.intent === 'ppf-opportunity-cost') {
      var xa = 0.34;
      var xb = 0.64;
      var pa = { x: xa, y: yAtX(frontier, xa) };
      var pb = { x: xb, y: yAtX(frontier, xb) };
      addPoint(scene, { id: 'X', x: pa.x, y: pa.y, label: 'X', tone: 'ink', priority: 80 });
      addPoint(scene, { id: 'Y', x: pb.x, y: pb.y, label: 'Y', tone: 'ink', priority: 80 });
      scene.arrows.push({
        id: 'oppcost',
        kind: 'movement',
        p1: pa,
        p2: pb,
        route: 'arc',
        head: 'chevron',
        tone: 'accent',
        layer: 'arrowsFront',
        label: 'Opportunity cost',
        curveDir: 'down',
      });
    }

    if (showHas(show, 'zones')) {
      addCallout(scene, {
        id: 'z-eff',
        x: 0.46,
        y: yAtX(frontier, 0.46) + 0.05,
        text: 'On the frontier = efficient',
        tone: 'gain',
        priority: 50,
      });
    }

    addTakeaway(scene, spec, show);
    var sum = shiftKind
      ? 'The production possibility frontier shifts ' +
        (shiftKind === 'out' ? 'outward (economic growth)' : 'inward (lost capacity)') +
        ', changing the combinations of the two goods the economy can produce.'
      : 'A production possibility frontier: points on the curve are productively efficient, inside is attainable but inefficient, outside is unattainable.';
    return { scene: scene, derived: derived, warnings: warnings, alt: { summary: sum } };
  };

  /* ---------- AD-AS ---------- */
  TEMPLATES['ad-as'] = function (spec) {
    var scene = Scene();
    var warnings = [];
    var show = spec.show;
    scene.axes.x.label = spec.axes.x.label || 'Real output (Y)';
    scene.axes.y.label = spec.axes.y.label || 'Price level (P)';

    var AD = lineThrough(BASE.x, BASE.y, -0.85);
    var keynesian =
      spec.intent === 'keynesian-as' || (spec.as && spec.as.shape === 'keynesian');
    var classical =
      spec.intent === 'classical-lras' || showHas(show, 'lras') || (spec.as && spec.as.lras);

    var SRAS = keynesian
      ? { type: 'keynesian', floor: 0.28, kink: 0.34, full: 0.78, ceil: 0.95 }
      : supplyDef('normal', BASE.x, BASE.y);

    addCurve(scene, {
      id: 'SRAS',
      def: SRAS,
      tone: 'supply',
      label: keynesian ? 'AS' : 'SRAS',
      labelAt: 'end',
    });
    addCurve(scene, { id: 'AD1', def: AD, tone: 'demand', label: 'AD', labelAt: 'end' });

    var LRAS = null;
    if (classical && !keynesian) {
      LRAS = { type: 'vertical', x: 0.62 };
      addCurve(scene, { id: 'LRAS', def: LRAS, tone: 'ink', label: 'LRAS', labelAt: 'top' });
    }

    var E1 = intersect(AD, SRAS);
    addPoint(scene, { id: 'E1', x: E1.x, y: E1.y, label: 'E₁', tone: 'ink', priority: 82 });
    var derived = { E1: E1, curves: { AD1: AD, SRAS: SRAS } };

    var adDir = null;
    if (spec.intent === 'ad-shift-right') adDir = 'right';
    if (spec.intent === 'ad-shift-left') adDir = 'left';
    var srasDir = null;
    if (spec.intent === 'sras-shift-right') srasDir = 'right';
    if (spec.intent === 'sras-shift-left') srasDir = 'left';
    if (spec.shift && spec.shift.curve === 'ad') adDir = spec.shift.direction;
    if (spec.shift && spec.shift.curve === 'sras') srasDir = spec.shift.direction;

    var mag = (spec.shift && spec.shift.size) || 0.2;
    if (adDir) {
      var AD2 = shiftLineX(AD, adDir === 'right' ? mag : -mag);
      recolourOld(scene, 'AD1');
      labelCurve(scene, 'AD1', 'AD₁');
      addCurve(scene, { id: 'AD2', def: AD2, tone: 'demand', label: 'AD₂', labelAt: 'end' });
      var E2 = intersect(AD2, SRAS);
      addPoint(scene, { id: 'E2', x: E2.x, y: E2.y, label: 'E₂', tone: 'accent', priority: 82 });
      derived.E2 = E2;
      pushShiftArrow(scene, AD, AD2, adDir, 'demand', 'AD');
    }
    if (srasDir) {
      var SRAS2 = shiftLineX(SRAS, srasDir === 'right' ? mag : -mag);
      recolourOld(scene, 'SRAS');
      labelCurve(scene, 'SRAS', 'SRAS₁');
      addCurve(scene, { id: 'SRAS2', def: SRAS2, tone: 'supply', label: 'SRAS₂', labelAt: 'end' });
      var E2s = intersect(AD, SRAS2);
      addPoint(scene, { id: 'E2', x: E2s.x, y: E2s.y, label: 'E₂', tone: 'accent', priority: 82 });
      derived.E2 = E2s;
      pushShiftArrow(scene, SRAS, SRAS2, srasDir, 'supply', 'SRAS');
    }

    if (showHas(show, 'output-gap') && LRAS) {
      scene.arrows.push({
        id: 'gap',
        kind: 'quantity-change',
        p1: { x: E1.x, y: 0.04 },
        p2: { x: LRAS.x, y: 0.04 },
        route: 'horizontal',
        head: 'chevron',
        tone: 'accent',
        layer: 'arrowsFront',
        label: E1.x < LRAS.x ? 'Negative output gap' : 'Positive output gap',
      });
    }

    addTakeaway(scene, spec, show);
    return {
      scene: scene,
      derived: derived,
      warnings: warnings,
      alt: { summary: adasAlt(spec, derived, adDir, srasDir) },
    };
  };

  /* ---------- PHILLIPS ---------- */
  TEMPLATES.phillips = function (spec) {
    var scene = Scene();
    var warnings = [];
    var show = spec.show;
    scene.axes.x.label = spec.axes.x.label || 'Unemployment (%)';
    scene.axes.y.label = spec.axes.y.label || 'Inflation (%)';

    var SRPC = { type: 'phillips', floor: 0.12, amp: 0.72, p: 1.7 };
    addCurve(scene, { id: 'SRPC1', def: SRPC, tone: 'demand', label: 'SRPC', labelAt: 'end', x0: 0.06, x1: 0.92 });
    var derived = { curves: { SRPC1: SRPC } };

    var longRun =
      spec.intent === 'long-run-phillips-curve' ||
      showHas(show, 'natural-rate') ||
      (spec.phillips && spec.phillips.longRun);
    if (longRun) {
      var LRPC = { type: 'vertical', x: 0.46 };
      addCurve(scene, { id: 'LRPC', def: LRPC, tone: 'ink', label: 'LRPC', labelAt: 'top' });
      scene.ticks.push({ axis: 'x', value: 0.46, label: 'NAIRU', priority: 80 });
      derived.naturalRate = 0.46;
    }

    if (spec.intent === 'expectations-shift' || showHas(show, 'expectations')) {
      var SRPC2 = { type: 'phillips', floor: 0.32, amp: 0.72, p: 1.7 };
      recolourOld(scene, 'SRPC1');
      labelCurve(scene, 'SRPC1', 'SRPC₁');
      addCurve(scene, {
        id: 'SRPC2',
        def: SRPC2,
        tone: 'accent',
        label: 'SRPC₂',
        labelAt: 'end',
        x0: 0.06,
        x1: 0.92,
      });
      scene.arrows.push({
        id: 'exp',
        kind: 'shift',
        p1: { x: 0.5, y: yAtX(SRPC, 0.5) },
        p2: { x: 0.5, y: yAtX(SRPC2, 0.5) },
        route: 'vertical',
        head: 'chevron',
        tone: 'neutral',
        layer: 'arrowsFront',
        label: 'Higher expected inflation',
      });
      derived.curves.SRPC2 = SRPC2;
    }

    addTakeaway(scene, spec, show);
    var sum = longRun
      ? 'The long-run Phillips curve is vertical at the natural rate of unemployment (NAIRU); there is no permanent inflation-unemployment trade-off.'
      : 'The short-run Phillips curve shows an inverse trade-off between unemployment and inflation.';
    return { scene: scene, derived: derived, warnings: warnings, alt: { summary: sum } };
  };

  /* ---------- template helpers ---------- */
  function addReturnCurve(scene, c) {
    addCurve(scene, c);
    return c.id;
  }
  function recolourTone() {
    // placeholder kept for readability of tax template; tone set at add.
  }
  function recolourOld(scene, id) {
    scene.curves.forEach(function (c) {
      if (c.id === id) {
        c.tone = 'old';
        c.width = THEME.strokeOld;
        c.dashed = '6 5';
      }
    });
  }
  function labelCurve(scene, id, label) {
    scene.curves.forEach(function (c) {
      if (c.id === id) c.label = label;
    });
  }
  function directionFor(spec, side) {
    var intent = spec.intent || '';
    if (side === 'demand') {
      if (intent === 'demand-shift-right') return 'right';
      if (intent === 'demand-shift-left') return 'left';
      if (intent === 'simultaneous-demand-and-supply-shift') return 'right';
    }
    if (side === 'supply') {
      if (intent === 'supply-shift-right') return 'right';
      if (intent === 'supply-shift-left') return 'left';
      if (intent === 'simultaneous-demand-and-supply-shift') return 'right';
    }
    // explicit curve declarations: D2 shiftFrom D1 direction
    var curves = spec.curves || {};
    var keys = Object.keys(curves);
    for (var i = 0; i < keys.length; i++) {
      var c = curves[keys[i]];
      if (c && c.shiftFrom && c.role === side) return c.direction || 'right';
    }
    return null;
  }
  function pushShiftArrow(scene, def1, def2, dir, tone, _label) {
    // a short horizontal nudge at a readable price level between the
    // two parallel curves, with an open chevron head.
    var y0 = 0.66;
    var x1 = xAtY(def1, y0);
    var x2 = xAtY(def2, y0);
    if (x1 == null || x2 == null) return;
    scene.arrows.push({
      id: 'shift-' + tone,
      kind: 'shift',
      p1: { x: x1, y: y0 },
      p2: { x: x2, y: y0 },
      route: 'horizontal',
      head: 'chevron',
      tone: 'neutral',
      layer: 'arrowsFront',
      label: dir === 'right' ? '→' : '←',
      labelHidden: true,
    });
  }
  function pushAxisChange(scene, which, v1, v2) {
    if (which === 'price') {
      scene.arrows.push({
        id: 'dP',
        kind: 'price-change',
        p1: { x: -0.05, y: v1 },
        p2: { x: -0.05, y: v2 },
        route: 'vertical',
        head: 'chevron',
        tone: v2 > v1 ? 'loss' : 'gain',
        layer: 'arrowsFront',
        label: v2 > v1 ? 'ΔP ↑' : 'ΔP ↓',
        labelSide: 'left',
      });
    } else {
      scene.arrows.push({
        id: 'dQ',
        kind: 'quantity-change',
        p1: { x: v1, y: -0.05 },
        p2: { x: v2, y: -0.05 },
        route: 'horizontal',
        head: 'chevron',
        tone: v2 > v1 ? 'gain' : 'loss',
        layer: 'arrowsFront',
        label: v2 > v1 ? 'ΔQ →' : 'ΔQ ←',
      });
    }
  }
  function horizGuide(scene, id, y, xTo, tone) {
    scene.segments.push({
      id: id,
      p1: { x: 0, y: y },
      p2: { x: xTo, y: y },
      tone: tone || 'old',
      dashed: '4 4',
      width: THEME.strokeGuide,
    });
  }
  function vertGuide(scene, id, x, yTo, tone) {
    scene.segments.push({
      id: id,
      p1: { x: x, y: 0 },
      p2: { x: x, y: yTo },
      tone: tone || 'old',
      dashed: '4 4',
      width: THEME.strokeGuide,
    });
  }
  function addTakeaway(scene, spec, show) {
    if (!showHas(show, 'takeaway')) return;
    var t = spec.teaching && spec.teaching.takeaway;
    if (!t) return;
    scene.callouts.push({
      id: 'takeaway',
      x: 0.5,
      y: -0.16,
      text: t,
      tone: 'neutral',
      priority: 64,
      anchor: 'middle',
      pill: true,
      below: true,
    });
  }

  /* ----- alt-text generators ----- */
  function marketAlt(spec, d) {
    if (!d.E2) return 'A supply and demand diagram with equilibrium where the curves cross.';
    var dir = (spec.intent || '').indexOf('right') !== -1 ? 'rises' : 'falls';
    return (
      'A supply and demand diagram. The ' +
      ((spec.intent || '').indexOf('demand') !== -1 ? 'demand' : 'supply') +
      ' curve shifts, so equilibrium moves from E₁ to E₂ and the relevant variable ' +
      dir +
      '.'
    );
  }
  function taxAlt() {
    return (
      'An indirect tax shifts supply up by the tax per unit. Quantity falls and the price paid ' +
      'by consumers (Pᴄ) rises above the price received by producers (Pₚ); the wedge is the tax.'
    );
  }
  function subsidyAlt() {
    return (
      'A subsidy shifts supply down. Quantity rises, the price consumers pay falls and the price ' +
      'producers receive rises; the gap between them is the per-unit subsidy.'
    );
  }
  function subsidyAltWrap(spec, d) {
    return subsidyAlt(spec, d);
  }
  function adasAlt(spec, d, adDir, srasDir) {
    if (adDir) {
      return (
        'An AD-AS diagram. Aggregate demand shifts ' +
        adDir +
        ', moving equilibrium along SRAS and changing the price level and real output.'
      );
    }
    if (srasDir) {
      return (
        'An AD-AS diagram. Short-run aggregate supply shifts ' +
        srasDir +
        ', changing the price level and real output.'
      );
    }
    return 'An AD-AS diagram showing macroeconomic equilibrium where AD meets aggregate supply.';
  }

  /* ==========================================================
     §INTENT DEFAULTS — let authors give just type + intent.

     If `curves`/`show` are omitted, fill sensible defaults so an
     intent-only spec renders something correct and complete.
     ========================================================== */
  function applyIntentDefaults(spec) {
    var desc = FAMILIES[spec.type];
    if (!desc) return spec;

    // intent-only `show` defaults come straight from the family descriptor.
    if (!spec.show || !spec.show.length) {
      spec.show = ((desc.defaultShow && desc.defaultShow[spec.intent]) || []).slice();
    }

    // family-specific input defaults (default curves, elasticity mapping, …)
    // live in the descriptor's normalise hook, not in branches here.
    if (typeof desc.normalise === 'function') desc.normalise(spec);

    return spec;
  }

  /* ==========================================================
     §ANNOTATIONS — the sanctioned escape hatch (replaces raw <svg>).

     `spec.annotations` lets an author add an element the templates do
     not cover WITHOUT hand-authoring SVG. Each annotation is a plain,
     serialisable record in DATA space (x,y in 0..1) that compiles onto
     the same Scene the templates build — so it flows through the layer
     model, the collision pass and the tone palette exactly like a
     first-class element. No raw paths, no markers, no pixel maths.

     This is the relief valve for "no hand-authored SVG, ever": authors
     who hit the edge of the templates stay inside the language instead
     of dropping to `<path>`. Annotations are pure JSON, so they also
     survive a round-trip through a Postgres `jsonb` column untouched.
     ========================================================== */
  // Find a scene curve by id (annotations anchor onto declared curves).
  function sceneCurveById(scene, id) {
    for (var i = 0; i < scene.curves.length; i++) {
      if (scene.curves[i].id === id) return scene.curves[i];
    }
    return null;
  }

  /* Resolve an annotation anchor to a DATA-space point. This is the
     accuracy lever: an author (human or model) should never type a
     coordinate that the engine could solve. Accepted shapes:

       { x, y }                       raw coordinate (discouraged, still allowed)
       { point: 'E1' }                a solved point in `derived` (E1, E2, social…)
       { intersection: ['D1','S'] }   the exact crossing of two declared curves
       { onCurve: 'D1', x: 0.3 }      a point lying ON a declared curve at x

     The intersection/onCurve forms mean a label or region can hug the
     real geometry without the author ever computing a number. */
  function resolveAnchor(anchor, scene, derived, warnings, i, slot) {
    if (!anchor || typeof anchor !== 'object') {
      warnings.push('annotation[' + i + '] `' + slot + '` is missing');
      return null;
    }
    if (anchor.point) {
      var p = derived && derived[anchor.point];
      if (p && typeof p.x === 'number' && typeof p.y === 'number') return { x: p.x, y: p.y };
      warnings.push('annotation[' + i + '] `' + slot + '.point` "' + anchor.point + '" is not a solved point');
      return null;
    }
    if (anchor.intersection && anchor.intersection.length === 2) {
      var c1 = sceneCurveById(scene, anchor.intersection[0]);
      var c2 = sceneCurveById(scene, anchor.intersection[1]);
      if (c1 && c2) {
        var X = intersect(c1.def, c2.def);
        if (X) return { x: X.x, y: X.y };
      }
      warnings.push('annotation[' + i + '] `' + slot + '.intersection` [' + anchor.intersection + '] did not solve');
      return null;
    }
    if (anchor.onCurve) {
      var c = sceneCurveById(scene, anchor.onCurve);
      if (c && typeof anchor.x === 'number') {
        var y = yAtX(c.def, anchor.x);
        if (y != null) return { x: anchor.x, y: y };
      }
      warnings.push('annotation[' + i + '] `' + slot + '.onCurve` "' + anchor.onCurve + '" needs a numeric x on a known curve');
      return null;
    }
    if (typeof anchor.x === 'number' && typeof anchor.y === 'number') {
      return { x: anchor.x, y: anchor.y };
    }
    warnings.push('annotation[' + i + '] `' + slot + '` could not be resolved');
    return null;
  }

  function applyAnnotations(scene, spec, derived, warnings) {
    var anns = spec.annotations;
    if (!Array.isArray(anns) || !anns.length) return;
    anns.forEach(function (a, i) {
      if (!a || typeof a !== 'object') return;
      var id = a.id || 'ann-' + i;
      var tone = a.tone || 'accent';
      var at = function (slot) {
        return resolveAnchor(a[slot], scene, derived, warnings, i, slot);
      };
      var pt;
      switch (a.type) {
        case 'label':
          pt = at('at');
          if (!pt) return;
          addCallout(scene, {
            id: id,
            x: pt.x,
            y: pt.y,
            text: a.text || '',
            tone: tone,
            anchor: a.anchor || 'middle',
            priority: a.priority != null ? a.priority : 60,
          });
          break;
        case 'marker':
          pt = at('at');
          if (!pt) return;
          addPoint(scene, {
            id: id,
            x: pt.x,
            y: pt.y,
            label: a.label || '',
            tone: tone,
            priority: a.priority != null ? a.priority : 70,
            gridlines: !!a.guides,
          });
          break;
        case 'region': {
          if (!Array.isArray(a.points) || a.points.length < 3) {
            warnings.push('annotation[' + i + '] (region) needs `points` (3+ anchors)');
            return;
          }
          var poly = [];
          var ok = true;
          a.points.forEach(function (p, j) {
            var rp = resolveAnchor(p, scene, derived, warnings, i, 'points[' + j + ']');
            if (rp) poly.push(rp);
            else ok = false;
          });
          if (!ok || poly.length < 3) return;
          addRegion(scene, {
            id: id,
            polygon: poly,
            tone: tone,
            opacity: a.opacity != null ? a.opacity : 0.16,
            label: a.label,
          });
          break;
        }
        case 'segment': {
          var sf = at('from');
          var stt = at('to');
          if (!sf || !stt) return;
          scene.segments.push({
            id: id,
            p1: sf,
            p2: stt,
            tone: tone,
            dashed: a.dashed || null,
            width: a.width || THEME.strokeGuide,
          });
          break;
        }
        case 'bracket': {
          var bf = at('from');
          var bt = at('to');
          if (!bf || !bt) return;
          scene.arrows.push({
            id: id,
            kind: 'bracket',
            p1: bf,
            p2: bt,
            route: 'bracket',
            head: 'bracket',
            tone: tone,
            label: a.label,
            layer: 'arrowsFront',
          });
          break;
        }
        case 'arrow': {
          var af = at('from');
          var ato = at('to');
          if (!af || !ato) return;
          scene.arrows.push({
            id: id,
            kind: a.kind || 'flow',
            p1: af,
            p2: ato,
            route: a.route || 'auto',
            head: a.head || 'chevron',
            tone: tone,
            label: a.label,
            layer: 'arrowsFront',
          });
          break;
        }
        default:
          // unknown type already reported by validate(); skip silently here
          // so render() does not surface the same warning twice.
          break;
      }
    });
  }

  /* ==========================================================
     §VALIDATE — structural checks against the registry.
     ========================================================== */
  function validate(rawSpec) {
    var errors = [];
    var warnings = [];
    if (isLegacySpec(rawSpec)) {
      return { valid: true, errors: errors, warnings: ['legacy chart spec - delegated to ECONOS_PPF'] };
    }
    var spec = rawSpec || {};
    if (typeof spec !== 'object') {
      return { valid: false, errors: ['spec must be an object'], warnings: warnings };
    }
    var family = spec.type;
    if (!family && spec.intent) family = REGISTRY.intents[spec.intent];
    if (!family) {
      errors.push('missing `type` (one of: ' + REGISTRY.families.join(', ') + ')');
    } else if (REGISTRY.families.indexOf(family) === -1) {
      errors.push('unknown family `' + family + '`');
    }
    if (spec.intent) {
      if (!REGISTRY.intents[spec.intent]) {
        errors.push('unknown intent `' + spec.intent + '`');
      } else if (family && REGISTRY.intents[spec.intent] !== family) {
        errors.push(
          'intent `' + spec.intent + '` belongs to family `' + REGISTRY.intents[spec.intent] +
            '`, not `' + family + '`'
        );
      }
    }
    if (spec.viewport && REGISTRY.viewports.indexOf(spec.viewport) === -1) {
      warnings.push('unknown viewport `' + spec.viewport + '` - falling back to card');
    }
    if (spec.mode && REGISTRY.modes.indexOf(spec.mode) === -1) {
      warnings.push('unknown mode `' + spec.mode + '` - falling back to learn');
    }
    if (spec.show) {
      if (!Array.isArray(spec.show)) {
        errors.push('`show` must be an array of tokens');
      } else {
        spec.show.forEach(function (tok) {
          if (REGISTRY.showTokens.indexOf(tok) === -1) {
            warnings.push('unknown show token `' + tok + '`');
          }
        });
      }
    }
    if (!spec.alt || (!spec.alt.summary && !spec.alt.long)) {
      warnings.push('no alt text supplied - a summary will be generated');
    }
    // declarative annotations (the sanctioned escape hatch)
    if (spec.annotations != null) {
      if (!Array.isArray(spec.annotations)) {
        errors.push('`annotations` must be an array');
      } else {
        spec.annotations.forEach(function (a, i) {
          if (!a || typeof a !== 'object') {
            warnings.push('annotation[' + i + '] is not an object - ignored');
            return;
          }
          if (ANNOTATION_TYPES.indexOf(a.type) === -1) {
            warnings.push(
              'annotation[' + i + '] unknown type `' + a.type + '` (one of: ' + ANNOTATION_TYPES.join(', ') + ')'
            );
          }
          if (a.tone && REGISTRY.tones.indexOf(a.tone) === -1) {
            warnings.push('annotation[' + i + '] unknown tone `' + a.tone + '`');
          }
        });
      }
    }
    // raw SVG smell — annotations are the supported alternative.
    if (typeof spec.svg === 'string' || (spec.raw && /<svg/i.test(JSON.stringify(spec.raw)))) {
      warnings.push('raw SVG detected in spec - use `annotations` instead; EDL specs must stay semantic');
    }
    return { valid: errors.length === 0, errors: errors, warnings: warnings };
  }

  /* ==========================================================
     §NORMALISE — apply defaults; resolve intent -> family.
     ========================================================== */
  function normalise(rawSpec) {
    var spec = clone(rawSpec || {});
    spec.version = spec.version || 1;
    spec.mode = REGISTRY.modes.indexOf(spec.mode) !== -1 ? spec.mode : 'learn';
    spec.viewport = REGISTRY.viewports.indexOf(spec.viewport) !== -1 ? spec.viewport : 'card';
    if (!spec.type && spec.intent) spec.type = REGISTRY.intents[spec.intent];
    spec.axes = spec.axes || {};
    spec.axes.x = spec.axes.x || {};
    spec.axes.y = spec.axes.y || {};
    var famAxes = FAMILY_AXES[spec.type] || { x: 'Quantity', y: 'Price' };
    if (spec.axes.x.label == null) spec.axes.x.label = famAxes.x;
    if (spec.axes.y.label == null) spec.axes.y.label = famAxes.y;
    spec.show = Array.isArray(spec.show) ? spec.show.slice() : [];
    spec.curves = spec.curves || {};
    spec = applyIntentDefaults(spec);
    return spec;
  }

  /* ==========================================================
     §COMPILE — spec -> render plan + diagnostics.
     ========================================================== */
  function compile(rawSpec) {
    if (isLegacySpec(rawSpec)) {
      return { legacy: true, normalisedSpec: rawSpec, validation: validate(rawSpec) };
    }
    var validation = validate(rawSpec);
    var spec = normalise(rawSpec);
    var family = spec.type;
    var template = TEMPLATES[family];
    var errors = validation.errors.slice();
    var warnings = validation.warnings.slice();

    if (!template) {
      return {
        legacy: false,
        normalisedSpec: spec,
        validation: validation,
        errors: errors.concat(['no template for family `' + family + '`']),
        warnings: warnings,
        derived: {},
        scene: Scene(),
        renderPlan: { elements: [] },
        collisions: [],
        hidden: [],
      };
    }

    var built = template(spec);
    warnings = warnings.concat(built.warnings || []);

    // declarative annotations compile onto the template's scene, so they
    // share the same layer/collision/tone machinery (no raw SVG). Passing
    // `derived` lets anchors resolve to solved geometry instead of typed
    // coordinates (the accuracy lever — see resolveAnchor).
    applyAnnotations(built.scene, spec, built.derived || {}, warnings);

    // ensure alt
    if (!spec.alt || (!spec.alt.summary && !spec.alt.long)) {
      spec.alt = assign(spec.alt || {}, { summary: (built.alt && built.alt.summary) || autoAlt(spec) });
    }

    var ctx = makeContext(spec);
    var renderPlan = buildRenderPlan(built.scene, spec, ctx);

    return {
      legacy: false,
      normalisedSpec: spec,
      validation: validation,
      errors: errors,
      warnings: warnings,
      derived: roundDerived(built.derived || {}),
      scene: built.scene,
      renderPlan: renderPlan,
      collisions: renderPlan.collisionsResolved,
      hidden: renderPlan.hidden,
      ctx: ctx,
    };
  }

  function autoAlt(spec) {
    var f = spec.type || 'diagram';
    var i = spec.intent ? ' (' + spec.intent.replace(/-/g, ' ') + ')' : '';
    return 'An economics ' + f + ' diagram' + i + '.';
  }

  function roundDerived(d) {
    var out = clone(d);
    (function walk(o) {
      if (!o || typeof o !== 'object') return;
      Object.keys(o).forEach(function (k) {
        if (typeof o[k] === 'number') o[k] = r2(o[k]);
        else if (o[k] && typeof o[k] === 'object') walk(o[k]);
      });
    })(out);
    return out;
  }

  /* ==========================================================
     §LAYOUT helpers — pixel context, boxes, collisions, arrows.
     ========================================================== */
  function makeContext(spec) {
    var vp = VIEWPORTS[spec.viewport] || VIEWPORTS.card;
    var m = vp.margin;
    var plot = {
      x: m.l,
      y: m.t,
      w: vp.w - m.l - m.r,
      h: vp.h - m.t - m.b,
    };
    return {
      vp: vp,
      width: vp.w,
      height: vp.h,
      plot: plot,
      mode: spec.mode,
      viewport: spec.viewport,
      density: vp.density,
      px: function (x) {
        return plot.x + x * plot.w;
      },
      py: function (y) {
        return plot.y + plot.h - y * plot.h;
      },
    };
  }

  function bbox(cx, cy, w, h, anchor) {
    var x = cx;
    if (anchor === 'middle') x = cx - w / 2;
    else if (anchor === 'end') x = cx - w;
    return { x: x, y: cy - h / 2, w: w, h: h };
  }
  function overlaps(a, b, pad) {
    var p = pad || 0;
    return (
      a.x - p < b.x + b.w &&
      a.x + a.w + p > b.x &&
      a.y - p < b.y + b.h &&
      a.y + a.h + p > b.y
    );
  }

  /* ==========================================================
     §RENDER-PLAN — Scene -> layered element list, with the
     collision pass folded in.
     ========================================================== */
  function buildRenderPlan(scene, spec, ctx) {
    var exam = spec.mode === 'exam';
    var debug = spec.mode === 'debug';
    var compact = ctx.density === 'compact';
    var elements = [];
    var placed = []; // bboxes already committed (for collision pass)
    var hidden = [];
    var collisionsResolved = [];
    var declIndex = 0;

    function push(el) {
      el.decl = declIndex++;
      if (el.layer == null) el.layer = LAYERS.curvesMain;
      elements.push(el);
      return el;
    }

    // ---- background ----
    push({ kind: 'background', layer: LAYERS.background });

    // ---- regions (skip most in exam mode) ----
    if (!exam) {
      scene.regions.forEach(function (rg) {
        push({ kind: 'region', layer: LAYERS.regions, region: rg });
      });
    } else {
      // exam: keep only the deadweight / welfare loss outline, no fill
      scene.regions.forEach(function (rg) {
        if (rg.id === 'dwl' || rg.id === 'wloss') {
          push({ kind: 'region', layer: LAYERS.regions, region: assign(rg, { opacity: 0, outline: true }) });
        }
      });
    }

    // ---- guide segments / gridlines ----
    scene.segments.forEach(function (sg) {
      push({ kind: 'segment', layer: LAYERS.gridlines, segment: sg });
    });

    // ---- axes ----
    push({ kind: 'axes', layer: LAYERS.axes, axes: scene.axes });

    // ---- curves ----
    scene.curves.forEach(function (c) {
      var isOld = c.tone === 'old';
      push({
        kind: 'curve',
        layer: isOld ? LAYERS.curvesOld : LAYERS.curvesMain,
        curve: c,
      });
    });

    // ---- arrows behind/front ----
    scene.arrows.forEach(function (a) {
      if (exam && (a.kind === 'cause-effect' || a.id === 'takeaway')) return;
      var layer = a.layer === 'arrowsBehind' ? LAYERS.arrowsBehind : LAYERS.arrowsFront;
      push({ kind: 'arrow', layer: layer, arrow: a });
    });

    // ---- points ----
    scene.points.forEach(function (p) {
      push({ kind: 'point', layer: LAYERS.points, point: p });
    });

    /* ---------------- collision-managed labels ----------------
       Build candidate label boxes, place high-priority first, then
       try to fit the rest. Hide low-priority labels that cannot fit
       in compact viewports; warn on fallback placement. */
    var labels = [];

    // axis labels (highest priority, fixed)
    labels.push(makeAxisLabel(ctx, scene.axes.x, 'x'));
    labels.push(makeAxisLabel(ctx, scene.axes.y, 'y'));

    // curve labels
    scene.curves.forEach(function (c) {
      if (!c.label) return;
      if (exam && c.tone === 'old') return;
      labels.push(makeCurveLabel(ctx, c));
    });

    // point labels
    scene.points.forEach(function (p) {
      if (!p.label) return;
      labels.push(makePointLabel(ctx, p));
    });

    // tick labels
    scene.ticks.forEach(function (t) {
      labels.push(makeTickLabel(ctx, t));
    });

    // callouts
    scene.callouts.forEach(function (c) {
      if (exam && c.priority < 80) return;
      labels.push(makeCalloutLabel(ctx, c));
    });

    // region labels (as callouts inside)
    scene.regions.forEach(function (rg) {
      if (!rg.label || exam) return;
      labels.push(makeRegionLabel(ctx, rg));
    });

    // arrow labels
    scene.arrows.forEach(function (a) {
      if (!a.label || a.labelHidden) return;
      if (exam && a.priority && a.priority < 70) return;
      labels.push(makeArrowLabel(ctx, a));
    });

    // sort by priority desc, then declaration
    labels.sort(function (a, b) {
      return b.priority - a.priority || a.seq - b.seq;
    });

    labels.forEach(function (lab) {
      var box = placeLabel(lab, placed, ctx, compact);
      if (box.hidden) {
        hidden.push({ id: lab.id, type: lab.type, reason: box.reason });
        return;
      }
      if (box.resolved) {
        collisionsResolved.push({ id: lab.id, type: lab.type, from: lab.candidates[0], to: box.candidate });
      }
      placed.push(box.bbox);
      push({
        kind: 'label',
        layer: lab.layer,
        priority: lab.priority,
        label: assign(lab, { final: box }),
      });
    });

    // ---- debug overlays ----
    if (debug) {
      placed.forEach(function (b, i) {
        push({ kind: 'debugbox', layer: LAYERS.debug, box: b, idx: i });
      });
      push({ kind: 'debuglegend', layer: LAYERS.debug });
    }

    // final stable sort by (layer, priority, decl)
    elements.sort(function (a, b) {
      return a.layer - b.layer || (b.priority || 0) - (a.priority || 0) || a.decl - b.decl;
    });

    return {
      family: spec.type,
      intent: spec.intent || null,
      mode: spec.mode,
      viewport: spec.viewport,
      plot: { x: ctx.plot.x, y: ctx.plot.y, w: ctx.plot.w, h: ctx.plot.h },
      width: ctx.width,
      height: ctx.height,
      elements: elements,
      placedBoxes: placed,
      hidden: hidden,
      collisionsResolved: collisionsResolved,
    };
  }

  /* ----- label factories (data -> placeable label) ----- */
  var LABEL_SEQ = 0;
  function baseLabel(text, size, priority, layer, type) {
    var w = textWidth(text, size);
    return {
      id: type + '-' + LABEL_SEQ,
      seq: LABEL_SEQ++,
      type: type,
      text: String(text),
      size: size,
      priority: priority,
      layer: layer,
      w: w,
      h: size * 1.25,
      candidates: [],
      hideOnMobile: false,
      pill: false,
      tone: 'ink',
    };
  }
  function makeAxisLabel(ctx, axis, which) {
    var lab = baseLabel(axis.label, THEME.size.axis, 100, LAYERS.curveLabels, 'axis');
    lab.bold = true;
    if (which === 'x') {
      var ax = ctx.px(1);
      var ay = ctx.py(0) + 26;
      lab.candidates = [{ x: ax, y: ay, anchor: 'end' }];
    } else {
      // sit the y-title just right of the axis tip, above the top of
      // the plot, so long titles ("Capital goods") never overflow left
      // or graze the axis arrowhead.
      var yx = ctx.px(0) + 4;
      var yy = ctx.py(1) - 14;
      lab.candidates = [{ x: yx, y: yy, anchor: 'start' }];
    }
    return lab;
  }
  function makeCurveLabel(ctx, c) {
    var lab = baseLabel(c.label, THEME.size.curve, 90, LAYERS.curveLabels, 'curve');
    lab.bold = true;
    lab.tone = c.tone;
    var at = c.labelAt || 'end';
    var x1 = c.x1 == null ? 1 : c.x1;
    var pos;
    if (at === 'top' && c.def.type === 'vertical') {
      pos = { x: ctx.px(c.def.x), y: ctx.py(1) - 4, anchor: 'middle' };
      lab.candidates = [pos, { x: ctx.px(c.def.x) + 14, y: ctx.py(0.96), anchor: 'start' }];
    } else if (at === 'mid') {
      var xm = (x1 || 0.86) * 0.62;
      pos = { x: ctx.px(xm) + 10, y: ctx.py(yAtX(c.def, xm)) - 8, anchor: 'start' };
      lab.candidates = [pos, { x: ctx.px(xm) - 10, y: ctx.py(yAtX(c.def, xm)) - 8, anchor: 'end' }];
    } else {
      var yEnd = yAtX(c.def, x1);
      if (yEnd == null) yEnd = 0.5;
      yEnd = clampUnit(yEnd);
      pos = { x: ctx.px(x1) + 8, y: ctx.py(yEnd), anchor: 'start' };
      lab.candidates = [
        pos,
        { x: ctx.px(x1) + 8, y: ctx.py(yEnd) - 14, anchor: 'start' },
        { x: ctx.px(x1) + 8, y: ctx.py(yEnd) + 14, anchor: 'start' },
      ];
    }
    return lab;
  }
  function makePointLabel(ctx, p) {
    var lab = baseLabel(p.label, THEME.size.point, p.priority || 85, LAYERS.pointLabels, 'point');
    lab.tone = p.tone;
    lab.shortText = p.label.split(' · ')[0];
    if (p.label.indexOf(' · ') !== -1) lab.hideOnMobile = false;
    var cx = ctx.px(p.x);
    var cy = ctx.py(p.y);
    lab.candidates = [
      { x: cx + 9, y: cy - 9, anchor: 'start' },
      { x: cx + 9, y: cy + 11, anchor: 'start' },
      { x: cx - 9, y: cy - 9, anchor: 'end' },
      { x: cx - 9, y: cy + 11, anchor: 'end' },
    ];
    return lab;
  }
  function makeTickLabel(ctx, t) {
    var lab = baseLabel(t.label, THEME.size.tick, t.priority || 80, LAYERS.tickLabels, 'tick');
    lab.tone = 'neutral';
    if (t.axis === 'y') {
      lab.candidates = [{ x: ctx.px(0) - 8, y: ctx.py(t.value), anchor: 'end' }];
    } else {
      lab.candidates = [{ x: ctx.px(t.value), y: ctx.py(0) + 16, anchor: 'middle' }];
    }
    return lab;
  }
  function makeCalloutLabel(ctx, c) {
    var lab = baseLabel(c.text, THEME.size.callout, c.priority || 65, LAYERS.callouts, 'callout');
    lab.tone = c.tone;
    lab.pill = !!c.pill;
    lab.hideOnMobile = c.priority < 60;
    var cx = ctx.px(c.x);
    var cy = c.below ? ctx.py(0) + 38 : ctx.py(c.y);
    lab.candidates = [{ x: cx, y: cy, anchor: c.anchor || 'middle' }];
    return lab;
  }
  function makeRegionLabel(ctx, rg) {
    var at = rg.labelAt || { x: 0.5, y: 0.5 };
    var lab = baseLabel(rg.label, THEME.size.callout, 70, LAYERS.callouts, 'region');
    lab.tone = rg.tone;
    lab.pill = true;
    lab.hideOnMobile = true;
    var cx = ctx.px(at.x);
    var cy = ctx.py(at.y);
    lab.candidates = [
      { x: cx, y: cy, anchor: 'middle' },
      { x: cx, y: cy - 22, anchor: 'middle' },
      { x: cx, y: cy + 22, anchor: 'middle' },
      { x: cx + 26, y: cy - 22, anchor: 'start' },
    ];
    return lab;
  }
  function makeArrowLabel(ctx, a) {
    var lab = baseLabel(a.label, THEME.size.callout, a.priority || 75, LAYERS.callouts, 'arrow');
    lab.tone = a.tone;
    lab.pill = true;
    var midx = (a.p1.x + a.p2.x) / 2;
    var midy = (a.p1.y + a.p2.y) / 2;
    var cx = ctx.px(midx);
    var cy = ctx.py(midy);
    if (a.labelSide === 'left') lab.candidates = [{ x: cx - 12, y: cy, anchor: 'end' }];
    else if (a.labelSide === 'right') lab.candidates = [{ x: cx + 12, y: cy, anchor: 'start' }];
    else lab.candidates = [{ x: cx, y: cy - 12, anchor: 'middle' }, { x: cx, y: cy + 14, anchor: 'middle' }];
    return lab;
  }

  // Pull a candidate's box fully inside the stage, then recompute the
  // anchor point so text-anchor still lands the glyphs correctly. This
  // is what keeps end-of-curve labels and axis-edge pills on-canvas.
  function clampCandidate(cand, lab, ctx) {
    var box = bbox(cand.x, cand.y, lab.w, lab.h, cand.anchor);
    var nx = box.x;
    var ny = box.y;
    if (nx + box.w > ctx.width - 4) nx = ctx.width - 4 - box.w;
    if (nx < 4) nx = 4;
    if (ny < 11) ny = 11;
    if (ny + box.h > ctx.height - 4) ny = ctx.height - 4 - box.h;
    var ax = nx;
    if (cand.anchor === 'middle') ax = nx + box.w / 2;
    else if (cand.anchor === 'end') ax = nx + box.w;
    return { x: ax, y: ny + box.h / 2, anchor: cand.anchor };
  }

  function placeLabel(lab, placed, ctx, compact) {
    var cands = lab.candidates.length ? lab.candidates : [{ x: 0, y: 0, anchor: 'start' }];
    var fallback = null;
    for (var i = 0; i < cands.length; i++) {
      var eff = clampCandidate(cands[i], lab, ctx);
      var box = bbox(eff.x, eff.y, lab.w, lab.h, eff.anchor);
      if (!fallback) fallback = { bbox: box, candidate: eff, resolved: i > 0, hidden: false };
      var clash = false;
      for (var j = 0; j < placed.length; j++) {
        if (overlaps(box, placed[j], 1.5)) {
          clash = true;
          break;
        }
      }
      if (!clash) {
        return { bbox: box, candidate: eff, resolved: i > 0, hidden: false };
      }
    }
    // all candidates clash: hide low-priority / mobile-hidden, else
    // fall back to the first (clamped) candidate and flag the collision.
    if (compact && (lab.hideOnMobile || lab.priority < 70)) {
      return { hidden: true, reason: 'no clash-free slot (compact viewport)' };
    }
    fallback.resolved = true;
    return fallback;
  }

  /* ==========================================================
     §MARKERS — open chevron arrowheads as SVG markers.

     Markers are generated per stroke-colour so the arrowhead always
     matches its line, dodging patchy `context-stroke` support. Round
     caps + joins, fill:none -> the signature open chevron.
     ========================================================== */
  function markerId(kind, colour) {
    return 'edl-' + kind + '-' + colour.replace('#', '');
  }
  function buildMarkers(colours, heads) {
    var defs = [];
    var made = {};
    function chevron(id, colour, scale) {
      var s = scale || 1;
      return (
        '<marker id="' + id + '" viewBox="0 0 12 12" refX="8.5" refY="6" ' +
        'markerWidth="' + 11 * s + '" markerHeight="' + 11 * s + '" markerUnits="userSpaceOnUse" ' +
        'orient="auto"><path d="M 3 2.4 L 9 6 L 3 9.6" fill="none" stroke="' + colour +
        '" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></marker>'
      );
    }
    function dot(id, colour) {
      return (
        '<marker id="' + id + '" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" ' +
        'markerHeight="7" markerUnits="userSpaceOnUse" orient="auto"><circle cx="5" cy="5" r="3" fill="' +
        colour + '"/></marker>'
      );
    }
    function bar(id, colour) {
      return (
        '<marker id="' + id + '" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="9" ' +
        'markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M 5 1 L 5 9" stroke="' +
        colour + '" stroke-width="1.8" stroke-linecap="round"/></marker>'
      );
    }
    function triangle(id, colour) {
      return (
        '<marker id="' + id + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" ' +
        'markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M 1 1 L 9 5 L 1 9 z" fill="' +
        colour + '"/></marker>'
      );
    }
    colours.forEach(function (colour) {
      heads.forEach(function (head) {
        var id = markerId(head, colour);
        if (made[id]) return;
        made[id] = true;
        if (head === 'chevron') defs.push(chevron(id, colour, 1));
        else if (head === 'chevron-small') defs.push(chevron(id, colour, 0.78));
        else if (head === 'double-chevron') defs.push(chevron(id, colour, 1));
        else if (head === 'dot') defs.push(dot(id, colour));
        else if (head === 'bar') defs.push(bar(id, colour));
        else if (head === 'triangle') defs.push(triangle(id, colour));
        else defs.push(chevron(id, colour, 1));
      });
    });
    return defs.join('');
  }

  /* ==========================================================
     §RENDER-SVG — turn the layered render plan into an SVG string.
     ========================================================== */
  function toneColour(tone, exam) {
    if (exam) return THEME.examCurve;
    var t = THEME.tones[tone] || THEME.tones.neutral;
    return t.stroke;
  }
  function toneFill(tone) {
    var t = THEME.tones[tone] || THEME.tones.neutral;
    return t.fill;
  }

  function renderSvg(plan, spec, ctx) {
    var exam = spec.mode === 'exam';
    var parts = [];
    var arrowColours = [];
    var arrowHeads = [];

    // collect marker colours/heads from arrow elements
    plan.elements.forEach(function (el) {
      if (el.kind === 'arrow') {
        var col = exam ? THEME.examInk : toneColour(el.arrow.tone, false);
        arrowColours.push(col);
        var h = el.arrow.head || 'chevron';
        arrowHeads.push(h);
        if (h === 'double-chevron') arrowHeads.push('chevron');
      }
    });
    arrowColours = uniq(arrowColours);
    arrowHeads = uniq(arrowHeads);
    if (arrowHeads.indexOf('chevron') === -1) arrowHeads.push('chevron');

    var alt = (spec.alt && (spec.alt.summary || spec.alt.long)) || autoAlt(spec);
    parts.push(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + plan.width + ' ' + plan.height +
        '" role="img" aria-label="' + esc(alt) + '" class="edl-diagram edl-' + spec.type +
        ' edl-mode-' + spec.mode + '" preserveAspectRatio="xMidYMid meet">'
    );
    parts.push('<title>' + esc(alt) + '</title>');
    if (spec.alt && spec.alt.long) parts.push('<desc>' + esc(spec.alt.long) + '</desc>');
    parts.push('<defs>' + buildMarkers(arrowColours.length ? arrowColours : [THEME.examInk], arrowHeads) + '</defs>');

    plan.elements.forEach(function (el) {
      parts.push(renderElement(el, plan, spec, ctx, exam));
    });

    parts.push('</svg>');
    return parts.join('');
  }

  function renderElement(el, plan, spec, ctx, exam) {
    switch (el.kind) {
      case 'background':
        return (
          '<rect x="0" y="0" width="' + plan.width + '" height="' + plan.height +
          '" fill="' + (exam ? '#FFFFFF' : THEME.paper) + '"/>'
        );
      case 'region':
        return renderRegion(el.region, ctx, exam);
      case 'segment':
        return renderSegment(el.segment, ctx, exam);
      case 'axes':
        return renderAxes(el.axes, ctx, exam);
      case 'curve':
        return renderCurve(el.curve, ctx, exam);
      case 'point':
        return renderPoint(el.point, ctx, exam);
      case 'arrow':
        return renderArrow(el.arrow, ctx, exam);
      case 'label':
        return renderLabel(el.label, exam);
      case 'debugbox':
        return renderDebugBox(el.box, el.idx);
      case 'debuglegend':
        return renderDebugLegend(plan);
      default:
        return '';
    }
  }

  function polygonPath(poly, ctx) {
    return poly
      .map(function (p, i) {
        return (i === 0 ? 'M ' : 'L ') + r2(ctx.px(p.x)) + ',' + r2(ctx.py(p.y));
      })
      .join(' ') + ' Z';
  }
  function renderRegion(rg, ctx, exam) {
    var d = polygonPath(rg.polygon, ctx);
    if (rg.outline || exam) {
      return '<path d="' + d + '" fill="none" stroke="' + THEME.examCurve +
        '" stroke-width="1" stroke-dasharray="3 3" stroke-linejoin="round"/>';
    }
    return '<path d="' + d + '" fill="' + toneFill(rg.tone) + '" fill-opacity="' + rg.opacity +
      '" stroke="none"/>';
  }
  function renderSegment(sg, ctx, exam) {
    var col = exam ? THEME.examCurve : (THEME.tones[sg.tone] || THEME.tones.old).stroke;
    var dash = sg.dashed ? ' stroke-dasharray="' + sg.dashed + '"' : '';
    return (
      '<path d="M ' + r2(ctx.px(sg.p1.x)) + ',' + r2(ctx.py(sg.p1.y)) + ' L ' +
      r2(ctx.px(sg.p2.x)) + ',' + r2(ctx.py(sg.p2.y)) + '" stroke="' + col + '" stroke-width="' +
      (sg.width || THEME.strokeGuide) + '"' + dash + ' fill="none" stroke-linecap="round"/>'
    );
  }
  function renderAxes(axes, ctx, exam) {
    var col = exam ? THEME.examInk : THEME.axis;
    var x0 = ctx.px(0);
    var y0 = ctx.py(0);
    var xEnd = ctx.px(1.02);
    var yTop = ctx.py(1.02);
    var s = '';
    // x-axis with open chevron arrow at right
    s += '<path d="M ' + r2(x0) + ',' + r2(y0) + ' L ' + r2(xEnd) + ',' + r2(y0) +
      '" stroke="' + col + '" stroke-width="' + THEME.strokeAxis + '" fill="none" stroke-linecap="round"/>';
    s += axisChevron(xEnd, y0, 0, col);
    // y-axis
    s += '<path d="M ' + r2(x0) + ',' + r2(y0) + ' L ' + r2(x0) + ',' + r2(yTop) +
      '" stroke="' + col + '" stroke-width="' + THEME.strokeAxis + '" fill="none" stroke-linecap="round"/>';
    s += axisChevron(x0, yTop, -90, col);
    if (axes.showOrigin) {
      s += '<text x="' + r2(x0 - 9) + '" y="' + r2(y0 + 14) + '" font-family="' + THEME.font +
        '" font-size="11" fill="' + col + '" text-anchor="end">O</text>';
    }
    return s;
  }
  function axisChevron(x, y, angleDeg, col) {
    // small open chevron drawn manually at the axis tip
    var a = (angleDeg * Math.PI) / 180;
    var len = 7;
    var spread = 0.6;
    function pt(da) {
      return (
        r2(x - len * Math.cos(a + da)) + ',' + r2(y - len * Math.sin(a + da))
      );
    }
    return (
      '<path d="M ' + pt(spread) + ' L ' + r2(x) + ',' + r2(y) + ' L ' + pt(-spread) +
      '" stroke="' + col + '" stroke-width="' + THEME.strokeAxis +
      '" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
    );
  }
  function renderCurve(c, ctx, exam) {
    var pts = sampleDef(c.def, c.x0 == null ? 0 : c.x0, c.x1 == null ? 1 : c.x1, 46);
    var d = pts
      .map(function (p, i) {
        return (i === 0 ? 'M ' : 'L ') + r2(ctx.px(clampUnit(p.x))) + ',' + r2(ctx.py(clampUnit(p.y)));
      })
      .join(' ');
    var col = exam ? THEME.examCurve : toneColour(c.tone, false);
    var dash = c.dashed ? ' stroke-dasharray="' + c.dashed + '"' : '';
    var w = exam ? 1.8 : c.width || THEME.strokeMain;
    return (
      '<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="' + w + '"' + dash +
      ' stroke-linecap="round" stroke-linejoin="round"/>'
    );
  }
  function renderPoint(p, ctx, exam) {
    var col = exam ? THEME.examInk : toneColour(p.tone, false);
    return (
      '<circle cx="' + r2(ctx.px(p.x)) + '" cy="' + r2(ctx.py(p.y)) + '" r="' + THEME.pointR +
      '" fill="#FFFFFF" stroke="' + col + '" stroke-width="2"/>'
    );
  }

  function renderArrow(a, ctx, exam) {
    var col = exam ? THEME.examInk : toneColour(a.tone, false);
    var p1 = { x: ctx.px(a.p1.x), y: ctx.py(a.p1.y) };
    var p2 = { x: ctx.px(a.p2.x), y: ctx.py(a.p2.y) };
    var route = a.route === 'auto' ? autoRoute(a) : a.route;
    var d;
    var buf = a.buffer == null ? 9 : a.buffer;

    if (route === 'bracket') {
      return renderBracketArrow(a, p1, p2, col);
    }
    if (route === 'arc' || route === 'curved') {
      var mid = midCtrl(p1, p2, a.curveDir);
      var bp = bufferPath(p1, p2, buf);
      d = 'M ' + r2(bp.a.x) + ',' + r2(bp.a.y) + ' Q ' + r2(mid.x) + ',' + r2(mid.y) + ' ' +
        r2(bp.b.x) + ',' + r2(bp.b.y);
    } else if (route === 'orthogonal') {
      d = 'M ' + r2(p1.x) + ',' + r2(p1.y) + ' L ' + r2(p2.x) + ',' + r2(p1.y) + ' L ' +
        r2(p2.x) + ',' + r2(p2.y);
    } else {
      var b = bufferPath(p1, p2, buf);
      d = 'M ' + r2(b.a.x) + ',' + r2(b.a.y) + ' L ' + r2(b.b.x) + ',' + r2(b.b.y);
    }

    var head = a.head || 'chevron';
    var endM = ' marker-end="url(#' + markerId(head === 'double-chevron' ? 'chevron' : head, col) + ')"';
    var startM =
      head === 'double-chevron'
        ? ' marker-start="url(#' + markerId('chevron', col) + ')"'
        : '';
    return (
      '<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="1.9" ' +
      'stroke-linecap="round" stroke-linejoin="round"' + startM + endM + '/>'
    );
  }
  function autoRoute(a) {
    if (Math.abs(a.p1.x - a.p2.x) < 0.001) return 'vertical';
    if (Math.abs(a.p1.y - a.p2.y) < 0.001) return 'horizontal';
    return 'direct';
  }
  function bufferPath(p1, p2, buf) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var ux = dx / len;
    var uy = dy / len;
    var bb = Math.min(buf, len / 2.2);
    return {
      a: { x: p1.x + ux * bb, y: p1.y + uy * bb },
      b: { x: p2.x - ux * bb, y: p2.y - uy * bb },
    };
  }
  function midCtrl(p1, p2, dir) {
    var mx = (p1.x + p2.x) / 2;
    var my = (p1.y + p2.y) / 2;
    var off = 26 * (dir === 'down' ? 1 : -1);
    return { x: mx, y: my + off };
  }
  function renderBracketArrow(a, p1, p2, col) {
    // square bracket spanning p1..p2 with a small lip, plus a
    // double chevron and a leader for the label pill.
    var dir = a.bracketDir === 'up' ? -1 : 1;
    var lip = 7 * dir;
    var yy = p1.y + 16 * dir;
    var d =
      'M ' + r2(p1.x) + ',' + r2(p1.y) + ' L ' + r2(p1.x) + ',' + r2(yy) + ' L ' + r2(p2.x) +
      ',' + r2(yy) + ' L ' + r2(p2.x) + ',' + r2(p2.y);
    var midx = (p1.x + p2.x) / 2;
    var headM = ' marker-end="url(#' + markerId('chevron', col) + ')"';
    var headS = ' marker-start="url(#' + markerId('chevron', col) + ')"';
    var inner =
      '<path d="M ' + r2(p1.x + 6) + ',' + r2(yy) + ' L ' + r2(p2.x - 6) + ',' + r2(yy) +
      '" stroke="' + col + '" stroke-width="1.7" fill="none" stroke-linecap="round"' + headM + headS + '/>';
    void midx;
    void lip;
    return (
      '<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="1.7" ' +
      'stroke-linecap="round" stroke-linejoin="round"/>' + inner
    );
  }

  function renderLabel(lab, exam) {
    var f = lab.final;
    var cand = f.candidate;
    var x = cand.x;
    var y = cand.y + lab.size * 0.34;
    var fill = exam ? THEME.examInk : (lab.type === 'tick' ? THEME.ink : labelInk(lab.tone));
    var weight = lab.bold ? '700' : '500';
    var s = '';
    if (lab.pill && !exam) {
      var b = f.bbox;
      s +=
        '<rect x="' + r2(b.x - 6) + '" y="' + r2(b.y - 1) + '" width="' + r2(b.w + 12) +
        '" height="' + r2(b.h + 2) + '" rx="' + r2((b.h + 2) / 2) + '" fill="' + THEME.pillBg +
        '" stroke="' + THEME.pillBorder + '" stroke-width="1"/>';
    }
    s +=
      '<text x="' + r2(x) + '" y="' + r2(y) + '" font-family="' + THEME.font + '" font-size="' +
      Math.max(THEME.minLabel, lab.size) + '" font-weight="' + weight + '" fill="' + fill +
      '" text-anchor="' + cand.anchor + '">' + esc(lab.text) + '</text>';
    return s;
  }
  function labelInk(tone) {
    // labels stay readable: use the tone's stroke for coloured labels
    // but never the muted 'old' grey for text.
    if (tone === 'old' || tone === 'neutral') return THEME.ink;
    var t = THEME.tones[tone];
    return t ? t.stroke : THEME.ink;
  }
  function renderDebugBox(b, idx) {
    return (
      '<g><rect x="' + r2(b.x) + '" y="' + r2(b.y) + '" width="' + r2(b.w) + '" height="' + r2(b.h) +
      '" fill="none" stroke="#EF4444" stroke-width="0.7" stroke-dasharray="2 2"/>' +
      '<text x="' + r2(b.x) + '" y="' + r2(b.y - 1) + '" font-family="' + THEME.font +
      '" font-size="8" fill="#EF4444">' + idx + '</text></g>'
    );
  }
  function renderDebugLegend(plan) {
    return (
      '<text x="6" y="' + (plan.height - 6) + '" font-family="' + THEME.font +
      '" font-size="9" fill="#94A3B8">EDL debug · ' + plan.elements.length + ' els · ' +
      plan.placedBoxes.length + ' labels · ' + plan.hidden.length + ' hidden</text>'
    );
  }

  /* ==========================================================
     §LEGACY — detect old ECONOS_PPF chart specs and delegate.

     A legacy spec is the shape js/charts/specs/*.js export: raw
     `curves: [{ d: 'M ...' }]`, a `chartArea`, hand-authored `defs`,
     `layers`, etc. None of those exist in an EDL semantic spec.
     ========================================================== */
  function isLegacySpec(spec) {
    if (!spec || typeof spec !== 'object') return false;
    if (spec.version === 1 && (spec.type || spec.intent)) return false; // explicit EDL
    if (spec.type && REGISTRY.families.indexOf(spec.type) !== -1) return false;
    if (spec.intent && REGISTRY.intents[spec.intent]) return false;
    if (spec.chartArea || spec.inverseLayers) return true;
    if (Array.isArray(spec.curves) && spec.curves.some(function (c) {
      return c && typeof c.d === 'string';
    })) {
      return true;
    }
    if (typeof spec.defs === 'string' && /<marker|<svg/i.test(spec.defs)) return true;
    return false;
  }

  function renderLegacy(spec) {
    var hasPpf =
      typeof window !== 'undefined' && window.ECONOS_PPF && typeof window.ECONOS_PPF.render === 'function';
    if (!hasPpf) {
      return {
        svg: '',
        errors: ['legacy spec but window.ECONOS_PPF is not loaded'],
        warnings: [],
        derived: {},
        renderPlan: { elements: [], legacy: true },
        hidden: [],
        collisionsResolved: [],
      };
    }
    var svg = window.ECONOS_PPF.render(spec);
    return {
      svg: svg,
      errors: [],
      warnings: ['rendered via legacy ECONOS_PPF compatibility path'],
      derived: {},
      renderPlan: { elements: [], legacy: true },
      hidden: [],
      collisionsResolved: [],
    };
  }

  /* ==========================================================
     §PUBLIC API
     ========================================================== */
  function render(rawSpec) {
    try {
      if (isLegacySpec(rawSpec)) return renderLegacy(rawSpec);
      var compiled = compile(rawSpec);
      if (compiled.legacy) return renderLegacy(rawSpec);
      if (compiled.errors && compiled.errors.length && !compiled.scene) {
        return {
          svg: '',
          errors: compiled.errors,
          warnings: compiled.warnings || [],
          derived: compiled.derived || {},
          renderPlan: compiled.renderPlan || { elements: [] },
          hidden: [],
          collisionsResolved: [],
        };
      }
      var svg = renderSvg(compiled.renderPlan, compiled.normalisedSpec, compiled.ctx);
      return {
        svg: svg,
        errors: compiled.errors || [],
        warnings: compiled.warnings || [],
        derived: compiled.derived || {},
        renderPlan: compiled.renderPlan,
        hidden: compiled.hidden || [],
        collisionsResolved: compiled.collisions || [],
      };
    } catch (err) {
      return {
        svg: '',
        errors: ['EDL render error: ' + (err && err.message ? err.message : String(err))],
        warnings: [],
        derived: {},
        renderPlan: { elements: [] },
        hidden: [],
        collisionsResolved: [],
      };
    }
  }

  function debug(rawSpec) {
    var compiled = compile(rawSpec);
    if (compiled.legacy) {
      return {
        legacy: true,
        normalisedSpec: rawSpec,
        validation: compiled.validation,
        svg: renderLegacy(rawSpec).svg,
      };
    }
    var svg = renderSvg(compiled.renderPlan, compiled.normalisedSpec, compiled.ctx);
    return {
      normalisedSpec: compiled.normalisedSpec,
      validation: compiled.validation,
      derivedGeometry: compiled.derived,
      renderPlan: compiled.renderPlan,
      collisions: compiled.collisions,
      hidden: compiled.hidden,
      svg: svg,
    };
  }

  /* ----- wire built-in templates onto their descriptors -----
     The builder functions in §TEMPLATES reference geometry helpers
     declared later in the file, so they attach to FAMILIES here, once
     everything is defined. Rendering reads TEMPLATES directly; this pass
     only keeps the FAMILIES descriptors complete for introspection and
     for registerFamily() callers that read them back. ----- */
  Object.keys(TEMPLATES).forEach(function (f) {
    if (FAMILIES[f] && !FAMILIES[f].template) FAMILIES[f].template = TEMPLATES[f];
  });

  /* ==========================================================
     §GRAMMAR — a JSON-serialisable dump of the whole vocabulary.

     This is the single function to call when seeding a database: it
     returns ONLY data (no functions), structured so it maps cleanly to
     either reference tables (families, intents, show-tokens) or a single
     `jsonb` grammar document — whichever Postgres shape is chosen later.
     The authored spec itself is already plain JSON; together they make
     the language fully describable as data without losing the engine's
     guarantees, which stay in code keyed by `family`.
     ========================================================== */
  function grammar() {
    var fams = {};
    Object.keys(FAMILIES).forEach(function (f) {
      var d = FAMILIES[f];
      fams[f] = {
        family: f,
        axes: assign({}, d.axes),
        intents: (d.intents || []).slice(),
        showTokens: (d.showTokens || []).slice(),
        defaultShow: clone(d.defaultShow || {}),
      };
    });
    return {
      version: VERSION,
      families: fams,
      showTokens: REGISTRY.showTokens.slice(),
      annotationTypes: ANNOTATION_TYPES.slice(),
      arrowKinds: REGISTRY.arrowKinds.slice(),
      routes: REGISTRY.routes.slice(),
      heads: REGISTRY.heads.slice(),
      tones: REGISTRY.tones.slice(),
      viewports: REGISTRY.viewports.slice(),
      modes: REGISTRY.modes.slice(),
    };
  }

  var API = {
    version: VERSION,
    render: render,
    validate: validate,
    compile: compile,
    debug: debug,
    normalise: normalise,
    registerFamily: registerFamily,
    grammar: grammar,
    families: FAMILIES,
    annotationTypes: ANNOTATION_TYPES,
    templates: TEMPLATES,
    layers: LAYERS,
    registry: REGISTRY,
    theme: THEME,
    // exposed for tests / tooling
    _geometry: {
      intersect: intersect,
      yAtX: yAtX,
      xAtY: xAtY,
      demandDef: demandDef,
      supplyDef: supplyDef,
      shiftLineX: shiftLineX,
      shiftLineY: shiftLineY,
    },
    _isLegacySpec: isLegacySpec,
  };

  // keep the unused alt-wrappers referenced so lint stays clean while
  // the helpers document intent for future per-family alt text.
  void subsidyAltWrap;
  void recolourTone;

  // Browser global. (No CommonJS export: the static <script> loader and
  // the node test harness both eval this file with `new Function('window',
  // src)` and read window.ECONOS_DIAGRAMS — see tests/unit/diagrams.test.js.)
  if (typeof window !== 'undefined') {
    window.ECONOS_DIAGRAMS = API;
  }
})();
