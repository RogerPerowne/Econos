/* ============================================================
   ECONOS — PDF / print deck generator
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

  /* Dominant accent colour for each card */
  function cardAccent(c) {
    if (c.tone) return toneColor(c.tone);
    switch (c.template) {
      case 'framing':   return C.navy;
      case 'cause':     return c.diagram === 'demand-pull' ? C.green : C.amber;
      case 'diagnose':  return C.purple;
      case 'monetary':  return C.blue;
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
    return calloutBlock({ color: C.blue, label: e.title, html: e.text, icon: '⚡' });
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
      'Interactive diagram — see the full version in the Econos app.' +
      '</div>';
  }

  function renderCardBody(c) {
    switch (c.template) {
      case 'framing':            return renderFraming(c);
      case 'cause':              return renderCause(c);
      case 'diagnose':           return renderDiagnose(c);
      case 'monetary':           return renderMonetary(c);
      case 'impacts':            return renderImpacts(c);
      case 'deflation':          return renderDeflation(c);
      case 'mechanisms':         return renderMechanisms(c);
      case 'paired':             return renderPaired(c);
      case 'ad-interactive':     return renderFallback();
      case 'transmission-chain': return renderFallback();
      default:                   return renderFallback();
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

    /* Cover block — heavy borders, no fills */
    var cover = '<div style="border-top:14px solid ' + C.navy + ';border-bottom:2px solid ' + C.rule + ';padding:24px 0 22px;margin-bottom:36px;">' +
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
      '<title>' + s(topic.title) + ' — Econos</title>\n' +
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

      '<div style="text-align:center;padding:24px 0 4px;font-size:11px;color:' + C.muted + ';border-top:1px solid ' + C.rule + ';margin-top:8px;letter-spacing:.06em;">' +
      'ECONOS · A-Level Economics Revision' +
      '</div>\n' +
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
    setTimeout(function () { win.focus(); win.print(); }, 900);
  }

  return { generate: generate };

})();
