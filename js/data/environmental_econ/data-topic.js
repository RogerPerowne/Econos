window.ECONOS_TOPIC = {
  id: 'environmental_econ',
  topicNum: '1.16',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
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
        { label: 'Mechanism', text: 'Tax per tonne of CO2 equal to MEC at socially optimal output. Raises MPC to equal MSC → firms reduce emissions to socially optimal level. Price signal cascades through the economy: energy prices rise → switch to low-carbon alternatives.' },
        { label: 'Revenue use', text: 'Carbon tax raises significant revenue. Options: green investment (circular), dividend to citizens (climate dividend — popular), reduce other taxes (revenue-neutral), fund low-income household support (regressive impact mitigation).' },
        { label: 'UK context', text: 'UK has a carbon floor price for electricity generators (\xa322/tonne CO2) and participates in the UK ETS (\xa340-60/tonne). Fuel duty is a de facto carbon tax (~\xa353p/litre petrol).' },
        { label: 'Limitations', text: 'Difficult to set at the "correct" level (MEC uncertain); regressive (energy costs are a higher share of low-income budgets); risk of carbon leakage if other countries don\'t impose equivalent taxes.' }
      ],
      examEdge: 'Carbon tax advantages vs cap-and-trade: tax provides price certainty (firms know the cost per tonne); cap-and-trade provides quantity certainty (total emissions capped). If the MEC curve is steeply rising (dangerous tipping points), quantity certainty (cap) is more important. If the MAC (abatement cost) curve is steep, price certainty (tax) prevents catastrophic abatement costs. Weitzman\'s rule — a subtle but high-quality evaluation point.'
    },
    {
      id: 'environmental_econ_4',
      template: 'mechanisms',
      title: 'Cap-and-Trade (Emissions Trading)',
      intro: 'Cap-and-trade combines a quantity limit with market-based flexibility for firms in how they achieve it.',
      steps: [
        { label: 'Cap', text: 'Regulator sets a cap on total emissions across all covered firms. Permits are issued equal to the cap. Total emissions cannot exceed the cap — the quantity target is certain.' },
        { label: 'Trade', text: 'Firms that reduce emissions below their permit allocation can sell excess permits. Firms that cannot reduce cheaply buy permits. Emission reductions happen where they are cheapest — the market allocates abatement efficiently.' },
        { label: 'Price signal', text: 'Permit price (EU ETS: ~€60-80/tonne CO2) creates an incentive to invest in clean technology. As the cap tightens over time, permit price rises — increasing incentive to decarbonise.' },
        { label: 'EU ETS experience', text: 'Launched 2005 — initially over-generous permit allocation → price near zero → little incentive. Post-2018 reforms tightened cap → prices rose → significant investment in clean energy. UK ETS launched post-Brexit 2021.' }
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
      template: 'paired',
      title: 'Growth vs Environmental Protection',
      left: {
        label: 'Case that growth and environment can coexist',
        points: [
          'Environmental Kuznets Curve: as income rises, environmental quality first falls then rises — rich countries invest in clean technology and regulation',
          'Technological progress can decouple growth from emissions (UK GDP grew 22% 2000-2020; CO2 fell 44%)',
          'Green growth: renewable energy, EVs, circular economy can be profitable sectors driving future growth',
          'Carbon pricing internalises cost → innovation → clean growth'
        ]
      },
      right: {
        label: 'Case for constraining growth',
        points: [
          'Global emissions still rising despite EKC holds for rich countries — EKC may just export pollution',
          'Doughnut economics (Kate Raworth): growth beyond planetary boundaries is destructive regardless of income level',
          'GDP growth may be inconsistent with 1.5\xb0C targets — deep cuts require consumption reduction',
          'Rebound effect: efficiency gains are spent on more consumption, potentially offsetting emissions reductions'
        ]
      },
      examEdge: 'The Environmental Kuznets Curve is key exam content: the inverted-U relationship between income and environmental degradation. Supporting evidence: rich countries have cleaner local environments (air, water). Counter-evidence: global carbon emissions still track with global income. Evaluation: EKC may describe pollution shift, not reduction — manufacturing exported to developing countries.'
    },
    {
      id: 'environmental_econ_7',
      template: 'framing',
      title: 'International Environmental Agreements',
      body: '<strong>Paris Agreement (2015):</strong> 196 parties agreed to limit global warming to well below 2\xb0C, pursuing 1.5\xb0C. Nationally Determined Contributions (NDCs) — voluntary national pledges. Mechanism: no enforcement; pledges are politically binding, not legally. Assessment: current NDCs put world on track for ~2.5-3\xb0C warming — insufficient.<br><br><strong>Kyoto Protocol (1997):</strong> binding targets for developed countries; US withdrew; did not include China or India. Limited effectiveness.<br><br><strong>Economic problem:</strong> global commons (the atmosphere) = classic free rider problem at international level. Countries benefit from others\' abatement without reducing their own emissions. Coase solution impossible (too many parties, no enforcement mechanism).',
      keyTerms: [
        { term: 'Paris Agreement', def: '2015 multilateral climate deal — voluntary national pledges to limit warming; no binding enforcement mechanism.' },
        { term: 'Global commons', def: 'Resources shared by all (atmosphere, oceans) — subject to the tragedy of the commons when unregulated.' },
        { term: 'Tragedy of the commons', def: 'Shared resources are over-exploited because each individual gains the full benefit but bears only a fraction of the cost.' }
      ],
      examEdge: 'International environmental agreements face the collective action problem at the global level: no supranational authority can compel compliance. This is the fundamental reason climate policy is harder than domestic environmental policy — the externality is global but governance is national. Use the term "international public good" for a stable climate — reinforces why market failure is so intractable.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'ee-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: environmental economics',
      question: 'Evaluate the view that a carbon tax is the most effective policy to reduce carbon emissions. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Explain carbon emissions as a negative externality and introduce the main policy tools.',
          hint: 'Carbon emissions: negative externality (cost to third parties via climate change). Market failure: MSC > MPC → over-production and overconsumption of fossil fuels. Policy tools: carbon tax (Pigouvian), cap-and-trade ETS, regulation (emission standards, bans), subsidies for clean alternatives. Carbon tax is the market-based, price mechanism approach — internalises the externality via price signal.',
          model: 'Carbon dioxide emissions represent a negative externality: burning fossil fuels imposes climate change costs on the global community that are not reflected in the private market price. The resulting market failure produces excessive emissions — firms and consumers emit more than is socially optimal because they face only private costs, not the full social marginal cost including environmental damage. Policy tools include a carbon tax (Pigouvian), cap-and-trade emission trading schemes, direct regulation (emission standards, technology mandates, fossil fuel bans), and subsidies for clean alternatives. This essay evaluates whether the carbon tax is the most effective among these instruments.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — How a carbon tax internalises the externality efficiently',
          prompt: 'Explain the carbon tax mechanism and its efficiency advantages.',
          hint: 'Tax = MSC − MPC = MEC at social optimum. Raises price of carbon-intensive goods → reduces demand → firms shift to cleaner production → innovation incentive. Revenue can be recycled (lower income tax, green investment). Dynamic efficiency: creates continuous incentive to innovate and reduce emissions further (unlike fixed standard which just requires minimum compliance). UK carbon floor price: raises cost of coal generation → coal power station closures. EU ETS: cap-and-trade equivalent — price mechanism approach.',
          model: 'A carbon tax set equal to the marginal external cost (MEC) at the social optimum raises the price of carbon-intensive activities to reflect their full social cost, correcting the market failure at source. Firms and consumers face a price signal that incentivises switching to lower-carbon alternatives — the least-cost abatement options are adopted first, ensuring aggregate emission reduction is achieved at minimum economic cost. The dynamic efficiency advantage is significant: unlike regulatory standards, which require only minimum compliance, a carbon tax creates a continuous incentive to innovate and reduce emissions further, since every additional tonne abated saves the firm the tax cost. Revenue from the carbon tax can be recycled — used to reduce other distortionary taxes (a "green dividend") or fund clean investment — making the net economic impact more positive. The UK\'s carbon price floor, introduced in 2013, made coal power uneconomic: UK coal\'s share of electricity generation fell from ~40% to near zero by 2019.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — Cap-and-trade as an alternative market-based approach',
          prompt: 'Explain the EU ETS and evaluate whether it achieves equivalent or superior outcomes to a carbon tax.',
          hint: 'Cap-and-trade (EU ETS): government sets total emission cap, issues permits, firms trade. Price of permits = carbon price discovered by market. Certainty of environmental outcome (cap is fixed) vs carbon tax (quantity response uncertain). ETS: better for environmental target certainty; carbon tax: better for price stability and investment certainty. Real-world: EU ETS had permit price near zero 2008-17 due to over-allocation → failed to incentivise abatement. Reformed post-2021: permit price rose to €80-100/tonne → significant investment in clean energy.',
          model: 'Cap-and-trade emissions trading schemes (ETS) achieve the same theoretical outcome as a carbon tax via a different mechanism: the government sets the total quantity of allowable emissions (the cap) and issues tradeable permits equal to that cap. Firms that can abate cheaply do so and sell surplus permits; firms facing high abatement costs buy permits. The permit price discovered through trading is equivalent to the optimal carbon tax. The key distinction is certainty: a carbon tax provides price certainty (firms know the cost of emitting) but quantity uncertainty (the volume of emission reduction depends on price elasticity of demand); an ETS provides quantity certainty (the cap guarantees total emissions) but price uncertainty (the permit price fluctuates). The EU ETS\'s early failure (over-allocated permits → near-zero prices 2008-17 → no abatement incentive) shows that poorly designed cap-and-trade can fail where a well-calibrated carbon tax would succeed — and vice versa.'
        },
        {
          type: 'counter',
          label: 'Counter — Limitations of carbon tax: regressivity, carbon leakage, and political constraints',
          prompt: 'Evaluate the practical and political limitations of carbon tax as the primary climate policy instrument.',
          hint: 'Regressivity: carbon tax is regressive — energy costs are larger share of low-income household budgets. Reduces equity unless revenue is rebated progressively (carbon dividend). Carbon leakage: if only some countries impose carbon tax, emissions-intensive industries relocate to unregulated jurisdictions → global emissions unchanged, UK industry disadvantaged. Solution: Carbon Border Adjustment Mechanism (CBAM, EU 2026). Information problem: how do you set the correct tax rate when the social cost of carbon is uncertain? IPCC estimates vary widely.',
          model: 'Carbon taxes face three significant practical challenges. First, regressivity: energy expenditure constitutes a higher proportion of low-income households\' budgets, so a uniform carbon tax imposes proportionally larger costs on poorer households. This distributional concern is real but addressable — carbon revenue can be recycled as a flat per-capita dividend (making the policy progressive overall) or as targeted energy bill relief for low-income households. Second, carbon leakage: if only the UK or EU imposes a carbon tax while competitors do not, energy-intensive industries may relocate to unregulated jurisdictions, eliminating domestic emission reductions while harming competitiveness. The EU\'s Carbon Border Adjustment Mechanism (2026) addresses this by taxing imports from non-carbon-priced jurisdictions — but adds trade complexity. Third, setting the right tax rate requires estimating the social cost of carbon — which is genuinely uncertain, ranging from $50 to $200+ per tonne in different estimates — making optimal calibration difficult.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Carbon tax vs regulation vs clean subsidies: which dominates in which context?',
          prompt: 'Weigh the carbon tax against regulation and subsidies with reference to different emission reduction contexts.',
          hint: 'Carbon tax: most efficient for economy-wide emissions where substitution is feasible (energy, transport). Regulation: most effective for specific source reductions where technology mandates are feasible (vehicle standards, building regulations, appliance efficiency). Clean subsidies: best for accelerating deployment of new technologies where market barriers to adoption are high (offshore wind, EV charging infrastructure). Most effective climate policy uses all three: carbon price (internalise the externality), standards (floor for hard-to-abate sectors), subsidies (accelerate clean technology deployment).',
          model: 'No single instrument dominates across all emission reduction contexts. Carbon taxes are most efficient for economy-wide emissions where substitution between carbon-intensive and low-carbon options is feasible at relatively low cost — energy markets, domestic heating, transport. They send a pervasive price signal that reaches every decision maker simultaneously. Regulation is most effective for specific sectors where technology mandates achieve emission reductions that price alone cannot: UK building regulations for new-build energy efficiency, vehicle emission standards (Euro 6), planned phaseouts of gas boilers and petrol vehicles set clear direction that investment planning requires. Clean energy subsidies (Contracts for Difference for offshore wind, EV charging infrastructure grants) address the deployment barriers for new technologies: the carbon price provides the long-run investment signal, but scale-up requires up-front support during the cost-reduction learning curve. The UK Climate Change Act (2008), which mandates legally binding net-zero targets, uses all three instruments in combination — a comprehensive approach that reflects the complexity of the challenge.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Deliver a nuanced judgement: carbon tax is theoretically optimal and highly effective but works best as part of a policy mix with regulation and clean subsidies.',
          hint: 'Carbon tax is the economists\' preferred tool — price mechanism, dynamic efficiency, revenue neutrality possible. But it is not sufficient alone: carbon leakage, regressivity, and technology deployment barriers require complementary tools. Most effective climate policy uses carbon price (broad economy signal), regulation (sectoral floor), and subsidies (technology acceleration). "Most effective" depends on what dimension of effectiveness you prioritise.',
          model: 'A well-designed carbon tax is arguably the most cost-efficient single instrument for reducing carbon emissions, because it harnesses price mechanisms to direct abatement toward the lowest-cost opportunities, generates revenue that can offset regressive impacts, and provides a continuous innovation incentive. However, calling it the most effective instrument overall requires qualification. Carbon leakage limits its effectiveness in an open economy without border adjustment; setting the correct tax rate under uncertainty about the social cost of carbon introduces calibration risk; and some emission reductions require complementary regulatory mandates and technology deployment support that a price signal alone cannot deliver quickly enough to meet climate targets. The most effective real-world approach combines a meaningful carbon price (to send the right signal economy-wide), sectoral regulation (to set minimum standards in hard-to-price contexts), and targeted subsidies (to accelerate clean technology adoption). Used in combination, these instruments address the full range of market failures driving carbon emissions more effectively than any single instrument could achieve alone.'
        }
      ]
    }
  ]
};
