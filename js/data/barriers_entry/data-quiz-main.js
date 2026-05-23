/* ============================================================
   ECONOS — Quiz content for: Barriers to Entry
   10 questions covering all major barrier types and their
   implications for competition policy.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'barriers_entry_main',
    topicId:  'barriers_entry_main',
    title:    'Barriers to Entry',
    subtitle: 'Theme 3.9 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions on structural, strategic, and legal barriers to entry &#8212; from sunk costs and network effects to predatory pricing and patents. Covers why barriers sustain supernormal profit and how competition policy can address them.',
    shortNames: {
      'barriers_entry_1': 'Role of barriers',
      'barriers_entry_2': 'Structural barriers',
      'barriers_entry_3': 'Strategic barriers',
      'barriers_entry_4': 'Legal barriers',
      'barriers_entry_5': 'Network effects',
      'barriers_entry_6': 'Industry examples',
      'barriers_entry_7': 'Evaluation'
    },

    questions: [

      /* 1 — MCQ: contestability */
      { type: 'mcq',
        stem: 'In a <strong>perfectly contestable market</strong>, even a monopolist must price near average cost. What is the critical condition for a market to be perfectly contestable?',
        opts: [
          'Entry and exit are both free &#8212; all costs are recoverable, so sunk costs are zero',
          'There are at least four competing firms with roughly equal market shares',
          'The dominant firm holds less than 25% market share',
          'The government sets a maximum price equal to marginal cost'
        ],
        ans: 0,
        exp: '<strong>Contestability</strong> (Baumol, 1982) requires <em>costless</em> entry and exit &#8212; specifically, zero sunk costs. If an entrant can enter, earn profit, and exit before retaliation without losing any invested capital ("hit-and-run" entry), the threat of entry disciplines the incumbent. Number of existing firms is irrelevant &#8212; a single firm in a contestable market will price near AC. The key is that sunk costs (irrecoverable spending) create asymmetry between incumbents (already paid) and entrants (must commit anew). Zero sunk costs eliminate this asymmetry and make the threat of entry credible.'
      },

      /* 2 — Elastic sort: sunk vs fixed costs */
      { type: 'elastic_sort',
        stem: 'Sort each cost into the correct category: <strong>sunk cost</strong> (irrecoverable on exit) or <strong>fixed cost that can be recovered</strong> on exit.',
        categories: ['sunk', 'fixed'],
        categoryLabels: ['Sunk cost (irrecoverable)', 'Recoverable fixed cost'],
        goods: [
          { icon: '&#128300;', label: 'Spending &#163;50m on pharmaceutical clinical trials for a new drug', note: '', ans: 'sunk' },
          { icon: '&#127970;', label: 'Purchasing a factory building that can be sold if the firm exits', note: '', ans: 'fixed' },
          { icon: '&#128640;', label: 'Advertising spend to build brand awareness in a new market', note: '', ans: 'sunk' },
          { icon: '&#128187;', label: 'Renting office space on a lease that can be sub-let', note: '', ans: 'fixed' },
          { icon: '&#128663;', label: 'Buying a fleet of lorries that can be resold at market value', note: '', ans: 'fixed' },
          { icon: '&#127760;', label: 'Paying for a bespoke regulatory approval process specific to one product', note: '', ans: 'sunk' }
        ],
        exp: '<strong>Sunk costs</strong> cannot be recovered if the firm exits &#8212; pharmaceutical trials, advertising expenditure (brand investment cannot be recouped), and bespoke regulatory approvals are spent and cannot be converted back to cash. <strong>Recoverable fixed costs</strong> can be converted to cash on exit: factories sold, vehicles resold, office leases sub-let. Only <em>sunk costs</em> create barriers to entry, because the risk of an irrecoverable loss deters potential entrants. If all costs are recoverable (fixed but not sunk), entry is nearly costless and the market is contestable. This distinction is one of the most tested analytical points in the barriers topic.'
      },

      /* 3 — Multi-select: strategic barriers */
      { type: 'multi_select',
        stem: 'Which of the following are examples of <strong>strategic (deliberate) barriers to entry</strong> erected by an incumbent firm?',
        opts: [
          'Pricing below average variable cost specifically to drive a new entrant out of the market',
          'Economies of scale that naturally arise from the industry\'s cost structure',
          'Filing a large number of incremental patents to block rivals from innovating around core patents',
          'Launching many product variants to fill every market niche before a competitor can enter',
          'Owning the only deposit of a unique mineral required for production',
          'Signing long-term exclusive contracts with major retailers to block rivals\' distribution'
        ],
        correct: [0, 2, 3, 5],
        exp: 'Options A, C, D, and F are <strong>strategic barriers</strong> &#8212; deliberately constructed by the incumbent. Predatory pricing (A) &#8212; pricing below AVC to eliminate rivals &#8212; is illegal under competition law. Patent flooding (C) creates a defensive wall of intellectual property beyond the original innovation incentive. Product proliferation (D) fills the market space to deny entrants a viable niche. Exclusive dealing (F) blocks access to distribution channels. Options B and E are <strong>structural (innocent) barriers</strong> &#8212; they arise from natural cost conditions (scale economies) or resource control, not deliberate strategy to exclude rivals. Competition law generally treats structural barriers more leniently than strategic ones.'
      },

      /* 4 — Para fill: network effects */
      { type: 'para_fill',
        stem: 'Complete the paragraph about network effects as barriers to entry.',
        anchor: 'Network effects make digital platforms particularly resistant to competitive entry.',
        para: 'A <strong>network effect</strong> exists when the value of a product increases as more people [1] it. For a new entrant, this creates a [2] problem: consumers prefer the established platform (larger network, more value) to the new platform (smaller network, less value). As a result, digital markets tend to become [3], with one dominant firm capturing most users. Switching costs reinforce this: consumers who switch to a rival platform lose access to their existing [4] and data. Competition authorities such as the CMA are considering [5] requirements, which would force platforms to allow users to communicate across competing services. This could reduce the network advantage enjoyed by incumbents like WhatsApp and [6].',
        blanks: [
          { id: 1, opts: ['use', 'buy', 'review', 'avoid'], ans: 0 },
          { id: 2, opts: ['chicken-and-egg', 'moral hazard', 'adverse selection', 'free rider'], ans: 0 },
          { id: 3, opts: ['winner-take-all', 'perfectly competitive', 'oligopolistic', 'segmented'], ans: 0 },
          { id: 4, opts: ['network', 'income', 'market share', 'product range'], ans: 0 },
          { id: 5, opts: ['interoperability', 'nationalisation', 'price cap', 'divestiture'], ans: 0 },
          { id: 6, opts: ['Facebook', 'Amazon', 'Netflix', 'Spotify'], ans: 0 }
        ],
        exp: '(1) <strong>Use</strong>: network effects depend on usage, not just purchase. (2) <strong>Chicken-and-egg</strong>: a new entrant needs users to be valuable, but needs to be valuable to attract users &#8212; a classic catch-22. (3) <strong>Winner-take-all</strong>: network effects compound over time, driving all users to the dominant platform. (4) <strong>Network</strong>: switching from WhatsApp means losing access to all your contacts on WhatsApp &#8212; the "network" is the value. (5) <strong>Interoperability</strong>: if platforms must allow users to message across services, the network advantage of incumbents is reduced. (6) <strong>Facebook</strong>: Meta owns both WhatsApp and Facebook/Instagram &#8212; the most cited example of platform network effects under regulatory scrutiny.'
      },

      /* 5 — Odd one out: types of barrier */
      { type: 'odd_one_out',
        stem: 'Three of these create barriers to entry by raising <strong>sunk costs</strong> or <strong>capital requirements</strong> for new entrants. Which is the <strong>ODD ONE OUT</strong>?',
        items: [
          { icon: '&#128300;', label: 'Multi-billion pound R&D investment required to develop a competitive aircraft engine', note: '' },
          { icon: '&#127968;', label: 'High initial capital expenditure to build a new water distribution network', note: '' },
          { icon: '&#128162;', label: 'An incumbent supermarket that cuts prices temporarily to match a new rival\'s launch offers', note: '' },
          { icon: '&#128250;', label: '&#163;10m marketing campaign required to achieve minimum viable brand awareness in the market', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the <strong>supermarket price cut</strong>. This is a <em>strategic barrier</em> (specifically, a form of limit or predatory pricing behaviour) rather than a cost-based entry barrier. Options A, B, and D all involve high financial outlays that constitute barriers because they must be committed before entry &#8212; aircraft engine R&D and water infrastructure are structural barriers (large capital/sunk cost requirements), while a large advertising spend to build brand awareness is a sunk cost barrier (once spent on advertising, the money cannot be recovered). The temporary price cut is a <em>reaction</em> by the incumbent, not a fixed cost that deters entry &#8212; it is a strategic action.'
      },

      /* 6 — Data table: barrier height by industry */
      { type: 'data_table',
        stem: 'The table shows estimated entry conditions across four UK industries.',
        headers: ['Industry', 'Typical sunk costs', 'Scale economies', 'Key legal barriers', 'Ease of entry (1=easy, 5=hard)'],
        rows: [
          ['Hairdressing', 'Low (tools, fit-out)', 'Minimal', 'None significant', '1'],
          ['Commercial banking', 'High (IT, compliance)', 'Significant', 'Banking licence (PRA)', '5'],
          ['Streaming services', 'Very high (content)', 'Significant (global)', 'None (but network effect)', '4'],
          ['Petrol retailing', 'Medium (station fit-out)', 'Low', 'None significant', '2']
        ],
        question: 'Which conclusion is most consistent with the data?',
        opts: [
          'Industries with multiple overlapping barriers (high sunk costs, scale economies, and legal requirements) are hardest to enter &#8212; commercial banking scores highest on all three criteria',
          'Streaming services are easier to enter than petrol retailing because streaming has no formal legal barriers, making legal barriers the sole determinant of entry difficulty',
          'Hairdressing has low entry barriers primarily because of its lack of legal regulation, and removing legal barriers from banking would immediately make it as competitive as hairdressing',
          'Scale economies alone are sufficient to create entry barriers: any industry with significant scale economies will always have an ease of entry score of 5'
        ],
        ans: 0,
        exp: 'Option A is most consistent with the data. Banking (ease of entry = 5) combines all three barrier types: high sunk IT/compliance costs, meaningful scale economies, and a strict legal licence requirement from the Prudential Regulation Authority. This "stacking" of barriers explains why new challenger banks (Monzo, Starling) required years of regulatory preparation and significant capital. Option B is wrong &#8212; streaming scores 4 despite having no legal barriers, because content sunk costs and network effects substitute for legal barriers. Option C is wrong &#8212; hairdressing\'s low barriers reflect low sunk costs and minimal scale requirements, not merely regulation. Option D is wrong &#8212; petrol retailing has moderate scale economies but scores only 2, showing scale economies alone are insufficient.'
      },

      /* 7 — MCQ: predatory pricing test */
      { type: 'mcq',
        stem: 'Under EU and UK competition law, which cost benchmark is most commonly used to establish a <em>presumption</em> of predatory pricing?',
        opts: [
          'Pricing below average variable cost (AVC) &#8212; no legitimate business rationale for pricing below this level',
          'Pricing below average total cost (ATC) &#8212; any price below full cost is treated as predatory',
          'Pricing below the level charged by the closest rival in the same market',
          'Pricing below the industry average price for an equivalent product'
        ],
        ans: 0,
        exp: 'The <strong>AVC benchmark</strong> is the standard presumption test (following the EU <em>AKZO</em> case, 1991). If a firm prices below AVC, it is covering neither fixed nor variable costs on those sales &#8212; the only rational explanation is a strategy to eliminate the rival (you must earn at least AVC for each unit to be better off producing than not). Pricing below ATC but above AVC is more ambiguous &#8212; it could be a legitimate response to market conditions or predatory; the burden of proof lies with the competition authority. Pricing below a rival\'s price (Option C) is not inherently predatory &#8212; price competition is desirable. Industry average (Option D) is not a legal standard.'
      },

      /* 8 — Multi-select: evaluation of barriers to entry */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>barriers to entry and their effects on competition</strong>. Which of the following statements demonstrate <strong>evaluation</strong> &#8212; as opposed to description or one-sided analysis?',
        opts: [
          'Whether high barriers to entry harm consumers depends on the type of barrier: structural barriers (economies of scale, natural monopoly) may lower average costs and reduce prices even while limiting entry, whereas strategic barriers (predatory pricing, patent flooding) raise prices without any countervailing efficiency benefit',
          'Barriers to entry allow incumbent firms to earn supernormal profit in the long run',
          'The patent system creates a deliberate welfare trade-off: the 20-year monopoly causes deadweight loss and access problems (HIV/AIDS drugs patented at $10,000 vs $300 for generics) but corrects the market failure of under-investment in R&D &#8212; making the welfare verdict industry-specific rather than uniformly positive or negative',
          'Sunk costs are irrecoverable costs that deter entry by raising the financial commitment required',
          'Network effects are a particularly durable barrier because they are self-reinforcing &#8212; yet the UK CMA&#8217;s push for interoperability requirements on messaging platforms shows that regulatory reform can reduce incumbent network advantages without breaking up the firm, offering a less disruptive remedy than divestiture',
          'Legal barriers such as patents and licences create monopoly power for incumbent firms'
        ],
        correct: [0, 2, 4],
        exp: 'Option A is strong evaluation: it distinguishes two categories of barrier by their welfare implications (efficiency-enhancing vs purely exclusionary), reaches a directional conclusion that the harm depends on type &#8212; this is the highest-level analytical move in barriers essays. Option C is strong evaluation: it frames patents as a policy response to a specific market failure, uses concrete evidence ($10,000 vs $300) to quantify the access cost, and reaches a qualified, industry-specific verdict rather than a blanket judgement. Option E is strong evaluation: it identifies a reinforcing mechanism (self-reinforcing nature of network effects), then qualifies the implication by noting a specific regulatory remedy (interoperability) that addresses the problem proportionately &#8212; weighing remedies against each other is a genuine evaluative move. Option B describes a consequence of barriers without any qualification, context, or counter-argument &#8212; it is analysis, not evaluation. Option D is definitional description of sunk costs &#8212; it states a fact rather than weighing competing considerations or qualifying a claim. Option F describes the effect of legal barriers without evaluating their justification, magnitude, or conditions.'
      },

      /* 9 — Chain: entry barrier life cycle */
      { type: 'chain',
        stem: 'A new pharmaceutical firm seeks to enter a market dominated by an incumbent with a large patent portfolio. Place the steps in the correct logical order.',
        items: [
          { label: 'New entrant evaluates whether expected profit exceeds the sunk cost of entry (R&D, trials, regulatory approval)', note: '' },
          { label: 'Incumbent holds patents covering the key active compounds and related manufacturing processes', note: '' },
          { label: 'New entrant is deterred: the combination of high sunk costs and patent protection makes expected profit too low to justify entry', note: '' },
          { label: 'Incumbent sustains supernormal profit; no competitive pressure to reduce price toward MC', note: '' },
          { label: 'Key patents expire after 20 years; generic manufacturers begin entry with lower R&D cost burden', note: '' },
          { label: 'Generic entry causes prices to fall sharply &#8212; research shows branded drug prices fall 60&#8211;90% on generic entry', note: '' }
        ],
        correctOrder: [1, 0, 2, 3, 4, 5],
        exp: '<strong>The correct sequence:</strong><br>1. Incumbent holds patents &#8212; the existing legal barrier is in place.<br>2. Entrant evaluates sunk costs vs expected profit &#8212; the entry decision calculus.<br>3. Entrant is deterred &#8212; sunk costs + patent protection make expected profit negative.<br>4. Incumbent sustains supernormal profit &#8212; the consequence of successful deterrence.<br>5. Patents expire &#8212; legal barrier removed after 20 years.<br>6. Generic entry; prices fall 60&#8211;90% &#8212; competitive outcome after barrier removal.<br><br>This sequence illustrates the life cycle of a legally-created barrier. The dramatic price falls on generic entry (step 6) retrospectively confirm how much monopoly pricing was occurring during the patent term &#8212; and how much welfare was being transferred from consumers to the patent holder. It also illustrates why the patent trade-off (temporary welfare loss for dynamic efficiency) is real but bounded in time.'
      },

      /* 10 — Elastic sort: policy response to barrier type */
      { type: 'elastic_sort',
        stem: 'Match each barrier type to the most appropriate <strong>competition policy response</strong>.',
        categories: ['prohibit', 'regulate', 'reform'],
        categoryLabels: ['Prohibit / fine (strategic barriers)', 'Regulate the firm (structural barriers)', 'Reform the legal framework (legal barriers)'],
        goods: [
          { icon: '&#9935;', label: 'Predatory pricing used to drive a new entrant out of the market', note: '', ans: 'prohibit' },
          { icon: '&#128200;', label: 'Natural monopoly in water distribution &#8212; single firm has lowest cost structure', note: '', ans: 'regulate' },
          { icon: '&#128203;', label: 'A 25-year patent duration that far exceeds the level needed to incentivise R&D', note: '', ans: 'reform' },
          { icon: '&#128279;', label: 'Network effects creating a near-impenetrable incumbent advantage on a messaging platform', note: '', ans: 'regulate' },
          { icon: '&#128715;', label: 'Exclusive dealing contracts that block rivals from all major distribution channels', note: '', ans: 'prohibit' },
          { icon: '&#127891;', label: 'Regulatory compliance costs that are disproportionately burdensome for small entrants relative to large incumbents', note: '', ans: 'reform' }
        ],
        exp: '<strong>Prohibit/fine:</strong> predatory pricing and exclusive dealing are <em>strategic</em> barriers &#8212; deliberately anticompetitive behaviour that should be prohibited and fined under competition law. <strong>Regulate the firm:</strong> natural monopoly (water) and network effects (messaging platforms) are <em>structural</em> barriers that arise from genuine cost or demand conditions &#8212; the appropriate response is regulated access, price caps, or interoperability mandates, not break-up or prohibition. <strong>Reform the legal framework:</strong> excessive patent duration and disproportionate compliance burdens are <em>legal/regulatory</em> barriers &#8212; the policy response is to redesign the law (shorter patents, proportionate regulation for SMEs). Matching barrier type to policy response is a key analytical skill for competition policy essays.'
      }

    ]
  };

})();
