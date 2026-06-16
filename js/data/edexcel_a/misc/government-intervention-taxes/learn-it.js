window.ECONOS_TOPIC = {
  id: 'government-intervention-taxes',
  topicNum: '1.17',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Government Intervention: Taxes',
  estTime: '9-11 minutes',
  goal: 'Lock in how indirect taxes work, their welfare effects, tax incidence, and evaluation of taxation as a tool for correcting market failure.',
  intro: {
    heroKey: 'heroIntervention',
    summary: 'Indirect taxes raise the price of goods, shifting supply and reducing consumption. Whether a tax is appropriate depends on the size of the externality it corrects, who bears its burden, and whether the quantity reduction is sufficient to reach the social optimum.',
    doInThis: 'Work through 7 cards covering how taxes shift supply, the tax diagram, consumer/producer incidence, Pigouvian taxes, specific vs ad valorem taxes, real-world tax examples, and evaluation of taxation policy.',
    outcomes: [
      'Show how an indirect tax shifts the supply curve and creates a new equilibrium',
      'Identify consumer incidence, producer incidence, tax revenue, and deadweight loss on a diagram',
      'Explain what makes a Pigouvian tax optimal',
      'Evaluate taxation as a method of correcting negative externalities'
    ],
    tip: 'Tax shifts supply LEFT (decreases supply). New equilibrium: price rises (less than the full tax), quantity falls. Tax revenue = tax per unit × new quantity. DWL = two triangles between old and new equilibrium.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'govt_intervention_tax_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Indirect taxes: the big picture',
      lede: 'Taxes shift supply left to curb consumption and raise revenue – but the real burden falls where elasticity allows it.',
      tip: 'Specific tax → parallel leftward shift. Ad valorem tax → supply pivots (gap widens at higher prices). Either way: new equilibrium has higher consumer price and lower producer price – the tax creates a wedge between them.',
      branches: [
        { tone: 'green',  label: 'How they work',     sub: 'Specific (per unit) or ad valorem (% of price). Supply shifts left → higher price, lower quantity.' },
        { tone: 'blue',   label: 'Pigouvian taxes',   sub: 'Set tax = MEC to internalise the externality and move output to the social optimum.' },
        { tone: 'purple', label: 'Tax incidence',     sub: 'Who really pays depends on PED vs PES. Inelastic demand → consumer bears most; inelastic supply → producer bears most.' },
        { tone: 'amber',  label: 'Limitations',       sub: 'Information problem (true MEC unknown), regressive impact, black markets, evasion.' },
        { tone: 'rose',   label: 'Alternatives',      sub: 'Regulation, tradable permits, subsidies for substitutes, behavioural nudges – each with different efficiency and equity trade-offs.' }
      ],
      body: 'An <strong>indirect tax</strong> is a tax levied on goods and services (rather than directly on income or profits). It is collected by producers but ultimately borne by both producers and consumers depending on price elasticities.<br><br><strong>Types:</strong><br>• <em>Specific tax (unit tax):</em> a fixed amount per unit (e.g. £1 per litre of petrol). On a diagram: parallel leftward shift of supply curve.<br>• <em>Ad valorem tax:</em> a percentage of the price (e.g. 20% VAT). On a diagram: supply curve pivots (shifts left by a larger absolute amount at higher prices).<br><br><strong>Mechanism:</strong> tax raises the effective cost of production for every unit → supply curve shifts left → new equilibrium at higher price and lower quantity.',
      keyTerms: [
        { term: 'Indirect tax', def: 'Tax on spending rather than income – collected at the point of sale. Examples: VAT (20%), fuel duty, sugar levy.' },
        { term: 'Specific tax', def: 'Fixed money amount per unit – parallel leftward shift of supply curve.' },
        { term: 'Ad valorem tax', def: 'Percentage of price per unit – supply curve pivots (bigger shift at higher prices).' }
      ],
      examEdge: 'For diagram questions: specific tax → parallel shift. Ad valorem → pivot. Most exam questions use specific taxes for simplicity. Always shift the supply curve LEFT (decrease in supply) by the amount of the tax. Do not shift the demand curve – tax affects supply, not demand (assuming tax is on sellers).'
    },
    {
      id: 'govt_intervention_tax_2',
      template: 'mechanisms',
      diagramKey: 'taxDiagram',
      title: 'The Tax Diagram: Full Analysis',
      lede: 'One diagram, four areas: tax revenue, consumer burden, producer burden and deadweight loss. Nail it and most tax questions fall apart.',
      intro: 'Mastering this diagram is essential – it appears in many different exam contexts.',
      steps: [
        { label: '📍 Start with equilibrium', text: 'Draw original S and D. Equilibrium at (P1, Q1). Mark consumer surplus (CS) triangle above P1 below D. Mark producer surplus (PS) triangle above S below P1.' },
        { label: '⬅️ Add the tax', text: 'Shift supply left by the tax amount (t). New supply = S + tax. New equilibrium at (P2, Q2). P2 > P1; Q2 < Q1. Price rises by less than the full tax.' },
        { label: '💰 Identify tax revenue', text: 'Tax revenue = (P2 - P3) × Q2, where P3 = P2 - t (the price sellers actually receive after paying tax). Tax revenue = rectangle between P2 and P3, width Q2.' },
        { label: '📊 Identify DWL and incidence', text: 'Consumer incidence = (P2 - P1) × Q2. Producer incidence = (P1 - P3) × Q2. DWL = triangle to the right of Q2 between old supply and demand – potential surplus lost.' }
      ],
      examEdge: 'Consumer incidence = rise in price paid by buyers × new quantity. Producer incidence = fall in price received by sellers × new quantity. DWL = triangle between old and new equilibrium – the surplus neither the government, consumers, nor producers receive. Always label all four areas on the diagram for full marks.'
    },
    {
      id: 'govt_intervention_tax_3',
      template: 'framing',
      title: 'Pigouvian Taxes: Correcting Externalities',
      lede: 'Set the tax equal to the harm a good does to others and the market polices itself – elegant in theory, devilish to measure.',
      body: 'A <strong>Pigouvian tax</strong> (named after economist A.C. Pigou) is set equal to the marginal external cost (MEC) at the socially optimal output. It internalises the externality – making the private cost equal to the social cost.<br><br><strong>Effect:</strong> the tax shifts MPC up to MSC. The new market equilibrium is at the socially optimal output Q*, where MSC = MSB. The deadweight welfare loss from the externality is eliminated.<br><br><strong>Perfect Pigouvian tax:</strong> tax per unit = MEC at Q*. In practice, MEC is very difficult to measure accurately – estimates for the social cost of carbon vary from $50 to $200/tonne CO2.',
      keyTerms: [
        { term: 'Pigouvian tax', def: 'A tax equal to the marginal external cost – designed to internalise a negative externality and restore allocative efficiency.' },
        { term: 'Optimal tax rate', def: 'The tax rate that makes private cost = social cost, achieving socially optimal output.' },
        { term: 'Internalise', def: 'To incorporate external costs into the private price mechanism – so that decision-makers face the full social cost of their actions.' }
      ],
      examEdge: 'The ideal Pigouvian tax is elegant in theory but faces three key limitations: (1) measuring MEC accurately is difficult (different estimates for social cost of carbon vary by 4x); (2) MEC may vary by firm/location (one tax rate may not fit all); (3) the tax may be regressive. These limitations are essential evaluation points.'
    },
    {
      id: 'govt_intervention_tax_4',
      template: 'cause',
      title: 'Real-World Tax Examples',
      lede: 'Fuel duty, the sugar levy, tobacco tax and landfill tax show how a well-aimed tax can reshape what firms make and what we buy.',
      causesStyle: 'tinted-flat',
      causesEmoji: '🏛️',
      causesLabel: 'Four key UK indirect taxes',
      causes: [
        { icon: '⛽', head: 'UK Fuel Duty', body: 'Currently ~53p per litre of petrol/diesel. Corrects for CO2 emissions, local air pollution, and congestion. Partially Pigouvian – not perfectly calibrated to the social cost. Raises ~£28bn/year. Frozen since 2010 – has fallen in real terms.' },
        { icon: '🥤', head: 'Sugar Levy (SDIL)', body: 'Soft drinks industry levy (2018): 18p/litre for drinks with 5-8g sugar per 100ml; 24p/litre above 8g. Led to significant reformulation by manufacturers (firms chose to reduce sugar content rather than pay tax). Revenue earmarked for school sports.' },
        { icon: '🚬', head: 'Cigarette Taxes', body: 'UK tobacco duty: £4.14 per pack plus 16.5% ad valorem. Total tax ~75% of retail price. Inelastic demand means large revenue; significant price signal to deter smoking. Evidence: smoking rates fell sharply with rising tax, especially among younger and lower-income groups.' },
        { icon: '🗑️', head: 'Landfill Tax', body: 'Tax on waste deposited at landfill sites. Incentivises firms to reduce waste, recycle, and use alternative disposal. UK rate: £102.10/tonne (active waste). Has driven significant reduction in landfill use and increased recycling rates.' }
      ],
      examEdge: 'Sugar levy is the best exam case for an "effective" tax: demand was elastic (producers reformulated to avoid the tax rather than pass it on to consumers) → significant public health benefit without large consumer price rise. This shows tax design matters – a well-designed tax can change behaviour even without being fully passed on.'
    },
    {
      id: 'govt_intervention_tax_5',
      template: 'diagnose',
      diagramKey: 'taxIncidenceDiagram',
      title: 'Tax Incidence: Who Really Pays?',
      lede: 'The government may collect the tax from sellers, but the real burden lands on whichever side can least afford to walk away.',
      intro: 'The legal incidence (who pays the tax) differs from the economic incidence (who bears the burden).',
      rows: [
        { label: 'Scenario', colA: 'Inelastic demand, elastic supply (cigarettes)', colB: 'Elastic demand, inelastic supply (luxury goods)' },
        { label: 'Effect', colA: 'Most of the tax is passed on to consumers as higher prices. Quantity falls only slightly. Tax revenue is large. Government captures most of the externality correction.', colB: 'Producers cannot raise prices much (consumers would switch). Most of the tax is absorbed as lower profit margins. Quantity may fall more. Revenue is lower.' },
        { label: 'Who bears the burden', colA: 'Consumers: they pay substantially higher prices. Incidence falls on the less elastic side.', colB: 'Producers: their net price falls substantially. They bear the burden because they are less elastic.' }
      ],
      footer: 'General rule: the less price-elastic side of the market bears more of the tax burden. This is why sin taxes (cigarettes, alcohol) on inelastic goods raise large revenue and fall mainly on consumers.',
      examEdge: 'Fuel duty incidence: demand is inelastic (few alternatives for most journeys), supply is elastic (global oil market). Consumers bear most of the burden – the tax is regressive (low-income households spend a higher proportion of income on fuel). This is a key equity criticism of Pigouvian taxes even when they correct externalities.'
    },
    {
      id: 'govt_intervention_tax_6',
      template: 'framing',
      title: 'Evaluation: Taxation to Correct Externalities',
      lede: 'Taxes preserve choice and raise revenue – but they hit the poor hardest and rely on a number nobody can pin down exactly.',
      verdict: {
        leftLabel: '✅ Case FOR taxation',
        rightLabel: '❌ Case AGAINST (limitations)',
        separator: 'VS',
        rows: [
          { aspect: 'Consumer choice', left: 'Preserves consumer choice – reduces but does not eliminate the externality-generating activity', right: 'Difficult to set optimal rate – MEC is uncertain and varies by context' },
          { aspect: 'Revenue', left: 'Revenue can be used to fund green investment or compensate affected parties', right: 'Regressive impact: energy and fuel taxes take a higher share of low-income budgets' },
          { aspect: 'Dynamic efficiency', left: 'Firms continually incentivised to innovate to reduce the tax burden', right: 'Risk of evasion and black markets (especially for high-tax goods like tobacco)' },
          { aspect: 'Evidence', left: 'Carbon taxes in Sweden (highest global) have reduced emissions with limited growth cost', right: 'Political resistance: "fuel duty escalator" abandoned in UK due to political pressure' }
        ]
      },
      examEdge: 'Regressivity is the most important equity objection to environmental taxes. Solution: use tax revenue for cash transfers to low-income households (green dividend). British Columbia carbon tax (Canada) returns revenue as equal-per-capita dividend – net benefit to below-median income households. This "feebate" model addresses the regressivity concern while maintaining the incentive.'
    },
    {
      id: 'govt_intervention_tax_7',
      template: 'framing',
      title: 'Tax vs Other Policy Tools',
      lede: 'Tax, regulate or subsidise the alternative? Each hits the same target through a different lever – with very different costs and winners.',
      body: 'Taxation is one of several tools for government intervention. Comparing it with alternatives is essential for evaluation:<br><br><strong>Tax vs regulation:</strong> tax allows flexibility (firms choose how much to reduce); regulation sets a firm standard. Tax raises revenue; regulation does not. Tax works through price; regulation works through quantity constraint. Both can achieve the same environmental target, but tax does so at lower total cost (abatement where cheapest).<br><br><strong>Tax vs subsidy:</strong> tax reduces the externality-generating activity; subsidy promotes the alternative (e.g. solar panels). Both can move market toward social optimum. Tax raises revenue; subsidy costs revenue. Tax punishes the polluter; subsidy rewards the clean alternative.',
      keyTerms: [
        { term: 'Incentive-based instruments', def: 'Policies (taxes, tradeable permits) that use price signals to achieve environmental goals – more efficient than command-and-control.' },
        { term: 'Command-and-control', def: 'Regulations setting standards (e.g. emission limits) – certain outcome but less flexible and potentially less efficient.' },
        { term: 'Polluter pays principle', def: 'The idea that those who generate pollution should bear the full cost – the philosophical foundation for Pigouvian taxes.' }
      ],
      examEdge: 'Exam essays often ask to "compare two policies." Tax vs regulation structure: tax = flexibility, efficiency, revenue generation, but uncertain quantity outcome and regressive. Regulation = certainty, simplicity, but inflexibility, no revenue, may be inefficient. Both have a role – hybrid approaches (set a regulatory floor + carbon tax above it) often optimal.',
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
    title:    'Government Intervention: Taxes',
    subtitle: 'Theme 1.17 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('govt_intervention_tax_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers corrective taxes, direct vs indirect taxes, tax incidence, regressive vs progressive effects, and policy evaluation',
    shortNames: [
      'Direct vs indirect MCQ', 'Tax incidence elasticity', 'Pigouvian tax MCQ', 'Regressive effects',
      'Para fill', 'Cause & effect', 'Match pairs', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: direct vs indirect taxes */
      { type: 'mcq',
        stem: 'Which statement correctly distinguishes <strong>direct taxes</strong> from <strong>indirect taxes</strong>?',
        opts: [
          'Direct taxes are levied on income or wealth (e.g. income tax, corporation tax, inheritance tax); indirect taxes are levied on spending or transactions (e.g. VAT, fuel duty, tobacco duty)',
          'Direct taxes are paid directly to HMRC by consumers; indirect taxes are paid by a third party on the consumer\'s behalf',
          'Direct taxes always raise more revenue than indirect taxes; indirect taxes are a minor supplement to the fiscal system',
          'Direct taxes are progressive; indirect taxes are proportional – neither can be regressive'
        ],
        ans: 0,
        exp: '<strong>Direct taxes</strong>: levied directly on income, profit, or wealth – income tax (20/40/45% rates in UK), NICs, corporation tax (25%), capital gains tax, inheritance tax. They cannot easily be shifted to others. <strong>Indirect taxes</strong>: levied on spending – VAT (20% standard), fuel duty (52.95p/litre), tobacco duty, alcohol duty, stamp duty. Producers can partially shift these to consumers (depending on elasticity). Direct taxes tend to be more progressive; indirect taxes tend to be regressive (same absolute spending on taxed goods represents a higher percentage of low income). UK tax system uses both: direct for progressivity, indirect for revenue and Pigouvian correction.'
      },

      /* 2 – MCQ: tax incidence and elasticity */
      { type: 'mcq',
        stem: 'A tax is imposed on a good where demand is <strong>price elastic</strong>. Compared to an identical tax on a good with inelastic demand, the elastic-demand tax will generate:',
        opts: [
          'Less revenue and a larger deadweight welfare loss – quantity falls significantly; less tax is collected on fewer units; the larger reduction in mutually beneficial trades creates more welfare loss',
          'More revenue and a smaller deadweight loss – elastic consumers pay more due to their sensitivity to price',
          'The same revenue – tax revenue only depends on the tax rate, not elasticity',
          'Less revenue and no deadweight loss – elastic consumers simply stop buying, eliminating all welfare concerns'
        ],
        ans: 0,
        exp: 'With elastic demand: the tax raises price → large fall in quantity demanded → less tax collected on fewer units → <strong>lower revenue</strong> than inelastic. Also: many trades suppressed (WTP > MC before tax, but not enough to cover tax-inclusive price) → <strong>larger DWL</strong>. With inelastic demand: large price rise, small quantity fall → high revenue, small DWL. This is the Ramsey Rule: minimise DWL for a given revenue target by taxing goods with inelastic demand proportionally more. Explains heavy taxation of tobacco, alcohol, and fuel (all have relatively inelastic demand).'
      },

      /* 3 – MCQ: corrective vs revenue-raising tax */
      { type: 'mcq',
        stem: 'A <strong>Pigouvian tax</strong> differs from a pure <strong>revenue-raising tax</strong> in that:',
        opts: [
          'A Pigouvian tax is designed to correct a market failure by making the producer face the full social cost – its primary purpose is to reduce output to the social optimum, not to maximise revenue',
          'A Pigouvian tax always raises more revenue than an equivalent revenue-raising tax because it targets high-income consumers',
          'A Pigouvian tax is paid by consumers; a revenue-raising tax is paid by producers',
          'A Pigouvian tax creates a deadweight welfare loss; a revenue-raising tax is always welfare-neutral'
        ],
        ans: 0,
        exp: 'The key distinction is purpose and design: <strong>Pigouvian tax</strong> (named after economist A.C. Pigou): corrective – designed to align MPC with MSC by adding the marginal external cost to the producer\'s private cost. Success means output falls to Q* (the social optimum) – it may generate less revenue if it successfully reduces the taxed activity. <strong>Revenue-raising tax</strong>: fiscal purpose – designed to fund public spending. Revenue maximisation suggests taxing inelastic goods heavily. A carbon tax that successfully eliminates carbon-intensive production raises little revenue – but achieves its environmental goal. A tobacco duty that fails to reduce smoking raises lots of revenue – but fails its health goal. The two purposes can be in tension.'
      },

      /* 4 – MCQ: regressive taxation */
      { type: 'mcq',
        stem: 'UK fuel duty is often described as <strong>regressive</strong>. This means:',
        opts: [
          'Low-income households spend a higher proportion of their income on fuel duty – the tax takes a larger percentage of income from the poor than the rich, even if the absolute amount may be similar',
          'Fuel duty is paid only by high-income households who drive expensive cars',
          'Fuel duty is a progressive tax – higher earners who drive more pay more in absolute terms',
          'Fuel duty is regressive only in theory – in practice, the tax affects all income groups equally'
        ],
        ans: 0,
        exp: 'A <strong>regressive tax</strong> takes a higher proportion of income from lower-income households. Fuel duty: even if a low-income household spends £800/year on fuel duty and a high-income household spends £1,200/year – if low-income household earns £20,000 (4% of income) and high-income earns £80,000 (1.5% of income), the tax is regressive. Most indirect taxes (VAT, tobacco, alcohol, fuel) are regressive because lower-income households spend a higher share of income on basic goods. This creates a tension: Pigouvian fuel taxes are efficient (corrects negative externality of driving) but regressive (distributional cost on low earners). Revenue recycling (fuel duty rebates, income tax cuts) can partially address this.'
      },

      /* 5 – Para fill: tax policy analysis */
      { type: 'para_fill',
        stem: 'Complete the paragraph analysing the role of taxation in correcting market failure.',
        anchor: 'Taxation is one of the most powerful tools available to governments to correct externalities.',
        para: 'When a firm produces a good with a negative [1], its marginal private cost is [2] than its marginal social cost. The free market produces [3] of the good than is socially optimal. A Pigouvian [4] equal to the marginal [5] cost per unit shifts the firm\'s private cost curve upward to equal the [6] cost. The firm now produces at the [7] optimum where MSC equals MSB. The government collects [8] revenue that can be used to [9] those harmed by the externality. However, setting the correct [10] rate requires accurate measurement of the external cost – a significant practical challenge.',
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
        exp: '(1) Negative <strong>externality</strong>. (2) MPC is <strong>lower</strong> than MSC. (3) Produces <strong>more</strong> – overproduction. (4) Pigouvian <strong>tax</strong>. (5) Marginal <strong>external</strong> cost. (6) <strong>Social</strong> cost. (7) <strong>Social</strong> optimum. (8) Collects <strong>tax</strong> revenue. (9) Used to <strong>compensate</strong> those harmed (or fund public goods – "double dividend"). (10) Setting the <strong>tax</strong> rate requires measuring external cost. This is the standard analytical paragraph for any negative externality question asking for a corrective tax analysis.'
      },

      /* 6 – Cause & effect: tax chain */
      { type: 'cause_effect',
        stem: 'Match each tax policy action to its economic effect.',
        pairs: [
          { cause: 'UK government raises income tax rate for higher earners', effect: 'Direct tax becomes more progressive – higher earners pay a larger percentage of income' },
          { cause: 'VAT rate raised from 17.5% to 20% on all goods and services', effect: 'Indirect tax becomes more regressive – low-income households pay a higher proportion of income' },
          { cause: 'Carbon tax set equal to the social cost of carbon (£50/tonne)', effect: 'Firms internalise external cost; output falls to social optimum; DWL eliminated' },
          { cause: 'Tax on cigarettes set well above the Pigouvian rate', effect: 'Over-correction – output falls below social optimum; DWL re-emerges on other side' },
          { cause: 'Sugar levy on soft drinks (UK 2018)', effect: 'Firms reformulate products to reduce sugar content – innovation incentive from the tax' },
          { cause: 'Tax cut financed by borrowing before an election', effect: 'Short-term boost to consumer spending; long-run higher debt burden – political myopia' }
        ],
        exp: 'Tax effects vary by type and setting: <strong>income tax</strong> can be progressive (higher rates on higher incomes); <strong>VAT</strong> is regressive; <strong>Pigouvian tax</strong> correctly set eliminates DWL; Pigouvian tax <em>over-set</em> creates new DWL; <strong>design-based taxes</strong> (sugar levy) create innovation incentives – firms reformulate rather than just paying the tax (the UK sugar levy successfully reduced average sugar content in soft drinks by 35% before it even took effect, as firms pre-emptively reformulated); <strong>pre-election tax cuts</strong> demonstrate political myopia.'
      },

      /* 7 – Match pairs: tax concepts */
      { type: 'match_pairs',
        stem: 'Match each tax concept to its definition.',
        pairs: [
          { a: 'Progressive tax', b: 'Tax rate rises as income rises – takes a higher percentage from higher earners' },
          { a: 'Regressive tax', b: 'Tax takes a higher percentage of income from lower earners in practice' },
          { a: 'Proportional tax', b: 'Same percentage of income taken at all income levels' },
          { a: 'Pigouvian tax', b: 'Tax equal to MEC – corrects negative externality overproduction' },
          { a: 'Hypothecated tax', b: 'Tax revenue dedicated to a specific spending purpose (e.g. NHS levy)' },
          { a: 'Laffer curve', b: 'At very high tax rates, revenue falls because incentives to work/invest collapse' }
        ],
        exp: 'Tax classification: <strong>progressive</strong> (UK income tax: 20/40/45% rates – higher income, higher rate); <strong>regressive</strong> (indirect taxes in practice – VAT, fuel, tobacco); <strong>proportional</strong> (flat tax – sometimes proposed as simpler and more efficient). <strong>Hypothecation</strong> (earmarking) can improve political acceptability of taxes (people more willing to pay if they see where it goes) but reduces fiscal flexibility. <strong>Laffer curve</strong>: theoretical peak revenue rate – debated where exactly it is; used by supply-siders to argue for rate cuts, though evidence that current UK/US top rates are above the Laffer peak is weak.'
      },

      /* 8 – Odd one out: corrective taxes */
      { type: 'odd_one_out',
        stem: 'Three of these are examples of <strong>corrective (Pigouvian) taxes</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '⛽', label: 'UK fuel duty – designed to reflect the external costs of carbon emissions and road congestion', note: '' },
          { icon: '🚬', label: 'Tobacco duty – designed to reflect healthcare costs and secondhand smoke externalities', note: '' },
          { icon: '💼', label: 'Income tax – charged on earnings to raise revenue for public services', note: '' },
          { icon: '🍬', label: 'UK Soft Drinks Industry Levy (sugar tax) – designed to reduce overconsumption of sugar', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>income tax</strong>. Income tax is a fiscal (revenue-raising) tax – its primary purpose is to fund government spending, not to correct a market failure. It has no direct corrective element (earned income is not a negative externality). The other three are corrective (Pigouvian) taxes: fuel duty reflects carbon and congestion externalities; tobacco duty reflects secondhand smoke and healthcare cost externalities; the sugar levy reflects health externalities from sugar overconsumption and information failure (consumers underestimate health risks). Note: in practice, fuel duty and tobacco duty also serve revenue purposes – the Pigouvian and fiscal motivations overlap.'
      },

      /* 9 – Data table: UK carbon tax and energy */
      { type: 'data_table',
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
          'Rising carbon prices sent a strong price signal – coal became unprofitable and was rapidly displaced by renewables, consistent with a Pigouvian tax correcting a negative externality (carbon emissions)',
          'The data show that carbon prices are too high – eliminating almost all coal generation shows over-correction below the social optimum',
          'The correlation proves that carbon taxes alone caused the energy transition – no other factors matter',
          'The near-elimination of coal shows the tax failed – a successful Pigouvian tax should reduce but not eliminate the taxed activity'
        ],
        ans: 0,
        exp: 'The data show a strong correlation: carbon prices rising from £6 to £65/tonne (×11) while coal\'s generation share collapsed from 22% to 1%. This is consistent with a Pigouvian tax correcting carbon externalities – making coal expensive relative to its private cost, signalling its social cost, and incentivising the shift to renewables. Option B: near-zero coal may actually be the social optimum if coal\'s MSC (including climate damage) greatly exceeds its MSB at any positive quantity. Option C is too strong – technology cost falls, gas price changes, and renewable subsidies also contributed. Option D misunderstands Pigouvian taxes – their goal is to reach Q*, which for coal may indeed be near zero.'
      },

      /* 10 – Multi-select: evaluation of taxation policy */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of taxation as a policy instrument?',
        opts: [
          'Taxes reduce the incentive to consume demerit goods and can raise revenue simultaneously',
          'While Pigouvian taxes are theoretically optimal, their effectiveness in practice is conditional on price elasticity: for highly inelastic goods (heroin, cigarettes among addicts), even very high taxes may fail to reduce consumption to the social optimum – suggesting that taxation alone may be insufficient and must be combined with treatment programmes and regulations for goods with severe addiction externalities',
          'Progressive income taxes reduce inequality by redistributing from high to low earners',
          'Carbon taxes face a fundamental political economy challenge: the costs (higher energy prices, reduced competitiveness) are immediate and concentrated on specific industries and consumers, while the benefits (reduced climate risk) are long-run and diffuse – creating systematic political pressure to under-set the rate, which means the market failure persists even with a nominal carbon tax in place',
          'VAT is regressive because lower-income households spend a higher proportion of income on consumption',
          'The Laffer curve argument that lower tax rates increase revenue is used to justify tax cuts for high earners, but empirical evidence for the UK and US suggests current top rates are well below the revenue-maximising point – suggesting Laffer curve arguments, while theoretically valid, are being applied outside their valid empirical range in current policy debates'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: limits the Pigouvian tax argument by identifying elasticity and addiction as binding constraints – reaches the conclusion that a combination of instruments is needed. D: identifies the political economy dynamic that systematically biases carbon tax rates downward – a structural feature of democratic decision-making that qualifies the standard theoretical prescription. F: evaluates the Laffer curve argument empirically, distinguishing the theoretical validity from the empirical application – concluding that current policy use is outside the valid range. A, C, and E are accurate descriptions without evaluative moves.'
      }

    ]
  };

})();

