window.ECONOS_TOPIC = {
  id: 'govt_intervention_tax',
  topicNum: '1.17',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
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
    tip: 'Tax shifts supply LEFT (decreases supply). New equilibrium: price rises (less than the full tax), quantity falls. Tax revenue = tax per unit \xd7 new quantity. DWL = two triangles between old and new equilibrium.',
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
      lede: 'Taxes shift supply left to curb consumption and raise revenue — but the real burden falls where elasticity allows it.',
      branches: [
        { tone: 'green',  label: 'How they work',     sub: 'Specific (per unit) or ad valorem (% of price). Supply shifts left → higher price, lower quantity.' },
        { tone: 'blue',   label: 'Pigouvian taxes',   sub: 'Set tax = MEC to internalise the externality and move output to the social optimum.' },
        { tone: 'purple', label: 'Tax incidence',     sub: 'Who really pays depends on PED vs PES. Inelastic demand → consumer bears most; inelastic supply → producer bears most.' },
        { tone: 'amber',  label: 'Limitations',       sub: 'Information problem (true MEC unknown), regressive impact, black markets, evasion.' },
        { tone: 'rose',   label: 'Alternatives',      sub: 'Regulation, tradable permits, subsidies for substitutes, behavioural nudges — each with different efficiency and equity trade-offs.' }
      ],
      body: 'An <strong>indirect tax</strong> is a tax levied on goods and services (rather than directly on income or profits). It is collected by producers but ultimately borne by both producers and consumers depending on price elasticities.<br><br><strong>Types:</strong><br>• <em>Specific tax (unit tax):</em> a fixed amount per unit (e.g. \xa31 per litre of petrol). On a diagram: parallel leftward shift of supply curve.<br>• <em>Ad valorem tax:</em> a percentage of the price (e.g. 20% VAT). On a diagram: supply curve pivots (shifts left by a larger absolute amount at higher prices).<br><br><strong>Mechanism:</strong> tax raises the effective cost of production for every unit → supply curve shifts left → new equilibrium at higher price and lower quantity.',
      keyTerms: [
        { term: 'Indirect tax', def: 'Tax on spending rather than income — collected at the point of sale. Examples: VAT (20%), fuel duty, sugar levy.' },
        { term: 'Specific tax', def: 'Fixed money amount per unit — parallel leftward shift of supply curve.' },
        { term: 'Ad valorem tax', def: 'Percentage of price per unit — supply curve pivots (bigger shift at higher prices).' }
      ],
      examEdge: 'For diagram questions: specific tax → parallel shift. Ad valorem → pivot. Most exam questions use specific taxes for simplicity. Always shift the supply curve LEFT (decrease in supply) by the amount of the tax. Do not shift the demand curve — tax affects supply, not demand (assuming tax is on sellers).'
    },
    {
      id: 'govt_intervention_tax_2',
      template: 'mechanisms',
      diagramKey: 'taxDiagram',
      title: 'The Tax Diagram: Full Analysis',
      intro: 'Mastering this diagram is essential — it appears in many different exam contexts.',
      steps: [
        { label: 'Start with equilibrium', text: 'Draw original S and D. Equilibrium at (P1, Q1). Mark consumer surplus (CS) triangle above P1 below D. Mark producer surplus (PS) triangle above S below P1.' },
        { label: 'Add the tax', text: 'Shift supply left by the tax amount (t). New supply = S + tax. New equilibrium at (P2, Q2). P2 > P1; Q2 < Q1. Price rises by less than the full tax.' },
        { label: 'Identify tax revenue', text: 'Tax revenue = (P2 - P3) \xd7 Q2, where P3 = P2 - t (the price sellers actually receive after paying tax). Tax revenue = rectangle between P2 and P3, width Q2.' },
        { label: 'Identify DWL and incidence', text: 'Consumer incidence = (P2 - P1) \xd7 Q2. Producer incidence = (P1 - P3) \xd7 Q2. DWL = triangle to the right of Q2 between old supply and demand — potential surplus lost.' }
      ],
      examEdge: 'Consumer incidence = rise in price paid by buyers × new quantity. Producer incidence = fall in price received by sellers × new quantity. DWL = triangle between old and new equilibrium — the surplus neither the government, consumers, nor producers receive. Always label all four areas on the diagram for full marks.'
    },
    {
      id: 'govt_intervention_tax_3',
      template: 'framing',
      title: 'Pigouvian Taxes: Correcting Externalities',
      body: 'A <strong>Pigouvian tax</strong> (named after economist A.C. Pigou) is set equal to the marginal external cost (MEC) at the socially optimal output. It internalises the externality — making the private cost equal to the social cost.<br><br><strong>Effect:</strong> the tax shifts MPC up to MSC. The new market equilibrium is at the socially optimal output Q*, where MSC = MSB. The deadweight welfare loss from the externality is eliminated.<br><br><strong>Perfect Pigouvian tax:</strong> tax per unit = MEC at Q*. In practice, MEC is very difficult to measure accurately — estimates for the social cost of carbon vary from $50 to $200/tonne CO2.',
      keyTerms: [
        { term: 'Pigouvian tax', def: 'A tax equal to the marginal external cost — designed to internalise a negative externality and restore allocative efficiency.' },
        { term: 'Optimal tax rate', def: 'The tax rate that makes private cost = social cost, achieving socially optimal output.' },
        { term: 'Internalise', def: 'To incorporate external costs into the private price mechanism — so that decision-makers face the full social cost of their actions.' }
      ],
      examEdge: 'The ideal Pigouvian tax is elegant in theory but faces three key limitations: (1) measuring MEC accurately is difficult (different estimates for social cost of carbon vary by 4x); (2) MEC may vary by firm/location (one tax rate may not fit all); (3) the tax may be regressive. These limitations are essential evaluation points.'
    },
    {
      id: 'govt_intervention_tax_4',
      template: 'cause',
      title: 'Real-World Tax Examples',
      causes: [
        { head: 'UK Fuel Duty', body: 'Currently ~53p per litre of petrol/diesel. Corrects for CO2 emissions, local air pollution, and congestion. Partially Pigouvian — not perfectly calibrated to the social cost. Raises ~\xa328bn/year. Frozen since 2010 — has fallen in real terms.' },
        { head: 'Sugar Levy (SDIL)', body: 'Soft drinks industry levy (2018): 18p/litre for drinks with 5-8g sugar per 100ml; 24p/litre above 8g. Led to significant reformulation by manufacturers (firms chose to reduce sugar content rather than pay tax). Revenue earmarked for school sports.' },
        { head: 'Cigarette Taxes', body: 'UK tobacco duty: \xa34.14 per pack plus 16.5% ad valorem. Total tax ~75% of retail price. Inelastic demand means large revenue; significant price signal to deter smoking. Evidence: smoking rates fell sharply with rising tax, especially among younger and lower-income groups.' },
        { head: 'Landfill Tax', body: 'Tax on waste deposited at landfill sites. Incentivises firms to reduce waste, recycle, and use alternative disposal. UK rate: \xa3102.10/tonne (active waste). Has driven significant reduction in landfill use and increased recycling rates.' }
      ],
      examEdge: 'Sugar levy is the best exam case for an "effective" tax: demand was elastic (producers reformulated to avoid the tax rather than pass it on to consumers) → significant public health benefit without large consumer price rise. This shows tax design matters — a well-designed tax can change behaviour even without being fully passed on.'
    },
    {
      id: 'govt_intervention_tax_5',
      template: 'diagnose',
      diagramKey: 'taxIncidenceDiagram',
      title: 'Tax Incidence: Who Really Pays?',
      intro: 'The legal incidence (who pays the tax) differs from the economic incidence (who bears the burden).',
      rows: [
        { label: 'Scenario', colA: 'Inelastic demand, elastic supply (cigarettes)', colB: 'Elastic demand, inelastic supply (luxury goods)' },
        { label: 'Effect', colA: 'Most of the tax is passed on to consumers as higher prices. Quantity falls only slightly. Tax revenue is large. Government captures most of the externality correction.', colB: 'Producers cannot raise prices much (consumers would switch). Most of the tax is absorbed as lower profit margins. Quantity may fall more. Revenue is lower.' },
        { label: 'Who bears the burden', colA: 'Consumers: they pay substantially higher prices. Incidence falls on the less elastic side.', colB: 'Producers: their net price falls substantially. They bear the burden because they are less elastic.' }
      ],
      footer: 'General rule: the less price-elastic side of the market bears more of the tax burden. This is why sin taxes (cigarettes, alcohol) on inelastic goods raise large revenue and fall mainly on consumers.',
      examEdge: 'Fuel duty incidence: demand is inelastic (few alternatives for most journeys), supply is elastic (global oil market). Consumers bear most of the burden — the tax is regressive (low-income households spend a higher proportion of income on fuel). This is a key equity criticism of Pigouvian taxes even when they correct externalities.'
    },
    {
      id: 'govt_intervention_tax_6',
      template: 'paired',
      title: 'Evaluation: Taxation to Correct Externalities',
      left: {
        label: 'Case FOR taxation',
        points: [
          'Preserves consumer choice — reduces but does not eliminate the externality-generating activity',
          'Revenue can be used to fund green investment or compensate affected parties',
          'Dynamic efficiency: firms continually incentivised to innovate to reduce the tax burden',
          'Aligns with price mechanism — uses market forces rather than replacing them',
          'International evidence: carbon taxes in Sweden (highest global) have reduced emissions with limited growth cost'
        ]
      },
      right: {
        label: 'Case AGAINST taxation (limitations)',
        points: [
          'Difficult to set optimal rate — MEC is uncertain and varies by context',
          'Regressive impact: energy and fuel taxes take a higher share of low-income budgets',
          'Risk of evasion and black markets (especially for high-tax goods like tobacco)',
          'May not achieve sufficient quantity reduction if demand is very inelastic',
          'Political resistance: "fuel duty escalator" abandoned in UK due to political pressure'
        ]
      },
      examEdge: 'Regressivity is the most important equity objection to environmental taxes. Solution: use tax revenue for cash transfers to low-income households (green dividend). British Columbia carbon tax (Canada) returns revenue as equal-per-capita dividend — net benefit to below-median income households. This "feebate" model addresses the regressivity concern while maintaining the incentive.'
    },
    {
      id: 'govt_intervention_tax_7',
      template: 'framing',
      title: 'Tax vs Other Policy Tools',
      body: 'Taxation is one of several tools for government intervention. Comparing it with alternatives is essential for evaluation:<br><br><strong>Tax vs regulation:</strong> tax allows flexibility (firms choose how much to reduce); regulation sets a firm standard. Tax raises revenue; regulation does not. Tax works through price; regulation works through quantity constraint. Both can achieve the same environmental target, but tax does so at lower total cost (abatement where cheapest).<br><br><strong>Tax vs subsidy:</strong> tax reduces the externality-generating activity; subsidy promotes the alternative (e.g. solar panels). Both can move market toward social optimum. Tax raises revenue; subsidy costs revenue. Tax punishes the polluter; subsidy rewards the clean alternative.',
      keyTerms: [
        { term: 'Incentive-based instruments', def: 'Policies (taxes, tradeable permits) that use price signals to achieve environmental goals — more efficient than command-and-control.' },
        { term: 'Command-and-control', def: 'Regulations setting standards (e.g. emission limits) — certain outcome but less flexible and potentially less efficient.' },
        { term: 'Polluter pays principle', def: 'The idea that those who generate pollution should bear the full cost — the philosophical foundation for Pigouvian taxes.' }
      ],
      examEdge: 'Exam essays often ask to "compare two policies." Tax vs regulation structure: tax = flexibility, efficiency, revenue generation, but uncertain quantity outcome and regressive. Regulation = certainty, simplicity, but inflexibility, no revenue, may be inefficient. Both have a role — hybrid approaches (set a regulatory floor + carbon tax above it) often optimal.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },

    /* ----- CARD 8 — Essay scaffold ----- */
    {
      id: 'git-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Essay scaffold: government intervention — taxation',
      question: 'Evaluate the use of taxation as a policy to correct market failure caused by negative externalities. (25 marks)',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define negative externalities, market failure, and Pigouvian taxation. Introduce the essay debate: can taxes effectively correct the divergence between private and social costs?',
          hint: 'Negative externality = third-party cost not reflected in market price (MSC > MPC). Market overproduces at Qm vs social optimum Q*. Pigouvian tax = MEC to shift private cost up to social cost.',
          model: 'A negative externality arises when production or consumption imposes costs on third parties that are not reflected in market prices, causing a divergence between the marginal private cost (MPC) and the marginal social cost (MSC). Free markets overproduce such goods relative to the social optimum because producers and consumers ignore the external cost. A Pigouvian tax, set equal to the marginal external cost (MEC), internalises this externality by raising the private cost to equal the social cost, restoring allocative efficiency. This essay evaluates the effectiveness of such taxes, weighing the theoretical case against practical limitations including information problems, regressivity, and political constraints.'
        },
        {
          type: 'analysis',
          label: 'Analysis 1 — Tax internalises the externality and restores allocative efficiency',
          prompt: 'Explain how a Pigouvian tax equal to MEC shifts the supply curve left, raises price from Pm to P*, and reduces output from Qm to Q* — eliminating the welfare loss triangle.',
          hint: 'Diagram: MPC + tax = MSC. Output falls to social optimum. Deadweight welfare loss eliminated. Revenue raised = tax × Q* — can be used to compensate those affected by the externality.',
          model: 'In theory, a Pigouvian tax equal to the marginal external cost (MEC) corrects the market failure precisely. By adding the tax to producers\' costs, the supply curve shifts left from MPC to MSC (=MPC+tax), raising the market price from Pm to P* and reducing output from the overproduced Qm to the socially optimal Q*. The welfare loss triangle — representing the excess of social cost over social benefit in the range Qm to Q* — is eliminated. Simultaneously, tax revenue (tax rate × Q*) can be recycled to compensate victims of the externality or fund public goods, providing a dual efficiency and fiscal benefit. The UK landfill tax (1996) and air passenger duty illustrate this logic in practice.'
        },
        {
          type: 'analysis',
          label: 'Analysis 2 — Tax provides continuous incentive to innovate and reduce the externality',
          prompt: 'Explain why a price-based instrument like a tax is more efficient than regulation, as it gives firms a continuous incentive to find cheaper ways to reduce the externality rather than simply complying to a standard.',
          hint: 'Regulation sets a floor (comply or not); tax incentivises further reduction below the standard. If a firm can abate more cheaply than the tax rate, it will. Dynamic efficiency: ongoing incentive to develop greener technology.',
          model: 'A key advantage of taxation over regulation is the continuous incentive it provides for innovation and emission reduction beyond the regulatory standard. Under a command-and-control regulation (e.g. an emission standard), a firm has no incentive to reduce pollution below the legal limit. Under a Pigouvian tax, every additional unit of pollution still costs the firm — so any firm that can reduce emissions more cheaply than the tax rate will do so, achieving the socially optimal level of abatement at minimum total cost. This dynamic efficiency argument explains why economists consistently prefer carbon taxes or cap-and-trade to fixed emission standards: they allocate abatement to those who can do it most cheaply, minimising total cost to the economy.'
        },
        {
          type: 'counter',
          label: 'Counter — Taxes face serious information and equity problems',
          prompt: 'Argue that setting the optimal Pigouvian tax rate is extremely difficult in practice (requires knowing MEC), and that per-unit taxes are often regressive — falling disproportionately on lower-income households.',
          hint: 'MEC varies by location, individual, and is inherently uncertain. UK fuel duty = regressive. Sugar tax: low-income households spend higher share on sugary drinks. Tax may not reduce quantity if demand is very inelastic.',
          model: 'In practice, the Pigouvian tax faces two major obstacles. First, setting the optimal rate requires accurate measurement of the MEC — which varies across individuals, locations, and time, and is inherently uncertain. Underestimating MEC sets the tax too low, leaving residual market failure; overestimating it causes excessive deadweight loss. The UK\'s failure to maintain the fuel duty escalator reflects political pressure when the true social cost of carbon is disputed. Second, many consumption taxes are regressive: lower-income households spend a higher share of income on fuel, alcohol, and tobacco — so a per-unit tax imposes a proportionally heavier burden on the poor. This equity concern may justify preferring regulation or means-tested alternatives in some contexts.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — Effectiveness depends on price elasticity and political feasibility',
          prompt: 'Evaluate how the price elasticity of demand for the externality-generating good determines the effectiveness of the tax, and discuss political constraints that limit optimal tax design.',
          hint: 'Inelastic demand (cigarettes, petrol): tax raises revenue but may not reduce quantity much. Elastic demand: tax effectively reduces output. Political feasibility: "fuel duty hypothecation" debate; yellow-vest protests in France over carbon tax.',
          model: 'The effectiveness of a Pigouvian tax in reducing the externality-generating activity depends critically on the price elasticity of demand. Where demand is highly inelastic — as for cigarettes or petrol in the short run — a tax raises substantial revenue but achieves relatively little reduction in consumption. This represents a partial failure of the corrective purpose (though the revenue can compensate). Where demand is more elastic (e.g. single-use plastics), the price signal is more effective at shifting behaviour toward substitutes. Furthermore, political feasibility constrains optimal tax design: France\'s gilet jaunes protests against a carbon tax increase and the UK\'s fuel duty freeze since 2011 demonstrate that even well-designed taxes can be politically unsustainable, undermining long-run corrective effectiveness.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Reach a balanced judgement: under what conditions is taxation an effective policy for correcting negative externalities, and when are alternatives preferable?',
          hint: 'Tax is most effective when: demand is elastic, MEC can be estimated, revenue can be recycled to address regressivity. Alternatives (regulation, tradeable permits) preferable when: certainty of outcome needed, demand very inelastic, distributional effects unacceptable.',
          model: 'In conclusion, Pigouvian taxation is a theoretically sound and practically valuable instrument for correcting market failure caused by negative externalities, offering allocative efficiency, dynamic incentives, and revenue generation. Its effectiveness is greatest when demand is sufficiently elastic to respond to the price signal and when the tax rate can be calibrated to a reasonable estimate of MEC. However, the information challenges of setting the optimal rate, the regressivity of per-unit taxes, and political feasibility constraints mean that taxation alone is rarely sufficient. The most effective policy framework typically combines a carbon or environmental tax with redistributive revenue recycling and complementary regulation — using each instrument\'s strengths to address the other\'s weaknesses.'
        }
      ]
    }
  ]
};
