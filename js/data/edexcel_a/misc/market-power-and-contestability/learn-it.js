window.ECONOS_TOPIC = {
  id: 'market-power-and-contestability',
  topicNum: '3.10',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Market Power & Contestability',
  estTime: '12-14 minutes',
  goal: 'Understand that competitive outcomes depend on the threat of entry – not just the number of firms. Place real markets on the contestability spectrum.',
  intro: {
    heroKey: 'heroMarketPower',
    summary: 'The textbook compares perfect competition with monopoly as if structure (how many firms) were the central question. The modern framework treats CONTESTABILITY – the threat of entry – as the central question. PC and monopoly become the two theoretical limit cases on the contestability spectrum, with most real markets in between.',
    doInThis: 'Work through 8 cards: the contestability spectrum, the two textbook limit cases, contestability theory (Baumol), the corrected welfare diagram, when market power is benign, where real markets sit, modern competition policy, and a full market structures comparison table. Finish with a 25-mark essay scaffold.',
    outcomes: [
      'Place market structures on the contestability spectrum from PC to pure monopoly',
      'Draw firm-level diagrams correctly: horizontal AR=MR=P under PC versus downward AR with MR below under monopoly',
      'Apply contestability theory to explain why a monopolist may behave competitively',
      'Identify when market power is benign (natural monopoly, dynamic efficiency, contestability)',
      'Evaluate UK competition policy as contestability-based – targeting entry barriers and conduct, not structure alone'
    ],
    tip: 'Structure (how many firms) matters less than CONDUCT (how they behave), and conduct is disciplined by CONTESTABILITY (the threat of entry). A single firm in an easy-entry market may price like PC; an oligopoly with high entry barriers may behave like a monopoly. Always assess entry barriers, not just count of firms.',
    stages: [
      { num: 1, name: 'Learn it', sub: '9 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'mvc_1',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'The Contestability Spectrum',
      lede: 'Forget "how many firms?" – the real question is "how easy is entry?". Market structures sit on a contestability spectrum from low barriers (PC) to high barriers (pure monopoly).',
      diagramKey: 'contestabilitySpectrum',
      steps: [
        {
          key: 'base',
          label: 'The spectrum',
          text: 'Markets sit on a spectrum defined by <strong>entry barriers</strong>. Low barriers → perfect competition (price-takers, normal profit). High barriers → pure monopoly (price-maker, supernormal profit possible). Between these extremes sit monopolistic competition, oligopoly, and contestable monopoly.'
        },
        {
          key: 'extension',
          label: 'Real markets',
          text: 'Most real markets sit between the textbook extremes. <strong>Fresh produce</strong> approximates PC (low barriers, near-homogeneous goods). <strong>Restaurants, hairdressers</strong> are monopolistically competitive. <strong>Supermarkets, airlines, banks</strong> are oligopolies. <strong>Tech platforms, utilities, patent-protected pharma</strong> have high barriers and significant market power.'
        },
        {
          key: 'shift',
          label: 'Contestability cuts across',
          text: '<strong>Contestability is independent of firm count</strong>. A monopolist facing easy entry behaves competitively (airlines on routes with mobile aircraft). An oligopoly with high barriers can exploit consumers more than a contestable single firm. → Policy should target <strong>entry barriers</strong>, not the count of firms.'
        }
      ],
      examEdge: 'When you write about market structure in an essay, always assess CONTESTABILITY alongside concentration. "X is a monopoly therefore harmful" is weak analysis. Strong analysis: "X has 80% market share, but with low sunk costs and credible entrant threats, the market is contestable and prices closer to AC than the static monopoly model predicts."'
    },
    {
      id: 'mvc_2',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 2 of 8',
      title: 'The Two Limit Cases – Done Correctly',
      lede: 'A firm-level diagram for each extreme. PC firm: horizontal AR=MR=P (price-taker). Monopoly: faces the whole downward demand, MR below AR.',
      diagramKey: 'firmLevelPcVsMonopoly',
      steps: [
        {
          key: 'base',
          label: 'PC firm (price-taker)',
          text: 'Under perfect competition the individual firm is a <strong>price-taker</strong>. The market sets P; the firm faces a perfectly elastic <strong>horizontal demand: AR = MR = P</strong>. The firm chooses output where <strong>MC = MR (= P)</strong>. In the long run, free entry drives profit to zero: <strong>P = MC = min AC</strong> – both allocatively and productively efficient.'
        },
        {
          key: 'extension',
          label: 'Monopoly firm (price-maker)',
          text: 'The monopolist faces the <strong>whole market demand</strong>. AR is downward-sloping, so to sell another unit it must cut price on every unit. Hence <strong>MR &lt; AR</strong> (MR has twice the slope of a linear AR). Profit-max where <strong>MR = MC</strong> gives Q_m. Price is read up to AR, giving <strong>P_m &gt; MC</strong>. Supernormal profit (P_m − AC) × Q_m persists if entry is blocked.'
        },
        {
          key: 'shift',
          label: 'Compare side-by-side',
          text: 'Same cost curves, different demand. PC firm produces at <strong>min AC</strong> (productive efficiency) and <strong>P = MC</strong> (allocative efficiency). Monopoly firm produces less, at higher AC per unit, charges above MC, and earns supernormal profit. <strong>BUT</strong>: these are limit cases. Whether the monopoly outcome persists depends on contestability – covered next.'
        }
      ],
      examEdge: 'For a PC firm the demand curve is HORIZONTAL at market price – NEVER draw a downward slope for the individual PC firm. The downward slope is the INDUSTRY demand curve. Mixing firm-level and industry-level diagrams is one of the most common A-level errors. In essays, use a two-panel diagram: left = PC firm, right = monopoly firm, with the same cost stack so the difference is purely about demand.'
    },
    {
      id: 'mvc_3',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 3 of 8',
      title: 'Contestability Theory (Baumol 1982)',
      lede: 'A market is contestable if entry and exit are costless. Then even a single firm must price near competitive level – the threat of entry disciplines it.',
      diagramKey: 'contestabilityFrames',
      steps: [
        {
          key: 'base',
          label: 'Pure monopoly (no entry threat)',
          text: 'With <strong>high sunk costs and entry barriers</strong>, the monopolist faces no entry threat. It charges the textbook profit-max P_m well above MC. Supernormal profit persists indefinitely. This is the static monopoly outcome from card 2.'
        },
        {
          key: 'extension',
          label: 'Contestable monopoly (entry threat)',
          text: 'If <strong>sunk costs are low</strong> and entry is easy, a profit-making monopoly attracts <strong>hit-and-run entrants</strong> – enter, undercut, profit, exit before retaliation. To deter this, the incumbent <strong>prices near AC</strong>, sacrificing supernormal profit. <strong>One firm, near-competitive outcome.</strong>'
        },
        {
          key: 'shift',
          label: 'Perfectly contestable',
          text: 'In the limit of <strong>zero sunk costs and free entry/exit</strong>, the monopolist must price at AC – any markup invites instant entry. Allocative efficiency is approximated. Airline routes (mobile aircraft, low route-specific sunk costs) are the canonical example. <strong>Structure: one firm. Outcome: competitive.</strong>'
        }
      ],
      examEdge: 'The key contestability condition is <strong>sunk costs near zero</strong>, NOT zero capital costs. Capital can be high if recoverable on exit (aircraft, leased buildings). Capital is unrecoverable for railway track, pipelines, specialised plant. For evaluation: "Although X is a monopolist, the market is contestable because aircraft can be redeployed to other routes, so prices are disciplined by the threat of entry rather than by the number of competitors."'
    },
    {
      id: 'mvc_4',
      template: 'ad-interactive',
      stepLabel: 'Learn: Step 4 of 8',
      title: 'The Welfare Cost of Unchecked Market Power',
      lede: 'Market-level diagram: industry demand vs industry supply for PC, vs monopolist\'s MR=MC for monopoly. The DWL triangle is the welfare cost when contestability fails.',
      diagramKey: 'marketLevelWelfare',
      steps: [
        {
          key: 'base',
          label: 'PC industry equilibrium',
          text: 'At the <strong>market level</strong>, industry supply (S = ΣMC of price-taking firms above AVC) meets market demand at the competitive equilibrium (Q_c, P_c). Consumer surplus is maximised (the blue triangle). P = MC at the margin → no deadweight loss.'
        },
        {
          key: 'extension',
          label: 'Monopoly takeover',
          text: 'A monopolist takes over the same industry, inheriting the cost structure (so MC = the old S curve). It now faces market D as its own AR with MR below. Profit-max at <strong>MR = MC</strong> gives Q_m &lt; Q_c. Read up to D for price <strong>P_m &gt; P_c</strong>. Output restricted; price raised.'
        },
        {
          key: 'shift',
          label: 'Welfare decomposition',
          text: 'Three areas vs the competitive baseline. <strong>Blue</strong>: remaining consumer surplus (smaller). <strong>Amber</strong>: transfer from consumers to monopolist (former CS now PS). <strong>Red triangle</strong>: deadweight loss – value destroyed because units consumers value above MC go unproduced. <strong>This is the static welfare cost when contestability fails.</strong>'
        }
      ],
      examEdge: 'DWL size depends on demand elasticity at the monopoly point. Inelastic demand → small Q reduction → small DWL triangle. Elastic demand → large Q reduction → large DWL. Competition policy intervention is most justified where DWL is large relative to the market size. Note: this diagram assumes contestability has failed – a contestable monopoly would price near competitive levels and the DWL would shrink towards zero.'
    },
    {
      id: 'mvc_5',
      template: 'framing',
      title: 'When Market Power Isn\'t All Bad',
      body: 'The DWL diagram assumes monopoly is unambiguously worse. Three counter-arguments push back:<br><br><strong>1. Natural monopoly cost advantage.</strong> If LRAC is still falling at the scale of market demand, a single firm produces at lower AC than several smaller competitors would. Breaking it up raises costs. Examples: water distribution, electricity grid, gas pipelines, rail track. Policy response: regulate (RPI-X price cap, access regulation), don\'t break up.<br><br><strong>2. Schumpeterian dynamic efficiency.</strong> Supernormal monopoly profit funds R&D. Competitive firms earn only normal profit and cannot afford ambitious research. Patents – a temporary legal monopoly – are the standard incentive for innovation. Aghion et al. find an <em>inverted-U</em>: innovation peaks at intermediate concentration, not at the extremes.<br><br><strong>3. Contestability.</strong> A single firm in a contestable market behaves competitively. Number of firms is the wrong metric; entry conditions are the right metric.',
      keyTerms: [
        { term: 'Natural monopoly', def: 'A market where one firm can serve demand at lower AC than multiple firms – LRAC still falling at minimum efficient scale relative to demand size.' },
        { term: 'Schumpeterian hypothesis', def: 'Market power and supernormal profit are prerequisites for significant innovation; pure competition under-invests in R&D.' },
        { term: 'Inverted-U hypothesis (Aghion)', def: 'Innovation peaks at intermediate market concentration – neither pure competition nor pure monopoly is optimal for dynamic efficiency.' }
      ],
      blocks: [
        { type: 'examEdge', title: 'Exam edge', text: 'In evaluation, push back against the static welfare diagram with these three arguments. Natural monopoly is the strongest rebuttal – for water and rail track, breaking up genuinely raises costs. Schumpeter is weaker as a general principle (mixed evidence) but strong for specific industries (pharma, where patents are essential). Contestability is the modern framework: regulate barriers, not concentration.' }
      ]
    },
    {
      id: 'mvc_6',
      template: 'cause',
      title: 'Where Real Markets Sit',
      blocks: [
        {
          type: 'grid',
          cols: 2,
          children: [
            { type: 'tile', head: 'Big Tech – high barriers, market power', body: 'Google search (92% share), Meta (Facebook + Instagram + WhatsApp), Apple (App Store control), Amazon (marketplace + own products). <strong>High barriers</strong>: network effects (more users → better service → more users), data accumulation, switching costs. Entry by new search engines or social networks consistently fails. CMA Digital Markets Unit (2021) targets these specifically with conduct codes.' },
            { type: 'tile', head: 'Airlines – contestable on routes', body: 'Aircraft are <strong>mobile capital</strong> – low route-specific sunk costs. Even a monopoly route is contestable: rivals can redeploy aircraft when profits attract them. Ryanair and easyJet entering legacy carrier routes systematically eroded margins. Outcome: prices closer to AC than route-level concentration suggests.' },
            { type: 'tile', head: 'Utilities – natural monopoly + regulation', body: 'Water, gas pipes, electricity grid, rail track (Network Rail). Distribution is a <strong>natural monopoly</strong> – duplicate networks waste resources. UK approach: separate the network (regulated monopoly, e.g. Network Rail, National Grid) from competitive layers (train operators, energy retailers). Access regulation prevents the network owner from abusing dominance.' },
            { type: 'tile', head: 'Supermarkets – oligopoly, contestable in segments', body: 'Tesco, Sainsbury\'s, Asda, Morrisons control most volume but face entry pressure from Aldi and Lidl, which roughly doubled share between 2013 and 2024. Online grocery is contestable; physical big-box stores less so (planning constraints). CMA studies on fuel pricing and loyalty schemes target specific conduct issues rather than overall structure.' }
          ]
        },
        { type: 'examEdge', title: 'Exam edge', text: 'Use specific real-world examples in essays – they earn application marks. "Tech platforms" and "utilities" are over-cited; pick something specific like "the UK retail energy market post-Ofgem reforms" or "the Microsoft/Activision merger CMA decision". Always mention CONTESTABILITY status alongside concentration: e.g. "UK groceries: top-4 concentration ratio ~65%, but contestable due to Aldi/Lidl expansion and low consumer switching costs."' }
      ]
    },
    {
      id: 'mvc_7',
      template: 'paired',
      title: 'Modern Competition Policy: Targeting Barriers, Not Structure',
      blocks: [
        {
          type: 'grid',
          cols: 2,
          children: [
            { type: 'tile', head: 'The contestability-based approach works', body: 'CMA Digital Markets Unit: ex-ante codes of conduct for SMS-designated firms (Google, Apple, Meta) – targets behaviour, not break-up; Merger control prevents concentration-INCREASING deals that raise entry barriers (Microsoft/Activision CMA scrutiny); Market investigations target SPECIFIC barriers: loyalty schemes, data portability, switching costs, fuel margin opacity; Access regulation in utilities preserves natural monopoly cost advantages while preventing exploitation; Fines deter abuse: up to 10% of global turnover (Google Shopping €2.4bn, 2017)' },
            { type: 'tile', head: 'Limitations and tensions', body: 'Defining "contestable" is contentious – incumbents always claim more contestability than entrants experience; Information asymmetry: firms know their cost structures and strategies; regulators rely on submitted evidence; Speed: digital markets evolve in months; investigations take years (Google Shopping appeal: 5 years); Cross-border platforms evade single-jurisdiction regulators; international coordination is slow; Risk of regulatory capture as agencies repeatedly engage the same firms' }
          ]
        },
        { type: 'examEdge', title: 'Exam edge', text: 'The modern framework is genuinely different from textbook PC vs Monopoly. Don\'t evaluate competition policy as if its goal is to force PC – its goal is to ensure CONTESTABILITY. Strong evaluation: "While breaking up Big Tech may seem appealing under the static welfare model, the contestability framework prefers conduct codes that preserve scale benefits while preventing entry-barrier abuse – the approach embedded in the UK Digital Markets, Competition and Consumers Act 2024."' }
      ]
    },
    {
      id: 'mvc_8',
      template: 'market-structures-comparison',
      stepLabel: 'Learn: Step 8 of 8',
      title: 'Market Structures at a Glance',
      lede: 'All four structures side by side. Use the \'Reveal\' rows to self-test the efficiency verdicts before checking – this is exactly the kind of comparison an examiner expects you to make fluently.',
      rows: [
        { label: 'No. of firms',    pc: 'Many (infinite in theory)', mc: 'Many',        ol: 'Few (typically 3–10)',                mo: 'One' },
        { label: 'Product type',    pc: 'Homogeneous (identical)',    mc: 'Differentiated', ol: 'Homogeneous or differentiated',      mo: 'Unique – no close substitutes' },
        { label: 'Entry barriers',  pc: 'None – free entry & exit',  mc: 'Low',         ol: 'High (scale, capital, brands)',         mo: 'Very high (legal, natural, strategic)' },
        { label: 'Price control',   pc: 'None – price-taker',        mc: 'Slight',      ol: 'Significant',                          mo: 'Full – price-maker' },
        { label: 'SR profit',       pc: 'Supernormal possible',       mc: 'Supernormal possible', ol: 'Supernormal likely',          mo: 'Supernormal likely' },
        { label: 'LR profit',       pc: 'Normal only (entry erodes)', mc: 'Normal only (entry erodes)', ol: 'Supernormal likely (barriers protect)', mo: 'Supernormal likely (barriers protect)' },
        { reveal: true, label: 'Productive efficiency', pc: '✓ P = min AC in LR', mc: '✗ Excess capacity – P > min AC', ol: '✗ Usually not', mo: '✗ P > min AC' },
        { reveal: true, label: 'Allocative efficiency', pc: '✓ P = MC',            mc: '✗ P > MC',                       ol: '✗ P > MC',     mo: '✗ P > MC (deadweight loss)' },
        { reveal: true, label: 'Dynamic efficiency',    pc: '✗ Normal profit = no R&D budget', mc: '✓ Limited', ol: '✓ Often strong – supernormal funds R&D', mo: '✓ Possible if profits reinvested (Schumpeter)' },
        { label: 'UK examples',     pc: 'Foreign exchange, commodity markets', mc: 'Coffee shops, hairdressers, restaurants', ol: 'Supermarkets (Big 4), banks, airlines', mo: 'Water utilities, Royal Mail (letters)' }
      ],
      examEdge: 'Don\'t just list structures – compare them on efficiency and link to policy. Strong analysis: "Unlike PC, monopoly is neither productively nor allocatively efficient in the static model – but may achieve greater dynamic efficiency if Schumpeterian supernormal profit funds R&D. Whether the static losses outweigh dynamic gains is an empirical question, not a theoretical one." Always qualify with contestability.',
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
    title:    'Monopoly vs Competition',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('market-power-and-contestability'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers welfare comparison, efficiency, and competition policy',
    shortNames: [
      'Welfare comparison','Deadweight loss','Dynamic efficiency','Competition policy','Natural monopoly',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'Compared to a perfectly competitive market, a monopoly typically produces:',
        opts: [
          'More output at a lower price',
          'Less output at a higher price',
          'The same output at the same price',
          'More output at a higher price'
        ],
        ans:  1,
        exp:  'A profit-maximising monopolist restricts output to where MR = MC and charges the price consumers are willing to pay for that quantity – which is above the competitive price and below the competitive output.'
      },
      {
        type: 'mcq',
        q:    'Deadweight welfare loss in monopoly represents:',
        opts: [
          'The profit earned by the monopolist',
          'The cost of regulation',
          'The loss of consumer and producer surplus versus competitive equilibrium',
          'The tax paid by the monopolist'
        ],
        ans:  2,
        exp:  'The deadweight loss (DWL) is the triangular area of net welfare that is lost because the monopolist produces less than the socially optimal output (where MC = Demand).'
      },
      {
        type: 'mcq',
        q:    'Which efficiency argument favours monopoly over competition?',
        opts: [
          'Monopolies produce at minimum average cost',
          'Monopolies set P = MC',
          'Supernormal profits can fund R&D and dynamic efficiency',
          'Monopolies have no barriers to entry'
        ],
        ans:  2,
        exp:  'A key argument for monopoly is dynamic efficiency: sustained supernormal profits provide funds and incentives for research, development, and innovation that may benefit consumers in the long run.'
      },
      {
        type: 'mcq',
        q:    'Competition policy aims to:',
        opts: [
          'Help large firms gain market share',
          'Prevent anti-competitive behaviour and promote consumer welfare',
          'Allow natural monopolies to set their own prices',
          'Reduce government regulation of business'
        ],
        ans:  1,
        exp:  'Competition policy (enforced by bodies like the CMA) aims to prevent mergers that reduce competition, stop price-fixing cartels, and protect consumer welfare.'
      },
      {
        type: 'numeric_input',
        q:    'Under competition, Q = 100 and P = £10. Under monopoly, Q = 60 and P = £16. If MC = £10, approximate the deadweight loss area (½ × base × height).',
        answer: 120,
        tolerance: 5,
        unit: '£',
        hint: 'DWL = ½ × (Qc − Qm) × (Pm − Pc).',
        workingSteps: ['Base = Qc − Qm = 100 − 60 = 40','Height = Pm − Pc = £16 − £10 = £6','DWL = ½ × 40 × 6 = £120']
      },
      {
        type: 'categorise',
        q:    'Categorise each statement as an argument for or against monopoly.',
        categories: ['Argument for monopoly','Argument against monopoly'],
        items: [
          { item: 'Funds R&D through supernormal profit',       category: 'Argument for monopoly' },
          { item: 'Creates deadweight welfare loss',            category: 'Argument against monopoly' },
          { item: 'Economies of scale reduce costs',            category: 'Argument for monopoly' },
          { item: 'P > MC leads to allocative inefficiency',    category: 'Argument against monopoly' },
          { item: 'Natural monopoly avoids duplication costs',  category: 'Argument for monopoly' },
          { item: 'X-inefficiency from lack of competition',    category: 'Argument against monopoly' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each cause to its effect when comparing monopoly and competition.',
        pairs: [
          { cause: 'Monopolist restricts output below Qc',       effect: 'Deadweight loss arises' },
          { cause: 'Supernormal profit funds R&D',               effect: 'Dynamic efficiency may be higher under monopoly' },
          { cause: 'CMA blocks an anti-competitive merger',      effect: 'Market remains more competitive' },
          { cause: 'Natural monopoly regulated at P = AC',       effect: 'Normal profit; no deadweight loss' },
          { cause: 'X-inefficiency develops under monopoly',     effect: 'Average costs rise above the minimum possible' },
          { cause: 'Price discrimination by monopolist',         effect: 'Consumer surplus transferred to producer' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out in the context of arguments against monopoly?',
        opts: ['Allocative inefficiency','Deadweight loss','X-inefficiency','Dynamic efficiency'],
        ans:  3,
        exp:  'Allocative inefficiency, deadweight loss, and X-inefficiency are all criticisms of monopoly. Dynamic efficiency is an argument in favour of monopoly (supernormal profit funds innovation).'
      },
      {
        type: 'data_table',
        q:    'Use the table comparing competitive and monopoly outcomes to answer: which scenario has the greatest deadweight loss?',
        tableHeaders: ['Scenario','Competitive Q','Monopoly Q','Competitive P (£)','Monopoly P (£)'],
        tableData: [
          ['A','100','80','10','13'],
          ['B','200','120','8','14'],
          ['C','150','100','12','18'],
          ['D','80','70','15','17']
        ],
        opts: ['Scenario A','Scenario B','Scenario C','Scenario D'],
        ans:  1,
        exp:  'DWL ≈ ½ × ΔQ × ΔP. B: ½×80×6=240; A: ½×20×3=30; C: ½×50×6=150; D: ½×10×2=10. Scenario B has the largest DWL.'
      },
      {
        type: 'match_pairs',
        q:    'Match each concept to its correct description.',
        pairs: [
          { a: 'Allocative efficiency',   b: 'P = MC; production matches consumer preferences' },
          { a: 'X-inefficiency',          b: 'Costs above minimum due to lack of competitive pressure' },
          { a: 'Dynamic efficiency',      b: 'Innovation and product improvement over time' },
          { a: 'Competition policy',      b: 'Government rules to prevent anti-competitive behaviour' },
          { a: 'Price regulation',        b: 'Setting a maximum price for a natural monopoly' },
          { a: 'Deadweight loss',         b: 'Net welfare loss from under-production vs competition' }
        ]
      }
    ]
  };

})();

