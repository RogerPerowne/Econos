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
