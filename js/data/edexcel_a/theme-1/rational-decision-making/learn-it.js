/* ============================================================
   ECONOS – content data for rational-decision-making (Edexcel 1.2.1)
   SCAFFOLD — the cover (intro) renders normally; `cards` is empty
   pending authored content (see the ChatGPT brief). Once the cards
   are written, drop them into the `cards` array, update the stages
   count + step labels, and add an ECONOS_QUIZ block at the foot.
   This header is hand-written (not the auto-PLACEHOLDER format) so
   the build generator will NOT overwrite it.
   ============================================================ */

window.ECONOS_TOPIC = {
  id: 'rational-decision-making',
  topicNum: '1.2.1',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Rational Decision Making',
  estTime: '4-6 minutes',
  goal: 'Understand the assumptions economists make about how agents choose: consumers maximise utility, firms maximise profit.',
  intro: {
    heroKey: 'heroScarcity',
    summary: 'Before studying how markets work, we set out the behaviour the models assume. Standard economic theory treats decision-makers as rational: consumers act to maximise their utility (satisfaction), and firms act to maximise their profit. These two assumptions underpin almost every demand and supply diagram you will meet.',
    doInThis: 'Work through the assumptions of rational decision making – what utility maximisation means for consumers, what profit maximisation means for firms, and why these simplifications are useful (and where they break down).',
    outcomes: [
      'State the rational decision-making assumption for consumers (utility maximisation)',
      'State the rational decision-making assumption for firms (profit maximisation)',
      'Explain why these assumptions are useful and recognise their limitations'
    ],
    tip: 'Rational here means consistent goal-seeking: consumers chase maximum utility, firms chase maximum profit. Behavioural economics (1.2.10) later challenges how realistic this is.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Coming soon', state: 'current' },
      { num: 2, name: 'Link it',  sub: 'Coming soon', state: 'locked' },
      { num: 3, name: 'Land it',  sub: 'Exam paper',  state: 'locked' }
    ]
  },
  /* TODO: authored cards drop in here. Keep the array empty until then
     so "Start session" no-ops rather than rendering a broken card. */
  cards: []
};
