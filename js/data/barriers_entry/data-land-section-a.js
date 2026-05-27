window.ECONOS_LAND_SECTION_A = {
  topic:        'Barriers to Entry',
  sectionLabel: 'Section A &#8211; Short questions',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

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
          { color: 'blue',  icon: '%',      label: 'R&#38;D as % of revenue &#8211; pharmaceuticals', value: '18&#8211;20%'   },
          { color: 'blue',  icon: '%',      label: 'R&#38;D as % of revenue &#8211; technology',      value: '12&#8211;15%'   },
          { color: 'green', icon: '%',      label: 'R&#38;D as % of revenue &#8211; retail',          value: '&#60;1%'        },
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
          hint:        '4-mark response &#8211; define structural barriers, identify two distinct structural barriers from the data (e.g., sunk R&#38;D costs, economies of scale), and explain how each deters entry.',
          modelAnswer: 'Structural barriers to entry arise naturally from the industry&#39;s cost conditions and technology, rather than from deliberate incumbent behaviour. Two structural barriers in the pharmaceutical industry are as follows. First, sunk costs from R&#38;D investment: the data shows average new drug development costs &#163;1.3 billion. Unlike fixed costs (which can be recovered by selling assets if the firm exits), R&#38;D expenditure is irrecoverable &#8211; a sunk cost. A new entrant must commit to spending &#163;1.3 billion with no guarantee of success or market approval before a single unit can be sold. This asymmetric risk &#8211; the incumbent already bears the sunk cost, the entrant still faces it &#8211; is a formidable deterrent to entry. Second, economies of scale: pharmaceutical firms with large market shares spread enormous fixed costs (manufacturing plant, regulatory compliance, distribution networks, clinical trial infrastructure) over a large output. This gives incumbents a significant average cost advantage over new entrants operating at smaller scale. A potential entrant must either enter at large scale (risky, requiring substantial capital) or accept higher average costs and operate at a competitive disadvantage. Both barriers reinforce each other: high sunk R&#38;D costs combined with scale economies create a high minimum efficient scale that most potential entrants cannot credibly achieve.'
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
            { id: 'opt-c', text: 'Limit pricing &#8211; setting price below profit-maximising level to deter entry' },
            { id: 'opt-d', text: 'Economies of scale giving incumbents lower average costs'          }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. Limit pricing is a deliberate strategic action by the incumbent &#8211; setting price below the short-run profit-maximising level to signal to potential entrants that entry would be unprofitable. It is a strategic (behavioural) barrier, not a structural one arising from cost conditions or technology.',
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
        text:   'Amazon has invested over $100 billion in its global logistics network &#8211; warehouses, delivery vans, aeroplanes, and automated sorting systems &#8211; since 2010. Unlike traditional retail property (which can be sold if the business fails), much of this investment is highly specific to Amazon&#39;s operational model. Automated warehouse sorting systems designed for Amazon&#39;s parcel sizes, proprietary software integrated into the logistics chain, and brand-specific delivery assets have limited resale value to other businesses. Analysts note that any new entrant attempting to replicate Amazon&#39;s fulfilment capability would face similar costs without Amazon&#39;s established revenue base to absorb them, making competitive entry extremely unattractive even for well-capitalised rivals.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain the distinction between sunk costs and fixed costs, and why only sunk costs create significant barriers to entry.',
          hint:        '4-mark response &#8211; define both types of cost, explain the irreversibility of sunk costs, and use the extract to explain why Amazon&#39;s investment deters entry.',
          modelAnswer: 'Fixed costs are costs that do not vary with output in the short run but can be recovered if the firm exits the industry &#8211; for example, a general-purpose factory building can be sold or leased to another firm. Sunk costs are costs that are irrecoverable on exit: they have no alternative use and cannot be resold at significant value. The extract illustrates this distinction: automated sorting systems designed specifically for Amazon&#39;s parcel sizes and proprietary software have limited resale value to other businesses &#8211; they are sunk costs. A general warehouse building, by contrast, could be sold or repurposed &#8211; it is a fixed but not sunk cost. Only sunk costs create genuine barriers to entry because they represent an asymmetric risk. An incumbent has already committed to the sunk cost; it is gone regardless of what the firm does next. A potential entrant, however, must still decide whether to commit to the same expenditure, knowing they may not be able to recover it if entry fails. This exit cost risk &#8211; the fear of being stuck with irrecoverable losses &#8211; deters rational potential entrants even when the expected return might appear attractive. The extract confirms this: analysts note the combination of enormous sunk investment and limited resale value makes replicating Amazon&#39;s logistics capability extremely unattractive.'
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
          feedbackWrong:   'The correct answer is C. Contestability theory (Baumol, 1982) defines a contestable market by the absence of sunk costs and other entry barriers &#8211; not by the number of firms. A monopoly in a contestable market faces the constant threat of hit-and-run entry if it earns supernormal profit, forcing it to price close to competitive levels even with no actual rivals.'
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
          hint:        '4-mark response &#8211; explain what a patent does, why 20 years creates a temporary barrier, what happens on patent expiry (generic entry), and the policy trade-off between innovation incentive and consumer access.',
          modelAnswer: 'A patent grants the inventor the exclusive right to produce and sell an innovation for a fixed period &#8211; 20 years in the UK and EU. During the patent term, no competitor can legally produce the same drug without the patent holder&#39;s permission, creating a legal monopoly. This is a significant structural barrier to entry: any rival attempting to enter the market would face immediate legal action regardless of their productive capability. The barrier is directly linked to the innovation incentive: developing a new drug costs an average &#163;1.3 billion. Without patent protection, a rival firm could immediately copy and produce the drug at near-zero marginal cost, pricing the originator out of the market and eliminating any prospect of recovering R&#38;D investment. Patents solve this problem by guaranteeing a temporary period of exclusivity during which the firm can charge a premium price to recover costs and earn supernormal profit &#8211; incentivising future R&#38;D. However, the barrier is explicitly temporary. On patent expiry, generic manufacturers enter and the data shows prices typically fall by 80&#8211;90%. By 2023, generics account for approximately 83% of UK prescriptions &#8211; demonstrating that once the legal barrier lifts, competition rapidly brings prices toward marginal cost. The 20-year patent term represents a deliberate policy trade-off: temporary market power in exchange for the innovation that creates the drug in the first place.'
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
        text:   'WhatsApp has approximately 2 billion global users, making it the dominant messaging platform in most markets. The CMA&#39;s investigation found that consumers face high switching costs when moving away from WhatsApp: not only must they individually migrate to an alternative, they must also convince all their contacts to switch &#8211; a collective action problem that makes individual defection extremely costly even if a technically superior or cheaper alternative exists. The report noted that a new messaging app offering identical functionality to WhatsApp would be unattractive to a new user who joins to find none of their contacts present. This self-reinforcing dominance makes the market effectively closed to new entrants despite low technical barriers to building a messaging application.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain why network effects create powerful barriers to entry for potential competitors to WhatsApp.',
          hint:        '4-mark response &#8211; define network effects, explain the collective action problem, and explain why the barrier persists even if a superior alternative exists.',
          modelAnswer: 'A network effect exists when the value of a product or service to an individual user increases with the number of other users on the same platform. WhatsApp exhibits strong direct network effects: a messaging app is only valuable if the people you wish to contact are also using it. The extract identifies a powerful barrier to entry arising from this: even a technically superior or cheaper rival cannot attract users because those users&#39; contacts remain on WhatsApp. This creates a collective action problem &#8211; each individual user rationally stays on WhatsApp (where their contacts are) even if they would collectively be better off switching to a superior alternative. The new entrant cannot overcome this by improving quality or reducing price alone: the value of the platform depends on the installed user base, not just the technical specification. The extract notes this makes the market &#8220;effectively closed to new entrants despite low technical barriers to building a messaging application&#8221; &#8211; illustrating that network-effect barriers are demand-side (about coordination) rather than supply-side (about production costs). This is the defining challenge for digital platform markets: incumbents with large user bases enjoy a self-reinforcing competitive advantage that is extremely difficult for new entrants to overcome without triggering a simultaneous mass switch &#8211; which is almost impossible to coordinate.'
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
          feedbackWrong:   'The correct answer is B. Network effects mean the value of a product rises with the number of users &#8211; each additional user makes the platform more valuable for all existing users. This demand-side scale economy creates a powerful structural barrier: an entrant with few users offers less value even if the product is technically superior, making it almost impossible to attract users away from a dominant incumbent.'
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
          hint:        '4-mark response &#8211; identify two distinct tools (e.g., merger control, fines for anticompetitive behaviour, market investigations), explain how each reduces barriers, and use the data.',
          modelAnswer: 'Two competition policy tools that can reduce barriers to entry are as follows. First, merger control: the data shows the CMA completed 77 merger investigations in 2022&#8211;23, blocking approximately 5% of investigated mergers. When two firms merge, the combined entity can acquire market power that makes entry by smaller rivals harder &#8211; a larger incumbent enjoys greater economies of scale, access to capital, and brand recognition. By scrutinising and blocking mergers that would substantially reduce competition or raise barriers to entry, the CMA prevents the concentration of market power that would deter potential entrants. The meta-merger of incumbents is itself a strategic barrier creation mechanism that merger control directly addresses. Second, market investigations and behavioural remedies: the CMA has 12 open digital markets investigations (2024), examining barriers such as network effects, data advantages, and self-preferencing by dominant platforms. Where investigations find anti-competitive practices that artificially raise entry barriers &#8211; such as exclusive contracts, interoperability denial, or algorithmic self-preferencing &#8211; the CMA can impose behavioural remedies requiring firms to allow interoperability, data portability, or open access. These measures directly reduce the demand-side barriers (network effects, switching costs) and data advantages that prevent rivals from competing effectively, lowering effective barriers to entry in digital markets.'
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
          feedbackCorrect: 'Correct. Following a market investigation, the CMA can impose a range of remedies including structural remedies such as requiring divestitures (breaking up parts of a business) to restore competition, as well as behavioural remedies (e.g., requiring interoperability or access to data). The CMA does not impose criminal penalties on individuals through market investigations &#8211; that requires a separate cartel investigation.',
          feedbackWrong:   'The correct answer is B. A CMA market investigation can result in structural remedies &#8211; most powerfully, requiring a firm to divest (sell off) parts of its business to reduce market concentration and lower barriers to entry. Behavioural remedies are also available. The CMA does not nationalise firms or automatically set statutory maximum prices as a result of market investigations.'
        }
      ]
    }

  ]
};
