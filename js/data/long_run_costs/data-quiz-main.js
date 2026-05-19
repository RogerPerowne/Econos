(function () {

  window.ECONOS_QUIZ = {
    id:       'long_run_costs_main',
    topicId:  'long_run_costs_main',
    title:    'Long-Run Costs &amp; Economies of Scale',
    subtitle: 'Theme 3.4 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the LRAC envelope curve, internal and external economies of scale, minimum efficient scale, diseconomies of scale, natural monopoly, and RPI-X regulation. Mixed formats including classification, data analysis, and evaluative essay diagnosis.',
    shortNames: {
      'lrac':      'LRAC envelope',
      'int_eos':   'Internal economies of scale',
      'ext_eos':   'External economies',
      'disec':     'Diseconomies of scale',
      'mes':       'MES and market structure',
      'nat_mon':   'Natural monopoly',
      'rpix':      'RPI-X regulation'
    },

    questions: [

      /* 1 — Elastic sort: internal economies of scale */
      { type: 'elastic_sort',
        stem: 'Classify each economy of scale as a <strong>technical</strong>, <strong>purchasing</strong>, <strong>managerial</strong>, <strong>marketing</strong>, or <strong>financial</strong> economy.',
        categories: ['tech', 'purch', 'man', 'mkt', 'fin'],
        categoryLabels: ['Technical', 'Purchasing', 'Managerial', 'Marketing', 'Financial'],
        goods: [
          { icon: '&#128260;', label: 'A large oil tanker carries proportionally more oil per unit of steel used to build it (cube-square law)', note: '', ans: 'tech' },
          { icon: '&#128717;', label: 'Tesco negotiates supplier prices 20% below those available to small independent grocers', note: '', ans: 'purch' },
          { icon: '&#128187;', label: 'A large firm employs a dedicated chief data scientist whose salary is spread over 10 million units', note: '', ans: 'man' },
          { icon: '&#128250;', label: 'A national TV advertising campaign costs the same whether the firm sells 1 million or 10 million units', note: '', ans: 'mkt' },
          { icon: '&#127981;', label: 'A FTSE 100 company borrows at 3% interest, while a small business pays 8% for the same loan size', note: '', ans: 'fin' },
          { icon: '&#9981;', label: 'A large reactor generates proportionally more electricity per unit of construction material than a small one', note: '', ans: 'tech' }
        ],
        exp: '<strong>Technical economies</strong> exploit physics (cube-square law): volume scales faster than surface area &#8212; tankers, reactors, aircraft all benefit. <strong>Purchasing economies</strong>: bulk buying and bargaining power reduce input prices. <strong>Managerial economies</strong>: specialist managers (HR, data, legal) have fixed salaries spread over more output. <strong>Marketing economies</strong>: advertising costs are largely fixed &#8212; cost per unit falls with scale. <strong>Financial economies</strong>: large firms are perceived as lower-risk borrowers and can access capital markets directly (bonds, equity) rather than bank loans only &#8212; lower cost of capital.'
      },

      /* 2 — MCQ: envelope curve */
      { type: 'mcq',
        stem: 'The Long-Run Average Cost (LRAC) curve is described as an "envelope curve" because:',
        opts: [
          'It is tangent to each short-run average cost curve from below, representing the minimum cost achievable for each output when capital stock can be freely chosen',
          'It envelops (contains) all the costs of the firm including both fixed and variable costs in the long run',
          'It shows the maximum cost the firm must be willing to pay in order to enter the industry',
          'It is a vertical line showing the minimum efficient scale beyond which no further cost savings are possible'
        ],
        ans: 0,
        exp: 'In the long run, the firm can choose its capital stock (plant size) to minimise cost at each output level. Imagine a family of SRAC curves, each corresponding to a different plant size. For any given output, the firm chooses the plant size that minimises cost. The LRAC curve is traced by connecting these minimum-cost points &#8212; it is <strong>tangent to (touches) each SRAC from below</strong>, forming an "envelope." Each SRAC lies at or above the LRAC (you can never do better than the optimal capital choice for that output), and the LRAC touches each SRAC at exactly one point. This construction explains why the LRAC is flatter and lower than any individual SRAC.'
      },

      /* 3 — Odd one out: external economies */
      { type: 'odd_one_out',
        stem: 'Three of these are examples of <strong>external economies of scale</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#128104;&#8205;&#128187;', label: 'Silicon Valley: a deep pool of software engineers that any local tech firm can hire', note: '' },
          { icon: '&#128170;', label: 'A large pharmaceutical firm installs additional automated production lines, halving its unit manufacturing cost', note: '' },
          { icon: '&#127968;', label: 'Biotech cluster near Cambridge: specialist CROs, clinical trial infrastructure, and university spin-outs all co-located', note: '' },
          { icon: '&#128649;', label: 'Detroit auto industry: thousands of specialist component suppliers locate near car plants, reducing logistics costs for all', note: '' }
        ],
        ans: 1,
        exp: 'The odd one out is the <strong>large pharmaceutical firm installing additional production lines</strong>. This is an <em>internal</em> economy of scale &#8212; it arises from the firm\'s own growth and benefits only that firm. External economies of scale arise from the growth of the <em>industry</em> or geographic cluster, reducing costs for <em>all</em> firms in the industry: Silicon Valley\'s labour pool, Cambridge\'s biotech infrastructure, and Detroit\'s component supply network all benefit every firm in that cluster, not just the largest one. The distinction matters for policy: governments invest in clusters (Science Parks, enterprise zones) precisely to create external economies that benefit all firms in an industry.'
      },

      /* 4 — Data table: MES and market structure */
      { type: 'data_table',
        stem: 'The table compares three industries on key structural characteristics.',
        headers: ['Industry', 'Estimated MES as % of UK market', 'Number of UK firms', 'Typical market structure'],
        rows: [
          ['Commercial aviation', '~50%', '2&#8211;3 major carriers', 'Oligopoly'],
          ['Electricity network (wires)', '>100% of market', '1 regional network per area', 'Natural monopoly (regulated)'],
          ['Hairdressing', '<0.1%', '40,000+', 'Monopolistic competition']
        ],
        question: 'Which statement is best supported by the data?',
        opts: [
          'Industries where MES is large relative to market size support fewer firms, explaining why aviation is an oligopoly and electricity networks are natural monopolies',
          'The data show that all industries with fewer than 10 firms are natural monopolies requiring government ownership',
          'Hairdressing has no economies of scale because its MES is very small, which means cost curves are flat at all output levels',
          'Electricity networks should be broken up into competing firms because competition always reduces prices for consumers'
        ],
        ans: 0,
        exp: 'The data confirm that <strong>MES relative to market size determines market structure</strong>. When MES is 50% of the UK aviation market, only 2&#8211;3 firms can achieve minimum efficient scale &#8212; oligopoly is the natural outcome. When MES exceeds 100% of market demand (electricity networks), a single firm can serve the entire market at lower cost than two or more firms &#8212; the definition of <strong>natural monopoly</strong>. When MES is tiny relative to market size (hairdressing), thousands of small firms can all operate at minimum cost &#8212; fragmented competition. Option C is incorrect: small MES industries do have economies of scale, just modest ones. Option D ignores that breaking up natural monopolies raises costs &#8212; regulation (RPI-X) is preferred.'
      },

      /* 5 — Para fill: diseconomies of scale */
      { type: 'para_fill',
        stem: 'Complete the paragraph about diseconomies of scale.',
        anchor: 'Beyond the optimal scale, firms may experience diseconomies of scale.',
        para: 'Diseconomies of scale occur when long-run average cost [1] as output increases beyond the optimal scale. A key cause is [2] coordination problems: as firms grow, hierarchies lengthen, communication slows, and [3] increases costs without adding value. Large workforces also create industrial [4] problems: worker motivation may fall and unions may extract wage rises that exceed productivity growth. Economists also identify [5] inefficiency (Leibenstein) &#8212; the tendency for management slack to raise costs above the minimum possible when [6] pressure is absent.',
        blanks: [
          { id: 1, opts: ['rises', 'falls', 'remains constant', 'disappears'], ans: 0 },
          { id: 2, opts: ['management', 'technical', 'financial', 'marketing'], ans: 0 },
          { id: 3, opts: ['bureaucracy', 'innovation', 'R&D', 'efficiency'], ans: 0 },
          { id: 4, opts: ['relations', 'productivity', 'efficiency', 'costs'], ans: 0 },
          { id: 5, opts: ['X', 'technical', 'allocative', 'dynamic'], ans: 0 },
          { id: 6, opts: ['competitive', 'regulatory', 'managerial', 'financial'], ans: 0 }
        ],
        exp: '(1) <strong>Rises</strong>: diseconomies occur when LRAC rises beyond optimal scale. (2) <strong>Management</strong>: coordination and communication become harder as hierarchies grow. (3) <strong>Bureaucracy</strong>: administrative layers add cost without proportionate value. (4) <strong>Relations</strong>: industrial relations &#8212; large unionised workforces may strike more frequently and achieve above-productivity wage rises. (5) <strong>X</strong>: X-inefficiency (Leibenstein, 1966) &#8212; firms operate above their cost frontier when competitive pressure is absent. (6) <strong>Competitive</strong>: X-inefficiency is most common in monopolies and public-sector organisations lacking competitive discipline.'
      },

      /* 6 — MCQ: natural monopoly definition */
      { type: 'mcq',
        stem: 'An industry is a <strong>natural monopoly</strong> when:',
        opts: [
          'Long-run average cost is still declining at the output level required to serve the entire market, so a single firm can supply the market at lower cost than two or more competing firms',
          'The government has granted a single firm a legal monopoly franchise preventing any entry by rivals',
          'A single firm holds a patent giving it exclusive rights to produce a product for 20 years',
          'The largest firm in the industry has acquired more than 50% market share through mergers'
        ],
        ans: 0,
        exp: 'A <strong>natural monopoly</strong> is defined by the cost structure of the industry, not by law or market share. It exists when the LRAC is still falling across the full range of market demand &#8212; technically, when the cost function is <em>sub-additive</em>: it costs less for one firm to produce total market output than for two or more firms to divide production. Water pipes, electricity networks, and rail track are classic examples: duplicating the infrastructure would be enormously wasteful. Options B and C describe legal or intellectual property monopolies &#8212; artificial, not natural. Option D describes high market concentration but not sub-additive costs.'
      },

      /* 7 — Diagnostic pair: RPI-X regulation */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate RPI-X regulation as a solution to the natural monopoly problem."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Aisha', badge: 'Candidate A',
            answer: 'RPI-X regulation addresses the natural monopoly problem by capping annual price increases at RPI minus X, where X represents a required efficiency improvement. This creates an <strong>incentive to innovate</strong>: if the firm cuts costs faster than X, it retains the savings &#8212; unlike cost-of-service regulation where savings are passed straight on (reducing the incentive). The mechanism has broadly succeeded in raising productive efficiency in UK utilities post-privatisation. However, it suffers from <strong>information asymmetry</strong>: the regulated firm knows its own cost structure far better than the regulator, enabling it to lobby for a low X factor. UK water companies provide a clear example of the system\'s failure: Ofwat set weak investment targets, companies generated large profits while underinvesting in infrastructure, resulting in the sewage spills crisis of 2023&#8211;24. There is also <strong>regulatory capture</strong> risk &#8212; regulators may come to represent the interests of the regulated industry rather than consumers. A further weakness is that RPI-X focuses on price not quality: firms facing cost pressure may cut service quality to maintain margins. On balance, RPI-X is superior to direct nationalisation for productive efficiency incentives, but requires rigorous, well-resourced regulatory oversight to prevent underinvestment.'
          },
          { name: 'Tom', badge: 'Candidate B',
            answer: 'RPI-X regulation works by limiting price rises to below the rate of inflation, which is good for consumers because it means prices go up more slowly. The X factor represents the efficiency improvement the regulator expects. This encourages firms to become more efficient because they can keep any extra savings. However, the regulator may not know the right level for X &#8212; if it is too low, firms make excess profits; if it is too high, the firm may go bust. UK water companies are a good example of the problems with this regulation because they have been making large profits while the quality of water has been getting worse and there have been sewage spills in rivers. So the regulation has not worked as well as it could. Overall RPI-X is better than having no regulation but it has problems.'
          }
        ],
        ans: 0,
        exp: '<strong>Aisha</strong> gives the stronger answer. She uses precise terminology (information asymmetry, regulatory capture), explains the mechanism behind RPI-X\'s efficiency incentive (retained savings), provides a specific and detailed contemporary case study (UK water/Ofwat), and identifies multiple distinct weaknesses (information asymmetry, regulatory capture, quality-price trade-off). She ends with a genuinely conditional evaluation. Tom covers similar ground but lacks precision: he says the regulator "may not know the right level for X" without calling it information asymmetry, and his case study reference is vague. Aisha accesses Level 4; Tom Level 2&#8211;3.'
      },

      /* 8 — Multi-select: internal economies of scale */
      { type: 'multi_select',
        stem: 'Which of the following are genuine sources of <strong>internal economies of scale</strong>?',
        opts: [
          'Technical economies from the cube-square law (volume rises faster than surface area)',
          'Purchasing economies from bulk-buying power that reduces input prices',
          'Financial economies from lower borrowing costs available to large, low-risk firms',
          'External labour pool economies arising from a cluster of similar firms in the same city',
          'Managerial economies from specialist managers whose salaries are spread over large output',
          'Innovation spillovers from rival firms operating in the same industrial park'
        ],
        correct: [0, 1, 2, 4],
        exp: 'Options A, B, C, and E are all <strong>internal</strong> economies: they arise from the individual firm\'s own growth. Technical (cube-square), purchasing (bulk buying), financial (credit rating), and managerial (specialist staff) economies all accrue specifically to the growing firm. Options D and F are <strong>external</strong> economies of scale: the skilled labour pool and knowledge spillovers arise from industry or cluster growth, benefiting all firms in the area, not just large individual firms. The distinction matters: internal economies give the growing firm a competitive advantage; external economies benefit the whole industry and may justify government investment in cluster infrastructure.'
      },

      /* 9 — Calculation: RPI-X price cap */
      { type: 'calculation',
        context: 'A water company currently charges consumers an average of <strong>&#163;400</strong> per year for water services. The regulator sets the X factor at <strong>3%</strong> per year. RPI inflation is <strong>4%</strong>. The regulatory period is <strong>5 years</strong>.',
        working: [
          'Annual allowed price increase = RPI - X = 4% - 3% = 1% per year',
          'Year 1 price: 400 × 1.01 = 404',
          'Year 2 price: 404 × 1.01 = 408.04',
          'Year 3 price: 408.04 × 1.01 ≈ 412.12',
          'Year 4 price: 412.12 × 1.01 ≈ 416.24',
          'Year 5 price: 416.24 × 1.01 ≈ 420.40',
          'Real price change (in year 1 prices): 420.40 / (1.04^5) ≈ 345',
          'Real price has fallen by about 55 / 400 = 13.75% over 5 years'
        ],
        stem: 'Over the 5-year regulatory period, what happens to the <strong>nominal</strong> price consumers pay?',
        opts: [
          { ped: 'The nominal price rises slowly by 1% per year, reaching approximately &#163;420 after 5 years &#8212; rising nominally but falling in real terms', typ: 'Allowed annual rise = RPI(4%) &#8722; X(3%) = 1%; compounded over 5 years: &#163;400 &#215; 1.01&#8309; &#8776; &#163;420', rev: 'The price cap allows nominal rises equal to RPI&#8722;X, not zero growth' },
          { ped: 'The nominal price falls by 3% per year, reaching approximately &#163;340 after 5 years', typ: 'Confused the X factor with the total price change; X is only the efficiency deduction from RPI', rev: 'Prices can still rise nominally under RPI&#8722;X &#8212; the cap is RPI&#8722;X, not &#8722;X' },
          { ped: 'The nominal price stays fixed at &#163;400 throughout the regulatory period', typ: 'Assumed price cap means frozen prices; it actually allows rises up to RPI&#8722;X', rev: 'RPI&#8722;X is a cap on annual increase, not a freeze' },
          { ped: 'The nominal price rises by 4% per year (RPI) reaching approximately &#163;487 after 5 years', typ: 'Applied the full RPI rate without deducting the X efficiency factor', rev: 'The whole point of X is to ensure real price reductions; subtract X from RPI' }
        ],
        ans: 0,
        exp: 'Allowed annual nominal price increase = RPI &#8722; X = 4% &#8722; 3% = <strong>1% per year</strong>. Over 5 years: &#163;400 &#215; (1.01)&#8309; &#8776; <strong>&#163;420</strong> nominally. However, in real terms (adjusting for inflation at 4%): &#163;420 &#247; (1.04)&#8309; &#8776; &#163;345 &#8212; a real price fall of about 14%. This is exactly the mechanism\'s intent: nominal prices can rise slowly, but real prices must fall as the firm improves efficiency. The X = 3% targets an efficiency improvement that should reduce real costs by 3% annually, enabling the firm to be profitable even as real prices fall.'
      },

      /* 10 — Chain: entry into a market with scale economies */
      { type: 'chain',
        stem: 'A new firm attempts to enter an industry dominated by one large incumbent with significant economies of scale. Place the events in the correct logical order.',
        items: [
          { label: 'Entrant faces high average cost due to small initial scale (far above MES)', note: '' },
          { label: 'New firm decides whether to exit or find a niche strategy', note: '' },
          { label: 'Incumbent firm, operating at MES, prices at or slightly above its low average cost', note: '' },
          { label: 'Entrant struggles to win customers at a price that covers its higher average costs', note: '' },
          { label: 'New firm enters the industry with limited initial output', note: '' },
          { label: 'Incumbent may lower prices further to drive entrant costs above revenues (limit pricing)', note: '' }
        ],
        correctOrder: [4, 0, 2, 3, 5, 1],
        exp: '<strong>The correct sequence:</strong><br>1. New firm enters with small output.<br>2. Entrant faces high AC (far above MES) &#8212; scale disadvantage.<br>3. Incumbent operates at MES with low AC and prices accordingly.<br>4. Entrant cannot profitably match incumbent prices &#8212; its costs are higher.<br>5. Incumbent may engage in <em>limit pricing</em> &#8212; setting price below entrant\'s average cost to make entry unprofitable.<br>6. Entrant exits or retreats to a differentiated niche.<br><br>This sequence illustrates why scale economies create <strong>structural barriers to entry</strong>: even without deliberate anti-competitive behaviour, the incumbent\'s cost advantage makes it extremely difficult for small entrants to compete on price. It also explains why natural monopoly industries require regulation rather than competition &#8212; the structural cost advantage makes competition unsustainable.'
      }

    ]
  };

})();
