window.ECONOS_TOPIC = {
  id: 'neg_externalities',
  topicNum: '1.12',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Negative Externalities',
  estTime: '9-11 minutes',
  goal: 'Lock in the externality framework — MSC vs MPC, deadweight welfare loss, and how to draw and evaluate the negative externality diagram.',
  intro: {
    heroKey: 'heroExternalities',
    summary: 'Negative externalities arise when production or consumption imposes costs on third parties not reflected in market prices. The result: the market overproduces relative to the socially optimal level, creating a welfare loss.',
    doInThis: 'Work through 8 cards covering the definition and types of negative externalities, the MSC/MPC diagram, welfare loss triangle, real-world examples, production vs consumption externalities, policy responses, and a 25-mark essay scaffold on correcting negative externalities.',
    outcomes: [
      'Define negative externality and distinguish production from consumption externalities',
      'Draw and interpret the negative production externality diagram with MSC above MPC',
      'Identify the market output, socially optimal output, and deadweight welfare loss',
      'Evaluate government policies to correct negative externalities'
    ],
    tip: 'Negative externality → MSC > MPC → market overproduces. Deadweight welfare loss = triangle between market output and socially optimal output. Government corrects via Pigouvian tax to shift MPC up to MSC.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'neg_externalities_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Negative externalities: the big picture',
      lede: 'When private costs ignore third-party harm, markets overproduce — and society pays the bill.',
      branches: [
        { tone: 'green',  label: 'The core concept',   sub: 'MSC = MPC + MEC. When MEC > 0, the market price understates true cost and output exceeds the social optimum.' },
        { tone: 'blue',   label: 'The diagram',        sub: 'MSC sits above MPC. Welfare loss is the triangle between MSC and MPB beyond Q*.' },
        { tone: 'amber',  label: 'Types & examples',   sub: 'Production externalities (pollution, congestion) and consumption externalities (smoking, alcohol).' },
        { tone: 'purple', label: 'Coase & private fixes', sub: 'With clear property rights and low transaction costs, parties can bargain to the efficient outcome — no government needed.' },
        { tone: 'rose',   label: 'Government policies', sub: 'Pigouvian taxes, regulation, tradable permits — each with strengths, weaknesses, and information demands.' }
      ],
      body: 'An <strong>externality</strong> occurs when a third party (not the buyer or seller) is affected by an economic transaction. A <strong>negative externality</strong> is an external cost — a cost imposed on third parties who receive no compensation.<br><br>Key terminology:<br>• <strong>Private cost (MPC):</strong> the cost borne by the producer or consumer directly.<br>• <strong>External cost (MEC):</strong> the cost borne by third parties not party to the transaction.<br>• <strong>Social cost (MSC):</strong> MSC = MPC + MEC — the total cost to society of producing one more unit.<br><br>When negative externalities exist, MSC > MPC. Market prices only reflect MPC, so the market overproduces — more output is produced than is socially optimal.',
      keyTerms: [
        { term: 'Negative externality', def: 'An external cost imposed on third parties as a result of economic activity — not reflected in market price.' },
        { term: 'MSC', def: 'Marginal Social Cost = MPC + MEC. The true cost to society of one more unit of output.' },
        { term: 'Overproduction', def: 'Market output exceeds socially optimal output because private costs understate social costs.' }
      ],
      examEdge: 'Always distinguish private cost from social cost. The market fails because prices reflect MPC, not MSC. If MPC = MSC (no externality), market is efficient. If MSC > MPC (negative externality), market overproduces by the amount between Q-market and Q-optimal. This logic must be explicit in any externality answer.'
    },
    {
      id: 'neg_externalities_2',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'The Negative Production Externality Diagram',
      lede: 'The most important diagram in market failure. Build it in four moves — every label matters.',
      diagramKey: 'negExternalityInteractive',
      steps: [
        {
          key: 'base',
          label: 'Market equilibrium',
          text: 'Start with the free market: <strong>MPC</strong> (marginal private cost, supply) meets <strong>MSB</strong> (marginal social benefit, demand) at the market equilibrium <strong>(Q_m, P_m)</strong>. This is what an unregulated market produces — but it ignores any cost imposed on third parties.'
        },
        {
          key: 'extension',
          label: 'Add MSC and MEC',
          text: 'Add <strong>MSC</strong> (marginal social cost) above MPC. The vertical gap between them is the <strong>MEC</strong> — marginal external cost imposed on third parties: pollution, congestion, noise, CO₂. MSC = MPC + MEC. The market ignores this gap, so it overproduces.'
        },
        {
          key: 'shift',
          label: 'Socially optimal output',
          text: 'The socially optimal point is where <strong>MSC = MSB</strong> at <strong>(Q*, P*)</strong>. Compare: <strong>Q* &lt; Q_m</strong> (society wants less output) and <strong>P* &gt; P_m</strong> (optimal price is higher). The free market overproduces by (Q_m − Q*).'
        },
        {
          key: 'efficiency',
          label: 'Deadweight welfare loss',
          text: 'Shade the <strong>DWL triangle</strong> bounded by MSC (above), MSB (below), and the vertical at Q_m. For every unit produced beyond Q*, society loses (MSC − MSB) of welfare. A <strong>Pigouvian tax = MEC at Q*</strong> internalises the externality and eliminates the DWL.'
        }
      ],
      examEdge: 'Diagram technique: label all six elements — D=MSB, MPC, MSC, E_market (Q_m, P_m), E* (Q*, P*), and shade the DWL triangle. Missing any of these loses marks. Draw MSC as a parallel shift above MPC for a constant external cost.'
    },
    {
      id: 'neg_externalities_3',
      template: 'cause',
      title: 'Types of Negative Externalities',
      causes: [
        { head: 'Production externalities', body: 'Pollution from manufacturing: chemical plant discharges into river; power station CO2 emissions; noise from airport. The external cost falls on households, other firms, or the environment. Classic for the MSC > MPC diagram.' },
        { head: 'Consumption externalities', body: 'Negative effects from using a product: passive smoking (tobacco); traffic congestion (car use); noise from music events. The external cost arises from consumption, not production. Demand = MPB < MSB for positive externalities; here MSC ≠ MPC diagram adjusts — MPB > MSB.' },
        { head: 'Environmental damage', body: 'Carbon emissions, deforestation, overfishing — externalities that damage natural capital with long-run consequences. Characterised by stock externalities (accumulate over time) rather than flow externalities.' },
        { head: 'Global externalities', body: 'Climate change is a global externality — emissions in one country impose costs worldwide. No single government can internalise all costs; requires international cooperation (Paris Agreement, carbon trading schemes).' }
      ],
      examEdge: 'Distinguish production from consumption externalities in the diagram: production externality → MSC shifts above MPC (supply side). Consumption externality (negative) → MPB shifts below MSB (demand side — use this when the question involves consumer behaviour, not firm production).'
    },
    {
      id: 'neg_externalities_4',
      template: 'framing',
      title: 'Coase Theorem and Private Solutions',
      body: 'Ronald Coase (1960) argued that if property rights are well-defined and transaction costs are zero, private bargaining will internalise externalities without government intervention — regardless of who holds the property right.<br><br><strong>Example:</strong> Factory (polluter) and fishermen (victim). If fishermen have right to clean water: factory will compensate fishermen to permit some pollution, up to the point where marginal profit from pollution = marginal external cost. Efficient outcome reached privately.<br><br><strong>Limitation:</strong> Transaction costs are rarely zero. When many parties are affected (climate change), private bargaining is impossible. Public goods nature of the environment means Coasian solutions apply only to small numbers of identifiable parties.',
      keyTerms: [
        { term: 'Coase theorem', def: 'With well-defined property rights and zero transaction costs, private bargaining will internalise externalities efficiently.' },
        { term: 'Transaction costs', def: 'Costs of identifying parties, negotiating, and enforcing agreements — often too high for large-scale externalities.' },
        { term: 'Property rights', def: 'Legal rights over resources — Coase argued that clear property rights are sufficient for efficient externality resolution.' }
      ],
      examEdge: 'Coase is the strongest theoretical argument against government intervention for externalities — but its limitations (high transaction costs, many affected parties, global spillovers) explain why most externality corrections do require government action. Using Coase as an evaluation point in essays gains credit.'
    },
    {
      id: 'neg_externalities_5',
      template: 'cause',
      title: 'Government Policies to Correct Negative Externalities',
      causes: [
        { head: 'Pigouvian tax', body: 'Tax equal to the marginal external cost at the socially optimal output level. Raises MPC to equal MSC → market produces Q-optimal. Example: UK fuel duty, sugar tax. Advantage: uses price mechanism; raises revenue. Limitation: difficult to measure MEC accurately; may be regressive.' },
        { head: 'Cap-and-trade (emissions trading)', body: 'Set a total cap on emissions; issue tradeable permits. Firms can only emit within their permit allocation; buy extra permits from firms that reduce emissions cheaply. EU ETS example. Advantage: achieves environmental target efficiently; flexible. Limitation: permit price volatility; lobbying for free permits.' },
        { head: 'Regulation and legislation', body: 'Legal limits on pollution; mandatory standards (Euro emission standards); outright bans. Advantage: certain outcome if enforced. Limitation: "one size fits all"; compliance costs; regulatory capture risk.' },
        { head: 'State provision', body: 'Government takes over the externality-creating activity and forces socially optimal output. Nationalised industries can set output at Q-optimal. Limitation: government failure risk; information requirement.' }
      ],
      examEdge: 'Evaluation framework for Pigouvian taxes: (1) Is the MEC measurable? (2) Is demand sufficiently inelastic to achieve the output reduction? (3) What are the distributional consequences? (4) Risk of evasion/black markets. Use these four questions to structure evaluation paragraphs on any externality policy.'
    },
    {
      id: 'neg_externalities_6',
      template: 'diagnose',
      title: 'Case Study: Carbon Emissions',
      intro: 'Carbon emissions are the largest-scale negative externality — global, long-lasting, and politically contested.',
      rows: [
        { label: 'Feature', colA: 'Scale of externality', colB: 'Policy response' },
        { label: 'Detail', colA: 'Global public bad — emissions in any country affect all. MEC is enormous but disputed: social cost of carbon estimated at $51-$185/tonne CO2 (IPCC range). Stock externality — accumulates over centuries.', colB: 'Carbon taxes (UK: ~\xa350/tonne ETS price). EU ETS: cap-and-trade. Paris Agreement: voluntary national targets. No binding global mechanism → free rider problem remains.' },
        { label: 'Key tension', colA: 'Measuring MEC requires long-run discounted projections — contested by economists. Lower discount rate (Stern) → higher MEC; higher discount rate (Nordhaus) → lower MEC.', colB: 'Unilateral carbon pricing risks "carbon leakage" — firms relocate to lower-cost jurisdictions. EU CBAM (Carbon Border Adjustment Mechanism) attempts to address this.' }
      ],
      footer: 'Carbon is the ultimate test of externality policy: the polluter is everyone (consumption externality); the victim is everyone (global); and the solution requires unprecedented international coordination.',
      examEdge: 'Climate change demonstrates both the limits of market solutions (Coase impossible at global scale) and the limits of government solutions (free rider problem across nations). Top essays acknowledge this double failure and evaluate the feasibility of international agreements.'
    },
    {
      id: 'neg_externalities_7',
      template: 'paired',
      title: 'Taxes vs Regulation: Evaluation',
      left: {
        label: 'Taxes (Pigouvian)',
        points: [
          'Allows firms to choose how to reduce pollution — minimises total compliance cost',
          'Generates government revenue for green investment',
          'Dynamic efficiency: firms continually incentivised to innovate to reduce tax burden',
          'Limitation: requires accurate measurement of MEC (difficult)',
          'Limitation: may be regressive — energy taxes hit low-income households hardest'
        ]
      },
      right: {
        label: 'Regulation (command-and-control)',
        points: [
          'Provides certainty about the environmental outcome',
          'Simple to communicate and enforce (e.g. emission limits)',
          'Does not require accurate MEC measurement — just a standard',
          'Limitation: "one size fits all" — may be inefficient if firms have different abatement costs',
          'Limitation: regulatory capture risk — polluters lobby for weak standards'
        ]
      },
      examEdge: 'Economists generally prefer taxes (price-based instruments) for efficiency; environmentalists may prefer regulations for certainty. A hybrid is often optimal: regulations set a minimum standard; taxes create incentives beyond compliance. Acknowledge this in essays for a balanced evaluation.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    },
    {
      id: 'neg-ext-essay',
      template: 'essay-scaffold',
      stepLabel: 'Learn: Step 8 of 8',
      question: 'Evaluate the view that a Pigouvian (pollution) tax is the most effective way to correct the market failure caused by negative externalities. [25 marks]',
      marks: 25,
      timeGuide: '35 minutes',
      paragraphs: [
        {
          type: 'intro',
          label: 'Introduction',
          prompt: 'Define negative externality and state why the market fails. Briefly outline the Pigouvian tax mechanism and signal that you will evaluate it against alternatives.',
          hint: 'State that MSC > MPC, the market overproduces at Qm > Q*, and a Pigouvian tax of MEC at Q* can in theory internalise the external cost.',
          model: 'A negative externality arises when a third party bears costs not reflected in the market price, so that MSC > MPC. The free market overproduces at Qm (where MPC = MSB) rather than the socially optimal Q* (where MSC = MSB), generating a deadweight welfare loss. A Pigouvian tax set equal to the MEC at Q* shifts MPC upward to equal MSC, inducing the market to produce Q* without direct government control of output. Whether this is the most effective correction depends on the accuracy of information available, the elasticity of demand, distributional consequences, and the feasibility of alternative interventions.'
        },
        {
          type: 'analysis',
          label: 'Analysis — the case FOR Pigouvian taxes',
          prompt: 'Explain the diagram mechanism (MSC, MPC, DWL, optimal tax). Argue the efficiency and revenue advantages versus regulation.',
          hint: 'Tax = MEC at Q*. Eliminates DWL triangle. Raises revenue for green investment. Dynamic incentive to keep innovating beyond compliance. Firms choose cheapest abatement method (cost-effective).',
          model: 'The key theoretical advantage of a Pigouvian tax is its price-mechanism efficiency. By setting the tax equal to the MEC at the socially optimal output level, the government internalises the external cost without specifying which firm must cut output. Each firm faces the same marginal cost of pollution, so total abatement occurs at minimum aggregate cost — firms with low abatement costs reduce output more, those with high abatement costs pay the tax. This contrasts with uniform regulation, which imposes identical standards regardless of a firm\'s abatement cost, producing the same environmental outcome at higher total cost. A further advantage is dynamic efficiency: faced with a tax that falls on every unit of pollution, firms have a permanent incentive to invest in cleaner technology beyond the regulatory compliance threshold. Tax revenue (approximately MEC × Q*) can be recycled as a "double dividend" — reducing other distortionary taxes or funding environmental investment.'
        },
        {
          type: 'counter',
          label: 'Counter-argument — limitations of Pigouvian taxes',
          prompt: 'Identify the core practical problems: measuring MEC is very difficult, taxes can be regressive, and inelastic demand limits effectiveness.',
          hint: 'Information problem: MEC disputed, varies by context. Regressive impact: fuel duty hits low-income households hardest. If PED is inelastic, output may not fall to Q* even with a large tax.',
          model: 'The central practical limitation is information failure. Setting the optimal tax requires an accurate estimate of the MEC — yet the MEC is inherently difficult to measure, as it requires valuing environmental damage across all affected parties, across time, and under uncertainty. Economists disagree substantially: the social cost of carbon, for instance, is estimated at anywhere between $15 and $300 per tonne CO₂, depending on discount rate assumptions and climate damage models (Stern vs Nordhaus). An incorrectly estimated MEC produces government failure: if the tax is set too low, the market still overproduces; if too high, output falls below Q*, generating a new DWL in the opposite direction. A second limitation is distributional equity. Pigouvian taxes — particularly on energy, fuel, and tobacco — are regressive, taking a larger proportion of income from low-income households who spend a higher share on these necessities. This raises political economy problems: the 2018 French "gilets jaunes" protests erupted partly in response to fuel duty increases. Politically unacceptable taxes may be undermined by exemptions, defeating their corrective purpose.'
        },
        {
          type: 'evaluation',
          label: 'Evaluation — comparing alternative policies',
          prompt: 'Assess cap-and-trade (ETS) and regulation as alternatives. Evaluate contextual factors: scale of externality, number of polluters, monitoring capacity.',
          hint: 'ETS: achieves environmental target with certainty at least cost, but permit prices volatile. Regulation: certain outcome but no dynamic efficiency and "one-size-fits-all" problem. Context: for global externalities (carbon), Coase impossible — international coordination needed.',
          model: 'Cap-and-trade schemes such as the EU ETS combine the cost-efficiency of taxes with the outcome certainty of regulation. By fixing a total quantity of permits (achieving an environmental target) and allowing trading (ensuring cost efficiency), ETS avoids the measurement problem of setting the exact MEC — the carbon price is determined by the market for permits. However, permit price volatility creates investment uncertainty for firms planning long-run capital expenditure, and if permits are issued for free (grandfathering), the revenue-recycling benefit is lost. Regulatory standards (command-and-control), while informationally undemanding, are allocatively inefficient: a uniform emissions limit ignores that some firms can abate very cheaply while others cannot, so total abatement cost is higher than necessary. For large-scale, global externalities such as climate change, neither unilateral taxes nor domestic regulation can fully internalise the cost — free-rider problems between nations mean that the optimal solution requires international cooperation (Paris Agreement, CBAM), which is inherently harder to achieve than domestic price instruments.'
        },
        {
          type: 'conclusion',
          label: 'Conclusion',
          prompt: 'Make a conditional judgement: under what conditions is a Pigouvian tax the best instrument? What is the overall verdict?',
          hint: 'Pigouvian taxes are theoretically optimal but practically limited. Effective when: MEC is measurable, demand is elastic, distributional effects are compensated. Hybrid with regulation may be superior in practice.',
          model: 'The Pigouvian tax is theoretically the most efficient corrective instrument, since it achieves Q* at minimum total abatement cost while generating revenue and maintaining dynamic efficiency incentives. Its practical superiority, however, is conditional. Where the MEC can be estimated with reasonable confidence, demand is elastic, and distributional effects can be offset through revenue recycling (e.g. compensating low-income households), the tax is likely the best available tool. Where the MEC is deeply contested (carbon), demand is inelastic (tobacco in the short run), or distributional impacts are severe, complementary instruments — regulations to guarantee minimum standards, ETS to cap total emissions, or direct provision to bypass the market — may be preferable or necessary alongside the tax. In practice, the most effective policy mix typically combines a Pigouvian price signal with regulatory backstops: neither instrument alone is sufficient. The claim that a pollution tax is always "the most effective" correction is thus too strong — but it remains the essential first instrument in the policymaker\'s toolkit.'
        }
      ]
    }
  ]
};
