window.ECONOS_TOPIC = {
  id: 'business_objectives',
  topicNum: '3.1',
  theme: 'Theme 3 \xb7 Business Behaviour and the Labour Market',
  sessionLabel: 'Session 1 of 3: Learn',
  title: 'Business Objectives',
  estTime: '7-9 minutes',
  goal: 'Lock in the full range of business objectives beyond profit maximisation — and why different objectives change firm behaviour.',
  intro: {
    heroKey: 'business',
    summary: 'The standard economic assumption is that firms maximise profit. But real firms have shareholders, managers, workers, and wider stakeholders — each with different objectives. Understanding these alternative objectives is essential for analysing firm behaviour in oligopolies, public sector organisations, and social enterprises.',
    doInThis: 'Work through 7 cards covering profit maximisation, revenue maximisation, growth, satisficing, the divorce of ownership and control, CSR, and public sector objectives.',
    outcomes: [
      'Explain profit maximisation and its implications for firm behaviour',
      'Describe alternative objectives: revenue max, growth max, satisficing, and their conditions',
      'Explain the principal-agent problem and the divorce of ownership and control',
      'Evaluate CSR and stakeholder objectives as constraints on profit maximisation'
    ],
    tip: 'Profit max: MR = MC. Revenue max: MR = 0. Growth max: aim for market share/scale. Satisficing: achieve minimum acceptable profit. Each implies different output, price, and investment decisions.',
    stages: [
      { num: 1, name: 'Learn it', sub: '7 concept cards', state: 'current' },
      { num: 2, name: 'Link it', sub: 'Topic quiz', state: 'locked' },
      { num: 3, name: 'Land it', sub: 'Exam paper', state: 'locked' }
    ]
  },
  cards: [
    {
      id: 'business_objectives_1',
      template: 'framing',
      stepLabel: 'Learn: Step 1 of 7',
      title: 'Business objectives: the big picture',
      lede: 'Textbooks assume firms maximise profit. Reality is messier — managers, stakeholders, and bounded rationality pull firms in different directions.',
      branches: [
        { tone: 'green',  label: 'Profit maximisation',   sub: 'The benchmark: produce where MR = MC. Survives competition, satisfies shareholders, funds investment.' },
        { tone: 'blue',   label: 'Revenue and growth max',sub: 'Baumol and Marris: managers prefer revenue or size (linked to pay and prestige) over profit. Higher output, lower price.' },
        { tone: 'purple', label: 'Satisficing',           sub: 'Simon: with bounded rationality and many stakeholders, firms set minimum acceptable targets rather than maximising anything.' },
        { tone: 'amber',  label: 'Divorce of ownership',  sub: 'Shareholders own, managers control. The principal-agent problem explains why firms deviate from profit maximisation.' },
        { tone: 'purple', label: 'CSR and public sector', sub: 'Firms balance profit against social responsibility; public sector pursues welfare not profit at all.' }
      ],
      body: 'The standard economic assumption: firms maximise <strong>profit</strong> by producing where Marginal Revenue (MR) = Marginal Cost (MC). Below this output, each additional unit adds more to revenue than cost → profit rises. Above this output, each additional unit costs more than it earns → profit falls. The maximum is at MR = MC.<br><br><strong>Rationale:</strong> in competitive markets, firms must make at least normal profit to survive. Shareholders demand returns. Profit funds investment and growth. Over time, firms that maximise profit outcompete those that do not.<br><br>Normal profit = just sufficient return to keep the entrepreneur in the industry (implicit opportunity cost). Supernormal profit = profit above normal = economic rent.',
      keyTerms: [
        { term: 'Profit maximisation', def: 'Producing where MR = MC — the output level that maximises the difference between total revenue and total cost.' },
        { term: 'Normal profit', def: 'The minimum profit needed to keep the firm in business — equals the opportunity cost of the entrepreneur\'s capital and effort.' },
        { term: 'Supernormal profit', def: 'Profit above normal (economic rent) — attracts new entrants in competitive markets; sustained by barriers to entry in monopoly.' }
      ],
      examEdge: 'Profit maximisation implies firms produce where MR = MC. But revenue max means producing where MR = 0 (more output, lower price). Growth max means even more output. This ordering matters for diagrammatic analysis — profit-max output is always LESS THAN revenue-max output on a standard demand curve.'
    },
    {
      id: 'business_objectives_2',
      template: 'framing',
      title: 'Revenue Maximisation',
      body: '<strong>Revenue maximisation</strong> (Baumol, 1959): managers of large corporations prioritise total revenue (TR) rather than profit — because manager pay, status, and prestige are more closely linked to revenue and company size than to profit.<br><br><strong>Condition:</strong> Revenue is maximised where MR = 0 (any further output reduces TR since MR turns negative).<br><br><strong>Implication:</strong> Revenue-maximising firm produces MORE output at a LOWER price than a profit-maximiser. If shareholders impose a minimum profit constraint, the firm produces where TR satisfies that constraint — somewhere between profit-max and revenue-max output.',
      keyTerms: [
        { term: 'Revenue maximisation', def: 'Producing where MR = 0 — total revenue is at its peak. Output exceeds profit-maximising level.' },
        { term: 'Manager-shareholder conflict', def: 'Managers may prefer higher revenue/growth (linked to their compensation) while shareholders prefer profit.' },
        { term: 'Minimum profit constraint', def: 'Shareholders require at least a minimum profit level — constrains how far managers can deviate from profit maximisation toward revenue maximisation.' }
      ],
      examEdge: 'Revenue-max vs profit-max on a diagram: revenue-max is where MR intersects the x-axis (MR = 0). Profit-max is where MR intersects MC (to the left). Revenue-max → higher output, lower price, lower profit than profit-max. Draw both on the same diagram for comparison — always marks the optimal points clearly.'
    },
    {
      id: 'business_objectives_3',
      template: 'framing',
      title: 'Growth Maximisation and Sales Maximisation',
      body: '<strong>Growth maximisation</strong> (Marris, 1963): managers prioritise firm growth — measured by sales growth or asset growth — because growth increases manager power, job security, and rewards. Managers face a trade-off: grow too fast and the firm\'s financial position deteriorates → risk of takeover (which would replace them).<br><br><strong>Sales (output) maximisation:</strong> produce as much as possible subject to making at least normal profit. Output beyond the profit-maximising level, but prices cover all costs. Often used to gain market share in competitive oligopolies — loss-leading strategies temporarily.<br><br>Growth strategies: mergers and acquisitions, reinvestment of retained profits, aggressive market entry.',
      keyTerms: [
        { term: 'Growth maximisation', def: 'Managers prioritise expanding the firm\'s size — revenue, assets, and market share rather than profit.' },
        { term: 'Sales maximisation', def: 'Maximising output subject to breaking even — produces beyond profit-max; maximises market share.' },
        { term: 'Takeover constraint', def: 'Firms that grow excessively fast or maintain very low profits risk hostile takeover — limits how far managers deviate from profit maximisation.' }
      ],
      examEdge: 'The growth-maximisation model explains why large firms pursue acquisitions even when they destroy shareholder value (80% of M&A deals fail to create value per evidence — yet managers persist). Empire-building by managers, motivated by status and compensation scale, is a classic principal-agent problem explanation.'
    },
    {
      id: 'business_objectives_4',
      template: 'framing',
      title: 'Satisficing',
      body: '<strong>Satisficing</strong> (Simon, 1957): rather than maximising anything, managers set a minimum acceptable level of performance across multiple objectives (profit, market share, employee welfare, quality) and aim to achieve all of them simultaneously — not maximise any one.<br><br><strong>Why satisficing?</strong><br>• Finding the true profit-maximum requires information firms don\'t have<br>• Multiple stakeholders impose conflicting demands<br>• Bounded rationality makes full optimisation impossible<br>• "Good enough" reduces decision-making costs<br><br>Satisficing is realistic: real firms don\'t calculate MR = MC precisely. They use rules of thumb (e.g. cost-plus pricing), set target return on investment, and respond to achieved performance relative to targets.',
      keyTerms: [
        { term: 'Satisficing', def: 'Setting minimum acceptable targets across multiple objectives rather than maximising any single objective.' },
        { term: 'Cost-plus pricing', def: 'Set price = average cost + target markup. A satisficing rule of thumb used widely in practice.' },
        { term: 'Bounded rationality', def: 'Simon\'s concept: firms optimise within cognitive limits — use heuristics and rules of thumb rather than full optimisation.' }
      ],
      examEdge: 'Satisficing explains real-world pricing: few firms calculate MR = MC explicitly. Instead they use cost-plus (add 20% to average cost), price matching (match competitor price), or target return (price to achieve 15% return on investment). These are satisficing rules. Empirical evidence strongly supports satisficing over pure profit maximisation.'
    },
    {
      id: 'business_objectives_5',
      template: 'framing',
      title: 'Divorce of Ownership and Control',
      body: 'In large corporations, <strong>shareholders</strong> (principals) own the firm but <strong>managers</strong> (agents) control day-to-day decisions. This creates a <strong>principal-agent problem</strong>: managers may pursue their own objectives (pay, status, security) rather than maximising shareholder value.<br><br><strong>Mechanisms:</strong><br>• Information asymmetry: managers know more about the firm than shareholders<br>• Managers have short-term incentives (annual bonuses) conflicting with long-run shareholder value<br>• Boards of directors (shareholder representatives) struggle to monitor complex businesses<br><br><strong>Solutions:</strong> performance-related pay (share options, bonuses tied to profit); independent non-executive directors; hostile takeover threat; activist shareholders.',
      keyTerms: [
        { term: 'Principal-agent problem', def: 'Conflict of interest when an agent (manager) pursues their own goals rather than the principal\'s (shareholder) objectives.' },
        { term: 'Divorce of ownership and control', def: 'Separation between shareholders (owners) and managers (decision-makers) in large corporations.' },
        { term: 'Share options', def: 'Right to buy company shares at a fixed price in the future — aligns manager incentives with shareholder value by making managers benefit from share price growth.' }
      ],
      examEdge: 'Share options can create perverse incentives: managers boost short-run share price to cash in options before problems materialise. RBS CEO Fred Goodwin\'s acquisition of ABN AMRO (2007) at massively inflated price — boosted short-run growth at catastrophic long-run cost. Classic principal-agent failure with enormous consequences.'
    },
    {
      id: 'business_objectives_6',
      template: 'framing',
      title: 'Corporate Social Responsibility',
      body: '<strong>Corporate Social Responsibility (CSR)</strong>: firms pursuing objectives beyond profit — environmental sustainability, employee welfare, community benefit, ethical supply chains. Motivated by:<br><br>• <em>Stakeholder theory</em> (Freeman): firms have duties to employees, suppliers, customers, community, not just shareholders<br>• <em>Reputational management:</em> CSR improves brand equity → attracts customers, top talent, and investors (ESG funds)<br>• <em>Long-run profit maximisation:</em> CSR reduces regulatory risk, litigation cost, and reputational damage<br><br><strong>Friedman\'s counter-argument:</strong> "The social responsibility of business is to increase its profits." CSR is shareholders\' money spent on causes they didn\'t choose — a form of taxation without representation.',
      keyTerms: [
        { term: 'CSR', def: 'Corporate Social Responsibility — firm activities beyond legal requirements that benefit society, environment, or stakeholders.' },
        { term: 'Stakeholder', def: 'Any party with an interest in the firm\'s activities: shareholders, employees, customers, suppliers, community, government.' },
        { term: 'ESG', def: 'Environmental, Social, Governance — investment criteria that assess firms\' non-financial performance; growing influence on capital allocation.' }
      ],
      examEdge: 'CSR and long-run profit: Friedman vs Freeman debate. Porter and Kramer\'s "Creating Shared Value" argues that addressing social needs can create competitive advantage — CSR and profit are complementary, not in tension. This synthesis ("enlightened shareholder value") is the most sophisticated position: CSR can be consistent with profit maximisation if done strategically.'
    },
    {
      id: 'business_objectives_7',
      template: 'paired',
      title: 'Public Sector vs Private Sector Objectives',
      left: {
        label: 'Private sector firm',
        points: [
          'Primary objective: profit (or revenue/growth per principal-agent models)',
          'Success measured by: profit, market share, share price, return on investment',
          'Accountable to: shareholders (with some regulatory constraints)',
          'Exit mechanism: bankruptcy if loss-making — imposes discipline',
          'Price mechanism guides resource allocation'
        ]
      },
      right: {
        label: 'Public sector organisation',
        points: [
          'Primary objectives: service delivery, social welfare, equity of access',
          'Success measured by: outputs (waiting times, exam pass rates), outcomes (health, educational attainment)',
          'Accountable to: government (ministers), taxpayers, regulated users',
          'No exit mechanism: cannot go bankrupt — reduces efficiency discipline',
          'Resource allocation by political decision rather than price'
        ]
      },
      examEdge: 'The public-private hybrid (privatised public utilities: BT, British Gas, water companies, rail franchises) attempts to use market incentives for public service objectives. Results are mixed: water companies took profit while under-investing in infrastructure. Rail franchises relied on government subsidies. The hybrid faces principal-agent problems at multiple levels.',
      quizCta: { href: TopicLoader.buildUrl('quiz.html', {quiz: 'main'}), label: 'Test yourself &#8594;' }
    }
  ]
};
