(function () {

  window.ECONOS_QUIZ = {
    id:       'efficiency_main',
    topicId:  'efficiency_main',
    title:    'Types of Efficiency',
    subtitle: 'Theme 3.6 · Edexcel A-Level',
    backUrl:  TopicLoader.buildUrl('topic.html'),
    backLabel: 'Back to topic',
    lede: 'Ten exam-style questions covering productive, allocative, dynamic, and X-efficiency &#8212; their conditions, how different market structures perform against each criterion, the static&#8211;dynamic trade-off, and social efficiency. Includes classification, diagnosis, and evaluative question formats.',
    shortNames: {
      'prod_eff':   'Productive efficiency',
      'alloc_eff':  'Allocative efficiency',
      'dyn_eff':    'Dynamic efficiency',
      'x_eff':      'X-efficiency',
      'mkt_struct': 'Efficiency across structures',
      'social_eff': 'Social efficiency',
      'tradeoff':   'Static vs dynamic'
    },

    questions: [

      /* 1 — Elastic sort: four types of efficiency */
      { type: 'elastic_sort',
        stem: 'Classify each statement as describing <strong>productive</strong>, <strong>allocative</strong>, <strong>dynamic</strong>, or <strong>X-efficiency</strong>.',
        categories: ['prod', 'alloc', 'dyn', 'xeff'],
        categoryLabels: ['Productive efficiency', 'Allocative efficiency', 'Dynamic efficiency', 'X-efficiency'],
        goods: [
          { icon: '&#9881;', label: 'A firm operates at minimum long-run average cost: P = min LRAC', note: '', ans: 'prod' },
          { icon: '&#128200;', label: 'Price equals marginal cost: the marginal value to consumers equals the marginal cost of production', note: '', ans: 'alloc' },
          { icon: '&#128161;', label: 'A firm invests supernormal profit in R&D, developing a breakthrough product that reduces unit costs', note: '', ans: 'dyn' },
          { icon: '&#128100;', label: 'A monopolist produces above its cost frontier due to management slack and lack of competitive pressure', note: '', ans: 'xeff' },
          { icon: '&#9889;', label: 'A competitive firm is forced to adopt best-practice processes to avoid being undercut by rivals', note: '', ans: 'xeff' },
          { icon: '&#127891;', label: 'A pharmaceutical firm spends &#163;2bn developing a new antibiotic that will reduce future treatment costs', note: '', ans: 'dyn' }
        ],
        exp: '<strong>Productive efficiency</strong>: P = min LRAC &#8212; producing at lowest possible unit cost (the "how" of production). <strong>Allocative efficiency</strong>: P = MC &#8212; resources flow to highest-value uses (the "what" of production). <strong>Dynamic efficiency</strong>: long-run innovation and technological progress that improves productive capacity over time. <strong>X-efficiency</strong>: whether a firm operates on (efficient) or inside (inefficient) its cost frontier, determined by managerial incentives and competitive pressure. Note: X-efficiency is about management, not about scale &#8212; a firm can be productively efficient (minimum AC) but X-inefficient if that minimum is higher than it could be with better management.'
      },

      /* 2 — MCQ: allocative efficiency condition */
      { type: 'mcq',
        stem: 'Allocative efficiency requires P = MC. If a monopolist sets P > MC, this implies:',
        opts: [
          'Consumers value the last unit produced more than it costs to produce &#8212; under-production relative to the social optimum, creating a deadweight welfare loss',
          'The firm is making a loss on each unit because production costs exceed the price received',
          'Resources are over-allocated to the monopoly good &#8212; too much is being produced relative to the social optimum',
          'The monopolist is productively efficient because it is producing on the minimum of its average cost curve'
        ],
        ans: 0,
        exp: 'When P &gt; MC: the price consumers pay (their marginal value) exceeds the marginal cost of producing the last unit. This means society would gain from expanding output &#8212; the benefit of the next unit (P) exceeds its cost (MC). The monopolist restricts output below the social optimum to maintain a high price, creating a <strong>deadweight welfare loss</strong> (the triangle between the demand curve and MC curve at the restricted output). This is the classic allocative inefficiency of monopoly: under-production, not over-production (Option C). Monopoly pricing P &gt; MC does not mean the firm is making a loss (Option B) &#8212; P &gt; MC does not compare P to average cost, and supernormal profit is common. Allocative efficiency is conceptually distinct from productive efficiency (Option D).'
      },

      /* 3 — Para fill: X-efficiency */
      { type: 'para_fill',
        stem: 'Complete the paragraph about X-efficiency and its implications.',
        anchor: 'X-inefficiency is identified by Leibenstein (1966) as a significant cost of market power.',
        para: 'A firm is X-[1] if it produces at the minimum cost possible for its chosen output level &#8212; it operates on its cost [2]. X-[3] occurs when a firm produces above its cost frontier, typically due to management [4] arising from an absence of [5] pressure. Leibenstein estimated that the welfare cost of X-inefficiency could be [6] than the standard deadweight loss triangle from monopoly pricing. This makes the total cost of monopoly [7] than standard diagrams suggest.',
        blanks: [
          { id: 1, opts: ['efficient', 'inefficient', 'dynamic', 'allocative'], ans: 0 },
          { id: 2, opts: ['frontier', 'minimum', 'average', 'margin'], ans: 0 },
          { id: 3, opts: ['inefficiency', 'efficiency', 'surplus', 'profit'], ans: 0 },
          { id: 4, opts: ['slack', 'incentive', 'surplus', 'power'], ans: 0 },
          { id: 5, opts: ['competitive', 'regulatory', 'consumer', 'shareholder'], ans: 0 },
          { id: 6, opts: ['larger', 'smaller', 'identical', 'irrelevant'], ans: 0 },
          { id: 7, opts: ['larger', 'smaller', 'the same', 'unpredictable'], ans: 0 }
        ],
        exp: '(1) <strong>Efficient</strong>: X-efficient means operating on the cost frontier. (2) <strong>Frontier</strong>: the production cost frontier &#8212; the minimum cost achievable with existing technology and management. (3) <strong>Inefficiency</strong>: X-inefficiency = operating above the frontier. (4) <strong>Slack</strong>: management slack &#8212; lower effort, unnecessary costs, failure to adopt best practice. (5) <strong>Competitive</strong>: competition disciplines firms to minimise costs; its absence allows slack. (6) <strong>Larger</strong>: Leibenstein\'s empirical work suggested X-inefficiency costs can exceed the DWL triangle. (7) <strong>Larger</strong>: total monopoly welfare cost = DWL (allocative inefficiency) + X-inefficiency (productive cost elevation) &#8212; both working against consumers.'
      },

      /* 4 — Multi-select: conditions for efficiency types */
      { type: 'multi_select',
        stem: 'Which of the following conditions correctly define the named efficiency type?',
        opts: [
          'Productive efficiency: P = minimum LRAC',
          'Allocative efficiency: P = MC',
          'Dynamic efficiency: the firm invests in R&D and innovation to improve long-run productive capacity',
          'X-efficiency: the firm produces at or below its cost frontier with no management slack',
          'Social efficiency: Marginal Social Benefit = Marginal Social Cost',
          'Productive efficiency: P = MR'
        ],
        correct: [0, 1, 2, 3, 4],
        exp: 'Options A&#8211;E are all correct definitions. <strong>Productive</strong>: P = min LRAC &#8212; minimum cost production. <strong>Allocative</strong>: P = MC &#8212; no welfare gain from reallocation. <strong>Dynamic</strong>: long-run innovation and investment (not a single precise condition but a concept of improvement over time). <strong>X-efficiency</strong>: operating on (not inside) the cost frontier. <strong>Social efficiency</strong>: MSB = MSC &#8212; extends allocative efficiency to include externalities. Option F is incorrect: <strong>P = MR is the condition for a price-taker</strong> (perfectly competitive firm where P = MR because P is constant), not an efficiency condition. In perfect competition, the fact that P = MR &#8212; combined with the profit-maximising condition MR = MC &#8212; gives P = MC (allocative efficiency). But P = MR alone is not an efficiency condition.'
      },

      /* 5 — Odd one out: efficiency performance of perfect competition */
      { type: 'odd_one_out',
        stem: 'Three of these are efficiency advantages of <strong>perfect competition</strong> relative to monopoly. Which is the ODD ONE OUT?',
        items: [
          { icon: '&#9881;', label: 'Long-run equilibrium at minimum LRAC: productively efficient', note: '' },
          { icon: '&#128200;', label: 'P = MC in equilibrium: allocatively efficient', note: '' },
          { icon: '&#128161;', label: 'Strong incentive to innovate and invest in new products because of large supernormal profits', note: '' },
          { icon: '&#127775;', label: 'Competitive pressure minimises management slack: high X-efficiency', note: '' }
        ],
        ans: 2,
        exp: 'The odd one out is the claim that perfect competition has <strong>strong innovation incentives from supernormal profits</strong>. In fact, the opposite is true: perfect competition earns only <em>normal</em> profit in the long run &#8212; zero supernormal profit, hence zero internally generated R&D funding. This is the Schumpeterian critique of perfect competition: static efficiency (productive + allocative) comes at the cost of dynamic efficiency. Monopoly, despite its static inefficiencies (P &gt; MC, above minimum AC), may have superior innovation incentives because it retains supernormal profit to fund R&D. The other three are genuine advantages: minimum AC, P = MC, and competitive pressure on X-efficiency are all real benefits of competitive markets.'
      },

      /* 6 — MCQ: social efficiency definition */
      { type: 'mcq',
        stem: 'Social efficiency is achieved when:',
        opts: [
          'Marginal Social Benefit (MSB) = Marginal Social Cost (MSC) &#8212; the output level that maximises total social welfare including all externalities',
          'The government intervenes to set price equal to average cost, ensuring firms earn only normal profit',
          'Total consumer surplus equals total producer surplus in a market equilibrium',
          'A firm operates at minimum long-run average cost, minimising its private production costs'
        ],
        ans: 0,
        exp: '<strong>Social efficiency</strong> requires MSB = MSC. This condition ensures that the benefit to society from the last unit produced equals its cost to society &#8212; including all externalities (both positive and negative). At this output, no reallocation of resources can increase total social welfare. In a competitive market with no externalities: MSB = MPB (demand) and MSC = MPC (supply), so competitive equilibrium achieves social efficiency. With negative externalities: MSC &gt; MPC &#8212; the market overproduces relative to the social optimum. With positive externalities: MSB &gt; MPB &#8212; the market underproduces. Social efficiency is the comprehensive welfare standard; allocative efficiency (P = MC) is the special case with no externalities.'
      },

      /* 7 — multi_select: evaluating efficiency trade-offs */
      { type: 'multi_select',
        stem: 'A student is writing a 25-mark essay on <strong>types of efficiency and market structure performance</strong>. Which of the following statements demonstrate <strong>evaluation</strong> — as opposed to description or one-sided analysis?',
        opts: [
          'Productive efficiency (P = min LRAC) is achieved in long-run perfect competition',
          'The case for tolerating monopoly on dynamic efficiency grounds is strongest in industries where R&D costs are very high relative to market size and imitation is easy — as in pharmaceuticals — but weakest in mature industries with stable technology, where the dynamic efficiency argument becomes a fig leaf for rent extraction',
          'While perfect competition achieves productive and allocative efficiency simultaneously, this combination is static: it sacrifices the supernormal profit that funds Schumpeterian innovation, so judging market structures by static efficiency criteria alone risks locking in low-innovation equilibria in high-technology sectors',
          'Allocative efficiency occurs when P = MC, meaning the last unit\'s value to consumers equals the cost of producing it',
          'X-inefficiency is a separate welfare cost of monopoly from the deadweight loss triangle: Leibenstein\'s evidence suggests it can exceed the DWL in magnitude, meaning competition policy that focuses only on deadweight loss significantly underestimates the total cost of market power',
          'Dynamic efficiency is better than static efficiency because innovation benefits consumers in the long run'
        ],
        correct: [1, 2, 4],
        exp: '<strong>Options B, C, and E are genuine evaluation moves.</strong> Option B qualifies the dynamic efficiency argument: it applies it conditionally — the argument is strong in pharmaceuticals (high R&D, easy imitation) but weak in mature industries — avoiding the common error of either accepting or rejecting the argument in all cases. Option C identifies the specific trade-off between static and dynamic efficiency and draws a directional conclusion: using only static criteria risks a systematic error in high-tech sectors. This is evaluation through identifying the direction and conditions of the trade-off. Option E makes an empirical claim (Leibenstein\'s evidence) and uses it to derive a policy implication: standard competition policy underestimates monopoly costs by ignoring X-inefficiency. <strong>Option A</strong> is a definition of productive efficiency. <strong>Option D</strong> is a definition of allocative efficiency. <strong>Option F</strong> makes an unsupported assertion that dynamic efficiency is "better" — this is a conclusion without conditions, evidence, or any acknowledgment of the trade-off; it is exactly the kind of one-sided claim evaluation must avoid.'
      },

      /* 8 — Data table: efficiency comparison */
      { type: 'data_table',
        stem: 'The table summarises efficiency performance of two market structures.',
        headers: ['Efficiency type', 'Perfect competition (long run)', 'Monopoly (long run)'],
        rows: [
          ['Productive', 'YES &#8212; P = min AC forced by competitive entry', 'NO &#8212; typically operates left of min AC (restricted output)'],
          ['Allocative', 'YES &#8212; P = MC in equilibrium', 'NO &#8212; P &gt; MC; deadweight welfare loss'],
          ['X-efficiency', 'HIGH &#8212; competitive pressure minimises slack', 'LOW &#8212; market power permits management slack'],
          ['Dynamic', 'LOW &#8212; zero long-run profit limits R&D', 'POTENTIALLY HIGH &#8212; supernormal profit funds innovation']
        ],
        question: 'Which policy recommendation is most consistent with the data?',
        opts: [
          'Competition policy should weigh the static efficiency gains from breaking up monopolies against the potential dynamic efficiency losses from reducing supernormal profit available for R&D',
          'The data show that monopoly is always worse than perfect competition across all four efficiency types, so all monopolies should be broken up immediately',
          'The data prove that dynamic efficiency always outweighs static efficiency, so monopoly should always be preferred to competition',
          'Since perfect competition achieves three of the four efficiency types, competition policy should always prioritise perfect competition over any other market structure'
        ],
        ans: 0,
        exp: 'The data show a genuine <strong>static-dynamic trade-off</strong>: perfect competition dominates on three efficiency types (productive, allocative, X-efficiency) but is potentially inferior on dynamic efficiency. This means policy must weigh: <strong>Option A</strong> is the correct nuanced recommendation &#8212; the optimal policy depends on the relative importance of dynamic vs static efficiency in the specific industry. In mature, low-innovation industries, breaking up monopolies may be welfare-improving. In high-innovation industries (pharmaceuticals, tech), strong monopoly profits may be necessary for dynamic efficiency. Option B ignores the dynamic dimension. Option C overstates the case for monopoly &#8212; dynamic efficiency does not "always" outweigh three efficiency disadvantages. Option D assumes dynamic efficiency is negligible.'
      },

      /* 9 — Chain: competitive market erodes inefficiency */
      { type: 'chain',
        stem: 'A monopolist is privatised and the market is opened to competition. Place the events in the correct order from privatisation to efficiency improvement.',
        items: [
          { label: 'Competitive pressure forces the firm to operate closer to the cost frontier (X-efficiency improves)', note: '' },
          { label: 'Market is opened to competition: new firms enter and offer lower prices', note: '' },
          { label: 'Firm\'s market share falls as customers switch to cheaper, more efficient rivals', note: '' },
          { label: 'Privatisation announced: firm sold to private shareholders seeking profit', note: '' },
          { label: 'In the long run, price falls toward minimum AC, achieving productive and allocative efficiency', note: '' },
          { label: 'Threat of exit forces management to cut costs and eliminate slack (management slack falls)', note: '' }
        ],
        correctOrder: [3, 1, 2, 5, 0, 4],
        exp: '<strong>The correct sequence:</strong><br>1. Privatisation: firm moves from public to private ownership.<br>2. Market opened to competition: new entrants offer lower prices.<br>3. Market share falls as customers switch.<br>4. Threat of further loss forces management to cut slack &#8212; managerial incentives change.<br>5. X-efficiency improves &#8212; firm operates closer to cost frontier.<br>6. Long-run equilibrium: P approaches min AC (productive) and MC (allocative).<br><br>This sequence illustrates the theoretical benefits of privatisation and liberalisation. However, in practice, simply privatising a natural monopoly without introducing competition (e.g. British Rail, water companies) does not deliver all these steps &#8212; competition must accompany privatisation for efficiency gains to materialise. Privatisation without competition creates a private monopoly, which may be even worse than a public one (profit motive reinforces under-investment in public goods).'
      },

      /* 10 — MCQ: pharmaceutical patents */
      { type: 'mcq',
        stem: 'The patent system in the pharmaceutical industry can be justified economically as:',
        opts: [
          'A deliberate trade-off: temporarily sacrificing static efficiency (P > MC during patent period) to achieve dynamic efficiency (incentivising R&D investment in new drugs)',
          'A mechanism to achieve allocative efficiency by ensuring P = MC throughout the patent period',
          'A form of government failure because patents always lead to permanent monopoly and permanent under-production',
          'A way of maximising productive efficiency by ensuring only the most cost-efficient firm produces each drug'
        ],
        ans: 0,
        exp: 'The economic rationale for pharmaceutical patents is precisely the <strong>static-dynamic efficiency trade-off</strong>. During the 20-year patent period, the patent holder is a monopolist: P &gt; MC (allocative inefficiency) and no entry to discipline costs (potential X-inefficiency). These are real static welfare costs. However, without the patent-protected supernormal profit, no firm would invest &#163;1&#8211;2bn and 10&#8211;15 years to develop a new drug &#8212; once approved, a generic competitor could immediately copy and undercut the developer, driving P to MC (zero economic profit) and recovering none of the R&D investment. The patent system is therefore a <em>designed</em> statutory trade-off: temporary monopoly pricing is the price society pays for long-run pharmaceutical innovation. After patent expiry, generic competition drives P toward MC, recovering some allocative efficiency.'
      }

    ]
  };

})();
