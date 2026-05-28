/* ============================================================
   articles/quiz.js — makes the "Check your knowledge" MCQs on
   static article pages interactive.

   The build emits each question as a card (data-qc-card) with option
   <button>s carrying data-correct, and a feedback block (correct
   answer + explanation) that is visible by default so the answer is
   reachable with JS off and indexable by search engines.

   On load this controller adds `is-quiz` to each card — which hides
   the feedback and arms the options. The verdict (green tick on the
   right answer, red cross on a wrong pick) and the explanation appear
   only AFTER the reader clicks an option; the card then locks.

   Classic IIFE, no dependencies.
   ============================================================ */
(function () {
  'use strict';

  function wire(card) {
    var opts = Array.prototype.slice.call(card.querySelectorAll('.article-qc__opt'));
    if (!opts.length) return;            // nothing to do for non-MCQ cards
    card.classList.add('is-quiz');

    opts.forEach(function (opt) {
      opt.addEventListener('click', function () {
        if (card.classList.contains('is-answered')) return;   // locked after first pick
        opt.classList.add('is-chosen');
        opts.forEach(function (o) {
          if (o.getAttribute('data-correct') === 'true') o.classList.add('is-correct');
          o.setAttribute('aria-disabled', 'true');
        });
        card.classList.add('is-answered');
      });
    });
  }

  function init() {
    document.querySelectorAll('[data-qc-card]').forEach(wire);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
