/* ============================================================
   ECONOS — Link It · Make the Judgement station data
   Information Gaps: synthesise into an exam-quality judgement
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Information Gaps',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'extract', label: 'Read the extract', href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on', href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge', label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html') }
  ],
  currentStationIdx: 4,

  wgll: [
    { icon: '🎯', text: 'Take a clear position'  },
    { icon: '🔗', text: 'Use the mechanism'       },
    { icon: '➕', text: 'Add a condition'         },
    { icon: '💬', text: 'Explain the limitation'  }
  ],

  scenarios: [
    {
      id: 'bnpl-disclosure-judgement',
      claim: {
        icon:   '💳',
        prompt: 'Policy claim',
        text:   'Mandatory cost disclosure is the most effective policy for correcting information gaps in the UK Buy Now Pay Later market.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '27% of UK adults used BNPL in 2023; 25% missed repayments; 11% faced debt collection. None of the major providers displayed APR at checkout (Which?, 2022).' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Hidden APR → consumers underestimate true cost → effective demand inflated from D_rational to D_biased → overconsumption at Q_biased → debt harm.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'FCA mandatory APR disclosure → demand shifts left from D_biased to D_rational → Q falls to Q_rational → debt harm reduced.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on salience of disclosure, consumer financial literacy, and whether present bias prevents consumers acting on information.' }
      ],
      cloze: 'Information gaps in the BNPL market inflate consumer demand from D_rational to D_biased because consumers [1] the true cost of credit when APR is not displayed at checkout. This creates [2] at Q_biased — where the marginal cost of the last unit of credit (hidden fees, debt collection) exceeds the marginal benefit. FCA mandatory disclosure corrects this by [3], shifting demand left toward D_rational. The policy works best when consumers [4] the disclosed information to compare costs — requiring [5] of the APR warning rather than burying it in terms and conditions. However, disclosure alone is insufficient when consumers suffer from [6]: even with full information, present bias leads them to discount future repayment costs. In this case, [7] or [8] may be more effective complementary instruments.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-under',   text: 'underestimate',       correct: true  },
            { id: 'b1-over',    text: 'overestimate',        correct: false },
            { id: 'b1-correct', text: 'correctly estimate',  correct: false },
            { id: 'b1-calc',    text: 'rationally calculate', correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-over',    text: 'overconsumption',      correct: true  },
            { id: 'b2-under',   text: 'underproduction',      correct: false },
            { id: 'b2-power',   text: 'market power',         correct: false },
            { id: 'b2-alloc',   text: 'allocative efficiency', correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-apr',     text: 'requiring APR to be displayed prominently at checkout', correct: true  },
            { id: 'b3-ban',     text: 'banning BNPL products',                                correct: false },
            { id: 'b3-sub',     text: 'subsidising repayments',                               correct: false },
            { id: 'b3-cap',     text: 'capping consumer spending',                            correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-process', text: 'can process and act on',              correct: true  },
            { id: 'b4-ignore',  text: 'ignore',                              correct: false },
            { id: 'b4-mis',     text: 'misinterpret in favour of borrowing', correct: false },
            { id: 'b4-del',     text: 'delegate to lenders',                 correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-clear',   text: 'clear and prominent display',  correct: true  },
            { id: 'b5-tech',    text: 'technical specification',       correct: false },
            { id: 'b5-vol',     text: 'voluntary industry code',       correct: false },
            { id: 'b5-news',    text: 'monthly newsletter',            correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-pb',      text: 'present bias',             correct: true  },
            { id: 'b6-rat',     text: 'perfect rationality',       correct: false },
            { id: 'b6-inc',     text: 'high income elasticity',    correct: false },
            { id: 'b6-sup',     text: 'supply-side constraints',   correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-cap',     text: 'an interest rate cap',         correct: true  },
            { id: 'b7-tax',     text: 'a higher BNPL tax',            correct: false },
            { id: 'b7-sub',     text: 'a subsidy for borrowers',      correct: false },
            { id: 'b7-dereg',   text: 'a deregulation of credit markets', correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-afford',  text: 'mandatory affordability checks', correct: true  },
            { id: 'b8-free',    text: 'free financial advice',          correct: false },
            { id: 'b8-corp',    text: 'reduced corporation tax',        correct: false },
            { id: 'b8-export',  text: 'export subsidies',               correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always',  text: 'Mandatory disclosure always fully corrects information gaps regardless of consumer behaviour',                         correct: false },
          { id: 'op-useful',  text: 'Mandatory disclosure is most effective when disclosures are prominent, consumers are financially literate, and alternatives are available', correct: true  },
          { id: 'op-ban',     text: 'BNPL market failures are best corrected by banning BNPL entirely',                                                   correct: false },
          { id: 'op-irrel',   text: 'Information gaps are irrelevant — consumers always make rational choices with or without disclosure',                 correct: false }
        ]
      },
      examBridge: '"BNPL information gaps inflated demand above the rational level: 25% of users missed repayments and 11% faced debt collection — overconsumption driven by hidden APR. FCA mandatory disclosure (2024) shifts D left toward D_rational by requiring APR at checkout. However, present bias means disclosure alone may not fully restore rational demand — consumers with strong present bias discount future repayment costs even when disclosed. Complementary policies (standardised £-cost warnings, affordability checks, credit union expansion) address the remaining behavioural and supply-side barriers."'
    }
  ]
};
