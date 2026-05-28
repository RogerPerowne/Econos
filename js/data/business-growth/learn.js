window.ECONOS_TOPIC = {
  id: 'business-growth',
  topicNum: '1.1-1.3',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  title: 'Business Growth',
  estTime: '7-9 minutes',
  goal: 'Lock in why firms grow, internal vs external growth, types of integration, and the conditions under which growth creates or destroys value.',
  intro: {
    heroKey: 'heroFirm',
    summary: 'Firms grow to achieve economies of scale, market power, and strategic security. But growth has limits – diseconomies of scale, regulatory constraints, and the persistent evidence that most mergers destroy rather than create value.',
    doInThis: 'Work through 7 cards covering motives for growth, internal vs external growth, horizontal/vertical/conglomerate integration, merger outcomes, constraints on growth, and evaluation.',
    outcomes: [
      'Distinguish internal (organic) growth from external growth through mergers and acquisitions',
      'Define and illustrate horizontal, vertical, and conglomerate integration',
      'Explain why firms pursue growth and why much M&A activity fails',
      'Evaluate the benefits and costs of business growth from different stakeholder perspectives'
    ],
    tip: 'Horizontal = same stage (merger of rivals). Vertical backward = take over supplier. Vertical forward = take over customer/distributor. Conglomerate = unrelated business. Each has different motivations and competition concerns.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'business_growth_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Business growth: the big picture',
      lede: 'Firms grow for many reasons – and not all of them serve shareholders. Four ideas frame how, why, and at what cost firms expand.',
      branches: [
        { tone: 'green',  label: 'Why firms grow',        sub: 'Scale economies, market power, risk diversification – and manager-driven empire-building when ownership and control diverge.' },
        { tone: 'blue',   label: 'Internal vs external',  sub: 'Organic expansion (slow, controlled) versus mergers and acquisitions (fast, risky). Different routes, different trade-offs.' },
        { tone: 'amber',  label: 'Integration types',     sub: 'Horizontal, vertical, and conglomerate. Each changes market structure differently and triggers different competition concerns.' },
        { tone: 'rose',   label: 'Why mergers fail',      sub: 'Around 80% of M&A destroys value. Integration problems, cultural clash, and overpayment (the winner\'s curse) explain why.' }
      ],
      body: 'Firms grow for multiple reasons, some in shareholders\' interests and some primarily in managers\' interests:<br><br><strong>Shareholder-aligned motives:</strong><br>• Economies of scale → lower unit costs → higher profit margins<br>• Market power → pricing power → higher profit<br>• Risk diversification → more stable earnings<br>• Synergies → combined value > separate values ("2+2=5")<br><br><strong>Manager-driven motives (principal-agent):</strong><br>• Larger firm → higher CEO pay (pay scales with firm size)<br>• Empire-building for prestige and status<br>• Job security – harder to take over a larger firm',
      keyTerms: [
        { term: 'Economies of scale', def: 'Long-run average cost falls as output rises – a key motive for both internal and external growth.' },
        { term: 'Synergy', def: 'The combined firm is worth more than the sum of parts – cost savings, revenue gains, or capability enhancement from combining.' },
        { term: 'Market power', def: 'Ability to set prices above competitive level – increases with market share and reduced competitive pressure.' }
      ],
      examEdge: 'The distinction between shareholder and managerial motives for growth is essential evaluation. Evidence: most mergers fail to create shareholder value (McKinsey: 80% of M&A deals underperform). Yet managers keep pursuing them – consistent with growth maximisation (managerial motive) rather than profit maximisation (shareholder motive).'
    },
    {
      id: 'business_growth_2',
      template: 'paired',
      title: 'Internal vs External Growth',
      left: {
        label: 'Internal (organic) growth',
        points: [
          'Expansion through own investment: new products, capacity, markets',
          'Slower but more controlled – culture and processes scale gradually',
          'Lower risk: no integration problems; no overpaying for acquisitions',
          'Requires retained profits or external finance (debt/equity issuance)',
          'Examples: Amazon expanding Prime services; Apple launching new products'
        ]
      },
      right: {
        label: 'External growth (M&A)',
        points: [
          'Mergers: two firms combine as equals. Acquisitions: one firm buys another.',
          'Faster route to scale and market entry – buy rather than build',
          'Access to: brands, patents, customer bases, management talent, markets',
          'High risk: integration difficulties, cultural clash, overpayment (winner\'s curse)',
          'Examples: Facebook acquiring Instagram (2012, \xa31bn); Microsoft acquiring Activision (2022, $69bn)'
        ]
      },
      examEdge: 'The choice between organic and acquisition growth depends on: speed requirement, capital availability, integration risk, regulatory environment, and target availability. Start-ups grow organically (no capital for M&A); mature firms with large cash flows pursue acquisitions. Tech platform acquisitions (Facebook, Google) are partly about eliminating future competition – regulatory concern.'
    },
    {
      id: 'business_growth_3',
      template: 'cause',
      diagramKey: 'businessGrowthDiagram',
      title: 'Types of Integration',
      causes: [
        { head: 'Horizontal integration', body: 'Merger of firms at the same stage of production in the same industry. Examples: two banks merging; supermarket takeover of rival. Motives: economies of scale, market power, eliminate competitor. Competition law concern: most likely type to reduce competition → CMA scrutiny.' },
        { head: 'Vertical backward integration', body: 'Firm takes over a supplier at an earlier stage of production. Examples: car manufacturer acquires steel supplier; coffee chain acquires coffee farm. Motives: secure supply, control quality, reduce input costs, prevent rivals accessing supply.' },
        { head: 'Vertical forward integration', body: 'Firm takes over a buyer/distributor at a later stage. Examples: manufacturer acquires retail chain; Netflix acquires a film studio. Motives: control over final sale price, access to customer data, cut out intermediary margins.' },
        { head: 'Conglomerate integration', body: 'Merger of firms in unrelated industries. Examples: Virgin Group (airline, trains, health, banking); Berkshire Hathaway (insurance, railroads, candy). Motives: risk diversification; use of spare capital; management claims cross-sector skills. Typically no economies of scale – diversification is the primary motive.' }
      ],
      examEdge: 'Vertical integration creates foreclosure risk: a firm that controls supply may refuse to supply rivals (input foreclosure) or a firm controlling distribution may refuse to stock rivals\' products (customer foreclosure). CMA investigates this under competition law – why Amazon\'s control of marketplace and logistics is under regulatory scrutiny.'
    },
    {
      id: 'business_growth_4',
      template: 'framing',
      title: 'Why Mergers Often Fail',
      body: 'Evidence: 70-80% of mergers and acquisitions fail to create shareholder value – post-merger combined firm is worth less than the two firms were independently. Key reasons:<br><br>1. <strong>Overpayment (winner\'s curse):</strong> competitive bidding drives the acquisition price above fundamental value. The acquirer "wins" by overpaying.<br>2. <strong>Integration difficulties:</strong> cultural clashes, IT system incompatibilities, management talent departure, and restructuring costs erode projected synergies.<br>3. <strong>Overestimated synergies:</strong> investment banks and consultants project large cost savings that prove illusory in practice.<br>4. <strong>Managerial distraction:</strong> M&A integration consumes management time → core business neglected.',
      keyTerms: [
        { term: 'Winner\'s curse', def: 'In competitive bidding, the winner typically overpays – the winning bid exceeds fundamental value because the most optimistic bidder wins.' },
        { term: 'Synergy overestimation', def: 'Projected benefits from mergers (cost savings, revenue gains) are systematically overstated – common in M&A deal justifications.' },
        { term: 'Integration risk', def: 'The operational challenges of combining two separate organisations – culture, IT, management, and process integration failures.' }
      ],
      examEdge: 'RBS acquisition of ABN AMRO (2007): paid £49bn at peak of credit bubble, outbidding Barclays in a competitive auction. Within a year, RBS required £45bn government bailout – the largest UK corporate failure. Classic winner\'s curse combined with managerial hubris (Fred Goodwin). Uses growth maximisation theory perfectly.'
    },
    {
      id: 'business_growth_5',
      template: 'cause',
      title: 'Constraints on Business Growth',
      causes: [
        { head: 'Finance', body: 'Growth requires capital – retained profits, debt, or equity. Small firms may be credit-constrained. Overleveraging creates financial fragility. The 2008 crisis showed how debt-financed growth can trigger collapse.' },
        { head: 'Diseconomies of scale', body: 'Beyond the minimum efficient scale, average costs may rise as management complexity increases, coordination problems grow, and industrial relations deteriorate. Growth becomes self-limiting.' },
        { head: 'Competition law', body: 'CMA (UK) and European Commission investigate and block mergers that substantially reduce competition. Firms above market share thresholds (~25-33%) face automatic scrutiny. High-profile blocks: Microsoft/Activision faced CMA challenge.' },
        { head: 'Market size', body: 'Growth is ultimately limited by the size of the market. Niche firms in specialist markets cannot grow beyond the demand for their product. Global expansion is the growth route – but faces cultural, regulatory, and logistical challenges.' }
      ],
      examEdge: 'Competition law is the most exam-relevant growth constraint. The CMA\'s merger test: does the merger substantially reduce competition? If a combined firm has >25% market share AND the merger reduces competitive pressure, it may be referred. Remedies: block the deal; require divestiture; impose behavioural conditions. Know the CMA process.'
    },
    {
      id: 'business_growth_6',
      template: 'diagnose',
      title: 'Business Growth and Market Concentration',
      intro: 'Firm growth increases market concentration – measured by concentration ratios and Herfindahl-Hirschman Index (HHI).',
      rows: [
        { label: 'Measure', colA: 'Concentration ratio (CR4)', colB: 'Herfindahl-Hirschman Index (HHI)' },
        { label: 'Definition', colA: 'Sum of market shares of the 4 largest firms. CR4 > 80% = highly concentrated market; high potential for oligopolistic behaviour.', colB: 'Sum of squared market shares of all firms. HHI > 2500 = highly concentrated; <1500 = competitive.' },
        { label: 'Example', colA: 'UK supermarkets: Tesco (27%), Sainsbury\'s (15%), Asda (14%), Morrisons (10%) → CR4 = 66%. Oligopoly.', colB: 'After a merger reducing HHI by >200 points in a concentrated market → CMA automatic scrutiny threshold.' }
      ],
      footer: 'Market concentration matters for competition policy: highly concentrated markets enable supernormal profits, consumer harm, and innovation stagnation. Regulators monitor and can reverse mergers that increase concentration beyond safe limits.',
      examEdge: 'CR4 and HHI are the standard measures used by competition authorities. A horizontal merger that creates a combined market share exceeding 25-33% is likely to attract CMA investigation. For essays on market power, concentration ratios provide concrete evidence of oligopoly structure.'
    },
    {
      id: 'business_growth_7',
      template: 'paired',
      title: 'Business Growth: Benefits and Costs',
      left: {
        label: 'Benefits of firm growth',
        points: [
          'Economies of scale – lower unit costs → lower prices for consumers',
          'Investment in R&D – large firms can afford research small firms cannot (dynamic efficiency)',
          'Risk diversification – larger, more diversified firm more stable (employment security)',
          'Global competitiveness – UK firms need scale to compete internationally',
          'Raises consumer choice (if growth is organic, adding new products)'
        ]
      },
      right: {
        label: 'Costs of firm growth',
        points: [
          'Reduced competition → higher prices, lower quality, less innovation (monopoly welfare loss)',
          'Diseconomies of scale – X-inefficiency, bureaucracy, reduced dynamism',
          'Job losses from M&A (rationalisation, duplication removal)',
          'Regulatory risk – large firms attract competition law intervention',
          'Short-term wealth destruction – evidence that M&A typically destroys acquirer shareholder value'
        ]
      },
      examEdge: 'The growth-efficiency-competition trade-off is the central theme of competition policy. Large firms are often more productively efficient (scale economies) but allocatively inefficient (market power). Dynamic efficiency complicates this further: monopoly profits fund R&D (Schumpeter); but lack of competitive pressure reduces incentive to innovate. There is no clean answer – evaluate both directions.',
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
    title:    'Business Growth',
    subtitle: 'Theory of the Firm',
    backUrl:  TopicLoader.routes.learn('business-growth'),
    backLabel:'Back to Learn It',
    lede:     '10 questions · ~8 minutes · covers internal growth, mergers, integration types, and demergers',
    shortNames: [
      'Organic growth','Horizontal integration','Vertical integration','Conglomerate','Demerger',
      'Categorise','Cause-effect','Odd one out','Data table','Match pairs'
    ],
    questions: [
      {
        type: 'mcq',
        q:    'Organic (internal) growth refers to:',
        opts: [
          'A firm merging with a rival',
          'A firm acquiring a supplier',
          'A firm expanding through increased sales and reinvested profit',
          'A conglomerate buying an unrelated business'
        ],
        ans:  2,
        exp:  'Organic growth occurs when a firm expands its own operations – opening new outlets, investing in capacity, or growing sales – without merging with or acquiring another firm.'
      },
      {
        type: 'mcq',
        q:    'Horizontal integration occurs when:',
        opts: [
          'A firm merges with a company at a different stage of production',
          'A firm merges with a competitor at the same stage of production',
          'A firm diversifies into an unrelated industry',
          'A firm splits into two separate businesses'
        ],
        ans:  1,
        exp:  'Horizontal integration is the merger or acquisition of firms at the same stage of production in the same industry – e.g., two supermarket chains merging. It can increase market power and economies of scale.'
      },
      {
        type: 'mcq',
        q:    'A car manufacturer acquiring a steel supplier is an example of:',
        opts: [
          'Horizontal integration',
          'Conglomerate merger',
          'Backward vertical integration',
          'Forward vertical integration'
        ],
        ans:  2,
        exp:  'Backward vertical integration means a firm acquires a supplier (earlier stage in the supply chain). The car maker acquires the steel supplier – moving backward toward raw materials.'
      },
      {
        type: 'mcq',
        q:    'A demerger occurs when:',
        opts: [
          'Two firms merge to create a larger business',
          'A large firm splits into two or more separate businesses',
          'A firm acquires a business in an unrelated sector',
          'A government nationalises a private company'
        ],
        ans:  1,
        exp:  'Demergers involve breaking up a large firm into smaller, more focused independent companies. They may be prompted by diseconomies of scale, poor synergies, or pressure from shareholders to "unlock value".'
      },
      {
        type: 'numeric_input',
        q:    'Firm A has revenue of £800m. It acquires Firm B (revenue £300m). After the merger, combined revenue is £1,050m due to some customer overlap. What is the revenue synergy gained (£m)?',
        answer: -50,
        tolerance: 5,
        unit: '£m',
        hint: 'Synergy = combined actual revenue − sum of parts revenue.',
        workingSteps: ['Sum of parts = £800m + £300m = £1,100m','Actual combined = £1,050m','Synergy = £1,050m − £1,100m = −£50m (dissynergy from overlap)']
      },
      {
        type: 'categorise',
        q:    'Categorise each merger or growth type correctly.',
        categories: ['Horizontal','Vertical','Conglomerate'],
        items: [
          { item: 'Tesco acquires Sainsbury\'s',              category: 'Horizontal' },
          { item: 'Brewer acquires pub chain (forward)',      category: 'Vertical' },
          { item: 'Tech giant buys a film studio',           category: 'Conglomerate' },
          { item: 'Oil refiner acquires oil field',          category: 'Vertical' },
          { item: 'Two airlines merge',                      category: 'Horizontal' },
          { item: 'Bank buys an insurance company',          category: 'Conglomerate' }
        ]
      },
      {
        type: 'cause_effect',
        q:    'Match each growth strategy to its primary effect.',
        pairs: [
          { cause: 'Horizontal merger',               effect: 'Increased market share and possible economies of scale' },
          { cause: 'Backward vertical integration',   effect: 'Greater control over input supply and costs' },
          { cause: 'Forward vertical integration',    effect: 'Control over distribution channels and retail pricing' },
          { cause: 'Conglomerate merger',             effect: 'Diversification of risk across different markets' },
          { cause: 'Demerger',                        effect: 'Firms become more focused; diseconomies of scale reduced' },
          { cause: 'Organic growth',                  effect: 'Expansion without merger risk; slower but less disruptive' }
        ]
      },
      {
        type: 'odd_one_out',
        q:    'Which is the odd one out?',
        opts: ['Horizontal integration','Vertical integration','Conglomerate merger','Demerger'],
        ans:  3,
        exp:  'Horizontal, vertical, and conglomerate are all forms of external (inorganic) growth involving mergers or acquisitions. A demerger is the opposite – it involves breaking a firm apart.'
      },
      {
        type: 'data_table',
        q:    'Use the table to identify which firm grew most through organic means.',
        tableHeaders: ['Firm','Revenue growth (£m)','Revenue from acquisitions (£m)','Organic growth (£m)'],
        tableData: [
          ['Alpha','200','150','50'],
          ['Beta','300','80','220'],
          ['Gamma','180','180','0'],
          ['Delta','250','100','150']
        ],
        opts: ['Alpha','Beta','Gamma','Delta'],
        ans:  1,
        exp:  'Beta had the highest organic (internally generated) revenue growth of £220m. Gamma had no organic growth – all its revenue increase came from acquisitions.'
      },
      {
        type: 'match_pairs',
        q:    'Match each term to its correct description.',
        pairs: [
          { a: 'Horizontal integration',  b: 'Merger with a firm at the same production stage' },
          { a: 'Backward integration',    b: 'Acquiring a supplier at an earlier production stage' },
          { a: 'Forward integration',     b: 'Acquiring a distributor or retailer at a later stage' },
          { a: 'Conglomerate merger',     b: 'Merging with a firm in an unrelated industry' },
          { a: 'Demerger',                b: 'Breaking a large business into smaller independent firms' },
          { a: 'Synergy',                 b: 'The combined entity performs better than the sum of its parts' }
        ]
      }
    ]
  };

})();

