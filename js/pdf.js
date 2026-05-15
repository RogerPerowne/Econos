/* ============================================================
   ECONOS — PDF / print deck generator
   Renders all topic cards as a single flowing printable document
   in a new window, then triggers print dialog (→ Save as PDF)
   ============================================================ */

window.EconosPdf = (function () {

  var C = {
    navy:     '#0B1426',
    navyMid:  '#162035',
    ink:      '#1E293B',
    slate:    '#475569',
    muted:    '#94A3B8',
    rule:     '#E2E8F0',
    white:    '#FFFFFF',
    green:    '#059669',
    amber:    '#D97706',
    blue:     '#2563EB',
    rose:     '#DC2626',
    purple:   '#7C3AED',
    sky:      '#0EA5E9',
    greenBg:  '#ECFDF5',
    amberBg:  '#FFFBEB',
    blueBg:   '#EFF6FF',
    roseBg:   '#FEF2F2',
    purpleBg: '#F5F3FF',
    skyBg:    '#F0F9FF',
    greenMid: '#D1FAE5',
    amberMid: '#FDE68A',
    blueMid:  '#BFDBFE',
    roseMid:  '#FECACA',
    purpleMid:'#DDD6FE'
  };

  function toneColor(tone) { return C[tone] || C.blue; }
  function toneBg(tone)    { return C[tone + 'Bg'] || C.blueBg; }
  function s(v)            { return v || ''; }

  /* Derive the dominant accent colour for a card header */
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

  /* Lighter tint for the lede band beneath the header */
  function cardTint(c) {
    switch (c.template) {
      case 'framing':   return '#EFF6FF';
      case 'cause':     return c.diagram === 'demand-pull' ? C.greenBg : C.amberBg;
      case 'diagnose':  return C.purpleBg;
      case 'monetary':  return C.blueBg;
      case 'impacts':   return C.roseBg;
      case 'deflation': return '#F1F5F9';
      default:          return '#F8FAFC';
    }
  }

  /* ---- Shared blocks ---- */

  function examEdgeBlock(e) {
    if (!e) return '';
    return '<div style="background:' + C.blueBg + ';border-left:4px solid ' + C.blue + ';border-radius:6px;padding:12px 14px;margin:16px 0;">' +
      '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:' + C.blue + ';margin-bottom:6px;">⚡ ' + s(e.title) + '</div>' +
      '<div style="font-size:12px;line-height:1.65;color:' + C.ink + ';">' + s(e.text) + '</div>' +
      '</div>';
  }

  function keyTakeawayBlock(k) {
    if (!k) return '';
    return '<div style="background:' + C.greenBg + ';border-left:4px solid ' + C.green + ';border-radius:6px;padding:12px 14px;margin:16px 0;">' +
      '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:' + C.green + ';margin-bottom:6px;">🔑 ' + s(k.title) + '</div>' +
      '<div style="font-size:12px;line-height:1.65;color:' + C.ink + ';">' + s(k.text) + '</div>' +
      '</div>';
  }

  function secHead(emoji, text) {
    return '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:' + C.slate + ';margin:18px 0 8px;display:flex;align-items:center;gap:6px;">' +
      (emoji ? '<span>' + emoji + '</span>' : '') + '<span>' + s(text) + '</span></div>';
  }

  /* ---- Template body renderers ---- */

  function renderFraming(c) {
    var branches = (c.branches || []).map(function (b) {
      return '<div style="flex:1;min-width:160px;border-left:4px solid ' + toneColor(b.tone) + ';background:' + toneBg(b.tone) + ';border-radius:6px;padding:12px 14px;">' +
        '<div style="font-weight:800;font-size:13px;color:' + toneColor(b.tone) + ';margin-bottom:5px;">' + s(b.label) + '</div>' +
        '<div style="font-size:12px;line-height:1.6;color:' + C.ink + ';">' + s(b.sub) + '</div>' +
        '</div>';
    }).join('');
    return '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;">' + branches + '</div>' +
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
    var bg  = toneBg(tone);

    var banner = '<div style="background:' + bg + ';border-left:4px solid ' + col + ';border-radius:6px;padding:8px 12px;margin-bottom:14px;display:flex;align-items:center;gap:8px;">' +
      '<div style="width:9px;height:9px;border-radius:50%;background:' + col + ';flex-shrink:0;"></div>' +
      '<div style="font-weight:700;font-size:13px;color:' + col + ';">' + bannerLabel + '</div>' +
      (c.diagramCaption ? '<div style="font-size:12px;color:' + C.slate + ';">' + s(c.diagramCaption) + '</div>' : '') +
      '</div>';

    var causesHtml = c.causes ? '<div style="flex:1;background:#F8FAFC;border-radius:6px;padding:12px;">' +
      '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:' + C.slate + ';margin-bottom:8px;">' + s(c.causes.title) + '</div>' +
      '<ul style="margin:0;padding-left:16px;font-size:12px;line-height:1.8;color:' + C.ink + ';">' +
      (c.causes.items || []).map(function (i) { return '<li>' + s(i) + '</li>'; }).join('') +
      '</ul></div>' : '';

    var hallmarksHtml = c.hallmarks ? '<div style="flex:1;background:' + bg + ';border-radius:6px;padding:12px;">' +
      '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:' + col + ';margin-bottom:8px;">' + s(c.hallmarks.title) + '</div>' +
      '<ul style="margin:0;padding-left:16px;font-size:12px;line-height:1.8;color:' + C.ink + ';">' +
      (c.hallmarks.items || []).map(function (i) { return '<li>' + s(i) + '</li>'; }).join('') +
      '</ul></div>' : '';

    var ukExHtml = c.ukExamples ? '<div style="background:#F1F5F9;border-radius:6px;padding:10px 12px;margin:12px 0;font-size:12px;line-height:1.5;color:' + C.ink + ';">' +
      '<span style="font-weight:700;color:' + C.slate + ';">🇬🇧 ' + s(c.ukExamples.title) + ':</span> ' + s(c.ukExamples.text) + '</div>' : '';

    var policyHtml = c.policy ? '<div style="background:#F8FAFC;border-left:4px solid ' + col + ';border-radius:6px;padding:10px 12px;margin:12px 0;">' +
      '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:' + col + ';margin-bottom:6px;">🎯 ' + s(c.policy.title) + '</div>' +
      '<div style="font-size:12px;line-height:1.5;color:' + C.ink + ';">' + s(c.policy.text) + '</div>' +
      '</div>' : '';

    var dilemmaHtml = c.dilemma ? '<div style="background:' + C.amberBg + ';border-left:4px solid ' + C.amber + ';border-radius:6px;padding:10px 12px;margin:12px 0;">' +
      '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:' + C.amber + ';margin-bottom:6px;">⚠️ ' + s(c.dilemma.title) + '</div>' +
      '<ul style="margin:0;padding-left:16px;font-size:12px;line-height:1.8;color:' + C.ink + ';">' +
      (c.dilemma.lines || []).map(function (l) { return '<li>' + s(l) + '</li>'; }).join('') +
      '</ul></div>' : '';

    return banner +
      '<div style="display:flex;gap:10px;margin-bottom:12px;">' + causesHtml + hallmarksHtml + '</div>' +
      ukExHtml + policyHtml + dilemmaHtml +
      examEdgeBlock(c.examEdge);
  }

  function renderDiagnose(c) {
    var thead = (c.table.headers || []).map(function (h, i) {
      var bg = i === 0 ? C.navy : (i === 1 ? C.green : C.amber);
      return '<th style="padding:9px 11px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;' +
        'color:' + C.white + ';background:' + bg + ';text-align:left;border:1px solid rgba(0,0,0,.08);">' + s(h) + '</th>';
    }).join('');

    var rows = (c.table.rows || []).map(function (row, ri) {
      return '<tr>' + row.map(function (cell, ci) {
        var cellBg = ci === 0 ? (ri % 2 === 0 ? '#F8FAFC' : '#F1F5F9') :
                     ci === 1 ? (ri % 2 === 0 ? C.greenBg : C.greenMid) :
                                (ri % 2 === 0 ? C.amberBg : C.amberMid);
        return '<td style="padding:8px 11px;font-size:12px;color:' + C.ink + ';background:' + cellBg + ';border:1px solid rgba(0,0,0,.06);">' + s(cell) + '</td>';
      }).join('') + '</tr>';
    }).join('');

    var table = '<table style="width:100%;border-collapse:collapse;margin-bottom:18px;">' +
      '<thead><tr>' + thead + '</tr></thead>' +
      '<tbody>' + rows + '</tbody></table>';

    var scenarios = (c.scenarios && c.scenarios.items || []).map(function (sc) {
      var col = sc.tone === 'green' ? C.green : sc.tone === 'amber' ? C.amber : C.purple;
      var bg  = sc.tone === 'green' ? C.greenBg : sc.tone === 'amber' ? C.amberBg : C.purpleBg;
      return '<div style="border-left:4px solid ' + col + ';background:' + bg + ';border-radius:6px;padding:10px 12px;margin-bottom:8px;">' +
        '<div style="font-size:11px;font-weight:700;color:' + col + ';margin-bottom:4px;">Scenario ' + s(sc.label) + ' → ' + s(sc.answer) + '</div>' +
        '<div style="font-size:12px;line-height:1.5;color:' + C.ink + ';">' + s(sc.text) + '</div>' +
        '</div>';
    }).join('');

    return table +
      (c.scenarios ? secHead('🔍', c.scenarios.title || 'Scenarios') + scenarios : '') +
      examEdgeBlock(c.examEdge);
  }

  function renderMonetary(c) {
    var classical = c.classical ? '<div style="background:' + C.navy + ';border-radius:8px;padding:16px 18px;margin-bottom:16px;color:white;">' +
      '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:' + C.muted + ';margin-bottom:10px;">' + s(c.classical.title) + '</div>' +
      '<div style="text-align:center;margin:12px 0;">' +
      '<div style="font-size:26px;font-weight:900;color:white;font-family:Georgia,serif;letter-spacing:.06em;">' + s(c.classical.formula) + '</div>' +
      '<div style="font-size:11px;color:' + C.muted + ';margin-top:4px;">' + s(c.classical.formulaSub) + '</div>' +
      '</div>' +
      '<div style="font-size:12px;font-style:italic;color:' + C.muted + ';text-align:center;border-top:1px solid rgba(255,255,255,.12);padding-top:10px;margin-top:4px;">' + s(c.classical.quote) + '</div>' +
      '<div style="font-size:12px;line-height:1.5;color:#CBD5E1;margin-top:10px;border-top:1px solid rgba(255,255,255,.12);padding-top:10px;">' + s(c.classical.examples) + '</div>' +
      '</div>' : '';

    var puzzleBullets = (c.puzzle && c.puzzle.bullets || []).map(function (b) {
      return '<li style="margin-bottom:4px;">' + s(b) + '</li>';
    }).join('');
    var puzzle = puzzleBullets ? '<div style="background:' + C.blueBg + ';border-radius:6px;padding:12px 14px;margin-bottom:14px;">' +
      '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:' + C.blue + ';margin-bottom:8px;">❓ The QE puzzle</div>' +
      '<ul style="margin:0;padding-left:16px;font-size:12px;line-height:1.8;color:' + C.ink + ';">' + puzzleBullets + '</ul>' +
      '</div>' : '';

    var mechanisms = (c.mechanisms || []).map(function (m) {
      var col = toneColor(m.tone);
      var bg  = toneBg(m.tone);
      return '<div style="border-left:4px solid ' + col + ';background:' + bg + ';border-radius:6px;padding:10px 12px;margin-bottom:8px;">' +
        '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">' +
        '<div style="width:22px;height:22px;border-radius:50%;background:' + col + ';color:white;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + s(m.num) + '</div>' +
        '<div style="font-weight:700;font-size:13px;color:' + col + ';">' + s(m.title) + '</div>' +
        '</div>' +
        '<div style="font-size:12px;line-height:1.5;color:' + C.ink + ';">' + s(m.text) + '</div>' +
        '</div>';
    }).join('');

    return classical + puzzle +
      (mechanisms ? secHead('💡', "Why QE didn't cause inflation") + mechanisms : '') +
      examEdgeBlock(c.examEdge);
  }

  function renderImpacts(c) {
    var groups = (c.groups || []).map(function (g) {
      var col = toneColor(g.tone);
      var bg  = toneBg(g.tone);
      return '<div style="flex:1;min-width:160px;border-radius:8px;background:' + bg + ';border-top:4px solid ' + col + ';padding:14px;">' +
        '<div style="font-size:14px;font-weight:800;color:' + col + ';margin-bottom:8px;">' + s(g.icon) + ' ' + s(g.label) + '</div>' +
        '<ul style="margin:0;padding-left:14px;font-size:11.5px;line-height:1.75;color:' + C.ink + ';">' +
        (g.bullets || []).map(function (b) { return '<li>' + s(b) + '</li>'; }).join('') +
        '</ul></div>';
    }).join('');

    var wl = c.winnersLosers;
    var winnersLosers = wl ? '<div style="display:flex;gap:10px;margin:14px 0;">' +
      '<div style="flex:1;background:' + C.greenBg + ';border-radius:6px;padding:12px;">' +
      '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:' + C.green + ';margin-bottom:6px;">✅ ' + s(wl.winners && wl.winners.label) + '</div>' +
      '<ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.75;color:' + C.ink + ';">' +
      (wl.winners && wl.winners.items || []).map(function (i) { return '<li>' + s(i) + '</li>'; }).join('') +
      '</ul></div>' +
      '<div style="flex:2;background:' + C.roseBg + ';border-radius:6px;padding:12px;">' +
      '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:' + C.rose + ';margin-bottom:6px;">❌ ' + s(wl.losers && wl.losers.label) + '</div>' +
      '<ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.75;color:' + C.ink + ';">' +
      (wl.losers && wl.losers.items || []).map(function (i) { return '<li>' + s(i) + '</li>'; }).join('') +
      '</ul></div>' +
      '</div>' : '';

    var example = c.example ? '<div style="background:#F1F5F9;border-left:4px solid ' + C.rose + ';border-radius:6px;padding:10px 12px;margin:12px 0;font-size:12px;line-height:1.5;color:' + C.ink + ';">' +
      '<span style="font-weight:700;color:' + C.rose + ';">📍 Real-world example:</span> ' + s(c.example) + '</div>' : '';

    return '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px;">' + groups + '</div>' +
      winnersLosers + example + examEdgeBlock(c.examEdge);
  }

  function renderDeflation(c) {
    var col = '#334155';
    var mechanisms = (c.mechanisms || []).map(function (m) {
      return '<div style="background:#F8FAFC;border-radius:8px;padding:12px 14px;border-top:3px solid ' + col + ';">' +
        '<div style="font-size:22px;margin-bottom:6px;">' + s(m.icon) + '</div>' +
        '<div style="font-weight:700;font-size:13px;color:' + C.navy + ';margin-bottom:4px;">' + s(m.title) + '</div>' +
        '<div style="font-size:12px;line-height:1.5;color:' + C.ink + ';">' + s(m.text) + '</div>' +
        '</div>';
    }).join('');

    var examples = c.examples ? (c.examples.items || []).map(function (e) {
      return '<div style="border-left:4px solid #CBD5E1;padding:6px 10px;margin-bottom:8px;background:#F8FAFC;border-radius:0 6px 6px 0;">' +
        '<div style="font-size:11px;font-weight:700;color:' + C.slate + ';">' + s(e.period) + '</div>' +
        '<div style="font-size:12px;color:' + C.ink + ';margin-top:2px;">' + s(e.text) + '</div>' +
        '</div>';
    }).join('') : '';

    return secHead('⚠️', c.mechanismsTitle || 'Why deflation is dangerous') +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:18px;">' + mechanisms + '</div>' +
      (examples ? secHead('📚', c.examples && c.examples.title || 'Examples') + examples : '') +
      examEdgeBlock(c.examEdge);
  }

  function renderMechanisms(c) {
    var items = (c.mechanisms || c.items || []).map(function (m) {
      var col = toneColor(m.tone || 'blue');
      var bg  = toneBg(m.tone || 'blue');
      return '<div style="border-left:4px solid ' + col + ';background:' + bg + ';border-radius:6px;padding:10px 12px;margin-bottom:8px;">' +
        (m.num ? '<div style="font-size:10px;font-weight:700;color:' + col + ';margin-bottom:4px;">Step ' + m.num + '</div>' : '') +
        '<div style="font-weight:700;font-size:13px;color:' + col + ';margin-bottom:4px;">' + s(m.title || m.head) + '</div>' +
        '<div style="font-size:12px;line-height:1.5;color:' + C.ink + ';">' + s(m.text || m.body) + '</div>' +
        '</div>';
    }).join('');
    return items + examEdgeBlock(c.examEdge);
  }

  function renderPaired(c) {
    var sides = (c.sides || c.components || []).map(function (side) {
      var col = toneColor(side.tone || 'blue');
      var bg  = toneBg(side.tone || 'blue');
      var bullets = (side.bullets || side.items || []).map(function (b) {
        return '<li>' + s(b) + '</li>';
      }).join('');
      return '<div style="flex:1;border-top:4px solid ' + col + ';border-radius:6px;background:' + bg + ';padding:12px 14px;">' +
        '<div style="font-weight:800;font-size:13px;color:' + col + ';margin-bottom:8px;">' + s(side.title || side.label) + '</div>' +
        (bullets ? '<ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.8;color:' + C.ink + ';">' + bullets + '</ul>' : '') +
        (side.text ? '<div style="font-size:12px;line-height:1.5;color:' + C.ink + ';margin-top:8px;">' + s(side.text) + '</div>' : '') +
        '</div>';
    }).join('');
    return '<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:14px;">' + sides + '</div>' +
      examEdgeBlock(c.examEdge);
  }

  function renderFallback() {
    return '<div style="font-size:12px;color:' + C.slate + ';font-style:italic;padding:12px;background:#F8FAFC;border-left:4px solid ' + C.rule + ';border-radius:6px;">' +
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
      var tint   = cardTint(c);
      var num    = String(idx + 1).padStart(2, '0');

      /* Coloured header band */
      var header = '<div style="background:' + accent + ';padding:18px 28px 16px;">' +
        '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.55);margin-bottom:4px;">' + s(c.stepLabel) + '</div>' +
        '<div style="font-size:18px;font-weight:900;color:white;line-height:1.2;">' + num + '. ' + s(c.title) + '</div>' +
        '</div>';

      /* Lede band (tinted) */
      var lede = c.lede ? '<div style="background:' + tint + ';padding:12px 28px;font-size:13px;line-height:1.65;color:' + C.slate + ';font-style:italic;border-bottom:1px solid ' + C.rule + ';">' + s(c.lede) + '</div>' : '';

      /* Body on white */
      var body = '<div style="padding:20px 28px 24px;background:white;">' + renderCardBody(c) + '</div>';

      return '<div style="border-radius:10px;overflow:hidden;margin-bottom:28px;box-shadow:0 1px 4px rgba(0,0,0,.08);">' +
        header + lede + body +
        '</div>';
    }).join('');

    var css = [
      '* { box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }',
      'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; background: #EEF2F7; color: #1E293B; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }',
      '.wrap { max-width: 820px; margin: 0 auto; padding: 36px 24px 48px; }',
      '@media print {',
      '  body { background: #EEF2F7; }',
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

      /* Cover */
      '<div style="background:' + C.navy + ';border-radius:12px;padding:32px 36px;margin-bottom:32px;color:white;">' +
      '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:' + C.muted + ';margin-bottom:8px;">' + s(topic.theme) + '</div>' +
      '<div style="font-size:30px;font-weight:900;line-height:1.1;margin-bottom:10px;">' + s(topic.title) + '</div>' +
      '<div style="font-size:13px;color:#94A3B8;margin-bottom:18px;">' + s(topic.goal) + '</div>' +
      '<div style="font-size:11px;color:#64748B;border-top:1px solid rgba(255,255,255,.1);padding-top:12px;">' +
      'Generated from Econos · ' + dateStr + '</div>' +
      '</div>\n' +

      /* Print button */
      '<div class="no-print" style="text-align:right;margin-bottom:24px;">' +
      '<button onclick="window.print()" style="background:' + C.navy + ';color:white;border:none;border-radius:8px;padding:10px 22px;font-size:13px;font-weight:700;cursor:pointer;letter-spacing:.02em;">🖨️&nbsp; Print / Save as PDF</button>' +
      '</div>\n' +

      sections +

      /* Footer */
      '<div style="text-align:center;padding:20px 0 4px;font-size:11px;color:' + C.muted + ';border-top:1px solid ' + C.rule + ';margin-top:4px;">' +
      'Econos · A-Level Economics Revision' +
      '</div>\n' +
      '</div>\n</body>\n</html>';
  }

  /* ---- Public API ---- */

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
