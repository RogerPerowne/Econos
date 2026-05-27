/* ============================================================
   ECONOS – Link It · Make the Judgement station data
   Factors of Production: judge the retraining-and-output claim
   ============================================================ */

window.ECONOS_LINK_JUDGE = {
  topic:       'Factors of Production',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'Make the Judgement',
  instruction: 'Use the evidence you have built so far to complete the final judgement. Choose the strongest phrase for each blank.',
  nextUrl:     TopicLoader.buildUrl('link_complete.html'),

  stations: [
    { id: 'context', label: 'Use the context', href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain', label: 'Build the chain', href: TopicLoader.buildUrl('link_chain.html') },
    { id: 'diagram', label: 'Diagram connector', href: TopicLoader.buildUrl('link_diagram.html') },
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
      id: 'retraining-judgement',
      claim: {
        icon:   '🎓',
        prompt: 'Policy claim',
        text:   'A large UK adult retraining scheme would substantially raise real GDP by improving the mobility and quality of the labour factor of production.'
      },
      evidenceCards: [
        { id: 'context', tone: 'green',  icon: '🔍', title: 'Context',       text: '700,000 missing workers; 2.8m long-term sick; persistent care/HGV vacancies; apprenticeship starts −30%; capital investment 25% below G7.' },
        { id: 'chain',   tone: 'amber',  icon: '🔗', title: 'Chain',         text: 'Retraining → higher labour quality and occupational mobility → workers reach shortage sectors → LRAS shifts right → output rises.' },
        { id: 'diagram', tone: 'purple', icon: '📈', title: 'Diagram',       text: 'LRAS shifts right from LRAS₁ to LRAS₂; real output rises Y₁ → Y₂, price level falls P₁ → P₂.' },
        { id: 'depends', tone: 'blue',   icon: '⚖️', title: 'It depends on', text: 'Effectiveness depends on skills-demand match, complementary capital investment, and geographic mobility (housing/transport).' }
      ],
      cloze: 'A large adult retraining scheme raises the [1] of the UK labour force by upgrading workers\' skills and improving [2] mobility between sectors. As displaced workers gain skills relevant to shortage occupations (care, HGV driving, construction), they can move into vacancies that were previously unfillable. The economy\'s productive capacity rises, so LRAS shifts to the [3] from LRAS₁ to LRAS₂. At the new long-run equilibrium, real output [4] from Y₁ to Y₂ and the price level [5]. The output gain is largest when training matches actual [6] and is paired with [7] capital investment. However, the policy is less effective if [8] mobility is constrained by high housing costs in productive regions, because retrained workers cannot reach the jobs. The strongest judgement is that the scheme materially raises GDP only when training, capital and housing reform act together.',
      blanks: [
        { id: 1, options: [
            { id: 'b1-quality',  text: 'quality',  correct: true  },
            { id: 'b1-quantity', text: 'quantity', correct: false },
            { id: 'b1-price',    text: 'price',    correct: false },
            { id: 'b1-cost',     text: 'cost',     correct: false }
          ] },
        { id: 2, options: [
            { id: 'b2-occ',  text: 'occupational',  correct: true  },
            { id: 'b2-geo',  text: 'geographic',    correct: false },
            { id: 'b2-fin',  text: 'financial',     correct: false },
            { id: 'b2-leg',  text: 'legal',         correct: false }
          ] },
        { id: 3, options: [
            { id: 'b3-right', text: 'right', correct: true  },
            { id: 'b3-left',  text: 'left',  correct: false },
            { id: 'b3-up',    text: 'up',    correct: false },
            { id: 'b3-down',  text: 'down',  correct: false }
          ] },
        { id: 4, options: [
            { id: 'b4-rises',  text: 'rises',           correct: true  },
            { id: 'b4-falls',  text: 'falls',           correct: false },
            { id: 'b4-flat',   text: 'remains flat',    correct: false },
            { id: 'b4-indet',  text: 'becomes indeterminate', correct: false }
          ] },
        { id: 5, options: [
            { id: 'b5-falls',  text: 'falls',  correct: true  },
            { id: 'b5-rises',  text: 'rises',  correct: false },
            { id: 'b5-flat',   text: 'is unchanged', correct: false },
            { id: 'b5-doubles', text: 'doubles', correct: false }
          ] },
        { id: 6, options: [
            { id: 'b6-demand', text: 'employer demand for skills', correct: true  },
            { id: 'b6-supply', text: 'consumer demand for goods',  correct: false },
            { id: 'b6-prices', text: 'general price inflation',    correct: false },
            { id: 'b6-rates',  text: 'interest rates',             correct: false }
          ] },
        { id: 7, options: [
            { id: 'b7-comp',   text: 'complementary',  correct: true  },
            { id: 'b7-sub',    text: 'substitute',     correct: false },
            { id: 'b7-zero',   text: 'zero',           correct: false },
            { id: 'b7-foreign',text: 'foreign-only',   correct: false }
          ] },
        { id: 8, options: [
            { id: 'b8-geo',    text: 'geographic',  correct: true  },
            { id: 'b8-occ',    text: 'occupational',correct: false },
            { id: 'b8-fin',    text: 'financial',   correct: false },
            { id: 'b8-cap',    text: 'capital',     correct: false }
          ] }
      ],
      overallPosition: {
        prompt: 'Overall position',
        options: [
          { id: 'op-always', text: 'Retraining always raises GDP regardless of other conditions',                                                  correct: false },
          { id: 'op-cond',   text: 'Retraining raises GDP when training matches employer demand and is paired with capital investment and housing reform', correct: true  },
          { id: 'op-fall',   text: 'Retraining reduces GDP because it pulls workers out of productive jobs',                                       correct: false },
          { id: 'op-only',   text: 'Geographic mobility is the only thing that matters',                                                           correct: false }
        ]
      },
      examBridge: '"A large UK adult retraining scheme raises labour quality and occupational mobility, shifting LRAS right and lifting real output. The 700,000 missing-worker gap and persistent shortages in care, HGV driving and construction show there is room for the policy to bite. However, the GDP gain depends on whether training matches employer demand, whether complementary capital investment accompanies it, and whether geographic mobility (constrained by housing costs in productive regions) lets retrained workers reach the jobs. The OBR\'s modest 60,000-person estimate for childcare expansion suggests individual mobility levers are incremental – a substantial GDP gain requires several supply-side policies acting together."'
    }
  ]
};
