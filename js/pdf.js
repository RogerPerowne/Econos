/* ============================================================
   ECONOS – PDF / print deck generator
   Renders all topic cards as a single flowing printable document
   in a new window, then triggers print dialog (→ Save as PDF).

   IMPORTANT: design avoids background fills (which browsers strip
   from PDFs unless "Background graphics" is enabled). Instead it
   uses thick coloured borders + coloured text, which always print.
   ============================================================ */

window.EconosPdf = (function () {

  var C = {
    navy:   '#0B1426',
    ink:    '#1E293B',
    slate:  '#475569',
    muted:  '#94A3B8',
    rule:   '#E2E8F0',
    green:  '#059669',
    amber:  '#D97706',
    blue:   '#2563EB',
    rose:   '#DC2626',
    purple: '#7C3AED',
    sky:    '#0EA5E9'
  };

  function toneColor(tone) { return C[tone] || C.blue; }
  function s(v)            { return v || ''; }

  /* ---- SVG diagram helpers ---- */

  function getIcon(key) {
    return (window.ECONOS_ICONS && window.ECONOS_ICONS[key]) || '';
  }

  /* Make every hidden layer group visible (final-state render for interactive diagrams) */
  function makeLayersVisible(svgStr) {
    return svgStr
      .replace(/style="display:\s*none;?\s*"/gi, 'style=""')
      .replace(/display="none"/gi, '');
  }

  /* Wrap an SVG key as an inline printable image */
  function embedStaticDiagram(key, caption) {
    var svg = getIcon(key);
    if (!svg) return '';
    svg = svg.replace(/<svg /, '<svg style="width:100%;max-width:540px;height:auto;display:block;margin:0 auto;" ');
    return '<div style="text-align:center;margin:12px 0 18px;">' + svg +
      (caption ? '<div style="font-size:11px;color:' + C.slate + ';text-align:center;margin-top:6px;font-style:italic;">' + s(caption) + '</div>' : '') +
      '</div>';
  }

  /* Embed an interactiveDiagram block with all layers shown (final state) */
  function embedInteractiveDiagram(id) {
    if (!id) return '';
    var svg = getIcon(id.svgKey);
    if (!svg) return renderFallback();
    svg = makeLayersVisible(svg);
    svg = svg.replace(/<svg /, '<svg style="width:100%;max-width:540px;height:auto;display:block;margin:0 auto;" ');

    var views = id.views || [];
    var lastView = views[views.length - 1] || {};
    var col = toneColor(lastView.tone || 'blue');

    var viewHtml = '';
    if (lastView.head || lastView.body || lastView.analysis) {
      viewHtml = '<div style="margin-top:10px;border-left:4px solid ' + col + ';padding:8px 0 8px 14px;">' +
        (lastView.head ? '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:4px;">' + s(lastView.head) + '</div>' : '') +
        (lastView.body ? '<div style="font-size:12px;line-height:1.6;color:' + C.ink + ';margin-bottom:4px;">' + s(lastView.body) + '</div>' : '') +
        (lastView.analysis ? '<div style="font-size:12px;line-height:1.55;color:' + C.slate + ';font-style:italic;">' + s(lastView.analysis) + '</div>' : '') +
        '</div>';
    }

    var label = (id.label || id.emoji) ? secHead(id.emoji || '📊', id.label || 'Diagram') : '';
    return label + '<div style="text-align:center;margin:8px 0;">' + svg + '</div>' + viewHtml;
  }

  /* Dominant accent colour for each card */
  function cardAccent(c) {
    if (c.tone) return toneColor(c.tone);
    switch (c.template) {
      case 'framing':   return C.navy;
      case 'cause':     return c.diagram === 'demand-pull' ? C.green : C.amber;
      case 'diagnose':  return C.purple;
      case 'demand-side-policies-monetary':  return C.blue;
      case 'impacts':   return C.rose;
      case 'deflation': return '#334155';
      default:          return C.navy;
    }
  }

  /* ---- Shared blocks (border + coloured text, no fills) ---- */

  function calloutBlock(opts) {
    var col   = opts.color;
    var label = opts.label;
    var html  = opts.html;
    var icon  = opts.icon || '';
    return '<div style="border-left:5px solid ' + col + ';padding:10px 0 10px 14px;margin:14px 0;">' +
      '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:' + col + ';margin-bottom:6px;">' +
      (icon ? icon + ' ' : '') + s(label) + '</div>' +
      '<div style="font-size:12px;line-height:1.65;color:' + C.ink + ';">' + s(html) + '</div>' +
      '</div>';
  }

  function examEdgeBlock(e) {
    if (!e) return '';
    var title = (typeof e === 'object') ? (e.title || 'Exam edge') : 'Exam edge';
    var text  = (typeof e === 'object') ? e.text : e;
    if (!text) return '';
    return calloutBlock({ color: C.blue, label: title, html: text, icon: '⚡' });
  }

  function keyTakeawayBlock(k) {
    if (!k) return '';
    return calloutBlock({ color: C.green, label: k.title, html: k.text, icon: '🔑' });
  }

  function secHead(emoji, text) {
    return '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:' + C.slate + ';margin:18px 0 10px;display:flex;align-items:center;gap:6px;">' +
      (emoji ? '<span>' + emoji + '</span>' : '') + '<span>' + s(text) + '</span></div>';
  }

  /* ---- Template renderers ---- */

  function renderFraming(c) {
    var branches = (c.branches || []).map(function (b) {
      var col = toneColor(b.tone);
      return '<div style="flex:1;min-width:160px;border-left:5px solid ' + col + ';padding:6px 0 6px 14px;">' +
        '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:5px;text-transform:uppercase;letter-spacing:.04em;">' + s(b.label) + '</div>' +
        '<div style="font-size:12px;line-height:1.6;color:' + C.ink + ';">' + s(b.sub) + '</div>' +
        '</div>';
    }).join('');
    return '<div style="display:flex;gap:18px;flex-wrap:wrap;margin:6px 0 18px;">' + branches + '</div>' +
      examEdgeBlock(c.examEdge) +
      keyTakeawayBlock(c.keyTakeaway);
  }

  function renderCause(c) {
    var tone, bannerLabel;
    if (c.tone || c.bannerLabel) {
      tone = c.tone || 'blue';
      bannerLabel = c.bannerLabel || c.title;
    } else {
      tone = c.diagram === 'demand-pull' ? 'green' : 'amber';
      bannerLabel = c.diagram === 'demand-pull' ? 'Type 1 · Demand-pull' : 'Type 2 · Cost-push';
    }
    var col = toneColor(tone);

    var banner = '<div style="border-bottom:2px solid ' + col + ';padding:6px 0 8px;margin-bottom:14px;display:flex;align-items:center;gap:10px;">' +
      '<div style="width:10px;height:10px;border-radius:50%;background:' + col + ';flex-shrink:0;"></div>' +
      '<div style="font-weight:800;font-size:13px;color:' + col + ';text-transform:uppercase;letter-spacing:.06em;">' + bannerLabel + '</div>' +
      (c.diagramCaption ? '<div style="font-size:12px;color:' + C.slate + ';font-style:italic;">' + s(c.diagramCaption) + '</div>' : '') +
      '</div>';

    var causesHtml = c.causes ? '<div style="flex:1;border-top:3px solid ' + C.slate + ';padding-top:10px;">' +
      '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:' + C.slate + ';margin-bottom:8px;">' + s(c.causes.title) + '</div>' +
      '<ul style="margin:0;padding-left:18px;font-size:12px;line-height:1.8;color:' + C.ink + ';">' +
      (c.causes.items || []).map(function (i) { return '<li>' + s(i) + '</li>'; }).join('') +
      '</ul></div>' : '';

    var hallmarksHtml = c.hallmarks ? '<div style="flex:1;border-top:3px solid ' + col + ';padding-top:10px;">' +
      '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:' + col + ';margin-bottom:8px;">' + s(c.hallmarks.title) + '</div>' +
      '<ul style="margin:0;padding-left:18px;font-size:12px;line-height:1.8;color:' + C.ink + ';">' +
      (c.hallmarks.items || []).map(function (i) { return '<li>' + s(i) + '</li>'; }).join('') +
      '</ul></div>' : '';

    var ukExHtml = c.ukExamples ? calloutBlock({
      color: C.slate, label: '🇬🇧 ' + (c.ukExamples.title || 'UK examples'),
      html: c.ukExamples.text
    }) : '';

    var policyHtml = c.policy ? calloutBlock({ color: col, label: c.policy.title, html: c.policy.text, icon: '🎯' }) : '';
    var dilemmaHtml = c.dilemma ? calloutBlock({
      color: C.amber, label: c.dilemma.title, icon: '⚠️',
      html: '<ul style="margin:0;padding-left:18px;line-height:1.8;">' +
        (c.dilemma.lines || []).map(function (l) { return '<li>' + s(l) + '</li>'; }).join('') +
        '</ul>'
    }) : '';

    return banner +
      '<div style="display:flex;gap:24px;margin-bottom:12px;">' + causesHtml + hallmarksHtml + '</div>' +
      ukExHtml + policyHtml + dilemmaHtml +
      examEdgeBlock(c.examEdge);
  }

  function renderDiagnose(c) {
    var headers = c.table.headers || [];
    var thead = headers.map(function (h, i) {
      var col = i === 0 ? C.slate : (i === 1 ? C.green : C.amber);
      return '<th style="padding:10px 11px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;' +
        'color:' + col + ';border-bottom:3px solid ' + col + ';text-align:left;">' + s(h) + '</th>';
    }).join('');

    var rows = (c.table.rows || []).map(function (row) {
      return '<tr>' + row.map(function (cell, ci) {
        var col = ci === 0 ? C.slate : (ci === 1 ? C.green : C.amber);
        var weight = ci === 0 ? 700 : 600;
        return '<td style="padding:9px 11px;font-size:12px;color:' + (ci === 0 ? C.ink : col) + ';font-weight:' + weight + ';border-bottom:1px solid ' + C.rule + ';">' + s(cell) + '</td>';
      }).join('') + '</tr>';
    }).join('');

    var table = '<table style="width:100%;border-collapse:collapse;margin:6px 0 18px;">' +
      '<thead><tr>' + thead + '</tr></thead>' +
      '<tbody>' + rows + '</tbody></table>';

    var scenarios = (c.scenarios && c.scenarios.items || []).map(function (sc) {
      var col = sc.tone === 'green' ? C.green : sc.tone === 'amber' ? C.amber : C.purple;
      return '<div style="border-left:5px solid ' + col + ';padding:8px 0 8px 14px;margin-bottom:10px;">' +
        '<div style="font-size:11px;font-weight:800;color:' + col + ';margin-bottom:4px;text-transform:uppercase;letter-spacing:.06em;">Scenario ' + s(sc.label) + ' → ' + s(sc.answer) + '</div>' +
        '<div style="font-size:12px;line-height:1.55;color:' + C.ink + ';">' + s(sc.text) + '</div>' +
        '</div>';
    }).join('');

    return table +
      (c.scenarios ? secHead('🔍', c.scenarios.title || 'Scenarios') + scenarios : '') +
      examEdgeBlock(c.examEdge);
  }

  function renderMonetary(c) {
    var classical = c.classical ? '<div style="border:2px solid ' + C.navy + ';border-radius:8px;padding:16px 18px;margin-bottom:18px;">' +
      '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:' + C.navy + ';margin-bottom:10px;">' + s(c.classical.title) + '</div>' +
      '<div style="text-align:center;margin:10px 0;">' +
      '<div style="font-size:28px;font-weight:900;color:' + C.navy + ';font-family:Georgia,serif;letter-spacing:.06em;">' + s(c.classical.formula) + '</div>' +
      '<div style="font-size:11px;color:' + C.slate + ';margin-top:4px;font-style:italic;">' + s(c.classical.formulaSub) + '</div>' +
      '</div>' +
      '<div style="font-size:12px;font-style:italic;color:' + C.slate + ';text-align:center;border-top:1px solid ' + C.rule + ';padding-top:10px;margin-top:4px;">' + s(c.classical.quote) + '</div>' +
      '<div style="font-size:12px;line-height:1.55;color:' + C.ink + ';margin-top:10px;border-top:1px solid ' + C.rule + ';padding-top:10px;">' + s(c.classical.examples) + '</div>' +
      '</div>' : '';

    var puzzleBullets = (c.puzzle && c.puzzle.bullets || []).map(function (b) {
      return '<li style="margin-bottom:4px;">' + s(b) + '</li>';
    }).join('');
    var puzzle = puzzleBullets ? calloutBlock({
      color: C.blue, label: 'The QE puzzle', icon: '❓',
      html: '<ul style="margin:0;padding-left:18px;line-height:1.8;">' + puzzleBullets + '</ul>'
    }) : '';

    var mechanisms = (c.mechanisms || []).map(function (m) {
      var col = toneColor(m.tone);
      return '<div style="border-left:5px solid ' + col + ';padding:8px 0 8px 14px;margin-bottom:10px;">' +
        '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">' +
        '<div style="width:22px;height:22px;border-radius:50%;border:2px solid ' + col + ';color:' + col + ';font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + s(m.num) + '</div>' +
        '<div style="font-weight:800;font-size:13px;color:' + col + ';text-transform:uppercase;letter-spacing:.04em;">' + s(m.title) + '</div>' +
        '</div>' +
        '<div style="font-size:12px;line-height:1.55;color:' + C.ink + ';">' + s(m.text) + '</div>' +
        '</div>';
    }).join('');

    return classical + puzzle +
      (mechanisms ? secHead('💡', "Why QE didn't cause inflation") + mechanisms : '') +
      examEdgeBlock(c.examEdge);
  }

  function renderImpacts(c) {
    var groups = (c.groups || []).map(function (g) {
      var col = toneColor(g.tone);
      return '<div style="flex:1;min-width:170px;border-top:4px solid ' + col + ';padding:10px 0 0;">' +
        '<div style="font-size:14px;font-weight:800;color:' + col + ';margin-bottom:8px;">' + s(g.icon) + ' ' + s(g.label) + '</div>' +
        '<ul style="margin:0;padding-left:16px;font-size:11.5px;line-height:1.75;color:' + C.ink + ';">' +
        (g.bullets || []).map(function (b) { return '<li>' + s(b) + '</li>'; }).join('') +
        '</ul></div>';
    }).join('');

    var wl = c.winnersLosers;
    var winnersLosers = wl ? '<div style="display:flex;gap:18px;margin:16px 0;">' +
      '<div style="flex:1;border-top:4px solid ' + C.green + ';padding-top:10px;">' +
      '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:' + C.green + ';margin-bottom:6px;">✅ ' + s(wl.winners && wl.winners.label) + '</div>' +
      '<ul style="margin:0;padding-left:16px;font-size:12px;line-height:1.75;color:' + C.ink + ';">' +
      (wl.winners && wl.winners.items || []).map(function (i) { return '<li>' + s(i) + '</li>'; }).join('') +
      '</ul></div>' +
      '<div style="flex:2;border-top:4px solid ' + C.rose + ';padding-top:10px;">' +
      '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:' + C.rose + ';margin-bottom:6px;">❌ ' + s(wl.losers && wl.losers.label) + '</div>' +
      '<ul style="margin:0;padding-left:16px;font-size:12px;line-height:1.75;color:' + C.ink + ';">' +
      (wl.losers && wl.losers.items || []).map(function (i) { return '<li>' + s(i) + '</li>'; }).join('') +
      '</ul></div>' +
      '</div>' : '';

    var example = c.example ? calloutBlock({
      color: C.rose, label: 'Real-world example', icon: '📍', html: c.example
    }) : '';

    return '<div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:12px;">' + groups + '</div>' +
      winnersLosers + example + examEdgeBlock(c.examEdge);
  }

  function renderDeflation(c) {
    var col = '#334155';
    var mechanisms = (c.mechanisms || []).map(function (m) {
      return '<div style="border-top:3px solid ' + col + ';padding:10px 0 0;">' +
        '<div style="font-size:22px;margin-bottom:4px;">' + s(m.icon) + '</div>' +
        '<div style="font-weight:800;font-size:13px;color:' + C.navy + ';margin-bottom:4px;">' + s(m.title) + '</div>' +
        '<div style="font-size:12px;line-height:1.55;color:' + C.ink + ';">' + s(m.text) + '</div>' +
        '</div>';
    }).join('');

    var examples = c.examples ? (c.examples.items || []).map(function (e) {
      return '<div style="border-left:5px solid ' + col + ';padding:6px 0 6px 14px;margin-bottom:8px;">' +
        '<div style="font-size:11px;font-weight:800;color:' + col + ';text-transform:uppercase;letter-spacing:.06em;">' + s(e.period) + '</div>' +
        '<div style="font-size:12px;color:' + C.ink + ';margin-top:2px;line-height:1.55;">' + s(e.text) + '</div>' +
        '</div>';
    }).join('') : '';

    return secHead('⚠️', c.mechanismsTitle || 'Why deflation is dangerous') +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:18px;">' + mechanisms + '</div>' +
      (examples ? secHead('📚', c.examples && c.examples.title || 'Examples') + examples : '') +
      examEdgeBlock(c.examEdge);
  }

  function renderMechanisms(c) {
    var items = (c.mechanisms || c.items || []).map(function (m) {
      var col = toneColor(m.tone || 'blue');
      return '<div style="border-left:5px solid ' + col + ';padding:8px 0 8px 14px;margin-bottom:10px;">' +
        (m.num ? '<div style="font-size:10px;font-weight:800;color:' + col + ';margin-bottom:4px;text-transform:uppercase;letter-spacing:.08em;">Step ' + m.num + '</div>' : '') +
        '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:4px;">' + s(m.title || m.head) + '</div>' +
        '<div style="font-size:12px;line-height:1.55;color:' + C.ink + ';">' + s(m.text || m.body) + '</div>' +
        '</div>';
    }).join('');
    return items + examEdgeBlock(c.examEdge);
  }

  function renderPaired(c) {
    var sides = (c.sides || c.components || []).map(function (side) {
      var col = toneColor(side.tone || 'blue');
      var bullets = (side.bullets || side.items || []).map(function (b) {
        return '<li>' + s(b) + '</li>';
      }).join('');
      return '<div style="flex:1;border-top:4px solid ' + col + ';padding:10px 0 0;">' +
        '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:8px;text-transform:uppercase;letter-spacing:.04em;">' + s(side.title || side.label) + '</div>' +
        (bullets ? '<ul style="margin:0;padding-left:16px;font-size:12px;line-height:1.8;color:' + C.ink + ';">' + bullets + '</ul>' : '') +
        (side.text ? '<div style="font-size:12px;line-height:1.55;color:' + C.ink + ';margin-top:8px;">' + s(side.text) + '</div>' : '') +
        '</div>';
    }).join('');
    return '<div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:14px;">' + sides + '</div>' +
      examEdgeBlock(c.examEdge);
  }

  function renderFallback() {
    return '<div style="font-size:12px;color:' + C.slate + ';font-style:italic;border-left:5px solid ' + C.rule + ';padding:10px 14px;">' +
      'Interactive diagram – see the full version in the Econos app.' +
      '</div>';
  }

  function renderElasticityFallback(c) {
    var formula = '<div style="border:2px solid ' + C.navy + ';border-radius:8px;padding:14px 18px;margin-bottom:16px;text-align:center;">' +
      '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:' + C.navy + ';margin-bottom:8px;">PED – midpoint formula</div>' +
      '<div style="font-size:22px;font-weight:900;color:' + C.navy + ';font-family:Georgia,serif;">PED = %ΔQ ÷ %ΔP</div>' +
      '<div style="font-size:11px;color:' + C.slate + ';margin-top:6px;font-style:italic;">|PED| &gt; 1 elastic · |PED| &lt; 1 inelastic · |PED| = 1 unit elastic</div>' +
      '</div>';
    var regimes = [
      { col: C.rose,   label: 'Perfectly inelastic',  shape: 'Vertical demand curve',    eg: 'Insulin in emergency settings',     rule: 'PED = 0 – quantity fixed.' },
      { col: C.amber,  label: 'Inelastic',            shape: 'Steep demand curve',       eg: 'Petrol short-run, salt',            rule: '|PED| < 1 – Q moves less than P.' },
      { col: C.blue,   label: 'Unit elastic',         shape: 'Rectangular hyperbola',    eg: 'Mid-point of any linear demand',    rule: '|PED| = 1 – TR unchanged.' },
      { col: C.green,  label: 'Elastic',              shape: 'Shallow demand curve',     eg: 'Designer handbags, branded soft drinks', rule: '|PED| > 1 – Q moves more than P.' },
      { col: C.purple, label: 'Perfectly elastic',    shape: 'Horizontal demand curve',  eg: 'A firm in perfect competition',     rule: 'PED = ∞ – any price rise → zero sales.' }
    ];
    var frames = regimes.map(function (r) {
      return '<div style="border-left:5px solid ' + r.col + ';padding:8px 0 8px 14px;margin-bottom:10px;">' +
        '<div style="font-size:11px;font-weight:800;color:' + r.col + ';text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">' + r.label + '</div>' +
        '<div style="font-size:12px;color:' + C.ink + ';line-height:1.55;">' +
        '<strong>Shape:</strong> ' + r.shape + ' &nbsp;·&nbsp; <strong>Real example:</strong> ' + r.eg + '<br>' +
        '<span style="color:' + C.slate + ';">' + r.rule + '</span>' +
        '</div></div>';
    }).join('');
    var howIt = c.howItWorks ? calloutBlock({ color: C.blue, label: 'How to read it', icon: '🧭', html: c.howItWorks }) : '';
    var note = '<div style="font-size:11px;color:' + C.slate + ';font-style:italic;margin-bottom:14px;">Interactive widget in the Econos app – drag two points along the curve to see live PED, classification and the total-revenue rectangles. Static reference below.</div>';
    return note + formula + frames + howIt + examEdgeBlock(c.examEdge);
  }

  function renderYedXedFallback(c, which) {
    var isYed = which === 'YED';
    var col = isYed ? C.purple : C.blue;
    var formula = '<div style="border:2px solid ' + col + ';border-radius:8px;padding:14px 18px;margin-bottom:16px;text-align:center;">' +
      '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:' + col + ';margin-bottom:8px;">' + which + ' – midpoint formula</div>' +
      '<div style="font-size:20px;font-weight:900;color:' + col + ';font-family:Georgia,serif;">' + (isYed ? 'YED = %ΔQD ÷ %ΔY (Income)' : 'XED = %ΔQD_A ÷ %ΔP_B') + '</div>' +
      '<div style="font-size:11px;color:' + C.slate + ';margin-top:6px;font-style:italic;">' + (isYed
        ? 'YED > 0 = normal good · YED < 0 = inferior · YED > 1 = luxury · 0 < YED < 1 = necessity'
        : 'XED > 0 = substitutes · XED < 0 = complements · XED = 0 = independent goods') + '</div>' +
      '</div>';
    var items = isYed ? [
      { col: C.rose,   label: 'Inferior good (YED < 0)',       eg: 'Bus travel, value-brand food', note: 'Demand falls as income rises – consumers trade up.' },
      { col: C.amber,  label: 'Normal necessity (0 < YED < 1)',eg: 'Food, utilities, clothing',     note: 'Demand rises slowly with income; recession-resilient.' },
      { col: C.blue,   label: 'Unit elastic (YED = 1)',         eg: 'Engel curve through origin',   note: '%ΔQD = %ΔY at every point.' },
      { col: C.purple, label: 'Luxury good (YED > 1)',          eg: 'Foreign holidays, designer goods, restaurant meals', note: 'Demand rises faster than income; pro-cyclical.' }
    ] : [
      { col: C.purple, label: 'Complements (XED < 0)',         eg: 'Petrol & car trips, tea & milk',    note: 'P_B ↑ → QD_A ↓ – goods used together.' },
      { col: C.slate,  label: 'Independent (XED = 0)',         eg: 'Unrelated goods',                   note: 'P_B has no effect on QD_A.' },
      { col: C.green,  label: 'Substitutes (XED > 0)',         eg: 'Coke & Pepsi, tea & coffee',        note: 'P_B ↑ → QD_A ↑ – consumers switch from B to A.' }
    ];
    var list = items.map(function (r) {
      return '<div style="border-left:5px solid ' + r.col + ';padding:8px 0 8px 14px;margin-bottom:10px;">' +
        '<div style="font-size:11px;font-weight:800;color:' + r.col + ';text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">' + r.label + '</div>' +
        '<div style="font-size:12px;color:' + C.ink + ';line-height:1.55;"><strong>Example:</strong> ' + r.eg + '<br><span style="color:' + C.slate + ';">' + r.note + '</span></div></div>';
    }).join('');
    var note = '<div style="font-size:11px;color:' + C.slate + ';font-style:italic;margin-bottom:14px;">Interactive widget in the Econos app. Static reference below.</div>';
    return note + formula + list + examEdgeBlock(c.examEdge);
  }

  function renderPesExplorerFallback(c) {
    var presets = [
      { col: C.rose,   label: 'Perfectly inelastic (PES = 0)', shape: 'Vertical supply',   eg: 'Fish already at market; paintings by deceased artist',  note: 'Supply fixed – 100% of demand shift → price change.' },
      { col: C.amber,  label: 'Inelastic (PES < 1)',           shape: 'Steep supply',       eg: 'Oil (short run), housing, agricultural crops',          note: 'Most demand shift → price; little quantity adjustment.' },
      { col: C.blue,   label: 'Unit elastic (PES = 1)',        shape: 'Through origin',     eg: 'Theoretical – any linear supply curve through the origin', note: '%ΔQS = %ΔP; demand shift splits equally between P and Q.' },
      { col: C.green,  label: 'Elastic (PES > 1)',             shape: 'Shallow supply',     eg: 'Manufactured goods, labour in unskilled sectors',        note: 'Most demand shift → quantity; price barely moves.' },
      { col: C.purple, label: 'Perfectly elastic (PES = ∞)',  shape: 'Horizontal supply',  eg: 'Long-run manufactured goods with constant costs',        note: 'All demand shift → quantity; price unchanged.' }
    ];
    var regimes = presets.map(function (r) {
      return '<div style="border-left:5px solid ' + r.col + ';padding:8px 0 8px 14px;margin-bottom:10px;">' +
        '<div style="font-size:11px;font-weight:800;color:' + r.col + ';text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">' + r.label + '</div>' +
        '<div style="font-size:12px;color:' + C.ink + ';line-height:1.55;">' +
        '<strong>Shape:</strong> ' + r.shape + ' &nbsp;·&nbsp; <strong>Example:</strong> ' + r.eg + '<br>' +
        '<span style="color:' + C.slate + ';">' + r.note + '</span>' +
        '</div></div>';
    }).join('');
    var formula = '<div style="border:2px solid ' + C.green + ';border-radius:8px;padding:14px 18px;margin-bottom:16px;text-align:center;">' +
      '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:' + C.green + ';margin-bottom:8px;">PES – midpoint formula</div>' +
      '<div style="font-size:22px;font-weight:900;color:' + C.green + ';font-family:Georgia,serif;">PES = %ΔQS ÷ %ΔP</div>' +
      '<div style="font-size:11px;color:' + C.slate + ';margin-top:6px;font-style:italic;">Always positive · PES &gt; 1 elastic · PES &lt; 1 inelastic · PES = 1 unit elastic</div>' +
      '<div style="font-size:11px;color:' + C.slate + ';margin-top:4px;">Geometric rule: through origin → unit elastic · P-axis intercept → inelastic · Q-axis intercept → elastic</div>' +
      '</div>';
    var note = '<div style="font-size:11px;color:' + C.slate + ';font-style:italic;margin-bottom:14px;">Interactive widget in the Econos app – drag two points along the supply curve to see live PES and the supply response. Static reference below.</div>';
    return note + formula + regimes + examEdgeBlock(c.examEdge);
  }

  function renderWorkedExample(c) {
    var lede = c.lede ? '<div style="font-size:13px;color:' + C.slate + ';margin-bottom:12px;line-height:1.6;">' + c.lede + '</div>' : '';
    var scenario = c.scenario ? '<div style="background:#EFF6FF;border:1.5px solid #BFDBFE;border-radius:8px;padding:12px 16px;font-size:13px;line-height:1.65;color:#1E3A5F;margin-bottom:16px;">' + c.scenario + '</div>' : '';
    var steps = (c.steps || []).map(function (s, i) {
      return '<div style="border:1.5px solid #E2E8F0;border-radius:8px;padding:12px 14px;margin-bottom:10px;page-break-inside:avoid;">' +
        '<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">' +
        '<span style="flex-shrink:0;width:22px;height:22px;border-radius:50%;background:#0B1426;color:white;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;">' + (i + 1) + '</span>' +
        '<div style="flex:1;font-size:13px;font-weight:600;color:#0B1426;line-height:1.45;">' + s.prompt + '</div>' +
        '</div>' +
        (s.hint ? '<div style="font-size:11px;color:#64748B;font-style:italic;margin-bottom:8px;padding-left:32px;">💡 ' + s.hint + '</div>' : '') +
        '<div style="background:#F0FDF4;border-left:4px solid #059669;border-radius:0 6px 6px 0;padding:8px 12px;font-size:12px;line-height:1.6;color:#0B1426;margin-left:32px;">' + s.answer + '</div>' +
        '</div>';
    }).join('');
    var conclusion = c.conclusion ? '<div style="background:#0B1426;color:white;border-radius:8px;padding:12px 16px;margin-bottom:14px;">' +
      '<div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#94A3B8;margin-bottom:5px;">Conclusion</div>' +
      '<div style="font-size:12px;line-height:1.65;">' + c.conclusion + '</div></div>' : '';
    return lede + scenario + steps + conclusion + examEdgeBlock(c.examEdge);
  }

  function renderPedFiveFrames(c) {
    var FRAME_COLORS = { rose: C.rose, amber: C.amber, blue: C.blue, green: C.green, purple: C.purple };
    var frames = (c.frames || []).map(function (f) {
      var col = FRAME_COLORS[f.tone] || C.slate;
      return '<div style="border-left:5px solid ' + col + ';padding:10px 0 10px 14px;margin-bottom:12px;page-break-inside:avoid;">' +
        '<div style="font-size:10px;font-weight:800;color:' + col + ';text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px;">' + f.name + '</div>' +
        '<div style="display:inline-block;font-size:10px;font-weight:700;color:' + col + ';background:' + col + '18;padding:1px 8px;border-radius:20px;margin-bottom:6px;">' + f.ped + '</div>' +
        '<div style="font-size:12px;color:' + C.ink + ';line-height:1.55;">' +
        '<strong>Example:</strong> ' + f.example + '<br>' +
        '<span style="color:' + C.slate + ';font-style:italic;">' + f.trRule + '</span>' +
        '</div></div>';
    }).join('');
    var lede = c.lede ? '<div style="font-size:13px;color:' + C.slate + ';margin-bottom:14px;line-height:1.6;">' + c.lede + '</div>' : '';
    return lede + frames + examEdgeBlock(c.examEdge);
  }

  /* ---- Generic-format renderer (body / causes:{head,body} / steps:{label,text} /
          rows / left+right:{points} / keyTerms) – matches app.js renderCardGeneric ---- */

  var TONES = [C.green, C.amber, C.blue, C.purple];

  function renderBranchesBlock(branches) {
    if (!branches || !branches.length) return '';
    var inner = branches.map(function (b) {
      var col = toneColor(b.tone);
      return '<div style="flex:1;min-width:170px;border-left:5px solid ' + col + ';padding:6px 0 6px 14px;">' +
        '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:5px;text-transform:uppercase;letter-spacing:.04em;">' + s(b.label) + '</div>' +
        '<div style="font-size:12px;line-height:1.6;color:' + C.ink + ';">' + s(b.sub) + '</div>' +
        '</div>';
    }).join('');
    return secHead('🧭', 'The big picture') +
      '<div style="display:flex;gap:18px;flex-wrap:wrap;margin:6px 0 18px;">' + inner + '</div>';
  }

  function renderBodyBlock(html) {
    if (!html) return '';
    return '<div style="font-size:13px;line-height:1.75;color:' + C.ink + ';margin:6px 0 18px;border-left:4px solid ' + C.rule + ';padding:4px 0 4px 14px;">' +
      html + '</div>';
  }

  function renderCausesGrid(causes) {
    if (!causes || !causes.length) return '';
    var tiles = causes.map(function (item, i) {
      var col = TONES[i % TONES.length];
      return '<div style="flex:1;min-width:240px;border-top:4px solid ' + col + ';padding:10px 0 0;">' +
        '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:6px;text-transform:uppercase;letter-spacing:.04em;">' + s(item.head) + '</div>' +
        '<div style="font-size:12px;line-height:1.65;color:' + C.ink + ';">' + s(item.body) + '</div>' +
        '</div>';
    }).join('');
    return secHead('🔗', 'Key mechanisms') +
      '<div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:18px;">' + tiles + '</div>';
  }

  function renderStepsBlock(steps) {
    if (!steps || !steps.length) return '';
    var items = steps.map(function (st, i) {
      var col = TONES[i % TONES.length];
      return '<div style="display:flex;gap:14px;margin-bottom:10px;border-left:5px solid ' + col + ';padding:6px 0 6px 14px;">' +
        '<div style="width:26px;height:26px;border-radius:50%;border:2px solid ' + col + ';color:' + col + ';font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + (i + 1) + '</div>' +
        '<div style="flex:1;">' +
        '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:4px;">' + s(st.label) + '</div>' +
        '<div style="font-size:12px;line-height:1.6;color:' + C.ink + ';">' + s(st.text) + '</div>' +
        '</div></div>';
    }).join('');
    return secHead('📋', 'How it works') + items;
  }

  function renderRowsTable(c) {
    if (!c.rows || !c.rows.length) return '';
    var hasHeader = c.colA || c.colB;
    var head = hasHeader ?
      '<tr><th style="padding:9px 11px;"></th>' +
      '<th style="padding:9px 11px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:' + C.green + ';border-bottom:3px solid ' + C.green + ';text-align:left;">' + s(c.colA) + '</th>' +
      '<th style="padding:9px 11px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:' + C.amber + ';border-bottom:3px solid ' + C.amber + ';text-align:left;">' + s(c.colB) + '</th></tr>' : '';
    var rows = c.rows.map(function (r) {
      return '<tr>' +
        '<td style="padding:8px 11px;font-size:12px;font-weight:700;color:' + C.ink + ';border-bottom:1px solid ' + C.rule + ';">' + s(r.label) + '</td>' +
        '<td style="padding:8px 11px;font-size:12px;color:' + C.green + ';font-weight:600;border-bottom:1px solid ' + C.rule + ';">' + s(r.colA) + '</td>' +
        '<td style="padding:8px 11px;font-size:12px;color:' + C.amber + ';font-weight:600;border-bottom:1px solid ' + C.rule + ';">' + s(r.colB) + '</td>' +
        '</tr>';
    }).join('');
    return secHead('📊', 'Compare') +
      '<table style="width:100%;border-collapse:collapse;margin-bottom:18px;">' +
      (hasHeader ? '<thead>' + head + '</thead>' : '') +
      '<tbody>' + rows + '</tbody></table>' +
      (c.footer ? '<div style="font-size:12px;color:' + C.slate + ';font-style:italic;margin-bottom:18px;">' + s(c.footer) + '</div>' : '');
  }

  function renderLeftRight(c) {
    if (!c.left || !c.right) return '';
    function side(s_, col) {
      var pts = (s_.points || []).map(function (p) { return '<li>' + s(p) + '</li>'; }).join('');
      return '<div style="flex:1;min-width:240px;border-top:4px solid ' + col + ';padding:10px 0 0;">' +
        '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:8px;text-transform:uppercase;letter-spacing:.04em;">' + s(s_.label) + '</div>' +
        '<ul style="margin:0;padding-left:18px;font-size:12px;line-height:1.75;color:' + C.ink + ';">' + pts + '</ul>' +
        '</div>';
    }
    return secHead('⚖️', 'Head to head') +
      '<div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:18px;">' +
      side(c.left, C.green) + side(c.right, C.blue) +
      '</div>';
  }

  function renderKeyTerms(keyTerms) {
    if (!keyTerms || !keyTerms.length) return '';
    var tiles = keyTerms.map(function (kt, i) {
      var col = TONES[i % TONES.length];
      return '<div style="flex:1;min-width:200px;border-top:3px solid ' + col + ';padding:8px 0 0;">' +
        '<div style="font-weight:800;font-size:12px;color:' + col + ';margin-bottom:5px;">' + s(kt.term) + '</div>' +
        '<div style="font-size:11.5px;line-height:1.6;color:' + C.ink + ';">' + s(kt.def) + '</div>' +
        '</div>';
    }).join('');
    return secHead('🔑', 'Key terms') +
      '<div style="display:flex;gap:18px;flex-wrap:wrap;margin-bottom:18px;">' + tiles + '</div>';
  }

  function renderEssayScaffold(c) {
    var TYPE_COLORS = { intro: '#0EA5E9', analysis: '#1E3A5F', counter: '#D97706', evaluation: '#7C3AED', conclusion: '#059669' };
    var TYPE_LABELS = { intro: 'Introduction', analysis: 'Analysis', counter: 'Counter-argument', evaluation: 'Evaluation', conclusion: 'Conclusion' };
    var lede = c.lede ? '<div style="font-size:13px;color:' + C.slate + ';margin-bottom:12px;line-height:1.6;">' + c.lede + '</div>' : '';
    var qBlock = '<div style="background:#0B1426;border-radius:8px;padding:14px 16px;margin-bottom:16px;">' +
      '<div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#94A3B8;margin-bottom:6px;">Exam Question · ' + (c.marks || 25) + ' marks' + (c.timeGuide ? ' · ' + c.timeGuide : '') + '</div>' +
      '<div style="font-size:13px;font-weight:600;color:#F1F5F9;line-height:1.5;">' + (c.question || '') + '</div></div>';
    var paras = (c.paragraphs || []).map(function(p) {
      var col = TYPE_COLORS[p.type] || C.slate;
      var lbl = (TYPE_LABELS[p.type] || p.type) + (p.label ? ' – ' + p.label : '');
      return '<div style="border-left:4px solid ' + col + ';padding:10px 0 10px 14px;margin-bottom:12px;page-break-inside:avoid;">' +
        '<div style="font-size:10px;font-weight:800;color:' + col + ';text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">' + lbl + '</div>' +
        '<div style="font-size:11px;color:#64748B;font-style:italic;margin-bottom:6px;">' + p.prompt + '</div>' +
        '<div style="font-size:12px;color:#0B1426;line-height:1.6;">' + (p.model || '') + '</div></div>';
    }).join('');
    return lede + qBlock + paras + examEdgeBlock(c.examEdge);
  }

  function renderMarketStructuresComparison(c) {
    var COLS = [
      { key: 'pc', label: 'Perfect Competition', color: '#059669' },
      { key: 'mc', label: 'Monopolistic Comp.',  color: '#0EA5E9' },
      { key: 'ol', label: 'Oligopoly',            color: '#D97706' },
      { key: 'mo', label: 'Monopoly',             color: '#DC2626' }
    ];
    var header = '<div style="display:grid;grid-template-columns:140px repeat(4,1fr);background:#0B1426;border-radius:8px 8px 0 0;">' +
      '<div style="padding:10px 10px;"></div>' +
      COLS.map(function(col) {
        return '<div style="padding:10px 8px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.07em;color:' + col.color + ';border-left:1px solid rgba(255,255,255,0.1);text-align:center;">' + col.label + '</div>';
      }).join('') + '</div>';
    var rows = (c.rows || []).map(function(r, i) {
      var bg = r.reveal ? '#FEFCE8' : (i % 2 === 0 ? '#F8FAFC' : '#fff');
      var labelStyle = r.reveal
        ? 'padding:10px 10px;font-weight:800;font-size:11px;color:#92400E;border-right:1px solid #E7E7EA;'
        : 'padding:10px 10px;font-weight:700;font-size:11px;color:#0B1426;border-right:1px solid #E7E7EA;';
      return '<div style="display:grid;grid-template-columns:140px repeat(4,1fr);background:' + bg + ';border-top:1px solid #E7E7EA;">' +
        '<div style="' + labelStyle + '">' + (r.reveal ? '⭐ ' : '') + r.label + '</div>' +
        COLS.map(function(col) {
          return '<div style="padding:10px 8px;font-size:11px;color:#0B1426;line-height:1.45;border-left:1px solid #E7E7EA;text-align:center;">' + (r[col.key] || '–') + '</div>';
        }).join('') + '</div>';
    }).join('');
    var lede = c.lede ? '<div style="font-size:13px;color:' + C.slate + ';margin-bottom:12px;line-height:1.6;">' + c.lede + '</div>' : '';
    return lede +
      '<div style="overflow-x:auto;border-radius:8px;border:1px solid #E7E7EA;margin-bottom:16px;">' + header + rows + '</div>' +
      examEdgeBlock(c.examEdge);
  }

  function renderGeneric(c) {
    var intro = c.intro ? '<div style="font-size:13px;line-height:1.65;color:' + C.slate + ';font-style:italic;border-left:4px solid ' + C.blue + ';padding:6px 0 6px 14px;margin-bottom:18px;">💡 ' + s(c.intro) + '</div>' : '';
    var diagramHtml = c.interactiveDiagram ? embedInteractiveDiagram(c.interactiveDiagram)
      : (c.visualKey ? embedStaticDiagram(c.visualKey, c.visualCaption)
      : (c.diagramKey ? embedStaticDiagram(c.diagramKey, c.diagramCaption) : ''));
    return intro +
      diagramHtml +
      renderBranchesBlock(c.branches) +
      renderBodyBlock(c.body) +
      renderCausesGrid(c.causes && Array.isArray(c.causes) && c.causes.length && c.causes[0] && c.causes[0].head ? c.causes : null) +
      renderStepsBlock(c.steps) +
      renderRowsTable(c) +
      renderLeftRight(c) +
      renderKeyTerms(c.keyTerms) +
      examEdgeBlock(c.examEdge);
  }

  function renderAdInteractivePdf(c) {
    /* Tip block */
    var tip = '';
    if (c.tip) {
      var tipObj = typeof c.tip === 'object' ? c.tip : { text: c.tip };
      var tipCol = toneColor(tipObj.tone || 'amber');
      tip = '<div style="border-left:4px solid ' + tipCol + ';padding:8px 14px;border-radius:4px;margin-bottom:16px;font-size:12px;color:' + C.ink + ';background:' + tipCol + '18;">' +
        (tipObj.icon ? tipObj.icon + ' ' : '') + s(tipObj.text) + '</div>';
    }

    /* Causes – rendered before or after the diagram depending on causesFirst */
    var causesHtml = c.causes && Array.isArray(c.causes) && c.causes.length && c.causes[0] && c.causes[0].head
      ? (c.causesLabel ? secHead(c.causesEmoji || '🔍', c.causesLabel) : secHead('🔗', 'Key mechanisms')) +
        '<div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:18px;">' +
        c.causes.map(function (item, i) {
          var col = item.tone ? toneColor(item.tone) : TONES[i % TONES.length];
          return '<div style="flex:1;min-width:200px;border-top:4px solid ' + col + ';padding:10px 0 0;">' +
            '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:6px;text-transform:uppercase;letter-spacing:.04em;">' +
            (item.icon ? item.icon + ' ' : '') + s(item.head) + '</div>' +
            '<div style="font-size:12px;line-height:1.65;color:' + C.ink + ';">' + s(item.body) + '</div>' +
            '</div>';
        }).join('') + '</div>'
      : '';

    /* Flow (3-step) */
    var flowHtml = '';
    if (c.flow && c.flow.length) {
      flowHtml = secHead(c.flowEmoji || '💡', c.flowTitle || 'The big idea') +
        '<div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:18px;">' +
        c.flow.map(function (f) {
          var col = toneColor(f.tone || 'blue');
          return '<div style="flex:1;min-width:150px;border-left:4px solid ' + col + ';padding:6px 0 6px 12px;">' +
            '<div style="font-size:18px;margin-bottom:4px;">' + s(f.icon) + '</div>' +
            '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:3px;">' + s(f.title) + '</div>' +
            '<div style="font-size:12px;color:' + C.slate + ';line-height:1.55;">' + s(f.sub) + '</div>' +
            '</div>';
        }).join('') + '</div>';
    }

    /* Second causes block (causes2) */
    var causes2Html = '';
    if (c.causes2 && c.causes2.length) {
      causes2Html = secHead(c.causes2Emoji || '🩺', c.causes2Label || 'Treatment') +
        '<div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:18px;">' +
        c.causes2.map(function (item, i) {
          var col = item.tone ? toneColor(item.tone) : TONES[i % TONES.length];
          return '<div style="flex:1;min-width:160px;border-left:4px solid ' + col + ';padding:6px 0 6px 12px;">' +
            '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:4px;">' +
            (item.icon ? item.icon + ' ' : '') + s(item.head) + '</div>' +
            '<div style="font-size:12px;line-height:1.6;color:' + C.ink + ';">' + s(item.body) + '</div>' +
            '</div>';
        }).join('') + '</div>';
    }

    /* Pair (left + right) */
    var pairHtml = '';
    if (c.left && c.right) {
      pairHtml = secHead(c.pairEmoji || '🛡️', c.pairLabel || 'Policy response') +
        renderLeftRight(c);
    }

    /* Conclusion */
    var conclusionHtml = '';
    if (c.conclusion) {
      var conc = c.conclusion;
      conclusionHtml = calloutBlock({
        color: C.navy,
        label: conc.title || 'Conclusion',
        html: s(conc.text)
      });
    }

    /* measureCards – toolkit tiles with bullet points */
    var measureCardsHtml = '';
    if (c.measureCards && c.measureCards.length) {
      var cols = c.measureCardsCols || Math.min(c.measureCards.length, 4);
      measureCardsHtml = secHead(c.measureCardsEmoji || '🛠️', c.measureCardsLabel || 'The toolkit') +
        '<div style="display:grid;grid-template-columns:repeat(' + cols + ',1fr);gap:14px;margin-bottom:20px;">' +
        c.measureCards.map(function (m) {
          var col = toneColor(m.tone || 'blue');
          var points = (m.points || []).map(function (p) { return '<li style="margin-bottom:4px;">' + s(p) + '</li>'; }).join('');
          return '<div style="border-top:4px solid ' + col + ';padding:10px 0 0;page-break-inside:avoid;">' +
            '<div style="font-size:18px;margin-bottom:4px;">' + s(m.icon) + '</div>' +
            '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:3px;">' + s(m.acronym) + '</div>' +
            (m.fullName ? '<div style="font-size:11px;color:' + C.slate + ';font-style:italic;margin-bottom:6px;line-height:1.4;">' + s(m.fullName) + '</div>' : '') +
            (points ? '<ul style="margin:0;padding-left:16px;font-size:11.5px;line-height:1.6;color:' + C.ink + ';">' + points + '</ul>' : '') +
            '</div>';
        }).join('') + '</div>';
    }

    /* matchTable – cause → goal → response grid */
    var matchTableHtml = '';
    if (c.matchTable && c.matchTable.rows && c.matchTable.rows.length) {
      var mt = c.matchTable;
      var matchHeader = '<div style="display:grid;grid-template-columns:1fr 20px 1fr 20px 1fr;gap:8px;margin-bottom:8px;">' +
        (mt.columns || []).map(function (col, i) {
          return '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:' + C.slate + ';text-align:center;">' + s(col) + '</div>' +
            (i < (mt.columns.length - 1) ? '<div></div>' : '');
        }).join('') + '</div>';
      var matchRows = mt.rows.map(function (row) {
        function cell(o) {
          if (!o) return '<div></div>';
          var col = toneColor(o.tone || 'blue');
          return '<div style="border-left:4px solid ' + col + ';padding:7px 0 7px 10px;page-break-inside:avoid;">' +
            '<div style="font-weight:800;font-size:12px;color:' + col + ';margin-bottom:2px;">' + (o.icon ? o.icon + ' ' : '') + s(o.head) + '</div>' +
            (o.sub ? '<div style="font-size:11px;color:' + C.ink + ';line-height:1.5;">' + s(o.sub) + '</div>' : '') +
            '</div>';
        }
        var arrow = '<div style="display:flex;align-items:center;justify-content:center;color:' + C.muted + ';font-size:14px;font-weight:700;">→</div>';
        return '<div style="display:grid;grid-template-columns:1fr 20px 1fr 20px 1fr;gap:8px;margin-bottom:10px;">' +
          cell(row.cause) + arrow + cell(row.goal) + arrow + cell(row.response) +
          '</div>';
      }).join('');
      matchTableHtml = secHead(mt.emoji || '🔗', mt.title || 'Match the policy to the problem') +
        matchHeader + matchRows + '<div style="margin-bottom:18px;"></div>';
    }

    /* whyItMatters / evaluation criteria */
    var whyHtml = '';
    if (c.whyItMatters && c.whyItMatters.items && c.whyItMatters.items.length) {
      var w = c.whyItMatters;
      whyHtml = secHead(w.emoji || '⚖️', w.title || 'How to evaluate') +
        '<div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:18px;">' +
        w.items.map(function (item) {
          var col = toneColor(item.tone || 'blue');
          return '<div style="flex:1;min-width:170px;border-left:4px solid ' + col + ';padding:6px 0 6px 12px;">' +
            '<div style="font-weight:800;font-size:12px;color:' + col + ';margin-bottom:3px;text-transform:uppercase;letter-spacing:.04em;">' +
            (item.icon ? item.icon + ' ' : '') + s(item.label) + '</div>' +
            '<div style="font-size:12px;color:' + C.ink + ';line-height:1.55;">' + s(item.text) + '</div>' +
            '</div>';
        }).join('') + '</div>';
    }

    /* comparisonTable – labelled rows with N tinted columns */
    var comparisonHtml = '';
    if (c.comparisonTable && c.comparisonTable.rows && c.comparisonTable.rows.length) {
      var ct = c.comparisonTable;
      var ctTones = (ct.columnTones || []).map(toneColor);
      var ctCols = (ct.columns || []).length;
      var ctHeader = '<tr><th style="padding:9px 11px;"></th>' +
        (ct.columns || []).map(function (col, i) {
          var ccol = ctTones[i] || C.blue;
          return '<th style="padding:9px 11px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:' + ccol + ';border-bottom:3px solid ' + ccol + ';text-align:left;">' + s(col) + '</th>';
        }).join('') + '</tr>';
      var ctRows = ct.rows.map(function (r) {
        var labelCell = '<td style="padding:9px 11px;font-size:12px;font-weight:700;color:' + C.ink + ';border-bottom:1px solid ' + C.rule + ';">' + s(r.label) + '</td>';
        var valCells = (r.values || []).map(function (v, i) {
          var ccol = ctTones[i] || C.ink;
          var hi = r.highlights && r.highlights[i];
          return '<td style="padding:9px 11px;font-size:12px;color:' + (hi ? ccol : C.ink) + ';font-weight:' + (hi ? 700 : 500) + ';border-bottom:1px solid ' + C.rule + ';">' + s(v) + '</td>';
        }).join('');
        return '<tr>' + labelCell + valCells + '</tr>';
      }).join('');
      comparisonHtml = secHead(ct.emoji || '📊', ct.title || 'Compare') +
        '<table style="width:100%;border-collapse:collapse;margin-bottom:18px;table-layout:fixed;"><thead>' + ctHeader + '</thead><tbody>' + ctRows + '</tbody></table>';
      ctCols = ctCols; // noop ref
    }

    /* verdict – two-column "vs" panel */
    var verdictHtml = '';
    if (c.verdict && c.verdict.columns && c.verdict.columns.length) {
      var v = c.verdict;
      verdictHtml = secHead(v.emoji || '⚖️', v.title || 'Verdict') +
        '<div style="display:flex;gap:18px;flex-wrap:wrap;margin-bottom:18px;">' +
        v.columns.map(function (vc) {
          var col = toneColor(vc.tone || 'blue');
          var items = (vc.items || []).map(function (it) {
            var marker = (it.ok === false) ? '✗ ' : '✓ ';
            return '<li style="margin-bottom:4px;">' + marker + s(it.text) + '</li>';
          }).join('');
          return '<div style="flex:1;min-width:240px;border-top:4px solid ' + col + ';padding:10px 0 0;">' +
            '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:8px;">' + (vc.icon ? vc.icon + ' ' : '') + s(vc.label) + '</div>' +
            '<ul style="margin:0;padding-left:18px;font-size:12px;line-height:1.7;color:' + C.ink + ';">' + items + '</ul>' +
            '</div>';
        }).join('') + '</div>';
    }

    /* summaryRow – small horizontal example cards */
    var summaryRowHtml = '';
    if (c.summaryRow && c.summaryRow.length) {
      summaryRowHtml = '<div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:18px;">' +
        c.summaryRow.map(function (sr) {
          var col = toneColor(sr.tone || 'blue');
          return '<div style="flex:1;min-width:200px;border-left:4px solid ' + col + ';padding:6px 0 6px 12px;">' +
            '<div style="font-weight:800;font-size:12px;color:' + col + ';margin-bottom:3px;">' + (sr.icon ? sr.icon + ' ' : '') + s(sr.title) + '</div>' +
            '<div style="font-size:12px;color:' + C.ink + ';line-height:1.55;">' + s(sr.text) + '</div>' +
            '</div>';
        }).join('') + '</div>';
    }

    /* letterFormula – M·V = P·T style framework */
    var formulaHtml = '';
    if (c.letterFormula && (c.letterFormula.left || c.letterFormula.right)) {
      var lf = c.letterFormula;
      function lfSide(arr) {
        return (arr || []).map(function (it) {
          var col = toneColor(it.tone || 'blue');
          return '<div style="display:inline-block;text-align:center;padding:6px 10px;margin:0 4px;">' +
            '<div style="font-size:22px;font-weight:900;color:' + col + ';font-family:Georgia,serif;">' + s(it.letter) + '</div>' +
            '<div style="font-size:10px;color:' + C.slate + ';">' + s(it.name) + '</div>' +
            '</div>';
        }).join('<span style="font-size:18px;color:' + C.slate + ';">·</span>');
      }
      formulaHtml = (lf.label ? secHead(lf.emoji || '🧠', lf.label) : '') +
        '<div style="border:2px solid ' + C.navy + ';border-radius:8px;padding:14px 18px;margin-bottom:14px;text-align:center;">' +
        '<div style="display:flex;align-items:center;justify-content:center;gap:14px;">' +
        lfSide(lf.left) +
        '<span style="font-size:22px;font-weight:900;color:' + C.navy + ';">=</span>' +
        lfSide(lf.right) +
        '</div>' +
        (lf.caption ? '<div style="font-size:11.5px;color:' + C.slate + ';margin-top:10px;line-height:1.6;font-style:italic;border-top:1px solid ' + C.rule + ';padding-top:10px;">' + s(lf.caption) + '</div>' : '') +
        '</div>';
    }

    /* versusRows – winner vs loser side-by-side rows */
    var versusHtml = '';
    if (c.versusRows && c.versusRows.rows && c.versusRows.rows.length) {
      var vr = c.versusRows;
      var leftCol  = toneColor(vr.leftTone || 'green');
      var rightCol = toneColor(vr.rightTone || 'rose');
      function vrCell(o, col) {
        if (!o) return '<div></div>';
        return '<div style="border-left:4px solid ' + col + ';padding:6px 0 6px 12px;">' +
          '<div style="font-weight:800;font-size:12px;color:' + col + ';margin-bottom:2px;">' + (o.icon ? o.icon + ' ' : '') + s(o.head) + '</div>' +
          (o.sub ? '<div style="font-size:11.5px;color:' + C.ink + ';line-height:1.5;">' + s(o.sub) + '</div>' : '') +
          '</div>';
      }
      var vrRows = vr.rows.map(function (row) {
        return '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:10px;page-break-inside:avoid;">' +
          vrCell(row.left, leftCol) + vrCell(row.right, rightCol) +
          '</div>';
      }).join('');
      versusHtml = secHead(vr.emoji || '👥', vr.title || 'Who benefits? Who loses?') + vrRows + '<div style="margin-bottom:8px;"></div>';
    }

    var diagramHtml = embedInteractiveDiagram(c.interactiveDiagram);
    var firstCauses = c.causesFirst ? causesHtml : '';
    var laterCauses  = c.causesFirst ? '' : causesHtml;

    return tip +
      firstCauses +
      diagramHtml +
      laterCauses +
      formulaHtml +
      flowHtml +
      comparisonHtml +
      causes2Html +
      versusHtml +
      verdictHtml +
      summaryRowHtml +
      measureCardsHtml +
      matchTableHtml +
      whyHtml +
      pairHtml +
      conclusionHtml +
      examEdgeBlock(c.examEdge);
  }

  function isGenericCard(c) {
    if (c.template === 'ad-interactive' || c.template === 'transmission-chain' || c.template === 'ped-five-frames' || c.template === 'worked-example' || c.template === 'pes-explorer' || c.template === 'yed-explorer' || c.template === 'xed-explorer' || c.template === 'market-structures-comparison' || c.template === 'essay-scaffold') return false;
    return !!(
      c.body !== undefined ||
      c.steps !== undefined ||
      c.rows !== undefined ||
      (c.left !== undefined && c.right !== undefined) ||
      (c.causes && Array.isArray(c.causes) && c.causes.length > 0 &&
       typeof c.causes[0] === 'object' && 'head' in c.causes[0])
    );
  }

  function renderCardBody(c) {
    if (isGenericCard(c)) return renderGeneric(c);
    switch (c.template) {
      case 'framing':            return renderFraming(c);
      case 'cause':              return renderCause(c);
      case 'diagnose':           return renderDiagnose(c);
      case 'demand-side-policies-monetary':           return renderMonetary(c);
      case 'impacts':            return renderImpacts(c);
      case 'deflation':          return renderDeflation(c);
      case 'mechanisms':         return renderMechanisms(c);
      case 'paired':             return renderPaired(c);
      case 'ad-interactive':     return renderAdInteractivePdf(c);
      case 'transmission-chain': return renderFallback();
      case 'elasticity-explorer':return renderElasticityFallback(c);
      case 'worked-example':     return renderWorkedExample(c);
      case 'pes-explorer':       return renderPesExplorerFallback(c);
      case 'yed-explorer':       return renderYedXedFallback(c, 'YED');
      case 'xed-explorer':       return renderYedXedFallback(c, 'XED');
      case 'ped-five-frames':            return renderPedFiveFrames(c);
      case 'market-structures-comparison': return renderMarketStructuresComparison(c);
      case 'essay-scaffold':               return renderEssayScaffold(c);
      default:                           return renderFallback();
    }
  }

  /* ---- Full document builder ---- */

  function buildHtml(topic) {
    var dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    var sections = (topic.cards || []).map(function (c, idx) {
      var accent = cardAccent(c);
      var num    = String(idx + 1).padStart(2, '0');

      var header = '<div style="border-top:8px solid ' + accent + ';padding:18px 0 4px;">' +
        '<div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.14em;color:' + C.muted + ';margin-bottom:6px;">' + s(c.stepLabel) + '</div>' +
        '<div style="display:flex;align-items:baseline;gap:12px;margin-bottom:8px;">' +
        '<div style="font-size:30px;font-weight:900;color:' + accent + ';line-height:1;font-family:Georgia,serif;">' + num + '</div>' +
        '<div style="font-size:19px;font-weight:900;color:' + C.navy + ';line-height:1.2;">' + s(c.title) + '</div>' +
        '</div>' +
        '</div>';

      var lede = c.lede ? '<div style="border-left:4px solid ' + accent + ';padding:2px 0 2px 14px;margin:8px 0 18px;font-size:13.5px;line-height:1.6;color:' + C.slate + ';font-style:italic;">' + s(c.lede) + '</div>' : '';

      var body = '<div style="margin-bottom:18px;">' + renderCardBody(c) + '</div>';

      return '<div style="margin-bottom:32px;">' + header + lede + body + '</div>';
    }).join('');

    /* Cover block – soft grey panel */
    var cover = '<div style="background:#F1F5F9;border-radius:10px;padding:28px 32px;margin-bottom:36px;">' +
      '<div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.16em;color:' + C.slate + ';margin-bottom:10px;">' + s(topic.theme) + '</div>' +
      '<div style="font-size:36px;font-weight:900;line-height:1.05;color:' + C.navy + ';margin-bottom:14px;font-family:Georgia,serif;">' + s(topic.title) + '</div>' +
      '<div style="font-size:14px;color:' + C.slate + ';margin-bottom:14px;line-height:1.5;">' + s(topic.goal) + '</div>' +
      '<div style="display:flex;gap:14px;align-items:center;font-size:11px;color:' + C.muted + ';letter-spacing:.04em;">' +
      '<div style="font-weight:800;color:' + C.navy + ';">ECONOS</div>' +
      '<div>·</div>' +
      '<div>A-Level Economics Revision</div>' +
      '<div>·</div>' +
      '<div>' + dateStr + '</div>' +
      '</div>' +
      '</div>';

    var css = [
      '* { box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }',
      'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; background: #FFFFFF; color: #1E293B; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }',
      '.wrap { max-width: 820px; margin: 0 auto; padding: 36px 28px 48px; }',
      '.tip { font-size: 12px; color: #475569; background: #FEF3C7; border-left: 4px solid #D97706; padding: 10px 14px; border-radius: 4px; margin-bottom: 22px; }',
      '@media print {',
      '  .wrap { padding: 0; max-width: 100%; }',
      '  .no-print { display: none !important; }',
      '}',
      '@page { margin: 1.2cm 1cm; }'
    ].join('\n');

    return '<!DOCTYPE html>\n<html lang="en">\n<head>\n' +
      '<meta charset="UTF-8">\n' +
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
      '<title>' + s(topic.title) + ' – Econos</title>\n' +
      '<style>\n' + css + '\n</style>\n' +
      '</head>\n<body>\n<div class="wrap">\n' +

      cover +

      '<div class="no-print tip">' +
      '<strong>💡 Tip:</strong> for full-colour output when saving as PDF, tick <em>"More settings → Background graphics"</em> in the print dialog (Chrome / Edge).' +
      '</div>\n' +

      '<div class="no-print" style="text-align:right;margin-bottom:28px;">' +
      '<button onclick="window.print()" style="background:' + C.navy + ';color:white;border:none;border-radius:8px;padding:10px 22px;font-size:13px;font-weight:700;cursor:pointer;letter-spacing:.02em;">🖨️&nbsp; Print / Save as PDF</button>' +
      '</div>\n' +

      sections +
      '<script>\n' +
      '(function () {\n' +
      '  var hasPrinted = false;\n' +
      '  window.addEventListener("afterprint", function () {\n' +
      '    if (hasPrinted) return;\n' +
      '    hasPrinted = true;\n' +
      '    if (window.opener && !window.opener.closed) { try { window.opener.focus(); } catch (_) {} }\n' +
      '    setTimeout(function () { window.close(); }, 200);\n' +
      '  });\n' +
      '}());\n' +
      '</script>\n' +
      '</div>\n</body>\n</html>';
  }

  function generate(topic) {
    var html = buildHtml(topic);
    var win = window.open('', '_blank');
    if (!win) {
      alert('Please allow pop-ups for this site to generate your PDF summary.');
      return;
    }
    win.document.open();
    win.document.write(html);
    win.document.close();
    setTimeout(function () {
      win.focus();
      win.print();
    }, 900);
  }

  return { generate: generate };

})();
