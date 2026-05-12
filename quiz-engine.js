/* ============================================================
   ECONOS — Quiz Engine
   Ported from the Wycombe Abbey multi-format quiz engine.
   12 question types, namespaced under .quiz-*, econos palette.

   Expects #quiz-root to exist. Boot with:
     bootQuiz(QUIZ_QUESTIONS, QUIZ_TOPIC);
   ============================================================ */

(function () {

  var TYPE_META = {
    elastic_sort:    { label: 'Visual sort',         tone: 'amber'  },
    calculation:     { label: 'Calculation',         tone: 'purple' },
    diagnostic_pair: { label: 'Compare answers',     tone: 'green'  },
    mcq:             { label: 'Multiple choice',     tone: 'blue'   },
    confidence_mcq:  { label: 'Rate your confidence',tone: 'amber'  },
    odd_one_out:     { label: 'Odd one out',         tone: 'amber'  },
    multi_select:    { label: 'Select all that apply', tone: 'green' },
    rank:            { label: 'Rank in order',       tone: 'blue'   },
    para_fill:       { label: 'Complete the analysis', tone: 'blue' },
    data_table:      { label: 'Data interpretation', tone: 'amber'  },
    diagram_interp:  { label: 'Read the diagram',    tone: 'blue'   },
    chain:           { label: 'Sequence the chain',  tone: 'blue'   }
  };

  var TONE_COLOURS = {
    blue:   { fg: 'var(--econ-blue-700)',   bd: 'var(--econ-blue-100)',   bg: 'var(--econ-blue-50)' },
    green:  { fg: 'var(--econ-green-700)',  bd: 'var(--econ-green-100)',  bg: 'var(--econ-green-50)' },
    amber:  { fg: 'var(--econ-amber-700)',  bd: 'var(--econ-amber-100)',  bg: 'var(--econ-amber-50)' },
    purple: { fg: 'var(--econ-purple-700)', bd: 'var(--econ-purple-100)', bg: 'var(--econ-purple-50)' },
    rose:   { fg: 'var(--econ-rose-700)',   bd: 'var(--econ-rose-100)',   bg: 'var(--econ-rose-50)' }
  };

  var Qs = [];
  var TOPIC = { title: 'Quiz', subtitle: '', backUrl: 'index.html', backLabel: 'Back to topic' };
  var S = { qi: 0, score: 0, results: [], answered: false,
            rankOrder: [], pfSel: {}, msChecked: [], esChosen: {},
            confChosen: -1, confPhase: 'pick' };

  /* ── Shuffling ── */
  var SHUFFLE_CONFIG = {
    mcq: true, confidence_mcq: true, calculation: true,
    data_table: true, diagram_interp: true, multi_select: true,
    odd_one_out: true, diagnostic_pair: true, elastic_sort: true,
    para_fill: true, rank: false, chain: false
  };

  function shuffleArr(arr) {
    var a = arr.slice();
    var perm = []; for (var i = 0; i < a.length; i++) perm.push(i);
    for (var j = a.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1));
      var tmp = a[j]; a[j] = a[k]; a[k] = tmp;
      var tp = perm[j]; perm[j] = perm[k]; perm[k] = tp;
    }
    return { arr: a, perm: perm };
  }

  function shuffleQuestion(q) {
    if (!SHUFFLE_CONFIG[q.type]) return q;
    var nq = {}; for (var k in q) nq[k] = q[k];
    if (q.type === 'mcq' || q.type === 'confidence_mcq' || q.type === 'calculation' ||
        q.type === 'data_table' || q.type === 'diagram_interp') {
      var s = shuffleArr(q.opts);
      nq.opts = s.arr; nq.ans = s.perm.indexOf(q.ans);
    } else if (q.type === 'multi_select') {
      var ms = shuffleArr(q.opts);
      nq.opts = ms.arr;
      nq.correct = q.correct.map(function (o) { return ms.perm.indexOf(o); })
                            .sort(function (a, b) { return a - b; });
    } else if (q.type === 'odd_one_out') {
      var oo = shuffleArr(q.items);
      nq.items = oo.arr; nq.ans = oo.perm.indexOf(q.ans);
    } else if (q.type === 'diagnostic_pair') {
      var dp = shuffleArr(q.students);
      nq.students = dp.arr; nq.ans = dp.perm.indexOf(q.ans);
    } else if (q.type === 'elastic_sort') {
      var es = shuffleArr(q.goods);
      nq.goods = es.arr;
    } else if (q.type === 'para_fill') {
      nq.blanks = q.blanks.map(function (b) {
        var bs = shuffleArr(b.opts);
        var nb = {}; for (var kk in b) nb[kk] = b[kk];
        nb.opts = bs.arr; nb.ans = bs.perm.indexOf(b.ans);
        return nb;
      });
    }
    return nq;
  }

  /* ── Boot ── */
  window.bootQuiz = function (questions, topicConfig) {
    Qs = questions.map(shuffleQuestion).map(function (q, i) { q.n = i + 1; return q; });
    TOPIC = Object.assign({}, TOPIC, topicConfig || {});
    if (TOPIC.title) document.title = TOPIC.title + ' · econos';
    S.startedAt = Date.now();
    renderQ(0);
  };

  function formatDuration(ms) {
    var s = Math.max(0, Math.round(ms / 1000));
    var m = Math.floor(s / 60);
    var rs = s % 60;
    return m + 'm ' + (rs < 10 ? '0' : '') + rs + 's';
  }
  function formatAvg(ms, n) {
    if (!n) return '—';
    return Math.round(ms / n / 1000) + 's';
  }

  /* ── Core utilities ── */
  function r(html) {
    document.getElementById('quiz-root').innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function typeBadge(type) {
    var m = TYPE_META[type] || { label: type, tone: 'blue' };
    var c = TONE_COLOURS[m.tone];
    return '<span class="quiz-type-badge" style="color:' + c.fg + ';border-color:' + c.bd + ';background:' + c.bg + '">' + m.label + '</span>';
  }

  function qHeader(q) {
    var prog = ((q.n - 1) / Qs.length * 100).toFixed(0);
    return '<div class="quiz-top">' + typeBadge(q.type) +
      '<div class="quiz-score"><div class="quiz-score__label">Score</div><div class="quiz-score__value">' + S.score + ' / ' + (q.n - 1) + '</div></div></div>' +
      '<div class="quiz-progress"><div class="quiz-progress__fill" style="width:' + prog + '%"></div></div>' +
      '<div class="quiz-qnum">Question ' + q.n + ' of ' + Qs.length + '</div>';
  }

  function feedbackHTML(ok, exp) {
    return '<div class="quiz-fb ' + (ok ? 'quiz-fb--ok show' : 'quiz-fb--bad show') + '" id="fb">' +
      '<div class="quiz-fb__head">' + (ok ? '✓ Correct — well done' : '✗ Not quite — here\'s the analysis') + '</div>' +
      '<div class="quiz-fb__body">' + exp + '</div></div>';
  }

  function nextBtnHTML(qi) {
    return '<div class="quiz-next-row show" id="nr">' +
      (qi < Qs.length - 1
        ? '<button class="quiz-btn quiz-btn--primary" onclick="advance()">Next question →</button>'
        : '<button class="quiz-btn quiz-btn--primary" onclick="renderResults()">See results →</button>') +
      '</div>';
  }

  function recordResult(ok, summary) {
    if (ok) S.score++;
    S.results.push({ ok: ok, n: S.qi + 1, type: Qs[S.qi].type, summary: summary });
  }

  window.advance = function () { S.qi++; S.answered = false; renderQ(S.qi); };

  function cardWrap(inner) {
    return '<div class="quiz-card">' + inner + '</div>';
  }

  function renderQ(qi) {
    S.answered = false;
    var q = Qs[qi];
    if      (q.type === 'elastic_sort')    renderElasticSort(q);
    else if (q.type === 'calculation')     renderCalculation(q);
    else if (q.type === 'diagnostic_pair') renderDiagnosticPair(q);
    else if (q.type === 'mcq')             renderMCQ(q);
    else if (q.type === 'confidence_mcq')  renderConfidenceMCQ(q);
    else if (q.type === 'odd_one_out')     renderOddOneOut(q);
    else if (q.type === 'multi_select')    renderMultiSelect(q);
    else if (q.type === 'rank')            renderRank(q);
    else if (q.type === 'para_fill')       renderParaFill(q);
    else if (q.type === 'data_table')      renderDataTable(q);
    else if (q.type === 'diagram_interp')  renderDiagramInterp(q);
    else if (q.type === 'chain')           renderChain(q);
  }

  /* ── Elastic sort ── */
  function renderElasticSort(q) {
    S.esChosen = {};
    var cats = q.categories || ['a', 'b'];
    var labels = q.categoryLabels || cats;
    var cards = q.goods.map(function (g, i) {
      var btns = cats.map(function (c, ci) {
        return '<button class="quiz-es-btn" id="esb' + i + '_' + c + '" onclick="pickES(' + i + ',\'' + c + '\')">' + labels[ci] + '</button>';
      }).join('');
      return '<div class="quiz-es-card" id="esc' + i + '">' +
        '<div class="quiz-es-icon">' + g.icon + '</div>' +
        '<div class="quiz-es-label">' + g.label + '</div>' +
        '<div class="quiz-es-note">' + (g.note || '') + '</div>' +
        '<div class="quiz-es-btns">' + btns + '</div></div>';
    }).join('');
    r(cardWrap(
      qHeader(q) +
      '<div class="quiz-stem">' + q.stem + '</div>' +
      '<div class="quiz-es-tally" id="es-tally"><span><strong>0</strong> / ' + q.goods.length + ' classified</span></div>' +
      '<div class="quiz-es-grid">' + cards + '</div>' +
      '<div class="quiz-submit-row"><button class="quiz-btn quiz-btn--submit" id="es-sub" onclick="submitES()" disabled>Check my answers</button></div>' +
      '<div id="fb"></div><div id="nr" class="quiz-next-row"></div>'
    ));
  }
  window.pickES = function (i, choice) {
    if (S.answered) return;
    S.esChosen[i] = choice;
    var q = Qs[S.qi];
    var cats = q.categories || ['a', 'b'];
    var card = document.getElementById('esc' + i);
    card.classList.add('classified');
    cats.forEach(function (c) {
      var btn = document.getElementById('esb' + i + '_' + c);
      if (c === choice) btn.classList.add('picked'); else btn.classList.remove('picked');
    });
    var done = Object.keys(S.esChosen).length;
    document.getElementById('es-tally').innerHTML = '<span><strong>' + done + '</strong> / ' + q.goods.length + ' classified</span>';
    document.getElementById('es-sub').disabled = (done < q.goods.length);
  };
  window.submitES = function () {
    if (S.answered) return; S.answered = true;
    var q = Qs[S.qi];
    var cats = q.categories || ['a', 'b'];
    var nCorrect = 0;
    q.goods.forEach(function (g, i) {
      var card = document.getElementById('esc' + i);
      var chosen = S.esChosen[i];
      var correct = (chosen === g.ans);
      if (correct) nCorrect++;
      card.classList.remove('classified');
      card.classList.add(correct ? 'es-correct' : 'es-wrong');
      cats.forEach(function (c) {
        var btn = document.getElementById('esb' + i + '_' + c);
        btn.classList.add('locked'); btn.classList.remove('picked');
        if (c === chosen && correct) btn.classList.add('right-pick');
        else if (c === chosen && !correct) btn.classList.add('wrong-pick');
        else if (c === g.ans && !correct) btn.classList.add('true-answer');
      });
    });
    var allOk = (nCorrect === q.goods.length);
    recordResult(allOk, nCorrect + ' of ' + q.goods.length + ' classified correctly');
    document.getElementById('es-sub').disabled = true;
    document.getElementById('es-tally').innerHTML = '<span><strong>' + nCorrect + '</strong> / ' + q.goods.length + ' correct</span>';
    var prefix = '<strong>You got ' + nCorrect + ' out of ' + q.goods.length + ' right.</strong><br><br>';
    document.getElementById('fb').outerHTML = feedbackHTML(allOk, prefix + q.exp);
    document.getElementById('nr').outerHTML = nextBtnHTML(S.qi);
  };

  /* ── Calculation ── */
  function renderCalculation(q) {
    var steps = q.working.map(function (w) { return '<div class="quiz-calc-step">' + w + '</div>'; }).join('');
    var opts = q.opts.map(function (o, i) {
      return '<button class="quiz-opt quiz-calc-opt" id="copt' + i + '" onclick="pickCalc(' + i + ')">' +
        '<span class="quiz-opt__letter">' + String.fromCharCode(65 + i) + '</span>' +
        '<span class="quiz-calc-ped">' + o.ped + '</span>' +
        '<span><div class="quiz-calc-typ">' + o.typ + '</div><div class="quiz-calc-rev">' + o.rev + '</div></span>' +
        '</button>';
    }).join('');
    r(cardWrap(
      qHeader(q) +
      '<div class="quiz-calc-context"><div class="quiz-calc-context__label">Scenario</div><div class="quiz-calc-context__text">' + q.context + '</div></div>' +
      '<div style="margin-bottom:var(--sp-4)"><button class="quiz-calc-toggle" onclick="toggleWorking()">Show working</button>' +
      '<div class="quiz-calc-working" id="calc-work">' + steps + '</div></div>' +
      '<div class="quiz-stem">' + q.stem + '</div>' +
      '<div class="quiz-opts">' + opts + '</div>' +
      '<div id="fb"></div><div id="nr" class="quiz-next-row"></div>'
    ));
  }
  window.toggleWorking = function () {
    var w = document.getElementById('calc-work');
    var btn = document.querySelector('.quiz-calc-toggle');
    w.classList.toggle('show');
    btn.textContent = w.classList.contains('show') ? 'Hide working' : 'Show working';
  };
  window.pickCalc = function (i) {
    if (S.answered) return; S.answered = true;
    var q = Qs[S.qi]; var ok = (i === q.ans);
    recordResult(ok, 'Selected row ' + String.fromCharCode(65 + i));
    document.getElementById('calc-work').classList.add('show');
    document.querySelector('.quiz-calc-toggle').textContent = 'Working shown';
    document.querySelectorAll('.quiz-calc-opt').forEach(function (el) { el.classList.add('locked'); });
    document.getElementById('copt' + q.ans).classList.add(ok ? 'correct' : 'reveal');
    if (!ok) document.getElementById('copt' + i).classList.add('wrong');
    document.getElementById('fb').outerHTML = feedbackHTML(ok, q.exp);
    document.getElementById('nr').outerHTML = nextBtnHTML(S.qi);
  };

  /* ── Diagnostic pair ── */
  function renderDiagnosticPair(q) {
    var cards = q.students.map(function (st, i) {
      return '<div class="quiz-pair-card" id="pc' + i + '" onclick="pickPair(' + i + ')">' +
        '<div class="quiz-pair-header"><div class="quiz-pair-name">' + st.name + '</div><span class="quiz-pair-badge">' + st.badge + '</span></div>' +
        '<div class="quiz-pair-body">' + st.answer + '</div></div>';
    }).join('');
    r(cardWrap(
      qHeader(q) +
      '<div class="quiz-stem">' + q.stem + '</div>' +
      '<p class="quiz-instr">Read both answers carefully, then tap the one you think would score more highly in an Edexcel exam.</p>' +
      '<div class="quiz-pair-grid">' + cards + '</div>' +
      '<div id="fb"></div><div id="nr" class="quiz-next-row"></div>'
    ));
  }
  window.pickPair = function (i) {
    if (S.answered) return; S.answered = true;
    var q = Qs[S.qi]; var ok = (i === q.ans);
    recordResult(ok, 'Chose ' + q.students[i].name);
    document.querySelectorAll('.quiz-pair-card').forEach(function (el) { el.classList.add('locked'); });
    document.getElementById('pc' + q.ans).classList.add('winner');
    if (!ok) document.getElementById('pc' + i).classList.add('chosen-wrong');
    else document.querySelectorAll('.quiz-pair-card').forEach(function (el, j) { if (j !== q.ans) el.classList.add('loser'); });
    document.getElementById('fb').outerHTML = feedbackHTML(ok, q.exp);
    document.getElementById('nr').outerHTML = nextBtnHTML(S.qi);
  };

  /* ── MCQ ── */
  function renderMCQ(q) {
    var opts = q.opts.map(function (o, i) {
      return '<button class="quiz-opt" id="mo' + i + '" onclick="pickMCQ(' + i + ')">' +
        '<span class="quiz-opt__letter">' + String.fromCharCode(65 + i) + '</span>' +
        '<span class="quiz-opt__text">' + o + '</span></button>';
    }).join('');
    r(cardWrap(
      qHeader(q) +
      '<div class="quiz-stem">' + q.stem + '</div>' +
      '<div class="quiz-opts">' + opts + '</div>' +
      '<div id="fb"></div><div id="nr" class="quiz-next-row"></div>'
    ));
  }
  window.pickMCQ = function (i) {
    if (S.answered) return; S.answered = true;
    var q = Qs[S.qi]; var ok = (i === q.ans);
    recordResult(ok, 'Selected ' + String.fromCharCode(65 + i));
    document.querySelectorAll('.quiz-opt').forEach(function (el) { el.classList.add('locked'); });
    document.getElementById('mo' + q.ans).classList.add(ok ? 'correct' : 'reveal');
    if (!ok) document.getElementById('mo' + i).classList.add('wrong');
    document.getElementById('fb').outerHTML = feedbackHTML(ok, q.exp);
    document.getElementById('nr').outerHTML = nextBtnHTML(S.qi);
  };

  /* ── Confidence MCQ ── */
  function renderConfidenceMCQ(q) {
    S.confChosen = -1; S.confPhase = 'pick';
    var opts = q.opts.map(function (o, i) {
      return '<button class="quiz-opt" id="cmo' + i + '" onclick="pickConfAnswer(' + i + ')">' +
        '<span class="quiz-opt__letter">' + String.fromCharCode(65 + i) + '</span>' +
        '<span class="quiz-opt__text">' + o + '</span></button>';
    }).join('');
    var confPanel = '<div class="quiz-conf-panel" id="conf-panel">' +
      '<div class="quiz-conf-q">Now — how confident were you in that answer?</div>' +
      '<div class="quiz-conf-btns">' +
      '<button class="quiz-conf-btn certain" onclick="pickConfLevel(\'certain\')">✓ Very sure</button>' +
      '<button class="quiz-conf-btn unsure"  onclick="pickConfLevel(\'unsure\')">~ Fairly sure</button>' +
      '<button class="quiz-conf-btn guess"   onclick="pickConfLevel(\'guess\')">? Just guessing</button>' +
      '</div></div>';
    r(cardWrap(
      qHeader(q) +
      '<div class="quiz-stem">' + q.stem + '</div>' +
      '<div class="quiz-opts">' + opts + '</div>' + confPanel +
      '<div id="fb"></div><div id="nr" class="quiz-next-row"></div>'
    ));
  }
  window.pickConfAnswer = function (i) {
    if (S.answered || S.confChosen !== -1) return;
    S.confChosen = i;
    document.querySelectorAll('.quiz-opt').forEach(function (el) { el.classList.add('locked'); });
    var el = document.getElementById('cmo' + i);
    el.style.borderColor = 'var(--econ-amber)';
    el.style.background = 'var(--econ-amber-50)';
    document.getElementById('conf-panel').classList.add('show');
  };
  window.pickConfLevel = function (level) {
    if (S.answered) return; S.answered = true;
    var q = Qs[S.qi]; var ok = (S.confChosen === q.ans);
    recordResult(ok, 'Selected ' + String.fromCharCode(65 + S.confChosen) + ' (confidence: ' + level + ')');
    document.querySelectorAll('.quiz-conf-btn').forEach(function (el) { el.style.opacity = '.35'; el.disabled = true; });
    document.getElementById('cmo' + q.ans).classList.add(ok ? 'correct' : 'reveal');
    if (!ok) document.getElementById('cmo' + S.confChosen).classList.add('wrong');
    var tone = '';
    if (ok && level === 'certain')      tone = 'Excellent — you knew this one cold.';
    else if (ok && level === 'unsure')  tone = 'Good instinct — trust it next time.';
    else if (ok && level === 'guess')   tone = 'Lucky this time — make sure you understand <em>why</em> it is correct.';
    else if (!ok && level === 'certain')tone = '<strong>Watch out:</strong> you were very confident but this is wrong — a misconception worth fixing.';
    else if (!ok && level === 'unsure') tone = 'The uncertainty was well-founded. Study this one carefully.';
    else tone = 'At least you knew you were not sure. Now read the explanation below.';
    var tagText = level === 'certain' ? 'Very sure' : level === 'unsure' ? 'Fairly sure' : 'Guessing';
    var prefix = '<span class="quiz-conf-tag ' + level + '">' + tagText + '</span>' + tone + '<br><br>';
    document.getElementById('fb').outerHTML = feedbackHTML(ok, prefix + q.exp);
    document.getElementById('nr').outerHTML = nextBtnHTML(S.qi);
  };

  /* ── Odd one out ── */
  function renderOddOneOut(q) {
    var cards = q.items.map(function (it, i) {
      return '<button class="quiz-oo-card" id="oo' + i + '" onclick="pickOOO(' + i + ')">' +
        '<div class="quiz-oo-icon">' + it.icon + '</div>' +
        '<div class="quiz-oo-label">' + it.label + '</div>' +
        '<div class="quiz-oo-note">' + (it.note || '') + '</div></button>';
    }).join('');
    r(cardWrap(
      qHeader(q) +
      '<div class="quiz-stem">' + q.stem + '</div>' +
      '<div class="quiz-oo-grid">' + cards + '</div>' +
      '<div id="fb"></div><div id="nr" class="quiz-next-row"></div>'
    ));
  }
  window.pickOOO = function (i) {
    if (S.answered) return; S.answered = true;
    var q = Qs[S.qi]; var ok = (i === q.ans);
    recordResult(ok, 'Tapped: ' + q.items[i].label);
    document.querySelectorAll('.quiz-oo-card').forEach(function (el) { el.classList.add('locked'); });
    document.getElementById('oo' + q.ans).classList.add('is-odd');
    if (!ok) document.getElementById('oo' + i).classList.add('chosen-wrong');
    document.querySelectorAll('.quiz-oo-card').forEach(function (el, j) {
      if (j !== q.ans && j !== i) el.classList.add('dimmed');
    });
    document.getElementById('fb').outerHTML = feedbackHTML(ok, q.exp);
    document.getElementById('nr').outerHTML = nextBtnHTML(S.qi);
  };

  /* ── Multi select ── */
  function renderMultiSelect(q) {
    S.msChecked = q.opts.map(function () { return false; });
    var opts = q.opts.map(function (o, i) {
      return '<button class="quiz-ms-opt" id="ms' + i + '" onclick="toggleMS(' + i + ')">' +
        '<div class="quiz-ms-box" id="msb' + i + '"></div>' +
        '<span class="quiz-ms-text">' + String.fromCharCode(65 + i) + '. ' + o + '</span></button>';
    }).join('');
    r(cardWrap(
      qHeader(q) +
      '<div class="quiz-stem">' + q.stem + '</div>' +
      '<p class="quiz-instr">Tick all that apply. Select as many or as few as you think are correct.</p>' +
      '<div class="quiz-ms-opts">' + opts + '</div>' +
      '<div class="quiz-submit-row"><button class="quiz-btn quiz-btn--submit" id="ms-sub" onclick="submitMS()">Check my selection</button></div>' +
      '<div id="fb"></div><div id="nr" class="quiz-next-row"></div>'
    ));
  }
  window.toggleMS = function (i) {
    if (S.answered) return;
    S.msChecked[i] = !S.msChecked[i];
    var opt = document.getElementById('ms' + i);
    var box = document.getElementById('msb' + i);
    opt.classList.toggle('checked', S.msChecked[i]);
    box.innerHTML = S.msChecked[i] ? '✓' : '';
  };
  window.submitMS = function () {
    if (S.answered) return; S.answered = true;
    var q = Qs[S.qi];
    var correctSet = {}; q.correct.forEach(function (idx) { correctSet[idx] = true; });
    var allOk = true;
    S.msChecked.forEach(function (checked, i) { if (checked !== !!correctSet[i]) allOk = false; });
    recordResult(allOk, 'Multi-select submitted');
    document.querySelectorAll('.quiz-ms-opt').forEach(function (el, i) {
      el.classList.add('locked');
      var shouldBe = !!correctSet[i];
      var was = S.msChecked[i];
      el.classList.remove('checked');
      if (shouldBe && was)        { el.classList.add('result-correct'); document.getElementById('msb' + i).innerHTML = '✓'; }
      else if (!shouldBe && was)  { el.classList.add('result-wrong');   document.getElementById('msb' + i).innerHTML = '✗'; }
      else if (shouldBe && !was)  { el.classList.add('result-missed');  document.getElementById('msb' + i).innerHTML = '○'; }
    });
    document.getElementById('ms-sub').disabled = true;
    document.getElementById('fb').outerHTML = feedbackHTML(allOk, q.exp);
    document.getElementById('nr').outerHTML = nextBtnHTML(S.qi);
  };

  /* ── Rank & Chain ── */
  function renderRank(q) {
    renderRankInner(q,
      q.instr || 'Tap the items in the correct order. Tap a ranked item again to remove it.',
      q.mostLabel  || '↑ First',
      q.leastLabel || 'Last ↓');
  }
  function renderChain(q) {
    renderRankInner(q,
      q.instr || 'Tap the events in the correct logical order, from <strong>first cause</strong> to <strong>final consequence</strong>. Tap an item again to remove it.',
      '↑ First cause',
      'Final consequence ↓');
  }
  function renderRankInner(q, instr, mostLbl, leastLbl) {
    S.rankOrder = [];
    var n = q.items.length;
    var idxArr = []; for (var k = 0; k < n; k++) idxArr.push(k);
    var display = idxArr.sort(function () { return Math.random() - 0.5; });
    var slots = ''; for (var kk = 1; kk <= n; kk++) slots += '<div class="quiz-rank-slot" id="rs' + kk + '">' + kk + '</div>';
    var cards = display.map(function (origIdx) {
      var it = q.items[origIdx];
      return '<button class="quiz-rank-item" id="ri' + origIdx + '" onclick="tapRank(' + origIdx + ')">' +
        '<div class="quiz-rank-badge" id="rb' + origIdx + '">?</div>' +
        '<div class="quiz-rank-label">' + it.label + '</div>' +
        '<div class="quiz-rank-note">' + (it.note || '') + '</div></button>';
    }).join('');
    r(cardWrap(
      qHeader(q) +
      '<div class="quiz-stem">' + q.stem + '</div>' +
      '<div class="quiz-rank-instr">' + instr + '</div>' +
      '<div class="quiz-rank-tracker"><span class="quiz-rank-tracker__label">Your order</span>' + slots + '</div>' +
      '<div class="quiz-rank-ends"><span class="quiz-rank-end-lbl most">' + mostLbl + '</span><span class="quiz-rank-end-lbl least">' + leastLbl + '</span></div>' +
      '<div class="quiz-rank-grid">' + cards + '</div>' +
      '<div class="quiz-submit-row"><button class="quiz-btn quiz-btn--submit" id="rank-sub" onclick="submitRank()" disabled>Check my answer</button></div>' +
      '<div id="fb"></div><div id="nr" class="quiz-next-row"></div>'
    ));
  }
  window.tapRank = function (origIdx) {
    if (S.answered) return;
    var q = Qs[S.qi]; var n = q.items.length;
    var pos = S.rankOrder.indexOf(origIdx);
    if (pos >= 0) {
      S.rankOrder.splice(pos, 1);
      document.getElementById('ri' + origIdx).classList.remove('selected');
      document.getElementById('rb' + origIdx).textContent = '?';
    } else {
      if (S.rankOrder.length >= n) return;
      S.rankOrder.push(origIdx);
      document.getElementById('ri' + origIdx).classList.add('selected');
    }
    S.rankOrder.forEach(function (idx, i) { document.getElementById('rb' + idx).textContent = (i + 1); });
    for (var nn = 1; nn <= n; nn++) {
      var slot = document.getElementById('rs' + nn);
      if (nn <= S.rankOrder.length) slot.classList.add('filled'); else slot.classList.remove('filled');
    }
    document.getElementById('rank-sub').disabled = (S.rankOrder.length < n);
  };
  window.submitRank = function () {
    if (S.answered) return; S.answered = true;
    var q = Qs[S.qi];
    var allOk = S.rankOrder.every(function (idx, i) { return idx === q.correctOrder[i]; });
    recordResult(allOk, 'Order: ' + S.rankOrder.map(function (i) { return q.items[i].label.replace(/<[^>]+>/g, ''); }).join(' › '));
    document.querySelectorAll('.quiz-rank-item').forEach(function (el) { el.classList.add('locked'); el.classList.remove('selected'); });
    q.correctOrder.forEach(function (idx, i) {
      var el = document.getElementById('ri' + idx);
      var badge = document.getElementById('rb' + idx);
      var studentPos = S.rankOrder.indexOf(idx);
      var correct = (studentPos === i);
      el.classList.add(correct ? 'rank-correct' : 'rank-wrong');
      badge.textContent = (i + 1);
    });
    document.getElementById('rank-sub').disabled = true;
    document.getElementById('fb').outerHTML = feedbackHTML(allOk, q.exp);
    document.getElementById('nr').outerHTML = nextBtnHTML(S.qi);
  };

  /* ── Para fill ── */
  function renderParaFill(q) {
    S.pfSel = {};
    var anchor = q.anchor ? '<span class="quiz-para-anchor">' + q.anchor + '</span>' : '';
    var para = q.para;
    q.blanks.forEach(function (b) {
      para = para.replace('[' + b.id + ']', '<span class="quiz-blank-pill" id="bp' + b.id + '">[' + b.id + ']</span>');
    });
    var rows = q.blanks.map(function (b) {
      var opts = b.opts.map(function (o, i) {
        return '<button class="quiz-pf-opt" id="pf' + b.id + '_' + i + '" onclick="pickPFOpt(' + b.id + ',' + i + ')">' + o + '</button>';
      }).join('');
      return '<div class="quiz-pf-row"><span class="quiz-pf-row__num">[' + b.id + ']</span>' + opts + '</div>';
    }).join('');
    r(cardWrap(
      qHeader(q) +
      '<div class="quiz-stem">' + q.stem + '</div>' +
      '<div class="quiz-para-box">' + anchor + para + '</div>' +
      '<div class="quiz-pf-controls">' + rows + '</div>' +
      '<div class="quiz-submit-row"><button class="quiz-btn quiz-btn--submit" id="pf-sub" onclick="submitPF()" disabled>Check my paragraph</button></div>' +
      '<div id="fb"></div><div id="nr" class="quiz-next-row"></div>'
    ));
  }
  window.pickPFOpt = function (bi, oi) {
    if (S.answered) return;
    S.pfSel[bi] = oi;
    var q = Qs[S.qi];
    var blank = q.blanks.find(function (b) { return b.id === bi; });
    var pill = document.getElementById('bp' + bi);
    if (pill) { pill.textContent = blank.opts[oi]; pill.classList.add('filled'); }
    blank.opts.forEach(function (_, i) {
      var btn = document.getElementById('pf' + bi + '_' + i);
      if (btn) btn.classList.toggle('selected', i === oi);
    });
    var allDone = q.blanks.every(function (b) { return S.pfSel[b.id] !== undefined; });
    document.getElementById('pf-sub').disabled = !allDone;
  };
  window.submitPF = function () {
    if (S.answered) return; S.answered = true;
    var q = Qs[S.qi];
    var allOk = q.blanks.every(function (b) { return S.pfSel[b.id] === b.ans; });
    recordResult(allOk, 'Paragraph completed');
    q.blanks.forEach(function (b) {
      var chosen = S.pfSel[b.id];
      var ok = (chosen === b.ans);
      var pill = document.getElementById('bp' + b.id);
      if (pill) {
        pill.classList.add(ok ? 'pf-correct' : 'pf-wrong');
        if (!ok) pill.textContent = b.opts[b.ans] + ' (correct)';
      }
      b.opts.forEach(function (_, i) {
        var btn = document.getElementById('pf' + b.id + '_' + i);
        if (btn) {
          btn.classList.add('locked'); btn.classList.remove('selected');
          if (i === b.ans) btn.classList.add('pf-opt-correct');
          else if (i === chosen && !ok) btn.classList.add('pf-opt-wrong');
        }
      });
    });
    document.getElementById('pf-sub').disabled = true;
    document.getElementById('fb').outerHTML = feedbackHTML(allOk, q.exp);
    document.getElementById('nr').outerHTML = nextBtnHTML(S.qi);
  };

  /* ── Data table ── */
  function renderDataTable(q) {
    var thead = '<tr>' + q.headers.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr>';
    var tbody = q.rows.map(function (row) {
      return '<tr>' + row.map(function (cell) { return '<td>' + cell + '</td>'; }).join('') + '</tr>';
    }).join('');
    var opts = q.opts.map(function (o, i) {
      return '<button class="quiz-opt" id="dmo' + i + '" onclick="pickDT(' + i + ')">' +
        '<span class="quiz-opt__letter">' + String.fromCharCode(65 + i) + '</span>' +
        '<span class="quiz-opt__text">' + o + '</span></button>';
    }).join('');
    r(cardWrap(
      qHeader(q) +
      '<div class="quiz-stem">' + q.stem + '</div>' +
      '<div class="quiz-tbl-wrap"><table><thead>' + thead + '</thead><tbody>' + tbody + '</tbody></table></div>' +
      '<div class="quiz-question-secondary">' + q.question + '</div>' +
      '<div class="quiz-opts">' + opts + '</div>' +
      '<div id="fb"></div><div id="nr" class="quiz-next-row"></div>'
    ));
  }
  window.pickDT = function (i) {
    if (S.answered) return; S.answered = true;
    var q = Qs[S.qi]; var ok = (i === q.ans);
    recordResult(ok, 'Selected ' + String.fromCharCode(65 + i));
    document.querySelectorAll('.quiz-opt').forEach(function (el) { el.classList.add('locked'); });
    document.getElementById('dmo' + q.ans).classList.add(ok ? 'correct' : 'reveal');
    if (!ok) document.getElementById('dmo' + i).classList.add('wrong');
    document.getElementById('fb').outerHTML = feedbackHTML(ok, q.exp);
    document.getElementById('nr').outerHTML = nextBtnHTML(S.qi);
  };

  /* ── Diagram interpretation ── */
  function renderDiagramInterp(q) {
    var opts = q.opts.map(function (o, i) {
      return '<button class="quiz-opt" id="dimo' + i + '" onclick="pickDIM(' + i + ')">' +
        '<span class="quiz-opt__letter">' + String.fromCharCode(65 + i) + '</span>' +
        '<span class="quiz-opt__text">' + o + '</span></button>';
    }).join('');
    r(cardWrap(
      qHeader(q) +
      '<div class="quiz-stem">' + q.stem + '</div>' +
      '<div class="quiz-diag-box">' + q.svg + (q.caption ? '<div class="quiz-diag-caption">' + q.caption + '</div>' : '') + '</div>' +
      '<div class="quiz-question-secondary">' + q.question + '</div>' +
      '<div class="quiz-opts">' + opts + '</div>' +
      '<div id="fb"></div><div id="nr" class="quiz-next-row"></div>'
    ));
  }
  window.pickDIM = function (i) {
    if (S.answered) return; S.answered = true;
    var q = Qs[S.qi]; var ok = (i === q.ans);
    recordResult(ok, 'Selected ' + String.fromCharCode(65 + i));
    document.querySelectorAll('.quiz-opt').forEach(function (el) { el.classList.add('locked'); });
    document.getElementById('dimo' + q.ans).classList.add(ok ? 'correct' : 'reveal');
    if (!ok) document.getElementById('dimo' + i).classList.add('wrong');
    document.getElementById('fb').outerHTML = feedbackHTML(ok, q.exp);
    document.getElementById('nr').outerHTML = nextBtnHTML(S.qi);
  };

  /* ── Results ── */
  window.renderResults = function () {
    var total = Qs.length;
    var pct = Math.round(S.score / total * 100);
    var passed = pct >= 60;
    var elapsed = Date.now() - (S.startedAt || Date.now());

    var verdict = pct >= 80 ? 'Excellent — the full picture is clear.'
                : pct >= 60 ? "You're on the right track."
                : pct >= 40 ? 'Developing — some core ideas need more work.'
                : 'This topic needs focused revision.';

    var dots = S.results.map(function (rv) {
      return '<div class="quiz-dot quiz-dot--' + (rv.ok ? 'ok' : 'bad') + '">' +
             '<span class="quiz-dot__n">' + rv.n + '</span>' +
             '<span class="quiz-dot__mark">' + (rv.ok ? '✓' : '✗') + '</span></div>';
    }).join('');

    var detailItems = S.results.map(function (rv) {
      var m = TYPE_META[rv.type] || { label: rv.type, tone: 'blue' };
      var tc = TONE_COLOURS[m.tone];
      return '<div class="quiz-rv-item">' +
        '<div class="quiz-rv-dot ' + (rv.ok ? 'ok' : 'bad') + '">' + (rv.ok ? '✓' : '✗') + '</div>' +
        '<div><div class="quiz-rv-type" style="color:' + tc.fg + '">Q' + rv.n + ' · ' + m.label + '</div>' +
        '<div class="quiz-rv-summary">' + rv.summary + '</div></div></div>';
    }).join('');

    var nCorrect = S.score;
    var nIncorrect = total - nCorrect;

    var backHref  = TOPIC.backUrl  || 'topic_inflation.html';
    var backLabel = TOPIC.backLabel || 'Back to topic';

    r('<div class="quiz-results">' +

      '<div class="quiz-results__hero">' +
        '<div class="quiz-results__head-icon">🎯</div>' +
        '<div>' +
          '<div class="quiz-results__head-title">Quick check complete!</div>' +
          '<div class="quiz-results__head-sub">Here\'s how you performed on your ' + total + ' questions.</div>' +
        '</div>' +
      '</div>' +

      '<div class="quiz-stats">' +
        '<div class="quiz-stat">' +
          '<div class="quiz-stat__label">Your score</div>' +
          '<div class="quiz-stat__value">' + S.score + '<span class="quiz-stat__denom">/' + total + '</span></div>' +
          '<div class="quiz-stat__sub">' + pct + '%</div>' +
          '<div class="quiz-stat__verdict">' + verdict + '</div>' +
          '<div class="quiz-stat__chip quiz-stat__chip--' + (passed ? 'ok' : 'bad') + '">' +
            (passed ? '✓ Pass (60% required)' : 'Below pass mark — try again') +
          '</div>' +
        '</div>' +
        '<div class="quiz-stat">' +
          '<div class="quiz-stat__label">Time taken</div>' +
          '<div class="quiz-stat__value quiz-stat__value--small">' + formatDuration(elapsed) + '</div>' +
          '<div class="quiz-stat__divider"></div>' +
          '<div class="quiz-stat__label">Average time per question</div>' +
          '<div class="quiz-stat__value quiz-stat__value--small">' + formatAvg(elapsed, total) + '</div>' +
        '</div>' +
        '<div class="quiz-stat quiz-stat--ring">' +
          '<div class="quiz-stat__label">Accuracy</div>' +
          '<div class="quiz-ring" style="--ring-pct:' + pct + '">' +
            '<div class="quiz-ring__inner"><div class="quiz-ring__pct">' + pct + '%</div>' +
            '<div class="quiz-ring__sub">' + nCorrect + ' correct</div></div>' +
          '</div>' +
          '<div class="quiz-stat__sub">of ' + total + ' questions</div>' +
        '</div>' +
      '</div>' +

      '<div class="quiz-review-card">' +
        '<div class="quiz-review-card__title">Review your answers</div>' +
        '<div class="quiz-dots">' + dots + '</div>' +
        '<div class="quiz-review-legend">' +
          '<span><span class="quiz-legend-dot quiz-legend-dot--ok"></span>Correct (' + nCorrect + ')</span>' +
          '<span><span class="quiz-legend-dot quiz-legend-dot--bad"></span>Incorrect (' + nIncorrect + ')</span>' +
        '</div>' +
        '<details class="quiz-review-details">' +
          '<summary class="quiz-review-details__summary">Show the full breakdown question by question</summary>' +
          '<div class="quiz-review-grid">' + detailItems + '</div>' +
        '</details>' +
      '</div>' +

      '<div class="quiz-results__actions">' +
        '<button class="quiz-btn quiz-btn--secondary" onclick="restartQuiz()">Redo quiz</button>' +
        '<button class="quiz-btn quiz-btn--primary" onclick="alert(\'Master mode coming soon \\u2014 exam-style questions from past papers\')">Ready to Master Inflation →</button>' +
      '</div>' +

      '</div>');
  };

  window.restartQuiz = function () {
    S = { qi: 0, score: 0, results: [], answered: false,
          rankOrder: [], pfSel: {}, msChecked: [], esChosen: {},
          confChosen: -1, confPhase: 'pick', startedAt: Date.now() };
    Qs = Qs.map(shuffleQuestion);
    renderQ(0);
  };

})();
