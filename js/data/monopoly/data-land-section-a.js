/* ============================================================
   ECONOS – Land It · Section A data for Monopoly
   Topic: Monopoly (3.8)
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Monopoly',
  sectionLabel: 'Section A &#8211; Short questions',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

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
          hint:        '4-mark response &#8211; state the profit-maximisation rule, explain why MR lies below the demand curve, and use the data to show how price is set above MC.',
          modelAnswer: 'A profit-maximising monopolist produces at the output level where marginal revenue (MR) equals marginal cost (MC). This is the standard profit-maximisation condition for any firm: producing one more unit is worthwhile as long as the additional revenue (MR) exceeds the additional cost (MC). Once MR = MC, expanding output further would add more to costs than to revenue, reducing total profit. The data confirm this: at the profit-maximising output, both MR and MC are &#163;40. Crucially, unlike in perfect competition, the monopolist&#39;s MR curve lies below the demand (average revenue) curve. Because the monopolist faces a downward-sloping demand curve, it must reduce the price on all units sold to sell one more unit &#8211; so the revenue gained on the extra unit is less than the price, making MR &lt; price. The monopolist then reads the profit-maximising price off the demand curve at the output where MR = MC. In this example, the price (&#163;120) is set significantly above the MC (&#163;40), generating a profit margin of 33%. This divergence between price and marginal cost (P &gt; MC) represents allocative inefficiency: at this output, consumers value an additional unit at &#163;120 but it costs only &#163;40 to produce &#8211; welfare gains are forgone, producing a deadweight welfare loss.'
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
          feedbackCorrect: 'Correct. The profit-maximisation rule is MR = MC. However, because the monopolist faces a downward-sloping demand curve, MR lies below price (average revenue). So at the profit-maximising output, P &gt; MR = MC. This means price exceeds marginal cost &#8211; the hallmark of allocative inefficiency.',
          feedbackWrong:   'The correct answer is B. Profit maximisation requires MR = MC &#8211; the firm expands output until these are equal. But the monopolist&#39;s demand curve slopes downward, so MR &lt; P at every output level. At the profit-maximising quantity, P &gt; MC, which is why monopoly is allocatively inefficient. The data show P = &#163;120, MC = MR = &#163;40.'
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
        text:   'In 2022, the CMA investigated the pricing of liothyronine tablets &#8211; a thyroid medication &#8211; by Advanz Pharma. The firm held a near-monopoly supply position in the UK following the withdrawal of competing manufacturers. The CMA found that Advanz had increased the NHS price of the drug from approximately &#163;4.46 per pack in 2007 to &#163;258.19 per pack by 2019 &#8211; a rise of over 5,600%. The drug had no branded alternative and the NHS had limited ability to substitute. The CMA concluded that the pricing was excessive and unfair, and that Advanz had abused its dominant position. The company was subsequently fined &#163;21.9 million. NICE estimated the pricing had cost the NHS an extra &#163;50 million per year compared to a competitive price level.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain what is meant by deadweight welfare loss and why it arises from monopoly pricing.',
          hint:        '4-mark response &#8211; define deadweight welfare loss, explain P &gt; MC in the context of the pharmaceutical example, and explain what welfare gains are forgone.',
          modelAnswer: 'Deadweight welfare loss (DWL) is the loss of economic surplus &#8211; the sum of consumer surplus and producer surplus &#8211; that arises when a market does not produce the allocatively efficient quantity of output. In a competitive market, allocative efficiency requires price to equal marginal cost (P = MC), maximising total welfare. A monopolist, by contrast, sets MR = MC and then charges a price above MC &#8211; a condition known as allocative inefficiency (P &gt; MC). At this higher price, some consumers who would have been willing to pay more than the marginal cost of production &#8211; and for whom the transaction would have generated net welfare &#8211; are priced out of the market. These forgone transactions represent the deadweight welfare loss: a triangle on the supply-and-demand diagram between the monopoly output and the competitive output, bounded above by the demand curve and below by the marginal cost curve. The liothyronine example illustrates this starkly. Advanz Pharma raised the price from &#163;4.46 to &#163;258.19 per pack &#8211; a price far in excess of any plausible marginal cost of production for an off-patent generic medicine. Patients and the NHS were either forced to pay the elevated price or went without, the latter representing welfare lost entirely. NICE estimated the excess cost to the NHS at &#163;50 million per year &#8211; a measure of the consumer surplus transferred to the monopolist, plus the additional DWL from reduced prescribing at the inflated price.'
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
          hint:        '4-mark response &#8211; define natural monopoly using the LRAC curve argument, explain the efficiency case for single-firm production, and explain why regulation (not breakup) is the preferred response.',
          modelAnswer: 'A natural monopoly exists when the long-run average cost (LRAC) of production falls continuously over the entire range of market demand, so that a single firm can supply the whole market at lower average cost than two or more competing firms could. This typically arises in industries with very high fixed costs &#8211; such as the infrastructure of water pipes, electricity distribution networks, or rail track &#8211; and relatively low marginal costs. Duplicating this infrastructure would be enormously wasteful: if two water companies each built separate pipe networks to serve the same households, both would operate at suboptimal scale, with higher average costs than a single supplier using the full network. The data illustrate this in the water sector: Thames Water serves 16 million customers from a single integrated network, with a &#163;11.6 billion capital investment plan spanning 2020&#8211;25. Competition in the traditional sense &#8211; multiple firms competing for the same customers through duplicate infrastructure &#8211; would be technically and economically inefficient. Breaking up a natural monopoly would therefore raise, not lower, average costs, destroying the productive efficiency gains from economies of scale. However, leaving it unregulated would allow the monopolist to exploit consumers with excessive prices and restricted output. The preferred response is therefore economic regulation: Ofwat sets the allowed return on capital (4.19% WACC for 2020&#8211;25) and imposes output and investment targets, controlling the monopolist&#39;s behaviour without sacrificing the underlying scale economies.'
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
          feedbackCorrect: 'Correct. RPI-X (price-cap) regulation limits annual price increases to the rate of inflation (RPI) minus an efficiency factor (X) set by the regulator. X is typically set to reflect how much the regulator expects costs to fall through efficiency improvements. This gives firms a continuing incentive to cut costs &#8211; if they do better than X, they keep the extra profit.',
          feedbackWrong:   'The correct answer is B. RPI-X regulation caps the annual price increase at RPI minus X, where X is an efficiency improvement factor set by the regulator. The firm is incentivised to outperform the X target &#8211; any cost savings beyond X are retained as additional profit, creating a dynamic efficiency incentive that rate-of-return regulation (based on cost-plus pricing) lacks.'
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
        text:   'UK train operating companies charge substantially different prices for identical journeys depending on when tickets are purchased and the flexibility they offer. An advance-purchase off-peak ticket from London to Manchester may cost as little as &#163;28, while a walk-up anytime ticket for the same journey costs up to &#163;350. Season tickets, railcards, and group discounts further segment the market. The Office of Rail and Road noted in 2023 that price variation between the cheapest and most expensive fare for a given journey can exceed 1,000%. Critics argue that the complexity of rail pricing disadvantages passengers who cannot plan ahead, particularly commuters and lower-income travellers. Supporters argue that yield management &#8211; a form of third-degree price discrimination &#8211; allows operators to fill otherwise empty seats, spreading fixed infrastructure costs across more passengers.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain the conditions necessary for price discrimination and analyse how UK rail operators use price discrimination to increase revenue.',
          hint:        '4-mark response &#8211; state the three conditions for price discrimination (market power, separable markets, different elasticities), then apply them to the rail fares example.',
          modelAnswer: 'Price discrimination involves charging different prices to different customers for the same product or service, where the price difference is not justified by a difference in cost. Three conditions must be met for price discrimination to be possible. First, the firm must have market power &#8211; a downward-sloping demand curve &#8211; allowing it to set prices above a competitive level. UK train operating companies typically hold exclusive franchises or regional monopolies, satisfying this condition. Second, the firm must be able to segment its market &#8211; identify and separate different groups of consumers with different willingness to pay &#8211; and prevent resale between groups. Rail operators achieve this through ticket conditions: advance tickets are non-refundable and tied to specific trains, so a business traveller who needs flexibility cannot use a cheap advance ticket purchased by someone else. Third, different market segments must have different price elasticities of demand. Leisure travellers who can plan ahead and are price-sensitive face elastic demand; business travellers who need flexible tickets at short notice face inelastic demand. The extract illustrates this starkly: the same London&#8211;Manchester journey can be purchased for &#163;28 or &#163;350 depending on advance purchase and flexibility &#8211; a price variation of over 1,000%. By extracting greater consumer surplus from the inelastic segment (business travellers) and filling otherwise empty seats from the elastic segment (leisure travellers), operators increase total revenue above what a single uniform price would generate. This is third-degree price discrimination &#8211; charging different prices to identifiable groups based on their willingness to pay.'
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
          feedbackCorrect: 'Correct. Under perfect price discrimination, the monopolist charges each consumer their exact willingness to pay, extracting the entire consumer surplus as producer surplus. Output expands to the competitive level (where demand = MC), so there is no deadweight welfare loss &#8211; but all the welfare gains accrue to the producer, not consumers.',
          feedbackWrong:   'The correct answer is A. Perfect price discrimination charges every consumer their maximum willingness to pay, so the demand curve also becomes the marginal revenue curve. The firm expands output until demand = MC &#8211; the same quantity as in perfect competition &#8211; eliminating the deadweight welfare loss. However, all consumer surplus is transferred to the producer. Option D is wrong because distribution is radically different despite identical total output.'
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
          hint:        '4-mark response &#8211; identify and explain two distinct CMA tools, referring to the data where possible (e.g. merger control and fines for abuse of dominance).',
          modelAnswer: 'The CMA uses two main tools to address monopoly power. First, it reviews proposed mergers to prevent the creation or strengthening of dominant market positions that would harm consumers. The data show the CMA completed 67 merger investigations in 2022&#8211;23. When a proposed merger would result in a substantial lessening of competition &#8211; for example, if it would give the merged entity a market share above the 40% dominance threshold &#8211; the CMA can prohibit the merger outright, require divestments of certain businesses, or impose behavioural remedies (such as pricing undertakings) to preserve competitive conditions. This preventative tool is designed to maintain the competitive structure of markets before monopoly power can be established. Second, the CMA investigates and penalises the abuse of an existing dominant position. When a firm with market power engages in anti-competitive behaviour &#8211; such as excessive pricing, predatory pricing, or exclusionary conduct &#8211; the CMA can impose fines. The data show the CMA issued &#163;480 million in fines in 2022&#8211;23, illustrating this enforcement role. The pharmaceutical pricing case involving Advanz Pharma, which resulted in a &#163;21.9 million fine, exemplifies this approach. By imposing financial penalties, the CMA aims to deter future abuse and signal to other dominant firms that excessive pricing will not be tolerated.'
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
          feedbackCorrect: 'Correct. Abuse of dominant position typically involves a firm with significant market power (usually &gt;40% market share) engaging in exclusionary or exploitative behaviour &#8211; such as excessive pricing far above cost, predatory pricing below cost to drive out rivals, or exclusive dealing arrangements that foreclose competition.',
          feedbackWrong:   'The correct answer is C. Abuse of dominance requires the firm to have market power (indicated by a high market share) and to behave in a way that harms competition or exploits consumers. Exclusive supply agreements combined with excessive pricing by a dominant firm would both restrict rivals&#39; access to inputs and exploit consumer welfare. Options A, B, and D describe behaviour by firms without significant market power.'
        }
      ]
    }

  ]
};
