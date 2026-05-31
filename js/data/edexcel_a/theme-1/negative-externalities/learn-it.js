window.ECONOS_TOPIC = {
  id: 'negative-externalities',
  topicNum: '3.2',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Negative Externalities',
  estTime: '9-11 minutes',
  goal: 'Lock in the externality framework – MSC vs MPC, deadweight welfare loss, and how to draw and evaluate the negative externality diagram.',
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
      { num: 1, name: 'Learn it', sub: '7 concept cards',         state: 'done',      href: TopicLoader.routes.learn()      },
      { num: 2, name: 'Link it',  sub: 'Apply skills in context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it',  sub: 'Exam paper',              state: 'locked'                                                  }
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
          text: 'A steel plant produces one more tonne of steel. To do so, it burns coal and emits smoke. The firm pays for wages, energy and raw materials – those are <em>its</em> costs. But the smoke harms nearby residents, causing coughs, asthma and lower quality of life. Those costs are not paid by the firm – they are borne by third parties.<br><br><strong>The producer faces a private cost, but third parties face an external cost.</strong>'
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
        heroImage: '/assets/steel-hero.png',
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
            body: 'All private costs <strong>+</strong> all external costs combined – the true cost to society.',
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
        { term: 'Marginal Social Cost (MSC)',   def: 'The total additional cost to society of one more unit – equal to MPC + MEC. The true cost the market should respond to but does not.' }
      ],
      examEdge: 'Remember the trilogy – <strong>private</strong> is paid by the producer; <strong>external</strong> is paid by others; <strong>social = private + external</strong>. State this explicitly before you draw the diagram. For the positive mirror, see <a href="/learn/pos-externalities" style="color:#2563EB;font-weight:700;">Positive Externalities</a>.'
    },
    {
      id: 'neg_externalities_2',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'The Negative Production Externality Diagram',
      lede: 'The most important diagram in market failure. Build it in four moves – every label matters.',
      blocks: [
        { type: 'sectionHeader', icon: '📊', label: 'Build the diagram in four moves' },
        {
          type: 'econDiagram',
          chart: 'externalities-neg',
          views: [
            {
              label: 'Market equilibrium',
              show: ['MPC', 'MPB'],
              points: ['marketEq'],
              head: 'Market equilibrium — MPC meets MPB',
              body: 'Start with the free market: MPC (marginal private cost, supply) meets MPB (marginal social benefit, demand) at the market equilibrium (Qₘ, Pₘ).',
              analysis: 'This is what an unregulated market produces — but it ignores any cost imposed on third parties. Only private costs are reflected in the price.'
            },
            {
              label: 'Add MSC and MEC',
              show: ['MPC', 'MPB', 'MSC'],
              points: ['marketEq'],
              head: 'Add MSC above MPC — the gap is MEC',
              body: 'Add MSC (marginal social cost) above MPC. The vertical gap between them is the MEC — marginal external cost imposed on third parties: pollution, congestion, noise, CO₂.',
              analysis: 'MSC = MPC + MEC. The market ignores this gap, so it overproduces relative to what is best for society.'
            },
            {
              label: 'Socially optimal output',
              show: ['MPC', 'MPB', 'MSC'],
              points: ['marketEq', 'socialEq'],
              head: 'Social optimum — where MSC = MPB',
              body: 'The socially optimal point is where MSC = MPB at (Q*, P*). Compare: Q* < Qₘ (society wants less output) and P* > Pₘ (the optimal price is higher).',
              analysis: 'The free market overproduces by (Qₘ − Q*). At the social optimum every extra unit’s true cost to society is just matched by its benefit.'
            },
            {
              label: 'Deadweight welfare loss',
              show: ['MPC', 'MPB', 'MSC'],
              points: ['socialEq', 'marketEq'],
              areas: [
                { between: ['MSC', 'MPB'], x: [369, 430], tone: 'rose', label: 'DWL' }
              ],
              head: 'Deadweight welfare loss',
              body: 'Shade the DWL triangle bounded by MSC (above), MPB (below) and the vertical at Qₘ. For every unit produced beyond Q*, society loses (MSC − MPB) of welfare.',
              analysis: 'A Pigouvian tax equal to MEC at Q* shifts MPC up to MSC, internalises the externality and eliminates the DWL.'
            }
          ]
        },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'green',  icon: '📈', head: 'Free market output is too high', body: 'At Qₘ the market produces beyond the socially optimal Q*.' },
          { type: 'tile', tone: 'purple', icon: '🔻', head: 'Deadweight welfare loss',        body: 'The shaded triangle is the value to society of units overproduced beyond the social optimum.' },
          { type: 'tile', tone: 'blue',   icon: '💡', head: 'Vertical gap = MEC',             body: 'The vertical distance between MSC and MPC is the marginal external cost imposed on third parties.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Diagram technique: label all six elements – MPB (=MSB), MPC, MSC, the market equilibrium (Qₘ, Pₘ), the social optimum (Q*, P*), and shade the DWL triangle. Missing any of these loses marks. Draw MSC as a parallel shift above MPC for a constant external cost.' }
      ]
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
      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '🎯', text: '<strong>Aim:</strong> to <em>internalise</em> the externality by making firms face the external cost.' },
        { type: 'sectionHeader', icon: '💸', label: 'Two market-based tools' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green', icon: '💸', head: 'Pigouvian tax', body: 'A tax equal to the size of MEC at Q* shifts MPC up to MSC, restoring the social optimum.<br><br><span style="font-weight:800;color:#059669;">Live examples:</span> UK fuel duty · sugar levy · UK Plastic Packaging Tax.<br><br><span style="font-weight:800;color:#059669;">Evaluation.</span> <em>Theoretically efficient:</em> achieves allocative efficiency at Q*. <em>Practically difficult:</em> government must estimate the true MEC, which is hard to measure accurately.' },
          { type: 'tile', tone: 'blue', icon: '🔄', head: 'Tradeable pollution permits (cap-and-trade)', body: 'Government caps total emissions, issues permits, and firms trade them. The market creates a price for pollution.<br><br><span style="font-weight:800;color:#2563EB;">Live examples:</span> UK ETS (UK Emissions Trading Scheme) · EU ETS (EU Emissions Trading System).<br><br><span style="font-weight:800;color:#2563EB;">Mechanism.</span> Firms with low abatement costs sell permits; firms with high abatement costs buy them. The total cap guarantees the environmental outcome.' }
        ]},
        { type: 'sectionHeader', icon: '⚖️', label: 'Comparing the two tools' },
        { type: 'grid', cols: 3, children: [
          { type: 'tile', tone: 'green', icon: '💰', head: 'Who pays?', body: '<strong>Pigouvian tax:</strong> producers (higher costs) and possibly consumers (higher prices). <strong>Cap-and-trade:</strong> producers (cost of permits passed on), and possibly consumers.' },
          { type: 'tile', tone: 'blue', icon: '🌱', head: 'Who benefits?', body: '<strong>Both schemes:</strong> third parties and the environment (less pollution); government raises revenue under a tax.' },
          { type: 'tile', tone: 'purple', icon: '🏭', head: 'Who is worse off?', body: '<strong>Both schemes:</strong> high-polluting firms – they face higher costs or must buy permits. Innovation that lowers abatement costs reduces this burden.' }
        ]},
        { type: 'sectionHeader', icon: '👥', label: 'Impact on economic agents' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green', icon: '🛒', head: 'Consumers', body: 'May face higher prices or fewer choices on the externality-causing good.' },
          { type: 'tile', tone: 'purple', icon: '🏭', head: 'Producers', body: 'Higher costs; low-polluters gain competitiveness vs. high-polluters under both schemes.' },
          { type: 'tile', tone: 'blue', icon: '🏛️', head: 'Government', body: 'Raises revenue (Pigouvian tax) or sets and enforces the emissions cap (permits).' },
          { type: 'tile', tone: 'amber', icon: '👥', head: 'Third parties', body: 'Benefit from cleaner air, better health and wellbeing.' }
        ]},
        { type: 'calloutStrip', tone: 'blue', icon: '💡', text: 'Market-based interventions use <strong>prices or markets</strong> to make firms internalise external costs. Remember – <strong>a tax targets the level of pollution; cap-and-trade targets the total</strong>.' },
        { type: 'examEdge', title: 'Exam edge', text: '"A Pigouvian tax is theoretically efficient but practically difficult to calibrate" – a high-mark phrase. For top marks compare tax vs. permits on flexibility, revenue, certainty and dynamic efficiency.' }
      ]
    },
    {
      id: 'neg_externalities_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Command-and-control interventions',
      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '⚖️', text: '<strong>Regulation</strong> does not primarily work through the price signal – it sets <strong>rules, standards, restrictions or bans</strong> to change behaviour or protect people and the environment.' },
        { type: 'sectionHeader', icon: '📋', label: 'Common command-and-control interventions' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'rose',   icon: '🚫',  head: 'Outright bans',                          body: 'The most direct form of regulation. <strong>Examples:</strong> ban on CFCs in aerosols; ban on leaded petrol.' },
          { type: 'tile', tone: 'purple', icon: '🚗',  head: 'Emission standards',                     body: 'Set a legal limit on the amount of pollution allowed. <strong>Example:</strong> Euro 6 emissions standard for cars.' },
          { type: 'tile', tone: 'blue',   icon: '🏢',  head: 'Planning restrictions',                  body: 'Limit where or how certain activities can take place. <strong>Examples:</strong> zoning laws; limits on industrial developments near homes or schools.' },
          { type: 'tile', tone: 'green',  icon: '🚭',  head: 'Smoking bans in enclosed public places', body: 'Protect public health by restricting harmful behaviour rather than taxing it.' },
          { type: 'tile', tone: 'slate',  icon: '🪪',  head: 'Minimum legal age',                      body: 'Restrict who can legally buy harmful goods. <strong>Examples:</strong> alcohol and tobacco purchase age (18 in the UK); vaping age limits.' },
          { type: 'tile', tone: 'amber',  icon: '💷',  head: 'Congestion charge',                      body: 'A <em>hybrid</em> between regulation and market pricing – access is restricted by rule, with a price used to manage demand.' }
        ]},
        { type: 'sectionHeader', icon: '⚖️', label: 'Trade-offs of command-and-control' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue', icon: '🔒', head: 'Less flexible',                              body: 'One-size-fits-all rules may not reflect different firms\' costs or circumstances.' },
          { type: 'tile', tone: 'blue', icon: '💸', head: 'More costly to comply with',                 body: 'Firms may face high compliance and monitoring costs.' },
          { type: 'tile', tone: 'blue', icon: '🎯', head: 'More certain in outcome',                    body: 'The regulator directly limits harmful activity – no reliance on how firms respond to prices.' },
          { type: 'tile', tone: 'blue', icon: '🛡️', head: 'Essential when harm is severe or irreversible', body: 'Toxic substances, serious health risks, endangered species – bans dominate taxes here.' }
        ]},
        { type: 'sectionHeader', icon: '👥', label: 'Impact on different agents' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green',  icon: '🛒', head: 'Consumers',     body: 'May face higher prices or restricted choice.' },
          { type: 'tile', tone: 'purple', icon: '🏭', head: 'Producers',     body: 'Face compliance costs and less freedom to choose how to operate.' },
          { type: 'tile', tone: 'blue',   icon: '👥', head: 'Third parties', body: 'Gain protection from harm (health, environment, wellbeing).' },
          { type: 'tile', tone: 'amber',  icon: '🏛️', head: 'Government',    body: 'Must monitor, enforce and may incur administration costs.' }
        ]},
        { type: 'calloutStrip', tone: 'amber', icon: '⚖️', text: '<strong>Hybrid note:</strong> The <strong>congestion charge</strong> straddles regulation and pricing – access is restricted by rule, with a price used to manage demand.' },
        { type: 'calloutStrip', tone: 'green', icon: '⭐', text: '<strong>Exam tip:</strong> Command-and-control gives <strong>greater certainty of outcome</strong>, especially where harm is irreversible.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Distinguish market-based vs. command-and-control by the mechanism: prices vs. rules. Use command-and-control as your dominant answer where harm is severe, irreversible or monitoring is feasible (e.g. CFCs, leaded petrol).' }
      ]
    },
    {
      id: 'neg_externalities_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Evaluation: why intervention can fail',
      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: '⚖️', text: 'Interventions aim to correct market failure, but correcting externalities can itself create <strong>government failure</strong>. Below are key reasons why intervention may be ineffective, inefficient or have unintended consequences.' },
        { type: 'sectionHeader', icon: '⚠️', label: 'Five reasons intervention can fail' },
        { type: 'mechanismChain', steps: [
          { label: 'Information failure',     detail: 'The MEC is unobservable, so the tax or cap may be set incorrectly.' },
          { label: 'Regulatory capture',      detail: 'Firms lobby for weaker rules, loopholes or delayed implementation.' },
          { label: 'Political short-termism', detail: 'Costs are immediate and visible; benefits may be decades away and politically costly.' },
          { label: 'Carbon leakage',          detail: 'Firms relocate to countries with laxer rules, so emissions fall domestically but rise elsewhere.' },
          { label: 'Regressive incidence',    detail: 'Fuel duty and similar measures can hit low-income households hardest.' }
        ]},
        { type: 'sectionHeader', icon: '🤝', label: null },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'blue',  icon: '🤝', head: 'Coase theorem – a counterpoint', body: 'When property rights are clearly defined and transaction costs are low, parties may <strong>bargain to the efficient (optimal) outcome</strong> without state intervention.' },
          { type: 'tile', tone: 'slate', icon: '⚠️', head: 'Limitations of Coasian bargaining', body: 'High transaction costs · Many affected parties · Hard to coordinate · Power imbalance' }
        ]},
        { type: 'calloutStrip', tone: 'amber', icon: '💡', text: '<strong>What the best evaluation does:</strong> Compare the market failure with the <em>government failure</em>. Ask whether the intervention improves on the market outcome, even if it is imperfect.' },
        { type: 'calloutStrip', tone: 'rose', icon: '⭐', text: '<strong>Exam edge:</strong> The key issue is not whether the intervention is perfect, but whether it produces a <strong>better outcome than the unregulated market</strong>.' },
        { type: 'bigIdea', text: 'Bottom line: Judging intervention is about <strong>trade-offs</strong>. We accept some government failure if the net benefit is an improvement on the market outcome.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Top evaluations name a specific failure (e.g. carbon leakage in unilateral pricing) and show a fix (e.g. EU CBAM border adjustment). Avoid generic phrases like "government failure" without an example.' }
      ]
    },
    {
      id: 'neg_externalities_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Exam edge & economist insight',
      blocks: [
        { type: 'calloutStrip', tone: 'green', icon: null, text: '<strong>Exam edge – best phrases to use in high-mark answers</strong><br><div style="display:flex;flex-direction:column;gap:8px;margin-top:4px;"><div style="display:flex;gap:10px;align-items:flex-start;"><span style="flex-shrink:0;line-height:1.55;">✅</span><span>&ldquo;The size of the welfare loss depends on the <em>price elasticity of demand and supply</em>.&rdquo;</span></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="flex-shrink:0;line-height:1.55;">✅</span><span>&ldquo;A Pigouvian tax is <em>theoretically efficient</em> but <em>practically difficult to calibrate</em>.&rdquo;</span></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="flex-shrink:0;line-height:1.55;">✅</span><span>&ldquo;Market-based policies are more <em>cost-effective</em>; <em>command-and-control gives greater certainty</em>.&rdquo;</span></div></div>' },
        { type: 'sectionHeader', icon: '📖', label: 'How to evaluate a 25-mark essay' },
        { type: 'mechanismChain', steps: [
          { label: 'Define & explain',            detail: 'Define the externality (type and cause) and explain the negative production externality diagram with MSC above MPC.' },
          { label: 'Analyse market-based',        detail: 'Evaluate Pigouvian tax and tradeable permits: efficiency, revenue, certainty, and the difficulty of measuring MEC.' },
          { label: 'Compare command-and-control', detail: 'Assess regulations, standards and bans on certainty of outcome, compliance costs and fairness.' },
          { label: 'Reach a judgement',           detail: 'Weigh size of externality, elasticity, political feasibility and irreversibility. Make a clear, supported conclusion.' }
        ]},
        { type: 'sectionHeader', icon: '⚖️', label: 'Judgement framework – use these criteria to compare policies' },
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green',  icon: '📈', head: 'Size of the externality',  body: 'How large is the welfare loss? Larger externalities justify stronger intervention.' },
          { type: 'tile', tone: 'blue',   icon: '📉', head: 'Elasticity',                body: 'How responsive are demand and supply? Inelastic demand means taxes raise revenue but cut quantity less.' },
          { type: 'tile', tone: 'purple', icon: '🗣️', head: 'Political feasibility',     body: 'Is the policy likely to be accepted and enforced? Regulatory capture, electoral cycles and public buy-in matter.' },
          { type: 'tile', tone: 'amber',  icon: '🌱', head: 'Irreversibility of harm',   body: 'Would the damage persist or be hard to reverse? Irreversible harms favour command-and-control.' }
        ]},
        { type: 'bigIdea', text: 'The best policy depends on the <em>external harm</em>, the <em>information available</em> and the <em>trade-off between flexibility and certainty</em>. Market-based tools are generally more efficient; command-and-control may be preferred when certainty and fairness matter most.' },
        { type: 'examEdge', title: 'Exam edge', text: 'Anchor every judgement to: <strong>size of externality · elasticity · political feasibility · irreversibility</strong>. Top answers reach a judgement, not a list.' }
      ],
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
    title:    'Negative Externalities',
    subtitle: 'Theme 1 &middot; Topic 3.2 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('neg_externalities_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers negative externalities of production and consumption, Pigouvian taxes, MSC/MPC divergence, and policy evaluation',
    shortNames: [
      'MSC MCQ', 'Types categorise', 'Pigouvian tax MCQ', 'Diagram interp',
      'Para fill', 'Cause & effect', 'Match pairs', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: MSC and overproduction */
      { type: 'mcq',
        stem: 'In a market with a <strong>negative externality of production</strong>, the free market produces at Q<sub>M</sub> but the social optimum is at Q<sub>S</sub>. Which correctly describes the relationship between these output levels and the curves?',
        opts: [
          'Q<sub>M</sub> > Q<sub>S</sub> – the free market overproduces because MPC < MSC; the gap between MSC and MPC equals the marginal external cost',
          'Q<sub>M</sub> < Q<sub>S</sub> – the free market underproduces because MPC > MSC; firms face costs that society does not',
          'Q<sub>M</sub> = Q<sub>S</sub> – negative externalities affect distribution but not the total level of output',
          'Q<sub>M</sub> > Q<sub>S</sub> – the free market overproduces because the demand curve lies above the MSC curve at the market price'
        ],
        ans: 0,
        exp: 'Negative externality of production: <strong>MSC = MPC + MEC</strong> (Marginal External Cost). At the free market equilibrium, only MPC = MSB – the firm ignores MEC. So MPC < MSC at the market output, and the firm produces more than the social optimum (where MSC = MSB). The market output Q<sub>M</sub> > social optimum Q<sub>S</sub>. The vertical gap between MSC and MPC equals the MEC at each output level. A Pigouvian tax of MEC per unit would shift MPC up to MSC, reducing output to Q<sub>S</sub>.'
      },

      /* 2 – Categorise: neg externalities of production vs consumption */
      { type: 'categorise',
        stem: 'Classify each example as a <strong>negative externality of production</strong> or a <strong>negative externality of consumption</strong>.',
        categories: ['Negative externality of production', 'Negative externality of consumption'],
        items: [
          { text: 'A coal power station emits CO₂ – costs borne by global population through climate change', category: 'Negative externality of production' },
          { text: 'Smokers impose secondhand smoke health costs on those nearby', category: 'Negative externality of consumption' },
          { text: 'A cement factory\'s dust pollutes surrounding farmland, reducing crop yields', category: 'Negative externality of production' },
          { text: 'Motorists\' car exhaust fumes cause respiratory illness in urban pedestrians', category: 'Negative externality of consumption' },
          { text: 'A factory\'s noise pollution disrupts a nearby school', category: 'Negative externality of production' },
          { text: 'Excessive alcohol consumption leads to antisocial behaviour, imposing costs on police and healthcare', category: 'Negative externality of consumption' }
        ],
        exp: '<strong>Negative externality of production</strong>: the cost arises from the production process itself (pollution, noise, waste) – the MPC curve lies below MSC. <strong>Negative externality of consumption</strong>: the cost arises from the act of consuming (smoking, driving, drinking) – the MPB (demand) curve lies above the MSB curve (social demand adjusted for external costs). Both cause overproduction/overconsumption relative to the social optimum, but the policy instruments differ: production externality → production tax; consumption externality → consumption tax on the consumer.'
      },

      /* 3 – MCQ: Pigouvian tax */
      { type: 'mcq',
        stem: 'A <strong>Pigouvian tax</strong> on a firm with a negative externality of production should be set equal to:',
        opts: [
          'The marginal external cost at the social optimum – to shift MPC up to MSC and reduce output to Q*',
          'The total external cost over all units produced – a one-off payment to compensate affected parties',
          'The firm\'s total profit – to deter production entirely and eliminate the externality',
          'The price of the good at the market equilibrium – to eliminate consumer surplus from the market'
        ],
        ans: 0,
        exp: 'A Pigouvian tax shifts the firm\'s marginal private cost curve upward by the amount of the marginal external cost (MEC) at the social optimum. This makes the firm internalise the external cost – effectively facing the full social cost. At the corrected equilibrium, MPC + tax = MSC, and the firm produces at the social optimum Q* (where MSC = MSB). If the tax is set too high, output falls below Q* (over-correction); too low, and overproduction continues. The challenge for policymakers is measuring MEC accurately – particularly difficult for diffuse externalities like CO₂.'
      },

      /* 4 – MCQ: negative externality diagram */
      { type: 'mcq',
        stem: 'On a diagram showing a negative externality of production, the <strong>deadweight welfare loss</strong> is represented by:',
        opts: [
          'The triangle between the market output (Q<sub>M</sub>) and the social optimum (Q*) bounded by the MSC and MSB (demand) curves',
          'The entire area under the MSC curve up to the market output',
          'The rectangle representing the tax revenue from a Pigouvian tax',
          'The area of consumer surplus at the market price'
        ],
        ans: 0,
        exp: 'The DWL triangle lies between Q* and Q<sub>M</sub>, bounded above by MSC and below by MSB (demand). Each unit from Q* to Q<sub>M</sub> has MSC > MSB – the social cost exceeds the social benefit. The height of the triangle at any output level is (MSC − MSB) at that output. The area of this triangle represents the total welfare loss from overproduction due to the negative externality. A Pigouvian tax that shifts MPC up to MSC eliminates this triangle entirely – restoring allocative efficiency.'
      },

      /* 5 – Para fill: negative externality analysis */
      { type: 'para_fill',
        stem: 'Complete the paragraph analysing a negative externality of production.',
        anchor: 'Factory pollution is the textbook example of a negative externality of production.',
        para: 'When a factory pollutes a river, it imposes [1] costs on local fishing communities and residents. These costs are [2] in the factory\'s private cost curve – the factory owner does not pay them. As a result, the factory\'s marginal [3] cost is lower than its marginal [4] cost. The free market produces [5] of the good than is socially optimal because the factory ignores the [6] cost in its profit maximisation. The resulting [7] is a triangle of welfare loss. A Pigouvian [8] equal to the marginal external cost would shift the MPC curve up to the MSC, correcting the overproduction.',
        blanks: [
          { id: 1, opts: ['external', 'internal', 'marginal', 'sunk'], ans: 0 },
          { id: 2, opts: ['not included', 'included', 'overstated', 'minimised'], ans: 0 },
          { id: 3, opts: ['private', 'social', 'average', 'total'], ans: 0 },
          { id: 4, opts: ['social', 'private', 'average', 'fixed'], ans: 0 },
          { id: 5, opts: ['more', 'less', 'the same amount', 'none'], ans: 0 },
          { id: 6, opts: ['external', 'internal', 'social', 'variable'], ans: 0 },
          { id: 7, opts: ['deadweight welfare loss', 'consumer surplus', 'producer surplus', 'total revenue'], ans: 0 },
          { id: 8, opts: ['tax', 'subsidy', 'price floor', 'price ceiling'], ans: 0 }
        ],
        exp: '(1) <strong>External</strong> costs – costs imposed on third parties. (2) <strong>Not included</strong> in the private cost curve. (3) Marginal <strong>private</strong> cost < (4) marginal <strong>social</strong> cost. (5) The market produces <strong>more</strong> (overproduction). (6) Ignores the <strong>external</strong> cost. (7) <strong>Deadweight welfare loss</strong> – the triangle of net social loss. (8) Pigouvian <strong>tax</strong> corrects overproduction. This sequence is the core analytical paragraph structure for any negative externality question.'
      },

      /* 6 – Cause & effect: pollution taxes */
      { type: 'cause_effect',
        stem: 'Match each mechanism in a Pigouvian tax chain to its correct effect.',
        pairs: [
          { cause: 'Government imposes a tax equal to the marginal external cost on a polluting firm', effect: 'Firm\'s marginal private cost rises to equal marginal social cost' },
          { cause: 'Firm now faces full social cost of production', effect: 'Firm reduces output from Q<sub>M</sub> to Q* (social optimum)' },
          { cause: 'Output falls to the social optimum', effect: 'Deadweight welfare loss is eliminated' },
          { cause: 'Tax revenue is collected by government', effect: 'Government can compensate those harmed or fund public goods' },
          { cause: 'Firm faces higher production costs from Pigouvian tax', effect: 'Incentive to invest in cleaner technology to reduce tax liability' },
          { cause: 'Carbon tax makes fossil fuel electricity more expensive', effect: 'Renewable energy becomes relatively cheaper – market shifts toward cleaner generation' }
        ],
        exp: 'The Pigouvian tax mechanism has multiple effects: <strong>direct correction</strong> (output falls to social optimum); <strong>DWL elimination</strong>; <strong>revenue generation</strong> (can be used for compensation or public goods – "double dividend"); <strong>innovation incentive</strong> (firms invest in cleaner technology to reduce tax liability – a dynamic efficiency gain beyond the static correction). Carbon taxes demonstrate all these effects in the real-world context of climate change.'
      },

      /* 7 – Match pairs: negative externality concepts */
      { type: 'match_pairs',
        stem: 'Match each term to its definition in the negative externality framework.',
        pairs: [
          { a: 'Marginal External Cost (MEC)', b: 'Extra cost imposed on third parties from producing one more unit' },
          { a: 'Marginal Social Cost (MSC)', b: 'Full cost to society of producing one more unit: MPC + MEC' },
          { a: 'Social optimum (Q*)', b: 'Output level where MSC = MSB – maximises total welfare' },
          { a: 'Market equilibrium (Q<sub>M</sub>)', b: 'Output level where MPC = MPB – ignores external cost' },
          { a: 'Internalising the externality', b: 'Making the producer bear the external cost through tax or regulation' },
          { a: 'Coase theorem', b: 'If property rights are well-defined and bargaining is costless, parties can negotiate to the social optimum without government intervention' }
        ],
        exp: 'Key concepts for diagram analysis: MEC is the vertical gap between MSC and MPC at each output. Social optimum Q* maximises net social welfare. Market equilibrium Q<sub>M</sub> overproduces. Internalising the externality can be done via Pigouvian taxes, tradeable permits, regulation, or (in the Coasian view) property rights + bargaining. The Coase theorem is theoretically elegant but requires zero transaction costs – difficult in practice with many affected parties.'
      },

      /* 8 – Odd one out: Pigouvian tax effects */
      { type: 'odd_one_out',
        stem: 'Three of these are effects of a correctly set <strong>Pigouvian tax</strong> on a negative externality. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '📉', label: 'Output falls from the free market level to the socially optimal level', note: '' },
          { icon: '💰', label: 'Government collects tax revenue that can be used to compensate those harmed', note: '' },
          { icon: '🌿', label: 'Firms gain an incentive to invest in cleaner technology to reduce their tax bill', note: '' },
          { icon: '🏭', label: 'All pollution is eliminated – firms stop production entirely to avoid the tax', note: '' }
        ],
        ans: 3,
        exp: 'The odd one out is <strong>all pollution is eliminated</strong>. A correctly set Pigouvian tax does not eliminate production – it reduces output to the <strong>social optimum</strong> Q*, where some externality still exists but at the level where MSC = MSB. Eliminating all production would be excessive and would destroy consumer and producer surplus from beneficial trades. The other three are genuine effects: output reduction to Q* (static correction); government revenue (potential double dividend); innovation incentive (dynamic efficiency gain). The goal is optimal pollution, not zero pollution.'
      },

      /* 9 – Data table: UK congestion charges */
      { type: 'data_table',
        stem: 'The table shows transport data for London before and after the introduction of the Congestion Charge (2003).',
        headers: ['Indicator', 'Before (2002)', 'After (2004)', 'Change'],
        rows: [
          ['Average car traffic in charging zone (vehicles/day)', '195,000', '160,000', '−18%'],
          ['Average travel speed in charging zone (mph)', '8.2', '10.9', '+33%'],
          ['Revenue raised (£m/year)', '–', '97', 'New'],
          ['Bus journey times (minutes shorter on same routes)', '–', '14% faster', 'Improved'],
          ['Cycling in charging zone', 'Baseline', '+12%', '+12%']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data in terms of negative externality theory?',
        opts: [
          'The congestion charge worked as a Pigouvian-style tax – it reduced the negative externality (congestion) by reducing car traffic 18%, improved speeds for all road users, raised revenue, and incentivised substitute transport modes',
          'The congestion charge failed – 82% of cars still entered the zone, showing the tax was set too low',
          'The data prove that congestion charges are always the best solution to traffic externalities in all city contexts',
          'Revenue of £97m proves the main goal was tax collection rather than externality correction'
        ],
        ans: 0,
        exp: 'The data show a textbook Pigouvian tax outcome: <strong>quantity reduced</strong> (car traffic fell 18%); <strong>externality reduced</strong> (congestion improved – average speeds rose 33%); <strong>positive spillovers</strong> to other road users (buses 14% faster, more space for cyclists); <strong>revenue raised</strong> (£97m for public transport investment). Option B: 82% still entering is not a failure – the social optimum allows some traffic (where MSC = MSB), not zero. Option C overclaims. Option D misidentifies the purpose – Pigouvian taxes are designed to correct behaviour AND raise revenue.'
      },

      /* 10 – Multi-select: evaluation of Pigouvian taxes */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of Pigouvian taxes as a solution to negative externalities?',
        opts: [
          'Pigouvian taxes correct negative externalities by making firms internalise external costs',
          'While Pigouvian taxes are theoretically elegant, their practical effectiveness depends critically on accurately measuring the marginal external cost – which is notoriously difficult for diffuse externalities like CO₂, where costs vary by location, time, and affected population; mis-setting the tax rate leads to under- or over-correction',
          'Taxes are always better than regulation for correcting externalities',
          'Pigouvian taxes may have regressive distributional effects – a fuel duty or congestion charge takes a higher percentage of income from low-income households who are less able to reduce consumption or switch modes, creating a tension between efficiency and equity that revenue recycling (rebates to lower-income groups) can partially but not fully resolve',
          'Carbon taxes reduce CO₂ emissions',
          'The "double dividend" case for environmental taxes – that they can simultaneously improve efficiency (correct externality) and reduce distortionary labour or income taxes – is theoretically attractive but empirically uncertain: the dividend depends on how revenue is recycled, and tax interactions can reduce the net benefit'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: identifies the measurement problem as the key practical limitation and explains why it matters – leading to a qualified conclusion (mis-setting the rate). D: identifies the regressive distributional consequence and evaluates a potential policy response (revenue recycling) while noting its limitation – a multi-step evaluation reaching a direction. F: evaluates the "double dividend" argument – acknowledges its theoretical appeal but qualifies it with empirical uncertainty about revenue recycling. A and E are descriptions; C is an unsupported assertion.'
      }

    ]
  };

})();
