window.ECONOS_TOPIC = {
  id: 'pos_externalities',
  topicNum: '3.2.2',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Positive Externalities',
  estTime: '9-11 minutes',
  goal: 'Lock in the externality framework — MSB vs MPB, welfare gain forgone, and how to draw and evaluate the positive consumption externality diagram.',
  intro: {
    heroKey: 'heroPosExternalities',
    summary: 'Positive externalities arise when production or consumption creates benefits for third parties not reflected in market prices. The result: the market under-produces relative to the socially optimal level, leaving welfare gains on the table.',
    doInThis: 'Work through 7 cards covering the benefits trilogy (MPB, MEB, MSB), the positive consumption externality diagram, real-world examples, market-based and direct-provision interventions, why intervention can fail, and the exam moves that distinguish top-grade answers.',
    outcomes: [
      'Define positive externality and distinguish consumption from production externalities',
      'Draw and interpret the positive consumption externality diagram with MSB above MPB',
      'Identify the market output, socially optimal output, and welfare gain forgone',
      'Evaluate government policies to correct positive externalities'
    ],
    tip: 'Positive externality → MSB > MPB → market under-produces. Welfare gain forgone = triangle between market output and socially optimal output. Government corrects via Pigouvian subsidy to shift MPB up to MSB.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'pos_externalities_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Positive externalities: the benefits trilogy',
      tip: { icon: '💡', tone: 'blue', text: '<em>A market can create benefits that spill over to people who were not directly involved. When that happens, private benefit is less than social benefit — and the market tends to produce too little.</em>' },
      keyPointsLabel: 'The three benefits',
      keyPointsEmoji: '🎁',
      keyPointsCols: 3,
      keyPoints: [
        { tone: 'green',  icon: '💼', title: 'Marginal Private Benefit (MPB)',  headline: 'The benefit received by the consumer from one more unit',  body: '<em>Memory cue:</em> the benefit <strong>I get</strong>.' },
        { tone: 'purple', icon: '👥', title: 'Marginal External Benefit (MEB)', headline: 'The benefit enjoyed by third parties from that unit',      body: '<em>Memory cue:</em> the <strong>bonus others get</strong>.' },
        { tone: 'blue',   icon: '🌍', title: 'Marginal Social Benefit (MSB)',   headline: 'The total benefit to society from consuming that unit',     body: '<em>Memory cue:</em> the <strong>true benefit to all</strong>.' }
      ],
      keyPointsFormula: [
        { label: 'MPB', tone: 'green' },
        { op: '+' },
        { label: 'MEB', tone: 'purple' },
        { op: '=' },
        { label: 'MSB', tone: 'blue' }
      ],
      workedExample: {
        label: 'Worked example: the flu vaccine',
        emoji: '💉',
        heroImage: 'assets/vaccination-hero.png',
        cards: [
          {
            tone: 'green', icon: '💼',
            title: 'MPB', subtitle: '(private benefits)',
            bullets: ['Reduced chance of illness', 'Less time off work or study', 'Peace of mind'],
            badge: { icon: '👤', text: 'Captured by you' },
            op: '+'
          },
          {
            tone: 'purple', icon: '👥',
            title: 'MEB', subtitle: '(external benefits)',
            bullets: ['Fewer infections passed to others', 'Protection for vulnerable people', 'Lower pressure on hospitals'],
            badge: { icon: '👥', text: 'Captured by third parties' },
            op: '='
          },
          {
            tone: 'blue', icon: '🌍',
            title: 'MSB', subtitle: '(social benefits)',
            body: 'All private benefits <strong>+</strong> all external benefits combined — the true benefit to society.',
            badge: { icon: '🌍', text: 'Total social gain' }
          }
        ],
        summary: [
          { icon: '💼', label: 'Private benefit', tone: 'green' },
          { op: '+' },
          { icon: '👥', label: 'External benefit', tone: 'purple' },
          { op: '=' },
          { icon: '🌍', label: 'True social benefit', tone: 'blue' }
        ]
      },
      tipLate: {
        icon: '✅',
        tone: 'green',
        head: 'Why the market under-provides',
        text: 'Because consumers usually think about MPB, not the full MSB. If MEB is positive, the market quantity is too low — some of the benefits to society are simply ignored.'
      },
      keyTerms: [
        { term: 'Marginal Private Benefit (MPB)',  def: 'The additional benefit received by the consumer from one more unit of consumption.' },
        { term: 'Marginal External Benefit (MEB)', def: 'The additional benefit enjoyed by third parties from the consumption (or production) of one more unit.' },
        { term: 'Marginal Social Benefit (MSB)',   def: 'The total additional benefit to society from one more unit — equal to MPB + MEB. The true benefit the market should respond to but does not.' }
      ],
      examEdge: 'Remember the trilogy — <strong>private</strong> is captured by the consumer; <strong>external</strong> is captured by others; <strong>social = private + external</strong>. State this explicitly before you draw the diagram. For the negative mirror, see <a href="learn.html?topic=neg_externalities" style="color:#2563EB;font-weight:700;">Negative Externalities</a>.'
    },
    {
      id: 'pos_externalities_2',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'The positive consumption externality diagram',
      lede: 'The mirror of the negative diagram. Build it in four moves — every label matters.',
      diagramKey: 'posExternalityInteractive',
      diagramCallouts: [
        { tone: 'green',  icon: '📉', head: 'Free market output is too low', body: 'At Q_market the market produces below the socially optimal Q*.' },
        { tone: 'purple', icon: '🔺', head: 'Welfare gain forgone',          body: 'The shaded triangle is the welfare society foregoes by under-consuming.' },
        { tone: 'blue',   icon: '💡', head: 'Vertical gap = MEB',            body: 'The vertical distance between MSB and MPB is the marginal external benefit captured by third parties.' }
      ],
      steps: [
        {
          key: 'base',
          label: 'Market equilibrium',
          text: 'Start with the free market: <strong>MPB</strong> (marginal private benefit, demand) meets <strong>MPC = MSC</strong> (supply) at the market equilibrium <strong>(Q_m, P_m)</strong>. The market ignores any benefit captured by third parties.'
        },
        {
          key: 'extension',
          label: 'Add MSB and MEB',
          text: 'Add <strong>MSB</strong> (marginal social benefit) above MPB. The vertical gap is the <strong>MEB</strong> — marginal external benefit enjoyed by third parties: herd immunity, productivity, lower crime. MSB = MPB + MEB. The market ignores this gap, so it under-consumes.'
        },
        {
          key: 'shift',
          label: 'Socially optimal output',
          text: 'The socially optimal point is where <strong>MSB = MSC</strong> at <strong>(Q*, P*)</strong>. Compare: <strong>Q* &gt; Q_m</strong> (society wants more output) and <strong>P* &gt; P_m</strong> (optimal price is higher). The free market under-produces by (Q* − Q_m).'
        },
        {
          key: 'efficiency',
          label: 'Welfare gain forgone',
          text: 'Shade the triangle bounded by MSB (above), MSC (below), and the vertical between Q_m and Q*. For every unit not produced between Q_m and Q*, society loses (MSB − MSC) of welfare. A <strong>Pigouvian subsidy = MEB at Q*</strong> internalises the externality and closes the wedge.'
        }
      ],
      tipLate: [
        { icon: '✅', tone: 'green', head: 'What the diagram shows',  text: 'The market produces too little. At Q_market, only private benefits (MPB) are counted, so price is lower (P_market) and quantity is below the efficient level (Q*). The shaded triangle is the welfare gain society forgoes when consumption stays at the market level.' },
        { icon: 'ℹ️',  tone: 'blue',  head: 'Production-side mirror', text: 'For a positive production externality, think MSC below MPC instead. The logic is identical — the market still produces too little.' }
      ],
      examEdge: 'Diagram technique: label all six elements — MSC = MPC, MPB, MSB, E_market (Q_m, P_m), E* (Q*, P*), and shade the welfare-gain triangle. Missing any of these loses marks. Draw MSB as a parallel shift above MPB for a constant external benefit.'
    },
    {
      id: 'pos_externalities_3',
      stepLabel: 'Learn: Step 3 of 7',
      title: 'Real-world examples',
      tip: { icon: '💡', tone: 'blue', text: '<em>Positive externalities arise when consumption or production creates benefits for people beyond the direct buyer or seller.</em>' },
      illustratedGridLabel: 'Four case studies',
      illustratedGridEmoji: '⭐',
      illustratedGrid: [
        {
          tone: 'green',
          title: '💉 Vaccination and herd immunity',
          body: '<div style="display:flex;flex-direction:column;gap:6px;"><div><span style="font-weight:700;color:#0B1426;">Private benefit:</span> lower risk of illness</div><div><span style="font-weight:700;color:#0B1426;">External benefit:</span> fewer infections spread to others</div></div>',
          thirdPartyLabel: 'Third-party gain', thirdParty: 'wider community, especially vulnerable groups'
        },
        {
          tone: 'purple',
          title: '🎓 Education',
          body: '<div style="display:flex;flex-direction:column;gap:6px;"><div><span style="font-weight:700;color:#0B1426;">Private benefit:</span> better earnings and skills</div><div><span style="font-weight:700;color:#0B1426;">External benefit:</span> higher productivity, lower crime, more informed citizens</div></div>',
          thirdPartyLabel: 'Third-party gain', thirdParty: 'employers and society'
        },
        {
          tone: 'blue',
          title: '🏥 Healthcare beyond vaccination',
          body: '<div style="display:flex;flex-direction:column;gap:6px;"><div><span style="font-weight:700;color:#0B1426;">Private benefit:</span> better health and longer life</div><div><span style="font-weight:700;color:#0B1426;">External benefit:</span> fewer absences, lower strain on public services, healthier families</div></div>',
          thirdPartyLabel: 'Third-party gain', thirdParty: 'firms, households, government'
        },
        {
          tone: 'amber',
          title: '🐝 Beekeeping and pollination',
          body: '<div style="display:flex;flex-direction:column;gap:6px;"><div><span style="font-weight:700;color:#0B1426;">Private benefit:</span> honey and bee products</div><div><span style="font-weight:700;color:#0B1426;">External benefit:</span> nearby crops are pollinated, boosting agricultural output</div></div>',
          thirdPartyLabel: 'Third-party gain', thirdParty: 'farmers, consumers, ecosystem'
        }
      ],
      causesLabel: 'What they all have in common',
      causesEmoji: '✅',
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '1️⃣', head: 'Private benefit understates total benefit', body: 'Consumers decide on MPB alone — they don\'t account for the spillover.',                                tone: 'green'  },
        { icon: '2️⃣', head: 'Market quantity is too low',                 body: 'Under-consumption: Q_market sits below the socially optimal Q*.',                                       tone: 'blue'   },
        { icon: '3️⃣', head: 'Intervention may raise welfare',             body: 'Subsidies, public provision, or regulation can move output closer to Q* and capture the welfare gain.', tone: 'purple' }
      ],
      tipLate: { icon: 'ℹ️', tone: 'blue', text: 'These examples can be used in 5-, 8-, 12-, and 25-mark answers — pick one and name the third party who gains.' },
      examEdge: 'Examiners reward specificity. "Education has positive externalities" → low marks. "Higher educational attainment raises national productivity and lowers crime rates — clear external benefits captured by employers and society" → high marks.'
    },
    {
      id: 'pos_externalities_4',
      stepLabel: 'Learn: Step 4 of 7',
      title: 'Market-based interventions',
      tip: { icon: '💡', tone: 'blue', text: '<em>Governments can use prices and financial incentives to internalise positive externalities and move output closer to the social optimum.</em>' },
      keyPointsLabel: 'Three main interventions',
      keyPointsEmoji: '🏛️',
      keyPointsCols: 3,
      keyPoints: [
        {
          tone: 'green', icon: '🎫', title: 'Pigouvian subsidy to consumers',
          headline: 'Lower the effective price faced by consumers so they consume more of the good or activity.',
          body: '<span style="font-weight:800;color:#059669;">Flow:</span> subsidy provided → lower consumer price → higher demand → more spillover benefits.<br><br><span style="font-weight:800;color:#059669;">Live examples:</span> free school meals · childcare vouchers · EV purchase grants.'
        },
        {
          tone: 'purple', icon: '🏭', title: 'Pigouvian subsidy to producers',
          headline: 'Subsidise supply by lowering firms\' costs, making it more profitable to produce socially beneficial goods or services.',
          body: '<span style="font-weight:800;color:#7C3AED;">Flow:</span> subsidy reduces costs → higher supply → more output of positive good.<br><br><span style="font-weight:800;color:#7C3AED;">Live examples:</span> renewable energy subsidies · R&amp;D tax credits · apprenticeship levies.'
        },
        {
          tone: 'blue', icon: '🏆', title: 'Outcome-based payments',
          headline: 'Government rewards results rather than inputs. Payments are made for verified outcomes that generate positive externalities.',
          body: '<span style="font-weight:800;color:#2563EB;">Examples of outcomes:</span> vaccinations completed · apprentices trained · ecosystem services delivered (e.g. tree planting).'
        }
      ],
      table: {
        title: 'Who pays, who gains, who loses?',
        emoji: '👥',
        headers: ['Agent', 'Impact'],
        rows: [
          { icon: '🛒', tone: 'green',  label: 'Consumers',     value: 'Pay less or get more access. Benefit from lower effective prices or more availability.' },
          { icon: '🏭', tone: 'purple', label: 'Producers',     value: 'Receive higher revenue or more demand. Subsidies improve profitability of socially valuable output.' },
          { icon: '🏛️', tone: 'blue',   label: 'Government',    value: 'Bears a fiscal cost through subsidy spending. Must balance cost with social benefits.' },
          { icon: '👥', tone: 'amber',  label: 'Third parties', value: 'Gain from spillover benefits such as better health, cleaner environment or skills.' }
        ]
      },
      causesLabel: 'Real-world examples',
      causesEmoji: '🌍',
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '🌳', head: 'Payments for tree planting', body: 'Governments pay landowners per hectare planted and maintained. Trees provide carbon storage, cleaner air, and habitat — benefits that extend to the whole community.', tone: 'green' },
        { icon: '🔋', head: 'EV purchase grants',         body: 'Consumers receive grants or rebates for electric vehicles, reducing the upfront cost and encouraging adoption that lowers emissions for everyone.',              tone: 'blue'  }
      ],
      tipLate: { icon: '✅', tone: 'green', head: 'When this works best', text: 'Best when the main problem is <strong>under-consumption</strong> and the social benefit can be reasonably identified.' },
      examEdge: '"A Pigouvian subsidy is theoretically efficient but practically difficult to calibrate" — a high-mark phrase. For top marks, compare subsidies to consumers vs producers on incidence, fiscal cost, and equity.'
    },
    {
      id: 'pos_externalities_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Direct provision & regulation',
      tip: { icon: '💡', tone: 'blue', text: '<em>Some positive externalities are so important that government does not just nudge the market — it directly provides the good or requires its consumption.</em>' },
      keyPointsLabel: 'Two direct tools',
      keyPointsEmoji: '🏛️',
      keyPointsCols: 2,
      keyPoints: [
        {
          tone: 'green', icon: '🏛️', title: 'Public provision',
          headline: 'Government funds or supplies the service directly.',
          body: '<span style="font-weight:800;color:#059669;">Examples:</span><br>• <strong>NHS healthcare</strong> — funded and delivered by the state to ensure everyone can access essential care.<br>• <strong>State schools</strong> — publicly funded education so children can learn, regardless of family income.<br><br><em>Widening access and treating merit goods partly as a right, not just a purchase.</em>'
        },
        {
          tone: 'blue', icon: '🛡️', title: 'Mandatory consumption / regulation',
          headline: 'Government requires or strongly enforces consumption.',
          body: '<span style="font-weight:800;color:#2563EB;">Examples:</span><br>• <strong>Compulsory schooling</strong> — children must attend school until a minimum age because education benefits society.<br>• <strong>Vaccination mandates</strong> — required for certain jobs or activities to protect public health and prevent disease spread.<br><br><em>Ensuring everyone takes up the good when the social benefits are large.</em>'
        }
      ],
      causesLabel: 'Trade-offs',
      causesEmoji: '⚖️',
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '🔁', head: 'Flexibility',          body: 'Market approaches are more flexible and adapt to preferences and new information. Direct tools are less flexible.', tone: 'green'  },
        { icon: '💸', head: 'Fiscal cost',          body: 'Public provision is usually expensive and puts pressure on public finances. Mandates can be cheaper to deliver.',   tone: 'purple' },
        { icon: '🎯', head: 'Certainty of outcome', body: 'Mandates provide greater certainty that the good will be consumed. Market approaches can leave under-consumption.', tone: 'blue'   },
        { icon: '⚖️', head: 'Access / equity',      body: 'Public provision improves access and reduces inequalities. Market tools can exclude those who can\'t pay.',         tone: 'amber'  }
      ],
      tipLate: { icon: '✅', tone: 'green', head: 'When these tools are strongest', text: 'Use direct provision or regulation when the social benefit is large, access matters, and leaving it purely to the market would underprovide the good.' },
      examEdge: 'Distinguish market-based vs direct tools by the mechanism: prices vs rules/provision. Use direct provision as your dominant answer when access matters morally (healthcare, education) or when the externality is large enough that voluntary uptake won\'t reach Q*.'
    },
    {
      id: 'pos_externalities_6',
      stepLabel: 'Learn: Step 6 of 7',
      title: 'Evaluation: why intervention can fail',
      tip: { icon: '💡', tone: 'blue', text: '<em>Correcting positive externalities is not straightforward. Intervention can raise welfare, but it also creates trade-offs and risks of government failure.</em>' },
      flowTitle: 'Key evaluation points',
      flowEmoji: '⚖️',
      flow: [
        { tone: 'purple', icon: '🔍', title: 'Information failure on MEB', sub: 'Government may misjudge the true spillover benefit and set the subsidy or scale wrongly.' },
        { tone: 'amber',  icon: '🛡️', title: 'Moral hazard',               sub: 'If services are free or heavily subsidised, some users may over-consume or take less care.' },
        { tone: 'blue',   icon: '👥', title: 'Crowding out',                sub: 'Public support may displace private provision or personal responsibility.' },
        { tone: 'green',  icon: '🏛️', title: 'Fiscal cost',                 sub: 'Subsidies and direct provision use tax revenue and create opportunity costs elsewhere.' },
        { tone: 'rose',   icon: '👥', title: 'Political capture',           sub: 'Organised interest groups may shape policy in their own favour rather than the social interest.' }
      ],
      conclusion: { title: 'Bottom line: trade-offs', text: '<div style="display:flex;flex-direction:column;gap:6px;margin-top:4px;"><div>• Intervention can still be justified — it can correct market failure and raise welfare.</div><div>• The question is not perfect or imperfect, but <strong>better or worse</strong>.</div><div>• Evaluation depends on how large the external benefit is and how well policy is targeted.</div></div>' },
      tipLate: { icon: '➡️', tone: 'blue', text: 'Always <strong>compare market failure with possible government failure</strong> in essays — weigh the benefits of intervention against the risks and costs.' }
    },
    {
      id: 'pos_externalities_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Exam edge',
      tip: { icon: null, tone: 'green', head: 'Exam edge — best phrases to use in high-mark answers', text: '<div style=”display:flex;flex-direction:column;gap:8px;margin-top:4px;”><div style=”display:flex;gap:10px;align-items:flex-start;”><span style=”flex-shrink:0;line-height:1.55;”>✅</span><span>&ldquo;MSB exceeds MPB, so the market under-produces relative to the socially optimal output.&rdquo;</span></div><div style=”display:flex;gap:10px;align-items:flex-start;”><span style=”flex-shrink:0;line-height:1.55;”>✅</span><span>&ldquo;The market under-consumes the good because private decisions ignore the external benefit.&rdquo;</span></div><div style=”display:flex;gap:10px;align-items:flex-start;”><span style=”flex-shrink:0;line-height:1.55;”>✅</span><span>&ldquo;A subsidy can internalise the external benefit by shifting MPB up towards MSB.&rdquo;</span></div><div style=”display:flex;gap:10px;align-items:flex-start;”><span style=”flex-shrink:0;line-height:1.55;”>✅</span><span>&ldquo;The size of the welfare gain forgone depends on the price elasticity of demand and supply.&rdquo;</span></div><div style=”display:flex;gap:10px;align-items:flex-start;”><span style=”flex-shrink:0;line-height:1.55;”>✅</span><span>&ldquo;Intervention may be justified despite government failure if the external benefit is large and well-targeted.&rdquo;</span></div></div>' },
      flowTitle: '2. A 4-step evaluation flow',
      flowEmoji: '🧭',
      flow: [
        { tone: 'blue',   icon: '1️⃣', title: 'Identify the intervention',  sub: 'and how it moves output toward Q*.' },
        { tone: 'green',  icon: '2️⃣', title: 'Explain the likely benefits', sub: 'to consumers, producers, and third parties.' },
        { tone: 'purple', icon: '3️⃣', title: 'Evaluate practical limits',   sub: 'or government failure.' },
        { tone: 'amber',  icon: '4️⃣', title: 'Reach a clear judgement',     sub: 'on when the policy works best.' }
      ],
      causesLabel: '3. A 4-criterion judgement framework',
      causesEmoji: '⚖️',
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '📈', head: 'Size of the external benefit', body: 'How large is the gap (MSB − MPB)? Big gaps justify stronger action.',         tone: 'green'  },
        { icon: '🎯', head: 'Accuracy of targeting',         body: 'Does the policy reach those creating or receiving the benefit?',              tone: 'blue'   },
        { icon: '💷', head: 'Fiscal affordability',          body: 'Can it be funded sustainably, with good value for money?',                    tone: 'purple' },
        { icon: '⚖️', head: 'Equity / access',               body: 'Does it improve fairness and access, not just total welfare?',                tone: 'amber'  }
      ],
      examEdge: 'Strong answers <strong>compare market failure with government failure</strong> and finish with a conditional judgement: the policy is likely to work best when the external benefit is large, targeting is accurate, costs are manageable, and the design is fair and accessible.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself →' }
    }

  ]
};
