window.ECONOS_TOPIC = {
  id: 'neg_externalities',
  topicNum: '3.2.1',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Negative Externalities',
  estTime: '9-11 minutes',
  goal: 'Lock in the externality framework — MSC vs MPC, deadweight welfare loss, and how to draw and evaluate the negative externality diagram.',
  intro: {
    heroKey: 'heroExternalities',
    summary: 'Negative externalities arise when production or consumption imposes costs on third parties not reflected in market prices. The result: the market overproduces relative to the socially optimal level, creating a welfare loss.',
    doInThis: 'Work through 7 cards covering the costs trilogy (MPC, MEC, MSC), the negative production externality diagram, real-world examples, market-based and command-and-control interventions, why intervention can fail, and the exam moves that distinguish top-grade answers.',
    outcomes: [
      'Define negative externality and distinguish production from consumption externalities',
      'Draw and interpret the negative production externality diagram with MSC above MPC',
      'Identify the market output, socially optimal output, and deadweight welfare loss',
      'Evaluate government policies to correct negative externalities'
    ],
    tip: 'Negative externality → MSC > MPC → market overproduces. Deadweight welfare loss = triangle between market output and socially optimal output. Government corrects via Pigouvian tax to shift MPC up to MSC.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'neg_externalities_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'The costs trilogy',
      tip: [
        {
          icon: '🏭',
          tone: 'green',
          head: 'The steel plant',
          text: 'A steel plant produces one more tonne of steel. To do so, it burns coal and emits smoke. The firm pays for wages, energy and raw materials — those are <em>its</em> costs. But the smoke harms nearby residents, causing coughs, asthma and lower quality of life. Those costs are not paid by the firm — they are borne by third parties.<br><br><strong>The producer faces a private cost, but third parties face an external cost.</strong>'
        }
      ],
      keyPointsLabel: 'The three costs',
      keyPointsEmoji: '💰',
      keyPointsCols: 3,
      keyPoints: [
        { tone: 'green',  icon: '💼', title: 'Marginal Private Cost (MPC)',  headline: 'The cost to the producer of one more unit',         body: '<em>Memory cue:</em> the costs <strong>I pay</strong>.' },
        { tone: 'purple', icon: '👥', title: 'Marginal External Cost (MEC)', headline: 'The cost imposed on third parties by that unit',    body: '<em>Memory cue:</em> the <strong>harm they pay</strong>.' },
        { tone: 'blue',   icon: '🌍', title: 'Marginal Social Cost (MSC)',   headline: 'The total cost to society of producing that unit', body: '<em>Memory cue:</em> the <strong>true cost to all</strong>.' }
      ],
      keyPointsFormula: [
        { label: 'MPC', tone: 'green' },
        { op: '+' },
        { label: 'MEC', tone: 'purple' },
        { op: '=' },
        { label: 'MSC', tone: 'blue' }
      ],
      workedExample: {
        label: 'Worked example: the steel plant',
        emoji: '🏭',
        scene: 'steelPlant',
        cards: [
          {
            tone: 'green', icon: '💼',
            title: 'MPC', subtitle: '(private costs)',
            bullets: ['Wages', 'Energy', 'Raw materials', 'Machine depreciation'],
            badge: { icon: '👤', text: 'Paid by firm' },
            op: '+'
          },
          {
            tone: 'purple', icon: '👥',
            title: 'MEC', subtitle: '(external costs)',
            bullets: ['Smoke', 'Health damage to local residents', 'Cleaning costs for nearby properties'],
            badge: { icon: '👥', text: 'Borne by third parties' },
            op: '='
          },
          {
            tone: 'blue', icon: '🌍',
            title: 'MSC', subtitle: '(social costs)',
            body: 'All private costs <strong>+</strong> all external costs combined — the true cost to society.',
            badge: { icon: '🌍', text: 'Total social burden' }
          }
        ],
        summary: [
          { icon: '💼', label: 'Private cost', tone: 'green' },
          { op: '+' },
          { icon: '👥', label: 'External harm', tone: 'purple' },
          { op: '=' },
          { icon: '🌍', label: 'True social cost', tone: 'blue' }
        ]
      },
      tipLate: {
        icon: '⭐',
        tone: 'blue',
        head: 'Key idea',
        text: 'In a negative externality, the free market ignores external costs, so <strong>output is too high</strong> relative to the social optimum.'
      },
      keyTerms: [
        { term: 'Marginal Private Cost (MPC)',  def: 'The additional cost borne by the producer of supplying one more unit of output.' },
        { term: 'Marginal External Cost (MEC)', def: 'The additional cost imposed on third parties by the production (or consumption) of one more unit.' },
        { term: 'Marginal Social Cost (MSC)',   def: 'The total additional cost to society of one more unit — equal to MPC + MEC. The true cost the market should respond to but does not.' }
      ],
      examEdge: 'Remember the trilogy — <strong>private</strong> is paid by the producer; <strong>external</strong> is paid by others; <strong>social = private + external</strong>. State this explicitly before you draw the diagram. For the positive mirror, see <a href="learn.html?topic=pos_externalities" style="color:#2563EB;font-weight:700;">Positive Externalities</a>.'
    },
    {
      id: 'neg_externalities_2',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'The Negative Production Externality Diagram',
      lede: 'The most important diagram in market failure. Build it in four moves — every label matters.',
      diagramKey: 'negExternalityInteractive',
      diagramCallouts: [
        { tone: 'green',  icon: '📈', head: 'Free market output is too high', body: 'At Q_market the market produces beyond the socially optimal Q*.' },
        { tone: 'purple', icon: '🔻', head: 'Deadweight welfare loss',        body: 'The shaded triangle is the value to society of units overproduced beyond the social optimum.' },
        { tone: 'blue',   icon: '💡', head: 'Vertical gap = MEC',             body: 'The vertical distance between MSC and MPC is the marginal external cost imposed on third parties.' }
      ],
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
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Real-world examples',
      tip: { icon: 'ℹ️', tone: 'green', text: '<strong>Strong exam answers improve when you name the third party harmed.</strong> Here are the most commonly examined externalities and who bears the cost.' },
      illustratedGridLabel: 'Production externalities',
      illustratedGridEmoji: '🏭',
      illustratedGrid: [
        {
          scene: 'steelCement', tone: 'green',
          title: 'Steel and cement production',
          body: 'Emissions and dust cause air pollution and contribute to climate change.',
          thirdParty: 'Nearby residents and future generations'
        },
        {
          scene: 'shippingAviation', tone: 'blue',
          title: 'Shipping and aviation emissions',
          body: 'Greenhouse gases and air pollution damage health and the climate.',
          thirdParty: 'Future generations and communities exposed to pollution'
        },
        {
          scene: 'deforestation', tone: 'amber',
          title: 'Deforestation',
          body: 'Loss of forests reduces biodiversity, increases flooding risk and releases carbon.',
          thirdParty: 'Ecosystems, indigenous communities and future generations'
        },
        {
          scene: 'intensiveFarming', tone: 'green',
          title: 'Intensive farming and fertiliser runoff',
          body: 'Nutrient runoff pollutes rivers and harms aquatic life.',
          thirdParty: 'Rivers, fisheries, biodiversity and nearby residents'
        }
      ],
      causesLabel: 'Also examinable: negative consumption externalities',
      causesEmoji: '🥃',
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '🚬', head: 'Smoking',       body: 'Harms non-smokers through second-hand smoke and higher public health costs.',                    tone: 'rose'   },
        { icon: '🍺', head: 'Alcohol',        body: 'Harms others through anti-social behaviour and NHS/emergency-service costs.',                    tone: 'amber'  },
        { icon: '🥤', head: 'Sugary drinks',  body: 'Imposes higher healthcare costs on society via obesity and diabetes-related illness.',          tone: 'purple' },
        { icon: '🚗', head: 'Petrol cars',    body: 'Air pollution and accelerated climate change harm third parties not paying at the pump.',       tone: 'slate'  }
      ],
      tipLate: { icon: '⭐', tone: 'blue', head: 'Exam move', text: 'Identify the producer or consumer, then name the external harm and the third party affected.' },
      examEdge: 'The spec leans towards production externalities, but consumption examples often appear in 5- and 8-mark questions. Always distinguish: production externality → MSC above MPC; consumption externality → MPB below MSB.'
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
      causesStyle: 'tinted-flat',
      causesEmoji: '🏛️',
      causesLabel: 'Four policy tools',
      causes: [
        { icon: '💸', head: 'Pigouvian tax', body: 'Tax equal to the marginal external cost at the socially optimal output level. Raises MPC to equal MSC → market produces Q-optimal. Example: UK fuel duty, sugar tax. Advantage: uses price mechanism; raises revenue. Limitation: difficult to measure MEC accurately; may be regressive.' },
        { icon: '🔄', head: 'Cap-and-trade (emissions trading)', body: 'Set a total cap on emissions; issue tradeable permits. Firms can only emit within their permit allocation; buy extra permits from firms that reduce emissions cheaply. EU ETS example. Advantage: achieves environmental target efficiently; flexible. Limitation: permit price volatility; lobbying for free permits.' },
        { icon: '📋', head: 'Regulation and legislation', body: 'Legal limits on pollution; mandatory standards (Euro emission standards); outright bans. Advantage: certain outcome if enforced. Limitation: "one size fits all"; compliance costs; regulatory capture risk.' },
        { icon: '🏛️', head: 'State provision', body: 'Government takes over the externality-creating activity and forces socially optimal output. Nationalised industries can set output at Q-optimal. Limitation: government failure risk; information requirement.' }
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
        { label: 'Detail', colA: 'Global public bad — emissions in any country affect all. MEC is enormous but disputed: social cost of carbon estimated at $51-$185/tonne CO2 (IPCC range). Stock externality — accumulates over centuries.', colB: 'Carbon taxes (UK: ~£50/tonne ETS price). EU ETS: cap-and-trade. Paris Agreement: voluntary national targets. No binding global mechanism → free rider problem remains.' },
        { label: 'Key tension', colA: 'Measuring MEC requires long-run discounted projections — contested by economists. Lower discount rate (Stern) → higher MEC; higher discount rate (Nordhaus) → lower MEC.', colB: 'Unilateral carbon pricing risks "carbon leakage" — firms relocate to lower-cost jurisdictions. EU CBAM (Carbon Border Adjustment Mechanism) attempts to address this.' }
      ],
      footer: 'Carbon is the ultimate test of externality policy: the polluter is everyone (consumption externality); the victim is everyone (global); and the solution requires unprecedented international coordination.',
      examEdge: 'Climate change demonstrates both the limits of market solutions (Coase impossible at global scale) and the limits of government solutions (free rider problem across nations). Top essays acknowledge this double failure and evaluate the feasibility of international agreements.'
    },
    {
      id: 'neg_externalities_7',
      template: 'framing',
      title: 'Taxes vs Regulation: Evaluation',
      verdict: {
        leftLabel: '💸 Taxes (Pigouvian)',
        rightLabel: '📋 Regulation (command-and-control)',
        separator: 'VS',
        rows: [
          { aspect: 'Flexibility', left: 'Firms choose how to reduce pollution — minimises total compliance cost', right: '"One size fits all" — may be inefficient if firms have different abatement costs' },
          { aspect: 'Revenue', left: 'Generates government revenue for green investment', right: 'No revenue generated from regulation itself' },
          { aspect: 'Certainty', left: 'Uncertain quantity outcome — depends on how firms respond to the price', right: 'Provides certainty about the environmental outcome if enforced' },
          { aspect: 'Dynamic efficiency', left: 'Firms continually incentivised to innovate and reduce their tax burden', right: 'Once compliance standard met, no further incentive to innovate' },
          { aspect: 'Key limitation', left: 'Requires accurate MEC measurement (difficult) and may be regressive', right: 'Regulatory capture risk — polluters lobby for weak standards' }
        ]
      },
      examEdge: 'Economists generally prefer taxes (price-based instruments) for efficiency; environmentalists may prefer regulations for certainty. A hybrid is often optimal: regulations set a minimum standard; taxes create incentives beyond compliance. Acknowledge this in essays for a balanced evaluation.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
