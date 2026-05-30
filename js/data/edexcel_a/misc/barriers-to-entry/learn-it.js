window.ECONOS_TOPIC = {
  id: 'barriers-to-entry',
  topicNum: '3.9',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Barriers to Entry',
  estTime: '9-11 minutes',
  goal: 'Lock in the types of entry barriers, how they sustain supernormal profit, and their implications for competition policy.',
  intro: {
    heroKey: 'heroMarketPower',
    summary: 'Barriers to entry are the key determinant of whether supernormal profits persist in the long run. Understanding their sources – structural, strategic, or legal – determines the appropriate competition policy response.',
    doInThis: 'Work through 7 cards covering structural barriers (scale, sunk costs, resources), strategic barriers (predatory pricing, limit pricing, brand proliferation), legal barriers, network effects, and evaluation of barriers as competition policy targets. Finish with a 25-mark essay scaffold.',
    outcomes: [
      'Classify barriers to entry as structural, strategic, or legal',
      'Explain how each type of barrier sustains supernormal profit',
      'Distinguish sunk costs from fixed costs and explain why sunk costs deter entry',
      'Evaluate competition policy tools for reducing barriers to entry'
    ],
    tip: 'Without barriers to entry, supernormal profit attracts entry → prices fall → normal profit. Barriers PREVENT this self-correcting mechanism. The higher and more durable the barrier, the more persistently supernormal profit can be sustained.',
    stages: [
      { num: 1, name: 'Learn it', sub: '8 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'barriers_entry_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 8',
      title: 'Barriers to entry: the big picture',
      lede: 'Without barriers, supernormal profit gets competed away. With them, market structure – and consumer outcomes – can change for decades.',
      branches: [
        { tone: 'green',  label: 'Why barriers matter',   sub: 'Barriers determine how long supernormal profit persists – the central concept linking market structure to performance.' },
        { tone: 'blue',   label: 'Structural barriers',   sub: 'Innocent: scale economies, sunk costs, control of key resources. Built into the technology of the industry.' },
        { tone: 'amber',  label: 'Strategic barriers',    sub: 'Deliberate: predatory pricing, limit pricing, brand proliferation. Incumbents create them to deter entrants.' },
        { tone: 'purple', label: 'Legal and network',     sub: 'Patents, licences, and network effects can be even more durable than cost-based barriers – and harder to dismantle.' }
      ],
      body: 'In competitive markets, supernormal profit attracts new entrants → supply increases → price falls → profit eroded. <strong>Barriers to entry</strong> prevent this process – allowing incumbent firms to sustain supernormal profit in the long run.<br><br>The height of the entry barrier determines the persistence of supernormal profit. High barriers (natural monopoly, strong patents) → permanent supernormal profit. Low barriers (modest scale economies, weak brand) → profit competed away over time.<br><br>Barriers to entry are therefore the central concept in determining market structure: the higher the barriers, the more concentrated and less competitive the market.',
      keyTerms: [
        { term: 'Barriers to entry', def: 'Obstacles that prevent new firms from entering a profitable market – sustain incumbents\' supernormal profit.' },
        { term: 'Incumbent advantage', def: 'Established firm\'s cost, brand, network, or scale advantages over potential entrants.' },
        { term: 'Contestability', def: 'The ease of entry and exit – high contestability means barriers are low and even a monopoly must price competitively.' }
      ],
      blocks: [
        { type: 'examEdge', title: 'Exam edge', text: 'Barriers to entry are not just about preventing entry – they also affect the incumbent\'s behaviour. Knowing that entry is blocked, a monopolist need not price competitively. Knowing that entry is possible (contestable market), even a dominant firm will price near AC. The threat of entry disciplines incumbent behaviour even without actual entry.' }
      ]
    },
    {
      id: 'barriers_entry_2',
      template: 'cause',
      diagramKey: 'mesBarrierDiagram',
      title: 'Structural (Innocent) Barriers to Entry',
      blocks: [
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'slate', icon: null, head: 'Economies of scale', body: 'Incumbents produce at large scale → low AC. Entrants start small → high AC. Entrant cannot match incumbent prices without making a loss until it reaches scale – by which time it may have failed. Natural monopoly is the extreme case.' },
          { type: 'tile', tone: 'slate', icon: null, head: 'High sunk costs', body: 'Sunk costs are irrecoverable if the firm exits. A firm considering entry faces the risk: if unsuccessful, sunk costs are lost. This risk asymmetry (incumbent has already paid; entrant must commit anew) deters entry. Examples: aircraft R&D, brand building, specialist equipment.' },
          { type: 'tile', tone: 'slate', icon: null, head: 'Ownership of key resources', body: 'Control of an essential input prevents entry. De Beers: historically controlled 80%+ of global rough diamond supply. OPEC controls oil reserves. UK spectrum licences: limited by physics – only a few firms can hold mobile spectrum.' },
          { type: 'tile', tone: 'slate', icon: null, head: 'Product uniqueness', body: 'If the incumbent\'s product cannot be replicated (unique knowledge, accumulated experience, first-mover advantage) → entrants cannot offer an equivalent substitute. Regulatory approval processes (pharmaceutical trials) create a time-cost barrier.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Sunk costs vs fixed costs: fixed costs can be recovered when exiting (sell machinery, sub-let premises). Sunk costs cannot be recovered (spent on R&D, advertising, regulatory approval). Only sunk costs create entry barriers – if costs are all recoverable, entry is costless and the market is contestable. This distinction is tested in barrier analysis.' }
      ]
    },
    {
      id: 'barriers_entry_3',
      template: 'cause',
      diagramKey: 'limitPricingDiagram',
      title: 'Strategic (Deliberate) Barriers to Entry',
      blocks: [
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'slate', icon: null, head: 'Predatory pricing', body: 'Incumbent prices below cost to drive out or deter new entrants, then raises price once threat is eliminated. Illegal under competition law but difficult to prove intent. Example: alleged predatory pricing by Standard Oil (1900s). Modern concern: Amazon Marketplace pricing.' },
          { type: 'tile', tone: 'slate', icon: null, head: 'Limit pricing', body: 'Set price just below the level at which an entrant could make a profit – not necessarily below incumbent\'s own cost. Legitimate but deliberate deterrence. Sacrifices some short-run profit to maintain long-run market position.' },
          { type: 'tile', tone: 'slate', icon: null, head: 'Excessive brand proliferation', body: 'Fill product space with variants to deny entrant a market niche. Breakfast cereal market: established brands cover every segment – health, indulgent, children\'s. New entrant struggles to find viable niche.' },
          { type: 'tile', tone: 'slate', icon: null, head: 'Exclusive dealing contracts', body: 'Lock suppliers or retailers into exclusive arrangements. Prevents entrants from accessing distribution channels or inputs. Example: exclusive retail agreements, paying for shelf space (slotting fees).' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Predatory pricing is the most legally contested strategic barrier. The test (EU case law): price below average variable cost is presumed predatory; below average total cost may be predatory if it is part of a strategy to eliminate competition. Firms must show legitimate commercial justification for below-cost pricing.' }
      ]
    },
    {
      id: 'barriers_entry_4',
      template: 'cause',
      title: 'Legal and Regulatory Barriers',
      blocks: [
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'slate', icon: null, head: 'Patents', body: '20-year exclusive right to exploit an invention. Creates a legal monopoly as reward for innovation. Pharmaceutical patents: firms spend £1-2bn developing a drug; patent allows 10+ years of monopoly pricing to recover costs before generics enter.' },
          { type: 'tile', tone: 'slate', icon: null, head: 'Copyright', body: 'Protects creative works (books, software, music, film) for author\'s life + 70 years. Creates monopoly over specific expression. Enables Disney to sustain revenue from 80-year-old characters.' },
          { type: 'tile', tone: 'slate', icon: null, head: 'Operating licences', body: 'Government issues limited licences to operate in regulated industries: aviation (airport slots), banking (banking licence), radio spectrum, gambling. Licence creates a legal barrier – new entrants cannot simply set up without regulatory approval.' },
          { type: 'tile', tone: 'slate', icon: null, head: 'Regulatory compliance costs', body: 'High compliance costs (health and safety, environmental, data protection) disadvantage small entrants relative to large incumbents who have already built compliance infrastructure. Regulatory burden is regressive for market structure.' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'Patent system is the deliberate policy trade-off: 20 years of legal monopoly to incentivise £billions of R&D. Without it, no private firm would invest in pharmaceutical research (rivals would copy immediately). After patent expiry, generic entry → price falls dramatically (generic drugs 90% cheaper than branded). The system is designed to balance static and dynamic efficiency.' }
      ]
    },
    {
      id: 'barriers_entry_5',
      template: 'framing',
      diagramKey: 'networkEffectDiagram',
      title: 'Network Effects as Entry Barriers',
      body: 'A <strong>network effect</strong> occurs when the value of a product increases as more people use it. Network effects create powerful entry barriers because:\n\n• An entrant starts with zero users – its product is less valuable than the incumbent\'s\n• New users join the incumbent (higher value) not the entrant (lower value)\n• The incumbent\'s network advantage compounds over time\n• Result: "winner-take-all" markets dominated by the first platform to achieve critical mass\n\n<strong>Examples:</strong> WhatsApp (switching means losing contacts), LinkedIn (professional network → switching costs high), Windows (software ecosystem). Network effects explain why tech monopolies are more durable than traditional monopolies – competitors face an almost insurmountable chicken-and-egg problem.',
      keyTerms: [
        { term: 'Network effect', def: 'Value of the product or service increases with the number of users – creates self-reinforcing incumbency advantage.' },
        { term: 'Winner-take-all', def: 'Markets where network effects cause one dominant platform to capture most or all users.' },
        { term: 'Switching cost', def: 'Cost (financial, effort, social) of switching from one product to a rival – locks consumers in and reinforces network effect.' }
      ],
      blocks: [
        { type: 'examEdge', title: 'Exam edge', text: 'Competition authorities are increasingly focused on network effects as a structural barrier in digital markets. The CMA Digital Markets Unit (DMU) is specifically tasked with making tech markets more competitive. The challenge: traditional remedies (break-up, behavioural conditions) may not work if network effects mean any separately owned piece has less value. This is unresolved policy frontier.' }
      ]
    },
    {
      id: 'barriers_entry_6',
      template: 'diagnose',
      title: 'Barriers by Industry: Examples',
      intro: 'Barrier height varies dramatically across industries – this determines market structure.',
      rows: [
        { label: 'Industry', colA: 'Commercial aviation (aircraft manufacturing)', colB: 'Taxi services' },
        { label: 'Key barriers', colA: 'Massive sunk R&D costs (£10-20bn per new aircraft model); regulatory certification (10+ years); supply chain lock-in; incumbency reputation; scale economies at global level. Result: Boeing-Airbus duopoly.', colB: 'Low sunk costs (car is recoverable asset); minimal regulatory barrier (driving licence); low scale economies. Easy entry – Uber proved this by rapidly scaling globally.' },
        { label: 'Competition implications', colA: 'Very high barriers → persistent supernormal profit; CMA/EU scrutiny; difficult for new entrants (COMAC China supported by state for 20+ years still marginal). Competition policy focus: behaviour of the duopoly.', colB: 'Low barriers → highly contestable → competitive pricing → normal profit. Platform competition (Uber vs Bolt) adds strategic layer but lower barriers than manufacturing.' }
      ],
      footer: 'The contrast between high-barrier (aircraft) and low-barrier (taxis) industries illustrates how barrier height determines market structure. Competition policy is most needed in high-barrier industries – low-barrier markets self-correct via entry.',
      blocks: [
        { type: 'examEdge', title: 'Exam edge', text: 'Uber disrupted the taxi market by entering with a new technology platform that made it highly contestable – eliminating the dispatch and taxi licensing barriers (where legal). The incumbents (black cabs, local taxi firms) could not prevent Uber\'s entry despite regulatory resistance. This demonstrates that digital technology can reduce barriers in industries previously thought protected.' }
      ]
    },
    {
      id: 'barriers_entry_7',
      template: 'paired',
      title: 'Evaluation: Barriers and Competition Policy',
      blocks: [
        { type: 'grid', cols: 2, children: [
          { type: 'tile', tone: 'green', icon: null, head: 'Why some barriers are justified', body: 'Patents and copyright incentivise innovation – without barriers, no private R&D; Natural barriers from scale economies are not artificial – they reflect true cost structure; High sunk costs reward firms that took risks in new market development; Some barriers protect consumers (safety licensing for banks, medicines); International competition: domestic champion may need scale to compete against subsidised foreign rivals' },
          { type: 'tile', tone: 'amber', icon: null, head: 'When barriers should be challenged', body: 'Strategic barriers (predatory pricing, exclusive dealing) are anticompetitive – prohibit under competition law; Network effects may justify interoperability requirements (force platforms to be open); Excess patent protection beyond innovation incentive costs consumers; Regulatory compliance barriers may be disproportionate – reduce for small entrants; Data barriers (access to user data gives incumbents advantage) – data access mandates for entrants' }
        ]},
        { type: 'examEdge', title: 'Exam edge', text: 'The policy response should match the type of barrier: structural barriers (scale economies) → regulate the firm but do not break it up. Legal barriers (patents, licences) → time-limit and scope carefully. Strategic barriers (predatory pricing, foreclosure) → prohibition and fines. Network effects → interoperability mandates, data portability. Each barrier type requires a specific policy tool.' }
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
    title:    'Barriers to Entry',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('barriers-to-entry'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers types of barriers, their effects on competition, and policy responses',
    shortNames: [
      'Natural barriers','Artificial barriers','Sunk costs','Predatory pricing','Patents',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'A natural barrier to entry arises from:',
        opts: [
          'A firm patenting its product',
          'Structural features of the market such as economies of scale',
          'An incumbent firm cutting its price to drive out rivals',
          'Government granting an exclusive licence'
        ],
        ans:  1,
        exp:  'Natural (or innocent) barriers arise from the inherent structure of the market – e.g., very high minimum efficient scale, or large sunk costs, not deliberate incumbent strategy.'
      },
      {
        type: 'mcq',
        q:    'Which of the following is an example of a strategic (artificial) barrier to entry?',
        opts: [
          'Large economies of scale enjoyed by the incumbent',
          'High capital requirements for a capital-intensive industry',
          'Predatory pricing to drive out or deter rivals',
          'Ownership of a scarce natural resource'
        ],
        ans:  2,
        exp:  'Strategic barriers are deliberately created by incumbents. Predatory pricing – temporarily cutting prices below cost to deter or eliminate rivals – is a classic example. It is illegal under competition law in many countries.'
      },
      {
        type: 'mcq',
        q:    'Patents protect a firm\'s market position by:',
        opts: [
          'Preventing all competition in the market permanently',
          'Giving the inventor an exclusive right to produce the product for a set period',
          'Allowing the government to set the price for the product',
          'Requiring rivals to pay a subsidy to the patent holder'
        ],
        ans:  1,
        exp:  'A patent grants the inventor exclusive rights (typically 20 years in the UK) to produce and sell the invention. This prevents imitation and acts as a legal barrier to entry.'
      },
      {
        type: 'mcq',
        q:    'Sunk costs create a barrier to entry because:',
        opts: [
          'They are paid by the government, not the firm',
          'They make entry expensive and irreversible, increasing risk',
          'They are recovered easily when a firm exits the market',
          'They only apply to existing firms, not new entrants'
        ],
        ans:  1,
        exp:  'Sunk costs cannot be recovered if a firm exits. For a potential entrant, the prospect of losing unrecoverable spending makes entry risky and deters investment – creating a barrier.'
      },
      {
        type: 'numeric_input',
        q:    'An incumbent has average costs of £15 per unit. A new entrant would face AC of £22 per unit. The incumbent sets limit price at £21. Calculate the entrant\'s profit per unit.',
        answer: -1,
        tolerance: 0,
        unit: '£',
        hint: 'Profit per unit = P − AC for the entrant.',
        workingSteps: ['Entrant\'s profit per unit = £21 − £22 = −£1 (loss)']
      },
      {
        type: 'categorise',
        q:    'Categorise each barrier as natural (innocent) or strategic (artificial).',
        categories: ['Natural barrier','Strategic barrier'],
        items: [
          { item: 'Economies of scale (MES is large)',     category: 'Natural barrier' },
          { item: 'Predatory pricing',                     category: 'Strategic barrier' },
          { item: 'Ownership of a unique resource',        category: 'Natural barrier' },
          { item: 'Exclusive dealing contracts',           category: 'Strategic barrier' },
          { item: 'Very high sunk costs in the industry',  category: 'Natural barrier' },
          { item: 'Limit pricing by incumbent',            category: 'Strategic barrier' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each barrier to its effect on market competition.',
        pairs: [
          { cause: 'High economies of scale',               effect: 'New entrant faces higher average costs than incumbent' },
          { cause: 'Patent granted to firm',                effect: 'Rivals legally prevented from copying the product' },
          { cause: 'Incumbent practises predatory pricing', effect: 'Rival exits or potential entrants deterred' },
          { cause: 'Regulatory barrier removed',            effect: 'More firms can enter, competition increases' },
          { cause: 'Strong incumbent brand loyalty',        effect: 'New entrant must spend heavily on advertising to compete' },
          { cause: 'High sunk costs in industry',           effect: 'Market becomes less contestable' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Patent','Government licence','Free entry and exit','Economies of scale'],
        ans:  2,
        exp:  'Patents, government licences, and economies of scale are all barriers to entry. Free entry and exit is the absence of barriers – it is a condition for perfect competition and contestability.'
      },
      {
        type: 'data_table',
        q:    'Use the table to identify the industry with the highest barrier to entry.',
        tableHeaders: ['Industry','MES as % of market','Typical sunk costs','Key barrier type'],
        tableData: [
          ['Hairdressing','<1%','Low','None significant'],
          ['Pharmaceuticals','5%','Very high','Patents + R&D sunk costs'],
          ['Online content','<1%','Low','Network effects'],
          ['Water supply','100%','Extremely high','Natural monopoly / infrastructure']
        ],
        opts: ['Hairdressing','Pharmaceuticals','Online content','Water supply'],
        ans:  3,
        exp:  'Water supply has the highest barriers: MES equals the entire market (natural monopoly), and infrastructure sunk costs are enormous. No new firm could profitably enter at smaller scale.'
      },
      {
        type: 'match_pairs',
        q:    'Match each term to its correct description.',
        pairs: [
          { a: 'Minimum Efficient Scale',  b: 'Lowest output at which long-run average cost is minimised' },
          { a: 'Predatory pricing',        b: 'Pricing below cost to drive out a rival' },
          { a: 'Patent',                   b: 'Legal right to exclude others from making an invention' },
          { a: 'Sunk cost',                b: 'Cost that cannot be recovered on exit from a market' },
          { a: 'Limit pricing',            b: 'Pricing just low enough to make entry unprofitable' },
          { a: 'Regulatory barrier',       b: 'Licence or legal requirement restricting market entry' }
        ]
      }
    ]
  };

})();
