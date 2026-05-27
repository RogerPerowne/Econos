(function () {

  window.ECONOS_QUIZ = {
    id:       'environmental_econ_main',
    topicId:  'environmental_econ_main',
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
        id: 'q_env_1',
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
        id: 'q_env_2',
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
        id: 'q_env_3',
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
        id: 'q_env_4',
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
        id: 'q_env_5',
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
        id: 'q_env_6',
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
        id: 'q_env_7',
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
        id: 'q_env_8',
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
        id: 'q_env_9',
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
        id: 'q_env_10',
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
