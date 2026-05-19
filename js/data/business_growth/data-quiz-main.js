(function () {

  window.ECONOS_QUIZ = {
    id:       'business_growth_main',
    topicId:  'business_growth_main',
    title:    'Business Growth',
    subtitle: 'Theme 3.2 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering motives for growth, internal versus external growth, types of integration, why mergers often fail, competition law constraints, and market concentration. Mixed formats spanning classification, calculation, diagram interpretation, and extended evaluation.',
    shortNames: {
      'motives':        'Motives for growth',
      'organic_ext':    'Internal vs external',
      'integration':    'Types of integration',
      'merger_fail':    'Why mergers fail',
      'constraints':    'Constraints on growth',
      'concentration':  'Market concentration'
    },

    questions: [

      /* 1 — Elastic sort: types of integration */
      { type: 'elastic_sort',
        stem: 'Classify each merger or acquisition as <strong>horizontal</strong>, <strong>vertical</strong>, or <strong>conglomerate</strong> integration.',
        categories: ['hz', 'vt', 'cg'],
        categoryLabels: ['Horizontal', 'Vertical', 'Conglomerate'],
        goods: [
          { icon: '&#128663;', label: 'Two competing car manufacturers merge to create a single larger firm', note: '', ans: 'hz' },
          { icon: '&#9749;', label: 'A coffee chain acquires a coffee farm to secure its bean supply', note: '', ans: 'vt' },
          { icon: '&#9992;', label: 'An airline acquires a hotel chain to diversify across unrelated industries', note: '', ans: 'cg' },
          { icon: '&#128250;', label: 'A film studio acquires a cinema chain to control the distribution of its films', note: '', ans: 'vt' },
          { icon: '&#127970;', label: 'Two high-street banks merge to increase market share in retail banking', note: '', ans: 'hz' },
          { icon: '&#128668;', label: 'A supermarket chain acquires an insurance company', note: '', ans: 'cg' }
        ],
        exp: '<strong>Horizontal integration</strong>: same stage, same industry &#8212; rivals merging to gain scale and eliminate competition. <strong>Vertical backward integration</strong>: acquiring a supplier at an earlier stage &#8212; secures supply chain, reduces input costs, and prevents rival access. <strong>Vertical forward integration</strong>: acquiring a buyer or distributor at a later stage &#8212; controls final sale, cuts intermediary margins. <strong>Conglomerate</strong>: unrelated industries &#8212; motivated by risk diversification rather than economies of scale. Competition authorities are most concerned about horizontal mergers (direct reduction in competition) and vertical mergers that create foreclosure risk.'
      },

      /* 2 — MCQ: winner's curse */
      { type: 'mcq',
        stem: 'The "winner\'s curse" in the context of mergers and acquisitions refers to:',
        opts: [
          'The tendency for the winning bidder in a competitive acquisition to have overpaid relative to the target\'s fundamental value',
          'The regulatory penalty imposed on the acquiring firm by the Competition and Markets Authority (CMA)',
          'The short-run fall in the acquirer\'s share price following any successful merger announcement',
          'The fact that the acquired firm\'s management always resign after a hostile takeover'
        ],
        ans: 0,
        exp: 'The <strong>winner\'s curse</strong> is a well-documented phenomenon in auction theory: in competitive bidding situations, the winning bid systematically exceeds the object\'s true value, because the most <em>optimistic</em> bidder wins. In M&A, this means the acquirer overpays for the target. Combined with integration difficulties and overestimated synergies, this explains why 70&#8211;80% of mergers fail to create shareholder value. The RBS acquisition of ABN AMRO in 2007 (&#163;49bn at the peak of a credit bubble) is the canonical UK example: competitive bidding against Barclays drove the price well above fundamental value, contributing to the largest UK corporate bailout.'
      },

      /* 3 — Diagnostic pair: evaluate M&A */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate the view that merger activity is beneficial for consumers."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Priya', badge: 'Candidate A',
            answer: 'Mergers can benefit consumers through <strong>economies of scale</strong>: a merged firm combines production capacity and can spread fixed costs over greater output, potentially reducing unit costs and passing savings on through lower prices. Horizontal mergers in particular may generate purchasing economies and technical economies. However, this consumer benefit is conditional on the merged firm facing sufficient <strong>competitive discipline</strong> to pass on savings rather than retain them as supernormal profit. The empirical evidence is mixed: evidence suggests most mergers fail to create value for acquirers (McKinsey: 80% of deals underperform), meaning projected cost savings frequently do not materialise &#8212; so consumers rarely see price falls. Moreover, horizontal mergers directly reduce competition, and <strong>higher market concentration</strong> (rising CR4, HHI) can enable coordinated behaviour, harming consumers. The CMA therefore scrutinises deals that create combined market shares above 25&#8211;33%. On balance, the consumer benefit of mergers is context-dependent: in industries with significant unrealised scale economies and robust regulatory oversight, mergers may reduce prices; in oligopolistic markets with weak regulation, they are more likely to harm consumers.'
          },
          { name: 'Ben', badge: 'Candidate B',
            answer: 'Mergers can be good for consumers if they lead to economies of scale, which means the firm\'s average costs fall and it can charge lower prices. This means consumers benefit from cheaper goods and services. However, mergers can also be bad for consumers if they reduce competition and allow the merged firm to raise prices because there are fewer rivals. The government can try to prevent harmful mergers through competition law &#8212; the CMA investigates mergers and can block them if they think it will reduce competition. Most mergers probably do not benefit consumers very much because the evidence shows many mergers do not create the cost savings that were promised. So overall the effect on consumers depends on whether the firm passes cost savings on.'
          }
        ],
        ans: 0,
        exp: '<strong>Priya</strong> gives the stronger answer. She specifies which economies of scale are relevant (purchasing, technical), makes the crucial point that benefits are conditional on competitive discipline, integrates empirical evidence with appropriate attribution, and uses precise concepts (CR4, HHI, foreclosure). Her conclusion is properly conditional &#8212; "context-dependent" rather than a blanket yes or no. Ben covers the correct ground but lacks analytical precision: he does not explain <em>why</em> economies of scale might not materialise, nor does he quantify the concentration risk. Priya would access Level 4; Ben Level 2&#8211;3.'
      },

      /* 4 — Multi-select: why mergers fail */
      { type: 'multi_select',
        stem: 'Which of the following are recognised reasons why mergers and acquisitions frequently <strong>fail to create shareholder value</strong>?',
        opts: [
          'Overpayment due to competitive bidding driving the acquisition price above fundamental value',
          'Cultural clashes and IT incompatibilities during post-merger integration',
          'Investment banks systematically overstating projected synergies in deal justification',
          'Acquiring firm management distracted by integration, neglecting the core business',
          'The CMA always approves mergers, creating moral hazard among acquirers',
          'Firms in growing industries never need to acquire external companies'
        ],
        correct: [0, 1, 2, 3],
        exp: 'Options A&#8211;D are all well-evidenced reasons for M&A underperformance. <strong>Overpayment</strong> (winner\'s curse) is structural: the most optimistic bidder wins, but optimism correlates with overvaluation. <strong>Integration difficulties</strong> are the most common post-deal failure &#8212; IT systems, cultures, and management styles often conflict. <strong>Synergy overestimation</strong> is systematic: investment banks earn fees on completed deals, creating incentives to project large savings. <strong>Management distraction</strong> erodes the acquirer\'s core business performance during years of integration. Option E is false: the CMA regularly blocks or conditionally approves mergers (Microsoft/Activision faced CMA challenge). Option F is simply incorrect.'
      },

      /* 5 — Odd one out: constraints on growth */
      { type: 'odd_one_out',
        stem: 'Three of these are recognised <strong>constraints on firm growth</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#128181;', label: 'Limited access to finance: credit-constrained small firms cannot fund acquisitions', note: '' },
          { icon: '&#9878;', label: 'Diseconomies of scale: coordination costs and bureaucracy raise average costs beyond optimal scale', note: '' },
          { icon: '&#128200;', label: 'Growing market demand: strong consumer spending creates opportunities for revenue growth', note: '' },
          { icon: '&#128203;', label: 'Competition law: CMA can block mergers that substantially reduce competition', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>growing market demand</strong>. This is a <em>driver</em> of growth rather than a constraint &#8212; it creates the opportunity for firms to expand. The other three are all constraints: finance limits the resources available for growth; diseconomies of scale mean growth beyond optimal size raises unit costs; competition law directly blocks growth through merger regulation. When evaluating business growth questions, it is important to distinguish factors that enable growth (demand, retained profits, managerial talent) from factors that constrain it (finance, scale limits, regulation, market size).'
      },

      /* 6 — Calculation: market concentration */
      { type: 'calculation',
        context: 'The UK supermarket sector has the following market shares: Tesco 27%, Sainsbury\'s 15%, Asda 14%, Morrisons 10%, Lidl 8%, Aldi 7%, Waitrose 5%, Co-op 5%, Other 9%.',
        working: [
          'CR4 = sum of the four largest firms\' market shares',
          'Rank by size: Tesco (27%), Sainsbury\'s (15%), Asda (14%), Morrisons (10%)',
          'CR4 = 27 + 15 + 14 + 10 = 66%',
          'HHI = sum of squared market shares of all firms',
          '27&#178; + 15&#178; + 14&#178; + 10&#178; + 8&#178; + 7&#178; + 5&#178; + 5&#178; + 9&#178;',
          '= 729 + 225 + 196 + 100 + 64 + 49 + 25 + 25 + 81 = 1,494'
        ],
        stem: 'Using the market share data, which of the following correctly calculates <strong>CR4</strong> and interprets the market structure?',
        opts: [
          { ped: 'CR4 = 66%; moderately concentrated oligopoly &#8212; the four largest firms hold two-thirds of the market', typ: 'Correctly sums the four largest shares: 27+15+14+10 = 66%', rev: 'CR4 = sum of four largest; 66% indicates oligopoly' },
          { ped: 'CR4 = 79%; highly concentrated market with near-monopoly conditions', typ: 'Incorrectly includes Lidl (8%) and/or Aldi (7%) in the top four', rev: 'CR4 uses the FOUR largest firms only; Tesco, Sainsbury\'s, Asda, Morrisons are the top four' },
          { ped: 'CR4 = 56%; fragmented competitive market with no dominant firms', typ: 'Excluded Tesco (27%) from the calculation or used incorrect shares', rev: 'Tesco\'s 27% must be included &#8212; it is the largest firm' },
          { ped: 'CR4 = 100%; supermarkets operate as a cartel with complete market control', typ: 'Confused CR4 (top 4 only) with total market share (100% by definition)', rev: 'CR4 measures concentration; it cannot exceed the sum of the four largest shares' }
        ],
        ans: 0,
        exp: '<strong>CR4 = 27 + 15 + 14 + 10 = 66%</strong>. This indicates a <strong>moderately concentrated oligopoly</strong>: the four largest retailers control two-thirds of the market. The HHI &#8776; 1,494, which is below 2,500 (highly concentrated threshold) but indicates significant concentration. UK supermarkets exhibit classic oligopolistic features: interdependent pricing, periodic price wars, high barriers to entry (planning permission, supply chain relationships), and significant brand differentiation. The sector attracts regular CMA scrutiny &#8212; the 2023 inquiry into grocery price inflation examined whether oligopoly structure was enabling excessive profit-taking.'
      },

      /* 7 — MCQ: vertical integration foreclosure */
      { type: 'mcq',
        stem: 'When a vertically integrated firm controls a key input and refuses to supply it to rival downstream firms, this is known as:',
        opts: [
          'Input foreclosure',
          'Horizontal exclusion',
          'Conglomerate predation',
          'Price discrimination'
        ],
        ans: 0,
        exp: '<strong>Input foreclosure</strong> is the competition concern with vertical backward integration: the integrated firm controls a key input and can either refuse to supply rivals or supply them on worse terms (higher prices, delayed delivery). This forecloses downstream competition. The equivalent concept downstream is <strong>customer foreclosure</strong> (controlling distribution channels, refusing to stock rivals\' products). Both are concerns for competition authorities reviewing vertical mergers. Amazon\'s control of its marketplace platform and logistics infrastructure raises both types of foreclosure concern, since Amazon competes with third-party sellers on its own platform.'
      },

      /* 8 — Para fill: organic vs external growth */
      { type: 'para_fill',
        stem: 'Complete the paragraph comparing internal and external growth strategies.',
        anchor: 'The choice between organic and acquisition growth has important strategic implications.',
        para: 'Internal growth involves expanding through [1] investment in new products, capacity, or markets. This approach is slower but carries lower [2] because the firm avoids the problems of integrating another organisation. External growth through mergers and acquisitions is [3] because the firm buys existing capacity, brands, and customer bases. However, acquirers frequently [4] for targets because of competitive bidding &#8212; a phenomenon known as the [5] curse. Evidence suggests that the majority of acquisitions fail to create [6] value.',
        blanks: [
          { id: 1, opts: ['own', 'borrowed', 'government', 'foreign'], ans: 0 },
          { id: 2, opts: ['integration risk', 'revenue', 'tax liability', 'fixed cost'], ans: 0 },
          { id: 3, opts: ['faster', 'cheaper', 'more regulated', 'less risky'], ans: 0 },
          { id: 4, opts: ['overpay', 'underpay', 'borrow excessively', 'overstate'], ans: 0 },
          { id: 5, opts: ['winner\'s', 'loser\'s', 'market', 'takeover'], ans: 0 },
          { id: 6, opts: ['shareholder', 'social', 'managerial', 'regulatory'], ans: 0 }
        ],
        exp: '(1) <strong>Own</strong>: internal/organic growth uses the firm\'s own investment. (2) <strong>Integration risk</strong>: organic growth avoids the cultural, IT, and organisational challenges of combining two firms. (3) <strong>Faster</strong>: acquiring an existing firm provides immediate access to scale, brands, and markets. (4) <strong>Overpay</strong>: competitive bidding systematically drives prices above fundamental value. (5) <strong>Winner\'s</strong>: the winner\'s curse &#8212; the winning bidder in a competitive auction systematically overpays. (6) <strong>Shareholder</strong>: the benchmark for M&A success is whether the combined firm\'s value exceeds the pre-merger sum of parts &#8212; typically measured by acquirer share price performance.'
      },

      /* 9 — Data table: M&A outcomes */
      { type: 'data_table',
        stem: 'The table shows selected UK mergers and their post-merger outcomes.',
        headers: ['Acquirer', 'Target', 'Year', 'Price (&#163;bn)', 'Outcome'],
        rows: [
          ['RBS', 'ABN AMRO', '2007', '49', 'Acquirer required &#163;45bn government bailout within 18 months'],
          ['Facebook', 'Instagram', '2012', '0.7', 'Instagram grew from 30m to 2bn+ users under Facebook ownership'],
          ['Kraft', 'Cadbury', '2010', '11.5', 'Factory closures despite promises; significant job losses in UK'],
          ['Vodafone', 'Mannesmann', '2000', '112', 'Largest hostile takeover in history; significant write-downs within 3 years']
        ],
        question: 'Which interpretation of the data is best supported?',
        opts: [
          'The evidence is mixed: some acquisitions destroyed value (RBS, Vodafone write-downs) while others generated significant growth (Facebook/Instagram), suggesting M&A outcomes depend heavily on strategic fit and integration',
          'All four mergers were successful because each involved payment of a large premium, confirming that high prices always indicate high future value creation',
          'The data prove that hostile takeovers always destroy value while friendly mergers always create value',
          'Government intervention (RBS bailout) was the sole cause of M&A failure in all cases shown'
        ],
        ans: 0,
        exp: 'The data illustrate the <strong>heterogeneity of M&A outcomes</strong>. RBS/ABN AMRO is a textbook failure (winner\'s curse + managerial hubris + leverage). Facebook/Instagram is a celebrated success &#8212; although regulators now question whether it foreclosed competition. Kraft/Cadbury illustrates the stakeholder costs of acquisition even absent financial failure. Vodafone/Mannesmann resulted in massive goodwill write-downs. The pattern is not that hostile takeovers always fail or that friendly mergers always succeed &#8212; outcome depends on strategic fit, price paid, integration management, and subsequent market conditions. This is why blanket generalisations about M&A are not supported by evidence.'
      },

      /* 10 — Chain: CMA merger investigation */
      { type: 'chain',
        stem: 'Two competing supermarkets announce a merger. Place the events in the correct logical order of the CMA investigation and outcome.',
        items: [
          { label: 'CMA Phase 1 review: initial assessment of whether the merger substantially lessens competition', note: '' },
          { label: 'Merger announced: two major supermarkets agree to combine', note: '' },
          { label: 'Phase 2 in-depth investigation if Phase 1 raises concerns; assessment of market shares, consumer harm, and remedies', note: '' },
          { label: 'Remedy imposed: firm required to divest specific stores or business units to restore competition', note: '' },
          { label: 'CMA decides whether to clear unconditionally, clear with conditions, or prohibit the merger', note: '' },
          { label: 'Merger completes (if cleared); regulators monitor compliance with any conditions', note: '' }
        ],
        correctOrder: [1, 0, 2, 4, 3, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Merger announced.<br>2. CMA Phase 1 review (up to 40 working days) &#8212; initial competition screen.<br>3. Phase 2 in-depth investigation if Phase 1 finds a relevant merger situation that may substantially lessen competition.<br>4. CMA decision: clear, clear with conditions, or prohibit.<br>5. Conditions imposed (e.g. divest stores).<br>6. Merger completes; regulatory monitoring.<br><br>The CMA uses the <strong>substantial lessening of competition (SLC) test</strong>. Mergers creating combined market share above ~25&#8211;33% in a concentrated market will typically trigger scrutiny. Key remedies include divestiture (selling off parts of the combined business) and behavioural undertakings (e.g. price caps in specific regional markets).'
      }

    ]
  };

})();
