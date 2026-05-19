/* ============================================================
   ECONOS — Quiz content for: Monopoly
   10 questions covering key concepts from the monopoly topic.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'monopoly_main',
    topicId:  'monopoly_main',
    title:    'Monopoly',
    subtitle: 'Theme 3.8 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering monopoly power, the profit-maximisation diagram, deadweight welfare loss, natural monopoly, and UK competition policy. Mixed formats designed to build the analytical and evaluative skills examiners reward at A-level.',
    shortNames: {
      'monopoly_1': 'What is monopoly?',
      'monopoly_2': 'The diagram',
      'monopoly_3': 'Sources of power',
      'monopoly_4': 'Welfare analysis',
      'monopoly_5': 'Case for and against',
      'monopoly_6': 'Natural monopoly',
      'monopoly_7': 'Competition policy'
    },

    questions: [

      /* 1 — MCQ: definition of monopoly */
      { type: 'mcq',
        stem: 'The Competition and Markets Authority (CMA) uses a market share threshold to identify "monopoly position" in the UK. What is this threshold?',
        opts: [
          '25% market share',
          '50% market share',
          '75% market share',
          '10% market share'
        ],
        ans: 0,
        exp: 'The CMA (and previously the OFT) uses <strong>25% market share</strong> as the indicative threshold for monopoly position under UK competition law. This does not mean that a firm with 25% automatically has monopoly power — it triggers scrutiny. A firm with 90% share has far more power, but the 25% threshold is the legal trigger. In contrast, EU competition law uses "dominant position" (typically 40%+) as the threshold for abuse concerns. The difference matters: UK law casts a wider net, allowing investigation of less concentrated markets.'
      },

      /* 2 — Elastic sort: monopoly vs perfect competition outcomes */
      { type: 'elastic_sort',
        stem: 'Sort each statement into the correct market structure outcome: <strong>monopoly</strong> or <strong>perfect competition</strong>.',
        categories: ['mon', 'pc'],
        categoryLabels: ['Monopoly', 'Perfect competition'],
        goods: [
          { icon: '&#128200;', label: 'Price exceeds marginal cost in long-run equilibrium', note: '', ans: 'mon' },
          { icon: '&#128202;', label: 'Firms earn only normal profit in the long run', note: '', ans: 'pc' },
          { icon: '&#9651;', label: 'A deadweight welfare loss triangle exists at equilibrium', note: '', ans: 'mon' },
          { icon: '&#127968;', label: 'Price equals minimum average cost in long-run equilibrium', note: '', ans: 'pc' },
          { icon: '&#128181;', label: 'Supernormal profit can persist in the long run due to barriers to entry', note: '', ans: 'mon' },
          { icon: '&#9989;', label: 'Allocative efficiency is achieved: P = MC', note: '', ans: 'pc' }
        ],
        exp: '<strong>Monopoly</strong> outcomes: P &gt; MC (allocative inefficiency), persistent supernormal profit (barriers block entry), and a DWL triangle (lost welfare between competitive and monopoly output). <strong>Perfect competition</strong> outcomes: P = MC (allocative efficiency), P = min AC (productive efficiency), normal profit in the long run (free entry erodes supernormal profit). The key differentiator is barriers to entry &#8212; monopoly sustains supernormal profit precisely because rivals cannot enter and compete it away.'
      },

      /* 3 — Diagram interpretation: profit-max diagram */
      { type: 'diagram_interp',
        stem: 'A monopolist faces a downward-sloping demand (AR) curve with a corresponding MR curve below it. The MC and AC curves are also shown.',
        svg: '<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="290" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="290" x2="400" y2="290" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">P</text><text x="398" y="308" fill="#0B1426" font-size="12" font-weight="700">Q</text><line x1="80" y1="50" x2="360" y2="280" stroke="#2563EB" stroke-width="2.5"/><text x="365" y="280" fill="#2563EB" font-size="12" font-weight="700">AR=D</text><line x1="80" y1="50" x2="220" y2="280" stroke="#2563EB" stroke-width="2" stroke-dasharray="5,4"/><text x="225" y="280" fill="#2563EB" font-size="11" font-weight="700">MR</text><line x1="80" y1="260" x2="360" y2="130" stroke="#1FB574" stroke-width="2.5"/><text x="363" y="130" fill="#1FB574" font-size="12" font-weight="700">MC</text><path d="M 80 230 Q 170 170 220 165 Q 280 163 360 180" fill="none" stroke="#EC2D68" stroke-width="2.5"/><text x="363" y="180" fill="#EC2D68" font-size="12" font-weight="700">AC</text><line x1="190" y1="185" x2="190" y2="290" stroke="#F5B800" stroke-width="1.5" stroke-dasharray="4,3"/><text x="190" y="308" fill="#F5B800" font-size="11" text-anchor="middle" font-weight="700">Q*</text><circle cx="190" cy="185" r="4" fill="#F5B800"/><line x1="55" y1="140" x2="190" y2="140" stroke="#0B1426" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/><text x="42" y="144" fill="#0B1426" font-size="11" text-anchor="end" font-weight="700">P*</text><line x1="55" y1="185" x2="190" y2="185" stroke="#EC2D68" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/><text x="42" y="189" fill="#EC2D68" font-size="11" text-anchor="end" font-weight="700">AC*</text></svg>',
        caption: 'The monopolist profit-maximises at Q*, where MR = MC. P* is read off the demand curve; AC* is average cost at Q*.',
        question: 'Which statement correctly identifies where supernormal profit is shown on this diagram?',
        opts: [
          'The rectangle between P* (on the price axis) and AC* (on the price axis), multiplied by output Q* &#8212; the area (P* &#8722; AC*) &#215; Q*',
          'The triangle between the demand curve, the MC curve, and the vertical axis &#8212; this represents consumer surplus lost to the monopolist',
          'The area below the MC curve up to Q* &#8212; representing total variable costs avoided by restricting output',
          'The distance between MR and MC at Q* &#8212; this gap equals the profit per unit'
        ],
        ans: 0,
        exp: '<strong>Supernormal profit</strong> is the rectangle (P* &#8722; AC*) &#215; Q*. P* is read off the demand curve at Q* (the price charged); AC* is the average cost at Q*. The height of the rectangle is (P* &#8722; AC*) = profit per unit; the width is Q* = units sold. This rectangle lies above AC and below P* in the diagram. Common error: reading AC off the minimum of the AC curve rather than at Q* &#8212; the vertical distance between P* and the AC curve at Q* gives profit per unit, not the distance to minimum AC.'
      },

      /* 4 — Para fill: welfare loss */
      { type: 'para_fill',
        stem: 'Complete the paragraph about monopoly welfare analysis by selecting the correct word or phrase for each blank.',
        anchor: 'The welfare cost of monopoly arises from restricted output and elevated prices.',
        para: 'A monopolist maximises profit where [1] equals marginal cost, then charges the price indicated by the [2] curve at that output. Because price exceeds MC, the market is [3] inefficient &#8212; fewer goods are produced than the socially optimal quantity. The welfare loss is represented by a [4] bounded by the demand curve and the MC curve between the monopoly output and the [5] output. Part of the lost consumer surplus is [6] to the producer as supernormal profit; the remainder is the true [7] welfare loss that accrues to neither party.',
        blanks: [
          { id: 1, opts: ['marginal revenue', 'average revenue', 'average cost', 'total revenue'], ans: 0 },
          { id: 2, opts: ['demand (AR)', 'MR', 'MC', 'AC'], ans: 0 },
          { id: 3, opts: ['allocatively', 'productively', 'dynamically', 'technically'], ans: 0 },
          { id: 4, opts: ['triangle', 'rectangle', 'trapezium', 'circle'], ans: 0 },
          { id: 5, opts: ['competitive', 'monopoly', 'minimum AC', 'zero-profit'], ans: 0 },
          { id: 6, opts: ['transferred', 'destroyed', 'taxed', 'regulated away'], ans: 0 },
          { id: 7, opts: ['deadweight', 'consumer', 'producer', 'social'], ans: 0 }
        ],
        exp: '(1) <strong>Marginal revenue</strong>: the monopolist sets MR = MC to maximise profit. (2) <strong>Demand (AR)</strong>: price is read off the demand curve at Q*. (3) <strong>Allocatively</strong>: P &gt; MC means the last unit is worth more to consumers than it costs to produce &#8212; the market under-produces. (4) <strong>Triangle</strong>: the DWL is the classic triangle between the competitive and monopoly equilibria. (5) <strong>Competitive</strong>: the competitive output is where MC = Demand. (6) <strong>Transferred</strong>: the rectangle between monopoly and competitive price, up to Q*, is transferred to the producer as supernormal profit &#8212; redistribution, not destruction. (7) <strong>Deadweight</strong>: the triangle is unambiguous welfare destruction &#8212; neither consumer nor producer captures this surplus.'
      },

      /* 5 — Multi-select: sources of monopoly power */
      { type: 'multi_select',
        stem: 'Which of the following are recognised <strong>barriers to entry</strong> that can sustain monopoly power?',
        opts: [
          'Economies of scale that allow the incumbent to undercut potential entrants on cost',
          'A 20-year patent on a pharmaceutical drug',
          'A low and falling price charged by the incumbent firm',
          'Network effects making a platform more valuable to users than any new rival',
          'High sunk costs in specialist equipment or R&D that cannot be recovered on exit',
          'A homogeneous product with no brand differentiation'
        ],
        correct: [0, 1, 3, 4],
        exp: 'Options A, B, D, and E are recognised barriers to entry. <strong>Scale economies</strong> mean entrants face higher unit costs until they reach scale &#8212; a structural barrier. A <strong>patent</strong> is a legal barrier granting 20 years of exclusive rights. <strong>Network effects</strong> mean the incumbent platform is intrinsically more valuable (WhatsApp, LinkedIn) &#8212; an almost insurmountable incumbent advantage. <strong>High sunk costs</strong> deter entry because if the entrant fails, irrecoverable spending is lost &#8212; the risk asymmetry (incumbent has already paid) favours the incumbent. Option C (low prices) is not a barrier &#8212; if anything, low prices reduce the incentive to enter. Option F (homogeneous product) describes a feature, not a barrier; without other barriers it enables easier entry and competition.'
      },

      /* 6 — Diagnostic pair: evaluating monopoly */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Assess the view that monopoly is always harmful to consumers and society."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Priya', badge: 'Candidate A',
            answer: 'Monopoly causes static welfare losses: the monopolist restricts output below the competitive level and charges P &gt; MC, creating a deadweight welfare loss (DWL triangle) and transferring consumer surplus to the producer. X-inefficiency may also arise &#8212; without competitive pressure, management slack raises costs above the minimum. However, "always harmful" overstates the case. <strong>Natural monopoly</strong> is the key counterargument: where LRAC is still falling at market output, a single firm produces at lower unit cost than fragmented competition &#8212; regulation (RPI-X cap) can capture these economies while preventing exploitation. The <strong>Schumpeterian</strong> argument also applies: in pharmaceuticals and tech, supernormal profits fund R&D, generating dynamic efficiency gains that can exceed the static DWL. The appropriate conclusion is industry-specific: in water/rail infrastructure, regulated monopoly is optimal; in retail or professional services, competition is clearly preferable. "Always harmful" is therefore an overstatement.'
          },
          { name: 'Ben', badge: 'Candidate B',
            answer: 'Monopoly is bad for consumers because monopolists charge high prices and produce less output than competitive firms. This means consumers have fewer choices and pay more. The monopolist makes supernormal profits which is unfair. Monopoly also reduces innovation because the firm does not need to innovate to survive. However, some monopolies are natural monopolies, like water companies, where having one firm is cheaper. Also, patents allow monopolies to exist in order to encourage firms to invent new drugs. So monopoly is not always bad. The government can regulate monopolies through the CMA to stop them from abusing their position.'
          }
        ],
        ans: 0,
        exp: '<strong>Priya</strong> gives the stronger answer. She applies precise terminology (DWL, P &gt; MC, X-inefficiency, natural monopoly, Schumpeterian dynamic efficiency) and structures the evaluation around the word "always" &#8212; directly engaging with the claim. Her counter-arguments are specific (LRAC still falling, RPI-X regulation, pharmaceutical R&D) and she concludes with a context-dependent judgement. Ben identifies the same broad ideas but at a descriptive level &#8212; "high prices," "unfair," "does not need to innovate" &#8212; without the analytical framework (diagrams, efficiency criteria, formal models). Ben accesses Level 2&#8211;3; Priya Level 4. The phrase "industry-specific" in Priya\'s conclusion is exactly the kind of qualified evaluative judgement that earns the highest marks.'
      },

      /* 7 — Calculation: monopoly profit */
      { type: 'calculation',
        context: 'A monopolist faces demand: P = 100 &#8722; 2Q. Its marginal cost is constant at MC = 20. Fixed costs are &#163;400.',
        working: [
          'Step 1: find MR from the demand function',
          'TR = P &#215; Q = (100 &#8722; 2Q)Q = 100Q &#8722; 2Q&#178;',
          'MR = dTR/dQ = 100 &#8722; 4Q',
          'Step 2: set MR = MC',
          '100 &#8722; 4Q = 20 → 4Q = 80 → Q* = 20',
          'Step 3: find P*',
          'P* = 100 &#8722; 2(20) = 100 &#8722; 40 = &#163;60',
          'Step 4: calculate profit',
          'TR = 60 &#215; 20 = &#163;1,200',
          'TC = (MC &#215; Q) + FC = (20 &#215; 20) + 400 = 400 + 400 = &#163;800',
          'Supernormal profit = TR &#8722; TC = 1,200 &#8722; 800 = &#163;400'
        ],
        stem: 'What is the monopolist&#8217;s <strong>supernormal profit</strong> at the profit-maximising output?',
        opts: [
          { ped: '&#163;400', typ: 'Set MR = MC: Q* = 20, P* = &#163;60. TR = &#163;1,200. TC = &#163;800. Profit = &#163;400.', rev: 'Apply MR = MC to find Q*, read P* from demand, subtract TC from TR' },
          { ped: '&#163;800', typ: 'Calculated TR = &#163;1,200 but used MC only (not FC) for total cost', rev: 'Total cost includes both variable costs (MC &#215; Q = &#163;400) and fixed costs (&#163;400)' },
          { ped: '&#163;1,200', typ: 'Reported total revenue rather than profit', rev: 'Profit = TR &#8722; TC, not TR alone' },
          { ped: '&#163;1,600', typ: 'Used competitive output (Q = 40) rather than profit-maximising output Q* = 20', rev: 'Monopolist sets MR = MC, not P = MC' }
        ],
        ans: 0,
        exp: 'Setting MR = MC: 100 &#8722; 4Q = 20 → Q* = 20. Price from demand: P* = 100 &#8722; 2(20) = <strong>&#163;60</strong>. TR = 60 &#215; 20 = &#163;1,200. Variable costs = MC &#215; Q = 20 &#215; 20 = &#163;400. Total cost = &#163;400 (VC) + &#163;400 (FC) = &#163;800. Supernormal profit = &#163;1,200 &#8722; &#163;800 = <strong>&#163;400</strong>. Note: the competitive output would be where P = MC: 100 &#8722; 2Q = 20 → Q_c = 40. Restricting output from 40 to 20 is the source of the DWL &#8212; and of the supernormal profit.'
      },

      /* 8 — Odd one out: natural monopoly */
      { type: 'odd_one_out',
        stem: 'Three of these are examples of <strong>natural monopoly</strong> in the UK. Which is the <strong>ODD ONE OUT</strong>?',
        items: [
          { icon: '&#128167;', label: 'Thames Water &#8212; water distribution infrastructure across London', note: '' },
          { icon: '&#9889;', label: 'National Grid &#8212; electricity transmission network', note: '' },
          { icon: '&#128663;', label: 'Tesco &#8212; largest UK grocery supermarket chain', note: '' },
          { icon: '&#128641;', label: 'Network Rail &#8212; UK railway infrastructure', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>Tesco</strong>. While Tesco has a large market share (approximately 27%), grocery retail is <em>not</em> a natural monopoly &#8212; there are four major supermarket chains (Tesco, Sainsbury\'s, Asda, Morrisons) competing, plus discounters (Aldi, Lidl). Grocery retail does not exhibit continuously falling LRAC at the market scale. By contrast, <strong>Thames Water, National Grid, and Network Rail</strong> are genuine natural monopolies &#8212; the fixed infrastructure costs of water pipes, electricity pylons, and railway track are so high that duplicating them would be deeply inefficient. Each has LRAC still falling at the relevant market scale &#8212; hence regulated monopoly, not competition, is the appropriate structure.'
      },

      /* 9 — Data table: CMA cases */
      { type: 'data_table',
        stem: 'The table shows selected CMA competition enforcement cases.',
        headers: ['Year', 'Case', 'Finding', 'Remedy'],
        rows: [
          ['2021', 'Meta / Giphy acquisition', 'Would harm competition in display advertising', 'Full divestiture required'],
          ['2022', 'Funeral services market', 'At-need funeral prices 40% above competitive level', 'Price transparency requirements'],
          ['2023', 'Microsoft / Activision', 'Would harm cloud gaming competition', 'Initially blocked; later approved with cloud conditions'],
          ['2024', 'Google search', 'Strategic Market Status investigation opened', 'Conduct requirements pending']
        ],
        question: 'Which interpretation of the CMA cases is most consistent with the data?',
        opts: [
          'The CMA uses a range of remedies &#8212; from structural divestiture to behavioural conditions &#8212; depending on the nature of the competition concern, and has become more active in digital markets',
          'All CMA cases result in full divestiture &#8212; the CMA always prefers structural remedies regardless of the type of competition harm',
          'The CMA only investigates mergers and never investigates the behaviour of existing dominant firms in markets',
          'The CMA blocked all four cases outright, demonstrating that UK competition policy consistently prevents market concentration'
        ],
        ans: 0,
        exp: 'The table shows a diverse range of remedies: full divestiture (Meta/Giphy), behavioural requirements (funeral services transparency, cloud gaming conditions), and ongoing investigation (Google). This supports Option A &#8212; the CMA deploys different tools depending on the harm identified. Option B is wrong: the Microsoft/Activision case shows the CMA approved the deal with conditions (not full divestiture). Option C is wrong: the funeral services case is a market investigation (not a merger). Option D is wrong: two of the four cases resulted in conditional approval, not outright blocks. The growing presence of digital markets (Meta, Microsoft, Google) in recent CMA caseload reflects the shift towards ex-ante digital regulation.'
      },

      /* 10 — Chain: monopoly welfare transmission */
      { type: 'chain',
        stem: 'A firm gains monopoly through a patent on a breakthrough product. Place the events in the correct logical order from initial acquisition of monopoly power to the long-run outcome.',
        items: [
          { label: 'Consumer surplus falls; a deadweight welfare loss triangle emerges', note: '' },
          { label: 'Patent expires; generic rivals enter the market', note: '' },
          { label: 'Firm restricts output below the competitive level to maximise profit (MR = MC)', note: '' },
          { label: 'Firm acquires monopoly power through a patent on a new product', note: '' },
          { label: 'Price falls towards competitive level; supernormal profit is competed away', note: '' },
          { label: 'Firm sets price above MC using its market power; supernormal profit accrues', note: '' }
        ],
        correctOrder: [3, 2, 5, 0, 1, 4],
        exp: '<strong>The correct sequence:</strong><br>1. Patent acquired &#8212; legal barrier creates monopoly position.<br>2. Firm restricts output (MR = MC) &#8212; profit-maximising rule applied.<br>3. Price set above MC &#8212; supernormal profit extracted.<br>4. Consumer surplus lost; DWL triangle created &#8212; welfare cost of monopoly.<br>5. Patent expires &#8212; legal barrier removed; generic entry becomes possible.<br>6. Price falls; supernormal profit competed away &#8212; long-run outcome post-patent.<br><br>This sequence captures the life cycle of a patent monopoly &#8212; the temporary welfare cost (steps 2&#8211;4) is the price society pays for the innovation incentive provided by the patent system. After expiry (steps 5&#8211;6), competitive entry restores efficiency. This is why competition economists evaluate patents by weighing static welfare loss against dynamic innovation gains.'
      }

    ]
  };

})();
