window.ECONOS_TOPIC = {
  id: 'economic-systems',
  topicNum: '1.6',
  theme: 'Theme 1 \xb7 Introduction to Markets and Market Failure',
  title: 'Economic Systems',
  estTime: '8-10 minutes',
  goal: 'Lock in the free market, command and mixed economy models – the thinkers behind them (Smith, Hayek, Marx), how each allocates resources, their advantages and disadvantages, and the role of the state.',
  intro: {
    heroKey: 'heroEconomicSystems',
    summary: 'Every economy must answer the same three questions – what, how, and for whom to produce. Free market, command and mixed economies answer them differently: through prices, through the state, or through a blend. Adam Smith and Friedrich Hayek make the case for markets; Karl Marx makes the case against. No system is perfect.',
    doInThis: 'Work through 8 cards: the market–state spectrum, the three thinkers (Smith, Hayek, Marx), how a free market works, how a command economy works, why real economies are mixed, the systems compared side by side, the Russia vs China natural experiment, and a final judgement.',
    outcomes: [
      'Distinguish free market, mixed and command economies with reference to Adam Smith, Friedrich Hayek and Karl Marx',
      'Explain how the price mechanism allocates resources in a free market, and how central planning replaces it',
      'Evaluate the advantages and disadvantages of free-market and command economies',
      'Explain the role of the state in a mixed economy and judge the trade-off between market and state'
    ],
    tip: 'The distinction is who decides. Free market: prices and profit. Command: the state. Mixed: a blend of both – which is every real economy. The debate is never "market vs state" but "which mix, and where?"',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Apply skills with the context', state: 'available', href: TopicLoader.routes.link('intro') },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [

    /* ================================================================
       CARD 1 – The big picture (Decompose / spectrum) – spec (a) frame
       ================================================================ */
    {
      id: 'economic_systems_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Economic systems: the big picture',
      tip: { icon: '💡', tone: 'green', text: 'An economic system is simply the way an economy allocates scarce resources. Every economy answers the same three questions – the difference is who decides, which puts each system on a spectrum from market freedom to state control.' },
      diagramKey: 'economicSystemsBigPicture',
      examEdge: 'Economic systems are different answers to the <em>same</em> three questions. In an essay, define the system, explain how it allocates resources, then evaluate the outcomes (efficiency, equity, choice, stability) – don\'t just describe.'
    },

    /* ================================================================
       CARD 2 – Smith, Hayek & Marx (Comparison) – spec (a)
       ================================================================ */
    {
      id: 'economic_systems_2',
      template: 'framing',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'Smith, Hayek & Marx',
      tip: { icon: '💡', tone: 'blue', text: 'The spec frames the systems through three thinkers. Smith and Hayek make the case <em>for</em> markets; Marx makes the case <em>against</em> private ownership – and for the command economy.' },
      diagramKey: 'economicThinkersThree',
      diagramLabel: 'Three views on who should allocate resources',
      diagramEmoji: '💭',
      causes: [
        { tone: 'green', icon: '🤲', head: 'Smith → the free market', body: 'The invisible hand: self-interest and competition channel resources to socially useful ends without central direction.' },
        { tone: 'blue',  icon: '🧠', head: 'Hayek → why planning fails', body: 'The knowledge problem: information is too dispersed for planners to gather. Prices do it automatically – the analytical core of the case for markets.' },
        { tone: 'rose',  icon: '⚒️', head: 'Marx → the command economy', body: 'Markets let owners of capital exploit labour and concentrate wealth. Common ownership of the means of production is the alternative.' }
      ],
      causesLabel: 'Each thinker points to a system',
      causesEmoji: '🧭',
      causesStyle: 'numbered-rows',
      causesCols: 1,
      keyTakeaway: 'Smith and Hayek explain why decentralised markets can out-perform planning; Marx explains why critics argue markets should be replaced. The mixed economy is the practical compromise between these poles – which is why every real economy is mixed.',
      examEdge: 'Naming the thinkers earns credit: attribute the <em>invisible hand</em> to Smith, the <em>knowledge problem</em> to Hayek, and the critique of private ownership and <em>exploitation of labour</em> to Marx. Use them to frame the market-vs-state debate, not as decoration.'
    },

    /* ================================================================
       CARD 3 – How a free market works (Flow + evidence) – spec (b)
       Deliberately parallel to Card 4 (same frame, opposite mechanism).
       ================================================================ */
    {
      id: 'economic_systems_3',
      template: 'framing',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'How a free market works',
      tip: { icon: '💡', tone: 'green', text: 'In a free market no one is in charge. The price mechanism coordinates millions of independent decisions – signalling, incentivising and rationing all at once.' },
      diagramKey: 'priceMechanismFlow',
      diagramLabel: 'Three functions of the price mechanism – how prices coordinate the market',
      diagramEmoji: '🎯',
      flow: [
        { tone: 'blue',   icon: '🛒', title: 'Consumers want more', sub: 'Demand for a good rises.' },
        { tone: 'blue',   icon: '🏷️', title: 'Price rises',         sub: 'With demand above supply, the price goes up.' },
        { tone: 'amber',  icon: '💰', title: 'Profit signal',       sub: 'Higher prices create a chance to earn more profit.' },
        { tone: 'green',  icon: '🏭', title: 'Firms expand supply', sub: 'Producers respond by increasing output.' },
        { tone: 'purple', icon: '🔀', title: 'Resources move in',   sub: 'Land, labour and capital flow to where profits are highest.' }
      ],
      flowTitle: 'The price mechanism allocates resources',
      flowEmoji: '📡',
      causes: [
        { tone: 'green',  icon: '🏠', head: 'Private property',     body: 'Individuals and firms own resources and the right to the profits they generate.' },
        { tone: 'amber',  icon: '🎯', head: 'Profit motive',        body: 'The pursuit of profit drives effort, investment and risk-taking.' },
        { tone: 'purple', icon: '👥', head: 'Competition',          body: 'Rival firms compete for customers, driving efficiency and innovation.' },
        { tone: 'blue',   icon: '👑', head: 'Consumer sovereignty', body: 'Spending decides what is produced – firms that ignore demand go under.' }
      ],
      causesLabel: 'Key features',
      causesEmoji: '🛒',
      causesStyle: 'tinted-flat',
      causes2: [
        {
          tone: 'green', icon: '✅', head: 'Strengths',
          body: '<div style="margin-bottom:5px;">• Allocative & dynamic efficiency – prices direct resources, competition spurs innovation.</div><div style="margin-bottom:5px;">• Consumer sovereignty and wide choice.</div><div>• Decentralised knowledge – no planner needs to know everything.</div>'
        },
        {
          tone: 'rose', icon: '⚠️', head: 'Risks',
          body: '<div style="margin-bottom:5px;">• Market failure – externalities, public goods, information gaps.</div><div style="margin-bottom:5px;">• Inequality – outcomes depend on what you start with.</div><div>• Instability – prone to boom-bust and speculative bubbles.</div>'
        }
      ],
      causes2Label: 'Strengths and risks',
      causes2Emoji: '⚖️',
      causes2Cols: 2,
      examEdge: 'Market failure is the bridge from the free-market ideal to the case for intervention. A <em>perfect</em> market (no externalities, full information, no public goods, no monopoly) would be optimal – real markets fail on all four counts, which is why Theme 1 moves on to market failure.'
    },

    /* ================================================================
       CARD 4 – How a command economy works (Flow + evidence) – spec (b)
       Parallel to Card 3: same structure, the opposite mechanism.
       ================================================================ */
    {
      id: 'economic_systems_4',
      template: 'framing',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'How a command economy works',
      tip: { icon: '💡', tone: 'rose', text: 'In a command economy the state answers all three questions. Central planning replaces the price mechanism – directives, not prices, decide what gets made.' },
      diagramKey: 'economicCommandPlanning',
      diagramLabel: 'The planning process',
      diagramEmoji: '🏛️',
      causes: [
        { tone: 'rose',   icon: '🏛️', head: 'State ownership',   body: 'The government owns the means of production – land, factories, capital.' },
        { tone: 'purple', icon: '📋', head: 'Central planning',  body: 'Agencies (e.g. Soviet Gosplan) set targets, allocate inputs and fix prices.' },
        { tone: 'blue',   icon: '➕', head: 'Public provision',  body: 'Essentials – healthcare, housing, education – can be prioritised over profit.' },
        { tone: 'amber',  icon: '🏷️', head: 'Limited price role', body: 'Prices are set by planners, so they cannot signal relative scarcity.' }
      ],
      causesLabel: 'Key features',
      causesEmoji: '🏛️',
      causesStyle: 'tinted-flat',
      causes2: [
        {
          tone: 'green', icon: '✅', head: 'Potential benefits',
          body: '<div style="margin-bottom:5px;">• Greater equity – the state can direct resources to reduce inequality.</div><div style="margin-bottom:5px;">• Essentials prioritised – health, education, basic needs first.</div><div>• Strategic coordination – big long-run projects without profit pressure.</div>'
        },
        {
          tone: 'rose', icon: '⚠️', head: 'Why it tends to fail',
          body: '<div style="margin-bottom:5px;">• Knowledge problem (Hayek) – planners lack the dispersed local information.</div><div style="margin-bottom:5px;">• Weak incentives – no profit motive to innovate or cut costs.</div><div>• Shortages & surpluses – fixed prices can\'t clear markets; queues result.</div>'
        }
      ],
      causes2Label: 'Benefits and risks',
      causes2Emoji: '⚖️',
      causes2Cols: 2,
      balancedNote: {
        title: 'The empirical test',
        text: 'By 1991 Soviet productivity growth was near zero, innovation had stalled and consumer goods were scarce despite full employment. Not ideology – real-world evidence for Hayek\'s knowledge problem. China\'s gradual reforms (card 7) show the failure was not inevitable everywhere.'
      },
      examEdge: 'Don\'t just describe planning – evaluate whether state allocation improves outcomes. The strongest answers pair a theoretical advantage (equity, coordination) with the practical failure (incentives, information) that undermined it.'
    },

    /* ================================================================
       CARD 5 – Why economies are mixed (Side-by-side) – spec (c)
       ================================================================ */
    {
      id: 'economic_systems_5',
      template: 'framing',
      stepLabel: 'Learn: Step 5 of 8',
      title: 'Why economies are mixed',
      tip: { icon: '💡', tone: 'blue', text: 'Every real-world economy is mixed. Markets handle most goods efficiently; government steps in where markets fail or fairness demands it. The debate is which mix, not whether to mix.' },
      diagramKey: 'economicMixedWhoDoesWhat',
      diagramLabel: 'Who does what in a mixed economy',
      diagramEmoji: '🤝',
      causes: [
        { tone: 'rose',   icon: '🏭', head: 'Externalities',     body: 'Pollution and congestion aren\'t priced by markets – the state taxes, caps or regulates.' },
        { tone: 'blue',   icon: '🛡️', head: 'Public goods',      body: 'Defence and street lighting are non-excludable – markets under-provide, so the state provides.' },
        { tone: 'purple', icon: '⚖️', head: 'Equity',            body: 'Market outcomes depend on endowments – progressive tax and transfers redistribute.' },
        { tone: 'green',  icon: '📈', head: 'Stability',         body: 'Fiscal and monetary policy smooth the boom-bust cycle markets are prone to.' }
      ],
      causesLabel: 'Why the state intervenes',
      causesEmoji: '🏛️',
      causesStyle: 'tinted-flat',
      keyTerms: [
        { term: '🏙️ Private enterprise', def: 'In the UK, most firms and most output are privately owned and market-allocated.' },
        { term: '🏥 Public services',    def: 'The state provides key services free or subsidised – the NHS, state schools.' },
        { term: '📜 Rules & regulation',  def: 'Government shapes how markets work – competition law, minimum wage, environmental rules.' }
      ],
      keyTermsLabel: 'The UK: a textbook mixed economy',
      keyTermsEmoji: '🇬🇧',
      examEdge: 'The mix is not fixed at 50-50 and it shifts over time: Thatcher (1979–90) moved the UK rightward – privatisation, deregulation, lower taxes; the 2008 crisis and COVID reversed some of it – bailouts, furlough, QE. Acknowledging this spectrum earns evaluation credit.'
    },

    /* ================================================================
       CARD 6 – Comparing the systems (Comparison table) – spec (b)/(c)
       ================================================================ */
    {
      id: 'economic_systems_6',
      template: 'framing',
      stepLabel: 'Learn: Step 6 of 8',
      title: 'Comparing the systems',
      tip: { icon: '💡', tone: 'purple', text: 'No system is perfect – each makes different trade-offs between efficiency, choice, equity and security. Comparing them on the same dimensions is what evaluation is built on.' },
      diagramKey: 'economicSystemsScorecard',
      diagramLabel: 'The trade-offs, side by side',
      diagramEmoji: '⚖️',
      causes: [
        { tone: 'green', icon: '📈', head: 'Free market wins on…', body: 'Choice, incentives, innovation and flexibility – but loses on equity and basic provision.' },
        { tone: 'blue',  icon: '🏛️', head: 'Mixed sits between',   body: 'Trades a little efficiency for a safety net and the correction of market failure – the all-round compromise.' },
        { tone: 'rose',  icon: '🚩', head: 'Command wins on…',     body: 'Equity, state control and guaranteed provision – but loses badly on incentives, choice and information.' }
      ],
      causesLabel: 'Reading the scorecard',
      causesEmoji: '🔍',
      causesStyle: 'tinted-flat',
      examEdge: 'Evaluation is a judgement, not a list. The killer question is: <em>which dimension matters most here?</em> Efficiency and growth point toward the market; equity and security point toward the state. State your criterion, then judge.'
    },

    /* ================================================================
       CARD 7 – Transition: Russia vs China (Comparison verdict) – eval
       ================================================================ */
    {
      id: 'economic_systems_7',
      template: 'framing',
      stepLabel: 'Learn: Step 7 of 8',
      title: 'Transition economies: Russia vs China',
      tip: { icon: '💡', tone: 'blue', text: 'When the planned economies opened up, two routes emerged. The contrast between Russia\'s shock therapy and China\'s gradualism is one of modern economics\' great natural experiments.' },
      verdict: {
        title: 'Two routes from plan to market',
        emoji: '🌍',
        layout: 'vs',
        columns: [
          {
            tone: 'rose',
            icon: '⚡',
            label: 'Russia – Shock Therapy',
            items: [
              { ok: false, text: 'Rapid, simultaneous liberalisation from 1991' },
              { ok: false, text: 'GDP fell ~45% between 1990 and 1998' },
              { ok: false, text: 'State assets seized by oligarchs' },
              { ok: false, text: 'Hyperinflation wiped out household savings' },
              { ok: true,  text: 'Markets established quickly – in theory' }
            ]
          },
          {
            tone: 'green',
            icon: '🐢',
            label: 'China – Gradualism',
            items: [
              { ok: true,  text: 'Incremental reforms from 1978 under state oversight' },
              { ok: true,  text: 'GDP per capita rose ~30× between 1980 and 2020' },
              { ok: true,  text: 'State kept control of finance and key industries' },
              { ok: true,  text: 'Market competition introduced sector by sector' },
              { ok: false, text: 'Less political freedom; "state capitalism" debated' }
            ]
          }
        ]
      },
      conclusion: {
        title: 'What the experiment shows',
        text: 'China\'s success challenges the binary "market vs command" framing – markets and a strong state can coexist productively. But critics argue the decisive factor was institutional (property rights, contract law, sequencing), not ownership per se. Russia liberalised <em>without</em> those institutions, and markets without institutions produced disorder.'
      },
      examEdge: 'Top-band evaluation: institutional quality matters as much as the speed of reform. "Free the prices" is not enough – you also need the rule of law, enforceable contracts and functioning markets for the gains to materialise.'
    },

    /* ================================================================
       CARD 8 – The whole story (Evidence-then-verdict) – synthesis
       ================================================================ */
    {
      id: 'economic_systems_8',
      template: 'framing',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'The whole story',
      tip: { icon: '💡', tone: 'green', text: 'Economic systems are just different answers to the same three questions. The grown-up question isn\'t which system is perfect – it\'s which mix best fits a society\'s goals.' },
      flow: [
        { tone: 'rose',   icon: '⚠️', title: 'Scarcity',          sub: 'Resources are limited – choices are forced.' },
        { tone: 'amber',  icon: '❓', title: 'Three questions',    sub: 'What, how and for whom.' },
        { tone: 'purple', icon: '🏛️', title: 'A system is chosen', sub: 'Free market, mixed or command.' },
        { tone: 'blue',   icon: '🎚️', title: 'Allocation method', sub: 'Prices, planning or both.' },
        { tone: 'green',  icon: '📊', title: 'Outcomes',           sub: 'Choice, efficiency, equity, stability.' },
        { tone: 'green',  icon: '⚖️', title: 'Evaluation',         sub: 'Every system involves trade-offs.' }
      ],
      flowTitle: 'The chain: from scarcity to judgement',
      flowEmoji: '🔗',
      causes: [
        { tone: 'rose', icon: '🚫', head: 'No pure systems',  body: 'Real economies are rarely fully market or fully command – they are points on a spectrum.' },
        { tone: 'rose', icon: '⚖️', head: 'Mixed isn\'t 50-50', body: 'The balance differs between countries and shifts over time with politics and crises.' },
        { tone: 'rose', icon: '🏛️', head: 'Government can fail too', body: 'Intervention has costs – red tape, capture and inefficiency. Market failure doesn\'t guarantee a better state outcome.' },
        { tone: 'rose', icon: '💧', head: 'Scarcity remains',  body: 'No system escapes scarcity – they only allocate scarce resources differently.' }
      ],
      causesLabel: 'Don’t forget the limits',
      causesEmoji: '⚠️',
      causesStyle: 'tinted-flat',
      causes2: [
        {
          tone: 'green', icon: '✅', head: 'Why economists lean mixed',
          body: '<div style="margin-bottom:5px;">• It keeps market incentives and choice.</div><div style="margin-bottom:5px;">• It can correct market failure.</div><div>• It supports equity and essential public services.</div>'
        },
        {
          tone: 'rose', icon: '⚠️', head: 'Why evaluation matters',
          body: '<div style="margin-bottom:5px;">• Too much intervention can weaken incentives.</div><div style="margin-bottom:5px;">• Too little can worsen inequality and instability.</div><div>• The right balance depends on context and priorities.</div>'
        }
      ],
      causes2Label: 'Final judgement',
      causes2Emoji: '🧠',
      causes2Cols: 2,
      keyTakeaway: {
        title: 'The big takeaway',
        text: 'Scarcity forces every economy to answer what, how and for whom. Free markets answer with prices, command economies with the state, and mixed economies with both. The key question is not which system is perfect – it\'s which mix best fits a society\'s goals.'
      },
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
    title:    'Economic Systems',
    subtitle: 'Theme 1 &middot; Topic 1.6 &middot; Edexcel A-Level',
    backUrl:  TopicLoader.routes.learn('economic_systems_main'),
    backLabel: 'Back to Learn It',
    lede: '10 questions · ~8 minutes · covers free market, command, mixed economy, the price mechanism as allocator, Hayek, and transition economies',
    shortNames: [
      'Systems categorise', 'Free market MCQ', 'Command economy', 'Price mechanism',
      'Hayek knowledge', 'Match pairs', 'Cause & effect', 'Odd one out',
      'Data table', 'Evaluation multi-select'
    ],

    questions: [

      /* 1 – Categorise: economic systems */
      { type: 'categorise',
        stem: 'Sort each policy or feature into the correct economic system.',
        categories: ['Free market economy', 'Command economy', 'Mixed economy'],
        items: [
          { text: 'The government owns all major industries and sets production quotas centrally', category: 'Command economy' },
          { text: 'Private firms compete to produce goods; prices are set by supply and demand', category: 'Free market economy' },
          { text: 'NHS provides healthcare free at point of use; private sector provides most other goods', category: 'Mixed economy' },
          { text: 'A central planning bureau allocates steel, coal, and labour between sectors', category: 'Command economy' },
          { text: 'Government regulates pollution but leaves pricing and production to markets', category: 'Mixed economy' },
          { text: 'No government intervention; consumer sovereignty determines what is produced', category: 'Free market economy' }
        ],
        exp: '<strong>Free market</strong>: private ownership, price mechanism allocates resources, consumer sovereignty, profit motive drives production. <strong>Command economy</strong>: state ownership, central planning bureau allocates resources, production quotas rather than prices. <strong>Mixed economy</strong>: combination – markets for most goods, government provision for public goods and merit goods, regulation of externalities and market power. In practice, all modern economies are mixed – the question is the balance between market and state.'
      },

      /* 2 – MCQ: free market advantages */
      { type: 'mcq',
        stem: 'A key advantage of a <strong>free market economy</strong> over central planning is:',
        opts: [
          'The price mechanism aggregates dispersed information efficiently – no central body needs to know everything; prices coordinate millions of individual decisions automatically',
          'Free markets always achieve allocative efficiency – the goods produced always reflect society\'s true welfare',
          'Free markets eliminate inequality by rewarding effort and punishing idleness',
          'Free markets have no transaction costs – the price mechanism coordinates exchange without any cost to buyers or sellers'
        ],
        ans: 0,
        exp: 'Hayek\'s knowledge argument: information about local preferences, costs, and opportunities is dispersed across millions of agents. No central planner can collect, process, and act on this information effectively. The price mechanism aggregates this dispersed knowledge into a single number (price) that coordinates actions automatically – rising prices signal where resources are needed; falling prices signal where they are in surplus. This is the core economic case for markets over planning. Option B overstates – markets fail in the presence of externalities, public goods, and information asymmetry.'
      },

      /* 3 – MCQ: command economy problems */
      { type: 'mcq',
        stem: 'The <strong>Soviet Union\'s planned economy</strong> achieved rapid industrialisation in the 1930s but faced growing inefficiencies by the 1980s. Which economic explanation best accounts for this?',
        opts: [
          'Central planners could not process the billions of pieces of information required to set prices and quantities efficiently for a complex modern economy; shortages and surpluses became endemic',
          'The Soviet Union lacked natural resources and a sufficiently large population to sustain industrial growth',
          'Soviet workers were not educated enough to operate the complex machinery required by a modern economy',
          'The collapse was caused entirely by US military spending forcing excessive Soviet defence expenditure – the economic system itself was fundamentally sound'
        ],
        ans: 0,
        exp: 'The Soviet economic system worked relatively well for simple industrialisation (build factories, produce steel and coal) where planners could set clear targets. As the economy became more complex (consumer goods, electronics, services), the information requirements exploded. Planners set prices without market feedback, creating chronic shortages (under-priced goods) and surpluses (over-priced goods). The incentive problem also mattered: firms had no profit motive to innovate or reduce costs. By the 1980s, the system produced poor quality goods in the wrong quantities – the quintessential planning failure Hayek predicted in 1945.'
      },

      /* 4 – Sequence: how the price mechanism allocates resources */
      { type: 'sequence',
        stem: 'An increase in demand for electric vehicles. Place the steps showing how the <strong>price mechanism allocates resources</strong> in the correct order.',
        instr: 'Tap the steps in the correct order, from first to last.',
        items: [
          { label: 'Consumer demand for EVs rises – demand curve shifts rightward', note: '' },
          { label: 'EV prices rise – a signal of increased scarcity and value', note: '' },
          { label: 'Higher EV prices create profit opportunities for car manufacturers', note: '' },
          { label: 'Car firms invest in EV production; new firms enter the market', note: '' },
          { label: 'Resources (steel, lithium, engineers) are drawn into EV production', note: '' },
          { label: 'EV output expands; prices stabilise at a new higher equilibrium', note: '' }
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        exp: 'The price mechanism allocates resources through three functions: <strong>signalling</strong> (rising EV prices communicate scarcity and value to producers and consumers); <strong>incentive</strong> (profit opportunity motivates firms to invest and enter); <strong>rationing</strong> (higher price rations EVs to those with highest WTP, while signalling manufacturers to expand). This happens without central direction – millions of agents respond to price signals independently. The contrast with central planning: no one "ordered" resources into EV production; prices did the coordinating work.'
      },

      /* 5 – MCQ: mixed economy rationale */
      { type: 'mcq',
        stem: 'The UK is a <strong>mixed economy</strong>. Which statement best explains why governments intervene even in predominantly market-based economies?',
        opts: [
          'Markets fail in the presence of externalities, public goods, information asymmetry, and inequality – government intervention corrects failures that the price mechanism cannot resolve alone',
          'Governments intervene because politicians prefer to control the economy rather than leave decisions to the private sector',
          'Markets always achieve full employment – government intervention is only needed to manage foreign trade',
          'The price mechanism only works for manufactured goods; all services must be government-provided'
        ],
        ans: 0,
        exp: 'The mixed economy rationale: markets are efficient in most cases but fail systematically in four areas: <strong>externalities</strong> (costs and benefits not reflected in prices – pollution, vaccines); <strong>public goods</strong> (non-excludable, non-rival – cannot be provided by markets); <strong>information asymmetry</strong> (market power through information gaps – healthcare, insurance); <strong>inequality</strong> (markets may produce an efficient but socially unacceptable distribution). Government corrects these failures through taxes, subsidies, regulation, and direct provision – but government intervention also has costs and risks government failure.'
      },

      /* 6 – Match pairs: economic systems vocabulary */
      { type: 'match_pairs',
        stem: 'Match each concept to its correct description.',
        pairs: [
          { a: 'Consumer sovereignty', b: 'Consumers\' preferences determine what is produced – "voting with wallets"' },
          { a: 'Producer sovereignty', b: 'Firms (not consumers) determine what is produced – common in command economies' },
          { a: 'Allocative efficiency', b: 'Resources allocated to their highest-valued uses; P = MC' },
          { a: 'Government failure', b: 'State intervention makes resource allocation worse rather than better' },
          { a: 'Transition economy', b: 'Economy moving from central planning toward market allocation (e.g. post-Soviet Russia)' },
          { a: 'Laissez-faire', b: 'Minimal government intervention – markets left to operate freely' }
        ],
        exp: 'Economic systems vocabulary: <strong>consumer sovereignty</strong> is the key virtue of market economies – consumer preferences drive production decisions through the price mechanism. <strong>Producer sovereignty</strong> is the risk in monopoly and command economies. <strong>Allocative efficiency</strong> is the normative benchmark (P = MC). <strong>Government failure</strong> is the counterpart to market failure – intervention can fail due to information problems, political distortions, or unintended consequences. <strong>Transition economies</strong> face the challenge of building market institutions (property rights, rule of law, price liberalisation) simultaneously.'
      },

      /* 7 – Cause & effect: market vs command economy */
      { type: 'cause_effect',
        stem: 'Match each feature of economic systems to its consequence.',
        pairs: [
          { cause: 'Free market: prices rise when demand exceeds supply', effect: 'Resources automatically flow to profitable areas without central direction' },
          { cause: 'Command economy: prices set below market equilibrium', effect: 'Chronic shortages – queues, black markets, non-price rationing' },
          { cause: 'Free market: no regulation of pollution', effect: 'Market failure – negative externalities lead to overproduction of polluting goods' },
          { cause: 'Mixed economy: government subsidises vaccines', effect: 'Positive externality internalised – consumption rises to socially optimal level' },
          { cause: 'Command economy: no profit motive for firms', effect: 'Weak incentive to innovate, cut costs, or respond to consumer preferences' },
          { cause: 'Free market: unequal income distribution', effect: 'Goods produced for those with highest WTP, not greatest need – distributional concern' }
        ],
        exp: 'Each economic system has structural consequences: <strong>free markets</strong> efficiently allocate through prices but fail on externalities and distribution; <strong>command economies</strong> create incentive and information failures – planners cannot replicate market signals; <strong>mixed economies</strong> try to combine market efficiency with government correction of failures. The debate is not "markets vs planning" but "how much intervention, in which areas, using which instruments" – the practical policy question in all real economies.'
      },

      /* 8 – Odd one out: advantages of free markets */
      { type: 'odd_one_out',
        stem: 'Three of these are genuine <strong>advantages of free market economies</strong>. Which is the <strong>odd one out</strong>?',
        items: [
          { icon: '🚀', label: 'Profit motive incentivises innovation and entrepreneurship', note: '' },
          { icon: '📊', label: 'Price mechanism aggregates dispersed information efficiently', note: '' },
          { icon: '⚖️', label: 'Free markets automatically achieve an equitable distribution of income', note: '' },
          { icon: '🔄', label: 'Consumer sovereignty ensures goods are produced to match consumer preferences', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>equitable income distribution</strong>. Free markets do not automatically produce equitable distribution – they produce an efficient allocation, but efficiency and equity are distinct. Free markets reward scarce skills and capital ownership highly, which may produce high inequality. This is a classic market failure (or market limitation) – markets are not designed to produce fairness, only efficiency. Redistribution requires government intervention (progressive taxation, welfare transfers). The other three are genuine advantages: profit motive, information aggregation, and consumer sovereignty are the core economic case for markets.'
      },

      /* 9 – Data table: market vs command economy performance */
      { type: 'data_table',
        stem: 'The table compares economic performance indicators for market-oriented and command economies (approximate data).',
        headers: ['Indicator', 'USSR 1980', 'USA 1980', 'China (plan) 1978', 'China (market) 2010'],
        rows: [
          ['GDP per capita (PPP, 2015 USD)', '$9,600', '$26,000', '$880', '$8,800'],
          ['Annual GDP growth (5-yr avg)', '2.1%', '3.5%', '5.0%', '10.5%'],
          ['Consumer goods availability', 'Chronic shortages', 'Wide choice', 'Severe shortages', 'Broad range'],
          ['Innovation index (approx ranking)', 'Low', 'High', 'Very low', 'Rising rapidly']
        ],
        question: 'Which conclusion is <strong>best supported</strong> by the data?',
        opts: [
          'Market-oriented economies have generally achieved higher living standards and more dynamic growth – China\'s rapid improvement after market reforms is particularly striking',
          'Command economies outperform market economies on growth – the USSR\'s 2.1% growth proves planning is effective',
          'Innovation only occurs in pure free-market economies like the USA – mixed economies cannot innovate',
          'The data show China\'s command period (1978) achieved higher living standards than the USSR, proving planning works'
        ],
        ans: 0,
        exp: 'The data support the argument that market-oriented economies generally achieve higher living standards: USA GDP per capita (£26k) far exceeded USSR (£9.6k) despite similar resource endowments. Most strikingly, China\'s transition from central planning to market allocation (post-1978 Deng reforms) produced spectacular growth (GDP per capita from $880 to $8,800 by 2010, 10.5% annual growth). Option B: 2.1% Soviet growth is actually below the USA\'s 3.5%, undermining the claim. Option C overstates – mixed economies also innovate. Option D: China in 1978 had far lower living standards than the USSR.'
      },

      /* 10 – Multi-select: evaluation of economic systems */
      { type: 'multi_select',
        stem: 'Which statements demonstrate genuine <strong>evaluation</strong> of the relative merits of free market versus command economies?',
        opts: [
          'In a free market economy, resources are allocated through the price mechanism',
          'While free markets excel at coordinating complex consumption decisions through price signals, they systematically fail for goods with large externalities or public good characteristics – suggesting the optimal system is context-dependent rather than universally "more market" or "more state"',
          'Command economies always fail because central planners are less intelligent than market participants',
          'The Chinese case qualifies both the pure market and pure planning positions: market reforms produced dramatic growth, but state direction of investment in infrastructure and strategic industries played a significant role – suggesting that successful development may require selective state intervention rather than blanket liberalisation',
          'Mixed economies have both government and private sector activity',
          'Hayek\'s knowledge argument is strongest against comprehensive central planning of consumer goods markets, but may be weaker against targeted industrial policy in sectors with clear market failures (R&D, green energy) – distinguishing the strength of the argument by context is essential to genuine evaluation'
        ],
        correct: [1, 3, 5],
        exp: '<strong>Options B, D, and F are genuine evaluation.</strong> B: qualifies the free market argument by identifying contexts where it systematically fails, reaching the conclusion that optimal system choice is context-dependent – avoiding the error of universal prescription. D: uses the China case to qualify both pure positions, reaching a nuanced conclusion about selective state intervention – neither pure market nor pure planning, but targeted dirigisme. F: directly limits the scope of Hayek\'s argument, distinguishing contexts where it applies (consumer goods planning) from those where it may not (targeted industrial policy) – a sophisticated contextual evaluation. A and E are descriptions. C is an unsupported assertion.'
      }

    ]
  };

})();
