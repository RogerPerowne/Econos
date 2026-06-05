/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too –
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
window.ECONOS_LAND_COMPLETE = {
  topic:   'Perfect Competition',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',   color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response', color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',             color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F3C6;',
    title: 'What to do next',
    text:  'Compare your answers with the model responses. Check whether you drew both the industry diagram and the individual firm diagram where relevant &#8211; perfect competition always requires both. Confirm that your long-run equilibrium correctly shows P&#160;=&#160;MC&#160;=&#160;minimum AC. For essay questions, assess whether you evaluated dynamic efficiency as well as static efficiency, and whether your conclusion was conditional rather than absolute &#8211; the best answers acknowledge that the ideal market structure depends on the type of good and the relative importance of innovation versus price.'
  }
};

/* ---- land-intro.js ---- */
window.ECONOS_LAND_INTRO = {
  topic:        'Perfect Competition',
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
    'Applying the five assumptions of perfect competition to explain price-taking behaviour and long-run outcomes',
    'Drawing and interpreting short-run and long-run equilibrium diagrams for a perfectly competitive firm',
    'Evaluating productive, allocative, and dynamic efficiency in perfect competition versus other market structures',
    'Constructing a balanced essay on whether perfect competition is the most desirable market structure'
  ],

  tip: 'Always use two diagrams for perfect competition questions: the industry diagram (D and S determining the market price) and the individual firm diagram (horizontal demand at P*, with AC and MC). Show profit or loss on the firm diagram by comparing P to AC at the profit-maximising output Q* where MR&#160;=&#160;MC.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};

/* ---- land-section-a.js ---- */
window.ECONOS_LAND_SECTION_A = {
  topic:        'Perfect Competition',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – Assumptions and price-taking behaviour ────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Assumptions of perfect competition',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '&#163;', label: 'UK wheat price (2022 average)',      value: '&#163;286/tonne' },
          { color: 'green', icon: '&#163;', label: 'UK wheat price (2023 average)',      value: '&#163;183/tonne' },
          { color: 'blue',  icon: '#',      label: 'Number of UK wheat farms',           value: '&#8776; 10,000'  },
          { color: 'rose',  icon: '%',      label: 'Single farm\'s share of UK supply',  value: '&#60; 0.1%'      }
        ]
      },

      parts: [
        {
          id:          'q1a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain why firms in the UK wheat market are price-takers.',
          hint:        '4-mark response &#8212; identify at least two assumptions of perfect competition that together produce price-taking behaviour, and apply them to the wheat market.',
          modelAnswer: 'A price-taker is a firm that must accept the market price as given and cannot raise it without losing all its customers. In the UK wheat market this occurs because of two key assumptions of perfect competition. First, there are many sellers: with approximately 10,000 wheat farms, each supplying less than 0.1% of total UK output, no individual farm is large enough to influence the market price through its own output decisions. Even if a farm doubled its output, the effect on total market supply &#8212; and therefore on price &#8212; would be negligible. Second, the product is homogeneous: wheat of a given grade is identical regardless of which farm produced it. There is no differentiation that would justify a premium price. Buyers therefore have no reason to pay more to one farm than another, and any farm attempting to charge above the market price &#8212; which fell sharply from &#163;286 to &#163;183 per tonne &#8212; would immediately lose all sales to identical rivals. The combination of many sellers and product homogeneity means each farm faces a perfectly elastic demand curve at the prevailing market price.'
        },
        {
          id:     'q1b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which assumption of perfect competition is most directly responsible for producing the price-taking outcome for individual firms?',
          options: [
            { id: 'opt-a', text: 'Factor mobility between industries'                                               },
            { id: 'opt-b', text: 'Many buyers and sellers with no single firm large enough to influence price'      },
            { id: 'opt-c', text: 'Firms are able to make supernormal profit in the short run'                       },
            { id: 'opt-d', text: 'Consumers have different preferences for product characteristics'                 }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The assumption of many buyers and sellers &#8212; combined with product homogeneity &#8212; means no firm is large enough to influence price. Each firm is too small relative to the market to affect supply, so it takes the market price as given.',
          feedbackWrong:   'The correct answer is B. The core condition for price-taking behaviour is that there are so many buyers and sellers that no individual agent can influence the market price. Factor mobility (A) determines long-run adjustment, not the price-taking condition itself.'
        }
      ]
    },

    /* ── Q2 – Short-run supernormal profit ──────────────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Short-run supernormal profit',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the Agriculture and Horticulture Development Board, 2022',
        text:   'UK wheat prices rose sharply in early 2022 following Russia&#39;s invasion of Ukraine, which disrupted Black Sea grain exports that account for roughly 30% of global wheat trade. Prices reached a record &#163;340 per tonne in May 2022 &#8212; well above the average cost of production for most UK farms, estimated at around &#163;180&#8211;&#163;200 per tonne. Farm incomes surged in 2022, with many producers reporting the most profitable year in a generation. However, analysts warned that prices would fall once global supply adjusted, eliminating the short-run windfall.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain how a perfectly competitive firm makes supernormal profit in the short run.',
          hint:        '4-mark response &#8212; explain the condition for supernormal profit, link to the extract data, and use the two-diagram framework.',
          modelAnswer: 'In perfect competition, a firm maximises profit by producing where MR&#160;=&#160;MC. The firm is a price-taker, so MR equals the market price P. Supernormal profit occurs when, at the profit-maximising output Q*, the market price P exceeds average total cost AC: the profit per unit is (P&#160;&#8722;&#160;AC), and total supernormal profit is this margin multiplied by output. The extract illustrates this precisely: UK wheat prices reached &#163;340 per tonne while average production costs were &#163;180&#8211;&#163;200 per tonne. At &#163;340 per tonne, farms producing at their profit-maximising output were earning a margin of approximately &#163;140&#8211;&#163;160 per tonne above average cost &#8212; supernormal profit by definition. On the firm diagram, this appears as a profit rectangle: (P&#160;&#8722;&#160;AC) at Q*, shaded between the price line and the AC curve. In the short run, firms cannot enter quickly (no immediate factor mobility), so this supernormal profit persists. The extract notes analysts expected profits to normalise once supply adjusted &#8212; consistent with the long-run perfectly competitive prediction that entry erodes supernormal profit.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'In perfect competition, a firm should continue to produce in the short run as long as:',
          options: [
            { id: 'opt-a', text: 'Price is greater than average total cost'          },
            { id: 'opt-b', text: 'Price is greater than average variable cost'       },
            { id: 'opt-c', text: 'Price is greater than average fixed cost'          },
            { id: 'opt-d', text: 'Total revenue exceeds total fixed cost'            }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The shutdown condition is P&#160;&#60;&#160;AVC. As long as price covers variable costs (P&#160;&#8805;&#160;AVC), the firm makes a positive contribution to fixed costs and is better off producing than shutting down, even if it is making an overall loss (P&#160;&#60;&#160;AC).',
          feedbackWrong:   'The correct answer is B. Even if the firm is loss-making (P&#160;&#60;&#160;AC), it should continue producing provided P&#160;&#8805;&#160;AVC. Shutting down eliminates variable costs but fixed costs remain &#8212; continuing to produce generates at least some revenue to offset them. Only when P&#160;&#60;&#160;AVC does shutting down minimise losses.'
        }
      ]
    },

    /* ── Q3 – Long-run equilibrium ──────────────────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Long-run equilibrium and adjustment',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '#', label: 'UK wheat farms (2010)',               value: '&#8776; 8,500'  },
          { color: 'green', icon: '#', label: 'UK wheat farms (2022, peak prices)',   value: '&#8776; 10,200' },
          { color: 'blue',  icon: '%', label: 'Change in area under wheat 2022&#8211;23', value: '+12%'      },
          { color: 'rose',  icon: '&#163;', label: 'Wheat price change 2022&#8211;23',    value: '&#8722;36%' }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain the long-run adjustment process in perfect competition following a period of supernormal profit.',
          hint:        '4-mark response &#8212; trace the full adjustment sequence from supernormal profit through entry to long-run normal profit equilibrium.',
          modelAnswer: 'When firms in a perfectly competitive market earn supernormal profit (P&#160;&#62;&#160;AC), this acts as a signal to firms outside the market. Because there are no barriers to entry, new firms enter to capture the available profit. The data illustrates this: UK wheat farms increased from approximately 8,500 in 2010 to around 10,200 after the 2022 price spike, and the area under wheat grew by 12%. As new firms enter and existing firms expand output, the market supply curve shifts rightwards. With demand unchanged, this drives the market price downward &#8212; the wheat price fell 36% between 2022 and 2023. As the price falls, the horizontal demand curve facing each individual firm shifts down. Supernormal profit (the gap between P and AC) narrows. This process continues until price falls to the minimum of the long-run average cost curve, where P&#160;=&#160;AC and firms earn only normal profit. At this long-run equilibrium, there is no further incentive to enter, and the market stabilises. The data confirms this mechanism: entry in 2022&#8211;23 contributed to the sharp price correction that eroded the exceptional profits of 2022.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'At the long-run equilibrium of a perfectly competitive market, which of the following equalities holds for the individual firm?',
          options: [
            { id: 'opt-a', text: 'P = MR = MC = minimum AC'                      },
            { id: 'opt-b', text: 'P = MR = MC = maximum AC'                      },
            { id: 'opt-c', text: 'P = AC but P is greater than MC'               },
            { id: 'opt-d', text: 'MR = MC but P is greater than AR'              }
          ],
          correct:         'opt-a',
          feedbackCorrect: 'Correct. At long-run equilibrium in perfect competition: P = MR (price-taker), MR = MC (profit maximisation), and P = minimum AC (normal profit &#8212; no incentive to enter or exit). This simultaneously achieves allocative efficiency (P = MC) and productive efficiency (P = minimum AC).',
          feedbackWrong:   'The correct answer is A. At long-run equilibrium, P = MR = MC = minimum AC. This is the unique point where the firm is profit-maximising (MR = MC), earning only normal profit (P = AC), and producing at minimum unit cost (P = minimum AC). All four conditions hold simultaneously.'
        }
      ]
    },

    /* ── Q4 – Efficiency properties ─────────────────────────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Productive and allocative efficiency',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the Competition and Markets Authority Annual Report, 2023',
        text:   'Competition authorities around the world use the concept of &#8220;competitive harm&#8221; &#8212; the loss of welfare arising when market power raises prices above competitive levels. In a world of perfect competition, price would equal marginal cost, ensuring resources are allocated to their highest-valued uses and output is produced at minimum average cost. In practice, most UK consumer markets feature some degree of market power, generating prices above MC and average costs above their minimum, with deadweight welfare losses estimated in aggregate at tens of billions of pounds annually.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, compare the productive and allocative efficiency outcomes in perfect competition and in a monopoly market.',
          hint:        '4-mark response &#8212; define each type of efficiency, explain perfect competition&#39;s outcome, then contrast with monopoly.',
          modelAnswer: 'Productive efficiency requires a firm to produce at the minimum point of its average cost curve (P = minimum AC) &#8212; resources are not wasted in production. Allocative efficiency requires P = MC &#8212; resources flow to uses that match consumers&#39; valuations, maximising social welfare. In long-run perfect competition, the firm produces at the minimum of its AC curve where P = MC = minimum AC. Both conditions are satisfied simultaneously, as the extract implies &#8212; competitive markets eliminate the &#8220;competitive harm&#8221; of prices above MC. A monopolist, by contrast, maximises profit where MR = MC but faces a downward-sloping demand curve, so P is always above MR and therefore above MC. This means P&#160;&#62;&#160;MC: allocative inefficiency, since the price does not reflect the true marginal cost of production. The monopolist also has less incentive to minimise costs &#8212; without competitive pressure, X-inefficiency may raise AC above its minimum. The extract notes that prices above MC create deadweight welfare losses &#8212; output is produced at below-optimal levels, generating surplus that neither producer nor consumer receives. Perfect competition eliminates this loss; monopoly creates it.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Allocative efficiency is achieved when:',
          options: [
            { id: 'opt-a', text: 'The firm produces at the minimum of its average cost curve'        },
            { id: 'opt-b', text: 'Price equals marginal cost for all units produced'                 },
            { id: 'opt-c', text: 'The firm earns zero economic profit in the long run'               },
            { id: 'opt-d', text: 'Total revenue equals total cost at the profit-maximising output'   }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Allocative efficiency requires P = MC. At this point, the price consumers pay (reflecting the value they place on the last unit) exactly equals the cost of producing that last unit. Resources are allocated to their highest-valued use and there is no deadweight welfare loss.',
          feedbackWrong:   'The correct answer is B. Allocative efficiency means price equals marginal cost &#8212; the value consumers place on the last unit matches what it costs to produce. Option A describes productive efficiency (minimum AC). Option C (normal profit) is a consequence of long-run competitive equilibrium, not the definition of allocative efficiency.'
        }
      ]
    },

    /* ── Q5 – Dynamic efficiency limitation ─────────────────────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Dynamic efficiency and Schumpeter\'s critique',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%',      label: 'UK pharma R&amp;D as % of revenue (2023)', value: '15&#8211;20%'     },
          { color: 'rose',  icon: '%',      label: 'Typical wheat farm R&amp;D expenditure',   value: '&#8776; 0%'       },
          { color: 'green', icon: '&#163;', label: 'AstraZeneca R&amp;D spend (2023)',          value: '&#163;8.1bn'      },
          { color: 'blue',  icon: '#',      label: 'UK patent applications (2023)',             value: '&#8776; 15,000'   }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain Schumpeter\'s argument that perfect competition may be dynamically inefficient compared to market structures with greater market power.',
          hint:        '4-mark response &#8212; define dynamic efficiency, explain why perfect competition weakens innovation incentives, and use the data to illustrate.',
          modelAnswer: 'Dynamic efficiency refers to the rate of innovation and technological progress over time: how quickly an industry develops new products, processes, and technologies that increase productive potential. Schumpeter argued that perfect competition is dynamically inferior to market structures with greater market power for three interconnected reasons. First, firms in perfect competition earn only normal profit in the long run, leaving no retained earnings to fund R&D &#8212; the data contrast illustrates this starkly: wheat farmers, operating in a near-perfectly competitive market, spend approximately zero on R&D, while AstraZeneca, a pharmaceutical firm with significant market power, invested &#163;8.1 billion in 2023 (15&#8211;20% of revenue). Second, even if a perfectly competitive firm innovated, the innovation would be immediately copied by rivals (the product is homogeneous and information perfect), eliminating any first-mover advantage or premium price &#8212; removing the commercial reward for innovation. Third, price-taking firms lack the pricing power to charge above MC to recoup R&D investment. Patent protection &#8212; of which the UK logs around 15,000 applications per year &#8212; is a deliberate policy response: it creates a temporary monopoly right to give innovators the market power to earn a return on investment, demonstrating that policymakers accept Schumpeter&#39;s insight that dynamic efficiency requires some departure from perfect competition.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following best describes the Schumpeterian argument about perfect competition and innovation?',
          options: [
            { id: 'opt-a', text: 'Perfect competition maximises innovation because competition drives cost reduction'           },
            { id: 'opt-b', text: 'Market power is a prerequisite for significant innovation because it allows supernormal profit to fund R&amp;D' },
            { id: 'opt-c', text: 'Innovation is highest when firms are price-takers because they must cut costs to survive'    },
            { id: 'opt-d', text: 'Dynamic efficiency is always higher in perfectly competitive markets than in monopoly'       }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Schumpeter argued that supernormal profit &#8212; which requires some degree of market power &#8212; is the primary source of R&D funding and the commercial reward that motivates innovation. In perfect competition, firms earn only normal profit in the long run and have no first-mover advantage, weakening innovation incentives.',
          feedbackWrong:   'The correct answer is B. Schumpeter\'s hypothesis is that market power generates the supernormal profit and commercial incentive necessary for major innovation. While competitive pressure may drive incremental cost reductions, radical product and process innovation requires the profit and time horizon that only market power can provide.'
        }
      ]
    }

  ]
};

/* ---- land-section-b.js ---- */
window.ECONOS_LAND_SECTION_B = {
  topic:        'Perfect Competition',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK agricultural commodity markets: wheat prices and farm income volatility',
        tags:        ['&#163;340/tonne peak (2022)', 'farm income volatility', '&#8776;10,000 farms', 'price-taker behaviour'],
        defaultOpen: true,
        paragraphs: [
          'UK wheat markets provide one of the closest real-world approximations to perfect competition. There are approximately 10,000 commercial wheat-growing farms in the UK, each supplying a fraction of a percent of national output. Wheat of a given grade is highly standardised &#8212; a buyer is largely indifferent between suppliers &#8212; and prices are set transparently through commodity exchanges, with individual farmers having no meaningful ability to influence the price they receive.',
          'This price-taking structure produces significant income volatility. UK wheat prices moved from approximately &#163;150 per tonne in early 2020 to a record &#163;340 per tonne in May 2022 &#8212; driven by the Russian invasion of Ukraine disrupting Black Sea exports that account for roughly 30% of global wheat trade &#8212; before falling back to below &#163;180 per tonne by late 2023. Farmers who had locked in forward contracts at low prices during 2021 saw their input costs soar as energy and fertiliser prices rose simultaneously, resulting in significant losses. Those who had delayed selling could capitalise on the price spike.',
          'The 2022&#8211;23 cycle illustrates the adjustment mechanism of competitive markets. High prices attracted significant investment: the area of UK land planted with wheat rose by approximately 12% in autumn 2022. As supply responded domestically and global disruption eased, prices collapsed. Farm incomes, which had surged in 2022, fell sharply in 2023. Analysts at the Agriculture and Horticulture Development Board noted that this price volatility, while consistent with competitive theory, creates serious planning difficulties for farm businesses with long investment horizons.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The 2022 energy crisis: competitive versus monopoly market responses',
        tags:        ['cost-push energy shock', 'price mechanism response', 'supply inelasticity', 'short-run vs long-run'],
        defaultOpen: false,
        paragraphs: [
          'The 2022 European energy crisis exposed contrasting dynamics between competitive and non-competitive markets. In natural gas wholesale markets &#8212; where large numbers of buyers and sellers trade standardised contracts &#8212; prices responded rapidly and dramatically to the supply shock caused by reduced Russian pipeline flows, with European gas prices rising over 400% between early 2021 and August 2022. The price mechanism functioned as theory predicts: high prices rationed existing supply, incentivised demand reduction, and &#8212; over a longer horizon &#8212; stimulated investment in alternative supply sources including liquefied natural gas (LNG) terminals and renewable capacity.',
          'In retail energy markets, by contrast, concentration among a small number of large suppliers meant the adjustment was more complicated. UK household energy prices were ultimately capped through government intervention (the Energy Price Guarantee), with the cost of maintaining below-market prices for consumers falling on public finances rather than being transmitted to demand-side adjustment. Critics argued that a more competitive retail market would have transmitted price signals more efficiently, accelerating behavioural responses such as energy efficiency investment.',
          'The crisis demonstrated a fundamental insight about competitive markets: the price mechanism is a powerful allocative tool that functions most effectively when markets are close to the competitive ideal. But it also revealed the distributional cost &#8212; competitive price signals impose the full burden of supply shocks on consumers, which may be socially acceptable for luxury goods but raises serious equity concerns in essential markets such as energy and food.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Real-world approximations to perfect competition',
        tags:        ['commodity markets', 'financial markets', 'limitations of the model', 'static vs dynamic efficiency'],
        defaultOpen: false,
        paragraphs: [
          'Perfect competition is a theoretical benchmark rather than a description of any real market, but several real-world markets come close to its defining conditions. Foreign exchange markets involve millions of buyers and sellers trading identical contracts (currencies), with prices determined continuously by supply and demand and no single trader able to influence the rate. Similarly, global commodity markets for standardised grades of oil, gold, wheat, and coffee approximate many of the model\'s conditions: large numbers of participants, homogeneous products, and transparent pricing.',
          'These near-competitive markets deliver many of the efficiency properties the theory predicts. Foreign exchange markets are highly liquid, with minimal bid-ask spreads reflecting near-zero transaction costs. Commodity prices adjust rapidly to new supply and demand information &#8212; as the 2022 wheat price spike shows, markets can process a major geopolitical shock within days.',
          'However, even these close approximations fall short of the ideal. Agricultural markets involve significant government intervention: UK farmers receive subsidies through the post-Brexit Environmental Land Management scheme, distorting the price signal. Commodity trading involves informational asymmetries &#8212; large trading firms may have better data on inventories, shipping, and weather than small producers. And all these markets score poorly on dynamic efficiency: commodity producers invest little in R&D, and the homogeneous product competition they face gives them no incentive to innovate beyond cost reduction. Perfect competition&#39;s static efficiency advantages must therefore be set alongside its dynamic efficiency limitations.'
        ]
      }
    ]
  },

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
        stem:   'Explain two assumptions of perfect competition and their implications for firm behaviour.',
        tips: [
          'Identify two distinct assumptions &#8212; do not repeat the same point.',
          'For each assumption, explain the market condition it describes and then explain what that means for how firms behave.',
          'The strongest answers link each assumption to a specific behavioural implication: e.g. homogeneous product → price-taking; no barriers to entry → long-run normal profit.'
        ],
        modelAnswer: 'First, the assumption of homogeneous product means that goods sold by different firms are identical &#8212; buyers are completely indifferent between sellers. The implication is that no firm can charge a price above the market price without losing all its customers to rivals offering an equivalent good at a lower price. This makes each firm a price-taker with a perfectly elastic demand curve. Second, the assumption of no barriers to entry or exit means that firms can freely enter a market if supernormal profit exists, and exit if losses persist. The implication is that supernormal profit is competed away in the long run: new entrants increase market supply, driving the price down until P = AC and only normal profit remains. This entry/exit mechanism disciplines firms and ensures the long-run equilibrium achieves normal profit &#8212; unlike monopoly, where barriers protect supernormal profit indefinitely.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract A, examine why agricultural markets display characteristics of perfect competition and what this means for farmers\' incomes.',
        tips: [
          'Start by identifying the characteristics of perfect competition present in UK wheat markets, using specific evidence from Extract A.',
          'Explain how these characteristics produce price-taking behaviour and income volatility.',
          'Use the price data (&#163;150 → &#163;340 → &#163;180) to illustrate how competitive adjustment works.',
          'Assess whether the competitive adjustment is beneficial or harmful for farmers.',
          'Consider limitations: is the wheat market truly perfectly competitive? (subsidies, forward contracts, informational asymmetries)'
        ],
        modelAnswer: 'Extract A identifies three characteristics of UK wheat markets that approximate perfect competition. There are approximately 10,000 commercial wheat farms, with each supplying a fraction of a percent of national output &#8212; no single farm can influence price. Wheat of a given grade is highly standardised, making buyers indifferent between sellers. And prices are set on commodity exchanges with full price transparency. Together, these conditions produce the price-taking behaviour that perfect competition theory predicts: farmers accept the market price as given, with no ability to differentiate their product or charge a premium. For farmers&#39; incomes, this creates extreme volatility. Extract A documents a movement from approximately &#163;150 per tonne in 2020, to a record &#163;340 per tonne in May 2022 &#8212; as the Russian invasion disrupted 30% of global wheat trade &#8212; before collapsing below &#163;180 by late 2023. In a competitive market, price fully transmits every supply and demand shock to producers, since they have no pricing power to smooth the impact. Farmers who locked in forward contracts at low prices faced losses as input costs (energy, fertiliser) surged; others benefited from the spike. The high prices then triggered the long-run adjustment mechanism the theory predicts: UK wheat acreage rose 12% in autumn 2022, expanding supply and contributing to the subsequent price collapse. Farm incomes surged in 2022 and fell sharply in 2023. However, the extract also notes that this volatility creates &#8220;serious planning difficulties&#8221; for businesses with long investment horizons &#8212; an important qualification. Agricultural markets are not perfectly competitive: UK farmers receive government subsidies, creating price distortions, and large commodity traders may have informational advantages over individual producers. On balance, UK wheat markets exhibit many competitive characteristics and generate the income volatility the model predicts, but government intervention limits the extent to which the pure competitive model applies.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss whether perfect competition represents an ideal market structure from a welfare perspective. Refer to Extract C and your own knowledge.',
        tips: [
          'Define welfare and outline the efficiency criteria used to assess market structures.',
          'Explain the static efficiency advantages of perfect competition: allocative (P = MC) and productive (P = minimum AC) efficiency.',
          'Use Extract C: commodity markets approximate competitive conditions and deliver many efficiency benefits.',
          'Evaluate the dynamic efficiency limitation: Schumpeter\'s argument, R&D spending, patent protection as counter-evidence.',
          'Consider the distributional dimension (Extract B/C): competitive price signals can impose disproportionate burdens in essential markets.',
          'Conclude with a balanced, conditional judgement.'
        ],
        modelAnswer: 'Consumer and social welfare in economics is typically assessed against two efficiency criteria: allocative efficiency (P = MC &#8212; resources flow to their highest-valued uses) and productive efficiency (production at minimum average cost &#8212; no resource waste). Perfect competition uniquely achieves both simultaneously in long-run equilibrium, where P = MR = MC = minimum AC. This is the primary argument for its claim as an ideal market structure. In long-run competitive equilibrium, consumer surplus is maximised: the price is the lowest consistent with normal profit, with no transfer of welfare to supernormal producers as in monopoly. There is no deadweight welfare loss. As Extract C notes, near-competitive markets such as foreign exchange and commodity markets &#8212; with their minimal bid-ask spreads and rapid price adjustment &#8212; demonstrate that these efficiency properties are not merely theoretical. However, perfect competition faces a powerful dynamic efficiency critique. Extract C acknowledges that agricultural and commodity producers &#8220;invest little in R&D&#8221; and have no incentive to innovate beyond cost reduction. This is Schumpeter&#39;s argument: in a perfectly competitive market, firms earn only normal profit in the long run, leaving no retained earnings for R&D investment. Any innovation is immediately copied by rivals (homogeneous product, perfect information), eliminating the first-mover advantage that makes innovation commercially worthwhile. The pharmaceutical industry illustrates the counter-model: AstraZeneca, with significant market power, invested &#163;8.1 billion in R&D in 2023 &#8212; inconceivable for a price-taking commodity firm. The patent system explicitly creates temporary monopoly rights to incentivise innovation, acknowledging that dynamic efficiency requires departures from perfect competition. There is also a distributional dimension that the welfare concept must address. Extract B and C note that competitive price signals impose the full burden of supply shocks on consumers &#8212; appropriate for luxury goods where demand is elastic and adjustment is feasible, but problematic in essential markets such as food and energy where demand is inelastic and lower-income households spend a larger share of their income. The 2022 energy crisis prompted government intervention in the UK precisely because competitive price transmission was socially unacceptable in an essential market. Perfect competition&#39;s welfare claim rests on the premise that markets are complete and consumers can adjust &#8212; neither always holds. In conclusion, perfect competition is the static welfare benchmark because it simultaneously achieves all efficiency conditions and maximises consumer surplus. But it is not an unconditionally ideal market structure. Its weakness on dynamic efficiency makes it unsuitable as a welfare ideal for innovation-intensive industries; its price-transmission mechanism raises equity concerns in essential markets. The ideal market structure is therefore context-dependent: competitive conditions are most desirable in standardised, non-essential goods markets where static efficiency dominates; some degree of market power may be preferable where dynamic efficiency and innovation are the primary welfare criterion.'
      }
    ]
  },

  strongAnswers: [
    'Apply the five assumptions precisely and link each to a specific market prediction',
    'Use Extract A data directly &#8212; quote the price figures and relate them to theoretical conditions',
    'Distinguish static from dynamic efficiency &#8212; this is the central evaluative tension in the question',
    'Reach a conditional conclusion &#8212; the ideal market structure depends on the industry context'
  ]
};

/* ---- land-section-c.js ---- */
window.ECONOS_LAND_SECTION_C = {
  topic:        'Perfect Competition',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  question: {
    id:               'qc',
    commandWord:      'Evaluate',
    stem:             'Evaluate the view that perfect competition is the most desirable market structure for consumers.',
    marks:            25,
    suggestedMinutes: 30,

    structureTips: [
      'Define perfect competition and identify its five key assumptions.',
      'Explain the long-run equilibrium condition (P = MR = MC = minimum AC) and what it means for consumer welfare.',
      'Develop the case FOR: allocative efficiency (P = MC), productive efficiency (minimum AC), maximum consumer surplus, lowest sustainable price.',
      'Evaluate limitation 1: dynamic efficiency &#8212; Schumpeter&#39;s hypothesis, R&amp;D incentives, patent protection as counter-evidence.',
      'Evaluate limitation 2: static efficiency gains assume assumptions hold &#8212; homogeneous product, perfect information, no externalities.',
      'Consider contestability as an alternative framework: even imperfectly competitive markets can approximate competitive outcomes.',
      'Conclude with a supported, conditional judgement &#8212; for what types of goods and industries is perfect competition most desirable?'
    ],

    modelAnswer:
      '<p>Perfect competition is the market structure economists use as the benchmark for welfare assessment. It has five defining assumptions: many buyers and sellers, homogeneous product, perfect information, no barriers to entry or exit, and full factor mobility. These assumptions generate a specific long-run equilibrium in which price equals marginal cost equals minimum average cost (P&#160;=&#160;MR&#160;=&#160;MC&#160;=&#160;minimum AC), simultaneously achieving all static efficiency conditions. The central question is whether this outcome is most desirable for consumers compared to alternatives such as oligopoly or monopoly.</p>'
    + '<p>The welfare case for perfect competition is powerful. Allocative efficiency (P&#160;=&#160;MC) ensures resources flow to goods consumers value most highly &#8212; the price they pay for the last unit exactly equals the cost of producing it, so no further reallocation could increase welfare. Productive efficiency (P&#160;=&#160;minimum AC) means goods are produced at the lowest possible unit cost &#8212; consumers benefit from minimum prices consistent with firms earning normal profit. Unlike monopoly, there is no deadweight welfare loss: the competitive price maximises the sum of consumer and producer surplus. UK agricultural commodity markets illustrate these properties: wheat prices adjusted from &#163;340 per tonne at the 2022 peak back to below &#163;180 as supply expanded, transmitting cost reductions to consumers. No single firm could maintain above-cost prices because entry and price-taking behaviour eroded any supernormal profit. From a consumer perspective &#8212; lower prices, no excess profits, maximum choice &#8212; this is the ideal.</p>'
    + '<p>However, perfect competition is dynamically inefficient in ways that ultimately harm consumers. In long-run equilibrium, firms earn only normal profit with no retained earnings for R&amp;D investment. The homogeneous product and perfect information assumptions mean any innovation is immediately copied by rivals, eliminating the first-mover commercial advantage that makes innovation worthwhile. Schumpeter argued that real innovation &#8212; the pharmaceutical breakthroughs, digital technologies, and process improvements that raise living standards &#8212; requires the supernormal profit that only market power can deliver. The evidence supports this: AstraZeneca, with significant market power in pharmaceutical markets, invested &#163;8.1 billion in R&amp;D in 2023. UK wheat farmers, operating in near-competitive conditions, invest approximately zero. The patent system &#8212; which creates a temporary monopoly right to incentivise innovation &#8212; is a deliberate policy acknowledgement that dynamic efficiency requires departing from perfect competition. Consumers in innovative industries (pharmaceuticals, technology, advanced manufacturing) may therefore be better served by market structures with some degree of market power that funds the innovations they ultimately consume.</p>'
    + '<p>A further limitation is that perfect competition&#39;s efficiency properties depend entirely on its assumptions holding &#8212; and they rarely do in practice. Most goods are differentiated (not homogeneous): consumers value brand, quality, service, and convenience, which make them willing to pay above the commodity price for identifiable goods. Information is asymmetric in most markets &#8212; sellers know more about product quality than buyers (used cars, financial products, medical services), so competitive price alone does not ensure allocative efficiency. Externalities &#8212; which competitive markets systematically fail to address &#8212; mean P&#160;=&#160;MC is not sufficient for allocative efficiency when social costs diverge from private costs. The nearest real-world approximations to perfect competition (commodity markets, foreign exchange) are also among the most volatile, as the 2022 wheat price crisis demonstrated &#8212; price volatility may harm consumer welfare even while average prices are lower. Perfectly competitive markets also provide minimal product variety: the homogeneous product assumption eliminates the differentiation that many consumers value.</p>'
    + '<p>The theory of contestable markets (Baumol, 1982) offers a useful perspective: in a perfectly contestable market with free entry and exit but potentially fewer competitors, prices are also driven to competitive levels without requiring the strict assumptions of perfect competition. This suggests the benefits of competition can be achieved by maintaining contestability &#8212; low barriers to entry &#8212; rather than requiring the full perfectly competitive structure. UK competition policy focuses on preventing barriers to entry rather than atomising industries into large numbers of small firms, reflecting this insight.</p>'
    + '<p>In conclusion, perfect competition is the most desirable market structure for consumers in a static, standardised-product context where dynamic efficiency is less important: commodity markets, basic manufacturing, and price-competitive services where product homogeneity is a reasonable approximation. For these industries, the combination of lowest sustainable price, zero supernormal profit, and maximum consumer surplus makes it the clear welfare benchmark. However, for innovation-intensive industries &#8212; pharmaceuticals, technology, aerospace &#8212; some degree of market power may deliver better long-run consumer outcomes through greater R&amp;D investment, product variety, and quality improvements. Perfect competition is not unconditionally the most desirable market structure; its desirability is conditional on the nature of the good, the importance of dynamic versus static efficiency, and whether the assumptions of the model approximate reality.</p>'
  },

  strongAnswers: [
    'Define perfect competition precisely and state all five assumptions before analysing efficiency',
    'Explain both allocative AND productive efficiency &#8212; and why perfect competition achieves both simultaneously',
    'Develop the dynamic efficiency evaluation with evidence: Schumpeter, R&amp;D spending, patent protection',
    'Use specific UK evidence: agricultural price data, pharmaceutical R&amp;D, competition policy',
    'Conclude conditionally &#8212; the ideal market structure depends on the type of good and the relative importance of static vs dynamic efficiency'
  ]
};

