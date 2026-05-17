window.ECONOS_TOPIC = {
  id: 'balance_of_payments',
  topicNum: '1.7',
  theme: 'Theme 4 \xb7 A Global Perspective',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Balance of Payments',
  estTime: '7-9 minutes',
  goal: 'Understand the structure of the balance of payments, the meaning of current account deficits and surpluses, and the policies available to correct imbalances.',

  intro: {
    heroKey: 'heroTrade',
    summary: 'The balance of payments records every economic transaction between a country and the rest of the world. The current account (trade in goods and services, income flows, transfers) is the most exam-relevant component. Persistent deficits or surpluses raise policy questions about competitiveness, exchange rates, and macro balance.',
    doInThis: 'Content coming soon — this topic will cover the components of the BoP, causes of current account deficits and surpluses, and the policy toolkit for correction (expenditure-switching vs expenditure-reducing).',
    outcomes: [
      'Identify the four components of the current account: trade in goods, trade in services, primary income, secondary income',
      'Explain the causes of a current account deficit or surplus',
      'Analyse the consequences of persistent current account imbalances',
      'Evaluate the policies available to correct imbalances'
    ],
    tip: 'Current account = trade balance + primary income (investment income) + secondary income (transfers). A deficit must be financed by capital inflows or reserves. Persistent deficits can be sustainable (UK historical pattern) or signal structural weakness — context matters.',
    stages: [
      { num: 1, name: 'Learn it', sub: 'Content coming soon', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },

  cards: [
    {
      id: 'balance_of_payments_intro',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 1',
      title: 'Balance of payments: coming soon',
      lede: 'This topic is under construction. Full content covering BoP structure, current account analysis, and correction policies will be added shortly.',
      branches: [
        { tone: 'blue',   label: 'BoP structure',          sub: 'Current account + capital account + financial account. By identity, the BoP must balance overall — deficits in one section are matched elsewhere.' },
        { tone: 'amber',  label: 'Current account deficit', sub: 'Imports > exports. Financed by capital inflows or reserve drawdown. May reflect strong domestic demand, weak competitiveness, or both.' },
        { tone: 'green',  label: 'Expenditure-switching',   sub: 'Policies that redirect demand from imports to domestic goods: depreciation, tariffs (limited under WTO), supply-side competitiveness reforms.' },
        { tone: 'rose',   label: 'Expenditure-reducing',    sub: 'Policies that reduce overall demand: fiscal contraction, monetary tightening. Reduces imports but costs domestic growth.' }
      ],
      body: 'Full content for this topic is being developed. Key concepts: components of the BoP; UK current account deficit (~4% of GDP) and its causes; sustainability vs unsustainability of deficits; expenditure-switching (depreciation, tariffs) vs expenditure-reducing (fiscal/monetary contraction) policies; the J-curve effect; links to exchange rates (1.8) and international competitiveness (1.9).',
      examEdge: 'A persistent current account deficit is NOT automatically a problem. The UK has run deficits for decades while remaining a stable advanced economy. The deficit is sustainable as long as foreign investors are willing to fund it (via capital account surplus). Problems arise when capital flows reverse (sudden stops) — usually triggered by loss of confidence in fiscal sustainability or exchange rate.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }
  ]
};
