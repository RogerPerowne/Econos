window.ECONOS_TOPIC = {
  id: 'environmental_econ',
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
    tip: 'The environment provides three economic services: resource inputs, waste sink, and amenity value. Market prices capture the first poorly, the second not at all, and the third barely — hence systematic environmental market failure.',
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
      lede: 'The environment is the ultimate under-priced resource — and climate change is the largest market failure in history.',
      tip: 'Frame environmental problems as economic problems: the atmosphere is running out of waste-sink capacity and the price signal is absent. Carbon pricing is the attempt to create that missing price signal.',
      branches: [
        { tone: 'green',  label: 'The environment as resource', sub: 'Three services markets under-price: raw inputs, waste sink capacity, and amenity value.' },
        { tone: 'rose',   label: 'Climate as market failure',   sub: 'Stern: global, long-horizon, irreversible, pervasive — every textbook failure compounded.' },
        { tone: 'blue',   label: 'Carbon taxes',                sub: 'Pigouvian price on emissions: simple, transparent, but politically painful and hard to calibrate.' },
        { tone: 'amber',  label: 'Cap-and-trade',               sub: 'Set total emissions, let firms trade permits. Quantity-certain, price-volatile — the EU ETS model.' },
        { tone: 'purple', label: 'Sustainability & growth',     sub: 'Can growth be decoupled from environmental harm? International agreements, free-riding, and the equity question.' }
      ],
      body: 'The natural environment provides three distinct economic services, each of which the market systematically under-prices:<br><br>1. <strong>Resource inputs:</strong> raw materials, energy, water, food. Markets price these but often below full social cost (depletion externalities, subsidy distortions).<br>2. <strong>Waste sink:</strong> the atmosphere, rivers, and soils absorb waste (CO2, chemicals, plastics). Markets treat this as a free service — but capacity is finite.<br>3. <strong>Amenity value:</strong> biodiversity, landscapes, clean air, recreational spaces — valued by people but poorly captured in market prices.<br><br>Environmental economics seeks to internalise these values into market prices — making environmental degradation economically costly.',
      keyTerms: [
        { term: 'Natural capital', def: 'The stock of natural resources and ecosystems that provide economic services — equivalent to man-made capital.' },
        { term: 'Ecosystem services', def: 'Benefits provided by nature: pollination, carbon sequestration, flood regulation, clean water — largely unpriced by markets.' },
        { term: 'Waste sink capacity', def: 'The finite ability of the environment to absorb pollution without permanent degradation — treated as a free good by markets.' }
      ],
      examEdge: 'Environmental economics reframes environmental problems as economic ones: the planet is running out of waste sink capacity (atmosphere for CO2) and the price signal for this scarcity is absent. Carbon pricing is the attempt to create that price signal. This framing is analytically powerful for essays.'
    },
    {
      id: 'environmental_econ_2',
      template: 'framing',
      title: 'Climate Change: The Greatest Market Failure',
      body: 'Sir Nicholas Stern (2006): "Climate change is the greatest market failure the world has ever seen." Why?<br><br>1. <strong>Massive externality:</strong> carbon emissions impose costs on all, but emitters bear little of the cost.<br>2. <strong>Global spillover:</strong> emissions anywhere affect climate everywhere — no national government can internalise the cost alone.<br>3. <strong>Long time horizon:</strong> costs of climate change fall heavily on future generations who have no current market voice.<br>4. <strong>Irreversibility:</strong> some climate tipping points (ice sheet collapse, permafrost thaw) are irreversible — precautionary principle applies.<br>5. <strong>Scale:</strong> virtually all economic activity generates emissions — the market failure is pervasive, not isolated.',
      keyTerms: [
        { term: 'Stern Review', def: '2006 UK government report concluding climate change is the largest market failure ever — advocating urgent carbon pricing and international cooperation.' },
        { term: 'Social cost of carbon', def: 'The economic cost of one additional tonne of CO2 in the atmosphere — estimated at $51-$185/tonne. The optimal carbon tax equals this.' },
        { term: 'Tipping point', def: 'A threshold in the climate system beyond which change becomes self-reinforcing and irreversible — creates case for precautionary action.' }
      ],
      examEdge: 'Stern vs Nordhaus: key debate is the discount rate applied to future climate damages. Stern (low 1.4% discount rate) → act now aggressively. Nordhaus (higher 4-5% discount rate) → gradual action cheaper. This is a positive/normative debate — discount rate reflects value judgement about how much future generations matter.'
    },
    {
      id: 'environmental_econ_3',
      template: 'mechanisms',
      title: 'Carbon Taxes (Pigouvian Approach)',
      intro: 'A carbon tax sets a price on emissions equal to the social cost of carbon — internalising the externality into market prices.',
      steps: [
        { label: '💸 Mechanism', text: 'Tax per tonne of CO2 equal to MEC at socially optimal output. Raises MPC to equal MSC → firms reduce emissions to socially optimal level. Price signal cascades through the economy: energy prices rise → switch to low-carbon alternatives.' },
        { label: '💰 Revenue use', text: 'Carbon tax raises significant revenue. Options: green investment (circular), dividend to citizens (climate dividend — popular), reduce other taxes (revenue-neutral), fund low-income household support (regressive impact mitigation).' },
        { label: '🇬🇧 UK context', text: 'UK has a carbon floor price for electricity generators (~£22/tonne CO2) and participates in the UK ETS (~£40-60/tonne). Fuel duty is a de facto carbon tax (~53p/litre petrol).' },
        { label: '⚠️ Limitations', text: 'Difficult to set at the "correct" level (MEC uncertain); regressive (energy costs are a higher share of low-income budgets); risk of carbon leakage if other countries don\'t impose equivalent taxes.' }
      ],
      examEdge: 'Carbon tax advantages vs cap-and-trade: tax provides price certainty (firms know the cost per tonne); cap-and-trade provides quantity certainty (total emissions capped). If the MEC curve is steeply rising (dangerous tipping points), quantity certainty (cap) is more important. If the MAC (abatement cost) curve is steep, price certainty (tax) prevents catastrophic abatement costs. Weitzman\'s rule — a subtle but high-quality evaluation point.'
    },
    {
      id: 'environmental_econ_4',
      template: 'mechanisms',
      title: 'Cap-and-Trade (Emissions Trading)',
      intro: 'Cap-and-trade combines a quantity limit with market-based flexibility for firms in how they achieve it.',
      steps: [
        { label: '📊 Cap', text: 'Regulator sets a cap on total emissions across all covered firms. Permits are issued equal to the cap. Total emissions cannot exceed the cap — the quantity target is certain.' },
        { label: '🔄 Trade', text: 'Firms that reduce emissions below their permit allocation can sell excess permits. Firms that cannot reduce cheaply buy permits. Emission reductions happen where they are cheapest — the market allocates abatement efficiently.' },
        { label: '💡 Price signal', text: 'Permit price (EU ETS: ~€60-80/tonne CO2) creates an incentive to invest in clean technology. As the cap tightens over time, permit price rises — increasing incentive to decarbonise.' },
        { label: '🇪🇺 EU ETS experience', text: 'Launched 2005 — initially over-generous permit allocation → price near zero → little incentive. Post-2018 reforms tightened cap → prices rose → significant investment in clean energy. UK ETS launched post-Brexit 2021.' }
      ],
      examEdge: 'EU ETS weakness is instructive: free permit allocation to heavy industry (cement, steel) to prevent carbon leakage undermined the price signal initially. The lesson: the effectiveness of cap-and-trade depends critically on the tightness of the cap and the auctioning vs free allocation of permits. Evaluation point: design matters as much as the mechanism.'
    },
    {
      id: 'environmental_econ_5',
      template: 'framing',
      title: 'Sustainability',
      body: '<strong>Sustainable development</strong> (Brundtland Commission, 1987): "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs."<br><br>Economic sustainability requires maintaining the total stock of capital:<br>• <strong>Weak sustainability:</strong> natural capital can be substituted by man-made capital — OK to deplete oil reserves if the proceeds are invested in renewable energy infrastructure.<br>• <strong>Strong sustainability:</strong> natural capital is not fully substitutable — some ecosystem services (biodiversity, climate stability) cannot be replaced by man-made capital. Must preserve natural capital stocks.<br><br>The debate between weak and strong sustainability is central to environmental policy design.',
      keyTerms: [
        { term: 'Sustainable development', def: 'Development meeting present needs without compromising future generations\' ability to meet theirs — Brundtland definition.' },
        { term: 'Weak sustainability', def: 'Natural and man-made capital are substitutable — total capital stock maintained regardless of composition.' },
        { term: 'Strong sustainability', def: 'Natural capital must be preserved; man-made capital cannot fully substitute — some natural systems are irreplaceable.' }
      ],
      examEdge: 'Weak vs strong sustainability is a genuine policy debate. North Sea oil depletion: UK used revenues for tax cuts (weak sustainability — converted natural to financial capital, but not preserved). Norway used revenues for sovereign wealth fund (Norges Bank — converted natural capital to man-made financial capital). Norway represents closer to weak sustainability in action.'
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
          { aspect: 'Evidence', left: 'Environmental Kuznets Curve: as income rises, environmental quality first falls then rises — rich countries invest in clean technology and regulation', right: 'Global emissions still rising despite EKC holds for rich countries — EKC may just export pollution' },
          { aspect: 'UK case', left: 'UK GDP grew 22% 2000-2020; CO2 fell 44% — demonstrable decoupling of growth from emissions', right: 'GDP growth may be inconsistent with 1.5°C targets — deep cuts require consumption reduction' },
          { aspect: 'Green economy', left: 'Green growth: renewable energy, EVs, circular economy can be profitable sectors driving future growth', right: 'Rebound effect: efficiency gains are spent on more consumption, potentially offsetting emissions reductions' },
          { aspect: 'Policy', left: 'Carbon pricing internalises cost → innovation → clean growth without sacrificing prosperity', right: 'Doughnut economics (Kate Raworth): growth beyond planetary boundaries is destructive regardless of income level' }
        ]
      },
      examEdge: 'The Environmental Kuznets Curve is key exam content: the inverted-U relationship between income and environmental degradation. Supporting evidence: rich countries have cleaner local environments (air, water). Counter-evidence: global carbon emissions still track with global income. Evaluation: EKC may describe pollution shift, not reduction — manufacturing exported to developing countries.'
    },
    {
      id: 'environmental_econ_7',
      template: 'framing',
      title: 'International Environmental Agreements',
      body: '<strong>Paris Agreement (2015):</strong> 196 parties agreed to limit global warming to well below 2°C, pursuing 1.5°C. Nationally Determined Contributions (NDCs) — voluntary national pledges. Mechanism: no enforcement; pledges are politically binding, not legally. Assessment: current NDCs put world on track for ~2.5-3°C warming — insufficient.<br><br><strong>Kyoto Protocol (1997):</strong> binding targets for developed countries; US withdrew; did not include China or India. Limited effectiveness.<br><br><strong>Economic problem:</strong> global commons (the atmosphere) = classic free rider problem at international level. Countries benefit from others\' abatement without reducing their own emissions. Coase solution impossible (too many parties, no enforcement mechanism).',
      keyTerms: [
        { term: 'Paris Agreement', def: '2015 multilateral climate deal — voluntary national pledges to limit warming; no binding enforcement mechanism.' },
        { term: 'Global commons', def: 'Resources shared by all (atmosphere, oceans) — subject to the tragedy of the commons when unregulated.' },
        { term: 'Tragedy of the commons', def: 'Shared resources are over-exploited because each individual gains the full benefit but bears only a fraction of the cost.' }
      ],
      examEdge: 'International environmental agreements face the collective action problem at the global level: no supranational authority can compel compliance. This is the fundamental reason climate policy is harder than domestic environmental policy — the externality is global but governance is national. Use the term "international public good" for a stable climate — reinforces why market failure is so intractable.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
