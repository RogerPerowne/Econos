/* ============================================================
   ECONOS — Quiz content for: Monopolistic Competition
   10 questions covering assumptions, short-run / long-run
   equilibria, excess capacity, efficiency, and evaluation.
   ============================================================ */

(function () {

  window.ECONOS_QUIZ = {
    id:       'monopolistic_competition_main',
    topicId:  'monopolistic_competition_main',
    title:    'Monopolistic Competition',
    subtitle: 'Theme 3.12 · Edexcel A-Level',
    sessionLabel: 'Session 1 of 3: Learn',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions on Chamberlin\'s model of monopolistic competition &#8212; the four assumptions, short-run supernormal profit, long-run normal profit through entry, excess capacity, and the efficiency comparison with perfect competition. Real-world applications to restaurants, hairdressers, and fast fashion.',
    shortNames: {
      'monopolistic_competition_1': 'Assumptions',
      'monopolistic_competition_2': 'Short-run equilibrium',
      'monopolistic_competition_3': 'Long-run adjustment',
      'monopolistic_competition_4': 'Excess capacity',
      'monopolistic_competition_5': 'Efficiency analysis',
      'monopolistic_competition_6': 'Non-price competition',
      'monopolistic_competition_7': 'Evaluation'
    },

    questions: [

      /* 1 — MCQ: key assumption */
      { type: 'mcq',
        stem: 'What single feature of monopolistic competition distinguishes it from <strong>perfect competition</strong> and generates fundamentally different long-run outcomes?',
        opts: [
          'Product differentiation &#8212; each firm\'s product differs from rivals\', giving it a downward-sloping demand curve and some pricing power',
          'Barriers to entry &#8212; new firms cannot enter the market even when supernormal profit exists',
          'Homogeneous products &#8212; all firms produce identical goods, leaving consumers indifferent between sellers',
          'A single dominant firm &#8212; the market is controlled by one large producer that sets price for all'
        ],
        ans: 0,
        exp: '<strong>Product differentiation</strong> is the critical distinguishing feature. In perfect competition, all products are identical (homogeneous) &#8212; consumers are indifferent between sellers, so any price above MC causes the firm to lose all customers (horizontal demand). In monopolistic competition, product differentiation (real or perceived) means each firm faces a <em>downward-sloping</em> demand curve &#8212; it can raise price without losing all customers immediately. This gives each firm a degree of market power and makes MR &lt; AR. All long-run differences (excess capacity, P &gt; MC, P = AC but not min AC) flow from this single assumption change. Barriers to entry (Option B) are absent in monopolistic competition &#8212; free entry is a key assumption.'
      },

      /* 2 — Para fill: long-run adjustment */
      { type: 'para_fill',
        stem: 'Complete the paragraph describing the long-run adjustment process in monopolistic competition.',
        anchor: 'Free entry eliminates supernormal profit, but the long-run outcome differs from perfect competition.',
        para: 'In the short run, a monopolistically competitive firm may earn [1] profit if price exceeds average cost at the profit-maximising output. This attracts new [2] into the market, who offer close but not identical [3] products. As new firms enter, the individual firm\'s demand curve shifts [4] (fewer customers at any given price) and becomes more [5] (more close substitutes now available). Entry continues until the demand curve is [6] to the average cost curve at the profit-maximising output. At this point, [7] profit is earned &#8212; the firm earns revenue just sufficient to cover all costs, including normal profit.',
        blanks: [
          { id: 1, opts: ['supernormal', 'normal', 'subnormal', 'zero'], ans: 0 },
          { id: 2, opts: ['entrants', 'regulators', 'mergers', 'subsidies'], ans: 0 },
          { id: 3, opts: ['substitute', 'complementary', 'inferior', 'public'], ans: 0 },
          { id: 4, opts: ['leftward', 'rightward', 'upward', 'downward'], ans: 0 },
          { id: 5, opts: ['elastic', 'inelastic', 'unit elastic', 'perfectly inelastic'], ans: 0 },
          { id: 6, opts: ['tangent', 'above', 'below', 'perpendicular'], ans: 0 },
          { id: 7, opts: ['normal', 'supernormal', 'subnormal', 'abnormal'], ans: 0 }
        ],
        exp: '(1) <strong>Supernormal</strong>: P &gt; AC at Q* signals profit above normal &#8212; the trigger for entry. (2) <strong>Entrants</strong>: free entry (no barriers) means new firms can always enter. (3) <strong>Substitute</strong>: new entrants offer differentiated but close substitutes &#8212; not identical products. (4) <strong>Leftward</strong>: with more competitors, each firm serves fewer customers &#8212; demand shifts left. (5) <strong>Elastic</strong>: more close substitutes mean consumers are more price-sensitive &#8212; demand becomes more elastic. (6) <strong>Tangent</strong>: the long-run equilibrium tangency condition &#8212; demand just touches AC, P = AC. (7) <strong>Normal</strong>: P = AC means zero economic (supernormal) profit; the firm earns only normal profit &#8212; sufficient return to keep resources employed but no excess.'
      },

      /* 3 — Elastic sort: short-run vs long-run */
      { type: 'elastic_sort',
        stem: 'Sort each feature as applying to <strong>short-run equilibrium</strong> or <strong>long-run equilibrium</strong> in monopolistic competition.',
        categories: ['sr', 'lr'],
        categoryLabels: ['Short-run equilibrium', 'Long-run equilibrium'],
        goods: [
          { icon: '&#128200;', label: 'Firm may earn supernormal profit: P &gt; AC at Q*', note: '', ans: 'sr' },
          { icon: '&#9989;', label: 'Demand curve is tangent to the AC curve at profit-maximising output', note: '', ans: 'lr' },
          { icon: '&#128181;', label: 'P = AC: firm earns only normal profit &#8212; entry has eroded all supernormal profit', note: '', ans: 'lr' },
          { icon: '&#128683;', label: 'No entry or exit: the market has not yet adjusted to the firm\'s profit level', note: '', ans: 'sr' },
          { icon: '&#9651;', label: 'Excess capacity: firm produces to the left of minimum AC', note: '', ans: 'lr' },
          { icon: '&#128200;', label: 'P &gt; MC in both equilibria &#8212; allocative inefficiency persists throughout', note: '', ans: 'lr' }
        ],
        exp: '<strong>Short-run equilibrium</strong>: supernormal profit possible (P &gt; AC); no entry has yet occurred. <strong>Long-run equilibrium</strong>: tangency condition (demand tangent to AC); P = AC (normal profit only); excess capacity (Q* left of min AC). Note that P &gt; MC persists in <em>both</em> the short and long run &#8212; allocative inefficiency is a permanent feature of monopolistic competition because demand is always downward-sloping (MR &lt; P), so MR = MC means P &gt; MC at any equilibrium. This permanent allocative inefficiency is the key difference from perfect competition\'s long run.'
      },

      /* 4 — Diagram interpretation: tangency condition */
      { type: 'diagram_interp',
        stem: 'A monopolistically competitive firm is shown in long-run equilibrium. The demand curve is tangent to the AC curve at output Q*.',
        svg: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" style="font-family:Inter,sans-serif"><line x1="55" y1="20" x2="55" y2="270" stroke="#0B1426" stroke-width="2"/><line x1="55" y1="270" x2="400" y2="270" stroke="#0B1426" stroke-width="2"/><text x="42" y="22" fill="#0B1426" font-size="12" text-anchor="end" font-weight="700">P</text><text x="398" y="288" fill="#0B1426" font-size="12" font-weight="700">Q</text><line x1="80" y1="60" x2="360" y2="260" stroke="#2563EB" stroke-width="2.5"/><text x="363" y="260" fill="#2563EB" font-size="12" font-weight="700">AR=D</text><line x1="80" y1="60" x2="220" y2="260" stroke="#2563EB" stroke-width="2" stroke-dasharray="5,4"/><text x="225" y="260" fill="#2563EB" font-size="11" font-weight="700">MR</text><line x1="80" y1="240" x2="360" y2="110" stroke="#1FB574" stroke-width="2.5"/><text x="363" y="110" fill="#1FB574" font-size="12" font-weight="700">MC</text><path d="M 80 220 Q 160 140 200 132 Q 260 130 340 160" fill="none" stroke="#EC2D68" stroke-width="2.5"/><text x="343" y="158" fill="#EC2D68" font-size="11" font-weight="700">AC</text><line x1="172" y1="148" x2="172" y2="270" stroke="#F5B800" stroke-width="1.5" stroke-dasharray="4,3"/><text x="172" y="288" fill="#F5B800" font-size="11" text-anchor="middle" font-weight="700">Q*</text><circle cx="172" cy="148" r="4" fill="#F5B800"/><line x1="55" y1="148" x2="172" y2="148" stroke="#F5B800" stroke-width="1" stroke-dasharray="4,3"/><text x="42" y="152" fill="#F5B800" font-size="11" text-anchor="end" font-weight="700">P*=AC</text><line x1="260" y1="135" x2="260" y2="270" stroke="#0B1426" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/><text x="260" y="288" fill="#0B1426" font-size="10" text-anchor="middle">Q_minAC</text></svg>',
        caption: 'Long-run equilibrium: demand (AR) is tangent to AC at Q*. Q_minAC is where AC reaches its minimum.',
        question: 'What does the diagram demonstrate about <strong>productive efficiency</strong> in the long run?',
        opts: [
          'Productive efficiency is NOT achieved: Q* lies to the LEFT of minimum AC (Q_minAC), so unit costs are above their technically achievable minimum &#8212; this is the excess capacity result',
          'Productive efficiency IS achieved: the demand curve touches the AC curve at Q*, which by definition is the minimum AC point',
          'Productive efficiency is impossible to determine from this diagram because the MC curve is needed to identify the minimum AC output',
          'Productive efficiency IS achieved because P = AC at Q* &#8212; earning normal profit is the definition of productive efficiency'
        ],
        ans: 0,
        exp: '<strong>Productive inefficiency</strong> is confirmed by the diagram. Minimum AC occurs where MC crosses AC (at Q_minAC). The tangency point Q* lies to the LEFT of Q_minAC &#8212; the firm produces less than the minimum-cost output. Unit costs at Q* are above the minimum achievable level. This gap (Q_minAC &#8722; Q*) is the <strong>excess capacity</strong> &#8212; the firm could expand output and reduce unit costs, but profit-maximisation (MR = MC) does not incentivise this. Option B is wrong &#8212; the tangency point is not the minimum AC point; it is to the left of it. Option D confuses normal profit (an accounting condition) with productive efficiency (a technical condition).'
      },

      /* 5 — Multi-select: efficiency comparison */
      { type: 'multi_select',
        stem: 'Which of the following correctly describe the <strong>efficiency properties</strong> of monopolistic competition in <strong>long-run equilibrium</strong>?',
        opts: [
          'Allocative inefficiency: P &gt; MC, so the last unit produced is worth more to consumers than it costs &#8212; the market under-produces',
          'Productive efficiency: the firm produces at minimum AC, identical to the long-run perfect competition outcome',
          'Excess capacity: actual output Q* is below the minimum-AC output &#8212; unit costs are unnecessarily high',
          'Dynamic efficiency: non-price competition (product development, advertising) may drive innovation and quality improvement',
          'Zero supernormal profit: the firm earns only normal profit in the long run, the same as in perfect competition',
          'Perfectly elastic demand: the demand curve is horizontal, as in perfect competition, because products are nearly identical'
        ],
        correct: [0, 2, 3, 4],
        exp: 'Options A, C, D, and E are correct. (A) Allocative inefficiency: P &gt; MC persists in LR because demand is downward-sloping &#8212; MR &lt; P means MR = MC gives P &gt; MC. (C) Excess capacity: Q* is left of minimum AC &#8212; productive inefficiency. (D) Dynamic efficiency: non-price competition (product development, advertising, innovation) may generate genuine consumer benefits &#8212; the counter-argument to static inefficiency. (E) Normal profit only in LR: free entry erodes supernormal profit, same result as perfect competition. Option B is wrong: productive efficiency (P = min AC) is NOT achieved &#8212; the tangency condition places Q* left of min AC. Option F is wrong: demand is downward-sloping in monopolistic competition (product differentiation), not horizontal. Horizontal demand is the perfect competition assumption.'
      },

      /* 6 — Odd one out: real-world examples */
      { type: 'odd_one_out',
        stem: 'Three of these are good examples of <strong>monopolistically competitive markets</strong>. Which is the <strong>ODD ONE OUT</strong>?',
        items: [
          { icon: '&#9749;', label: 'Independent coffee shops in a city centre &#8212; many competitors, each with distinct atmosphere, brand, and menu', note: '' },
          { icon: '&#128138;', label: 'Local hairdressers and barbers &#8212; many firms, each differentiated by style, reputation, and location', note: '' },
          { icon: '&#128167;', label: 'Thames Water &#8212; sole provider of water distribution services in London, with massive infrastructure sunk costs', note: '' },
          { icon: '&#128094;', label: 'High street fashion brands (Zara, H&M, Primark) &#8212; many firms competing on style, design, and brand image', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is <strong>Thames Water</strong>. Thames Water is a <em>natural monopoly</em> &#8212; the massive sunk costs of water distribution infrastructure mean only one firm can efficiently serve the market. It faces no close substitutes and consumers have no alternative supplier. This is the opposite of monopolistic competition, which requires: many sellers, free entry, and product differentiation. The coffee shops, hairdressers, and fast fashion brands all exhibit the defining features &#8212; many competitors each differentiated by brand, style, location, and quality; easy entry; and downward-sloping demand (loyal customers who prefer each specific brand). Thames Water\'s regulatory framework (Ofwat) reflects its monopoly nature, not competitive market pressure.'
      },

      /* 7 — Data table: market performance comparison */
      { type: 'data_table',
        stem: 'The table compares long-run equilibrium outcomes across three market structures.',
        headers: ['Criterion', 'Perfect competition', 'Monopolistic competition', 'Monopoly'],
        rows: [
          ['P vs MC', 'P = MC', 'P &gt; MC', 'P &gt; MC'],
          ['P vs min AC', 'P = min AC', 'P &gt; min AC', 'P &gt; min AC (typically)'],
          ['Long-run profit', 'Normal', 'Normal', 'Supernormal'],
          ['Allocative efficiency', 'Yes', 'No', 'No'],
          ['Productive efficiency', 'Yes', 'No', 'No (usually)'],
          ['Product variety', 'None (homogeneous)', 'High (differentiation)', 'None (single supplier)']
        ],
        question: 'Which conclusion is most consistent with the data in the table?',
        opts: [
          'Monopolistic competition and monopoly share the same static efficiency failures (P &gt; MC, P &gt; min AC), but differ importantly: monopolistic competition yields only normal profit (free entry) while monopoly yields supernormal profit (barriers block entry)',
          'Monopolistic competition is strictly worse than perfect competition on every criterion and should always be regulated to force firms to produce at minimum AC',
          'Monopoly is always the worst market structure because it fails allocative efficiency, whereas monopolistic competition achieves allocative efficiency in the long run',
          'Perfect competition and monopolistic competition produce identical outcomes because both yield only normal profit in the long run'
        ],
        ans: 0,
        exp: 'Option A is most consistent with the data. Both monopolistic competition and monopoly exhibit P &gt; MC (allocative inefficiency) and P &gt; min AC (productive inefficiency). The critical difference is the profit column: monopolistic competition earns only <em>normal profit</em> in the long run (free entry erodes supernormal profit), while monopoly earns <em>supernormal profit</em> (barriers prevent this erosion). Option B overstates &#8212; product variety (the distinctive advantage of monopolistic competition) is not captured in static efficiency measures. Option C is wrong &#8212; monopolistic competition also fails allocative efficiency. Option D is wrong &#8212; they both yield normal profit in LR but differ on all efficiency criteria (PC achieves both; MC fails both).'
      },

      /* 8 — Diagnostic pair: advertising welfare */
      { type: 'diagnostic_pair',
        stem: 'Exam question: <em>"Is advertising in monopolistically competitive markets beneficial or harmful for welfare?"</em> Which student gives the stronger answer?',
        students: [
          { name: 'Sophie', badge: 'Candidate A',
            answer: 'Advertising has two distinct economic effects. First, a <strong>demand effect</strong>: advertising shifts the firm\'s demand curve rightward (more consumers) and may make it more inelastic (brand loyalty). If the demand shift exceeds the cost increase (advertising shifts AC upward), profit may increase. Second, a <strong>cost effect</strong>: advertising raises AC, shifting the tangency equilibrium to a higher AC, meaning prices are higher and excess capacity larger. <strong>The welfare verdict depends on the type of advertising.</strong> Informative advertising &#8212; communicating genuine price, quality, or availability differences (e.g., a new restaurant\'s opening) &#8212; reduces consumer search costs and enables better-informed choices: welfare-improving. Persuasive advertising &#8212; creating artificial brand differentiation without real product differences (many luxury brand campaigns) &#8212; raises costs without improving the underlying product: welfare-reducing. <strong>Advertising arms race</strong>: if all firms in an oligopoly increase advertising proportionally, none gains net market share &#8212; resources are wasted. Overall: advertising in monopolistic competition can be welfare-improving if informative and welfare-reducing if purely persuasive. The distinction requires empirical assessment of specific markets rather than a blanket judgement.'
          },
          { name: 'Noah', badge: 'Candidate B',
            answer: 'Advertising can be good or bad for welfare. It can be good because it informs consumers about products, which helps them make better decisions. For example, a new restaurant advertising its opening tells people about a new option. But advertising can also be bad because it costs money, which raises prices for consumers. Also, if all firms advertise equally, they all spend more but none gains customers, so it is a waste of resources. This is called an advertising arms race. Overall, advertising has mixed effects and depends on whether it is informative or just persuasive.'
          }
        ],
        ans: 0,
        exp: '<strong>Sophie</strong> gives the stronger answer. She separates the analysis into two distinct economic effects (demand shift vs AC shift), applies the welfare distinction between informative and persuasive advertising with specific examples, discusses the advertising arms race in the oligopoly context, and reaches a conditional, evidence-dependent conclusion. Noah identifies the same key ideas but in narrative form without the analytical structure &#8212; "good or bad," "helps them make better decisions" &#8212; without the demand-shift/cost-shift framework or the informative vs persuasive distinction applied to welfare analysis. Sophie accesses Level 4&#8211;5; Noah accesses Level 2&#8211;3.'
      },

      /* 9 — Chain: long-run entry process */
      { type: 'chain',
        stem: 'A new coffee shop opens in a busy area and initially earns supernormal profit. Place the sequence of events leading to long-run equilibrium in the correct order.',
        items: [
          { label: 'Demand curve for each existing firm shifts leftward as customers spread across more options; demand becomes more elastic', note: '' },
          { label: 'New coffee shops open, offering similar but differentiated products &#8212; different menus, ambiance, locations', note: '' },
          { label: 'No further entry: each firm earns only normal profit, with demand tangent to AC at Q*', note: '' },
          { label: 'Existing coffee shop earns supernormal profit: P &gt; AC at the profit-maximising output Q*', note: '' },
          { label: 'Supernormal profit is eliminated: P = AC at Q* (tangency condition)', note: '' },
          { label: 'Original coffee shop reduces output slightly to the new profit-maximising point; excess capacity increases', note: '' }
        ],
        correctOrder: [3, 1, 0, 5, 4, 2],
        exp: '<strong>The correct sequence:</strong><br>1. Existing coffee shop earns supernormal profit &#8212; above-normal returns signal market attractiveness.<br>2. New entrants open with differentiated products &#8212; free entry, no barriers.<br>3. Demand shifts left and becomes more elastic &#8212; more alternatives available.<br>4. Coffee shop reduces output to new profit-max Q* &#8212; adjusts to lower demand.<br>5. Supernormal profit eliminated (P = AC) &#8212; tangency condition reached.<br>6. No further entry: normal profit, no incentive to enter or exit.<br><br>Note the lasting inefficiencies at step 6: P &gt; MC still holds (allocative inefficiency); Q* &lt; min AC output (excess capacity, productive inefficiency). These are <em>permanent</em> features of monopolistic competition &#8212; they do not disappear when the market reaches long-run equilibrium. The "cost of variety" is paid every period.'
      },

      /* 10 — MCQ: excess capacity definition */
      { type: 'mcq',
        stem: 'In the monopolistic competition long-run diagram, excess capacity is defined as:',
        opts: [
          'The difference between the minimum-AC output and the actual profit-maximising output Q* &#8212; the output the firm could produce at lower unit cost but chooses not to',
          'The surplus of consumer demand over the firm\'s output at the long-run equilibrium price',
          'The gap between price P* and marginal cost at Q* &#8212; the per-unit allocative inefficiency',
          'The area of the profit rectangle above average cost at the profit-maximising output'
        ],
        ans: 0,
        exp: '<strong>Excess capacity</strong> is the output gap: minimum-AC output minus Q*. In the long-run tangency diagram, Q* lies to the left of minimum AC. The firm could produce more output at lower unit cost &#8212; it has unused productive capacity. But profit maximisation (MR = MC) does not incentivise expansion beyond Q* (expanding output would require reducing price on all units, reducing revenue more than it reduces cost). Real-world examples: a restaurant with empty tables at lunchtime; a hairdresser with idle chairs mid-week; a clothing boutique with partially-stocked rails. All maintain differentiation (ambiance, personal service, brand) but operate below their minimum-cost scale. Option C describes allocative inefficiency (P &gt; MC), which is related but distinct from excess capacity (productive inefficiency from Q* &lt; min-AC output).'
      }

    ]
  };

})();
