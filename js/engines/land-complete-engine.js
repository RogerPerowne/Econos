/* ============================================================
   ECONOS — Land It complete page engine
   Reads per-section timings/scores from localStorage and renders
   the session summary.
   ============================================================ */

(function () {
  'use strict';

  window.bootLandComplete = function () {
    var I    = window.ECONOS_ICONS;
    var DATA = window.ECONOS_LAND_COMPLETE;

    /* ── Read stored results ────────────────────────────── */
    var session = {};
    var results = {};
    try { session = JSON.parse(localStorage.getItem('econosLandSession') || '{}'); } catch (e) {}
    try { results = JSON.parse(localStorage.getItem('econosLandResults')  || '{}'); } catch (e) {}

    var selectedSections = session.sections || [];

    /* ── Helpers ─────────────────────────────────────────── */
    function formatTime(ms) {
      if (!ms || ms <= 0) { return null; }
      var s = Math.floor(ms / 1000);
      var m = Math.floor(s / 60);
      var r = s % 60;
      return m + 'm ' + (r < 10 ? '0' : '') + r + 's';
    }

    function sectionElapsed(letter) {
      var r = results[letter];
      if (!r || !r.startMs || !r.endMs) { return null; }
      return r.endMs - r.startMs;
    }

    function totalElapsed() {
      var total = 0;
      var letters = ['A', 'B', 'C'];
      for (var i = 0; i < letters.length; i++) {
        var ms = sectionElapsed(letters[i]);
        if (ms) { total += ms; }
      }
      return total > 0 ? total : null;
    }

    function completedCount() {
      var n = 0;
      for (var i = 0; i < selectedSections.length; i++) {
        var r = results[selectedSections[i]];
        if (r && r.endMs) { n++; }
      }
      return n;
    }

    /* ── Sidebar ─────────────────────────────────────────── */
    function renderSidebar() {
      var nav = [
        { name: 'Home',          icon: I.home,     href: 'index.html', active: false },
        { name: 'My topics',     icon: I.topics,   href: '#',          active: true  },
        { name: 'Progress',      icon: I.progress, href: '#',          active: false },
        { name: 'Exam practice', icon: I.practice, href: '#',          active: false },
        { name: 'Settings',      icon: I.settings, href: '#',          active: false }
      ];
      return '<aside class="sidebar">'
        + '<div class="sidebar__brand">'
        +   '<a href="index.html" class="sidebar__logo-link"><img src="assets/econos-logo-full.png" alt="econos" class="sidebar__logo-full"></a>'
        + '</div>'
        + '<nav class="sidebar__nav">'
        +   nav.map(function (n) {
              return '<a href="' + n.href + '" class="' + (n.active ? 'is-active' : '') + '">' + n.icon + '<span>' + n.name + '</span></a>';
            }).join('')
        + '</nav>'
        + '<div class="sidebar__streak">'
        +   '<div class="sidebar__streak-row"><span class="sidebar__streak-flame">🔥</span><span class="sidebar__streak-num">1</span></div>'
        +   '<div class="sidebar__streak-label">Day streak</div>'
        +   '<div class="sidebar__streak-sub">Keep it going!</div>'
        + '</div>'
        + '<div class="sidebar__user">'
        +   '<div class="sidebar__user-avatar">AB</div>'
        +   '<div class="sidebar__user-info">'
        +     '<div class="sidebar__user-name">Alex Bennett</div>'
        +     '<div class="sidebar__user-role">A-Level Economics</div>'
        +   '</div>'
        +   '<div class="sidebar__user-chev">' + I.chevDown + '</div>'
        + '</div>'
        + '</aside>';
    }

    /* ── Hero ────────────────────────────────────────────── */
    function renderHero() {
      var done  = completedCount();
      var total = selectedSections.length;
      var sub   = done === total
        ? 'You\'ve worked through all ' + total + ' section' + (total > 1 ? 's' : '') + '. Compare your answers with the model responses below.'
        : 'You completed ' + done + ' of ' + total + ' sections. Review what you\'ve done and pick up where you left off.';
      return '<div class="lc-hero">'
        +   '<div class="lc-hero__icon">🎓</div>'
        +   '<div>'
        +     '<div class="lc-hero__title">Land It complete!</div>'
        +     '<div class="lc-hero__sub">' + sub + '</div>'
        +   '</div>'
        + '</div>';
    }

    /* ── Stats row ───────────────────────────────────────── */
    function renderStats() {
      var done       = completedCount();
      var total      = selectedSections.length;
      var totalMs    = totalElapsed();
      var totalStr   = formatTime(totalMs) || '&#8212;';

      /* Section A MCQ score if available */
      var aScore = '';
      if (results.A && results.A.mcqTotal) {
        var correct = results.A.mcqScore || 0;
        var max     = results.A.mcqTotal;
        var pct     = Math.round(correct / max * 100);
        aScore = '<div class="lc-stat-box">'
          + '<div class="lc-stat-box__label">SECTION A MCQS</div>'
          + '<div class="lc-stat-box__main"><span class="lc-stat-box__big">' + correct + '</span><span class="lc-stat-box__denom">/' + max + '</span></div>'
          + '<div class="lc-stat-box__pct">' + pct + '%</div>'
          + '<div class="lc-stat-box__msg">' + (pct >= 80 ? 'Excellent recall' : pct >= 60 ? 'Good — review missed ones' : 'Revisit the topic notes') + '</div>'
          + '</div>';
      }

      return '<div class="lc-stats">'
        + '<div class="lc-stat-box">'
        +   '<div class="lc-stat-box__label">SECTIONS COMPLETED</div>'
        +   '<div class="lc-stat-box__main"><span class="lc-stat-box__big">' + done + '</span><span class="lc-stat-box__denom">/' + total + '</span></div>'
        +   '<div class="lc-stat-box__msg">' + (done === total ? 'Full session done' : 'Partial session') + '</div>'
        + '</div>'
        + '<div class="lc-stat-box">'
        +   '<div class="lc-stat-box__label">TOTAL TIME</div>'
        +   '<div class="lc-stat-box__main"><span class="lc-stat-box__big lc-stat-box__big--time">' + totalStr + '</span></div>'
        + '</div>'
        + (aScore || '<div class="lc-stat-box lc-stat-box--empty"></div>')
        + '</div>';
    }

    /* ── Per-section timing breakdown ───────────────────── */
    function renderSectionTable() {
      var rowsHtml = selectedSections.map(function (letter) {
        var cfg = DATA.sections[letter] || {};
        var r   = results[letter] || {};
        var ms  = sectionElapsed(letter);
        var timeStr = ms ? formatTime(ms) : (r.startMs ? 'In progress' : 'Not started');
        var statusStr = '&#8212;';
        if (letter === 'A' && r.mcqScore != null) {
          statusStr = r.mcqScore + '/' + r.mcqTotal + ' MCQs correct';
        } else if (letter === 'B' || letter === 'C') {
          if (r.endMs) {
            statusStr = r.attempted ? 'Answered' : 'Skipped';
          }
        }
        return '<div class="lc-row">'
          + '<div class="lc-row__badge" style="background:' + cfg.color + '">' + letter + '</div>'
          + '<div class="lc-row__name">'
          +   '<div>' + cfg.label + '</div>'
          +   '<div class="lc-row__sublabel">' + cfg.sublabel + '</div>'
          + '</div>'
          + '<div class="lc-row__score">' + statusStr + '</div>'
          + '<div class="lc-row__time">' + timeStr + '</div>'
          + '</div>';
      }).join('');

      return '<div class="lc-station-table">'
        + '<div class="lc-station-table__head">'
        +   '<span class="lc-th--spacer"></span>'
        +   '<span class="lc-th--name">Section</span>'
        +   '<span class="lc-th--score">Score</span>'
        +   '<span class="lc-th--time">Time</span>'
        + '</div>'
        + rowsHtml
        + '</div>';
    }

    /* ── Next steps card ─────────────────────────────────── */
    function renderNextCard() {
      var nc = DATA.nextCard;
      return '<div class="lc-advice">'
        + '<div class="lc-advice-box">'
        +   '<div class="lc-advice-box__head"><span>' + nc.icon + '</span><span>' + nc.title + '</span></div>'
        +   '<div class="lc-advice-box__text">' + nc.text + '</div>'
        + '</div>'
        + '</div>';
    }

    /* ── Footer ──────────────────────────────────────────── */
    function renderFooter() {
      var firstSection = selectedSections.length > 0 ? selectedSections[0] : 'A';
      var reDoMap = {
        A: TopicLoader.buildUrl('land_section_a.html'),
        B: TopicLoader.buildUrl('land_section_b.html'),
        C: TopicLoader.buildUrl('land_section_c.html')
      };
      var redoHref = reDoMap[firstSection] || TopicLoader.buildUrl('land_intro.html');
      return '<div class="link-footer">'
        + '<a href="' + redoHref + '" class="link-btn link-btn--ghost">Redo session</a>'
        + '<a href="' + DATA.nextUrl + '" class="link-btn link-btn--primary">Back to my topics ' + I.arrowRight + '</a>'
        + '</div>';
    }

    /* ── Right rail ──────────────────────────────────────── */
    function renderRail() {
      var sectionItems = selectedSections.map(function (letter) {
        var cfg = DATA.sections[letter] || {};
        var r   = results[letter] || {};
        var done = !!r.endMs;
        return '<div class="cards-list__item' + (done ? ' is-done' : '') + '">'
          + '<div class="cards-list__num">' + (done ? I.check : letter) + '</div>'
          + '<div class="cards-list__body">'
          +   '<div class="cards-list__name">' + cfg.label + ' &mdash; ' + cfg.sublabel + '</div>'
          + '</div>'
          + '</div>';
      }).join('');

      var sessionDots = '<div class="session-dots">'
        + '<div class="session-dot is-done">' + I.check + '</div>'
        + '<div class="session-line is-done"></div>'
        + '<div class="session-dot is-done">' + I.check + '</div>'
        + '<div class="session-line is-done"></div>'
        + '<div class="session-dot is-done">' + I.check + '</div>'
        + '</div>';

      return '<aside class="right-rail">'
        + '<div class="rail-card">'
        +   '<div class="rail-card__title">Topic progress</div>'
        +   '<div class="rail-card__sub">Step 3 of 3: Land It</div>'
        +   sessionDots
        + '</div>'
        + '<div class="rail-card">'
        +   '<div class="rail-card__title" style="margin-bottom:var(--sp-3)">Sections</div>'
        +   '<div class="cards-list">' + sectionItems + '</div>'
        + '</div>'
        + '</aside>';
    }

    /* ── Full page render ────────────────────────────────── */
    function render() {
      document.getElementById('app-root').innerHTML = ''
        + '<div class="app theme--land">'
        +   renderSidebar()
        +   '<div class="main">'
        +     '<div class="page lc-page">'
        +       '<div class="lc-main">'
        +         renderHero()
        +         renderStats()
        +         renderSectionTable()
        +         renderNextCard()
        +         renderFooter()
        +       '</div>'
        +       renderRail()
        +     '</div>'
        +   '</div>'
        + '</div>';
    }

    render();
  };
})();
