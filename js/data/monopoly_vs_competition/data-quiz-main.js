/* ============================================================
   ECONOS — Quiz content for: Monopoly vs Competition
   10 questions covering the welfare comparison, natural monopoly,
   dynamic efficiency, contestability, and competition policy.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'monopoly_vs_competition_main',
    topicId:  'monopoly_vs_competition_main',
    title:    'Monopoly vs Competition',
    subtitle: 'Theme 3.10 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions comparing monopoly and perfect competition on price, output, and welfare. Covers natural monopoly, the static vs dynamic efficiency trade-off, contestability, and CMA competition policy tools.',
    shortNames: {
      'monopoly_vs_competition_1': 'Static welfare comparison',
      'monopoly_vs_competition_2': 'Natural monopoly',
      'monopoly_vs_competition_3': 'Dynamic efficiency',
      'monopoly_vs_competition_4': 'Contestability',
      'monopoly_vs_competition_5': 'Evidence on monopoly harm',
      'monopoly_vs_competition_6': 'Competition policy tools',
      'monopoly_vs_competition_7': 'Policy effectiveness'
    },

    questions: [

      /* 1 — Elastic sort: monopoly vs perfect competition */
      { type: 'elastic_sort',
        stem: 'Sort each outcome as characteristic of <strong>monopoly</strong> or <strong>perfect competition</strong> in long-run equilibrium.',
        categories: ['mon', 'pc'],
        categoryLabels: ['Monopoly', 'Perfect competition'],
        goods: [
          { icon: '&#128200;', label: 'P &gt; MC: allocative inefficiency &#8212; some mutually beneficial trades do not take place', note: '', ans: 'mon' },
          { icon: '&#9989;', label: 'P = MC = minimum AC: both allocative and productive efficiency achieved', note: '', ans: 'pc' },
          { icon: '&#128181;', label: 'Supernormal profit persists in the long run, protected by barriers to entry', note: '', ans: 'mon' },
          { icon: '&#9651;', label: 'Deadweight welfare loss triangle: welfare destroyed by output restriction', note: '', ans: 'mon' },
          { icon: '&#128202;', label: 'Free entry erodes supernormal profit &#8212; only normal profit in long run', note: '', ans: 'pc' },
          { icon: '&#128683;', label: 'No competitive pressure &#8212; X-inefficiency and management slack may arise', note: '', ans: 'mon' }
        ],
        exp: '<strong>Monopoly</strong> features: P &gt; MC (allocative inefficiency), persistent supernormal profit (barriers block entry), DWL triangle (welfare destroyed), and X-inefficiency risk (no competitive discipline). <strong>Perfect competition</strong> features: P = MC (allocative efficiency), P = min AC (productive efficiency), normal profit in the long run (free entry erodes supernormal profit). These comparisons form the standard framework for welfare analysis in essays &#8212; the DWL triangle is the definitive measure of static welfare loss from monopoly.'
      },

      /* 2 — MCQ: Schumpeter inverted-U */
      { type: 'mcq',
        stem: 'The <strong>inverted-U hypothesis</strong> (Aghion et al.) on innovation and market structure suggests that:',
        opts: [
          'Innovation is highest at intermediate levels of market concentration &#8212; very competitive and very concentrated markets both generate less innovation',
          'Innovation increases monotonically with market concentration &#8212; monopoly generates the most innovation',
          'Innovation is highest in perfectly competitive markets because competitive pressure forces continuous product improvement',
          'There is no systematic relationship between market structure and innovation &#8212; the hypothesis has been entirely discredited'
        ],
        ans: 0,
        exp: 'The <strong>inverted-U hypothesis</strong> (Aghion, Bloom, Blundell et al., 2005) proposes that innovation peaks at intermediate concentration. The reasoning: in very competitive markets (low concentration), firms have no supernormal profit to fund R&D. In very concentrated markets (monopoly), firms face no competitive pressure to innovate &#8212; they can rest on their position. At intermediate levels (oligopoly with some competitive pressure), firms have both the <em>funding</em> and the <em>incentive</em> to innovate. This provides empirical nuance to the Schumpeter hypothesis and is a sophisticated evaluation point &#8212; the optimal structure for innovation may be oligopoly rather than either extreme.'
      },

      /* 3 — Diagram interpretation: natural monopoly */
      { type: 'diagram_interp',
        stem: 'A natural monopoly faces continuously falling long-run average cost (LRAC) as output increases across the relevant market scale.',
        svg: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="270" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="270" x2="400" y2="270" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">P</text><text x="398" y="288" fill="#0B1426" font-size="12" font-weight="700">Q</text><path d="M 80 60 Q 200 200 380 240" fill="none" stroke="#EC2D68" stroke-width="2.5"/><text x="383" y="240" fill="#EC2D68" font-size="11" font-weight="700">LRAC</text><line x1="80" y1="240" x2="380" y2="240" stroke="#1FB574" stroke-width="2" stroke-dasharray="5,4"/><text x="383" y="240" fill="#1FB574" font-size="11" font-weight="700"></text><line x1="80" y1="50" x2="360" y2="260" stroke="#2563EB" stroke-width="2.5"/><text x="363" y="260" fill="#2563EB" font-size="12" font-weight="700">D</text><line x1="220" y1="90" x2="220" y2="270" stroke="#F5B800" stroke-width="1.5" stroke-dasharray="4,3"/><text x="220" y="288" fill="#F5B800" font-size="11" text-anchor="middle" font-weight="700">Q*</text><circle cx="220" cy="178" r="4" fill="#F5B800"/><line x1="55" y1="178" x2="220" y2="178" stroke="#F5B800" stroke-width="1" stroke-dasharray="4,3"/><text x="42" y="182" fill="#F5B800" font-size="11" text-anchor="end" font-weight="700">AC*</text></svg>',
        caption: 'The LRAC curve is still falling at Q*, the output needed to serve the whole market.',
        question: 'Which regulatory approach achieves <strong>allocative efficiency</strong> but requires a public subsidy to be financially viable?',
        opts: [
          'Marginal cost pricing: force P = MC. Since MC &lt; LRAC at this output, price is below average cost &#8212; the firm makes a loss and requires subsidy',
          'Average cost pricing: force P = LRAC. The firm earns normal profit, no subsidy needed, and achieves productive efficiency at Q*',
          'RPI-X price cap: cap annual price rises at RPI minus X%, maintaining private profit incentive while controlling consumer prices',
          'Nationalisation followed by setting P equal to the monopoly profit-maximising price to fund public services'
        ],
        ans: 0,
        exp: '<strong>Marginal cost pricing</strong> achieves allocative efficiency (P = MC → resources allocated to their highest-value use) but requires a subsidy in a natural monopoly. Why? Because LRAC is falling at all relevant outputs, MC &lt; AC &#8212; if the firm sets P = MC, price is below average cost and the firm makes a loss. The subsidy covers the loss. <strong>Average cost pricing</strong> (Option B) achieves financial viability (normal profit) but P &gt; MC &#8212; not fully allocatively efficient. <strong>RPI-X</strong> (Option C) preserves profit incentive, reducing the need for subsidy, but may still allow P &gt; MC. The two-part tariff is the elegant solution: a fixed standing charge recovers fixed costs, then P = MC per unit &#8212; achieves both cost recovery and allocative efficiency.'
      },

      /* 4 — Para fill: contestability */
      { type: 'para_fill',
        stem: 'Complete the paragraph explaining how contestability disciplines monopoly behaviour.',
        anchor: 'Contestability shows that market structure alone does not determine market outcomes.',
        para: 'A market is contestable if [1] and exit are both free. In such a market, even a [2] cannot sustain supernormal profit because any excess would attract [3] entry by rival firms. This threat of entry &#8212; even without actual entry occurring &#8212; forces the incumbent to price near [4] cost to deter rivals. The critical requirement for perfect contestability is that [5] costs are zero: if all investment can be fully recovered on exit, the risk asymmetry between incumbent and entrant disappears. In airline markets, aircraft can be [6] to other routes if entry on one route fails &#8212; creating near-contestable conditions on individual routes.',
        blanks: [
          { id: 1, opts: ['entry', 'pricing', 'advertising', 'innovation'], ans: 0 },
          { id: 2, opts: ['monopolist', 'price-taker', 'competitive firm', 'natural monopoly'], ans: 0 },
          { id: 3, opts: ['hit-and-run', 'predatory', 'monopolistic', 'cartel'], ans: 0 },
          { id: 4, opts: ['average', 'marginal', 'total', 'variable'], ans: 0 },
          { id: 5, opts: ['sunk', 'fixed', 'variable', 'marginal'], ans: 0 },
          { id: 6, opts: ['redeployed', 'sold cheaply', 'written off', 'regulated'], ans: 0 }
        ],
        exp: '(1) <strong>Entry</strong>: contestability requires both free entry and free exit. (2) <strong>Monopolist</strong>: even a single-firm market must price competitively if contestable. (3) <strong>Hit-and-run</strong>: the threat mechanism &#8212; enter, earn profit, exit before retaliation, with zero irrecoverable cost. (4) <strong>Average</strong>: pricing near AC ensures normal profit, which is not attractive enough to trigger entry (no supernormal profit to be gained). (5) <strong>Sunk</strong>: sunk costs (irrecoverable) create asymmetry between incumbent and entrant &#8212; zero sunk costs eliminate this asymmetry. (6) <strong>Redeployed</strong>: aircraft mobility (low sunk costs) is the classic example &#8212; planes can switch routes quickly, keeping airline route markets relatively contestable.'
      },

      /* 5 — Multi-select: when is monopoly preferable? */
      { type: 'multi_select',
        stem: 'In which circumstances might monopoly be <strong>preferable to competition</strong>, or at least tolerated without intervention?',
        opts: [
          'The market exhibits natural monopoly &#8212; LRAC is still falling at the output needed to serve the whole market',
          'The firm has 25% market share in a market with free entry and no barriers',
          'Supernormal profit funds major R&D programmes that deliver new products with significant consumer benefit (Schumpeterian dynamics)',
          'The dominant firm uses predatory pricing to maintain its position',
          'A domestic firm needs scale to compete against heavily subsidised foreign rivals in global markets',
          'The monopolist achieves cross-subsidy &#8212; profits from one segment fund socially valuable but otherwise loss-making services'
        ],
        correct: [0, 2, 4, 5],
        exp: 'Options A, C, D, and F justify tolerating monopoly under specific conditions. <strong>Natural monopoly</strong> (A): breaking it up would raise costs for all &#8212; regulate rather than fragment. <strong>Schumpeterian R&D</strong> (C): supernormal profit funds innovation that benefits consumers in the long run (pharmaceuticals, tech). <strong>Global competition</strong> (D): a domestic "champion" may need scale to compete against state-backed foreign rivals &#8212; the UK government\'s justification for allowing some concentration in sectors facing international competition. <strong>Cross-subsidy</strong> (F): Royal Mail\'s profitable urban mail subsidises the universal service obligation for rural deliveries. Option B (25% share, free entry) does not justify tolerance &#8212; free entry means the market is self-correcting. Option D describes predatory pricing &#8212; an anticompetitive strategy that should be prohibited, not tolerated.'
      },

      /* 6 — Diagnostic pair: CMA effectiveness */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Evaluate the effectiveness of the CMA in promoting competition in UK markets."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Fatima', badge: 'Candidate A',
            answer: 'The CMA has demonstrated effectiveness in several areas: blocking the Meta/Giphy acquisition (structural remedy, 2021); forcing Google to change practices in search advertising; and requiring transparency in funeral services (market investigation, 2022). Fines up to 10% of global revenue provide significant deterrence for cartels. <strong>However</strong>, three systemic limitations reduce overall effectiveness. First, <em>speed</em>: the Microsoft/Activision investigation took 18 months, during which the merger\'s competitive effects were already being felt. Fast-moving digital markets evolve faster than investigations conclude. Second, <em>global platforms</em>: firms like Google and Meta operate globally &#8212; the CMA acts nationally, creating regulatory gaps and forum shopping. Third, <em>information asymmetry</em>: firms submitting evidence to the CMA control the data; the CMA relies partly on the very firms it is investigating. The new Digital Markets Unit (DMU) with ex-ante powers (binding codes of conduct before harm occurs) addresses the speed problem but faces implementation challenges. Overall: effective at blocking large mergers; less effective at disciplining the ongoing behaviour of established tech platforms.'
          },
          { name: 'James', badge: 'Candidate B',
            answer: 'The CMA is effective because it can block mergers and fine companies. For example, it blocked some big tech mergers and investigated the funeral industry. The fines can be up to 10% of global revenue which is very large and should stop companies from breaking competition rules. However, the CMA is not always effective because investigations take a long time, so by the time they finish the market has already changed. Also, global companies like Google and Amazon operate in many countries so the CMA cannot control everything they do. In conclusion, the CMA is partially effective but faces challenges especially with large technology companies.'
          }
        ],
        ans: 0,
        exp: '<strong>Fatima</strong> gives the stronger answer. She cites specific cases with dates and outcomes (Meta/Giphy 2021, Microsoft/Activision, funeral services), identifies three named, distinct limitations with clear explanations (speed, global platforms, information asymmetry), and demonstrates knowledge of the DMU as a policy development. Her conclusion is differentiated &#8212; effective at mergers, less at platform behaviour &#8212; rather than a blanket judgement. James covers the same broad points but at a generic level: "fines are large," "investigations take long," "global companies." The absence of specific cases, named limitations, or awareness of the DMU means James accesses Level 2&#8211;3; Fatima Level 4&#8211;5.'
      },

      /* 7 — Calculation: DWL estimation */
      { type: 'calculation',
        context: 'A market has the following equilibrium data. Under <strong>perfect competition</strong>: P_c = &#163;20, Q_c = 100 units. Under <strong>monopoly</strong>: P_m = &#163;40, Q_m = 60 units. Assume the demand curve is linear and the MC curve is horizontal.',
        working: [
          'The DWL triangle lies between the monopoly output (Q_m = 60) and competitive output (Q_c = 100)',
          'The height of the triangle = P_m &#8722; P_c (difference in price) = &#163;40 &#8722; &#163;20 = &#163;20',
          'The base of the triangle = Q_c &#8722; Q_m (difference in output) = 100 &#8722; 60 = 40 units',
          'DWL = 0.5 &#215; base &#215; height = 0.5 &#215; 40 &#215; 20 = &#163;400'
        ],
        stem: 'What is the <strong>deadweight welfare loss</strong> from this monopoly?',
        opts: [
          { ped: '&#163;400', typ: 'DWL = 0.5 &#215; (Q_c &#8722; Q_m) &#215; (P_m &#8722; P_c) = 0.5 &#215; 40 &#215; 20 = &#163;400', rev: 'DWL triangle: half base times height, using output gap and price gap' },
          { ped: '&#163;800', typ: 'Computed the full rectangle (P_m &#8722; P_c) &#215; (Q_c &#8722; Q_m) instead of the triangle', rev: 'DWL is a triangle &#8212; multiply by 0.5' },
          { ped: '&#163;1,600', typ: 'Calculated the total consumer surplus loss (rectangle + triangle), not just the DWL', rev: 'Part of CS loss is transferred to the monopolist as profit &#8212; only the triangle is destroyed' },
          { ped: '&#163;200', typ: 'Used Q_m as the base instead of the output gap (Q_c &#8722; Q_m)', rev: 'The base of the DWL triangle is the output restriction: Q_c &#8722; Q_m = 40, not Q_m' }
        ],
        ans: 0,
        exp: 'The DWL triangle has: base = Q_c &#8722; Q_m = 100 &#8722; 60 = 40 units; height = P_m &#8722; P_c = &#163;40 &#8722; &#163;20 = &#163;20. DWL = 0.5 &#215; 40 &#215; 20 = <strong>&#163;400</strong>. The rectangle (P_m &#8722; P_c) &#215; Q_m = &#163;20 &#215; 60 = &#163;1,200 is the consumer surplus <em>transferred</em> to the monopolist as supernormal profit &#8212; redistribution, not destruction. Total CS loss = &#163;1,200 (transferred) + &#163;400 (destroyed) = &#163;1,600. Only the &#163;400 triangle is unambiguous welfare destruction &#8212; the &#163;1,200 transfer is a distributional concern, not an efficiency loss.'
      },

      /* 8 — Odd one out: competition policy tools */
      { type: 'odd_one_out',
        stem: 'Three of these are tools available to the CMA to address competition concerns. Which is the <strong>ODD ONE OUT</strong>?',
        items: [
          { icon: '&#9940;', label: 'Blocking a proposed merger that would substantially lessen competition', note: '' },
          { icon: '&#128203;', label: 'Requiring a dominant firm to divest (sell off) a business unit to restore competition', note: '' },
          { icon: '&#128181;', label: 'Setting the interest rate at which firms can borrow to limit corporate expansion', note: '' },
          { icon: '&#128269;', label: 'Opening a market investigation into an industry that appears not to be working well for consumers', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>setting interest rates</strong>. Interest rate policy is the responsibility of the Bank of England\'s Monetary Policy Committee (MPC) &#8212; not the CMA. The CMA\'s toolkit comprises: (1) <strong>merger control</strong> (block or conditionally approve mergers); (2) <strong>structural remedies</strong> (require divestiture to restore competition); (3) <strong>market investigations</strong> (investigate markets not working well and impose behavioural or structural remedies); (4) <strong>antitrust enforcement</strong> (investigate cartels and abuse of dominance, impose fines). The distinction between monetary policy (Bank of England) and competition policy (CMA) is a standard knowledge test.'
      },

      /* 9 — MCQ: Bertrand paradox */
      { type: 'mcq',
        stem: 'The <strong>Bertrand paradox</strong> in oligopoly theory states that:',
        opts: [
          'Two firms competing on price with identical products will drive price down to marginal cost &#8212; the competitive outcome &#8212; even with only two firms',
          'Any market with fewer than five firms will always result in prices above the competitive level due to tacit collusion',
          'Firms competing on quantity (Cournot competition) achieve the same outcome as perfect competition',
          'Market concentration (number of firms) is always a reliable predictor of price levels and consumer welfare'
        ],
        ans: 0,
        exp: 'The <strong>Bertrand paradox</strong> shows that market structure alone is an unreliable guide to competitive outcomes. With identical products and simultaneous price competition, even two firms will undercut each other until P = MC &#8212; the competitive outcome. This is "paradoxical" because we would expect two firms (duopoly) to behave like monopolists. The resolution: the form of competition matters as much as the number of competitors. Cournot (quantity) competition with two firms gives P between monopoly and competitive levels &#8212; not the competitive outcome. This is why competition policy must look at <em>conduct</em> (how firms compete) not just <em>structure</em> (number of firms).'
      },

      /* 10 — Chain: competition policy procedure */
      { type: 'chain',
        stem: 'The CMA is alerted to a proposed merger between two large UK supermarket chains. Place the steps of the CMA merger review process in the correct order.',
        items: [
          { label: 'CMA publishes final decision: approve unconditionally, approve with conditions, or block the merger', note: '' },
          { label: 'Phase 1 review: CMA assesses whether the merger raises a "realistic prospect" of substantially lessening competition (SLC)', note: '' },
          { label: 'Merging firms notify the CMA of the proposed transaction (or CMA self-initiates review)', note: '' },
          { label: 'If Phase 1 concerns found: Phase 2 investigation &#8212; in-depth independent panel review over up to 24 weeks', note: '' },
          { label: 'Remedies discussion: CMA and parties negotiate structural (divestiture) or behavioural (conditions) remedies if SLC found', note: '' },
          { label: 'Implementation: parties complete the merger, divest required assets, or appeal the decision to the Competition Appeal Tribunal', note: '' }
        ],
        correctOrder: [2, 1, 3, 4, 0, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Notification &#8212; firms inform the CMA (or CMA self-initiates).<br>2. Phase 1 review &#8212; initial screening for realistic prospect of SLC (typically 40 working days).<br>3. Phase 2 investigation &#8212; if concerns found; independent panel, deeper analysis.<br>4. Remedies discussion &#8212; if SLC confirmed; parties may offer undertakings.<br>5. Final decision &#8212; approve, approve with conditions, or block.<br>6. Implementation &#8212; completion, divestiture, or appeal.<br><br>Key facts: Phase 1 can result in clearance (no concerns), conditional clearance (undertakings accepted), or Phase 2 referral. Phase 2 is more thorough but slower. The Microsoft/Activision case illustrated that even a CMA block can be appealed and reversed &#8212; the process is not final until all appeals are exhausted.'
      }

    ]
  };

})();
