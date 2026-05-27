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
