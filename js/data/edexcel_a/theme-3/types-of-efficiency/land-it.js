/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too –
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
window.ECONOS_LAND_COMPLETE = {
  topic:   'Types of Efficiency',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',   color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response', color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',             color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x2696;&#xFE0F;',
    title: 'What to do next',
    text:  'Review your answers against the model responses. Check whether you defined all four types of efficiency correctly &#8211; productive (min AC), allocative (P = MC), dynamic (R&#38;D and innovation), and X-efficiency (no internal slack) &#8211; before comparing market structures. Ensure your pharmaceutical analysis explained the Schumpeterian argument clearly: supernormal profits fund the R&#38;D that dynamic efficiency requires, so sacrificing static efficiency may be welfare-improving in the long run. For the essay, verify that your conclusion challenged the word &#8220;always&#8221; &#8211; dynamic efficiency is a genuine case where monopoly may outperform perfect competition.'
  }
};

/* ---- land-intro.js ---- */
window.ECONOS_LAND_INTRO = {
  topic:        'Types of Efficiency',
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
    description: 'A 25-mark essay question. In the exam you choose from two options. In Land It you practice one.'
  },

  trains: [
    'Distinguishing productive, allocative, dynamic, and X-efficiency with precise definitions and conditions',
    'Explaining why monopoly fails allocative efficiency (P &gt; MC) but may achieve dynamic efficiency',
    'Analysing the static versus dynamic efficiency trade-off in pharmaceutical markets',
    'Evaluating whether perfect competition is always more efficient than monopoly across all four types'
  ],

  tip: 'Never confuse the four types of efficiency. Productive: minimum average cost (lowest point of AC curve). Allocative: P = MC (resources match consumer preferences). Dynamic: investment in innovation over time. X-efficiency: no internal slack or waste given existing technology. A monopoly may fail productive and allocative efficiency yet outperform on dynamic efficiency &#8211; the overall verdict depends on which type matters most in context.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};

/* ---- land-section-a.js ---- */
window.ECONOS_LAND_SECTION_A = {
  topic:        'Types of Efficiency',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – Productive efficiency ──────────────────────────────── */
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

    /* ── Q2 – Allocative efficiency and monopoly ──────────────────── */
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

    /* ── Q3 – Dynamic efficiency ──────────────────────────────────── */
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

    /* ── Q4 – X-efficiency ───────────────────────────────────────── */
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

    /* ── Q5 – Comparing efficiency across market structures ──────── */
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

/* ---- land-section-b.js ---- */
window.ECONOS_LAND_SECTION_B = {
  topic:        'Types of Efficiency',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK energy market efficiency: competitive vs regulated segments',
        tags:        ['Ofgem price cap', 'static vs dynamic efficiency', 'energy retail competition', 'nationalisation debate'],
        defaultOpen: true,
        paragraphs: [
          'The UK energy market consists of two distinct segments with very different competitive structures. Electricity generation is partly competitive &#8212; multiple generators including renewable operators, nuclear plants, and gas peakers compete to sell power into the wholesale market. Energy retail &#8212; supplying homes and businesses &#8212; was deregulated in 1996 and initially featured dozens of competing suppliers. By 2024, following the collapse of over 30 smaller retailers during the 2021&#8211;22 energy price shock, the market had re-consolidated around six large suppliers with over 80% of the domestic market.',
          'Ofgem introduced a domestic energy price cap in 2019, initially designed to prevent overcharging of disengaged consumers in a market where switching had become rarer than predicted. Following the energy price shock, the cap became the mechanism by which the government shielded consumers from the full force of wholesale price rises &#8212; a form of allocative intervention that prioritised affordability over market signals. Critics argued the cap undermined productive efficiency by preventing the price signals that would incentivise energy conservation and fuel switching, while supporters argued it prevented market power exploitation by oligopolistic retailers with limited competitive pressure.',
          'The dynamic efficiency question is contested. Some economists argue that the regulated retail energy market &#8212; with guaranteed customer bases and price cap protection &#8212; reduces the incentive to invest in smart metering, demand response technology, and renewable infrastructure that would benefit consumers in the long run. Others point to the dramatic growth in renewable generation capacity (offshore wind costs down 70% since 2015) as evidence that competitive generation markets, not retail regulation, drive dynamic efficiency in the energy sector. The nationalisation debate (Labour&#39;s Great British Energy initiative) revolves around whether public ownership would improve productive efficiency through scale and coordination or reduce it through reduced competitive discipline.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'Pharmaceutical industry: static vs dynamic efficiency trade-off',
        tags:        ['patent monopoly', 'R&#38;D incentive', '&#163;1.3bn development cost', 'generic price fall 80&#8211;90%'],
        defaultOpen: false,
        paragraphs: [
          'The pharmaceutical industry presents the clearest real-world example of the trade-off between static and dynamic efficiency. Static efficiency requires P = MC &#8212; pricing drugs at or near their marginal production cost, which for many established drugs is very low (generic HIV antiretrovirals cost less than &#163;100 per year to produce). Dynamic efficiency requires investment in R&#38;D that creates the next generation of treatments &#8212; at an average cost of &#163;1.3 billion per approved drug and a failure rate of over 90% in clinical trials. These two requirements are in direct conflict: static efficiency demands low prices that cannot recover development costs; dynamic efficiency demands high prices that restrict access.',
          'The patent system resolves this trade-off by granting a 20-year statutory monopoly that allows drug developers to charge prices far above marginal cost during the patent term &#8212; earning supernormal profits that recover R&#38;D costs and provide the commercial incentive to invest in the next innovation. On patent expiry, generic manufacturers enter and prices typically fall by 80&#8211;90%, approaching the competitive equilibrium. The system sacrifices static efficiency (P &gt; MC, deadweight loss, restricted access) to preserve dynamic efficiency (innovation incentive). Approximately 18&#8211;20% of pharmaceutical revenue is reinvested in R&#38;D &#8212; among the highest R&#38;D intensity of any industry.',
          'Schumpeter&#39;s &#8220;creative destruction&#8221; argument supports this arrangement: temporary monopoly profits are the reward for successful innovation and the source of funding for future R&#38;D. Without the patent barrier, the commercial incentive to invest in risky, expensive drug development collapses &#8212; a dynamic efficiency failure that would harm consumers far more in the long run than the static efficiency loss from patent pricing. However, critics argue that pharmaceutical firms use patent profits to fund marketing and &#8220;me-too&#8221; drugs (minor variants of existing compounds) rather than genuine innovation, and that the patent system is manipulated through evergreening to extend effective monopoly periods beyond the intended 20 years.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Privatisation and efficiency: BT and the UK telecoms market',
        tags:        ['BT privatisation 1984', 'X-efficiency gains', 'Ofcom regulation', 'productive efficiency'],
        defaultOpen: false,
        paragraphs: [
          'British Telecom (BT) was privatised in 1984 &#8212; one of the earliest and most studied UK privatisations. At the time of privatisation, BT operated as a public sector monopoly: labour productivity was estimated to be 30&#8211;40% below the level achievable under competitive conditions, and capital investment in network modernisation had been chronically below the efficient level due to public expenditure constraints. Advocates of privatisation argued that private ownership, profit motive, and eventual market competition would eliminate X-inefficiency and drive productive efficiency improvement.',
          'Post-privatisation evidence is mixed but broadly supportive of efficiency gains. BT&#39;s labour productivity increased substantially through the 1990s, driven by headcount reductions and network automation &#8212; from approximately 250,000 employees in 1984 to around 90,000 in the mid-1990s. However, critics noted that these gains reflected primarily redundancy-driven downsizing rather than genuine productivity improvement, and that BT retained significant monopoly power over the local loop (the final connection to homes and businesses) that limited the competitive pressure supposed to drive efficiency. Ofcom was required to mandate network access (unbundling the local loop) before genuine retail competition developed.',
          'The dynamic efficiency question is more contested. BT&#39;s investment in fibre broadband infrastructure has lagged behind several European comparators with stronger regulatory obligations or public investment in fibre. Proponents of renationalisation argue that private BT&#39;s underinvestment in infrastructure reflects the tension between short-run profit maximisation and long-run network investment &#8212; a form of dynamic inefficiency that public ownership and patient capital could resolve. The debate mirrors the broader question of whether privatisation improves or worsens dynamic efficiency in natural monopoly industries where competitive pressure is inherently limited.'
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
        stem:   'Explain the difference between productive and allocative efficiency.',
        tips: [
          'Define each type precisely with the correct condition: productive = minimum AC (MC = AC); allocative = P = MC.',
          'Explain what each means for resource use: productive = no technical waste; allocative = resources match consumer preferences.',
          'Note where each is achieved: perfect competition achieves both in long-run equilibrium.',
          'Give an example of each type of failure &#8212; monopoly fails both.'
        ],
        modelAnswer: 'Productive efficiency occurs when a firm produces its output at the lowest possible average cost &#8212; at the minimum point of its long-run average cost (LRAC) curve. The condition is MC = AC: marginal cost equals average cost only at the minimum of the AC curve. Productive efficiency means no technical waste &#8212; the firm is extracting maximum output from its inputs. In long-run equilibrium, perfect competition forces productive efficiency because free entry erodes supernormal profit until price falls to minimum AC, at which point firms producing above or below this output are making losses and exit. Allocative efficiency requires price to equal marginal cost (P = MC). At this point, the price consumers pay for the last unit &#8212; reflecting the marginal value they place on it &#8212; exactly equals the marginal cost of producing it &#8212; the opportunity cost of the resources used. Resources are therefore allocated to their highest-value use: no output produced is valued below its cost, and no mutually beneficial trade is foregone. Perfect competition achieves P = MC because each firm is a price-taker (P = MR), and the profit-maximising condition MR = MC therefore gives P = MC. A monopoly fails both: it produces below minimum AC (productively inefficient) and sets P &gt; MC (allocatively inefficient), creating a deadweight welfare loss. Extract B illustrates this: patent monopoly pricing far above marginal cost is allocatively inefficient &#8212; the defining static cost of the pharmaceutical patent system.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'Using Extract B, examine the trade-off between static and dynamic efficiency in the pharmaceutical industry.',
        tips: [
          'Define static efficiency (productive + allocative, at a point in time) and dynamic efficiency (innovation over time).',
          'Explain why they are in conflict in pharmaceuticals: P = MC would fund no R&#38;D; high prices create access barriers.',
          'Use the data: &#163;1.3bn average development cost, 18&#8211;20% R&#38;D intensity, 80&#8211;90% price fall on patent expiry.',
          'Explain the Schumpeterian argument: supernormal profits as the reward and funding source for innovation.',
          'Consider the criticism: me-too drugs, evergreening, marketing vs genuine innovation.',
          'Reach a balanced assessment of whether the trade-off is well-calibrated.'
        ],
        modelAnswer: 'Static efficiency refers to productive and allocative efficiency at a given point in time: specifically, the condition that P = MC (allocative efficiency) and that output is at minimum AC (productive efficiency). Dynamic efficiency refers to the capacity to innovate over time &#8212; investing in R&#38;D, new products, and processes that shift the production possibility frontier outward and improve consumer welfare in the long run. Extract B establishes these two objectives as directly in conflict in pharmaceuticals. Static efficiency demands P = MC: drugs priced at marginal cost (which for many established drugs is very low &#8212; generic HIV antiretrovirals cost under &#163;100 per year to manufacture) would maximise current access. But at P = MC, no firm can recover &#163;1.3 billion in average R&#38;D costs &#8212; a figure compounded by a clinical trial failure rate above 90%. Static efficiency pricing would therefore eliminate the commercial incentive to invest in new drugs entirely, collapsing dynamic efficiency. The pharmaceutical patent system resolves this by granting a 20-year monopoly that allows P &gt; MC pricing during the patent term. The extract confirms that 18&#8211;20% of revenue is reinvested in R&#38;D &#8212; exceptionally high by any industrial standard &#8212; funded by patent-protected pricing. This is the Schumpeterian argument: temporary monopoly profits are the prize for successful innovation and the source of funding for the next generation of treatments. The system&#39;s validation is visible in the data: on patent expiry, prices fall by 80&#8211;90% as generics enter &#8212; confirming that the monopoly was temporary and that the long-run outcome is closer to competitive pricing. However, Extract B&#39;s criticism is important: pharmaceutical firms may use patent profits to fund marketing and &#8220;me-too&#8221; incremental variants rather than genuine breakthrough innovation, and evergreening extends effective monopoly periods beyond the intended 20 years. If these practices are widespread, the dynamic efficiency justification for static efficiency sacrifice is weakened. On balance, the pharmaceutical trade-off appears broadly well-designed &#8212; the patent system produces both the innovations and the eventual generic access &#8212; but requires vigilant regulation against strategic abuses that extend barriers without generating further innovation.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which perfect competition is more efficient than monopoly. Refer to the extracts and your own knowledge.',
        tips: [
          'Assess each type of efficiency in turn: productive, allocative, dynamic, X-efficiency.',
          'Perfect competition: achieves productive and allocative efficiency in long-run equilibrium; may lack dynamic efficiency due to normal profit constraint.',
          'Monopoly: fails productive (excess capacity, P &gt; min AC) and allocative (P &gt; MC) efficiency; may achieve dynamic efficiency (Schumpeter, Extract B); suffers X-inefficiency (Extract C analogy).',
          'Use extracts: Extract B for dynamic efficiency trade-off; Extract C for X-efficiency in regulated vs competitive markets; Extract A for allocative efficiency implications of price caps.',
          'Consider the Schumpeterian counter-argument: monopoly supernormal profits fund the R&#38;D that dynamic efficiency requires.',
          'Conclude: perfect competition is superior on static criteria; monopoly may have dynamic efficiency advantages &#8212; but the overall verdict depends on weighting and context.'
        ],
        modelAnswer: '<p>Whether perfect competition is more efficient than monopoly depends critically on which type of efficiency is prioritised. Across the four main types &#8212; productive, allocative, dynamic, and X-efficiency &#8212; the verdict is mixed and context-dependent, not a simple ranking in favour of either market structure.</p><p>On productive efficiency, perfect competition is superior. In long-run equilibrium, free entry drives price down to minimum average cost, forcing all firms to produce at the technically efficient output level (MC = AC). A monopolist, by contrast, operates at profit-maximising output where MR = MC &#8212; typically producing below MES, leading to excess capacity and average costs above the minimum. Extract C illustrates this with BT at privatisation: the public sector telecommunications monopoly operated with labour productivity 30&#8211;40% below competitive levels &#8212; a direct productive inefficiency that market competition and privatisation partially corrected.</p><p>On allocative efficiency, perfect competition is again superior. Each firm in perfect competition is a price-taker (MR = P), so the profit-maximising condition MR = MC gives P = MC &#8212; the condition for allocative efficiency. Resources are allocated to match consumer preferences with no deadweight welfare loss. Monopoly sets MR = MC where MR is below the demand curve, giving P &gt; MC and a deadweight loss triangle &#8212; output below the socially optimal level. Extract B illustrates this starkly: pharmaceutical patent pricing far above marginal cost is explicitly an allocatively inefficient outcome, generating restricted access and deadweight welfare loss as the deliberate cost of the innovation incentive.</p><p>On dynamic efficiency, monopoly may outperform. Perfect competition firms earn only normal profit in long-run equilibrium &#8212; insufficient to fund large-scale R&#38;D. Monopolists earn supernormal profits that can be invested in innovation. Schumpeter&#39;s argument &#8212; supported by Extract B&#39;s data showing pharmaceutical R&#38;D intensity of 18&#8211;20% of revenue &#8212; is that temporary monopoly profits are the prize for innovation and the mechanism by which it is funded. Extract A&#39;s reference to offshore wind cost reductions of 70% since 2015 in competitive generation markets complicates this: some competitive markets do achieve strong dynamic efficiency when competitive pressure itself incentivises innovation. The verdict on dynamic efficiency is therefore contested and industry-specific.</p><p>On X-efficiency, perfect competition is superior. Competitive pressure forces firms to minimise internal slack &#8212; overstaffing, managerial complacency, and wasteful practices are eliminated as conditions of survival. Monopolists face no such pressure and can allow costs to rise above the technically possible minimum, as BT&#39;s pre-privatisation performance demonstrates (Extract C). In conclusion, perfect competition is unambiguously superior on productive, allocative, and X-efficiency criteria. Monopoly&#39;s only legitimate advantage &#8212; and it is a real one &#8212; is dynamic efficiency in industries (like pharmaceuticals) where R&#38;D costs are enormous and innovation is the primary source of long-run consumer welfare. The appropriate policy response is therefore not to choose between market structures but to preserve competitive discipline on static efficiency while protecting the dynamic incentives that specific industries require &#8212; through patents, regulated competition, or targeted public investment where markets fail to deliver sufficient innovation.</p>'
      }
    ]
  },

  strongAnswers: [
    'Define all four types of efficiency precisely before evaluating each market structure against them',
    'Use the pharmaceutical trade-off (Extract B) to show that the static vs dynamic efficiency conflict is real and policy-relevant',
    'Reference X-efficiency and BT/privatisation (Extract C analogy) &#8212; competitive pressure eliminates slack that monopoly tolerates',
    'Acknowledge Schumpeter&#39;s point: monopoly supernormal profits fund R&#38;D &#8212; a genuine advantage in innovation-intensive industries',
    'Conclude conditionally: perfect competition wins on static criteria; monopoly may win on dynamic efficiency; the overall verdict depends on which matters most in context'
  ]
};

/* ---- land-section-c.js ---- */
window.ECONOS_LAND_SECTION_C = {
  topic:        'Types of Efficiency',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  question: {
    id:               'qc',
    commandWord:      'Evaluate',
    stem:             'Evaluate the view that monopoly is always less efficient than perfect competition.',
    marks:            25,
    suggestedMinutes: 30,

    structureTips: [
      'Define all four types of efficiency: productive (min AC), allocative (P = MC), dynamic (innovation over time), X-efficiency (no internal slack).',
      'Explain perfect competition&#39;s efficiency performance: achieves productive and allocative efficiency in long-run equilibrium; limited dynamic efficiency due to normal profit constraint.',
      'Explain monopoly&#39;s efficiency failures: P &gt; MC (allocative), output below MES (productive), X-inefficiency without competitive pressure.',
      'Explain the Schumpeterian case for monopoly dynamic efficiency: supernormal profits fund R&#38;D; patent-protected innovation.',
      'Use examples: pharmaceutical industry for dynamic efficiency; BT privatisation / NHS for X-inefficiency; monopoly pricing for allocative failure.',
      'Consider regulatory responses: price capping (allocative), privatisation (X-efficiency), patent system (dynamic).',
      'Conclude: monopoly is less efficient on static criteria; may outperform on dynamic efficiency in innovation-intensive industries &#8212; &#8220;always&#8221; is an overstatement.'
    ],

    modelAnswer:
      '<p>Efficiency in economics encompasses four distinct concepts: productive efficiency (output at minimum average cost), allocative efficiency (price equals marginal cost), dynamic efficiency (investment in innovation over time), and X-efficiency (no internal slack or waste). Evaluating whether monopoly is &#8220;always&#8221; less efficient than perfect competition requires assessing each criterion separately &#8212; the verdict varies significantly across types, and the claim that monopoly is always inferior is not fully supported.</p>'
    + '<p>On productive efficiency, perfect competition achieves the superior outcome. Free entry in competitive markets erodes supernormal profit until price falls to minimum average cost in long-run equilibrium: all surviving firms operate at the technically efficient scale. Monopoly, by contrast, produces at the profit-maximising output where MR = MC &#8212; typically with excess capacity, operating below the minimum efficient scale and incurring average costs above the competitive minimum. UK evidence supports this: BT at privatisation had labour productivity approximately 30&#8211;40% below comparable competitive European operators, reflecting productive inefficiency enabled by its monopoly position. Post-privatisation competitive pressure from cable operators and later broadband providers drove significant cost reduction. On allocative efficiency, perfect competition is again clearly superior. Each competitive firm is a price-taker (MR = P), so MR = MC gives P = MC &#8212; the condition for allocative efficiency. Monopoly faces a downward-sloping demand curve so MR lies below price; MR = MC therefore gives P &gt; MC and a deadweight welfare loss &#8212; a permanent allocative inefficiency. This is the standard textbook failure of monopoly, confirmed by CMA investigations into pharmaceutical pricing where drugs are priced thousands of percent above competitive benchmarks, restricting access and creating measurable deadweight loss.</p>'
    + '<p>On X-efficiency, competitive pressure again favours perfect competition. The absence of competitive discipline allows monopolists to tolerate internal slack &#8212; overstaffing, managerial complacency, and costly bureaucratic practices that would be eliminated in competitive markets where such inefficiency results in losses and exit. Leibenstein&#39;s concept of X-inefficiency captures this: firms operate above their technically possible minimum cost frontier when they face no competitive threat. The NHS nursing labour market, as a monopsonistic employer, exhibits some of these characteristics: a 12.3% vacancy rate and chronic staffing difficulties suggest resource allocation failures that competitive market pressure might partially correct. Privatisation evidence from BT, British Gas, and British Rail consistently shows post-privatisation cost reductions, though the causality between ownership change, competitive pressure, and efficiency improvement is debated.</p>'
    + '<p>The strongest counter-argument &#8212; and the most important qualification to the claim that monopoly is always less efficient &#8212; is dynamic efficiency. Perfect competition firms earn only normal profit in long-run equilibrium: there is no surplus to fund large-scale R&#38;D investment. Schumpeter&#39;s &#8220;creative destruction&#8221; argument holds that monopoly profits are the prize for innovation and the source of funding for future product development. The pharmaceutical industry exemplifies this: patent-protected monopoly pricing enables 18&#8211;20% of revenue to be reinvested in R&#38;D at an average cost of &#163;1.3bn per approved drug, producing 55 new molecular entities annually. The static efficiency cost (P &gt; MC, restricted access during the patent term) is the price paid for dynamic efficiency gains (life-saving innovations). Schumpeter&#39;s argument does not justify every monopoly &#8212; it applies most strongly in industries where innovation is the primary source of consumer value and where R&#38;D costs are high and irreversible.</p>'
    + '<p>In conclusion, monopoly is less efficient than perfect competition on three of the four criteria &#8212; productive, allocative, and X-efficiency &#8212; and competition policy is well-justified in seeking to promote competitive market structures on these grounds. However, the claim that monopoly is &#8220;always&#8221; less efficient is overstated: in innovation-intensive industries, the dynamic efficiency generated by monopoly supernormal profits may more than compensate for the static efficiency losses. Policy should therefore seek competitive structures where possible, while designing targeted interventions &#8212; patents, regulated monopoly, public investment &#8212; to preserve dynamic efficiency where market structure makes perfect competition unattainable or dynamically suboptimal.</p>'
  },

  strongAnswers: [
    'Define all four types of efficiency at the outset &#8212; the essay must assess monopoly against each separately',
    'Use the BT privatisation example for X-efficiency and pharmaceutical pricing for allocative inefficiency &#8212; UK-specific evidence',
    'Apply Schumpeter&#39;s argument for dynamic efficiency clearly: supernormal profits → R&#38;D funding → innovation → long-run consumer benefit',
    'Acknowledge that &#8220;always&#8221; is the key word in the question &#8212; finding one counter-example (dynamic efficiency) is sufficient to reject the absolute claim',
    'Conclude conditionally: monopoly is inferior on static criteria; may be superior on dynamic efficiency; the overall verdict depends on which criterion matters most in the specific industry context'
  ]
};

