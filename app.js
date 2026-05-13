/* ============================================================
   ECONOS — app rendering & navigation
   7-card sequence with template-based rendering
   ============================================================ */

(function () {
  const T = window.ECONOS_TOPIC;
  const I = window.ECONOS_ICONS;

  const root = document.getElementById('app-root');
  let currentView = 'intro'; // 'intro' | 0..6

  /* ============================================================
     SHELL (sidebar + topbar)
     ============================================================ */

  function renderShell(inner) {
    return `
      <div class="app">
        ${renderSidebar()}
        <div class="main">
          ${renderTopbar()}
          ${inner}
        </div>
      </div>
    `;
  }

  function renderSidebar() {
    const navItems = [
      { name: 'Home',         icon: I.home,     href: '#', active: false },
      { name: 'My topics',    icon: I.topics,   href: '#', active: true  },
      { name: 'Progress',     icon: I.progress, href: '#', active: false },
      { name: 'Exam practice',icon: I.practice, href: '#', active: false },
      { name: 'Study planner',icon: I.planner,  href: '#', active: false },
      { name: 'Messages',     icon: I.messages, href: '#', active: false },
      { name: 'Settings',     icon: I.settings, href: '#', active: false }
    ];

    return `
      <aside class="sidebar">
        <div class="sidebar__brand">
          <div class="sidebar__logo">
            <img src="assets/econos-icon.png" alt="econos">
          </div>
          <div class="sidebar__wordmark">econos</div>
          <div class="sidebar__tagline">
            Learn it<span class="ec-stop-green">.</span> Link it<span class="ec-stop-yellow">.</span> Land it<span class="ec-stop-pink">.</span>
          </div>
        </div>

        <nav class="sidebar__nav">
          ${navItems.map(n => `
            <a href="${n.href}" class="${n.active ? 'is-active' : ''}">
              ${n.icon}
              <span>${n.name}</span>
            </a>
          `).join('')}
        </nav>

        <div class="sidebar__streak">
          <div class="sidebar__streak-row">
            <span class="sidebar__streak-flame">🔥</span>
            <span class="sidebar__streak-num">1</span>
          </div>
          <div class="sidebar__streak-label">Day streak</div>
          <div class="sidebar__streak-sub">Keep it going!</div>
        </div>

        <div class="sidebar__user">
          <div class="sidebar__user-avatar">AB</div>
          <div class="sidebar__user-info">
            <div class="sidebar__user-name">Alex Brown</div>
            <div class="sidebar__user-role">A-Level Economics</div>
          </div>
          <div class="sidebar__user-chev">${I.chevDown}</div>
        </div>
      </aside>
    `;
  }

  function renderTopbar() {
    if (currentView === 'intro') {
      return `
        <header class="topbar">
          <a href="index.html" class="topbar__back">
            ${I.arrowLeft}
            <span>Back to dashboard</span>
          </a>
          <div style="flex:1"></div>
          <div class="topbar__right">
            <div class="topbar__streak">
              <span class="topbar__streak-icon">🔥</span>
              <span>1 day streak</span>
            </div>
            <div class="topbar__avatar">
              <div class="topbar__avatar-circle">AB</div>
              <span class="topbar__avatar-chev">${I.chevDown}</span>
            </div>
          </div>
        </header>
      `;
    } else {
      return `
        <header class="topbar">
          <a href="#" class="topbar__back" data-action="back-to-intro">
            ${I.arrowLeft}
          </a>
          <div class="topbar__crumbs">
            <div class="topbar__session-label">Session 1 of 3: Learn</div>
            <div class="topbar__topic-title">${T.title}</div>
          </div>
          <div class="topbar__right">
            <div class="topbar__streak">
              <span class="topbar__streak-icon">🔥</span>
              <span>1 day streak</span>
            </div>
            <div class="topbar__avatar">
              <div class="topbar__avatar-circle">AB</div>
              <span class="topbar__avatar-chev">${I.chevDown}</span>
            </div>
          </div>
        </header>
      `;
    }
  }

  /* ============================================================
     SHARED COMPONENTS
     ============================================================ */

  function renderExamEdge(e) {
    if (!e) return '';
    return `
      <div class="exam-edge">
        <div class="exam-edge__star">⭐</div>
        <div class="exam-edge__body">
          <div class="exam-edge__label">Exam edge</div>
          <div class="exam-edge__title">${e.title}</div>
          <div class="exam-edge__text">${e.text}</div>
        </div>
      </div>
    `;
  }

  function renderKeyTakeaway(k) {
    if (!k) return '';
    return `
      <div class="callout callout--success">
        <div class="callout__icon">${I.bulb}</div>
        <div class="callout__body">
          <div class="callout__title">${k.title}</div>
          <div class="callout__text">${k.text}</div>
        </div>
      </div>
    `;
  }

  /**
   * Coloured topic banner used on cause cards (2 & 3).
   * Anchors the page visually with the branch colour from card 1.
   */
  function renderCauseBanner(tone, label) {
    return `
      <div class="cause-banner cause-banner--${tone}">
        <div class="cause-banner__pill">
          <span class="cause-banner__pill-dot"></span>
          <span>${label}</span>
        </div>
      </div>
    `;
  }

  /* ============================================================
     INTRO PAGE
     ============================================================ */

  function renderIntro() {
    const stages = T.intro.stages.map(s => {
      const cls = 'stage'
                + (s.state === 'current'   ? ' is-current'   : '')
                + (s.state === 'available' ? ' is-available' : '')
                + (s.state === 'locked'    ? ' is-locked'    : '');
      const inner = `
        <div class="stage__num">${s.state === 'locked' ? I.lock : s.num}</div>
        <div class="stage__body">
          <div class="stage__name">${s.name}</div>
          <div class="stage__sub">${s.sub}</div>
          ${s.state === 'current' ? '<span class="stage__chip">Current</span>' : ''}
          ${s.state === 'available' ? '<span class="stage__chip stage__chip--available">Open →</span>' : ''}
        </div>
      `;
      return s.href && s.state !== 'locked'
        ? `<a href="${s.href}" class="${cls}">${inner}</a>`
        : `<div class="${cls}">${inner}</div>`;
    }).join('');

    return `
      <div class="page">
        <div>
          <div class="card intro-card">
            <div class="row row--top">
              <div class="intro-card__text">
                <div class="card__step-label">${T.sessionLabel}</div>
                <h1 class="card__title card__title--lg">${T.title}</h1>
                <p class="card__lede">${T.intro.summary}</p>
              </div>
              <div class="illust-bars">${T.intro.heroKey && I[T.intro.heroKey] ? I[T.intro.heroKey] : I.heroBars}</div>
            </div>

            <div class="do-box">
              <div class="do-box__icon">${I.target}</div>
              <div>
                <div class="do-box__title">What you'll do in this session</div>
                <div class="do-box__sub">${T.intro.doInThis}</div>
              </div>
              <div class="do-box__checks">
                ${T.intro.outcomes.map(o => `
                  <div class="do-box__check">
                    <span class="check-icon">${I.check}</span>
                    <span>${o}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="callout callout--info">
              <div class="callout__icon">${I.info}</div>
              <div class="callout__body">
                <div class="callout__title">Tip</div>
                <div class="callout__text">${T.intro.tip}</div>
              </div>
            </div>
          </div>

          <div class="session-meta">
            <div class="session-meta__item">
              <div class="session-meta__icon">${I.clock}</div>
              <div>
                <div class="session-meta__label">Estimated time</div>
                <div class="session-meta__val">${T.estTime}</div>
              </div>
            </div>
            <div class="session-meta__item">
              <div class="session-meta__icon">${I.target}</div>
              <div>
                <div class="session-meta__label">Your goal</div>
                <div class="session-meta__val">${T.goal}</div>
              </div>
            </div>
            <div class="session-meta__cta">
              <button class="btn btn--primary btn--lg" data-action="start-session">
                Start session ${I.arrowRight}
              </button>
            </div>
          </div>
        </div>

        <aside class="right-rail">
          <div class="stages">${stages}</div>
        </aside>
      </div>
    `;
  }

  /* ============================================================
     CARD TEMPLATES
     ============================================================ */

  /* === Card 1: framing === */
  function renderCardFraming(c) {
    const diagram = c.diagramKey && I[c.diagramKey] ? I[c.diagramKey] : I.branchDiagram;
    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div class="framing-row">
        <div class="branch-callouts">
          ${c.branches.map((b, i) => `
            <div class="branch-cal branch-cal--${b.tone}" data-flap-id="branch-${i}">
              <div class="branch-cal__dot"></div>
              <div style="flex:1; min-width:0;">
                <div class="branch-cal__label">${b.label}</div>
                <div class="branch-cal__sub is-hidden">${b.sub}</div>
                <div class="branch-cal__hint">tap to recall</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="framing-diagram">${diagram}</div>
      </div>

      ${renderExamEdge(c.examEdge)}
      <div style="margin-top: var(--sp-4);">
        ${renderKeyTakeaway(c.keyTakeaway)}
      </div>
    `;
  }

  /* === Cards 2 & 3: cause (demand-pull / cost-push / generic component) === */
  function renderCardCause(c) {
    // Tone, banner, and diagram are now data-driven. Backward compat: if
    // legacy `c.diagram === 'demand-pull' | 'cost-push'` is present, infer.
    let tone, bannerLabel, diagram;
    if (c.tone || c.bannerLabel || c.diagramKey) {
      tone        = c.tone || 'blue';
      bannerLabel = c.bannerLabel || c.title;
      diagram     = c.diagramKey && I[c.diagramKey] ? I[c.diagramKey] : '';
    } else {
      // Legacy inflation cards
      tone        = c.diagram === 'demand-pull' ? 'green' : 'amber';
      bannerLabel = c.diagram === 'demand-pull' ? 'Type 1 · Demand-pull' : 'Type 2 · Cost-push';
      diagram     = c.diagram === 'demand-pull' ? I.adAsDemandPull : I.adAsCostPush;
    }
    const hallmarkAccent = `cause-col--hallmark-${tone === 'green' ? 'green' : tone}`;

    const headerLede = `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>
    `;

    const diagramFull = diagram ? `
      <div class="mech-diagram mech-diagram--wide">
        ${diagram}
        ${c.diagramCaption ? `<div class="mech-diagram__caption">${c.diagramCaption}</div>` : ''}
      </div>
    ` : '';

    // Causes and Hallmarks side-by-side below the diagram
    const causesHallmarks = `
      <div class="cause-twoup">
        <div class="cause-col cause-col--causes">
          <div class="cause-col__title">${c.causes.title}</div>
          <ul>${c.causes.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
        <div class="cause-col ${hallmarkAccent}">
          <div class="cause-col__title">${c.hallmarks.title}</div>
          <ul>${c.hallmarks.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      </div>
    `;

    const ukExamples = `
      <div class="uk-examples">
        <div class="uk-examples__flag">GB</div>
        <div>
          <div class="uk-examples__title">${c.ukExamples.title}</div>
          <div class="uk-examples__text">${c.ukExamples.text}</div>
        </div>
      </div>
    `;

    let bottomBox = '';
    if (c.policy) {
      bottomBox = `
        <div class="policy-box">
          <div class="policy-box__icon">🎯</div>
          <div>
            <div class="policy-box__title">${c.policy.title}</div>
            <div class="policy-box__text">${c.policy.text}</div>
          </div>
        </div>
      `;
    }
    if (c.dilemma) {
      bottomBox = `
        <div class="dilemma">
          <div class="dilemma__icon">⚠</div>
          <div class="dilemma__body">
            <div class="dilemma__title">${c.dilemma.title}</div>
            <div class="dilemma__lines">
              ${c.dilemma.lines.map(l => `<div class="dilemma__line">${l}</div>`).join('')}
            </div>
          </div>
        </div>
      `;
    }

    return `
      ${renderCauseBanner(tone, bannerLabel)}
      ${headerLede}
      ${diagramFull}
      ${causesHallmarks}
      ${ukExamples}
      ${renderExamEdge(c.examEdge)}
      ${bottomBox}
    `;
  }

  /* === Card 4: diagnose === */
  function renderCardDiagnose(c) {
    const tableRows = c.table.rows.map(row => `
      <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
    `).join('');

    const scenarios = c.scenarios.items.map((s, i) => `
      <div class="scenario scenario--${s.tone}" data-scenario-id="${i}">
        <div class="scenario__head">
          <div class="scenario__label">${s.label}</div>
        </div>
        <div class="scenario__text">${s.text}</div>
        <button class="scenario__reveal" data-action="reveal-scenario" data-scenario-target="${i}">
          <span class="scenario__reveal-icon">${I.eye}</span>
          <span>Make your call</span>
        </button>
        <div class="scenario__answer is-hidden" data-scenario-answer="${i}">
          <span class="scenario__arrow">→</span>
          <span>${s.answer}</span>
        </div>
      </div>
    `).join('');

    // If the card provides a diagramKey, show the diagram instead of the table.
    // (Diagram-first beats table-first for visual learners — table optional.)
    const topSection = c.diagramKey && I[c.diagramKey]
      ? `
        <div class="mech-diagram mech-diagram--wide">
          ${I[c.diagramKey]}
          ${c.diagramCaption ? `<div class="mech-diagram__caption">${c.diagramCaption}</div>` : ''}
        </div>
      `
      : `
        <table class="diag-table">
          <thead>
            <tr>${c.table.headers.map(h => `<th>${h}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      `;

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      ${topSection}

      <div class="scenarios">
        <div class="scenarios__title">${c.scenarios.title}</div>
        <div class="scenarios__grid">
          ${scenarios}
        </div>
      </div>

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* === Card 5: puzzle === */
  function renderCardPuzzle(c) {
    // Chart is data-driven: card specifies chartKey, fallback to qeChart
    const chart = c.chartKey && I[c.chartKey] ? I[c.chartKey] : I.qeChart;

    // Default reveal content if data.js doesn't provide one
    const reveal = c.puzzle.reveal || {
      title: 'Spoiler — four reasons',
      text: "Money creation didn't translate into rising prices because of <strong>velocity, output gaps, anchored expectations,</strong> and <strong>credibility</strong>. The next card unpacks each one.",
      hints: ['Velocity', 'Output gap', 'Expectations', 'Credibility']
    };

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div class="classical-box">
        <div class="classical-box__head">
          <span class="classical-box__icon">📐</span>
          <span class="classical-box__title">${c.classical.title}</span>
        </div>
        <div class="classical-formula">
          <div class="classical-formula__main">${c.classical.formula}</div>
          <div class="classical-formula__sub">${c.classical.formulaSub}</div>
        </div>
        <div class="classical-quote">${c.classical.quote}</div>
        <div class="classical-examples">${c.classical.examples}</div>
      </div>

      <div class="puzzle-visual">
        <div class="puzzle-visual__chart">${chart}</div>
        <div class="puzzle-visual__caption">${c.puzzle.chartCaption}</div>
        <div class="puzzle-bullets">
          ${c.puzzle.bullets.map(b => `<div class="puzzle-bullet">${b}</div>`).join('')}
        </div>

        <button class="cliffhanger" data-action="reveal-cliffhanger" type="button" aria-expanded="false">
          ${c.puzzle.cliffhanger}
        </button>

        <div class="cliffhanger-reveal" data-cliffhanger-panel>
          <div class="cliffhanger-reveal__title">${reveal.title}</div>
          <div class="cliffhanger-reveal__text">${reveal.text}</div>
          <div class="cliffhanger-reveal__hints">
            ${reveal.hints.map(h => `<span class="cliffhanger-reveal__hint">${h}</span>`).join('')}
          </div>
          <div class="cliffhanger-reveal__cta">Tap "Next card" to dive in</div>
        </div>
      </div>

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* === Card 6: mechanisms (2x2) === */
  function renderCardMechanisms(c) {
    const tiles = c.mechanisms.map(m => `
      <div class="mech-tile mech-tile--${m.tone}">
        <div class="mech-tile__head">
          <div class="mech-tile__num">${m.num}</div>
          <div class="mech-tile__title">${m.title}</div>
        </div>
        <div class="mech-tile__text">${m.text}</div>
      </div>
    `).join('');

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div class="mech-grid">${tiles}</div>

      ${renderExamEdge(c.examEdge)}

      <div class="connection-box">
        <div class="connection-box__icon">🎯</div>
        <div>
          <div class="connection-box__title">${c.connection.title}</div>
          <div class="connection-box__text">${c.connection.text}</div>
        </div>
      </div>
    `;
  }

  /* === Card 5 (merged): monetary theory + QE === */
  function renderCardMonetary(c) {
    const tiles = c.mechanisms.map(m => `
      <div class="mech-tile mech-tile--${m.tone}">
        <div class="mech-tile__head">
          <div class="mech-tile__num">${m.num}</div>
          <div class="mech-tile__title">${m.title}</div>
        </div>
        <div class="mech-tile__text">${m.text}</div>
      </div>
    `).join('');

    const bullets = c.puzzle.bullets.map(b => `<div class="puzzle-bullet">${b}</div>`).join('');

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div class="classical-box">
        <div class="classical-box__head">
          <span class="classical-box__icon">📐</span>
          <span class="classical-box__title">${c.classical.title}</span>
        </div>
        <div class="classical-formula">
          <div class="classical-formula__main">${c.classical.formula}</div>
          <div class="classical-formula__sub">${c.classical.formulaSub}</div>
        </div>
        <div class="classical-quote">${c.classical.quote}</div>
        <div class="classical-examples">${c.classical.examples}</div>
      </div>

      <div class="puzzle-bullets" style="margin: var(--sp-5) 0;">${bullets}</div>

      <div class="mech-grid">${tiles}</div>

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* === Card 6 (new): impacts of inflation === */
  function renderCardImpacts(c) {
    const groups = c.groups.map(g => `
      <div class="impact-group impact-group--${g.tone}">
        <div class="impact-group__head">
          <span class="impact-group__icon">${g.icon}</span>
          <span class="impact-group__label">${g.label}</span>
        </div>
        <ul class="impact-group__list">
          ${g.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    const wItems = c.winnersLosers.winners.items.map(i => `<li>${i}</li>`).join('');
    const lItems = c.winnersLosers.losers.items.map(i => `<li>${i}</li>`).join('');

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div class="impact-groups">${groups}</div>

      <div class="wl-row">
        <div class="wl-panel wl-panel--win">
          <div class="wl-panel__head">
            <span class="wl-panel__icon">↑</span>
            <span class="wl-panel__label">${c.winnersLosers.winners.label}</span>
          </div>
          <ul class="wl-panel__list">${wItems}</ul>
        </div>
        <div class="wl-panel wl-panel--lose">
          <div class="wl-panel__head">
            <span class="wl-panel__icon">↓</span>
            <span class="wl-panel__label">${c.winnersLosers.losers.label}</span>
          </div>
          <ul class="wl-panel__list">${lItems}</ul>
        </div>
      </div>

      <div class="callout callout--info" style="margin-top: var(--sp-5); margin-bottom: var(--sp-5);">
        <div class="callout__icon">📊</div>
        <div class="callout__body">
          <div class="callout__title">Example</div>
          <div class="callout__text">${c.example}</div>
        </div>
      </div>

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* === Card 7: deflation === */
  function renderCardDeflation(c) {
    const mechs = c.mechanisms.map((m, i) => `
      <div class="def-mech-row" data-action="reveal-deflation" data-deflation-id="${i}">
        <div class="def-mech-row__icon">${m.icon}</div>
        <div style="flex:1; min-width:0;">
          <div class="def-mech-row__title">${m.title}</div>
          <div class="def-mech-row__text is-hidden">${m.text}</div>
          <div class="def-mech-row__hint">tap to recall</div>
        </div>
      </div>
    `).join('');

    const examples = c.examples.items.map(e => `
      <div class="def-examples__item">
        <span class="def-examples__period">${e.period}</span> — ${e.text}
      </div>
    `).join('');

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div style="margin-bottom: var(--sp-3); display: flex; align-items: center; gap: var(--sp-2);">
        <span style="display: inline-block; width: 4px; height: 18px; background: var(--econ-rose); border-radius: 2px;"></span>
        <span style="font-size: var(--fs-md); font-weight: var(--fw-semi); color: var(--econ-gray-900);">${c.mechanismsTitle}</span>
      </div>
      <div class="def-mechs">${mechs}</div>

      <div class="def-examples">
        <div class="def-examples__icon">📚</div>
        <div class="def-examples__body">
          <div class="def-examples__title">${c.examples.title}</div>
          <div class="def-examples__list">${examples}</div>
        </div>
      </div>

      ${renderExamEdge(c.examEdge)}

      ${c.bridge ? `<div class="bridge"><div class="bridge__icon">→</div><div><div class="bridge__title">${c.bridge.title}</div><div class="bridge__text">${c.bridge.text}</div></div></div>` : ''}
    `;
  }

  /* === AD-INTERACTIVE template: full-width diagram + horizontal tabs + content panel ===
       Diagram is data-driven via diagramKey; defaults to adInteractive.
       Layout: diagram (full-width), tabs strip, then active tab's panel. */
  function renderCardAdInteractive(c) {
    const diagram = c.diagramKey && I[c.diagramKey] ? I[c.diagramKey] : I.adInteractive;
    const tabs = c.steps.map((s, i) => `
      <button class="ad-tab ${i === 0 ? 'is-active' : ''}" type="button"
              data-action="ad-step" data-ad-state="${s.key}">
        <span class="ad-tab__num">${i + 1}</span>
        <span class="ad-tab__label">${s.label}</span>
      </button>
    `).join('');

    const panels = c.steps.map((s, i) => `
      <div class="ad-panel ${i === 0 ? 'is-active' : ''}" data-panel-key="${s.key}">
        <div class="ad-panel__title">${s.label}</div>
        <div class="ad-panel__body">${s.text}</div>
      </div>
    `).join('');

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div class="ad-interactive">
        <div class="ad-interactive__diagram show-base" data-ad-state="base">
          ${diagram}
        </div>
        <div class="ad-interactive__tabs">
          ${tabs}
        </div>
        <div class="ad-interactive__panels">
          ${panels}
        </div>
      </div>

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* === TRANSMISSION-CHAIN template: 5 channels, tap to expand chain ===
       Action on left, channel pills in middle, outcome on right. Tapping
       a channel reveals its causal chain below + highlights the path. */
  function renderCardTransmissionChain(c) {
    const channels = c.channels.map((ch, i) => `
      <button class="tc-channel tc-channel--${ch.tone} ${i === 0 ? 'is-active' : ''}"
              type="button" data-action="tc-channel" data-channel-key="${ch.key}">
        <span class="tc-channel__dot"></span>
        <span class="tc-channel__label">${ch.label}</span>
        <span class="tc-channel__chev">▸</span>
      </button>
    `).join('');

    const panels = c.channels.map((ch, i) => `
      <div class="tc-panel tc-panel--${ch.tone} ${i === 0 ? 'is-active' : ''}" data-panel-key="${ch.key}">
        <div class="tc-panel__header">
          <div class="tc-panel__title">${ch.label} channel</div>
        </div>
        <ol class="tc-chain">
          ${ch.chain.map(step => `<li class="tc-chain__step">${step}</li>`).join('')}
        </ol>
        ${ch.micro ? `<div class="tc-panel__micro"><strong>When it's strong:</strong> ${ch.micro}</div>` : ''}
      </div>
    `).join('');

    return `
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div class="tc-flow">
        <div class="tc-action">
          <div class="tc-action__eyebrow">ACTION</div>
          <div class="tc-action__text">${c.action}</div>
        </div>
        <div class="tc-channels">
          ${channels}
        </div>
        <div class="tc-outcome">
          <div class="tc-outcome__eyebrow">OUTCOME</div>
          <div class="tc-outcome__text">${c.outcome}</div>
        </div>
      </div>

      <div class="tc-panels">
        ${panels}
      </div>

      ${renderExamEdge(c.examEdge)}
    `;
  }

  /* === Paired template: two components side-by-side (e.g. Gov + Net Trade) === */
  function renderCardPaired(c) {
    const banner = c.bannerLabel
      ? renderCauseBanner(c.bannerTone || 'blue', c.bannerLabel)
      : '';

    const pairs = c.pairs.map(p => `
      <div class="paired-half paired-half--${p.tone}">
        <div class="paired-half__label">${p.label}</div>
        <div class="paired-half__drivers">
          <ul>${p.drivers.map(d => `<li>${d}</li>`).join('')}</ul>
        </div>
        <div class="paired-half__example">
          <span class="paired-half__example-flag">GB</span>
          <div>${p.example}</div>
        </div>
      </div>
    `).join('');

    let bottomBox = '';
    if (c.policy) {
      bottomBox = `
        <div class="policy-box">
          <div class="policy-box__icon">🎯</div>
          <div>
            <div class="policy-box__title">${c.policy.title}</div>
            <div class="policy-box__text">${c.policy.text}</div>
          </div>
        </div>
      `;
    }

    return `
      ${banner}
      <div class="card__step-label">${c.stepLabel}</div>
      <h1 class="card__title">${c.title}</h1>
      <p class="card__lede">${c.lede}</p>

      <div class="paired-grid">${pairs}</div>

      ${renderExamEdge(c.examEdge)}
      ${bottomBox}
    `;
  }

  /* === full card view === */
  function renderCard(idx) {
    const c = T.cards[idx];
    const pct = Math.round(((idx + 1) / T.cards.length) * 100);

    let body = '';
    switch (c.template) {
      case 'framing':            body = renderCardFraming(c);          break;
      case 'cause':              body = renderCardCause(c);            break;
      case 'diagnose':           body = renderCardDiagnose(c);         break;
      case 'puzzle':             body = renderCardPuzzle(c);           break;
      case 'mechanisms':         body = renderCardMechanisms(c);       break;
      case 'monetary':           body = renderCardMonetary(c);         break;
      case 'impacts':            body = renderCardImpacts(c);          break;
      case 'deflation':          body = renderCardDeflation(c);        break;
      case 'paired':             body = renderCardPaired(c);           break;
      case 'ad-interactive':     body = renderCardAdInteractive(c);    break;
      case 'transmission-chain': body = renderCardTransmissionChain(c); break;
    }

    const isLast = idx === T.cards.length - 1;
    const isFirst = idx === 0;

    return `
      <div class="page">
        <div>
          <div class="progress">
            <span class="progress__label">Progress</span>
            <div class="progress__bar"><div class="progress__fill" style="width: ${pct}%;"></div></div>
            <span class="progress__pct">${pct}%</span>
            <button class="progress__exit" data-action="back-to-intro">${I.exit} Exit session</button>
          </div>

          <div class="card">
            ${body}

            <div class="card-foot">
              <button class="btn btn--ghost" data-action="prev" ${isFirst ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
                ${I.arrowLeft} Previous
              </button>
              <span class="card-foot__counter">Card ${idx + 1} of ${T.cards.length}</span>
              <button class="btn btn--primary" data-action="next" data-next-button>
                ${isLast ? 'Start quick check' : 'Next card'} ${I.arrowRight}
              </button>
            </div>
          </div>
        </div>

        <aside class="right-rail">
          ${renderCardsRail(idx)}
        </aside>
      </div>
    `;
  }

  /* ============================================================
     RIGHT RAIL — session progress, cards list, download deck
     ============================================================ */

  function renderCardsRail(currentIdx) {
    const cardsList = T.cards.map((c, i) => {
      const status = i < currentIdx ? 'done' : (i === currentIdx ? 'current' : '');
      return `
        <div class="cards-list__item is-${status}" data-card-idx="${i}">
          <div class="cards-list__num">${i < currentIdx ? I.check : (i + 1)}</div>
          <div class="cards-list__body">
            <div class="cards-list__name">${cardShortName(c.id)}</div>
            ${i === currentIdx ? '<span class="cards-list__chip">Current</span>' : ''}
          </div>
        </div>
      `;
    }).join('');

    const lastCard = T.cards[T.cards.length - 1];
    const quizHref = lastCard && lastCard.quizCta ? lastCard.quizCta.href : null;
    const quizEntry = quizHref ? `
      <a href="${quizHref}" class="cards-list__item cards-list__item--quiz">
        <div class="cards-list__num">★</div>
        <div class="cards-list__body">
          <div class="cards-list__name">Quiz</div>
        </div>
      </a>` : '';

    return `
      <div class="rail-card">
        <div class="rail-card__title">Topic progress</div>
        <div class="rail-card__sub">Step 1 of 3: Learn</div>
        ${renderSessionDots(currentIdx)}
      </div>

      <div class="rail-card">
        <div class="rail-card__title" style="margin-bottom: var(--sp-3);">Cards</div>
        <div class="cards-list">${cardsList}${quizEntry}</div>
      </div>

      <div class="deck-download">
        <div class="deck-download__head">
          <div class="deck-download__icon">📄</div>
          <div>
            <div class="deck-download__title">Want more depth?</div>
            <div class="deck-download__sub">Download the full topic deck</div>
          </div>
        </div>
        <button class="deck-download__btn" data-action="download-deck">
          📥 Download PDF
        </button>
      </div>
    `;
  }

  function renderSessionDots(currentIdx) {
    return `
      <div class="session-dots">
        <div class="session-dot is-current">1</div>
        <div class="session-line"></div>
        <div class="session-dot">2</div>
        <div class="session-line"></div>
        <div class="session-dot">3</div>
      </div>
    `;
  }

  function cardShortName(id) {
    return {
      'framing':       'Inflation has many causes',
      'demand-pull':   'Demand-pull',
      'cost-push':     'Cost-push',
      'diagnose':      'Spotting the difference',
      'monetary':      'Money supply & QE',
      'impacts':       'Impacts of inflation',
      'deflation':     'Deflation'
    }[id] || id;
  }

  /* ============================================================
     RENDER & EVENTS
     ============================================================ */

  function render() {
    const inner = currentView === 'intro' ? renderIntro() : renderCard(currentView);
    root.innerHTML = renderShell(inner);
    bindEvents();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function bindEvents() {
    root.addEventListener('click', handleClick);
  }

  function handleClick(e) {
    // Branch-cal flap toggle (card 1) — match anywhere inside the branch
    const branchEl = e.target.closest('.branch-cal[data-flap-id]');
    if (branchEl) {
      e.preventDefault();
      const sub  = branchEl.querySelector('.branch-cal__sub');
      const hint = branchEl.querySelector('.branch-cal__hint');
      if (sub.classList.contains('is-hidden')) {
        sub.classList.remove('is-hidden');
        branchEl.classList.add('is-open');
        if (hint) hint.style.display = 'none';
      } else {
        sub.classList.add('is-hidden');
        branchEl.classList.remove('is-open');
        if (hint) hint.style.display = '';
      }
      return;
    }

    const target = e.target.closest('[data-action], [data-card-idx]');
    if (!target) return;
    e.preventDefault();

    const action  = target.dataset.action;
    const cardIdx = target.dataset.cardIdx;

    if (action === 'start-session') {
      currentView = 0;
      render();
    } else if (action === 'back-to-intro') {
      currentView = 'intro';
      render();
    } else if (action === 'next') {
      if (currentView === T.cards.length - 1) {
        const last = T.cards[currentView];
        if (last.quizCta && last.quizCta.href) {
          window.location.href = last.quizCta.href;
        } else {
          alert('Quick Check coming next session 🎯');
        }
      } else {
        currentView = currentView + 1;
        render();
      }
    } else if (action === 'prev') {
      if (currentView > 0) {
        currentView = currentView - 1;
        render();
      }
    } else if (action === 'download-deck') {
      alert('PDF deck download coming soon 📄');
    } else if (action === 'reveal-scenario') {
      // Card 4 diagnose: show the answer for this scenario, hide the button
      const id = target.dataset.scenarioTarget;
      const answer = root.querySelector(`[data-scenario-answer="${id}"]`);
      if (answer) answer.classList.remove('is-hidden');
      target.classList.add('is-used');
    } else if (action === 'reveal-cliffhanger') {
      // Card 5: animate the "Why?" reveal panel and pulse the next button
      const panel = root.querySelector('[data-cliffhanger-panel]');
      if (panel) panel.classList.add('is-revealed');
      target.classList.add('is-revealed');
      target.setAttribute('aria-expanded', 'true');
      const nextBtn = root.querySelector('[data-next-button]');
      if (nextBtn) nextBtn.classList.add('btn--pulse');
    } else if (action === 'reveal-deflation') {
      // Card 7: open or close a deflation flap
      const text = target.querySelector('.def-mech-row__text');
      if (!text) return;
      if (text.classList.contains('is-hidden')) {
        text.classList.remove('is-hidden');
        target.classList.add('is-open');
      } else {
        text.classList.add('is-hidden');
        target.classList.remove('is-open');
      }
    } else if (action === 'ad-step') {
      // AD interactive: change diagram state, switch active tab, swap panel
      const newState = target.dataset.adState;

      // Update the diagram container class
      const diagram = root.querySelector('.ad-interactive__diagram');
      if (diagram) {
        diagram.classList.remove('show-base', 'show-extension', 'show-shift');
        diagram.classList.add('show-' + newState);
        diagram.dataset.adState = newState;
      }

      // Toggle which tab is active
      root.querySelectorAll('.ad-tab').forEach(tab => {
        tab.classList.toggle('is-active', tab.dataset.adState === newState);
      });

      // Swap the content panel
      root.querySelectorAll('.ad-panel').forEach(panel => {
        panel.classList.toggle('is-active', panel.dataset.panelKey === newState);
      });
    } else if (action === 'tc-channel') {
      // Transmission chain: highlight the chosen channel and reveal its panel
      const key = target.dataset.channelKey;
      root.querySelectorAll('.tc-channel').forEach(ch => {
        ch.classList.toggle('is-active', ch.dataset.channelKey === key);
      });
      root.querySelectorAll('.tc-panel').forEach(p => {
        p.classList.toggle('is-active', p.dataset.panelKey === key);
      });
    } else if (cardIdx !== undefined) {
      currentView = parseInt(cardIdx, 10);
      render();
    }
  }

  render();
})();
