/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too –
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
window.ECONOS_LAND_COMPLETE = {
  topic:   'Barriers to Entry',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',   color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response', color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',             color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F6A7;',
    title: 'What to do next',
    text:  'Review your answers against the model responses. Check whether you consistently distinguished structural from strategic barriers &#8211; the central analytical distinction in this topic. Verify that your pharmaceutical patent analysis acknowledged the deliberate welfare trade-off (temporary static inefficiency in exchange for dynamic innovation gains) rather than treating the patent barrier as straightforwardly harmful. For the essay, assess whether your conclusion was genuinely conditional rather than blanket: competition policy should eliminate strategic barriers while accommodating structural ones that serve legitimate economic functions.'
  }
};

/* ---- land-intro.js ---- */
window.ECONOS_LAND_INTRO = {
  topic:        'Barriers to Entry',
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
    'Distinguishing structural barriers (sunk costs, economies of scale, patents) from strategic barriers (limit pricing, predatory pricing)',
    'Explaining why sunk costs &#8211; not just fixed costs &#8211; deter entry',
    'Analysing network effects and data advantages as digital-era barriers to entry',
    'Evaluating whether barriers to entry are always harmful or can promote innovation and efficiency'
  ],

  tip: 'The key distinction is structural versus strategic barriers. Structural barriers arise naturally from the industry&#39;s cost or technology conditions &#8211; sunk costs, economies of scale, patents. Strategic barriers are actions incumbents deliberately take to deter entry &#8211; limit pricing, predatory pricing, brand proliferation. Always ask: does the barrier reflect a genuine cost advantage, or is it an artificial restriction on competition?',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};

/* ---- land-section-a.js ---- */
window.ECONOS_LAND_SECTION_A = {
  topic:        'Barriers to Entry',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – Types of barriers: structural vs strategic ─────────── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Types of barriers to entry',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%',      label: 'R&#38;D as % of revenue &#8212; pharmaceuticals', value: '18&#8211;20%'   },
          { color: 'blue',  icon: '%',      label: 'R&#38;D as % of revenue &#8212; technology',      value: '12&#8211;15%'   },
          { color: 'green', icon: '%',      label: 'R&#38;D as % of revenue &#8212; retail',          value: '&#60;1%'        },
          { color: 'rose',  icon: '&#163;', label: 'Average cost to bring new drug to market (UK)',   value: '&#163;1.3bn'    }
        ]
      },

      parts: [
        {
          id:          'q1a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, classify and explain two structural barriers to entry faced by potential competitors in the pharmaceutical industry.',
          hint:        '4-mark response &#8212; define structural barriers, identify two distinct structural barriers from the data (e.g., sunk R&#38;D costs, economies of scale), and explain how each deters entry.',
          modelAnswer: 'Structural barriers to entry arise naturally from the industry&#39;s cost conditions and technology, rather than from deliberate incumbent behaviour. Two structural barriers in the pharmaceutical industry are as follows. First, sunk costs from R&#38;D investment: the data shows average new drug development costs &#163;1.3 billion. Unlike fixed costs (which can be recovered by selling assets if the firm exits), R&#38;D expenditure is irrecoverable &#8212; a sunk cost. A new entrant must commit to spending &#163;1.3 billion with no guarantee of success or market approval before a single unit can be sold. This asymmetric risk &#8212; the incumbent already bears the sunk cost, the entrant still faces it &#8212; is a formidable deterrent to entry. Second, economies of scale: pharmaceutical firms with large market shares spread enormous fixed costs (manufacturing plant, regulatory compliance, distribution networks, clinical trial infrastructure) over a large output. This gives incumbents a significant average cost advantage over new entrants operating at smaller scale. A potential entrant must either enter at large scale (risky, requiring substantial capital) or accept higher average costs and operate at a competitive disadvantage. Both barriers reinforce each other: high sunk R&#38;D costs combined with scale economies create a high minimum efficient scale that most potential entrants cannot credibly achieve.'
        },
        {
          id:     'q1b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following is a strategic barrier to entry rather than a structural one?',
          options: [
            { id: 'opt-a', text: 'High sunk costs from specialised capital equipment'               },
            { id: 'opt-b', text: 'Patent protection on a newly developed product'                   },
            { id: 'opt-c', text: 'Limit pricing &#8212; setting price below profit-maximising level to deter entry' },
            { id: 'opt-d', text: 'Economies of scale giving incumbents lower average costs'          }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. Limit pricing is a deliberate strategic action by the incumbent &#8212; setting price below the short-run profit-maximising level to signal to potential entrants that entry would be unprofitable. It is a strategic (behavioural) barrier, not a structural one arising from cost conditions or technology.',
          feedbackWrong:   'The correct answer is C. Limit pricing is a strategic barrier: the incumbent deliberately sets a low price to deter entry, even though this sacrifices short-run profits. Structural barriers (high sunk costs, patents, economies of scale) arise from industry characteristics, not from incumbent behaviour designed to manipulate entry conditions.'
        }
      ]
    },

    /* ── Q2 – Sunk costs vs fixed costs ──────────────────────────── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Sunk costs and barriers to entry',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from Amazon Annual Report and Financial Times analysis, 2023',
        text:   'Amazon has invested over $100 billion in its global logistics network &#8212; warehouses, delivery vans, aeroplanes, and automated sorting systems &#8212; since 2010. Unlike traditional retail property (which can be sold if the business fails), much of this investment is highly specific to Amazon&#39;s operational model. Automated warehouse sorting systems designed for Amazon&#39;s parcel sizes, proprietary software integrated into the logistics chain, and brand-specific delivery assets have limited resale value to other businesses. Analysts note that any new entrant attempting to replicate Amazon&#39;s fulfilment capability would face similar costs without Amazon&#39;s established revenue base to absorb them, making competitive entry extremely unattractive even for well-capitalised rivals.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain the distinction between sunk costs and fixed costs, and why only sunk costs create significant barriers to entry.',
          hint:        '4-mark response &#8212; define both types of cost, explain the irreversibility of sunk costs, and use the extract to explain why Amazon&#39;s investment deters entry.',
          modelAnswer: 'Fixed costs are costs that do not vary with output in the short run but can be recovered if the firm exits the industry &#8212; for example, a general-purpose factory building can be sold or leased to another firm. Sunk costs are costs that are irrecoverable on exit: they have no alternative use and cannot be resold at significant value. The extract illustrates this distinction: automated sorting systems designed specifically for Amazon&#39;s parcel sizes and proprietary software have limited resale value to other businesses &#8212; they are sunk costs. A general warehouse building, by contrast, could be sold or repurposed &#8212; it is a fixed but not sunk cost. Only sunk costs create genuine barriers to entry because they represent an asymmetric risk. An incumbent has already committed to the sunk cost; it is gone regardless of what the firm does next. A potential entrant, however, must still decide whether to commit to the same expenditure, knowing they may not be able to recover it if entry fails. This exit cost risk &#8212; the fear of being stuck with irrecoverable losses &#8212; deters rational potential entrants even when the expected return might appear attractive. The extract confirms this: analysts note the combination of enormous sunk investment and limited resale value makes replicating Amazon&#39;s logistics capability extremely unattractive.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A market characterised by low sunk costs and no other barriers to entry is described in contestability theory as:',
          options: [
            { id: 'opt-a', text: 'A natural monopoly'          },
            { id: 'opt-b', text: 'A perfectly competitive market' },
            { id: 'opt-c', text: 'A contestable market'        },
            { id: 'opt-d', text: 'An oligopolistic market'     }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. A contestable market is one where entry and exit are free (zero or low sunk costs), regardless of the number of incumbents. Even a monopolist in a contestable market faces competitive discipline from the threat of &#8220;hit-and-run&#8221; entry, preventing sustained supernormal profit without actual competition occurring.',
          feedbackWrong:   'The correct answer is C. Contestability theory (Baumol, 1982) defines a contestable market by the absence of sunk costs and other entry barriers &#8212; not by the number of firms. A monopoly in a contestable market faces the constant threat of hit-and-run entry if it earns supernormal profit, forcing it to price close to competitive levels even with no actual rivals.'
        }
      ]
    },

    /* ── Q3 – Patents ────────────────────────────────────────────── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Patents as legal barriers to entry',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '&#163;', label: 'Average R&#38;D cost to develop a new drug (global estimate)', value: '&#163;1.3bn'  },
          { color: 'blue',  icon: '%',      label: 'Patent protection period (UK/EU pharmaceuticals)',             value: '20 years'    },
          { color: 'green', icon: '%',      label: 'Price fall when generic competitor enters post-patent',        value: '80&#8211;90%' },
          { color: 'blue',  icon: '%',      label: 'Share of medicines prescribed as generics (UK, 2023)',         value: '&#8776;83%'   }
        ]
      },

      parts: [
        {
          id:          'q3a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain how the patent system creates a temporary legal barrier to entry in pharmaceutical markets.',
          hint:        '4-mark response &#8212; explain what a patent does, why 20 years creates a temporary barrier, what happens on patent expiry (generic entry), and the policy trade-off between innovation incentive and consumer access.',
          modelAnswer: 'A patent grants the inventor the exclusive right to produce and sell an innovation for a fixed period &#8212; 20 years in the UK and EU. During the patent term, no competitor can legally produce the same drug without the patent holder&#39;s permission, creating a legal monopoly. This is a significant structural barrier to entry: any rival attempting to enter the market would face immediate legal action regardless of their productive capability. The barrier is directly linked to the innovation incentive: developing a new drug costs an average &#163;1.3 billion. Without patent protection, a rival firm could immediately copy and produce the drug at near-zero marginal cost, pricing the originator out of the market and eliminating any prospect of recovering R&#38;D investment. Patents solve this problem by guaranteeing a temporary period of exclusivity during which the firm can charge a premium price to recover costs and earn supernormal profit &#8212; incentivising future R&#38;D. However, the barrier is explicitly temporary. On patent expiry, generic manufacturers enter and the data shows prices typically fall by 80&#8211;90%. By 2023, generics account for approximately 83% of UK prescriptions &#8212; demonstrating that once the legal barrier lifts, competition rapidly brings prices toward marginal cost. The 20-year patent term represents a deliberate policy trade-off: temporary market power in exchange for the innovation that creates the drug in the first place.'
        },
        {
          id:     'q3b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'The policy trade-off in the pharmaceutical patent system is between:',
          options: [
            { id: 'opt-a', text: 'Short-run productive efficiency and long-run allocative efficiency'         },
            { id: 'opt-b', text: 'Incentivising dynamic innovation and ensuring short-run allocative efficiency (affordable access)' },
            { id: 'opt-c', text: 'The interests of domestic producers and international trade obligations'    },
            { id: 'opt-d', text: 'Government tax revenue from patent fees and consumer welfare'               }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. The patent trade-off is between dynamic efficiency (innovation: patents incentivise R&#38;D by guaranteeing temporary exclusivity) and static allocative efficiency (access: patent monopoly means P &gt; MC, restricting output and access). The 20-year patent term reflects a judgement that the long-run dynamic benefits of incentivised innovation outweigh the short-run cost of restricted access.',
          feedbackWrong:   'The correct answer is B. The pharmaceutical patent trade-off is between dynamic efficiency (incentivising innovation through temporary monopoly profits that recover R&#38;D costs) and static allocative efficiency (setting P = MC to maximise consumer access). The patent system accepts a period of allocative inefficiency as the price of generating the innovation in the first place.'
        }
      ]
    },

    /* ── Q4 – Network effects ────────────────────────────────────── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Network effects as barriers to entry',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from CMA Digital Markets investigation, 2021',
        text:   'WhatsApp has approximately 2 billion global users, making it the dominant messaging platform in most markets. The CMA&#39;s investigation found that consumers face high switching costs when moving away from WhatsApp: not only must they individually migrate to an alternative, they must also convince all their contacts to switch &#8212; a collective action problem that makes individual defection extremely costly even if a technically superior or cheaper alternative exists. The report noted that a new messaging app offering identical functionality to WhatsApp would be unattractive to a new user who joins to find none of their contacts present. This self-reinforcing dominance makes the market effectively closed to new entrants despite low technical barriers to building a messaging application.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain why network effects create powerful barriers to entry for potential competitors to WhatsApp.',
          hint:        '4-mark response &#8212; define network effects, explain the collective action problem, and explain why the barrier persists even if a superior alternative exists.',
          modelAnswer: 'A network effect exists when the value of a product or service to an individual user increases with the number of other users on the same platform. WhatsApp exhibits strong direct network effects: a messaging app is only valuable if the people you wish to contact are also using it. The extract identifies a powerful barrier to entry arising from this: even a technically superior or cheaper rival cannot attract users because those users&#39; contacts remain on WhatsApp. This creates a collective action problem &#8212; each individual user rationally stays on WhatsApp (where their contacts are) even if they would collectively be better off switching to a superior alternative. The new entrant cannot overcome this by improving quality or reducing price alone: the value of the platform depends on the installed user base, not just the technical specification. The extract notes this makes the market &#8220;effectively closed to new entrants despite low technical barriers to building a messaging application&#8221; &#8212; illustrating that network-effect barriers are demand-side (about coordination) rather than supply-side (about production costs). This is the defining challenge for digital platform markets: incumbents with large user bases enjoy a self-reinforcing competitive advantage that is extremely difficult for new entrants to overcome without triggering a simultaneous mass switch &#8212; which is almost impossible to coordinate.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Network effects are best described as:',
          options: [
            { id: 'opt-a', text: 'The cost savings from sharing infrastructure across multiple firms'                                     },
            { id: 'opt-b', text: 'The increase in a product&#39;s value to users as more people use the same product'                   },
            { id: 'opt-c', text: 'The benefit to a firm from connecting its internal departments via a shared IT system'                  },
            { id: 'opt-d', text: 'The reduction in average costs as output increases along the learning curve'                            }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Network effects (or network externalities) occur when the value of a product or service to each user increases as the total number of users grows. Classic examples include social media, messaging apps, payment networks, and operating systems. Network effects create powerful self-reinforcing incumbent advantages and represent a major source of barriers to entry in digital markets.',
          feedbackWrong:   'The correct answer is B. Network effects mean the value of a product rises with the number of users &#8212; each additional user makes the platform more valuable for all existing users. This demand-side scale economy creates a powerful structural barrier: an entrant with few users offers less value even if the product is technically superior, making it almost impossible to attract users away from a dominant incumbent.'
        }
      ]
    },

    /* ── Q5 – Competition policy and barriers ────────────────────── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Competition policy responses to barriers to entry',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '#',      label: 'CMA merger investigations completed (2022&#8211;23)',  value: '77'          },
          { color: 'rose',  icon: '&#163;', label: 'Largest UK competition fine (Google, price-fixing)',   value: '&#163;2.1bn' },
          { color: 'green', icon: '#',      label: 'CMA open digital markets investigations (2024)',       value: '12'          },
          { color: 'blue',  icon: '%',      label: 'CMA merger blocks as share of investigations',        value: '&#8776;5%'   }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two competition policy tools that can reduce barriers to entry and promote competition.',
          hint:        '4-mark response &#8212; identify two distinct tools (e.g., merger control, fines for anticompetitive behaviour, market investigations), explain how each reduces barriers, and use the data.',
          modelAnswer: 'Two competition policy tools that can reduce barriers to entry are as follows. First, merger control: the data shows the CMA completed 77 merger investigations in 2022&#8211;23, blocking approximately 5% of investigated mergers. When two firms merge, the combined entity can acquire market power that makes entry by smaller rivals harder &#8212; a larger incumbent enjoys greater economies of scale, access to capital, and brand recognition. By scrutinising and blocking mergers that would substantially reduce competition or raise barriers to entry, the CMA prevents the concentration of market power that would deter potential entrants. The meta-merger of incumbents is itself a strategic barrier creation mechanism that merger control directly addresses. Second, market investigations and behavioural remedies: the CMA has 12 open digital markets investigations (2024), examining barriers such as network effects, data advantages, and self-preferencing by dominant platforms. Where investigations find anti-competitive practices that artificially raise entry barriers &#8212; such as exclusive contracts, interoperability denial, or algorithmic self-preferencing &#8212; the CMA can impose behavioural remedies requiring firms to allow interoperability, data portability, or open access. These measures directly reduce the demand-side barriers (network effects, switching costs) and data advantages that prevent rivals from competing effectively, lowering effective barriers to entry in digital markets.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A &#8220;market investigation&#8221; by the CMA can result in:',
          options: [
            { id: 'opt-a', text: 'Criminal prosecution of individual executives responsible for price-fixing'                         },
            { id: 'opt-b', text: 'Structural remedies such as requiring a firm to divest parts of its business'                      },
            { id: 'opt-c', text: 'Automatic nationalisation of the firm found to be acting against the public interest'              },
            { id: 'opt-d', text: 'Setting a statutory maximum price for the products sold in that market'                            }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Following a market investigation, the CMA can impose a range of remedies including structural remedies such as requiring divestitures (breaking up parts of a business) to restore competition, as well as behavioural remedies (e.g., requiring interoperability or access to data). The CMA does not impose criminal penalties on individuals through market investigations &#8212; that requires a separate cartel investigation.',
          feedbackWrong:   'The correct answer is B. A CMA market investigation can result in structural remedies &#8212; most powerfully, requiring a firm to divest (sell off) parts of its business to reduce market concentration and lower barriers to entry. Behavioural remedies are also available. The CMA does not nationalise firms or automatically set statutory maximum prices as a result of market investigations.'
        }
      ]
    }

  ]
};

/* ---- land-section-b.js ---- */
window.ECONOS_LAND_SECTION_B = {
  topic:        'Barriers to Entry',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'Boeing&#8211;Airbus duopoly: sunk costs and barriers in aircraft manufacturing',
        tags:        ['20-year COMAC development', '$32bn R&#38;D per aircraft', 'two viable producers', 'sunk cost barrier'],
        defaultOpen: true,
        paragraphs: [
          'Commercial aircraft manufacturing is one of the world&#39;s most concentrated industries: only two firms &#8212; Boeing (US) and Airbus (EU) &#8212; are capable of producing large passenger jets at commercial scale. China&#39;s COMAC began developing its C919 narrowbody aircraft in 2008 and achieved its first commercial delivery only in 2023 &#8212; a 15-year development timeline &#8212; and the aircraft has not yet secured significant orders outside China&#39;s state-linked airlines. Analysts estimate Boeing and Airbus have each invested over $30 billion in research, development, and certification for their respective aircraft families, expenditure that is almost entirely sunk: specialised tooling, proprietary manufacturing processes, and years of flight-test data have no significant resale value outside the industry.',
          'The minimum efficient scale in aircraft manufacturing requires producing several hundred aircraft per year to achieve competitive unit costs &#8212; itself a barrier requiring enormous upfront investment in production capacity before a single commercial sale. Established players benefit from decades of learning-by-doing: each aircraft produced reduces unit costs as engineers and production teams accumulate specialised knowledge. COMAC faces the double disadvantage of both starting at the wrong point on the learning curve and lacking the maintenance, parts, and training infrastructure that airlines require when selecting an aircraft type for their fleets.',
          'Aviation safety certification requirements create an additional regulatory barrier. The US FAA and European EASA certifications &#8212; which are prerequisites for selling to most international airlines &#8212; require years of testing and verification. COMAC&#39;s C919 has received Chinese certification only; the FAA certification process, if pursued, could take a further decade. Incumbent producers have already incurred these certification costs, while new entrants face them as an additional sunk investment before any revenue can be earned.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'Digital platform barriers: Google, Meta and data network effects',
        tags:        ['network effects', 'data advantages', 'CMA Digital Markets Act 2024', 'switching costs'],
        defaultOpen: false,
        paragraphs: [
          'Google and Meta (Facebook, Instagram, WhatsApp) together accounted for approximately 75% of UK digital advertising revenue in 2023 &#8212; a level of market concentration that the CMA has described as &#8220;entrenched.&#8221; The CMA&#39;s Digital Markets investigation found that these firms&#39; dominance is underpinned by self-reinforcing barriers that are qualitatively different from traditional cost-based barriers: network effects (the value of each platform rises with its user base), proprietary data advantages (each user interaction generates data that improves targeting algorithms beyond the capability of smaller rivals), and ecosystem lock-in (consumers using Google Search, Chrome, Android, and Google Maps are embedded in an interconnected system that makes switching individually costly even if collectively beneficial).',
          'The data advantage is particularly significant. Google and Meta have collected and processed user behaviour data for over a decade at a scale no new entrant can replicate. This data is the raw material for advertising targeting algorithms &#8212; the core revenue driver for both businesses. A new digital advertising platform entering the market would face an insurmountable disadvantage: its algorithms would be trained on far less data, producing inferior targeting, lower conversion rates, and therefore lower advertiser willingness to pay. The incumbents&#39; data advantage is self-reinforcing: more users generate more data, which improves the algorithm, which attracts more advertisers, which generates more revenue to invest in services that attract more users.',
          'The Digital Markets, Competition and Consumers Act (DMCCA) 2024 created a new &#8220;strategic market status&#8221; (SMS) designation, giving the CMA powers to impose conduct requirements on designated firms &#8212; including data portability, interoperability, and prohibitions on self-preferencing. The legislation aims to lower barriers to entry by reducing the data and ecosystem advantages of incumbents, making it possible for rivals to compete on quality rather than accumulated data advantage.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Pharmaceutical patents: innovation incentive versus access barrier',
        tags:        ['20-year patent term', '80&#8211;90% price fall on expiry', 'R&#38;D incentive', 'access vs innovation'],
        defaultOpen: false,
        paragraphs: [
          'The pharmaceutical patent system grants 20-year exclusive production rights to drug developers in exchange for public disclosure of the innovation. This legal monopoly is explicitly designed to create a temporary barrier to entry &#8212; preventing generic manufacturers from copying and producing a drug at near-zero marginal cost until the patent expires. The rationale is that without this barrier, the commercial incentive to invest &#163;1.3 billion in average drug development costs would be eliminated: any successful drug would immediately face generic competition that priced the originator out of the market before costs could be recovered.',
          'The welfare trade-off is explicit and intentional. During the patent term, the drug manufacturer charges a monopoly price far above marginal cost &#8212; restricting access for patients who cannot afford the drug and creating a deadweight welfare loss. This is the cost of the barrier. On patent expiry, generic manufacturers enter and prices typically fall by 80&#8211;90%, dramatically expanding access: approximately 83% of UK prescriptions are now dispensed as generics. The welfare gain from innovation &#8212; the existence of the drug at all &#8212; is intended to outweigh the temporary access barrier during the patent term.',
          'Critics argue the 20-year patent term is poorly calibrated. Effective patent life (after development time) may be only 10&#8211;12 years for a drug approved late in its patent term, insufficient to recover costs in some cases and providing excessive protection in others. Evergreening &#8212; minor formulation changes that reset the patent clock &#8212; is a strategic practice that extends the effective barrier beyond the intended 20 years. Patent linkage in pharmaceutical regulatory approval processes can also delay generic entry beyond patent expiry. These strategic uses of intellectual property rights transform a justified innovation barrier into an anticompetitive one, and have been subject to CMA and European Commission investigation.'
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
        stem:   'Explain what is meant by a barrier to entry.',
        tips: [
          'Define a barrier to entry precisely: a factor that gives incumbents an advantage over potential entrants.',
          'Distinguish structural barriers (cost conditions, technology) from strategic barriers (incumbent behaviour).',
          'Use an example from the context pack to illustrate.',
          'Explain how barriers to entry enable firms to sustain supernormal profit in the long run.'
        ],
        modelAnswer: 'A barrier to entry is any factor that gives existing firms (incumbents) a cost or strategic advantage over potential new entrants, making entry into the industry difficult or commercially unattractive. Barriers prevent the free entry that would, in a competitive market, erode supernormal profits down to the normal profit level. Without barriers to entry, the promise of supernormal profit would attract entrants until profit is competed away; with barriers, incumbents can sustain supernormal profit in the long run. Barriers can be structural &#8212; arising naturally from the industry&#39;s cost conditions or technology &#8212; or strategic &#8212; deliberate actions by incumbents to deter entry. Extract A illustrates a structural barrier in aircraft manufacturing: sunk R&#38;D costs of over $30 billion per aircraft family have no resale value, creating an irreversible commitment that potential entrants must also make before generating any revenue. This asymmetric risk &#8212; the incumbent has already absorbed the sunk cost, the entrant still faces it &#8212; is a formidable deterrent. Extract C shows a legal barrier: the 20-year pharmaceutical patent creates a statutory barrier to imitation. Both enable incumbents to sustain prices above competitive levels without eroding market share to new entrants.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'Using Extract A, examine the barriers to entry in commercial aircraft manufacturing.',
        tips: [
          'Identify all barriers in the extract: sunk R&#38;D costs, economies of scale (MES), learning curve, certification requirements.',
          'Explain how each deters entry &#8212; particularly the asymmetry between incumbents (already incurred costs) and entrants (still face them).',
          'Use the COMAC example to show that even state-backed entry with 15 years of effort has not succeeded.',
          'Consider whether these barriers are structural (reflect genuine cost conditions) or artificially constructed.',
          'Assess whether the barriers serve any beneficial function.'
        ],
        modelAnswer: 'Extract A reveals that commercial aircraft manufacturing is protected by multiple reinforcing structural barriers that have limited the global market to two producers for over four decades. The primary barrier is sunk cost: Boeing and Airbus have each invested over $30 billion in aircraft development, and virtually all of this is irrecoverable &#8212; specialised tooling, proprietary manufacturing processes, and certification data have no significant resale value. A new entrant cannot gradually test the market: it must commit to comparable expenditure before earning a single dollar of commercial revenue. The COMAC C919 demonstrates this brutally &#8212; 15 years of development and state-level investment has produced an aircraft that has not yet secured significant international orders. Second, economies of scale and the learning curve create a cost barrier. The extract notes that competitive unit costs require producing several hundred aircraft annually &#8212; a minimum efficient scale that demands its own enormous capital investment. Incumbents have also descended the learning curve over decades: each aircraft produced reduces unit costs as production teams accumulate expertise. A new entrant begins at the top of the learning curve, permanently cost-disadvantaged until it has produced comparable numbers &#8212; a process that may take decades during which it cannot survive without state support. Third, regulatory certification provides a time and financial barrier: FAA and EASA certification may take a further decade for COMAC, adding to sunk costs before international sales are possible. These barriers are largely structural &#8212; they reflect genuine industry cost conditions rather than deliberate incumbent anticompetitive behaviour. However, they produce a duopoly with characteristics that concern regulators: limited competition on price, Boeing-Airbus capacity coordination, and very limited choice for airlines. The barriers can also be argued to serve consumers: they reflect the genuine engineering complexity and safety requirements of commercial aviation, and the scale needed to sustain viable production of a safe, certified aircraft.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which barriers to entry are always harmful to consumers and competition. Refer to the extracts and your own knowledge.',
        tips: [
          'Case against barriers: restrict competition, sustain supernormal profit, reduce consumer welfare, create allocative inefficiency.',
          'Case for barriers (structural): reflect genuine cost conditions, may enable economies of scale, fund innovation (Extract C).',
          'Case for barriers (pharmaceutical patents, Extract C): designed to incentivise innovation &#8212; explicitly beneficial in long run.',
          'Digital barriers (Extract B): more concerning &#8212; self-reinforcing data advantages with no clear consumer benefit.',
          'Aircraft barriers (Extract A): structural, reflect genuine safety/cost conditions &#8212; not anticompetitive in intent.',
          'Distinguish strategic barriers (always harmful) from structural/legal barriers (may be justified).',
          'Conclude with a conditional judgement &#8212; the verdict depends on the type of barrier and the context.'
        ],
        modelAnswer: '<p>Barriers to entry restrict the competitive process that normally drives prices toward marginal cost, eliminates supernormal profit, and forces firms to innovate and improve efficiency. On this view, barriers harm consumers by sustaining prices above competitive levels, protecting inefficient incumbents, and reducing the dynamic pressure to innovate. However, the three extracts reveal a more nuanced picture: some barriers are socially desirable, others are harmful, and the distinction between them is the key analytical question.</p><p>The clearest case for harmful barriers is found in strategic behaviour: predatory pricing, exclusive contracts, or the digital platform practices described in Extract B. Google and Meta&#39;s data advantages are self-reinforcing &#8212; each additional user generates data that improves targeting algorithms, raising the competitive hurdle for rivals without reflecting any genuine social benefit to consumers. A new entrant cannot replicate years of accumulated behavioural data: this is an artificial barrier that concentrates market power without serving the consumer interest in innovation or cost reduction. The CMA&#39;s designation of strategic market status and the DMCCA 2024 powers to require data portability directly target these barriers as harmful. Similarly, pharmaceutical evergreening (minor formulation changes resetting the patent clock, noted in Extract C) represents a strategic abuse of the patent system that extends barriers beyond their intended and socially justified duration &#8212; clearly harmful to both consumer access and competition.</p><p>However, the structural barriers in Extract A &#8212; aircraft manufacturing sunk costs, economies of scale, and safety certification &#8212; reflect genuine engineering and economic conditions. The requirement for extensive testing, certification, and capital investment is not a device to exclude competitors; it reflects the actual cost and safety requirements of building aircraft. The resulting duopoly may be suboptimal from a static competition perspective, but it reflects real industry economics. Removing these barriers is not straightforwardly possible without changing the underlying technology or safety standards. More importantly, the pharmaceutical patent barrier (Extract C) is explicitly designed to be beneficial: the 20-year patent barrier is the mechanism by which society purchases innovation. Without it, the commercial incentive to invest &#163;1.3 billion in drug development disappears &#8212; and the absence of the drug harms consumers far more than a temporary access restriction. The 80&#8211;90% price fall on patent expiry, and the fact that 83% of UK prescriptions are now generics, confirms that the barrier is temporary and the long-run outcome is competitive.</p><p>In conclusion, barriers to entry are not always harmful. Strategic barriers designed to exclude competitors without generating consumer benefit are clearly harmful and should be subject to competition policy intervention. Structural barriers reflecting genuine cost conditions may be inevitable and in some contexts beneficial (enabling scale economies, funding R&#38;D). Legally mandated barriers like patents are explicitly welfare-improving if correctly calibrated. Policy should therefore focus on distinguishing barrier type &#8212; addressing strategic barriers firmly while accommodating structural ones &#8212; rather than pursuing an indiscriminate policy of barrier reduction.</p>'
      }
    ]
  },

  strongAnswers: [
    'Define barriers to entry precisely &#8212; structural vs strategic, and the asymmetry between incumbent and entrant',
    'Use specific data from Extract A: $30bn sunk costs, 15-year COMAC development, certification requirements',
    'Explain self-reinforcing digital barriers (Extract B): data → algorithm → revenue → more users → more data',
    'Distinguish between harmful barriers (strategic, evergreening) and potentially beneficial ones (patents incentivising R&#38;D)',
    'Conclude conditionally: the verdict depends on the type of barrier and whether it serves any legitimate economic purpose'
  ]
};

/* ---- land-section-c.js ---- */
window.ECONOS_LAND_SECTION_C = {
  topic:        'Barriers to Entry',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  question: {
    id:               'qc',
    commandWord:      'Evaluate',
    stem:             'Evaluate the view that all barriers to entry are harmful and should be eliminated by competition policy.',
    marks:            25,
    suggestedMinutes: 30,

    structureTips: [
      'Define barriers to entry: structural (sunk costs, economies of scale, patents) vs strategic (limit pricing, predatory pricing, exclusive dealing).',
      'Explain the case that barriers are harmful: sustain supernormal profit, prevent competitive discipline, create allocative inefficiency, protect inefficient incumbents.',
      'Explain the case for some barriers being beneficial: patent system incentivises R&#38;D; sunk costs reflect genuine industry characteristics; economies of scale may enable lower prices.',
      'Consider strategic barriers (limit pricing, evergreening, digital self-preferencing) &#8212; strongest case for elimination.',
      'Consider structural barriers (pharma patents, aircraft sunk costs) &#8212; may reflect genuine social trade-offs.',
      'Evaluate competition policy tools: merger control, market investigations, digital markets legislation (DMCCA 2024).',
      'Conclude: &#8220;all barriers are harmful&#8221; is an overstatement; policy should eliminate strategic barriers while accommodating structural ones that serve legitimate economic functions.'
    ],

    modelAnswer:
      '<p>A barrier to entry is any factor that gives incumbent firms a cost, legal, or strategic advantage over potential entrants, enabling the sustained earning of supernormal profit in the long run. Barriers range from structural (arising naturally from industry cost conditions or technology) to strategic (deliberately constructed by incumbents to deter rivals). The view that all barriers are harmful and should be eliminated is a significant overstatement: some barriers reflect genuine economic realities or serve important social functions, and competition policy would cause harm rather than benefit by seeking to remove them.</p>'
    + '<p>The case that barriers are harmful rests on their effect on competition and efficiency. Where barriers prevent entry, firms with market power can sustain prices above marginal cost indefinitely, creating persistent allocative inefficiency and deadweight welfare loss. Absent competitive discipline, monopolists may also allow X-inefficiency to develop &#8212; costs rising above the technical minimum because no rival threatens to undercut them. Strategic barriers are the clearest case for policy intervention: limit pricing (deliberately setting price below profit-maximising level to signal that entry would be unprofitable), predatory pricing (temporarily pricing below cost to drive out new entrants), exclusive dealing contracts, and digital self-preferencing (Google prioritising its own services in search results, subject to CMA investigation) represent incumbent firms raising the effective cost of entry without generating any consumer benefit. These strategic barriers create the costs of monopoly without the benefits of scale or innovation, and provide the strongest justification for competition policy action. The CMA&#39;s Digital Markets, Competition and Consumers Act (2024) powers to impose conduct requirements on firms with strategic market status &#8212; including data portability and prohibitions on self-preferencing &#8212; directly target these artificial barriers.</p>'
    + '<p>However, many barriers cannot be eliminated without destroying the economic function that justifies them. The pharmaceutical patent system creates a 20-year statutory barrier to entry that is explicitly designed to be welfare-improving: without it, generic manufacturers would immediately copy successful drugs at near-zero marginal cost, pricing originators out of the market before &#163;1.3bn R&#38;D costs could be recovered. Eliminating this barrier through competition policy would collapse the commercial incentive to invest in drug development, causing a dynamic efficiency failure far more harmful in the long run than the static allocative cost of patent pricing. The pharmaceutical case is not an exception &#8212; it is the paradigm case for intentional, socially justified barriers. Similarly, aircraft manufacturing sunk costs (over $30bn per aircraft family) and certification requirements reflect genuine industry economics and safety standards: no competition policy intervention can make entry costless, and attempting to mandate entry on artificial terms would be economically incoherent.</p>'
    + '<p>Economies of scale provide a further case where barriers may serve consumers: natural monopoly conditions (where a single firm can supply the entire market at lower average cost than multiple firms) mean that competition &#8212; if it were achieved &#8212; would result in higher prices than regulated monopoly. The barrier arising from minimum efficient scale in these industries reflects a genuine social trade-off between competitive discipline and cost efficiency, not a socially harmful restriction.</p>'
    + '<p>In conclusion, competition policy should not seek to eliminate all barriers to entry. Strategic barriers that serve only to entrench incumbents without generating consumer benefit should be vigorously challenged. Structural and legal barriers that reflect genuine cost conditions, safety requirements, or innovation incentives should be accommodated, though regulated to prevent strategic abuse (such as evergreening or data hoarding). The measure of good competition policy is not the absence of barriers but whether the barriers that persist serve or undermine the long-run consumer interest.</p>'
  },

  strongAnswers: [
    'Distinguish structural from strategic barriers clearly &#8212; this is the central organising distinction in the essay',
    'Use specific examples: pharma patents (beneficial), digital self-preferencing (harmful), aircraft sunk costs (structural, unavoidable)',
    'Explain why eliminating the patent barrier would cause dynamic efficiency failure &#8212; not all barriers reduce welfare',
    'Apply the consumer welfare test: does the barrier serve or harm the long-run consumer interest?',
    'Conclude conditionally: eliminate strategic barriers; accommodate structural ones that serve legitimate economic functions'
  ]
};

