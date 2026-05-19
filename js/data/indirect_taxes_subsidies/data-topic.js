window.ECONOS_TOPIC = {
  id: 'indirect_taxes_subsidies',
  topicNum: '2.9',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Indirect Taxes & Subsidies',
  estTime: '18-22 minutes',
  goal: 'Master how indirect taxes and subsidies shift supply, their welfare effects, who bears the burden, and how to evaluate both as tools for correcting market failure.',
  intro: {
    heroKey: 'heroIntervention',
    summary: 'Indirect taxes raise the price of goods (shifting supply left) while subsidies lower costs (shifting supply right). Both affect consumer and producer welfare, and who really gains or loses depends on price elasticities, not on who hands over the money.',
    doInThis: 'Work through 14 cards covering indirect taxes (how they work, diagrams, incidence, real-world examples, evaluation) and subsidies (how they work, diagrams, incidence, real-world examples, evaluation) — plus a final comparison of both against alternative policy tools.',
    outcomes: [
      'Show on a diagram how an indirect tax or subsidy shifts the supply curve and creates a new equilibrium',
      'Identify consumer incidence, producer incidence, tax revenue / government cost, and deadweight loss',
      'Explain what makes a Pigouvian tax or optimal subsidy',
      'Evaluate both instruments versus each other and versus alternative policies'
    ],
    tip: 'Tax → supply shifts LEFT (higher price, lower quantity). Subsidy → supply shifts RIGHT (lower price, higher quantity). In both cases, who really pays or benefits is determined by relative PED/PES — the less elastic side bears more of the burden or receives less of the benefit.',
    stages: [
      { num: 1, name: 'Learn it', sub: '14 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ===== PART 1: INDIRECT TAXES ===== */
    {
      id: 'indirect_taxes_subsidies_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 14',
      title: 'Indirect taxes: the big picture',
      lede: 'Taxes shift supply left to curb consumption and raise revenue — but the real burden falls where elasticity allows it.',
      tip: 'Specific tax → parallel leftward shift of supply (gap between old S and new S is constant). Ad valorem tax → supply pivots (gap widens at higher prices — tax is a % of price). Either way: consumer pays more, producer receives less, government keeps the wedge.',
      branches: [
        { tone: 'green',  label: 'How they work',     sub: 'Specific (per unit) or ad valorem (% of price). Supply shifts left → higher price, lower quantity.' },
        { tone: 'blue',   label: 'Pigouvian taxes',   sub: 'Set tax = MEC to internalise the externality and move output to the social optimum.' },
        { tone: 'purple', label: 'Tax incidence',     sub: 'Who really pays depends on PED vs PES. Inelastic demand → consumer bears most; inelastic supply → producer bears most.' },
        { tone: 'amber',  label: 'Limitations',       sub: 'Information problem (true MEC unknown), regressive impact, black markets, evasion.' },
        { tone: 'rose',   label: 'Alternatives',      sub: 'Regulation, tradable permits, subsidies for substitutes, behavioural nudges — each with different efficiency and equity trade-offs.' }
      ],
      body: 'An <strong>indirect tax</strong> is a tax levied on goods and services (rather than directly on income or profits). It is collected by producers but ultimately borne by both producers and consumers depending on price elasticities.<br><br><strong>Types:</strong><br>• <em>Specific tax (unit tax):</em> a fixed amount per unit (e.g. £1 per litre of petrol). On a diagram: parallel leftward shift of supply curve.<br>• <em>Ad valorem tax:</em> a percentage of the price (e.g. 20% VAT). On a diagram: supply curve pivots (shifts left by a larger absolute amount at higher prices).<br><br><strong>Mechanism:</strong> tax raises the effective cost of production for every unit → supply curve shifts left → new equilibrium at higher price and lower quantity.',
      keyTerms: [
        { term: 'Indirect tax', def: 'Tax on spending rather than income — collected at the point of sale. Examples: VAT (20%), fuel duty, sugar levy.' },
        { term: 'Specific tax', def: 'Fixed money amount per unit — parallel leftward shift of supply curve.' },
        { term: 'Ad valorem tax', def: 'Percentage of price per unit — supply curve pivots (bigger shift at higher prices).' }
      ],
      examEdge: 'For diagram questions: specific tax → parallel shift. Ad valorem → pivot. Most exam questions use specific taxes for simplicity. Always shift the supply curve LEFT (decrease in supply) by the amount of the tax. Do not shift the demand curve — tax affects supply, not demand (assuming tax is on sellers).'
    },
    {
      id: 'indirect_taxes_subsidies_2',
      template: 'mechanisms',
      diagramKey: 'taxDiagram',
      title: 'The Tax Diagram: Full Analysis',
      intro: 'Mastering this diagram is essential — it appears in many different exam contexts.',
      steps: [
        { label: '📍 Start with equilibrium', text: 'Draw original S and D. Equilibrium at (P1, Q1). Mark consumer surplus (CS) triangle above P1 below D. Mark producer surplus (PS) triangle above S below P1.' },
        { label: '⬅️ Add the tax', text: 'Shift supply left by the tax amount (t). New supply = S + tax. New equilibrium at (P2, Q2). P2 > P1; Q2 < Q1. Price rises by less than the full tax.' },
        { label: '💰 Identify tax revenue', text: 'Tax revenue = (P2 - P3) × Q2, where P3 = P2 - t (the price sellers actually receive after paying tax). Tax revenue = rectangle between P2 and P3, width Q2.' },
        { label: '📊 Identify DWL and incidence', text: 'Consumer incidence = (P2 - P1) × Q2. Producer incidence = (P1 - P3) × Q2. DWL = triangle to the right of Q2 between old supply and demand — potential surplus lost.' }
      ],
      examEdge: 'Consumer incidence = rise in price paid by buyers × new quantity. Producer incidence = fall in price received by sellers × new quantity. DWL = triangle between old and new equilibrium — the surplus neither the government, consumers, nor producers receive. Always label all four areas on the diagram for full marks.'
    },
    {
      id: 'indirect_taxes_subsidies_3',
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
      id: 'indirect_taxes_subsidies_4',
      template: 'cause',
      title: 'Real-World Tax Examples',
      causesStyle: 'tinted-flat',
      causesEmoji: '🏛️',
      causesLabel: 'Four key UK indirect taxes',
      causes: [
        { icon: '⛽', head: 'UK Fuel Duty', body: 'Currently ~53p per litre of petrol/diesel. Corrects for CO2 emissions, local air pollution, and congestion. Partially Pigouvian — not perfectly calibrated to the social cost. Raises ~£28bn/year. Frozen since 2010 — has fallen in real terms.' },
        { icon: '🥤', head: 'Sugar Levy (SDIL)', body: 'Soft drinks industry levy (2018): 18p/litre for drinks with 5-8g sugar per 100ml; 24p/litre above 8g. Led to significant reformulation by manufacturers (firms chose to reduce sugar content rather than pay tax). Revenue earmarked for school sports.' },
        { icon: '🚬', head: 'Cigarette Taxes', body: 'UK tobacco duty: £4.14 per pack plus 16.5% ad valorem. Total tax ~75% of retail price. Inelastic demand means large revenue; significant price signal to deter smoking. Evidence: smoking rates fell sharply with rising tax, especially among younger and lower-income groups.' },
        { icon: '🗑️', head: 'Landfill Tax', body: 'Tax on waste deposited at landfill sites. Incentivises firms to reduce waste, recycle, and use alternative disposal. UK rate: £102.10/tonne (active waste). Has driven significant reduction in landfill use and increased recycling rates.' }
      ],
      examEdge: 'Sugar levy is the best exam case for an "effective" tax: demand was elastic (producers reformulated to avoid the tax rather than pass it on to consumers) → significant public health benefit without large consumer price rise. This shows tax design matters — a well-designed tax can change behaviour even without being fully passed on.'
    },
    {
      id: 'indirect_taxes_subsidies_5',
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
      id: 'indirect_taxes_subsidies_6',
      template: 'framing',
      title: 'Evaluation: Taxation to Correct Externalities',
      verdict: {
        leftLabel: '✅ Case FOR taxation',
        rightLabel: '❌ Case AGAINST (limitations)',
        separator: 'VS',
        rows: [
          { aspect: 'Consumer choice', left: 'Preserves consumer choice — reduces but does not eliminate the externality-generating activity', right: 'Difficult to set optimal rate — MEC is uncertain and varies by context' },
          { aspect: 'Revenue', left: 'Revenue can be used to fund green investment or compensate affected parties', right: 'Regressive impact: energy and fuel taxes take a higher share of low-income budgets' },
          { aspect: 'Dynamic efficiency', left: 'Firms continually incentivised to innovate to reduce the tax burden', right: 'Risk of evasion and black markets (especially for high-tax goods like tobacco)' },
          { aspect: 'Evidence', left: 'Carbon taxes in Sweden (highest global) have reduced emissions with limited growth cost', right: 'Political resistance: "fuel duty escalator" abandoned in UK due to political pressure' }
        ]
      },
      examEdge: 'Regressivity is the most important equity objection to environmental taxes. Solution: use tax revenue for cash transfers to low-income households (green dividend). British Columbia carbon tax (Canada) returns revenue as equal-per-capita dividend — net benefit to below-median income households. This "feebate" model addresses the regressivity concern while maintaining the incentive.'
    },
    {
      id: 'indirect_taxes_subsidies_7',
      template: 'framing',
      title: 'Tax vs Other Policy Tools',
      body: 'Taxation is one of several tools for government intervention. Comparing it with alternatives is essential for evaluation:<br><br><strong>Tax vs regulation:</strong> tax allows flexibility (firms choose how much to reduce); regulation sets a firm standard. Tax raises revenue; regulation does not. Tax works through price; regulation works through quantity constraint. Both can achieve the same environmental target, but tax does so at lower total cost (abatement where cheapest).<br><br><strong>Tax vs subsidy:</strong> tax reduces the externality-generating activity; subsidy promotes the alternative (e.g. solar panels). Both can move market toward social optimum. Tax raises revenue; subsidy costs revenue. Tax punishes the polluter; subsidy rewards the clean alternative.',
      keyTerms: [
        { term: 'Incentive-based instruments', def: 'Policies (taxes, tradeable permits) that use price signals to achieve environmental goals — more efficient than command-and-control.' },
        { term: 'Command-and-control', def: 'Regulations setting standards (e.g. emission limits) — certain outcome but less flexible and potentially less efficient.' },
        { term: 'Polluter pays principle', def: 'The idea that those who generate pollution should bear the full cost — the philosophical foundation for Pigouvian taxes.' }
      ],
      examEdge: 'Exam essays often ask to "compare two policies." Tax vs regulation structure: tax = flexibility, efficiency, revenue generation, but uncertain quantity outcome and regressive. Regulation = certainty, simplicity, but inflexibility, no revenue, may be inefficient. Both have a role — hybrid approaches (set a regulatory floor + carbon tax above it) often optimal.'
    },

    /* ===== PART 2: SUBSIDIES ===== */
    {
      id: 'indirect_taxes_subsidies_8',
      template: 'framing',
      stepLabel: 'Learn: Step 8 of 14',
      title: 'Subsidies: the big picture',
      lede: 'Subsidies shift supply right to boost production and consumption — but who really benefits depends on elasticities, not intent.',
      tip: 'Subsidy is the mirror of a tax: shifts supply RIGHT by the subsidy amount (parallel shift for a specific subsidy). Consumer price falls, producer received price rises — the subsidy fills the gap between them.',
      branches: [
        { tone: 'green',  label: 'How they work',         sub: 'Government pays per unit → supply shifts right → price falls, quantity rises. The mirror image of a tax.' },
        { tone: 'blue',   label: 'Correcting externalities', sub: 'Pigouvian logic in reverse: subsidy = MEB internalises positive spillover and moves output to social optimum.' },
        { tone: 'purple', label: 'Incidence',             sub: 'Producer vs consumer share of the benefit depends on relative PED/PES — not on who receives the cheque.' },
        { tone: 'amber',  label: 'Limitations',           sub: 'Opportunity cost of public funds, risk of producer inefficiency, persistence after the original case has gone.' },
        { tone: 'rose',   label: 'Alternative policies',  sub: 'Direct provision, regulation, vouchers, info campaigns — each may achieve the same goal at lower cost.' }
      ],
      body: 'A <strong>subsidy</strong> is a government payment to producers or consumers that lowers the effective cost of a good or service, aiming to increase its production or consumption.<br><br><strong>Types:</strong><br>• <em>Producer subsidy:</em> paid to firms → reduces cost per unit → supply shifts RIGHT → price falls, quantity rises.<br>• <em>Consumer subsidy:</em> paid to buyers (voucher, benefit) → increases effective purchasing power for that good → demand shifts RIGHT → price rises, quantity rises.<br><br>Subsidies are the mirror of taxes: a tax shifts supply left; a subsidy shifts supply right. Both change equilibrium, create transfers, and affect welfare. Subsidies cost the government revenue (opportunity cost).',
      keyTerms: [
        { term: 'Subsidy', def: 'A government payment per unit to reduce the cost of production or consumption — shifts supply rightward.' },
        { term: 'Producer subsidy', def: 'Payment to firms per unit of output — lowers MPC, shifts supply right, reduces price to consumers.' },
        { term: 'Consumer subsidy', def: 'Payment to consumers (voucher or credit) for a specific good — increases effective demand, shifts demand right.' }
      ],
      examEdge: 'Producer subsidy vs consumer subsidy achieve different outcomes: producer subsidy → price falls (consumers benefit); consumer subsidy → price rises (producers benefit more). For correcting a positive externality (underconsumption), both work. Producer subsidy corrects underproduction; consumer subsidy corrects underconsumption. Match the tool to the source of market failure.'
    },
    {
      id: 'indirect_taxes_subsidies_9',
      template: 'mechanisms',
      diagramKey: 'subsidyDiagram',
      title: 'The Subsidy Diagram',
      intro: 'The subsidy diagram is the mirror image of the tax diagram — master both for maximum flexibility in exams.',
      steps: [
        { label: '📍 Original equilibrium', text: 'S and D intersect at (P1, Q1). CS above P1 below D; PS above S below P1.' },
        { label: '➡️ Add the subsidy', text: 'Supply shifts RIGHT by the subsidy amount. New supply = S − subsidy. New equilibrium at (P2, Q2). P2 < P1 (consumers pay less); Q2 > Q1 (more is produced and sold).' },
        { label: '💰 Government cost', text: 'Government cost = subsidy per unit × new quantity = (P3 − P2) × Q2, where P3 = price producers receive (P2 + subsidy).' },
        { label: '📊 Welfare distribution', text: 'Consumer benefit = (P1 − P2) × Q2 (lower price on all units). Producer benefit = (P3 − P1) × Q2 (higher received price). Government cost > consumer + producer benefit = DWL from subsidy.' }
      ],
      examEdge: 'The government cost of a subsidy is the rectangle between the two supply curves over the new quantity. The DWL triangle (between old and new equilibrium) represents the welfare cost of distorting production beyond the free-market level — unless correcting an externality, in which case the subsidy reduces the externality DWL.'
    },
    {
      id: 'indirect_taxes_subsidies_10',
      template: 'framing',
      title: 'Correcting Positive Externalities with Subsidies',
      body: 'Where a positive externality exists (MSB > MPB), the market under-produces relative to the social optimum. A subsidy can correct this by increasing production to the socially optimal level Q*.<br><br><strong>Optimal subsidy:</strong> set equal to the marginal external benefit (MEB) at Q*. This effectively shifts MPB up to equal MSB (or MPC down to equal MSC for a production subsidy).<br><br><strong>Examples:</strong> solar panel installation subsidy (UK Feed-in Tariff — corrects underproduction of renewable energy); childcare subsidy (corrects under-provision of childcare that enables female workforce participation); R&D tax credits (corrects underinvestment in research with positive knowledge spillovers).',
      keyTerms: [
        { term: 'Optimal subsidy', def: 'Subsidy equal to the marginal external benefit at the socially optimal output — the exact correction needed.' },
        { term: 'Feed-in Tariff', def: 'UK scheme (2010-2019) paying households a guaranteed price for solar electricity generated — subsidy to correct underproduction of renewable energy.' },
        { term: 'R&D spillovers', def: 'Knowledge created by firms\' research spills over to other firms — a positive externality justifying R&D subsidies.' }
      ],
      examEdge: 'Subsidy size calibration problem: optimal subsidy = MEB at Q*. But MEB is hard to measure. Over-subsidy → more than socially optimal production → government failure. Under-subsidy → insufficient correction → market failure persists. This is the same problem as Pigouvian taxes — information requirement is the key limitation.'
    },
    {
      id: 'indirect_taxes_subsidies_11',
      template: 'cause',
      title: 'Real-World Subsidy Examples',
      causesStyle: 'tinted-flat',
      causesEmoji: '💰',
      causesLabel: 'Four major subsidy contexts',
      causes: [
        { icon: '🌾', head: 'Agricultural subsidies', body: 'EU Common Agricultural Policy (CAP): ~€50bn/year in farm subsidies. Justification: food security, rural communities, income stabilisation. Criticism: distorts trade (WTO disputes), benefits large farms disproportionately, environmentally damaging intensive farming incentivised.' },
        { icon: '⚡', head: 'Electric vehicle grants', body: 'UK Plug-in Vehicle Grant (up to £5,000) to correct positive externality of reduced emissions. Also corrects information failure — consumers may underestimate long-run fuel savings. Phased out 2022 as EV market matured and costs fell.' },
        { icon: '🌬️', head: 'Renewable energy (Contracts for Difference)', body: 'Government guarantees a "strike price" for electricity from renewables — effectively a subsidy when market price falls below the strike price. Has driven massive expansion of offshore wind.' },
        { icon: '😷', head: 'COVID-19 furlough scheme', body: 'Government paid 80% of wages of furloughed workers — a labour market subsidy. Cost: ~£70bn. Prevented mass unemployment during lockdowns. Not correcting market failure — emergency stabilisation policy.' }
      ],
      examEdge: 'Agricultural subsidies are a classic example of a subsidy that may have been justified initially (post-WWII food security) but which now persists due to political economy (farmers are a powerful lobby). This illustrates how subsidies, once established, become politically very difficult to remove — a key government failure risk.'
    },
    {
      id: 'indirect_taxes_subsidies_12',
      template: 'framing',
      title: 'Evaluation: Benefits vs Limitations of Subsidies',
      verdict: {
        leftLabel: '✅ Case FOR subsidies',
        rightLabel: '❌ Case AGAINST / Limitations',
        separator: 'VS',
        rows: [
          { aspect: 'Externalities', left: 'Corrects positive externalities — increases production to socially optimal level', right: 'Fiscal cost: funded by taxpayers — opportunity cost of alternative government spending' },
          { aspect: 'Industries', left: 'Supports infant industries unable to compete until they achieve economies of scale', right: 'Difficult to set optimal amount — requires knowing MEB, which is uncertain' },
          { aspect: 'Equity', left: 'Progressive: can be targeted at goods that improve low-income welfare (childcare, food)', right: 'May distort resource allocation beyond optimal level — over-subsidised industries attract excess resources' },
          { aspect: 'Track record', left: 'UK offshore wind subsidised to now cheapest electricity source — industrial transformation', right: 'Vested interests lobby to maintain subsidies even when externality is corrected — government failure' }
        ]
      },
      examEdge: 'The infant-industry argument for subsidies: justified if the industry will eventually be competitive (comparative advantage will develop); unjustified if protection becomes permanent and the industry never matures. This is why sunset clauses (automatic removal of subsidies after a fixed period) are good policy design — forces reassessment.'
    },
    {
      id: 'indirect_taxes_subsidies_13',
      template: 'diagnose',
      title: 'Who Benefits from a Subsidy?',
      intro: 'The distribution of subsidy benefit between consumers and producers depends on price elasticities — the same logic as tax incidence.',
      rows: [
        { label: 'Scenario', colA: 'Elastic supply, inelastic demand (food staples)', colB: 'Inelastic supply, elastic demand (luxury market)' },
        { label: 'Subsidy effect', colA: 'Supply can expand easily; demand doesn\'t respond much to price. Most of subsidy passed to consumers as lower prices. Government achieves consumption goal.', colB: 'Supply can\'t expand much; consumers respond strongly to lower prices. Most of subsidy absorbed by higher producer revenue, not consumer price reduction.' },
        { label: 'Policy implication', colA: 'Subsidy is efficient at reducing consumer prices — correct instrument if goal is affordability. Subsidy mostly benefits consumers (inelastic demand side).', colB: 'Subsidy mostly benefits producers — may not achieve consumption goal. Alternative (direct consumer voucher) more effective at targeting consumption.' }
      ],
      footer: 'Rule: the more elastic side of the market passes more of the subsidy to the other side. Policymakers should consider who they want to benefit when choosing producer vs consumer subsidy and setting the size.',
      examEdge: 'Agricultural subsidy incidence: demand for food is inelastic; supply is moderately elastic. Result: much of the CAP subsidy is retained by farmers (less elastic side) rather than passed to consumers as lower food prices. This partly explains why CAP is costly but does not dramatically reduce food prices for EU consumers.'
    },
    {
      id: 'indirect_taxes_subsidies_14',
      template: 'framing',
      title: 'Taxes vs Subsidies: Final Comparison',
      body: '<strong>When to use a tax:</strong> when the market over-produces a good with negative externalities. Tax raises price, reduces quantity, raises government revenue, and forces the polluter to pay.<br><br><strong>When to use a subsidy:</strong> when the market under-produces a good with positive externalities. Subsidy lowers price, raises quantity, costs government revenue, and rewards beneficial behaviour.<br><br><strong>Subsidy vs public provision:</strong> subsidy supports private providers; public provision replaces them. NHS provides healthcare directly (public provision); childcare voucher subsidises private nurseries. Public provision may be more equitable (universal access); subsidy maintains market diversity and competition.<br><br><strong>Key similarity:</strong> both face the same core challenge — you need accurate information about the size of the externality (MEC or MEB) to set the right tax or subsidy level. This information is rarely available, making both instruments imperfect in practice.',
      keyTerms: [
        { term: 'Green incentive', def: 'Subsidy or tax break for environmentally beneficial behaviour — positive reinforcement rather than negative (tax) approach.' },
        { term: 'Sunset clause', def: 'Predetermined end date for a policy or subsidy — forces reassessment and reduces risk of permanent distortion.' },
        { term: 'Additionality', def: 'Whether a subsidy causes additional activity that would not have happened anyway — hard to measure and a key challenge for policymakers.' }
      ],
      examEdge: 'Exam essays comparing two policies: tax vs subsidy structure — tax = revenue-raising, punishes bad behaviour, can be regressive; subsidy = revenue-costing, rewards good behaviour, can be progressive. Both require accurate externality data. Both may distort markets if set at the wrong level. Both preserve consumer/producer choice (unlike regulation).',
      keyTakeaway: { title: 'The big picture', text: 'Indirect taxes and subsidies are mirror images: taxes shift supply left and raise revenue; subsidies shift supply right and cost revenue. Both change equilibrium price and quantity, both create welfare transfers, and in both cases who really pays or benefits is determined by relative price elasticities — not by who hands over the money.' },
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
