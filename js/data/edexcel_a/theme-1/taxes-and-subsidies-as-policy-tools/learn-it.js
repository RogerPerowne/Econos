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
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '⚖️', text: 'Taxes discourage socially harmful behaviour. Subsidies encourage socially beneficial behaviour. Both are tools for correcting a market failure – not instruments for raising revenue in an otherwise efficient market.' },
        { type: 'sectionHeader', icon: '🛠️', label: 'Pigouvian tax → internalises external costs           Subsidy → increases socially desirable activity' },
        { type: 'mechanismChain', steps: [
          { label: 'Pigouvian tax', detail: 'Tax equal to the marginal external cost (MEC). Shifts S up to the social-cost curve, moving the market to Q*. Examples: carbon tax, sugar levy, tobacco duty, congestion charge.' },
          { label: 'Merit-good subsidy', detail: 'Subsidy equal to the marginal external benefit (MEB). Shifts S down (lowers price) to reach socially optimal Q*. Examples: NHS, vaccinations, education, renewables.' }
        ]},
        { type: 'sectionHeader', icon: '🧩', label: 'Three justification logics' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'rose', icon: '🏭', head: 'Negative externality – tax case', body: 'Pollution, smoking, sugar, traffic congestion. Private agents ignore costs imposed on others → market over-produces beyond the social optimum. A Pigouvian tax internalises the external cost so price reflects the full social cost. Key terms: MPC, MEC, MSC, internalisation. e.g. tobacco, sugar tax, carbon tax' },
          { type: 'tile', tone: 'green', icon: '☀️', head: 'Positive externality – subsidy case', body: 'Vaccinations protect others; education raises social productivity; renewable energy cuts shared climate risk. Private agents ignore benefits for others → market under-produces. A subsidy shifts the effective supply curve down to reach Q*. Key terms: MPB, MEB, MSB. e.g. vaccines, education, renewable energy' },
          { type: 'tile', tone: 'amber', icon: '⭐', head: 'Merit good and underconsumption', body: 'Even without a clear externality, people under-consume goods due to imperfect information, present bias, or affordability constraints. Subsidies push consumption toward what an informed long-run choice would deliver. Key terms: merit good, information failure, present bias. e.g. school meals, preventive healthcare' }
        ]},
        { type: 'glossaryRow', items: [
          { term: 'Pigouvian tax',   def: 'A tax equal to the MEC – internalises the externality and restores Q*. Named after Arthur Pigou.' },
          { term: 'Internalisation', def: 'Forcing private decisions to reflect the full social cost (via tax) or benefit (via subsidy) so the market reaches Q*.' },
          { term: 'Welfare net gain', def: 'A well-targeted Pigouvian tax can raise welfare: the gain from eliminating the externality DWL exceeds the policy\'s own DWL.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'The decisive question: does the welfare gain from correcting the externality exceed the DWL from the policy? A revenue-raising tax in an otherwise efficient market only destroys welfare. A well-targeted Pigouvian tax corrects a larger externality DWL. Identify the market failure (or its absence) explicitly – this is what distinguishes a Level 3 from a Level 4 answer.' }
      ]
    },

    /* ── Card 2: Five UK case studies ────────────────────────────────── */
    {
      id: 'taxes_subsidies_policy_2',
      stepLabel: 'Learn: Step 2 of 3',
      title: 'Five UK case studies – what actually happens',
      blocks: [
        { type: 'calloutStrip', tone: 'amber', icon: '🌍', text: 'Real policy outcomes depend on three questions: Does it change behaviour (effectiveness)? Is the welfare gain worth the cost (efficiency)? Who gains and who loses (equity)? These five cases show theory meeting reality.' },
        { type: 'sectionHeader', icon: '📋', label: 'Five UK policy case studies' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'rose', icon: '🥤', head: 'Sugar Levy (SDIL, 2018–)', body: 'Tax on sugary drinks. Tiered by sugar content. 🎯 Effectiveness: Strong: reformulation saw average sugar content fall sharply. Sales of taxed drinks fell ~21%. 💰 Efficiency: Relatively efficient: low admin cost; revenue used for school sports. 👥 Equity: Mixed: healthier outcomes benefit low-income groups, but taxes can feel regressive.' },
          { type: 'tile', tone: 'blue', icon: '⛽', head: 'Fuel duty (ongoing, ~£24bn/yr)', body: 'Large excise on petrol and diesel (~53p/litre + VAT). 🎯 Effectiveness: Can reduce car use and emissions somewhat. PED ≈ 0.2–0.4 short run. 💰 Efficiency: Good revenue raiser; low collection cost. Frozen 2011–2024 due to political pressure. 👥 Equity: Regressive: hits rural and lower-income drivers harder as share of income.' },
          { type: 'tile', tone: 'amber', icon: '🚬', head: 'Tobacco duty (ongoing)', body: 'Among the world\'s highest rates, ~£8/pack. 🎯 Effectiveness: Cuts smoking, especially among the young. Prevalence: 27% (2000) → 13% (2023). 💰 Efficiency: Raises revenue but high duty encourages smuggling (~12% of market is illicit). 👥 Equity: Regressive in incidence but progressive in health effects (benefits poorest most).' },
          { type: 'tile', tone: 'green', icon: '🌾', head: 'EU Common Agricultural Policy (~€55bn/yr)', body: 'Subsidies to farmers across the EU (ongoing). 🎯 Effectiveness: Supports farmer incomes and food security. Historic "butter mountains" from over-production. 💰 Efficiency: Expensive and distorts prices/output. 30–50% capitalised into farmland values. 👥 Equity: Benefits unevenly distributed – large landowners capture most. Harms developing-country farmers.' },
          { type: 'tile', tone: 'purple', icon: '🌬️', head: 'UK Contracts for Difference (renewables)', body: 'Guaranteed prices for offshore wind via auction (ongoing). 🎯 Effectiveness: Highly effective: offshore wind strike prices fell ~70% (2015–2022). Drove rapid deployment. 💰 Efficiency: Fiscally costly initially; long-run cost reductions make this look efficient in hindsight. 👥 Equity: Equity depends on pass-through of energy costs to households. Regressive if bills rise.' }
        ]},
        { type: 'sectionHeader', icon: '❓', label: 'What economists ask' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'rose', icon: '🎯', head: 'Effectiveness = did behaviour change?', body: 'Sugar tax worked partly because producers had an elastic response (reformulate). Fuel duty changes behaviour less because PED is low and substitutes are limited.' },
          { type: 'tile', tone: 'green', icon: '💰', head: 'Efficiency = was the welfare gain worth the cost?', body: 'Compare the DWL eliminated from the externality with the new DWL created by the policy. Strong Pigouvian designs (sugar, tobacco) clear this bar. Revenue taxes in efficient markets do not.' },
          { type: 'tile', tone: 'blue', icon: '👥', head: 'Equity = who gained and who lost?', body: 'Most indirect taxes are regressive (higher % of income from poorer households). Subsidies can be captured by unintended beneficiaries (landowners under CAP, developers under Help to Buy).' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Three evaluation moves worth memorising: (1) Did behaviour change – name the elasticity assumption. (2) Who bore the burden – economic incidence ≠ legal incidence; cite PED to show who paid. (3) Was the welfare gain larger than the DWL – strong Pigouvian designs pass this test; pure revenue taxes do not. A strong answer hits all three axes with a context-aware conclusion.' }
      ]
    },

    /* ── Card 3: Exam technique ───────────────────────────────────────── */
    {
      id: 'taxes_subsidies_policy_3',
      stepLabel: 'Learn: Step 3 of 3',
      title: 'Exam technique: drawing, analysis, evaluation',
      blocks: [
        { type: 'calloutStrip', tone: 'blue', icon: '✍️', text: 'This card turns your content knowledge into high-mark exam performance. Master the core diagrams below and the three-axis evaluation structure to handle any tax/subsidy question.' },
        { type: 'sectionHeader', icon: '🧾', label: 'Indirect tax and subsidy diagrams' },
        {
          type: 'econDiagram',
          chart: 'supplyDemand',
          views: [
            {
              label: 'Indirect tax',
              show: ['D', 'S', 'S_taxed', 'PcTaxLine', 'PpTaxLine'],
              points: ['Pc_tax', 'Pp_tax', 'Qt_tax', 'E'],
              areas: [
                { between: ['PcTaxLine', 'PpTaxLine'], x: [80, 317.5], tone: 'green', label: 'Revenue' },
                { between: ['D', 'S'], x: [317.5, 380], tone: 'rose', label: 'DWL' }
              ],
              head: 'Indirect tax — S shifts left/up',
              body: 'A specific tax shifts supply up to S+tax. Quantity falls from Qₑ to Qₜ; consumers pay Pc, producers keep Pp, and the vertical gap is the per-unit tax.',
              analysis: 'The green rectangle (Pc to Pp, up to Qₜ) is government revenue = £T × Qₜ. The red triangle between D and S over Qₜ to Qₑ is the deadweight loss from the trades the tax suppresses.'
            },
            {
              label: 'Subsidy',
              show: ['D', 'S', 'S_sub', 'PcSubLine', 'PpSubLine'],
              points: ['Pc_sub', 'Pp_sub', 'Qsub', 'E'],
              areas: [
                { between: ['PpSubLine', 'PcSubLine'], x: [80, 442.5], tone: 'green', label: 'Gov. cost' },
                { between: ['S', 'D'], x: [380, 442.5], tone: 'rose', label: 'DWL' }
              ],
              head: 'Subsidy — S shifts right/down',
              body: 'A subsidy shifts supply down to S−sub. Quantity rises from Qₑ to Qsub; consumers pay a lower Pc while producers receive a higher Pp once the subsidy is added.',
              analysis: 'The green rectangle (Pp to Pc, up to Qsub) is the total government cost = £S × Qsub. The red triangle between S and D over Qₑ to Qsub is the deadweight loss from over-production beyond the efficient quantity.'
            }
          ]
        },
        { type: 'sectionHeader', icon: '🏭', label: 'Pigouvian correction — MPC to MSC' },
        {
          type: 'econDiagram',
          chart: 'externalities-neg',
          views: [
            {
              label: 'Pigouvian correction',
              show: ['MPC', 'MPB', 'MSC'],
              points: ['marketEq', 'socialEq'],
              areas: [
                { between: ['MSC', 'MPB'], x: [369, 430], tone: 'rose', label: 'DWL' }
              ],
              head: 'Pigouvian correction — internalising MEC',
              body: 'With a negative externality the market produces at Qₘ where MPC = MPB, ignoring the external cost. MSC sits above MPC by the marginal external cost (MEC); the social optimum is Q* where MSC = MPB.',
              analysis: 'A Pigouvian tax equal to MEC at Q* shifts MPC up to MSC, cutting output from Qₘ to Q* and eliminating the deadweight-loss triangle between MSC and MPB.'
            }
          ]
        },
        { type: 'sectionHeader', icon: '⚖️', label: 'A three-axis evaluation framework' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'rose', icon: '🎯', head: 'Effectiveness', body: 'Did output or consumption move toward the social optimum? Was the market failure reduced? By how much? Depends on PED/PES and producer response (reformulation, substitution). Name the elasticity assumption.' },
          { type: 'tile', tone: 'green', icon: '💰', head: 'Efficiency', body: 'Was the welfare gain worth the cost? Consider DWL from the policy, admin costs, and deadweight burdens. Could a better tool achieve more for less? Compare to the externality DWL it eliminates.' },
          { type: 'tile', tone: 'blue', icon: '👥', head: 'Equity', body: 'Who pays? Who benefits? Is it fair? Identify incidence (PED tells you who pays). Is it regressive? Do benefits reach the intended group – or are they captured by landowners, developers, or producers?' }
        ]},
        { type: 'sectionHeader', icon: '❌', label: 'Common exam errors to avoid' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'rose', icon: '❌', head: 'Wrong shift direction', body: 'A tax shifts S up/left – NOT down. A subsidy shifts S down/right. Many students reverse these. The curve label (S+tax or S−sub) must appear at the new curve.' },
          { type: 'tile', tone: 'rose', icon: '❌', head: 'Missing labels', body: 'Always label Pc (consumer price), Pp (producer net price), and Qt (post-tax quantity). Missing any one of these is the most frequent single mark loss.' },
          { type: 'tile', tone: 'rose', icon: '❌', head: 'Confusing incidence and impact', body: 'The seller remits the cash to HMRC – that does not mean the seller bears the burden. Economic incidence depends on relative elasticities: inelastic side bears more.' },
          { type: 'tile', tone: 'rose', icon: '❌', head: 'Assuming all subsidies are good', body: 'A subsidy in an otherwise efficient market destroys welfare (DWL + fiscal cost). Always identify the underlying market failure before judging whether the subsidy is justified.' },
          { type: 'tile', tone: 'rose', icon: '❌', head: 'Evaluation with no judgement', body: 'A high-mark answer reaches a context-aware conclusion. "It depends on elasticity" is not a conclusion – state WHICH direction elasticity pushes the outcome AND for the specific good.' }
        ]},
        { type: 'sectionHeader', icon: '🏆', label: 'Exam edge – the 4-step method' },
        { type: 'mechanismChain', steps: [
          { label: 'Draw accurately', detail: 'Correct axes, correct shift direction, shaded DWL triangle, revenue rectangle. Label Pc, Pp, Qt, Qe.' },
          { label: 'Explain the mechanism', detail: 'State what the policy does and why. Link the shift to the externality or merit good. Avoid "the government imposes a tax therefore price rises."' },
          { label: 'Analyse who gains and loses', detail: 'Use incidence – cite PED/PES to show burden split. State redistribution effects. Who captures the subsidy?' },
          { label: 'Reach a judgement', detail: 'Use effectiveness–efficiency–equity to conclude. Is the welfare gain larger than the DWL? Is a better tool available? Apply to the specific context.' }
        ]}
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
