/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too –
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
/* ============================================================
   ECONOS – Land It complete page data
   Topic: Monopoly (3.8)
   ============================================================ */

window.ECONOS_LAND_COMPLETE = {
  topic:   'Monopoly',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',    color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response',  color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',              color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F680;',
    title: 'What to do next',
    text:  'Review your Section A answers with particular attention to the MR = MC profit-maximisation rule and the P &gt; MC allocative inefficiency argument &#8211; these are the foundation of every monopoly question. In Section B and C, check whether you made the dynamic efficiency argument (Schumpeter) and the natural monopoly distinction clearly enough. If your essay used the word &#8220;always&#8221; without challenging it, revisit how to structure a conditional judgement. Strong students can also draw parallels with oligopoly and monopolistic competition to show how monopoly sits within the broader market structures framework.'
  }
};

/* ---- land-intro.js ---- */
/* ============================================================
   ECONOS – Land It intro page data
   Topic: Monopoly (3.8)
   ============================================================ */

window.ECONOS_LAND_INTRO = {
  topic:        'Monopoly',
  sectionA: {
    description: 'Short data-response questions worth 5 marks each. Select how many to include in your session.'
  },

  sectionB: {
    description: 'Each mark value represents a different question style. Select one or more to practise in this session.',
    options: [
      { id: 'b5',   label: '5 marks',  marks: 5  },
      { id: 'b8',   label: '8 marks',  marks: 8  },
      { id: 'b12',  label: '12 marks', marks: 12 },
      { id: 'none', label: 'Skip',     marks: 0  }
    ]
  },

  sectionC: {
    description: 'A 25-mark essay question. In the exam you choose from two options. In Land It you practise one.'
  },

  trains: [
    'Drawing and interpreting monopoly profit-maximisation diagrams (MR = MC, P &gt; MC, deadweight welfare loss)',
    'Explaining sources of monopoly power: barriers to entry, economies of scale, network effects, patents',
    'Evaluating the costs and benefits of monopoly &#8211; including dynamic efficiency, natural monopoly, and X-inefficiency',
    'Applying UK competition policy (CMA, RPI-X regulation, market investigations) to real cases'
  ],

  tip: 'Start with a Section A diagram question to practise the MR = MC profit-maximisation rule. Section B pushes you into extended analysis using real UK cases; Section C builds your full essay technique under exam conditions.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};

/* ---- land-section-a.js ---- */
/* ============================================================
   ECONOS – Land It · Section A data for Monopoly
   Topic: Monopoly (3.8)
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Monopoly',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – Monopoly profit maximisation ── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Monopoly profit maximisation',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '&#163;', label: 'Profit-maximising price (P)',                     value: '&#163;120'    },
          { color: 'green', icon: '&#163;', label: 'Marginal cost at profit-max output (MC)',         value: '&#163;40'     },
          { color: 'rose',  icon: '&#163;', label: 'Marginal revenue at profit-max output (MR)',      value: '&#163;40'     },
          { color: 'blue',  icon: '%',      label: 'Profit margin (P &#8722; AC as % of price)',     value: '33%'          }
        ]
      },

      parts: [
        {
          id:          'q1a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how a monopolist determines its profit-maximising level of output and price.',
          hint:        '4-mark response &#8212; state the profit-maximisation rule, explain why MR lies below the demand curve, and use the data to show how price is set above MC.',
          modelAnswer: 'A profit-maximising monopolist produces at the output level where marginal revenue (MR) equals marginal cost (MC). This is the standard profit-maximisation condition for any firm: producing one more unit is worthwhile as long as the additional revenue (MR) exceeds the additional cost (MC). Once MR = MC, expanding output further would add more to costs than to revenue, reducing total profit. The data confirm this: at the profit-maximising output, both MR and MC are &#163;40. Crucially, unlike in perfect competition, the monopolist&#39;s MR curve lies below the demand (average revenue) curve. Because the monopolist faces a downward-sloping demand curve, it must reduce the price on all units sold to sell one more unit &#8212; so the revenue gained on the extra unit is less than the price, making MR &lt; price. The monopolist then reads the profit-maximising price off the demand curve at the output where MR = MC. In this example, the price (&#163;120) is set significantly above the MC (&#163;40), generating a profit margin of 33%. This divergence between price and marginal cost (P &gt; MC) represents allocative inefficiency: at this output, consumers value an additional unit at &#163;120 but it costs only &#163;40 to produce &#8212; welfare gains are forgone, producing a deadweight welfare loss.'
        },
        {
          id:     'q1b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'At the monopolist&#39;s profit-maximising output, which of the following is true?',
          options: [
            { id: 'opt-a', text: 'Price equals marginal cost, so the market is allocatively efficient'                          },
            { id: 'opt-b', text: 'Marginal revenue equals marginal cost, but price exceeds marginal cost'                       },
            { id: 'opt-c', text: 'Marginal revenue exceeds price, generating supernormal profit'                                },
            { id: 'opt-d', text: 'Price equals average cost, so the monopolist earns only normal profit'                        }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The profit-maximisation rule is MR = MC. However, because the monopolist faces a downward-sloping demand curve, MR lies below price (average revenue). So at the profit-maximising output, P &gt; MR = MC. This means price exceeds marginal cost &#8212; the hallmark of allocative inefficiency.',
          feedbackWrong:   'The correct answer is B. Profit maximisation requires MR = MC &#8212; the firm expands output until these are equal. But the monopolist&#39;s demand curve slopes downward, so MR &lt; P at every output level. At the profit-maximising quantity, P &gt; MC, which is why monopoly is allocatively inefficient. The data show P = &#163;120, MC = MR = &#163;40.'
        }
      ]
    },

    /* ── Q2 – Deadweight welfare loss ── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Deadweight welfare loss from monopoly',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the Competition and Markets Authority (CMA) and NICE pharmaceutical pricing review, 2022',
        text:   'In 2022, the CMA investigated the pricing of liothyronine tablets &#8212; a thyroid medication &#8212; by Advanz Pharma. The firm held a near-monopoly supply position in the UK following the withdrawal of competing manufacturers. The CMA found that Advanz had increased the NHS price of the drug from approximately &#163;4.46 per pack in 2007 to &#163;258.19 per pack by 2019 &#8212; a rise of over 5,600%. The drug had no branded alternative and the NHS had limited ability to substitute. The CMA concluded that the pricing was excessive and unfair, and that Advanz had abused its dominant position. The company was subsequently fined &#163;21.9 million. NICE estimated the pricing had cost the NHS an extra &#163;50 million per year compared to a competitive price level.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain what is meant by deadweight welfare loss and why it arises from monopoly pricing.',
          hint:        '4-mark response &#8212; define deadweight welfare loss, explain P &gt; MC in the context of the pharmaceutical example, and explain what welfare gains are forgone.',
          modelAnswer: 'Deadweight welfare loss (DWL) is the loss of economic surplus &#8212; the sum of consumer surplus and producer surplus &#8212; that arises when a market does not produce the allocatively efficient quantity of output. In a competitive market, allocative efficiency requires price to equal marginal cost (P = MC), maximising total welfare. A monopolist, by contrast, sets MR = MC and then charges a price above MC &#8212; a condition known as allocative inefficiency (P &gt; MC). At this higher price, some consumers who would have been willing to pay more than the marginal cost of production &#8212; and for whom the transaction would have generated net welfare &#8212; are priced out of the market. These forgone transactions represent the deadweight welfare loss: a triangle on the supply-and-demand diagram between the monopoly output and the competitive output, bounded above by the demand curve and below by the marginal cost curve. The liothyronine example illustrates this starkly. Advanz Pharma raised the price from &#163;4.46 to &#163;258.19 per pack &#8212; a price far in excess of any plausible marginal cost of production for an off-patent generic medicine. Patients and the NHS were either forced to pay the elevated price or went without, the latter representing welfare lost entirely. NICE estimated the excess cost to the NHS at &#163;50 million per year &#8212; a measure of the consumer surplus transferred to the monopolist, plus the additional DWL from reduced prescribing at the inflated price.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Allocative efficiency requires which of the following conditions?',
          options: [
            { id: 'opt-a', text: 'Marginal revenue equals average cost'                                      },
            { id: 'opt-b', text: 'Price equals marginal cost (P = MC)'                                       },
            { id: 'opt-c', text: 'Average cost is minimised (productive efficiency)'                         },
            { id: 'opt-d', text: 'Marginal cost equals average revenue for all firms in the industry'        }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Allocative efficiency is achieved when P = MC. At this point, the value consumers place on the last unit (measured by price) exactly equals the cost to society of producing it (MC). Resources are allocated optimally. Monopoly fails this condition because P &gt; MC.',
          feedbackWrong:   'The correct answer is B. Allocative efficiency requires P = MC: the price consumers pay (reflecting their marginal valuation) must equal the marginal cost of production (reflecting the opportunity cost of resources used). When P &gt; MC, as in monopoly, some mutually beneficial transactions do not occur, creating a deadweight welfare loss. Productive efficiency (minimising AC) is a separate concept.'
        }
      ]
    },

    /* ── Q3 – Natural monopoly ── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Natural monopoly and regulation',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%',      label: 'Ofwat allowed return on capital for water companies (2020&#8211;25)', value: '4.19% (WACC)'  },
          { color: 'rose',  icon: '&#163;', label: 'Thames Water capital investment plan (2020&#8211;25)',                value: '&#163;11.6bn'  },
          { color: 'green', icon: '%',      label: 'UK water industry operating cost reduction target (PR24 period)',    value: '&#8722;16%'    },
          { color: 'rose',  icon: 'm',      label: 'Thames Water customers (households and businesses)',                 value: '16 million'    }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Explain what is meant by a natural monopoly and why its existence may justify government regulation rather than breaking it up.',
          hint:        '4-mark response &#8212; define natural monopoly using the LRAC curve argument, explain the efficiency case for single-firm production, and explain why regulation (not breakup) is the preferred response.',
          modelAnswer: 'A natural monopoly exists when the long-run average cost (LRAC) of production falls continuously over the entire range of market demand, so that a single firm can supply the whole market at lower average cost than two or more competing firms could. This typically arises in industries with very high fixed costs &#8212; such as the infrastructure of water pipes, electricity distribution networks, or rail track &#8212; and relatively low marginal costs. Duplicating this infrastructure would be enormously wasteful: if two water companies each built separate pipe networks to serve the same households, both would operate at suboptimal scale, with higher average costs than a single supplier using the full network. The data illustrate this in the water sector: Thames Water serves 16 million customers from a single integrated network, with a &#163;11.6 billion capital investment plan spanning 2020&#8211;25. Competition in the traditional sense &#8212; multiple firms competing for the same customers through duplicate infrastructure &#8212; would be technically and economically inefficient. Breaking up a natural monopoly would therefore raise, not lower, average costs, destroying the productive efficiency gains from economies of scale. However, leaving it unregulated would allow the monopolist to exploit consumers with excessive prices and restricted output. The preferred response is therefore economic regulation: Ofwat sets the allowed return on capital (4.19% WACC for 2020&#8211;25) and imposes output and investment targets, controlling the monopolist&#39;s behaviour without sacrificing the underlying scale economies.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'RPI-X regulation, used by UK regulators such as Ofwat and Ofgem, works by:',
          options: [
            { id: 'opt-a', text: 'Setting a maximum profit level for regulated firms, with all excess returned to consumers'                         },
            { id: 'opt-b', text: 'Allowing prices to rise by no more than the rate of inflation (RPI) minus an efficiency factor (X) each year'    },
            { id: 'opt-c', text: 'Nationalising the firm and setting price equal to marginal cost to achieve allocative efficiency'                 },
            { id: 'opt-d', text: 'Requiring the firm to set price equal to average cost, eliminating all profit'                                   }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. RPI-X (price-cap) regulation limits annual price increases to the rate of inflation (RPI) minus an efficiency factor (X) set by the regulator. X is typically set to reflect how much the regulator expects costs to fall through efficiency improvements. This gives firms a continuing incentive to cut costs &#8212; if they do better than X, they keep the extra profit.',
          feedbackWrong:   'The correct answer is B. RPI-X regulation caps the annual price increase at RPI minus X, where X is an efficiency improvement factor set by the regulator. The firm is incentivised to outperform the X target &#8212; any cost savings beyond X are retained as additional profit, creating a dynamic efficiency incentive that rate-of-return regulation (based on cost-plus pricing) lacks.'
        }
      ]
    },

    /* ── Q4 – Price discrimination ── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Price discrimination',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from Which? and Office of Rail and Road (ORR) reports on UK rail fares, 2023',
        text:   'UK train operating companies charge substantially different prices for identical journeys depending on when tickets are purchased and the flexibility they offer. An advance-purchase off-peak ticket from London to Manchester may cost as little as &#163;28, while a walk-up anytime ticket for the same journey costs up to &#163;350. Season tickets, railcards, and group discounts further segment the market. The Office of Rail and Road noted in 2023 that price variation between the cheapest and most expensive fare for a given journey can exceed 1,000%. Critics argue that the complexity of rail pricing disadvantages passengers who cannot plan ahead, particularly commuters and lower-income travellers. Supporters argue that yield management &#8212; a form of third-degree price discrimination &#8212; allows operators to fill otherwise empty seats, spreading fixed infrastructure costs across more passengers.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain the conditions necessary for price discrimination and analyse how UK rail operators use price discrimination to increase revenue.',
          hint:        '4-mark response &#8212; state the three conditions for price discrimination (market power, separable markets, different elasticities), then apply them to the rail fares example.',
          modelAnswer: 'Price discrimination involves charging different prices to different customers for the same product or service, where the price difference is not justified by a difference in cost. Three conditions must be met for price discrimination to be possible. First, the firm must have market power &#8212; a downward-sloping demand curve &#8212; allowing it to set prices above a competitive level. UK train operating companies typically hold exclusive franchises or regional monopolies, satisfying this condition. Second, the firm must be able to segment its market &#8212; identify and separate different groups of consumers with different willingness to pay &#8212; and prevent resale between groups. Rail operators achieve this through ticket conditions: advance tickets are non-refundable and tied to specific trains, so a business traveller who needs flexibility cannot use a cheap advance ticket purchased by someone else. Third, different market segments must have different price elasticities of demand. Leisure travellers who can plan ahead and are price-sensitive face elastic demand; business travellers who need flexible tickets at short notice face inelastic demand. The extract illustrates this starkly: the same London&#8211;Manchester journey can be purchased for &#163;28 or &#163;350 depending on advance purchase and flexibility &#8212; a price variation of over 1,000%. By extracting greater consumer surplus from the inelastic segment (business travellers) and filling otherwise empty seats from the elastic segment (leisure travellers), operators increase total revenue above what a single uniform price would generate. This is third-degree price discrimination &#8212; charging different prices to identifiable groups based on their willingness to pay.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Perfect (first-degree) price discrimination, if achievable, would:',
          options: [
            { id: 'opt-a', text: 'Eliminate deadweight welfare loss entirely but transfer all consumer surplus to the producer'        },
            { id: 'opt-b', text: 'Reduce total output below the competitive level, worsening allocative efficiency'                   },
            { id: 'opt-c', text: 'Increase consumer surplus because each customer pays a lower price than under a single monopoly price' },
            { id: 'opt-d', text: 'Be identical in welfare terms to a perfectly competitive outcome'                                   }
          ],
          correct:         'opt-a',
          feedbackCorrect: 'Correct. Under perfect price discrimination, the monopolist charges each consumer their exact willingness to pay, extracting the entire consumer surplus as producer surplus. Output expands to the competitive level (where demand = MC), so there is no deadweight welfare loss &#8212; but all the welfare gains accrue to the producer, not consumers.',
          feedbackWrong:   'The correct answer is A. Perfect price discrimination charges every consumer their maximum willingness to pay, so the demand curve also becomes the marginal revenue curve. The firm expands output until demand = MC &#8212; the same quantity as in perfect competition &#8212; eliminating the deadweight welfare loss. However, all consumer surplus is transferred to the producer. Option D is wrong because distribution is radically different despite identical total output.'
        }
      ]
    },

    /* ── Q5 – Competition policy ── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'UK competition policy and the CMA',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '&#163;', label: 'CMA fines issued in 2022&#8211;23',                            value: '&#163;480m'      },
          { color: 'blue',  icon: 'm',      label: 'Number of merger investigations completed by CMA (2022&#8211;23)', value: '67'              },
          { color: 'green', icon: '%',      label: 'Market share threshold for &#8220;dominance&#8221; (EU/CMA guideline)', value: '&gt;40%'  },
          { color: 'rose',  icon: 'm',      label: 'CMA market investigations opened 2020&#8211;23',              value: '6'               }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two tools used by the UK Competition and Markets Authority (CMA) to address the harmful effects of monopoly power.',
          hint:        '4-mark response &#8212; identify and explain two distinct CMA tools, referring to the data where possible (e.g. merger control and fines for abuse of dominance).',
          modelAnswer: 'The CMA uses two main tools to address monopoly power. First, it reviews proposed mergers to prevent the creation or strengthening of dominant market positions that would harm consumers. The data show the CMA completed 67 merger investigations in 2022&#8211;23. When a proposed merger would result in a substantial lessening of competition &#8212; for example, if it would give the merged entity a market share above the 40% dominance threshold &#8212; the CMA can prohibit the merger outright, require divestments of certain businesses, or impose behavioural remedies (such as pricing undertakings) to preserve competitive conditions. This preventative tool is designed to maintain the competitive structure of markets before monopoly power can be established. Second, the CMA investigates and penalises the abuse of an existing dominant position. When a firm with market power engages in anti-competitive behaviour &#8212; such as excessive pricing, predatory pricing, or exclusionary conduct &#8212; the CMA can impose fines. The data show the CMA issued &#163;480 million in fines in 2022&#8211;23, illustrating this enforcement role. The pharmaceutical pricing case involving Advanz Pharma, which resulted in a &#163;21.9 million fine, exemplifies this approach. By imposing financial penalties, the CMA aims to deter future abuse and signal to other dominant firms that excessive pricing will not be tolerated.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following outcomes would the CMA most likely investigate as a potential abuse of dominant market position?',
          options: [
            { id: 'opt-a', text: 'A firm reducing its prices below those of competitors in a highly competitive market'                       },
            { id: 'opt-b', text: 'A firm with a 15% market share launching a new product at a lower price than rivals'                       },
            { id: 'opt-c', text: 'A dominant firm setting prices far above cost and excluding rivals through exclusive supply agreements'     },
            { id: 'opt-d', text: 'Two small firms merging to achieve a combined market share of 12%'                                         }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. Abuse of dominant position typically involves a firm with significant market power (usually &gt;40% market share) engaging in exclusionary or exploitative behaviour &#8212; such as excessive pricing far above cost, predatory pricing below cost to drive out rivals, or exclusive dealing arrangements that foreclose competition.',
          feedbackWrong:   'The correct answer is C. Abuse of dominance requires the firm to have market power (indicated by a high market share) and to behave in a way that harms competition or exploits consumers. Exclusive supply agreements combined with excessive pricing by a dominant firm would both restrict rivals&#39; access to inputs and exploit consumer welfare. Options A, B, and D describe behaviour by firms without significant market power.'
        }
      ]
    }

  ]
};

/* ---- land-section-b.js ---- */
/* ============================================================
   ECONOS – Land It · Section B data for Monopoly
   Topic: Monopoly (3.8)
   ============================================================ */

window.ECONOS_LAND_SECTION_B = {
  topic:        'Monopoly',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  /* ── Context pack: 3 extracts, collapsible ─────────────────── */
  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK pharmaceutical pricing and the patent monopoly',
        tags:        ['patent monopoly', 'Advanz Pharma', 'CMA', 'dynamic efficiency'],
        defaultOpen: true,
        paragraphs: [
          'Patent protection grants pharmaceutical companies temporary monopoly rights over newly developed drugs, typically for 20 years from the date of filing. The rationale is to reward the large, risky investment in research and development: the industry average cost of bringing a new drug to market is estimated at over &#163;1 billion, with many compounds failing at late clinical stages. Without patent protection, rivals could immediately copy a successful drug and undercut the innovating firm on price, removing the incentive to invest in the first place. In this sense, the patent monopoly trades short-run consumer welfare for long-run dynamic efficiency.',
          'However, patent monopolies can generate significant harm. The CMA&#39;s 2022 investigation into Advanz Pharma found that the company had increased the NHS price of liothyronine &#8212; a thyroid medication &#8212; from &#163;4.46 per pack in 2007 to &#163;258.19 per pack by 2019, despite the drug having been off-patent for decades and facing no branded alternative. The CMA concluded that this constituted an excessive and unfair price, amounting to an abuse of a dominant market position. Advanz was fined &#163;21.9 million and ordered to reduce prices. The case highlighted how the absence of patent protection does not guarantee competitive pricing when barriers to entry from regulatory hurdles, supply chain control, and switching costs persist.',
          'The pharmaceutical sector illustrates the fundamental tension at the heart of monopoly analysis: the same firm that captures consumer surplus through high prices may also be the firm investing in life-saving innovation. UK life sciences contributed &#163;94.2 billion to the economy in 2022 and employed over 280,000 people. Blanket condemnation of pharmaceutical monopoly power risks discouraging the investment that generates tomorrow&#39;s treatments. The challenge for policymakers is to distinguish legitimate patent returns from exploitative abuse.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'Google&#39;s dominance of the UK search market',
        tags:        ['Google', 'search monopoly', 'CMA Digital Markets Unit', 'network effects'],
        defaultOpen: false,
        paragraphs: [
          'Google accounted for approximately 93% of UK internet search queries in 2023, making it the dominant platform in a market that is central to digital advertising and, by extension, to the commercial viability of much of the online economy. The CMA&#39;s Digital Markets Unit (DMU), established in 2021, identified Google&#39;s search dominance as a strategic market status requiring enhanced regulatory scrutiny. The CMA found that Google benefited from powerful network effects &#8212; more users generate more search data, which improves algorithm quality, attracting more users in a self-reinforcing cycle &#8212; and from exclusive default search agreements with smartphone manufacturers and browsers, including a reported payment of approximately &#36;18 billion per year to Apple to remain the default search engine on iPhones worldwide.',
          'Advertisers have little choice but to use Google Search if they want to reach the majority of UK internet users at the moment of search intent. The CMA found evidence that Google&#39;s text advertising prices had risen significantly above competitive levels without corresponding improvements in quality, and that search advertising margins were substantially higher than in comparable competitive digital markets. The DMU proposed that Google be designated as having Strategic Market Status, which would allow the regulator to impose specific conduct requirements &#8212; such as interoperability mandates and restrictions on self-preferencing &#8212; without requiring lengthy case-by-case abuse proceedings.',
          'Google disputes that its dominance harms consumers, arguing that its search engine is free, continuously improving, and faces competition from social media platforms, Amazon&#39;s product search, and emerging AI-powered search tools. The company also points to its significant investment in AI research &#8212; including UK-based DeepMind &#8212; as evidence of the dynamic efficiency benefits of scale. The debate reflects the wider tension in digital markets between static efficiency concerns (high advertising prices, foreclosure of rivals) and dynamic efficiency arguments (continued innovation driven by the returns to market leadership).'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Natural monopoly and regulation: the case of Thames Water',
        tags:        ['Thames Water', 'natural monopoly', 'Ofwat', 'RPI-X', 'regulatory failure'],
        defaultOpen: false,
        paragraphs: [
          'Thames Water is the UK&#39;s largest water and sewage company, serving around 16 million customers across London and the Thames Valley. As a natural monopoly &#8212; one where the long-run average cost of a single supplier falls across the full range of market demand, making duplication of the pipe network economically irrational &#8212; it operates as a regulated monopoly under the oversight of Ofwat, the economic regulator for the water sector in England and Wales. Ofwat uses a form of price-cap (RPI-X) regulation: it sets maximum prices for five-year regulatory periods, allowing the company to recover its costs and earn a permitted return on capital (4.19% weighted average cost of capital for 2020&#8211;25) while creating an incentive to cut costs beyond the efficiency target.',
          'The Thames Water case has exposed significant limitations of the regulatory model. By 2023, the company had accumulated debts of approximately &#163;14 billion &#8212; much of it the result of private equity owners extracting &#163;2.7 billion in dividends since privatisation while underinvesting in infrastructure. Ofwat&#39;s 2023 assessment found that Thames Water had failed to meet numerous performance commitments, including reducing sewage overflow into rivers, improving customer service, and controlling leakage. The company was placed under enhanced monitoring, and its financial distress raised the prospect of a special administration regime &#8212; effectively temporary renationalisation &#8212; as shareholders proved unable to provide additional equity.',
          'The Thames Water crisis illustrates both the risks of regulatory failure and the structural difficulty of regulating a natural monopoly. Ofwat&#39;s price-cap model created incentives for underinvestment: private owners could maximise short-term returns by cutting maintenance and loading the balance sheet with debt, knowing that customers have no alternative supplier. Critics argue that the model of private ownership of monopoly infrastructure is fundamentally flawed when the public interest requires long-term capital investment that reduces short-term returns. Supporters of private ownership counter that public ownership historically produced chronic underinvestment and deteriorating infrastructure quality, and that the solution is stronger regulation rather than renationalisation.'
        ]
      }
    ]
  },

  /* ── Question: one multi-part Extended Response ──────────────── */
  question: {
    id:       'q1',
    title:    'Extended response using the context pack',
    subtitle: 'Refer to the extracts where directed, and bring in your own knowledge.',
    marks:    25,

    parts: [
      {
        id:     'q1a',
        letter: 'a',
        marks:  5,
        type:   'freetext',
        stem:   'Explain the main sources of monopoly power, using examples from the context pack.',
        tips: [
          'Identify at least three distinct sources of monopoly power (barriers to entry).',
          'For each, explain the economic mechanism that creates and sustains market power.',
          'Use specific examples from the extracts to ground each source (patents, network effects, natural monopoly infrastructure).',
          'Do not simply list &#8212; each point needs an explanation of how it prevents rivals from entering.'
        ],
        modelAnswer: 'Monopoly power arises from barriers to entry &#8212; factors that prevent or deter rival firms from entering a market and competing away supernormal profits. There are several distinct sources. First, legal barriers such as patent protection grant the innovating firm temporary exclusive rights to produce a product. Extract A illustrates this in pharmaceuticals: a 20-year patent allows the pioneering firm to charge prices significantly above marginal cost, recovering its research and development costs before generic competition arrives. Even after patents expire, as the Advanz case shows, regulatory barriers and supply chain control can sustain market power. Second, network effects create natural dominance in platform markets. Extract B shows how Google&#39;s 93% share of UK search is reinforced by a self-reinforcing cycle: more users generate more data, which improves the algorithm, attracting more users. Once a network achieves critical mass, rivals cannot replicate this advantage even with superior technology, because users are locked into the dominant platform. This is reinforced by exclusive default agreements with device manufacturers &#8212; paying Apple approximately &#36;18 billion per year to remain the default search engine &#8212; which foreclose potential entry points for competitors. Third, high fixed costs and economies of scale create natural monopoly, as illustrated by Thames Water in Extract C. The cost of duplicating water infrastructure across London is prohibitive, so a single supplier can serve the whole market at lower average cost than any combination of rivals. This structural barrier requires no anti-competitive behaviour by the incumbent &#8212; the market itself selects for a single firm.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract B, examine whether Google&#39;s dominance of the UK search market is harmful to consumers and the wider economy.',
        tips: [
          'Set up the analysis: what harms does economic theory predict from monopoly? (P &gt; MC, deadweight welfare loss, X-inefficiency, barriers to entry).',
          'Apply each harm to Google&#39;s position using evidence from Extract B.',
          'Present the counter-arguments from Extract B (free product, continuous improvement, dynamic efficiency, AI investment).',
          'Assess the strength of both sides &#8212; is the harm to advertisers different from harm to search users?',
          'Reach a balanced conclusion on whether Google&#39;s dominance is harmful on balance.'
        ],
        modelAnswer: 'Economic theory predicts that monopoly causes harm through several channels: prices above marginal cost (allocative inefficiency), a deadweight welfare loss as some consumers are priced out, X-inefficiency from reduced competitive pressure, and barriers that foreclose entry by potentially more efficient rivals. The question is how well these theoretical harms map onto Google&#39;s actual dominance of the UK search market. The clearest evidence of harm is in the advertising market. Google&#39;s 93% share of UK search means advertisers who wish to reach consumers at the point of search intent have no viable alternative. Extract B reports that the CMA found advertising prices had risen significantly above competitive levels without corresponding quality improvements, and that search advertising margins were substantially higher than in comparable competitive markets. This is consistent with monopoly pricing &#8212; P &gt; MC in the advertising market &#8212; with the deadweight welfare loss falling on advertisers who are priced out and on smaller competitors who are denied the scale of advertising market they need to grow. The CMA&#39;s concern about Google&#39;s exclusive default agreements &#8212; payments to Apple to foreclose rivals&#39; distribution channels &#8212; represents a classic exclusionary barrier to entry, suggesting the dominance is actively maintained rather than simply the product of superior quality. However, the case for harm is more complicated from the search user&#39;s perspective. Google Search is free at the point of use, continuously improved, and widely regarded as the highest-quality search engine available. Users do not pay a price for search results, so the standard P &gt; MC analysis does not apply directly to them &#8212; the &#8220;price&#8221; they pay is their data, not money, which complicates welfare measurement. Extract B also notes Google&#39;s investment in AI research, including DeepMind, as a dynamic efficiency argument: the returns from market leadership may fund innovation that benefits consumers in the long run. On balance, the evidence suggests that Google&#39;s dominance is more clearly harmful in the advertising market than in the user-facing search market. The CMA&#39;s proposed designation of Strategic Market Status is a proportionate response &#8212; seeking to constrain exclusionary behaviour and create conditions for competition without attempting to break up a firm whose scale may be a precondition for the very innovation that consumers benefit from.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss whether the benefits of monopoly ever outweigh its costs. Refer to the extracts and your own knowledge.',
        tips: [
          'Define monopoly costs clearly: P &gt; MC (allocative inefficiency), deadweight welfare loss, X-inefficiency, barriers to entry.',
          'Define monopoly benefits: economies of scale, dynamic efficiency (Schumpeter), natural monopoly efficiency, cross-subsidisation.',
          'Use Extract A (pharmaceutical patent) for the dynamic efficiency case.',
          'Use Extract C (Thames Water) for the natural monopoly and regulatory failure case.',
          'Use Extract B (Google) for the network effects and innovation argument.',
          'Evaluate the conditions under which benefits outweigh costs &#8212; consider industry type, regulatory framework, and time horizon.',
          'Reach a clear, conditional judgement.'
        ],
        modelAnswer: 'Monopoly generates both well-documented costs and potential benefits. Standard economic analysis focuses on the costs &#8212; but a sophisticated answer must take the benefits seriously and evaluate the conditions under which they might outweigh the harms. The costs of monopoly are rooted in the profit-maximisation condition MR = MC combined with a downward-sloping demand curve, which means the monopolist sets price above marginal cost (P &gt; MC). At this output, some consumers who value the good above its marginal cost are priced out, creating a deadweight welfare loss &#8212; resources that could have generated net benefit to society go unallocated. The monopolist also has weaker incentives to minimise costs in the absence of competitive pressure, potentially leading to X-inefficiency: slack management, bloated cost structures, and slower adoption of productivity-enhancing technologies. High barriers to entry allow supernormal profits to persist in the long run rather than being competed away, transferring consumer surplus permanently to the producer and potentially worsening income distribution. The Thames Water case in Extract C illustrates these costs starkly: private equity owners extracted &#163;2.7 billion in dividends while the company accumulated &#163;14 billion in debt and failed its infrastructure investment targets &#8212; a textbook example of X-inefficiency and asset-stripping enabled by monopoly position and inadequate regulatory oversight. However, monopoly can also generate significant benefits. The most important is dynamic efficiency &#8212; the argument associated with Joseph Schumpeter that large firms with market power invest more in research and development because they can appropriate the returns through monopoly pricing during the innovation period. Extract A provides the clearest illustration: pharmaceutical companies require patent monopoly to justify the &#163;1 billion-plus cost of bringing a new drug to market. Without this protection, generic rivals could immediately undercut the innovator, destroying the incentive to invest in life-saving innovation. The UK life sciences sector, contributing &#163;94.2 billion to GDP and 280,000 jobs, represents a concrete benefit that must be weighed against the consumer harm from high drug prices. Completely eliminating pharmaceutical monopoly power &#8212; through price controls or compulsory licensing &#8212; would reduce current prices at the cost of future innovation. Natural monopoly presents a second category of benefit. Where economies of scale mean a single firm can supply the market more cheaply than multiple competitors &#8212; as with water infrastructure or electricity distribution networks &#8212; monopoly is productively efficient: it minimises average costs. Forced competition would mean either duplicating infrastructure wastefully or having several firms operating at suboptimal scale. The problem with natural monopoly is not that a single firm exists, but that it may exploit its position without regulation. The solution, as in the water and energy sectors, is regulated monopoly rather than breaking up the firm. Third, in platform markets characterised by network effects &#8212; as illustrated by Google in Extract B &#8212; a dominant firm may provide a higher-quality product precisely because of its scale. Google&#39;s search algorithm improves with more user data; DeepMind&#39;s AI research benefits from the financial resources of an extremely profitable parent company. Some concentration in such markets may therefore be both inevitable and beneficial, even if it requires regulatory safeguards to prevent exclusionary behaviour. Whether the benefits of monopoly outweigh its costs depends critically on three factors: the nature of the industry, the quality of regulation, and the time horizon of analysis. In innovative industries with high R&#38;D costs &#8212; pharmaceuticals, semiconductors, AI &#8212; the dynamic efficiency benefits of temporary monopoly can plausibly outweigh the static allocative inefficiency, particularly if the innovation period is well-calibrated by patent law. In natural monopoly industries, monopoly is productively efficient provided regulation is effective &#8212; the Thames Water case shows the costs when regulation fails. In markets without strong dynamic efficiency or scale economy justifications &#8212; such as the Advanz case of an off-patent generic drug &#8212; monopoly power generates harm that is difficult to justify. On balance, the case &#8220;for&#8221; monopoly is strongest where innovation or natural scale economies are present and where robust regulation constrains exploitative behaviour; the case against is most powerful where neither condition holds.'
      }
    ]
  },

  /* ── Right-rail "What strong answers do" ──────────────────────── */
  strongAnswers: [
    'Apply the MR = MC profit-maximisation diagram explicitly, not just as background knowledge',
    'Distinguish static efficiency costs (deadweight welfare loss, P &gt; MC) from dynamic efficiency benefits (innovation, R&#38;D)',
    'Use all three extracts &#8212; each represents a different type of monopoly with different implications',
    'Reach a conditional judgement that identifies the specific circumstances under which monopoly may be justified'
  ]
};

/* ---- land-section-c.js ---- */
/* ============================================================
   ECONOS – Land It · Section C data for Monopoly
   Topic: Monopoly (3.8)
   ============================================================ */

window.ECONOS_LAND_SECTION_C = {
  topic:        'Monopoly',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  /* In the exam there are two options; here we present one. */
  question: {
    id:          'qc',
    commandWord: 'Evaluate',
    stem:        'Evaluate the view that monopoly is always harmful to consumers and the wider economy.',
    marks:       25,
    suggestedMinutes: 30,

    structureTips: [
      'Define monopoly and its key features: single seller, barriers to entry, downward-sloping demand, MR below AR.',
      'Explain why monopoly is harmful: MR = MC profit-max rule → P &gt; MC → allocative inefficiency and deadweight welfare loss.',
      'Add X-inefficiency: reduced competitive pressure lowers productive efficiency.',
      'Present the case that monopoly is NOT always harmful: economies of scale, dynamic efficiency (Schumpeter hypothesis), natural monopoly.',
      'Use UK examples: pharmaceutical patents (dynamic efficiency), Thames Water natural monopoly, Google (network effects and innovation).',
      'Evaluate UK competition policy (CMA, Ofwat, Digital Markets Unit) &#8212; can regulation correct the harms while preserving the benefits?',
      'Conclude with a clear, conditional judgement &#8212; &#8220;always&#8221; is the key word to challenge.'
    ],

    modelAnswer:
      '<p>A monopoly is a market structure in which a single firm supplies the entire market, protected by high barriers to entry that prevent rivals from competing away supernormal profits. The standard economic case against monopoly rests on two core arguments: allocative inefficiency and X-inefficiency. The word &#8220;always&#8221; in the question is the critical challenge &#8212; a sophisticated answer must evaluate the conditions under which monopoly generates benefits as well as costs.</p>'
    + '<p>The theoretical case for harm is well-established. A profit-maximising monopolist produces where MR = MC, which &#8212; because the demand curve slopes downward &#8212; occurs at a quantity where price exceeds marginal cost. At this output, consumers who value an additional unit at more than its cost of production are priced out of the market: transactions that would have generated net welfare do not occur. This creates a deadweight welfare loss &#8212; represented by a triangle on a supply-and-demand diagram between the monopoly output and the competitive output, bounded above by the demand curve and below by MC. Consumer surplus is partly transferred to the monopolist as producer surplus and partly destroyed as deadweight loss. In the UK, the CMA&#39;s investigation of Advanz Pharma found precisely this pattern: the company raised the price of a generic thyroid medication by over 5,600% between 2007 and 2019, far in excess of any plausible cost justification, extracting enormous consumer surplus from NHS patients who had no alternative. The resulting &#163;21.9 million fine and mandatory price reductions confirmed that the CMA regarded the harm as real and substantial.</p>'
    + '<p>Beyond allocative inefficiency, monopoly may generate X-inefficiency &#8212; the tendency for firms insulated from competition to operate with higher costs than necessary, as managerial slack, redundant staffing, and inefficient processes persist without the discipline of market rivalry. Harvey Leibenstein&#39;s concept of X-inefficiency suggests that the absence of competitive pressure reduces the incentive to minimise costs at every level of the organisation. The Thames Water case provides a contemporary UK illustration: facing no competition for its 16 million customers, the company accumulated &#163;14 billion in debt while failing performance commitments on sewage overflows and leakage, suggesting that private equity ownership combined with monopoly position enabled a form of X-inefficiency that regulatory oversight proved unable to prevent. Barriers to entry also entrench incumbents and may foreclose entry by more innovative or efficient rivals: Google&#39;s reported payment of approximately &#36;18 billion per year to Apple to remain the default search engine on iPhones represents an exclusionary barrier that prevents challenger search engines from gaining the distribution needed to compete, regardless of their technical quality.</p>'
    + '<p>However, the view that monopoly is <em>always</em> harmful is difficult to sustain. Three categories of case weaken the &#8220;always&#8221; claim significantly. First, dynamic efficiency. Joseph Schumpeter argued that the prospect of monopoly profits is the primary incentive for innovation: firms invest in research and development precisely because, if successful, they can charge a price well above marginal cost during the period of monopoly protection. Remove the monopoly reward and the incentive to innovate collapses. The pharmaceutical industry is the most compelling example. The average cost of bringing a new drug to market exceeds &#163;1 billion, with a high probability of failure at late clinical stages. Patent protection &#8212; typically 20 years from filing &#8212; gives the innovating firm a temporary monopoly to recover this investment. The UK life sciences sector, contributing &#163;94.2 billion to GDP and supporting over 280,000 jobs, is the concrete expression of this dynamic efficiency. A policy that eliminated pharmaceutical monopoly power &#8212; through compulsory licensing or hard price caps &#8212; would reduce current drug prices at the cost of fewer future innovations. The short-run gain in consumer welfare could be outweighed by the long-run loss of life-saving treatments. Similarly, Google&#39;s Alphabet generates revenue through its advertising monopoly to fund substantial AI research, including the UK-based DeepMind laboratory whose medical imaging research has genuine clinical applications. Static efficiency analysis &#8212; focused on today&#39;s advertising price &#8212; risks missing the dynamic benefits that flow from scale.</p>'
    + '<p>Second, natural monopoly. In industries characterised by very high fixed costs and low marginal costs &#8212; water, electricity distribution, rail infrastructure &#8212; a single firm can supply the market at lower average cost than two or more competing firms could. Thames Water&#39;s integrated pipe network serving 16 million customers exemplifies this: duplicating the infrastructure would be technically wasteful and economically irrational. In such cases, monopoly is not a market failure that distorts an otherwise efficient equilibrium &#8212; it is the structure that minimises productive costs. The appropriate policy response is regulated monopoly (Ofwat&#39;s price-cap regime) rather than structural break-up, which would raise costs without improving efficiency. Third, economies of scale more generally allow large firms to achieve lower unit costs than smaller rivals, potentially passing on cost savings to consumers through lower prices &#8212; a benefit that smaller, more competitive firms cannot replicate.</p>'
    + '<p>The role of competition policy is crucial to the overall assessment. The CMA, Ofwat, Ofgem, and the Digital Markets Unit provide a framework that, in principle, preserves the efficiency benefits of scale while constraining the most harmful aspects of monopoly power. Merger control prevents the creation of dominant positions where competitive markets are feasible; abuse-of-dominance proceedings address excessive pricing and exclusionary behaviour; price-cap regulation limits the exploitation of natural monopoly. However, the Thames Water case illustrates that regulation can fail &#8212; allowing X-inefficiency and underinvestment to persist for years before the regulator intervened effectively. Government failure in regulating monopoly is therefore a countervailing concern.</p>'
    + '<p>In conclusion, the view that monopoly is <em>always</em> harmful to consumers and the wider economy is not sustainable. While the core theoretical case &#8212; P &gt; MC, deadweight welfare loss, X-inefficiency &#8212; applies in many cases and is supported by real UK evidence (Advanz, Thames Water), it fails to account for the dynamic efficiency benefits of innovation-driven monopoly (pharmaceuticals, digital platforms) and the productive efficiency of natural monopoly. Whether monopoly is harmful on balance depends on the nature of the industry, the quality of regulation, and the time horizon of analysis. Where neither innovation nor scale economies justify concentration &#8212; as in the Advanz off-patent generic drug case &#8212; monopoly power is straightforwardly harmful and should be vigorously regulated. Where dynamic efficiency or natural monopoly logic applies, the harm&#8211;benefit calculus is more finely balanced, and the challenge is designing regulatory frameworks that capture the benefits while constraining the exploitation. Monopoly is often harmful, sometimes neutral, and occasionally the least bad available market structure: the qualification &#8220;always&#8221; is the claim that the evidence does not support.</p>'
  },

  strongAnswers: [
    'Challenge the word &#8220;always&#8221; explicitly in your introduction &#8212; this frames a strong evaluative essay',
    'Apply the MR = MC → P &gt; MC → deadweight welfare loss chain precisely, with reference to a UK example',
    'Give the Schumpeter dynamic efficiency argument a full paragraph &#8212; it is the strongest counter-argument',
    'Distinguish natural monopoly from standard monopoly &#8212; they require different policy responses',
    'Conclude with a conditional judgement tied to industry characteristics, not a blanket statement either way'
  ]
};

