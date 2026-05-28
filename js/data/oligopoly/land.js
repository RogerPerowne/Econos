/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too —
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
window.ECONOS_LAND_COMPLETE = {
  topic:   'Oligopoly',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',   color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response', color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',             color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F3C6;',
    title: 'What to do next',
    text:  'Compare your answers with the model responses. Check whether you applied strategic interdependence &#8211; not just listed characteristics &#8211; and whether you drew the kinked demand curve with the vertical MR gap where relevant. For essay questions, assess whether your answer distinguished competitive from collusive oligopoly, used specific UK evidence (supermarket market shares, petrol CMA findings, banking profit data), and reached a conditional conclusion rather than an absolute judgement about whether oligopoly is harmful.'
  }
};

/* ---- land-intro.js ---- */
window.ECONOS_LAND_INTRO = {
  topic:        'Oligopoly',
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
    'Interpreting concentration ratios and explaining what they reveal about market structure',
    'Drawing and explaining the kinked demand curve model and the vertical gap in MR',
    'Applying game theory and the prisoner\'s dilemma to oligopoly pricing decisions',
    'Evaluating whether oligopoly is beneficial or harmful to consumers using real UK evidence'
  ],

  tip: 'Strategic interdependence is the central concept in oligopoly: every decision a firm makes must account for how rivals will react. When applying the kinked demand curve, remember that the vertical gap in the MR curve is the key analytical point &#8211; as long as MC passes through the gap, price remains rigid at P* even if costs change.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};

/* ---- land-section-a.js ---- */
window.ECONOS_LAND_SECTION_A = {
  topic:        'Oligopoly',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – Concentration ratios ──────────────────────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Concentration ratios and market structure',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%', label: 'Tesco UK grocery market share (2024)',       value: '27.3%' },
          { color: 'blue',  icon: '%', label: 'Sainsbury\'s UK grocery market share (2024)', value: '15.1%' },
          { color: 'blue',  icon: '%', label: 'Asda UK grocery market share (2024)',         value: '12.6%' },
          { color: 'blue',  icon: '%', label: 'Morrisons UK grocery market share (2024)',    value: '8.7%'  }
        ]
      },

      parts: [
        {
          id:          'q1a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain what the four-firm concentration ratio (CR4) measures and what the data tells us about the structure of the UK grocery market.',
          hint:        '4-mark response &#8212; define the CR4, calculate it from the data, interpret what it reveals about market structure, and consider its limitations.',
          modelAnswer: 'The four-firm concentration ratio (CR4) measures the combined market share of the four largest firms in an industry. It is expressed as a percentage of total market sales and is used by economists and competition authorities to assess how concentrated market power is. A CR4 above approximately 60% is generally taken to indicate an oligopolistic market structure. Using the data, the CR4 for the UK grocery market is: 27.3 + 15.1 + 12.6 + 8.7 = 63.7%. This indicates a moderately concentrated oligopoly: the four largest firms together account for almost two-thirds of UK grocery sales, with Tesco alone holding over a quarter of the market. This concentration implies significant market power for the dominant firms &#8212; the ability to influence price, buying terms with suppliers, and competitive conditions. However, the CR4 has limitations: it does not account for the rise of discounters such as Aldi and Lidl (which together hold approximately 18% of the market and have driven competitive behaviour), and it measures concentration only at the four-firm level, masking whether market share is evenly distributed or dominated by one firm (the Herfindahl-Hirschman Index provides a more complete picture). Nonetheless, the data clearly supports classifying UK grocery retail as an oligopoly.'
        },
        {
          id:     'q1b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'The four-firm concentration ratio (CR4) is defined as:',
          options: [
            { id: 'opt-a', text: 'The market share of the single largest firm in the industry'                        },
            { id: 'opt-b', text: 'The combined market share of the four largest firms, expressed as a percentage'     },
            { id: 'opt-c', text: 'The sum of squared market shares of all firms in the industry'                      },
            { id: 'opt-d', text: 'The ratio of the largest firm\'s market share to the smallest firm\'s market share' }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The CR4 is the combined market share of the four largest firms, expressed as a percentage of total market sales. A CR4 above roughly 60% is commonly used as a threshold for identifying oligopoly. The Herfindahl-Hirschman Index (HHI) &#8212; the sum of squared market shares &#8212; is the alternative described in option C.',
          feedbackWrong:   'The correct answer is B. The CR4 is the sum of the market shares of the four largest firms. Option A (largest firm only) would be the one-firm concentration ratio. Option C (sum of squared shares) is the Herfindahl-Hirschman Index (HHI), a more sensitive alternative measure used by competition authorities.'
        }
      ]
    },

    /* ── Q2 – Kinked demand curve ───────────────────────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'The kinked demand curve and price rigidity',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from Which? consumer price research report, 2023',
        text:   'Petrol retail prices in the UK display a pattern economists call &#8220;rockets and feathers&#8221;: prices rise quickly when the wholesale oil price increases, but fall slowly when wholesale costs decline. Research by the Competition and Markets Authority found that in 2022&#8211;23 the four major petrol retailers &#8212; BP, Shell, Esso, and Jet &#8212; often maintained near-identical prices at local forecourts, with price differences between major branded sites of less than 0.5 pence per litre. Smaller independent retailers typically undercut the majors. The CMA concluded that the market was not working well for consumers, estimating excess retail margins cost motorists approximately &#163;900 million per year.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain the kinked demand curve model and how it accounts for the price rigidity observed in the UK petrol retail market.',
          hint:        '4-mark response &#8212; explain the asymmetric rival reaction assumptions, the kink and the MR gap, and apply to the petrol market evidence.',
          modelAnswer: 'The kinked demand curve model (Sweezy, 1939) explains price rigidity in oligopoly through asymmetric assumptions about how rivals respond to price changes. If a firm raises its price above the current level P*, rivals do not follow &#8212; they hold their prices to attract the firm&#39;s customers &#8212; so demand is highly elastic above P* (the firm loses many sales). If a firm cuts its price below P*, rivals match the cut to protect their own market share &#8212; so demand is inelastic below P* (the firm gains few additional customers). Combining these creates a &#8220;kink&#8221; in the demand curve at P*, and crucially, a vertical discontinuity &#8212; a gap &#8212; in the marginal revenue curve at the corresponding output Q*. As long as the firm&#39;s marginal cost curve passes through this vertical section of the MR gap, the profit-maximising output remains Q* and the price remains at P*, even if costs change moderately. This explains the near-identical pricing documented in the extract: with BP, Shell, Esso, and Jet each aware that cutting price would be matched (eliminating the sales gain) while raising price would not be followed (causing a loss of sales), none has an incentive to deviate from the prevailing price. The &#8220;rockets and feathers&#8221; pattern is consistent with this &#8212; when wholesale costs fall, firms have no competitive incentive to cut retail prices, as any cut would be matched by all rivals and the market share gain would be zero. The CMA&#39;s finding of &#163;900m in excess margins reflects the consumer cost of this price rigidity.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'In the kinked demand curve model, why does a vertical gap appear in the MR curve at the current output level Q*?',
          options: [
            { id: 'opt-a', text: 'Because marginal cost is constant at all output levels'                                         },
            { id: 'opt-b', text: 'Because the demand curve has different elasticities above and below the current price P*'       },
            { id: 'opt-c', text: 'Because firms in oligopoly always charge prices above marginal cost'                            },
            { id: 'opt-d', text: 'Because the firm faces a perfectly elastic demand curve at P*'                                  }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The kink in the demand curve at P* &#8212; elastic above, inelastic below &#8212; creates a discontinuity in the slope of the demand curve at that point. Since MR is derived from demand, the change in elasticity at the kink produces a vertical gap (discontinuity) in the MR curve. This gap is the reason price remains sticky: moderate MC shifts within the gap leave profit-maximising output unchanged.',
          feedbackWrong:   'The correct answer is B. MR is derived from the demand curve. The kinked demand model assumes demand is elastic above P* and inelastic below it, creating a kink at P*. The kink means the slope of demand changes abruptly, and since MR depends on the slope (elasticity) of demand, there is a vertical gap in MR at the corresponding output. This gap &#8212; not constant MC &#8212; is the source of price rigidity.'
        }
      ]
    },

    /* ── Q3 – Non-price competition ─────────────────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Non-price competition in oligopoly',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '&#163;', label: 'UK total advertising spend (2023)',         value: '&#163;35.5bn'  },
          { color: 'green', icon: '#',      label: 'Tesco Clubcard members (2024)',              value: '&#8776; 22m'   },
          { color: 'rose',  icon: '&#163;', label: 'UK supermarket advertising (est. 2023)',     value: '&#163;800m+'   },
          { color: 'blue',  icon: '%',      label: 'Tesco market share (Clubcard launch 1995 vs 2024)', value: '20% → 27%' }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two forms of non-price competition used in the UK supermarket industry and why oligopolists prefer non-price to price competition.',
          hint:        '4-mark response &#8212; identify two distinct forms with specific evidence, then explain the strategic logic behind the preference for non-price competition.',
          modelAnswer: 'Non-price competition involves competing through means other than price reduction, such as advertising, loyalty schemes, product development, and service quality. In the UK supermarket industry, two prominent forms are evident in the data. First, loyalty schemes: Tesco&#39;s Clubcard has approximately 22 million members and provides personalised pricing data that allows targeted promotions. Launched in 1995 alongside Tesco&#39;s market share of roughly 20%, the scheme has contributed to Tesco growing its share to 27.3% by 2024. Clubcard creates switching costs &#8212; the accumulated points and personalised offers make it costly for customers to change supermarket &#8212; locking in demand and insulating Tesco from price competition. Second, advertising: UK supermarkets collectively spend over &#163;800 million annually on advertising &#8212; part of the UK&#39;s &#163;35.5 billion advertising market &#8212; on brand-building campaigns that differentiate ostensibly similar grocery products. Oligopolists prefer non-price to price competition because of strategic interdependence: cutting prices risks triggering a price war in which all rivals match the cut, resulting in lower prices for all firms with no net market share gain &#8212; the prisoner&#39;s dilemma outcome. Non-price competition, by contrast, builds switching costs and brand loyalty that are harder for rivals to neutralise quickly, giving a more durable competitive advantage without the risk of mutually destructive price cutting.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'An advertising arms race in an oligopolistic market occurs when:',
          options: [
            { id: 'opt-a', text: 'One firm increases advertising significantly while rivals hold their spending constant'   },
            { id: 'opt-b', text: 'All firms increase advertising in response to rivals, with none gaining net market share' },
            { id: 'opt-c', text: 'Firms cut advertising budgets to reduce costs and improve profitability'                  },
            { id: 'opt-d', text: 'A new entrant uses advertising to overcome incumbent brand loyalty'                      }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. An advertising arms race occurs when each oligopolist responds to rivals&#39; advertising increases with its own spending increases, resulting in all firms spending more but none gaining sustained market share. The resources spent on advertising could be used productively elsewhere &#8212; this is a form of wasteful competition from a social welfare perspective.',
          feedbackWrong:   'The correct answer is B. An arms race dynamic means all firms escalate spending in response to rivals, ending in a higher-cost equilibrium where market shares are unchanged. Option A describes a situation where one firm advertises more than rivals &#8212; this would be advantageous rather than a mutually destructive arms race. Option D describes entry behaviour.'
        }
      ]
    },

    /* ── Q4 – Strategic interdependence and game theory ─────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Strategic interdependence and game theory',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from the Groceries Code Adjudicator and Financial Times reports, 2014&#8211;2016',
        text:   'Between 2014 and 2016 the UK grocery market experienced its most significant price war in decades. Tesco, Sainsbury&#39;s, Asda, and Morrisons all cut prices aggressively in response to the rapid market share gains of German discounters Aldi and Lidl, whose combined share grew from approximately 5% to 10% in three years. Analysts estimated that the &#8220;big four&#8221; supermarkets sacrificed around &#163;4 billion in operating profit over this period in sustained price investment. Tesco&#39;s operating margin fell from 6% to near 1%. Despite the cuts, the discounters continued to grow &#8212; their competitive advantage was structural (lower cost base) rather than cyclical.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, apply game theory to explain the pricing decisions of the UK supermarkets during the 2014&#8211;2016 price war.',
          hint:        '4-mark response &#8212; explain strategic interdependence, the prisoner&#39;s dilemma structure, the Nash equilibrium outcome, and apply to the supermarket context.',
          modelAnswer: 'Game theory analyses strategic decisions where the optimal choice for each firm depends on what rivals choose. In the 2014&#8211;16 supermarket price war, each of the big four faced a classic prisoner&#39;s dilemma: if one firm cut prices to defend market share against the discounters, rivals faced a choice between cutting (maintaining relative market shares but sacrificing margins for all) or holding prices (risking further market share loss to the price-cutting firm). Strategic interdependence &#8212; the fact that Tesco&#39;s best response depended on Sainsbury&#39;s, Asda&#39;s, and Morrisons&#39; actions &#8212; was central to the dynamic. The Nash equilibrium &#8212; where no firm can improve its outcome by unilaterally changing strategy given what rivals are doing &#8212; proved to be mutual price-cutting: each firm found that cutting prices was its dominant strategy regardless of rivals&#39; choices (since failing to cut would lose market share to both rivals and discounters). The result was the extract&#39;s outcome: &#163;4 billion in collective profit sacrificed and Tesco&#39;s margin compressed from 6% to near 1%. Yet the exercise largely failed &#8212; the discounters continued growing because their advantage was structural (lower cost base), not purely a price gap that matching prices could close. This illustrates a key insight from game theory: the Nash equilibrium &#8212; mutual price-cutting &#8212; was jointly irrational, producing an outcome worse for all incumbents than coordinated restraint would have achieved.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A Nash equilibrium in an oligopoly game is defined as a situation where:',
          options: [
            { id: 'opt-a', text: 'All firms maximise joint profit by cooperating on price and output'                                },
            { id: 'opt-b', text: 'No firm can improve its own outcome by unilaterally changing its strategy, given rivals\' strategies' },
            { id: 'opt-c', text: 'The largest firm sets price and all other firms follow as price-takers'                            },
            { id: 'opt-d', text: 'Firms agree on market share and do not compete on any dimension'                                   }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. A Nash equilibrium is a stable outcome where no player can improve their payoff by changing their own strategy alone, taking rivals&#39; strategies as fixed. In the prisoner&#39;s dilemma version of oligopoly pricing, the Nash equilibrium is often mutual price-cutting &#8212; even though cooperation would produce a better collective outcome.',
          feedbackWrong:   'The correct answer is B. A Nash equilibrium is defined by the absence of a profitable unilateral deviation &#8212; no firm wants to change its strategy given what rivals are doing. Option A describes collusion (explicitly prohibited by competition law). Option C describes a price leadership model. Option D describes market-sharing, a form of cartel behaviour.'
        }
      ]
    },

    /* ── Q5 – Welfare effects of oligopoly ──────────────────────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Welfare effects of oligopoly',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '%',      label: 'UK banking CR5 (five largest banks, 2023)',          value: '&#8776; 80%'    },
          { color: 'blue',  icon: '&#163;', label: 'UK bank profits (2023, combined big four)',          value: '&#163;44bn'     },
          { color: 'green', icon: '%',      label: 'UK savings rate pass-through (2022&#8211;23)',        value: '&#8776; 40%'    },
          { color: 'rose',  icon: '&#163;', label: 'FCA consumer duty fine (NatWest, 2024)',             value: '&#163;340m'     }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, evaluate whether the oligopolistic structure of the UK banking market is beneficial or harmful to consumers overall.',
          hint:        '4-mark response &#8212; develop both arguments (harmful: market power, excess profits, slow pass-through; beneficial: stability, investment, product variety), then reach a supported judgement.',
          modelAnswer: 'The data presents a complex picture of the UK banking oligopoly&#39;s welfare effects. The case that it is harmful rests on several observations. The CR5 of approximately 80% indicates very high concentration, with five banks controlling most retail banking. Combined big four profits of &#163;44 billion in 2023 &#8212; a record &#8212; were partly driven by a low savings rate pass-through of only 40%: as the Bank of England raised the Bank Rate from 0.10% to 5.25%, banks passed through less than half the increase to savers, compressing returns for depositors while maintaining lending margins. This is consistent with the oligopoly model: concentrated markets with high switching costs and imperfect information allow firms to maintain prices (margins) above competitive levels at consumers&#39; expense. The &#163;340 million FCA fine for NatWest&#39;s consumer duty failures further suggests regulatory failure is needed to protect consumers who lack bargaining power. However, some counter-arguments apply. The UK banking system&#39;s concentrated structure contributes to financial stability &#8212; the 2008 crisis caused enormous consumer harm when bank capital proved insufficient; today&#39;s larger, better-capitalised incumbents are arguably safer. Large banks generate significant economies of scale that fund technological investment: mobile banking, fraud detection, and digital infrastructure require capital that only profitable banks with sufficient market power can sustain. On balance, the evidence suggests the UK banking oligopoly imposes net costs on consumers through pricing power in retail deposits and loans &#8212; costs the FCA&#39;s consumer duty regime is attempting to address &#8212; while delivering stability and investment benefits that are real but difficult to quantify.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following best describes the concept of X-inefficiency in an oligopolistic firm?',
          options: [
            { id: 'opt-a', text: 'The firm produces at a level of output that minimises average total cost'                          },
            { id: 'opt-b', text: 'The firm produces below its profit-maximising output due to strategic considerations'              },
            { id: 'opt-c', text: 'Management slack causes the firm to produce at a higher cost than necessary due to reduced competitive pressure' },
            { id: 'opt-d', text: 'The firm sets price above marginal cost, creating a deadweight welfare loss'                       }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. X-inefficiency (Leibenstein, 1966) occurs when firms with market power face insufficient competitive pressure to minimise costs. Management slack, overstaffing, and inefficient practices inflate actual average costs above the minimum achievable. The lack of competitive discipline in concentrated markets allows this inefficiency to persist.',
          feedbackWrong:   'The correct answer is C. X-inefficiency arises from reduced competitive pressure: when a firm has significant market power, the threat of losing customers to rivals is weaker, reducing the incentive to minimise costs. This management slack means actual average cost exceeds the technically achievable minimum &#8212; an additional welfare cost of market power beyond the standard deadweight loss (D).'
        }
      ]
    }

  ]
};

/* ---- land-section-b.js ---- */
window.ECONOS_LAND_SECTION_B = {
  topic:        'Oligopoly',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK supermarket industry: competitive dynamics 2015&#8211;2024',
        tags:        ['CR4 &#8776; 64%', 'discounter disruption', '2014&#8211;16 price war', 'Clubcard and loyalty'],
        defaultOpen: true,
        paragraphs: [
          'The UK grocery market is one of the world&#39;s most studied oligopolies. In 2024, the four largest supermarkets &#8212; Tesco (27.3%), Sainsbury&#39;s (15.1%), Asda (12.6%), and Morrisons (8.7%) &#8212; collectively held a CR4 of approximately 63.7%, with a further 18% between Aldi and Lidl. The market has undergone dramatic structural change since 2015, driven by the rise of German discounters whose proposition of high quality at lower cost challenged the established oligopolists&#39; pricing power.',
          'Between 2014 and 2016, the big four engaged in an aggressive price war, collectively sacrificing an estimated &#163;4 billion in operating profit. Tesco&#39;s margin fell from 6% to near 1%. The response ultimately proved insufficient to stop the discounters: Aldi and Lidl continued growing because their structural cost advantage &#8212; simpler product ranges, smaller formats, different employment practices &#8212; could not be neutralised by the incumbents simply matching prices. By 2018, analysis by the Institute of Grocery Distribution suggested the big four had partially retreated from pure price competition towards differentiation strategies.',
          'Tesco&#39;s response centred on its Clubcard loyalty scheme, which by 2024 had accumulated approximately 22 million members. Clubcard Prices &#8212; differentiated discounts available only to members &#8212; were estimated to save members an average of &#163;346 per year and created significant customer lock-in. Sainsbury&#39;s Nectar card pursued a similar strategy. These schemes collected extensive data on purchasing behaviour, enabling highly targeted promotional activity that smaller rivals and new entrants struggled to replicate. Analysts noted that the schemes also functioned as a form of personalised price discrimination, offering lower prices to price-sensitive members while maintaining headline shelf prices.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'The kinked demand model and price rigidity in petrol retail',
        tags:        ['rockets and feathers', 'CMA investigation 2023', '&#163;900m excess margins', 'price matching behaviour'],
        defaultOpen: false,
        paragraphs: [
          'The UK petrol retail market, dominated by BP, Shell, Esso, and Jet, provides a textbook illustration of the kinked demand curve model. Research by the Competition and Markets Authority (2023) found that the four major branded retailers maintained near-identical prices at local forecourts &#8212; typically within 0.5 pence per litre of each other &#8212; despite significant fluctuations in wholesale oil prices. The CMA described this behaviour as &#8220;rockets and feathers&#8221;: retail prices respond rapidly (&#8220;like a rocket&#8221;) to wholesale cost increases but adjust slowly and incompletely (&#8220;like a feather&#8221;) when wholesale prices fall.',
          'The kinked demand model offers an explanation for this asymmetry. Each major retailer assumes that rivals will match any price reduction (eliminating the sales gain from cutting) but will not follow a price increase (allowing rivals to capture market share from the firm that raised its price). Under these assumptions, no firm has an incentive to move away from the prevailing market price &#8212; demand is elastic above P* (losing customers to rivals who hold their price) and inelastic below P* (rivals match and the sales gain is negligible). The vertical gap in the MR curve at current output means moderate cost changes do not alter the profit-maximising price.',
          'The CMA estimated that excess retail margins in petrol &#8212; the gap between wholesale and retail price above a competitive benchmark &#8212; cost UK motorists approximately &#163;900 million per year. The regulator stopped short of concluding that explicit collusion had occurred but noted that the market was characterised by &#8220;weak competitive dynamics&#8221; and recommended structural measures including a statutory price transparency scheme to facilitate consumer price comparison. Independent retailers, who held approximately 30% of sites, consistently undercut the majors, suggesting competitive conditions could be improved by reducing the market power of the dominant branded retailers.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Non-price competition and brand loyalty in oligopolistic markets',
        tags:        ['loyalty schemes', 'advertising spend', 'switching costs', 'consumer welfare debate'],
        defaultOpen: false,
        paragraphs: [
          'Non-price competition is the dominant competitive strategy in most UK oligopolistic markets. Where price cuts risk retaliation and a mutually destructive price war, advertising, loyalty schemes, product development, and service investment offer more durable competitive advantages. UK businesses spend over &#163;35 billion annually on advertising, with consumer goods oligopolists &#8212; supermarkets, telecoms, banks, and energy companies &#8212; accounting for a disproportionate share. The four major UK supermarkets alone spend in excess of &#163;800 million on advertising annually.',
          'The welfare implications of non-price competition are contested. Defenders argue it serves consumers by providing information (helping them identify products that meet their needs), funding content creation (advertising supports media and sports), and driving product quality improvements (firms invest in product development to differentiate, benefiting consumers). Tesco&#39;s Clubcard, for instance, provides genuine price reductions to members &#8212; estimated average savings of &#163;346 per year &#8212; and convenient personalised promotions.',
          'Critics counter that much non-price competition is wasteful from a social perspective. An advertising arms race &#8212; where all supermarkets increase spending in response to rivals, with no net change in market shares &#8212; consumes resources (labour, media capacity, creative services) that could produce goods or services with direct consumer value. Loyalty schemes that create switching costs may reduce consumer choice and undermine competition over time: if 22 million shoppers are locked into Tesco&#39;s Clubcard ecosystem, the barrier to switching to a rival or new entrant rises. The Office of Fair Trading has previously noted that loyalty schemes, while individually beneficial to members, may in aggregate reduce competitive pressure on incumbents.'
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
        stem:   'Explain the key characteristics of an oligopolistic market.',
        tips: [
          'Identify at least three distinct characteristics &#8212; do not just list them, explain what each means.',
          'Strategic interdependence is the most important characteristic &#8212; explain why firms must consider rivals&#39; reactions.',
          'Relate characteristics to real UK examples where possible (supermarkets, petrol, banking).',
          'Distinguish oligopoly from perfect competition and monopoly to show you understand the spectrum of market structures.'
        ],
        modelAnswer: 'Oligopoly is characterised by a small number of large firms dominating a market, typically measured by a CR4 above 60%. The UK supermarket CR4 of approximately 63.7% and the banking CR5 of around 80% illustrate this. Each firm is large enough that its pricing and output decisions affect rivals and vice versa &#8212; this is strategic interdependence, the defining feature of oligopoly. Unlike perfect competition (where firms are price-takers) or monopoly (where one firm dominates), oligopolists must form expectations about rivals&#39; reactions before making decisions. High barriers to entry &#8212; economies of scale, brand loyalty, sunk costs, and network effects &#8212; protect incumbents from new competition and sustain market concentration. Oligopolists may sell homogeneous products (petrol, steel) or differentiated ones (supermarket offerings, smartphones), but in either case tend to prefer non-price competition &#8212; advertising, loyalty schemes, product development &#8212; over price cuts, which risk triggering mutually destructive price wars.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract A, examine the competitive dynamics of the UK supermarket industry between 2015 and 2024.',
        tips: [
          'Use specific data from Extract A: market shares, CR4, the price war, Clubcard figures.',
          'Explain what the discounter entry means for the oligopoly model &#8212; how did it change strategic behaviour?',
          'Analyse the shift from price competition to non-price competition (Clubcard, Nectar) and explain the strategic logic.',
          'Consider whether the outcome has been good or bad for consumers.',
          'Reach a balanced assessment &#8212; include a counter-argument.'
        ],
        modelAnswer: 'Extract A documents a decade of significant structural change in the UK supermarket oligopoly. The entry of Aldi and Lidl &#8212; growing from approximately 5% to 18% combined market share &#8212; disrupted the established equilibrium by introducing a structural cost advantage (simpler ranges, smaller formats, lower labour costs) that the big four found difficult to match. This triggered the 2014&#8211;16 price war &#8212; a classic game theory outcome in which strategic interdependence drove all incumbents to match price cuts regardless of the collective profit destruction. Extract A records &#163;4 billion in sacrificed operating profit and Tesco&#39;s margin compressed from 6% to near 1% &#8212; the prisoner&#39;s dilemma outcome where each firm&#39;s dominant strategy was to cut, even though cooperation would have preserved more profit for all. The price war benefited consumers significantly: food price inflation was suppressed and real grocery prices fell during this period. However, as Extract A notes, the big four eventually recognised that price matching could not neutralise the discounters&#39; structural cost advantage and shifted strategy towards non-price differentiation. Tesco&#39;s Clubcard &#8212; with 22 million members by 2024 and estimated annual savings of &#163;346 per member &#8212; is the most prominent example. By tying consumers to the scheme through personalised pricing, Tesco created switching costs that reinforced its market position while ostensibly offering consumers benefit. Sainsbury&#39;s pursued the same strategy through Nectar. The welfare implications are mixed. The shift to non-price competition reduced the direct competitive pressure on prices that the price war had generated &#8212; loyalty scheme pricing is a form of personalised price discrimination, not transparent competitive pricing. But the schemes deliver real savings to members. Overall, the period illustrates oligopoly&#39;s complex competitive dynamics: fierce price competition when triggered by structural disruption, followed by a retreat to non-price strategies that partially restore margins while providing selective consumer benefits.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which oligopoly is harmful to consumers. Refer to Extract C and your own knowledge.',
        tips: [
          'Begin by establishing the theoretical case that oligopoly harms consumers (P > MC, deadweight loss, X-inefficiency, non-price competition costs).',
          'Use Extract C: advertising arms race, loyalty scheme switching costs, non-price competition welfare debate.',
          'Then develop the counter-arguments: dynamic efficiency (R&amp;D investment), product variety, financial stability (banking), economies of scale.',
          'Apply the kinked demand model and game theory evidence from the other extracts.',
          'Reach a conditional, supported conclusion: it depends on whether oligopoly is competitive or collusive, and on which welfare dimension matters most.'
        ],
        modelAnswer: 'Whether oligopoly harms consumers depends critically on how concentrated market power is exercised &#8212; the range of possible outcomes spans from near-competitive results to near-monopoly outcomes &#8212; and on how welfare is defined across static and dynamic dimensions. The theoretical case for harm rests on the standard market power argument. Oligopolists typically set prices above marginal cost (P&#160;&#62;&#160;MC), creating allocative inefficiency and a deadweight welfare loss: output is below the socially optimal level, and consumer surplus is transferred to producer profit. The UK banking data illustrates this: with a CR5 of 80% and &#163;44 billion in combined profits, major banks passed through only 40% of Bank Rate rises to savers, compressing depositor returns while maintaining lending margins. This is consistent with the theory that concentrated markets with high switching costs enable above-competitive pricing at consumers&#39; expense. X-inefficiency provides a further harm: reduced competitive pressure allows management slack to inflate actual costs above their minimum. The CMA&#39;s &#163;900 million estimate of excess petrol retail margins and the &#163;340 million NatWest fine further suggest that oligopolistic pricing and behaviour impose quantifiable costs on consumers. Extract C contributes the non-price competition dimension. The advertising arms race &#8212; where all supermarkets spend over &#163;800 million annually, with no net market share gain &#8212; consumes real resources (labour, media capacity) that could produce goods with direct consumer value. Loyalty schemes, while offering individual benefits, create switching costs that may reduce competitive pressure over time: with 22 million Clubcard members, Extract C notes the risk that incumbent lock-in limits effective competition and barriers to new entry. However, several counter-arguments qualify the harm conclusion. Dynamic efficiency is potentially oligopoly&#39;s strongest counter-claim. Supernormal profits fund substantial R&D investment: pharmaceutical oligopolists invest 15&#8211;20% of revenue in R&D; tech oligopolists (Apple, Google) fund the innovations that consumers adopt rapidly. The Schumpeterian argument &#8212; that market power generates the profit and incentive necessary for major innovation &#8212; is particularly compelling in knowledge-intensive industries. Competitive oligopoly can deliver near-competitive outcomes: the 2014&#8211;16 supermarket price war cut consumer grocery bills significantly, and the sustained competitive pressure from Aldi and Lidl has maintained downward price pressure since. The sector also benefits from economies of scale &#8212; large supermarkets&#39; buying power reduces supplier costs and ultimately retail prices &#8212; that fragmented competitive markets could not replicate. Product variety is another consumer benefit: oligopolistic firms invest in product development and service quality to differentiate, providing range and quality that homogeneous competitive markets cannot offer. In conclusion, oligopoly is not uniformly harmful to consumers &#8212; its welfare effects are context-dependent and dynamic. Collusive oligopoly, where firms coordinate to restrict output and raise prices, produces monopoly-like harm: welfare losses, excess profits, and consumer detriment that competition policy must address. Competitive oligopoly &#8212; with active rivalry on price, quality, and innovation &#8212; may deliver near-competitive outcomes with the added benefit of scale economies and innovation investment. The key determinant of consumer welfare is not market structure per se but the intensity and form of competition within that structure. UK competition policy correctly focuses on behaviour &#8212; blocking cartels, investigating price coordination, enforcing consumer protection &#8212; rather than on atomising concentrated industries that derive genuine efficiency benefits from scale.'
      }
    ]
  },

  strongAnswers: [
    'Use specific data from all three extracts &#8212; quote market shares, profit figures, and the CMA estimates',
    'Apply game theory concepts precisely: prisoner&#39;s dilemma, Nash equilibrium, dominant strategy',
    'Distinguish competitive from collusive oligopoly &#8212; the welfare verdict depends on which type applies',
    'Develop the dynamic efficiency counter-argument &#8212; this is the key evaluative balance point for the 12-mark question'
  ]
};

/* ---- land-section-c.js ---- */
window.ECONOS_LAND_SECTION_C = {
  topic:        'Oligopoly',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  question: {
    id:               'qc',
    commandWord:      'Evaluate',
    stem:             'Evaluate the view that oligopolistic markets are harmful to consumer welfare.',
    marks:            25,
    suggestedMinutes: 30,

    structureTips: [
      'Define oligopoly and identify its key characteristics: few large firms, high barriers, strategic interdependence, non-price competition.',
      'Establish the theoretical framework: how does market power translate to consumer harm (P&#160;&#62;&#160;MC, deadweight loss, X-inefficiency)?',
      'Develop the case FOR harm: price above MC, restricted output, X-inefficiency, advertising waste, loyalty scheme lock-in, collusion risk.',
      'Develop the counter-arguments: dynamic efficiency and R&amp;D, economies of scale, product variety, competitive oligopoly outcomes (price wars).',
      'Apply the kinked demand curve to explain price rigidity, and game theory to explain the prisoner&#39;s dilemma and Nash equilibrium.',
      'Use specific UK evidence throughout: supermarket market shares, petrol CMA findings, Clubcard, 2014&#8211;16 price war, banking profits.',
      'Conclude with a balanced, conditional judgement &#8212; depends on whether oligopoly is competitive or collusive, and on the industry.'
    ],

    modelAnswer:
      '<p>Oligopoly is characterised by a small number of large firms with significant market power &#8212; the UK supermarket CR4 of approximately 63.7% and banking CR5 of around 80% are illustrative &#8212; and is the dominant market structure in most modern economies. Whether such markets are harmful to consumer welfare depends on how market power is exercised, the intensity of strategic rivalry, and whether static or dynamic welfare criteria take precedence. The answer is not predetermined by market structure but is context-dependent.</p>'
    + '<p>The theoretical case for consumer harm from oligopoly begins with allocative inefficiency. An oligopolist with market power sets price above marginal cost (P&#160;&#62;&#160;MC) to maximise profit, producing below the socially optimal output level. This creates a deadweight welfare loss &#8212; the surplus that neither consumers nor producers capture &#8212; and transfers consumer surplus to producer profit. UK banking provides the most striking illustration: combined big four profits of &#163;44 billion in 2023, while banks passed through only approximately 40% of Bank Rate rises to savers&#39; deposit rates. Depositors received far below the competitive return on savings, with the difference captured as a widened net interest margin by firms with market power and high consumer switching costs. X-inefficiency compounds the price harm: reduced competitive pressure allows management slack to inflate actual costs above their minimum, further reducing the value consumers receive per pound spent. The Competition and Markets Authority&#39;s estimate that petrol retail oligopolists cost UK motorists approximately &#163;900 million per year in excess margins &#8212; through the &#8220;rockets and feathers&#8221; pricing asymmetry explained by the kinked demand model &#8212; quantifies the consumer cost of price rigidity in a concentrated market.</p>'
    + '<p>Non-price competition adds a further dimension of potential harm. In the UK, supermarkets collectively spend over &#163;800 million annually on advertising &#8212; part of a &#163;35 billion national advertising market driven disproportionately by oligopolistic consumer goods firms. When this generates an advertising arms race &#8212; where all firms escalate spending in response to rivals and no firm gains net market share &#8212; it is pure waste from a social welfare perspective: resources (labour, media capacity, creative services) are consumed without increasing output or consumer choice. Loyalty schemes present a subtler welfare concern: Tesco&#39;s Clubcard, with 22 million members, creates switching costs that raise the barrier to changing supermarket, potentially reducing effective competition over time. The Office of Fair Trading has noted that loyalty schemes, while individually beneficial to members, may in aggregate insulate incumbents from competitive pressure and raise barriers for new entrants. Collusion &#8212; the extreme harm scenario &#8212; occurs when oligopolists explicitly or tacitly coordinate to restrict output and raise prices toward the monopoly level, eliminating the benefits of rivalry entirely. UK competition law prohibits explicit cartels (Chapter I prohibition, Competition Act 1998), but tacit collusion &#8212; coordination through price signalling without formal agreement &#8212; is harder to detect and prosecute.</p>'
    + '<p>However, the case that oligopoly is harmful overstates the position when it ignores the dynamic efficiency benefits that concentrated markets can provide. Supernormal profits &#8212; which require some degree of market power &#8212; fund the R&D investment that generates product and process innovations benefiting consumers in the long run. UK pharmaceutical oligopolists invest 15&#8211;20% of revenue in R&D; AstraZeneca alone spent &#163;8.1 billion in 2023 on research that produced vaccines and treatments available globally. These innovations are inconceivable for price-taking firms earning only normal profit. Schumpeter&#39;s hypothesis &#8212; that market power and supernormal profit are prerequisites for significant innovation &#8212; is a powerful argument that the dynamic consumer welfare gains from oligopoly&#39;s R&D investment may outweigh the static allocative losses from P&#160;&#62;&#160;MC. Economies of scale provide a further consumer benefit: large oligopolists&#39; buying power reduces supplier costs (UK supermarkets&#39; procurement scale delivers lower wholesale prices that are at least partially transmitted to retail prices) and enables investment in technology and logistics that smaller competitive firms could not afford. Product variety is another gain: oligopolists invest in differentiation &#8212; product development, quality improvements, service innovation &#8212; that creates genuine consumer value beyond what a homogeneous competitive market would provide.</p>'
    + '<p>The game theory framework reveals that oligopoly&#39;s welfare outcomes are not fixed by market structure but depend on the equilibrium of strategic interaction. The UK supermarket price war of 2014&#8211;16 &#8212; in which the big four collectively sacrificed &#163;4 billion in operating profit in price investment &#8212; demonstrates that competitive oligopoly can produce near-competitive consumer outcomes, with real reductions in grocery prices over a sustained period. The discounters&#39; entry disrupted the established equilibrium, triggering a Nash equilibrium of mutual price-cutting. Competition policy that maintains contestability &#8212; preventing incumbents from using market power to block entry &#8212; can therefore replicate competitive outcomes without requiring atomised market structure.</p>'
    + '<p>In conclusion, oligopoly is not inherently harmful to consumer welfare &#8212; its welfare effects are conditional on the form competition takes within the structure. Collusive oligopoly, where firms coordinate to behave collectively as a monopolist, produces serious and quantifiable consumer harm: excess prices, restricted output, and deadweight losses that competition authorities must address. Competitive oligopoly &#8212; with active strategic rivalry, entry threats from new competitors, and regulatory oversight &#8212; can deliver near-competitive prices with the additional benefits of scale economies and innovation investment that perfect competition cannot generate. The appropriate policy response is not to break up concentrated industries indiscriminately but to maintain contestability, prosecute anti-competitive behaviour, and regulate where market power is systematically exploited &#8212; as the FCA&#39;s consumer duty regime seeks to do in financial services. Whether oligopoly harms consumers ultimately depends on whether firms compete or cooperate, and on which welfare dimension &#8212; static price efficiency or dynamic innovation &#8212; is prioritised.</p>'
  },

  strongAnswers: [
    'Define oligopoly precisely and use the CR4 concept with a specific UK figure',
    'Apply the kinked demand curve diagram with the MR gap to explain price rigidity',
    'Use the prisoner&#39;s dilemma and Nash equilibrium to explain price war dynamics',
    'Develop dynamic efficiency as the key counter-argument &#8212; Schumpeter, R&amp;D, pharmaceutical example',
    'Conclude conditionally: distinguish competitive from collusive oligopoly and state what determines the welfare verdict'
  ]
};

