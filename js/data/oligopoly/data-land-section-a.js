window.ECONOS_LAND_SECTION_A = {
  topic:        'Oligopoly',
  sessionLabel: 'Session 3 of 3: Land',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  questions: [

    /* ── Q1 — Concentration ratios ──────────────────────────────── */
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

    /* ── Q2 — Kinked demand curve ───────────────────────────────── */
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

    /* ── Q3 — Non-price competition ─────────────────────────────── */
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
          { color: 'blue',  icon: '%',      label: 'Tesco market share (Clubcard launch 1995 vs 2024)', value: '20% &#8594; 27%' }
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

    /* ── Q4 — Strategic interdependence and game theory ─────────── */
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

    /* ── Q5 — Welfare effects of oligopoly ──────────────────────── */
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
