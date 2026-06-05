window.ECONOS_TOPIC = {
  id: 'positive-externalities',
  topicNum: '3.2',
  theme: 'Theme 1 · Introduction to Markets and Market Failure',
  title: 'Positive Externalities',
  estTime: '9-11 minutes',
  goal: 'Lock in the externality framework – MSB vs MPB, welfare gain forgone, and how to draw and evaluate the positive consumption externality diagram.',
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
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'pos_externalities_1',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Positive externalities: the benefits trilogy',
      tip: { icon: '💡', tone: 'blue', text: '<em>A market can create benefits that spill over to people who were not directly involved. When that happens, private benefit is less than social benefit – and the market tends to produce too little.</em>' },
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
        heroImage: '/assets/vaccination-hero.png',
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
            body: 'All private benefits <strong>+</strong> all external benefits combined – the true benefit to society.',
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
        text: 'Because consumers usually think about MPB, not the full MSB. If MEB is positive, the market quantity is too low – some of the benefits to society are simply ignored.'
      },
      keyTerms: [
        { term: 'Marginal Private Benefit (MPB)',  def: 'The additional benefit received by the consumer from one more unit of consumption.' },
        { term: 'Marginal External Benefit (MEB)', def: 'The additional benefit enjoyed by third parties from the consumption (or production) of one more unit.' },
        { term: 'Marginal Social Benefit (MSB)',   def: 'The total additional benefit to society from one more unit – equal to MPB + MEB. The true benefit the market should respond to but does not.' }
      ],
      examEdge: `Remember the trilogy – <strong>private</strong> is captured by the consumer; <strong>external</strong> is captured by others; <strong>social = private + external</strong>. State this explicitly before you draw the diagram. For the negative mirror, see <a href="${TopicLoader.routes.learn(null, 'negative-externalities')}" style="color:#2563EB;font-weight:700;">Negative Externalities</a>.`
    },
    {
      id: 'pos_externalities_2',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 7',
      title: 'The positive consumption externality diagram',
      lede: 'The mirror of the negative diagram. Build it in four moves – every label matters.',
      diagramKey: 'posExternalityInteractive',
      steps: [
        {
          key: 'base',
          label: 'Market equilibrium',
          text: 'Left alone, the market clears where buyers\' private benefit meets the cost of supply. Because that demand counts only the value to the buyer – not the value spilling over to others – this "equilibrium" sits below the quantity society would want.'
        },
        {
          key: 'extension',
          label: 'Add MSB and MEB',
          text: 'Now bring in the true benefit: MSB sits above MPB by the external benefit at every unit. Buyers still choose on MPB alone, behaving as if that gap doesn\'t exist – and that blind spot is exactly what holds consumption below the social optimum.'
        },
        {
          key: 'shift',
          label: 'Socially optimal output',
          text: 'Society\'s best point uses the <em>full</em> benefit: where MSB meets MSC, at Q*. It sits to the right of and above the market – more output, higher price. The distance Q* − Qₘ is the under-consumption the externality has caused.'
        },
        {
          key: 'efficiency',
          label: 'Welfare gain forgone',
          text: 'Add up the gain society misses on every unit between Qₘ and Q*, where social benefit beats social cost, and you get the shaded triangle – welfare left on the table. A subsidy equal to the external benefit makes buyers act on the full value, restoring Q*.'
        }
      ],
      tipLate: [
        { icon: 'ℹ️', tone: 'blue', head: 'Production-side mirror', text: 'For a positive <em>production</em> externality, think MSC <em>below</em> MPC instead. The logic is identical – the market still produces too little.' }
      ],
      examEdge: 'Diagram technique: label all six elements – MSC = MPC, MPB, MSB, Eₘ (Qₘ, Pₘ), E* (Q*, P*), and shade the welfare-gain triangle. Missing any of these loses marks. Draw MSB as a parallel shift above MPB for a constant external benefit.'
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
          scene: 'vaccinationHerdImmunity', tone: 'green',
          title: '💉 Vaccination and herd immunity',
          body: '<div style="display:flex;flex-direction:column;gap:6px;"><div><span style="font-weight:700;color:#0B1426;">Private benefit:</span> lower risk of illness</div><div><span style="font-weight:700;color:#0B1426;">External benefit:</span> fewer infections spread to others</div></div>',
          thirdPartyLabel: 'Third-party gain', thirdParty: 'wider community, especially vulnerable groups'
        },
        {
          scene: 'education', tone: 'purple',
          title: '🎓 Education',
          body: '<div style="display:flex;flex-direction:column;gap:6px;"><div><span style="font-weight:700;color:#0B1426;">Private benefit:</span> better earnings and skills</div><div><span style="font-weight:700;color:#0B1426;">External benefit:</span> higher productivity, lower crime, more informed citizens</div></div>',
          thirdPartyLabel: 'Third-party gain', thirdParty: 'employers and society'
        },
        {
          scene: 'healthcareGeneral', tone: 'blue',
          title: '🏥 Healthcare beyond vaccination',
          body: '<div style="display:flex;flex-direction:column;gap:6px;"><div><span style="font-weight:700;color:#0B1426;">Private benefit:</span> better health and longer life</div><div><span style="font-weight:700;color:#0B1426;">External benefit:</span> fewer absences, lower strain on public services, healthier families</div></div>',
          thirdPartyLabel: 'Third-party gain', thirdParty: 'firms, households, government'
        },
        {
          scene: 'beekeepingPollination', tone: 'amber',
          title: '🐝 Beekeeping and pollination',
          body: '<div style="display:flex;flex-direction:column;gap:6px;"><div><span style="font-weight:700;color:#0B1426;">Private benefit:</span> honey and bee products</div><div><span style="font-weight:700;color:#0B1426;">External benefit:</span> nearby crops are pollinated, boosting agricultural output</div></div>',
          thirdPartyLabel: 'Third-party gain', thirdParty: 'farmers, consumers, ecosystem'
        }
      ],
      causesLabel: 'What they all have in common',
      causesEmoji: '✅',
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '👤', head: 'Private benefit understates total benefit', body: 'Consumers decide on MPB alone – they don\'t account for the spillover.',                                tone: 'green'  },
        { icon: '📉', head: 'Market quantity is too low',                 body: 'Under-consumption: Q_market sits below the socially optimal Q*.',                                       tone: 'blue'   },
        { icon: '🏛️', head: 'Intervention may raise welfare',             body: 'Subsidies, public provision, or regulation can move output closer to Q* and capture the welfare gain.', tone: 'purple' }
      ],
      tipLate: { icon: 'ℹ️', tone: 'blue', text: 'These examples can be used in 5-, 8-, 12-, and 25-mark answers – pick one and name the third party who gains.' },
      examEdge: 'Examiners reward specificity. "Education has positive externalities" → low marks. "Higher educational attainment raises national productivity and lowers crime rates – clear external benefits captured by employers and society" → high marks.'
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
        { icon: '🌳', head: 'Payments for tree planting', body: 'Governments pay landowners per hectare planted and maintained. Trees provide carbon storage, cleaner air, and habitat – benefits that extend to the whole community.', tone: 'green' },
        { icon: '🔋', head: 'EV purchase grants',         body: 'Consumers receive grants or rebates for electric vehicles, reducing the upfront cost and encouraging adoption that lowers emissions for everyone.',              tone: 'blue'  }
      ],
      tipLate: { icon: '✅', tone: 'green', head: 'When this works best', text: 'Best when the main problem is <strong>under-consumption</strong> and the social benefit can be reasonably identified.' },
      examEdge: '"A Pigouvian subsidy is theoretically efficient but practically difficult to calibrate" – a high-mark phrase. For top marks, compare subsidies to consumers vs producers on incidence, fiscal cost, and equity.'
    },
    {
      id: 'pos_externalities_5',
      stepLabel: 'Learn: Step 5 of 7',
      title: 'Direct provision & regulation',
      tip: { icon: '💡', tone: 'blue', text: '<em>Some positive externalities are so important that government does not just nudge the market – it directly provides the good or requires its consumption.</em>' },
      keyPointsLabel: 'Two direct tools',
      keyPointsEmoji: '🏛️',
      keyPointsCols: 2,
      keyPoints: [
        {
          tone: 'green', icon: '🏛️', title: 'Public provision',
          headline: 'Government funds or supplies the service directly.',
          body: '<span style="font-weight:800;color:#059669;">Examples:</span><br>• <strong>NHS healthcare</strong> – funded and delivered by the state to ensure everyone can access essential care.<br>• <strong>State schools</strong> – publicly funded education so children can learn, regardless of family income.<br><br><em>Widening access and treating merit goods partly as a right, not just a purchase.</em>'
        },
        {
          tone: 'blue', icon: '🛡️', title: 'Mandatory consumption / regulation',
          headline: 'Government requires or strongly enforces consumption.',
          body: '<span style="font-weight:800;color:#2563EB;">Examples:</span><br>• <strong>Compulsory schooling</strong> – children must attend school until a minimum age because education benefits society.<br>• <strong>Vaccination mandates</strong> – required for certain jobs or activities to protect public health and prevent disease spread.<br><br><em>Ensuring everyone takes up the good when the social benefits are large.</em>'
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
      conclusion: { title: 'Bottom line: trade-offs', text: '<div style="display:flex;flex-direction:column;gap:6px;margin-top:4px;"><div>• Intervention can still be justified – it can correct market failure and raise welfare.</div><div>• The question is not perfect or imperfect, but <strong>better or worse</strong>.</div><div>• Evaluation depends on how large the external benefit is and how well policy is targeted.</div></div>' },
      tipLate: { icon: '➡️', tone: 'blue', text: 'Always <strong>compare market failure with possible government failure</strong> in essays – weigh the benefits of intervention against the risks and costs.' }
    },
    {
      id: 'pos_externalities_7',
      stepLabel: 'Learn: Step 7 of 7',
      title: 'Exam edge',
      tip: { icon: null, tone: 'green', head: 'Exam edge – best phrases to use in high-mark answers', text: '<div style="display:flex;flex-direction:column;gap:8px;margin-top:4px;"><div style="display:flex;gap:10px;align-items:flex-start;"><span style="flex-shrink:0;line-height:1.55;">✅</span><span>&ldquo;MSB exceeds MPB, so the market under-produces relative to the socially optimal output.&rdquo;</span></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="flex-shrink:0;line-height:1.55;">✅</span><span>&ldquo;The market under-consumes the good because private decisions ignore the external benefit.&rdquo;</span></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="flex-shrink:0;line-height:1.55;">✅</span><span>&ldquo;A subsidy can internalise the external benefit by shifting MPB up towards MSB.&rdquo;</span></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="flex-shrink:0;line-height:1.55;">✅</span><span>&ldquo;The size of the welfare gain forgone depends on the price elasticity of demand and supply.&rdquo;</span></div><div style="display:flex;gap:10px;align-items:flex-start;"><span style="flex-shrink:0;line-height:1.55;">✅</span><span>&ldquo;Intervention may be justified despite government failure if the external benefit is large and well-targeted.&rdquo;</span></div></div>' },
      flowTitle: 'A 4-step evaluation flow',
      flowEmoji: '🧭',
      flow: [
        { tone: 'blue',   icon: '🔍', title: 'Identify the intervention',  sub: 'and how it moves output toward Q*.' },
        { tone: 'green',  icon: '💬', title: 'Explain the likely benefits', sub: 'to consumers, producers, and third parties.' },
        { tone: 'purple', icon: '⚖️', title: 'Evaluate practical limits',   sub: 'or government failure.' },
        { tone: 'amber',  icon: '✅', title: 'Reach a clear judgement',     sub: 'on when the policy works best.' }
      ],
      causesLabel: 'A 4-criterion judgement framework',
      causesEmoji: '⚖️',
      causesStyle: 'tinted-flat',
      causes: [
        { icon: '📈', head: 'Size of the external benefit', body: 'How large is the gap (MSB − MPB)? Big gaps justify stronger action.',         tone: 'green'  },
        { icon: '🎯', head: 'Accuracy of targeting',         body: 'Does the policy reach those creating or receiving the benefit?',              tone: 'blue'   },
        { icon: '💷', head: 'Fiscal affordability',          body: 'Can it be funded sustainably, with good value for money?',                    tone: 'purple' },
        { icon: '⚖️', head: 'Equity / access',               body: 'Does it improve fairness and access, not just total welfare?',                tone: 'amber'  }
      ],
      examEdge: 'Strong answers <strong>compare market failure with government failure</strong> and finish with a conditional judgement: the policy is likely to work best when the external benefit is large, targeting is accurate, costs are manageable, and the design is fair and accessible. <strong>A worked subsidy-vs-direct-provision essay:</strong> "Define the positive externality (MSB > MPB) and draw the diagram (define). Compare a subsidy to consumers – efficient when demand is price-sensitive, preserves consumer choice, lower fiscal cost; risks under-targeting (the subsidy reaches anyone who would have bought anyway) – with direct state provision (NHS, schools): guarantees universal access, ideal where equity matters most; risks paternalism, queues, and higher administrative cost (analyse / evaluate). <strong>Judge:</strong> a subsidy dominates when consumption is price-sensitive and access is broadly equitable (vaccines, solar panels); direct provision dominates when equal access matters morally and demand is inelastic (healthcare, primary education). The criterion is whether the binding constraint is <em>price</em> or <em>access</em>." That structure earns the evaluation marks.',
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
    title:    'Positive Externalities',
    subtitle: 'Theme 1 &middot; Topic 3.2 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('pos_externalities_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers positive externalities of production and consumption, subsidies, MSB/MPB divergence, and merit goods',
    shortNames: [
      'MSB MCQ', 'Types categorise', 'Subsidy mechanism MCQ', 'Merit goods',
      'Para fill', 'Cause & effect', 'Match pairs', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – MCQ: underproduction from positive externality */
      { type: 'mcq',
        stem: 'In a market with a <strong>positive externality of consumption</strong>, the free market produces at Q<sub>M</sub> but the social optimum is at Q*. Which correctly describes the relationship?',
        opts: [
          'Q<sub>M</sub> < Q* – the free market underproduces because MPB < MSB; consumers only consider their private benefit, ignoring the benefit to third parties',
          'Q<sub>M</sub> > Q* – the free market overproduces because consumers value the good too highly due to positive social contagion',
          'Q<sub>M</sub> = Q* – positive externalities offset market failures from other sources, producing the social optimum',
          'Q<sub>M</sub> < Q* – the free market underproduces because MSC > MPC at the market equilibrium'
        ],
        ans: 0,
        exp: 'Positive externality of consumption: <strong>MSB = MPB + MEB</strong> (Marginal External Benefit). The market demand curve reflects only MPB – consumers ignore the benefit they confer on third parties. So market demand (MPB) lies below MSB. The market equilibrium (where S = MPB) has Q<sub>M</sub> < Q* (social optimum where S = MSB). The free market <strong>underproduces</strong> relative to the social optimum. A subsidy to consumers or producers shifts demand/supply to produce Q* – correcting the underproduction.'
      },

      /* 2 – Categorise: production vs consumption positive externalities */
      { type: 'categorise',
        stem: 'Classify each example as a <strong>positive externality of production</strong> or <strong>consumption</strong>.',
        categories: ['Positive externality of production', 'Positive externality of consumption'],
        items: [
          { text: 'A beekeeper\'s bees pollinate neighbouring farmers\' crops – benefit to farmers beyond the honey market', category: 'Positive externality of production' },
          { text: 'Getting vaccinated reduces disease transmission to others in the community', category: 'Positive externality of consumption' },
          { text: 'A firm\'s R&D creates knowledge that other firms can use (knowledge spillovers)', category: 'Positive externality of production' },
          { text: 'A person learning to read enables better communication with everyone they interact with', category: 'Positive externality of consumption' },
          { text: 'Restoring a historic building benefits the surrounding area and boosts local property values', category: 'Positive externality of production' },
          { text: 'Learning to drive creates economic benefits for employers who need mobile workers', category: 'Positive externality of consumption' }
        ],
        exp: '<strong>Positive externality of production</strong>: the benefit arises from the production process (beekeeper, R&D spillovers, building restoration) – MSC curve lies above MPC (external benefit to third parties from production). <strong>Positive externality of consumption</strong>: the benefit arises from the act of consuming (vaccination, education, learning to drive) – MSB curve lies above the demand (MPB) curve. In both cases, the market underproduces/underconsumes relative to the social optimum. Subsidies or direct provision can correct either type.'
      },

      /* 3 – MCQ: subsidy as correction */
      { type: 'mcq',
        stem: 'A government introduces a <strong>subsidy</strong> to correct a positive externality of consumption. The subsidy should be set equal to:',
        opts: [
          'The marginal external benefit at the social optimum – to shift the private demand (MPB) curve up to MSB',
          'The total social benefit of the good – a one-off payment to every consumer to encourage consumption',
          'The market price – to make the good free, maximising consumption regardless of social benefit',
          'The producer\'s marginal cost – to reduce the price to zero and eliminate all consumer charges'
        ],
        ans: 0,
        exp: 'A correctly set subsidy shifts the demand curve (or supply curve) so that the market produces the social optimum Q*. For a positive externality of consumption: subsidy = MEB at Q* lifts the effective demand from MPB to MSB. The new market equilibrium occurs at Q* where MSB = supply. Alternatively, a supply-side subsidy (per unit to producers) shifts the supply curve rightward until output reaches Q*. Setting the subsidy too high causes overconsumption (past Q*); too low leaves underproduction. The measurement challenge is the same as for Pigouvian taxes.'
      },

      /* 4 – MCQ: merit goods */
      { type: 'mcq',
        stem: 'Education is a <strong>merit good</strong>. Which statement best explains why the free market is likely to underprovide education?',
        opts: [
          'Individuals underestimate the long-run private and social benefits of education – imperfect information leads to demand being below the socially optimal level',
          'Education is a public good – it is non-excludable and non-rival, making private provision impossible',
          'Education is too expensive for firms to provide profitably – high fixed costs prevent market provision',
          'Individuals consume education for status reasons, leading to overconsumption rather than underconsumption'
        ],
        ans: 0,
        exp: '<strong>Merit goods</strong> have positive externalities AND information failure: consumers undervalue them because they don\'t fully understand the long-run benefits. A 16-year-old may underestimate the lifetime wage premium from staying in education – their MPB understates true benefit. Additionally, education generates positive externalities (skilled workforce, lower crime, better civic participation) – so MSB > MPB. Both information failure and positive externality point to market underprovision. Education is NOT a public good (it IS excludable and rival) – private schools demonstrate this. Government response: free/subsidised provision, compulsory attendance laws.'
      },

      /* 5 – Para fill: positive externality analysis */
      { type: 'para_fill',
        stem: 'Complete the paragraph analysing a positive externality of consumption.',
        anchor: 'Vaccination is one of the most important examples of a positive externality of consumption.',
        para: 'When a person is vaccinated, they generate an [1] benefit for others – they are less likely to transmit disease to those who cannot be vaccinated. Because individuals only consider their own [2] benefit when deciding whether to get vaccinated, the market demand curve lies [3] the marginal social benefit curve. The free market produces [4] vaccinations than is socially optimal. The resulting [5] welfare loss can be corrected by a [6] per vaccination – shifting consumption toward the social [7]. If vaccination rates reach sufficient levels, [8] immunity is achieved, conferring a collective benefit with no additional private cost.',
        blanks: [
          { id: 1, opts: ['external', 'internal', 'private', 'demand-side-policies-monetary'], ans: 0 },
          { id: 2, opts: ['private', 'social', 'external', 'marginal'], ans: 0 },
          { id: 3, opts: ['below', 'above', 'equal to', 'parallel to'], ans: 0 },
          { id: 4, opts: ['fewer', 'more', 'the same number of', 'no'], ans: 0 },
          { id: 5, opts: ['deadweight', 'consumer', 'producer', 'tax'], ans: 0 },
          { id: 6, opts: ['subsidy', 'tax', 'price ceiling', 'quota'], ans: 0 },
          { id: 7, opts: ['optimum', 'minimum', 'maximum', 'equilibrium'], ans: 0 },
          { id: 8, opts: ['herd', 'market', 'producer', 'allocative'], ans: 0 }
        ],
        exp: '(1) <strong>External</strong> benefit. (2) Own <strong>private</strong> benefit. (3) Market demand lies <strong>below</strong> MSB (MPB < MSB). (4) <strong>Fewer</strong> vaccinations – underproduction. (5) <strong>Deadweight</strong> welfare loss. (6) <strong>Subsidy</strong> per vaccination. (7) Social <strong>optimum</strong>. (8) <strong>Herd</strong> immunity – a pure public good property that emerges when vaccination coverage is high enough. This paragraph demonstrates the analytical structure for any positive externality question.'
      },

      /* 6 – Cause & effect: positive externalities and policy */
      { type: 'cause_effect',
        stem: 'Match each positive externality scenario to the appropriate policy response and its mechanism.',
        pairs: [
          { cause: 'Vaccination has large positive externalities – herd immunity benefits non-vaccinated', effect: 'Government subsidises vaccines or makes them free – shifts demand to social optimum' },
          { cause: 'R&D generates knowledge spillovers benefiting many firms beyond the inventor', effect: 'Patent protection and R&D tax credits – increase private incentive to invest' },
          { cause: 'Education generates skilled workforce benefits for employers not involved in training', effect: 'State-funded education and compulsory schooling laws – increase provision to social optimum' },
          { cause: 'Reforestation by one landowner benefits local biodiversity and reduces flooding for all', effect: 'Countryside stewardship grants – subsidise environmentally beneficial land use' },
          { cause: 'Apprenticeship training produces skills that benefit future employers', effect: 'Apprenticeship levy – forces firms to fund training that generates broader labour market benefits' },
          { cause: 'Cycling infrastructure benefits health, reduces congestion, and cuts NHS costs', effect: 'Government subsidises cycle lanes and bike purchase schemes' }
        ],
        exp: 'Positive externalities require policies that increase production/consumption toward the social optimum: <strong>subsidies</strong> (direct per-unit); <strong>free provision</strong> (government produces at zero price – fully corrects market underprovision); <strong>compulsory participation</strong> (school attendance laws bypass the information failure that causes undervaluation); <strong>intellectual property rights</strong> (make R&D profitable by creating temporary monopoly); <strong>levies</strong> (redistribute training costs to all beneficiaries). Each instrument addresses a slightly different dimension of the market failure.'
      },

      /* 7 – Match pairs: positive externality concepts */
      { type: 'match_pairs',
        stem: 'Match each term to its definition in the positive externality framework.',
        pairs: [
          { a: 'Marginal External Benefit (MEB)', b: 'Extra benefit received by third parties from one more unit consumed' },
          { a: 'Marginal Social Benefit (MSB)', b: 'Full benefit to society: MPB + MEB' },
          { a: 'Merit good', b: 'Good with positive externalities where consumers underestimate long-run benefit' },
          { a: 'Demerit good', b: 'Good with negative externalities where consumers underestimate long-run costs' },
          { a: 'Knowledge spillover', b: 'R&D by one firm creates freely available knowledge that raises productivity economy-wide' },
          { a: 'Herd immunity', b: 'High vaccination coverage reduces disease transmission even for the unvaccinated' }
        ],
        exp: 'Positive externality vocabulary: MEB is the vertical gap between MSB and MPB. <strong>Merit goods</strong> (education, healthcare, museums) have both positive externalities and information failure – double justification for government intervention. <strong>Demerit goods</strong> (cigarettes, alcohol, junk food) have both negative externalities and information failure. Knowledge spillovers are the most economically important positive externality in modern growth theory – justifying R&D subsidies, patent systems, and public funding of basic research. Herd immunity is a public good property that emerges from vaccination – making vaccines a fascinating good with both private and public good dimensions.'
      },

      /* 8 – Odd one out: positive externalities */
      { type: 'odd_one_out',
        stem: 'Three of these are goods with significant <strong>positive externalities</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '💉', label: 'Vaccination – reduces disease transmission to the wider community', note: '' },
          { icon: '🎓', label: 'Education – creates skilled workers who benefit employers and society beyond the individual', note: '' },
          { icon: '🚬', label: 'Cigarettes – generate healthcare costs and secondhand smoke harm to non-smokers', note: '' },
          { icon: '🌳', label: 'Urban tree planting – improves air quality, reduces flooding, benefits all residents nearby', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>cigarettes</strong>. Cigarettes generate <strong>negative</strong> externalities (secondhand smoke health costs, NHS costs from smoking-related illness, fire risks) – not positive externalities. The other three are classic examples of positive externalities: vaccination (herd immunity); education (skilled workforce, lower crime, civic benefits); urban trees (air quality, flood reduction, biodiversity). Cigarettes are the archetypal demerit good – justifying high tobacco duties as a corrective Pigouvian tax.'
      },

      /* 9 – Data table: UK education subsidies */
      { type: 'data_table',
        stem: 'The table shows UK education data.',
        headers: ['Indicator', '1960', '1990', '2022'],
        rows: [
          ['State education spending (% of GDP)', '3.5%', '4.4%', '5.8%'],
          ['School leaving age', '15', '16', '18'],
          ['Graduate premium (lifetime earnings above non-graduate)', 'n/a', '+40%', '+85%'],
          ['Adult literacy rate (%)', '85%', '95%', '99%'],
          ['R&D as % of GDP', '1.8%', '2.1%', '2.6%']
        ],
        question: 'Which conclusion about positive externalities and government intervention in education is <strong>best supported</strong> by the data?',
        opts: [
          'Sustained government investment in education (rising spending + raised school leaving age) correlates with large private and social returns – consistent with correcting positive externality underproduction',
          'Rising graduate premiums prove education is purely a private good – no positive externalities justify government provision',
          'Education spending rising to 5.8% of GDP shows government has over-corrected the externality and is now wasting public money',
          'The data prove that compulsory education is more effective than subsidies – the school leaving age rise is the only factor that matters'
        ],
        ans: 0,
        exp: 'The data show consistent expansion of education provision (spending and leaving age) alongside large returns: rising graduate premium (+85% lifetime earnings by 2022) demonstrates the private return, while rising R&D (a knowledge spillover proxy) and adult literacy suggest positive externalities are being realised. The correlation is consistent with positive externality theory – government intervention increasing provision toward the social optimum generates both private and social returns. Option B ignores externalities and only considers private returns. Option C assumes efficiency without evidence. Option D ignores the compound effect of spending, age, and curriculum changes.'
      },

      /* 10 – Multi-select: evaluation of positive externality policy */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of government intervention to correct positive externalities?',
        opts: [
          'Positive externalities cause market underproduction relative to the social optimum',
          'While subsidising education corrects the positive externality argument for underproduction, it may simultaneously create an information failure argument: subsidised degrees at zero marginal cost may lead students to make poor course choices without price signals to guide allocation – suggesting that free provision may correct one market failure while introducing another',
          'Education subsidies always increase economic growth',
          'The case for vaccinating the entire population rests on herd immunity – but this "natural public good" argument is strongest when vaccination coverage has high marginal returns to disease suppression and weakest when coverage is already near the herd immunity threshold, since marginal external benefit falls as coverage rises, making further subsidies progressively less cost-effective',
          'Positive externalities justify government intervention in education and healthcare',
          'R&D subsidies address knowledge spillover externalities, but the optimal subsidy level is unknowable in practice because the value of future knowledge spillovers cannot be measured ex ante – suggesting that flat-rate R&D tax credits (administratively simple) are the pragmatic second-best to an impossible first-best Pigouvian subsidy'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: identifies a paradox – free education solves one failure but may introduce an allocation failure through absent price signals; this is a two-sided evaluation reaching a qualified conclusion. D: limits the vaccination subsidy argument to the specific context where marginal external benefit is high – noting it weakens as coverage rises; this is context-dependent evaluation. F: identifies the measurement impossibility as the key practical limitation of Pigouvian R&D subsidies and concludes that simple tax credits are the pragmatic second-best – a realistic policy conclusion. A and E are descriptions; C is an unsupported overclaim.'
      }

    ]
  };

})();

