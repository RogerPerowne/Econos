/* Quiz shell boot — loads the topic + quiz data files, then renders
   the intro view with sidebar / topbar / right-rail and wires the
   "Start the quiz" button. Lifted out of quiz.html's inline <script>
   so the CSP can drop script-src 'unsafe-inline'. */
(function () {
  var quizId = TopicLoader.getQuizSet() || 'main';
  var dataFile = 'quiz-' + quizId + '.js';
  TopicLoader.loadData(['topic.js', dataFile], function () { run(); }, 'this quiz');

  function run() {
    var I = window.ECONOS_ICONS;
    var Q = window.ECONOS_QUIZ;
    var T = window.ECONOS_TOPIC;
    var SHORT_NAMES = Q.shortNames || {};
    var topicHref = TopicLoader.routes.learn();

    var sidebar = Shell.renderSidebar({ activeNav: 'My topics' });
    var topbar  = Shell.renderTopbar({
      backUrl:      topicHref,
      backLabel:    'Topics',
      sessionLabel: Q.sessionLabel,
      topicTitle:   Q.title
    });

    var cardsList = T.cards.map(function (c, i) {
      var name = c.title || SHORT_NAMES[c.id] || c.id;
      return ''
        + '<a href="' + topicHref + '" class="cards-list__item is-done" data-card-idx="' + i + '">'
        +   '<div class="cards-list__num">' + I.check + '</div>'
        +   '<div class="cards-list__body"><div class="cards-list__name">' + name + '</div></div>'
        + '</a>';
    }).join('')
    + '<div class="cards-list__item is-current">'
    +   '<div class="cards-list__num">★</div>'
    +   '<div class="cards-list__body"><div class="cards-list__name">Quiz</div><span class="cards-list__chip">Current</span></div>'
    + '</div>';

    var sessionDots = ''
      + '<div class="session-dots">'
      +   '<div class="session-dot is-current">1</div>'
      +   '<div class="session-line"></div>'
      +   '<div class="session-dot">2</div>'
      +   '<div class="session-line"></div>'
      +   '<div class="session-dot">3</div>'
      + '</div>';

    var rail = ''
      + '<div class="right-rail">'
      +   Shell.renderStages()
      +   '<div class="rail-card">'
      +     '<div class="rail-card__title">Topic progress</div>'
      +     '<div class="rail-card__sub">Step 1 of 3: Learn</div>'
      +     sessionDots
      +   '</div>'
      +   '<div class="rail-card">'
      +     '<div class="rail-card__title" style="margin-bottom: var(--sp-3);">Cards</div>'
      +     '<div class="cards-list">' + cardsList + '</div>'
      +   '</div>'
      +   '<div class="deck-download">'
      +     '<div class="deck-download__head">'
      +       '<div class="deck-download__icon">📄</div>'
      +       '<div>'
      +         '<div class="deck-download__title">Want more depth?</div>'
      +         '<div class="deck-download__sub">Download the full topic deck</div>'
      +       '</div>'
      +     '</div>'
      +     '<button class="deck-download__btn">📥 Download PDF</button>'
      +   '</div>'
      + '</div>';

    var intro = ''
      + '<div id="quiz-root">'
      +   '<div class="quiz-hero">'
      +     '<div class="quiz-hero__eyebrow">Test yourself</div>'
      +     '<div class="quiz-hero__title">' + Q.title + '</div>'
      +     '<p class="quiz-hero__lede">' + (Q.lede || 'Exam-style questions across mixed formats – designed for the analysis and evaluation marks examiners reward.') + '</p>'
      +     '<div class="quiz-hero__meta">'
      +       '<div class="quiz-hero__meta-item"><span class="quiz-hero__meta-label">Questions</span><span class="quiz-hero__meta-value">' + Q.questions.length + '</span></div>'
      +       '<div class="quiz-hero__meta-item"><span class="quiz-hero__meta-label">Approx. time</span><span class="quiz-hero__meta-value">15–20 min</span></div>'
      +       '<div class="quiz-hero__meta-item"><span class="quiz-hero__meta-label">Formats</span><span class="quiz-hero__meta-value">10</span></div>'
      +     '</div>'
      +     '<button class="quiz-start-btn" id="quiz-start">Start the quiz →</button>'
      +   '</div>'
      + '</div>';

    var page = '<div class="page">' + intro + rail + '</div>';

    document.getElementById('app-root').innerHTML =
      '<div class="app">' + sidebar + '<div id="main-content" class="main" tabindex="-1" role="main">' + topbar + page + '</div></div>';

    document.getElementById('quiz-start').addEventListener('click', function () {
      window.bootQuiz(Q.questions, {
        title:        Q.title,
        subtitle:     Q.subtitle,
        backUrl:      Q.backUrl || topicHref,
        backLabel:    Q.backLabel,
        sessionLabel: Q.sessionLabel
      });
    });
  }
})();
