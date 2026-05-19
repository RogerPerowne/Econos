window.ECONOS_LAND_SECTION_A = {
  topic:        'Price Discrimination',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  questions: [

    /* ── Q1 — Conditions for price discrimination ─────────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Conditions for price discrimination',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '&#163;', label: 'Peak rail ticket (London&#8211;Manchester, walk-up)', value: '&#163;247'  },
          { color: 'green', icon: '&#163;', label: 'Off-peak rail ticket (same route, advance)',          value: '&#163;32'   },
          { color: 'rose',  icon: '&#163;', label: 'Adult cinema ticket (Odeon, central London)',         value: '&#163;17'   },
          { color: 'green', icon: '&#163;', label: 'Student cinema ticket (same screen, same time)',      value: '&#163;11'   }
        ]
      },

      parts: [
        {
          id:          'q1a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain the three conditions that must be met for price discrimination to be possible.',
          hint:        '4-mark response &#8212; identify and explain all three conditions: market power, market segmentation, and prevention of arbitrage.',
          modelAnswer: 'First, the firm must have market power &#8212; it must be a price-setter rather than a price-taker. A firm in perfect competition faces a horizontal demand curve and cannot charge different prices; only firms with downward-sloping demand curves can set prices above marginal cost and segment markets. Rail operators and cinema chains both have local monopoly or oligopoly power. Second, the firm must be able to identify and separate consumer groups with different price elasticities of demand. Rail operators separate peak business travellers (inelastic demand &#8212; must travel at that time) from advance leisure travellers (elastic &#8212; flexible timing), explaining the &#163;247 vs &#163;32 price difference. Cinemas verify student status via ID cards. Third, the firm must prevent arbitrage &#8212; resale between the cheap and expensive groups. If off-peak ticket holders could resell to peak travellers, the price differential would collapse. Rail tickets are personalised and non-transferable; cinema tickets are checked at entry. Without all three conditions, discrimination is impossible or unsustainable.'
        },
        {
          id:     'q1b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which degree of price discrimination involves charging every individual consumer their exact maximum willingness to pay?',
          options: [
            { id: 'opt-a', text: 'Second-degree price discrimination'   },
            { id: 'opt-b', text: 'Third-degree price discrimination'    },
            { id: 'opt-c', text: 'First-degree price discrimination'    },
            { id: 'opt-d', text: 'Uniform monopoly pricing'             }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. First-degree (perfect) price discrimination involves charging each consumer their exact reservation price &#8212; their maximum willingness to pay. Every unit is sold at a different price, consumer surplus is entirely eliminated, and the firm captures all welfare gains as producer surplus.',
          feedbackWrong:   'The correct answer is C. First-degree price discrimination charges every individual their maximum willingness to pay (their reservation price). Third-degree discrimination charges different prices to identifiable groups. Second-degree discrimination uses quantity or versioning to self-select consumers into price bands.'
        }
      ]
    },

    /* ── Q2 — Third-degree price discrimination: airlines ─────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Third-degree price discrimination &#8212; airlines',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from Which? consumer report on airline pricing, 2023',
        text:   'Analysis by Which? found that economy class fares for the same route and departure time could vary by over 400% depending on when and how the ticket was purchased. Business travellers booking within two weeks of departure paid on average 3.7 times the price paid by leisure travellers booking eight weeks in advance. Airlines justify this by arguing that business travellers require flexibility &#8212; refundable, changeable tickets &#8212; which generates genuine additional cost. Consumer groups counter that the cost difference is far smaller than the price difference, and that airlines are exploiting the inelastic demand of business travellers who face no alternative.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain why airlines charge different prices to different groups of passengers on the same route.',
          hint:        '4-mark response &#8212; use PED differences between business and leisure travellers, the MR&#8320; = MR&#8321; = MC condition, and the role of arbitrage prevention.',
          modelAnswer: 'Airlines practise third-degree price discrimination by charging different prices to identifiable passenger groups with different price elasticities of demand. Business travellers have highly inelastic demand &#8212; they must travel at specific times for meetings, their employer typically pays, and there is no close substitute for a direct flight at the required time. The extract notes they pay 3.7 times the price of leisure travellers. Leisure travellers have elastic demand &#8212; they are flexible on timing, can substitute alternative routes or modes of travel, and are spending their own money. The profit-maximising rule for a price-discriminating firm is to set MR&#8320; = MR&#8321; = MC across both segments &#8212; the inelastic segment (business) receives the higher price. Arbitrage is prevented through ticket conditions: business fares are refundable and flexible (a genuine service difference), while advance leisure fares are non-refundable and non-transferable, making resale impractical. Even if the cost difference is smaller than the price difference (as the extract suggests), the firm can sustain the gap as long as the segments are identifiable and arbitrage is blocked.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Under third-degree price discrimination, which passenger group will pay the higher price?',
          options: [
            { id: 'opt-a', text: 'The group with the most elastic demand'                    },
            { id: 'opt-b', text: 'The group with the lowest marginal cost to serve'          },
            { id: 'opt-c', text: 'The group with the least elastic (most inelastic) demand'  },
            { id: 'opt-d', text: 'The group that books furthest in advance'                  }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. Under third-degree price discrimination, the group with the least elastic (most inelastic) demand pays the higher price. Less price-sensitive consumers can be charged more without losing sales &#8212; their MR curve is higher, so the profit-maximising price is higher for them.',
          feedbackWrong:   'The correct answer is C. The profit-maximising rule MR&#8320; = MR&#8321; = MC means the group with lower PED (inelastic demand, steeper demand curve) is charged the higher price. Inelastic consumers have fewer alternatives and will not reduce quantity demanded much in response to higher prices, so the firm can extract more surplus from them.'
        }
      ]
    },

    /* ── Q3 — Welfare effects of price discrimination ─────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Welfare effects of third-degree price discrimination',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '&#163;', label: 'Adult cinema ticket (Odeon, London)',    value: '&#163;17.50' },
          { color: 'green', icon: '&#163;', label: 'Concession ticket (student/senior)',     value: '&#163;10.50' },
          { color: 'blue',  icon: '%',      label: 'Estimated adult PED for cinema visits',  value: '&#8722;0.4'  },
          { color: 'blue',  icon: '%',      label: 'Estimated student PED for cinema visits', value: '&#8722;1.8' }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, analyse the welfare effects of third-degree price discrimination in the cinema market.',
          hint:        '4-mark response &#8212; analyse effects on consumer surplus for each group, producer surplus, and the overall welfare verdict depending on whether total output rises.',
          modelAnswer: 'The data shows adults paying &#163;17.50 with inelastic demand (PED = &#8722;0.4) and students paying &#163;10.50 with elastic demand (PED = &#8722;1.8). This illustrates classic third-degree price discrimination. The welfare effects are mixed. Adults (inelastic group) pay a higher price than they would under a uniform monopoly price &#8212; their consumer surplus is reduced as the firm extracts more of their willingness to pay. This represents a redistribution from consumers to producers. Students (elastic group) benefit: they pay a lower price than under uniform monopoly pricing, gaining consumer surplus they would otherwise not have. Crucially, if the discriminating cinema serves students who would be priced out of the market at the adult price, total output rises compared with single-price monopoly. In this case, price discrimination may be welfare-improving overall: the gain in student welfare and the additional consumer surplus created in that market may outweigh the welfare loss for adults who would have attended anyway. However, if both groups would have been served at a single intermediate price, discrimination merely redistributes surplus from consumers to the firm. The overall welfare verdict depends on whether discrimination expands or merely reprices existing output.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'When third-degree price discrimination enables a firm to serve a market segment it would otherwise exclude, the effect on total welfare is:',
          options: [
            { id: 'opt-a', text: 'Always negative, because consumer surplus is reduced in the high-price segment'        },
            { id: 'opt-b', text: 'Likely positive, because total output increases and new consumer surplus is created'   },
            { id: 'opt-c', text: 'Always neutral, because producer surplus exactly offsets the consumer surplus loss'    },
            { id: 'opt-d', text: 'Impossible to assess without information on marginal cost'                             }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. If price discrimination enables entry into a new segment &#8212; serving consumers who would be excluded at the single monopoly price &#8212; total output rises and new consumer surplus is created in that segment. This can more than offset the consumer surplus loss in the high-price segment, producing a net welfare gain.',
          feedbackWrong:   'The correct answer is B. When price discrimination creates access for a previously excluded segment (e.g., students who cannot afford the adult price), it increases total output and generates consumer surplus for that group. This additional welfare can exceed the consumer surplus reduction in the high-price segment, making discrimination welfare-improving overall.'
        }
      ]
    },

    /* ── Q4 — Digital economy and personalised pricing ─────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Digital economy and personalised pricing',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from CMA Digital Markets report, 2022',
        text:   'The Competition and Markets Authority has raised concerns about the growing use of personalised pricing by online platforms. Unlike traditional third-degree price discrimination &#8212; which groups consumers by observable characteristics such as age or location &#8212; personalised pricing uses algorithmic analysis of browsing history, purchase patterns, device type, and location data to estimate individual willingness to pay. Amazon, hotel booking sites, and ride-hailing apps have all been investigated. The CMA notes that personalised pricing approaches first-degree discrimination in its sophistication, extracting consumer surplus to a degree that was previously impossible. Consumers are often unaware that they are receiving individually tailored prices.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain how digital technology has enabled firms to price discriminate more effectively than was previously possible.',
          hint:        '4-mark response &#8212; explain how data collection improves market segmentation, how digital goods prevent arbitrage, and how algorithmic pricing approaches first-degree discrimination.',
          modelAnswer: 'Digital technology has enhanced firms&#39; ability to price discriminate in three key ways. First, data collection dramatically improves market segmentation. As the extract notes, algorithms analyse browsing history, purchase patterns, device type, and location to estimate individual willingness to pay &#8212; a level of precision far beyond traditional demographic groupings such as student or senior. This approaches the first condition of first-degree discrimination: knowing each consumer&#39;s reservation price. Second, digital goods and services naturally prevent arbitrage. Software licences, streaming subscriptions, and e-commerce prices are account-specific and non-transferable &#8212; a consumer shown a higher price cannot buy at a lower price and resell it, as would be possible with physical goods. Third, pricing algorithms enable real-time, large-scale adjustment of prices at near-zero marginal cost. Traditional price discrimination required human decisions about segment pricing; algorithms can set millions of individual prices continuously. The CMA&#39;s concern is that this approaches first-degree discrimination &#8212; extracting consumer surplus to a degree previously impossible &#8212; while consumers remain unaware, preventing them from seeking alternatives or bargaining.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'The CMA&#39;s concern about personalised pricing is primarily that it:',
          options: [
            { id: 'opt-a', text: 'Increases competition between online platforms'                                    },
            { id: 'opt-b', text: 'Reduces prices for all consumers through more efficient segmentation'              },
            { id: 'opt-c', text: 'Extracts consumer surplus on an individual level without consumer awareness'       },
            { id: 'opt-d', text: 'Prevents firms from covering their fixed costs of operating digital platforms'     }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. The CMA&#39;s concern is that personalised pricing &#8212; using individual data to estimate willingness to pay &#8212; approaches first-degree discrimination, extracting consumer surplus at an individual level. The opacity of the process (consumers are unaware) prevents them from responding rationally, removing any market discipline on the practice.',
          feedbackWrong:   'The correct answer is C. The CMA&#39;s concern is the extraction of consumer surplus at an individual level: each consumer is charged close to their maximum willingness to pay, eliminating the benefit consumers normally receive from buying at a price below their reservation price. The opacity of algorithmic pricing makes this especially harmful as consumers cannot easily detect or avoid it.'
        }
      ]
    },

    /* ── Q5 — Pharmaceutical price discrimination evaluation ───── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Pharmaceutical price discrimination and global welfare',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '&#163;', label: 'HIV antiretroviral drug &#8212; USA (annual course)',    value: '&#163;18,400' },
          { color: 'green', icon: '&#163;', label: 'Same drug &#8212; India (annual course, generic price)', value: '&#163;85'     },
          { color: 'blue',  icon: '&#163;', label: 'Average pharma R&#38;D cost per approved drug',          value: '&#163;1.3bn'  },
          { color: 'blue',  icon: '%',      label: 'Global pharma R&#38;D funded by US market revenues',     value: '&#8776;45%'   }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain why pharmaceutical price discrimination between rich and poor countries may be welfare-improving overall.',
          hint:        '4-mark response &#8212; use the cross-subsidy argument, output expansion, R&#38;D funding, and the counter-argument on consumer welfare in high-price markets.',
          modelAnswer: 'Pharmaceutical price discrimination charges rich-country consumers &#8212; like US patients &#8212; &#163;18,400 for an HIV drug while charging Indian consumers &#163;85 for the same drug. This is third-degree price discrimination exploiting the lower price elasticity of demand in wealthy, insured markets and higher elasticity in lower-income markets. It may be welfare-improving for several reasons. First, output expansion: if the drug were priced at the US level globally, the vast majority of patients in developing countries could not afford it and would go untreated. At &#163;85 &#8212; close to marginal cost &#8212; Indian patients gain access to life-saving treatment. The additional welfare created in this segment (access to medicine) is enormous and likely exceeds any welfare loss from US consumers paying more than a uniform price would require. Second, the cross-subsidy funds innovation: the data shows US revenues fund approximately 45% of global pharmaceutical R&#38;D, and average drug development costs &#163;1.3bn. Without high prices in inelastic markets, firms may be unable to recover R&#38;D costs, reducing investment in future treatments that benefit everyone. However, the counter-argument is that high US prices may exceed what is necessary to fund R&#38;D, and the welfare loss for uninsured American patients who cannot afford treatment at &#163;18,400 is significant.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'The argument that pharmaceutical price discrimination may be welfare-improving globally rests primarily on:',
          options: [
            { id: 'opt-a', text: 'The principle that all consumers should pay the same price regardless of income'                              },
            { id: 'opt-b', text: 'The cross-subsidy: high prices in rich markets fund access in poor markets and incentivise R&#38;D'           },
            { id: 'opt-c', text: 'The evidence that pharmaceutical firms always use profits to reduce prices in wealthy markets'                  },
            { id: 'opt-d', text: 'The fact that marginal costs of producing drugs are always zero'                                              }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The welfare-improving case for pharmaceutical price discrimination rests on the cross-subsidy argument: high prices in rich, inelastic markets (USA) generate revenue that funds R&#38;D and enables low prices in poor, elastic markets (India). Both functions &#8212; incentivising innovation and enabling access &#8212; create global welfare gains that may outweigh the welfare cost of high prices in rich countries.',
          feedbackWrong:   'The correct answer is B. The welfare case for pharmaceutical price discrimination relies on the cross-subsidy mechanism: revenue from high-price inelastic markets (wealthy countries) subsidises access in low-price elastic markets (poor countries) and funds future R&#38;D. Without this price differential, firms might charge a single high global price &#8212; excluding billions of patients &#8212; or invest less in R&#38;D. Both outcomes would reduce global welfare.'
        }
      ]
    }

  ]
};
