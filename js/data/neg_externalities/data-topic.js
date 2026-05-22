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
        heroImage: 'assets/steel-hero.png',
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
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Market-based interventions',
      tip: { icon: '🎯', tone: 'green', text: '<strong>Aim:</strong> to <em>internalise</em> the externality by making firms face the external cost.' },
      keyPointsLabel: 'Two market-based tools',
      keyPointsEmoji: '💸',
      keyPointsCols: 2,
      keyPoints: [
        {
          tone: 'green', icon: '💸', title: 'Pigouvian tax',
          headline: 'A tax equal to the size of MEC at Q* shifts MPC up to MSC, restoring the social optimum.',
          body: '<span style="font-weight:800;color:#059669;">Live examples:</span> UK fuel duty · sugar levy · UK Plastic Packaging Tax.<br><br><span style="font-weight:800;color:#059669;">Evaluation.</span> <em>Theoretically efficient:</em> achieves allocative efficiency at Q*. <em>Practically difficult:</em> government must estimate the true MEC, which is hard to measure accurately.'
        },
        {
          tone: 'blue', icon: '🔄', title: 'Tradeable pollution permits (cap-and-trade)',
          headline: 'Government caps total emissions, issues permits, and firms trade them. The market creates a price for pollution.',
          body: '<span style="font-weight:800;color:#2563EB;">Live examples:</span> UK ETS (UK Emissions Trading Scheme) · EU ETS (EU Emissions Trading System).<br><br><span style="font-weight:800;color:#2563EB;">Mechanism.</span> Firms with low abatement costs sell permits; firms with high abatement costs buy them. The total cap guarantees the environmental outcome.'
        }
      ],
      causesLabel: 'Comparing the two tools',
      causesEmoji: '⚖️',
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '💰', head: 'Who pays?',         body: '<strong>Pigouvian tax:</strong> producers (higher costs) and possibly consumers (higher prices). <strong>Cap-and-trade:</strong> producers (cost of permits passed on), and possibly consumers.', tone: 'green' },
        { icon: '🌱', head: 'Who benefits?',     body: '<strong>Both schemes:</strong> third parties and the environment (less pollution); government raises revenue under a tax.', tone: 'blue'  },
        { icon: '🏭', head: 'Who is worse off?', body: '<strong>Both schemes:</strong> high-polluting firms — they face higher costs or must buy permits. Innovation that lowers abatement costs reduces this burden.', tone: 'purple' }
      ],
      table: {
        title: 'Impact on economic agents',
        emoji: '👥',
        headers: ['Agent', 'Impact'],
        rows: [
          { icon: '🛒', tone: 'green',  label: 'Consumers',     value: 'May face higher prices or fewer choices on the externality-causing good.' },
          { icon: '🏭', tone: 'purple', label: 'Producers',     value: 'Higher costs; low-polluters gain competitiveness vs. high-polluters under both schemes.' },
          { icon: '🏛️', tone: 'blue',   label: 'Government',    value: 'Raises revenue (Pigouvian tax) or sets and enforces the emissions cap (permits).' },
          { icon: '👥', tone: 'amber',  label: 'Third parties', value: 'Benefit from cleaner air, better health and wellbeing.' }
        ]
      },
      tipLate: { icon: '💡', tone: 'blue', head: 'Key idea', text: 'Market-based interventions use <strong>prices or markets</strong> to make firms internalise external costs. Remember — <strong>a tax targets the level of pollution; cap-and-trade targets the total</strong>.' },
      examEdge: '“A Pigouvian tax is theoretically efficient but practically difficult to calibrate” — a high-mark phrase. For top marks compare tax vs. permits on flexibility, revenue, certainty and dynamic efficiency.'
    },
    {
      id: 'neg_externalities_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Command-and-control interventions',
      tip: { icon: '⚖️', tone: 'green', text: '<strong>Regulation</strong> does not primarily work through the price signal — it sets <strong>rules, standards, restrictions or bans</strong> to change behaviour or protect people and the environment.' },
      causesLabel: 'Common command-and-control interventions',
      causesEmoji: '📋',
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '🚫',  head: 'Outright bans',                       body: 'The most direct form of regulation. <strong>Examples:</strong> ban on CFCs in aerosols; ban on leaded petrol.',                                              tone: 'rose'   },
        { icon: '🚗',  head: 'Emission standards',                  body: 'Set a legal limit on the amount of pollution allowed. <strong>Example:</strong> Euro 6 emissions standard for cars.',                                       tone: 'purple' },
        { icon: '🏢',  head: 'Planning restrictions',               body: 'Limit where or how certain activities can take place. <strong>Examples:</strong> zoning laws; limits on industrial developments near homes or schools.',     tone: 'blue'   },
        { icon: '🚭',  head: 'Smoking bans in enclosed public places', body: 'Protect public health by restricting harmful behaviour rather than taxing it.',                                                                        tone: 'green'  },
        { icon: '🪪',  head: 'Minimum legal age',                    body: 'Restrict who can legally buy harmful goods. <strong>Examples:</strong> alcohol and tobacco purchase age (18 in the UK); vaping age limits.',                tone: 'slate'  },
        { icon: '💷',  head: 'Congestion charge',                   body: 'A <em>hybrid</em> between regulation and market pricing — access is restricted by rule, with a price used to manage demand.',                                tone: 'amber'  }
      ],
      keyPointsLabel: 'Trade-offs of command-and-control',
      keyPointsEmoji: '⚖️',
      keyPointsCols: 2,
      keyPointsStyle: 'minimal',
      keyPoints: [
        { tone: 'blue', icon: '🔒', title: 'Less flexible',                       headline: 'One-size-fits-all rules may not reflect different firms\' costs or circumstances.',          body: '' },
        { tone: 'blue', icon: '💸', title: 'More costly to comply with',          headline: 'Firms may face high compliance and monitoring costs.',                                       body: '' },
        { tone: 'blue', icon: '🎯', title: 'More certain in outcome',             headline: 'The regulator directly limits harmful activity — no reliance on how firms respond to prices.', body: '' },
        { tone: 'blue', icon: '🛡️', title: 'Essential when harm is severe or irreversible', headline: 'Toxic substances, serious health risks, endangered species — bans dominate taxes here.', body: '' }
      ],
      table: {
        title: 'Impact on different agents',
        emoji: '👥',
        headers: ['Agent', 'Impact'],
        rows: [
          { icon: '🛒', tone: 'green',  label: 'Consumers',     value: 'May face higher prices or restricted choice.' },
          { icon: '🏭', tone: 'purple', label: 'Producers',     value: 'Face compliance costs and less freedom to choose how to operate.' },
          { icon: '👥', tone: 'blue',   label: 'Third parties', value: 'Gain protection from harm (health, environment, wellbeing).' },
          { icon: '🏛️', tone: 'amber',  label: 'Government',    value: 'Must monitor, enforce and may incur administration costs.' }
        ]
      },
      tipLate: [
        { icon: '⚖️', tone: 'amber', head: 'Hybrid note', text: 'The <strong>congestion charge</strong> straddles regulation and pricing — access is restricted by rule, with a price used to manage demand.' },
        { icon: '⭐', tone: 'green', head: 'Exam tip',    text: 'Command-and-control gives <strong>greater certainty of outcome</strong>, especially where harm is irreversible.' }
      ],
      examEdge: 'Distinguish market-based vs. command-and-control by the mechanism: prices vs. rules. Use command-and-control as your dominant answer where harm is severe, irreversible or monitoring is feasible (e.g. CFCs, leaded petrol).'
    },
    {
      id: 'neg_externalities_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Evaluation: why intervention can fail',
      tip: { icon: '⚖️', tone: 'green', text: 'Interventions aim to correct market failure, but correcting externalities can itself create <strong>government failure</strong>. Below are key reasons why intervention may be ineffective, inefficient or have unintended consequences.' },
      flowTitle: 'Five reasons intervention can fail',
      flowEmoji: '⚠️',
      flow: [
        { tone: 'green',  icon: '🔍', title: 'Information failure',     sub: 'The MEC is unobservable, so the tax or cap may be set incorrectly.' },
        { tone: 'purple', icon: '🗣️', title: 'Regulatory capture',      sub: 'Firms lobby for weaker rules, loopholes or delayed implementation.' },
        { tone: 'blue',   icon: '🏛️', title: 'Political short-termism', sub: 'Costs are immediate and visible; benefits may be decades away and politically costly.' },
        { tone: 'amber',  icon: '🌍', title: 'Carbon leakage',          sub: 'Firms relocate to countries with laxer rules, so emissions fall domestically but rise elsewhere.' },
        { tone: 'rose',   icon: '👥', title: 'Regressive incidence',    sub: 'Fuel duty and similar measures can hit low-income households hardest.' }
      ],
      left:  { tone: 'blue',  icon: '🤝', label: 'Coase theorem — a counterpoint', text: 'When property rights are clearly defined and transaction costs are low, parties may <strong>bargain to the efficient (optimal) outcome</strong> without state intervention.' },
      right: { tone: 'slate', icon: '⚠️', label: 'Limitations of Coasian bargaining', points: ['High transaction costs', 'Many affected parties', 'Hard to coordinate', 'Power imbalance'] },
      pairLabel: null,
      tipLate: [
        { icon: '💡', tone: 'amber', head: 'What the best evaluation does', text: 'Compare the market failure with the <em>government failure</em>. Ask whether the intervention improves on the market outcome, even if it is imperfect.' },
        { icon: '⭐', tone: 'rose',  head: 'Exam edge',                     text: 'The key issue is not whether the intervention is perfect, but whether it produces a <strong>better outcome than the unregulated market</strong>.' }
      ],
      conclusion: { title: 'Bottom line', text: 'Judging intervention is about <strong>trade-offs</strong>. We accept some government failure if the net benefit is an improvement on the market outcome.' },
      examEdge: 'Top evaluations name a specific failure (e.g. carbon leakage in unilateral pricing) and show a fix (e.g. EU CBAM border adjustment). Avoid generic phrases like “government failure” without an example.'
    },
    {
      id: 'neg_externalities_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Exam edge & economist insight',
      tip: { icon: null, tone: 'green', head: 'Exam edge — best phrases to use in high-mark answers', text: '<div style="display:flex;flex-direction:column;gap:8px;margin-top:4px;"><div style="display:flex;gap:10px;align-items:flex-start;"><span style="flex-shrink:0;line-height:1.55;">✅</span><span>&ldquo;The size of the welfare loss depends on the <em>price elasticity of demand and supply</em>.&rdquo;</span></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="flex-shrink:0;line-height:1.55;">✅</span><span>&ldquo;A Pigouvian tax is <em>theoretically efficient</em> but <em>practically difficult to calibrate</em>.&rdquo;</span></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="flex-shrink:0;line-height:1.55;">✅</span><span>&ldquo;Market-based policies are more <em>cost-effective</em>; <em>command-and-control gives greater certainty</em>.&rdquo;</span></div></div>' },
      flow: [
        { tone: 'blue',   icon: '📘', title: 'Define & explain',            sub: 'Define the externality (type and cause) and explain the negative production externality diagram with MSC above MPC.' },
        { tone: 'green',  icon: '💸', title: 'Analyse market-based',        sub: 'Evaluate Pigouvian tax and tradeable permits: efficiency, revenue, certainty, and the difficulty of measuring MEC.' },
        { tone: 'purple', icon: '📋', title: 'Compare command-and-control', sub: 'Assess regulations, standards and bans on certainty of outcome, compliance costs and fairness.' },
        { tone: 'amber',  icon: '⚖️', title: 'Reach a judgement',          sub: 'Weigh size of externality, elasticity, political feasibility and irreversibility. Make a clear, supported conclusion.' }
      ],
      flowTitle: 'How to evaluate a 25-mark essay',
      flowEmoji: '📖',
      causesLabel: 'Judgement framework — use these criteria to compare policies',
      causesEmoji: '⚖️',
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '📈', head: 'Size of the externality',  body: 'How large is the welfare loss? Larger externalities justify stronger intervention.',                            tone: 'green'  },
        { icon: '📉', head: 'Elasticity',                body: 'How responsive are demand and supply? Inelastic demand means taxes raise revenue but cut quantity less.',        tone: 'blue'   },
        { icon: '🗣️', head: 'Political feasibility',     body: 'Is the policy likely to be accepted and enforced? Regulatory capture, electoral cycles and public buy-in matter.', tone: 'purple' },
        { icon: '🌱', head: 'Irreversibility of harm',  body: 'Would the damage persist or be hard to reverse? Irreversible harms favour command-and-control.',                  tone: 'amber'  }
      ],
      economistQuote: {
        portraitKey: 'economistPigou',
        tone: 'amber',
        label: 'Economist insight on externalities',
        quote: '…one person A, in the course of rendering some service for which payment is made to a second person B, incidentally also renders services or disservices to other persons, of such a sort that payment cannot be exacted from the benefited parties or compensation enforced on behalf of the injured parties.',
        attribution: 'Arthur Pigou, <em>The Economics of Welfare</em> (1920)'
      },
      tipLate: {
        icon: '💡', tone: 'green', head: 'Why this matters',
        text: 'This passage defines the externality problem: A imposes a cost on others, but no one can compel A to pay. Pigou\'s solution was a corrective tax — set equal to the <strong>marginal external cost at Q*</strong> — so firms face the full social cost of their output. This <strong>Pigouvian tax</strong> shifts MPC up to MSC, closing the wedge between private and social optima.'
      },
      conclusion: { title: 'Top-line judgement', text: 'The best policy depends on the <em>external harm</em>, the <em>information available</em> and the <em>trade-off between flexibility and certainty</em>. Market-based tools are generally more efficient; command-and-control may be preferred when certainty and fairness matter most.' },
      examEdge: 'Anchor every judgement to: <strong>size of externality · elasticity · political feasibility · irreversibility</strong>. Top answers reach a judgement, not a list.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
