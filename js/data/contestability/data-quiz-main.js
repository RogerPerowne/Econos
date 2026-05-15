/* ============================================================
   ECONOS — Quiz content for: Contestable Markets
   10 questions covering sunk costs, hit-and-run entry,
   perfectly contestable vs non-contestable markets, incumbent
   responses, real-world examples, and evaluation.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'contestability_main',
    topicId:  'contestability_main',
    title:    'Contestable Markets',
    subtitle: 'Theme 3.17 · Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering the contestability framework, sunk costs as the key variable, hit-and-run entry mechanics, incumbent entry-deterrence strategies, real-world approximations from airlines to pharmaceuticals, and evaluation of the theory\'s policy implications. Designed to sharpen the analysis and evaluation marks Edexcel rewards.',
    shortNames: {
      'theory':     'Contestability theory',
      'sunk':       'Sunk costs',
      'hitrun':     'Hit-and-run entry',
      'incumbent':  'Incumbent responses',
      'examples':   'Real-world cases',
      'evaluation': 'Evaluating contestability'
    },

    questions: [

      /* 1 — mcq: definition */
      { type: 'mcq',
        stem: 'Which condition is the <strong>most fundamental</strong> requirement for a perfectly contestable market?',
        opts: [
          'Zero sunk costs — all costs can be recovered on exit, making entry and exit completely free',
          'A large number of firms so that no single firm has market power',
          'Homogeneous products so that consumers are indifferent between suppliers',
          'Government regulation preventing incumbent firms from raising prices above a competitive level'
        ],
        ans: 0,
        exp: '<strong>Zero sunk costs</strong> is the defining condition of perfect contestability (Baumol, 1982). Sunk costs — costs that are lost on exit — create an asymmetry between incumbents (who have already paid) and potential entrants (who must risk committing them). If sunk costs are zero, any firm can enter, compete, and exit without loss — hit-and-run entry becomes feasible. This disciplines incumbent pricing even with just one firm. Option B (many firms) is the structural approach of traditional industrial economics, which contestability explicitly challenges. Options C and D are also not necessary — contestability can discipline even a monopolist supplying a unique product without external regulation.'
      },

      /* 2 — elastic_sort: sunk vs recoverable costs */
      { type: 'elastic_sort',
        stem: 'Classify each cost as a <strong>sunk cost</strong> (reduces contestability) or a <strong>recoverable cost</strong> (does NOT reduce contestability).',
        categories: ['sunk', 'recoverable'],
        categoryLabels: ['Sunk cost (reduces contestability)', 'Recoverable cost (does not reduce contestability)'],
        goods: [
          { icon: '✈️', label: 'Aircraft purchased to serve a specific route — can be redeployed to any other route if the airline exits', note: '', ans: 'recoverable' },
          { icon: '💊', label: 'Pharmaceutical clinical trials costing &#163;800m to gain regulatory approval for a new drug', note: '', ans: 'sunk' },
          { icon: '🏢', label: 'Office space rented on a short-term lease that can be sub-let if the firm leaves the market', note: '', ans: 'recoverable' },
          { icon: '📡', label: 'Mobile network mast infrastructure built specifically for a regional licence area', note: '', ans: 'sunk' },
          { icon: '🚗', label: 'Fleet of standard vehicles used by a courier firm — resaleable at market value on exit', note: '', ans: 'recoverable' },
          { icon: '📢', label: 'Multi-year brand advertising campaign costing &#163;50m — benefits lost if firm exits the market', note: '', ans: 'sunk' }
        ],
        exp: '<strong>Sunk costs</strong> are irrecoverable on exit — they create an asymmetry that deters entry. Clinical trial costs, mobile mast infrastructure, and brand advertising are all sunk once committed — if the firm exits, these costs are lost. <strong>Recoverable costs</strong> do not deter entry because they can be recouped on exit. Aircraft can be redeployed (key to airline route contestability — Ryanair\'s expansion depended on this). Rented offices can be sub-let. Standard vehicles can be sold. The critical distinction: it is not the SIZE of the cost but whether it is RECOVERABLE. A &#163;100m investment in redeployable aircraft is a recoverable cost; a &#163;1m drug approval cost is sunk. Sunk costs alone determine contestability.'
      },

      /* 3 — chain: hit-and-run entry sequence */
      { type: 'chain',
        stem: 'A perfectly contestable market has one incumbent earning supernormal profit. Place the hit-and-run entry sequence in the correct order.',
        items: [
          { label: 'Entrant exits before the incumbent can react — all costs recoverable, no loss incurred', note: '' },
          { label: 'Potential entrant observes supernormal profit and calculates that entry is profitable (P > AC)', note: '' },
          { label: 'Incumbent earns supernormal profit by pricing above AC', note: '' },
          { label: 'Entrant enters, undercuts the incumbent\'s price, and earns profit during the window of opportunity', note: '' },
          { label: 'Incumbent is forced to lower price to AC (normal profit) to prevent repeated hit-and-run entry', note: '' },
          { label: 'Entry is costless (zero sunk costs), so the risk of entry is zero', note: '' }
        ],
        correctOrder: [2, 1, 5, 3, 0, 4],
        exp: '<strong>Correct sequence:</strong><br>1. Incumbent prices above AC, earning supernormal profit.<br>2. Potential entrant spots the opportunity (P > AC).<br>3. Zero sunk costs means the risk of entry is zero — no capital at stake.<br>4. Entrant enters and undercuts, earning profit during the window.<br>5. Entrant exits before incumbent can retaliate — all costs recovered.<br>6. Incumbent is disciplined to price at AC to prevent future hit-and-run.<br><br>The key mechanism: <em>the threat of entry</em>, not actual entry, disciplines the incumbent. In equilibrium, hit-and-run entry never actually occurs because the rational incumbent pre-empts it by pricing at P = AC. This is why perfectly contestable markets produce the competitive outcome even with a single firm — the threat is self-enforcing.'
      },

      /* 4 — diagnostic_pair: evaluating a market's contestability */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Assess whether the UK commercial aviation market is contestable."</em> Which student gives the stronger answer?',
        students: [
          { name: 'Sofia', badge: 'Candidate A',
            answer: 'UK aviation has elements of both high and low contestability. <strong>High contestability</strong>: aircraft are highly mobile assets — an airline can redeploy a plane from Manchester–Madrid to London–Amsterdam at low incremental cost. Entry to new routes (e.g., easyJet entering a Ryanair route) involves minimal sunk costs because the asset (aircraft) is recoverable. This mobile asset contestability explains the proliferation of budget carriers on European routes. <strong>Low contestability</strong>: Heathrow and Gatwick airport <strong>slots</strong> are scarce and trade at &#163;50m+ per pair. An entrant wanting to serve Heathrow must acquire slots — these involve large sunk costs (slots must be surrendered on exit at lower value, or if market falls). So the <em>route market</em> is contestable but the <em>slot market</em> is not. Policy implication: competition authorities should regulate slot allocation separately from route entry. Using one contestability verdict for the whole aviation market is analytically imprecise.'
          },
          { name: 'Leo', badge: 'Candidate B',
            answer: 'The UK aviation market has some contestability. Airlines can enter new routes if they have aircraft available, and budget airlines like Ryanair and easyJet have shown that entry is possible on many routes. However, contestability is limited because airports like Heathrow are very congested and slots are difficult to obtain. New entrants would also need to invest in brand advertising to attract passengers. The market is dominated by a few large airlines, which suggests limited competition. Overall, the market is partially contestable — it is easier to enter some routes than others, and the availability of airport slots is the main barrier to contestability for routes serving major airports.'
          }
        ],
        ans: 0,
        exp: '<strong>Sofia</strong> gives the stronger answer. She makes the precise analytical distinction between route contestability (high — aircraft are mobile) and slot contestability (low — slots are sunk commitments). This shows deep understanding of the theory: contestability is asset-specific, not industry-wide. She uses specific evidence (&#163;50m slot prices, easyJet/Ryanair examples) and derives a policy implication. Leo identifies the same factors but without the analytical framework — he notes slots are hard to obtain and that the market is "partially contestable" but does not deploy the sunk cost framework to explain WHY. Sofia accesses Level 4; Leo Level 2–3. The slot-route distinction is the kind of nuanced application examiners reward with top marks.'
      },

      /* 5 — multi_select: incumbent responses */
      { type: 'multi_select',
        stem: 'Which of the following are legitimate strategies an incumbent firm might use to <strong>deter entry</strong> by exploiting contestability concerns? Select all that apply.',
        opts: [
          'Investing in excess capacity to credibly threaten flooding the market with output if an entrant appears',
          'Adopting limit pricing — setting price just below the level at which a potential entrant could profitably enter',
          'Using most-favoured-nation clauses in supplier contracts to lock up key inputs before a rival can access them',
          'Reducing price aggressively and temporarily (predatory pricing) once an entrant appears, to force exit',
          'Investing heavily in product quality improvements to generate genuine consumer loyalty',
          'Forming a cartel with potential entrants to share the market and prevent entry'
        ],
        correct: [0, 1, 2, 3],
        exp: 'Options A–D are entry-deterrence strategies related to contestability. (A) <strong>Excess capacity</strong>: makes the threat of output flooding credible — rational entrant anticipates post-entry price war and stays out. (B) <strong>Limit pricing</strong>: pricing below the short-run profit-maximising level to remove the profit opportunity that would attract entry. (C) <strong>MFN supply contracts</strong>: lock up inputs, raising potential entrants\' costs — reduces the entrant\'s ability to achieve the same cost structure as the incumbent. (D) <strong>Predatory pricing</strong>: once entry occurs, below-cost pricing to force exit — not a deterrent per se but a post-entry response. Option E (genuine quality improvement) is legitimate competitive behaviour, not strategic entry deterrence. Option F (cartel with entrants) is illegal under competition law — this would violate the Competition Act 1998.'
      },

      /* 6 — mcq: contestability and competition policy */
      { type: 'mcq',
        stem: 'Contestability theory implies that competition policy should focus primarily on:',
        opts: [
          'Reducing sunk costs through infrastructure sharing, open access mandates, and redeployable asset rules — increasing the credibility of entry threats',
          'Breaking up large firms to reduce market concentration — more firms means more competition',
          'Setting price caps on dominant firms — direct price regulation ensures consumer-facing prices are competitive',
          'Banning mergers in all concentrated industries to prevent firms gaining market power'
        ],
        ans: 0,
        exp: 'Contestability theory\'s central policy implication is to <strong>reduce sunk costs</strong> to increase the credibility of entry threats. If entry is costless, even a monopolist must price competitively. Examples: <strong>BT Openreach</strong> (mandated open access to fibre infrastructure reduces sunk costs for broadband ISPs — Ofcom/CMA policy directly informed by contestability); <strong>MVNOs</strong> (Mobile Virtual Network Operators access incumbent mobile networks without building infrastructure — reduces sunk costs, increases market contestability). Option B (breaking up firms) is the structural approach that contestability explicitly challenged — structure alone does not determine performance. Option C (price caps) is direct regulation that creates its own distortions. Option D (banning mergers) is also a structural remedy that contestability theory suggests may be unnecessary in markets with low sunk costs.'
      },

      /* 7 — odd_one_out: real-world contestability */
      { type: 'odd_one_out',
        stem: 'Three of these markets display <strong>high contestability</strong>. Which is the ODD ONE OUT?',
        items: [
          { icon: '🛵', label: 'Deliveroo food delivery: riders and app technology are easily redeployable; new platforms enter with no specialist physical assets', note: '' },
          { icon: '✈️', label: 'Ryanair adding a new European route: aircraft can be redirected from any existing route at low incremental cost', note: '' },
          { icon: '⚛️', label: 'Nuclear power station construction: &#163;20bn+ plant costs are almost entirely sunk once construction begins', note: '' },
          { icon: '💻', label: 'Online retail entry: no specialist physical infrastructure required; a new retailer can enter and exit without large sunk commitments', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>nuclear power station construction</strong>. This market has extremely low contestability — the &#163;20bn+ construction cost is almost entirely sunk (specialist plant, site preparation, regulatory approval, decommissioning liability). No firm can enter, compete briefly, and exit without catastrophic losses. The other three have high contestability: food delivery apps deploy standard technology and no specialist assets; Ryanair routes use redeployable aircraft; online retail requires no specialist physical sunk costs. The nuclear sector is a natural case for price regulation or public ownership rather than reliance on market competition — because the market cannot be made contestable by any reasonable policy intervention. This illustrates why industry-by-industry sunk cost analysis is the correct approach in competition policy.'
      },

      /* 8 — para_fill: sunk costs and contestability */
      { type: 'para_fill',
        stem: 'Complete the analytical paragraph by selecting the correct word or phrase for each numbered blank.',
        anchor: 'Sunk costs are the primary determinant of market contestability.',
        para: 'A market is perfectly contestable when entry and [1] are costless — that is, when sunk costs are [2]. In such a market, the threat of [3] entry disciplines the incumbent to price at [4] even if it is the only firm in the market. Potential entrants face no [5] of committing capital that would be lost on exit. The key implication for competition policy is that market [6] alone does not determine whether prices are [7] — a monopoly in a perfectly contestable market produces the same outcome as perfect [8].',
        blanks: [
          { id: 1, opts: ['exit', 'growth', 'innovation', 'regulation'], ans: 0 },
          { id: 2, opts: ['zero', 'very high', 'equal to fixed costs', 'sunk'], ans: 0 },
          { id: 3, opts: ['hit-and-run', 'predatory', 'regulated', 'sequential'], ans: 0 },
          { id: 4, opts: ['AC (normal profit)', 'MC (allocative efficiency)', 'above AC', 'below MC'], ans: 0 },
          { id: 5, opts: ['risk', 'incentive', 'legal right', 'obligation'], ans: 0 },
          { id: 6, opts: ['structure (concentration)', 'behaviour', 'regulation', 'technology'], ans: 0 },
          { id: 7, opts: ['competitive', 'falling', 'regulated', 'rising'], ans: 0 },
          { id: 8, opts: ['competition', 'monopoly', 'oligopoly', 'regulation'], ans: 0 }
        ],
        exp: '(1) <strong>Exit</strong>: contestability requires costless exit — the ability to leave without losing capital. (2) <strong>Zero</strong>: zero sunk costs is the defining condition. (3) <strong>Hit-and-run</strong>: the specific mechanism — enter, earn profit, exit before retaliation. (4) <strong>AC (normal profit)</strong>: any supernormal profit invites immediate entry; P = AC is the only sustainable price. (5) <strong>Risk</strong>: zero sunk costs means no capital at risk — the entrant loses nothing if the entry is unsuccessful. (6) <strong>Structure (concentration)</strong>: contestability challenges the traditional structure → performance view. (7) <strong>Competitive</strong>: even a monopoly prices competitively if the market is perfectly contestable. (8) <strong>Competition</strong>: the perfectly contestable market produces the competitive outcome — both allocatively and productively efficient — despite having only one firm.'
      },

      /* 9 — data_table: comparing contestability */
      { type: 'data_table',
        stem: 'The table compares characteristics of four UK industries on contestability criteria.',
        headers: ['Industry', 'Sunk costs', 'Entry time', 'Asset redeployability', 'Contestability verdict'],
        rows: [
          ['Budget airline routes', 'Low', 'Fast (weeks)', 'High (aircraft mobile)', 'High'],
          ['Mobile network (full MNO)', 'Very high', 'Very slow (years)', 'Low (masts, spectrum)', 'Very low'],
          ['Online clothing retail', 'Low', 'Fast (days)', 'High (no specialist assets)', 'High'],
          ['Aircraft manufacturing', 'Extremely high', 'Extremely slow (decades)', 'Very low (specialist plant)', 'Near zero']
        ],
        question: 'Which policy recommendation is <strong>most consistent</strong> with the data and contestability theory?',
        opts: [
          'Budget airline routes and online retail need less regulatory intervention than mobile networks and aircraft manufacturing — their high contestability provides competitive discipline without the need for price regulation',
          'All four industries should be broken up into many smaller firms to improve competition, regardless of their sunk cost profiles',
          'The government should set identical price caps across all four industries because they all contain some element of market power',
          'Mobile networks and aircraft manufacturing should be privatised to increase contestability — public ownership is the main barrier to entry in both sectors'
        ],
        ans: 0,
        exp: 'The data directly support option A. High contestability (low sunk costs, fast entry, redeployable assets) means the entry threat disciplines incumbent pricing — no price regulation needed for budget routes or online retail. Low contestability (high sunk costs, slow entry, non-redeployable assets) means entry threats are not credible — incumbents in mobile networks and aircraft manufacturing can sustain supernormal profits without regulatory intervention. The contestability-based policy prescription: apply price regulation or infrastructure sharing to low-contestability markets; allow market forces in high-contestability markets. Option B (structural break-up regardless of sunk costs) is the pre-contestability, SCP-based approach that Baumol challenged. Option D is wrong — public ownership is not the main issue in mobile networks or aircraft manufacturing; sunk costs are.'
      },

      /* 10 — mcq: Uber and contestability */
      { type: 'mcq',
        stem: 'Uber\'s entry into the UK taxi market illustrates contestability theory because:',
        opts: [
          'The main taxi asset (the vehicle) is redeployable and not sunk, while the app technology removed the dispatch advantage incumbents held — dramatically lowering the sunk costs of market entry',
          'Uber entered with very large upfront capital investment in physical taxi infrastructure, demonstrating that even high-sunk-cost markets can be entered by well-funded firms',
          'Uber held a government monopoly licence that prevented competition, so its entry could only occur once regulations were changed',
          'Uber\'s entry shows that contestability only applies in markets with many buyers and sellers — the taxi market fits this description perfectly'
        ],
        ans: 0,
        exp: 'Uber is a classic contestability case study. The key assets for traditional taxi operation — a licensed vehicle and dispatch capability — both became more redeployable or redundant. <strong>Vehicles are recoverable assets</strong>: a driver\'s car is not sunk to the taxi market; it can be used privately or in other hire services. <strong>The dispatch advantage</strong> (traditional taxi firms had expensive radio dispatch networks — a sunk cost) was eliminated by the app, which any firm can build or license. This dramatically reduced the sunk costs of entry into the urban passenger transport market. Uber proved that a new entrant with low-sunk-cost technology could compete with incumbents who had invested heavily in physical dispatch infrastructure. The Supreme Court ruling (Uber v Aslam, 2021) on driver employment status is a separate regulatory question — not a contestability issue.'
      }

    ]
  };

})();
