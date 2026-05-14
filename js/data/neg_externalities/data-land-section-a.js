/* ============================================================
   ECONOS — Land It · Section A data for Negative Externalities
   Topic: Negative Externalities (1.12)
   ============================================================ */

window.ECONOS_LAND_SECTION_A = {
  topic:        'Negative Externalities',
  sessionLabel: 'Session 3 of 3: Land',
  sectionLabel: 'Section A &#8212; Short questions',
  backUrl:      TopicLoader.buildUrl('land_intro.html'),

  questions: [

    /* ── Q1 — Market failure and negative externalities ── */
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

    /* ── Q2 — Carbon tax ── */
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

    /* ── Q3 — Regulation vs taxation ── */
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

    /* ── Q4 — Congestion as a negative externality ── */
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

    /* ── Q5 — Government failure in addressing externalities ── */
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
