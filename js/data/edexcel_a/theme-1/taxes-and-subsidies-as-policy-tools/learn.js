window.ECONOS_TOPIC = {
  id: 'taxes-and-subsidies-as-policy-tools',
  topicNum: '4.1',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Taxes & Subsidies as Policy Tools',
  estTime: '7-9 minutes',
  goal: 'Move from the mechanics of indirect taxes and subsidies to the policy question: when are they justified, how do real UK schemes perform, and how do you evaluate them in a 25-mark essay?',
  intro: {
    heroKey: 'heroIntervention',
    summary: 'A tax or subsidy in an otherwise efficient market destroys welfare. The case for either rests on a market failure they correct – a negative externality (tax) or a positive externality / merit good (subsidy). Whether the policy works depends on elasticity, the size of the externality, and unintended consequences.',
    doInThis: 'Work through 3 cards covering the justification logic (Pigouvian taxes, merit-good subsidies), five UK case studies (sugar levy, fuel duty, tobacco, CAP, Contracts for Difference), and the three-axis evaluation framework you need for 25-mark essays. <strong>Mechanics and incidence are covered in topic 2.9 – Indirect Taxes & Subsidies.</strong>',
    outcomes: [
      'Identify when a tax or subsidy is justified by a market failure',
      'Evaluate five real UK schemes against the theory',
      'Structure a 25-mark essay around effectiveness, efficiency, and equity'
    ],
    tip: 'The decisive question for any tax or subsidy: does the welfare gain from correcting the market failure exceed the deadweight loss the policy itself creates? If yes → welfare rises. If no → welfare falls. Always identify the underlying market failure first.',
    stages: [
      { num: 1, name: 'Learn it', sub: '3 concept cards',               state: 'done',    href: TopicLoader.routes.learn()      },
      { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'locked'                                                 }
    ]
  },
  cards: [

    /* ── Card 1: When are taxes and subsidies justified? ─────────────── */
    {
      id: 'taxes_subsidies_policy_1',
      stepLabel: 'Learn: Step 1 of 3',
      title: 'When are taxes and subsidies justified?',
      tip: { icon: '⚖️', tone: 'blue', text: 'Taxes discourage socially harmful behaviour. Subsidies encourage socially beneficial behaviour. Both are tools for correcting a market failure – not instruments for raising revenue in an otherwise efficient market.' },
      flow: [
        { icon: '🏭', tone: 'rose',  title: 'Pigouvian tax',              sub: 'Tax equal to the marginal external cost (MEC). Shifts S up to the social-cost curve, moving the market to Q*. Examples: carbon tax, sugar levy, tobacco duty, congestion charge.' },
        { icon: '🎓', tone: 'green', title: 'Merit-good subsidy',          sub: 'Subsidy equal to the marginal external benefit (MEB). Shifts S down (lowers price) to reach socially optimal Q*. Examples: NHS, vaccinations, education, renewables.' }
      ],
      flowTitle: 'Pigouvian tax → internalises external costs           Subsidy → increases socially desirable activity',
      flowEmoji: '🛠️',
      causesLabel: 'Three justification logics',
      causesEmoji: '🧩',
      causesStyle: 'tinted-flat',
      causes: [
        {
          icon: '🏭', tone: 'rose', head: 'Negative externality – tax case',
          body: 'Pollution, smoking, sugar, traffic congestion. Private agents ignore costs imposed on others → market over-produces beyond the social optimum. A Pigouvian tax internalises the external cost so price reflects the full social cost.<br><strong style="font-size:11px;">Key terms:</strong> MPC, MEC, MSC, internalisation<br><span style="font-size:11px;color:#9F1239;">e.g. tobacco, sugar tax, carbon tax</span>'
        },
        {
          icon: '☀️', tone: 'green', head: 'Positive externality – subsidy case',
          body: 'Vaccinations protect others; education raises social productivity; renewable energy cuts shared climate risk. Private agents ignore benefits for others → market under-produces. A subsidy shifts the effective supply curve down to reach Q*.<br><strong style="font-size:11px;">Key terms:</strong> MPB, MEB, MSB<br><span style="font-size:11px;color:#065F46;">e.g. vaccines, education, renewable energy</span>'
        },
        {
          icon: '⭐', tone: 'amber', head: 'Merit good and underconsumption',
          body: 'Even without a clear externality, people under-consume goods due to imperfect information, present bias, or affordability constraints. Subsidies push consumption toward what an informed long-run choice would deliver.<br><strong style="font-size:11px;">Key terms:</strong> merit good, information failure, present bias<br><span style="font-size:11px;color:#92400E;">e.g. school meals, preventive healthcare</span>'
        }
      ],
      keyTerms: [
        { term: 'Pigouvian tax',   def: 'A tax equal to the MEC – internalises the externality and restores Q*. Named after Arthur Pigou.' },
        { term: 'Internalisation', def: 'Forcing private decisions to reflect the full social cost (via tax) or benefit (via subsidy) so the market reaches Q*.' },
        { term: 'Welfare net gain', def: 'A well-targeted Pigouvian tax can <em>raise</em> welfare: the gain from eliminating the externality DWL exceeds the policy\'s own DWL.' }
      ],
      examEdge: 'The decisive question: does the welfare gain from correcting the externality exceed the DWL from the policy? A revenue-raising tax in an otherwise efficient market only destroys welfare. A well-targeted Pigouvian tax corrects a larger externality DWL. Identify the market failure (or its absence) explicitly – this is what distinguishes a Level 3 from a Level 4 answer.'
    },

    /* ── Card 2: Five UK case studies ────────────────────────────────── */
    {
      id: 'taxes_subsidies_policy_2',
      stepLabel: 'Learn: Step 2 of 3',
      title: 'Five UK case studies – what actually happens',
      tip: { icon: '🌍', tone: 'amber', text: 'Real policy outcomes depend on three questions: Does it change behaviour (effectiveness)? Is the welfare gain worth the cost (efficiency)? Who gains and who loses (equity)? These five cases show theory meeting reality.' },
      causesLabel: 'Five UK policy case studies',
      causesEmoji: '📋',
      causesStyle: 'tinted-flat',
      causes: [
        {
          icon: '🥤', tone: 'rose', head: 'Sugar Levy (SDIL, 2018–)',
          body: '<span style="font-size:10.5px;color:#9F1239;font-style:italic;">Tax on sugary drinks. Tiered by sugar content.</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#DC2626;">🎯 Effectiveness</span> <span style="font-size:11.5px;"> Strong: reformulation saw average sugar content fall sharply. Sales of taxed drinks fell ~21%.</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#059669;">💰 Efficiency</span> <span style="font-size:11.5px;"> Relatively efficient: low admin cost; revenue used for school sports.</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#2563EB;">👥 Equity</span> <span style="font-size:11.5px;"> Mixed: healthier outcomes benefit low-income groups, but taxes can feel regressive.</span>'
        },
        {
          icon: '⛽', tone: 'blue', head: 'Fuel duty (ongoing, ~£24bn/yr)',
          body: '<span style="font-size:10.5px;color:#1E3A8A;font-style:italic;">Large excise on petrol and diesel (~53p/litre + VAT).</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#DC2626;">🎯 Effectiveness</span> <span style="font-size:11.5px;"> Can reduce car use and emissions somewhat. PED ≈ 0.2–0.4 short run.</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#059669;">💰 Efficiency</span> <span style="font-size:11.5px;"> Good revenue raiser; low collection cost. Frozen 2011–2024 due to political pressure.</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#2563EB;">👥 Equity</span> <span style="font-size:11.5px;"> Regressive: hits rural and lower-income drivers harder as share of income.</span>'
        },
        {
          icon: '🚬', tone: 'amber', head: 'Tobacco duty (ongoing)',
          body: '<span style="font-size:10.5px;color:#92400E;font-style:italic;">Among the world\'s highest rates, ~£8/pack.</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#DC2626;">🎯 Effectiveness</span> <span style="font-size:11.5px;"> Cuts smoking, especially among the young. Prevalence: 27% (2000) → 13% (2023).</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#059669;">💰 Efficiency</span> <span style="font-size:11.5px;"> Raises revenue but high duty encourages smuggling (~12% of market is illicit).</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#2563EB;">👥 Equity</span> <span style="font-size:11.5px;"> Regressive in incidence but progressive in health effects (benefits poorest most).</span>'
        },
        {
          icon: '🌾', tone: 'green', head: 'EU Common Agricultural Policy (~€55bn/yr)',
          body: '<span style="font-size:10.5px;color:#065F46;font-style:italic;">Subsidies to farmers across the EU (ongoing).</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#DC2626;">🎯 Effectiveness</span> <span style="font-size:11.5px;"> Supports farmer incomes and food security. Historic "butter mountains" from over-production.</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#059669;">💰 Efficiency</span> <span style="font-size:11.5px;"> Expensive and distorts prices/output. 30–50% capitalised into farmland values.</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#2563EB;">👥 Equity</span> <span style="font-size:11.5px;"> Benefits unevenly distributed – large landowners capture most. Harms developing-country farmers.</span>'
        },
        {
          icon: '🌬️', tone: 'purple', head: 'UK Contracts for Difference (renewables)',
          body: '<span style="font-size:10.5px;color:#5B21B6;font-style:italic;">Guaranteed prices for offshore wind via auction (ongoing).</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#DC2626;">🎯 Effectiveness</span> <span style="font-size:11.5px;"> Highly effective: offshore wind strike prices fell ~70% (2015–2022). Drove rapid deployment.</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#059669;">💰 Efficiency</span> <span style="font-size:11.5px;"> Fiscally costly initially; long-run cost reductions make this look efficient in hindsight.</span><br>'
            + '<span style="font-size:11px;font-weight:800;color:#2563EB;">👥 Equity</span> <span style="font-size:11.5px;"> Equity depends on pass-through of energy costs to households. Regressive if bills rise.</span>'
        }
      ],
      causes2Label: 'What economists ask',
      causes2Emoji: '❓',
      causes2: [
        { icon: '🎯', tone: 'rose',  head: 'Effectiveness = did behaviour change?', body: 'Sugar tax worked partly because producers had an elastic response (reformulate). Fuel duty changes behaviour less because PED is low and substitutes are limited.' },
        { icon: '💰', tone: 'green', head: 'Efficiency = was the welfare gain worth the cost?', body: 'Compare the DWL eliminated from the externality with the new DWL created by the policy. Strong Pigouvian designs (sugar, tobacco) clear this bar. Revenue taxes in efficient markets do not.' },
        { icon: '👥', tone: 'blue',  head: 'Equity = who gained and who lost?', body: 'Most indirect taxes are regressive (higher % of income from poorer households). Subsidies can be captured by unintended beneficiaries (landowners under CAP, developers under Help to Buy).' }
      ],
      examEdge: 'Three evaluation moves worth memorising: (1) Did behaviour change – name the elasticity assumption. (2) Who bore the burden – economic incidence ≠ legal incidence; cite PED to show who paid. (3) Was the welfare gain larger than the DWL – strong Pigouvian designs pass this test; pure revenue taxes do not. A strong answer hits all three axes with a context-aware conclusion.'
    },

    /* ── Card 3: Exam technique ───────────────────────────────────────── */
    {
      id: 'taxes_subsidies_policy_3',
      stepLabel: 'Learn: Step 3 of 3',
      title: 'Exam technique: drawing, analysis, evaluation',
      tip: { icon: '✍️', tone: 'blue', text: 'This card turns your content knowledge into high-mark exam performance. Master the four diagrams below and the three-axis evaluation structure to handle any tax/subsidy question.' },
      diagramPanel: {
        diagramKey: 'taxSubsidyFourPanels',
        layout: 'stacked',
        bare: true
      },
      keyPointsLabel: 'A three-axis evaluation framework',
      keyPointsEmoji: '⚖️',
      keyPoints: [
        { icon: '🎯', tone: 'rose',  title: 'Effectiveness',  headline: 'Did output or consumption move toward the social optimum?', body: 'Was the market failure reduced? By how much? Depends on PED/PES and producer response (reformulation, substitution). Name the elasticity assumption.' },
        { icon: '💰', tone: 'green', title: 'Efficiency',     headline: 'Was the welfare gain worth the cost?',                    body: 'Consider DWL from the policy, admin costs, and deadweight burdens. Could a better tool achieve more for less? Compare to the externality DWL it eliminates.' },
        { icon: '👥', tone: 'blue',  title: 'Equity',         headline: 'Who pays? Who benefits? Is it fair?',                    body: 'Identify incidence (PED tells you who pays). Is it regressive? Do benefits reach the intended group – or are they captured by landowners, developers, or producers?' }
      ],
      causesLabel: 'Common exam errors to avoid',
      causesEmoji: '❌',
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '❌', tone: 'rose', head: 'Wrong shift direction', body: 'A tax shifts S <strong>up/left</strong> – NOT down. A subsidy shifts S <strong>down/right</strong>. Many students reverse these. The curve label (S+tax or S−sub) must appear at the new curve.' },
        { icon: '❌', tone: 'rose', head: 'Missing labels', body: 'Always label <strong>P<sub>c</sub></strong> (consumer price), <strong>P<sub>p</sub></strong> (producer net price), and <strong>Q<sub>t</sub></strong> (post-tax quantity). Missing any one of these is the most frequent single mark loss.' },
        { icon: '❌', tone: 'rose', head: 'Confusing incidence and impact', body: 'The seller remits the cash to HMRC – that does not mean the seller bears the burden. Economic incidence depends on relative elasticities: inelastic side bears more.' },
        { icon: '❌', tone: 'rose', head: 'Assuming all subsidies are good', body: 'A subsidy in an otherwise efficient market destroys welfare (DWL + fiscal cost). Always identify the underlying market failure before judging whether the subsidy is justified.' },
        { icon: '❌', tone: 'rose', head: 'Evaluation with no judgement', body: 'A high-mark answer reaches a <em>context-aware</em> conclusion. "It depends on elasticity" is not a conclusion – state WHICH direction elasticity pushes the outcome AND for the specific good.' }
      ],
      flowBottomTitle: 'Exam edge – the 4-step method',
      flowBottomEmoji: '🏆',
      flowBottom: [
        { icon: '📐', tone: 'blue',   title: 'Draw accurately',            sub: 'Correct axes, correct shift direction, shaded DWL triangle, revenue rectangle. Label Pc, Pp, Qt, Qe.' },
        { icon: '🔧', tone: 'green',  title: 'Explain the mechanism',      sub: 'State what the policy does and why. Link the shift to the externality or merit good. Avoid "the government imposes a tax therefore price rises."' },
        { icon: '👥', tone: 'amber',  title: 'Analyse who gains and loses', sub: 'Use incidence – cite PED/PES to show burden split. State redistribution effects. Who captures the subsidy?' },
        { icon: '⚖️', tone: 'purple', title: 'Reach a judgement',          sub: 'Use effectiveness–efficiency–equity to conclude. Is the welfare gain larger than the DWL? Is a better tool available? Apply to the specific context.' }
      ],
      quizCta: { href: TopicLoader.routes.quiz('main'), label: 'Test yourself →' }
    }

  ]
};

/* ============================================================
   End-of-Learn-It quiz pool · folded in at v0.4.0
   These questions used to live at /quiz/<topic>/<set> as a
   standalone shell. They now ride along with the Learn It data
   under the same window.ECONOS_QUIZ global. The /quiz/ URL
   contract is gone; the quiz is the natural finisher to the
   Learn It journey, so the data lives next to learn cards.
   ============================================================ */
/* ---- quiz-main.js (quiz pool, preserved from former /quiz/ shell) ---- */
(function () {

  window.ECONOS_QUIZ = {
    title:    'Taxes & Subsidies as Policy Tools',
    subtitle: 'Macroeconomics',
    backUrl:  TopicLoader.routes.learn('taxes-and-subsidies-as-policy-tools'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers taxation principles, Laffer curve, subsidies, incidence, and policy evaluation',
    shortNames: [
      'Tax principles','Direct vs indirect','Laffer curve','Tax incidence','Subsidies',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'A progressive tax is one where:',
        opts: [
          'Everyone pays the same flat rate regardless of income',
          'The percentage of income paid in tax rises as income rises',
          'Higher earners pay a smaller share of their income in tax',
          'Only spending, not income, is taxed'
        ],
        ans:  1,
        exp:  'Progressive taxes take a rising proportion of income as income increases (e.g., UK income tax with higher rate bands). They help reduce post-tax income inequality.'
      },
      {
        type: 'mcq',
        q:    'The Laffer curve illustrates that:',
        opts: [
          'Higher tax rates always raise more tax revenue',
          'There is an optimal tax rate beyond which further increases reduce total revenue',
          'Tax cuts always pay for themselves through higher growth',
          'VAT is always more efficient than income tax'
        ],
        ans:  1,
        exp:  'The Laffer curve shows a non-linear relationship between the tax rate and tax revenue. Beyond a certain rate, higher taxes reduce work incentives so much that total revenue falls. The optimal rate maximises revenue.'
      },
      {
        type: 'mcq',
        q:    'Tax incidence refers to:',
        opts: [
          'The legal liability to pay the tax',
          'The effective burden of a tax – who actually bears the cost in reduced purchasing power',
          'The rate at which tax revenue grows',
          'The compliance cost of filing tax returns'
        ],
        ans:  1,
        exp:  'Tax incidence is the economic burden of a tax – who really pays it in terms of reduced welfare. If demand is inelastic, consumers bear most of the incidence of an indirect tax; if supply is inelastic, producers bear more.'
      },
      {
        type: 'mcq',
        q:    'A government subsidy to a firm will:',
        opts: [
          'Shift the supply curve leftward, raising prices',
          'Shift the supply curve rightward, lowering prices and increasing output',
          'Shift the demand curve rightward, raising prices',
          'Reduce consumer surplus by cutting output'
        ],
        ans:  1,
        exp:  'A production subsidy lowers producers\' costs, shifting the supply curve to the right. This increases output and reduces the market price – part of the subsidy is passed to consumers.'
      },
      {
        type: 'numeric_input',
        q:    'A £3 indirect tax is imposed. PED = −0.5 and PES = 1.0. What is the consumer\'s share of the tax burden (£)?',
        answer: 2,
        tolerance: 0.1,
        unit: '£',
        hint: 'Consumer share = PES/(PES + |PED|) × tax.',
        workingSteps: ['Consumer share = 1.0/(1.0 + 0.5) × £3 = (1.0/1.5) × £3 = £2']
      },
      {
        type: 'categorise',
        q:    'Categorise each tax as progressive, proportional, or regressive.',
        categories: ['Progressive','Proportional','Regressive'],
        items: [
          { item: 'UK income tax with higher rate bands',       category: 'Progressive' },
          { item: 'Flat rate 20% tax on all income',           category: 'Proportional' },
          { item: 'VAT (fixed rate on spending)',               category: 'Regressive' },
          { item: 'Inheritance tax above a threshold',         category: 'Progressive' },
          { item: 'Excise duty on fuel per litre',             category: 'Regressive' },
          { item: 'Flat corporate profit tax rate',            category: 'Proportional' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each tax or subsidy policy to its effect.',
        pairs: [
          { cause: 'Indirect tax imposed on inelastic good',     effect: 'Producers absorb little; consumers bear most of the burden' },
          { cause: 'Subsidy given to renewable energy producers', effect: 'Supply increases; price falls; output rises' },
          { cause: 'Income tax rate cut for low earners',        effect: 'Disposable income rises; consumption increases' },
          { cause: 'Carbon tax introduced',                      effect: 'Firms cut emissions; negative externality internalised' },
          { cause: 'Higher corporation tax',                     effect: 'Post-tax profit falls; may reduce business investment' },
          { cause: 'Laffer curve effect activates',              effect: 'Rate rise beyond optimal reduces total tax revenue' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Progressive tax','Regressive tax','Proportional tax','Multiplier effect'],
        ans:  3,
        exp:  'Progressive, regressive, and proportional are all types of tax classified by how their share of income varies. The multiplier effect is a macroeconomic concept about how spending injections amplify national income.'
      },
      {
        type: 'data_table',
        q:    'Use the table to calculate the tax rate paid as a % of income and classify the tax system.',
        tableHeaders: ['Income (£)','Tax paid (£)','Tax rate (%)','Tax type'],
        tableData: [
          ['20,000','2,000','10','?'],
          ['40,000','6,000','15','?'],
          ['80,000','20,000','25','?'],
          ['100,000','30,000','30','?']
        ],
        opts: [
          'Progressive – tax rate rises with income',
          'Regressive – tax rate falls with income',
          'Proportional – tax rate is the same for all',
          'Cannot be determined without more data'
        ],
        ans:  0,
        exp:  'Tax rates rise from 10% at £20k to 30% at £100k – a rising share of income as income increases. This is a progressive tax system.'
      },
      {
        type: 'match_pairs',
        q:    'Match each tax/subsidy concept to its description.',
        pairs: [
          { a: 'Laffer curve',       b: 'Shows optimal tax rate that maximises government revenue' },
          { a: 'Tax incidence',      b: 'Distribution of tax burden between consumers and producers' },
          { a: 'Progressive tax',    b: 'Tax rate rises as income rises' },
          { a: 'Regressive tax',     b: 'Lower earners pay a higher share of income than higher earners' },
          { a: 'Subsidy',            b: 'Government payment to lower producers\' costs and boost output' },
          { a: 'Hypothecated tax',   b: 'Tax revenue ring-fenced for a specific purpose' }
        ]
      }
    ]
  };

})();

