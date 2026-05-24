(function () {

  window.ECONOS_QUIZ = {
    id:       'govt_intervention_tax_main',
    topicId:  'govt_intervention_tax_main',
    title:    'Government Intervention: Taxes',
    subtitle: 'Theme 1.17 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('learn.html', { topic: 'govt_intervention_tax_main' }),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers corrective taxes, direct vs indirect taxes, tax incidence, regressive vs progressive effects, and policy evaluation',
    shortNames: [
      'Direct vs indirect MCQ', 'Tax incidence elasticity', 'Pigouvian tax MCQ', 'Regressive effects',
      'Para fill', 'Cause & effect', 'Match pairs', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 — MCQ: direct vs indirect taxes */
      { type: 'mcq',
        id: 'q_git_1',
        stem: 'Which statement correctly distinguishes <strong>direct taxes</strong> from <strong>indirect taxes</strong>?',
        opts: [
          'Direct taxes are levied on income or wealth (e.g. income tax, corporation tax, inheritance tax); indirect taxes are levied on spending or transactions (e.g. VAT, fuel duty, tobacco duty)',
          'Direct taxes are paid directly to HMRC by consumers; indirect taxes are paid by a third party on the consumer\'s behalf',
          'Direct taxes always raise more revenue than indirect taxes; indirect taxes are a minor supplement to the fiscal system',
          'Direct taxes are progressive; indirect taxes are proportional — neither can be regressive'
        ],
        ans: 0,
        exp: '<strong>Direct taxes</strong>: levied directly on income, profit, or wealth — income tax (20/40/45% rates in UK), NICs, corporation tax (25%), capital gains tax, inheritance tax. They cannot easily be shifted to others. <strong>Indirect taxes</strong>: levied on spending — VAT (20% standard), fuel duty (52.95p/litre), tobacco duty, alcohol duty, stamp duty. Producers can partially shift these to consumers (depending on elasticity). Direct taxes tend to be more progressive; indirect taxes tend to be regressive (same absolute spending on taxed goods represents a higher percentage of low income). UK tax system uses both: direct for progressivity, indirect for revenue and Pigouvian correction.'
      },

      /* 2 — MCQ: tax incidence and elasticity */
      { type: 'mcq',
        id: 'q_git_2',
        stem: 'A tax is imposed on a good where demand is <strong>price elastic</strong>. Compared to an identical tax on a good with inelastic demand, the elastic-demand tax will generate:',
        opts: [
          'Less revenue and a larger deadweight welfare loss — quantity falls significantly; less tax is collected on fewer units; the larger reduction in mutually beneficial trades creates more welfare loss',
          'More revenue and a smaller deadweight loss — elastic consumers pay more due to their sensitivity to price',
          'The same revenue — tax revenue only depends on the tax rate, not elasticity',
          'Less revenue and no deadweight loss — elastic consumers simply stop buying, eliminating all welfare concerns'
        ],
        ans: 0,
        exp: 'With elastic demand: the tax raises price → large fall in quantity demanded → less tax collected on fewer units → <strong>lower revenue</strong> than inelastic. Also: many trades suppressed (WTP > MC before tax, but not enough to cover tax-inclusive price) → <strong>larger DWL</strong>. With inelastic demand: large price rise, small quantity fall → high revenue, small DWL. This is the Ramsey Rule: minimise DWL for a given revenue target by taxing goods with inelastic demand proportionally more. Explains heavy taxation of tobacco, alcohol, and fuel (all have relatively inelastic demand).'
      },

      /* 3 — MCQ: corrective vs revenue-raising tax */
      { type: 'mcq',
        id: 'q_git_3',
        stem: 'A <strong>Pigouvian tax</strong> differs from a pure <strong>revenue-raising tax</strong> in that:',
        opts: [
          'A Pigouvian tax is designed to correct a market failure by making the producer face the full social cost — its primary purpose is to reduce output to the social optimum, not to maximise revenue',
          'A Pigouvian tax always raises more revenue than an equivalent revenue-raising tax because it targets high-income consumers',
          'A Pigouvian tax is paid by consumers; a revenue-raising tax is paid by producers',
          'A Pigouvian tax creates a deadweight welfare loss; a revenue-raising tax is always welfare-neutral'
        ],
        ans: 0,
        exp: 'The key distinction is purpose and design: <strong>Pigouvian tax</strong> (named after economist A.C. Pigou): corrective — designed to align MPC with MSC by adding the marginal external cost to the producer\'s private cost. Success means output falls to Q* (the social optimum) — it may generate less revenue if it successfully reduces the taxed activity. <strong>Revenue-raising tax</strong>: fiscal purpose — designed to fund public spending. Revenue maximisation suggests taxing inelastic goods heavily. A carbon tax that successfully eliminates carbon-intensive production raises little revenue — but achieves its environmental goal. A tobacco duty that fails to reduce smoking raises lots of revenue — but fails its health goal. The two purposes can be in tension.'
      },

      /* 4 — MCQ: regressive taxation */
      { type: 'mcq',
        id: 'q_git_4',
        stem: 'UK fuel duty is often described as <strong>regressive</strong>. This means:',
        opts: [
          'Low-income households spend a higher proportion of their income on fuel duty — the tax takes a larger percentage of income from the poor than the rich, even if the absolute amount may be similar',
          'Fuel duty is paid only by high-income households who drive expensive cars',
          'Fuel duty is a progressive tax — higher earners who drive more pay more in absolute terms',
          'Fuel duty is regressive only in theory — in practice, the tax affects all income groups equally'
        ],
        ans: 0,
        exp: 'A <strong>regressive tax</strong> takes a higher proportion of income from lower-income households. Fuel duty: even if a low-income household spends £800/year on fuel duty and a high-income household spends £1,200/year — if low-income household earns £20,000 (4% of income) and high-income earns £80,000 (1.5% of income), the tax is regressive. Most indirect taxes (VAT, tobacco, alcohol, fuel) are regressive because lower-income households spend a higher share of income on basic goods. This creates a tension: Pigouvian fuel taxes are efficient (corrects negative externality of driving) but regressive (distributional cost on low earners). Revenue recycling (fuel duty rebates, income tax cuts) can partially address this.'
      },

      /* 5 — Para fill: tax policy analysis */
      { type: 'para_fill',
        id: 'q_git_5',
        stem: 'Complete the paragraph analysing the role of taxation in correcting market failure.',
        anchor: 'Taxation is one of the most powerful tools available to governments to correct externalities.',
        para: 'When a firm produces a good with a negative [1], its marginal private cost is [2] than its marginal social cost. The free market produces [3] of the good than is socially optimal. A Pigouvian [4] equal to the marginal [5] cost per unit shifts the firm\'s private cost curve upward to equal the [6] cost. The firm now produces at the [7] optimum where MSC equals MSB. The government collects [8] revenue that can be used to [9] those harmed by the externality. However, setting the correct [10] rate requires accurate measurement of the external cost — a significant practical challenge.',
        blanks: [
          { id: 1, opts: ['externality', 'benefit', 'subsidy', 'regulation'], ans: 0 },
          { id: 2, opts: ['lower', 'higher', 'equal to', 'unrelated to'], ans: 0 },
          { id: 3, opts: ['more', 'less', 'the same amount', 'zero'], ans: 0 },
          { id: 4, opts: ['tax', 'subsidy', 'regulation', 'price ceiling'], ans: 0 },
          { id: 5, opts: ['external', 'private', 'average', 'total'], ans: 0 },
          { id: 6, opts: ['social', 'private', 'average', 'variable'], ans: 0 },
          { id: 7, opts: ['social', 'private', 'market', 'profit'], ans: 0 },
          { id: 8, opts: ['tax', 'no', 'increasing', 'decreasing'], ans: 0 },
          { id: 9, opts: ['compensate', 'subsidise', 'regulate', 'ignore'], ans: 0 },
          { id: 10, opts: ['tax', 'subsidy', 'price', 'interest'], ans: 0 }
        ],
        exp: '(1) Negative <strong>externality</strong>. (2) MPC is <strong>lower</strong> than MSC. (3) Produces <strong>more</strong> — overproduction. (4) Pigouvian <strong>tax</strong>. (5) Marginal <strong>external</strong> cost. (6) <strong>Social</strong> cost. (7) <strong>Social</strong> optimum. (8) Collects <strong>tax</strong> revenue. (9) Used to <strong>compensate</strong> those harmed (or fund public goods — "double dividend"). (10) Setting the <strong>tax</strong> rate requires measuring external cost. This is the standard analytical paragraph for any negative externality question asking for a corrective tax analysis.'
      },

      /* 6 — Cause & effect: tax chain */
      { type: 'cause_effect',
        id: 'q_git_6',
        stem: 'Match each tax policy action to its economic effect.',
        pairs: [
          { cause: 'UK government raises income tax rate for higher earners', effect: 'Direct tax becomes more progressive — higher earners pay a larger percentage of income' },
          { cause: 'VAT rate raised from 17.5% to 20% on all goods and services', effect: 'Indirect tax becomes more regressive — low-income households pay a higher proportion of income' },
          { cause: 'Carbon tax set equal to the social cost of carbon (£50/tonne)', effect: 'Firms internalise external cost; output falls to social optimum; DWL eliminated' },
          { cause: 'Tax on cigarettes set well above the Pigouvian rate', effect: 'Over-correction — output falls below social optimum; DWL re-emerges on other side' },
          { cause: 'Sugar levy on soft drinks (UK 2018)', effect: 'Firms reformulate products to reduce sugar content — innovation incentive from the tax' },
          { cause: 'Tax cut financed by borrowing before an election', effect: 'Short-term boost to consumer spending; long-run higher debt burden — political myopia' }
        ],
        exp: 'Tax effects vary by type and setting: <strong>income tax</strong> can be progressive (higher rates on higher incomes); <strong>VAT</strong> is regressive; <strong>Pigouvian tax</strong> correctly set eliminates DWL; Pigouvian tax <em>over-set</em> creates new DWL; <strong>design-based taxes</strong> (sugar levy) create innovation incentives — firms reformulate rather than just paying the tax (the UK sugar levy successfully reduced average sugar content in soft drinks by 35% before it even took effect, as firms pre-emptively reformulated); <strong>pre-election tax cuts</strong> demonstrate political myopia.'
      },

      /* 7 — Match pairs: tax concepts */
      { type: 'match_pairs',
        id: 'q_git_7',
        stem: 'Match each tax concept to its definition.',
        pairs: [
          { a: 'Progressive tax', b: 'Tax rate rises as income rises — takes a higher percentage from higher earners' },
          { a: 'Regressive tax', b: 'Tax takes a higher percentage of income from lower earners in practice' },
          { a: 'Proportional tax', b: 'Same percentage of income taken at all income levels' },
          { a: 'Pigouvian tax', b: 'Tax equal to MEC — corrects negative externality overproduction' },
          { a: 'Hypothecated tax', b: 'Tax revenue dedicated to a specific spending purpose (e.g. NHS levy)' },
          { a: 'Laffer curve', b: 'At very high tax rates, revenue falls because incentives to work/invest collapse' }
        ],
        exp: 'Tax classification: <strong>progressive</strong> (UK income tax: 20/40/45% rates — higher income, higher rate); <strong>regressive</strong> (indirect taxes in practice — VAT, fuel, tobacco); <strong>proportional</strong> (flat tax — sometimes proposed as simpler and more efficient). <strong>Hypothecation</strong> (earmarking) can improve political acceptability of taxes (people more willing to pay if they see where it goes) but reduces fiscal flexibility. <strong>Laffer curve</strong>: theoretical peak revenue rate — debated where exactly it is; used by supply-siders to argue for rate cuts, though evidence that current UK/US top rates are above the Laffer peak is weak.'
      },

      /* 8 — Odd one out: corrective taxes */
      { type: 'odd_one_out',
        id: 'q_git_8',
        stem: 'Three of these are examples of <strong>corrective (Pigouvian) taxes</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '⛽', label: 'UK fuel duty — designed to reflect the external costs of carbon emissions and road congestion', note: '' },
          { icon: '🚬', label: 'Tobacco duty — designed to reflect healthcare costs and secondhand smoke externalities', note: '' },
          { icon: '💼', label: 'Income tax — charged on earnings to raise revenue for public services', note: '' },
          { icon: '🍬', label: 'UK Soft Drinks Industry Levy (sugar tax) — designed to reduce overconsumption of sugar', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>income tax</strong>. Income tax is a fiscal (revenue-raising) tax — its primary purpose is to fund government spending, not to correct a market failure. It has no direct corrective element (earned income is not a negative externality). The other three are corrective (Pigouvian) taxes: fuel duty reflects carbon and congestion externalities; tobacco duty reflects secondhand smoke and healthcare cost externalities; the sugar levy reflects health externalities from sugar overconsumption and information failure (consumers underestimate health risks). Note: in practice, fuel duty and tobacco duty also serve revenue purposes — the Pigouvian and fiscal motivations overlap.'
      },

      /* 9 — Data table: UK carbon tax and energy */
      { type: 'data_table',
        id: 'q_git_9',
        stem: 'The table shows UK carbon pricing and energy outcomes 2015–2022.',
        headers: ['Year', 'UK ETS/CPS carbon price (£/tonne)', 'Coal power share (%)', 'Renewables share (%)'],
        rows: [
          ['2015', '6', '22%', '25%'],
          ['2018', '18', '5%', '33%'],
          ['2021', '50', '2%', '42%'],
          ['2022', '65', '1%', '47%']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data about the corrective tax mechanism?',
        opts: [
          'Rising carbon prices sent a strong price signal — coal became unprofitable and was rapidly displaced by renewables, consistent with a Pigouvian tax correcting a negative externality (carbon emissions)',
          'The data show that carbon prices are too high — eliminating almost all coal generation shows over-correction below the social optimum',
          'The correlation proves that carbon taxes alone caused the energy transition — no other factors matter',
          'The near-elimination of coal shows the tax failed — a successful Pigouvian tax should reduce but not eliminate the taxed activity'
        ],
        ans: 0,
        exp: 'The data show a strong correlation: carbon prices rising from £6 to £65/tonne (×11) while coal\'s generation share collapsed from 22% to 1%. This is consistent with a Pigouvian tax correcting carbon externalities — making coal expensive relative to its private cost, signalling its social cost, and incentivising the shift to renewables. Option B: near-zero coal may actually be the social optimum if coal\'s MSC (including climate damage) greatly exceeds its MSB at any positive quantity. Option C is too strong — technology cost falls, gas price changes, and renewable subsidies also contributed. Option D misunderstands Pigouvian taxes — their goal is to reach Q*, which for coal may indeed be near zero.'
      },

      /* 10 — Multi-select: evaluation of taxation policy */
      { type: 'multi_select',
        id: 'q_git_10',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of taxation as a policy instrument?',
        opts: [
          'Taxes reduce the incentive to consume demerit goods and can raise revenue simultaneously',
          'While Pigouvian taxes are theoretically optimal, their effectiveness in practice is conditional on price elasticity: for highly inelastic goods (heroin, cigarettes among addicts), even very high taxes may fail to reduce consumption to the social optimum — suggesting that taxation alone may be insufficient and must be combined with treatment programmes and regulations for goods with severe addiction externalities',
          'Progressive income taxes reduce inequality by redistributing from high to low earners',
          'Carbon taxes face a fundamental political economy challenge: the costs (higher energy prices, reduced competitiveness) are immediate and concentrated on specific industries and consumers, while the benefits (reduced climate risk) are long-run and diffuse — creating systematic political pressure to under-set the rate, which means the market failure persists even with a nominal carbon tax in place',
          'VAT is regressive because lower-income households spend a higher proportion of income on consumption',
          'The Laffer curve argument that lower tax rates increase revenue is used to justify tax cuts for high earners, but empirical evidence for the UK and US suggests current top rates are well below the revenue-maximising point — suggesting Laffer curve arguments, while theoretically valid, are being applied outside their valid empirical range in current policy debates'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: limits the Pigouvian tax argument by identifying elasticity and addiction as binding constraints — reaches the conclusion that a combination of instruments is needed. D: identifies the political economy dynamic that systematically biases carbon tax rates downward — a structural feature of democratic decision-making that qualifies the standard theoretical prescription. F: evaluates the Laffer curve argument empirically, distinguishing the theoretical validity from the empirical application — concluding that current policy use is outside the valid range. A, C, and E are accurate descriptions without evaluative moves.'
      }

    ]
  };

})();
