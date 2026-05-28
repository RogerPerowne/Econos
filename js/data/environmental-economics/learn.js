window.ECONOS_TOPIC = {
  id: 'environmental-economics',
  topicNum: '1.16',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Environmental Economics',
  estTime: '9-11 minutes',
  goal: 'Lock in the economics of environmental degradation, carbon markets, the sustainability debate, and the policy toolkit for environmental protection.',
  intro: {
    heroKey: 'heroExternalities',
    summary: 'Environmental economics applies externality and market failure frameworks to the planet\'s most pressing challenge. Carbon pricing, cap-and-trade, and the sustainability concept are central to modern economic policy.',
    doInThis: 'Work through 7 cards covering the environment as a public good, climate change as the ultimate externality, carbon taxes, EU ETS, sustainability, the Stern Review, and the trade-off between growth and environmental protection.',
    outcomes: [
      'Explain why environmental degradation is a market failure using the externality framework',
      'Compare carbon taxes and cap-and-trade mechanisms for reducing emissions',
      'Define sustainability and explain its economic dimensions',
      'Evaluate the case for prioritising environmental protection against economic growth'
    ],
    tip: 'The environment provides three economic services: resource inputs, waste sink, and amenity value. Market prices capture the first poorly, the second not at all, and the third barely – hence systematic environmental market failure.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'environmental_econ_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Environmental economics: the big picture',
      lede: 'The environment is the ultimate under-priced resource – and climate change is the largest market failure in history.',
      tip: 'Frame environmental problems as economic problems: the atmosphere is running out of waste-sink capacity and the price signal is absent. Carbon pricing is the attempt to create that missing price signal.',
      branches: [
        { tone: 'green',  label: 'The environment as resource', sub: 'Three services markets under-price: raw inputs, waste sink capacity, and amenity value.' },
        { tone: 'rose',   label: 'Climate as market failure',   sub: 'Stern: global, long-horizon, irreversible, pervasive – every textbook failure compounded.' },
        { tone: 'blue',   label: 'Carbon taxes',                sub: 'Pigouvian price on emissions: simple, transparent, but politically painful and hard to calibrate.' },
        { tone: 'amber',  label: 'Cap-and-trade',               sub: 'Set total emissions, let firms trade permits. Quantity-certain, price-volatile – the EU ETS model.' },
        { tone: 'purple', label: 'Sustainability & growth',     sub: 'Can growth be decoupled from environmental harm? International agreements, free-riding, and the equity question.' }
      ],
      body: 'The natural environment provides three distinct economic services, each of which the market systematically under-prices:<br><br>1. <strong>Resource inputs:</strong> raw materials, energy, water, food. Markets price these but often below full social cost (depletion externalities, subsidy distortions).<br>2. <strong>Waste sink:</strong> the atmosphere, rivers, and soils absorb waste (CO2, chemicals, plastics). Markets treat this as a free service – but capacity is finite.<br>3. <strong>Amenity value:</strong> biodiversity, landscapes, clean air, recreational spaces – valued by people but poorly captured in market prices.<br><br>Environmental economics seeks to internalise these values into market prices – making environmental degradation economically costly.',
      keyTerms: [
        { term: 'Natural capital', def: 'The stock of natural resources and ecosystems that provide economic services – equivalent to man-made capital.' },
        { term: 'Ecosystem services', def: 'Benefits provided by nature: pollination, carbon sequestration, flood regulation, clean water – largely unpriced by markets.' },
        { term: 'Waste sink capacity', def: 'The finite ability of the environment to absorb pollution without permanent degradation – treated as a free good by markets.' }
      ],
      examEdge: 'Environmental economics reframes environmental problems as economic ones: the planet is running out of waste sink capacity (atmosphere for CO2) and the price signal for this scarcity is absent. Carbon pricing is the attempt to create that price signal. This framing is analytically powerful for essays.'
    },
    {
      id: 'environmental_econ_2',
      template: 'framing',
      title: 'Climate Change: The Greatest Market Failure',
      body: 'Sir Nicholas Stern (2006): "Climate change is the greatest market failure the world has ever seen." Why?<br><br>1. <strong>Massive externality:</strong> carbon emissions impose costs on all, but emitters bear little of the cost.<br>2. <strong>Global spillover:</strong> emissions anywhere affect climate everywhere – no national government can internalise the cost alone.<br>3. <strong>Long time horizon:</strong> costs of climate change fall heavily on future generations who have no current market voice.<br>4. <strong>Irreversibility:</strong> some climate tipping points (ice sheet collapse, permafrost thaw) are irreversible – precautionary principle applies.<br>5. <strong>Scale:</strong> virtually all economic activity generates emissions – the market failure is pervasive, not isolated.',
      keyTerms: [
        { term: 'Stern Review', def: '2006 UK government report concluding climate change is the largest market failure ever – advocating urgent carbon pricing and international cooperation.' },
        { term: 'Social cost of carbon', def: 'The economic cost of one additional tonne of CO2 in the atmosphere – estimated at $51-$185/tonne. The optimal carbon tax equals this.' },
        { term: 'Tipping point', def: 'A threshold in the climate system beyond which change becomes self-reinforcing and irreversible – creates case for precautionary action.' }
      ],
      examEdge: 'Stern vs Nordhaus: key debate is the discount rate applied to future climate damages. Stern (low 1.4% discount rate) → act now aggressively. Nordhaus (higher 4-5% discount rate) → gradual action cheaper. This is a positive/normative debate – discount rate reflects value judgement about how much future generations matter.'
    },
    {
      id: 'environmental_econ_3',
      template: 'mechanisms',
      title: 'Carbon Taxes (Pigouvian Approach)',
      intro: 'A carbon tax sets a price on emissions equal to the social cost of carbon – internalising the externality into market prices.',
      steps: [
        { label: '💸 Mechanism', text: 'Tax per tonne of CO2 equal to MEC at socially optimal output. Raises MPC to equal MSC → firms reduce emissions to socially optimal level. Price signal cascades through the economy: energy prices rise → switch to low-carbon alternatives.' },
        { label: '💰 Revenue use', text: 'Carbon tax raises significant revenue. Options: green investment (circular), dividend to citizens (climate dividend – popular), reduce other taxes (revenue-neutral), fund low-income household support (regressive impact mitigation).' },
        { label: '🇬🇧 UK context', text: 'UK has a carbon floor price for electricity generators (~£22/tonne CO2) and participates in the UK ETS (~£40-60/tonne). Fuel duty is a de facto carbon tax (~53p/litre petrol).' },
        { label: '⚠️ Limitations', text: 'Difficult to set at the "correct" level (MEC uncertain); regressive (energy costs are a higher share of low-income budgets); risk of carbon leakage if other countries don\'t impose equivalent taxes.' }
      ],
      examEdge: 'Carbon tax advantages vs cap-and-trade: tax provides price certainty (firms know the cost per tonne); cap-and-trade provides quantity certainty (total emissions capped). If the MEC curve is steeply rising (dangerous tipping points), quantity certainty (cap) is more important. If the MAC (abatement cost) curve is steep, price certainty (tax) prevents catastrophic abatement costs. Weitzman\'s rule – a subtle but high-quality evaluation point.'
    },
    {
      id: 'environmental_econ_4',
      template: 'mechanisms',
      title: 'Cap-and-Trade (Emissions Trading)',
      intro: 'Cap-and-trade combines a quantity limit with market-based flexibility for firms in how they achieve it.',
      steps: [
        { label: '📊 Cap', text: 'Regulator sets a cap on total emissions across all covered firms. Permits are issued equal to the cap. Total emissions cannot exceed the cap – the quantity target is certain.' },
        { label: '🔄 Trade', text: 'Firms that reduce emissions below their permit allocation can sell excess permits. Firms that cannot reduce cheaply buy permits. Emission reductions happen where they are cheapest – the market allocates abatement efficiently.' },
        { label: '💡 Price signal', text: 'Permit price (EU ETS: ~€60-80/tonne CO2) creates an incentive to invest in clean technology. As the cap tightens over time, permit price rises – increasing incentive to decarbonise.' },
        { label: '🇪🇺 EU ETS experience', text: 'Launched 2005 – initially over-generous permit allocation → price near zero → little incentive. Post-2018 reforms tightened cap → prices rose → significant investment in clean energy. UK ETS launched post-Brexit 2021.' }
      ],
      examEdge: 'EU ETS weakness is instructive: free permit allocation to heavy industry (cement, steel) to prevent carbon leakage undermined the price signal initially. The lesson: the effectiveness of cap-and-trade depends critically on the tightness of the cap and the auctioning vs free allocation of permits. Evaluation point: design matters as much as the mechanism.'
    },
    {
      id: 'environmental_econ_5',
      template: 'framing',
      title: 'Sustainability',
      body: '<strong>Sustainable development</strong> (Brundtland Commission, 1987): "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs."<br><br>Economic sustainability requires maintaining the total stock of capital:<br>• <strong>Weak sustainability:</strong> natural capital can be substituted by man-made capital – OK to deplete oil reserves if the proceeds are invested in renewable energy infrastructure.<br>• <strong>Strong sustainability:</strong> natural capital is not fully substitutable – some ecosystem services (biodiversity, climate stability) cannot be replaced by man-made capital. Must preserve natural capital stocks.<br><br>The debate between weak and strong sustainability is central to environmental policy design.',
      keyTerms: [
        { term: 'Sustainable development', def: 'Development meeting present needs without compromising future generations\' ability to meet theirs – Brundtland definition.' },
        { term: 'Weak sustainability', def: 'Natural and man-made capital are substitutable – total capital stock maintained regardless of composition.' },
        { term: 'Strong sustainability', def: 'Natural capital must be preserved; man-made capital cannot fully substitute – some natural systems are irreplaceable.' }
      ],
      examEdge: 'Weak vs strong sustainability is a genuine policy debate. North Sea oil depletion: UK used revenues for tax cuts (weak sustainability – converted natural to financial capital, but not preserved). Norway used revenues for sovereign wealth fund (Norges Bank – converted natural capital to man-made financial capital). Norway represents closer to weak sustainability in action.'
    },
    {
      id: 'environmental_econ_6',
      template: 'framing',
      title: 'Growth vs Environmental Protection',
      verdict: {
        leftLabel: '🌱 Growth and environment can coexist',
        rightLabel: '⛔ Case for constraining growth',
        separator: 'VS',
        rows: [
          { aspect: 'Evidence', left: 'Environmental Kuznets Curve: as income rises, environmental quality first falls then rises – rich countries invest in clean technology and regulation', right: 'Global emissions still rising despite EKC holds for rich countries – EKC may just export pollution' },
          { aspect: 'UK case', left: 'UK GDP grew 22% 2000-2020; CO2 fell 44% – demonstrable decoupling of growth from emissions', right: 'GDP growth may be inconsistent with 1.5°C targets – deep cuts require consumption reduction' },
          { aspect: 'Green economy', left: 'Green growth: renewable energy, EVs, circular economy can be profitable sectors driving future growth', right: 'Rebound effect: efficiency gains are spent on more consumption, potentially offsetting emissions reductions' },
          { aspect: 'Policy', left: 'Carbon pricing internalises cost → innovation → clean growth without sacrificing prosperity', right: 'Doughnut economics (Kate Raworth): growth beyond planetary boundaries is destructive regardless of income level' }
        ]
      },
      examEdge: 'The Environmental Kuznets Curve is key exam content: the inverted-U relationship between income and environmental degradation. Supporting evidence: rich countries have cleaner local environments (air, water). Counter-evidence: global carbon emissions still track with global income. Evaluation: EKC may describe pollution shift, not reduction – manufacturing exported to developing countries.'
    },
    {
      id: 'environmental_econ_7',
      template: 'framing',
      title: 'International Environmental Agreements',
      body: '<strong>Paris Agreement (2015):</strong> 196 parties agreed to limit global warming to well below 2°C, pursuing 1.5°C. Nationally Determined Contributions (NDCs) – voluntary national pledges. Mechanism: no enforcement; pledges are politically binding, not legally. Assessment: current NDCs put world on track for ~2.5-3°C warming – insufficient.<br><br><strong>Kyoto Protocol (1997):</strong> binding targets for developed countries; US withdrew; did not include China or India. Limited effectiveness.<br><br><strong>Economic problem:</strong> global commons (the atmosphere) = classic free rider problem at international level. Countries benefit from others\' abatement without reducing their own emissions. Coase solution impossible (too many parties, no enforcement mechanism).',
      keyTerms: [
        { term: 'Paris Agreement', def: '2015 multilateral climate deal – voluntary national pledges to limit warming; no binding enforcement mechanism.' },
        { term: 'Global commons', def: 'Resources shared by all (atmosphere, oceans) – subject to the tragedy of the commons when unregulated.' },
        { term: 'Tragedy of the commons', def: 'Shared resources are over-exploited because each individual gains the full benefit but bears only a fraction of the cost.' }
      ],
      examEdge: 'International environmental agreements face the collective action problem at the global level: no supranational authority can compel compliance. This is the fundamental reason climate policy is harder than domestic environmental policy – the externality is global but governance is national. Use the term "international public good" for a stable climate – reinforces why market failure is so intractable.',
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
    title:    'Environmental Economics',
    subtitle: 'Theme 1.16 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('environmental_econ_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers carbon markets, tradeable permits, externalities, Coase theorem, sustainability, and climate policy evaluation',
    shortNames: [
      'Carbon externality MCQ', 'Policy instruments sort', 'ETS mechanism', 'Coase theorem',
      'Sustainability MCQ', 'Cause & effect', 'Match pairs', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: carbon as negative externality */
      { type: 'mcq',
        stem: 'Carbon dioxide emissions from burning fossil fuels represent a <strong>negative externality of production and consumption</strong>. This means:',
        opts: [
          'The social cost of carbon-intensive activities exceeds the private cost – energy users and firms do not bear the full climate damage costs imposed on current and future generations globally',
          'Carbon emissions are a positive externality – they raise temperatures, benefiting cold countries and making agricultural production easier',
          'Carbon is only a problem for countries that consume more fossil fuels than they produce – net importers bear all the external cost',
          'The negative externality means fossil fuel production will automatically cease as governments impose regulations'
        ],
        ans: 0,
        exp: 'Carbon emissions create a global negative externality: the burning of fossil fuels in one country imposes climate costs on the entire planet – rising sea levels, extreme weather, biodiversity loss, agricultural disruption. These costs are not reflected in the market price of energy. MSC > MPC → overproduction and overconsumption of carbon-intensive goods relative to the social optimum. This is one of the most significant market failures globally – and the economic rationale for carbon pricing, cap-and-trade, green subsidies, and international agreements like the Paris Accord.'
      },

      /* 2 – Elastic sort: environmental policy instruments */
      { type: 'elastic_sort',
        stem: 'Classify each environmental policy instrument as <strong>market-based</strong> or <strong>command-and-control</strong>.',
        categories: ['market_based', 'command_control'],
        categoryLabels: ['Market-based instrument', 'Command-and-control regulation'],
        goods: [
          { icon: '💱', label: 'EU Emissions Trading Scheme – firms buy and sell carbon allowances', note: '', ans: 'market_based' },
          { icon: '🚫', label: 'Ban on new petrol and diesel car sales from 2035', note: '', ans: 'command_control' },
          { icon: '💰', label: 'UK fuel duty of 52.95p per litre of petrol', note: '', ans: 'market_based' },
          { icon: '📏', label: 'Mandatory energy efficiency standards for new buildings', note: '', ans: 'command_control' },
          { icon: '🌱', label: 'Government subsidy for solar panel installation', note: '', ans: 'market_based' },
          { icon: '⚠️', label: 'Pollution permits system with a cap on total emissions', note: '', ans: 'market_based' }
        ],
        exp: '<strong>Market-based instruments</strong>: use price signals to change behaviour – taxes (raise cost of polluting), subsidies (lower cost of clean alternatives), tradeable permits (create a market in pollution rights). Advantages: achieve reduction at lowest cost (firms that reduce cheaply will reduce most), generate revenue/innovation incentives. <strong>Command-and-control</strong>: direct regulation – standards, bans, permits. Advantages: certain outcomes (ban = zero emissions), easier to enforce in some contexts. Disadvantages: do not incentivise innovation beyond the standard; may not be cost-efficient across firms with different abatement costs.'
      },

      /* 3 – MCQ: emissions trading scheme */
      { type: 'mcq',
        stem: 'The EU Emissions Trading Scheme (ETS) works by:',
        opts: [
          'Setting a cap on total CO₂ emissions; distributing tradeable permits equal to the cap; firms that reduce emissions below their allocation can sell surplus permits; firms that need more permits must buy them – the permit price creates a carbon price across the economy',
          'Taxing every tonne of CO₂ at a fixed rate; firms pay the tax directly to the government on all emissions',
          'Subsidising clean energy firms to reduce their costs; market forces then drive the transition to renewables',
          'Setting emission standards for each sector and fining firms that exceed their limit'
        ],
        ans: 0,
        exp: 'Cap-and-trade (ETS): the cap ensures total emissions stay within the environmental limit. Permits are initially allocated (by auction or free allocation) and can be traded. Firms with low abatement costs reduce emissions below their cap and sell permits → profit. Firms with high abatement costs buy permits rather than reduce → pay others to reduce for them. This achieves the total emission target at <strong>minimum total cost</strong> (the Coase theorem in action – cost efficiency through trade). The permit price emerges from supply (cap) and demand (firms\' abatement costs) – a market-determined carbon price. The main risk: if the cap is set too generously, permit prices collapse and the incentive to reduce disappears (as happened in early EU ETS phases).'
      },

      /* 4 – MCQ: Coase theorem */
      { type: 'mcq',
        stem: 'The <strong>Coase theorem</strong> states that:',
        opts: [
          'If property rights are well-defined and bargaining costs are zero, private parties can negotiate to the social optimum without government intervention – regardless of who holds the property right',
          'Government must always intervene to correct externalities because private parties can never negotiate efficient outcomes',
          'Pollution should be fully eliminated through regulation – the social optimum requires zero emissions',
          'The polluter must always pay – there is no efficient outcome in which those harmed pay for pollution to be reduced'
        ],
        ans: 0,
        exp: 'Coase (1960): if property rights are clearly assigned and transaction costs are zero, affected parties will bargain to the efficient outcome. If a factory has the right to pollute, affected communities will pay it to reduce pollution up to the point where MEB of reduction = MEC of abatement. If communities have the right to clean air, the factory will pay them to accept some pollution up to the same point. Either way, the social optimum is reached. The theorem is powerful in theory but limited in practice: real-world externalities (climate change) involve millions of parties and enormous transaction costs – negotiation is impractical, requiring government intervention. Property rights to the atmosphere are unclear internationally, making Coasian solutions to climate change essentially impossible.'
      },

      /* 5 – MCQ: sustainability */
      { type: 'mcq',
        stem: 'The Brundtland Commission defined <strong>sustainable development</strong> as:',
        opts: [
          'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs',
          'Economic growth that continues indefinitely without any environmental constraint or resource depletion',
          'Development that prioritises environmental protection over economic growth in all circumstances',
          'Growth that is sustained at its current rate for at least 25 years without significant disruption'
        ],
        ans: 0,
        exp: 'The Brundtland definition (1987, "Our Common Future") is the standard: sustainability requires inter-generational equity – current consumption must not deplete natural capital to the point where future generations cannot meet their needs. This involves: maintaining biodiversity and ecosystem services; keeping carbon emissions within the atmosphere\'s absorptive capacity; preserving non-renewable resources or developing substitutes; and managing renewable resources (fish stocks, forests) within their natural regeneration rates. The tension in economics: present consumption vs future capacity – the discount rate determines how much we value future wellbeing relative to current consumption.'
      },

      /* 6 – Cause & effect: environmental policy mechanisms */
      { type: 'cause_effect',
        stem: 'Match each environmental policy to the mechanism by which it reduces emissions.',
        pairs: [
          { cause: 'Carbon tax of £50/tonne CO₂', effect: 'Raises cost of carbon-intensive production – firms switch to lower-carbon alternatives or reduce output' },
          { cause: 'Tradeable carbon permits with decreasing annual cap', effect: 'Permit price creates incentive to reduce emissions; declining cap ensures total reduction over time' },
          { cause: 'Subsidy for home insulation', effect: 'Reduces private cost of energy efficiency – more homes insulated; gas demand falls' },
          { cause: 'Ban on single-use plastics', effect: 'Eliminates market entirely – no price adjustment needed; immediate quantity reduction to zero' },
          { cause: 'Green investment bank lending to renewable energy projects', effect: 'Fills financing gap in markets where private banks underprovide; accelerates low-carbon capacity' },
          { cause: 'Biodiversity net gain requirement on development', effect: 'Forces developers to compensate for habitat loss – internalises biodiversity externality through regulation' }
        ],
        exp: 'Each policy works through a different mechanism: <strong>carbon tax</strong> → price incentive (Pigouvian); <strong>tradeable permits</strong> → quantity certainty with cost efficiency; <strong>subsidies</strong> → reduce cost of clean alternatives; <strong>bans</strong> → eliminate the activity (command-and-control); <strong>public finance</strong> → addresses market failure in capital markets for long-term low-carbon investment; <strong>regulatory standards</strong> → internalise biodiversity externality through development conditions. A comprehensive environmental policy typically combines multiple instruments to address different aspects of the market failure.'
      },

      /* 7 – Match pairs: environmental economics concepts */
      { type: 'match_pairs',
        stem: 'Match each concept to its definition.',
        pairs: [
          { a: 'Cap-and-trade (ETS)', b: 'Sets total emissions limit; firms trade permits; price emerges from market' },
          { a: 'Carbon tax', b: 'Fixed price per tonne of CO₂ – quantity reduction is uncertain but price is certain' },
          { a: 'Externality', b: 'Cost or benefit imposed on third parties not reflected in market prices' },
          { a: 'Social cost of carbon (SCC)', b: 'Estimated monetary value of climate damage from emitting one tonne of CO₂' },
          { a: 'Natural capital', b: 'Stocks of natural assets that provide ecosystem services – stocks of clean air, water, biodiversity' },
          { a: 'Environmental Kuznets Curve', b: 'Hypothesis that pollution first rises then falls as countries develop – inverted U shape' }
        ],
        exp: 'Key environmental economics concepts: <strong>ETS vs carbon tax</strong> is the central policy debate – tax gives price certainty, ETS gives quantity certainty; <strong>SCC</strong> is the key parameter for setting carbon taxes – estimated at $51-185/tonne CO₂ depending on discount rate; <strong>natural capital</strong> accounting integrates environmental assets into national wealth measures; <strong>EKC</strong> (Kuznets, 1955) – evidence mixed: pollution of particulates follows the pattern but CO₂ does not reliably decline with income; this suggests carbon pricing is needed rather than relying on development alone.'
      },

      /* 8 – Odd one out: market-based environmental instruments */
      { type: 'odd_one_out',
        stem: 'Three of these are <strong>market-based environmental instruments</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '💱', label: 'EU Emissions Trading Scheme – firms trade carbon allowances to reduce total emissions at lowest cost', note: '' },
          { icon: '⛽', label: 'UK fuel duty – taxes petrol to reflect external costs of carbon emissions and congestion', note: '' },
          { icon: '🚫', label: 'A complete ban on coal-fired electricity generation from 2025', note: '' },
          { icon: '🌱', label: 'Government subsidy for electric vehicles to reflect positive environmental externality', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>a ban on coal-fired electricity</strong>. This is a command-and-control instrument – it directly prohibits an activity rather than using price signals to change behaviour. The other three are market-based: ETS creates a market in emission permits; fuel duty applies a Pigouvian price to carbon-intensive consumption; EV subsidies reduce the relative cost of clean alternatives. The ban achieves certainty (zero coal) but sacrifices the cost-efficiency of market mechanisms – it does not allow firms to choose the least-cost path to reducing carbon, potentially imposing higher abatement costs than necessary.'
      },

      /* 9 – Data table: UK carbon emissions and ETS */
      { type: 'data_table',
        stem: 'The table shows UK carbon data and key policy milestones.',
        headers: ['Year', 'UK GHG emissions (MtCO₂e)', 'UK ETS/CPS price (£/tonne)', 'Renewables share of electricity (%)'],
        rows: [
          ['2005', '638', '7', '5%'],
          ['2010', '582', '6', '7%'],
          ['2015', '489', '18', '25%'],
          ['2020', '414', '45', '43%'],
          ['2022', '419', '65', '47%']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data?',
        opts: [
          'UK emissions fell 34% over 2005–2022 alongside rising carbon prices and renewable capacity – consistent with market-based carbon pricing contributing to decarbonisation alongside structural changes',
          'Carbon pricing alone caused the emissions reduction – the data prove no other policy intervention was needed',
          'The emissions increase from 2020 to 2022 proves that carbon pricing is failing to reduce emissions',
          'Higher carbon prices always reduce emissions proportionally – the data show a linear relationship'
        ],
        ans: 0,
        exp: 'UK emissions fell from 638 to 419 MtCO₂e (−34%) as carbon prices rose from £7 to £65/tonne and renewables grew from 5% to 47% of electricity. This is consistent with carbon pricing (signalling, incentive) AND structural change (technology costs, regulation) working together. Option B is too strong – renewable subsidies, energy efficiency regulations, and deindustrialisation also contributed. Option C: the slight 2020-2022 rise reflects post-COVID economic recovery – not evidence of policy failure. Option D: the relationship is not linear – the 2020 pandemic caused a temporary emissions drop independent of the carbon price, then partial recovery as activity resumed.'
      },

      /* 10 – Multi-select: evaluation of carbon pricing */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of carbon pricing as an environmental policy instrument?',
        opts: [
          'Carbon pricing internalises the negative externality of CO₂ by raising the private cost toward the social cost',
          'Carbon taxes achieve their environmental goal with greater economic efficiency than regulatory standards, but face a fundamental distributive problem: energy costs are a higher proportion of low-income households\' budgets, making carbon taxes regressive without compensatory redistribution – carbon tax proponents who ignore this create political opposition that may prevent the tax from being set at the socially optimal level',
          'Cap-and-trade systems create a market in pollution permits where firms can buy and sell the right to emit',
          'The EU ETS\'s effectiveness has been limited in earlier phases by over-generous permit allocation – permit prices collapsed, removing the incentive to decarbonise; this was a government failure within a market mechanism, suggesting that well-designed cap-and-trade requires constant calibration of the cap to be effective',
          'The social cost of carbon measures the damage from one tonne of CO₂',
          'International carbon pricing faces an inherent free-rider problem at the global level: countries that decarbonise gain cleaner air but bear the full cost, while countries that continue to emit benefit from others\' reductions without cost – suggesting unilateral carbon taxes may impose competitive disadvantage without achieving the global reduction needed, and that multilateral mechanisms (Paris Agreement, carbon border adjustments) are necessary but face severe coordination difficulties'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: identifies the regressive distributional problem with carbon taxes and connects it to the political economy of setting the optimal rate – a multi-step evaluation with a policy direction. D: evaluates the EU ETS in practice, identifying the government failure (over-generous caps) that undermined the mechanism – a real-world case study that qualifies the theoretical superiority of cap-and-trade. F: identifies the global free-rider problem as the fundamental challenge and evaluates available solutions (multilateral agreements, border adjustments) while acknowledging their coordination difficulties – a sophisticated multi-level evaluation. A, C, and E are descriptions.'
      }

    ]
  };

})();

