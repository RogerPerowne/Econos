/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too —
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
window.ECONOS_LAND_COMPLETE = {
  topic:   'Price Discrimination',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',   color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response', color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',             color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F3AF;',
    title: 'What to do next',
    text:  'Review your answers against the model responses. Check whether you applied the output expansion test &#8211; asking whether discrimination increases total output or merely reprices existing output &#8211; rather than assuming discrimination is automatically harmful. Ensure your pharmaceutical analysis distinguished the cross-subsidy and dynamic R&#38;D arguments from the consumer surplus loss in high-price markets. For Section C, assess whether your conclusion was genuinely conditional on degree and context, or whether you stated a blanket verdict.'
  }
};

/* ---- land-intro.js ---- */
window.ECONOS_LAND_INTRO = {
  topic:        'Price Discrimination',
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
    'Identifying the three conditions for price discrimination with real-world examples',
    'Applying the MR&#8320; = MR&#8321; = MC rule to analyse third-degree price discrimination',
    'Evaluating the welfare effects of pharmaceutical and digital price discrimination',
    'Practising extended writing on whether price discrimination harms or benefits consumers'
  ],

  tip: 'Always check all three conditions: market power → market segmentation (different PED) → prevention of arbitrage. In welfare analysis, the key question is whether discrimination increases total output &#8211; if new market segments are served that were previously excluded, net welfare may improve even though consumer surplus is transferred to the producer.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};

/* ---- land-section-a.js ---- */
window.ECONOS_LAND_SECTION_A = {
  topic:        'Price Discrimination',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – Conditions for price discrimination ─────────────── */
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

    /* ── Q2 – Third-degree price discrimination: airlines ─────── */
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

    /* ── Q3 – Welfare effects of price discrimination ─────────── */
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

    /* ── Q4 – Digital economy and personalised pricing ─────────── */
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

    /* ── Q5 – Pharmaceutical price discrimination evaluation ───── */
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

/* ---- land-section-b.js ---- */
window.ECONOS_LAND_SECTION_B = {
  topic:        'Price Discrimination',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'UK rail ticket pricing: peak, off-peak and advance fares',
        tags:        ['Peak vs off-peak', '&#163;247 vs &#163;32', 'inelastic business demand', 'ORR regulation'],
        defaultOpen: true,
        paragraphs: [
          'UK rail operators charge dramatically different prices for the same journey depending on time of travel and how far in advance the ticket is purchased. A walk-up peak fare from London to Manchester with LNER costs approximately &#163;247 in 2024, while an advance off-peak ticket for the same route purchased four weeks ahead can cost as little as &#163;32 &#8212; a ratio of more than 7:1 for the same service. The Office of Rail and Road (ORR) estimates that business travellers &#8212; who typically travel at peak times and book late &#8212; contribute a disproportionate share of rail revenue despite representing a minority of journeys.',
          'Rail operators argue the pricing structure reflects genuine demand differences and serves a welfare purpose: peak fares from price-inelastic business travellers cross-subsidise off-peak and rural services that would otherwise be commercially unviable. Transport economists note that the marginal cost of carrying one additional passenger on an existing train service is close to zero, meaning the price differences between fare types far exceed any cost justification &#8212; confirming that third-degree price discrimination is occurring.',
          'The ORR has raised concerns that fare complexity &#8212; with thousands of ticket types available &#8212; creates information asymmetries that disadvantage less experienced travellers, who may pay higher prices than necessary without realising equivalent fare types are available. A 2023 ORR review proposed simplifying the fare structure to improve transparency, though operators resisted changes that would reduce their ability to charge different prices to different passenger groups.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'Pharmaceutical price discrimination between rich and poor countries',
        tags:        ['HIV drug &#163;18,400 vs &#163;85', 'access vs profit', 'WTO TRIPS agreement', 'cross-subsidy'],
        defaultOpen: false,
        paragraphs: [
          'The same HIV antiretroviral drug sold for approximately &#163;18,400 per patient per year in the United States sells for &#163;85 in India &#8212; a ratio of over 200:1. Similar price differentials exist for cancer treatments, hepatitis drugs, and vaccines across high- and low-income countries. Pharmaceutical firms justify this international price discrimination by arguing that high prices in wealthy, insured markets fund the research and development that creates the drugs in the first place: each new approved drug costs an estimated &#163;1.3 billion to develop, and approximately 45% of global pharmaceutical R&#38;D revenues come from the US market alone.',
          'The welfare analysis is complex. In high-income countries, monopoly pricing restricts access for uninsured or underinsured patients and places pressure on healthcare budgets. In low-income countries, if prices are set at or near marginal cost, access is dramatically expanded &#8212; serving patients who would otherwise receive no treatment. Médecins Sans Frontières has argued that pharmaceutical price discrimination in the access direction &#8212; low prices in poor countries &#8212; is one of the most effective global health mechanisms available, providing access to life-saving drugs to hundreds of millions of patients who could not afford developed-world prices.',
          'However, the system is vulnerable to arbitrage. The WTO TRIPS agreement and parallel importation rules create tension between firms&#39; interest in maintaining price differentials and governments&#39; interest in accessing cheaper drugs for their healthcare systems. Some European countries have begun parallel importing drugs from lower-priced EU member states, challenging pharmaceutical firms&#39; ability to sustain large price differentials within integrated trading blocs.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Digital personalised pricing and CMA scrutiny',
        tags:        ['algorithmic pricing', 'CMA investigation', 'first-degree discrimination', 'consumer awareness'],
        defaultOpen: false,
        paragraphs: [
          'The Competition and Markets Authority (CMA) launched a programme of digital markets investigations in 2022&#8211;24, examining how online platforms use personal data to set individualised prices. Unlike traditional third-degree price discrimination &#8212; which groups consumers by observable characteristics &#8212; personalised pricing uses machine learning algorithms trained on individual browsing history, purchase patterns, device type, and location to estimate each user&#39;s willingness to pay. Hotel booking sites, airline booking engines, ride-hailing apps, and e-commerce platforms have all been scrutinised.',
          'The CMA found evidence that some platforms showed different prices to different users for identical services based on inferred personal characteristics, with differences of up to 30% for the same hotel room or flight. Consumers were in most cases entirely unaware that prices were individualised. The CMA noted this represents a significant shift toward first-degree price discrimination: extracting consumer surplus at the individual level, not merely the group level. A consumer shown a higher price because their past behaviour signals high willingness to pay cannot easily detect this or seek redress.',
          'The policy response is developing. EU Digital Markets Act (DMA) provisions require designated gatekeepers to provide data portability and interoperability that could reduce the data advantages underpinning personalised pricing. The CMA&#39;s Digital Markets, Competition and Consumers Act (2024) creates new powers to impose conduct requirements on firms with strategic market status, potentially including restrictions on personalised pricing practices that harm consumers through opacity and individual exploitation.'
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
        stem:   'Explain what is meant by third-degree price discrimination.',
        tips: [
          'Define third-degree price discrimination precisely &#8212; identifiable groups, different PED, different prices.',
          'State the profit-maximising rule: MR&#8320; = MR&#8321; = MC.',
          'Use an example from the context pack (rail or pharmaceutical) to illustrate.',
          'Explain why it requires both market segmentation and prevention of arbitrage.'
        ],
        modelAnswer: 'Third-degree price discrimination occurs when a firm with market power charges different prices to identifiable groups of consumers who have different price elasticities of demand &#8212; where the price difference is not justified by cost differences. The firm identifies groups based on observable characteristics (age, employment status, location, time of purchase) that correlate with different demand elasticities. Extract A illustrates this with rail pricing: peak walk-up fares (&#163;247) target business travellers with inelastic demand &#8212; who must travel at a specific time and face no substitute &#8212; while advance off-peak fares (&#163;32) target price-elastic leisure travellers who are flexible on timing. The profit-maximising condition across segments is MR&#8320; = MR&#8321; = MC: marginal revenue is equalised across segments and set equal to marginal cost. Since the group with lower PED has a higher MR at any given price level, profit maximisation implies a higher price for the inelastic group. The 7:1 price ratio in the extract far exceeds any marginal cost difference between peak and off-peak passengers &#8212; confirming discrimination. Two conditions must hold: the firm must be able to identify the groups (market segmentation) and must prevent arbitrage &#8212; resale between segments &#8212; which rail operators achieve through non-transferable, identity-checked tickets.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'Using Extract B, examine whether pharmaceutical price discrimination between rich and poor countries is beneficial or harmful to welfare.',
        tips: [
          'Define the type of price discrimination and identify the two segments (rich/poor country markets).',
          'Explain the welfare gain in low-income markets: output expansion, access to treatment.',
          'Explain the welfare cost in high-income markets: restricted access for uninsured/underinsured consumers.',
          'Use the R&#38;D cross-subsidy argument &#8212; refer to the &#163;1.3bn development cost and 45% US revenue figure.',
          'Consider the arbitrage threat (TRIPS, parallel imports) as a limitation.',
          'Reach a balanced, supported assessment.'
        ],
        modelAnswer: 'Extract B describes international third-degree price discrimination in pharmaceuticals: HIV drugs priced at &#163;18,400 per year in the US versus &#163;85 in India &#8212; a 200:1 price ratio exploiting the dramatically different price elasticities of demand between wealthy-insured and poor-uninsured patient populations. The welfare effects are mixed and depend on the analytical framework applied. The strongest argument in favour is the output expansion effect. If a single global price were charged, it would either be set at or near the US level &#8212; excluding virtually all patients in India &#8212; or at near the Indian price &#8212; making R&#38;D commercially unviable. Price discrimination enables both outcomes simultaneously: high prices in inelastic rich-country markets recover &#163;1.3bn in average R&#38;D costs (with the US contributing approximately 45% of global R&#38;D revenues) while low prices in elastic poor-country markets extend access to life-saving treatment to hundreds of millions of patients. Médecins Sans Frontières&#39; endorsement of this mechanism reflects the enormous welfare gain from pharmaceutical access in low-income countries. The cross-subsidy is real: without US-level pricing, neither the R&#38;D investment nor the low-price access model would be sustainable. However, the welfare costs in high-income markets are significant. US consumers &#8212; particularly uninsured or underinsured patients &#8212; face prices far above competitive levels, restricting access for those who cannot afford treatment even in a wealthy country. Consumer surplus is transferred to pharmaceutical firms, representing a regressive redistribution within rich countries. Furthermore, the system faces structural vulnerability from arbitrage: parallel importation within the EU challenges firms&#39; ability to maintain large price differentials. If arbitrage were to collapse the price differential, low-income country access would likely disappear &#8212; a worse outcome than the discriminatory status quo. On balance, pharmaceutical international price discrimination is a pragmatic second-best solution to the fundamental tension between incentivising innovation and ensuring access: welfare-improving globally if the alternative is a single high price that excludes poor-country patients, but still allocatively inefficient and distributionally problematic in rich-country markets.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which price discrimination benefits or harms consumers. Refer to the extracts and your own knowledge.',
        tips: [
          'Begin with the case that price discrimination harms consumers: consumer surplus transfer, higher prices for inelastic groups, information asymmetry (Extract C).',
          'Develop the case that price discrimination benefits consumers: output expansion (new segments served), cross-subsidy for affordable access, enabling services that would otherwise be unviable (Extract A).',
          'Consider digital personalised pricing (Extract C) as an extreme case &#8212; approaching first-degree discrimination, which eliminates all consumer surplus.',
          'Consider different groups of consumers: some gain (elastic group, low-income country), some lose (inelastic group, uninsured high-income).',
          'Conclude with a supported, conditional judgement &#8212; the verdict depends on the degree, the context, and what the firm does with the extra profit.'
        ],
        modelAnswer: '<p>Price discrimination &#8212; charging different prices to different consumers for the same good where differences are not cost-based &#8212; generates complex and context-dependent effects on consumer welfare. The overall verdict depends critically on the degree of discrimination, whether total output rises, and how the additional producer surplus is used.</p><p>The case against price discrimination centres on consumer surplus extraction. In every form of price discrimination, producer surplus increases at consumers&#39; expense: the firm captures willingness-to-pay that consumers would otherwise retain. In third-degree discrimination (Extract A), business rail travellers pay &#163;247 for a journey priced at &#163;32 for leisure travellers &#8212; the inelastic group is explicitly exploited, paying prices that reflect their captive position rather than cost. Their consumer surplus is reduced. Furthermore, Extract C reveals that digital personalised pricing approaches first-degree discrimination: algorithms individually estimate willingness to pay, eliminating consumer surplus at the individual level. The CMA found price differences of up to 30% for identical services, with consumers entirely unaware. This opacity prevents the informed choices that competitive markets require &#8212; a market failure compounded by the scale of digital platform data advantages.</p><p>However, the consumer harm case is substantially qualified by the output expansion argument. If third-degree price discrimination enables a firm to serve market segments it would otherwise exclude at a single monopoly price, consumers in the newly served segment gain welfare they would otherwise forgo entirely. Extract A notes that cross-subsidies from peak business fares maintain off-peak and rural services that would be commercially unviable under uniform pricing &#8212; representing a welfare gain for those consumers, even if business travellers lose surplus. Extract B&#39;s pharmaceutical example is more compelling: 200:1 price differentials enable access to life-saving HIV drugs for patients who could not afford developed-world prices. The welfare gain for millions of patients in India from access to &#163;85 treatment likely exceeds the welfare loss from &#163;18,400 pricing in the US &#8212; and the R&#38;D cross-subsidy (US revenues funding 45% of global pharma R&#38;D) creates the future innovations from which all consumers eventually benefit.</p><p>The verdict therefore depends on which consumers we consider and over what time horizon. Inelastic groups consistently lose consumer surplus; elastic groups or newly-served segments may gain. In the long run, dynamic efficiency gains from R&#38;D funded by discriminatory profits may benefit all consumers through new products. Digital personalised pricing (Extract C) is the most concerning development: approaching first-degree discrimination with no output expansion justification &#8212; consumers already in the market are individually re-priced without welfare gain. In conclusion, price discrimination benefits consumers when it expands output or funds socially valuable investment; it harms consumers when it merely extracts existing consumer surplus using market power and information asymmetries. Policy should distinguish these cases rather than treating price discrimination as uniformly harmful or beneficial.</p>'
      }
    ]
  },

  strongAnswers: [
    'Define third-degree price discrimination precisely &#8212; identifiable groups, different PED, MR&#8320; = MR&#8321; = MC',
    'Use specific data from the extracts: the 7:1 rail price ratio, the 200:1 pharmaceutical differential, the 30% digital pricing difference',
    'Distinguish between consumers who gain (elastic/new segment) and consumers who lose (inelastic/existing segment)',
    'Apply the output expansion test: does discrimination increase or merely reprice existing output?',
    'Reach a conditional judgement &#8212; the verdict depends on context, degree, and how the extra profit is used'
  ]
};

/* ---- land-section-c.js ---- */
window.ECONOS_LAND_SECTION_C = {
  topic:        'Price Discrimination',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  question: {
    id:               'qc',
    commandWord:      'Evaluate',
    stem:             'Evaluate the view that price discrimination is always harmful to consumers.',
    marks:            25,
    suggestedMinutes: 30,

    structureTips: [
      'Define price discrimination precisely &#8212; different prices not justified by cost differences, requiring market power, segmentation, and arbitrage prevention.',
      'Explain the case that price discrimination harms consumers: consumer surplus transfer, inelastic groups exploited, digital personalised pricing approaching first-degree.',
      'Explain the case that price discrimination benefits (some) consumers: output expansion, cross-subsidy, enabling commercially unviable services.',
      'Apply the output expansion test: is total output higher or lower under discrimination than under single-price monopoly?',
      'Use specific examples: rail cross-subsidy, pharmaceutical access, digital personalised pricing (CMA investigation).',
      'Evaluate the degree of price discrimination: first-degree eliminates all consumer surplus; third-degree has mixed effects.',
      'Conclude with a supported, conditional judgement &#8212; &#8220;always harmful&#8221; is an overstatement; the verdict depends on degree, context, and what the firm does with the extra profit.'
    ],

    modelAnswer:
      '<p>Price discrimination occurs when a firm with market power charges different prices to different consumers for the same good or service, where the price difference is not justified by cost differences. It requires three conditions: market power (price-setting ability), market segmentation (identification of groups with different price elasticities of demand), and prevention of arbitrage (resale between groups). The claim that price discrimination is &#8220;always&#8221; harmful to consumers is an overstatement &#8212; the welfare effects are mixed, context-dependent, and vary significantly across the three degrees.</p>'
    + '<p>The strongest case for consumer harm arises from the transfer of consumer surplus to producers. In third-degree price discrimination &#8212; the most common form &#8212; the group with inelastic demand pays a price above what a single monopoly price would require, losing consumer surplus that is captured by the firm. UK rail pricing illustrates this: business travellers paying &#163;247 for a walk-up peak ticket (vs &#163;32 for an advance off-peak ticket) are paying a price that reflects their captive demand rather than any cost difference. Their consumer surplus is systematically extracted. First-degree (perfect) price discrimination is the most extreme case: charging every individual their exact willingness to pay eliminates consumer surplus entirely &#8212; all welfare gains flow to the producer. The CMA&#39;s investigations into digital personalised pricing found that online platforms use algorithmic analysis of individual browsing and purchase data to approach this outcome, with consumers unaware that they are being individually priced up to 30% above others for identical services. This opacity removes any market discipline &#8212; consumers cannot detect, avoid, or bargain against individually tailored prices, making personalised pricing the most concerning form of discrimination from a consumer welfare perspective.</p>'
    + '<p>However, the case that price discrimination always harms consumers fails on two important grounds. First, the output expansion effect: if discrimination enables a firm to serve market segments that would be excluded under a single monopoly price, total output rises and new consumer surplus is created in the newly served segment. UK cinema pricing provides a clear example: students paying &#163;10.50 while adults pay &#163;17.50 may represent access for students who could not afford the adult price. If the student segment is genuinely new &#8212; served only because the discriminating price covers marginal cost &#8212; total welfare increases. Second, the cross-subsidy argument: rail operators use peak business fares to subsidise off-peak and rural services that would be commercially unviable under uniform pricing. Rural passengers who would otherwise lose their service gain access to transport they would not have under a non-discriminating single-price monopolist. The welfare gain to these consumers may outweigh the welfare loss to business travellers who pay above the single-monopoly price.</p>'
    + '<p>Pharmaceutical international price discrimination is the strongest welfare-improving case. Charging &#163;18,400 in the US and &#163;85 in India for the same HIV drug exploits dramatic PED differences between wealthy-insured and poor-uninsured patient populations. But the Indian price, close to marginal cost, enables access to life-saving treatment for patients who would otherwise receive none &#8212; a welfare gain of enormous magnitude. The cross-subsidy also funds R&#38;D costing &#163;1.3bn per drug, benefiting future patients globally. The welfare loss to uninsured US patients at &#163;18,400 is real and significant; but the global net welfare effect of pharmaceutical price discrimination is likely positive compared with the alternative of a single high global price that excludes developing-world patients.</p>'
    + '<p>In conclusion, price discrimination is not always harmful to consumers. It is most harmful when it merely transfers existing consumer surplus without expanding output &#8212; particularly in digital markets where algorithmic personalised pricing approaches first-degree discrimination with no social justification. It is least harmful, and may be positively beneficial, when it expands output to previously excluded segments or funds cross-subsidies that maintain access to services that would otherwise be commercially unviable. The appropriate policy response is therefore nuanced: regulating opaque digital personalised pricing while recognising the legitimate welfare role of third-degree discrimination in pharmaceuticals and transport.</p>'
  },

  strongAnswers: [
    'Define all three degrees and apply the output expansion test as the key welfare criterion',
    'Use specific UK evidence: rail pricing ratios, pharmaceutical international differentials, CMA digital pricing investigation',
    'Distinguish consumers who gain (elastic/excluded segment) from consumers who lose (inelastic/existing segment)',
    'Acknowledge first-degree discrimination as the limiting case &#8212; eliminates all consumer surplus, most harmful',
    'Reach a conditional judgement: &#8220;always harmful&#8221; is wrong &#8212; the verdict depends on degree, output effect, and use of discriminatory profit'
  ]
};

