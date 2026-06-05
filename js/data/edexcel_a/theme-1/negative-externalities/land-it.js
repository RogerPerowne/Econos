/* ============================================================
   ECONOS – Land It · consolidated section data
   Concatenated from per-section files at v0.4.0. Quiz pools
   from the former quiz-*.js shells are folded in here too –
   the questions live on as Land It content.
   ============================================================ */

/* ---- land-complete.js ---- */
/* ============================================================
   ECONOS – Land It complete page data
   Topic: Negative Externalities (1.12)
   ============================================================ */

window.ECONOS_LAND_COMPLETE = {
  topic:   'Negative Externalities',
  nextUrl: '/',

  sections: {
    A: { label: 'Section A', sublabel: 'Short questions',    color: '#ec2d68' },
    B: { label: 'Section B', sublabel: 'Extended response',  color: '#f59e0b' },
    C: { label: 'Section C', sublabel: 'Essay',              color: '#2563eb' }
  },

  nextCard: {
    icon:  '&#x1F680;',
    title: 'What to do next',
    text:  'Compare your answers with the model responses, paying close attention to how the PMC / SMC / MEC framework is applied and where the deadweight welfare loss appears on the diagram. Check whether your evaluation of corrective policies distinguished between how well each targets the specific externality &#8211; taxes, permits, regulation, and road pricing each have different strengths. If your Section C essay did not include a clear discussion of government failure and a conditional judgement, revisit those elements before moving to the next topic.'
  }
};

/* ---- land-intro.js ---- */
/* ============================================================
   ECONOS – Land It intro page data
   Topic: Negative Externalities (1.12)
   ============================================================ */

window.ECONOS_LAND_INTRO = {
  topic:        'Negative Externalities',
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
    'Drawing and interpreting MSC/MSB diagrams and identifying the deadweight welfare loss triangle',
    'Explaining how taxes, regulation, and tradeable permits correct negative externalities &#8211; and their limitations',
    'Evaluating market-based vs command-and-control approaches using UK evidence (ETS, congestion charge, fuel duty)',
    'Constructing a balanced essay on government intervention to correct negative externalities'
  ],

  tip: 'Start with a Section A question to build your diagram confidence. Add Section B when you are ready to apply analysis to a real context, and Section C to practise full essay technique under timed conditions.',

  stages: [
    { num: 1, name: 'Learn it', sub: 'Recap and lock in the content', state: 'done',    href: TopicLoader.routes.learn()      },
    { num: 2, name: 'Link it',  sub: 'Apply skills with the context', state: 'done',    href: TopicLoader.routes.link('intro') },
    { num: 3, name: 'Land it',  sub: 'Tackle real exam questions',    state: 'current'                                               }
  ]
};

/* ---- land-section-a.js ---- */
/* ============================================================
   ECONOS – Land It · Section A data for Negative Externalities
   Topic: Negative Externalities (1.12)
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Negative Externalities',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.routes.land('intro'),

  questions: [

    /* ── Q1 – Market failure and negative externalities ── */
    {
      id:       'q1',
      title:    'Question 1',
      subtitle: 'Market failure and negative externalities',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '&#163;', label: 'UK Emissions Trading Scheme (ETS) carbon price (2023)',   value: '&#163;45/tonne' },
          { color: 'blue',  icon: '&#163;', label: 'Stern Review estimate of social cost of carbon (2006)',   value: '&#163;85/tonne' },
          { color: 'green', icon: 'm',      label: 'UK greenhouse gas emissions reduction since 1990',         value: '&#8722;50%'     },
          { color: 'rose',  icon: '%',      label: 'Share of UK CO&#8322; emissions covered by ETS (2023)',    value: '~30%'           }
        ]
      },

      parts: [
        {
          id:          'q1a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Explain what is meant by a negative externality and why it leads to market failure.',
          hint:        '4-mark response &#8212; define negative externality clearly, explain the divergence between private and social costs, and state what market failure results.',
          modelAnswer: 'A negative externality is a cost imposed on a third party who is not involved in the economic transaction generating it. When a firm burns fossil fuels to produce goods, for example, it imposes pollution costs on society &#8212; through respiratory illness, climate damage, and environmental degradation &#8212; without bearing those costs itself. The firm&#39;s private marginal cost (PMC) therefore lies below the true social marginal cost (SMC), where SMC = PMC + marginal external cost (MEC). Because producers make decisions based only on their private costs, output is set where PMC equals price rather than where SMC equals price. The free-market equilibrium therefore overshoots the socially optimal level of output, producing more pollution than is efficient. This divergence between private and social costs means the market fails: resources are misallocated, too much is produced of the externality-generating good, and a deadweight welfare loss is generated. The data illustrate this: the UK ETS carbon price of &#163;45 per tonne sits well below the Stern Review&#39;s estimate of the social cost of carbon at &#163;85 per tonne, suggesting that even with the ETS, carbon emissions are underpriced relative to their true social cost.'
        },
        {
          id:     'q1b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'In a market with a negative externality, the free-market equilibrium output compared to the socially optimal output is:',
          options: [
            { id: 'opt-a', text: 'Too low, because private costs exceed social costs'                                                     },
            { id: 'opt-b', text: 'Too high, because private costs are below social costs, so too much of the good is produced'            },
            { id: 'opt-c', text: 'Equal to the socially optimal level if the market is perfectly competitive'                             },
            { id: 'opt-d', text: 'Too low, because the external cost is not captured by producers'                                       }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. When there is a negative externality, private marginal cost is below social marginal cost. Producers base output decisions on PMC, so they produce beyond the socially optimal quantity where SMC = demand. This creates a deadweight welfare loss triangle.',
          feedbackWrong:   'The correct answer is B. In a negative externality, SMC &gt; PMC because external costs are not paid by producers. The market produces where PMC = price, which is a higher output than the socially optimal quantity where SMC = price. The result is overproduction and a deadweight welfare loss.'
        }
      ]
    },

    /* ── Q2 – Carbon tax ── */
    {
      id:       'q2',
      title:    'Question 2',
      subtitle: 'Carbon tax as a corrective policy',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from HM Treasury and UK Emissions Trading Authority, 2023',
        text:   'The UK introduced the Emissions Trading Scheme (ETS) in January 2021 following its departure from the EU ETS. Under the scheme, around 1,000 of the UK&#39;s largest industrial and energy producers must hold a permit for every tonne of CO&#8322; they emit. Permits are auctioned by the government, creating a carbon price that fluctuated between &#163;40 and &#163;75 per tonne in 2022&#8211;23. The UK also levies a carbon price support (CPS) on fossil fuels used to generate electricity, set at &#163;18 per tonne of CO&#8322;. Combined revenues from the ETS and CPS exceeded &#163;5 billion in 2022&#8211;23. Critics note that the ETS covers only about 30% of UK emissions, leaving road transport, agriculture, and residential heating largely outside the price signal.'
      },

      parts: [
        {
          id:          'q2a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain how a carbon tax or permit scheme corrects the market failure caused by negative externalities from carbon emissions.',
          hint:        '4-mark response &#8212; explain the mechanism by which a carbon price closes the gap between PMC and SMC, and refer to the extract data.',
          modelAnswer: 'A carbon tax or permit scheme works by internalising the external cost of carbon emissions, forcing producers to bear the social cost of pollution that they would otherwise ignore. In the absence of any carbon price, firms set output where private marginal cost equals price, producing more than the socially optimal level &#8212; a market failure. By requiring firms to pay for each tonne of CO&#8322; emitted &#8212; either through a tax or by purchasing ETS permits &#8212; the government effectively adds the marginal external cost to the producer&#39;s private cost. This raises their effective marginal cost of production, shifting the firm&#39;s supply curve upward and leftward. If the carbon price is set equal to the marginal external cost, it bridges the gap between PMC and SMC, pushing equilibrium output back toward the socially optimal level and eliminating the deadweight welfare loss. The extract illustrates this in practice: the UK ETS auctions permits at prices fluctuating between &#163;40 and &#163;75 per tonne in 2022&#8211;23, generating over &#163;5 billion in revenue that can be used to fund green investment or compensate those adversely affected. However, the extract also highlights a key limitation: the scheme covers only 30% of UK emissions, so road transport, agriculture, and residential heating remain outside the price signal, limiting the scheme&#39;s overall effectiveness.'
        },
        {
          id:     'q2b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'A carbon tax set equal to the marginal external cost of pollution will:',
          options: [
            { id: 'opt-a', text: 'Eliminate all pollution in the economy'                                                             },
            { id: 'opt-b', text: 'Shift the burden of the tax entirely onto consumers with no change in producer behaviour'           },
            { id: 'opt-c', text: 'Internalise the externality, moving output to the socially optimal level'                          },
            { id: 'opt-d', text: 'Only be effective if the price elasticity of demand for the good is perfectly elastic'             }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. A Pigouvian tax equal to the marginal external cost adds the external cost to the producer&#39;s private cost, so the effective PMC rises to equal SMC. Output falls to the socially optimal level and the deadweight welfare loss is eliminated.',
          feedbackWrong:   'The correct answer is C. A carbon tax equal to the marginal external cost internalises the externality by making producers bear the full social cost of their output. The market equilibrium moves to the socially optimal point where SMC = demand. It does not eliminate all pollution &#8212; the optimal level of pollution is positive &#8212; and the tax burden is shared between producers and consumers depending on relative elasticities.'
        }
      ]
    },

    /* ── Q3 – Regulation vs taxation ── */
    {
      id:       'q3',
      title:    'Question 3',
      subtitle: 'Regulation versus taxation to correct negative externalities',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'blue',  icon: '%',      label: 'UK fuel duty as % of petrol pump price (2023)',              value: '~52%'          },
          { color: 'green', icon: '&#163;', label: 'Average Environment Agency fine for pollution offence (2022)', value: '&#163;22,000'  },
          { color: 'rose',  icon: 'm',      label: 'UK firms subject to Environment Agency regulation (2022)',    value: '~20,000'       },
          { color: 'blue',  icon: '%',      label: 'UK CO&#8322; emissions reduction since peak in 1991',         value: '&#8722;48%'    }
        ]
      },

      parts: [
        {
          id:     'q3a',
          letter: 'a',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following is an advantage of using taxation rather than direct regulation to correct a negative externality?',
          options: [
            { id: 'opt-a', text: 'Taxation guarantees a specific maximum level of emissions, giving regulatory certainty'                 },
            { id: 'opt-b', text: 'Taxation provides a continuous incentive to innovate and reduce pollution beyond the minimum standard' },
            { id: 'opt-c', text: 'Taxation is costless to administer and requires no government monitoring'                              },
            { id: 'opt-d', text: 'Taxation eliminates pollution completely by raising the price of polluting goods to infinity'          }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. A tax provides a continuous financial incentive: the more a firm pollutes, the more it pays. This gives firms an ongoing reason to invest in cleaner technologies and processes, even beyond the regulated minimum. Regulation, by contrast, sets a standard &#8212; once met, there is no incentive to do better.',
          feedbackWrong:   'The correct answer is B. Taxation creates a continuous price signal: each unit of pollution carries a cost, so firms have a persistent incentive to reduce emissions and invest in innovation. Regulation sets a minimum standard &#8212; once complied with, further reduction is unprofitable. Taxation does not eliminate all pollution, does not guarantee specific emission levels, and involves significant administrative costs.'
        },
        {
          id:          'q3b',
          letter:      'b',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, compare the use of regulation and taxation as methods of correcting negative externalities from pollution.',
          hint:        '4-mark response &#8212; identify and explain one advantage of each approach, and acknowledge one limitation of each, using the data where possible.',
          modelAnswer: 'Regulation involves the government setting legally enforceable environmental standards &#8212; for example, emission limits backed by the Environment Agency, which policed approximately 20,000 UK firms in 2022. A key advantage of regulation is certainty: firms must comply with the standard or face fines, giving policymakers confidence that emissions will not exceed a defined threshold. This is particularly important where pollution is highly dangerous and society cannot tolerate large uncertainties about the level of harm. However, a significant limitation is that enforcement can be costly and imperfect &#8212; with an average fine of only &#163;22,000, polluters with high marginal abatement costs may rationally choose to pollute and pay the fine rather than clean up. Taxation, illustrated by UK fuel duty at around 52% of the pump price, works by raising the private cost of the polluting activity, narrowing the gap between PMC and SMC. Unlike regulation, a tax provides a continuous incentive to reduce emissions: each unit of fuel burned generates a tax liability, so firms and consumers have an ongoing reason to switch to cleaner alternatives or reduce consumption. A limitation of taxation is that the government must correctly estimate the marginal external cost to set the optimal tax rate &#8212; a challenging task when externalities are complex and uncertain. If the tax is set too low, the market failure is only partially corrected; if too high, excessive costs are imposed on producers and consumers.'
        }
      ]
    },

    /* ── Q4 – Congestion as a negative externality ── */
    {
      id:       'q4',
      title:    'Question 4',
      subtitle: 'Congestion as a negative externality: the London Congestion Charge',
      marks:    5,

      context: {
        type:   'text-extract',
        source: 'Adapted from Transport for London (TfL) and Department for Transport statistics, 2023',
        text:   'London&#39;s Congestion Charge, introduced in 2003, requires drivers to pay &#163;15 per day to enter a defined central zone. The scheme was extended in 2021 to incorporate the Ultra Low Emission Zone (ULEZ) charge of &#163;12.50 per day for non-compliant vehicles. TfL data show that traffic volumes in the charging zone fell by around 30% in the first year of the Congestion Charge, and nitrogen dioxide (NO&#8322;) concentrations fell by 12% within the zone. By 2022, however, traffic levels had partially rebounded. Revenues from the charge &#8212; approximately &#163;300 million per year &#8212; are ringfenced to fund public transport investment. Opponents argue the charge disproportionately burdens lower-income drivers who cannot afford an alternative mode of transport.'
      },

      parts: [
        {
          id:          'q4a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the extract, explain how road congestion represents a negative externality and how the London Congestion Charge attempts to correct this market failure.',
          hint:        '4-mark response &#8212; explain the negative externality from congestion, then explain the mechanism of the charge, referring to the extract data.',
          modelAnswer: 'Road congestion is a negative externality because each additional driver on a congested road imposes costs on all other road users &#8212; slower journey times, increased fuel consumption, and higher pollution &#8212; without paying for those costs. The private marginal cost to an individual driver of entering central London (fuel, vehicle wear) is therefore below the social marginal cost, which includes the time costs imposed on all other drivers and the air quality damage to residents. Free-market provision results in overuse of road space: drivers enter the zone up to the point where their private benefit equals their private cost, generating a deadweight welfare loss through excessive congestion and pollution. The London Congestion Charge attempts to internalise this externality by imposing a monetary charge that raises drivers&#39; private cost of entering the zone, bringing it closer to the true social cost. The extract shows the scheme achieved a 30% reduction in traffic and a 12% fall in NO&#8322; concentrations in its first year &#8212; evidence that the price signal successfully reduced the overuse of road space and corrected the market failure. Revenue of approximately &#163;300 million per year is also ringfenced for public transport, providing an alternative to driving. However, the partial rebound in traffic levels by 2022 suggests the charge alone may be insufficient to sustain the correction over time without adjustment.'
        },
        {
          id:     'q4b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following is a potential drawback of using congestion charging to correct the negative externality from road use?',
          options: [
            { id: 'opt-a', text: 'It provides a continuous incentive to reduce driving, unlike regulation'                                },
            { id: 'opt-b', text: 'It eliminates the external cost of congestion entirely once the charge is introduced'                   },
            { id: 'opt-c', text: 'It may be regressive, imposing a disproportionate burden on lower-income drivers who cannot switch modes' },
            { id: 'opt-d', text: 'It requires no monitoring infrastructure, making it cheap to administer'                               }
          ],
          correct:         'opt-c',
          feedbackCorrect: 'Correct. A flat congestion charge takes a higher proportion of income from lower-income households than from wealthier ones, making it regressive. Low-income drivers who depend on their car for work and cannot afford public transport alternatives are particularly disadvantaged &#8212; a concern raised explicitly in the extract.',
          feedbackWrong:   'The correct answer is C. A flat daily charge is regressive: it represents a larger share of disposable income for low-income drivers. Those who can switch to public transport or who own compliant electric vehicles avoid the charge, while those dependent on older vehicles and lacking alternatives bear the full burden. The extract specifically identifies this as a criticism of the scheme.'
        }
      ]
    },

    /* ── Q5 – Government failure in addressing externalities ── */
    {
      id:       'q5',
      title:    'Question 5',
      subtitle: 'Government failure in addressing negative externalities',
      marks:    5,

      context: {
        type: 'data-grid',
        items: [
          { color: 'rose',  icon: '&#163;', label: 'UK fuel duty rate (unchanged since 2011)',                       value: '57.95p/litre' },
          { color: 'blue',  icon: '%',      label: 'Reduction in UK ETS permit price from 2022 peak to mid-2023',   value: '&#8722;40%'   },
          { color: 'green', icon: '&#163;', label: 'UK government subsidies to North Sea oil and gas (2022)',         value: '&#163;1bn+'   },
          { color: 'rose',  icon: 'm',      label: 'Years since last increase in UK fuel duty',                      value: '12 years'     }
        ]
      },

      parts: [
        {
          id:          'q5a',
          letter:      'a',
          marks:       4,
          type:        'freetext',
          stem:        'Using the data, explain two reasons why government intervention to correct negative externalities may itself lead to government failure.',
          hint:        '4-mark response &#8212; identify two distinct reasons and develop each with an economic explanation, referring to the data where relevant.',
          modelAnswer: 'Government failure occurs when intervention to correct a market failure produces an outcome that is worse than the original market outcome, or that creates new inefficiencies. One reason is the political pressure to freeze corrective taxes at suboptimal levels. The data show UK fuel duty has been frozen since 2011 &#8212; now 12 years without an increase &#8212; meaning its real value has been eroded by inflation. Fuel duty is intended to internalise the external costs of road transport (congestion, air pollution, carbon emissions), but a politically motivated freeze means the tax rate now falls well short of the marginal external cost, leaving the market failure only partially corrected. Governments facing electoral pressure tend to prioritise the short-term interests of motorists over environmental goals, generating a systematic bias toward underpricing negative externalities. A second reason is regulatory inconsistency and contradictory policies: the data reveal the UK government paid over &#163;1 billion in subsidies to North Sea oil and gas producers in 2022, while simultaneously operating the ETS to price carbon. Subsidising fossil fuel production directly reduces firms&#39; private costs, encouraging greater output and hence greater carbon emissions &#8212; directly undermining the corrective effect of the carbon price. This contradiction illustrates how lobbying by vested interests, departmental rivalries, and short-term revenue concerns can lead to incoherent policy that amplifies rather than corrects the original market failure.'
        },
        {
          id:     'q5b',
          letter: 'b',
          marks:  1,
          type:   'mcq',
          stem:   'Which of the following best describes &#8220;government failure&#8221; in the context of correcting negative externalities?',
          options: [
            { id: 'opt-a', text: 'The government choosing to do nothing about pollution'                                                        },
            { id: 'opt-b', text: 'A situation where government intervention to correct market failure creates new inefficiencies or worsens welfare' },
            { id: 'opt-c', text: 'The government setting a carbon tax that is exactly equal to the marginal external cost'                       },
            { id: 'opt-d', text: 'A market outcome where private and social costs are equal'                                                    }
          ],
          correct:         'opt-b',
          feedbackCorrect: 'Correct. Government failure describes situations where intervention leads to an outcome that is worse than the original market failure, or that creates new distortions. Examples include regulatory capture, poorly calibrated taxes, unintended consequences, or contradictory policies &#8212; such as subsidising fossil fuels while taxing carbon.',
          feedbackWrong:   'The correct answer is B. Government failure is not simply inaction (A) &#8212; it occurs when active intervention makes things worse. Setting the tax at the correct level (C) would eliminate the market failure without government failure. A situation where PMC = SMC (D) would be the efficient market outcome, not a failure.'
        }
      ]
    }

  ]
};

/* ---- land-section-b.js ---- */
/* ============================================================
   ECONOS – Land It · Section B data for Negative Externalities
   Topic: Negative Externalities (1.12)
   ============================================================ */

window.ECONOS_LAND_SECTION_B = {
  topic:        'Negative Externalities',
  sectionLabel: 'Section B &#8212; Extended response',
  backUrl:      TopicLoader.routes.land('intro'),

  /* ── Context pack: 3 extracts, collapsible ─────────────────── */
  contextPack: {
    title: 'Context pack',
    intro: 'Read the source material carefully, then plan and write a well-structured, analytical answer to the exam-style question.',
    extracts: [
      {
        id:          'extract-a',
        label:       'Extract A',
        title:       'The UK Plastic Packaging Tax: correcting a negative externality?',
        tags:        ['plastic packaging tax', '&#163;200/tonne', 'recycled content', 'unintended consequences'],
        defaultOpen: true,
        paragraphs: [
          'The UK Plastic Packaging Tax (PPT) was introduced in April 2022 at a rate of &#163;200 per tonne, rising to &#163;210.82 per tonne in April 2023. It applies to plastic packaging manufactured in or imported into the UK that contains less than 30% recycled plastic. The government estimated the tax would affect around 20,000 businesses and generate approximately &#163;235 million in its first year. The aim was to internalise the external costs of single-use plastic &#8212; including marine pollution, litter, and carbon emissions from virgin plastic production &#8212; by incentivising producers to switch to packaging with higher recycled content.',
          'Early evidence has been mixed. HMRC data show that recycled plastic content in packaging increased by an estimated 8&#8211;10 percentage points in the first year, suggesting the tax did alter producer behaviour at the margin. However, critics argue that &#163;200 per tonne significantly underestimates the true social cost of plastic pollution, which some environmental economists place at over &#163;500 per tonne when marine ecosystem damage and microplastic contamination are fully valued. If the tax is set below the true marginal external cost, the market failure is only partially corrected.',
          'A further concern is unintended consequences. Some producers responded by switching from heavier, easily recyclable rigid plastic packaging to lighter, mixed-material flexible packaging that is technically exempt but is far harder to recycle in practice. Consumer goods firms have also raised prices, partly passing the tax burden onto households &#8212; raising equity questions about who ultimately bears the cost of the policy.'
        ]
      },
      {
        id:          'extract-b',
        label:       'Extract B',
        title:       'Road congestion and the case for road pricing',
        tags:        ['congestion externality', 'road pricing', 'fuel duty freeze', 'London ULEZ'],
        defaultOpen: false,
        paragraphs: [
          'Road congestion imposes significant negative externalities: the Centre for Economics and Business Research (CEBR) estimated that congestion cost the UK economy &#163;9.4 billion in lost productivity in 2022, equivalent to roughly &#163;1,000 per motorist. Each additional vehicle entering a congested road slows all other vehicles, imposing time costs, increased fuel consumption, and higher accident risk on third parties &#8212; costs that the individual driver does not bear. Without a price mechanism, road use is underpriced relative to its true social cost, leading to overuse: the free-market equilibrium has too many vehicles on the road relative to the social optimum.',
          'The London Congestion Charge (&#163;15/day) and Ultra Low Emission Zone charge (&#163;12.50/day for non-compliant vehicles) represent the UK&#39;s most developed attempt at road pricing. Evidence from Transport for London suggests the Congestion Charge reduced traffic in the charging zone by up to 30% in its early years, cut NO&#8322; concentrations by 12%, and generated around &#163;300 million per year for public transport investment. Economists broadly support road pricing as a first-best solution to the congestion externality: it targets the source of the market failure directly, provides a continuous incentive, and raises revenue that can fund public transport alternatives.',
          'Yet the UK as a whole relies primarily on fuel duty &#8212; a blunt instrument that taxes fuel consumption rather than the act of driving on congested roads. Fuel duty was last increased in 2011 and has been repeatedly frozen, eroding its real value. A per-mile road pricing scheme replacing fuel duty has been recommended by successive transport economists, but has stalled due to political opposition, data-privacy concerns, and the regressive distributional impact on rural drivers who have no alternative to the car.'
        ]
      },
      {
        id:          'extract-c',
        label:       'Extract C',
        title:       'Valuing environmental externalities: the social cost of carbon debate',
        tags:        ['social cost of carbon', 'Stern Review', 'cost-benefit analysis', 'uncertainty'],
        defaultOpen: false,
        paragraphs: [
          'Correcting environmental negative externalities through taxation requires the government to estimate the marginal external cost &#8212; a technically and politically difficult task. The social cost of carbon (SCC), for example, is the monetary value of the harm caused by emitting one additional tonne of CO&#8322;. Estimates vary enormously: the Stern Review (2006) placed it at around &#163;85/tonne; the US Environmental Protection Agency revised its estimate upward to approximately &#163;160/tonne in 2023; some climate economists argue the true figure could exceed &#163;500/tonne once non-linear tipping points and irreversible ecosystem damage are included.',
          'This uncertainty creates a fundamental problem for Pigouvian taxation. If the government sets the carbon tax below the true SCC &#8212; as critics argue the UK ETS carbon price of &#163;45/tonne does &#8212; the tax only partially internalises the externality and the market failure persists. Setting the tax too high, however, imposes unnecessary costs on producers and consumers, risking job losses in carbon-intensive industries and potentially driving production abroad to jurisdictions with weaker environmental standards &#8212; so-called &#8220;carbon leakage&#8221;.',
          'The difficulty of valuing externalities also affects regulation. Governments must weigh costs and benefits in deciding emission standards, permitted pollution levels, and investment in clean technology. If the external cost is underestimated &#8212; because future harms are discounted, ecosystem services are unpriced, or political pressure limits ambition &#8212; the regulatory standard will itself be set too leniently. This problem of imperfect information is a central source of government failure in environmental policy.'
        ]
      }
    ]
  },

  /* ── Question: one multi-part Extended Response ──────────────── */
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
        stem:   'Explain the concept of a negative externality, using the example of plastic packaging pollution.',
        tips: [
          'Define negative externality precisely &#8212; a cost to third parties not involved in the transaction.',
          'Use the PMC / SMC / MEC framework: SMC = PMC + MEC.',
          'Explain the resulting market failure: overproduction and deadweight welfare loss.',
          'Refer to the context of plastic packaging from Extract A to ground your answer.'
        ],
        modelAnswer: 'A negative externality is an uncompensated cost imposed on third parties who are not party to the economic transaction that generates it. When a firm produces plastic packaging, its private marginal cost (PMC) reflects only its own input costs &#8212; raw materials, labour, and energy &#8212; but not the external costs it imposes on society. These external costs &#8212; the marginal external cost (MEC) &#8212; include marine pollution from single-use plastics, microplastic contamination of food chains, litter costs borne by local authorities, and the carbon emissions associated with producing virgin plastic. The true social marginal cost (SMC) of plastic packaging therefore exceeds the PMC, where SMC = PMC + MEC. Because firms make production decisions based only on their private costs, they produce at the level where PMC equals price &#8212; a higher output than is socially optimal. The socially optimal output is where SMC equals the demand curve (representing marginal social benefit). The difference between the free-market equilibrium and the social optimum is overproduction relative to the efficient level, generating a deadweight welfare loss: a triangle on a supply-and-demand diagram representing the net loss to society from the overallocation of resources to plastic packaging production. Extract A confirms this framework is applicable: it notes the UK Plastic Packaging Tax was introduced to &#8220;internalise the external costs of single-use plastic&#8221;, including marine pollution and carbon emissions from virgin plastic production &#8212; costs that firms had previously been able to ignore.'
      },
      {
        id:     'q1b',
        letter: 'b',
        marks:  8,
        type:   'freetext',
        stem:   'With reference to Extract A, examine whether the UK Plastic Packaging Tax has been effective in reducing the negative externalities associated with plastic packaging.',
        tips: [
          'Set up the analysis: what problem was the tax designed to correct? Use the PMC/SMC/MEC framework.',
          'Present the evidence for effectiveness from Extract A (8&#8211;10 percentage point increase in recycled content).',
          'Challenge the effectiveness: the tax rate (&#163;200&#47;tonne) may be below the true social cost (&#163;500+&#47;tonne).',
          'Discuss unintended consequences from the extract (substitution to harder-to-recycle flexible packaging, regressive price rises).',
          'Reach a balanced conclusion on effectiveness, acknowledging partial success alongside limitations.'
        ],
        modelAnswer: 'The UK Plastic Packaging Tax was designed to internalise the external costs of single-use plastic &#8212; marine pollution, microplastic contamination, and carbon emissions from virgin plastic production. By imposing a charge on packaging containing less than 30% recycled content, the government aimed to raise producers&#39; private costs, narrowing the gap between PMC and SMC and reducing overproduction of environmentally harmful packaging. There is evidence of partial effectiveness. Extract A reports that recycled plastic content in packaging increased by an estimated 8&#8211;10 percentage points in the first year, suggesting the tax successfully altered producer behaviour at the margin. This is consistent with standard Pigouvian tax theory: by raising the cost of using virgin plastic, the tax created a financial incentive to source recycled content &#8212; moving output closer to the socially optimal level. However, the evidence also raises significant doubts about the extent of correction. Extract A notes that critics argue &#163;200 per tonne significantly underestimates the true social cost of plastic pollution, which some environmental economists place above &#163;500 per tonne. If the tax is set below the true MEC, it shifts output toward &#8212; but not to &#8212; the social optimum. The deadweight welfare loss is reduced but not eliminated, and the market failure persists in a smaller form. Furthermore, Extract A highlights unintended consequences that may undermine the policy&#39;s environmental impact. Some producers switched to lighter, mixed-material flexible packaging that is technically exempt from the tax but is far harder to recycle in practice. This substitution effect may mean that total plastic recyclability has not improved as much as the recycled-content figures suggest &#8212; an illustration of how producers can comply with the letter of a regulation while circumventing its spirit. The regressive distributional impact &#8212; firms passing the tax onto consumers through higher prices &#8212; also raises equity concerns, particularly for lower-income households who spend a higher proportion of income on packaged consumer goods. Overall, the Plastic Packaging Tax represents a well-targeted attempt to correct a negative externality, and early evidence of behavioural change is encouraging. However, the tax rate appears insufficient to fully internalise the true social cost, unintended substitution effects limit its environmental impact, and regressive distributional outcomes remain unaddressed. Effectiveness has been partial at best.'
      },
      {
        id:     'q1c',
        letter: 'c',
        marks:  12,
        type:   'freetext',
        stem:   'Discuss the extent to which market-based solutions are preferable to regulation for correcting negative externalities. Refer to the extracts and your own knowledge.',
        tips: [
          'Define market-based solutions (Pigouvian taxes, tradeable permits) and regulation (emission standards, bans, quantity controls).',
          'Make the case for market-based solutions: efficiency, continuous incentive, revenue generation, flexibility.',
          'Use Extracts A and B for evidence (ETS, congestion charge, PPT).',
          'Make the case for regulation: certainty, effectiveness when externalities are hard to value (Extract C), addressing market power.',
          'Evaluate when each approach is preferable &#8212; consider the nature of the externality, information problems, and political economy.',
          'Reach a clear, supported judgement with a conditional conclusion.'
        ],
        modelAnswer: 'Market-based solutions to negative externalities &#8212; principally Pigouvian taxes and tradeable permit schemes &#8212; work by attaching a price to the externality, internalising the external cost into producers&#39; private decisions. Direct regulation, by contrast, uses legally enforceable standards, bans, or quantity controls to limit the externality at source. The debate between these approaches is central to environmental policy and requires careful evaluation of their relative merits and limitations. The theoretical case for market-based solutions rests on efficiency. A Pigouvian tax equal to the marginal external cost raises the producer&#39;s effective PMC to equal SMC, moving equilibrium to the social optimum and eliminating the deadweight welfare loss. Unlike regulation &#8212; which sets a minimum standard &#8212; a tax provides a continuous incentive: each additional unit of pollution carries a financial cost, encouraging firms to innovate and reduce emissions beyond the minimum. The UK Emissions Trading Scheme illustrates this logic: auctioning carbon permits creates a price signal that rewards cleaner producers (who can sell spare permits) and penalises dirty ones. Taxes also generate revenue &#8212; the Plastic Packaging Tax raised &#163;235 million in its first year (Extract A) and London&#39;s congestion charge generates &#163;300 million annually (Extract B) &#8212; which can fund public goods or compensate those adversely affected. Tradeable permits additionally provide certainty over the total quantity of pollution &#8212; a political advantage over taxes, whose precise emission-reduction effect depends on elasticities of supply and demand. However, market-based solutions face a fundamental practical problem: the need to accurately estimate the marginal external cost. Extract C illustrates this sharply in the context of carbon pricing, where SCC estimates range from &#163;85 to over &#163;500 per tonne. If the tax is set below the true MEC &#8212; as critics argue for the UK ETS carbon price of around &#163;45 per tonne &#8212; the market failure is only partially corrected. Political pressure tends to push tax rates below economically optimal levels: UK fuel duty has been frozen since 2011 (Extract B), eroding its real value and its corrective effect. Regulation avoids this problem in one respect: a quantity-based standard directly limits the harm, regardless of cost uncertainty. Where an externality is potentially catastrophic or irreversible &#8212; such as certain toxic pollutants &#8212; the certainty offered by a regulatory ban may be preferable to a tax that permits continued pollution in exchange for payment. Regulation may also be more effective when market power distorts the price mechanism &#8212; dominant firms may be able to absorb a tax and pass it on to consumers without significantly reducing output. The appropriate choice between market-based solutions and regulation depends on the specific characteristics of the externality. Where external costs can be reasonably quantified, where demand and supply are elastic enough to respond to price signals, and where innovation in abatement technology is possible, taxes and permits are likely to be more efficient. Where the externality is severe, the external cost is poorly understood, or political credibility requires a firm quantity limit, regulation may be preferable. In practice, the most effective policy frameworks combine both: the UK uses the ETS and carbon price support alongside regulatory emission standards and planning rules. The evidence from Extracts A, B, and C suggests that neither approach alone is sufficient, and that government failure &#8212; whether through mis-set tax rates, regulatory capture, or political timidity &#8212; is a risk under both. On balance, market-based solutions are theoretically superior when information is adequate and political will is strong; regulation provides an essential backstop where it is not.'
      }
    ]
  },

  /* ── Right-rail "What strong answers do" ──────────────────────── */
  strongAnswers: [
    'Use the PMC / SMC / MEC framework with precision, not just vague references to &#8220;costs to society&#8221;',
    'Anchor arguments in specific extract data (tax rates, percentage changes, revenue figures)',
    'Acknowledge government failure as a limitation of both taxation and regulation',
    'Conclude with a clear, conditional judgement that responds directly to the question'
  ]
};

/* ---- land-section-c.js ---- */
/* ============================================================
   ECONOS – Land It · Section C data for Negative Externalities
   Topic: Negative Externalities (1.12)
   ============================================================ */

window.ECONOS_LAND_SECTION_C = {
  topic:        'Negative Externalities',
  sectionLabel: 'Section C &#8212; Essay',
  backUrl:      TopicLoader.routes.land('intro'),

  /* In the exam there are two options; here we present one. */
  question: {
    id:          'qc',
    commandWord: 'Evaluate',
    stem:        'Evaluate the effectiveness of government policies to reduce the negative externalities associated with road transport in the UK.',
    marks:       25,
    suggestedMinutes: 30,

    structureTips: [
      'Define negative externality and identify the specific externalities from road transport (congestion, air pollution, carbon emissions, accidents).',
      'Explain why the free market overproduces road transport: PMC &lt; SMC, deadweight welfare loss, using the MSC/MSB diagram.',
      'Analyse the main UK policy tools: fuel duty, London Congestion Charge / ULEZ, vehicle emission standards, and the UK ETS.',
      'Evaluate each policy &#8212; does it set the right price? Does it target the externality directly? What are the unintended consequences?',
      'Discuss government failure: the fuel duty freeze since 2011, political resistance to road pricing, fossil fuel subsidies, carbon leakage.',
      'Consider the limits of market-based solutions and when regulation may be preferable (e.g. banning new petrol cars from 2035).',
      'Reach a clear, conditional judgement &#8212; how effective are UK policies overall, and what reforms would improve outcomes?'
    ],

    modelAnswer:
      '<p>Road transport generates a range of significant negative externalities &#8212; costs imposed on third parties not involved in the transaction between driver and fuel supplier. These include congestion (CEBR estimated at &#163;9.4 billion in lost productivity in 2022), air pollution from nitrogen dioxide and particulate matter (contributing to approximately 40,000 premature deaths per year in the UK), carbon emissions (road transport accounts for around 24% of UK territorial CO&#8322;), and noise pollution. In each case, the private marginal cost (PMC) to the driver &#8212; fuel, insurance, vehicle wear &#8212; falls short of the true social marginal cost (SMC = PMC + MEC). The free market therefore overproduces road transport: drivers enter roads up to the point where their private benefit equals their private cost, resulting in a higher volume of traffic than is socially optimal. The gap between the free-market equilibrium and the social optimum is represented by a deadweight welfare loss triangle on a marginal social cost / marginal social benefit diagram. The policy challenge is to close the gap between PMC and SMC through taxes, regulation, or other instruments.</p>'
    + '<p>The UK&#39;s primary market-based instrument for road transport externalities is fuel duty, currently levied at 57.95 pence per litre. By raising the cost of fuel consumption, duty increases the PMC of driving, narrowing the gap between PMC and SMC. In principle, if set at the correct level &#8212; equal to the MEC per litre &#8212; it would move the market to the social optimum. Fuel duty does provide a continuous incentive: the more fuel a driver burns, the higher their tax bill, encouraging fuel economy and, at the margin, modal switching to public transport or active travel. However, fuel duty faces several significant limitations. It has been frozen since 2011, meaning its real value has fallen substantially as inflation has eroded its purchasing power. A corrective tax that does not keep pace with the external cost it is meant to reflect loses its effectiveness over time. More fundamentally, fuel duty is a blunt instrument: it taxes fuel consumption regardless of where or when driving occurs. A driver causing severe congestion on a rush-hour urban motorway pays the same fuel duty as one driving at 3am on an empty rural road, even though the congestion externality is entirely absent in the second case. Fuel duty therefore cannot accurately target the congestion element of the negative externality.</p>'
    + '<p>The London Congestion Charge (&#163;15/day) and Ultra Low Emission Zone charge (&#163;12.50/day for non-compliant vehicles) represent the UK&#39;s most targeted approach to road transport externalities. By charging specifically for entering a defined geographic zone, the scheme directly prices the congestion and air quality externalities that arise in dense urban environments. Evidence suggests meaningful effectiveness: Transport for London data show traffic fell by approximately 30% in the first year and NO&#8322; concentrations declined by 12% within the zone. Revenue of around &#163;300 million per year is ringfenced for public transport investment, providing an alternative to driving that further reduces the externality. However, the scheme&#39;s geographic scope is narrow &#8212; covering only a fraction of London and no other UK cities &#8212; and traffic levels partially rebounded after the initial reduction. The flat daily charge is also regressive: it takes a proportionally higher share of income from lower-income drivers who depend on their car and cannot access affordable public transport alternatives. Despite the economic case for national road pricing &#8212; which could replace fuel duty with charges that vary by location, time of day, and congestion level &#8212; successive UK governments have rejected it due to political opposition, data-privacy concerns, and distributional worries about rural drivers.</p>'
    + '<p>On the supply side, the UK&#39;s Zero Emission Vehicle (ZEV) mandate requires that 22% of new cars sold by manufacturers must be zero-emission in 2024, rising to 100% by 2035. This regulatory approach directly addresses the carbon and air-quality externalities from petrol and diesel vehicles by forcing a structural shift in the vehicle fleet. Unlike a tax, it provides certainty over the pace of transition and is not subject to annual political decisions about rate-setting. However, it does not address the congestion externality &#8212; an electric vehicle sitting in a traffic jam imposes just as large a congestion cost on other road users as a diesel car &#8212; and its impact on total emissions depends on the carbon intensity of the electricity grid used to charge vehicles. The UK ETS covers energy production but currently excludes road transport, meaning the carbon external cost of driving remains only partially priced through fuel duty.</p>'
    + '<p>A significant source of government failure is the inconsistency between corrective policies and other government decisions. The 12-year fuel duty freeze reduces the corrective signal substantially, and government subsidies to North Sea oil and gas production &#8212; exceeding &#163;1 billion in 2022 &#8212; directly reduce fossil fuel costs, counteracting the incentive to switch to cleaner alternatives. Political economy factors &#8212; the electoral sensitivity of motoring costs, lobbying by vehicle manufacturers and road hauliers, and regional inequality concerns &#8212; systematically push policy in the direction of underpricing road transport externalities. This is a classic government failure: the political costs of an optimal corrective policy exceed the political benefits, so intervention remains suboptimal.</p>'
    + '<p>In conclusion, UK government policies to reduce road transport externalities have achieved real but insufficient progress. Fuel duty provides a broad price signal but has been eroded by a political freeze. The London Congestion Charge and ULEZ demonstrate that targeted road pricing works but cover only a small geographic area. The ZEV mandate will reduce carbon and air-quality externalities over the longer term but cannot address congestion. The most significant gap is the absence of national road pricing, which economists broadly identify as the most efficient instrument for congestion externalities but which governments have consistently rejected. Overall, policies have partially corrected the market failure &#8212; UK CO&#8322; emissions have fallen by around 48% since their 1991 peak &#8212; but the persistence of large deadweight welfare losses from congestion, air pollution, and underpriced carbon suggests the market failure remains substantial. Greater coherence between carbon pricing, road pricing, and transport investment, combined with measures to address the regressive distributional effects of pricing policies, would significantly improve effectiveness.</p>'
  },

  strongAnswers: [
    'Use the PMC / SMC / MEC diagram framework explicitly to establish why market failure occurs',
    'Apply specific UK evidence (fuel duty rate and freeze, congestion charge data, ZEV mandate, ETS scope)',
    'Evaluate each policy on its own terms &#8212; does it target the right externality, at the right price?',
    'Identify government failure as a systematic pattern, not just a one-off problem',
    'Reach a conditional judgement: under what conditions are UK policies effective, and what is the key reform needed?'
  ]
};

