window.ECONOS_LAND_SECTION_A = {
  topic:        'Types of Efficiency',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  questions: [

    /* ── Q1 — Productive efficiency ──────────────────────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Productive efficiency',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'green', icon: '&#163;', label: 'Average cost per unit &#8212; UK car manufacturer at MES',   value: '&#163;8,200'  },
          { color: 'rose',  icon: '&#163;', label: 'Average cost per unit &#8212; small rival below MES',        value: '&#163;11,400' },
          { color: 'blue',  icon: '%',      label: 'Minimum efficient scale as % of market output (UK cars)',    value: '&#8776;35%'   },
          { color: 'rose',  icon: '%',      label: 'Excess capacity (output gap from minimum AC) &#8212; monopoly example', value: '22%' }
        ]
      },

      parts: [
        {
          id:          'q1a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain what is meant by productive efficiency and the condition required for a firm to achieve it.',
          hint:        '4-mark response &#8212; define productive efficiency (output at minimum AC), explain the condition MC = AC at the minimum, and use the data to illustrate cost differences.',
          modelAnswer: 'Productive efficiency occurs when a firm produces output at the lowest possible average cost &#8212; at the minimum point of its long-run average cost (LRAC) curve. At this output level, marginal cost equals average cost (MC = AC): adding one more unit does not raise or lower average cost, because the marginal cost of the last unit exactly equals the average. If a firm operates above or below this minimum-cost output, it is productively inefficient. The data illustrates this: a UK car manufacturer operating at minimum efficient scale (MES) achieves an average cost of &#163;8,200 per unit, while a smaller rival below MES incurs &#163;11,400 per unit &#8212; a 39% cost disadvantage. This gap reflects productive inefficiency: the smaller firm is producing below the minimum AC output, meaning resources are being wasted relative to best-practice technology. The data also shows a monopoly example with 22% excess capacity &#8212; the firm produces below MES, meaning AC is higher than technically possible. Productively efficient firms maximise the output achievable from their inputs, minimising waste and allowing resources to be deployed elsewhere in the economy.'
        },
        {
          id:     'q1b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following correctly distinguishes productive from allocative efficiency?',
          options: [
            { id: 'opt-a', text: 'Productive efficiency requires P = MC; allocative efficiency requires output at minimum AC'  },
            { id: 'opt-b', text: 'Productive efficiency requires output at minimum AC; allocative efficiency requires P = MC'  },
            { id: 'opt-c', text: 'Both require the same condition: output where MC intersects the demand curve'                },
            { id: 'opt-d', text: 'Productive efficiency applies only to monopolies; allocative efficiency applies only to competitive markets' }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Productive efficiency: output at the minimum point of the AC curve (MC = AC) &#8212; minimum cost per unit. Allocative efficiency: output where P = MC &#8212; resources allocated to match consumer preferences (price = marginal social cost). A firm can achieve one without the other: perfect competition achieves both in long-run equilibrium; monopoly achieves neither.',
          feedbackWrong:   'The correct answer is B. Productive efficiency requires output at the minimum AC point (MC = AC), ensuring minimum cost per unit &#8212; no technical waste. Allocative efficiency requires P = MC, ensuring the value consumers place on the last unit (price) equals the cost of producing it (MC) &#8212; optimal resource allocation. These are distinct criteria requiring different conditions.'
        }
      ]
    },

    /* ── Q2 — Allocative efficiency and monopoly ──────────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Allocative efficiency and monopoly pricing',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from CMA market study into pharmaceutical pricing, 2023',
        text:   'The CMA found that several pharmaceutical firms had charged prices for off-patent drugs that were 2,000% above competitive benchmark levels &#8212; exploiting the absence of generic competition following a market withdrawal. In one case, a drug for Addison&#39;s disease rose from &#163;70 per pack to &#163;9,407. The CMA noted that at these prices, many patients either could not access the drug or faced significant NHS budget pressure. Economic analysis submitted to the CMA estimated the deadweight welfare loss from monopoly pricing in these cases amounted to tens of millions of pounds annually, representing output that would have been produced in a competitive market but was foregone due to the monopolist setting price far above marginal cost.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain why monopoly pricing fails to achieve allocative efficiency.',
          hint:        '4-mark response &#8212; define allocative efficiency (P = MC), explain why a monopolist sets MR = MC which gives P &gt; MC, explain the deadweight welfare loss, and use the extract.',
          modelAnswer: 'Allocative efficiency requires that price equals marginal cost (P = MC) &#8212; the price consumers pay for the last unit equals the cost of producing it, ensuring resources are allocated to match consumer preferences without waste. A monopolist fails to achieve this because it maximises profit by setting MR = MC. Since the monopolist faces a downward-sloping demand curve, MR lies below the demand curve &#8212; meaning that when MR = MC, the price on the demand curve (what consumers pay) is above MC. This creates a wedge P &gt; MC: consumers value additional units above their cost of production, but the monopolist does not supply them because doing so would require lowering price on all units, reducing revenue. The extract illustrates this in an extreme form: a drug for Addison&#39;s disease priced at &#163;9,407 versus a competitive benchmark, with marginal cost likely near the competitive price. At &#163;9,407, there are patients who value the drug above MC but below &#163;9,407 and so do not access it &#8212; this is allocative inefficiency. The extract confirms the CMA estimated deadweight welfare loss of tens of millions annually: output that would have been mutually beneficial was not produced because the monopolist&#39;s profit motive restricted supply. This deadweight triangle represents the allocative efficiency loss from monopoly.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Allocative efficiency is achieved when:',
          options: [
            { id: 'opt-a', text: 'The firm produces at the minimum point of its average cost curve'                    },
            { id: 'opt-b', text: 'Price equals average cost, ensuring zero economic profit'                            },
            { id: 'opt-c', text: 'Price equals marginal cost, so consumer value matches the cost of production'       },
            { id: 'opt-d', text: 'The firm maximises profit by setting marginal revenue equal to marginal cost'        }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. Allocative efficiency requires P = MC: the price consumers pay (reflecting their marginal value of the good) exactly equals the marginal cost of production (the opportunity cost of resources used). At this point, resources are allocated to their highest-value use &#8212; neither over- nor under-producing relative to what consumers would choose if they bore the full cost.',
          feedbackWrong:   'The correct answer is C. Allocative efficiency requires P = MC. This condition ensures that the marginal social benefit of the last unit produced (measured by the price consumers are willing to pay) equals the marginal social cost of producing it. Any output below this level leaves mutually beneficial transactions unrealised (deadweight loss). Perfect competition achieves P = MC in long-run equilibrium; monopoly sets P &gt; MC.'
        }
      ]
    },

    /* ── Q3 — Dynamic efficiency ──────────────────────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Dynamic efficiency and innovation',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%',      label: 'R&#38;D as % of revenue &#8212; Big Pharma (global avg)',  value: '18&#8211;20%' },
          { color: 'green', icon: '%',      label: 'R&#38;D as % of revenue &#8212; generic manufacturers',   value: '&#60;3%'      },
          { color: 'rose',  icon: '&#163;', label: 'Average cost to develop a new drug (industry estimate)',   value: '&#163;1.3bn'  },
          { color: 'blue',  icon: '#',      label: 'New molecular entities approved globally (2023)',          value: '55'           }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain the tension between static and dynamic efficiency in the pharmaceutical market.',
          hint:        '4-mark response &#8212; define static (allocative/productive) efficiency and dynamic efficiency, use the data on R&#38;D spend to explain the trade-off, and reference Schumpeter if appropriate.',
          modelAnswer: 'Static efficiency refers to productive and allocative efficiency at a point in time &#8212; producing at minimum AC and setting P = MC to maximise current welfare. Dynamic efficiency refers to investment in innovation over time that reduces costs, creates new products, and shifts the production possibility frontier outward &#8212; improving welfare in the long run. In the pharmaceutical market, these two forms of efficiency are in direct tension. Static efficiency requires P = MC: drugs priced at marginal cost (which is low once developed &#8212; generic prices are near zero for many medicines) would maximise current patient access. However, the data shows big pharma invests 18&#8211;20% of revenue in R&#38;D, and developing a new drug costs &#163;1.3 billion. This investment is only commercially rational if the firm can earn supernormal profits through patent-protected pricing &#8212; prices far above marginal cost. If prices were forced down to marginal cost (static efficiency achieved), R&#38;D investment would collapse, as generic manufacturers &#8212; who invest less than 3% in R&#38;D &#8212; demonstrate. Schumpeter&#39;s argument (&#8220;creative destruction&#8221;) suggests that monopoly profits are the reward for innovation and the source of funding for the next generation of products: 55 new molecular entities approved globally in 2023 represent the dynamic gain from this system. The trade-off is clear: static efficiency (affordable access now) versus dynamic efficiency (the innovations that create future affordable treatments).'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Joseph Schumpeter argued that large firms with market power were conducive to innovation because:',
          options: [
            { id: 'opt-a', text: 'Perfect competition creates the strongest incentive to innovate since firms face price competition'  },
            { id: 'opt-b', text: 'Supernormal profits provide the finance and incentive for risky R&#38;D investment'                 },
            { id: 'opt-c', text: 'Monopoly pricing always leads to higher output than perfect competition'                             },
            { id: 'opt-d', text: 'Small firms are too risk-averse to invest in research and development'                              }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Schumpeter argued that supernormal profits &#8212; earned by firms with market power &#8212; provide both the financial resources and the commercial incentive to invest in risky, expensive R&#38;D. The prospect of patent-protected profits from a successful innovation acts as the &#8220;prize&#8221; that motivates the high-risk R&#38;D investment. This is the dynamic efficiency case for tolerating some market power.',
          feedbackWrong:   'The correct answer is B. Schumpeter&#39;s argument for large firms and market power rests on the claim that supernormal profits finance and incentivise R&#38;D. In perfectly competitive markets, firms earn only normal profit in long-run equilibrium &#8212; insufficient to fund large-scale R&#38;D. Supernormal profits from market power, by contrast, can be reinvested in innovation that benefits consumers in the long run even if current static efficiency is sacrificed.'
        }
      ]
    },

    /* ── Q4 — X-efficiency ───────────────────────────────────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'X-inefficiency in monopoly',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from House of Commons Transport Select Committee report on British Rail privatisation, 1993',
        text:   'Before privatisation in 1994, British Rail faced no competitive pressure on most routes: it operated as a public sector monopoly with guaranteed government funding regardless of efficiency. Internal reviews found that labour productivity was approximately 40% below the levels achieved by comparable European operators in partially competitive markets. Overstaffing, restrictive working practices, and poor asset management were cited as persistent problems that no internal management incentive could correct. Proponents of privatisation argued that exposing train operations to franchise competition and private ownership would eliminate this X-inefficiency, forcing operators to cut costs toward the technical frontier. Critics argued that the natural monopoly characteristics of rail infrastructure meant that only the semblance of competition, not genuine contestability, could be achieved.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain what is meant by X-inefficiency and why it is common in monopolies.',
          hint:        '4-mark response &#8212; define X-inefficiency (Leibenstein), explain why competitive pressure eliminates it, explain why monopoly allows it to persist, and use the extract.',
          modelAnswer: 'X-inefficiency, identified by Harvey Leibenstein (1966), refers to the internal slack and waste that arises when a firm operates above its minimum possible cost for a given output level &#8212; not because of scale or output mix problems (which determine the position of the cost curve) but because management and workers are not motivated to minimise costs and maximise effort. The theoretical minimum cost curve assumes all firms use inputs as efficiently as technically possible; X-inefficiency is the gap between this frontier and actual costs. The extract illustrates this in British Rail: labour productivity was approximately 40% below comparable European operators, with overstaffing and restrictive working practices &#8212; clear X-inefficiency. X-inefficiency is common in monopolies for a structural reason: competitive pressure is the primary mechanism by which slack is eliminated. In competitive markets, firms that allow costs to rise above the efficient frontier face rivals who do not &#8212; and are eventually priced out of the market. The discipline of competition forces cost minimisation as a condition of survival. Monopolists face no such pressure: they can raise price to recover higher costs without losing customers to rivals. The extract confirms this &#8212; guaranteed government funding regardless of efficiency removed all incentive to control costs, allowing X-inefficiency to persist for decades until the competitive threat of privatisation was introduced.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'X-inefficiency, as identified by Leibenstein, refers to:',
          options: [
            { id: 'opt-a', text: 'The deadweight welfare loss triangle created by monopoly pricing above marginal cost'              },
            { id: 'opt-b', text: 'The higher average costs that result from producing below the minimum efficient scale'             },
            { id: 'opt-c', text: 'The internal slack and waste that arises when competitive pressure is absent'                     },
            { id: 'opt-d', text: 'The cost of government regulation imposed on monopoly firms'                                      }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. Leibenstein&#39;s X-inefficiency (1966) refers to the cost inflation that arises from managerial slack and worker effort below the technically possible maximum &#8212; when competitive pressure is absent, firms do not minimise costs. X-inefficiency is distinct from allocative inefficiency (P &gt; MC deadweight loss) and from productive inefficiency due to scale.',
          feedbackWrong:   'The correct answer is C. X-inefficiency (Leibenstein, 1966) specifically refers to internal slack &#8212; firms operating above the minimum possible cost frontier because competitive discipline is absent. It is not the same as the deadweight loss triangle (which is allocative inefficiency) or the scale-related cost disadvantage (productive inefficiency below MES). X-inefficiency arises from within the firm &#8212; managerial complacency, overstaffing, poor asset management.'
        }
      ]
    },

    /* ── Q5 — Comparing efficiency across market structures ──────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Efficiency in perfect competition versus monopoly',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'green', icon: 'P',      label: 'Perfect competition: long-run price',           value: 'P = MC = min AC' },
          { color: 'rose',  icon: 'P',      label: 'Monopoly: price',                               value: 'P &gt; MC &gt; min AC' },
          { color: 'blue',  icon: '%',      label: 'R&#38;D investment as % revenue &#8212; monopoly vs small PC firm', value: 'Higher in monopoly' },
          { color: 'rose',  icon: '%',      label: 'X-efficiency indicator: cost above technical frontier (monopoly)', value: '+15&#8211;25% est.' }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, compare the efficiency performance of perfect competition and monopoly across productive, allocative, dynamic, and X-efficiency.',
          hint:        '4-mark response &#8212; address all four types of efficiency, using the data to support each comparison. Acknowledge where monopoly may outperform (dynamic efficiency).',
          modelAnswer: 'Productive efficiency: the data shows perfect competition achieves P = MC = minimum AC in long-run equilibrium &#8212; firms produce at minimum average cost. Monopoly pricing above minimum AC and operating with excess capacity means average cost exceeds the minimum &#8212; monopoly is productively inefficient. Allocative efficiency: the data shows P = MC in perfect competition &#8212; the condition for allocative efficiency. Monopoly sets P &gt; MC (profit-maximising output where MR = MC is below the competitive level), creating a deadweight welfare loss. Perfect competition achieves allocative efficiency; monopoly does not. Dynamic efficiency: the data shows monopoly invests a higher share of revenue in R&#38;D. Monopoly supernormal profits provide both the finance and incentive for innovation &#8212; consistent with Schumpeter&#39;s argument that temporary monopoly profits are the reward for successful R&#38;D. Perfect competition earns only normal profit in long-run equilibrium, leaving little surplus for innovation investment. Monopoly may outperform on dynamic efficiency. X-efficiency: the data suggests monopoly operates 15&#8211;25% above the technical cost frontier due to internal slack. Without competitive pressure, monopolists tolerate overstaffing and managerial complacency. Perfect competition enforces X-efficiency as a condition of survival. Overall, perfect competition is superior on three of the four efficiency criteria; monopoly has a legitimate advantage only on dynamic efficiency &#8212; and this is contested.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'In long-run equilibrium, a perfectly competitive firm achieves both productive and allocative efficiency because:',
          options: [
            { id: 'opt-a', text: 'Government regulation forces it to set P = MC and produce at minimum AC'                                  },
            { id: 'opt-b', text: 'Competition drives price down to minimum AC (productive) and MR = demand means P = MC (allocative)'      },
            { id: 'opt-c', text: 'Perfect competition eliminates all barriers to entry and exit, preventing any supernormal profit'         },
            { id: 'opt-d', text: 'All firms in perfect competition share the same technology and therefore have the same minimum AC'        }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. In perfect competition, free entry erodes supernormal profit until P = minimum AC &#8212; achieving productive efficiency. Since each firm is a price-taker, MR = AR = Price, and the profit-maximising condition MR = MC gives P = MC &#8212; achieving allocative efficiency. Both conditions are achieved simultaneously without regulation.',
          feedbackWrong:   'The correct answer is B. Perfect competition achieves productive efficiency because free entry drives price down to minimum AC over time &#8212; firms earning supernormal profit attract entrants who push price down. Allocative efficiency follows because each firm is a price-taker: MR = AR = Price, so MR = MC implies P = MC. Both conditions emerge from competitive market dynamics, not external regulation.'
        }
      ]
    }

  ]
};
