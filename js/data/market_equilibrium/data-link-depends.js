/* ============================================================
   ECONOS — Link It · It Depends On station data
   Market Equilibrium: evaluate a rent control claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Market Equilibrium',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether rent controls actually achieve their stated objective.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'rent-control-effectiveness',
      claim: {
        icon:   '🏠',
        prompt: 'Policy claim',
        text:   'The UK government should introduce rent controls to make housing more affordable in UK cities.'
      },
      factors: [
        {
          id:    'supply-loss',
          icon:  '🏘️',
          label: 'Risk of landlords exiting the market',
          why:   'If rent controls push rents below landlords\' costs or opportunity cost of capital, they will sell properties or convert them to other uses, reducing the rental supply. Evidence from Stockholm shows a 15% reduction in rental supply over a decade. The policy designed to help renters could shrink the supply available to them — potentially making the shortage worse, not better.'
        },
        {
          id:    'pes-housing',
          icon:  '🏗️',
          label: 'Price elasticity of supply of housing',
          why:   'With PES ≈ 0.4 in London, supply barely responds to price signals in the first place. A rent ceiling reduces the already-weak incentive to build or maintain rental properties. However, the standard argument that rent control "kills supply" is weaker than in markets with elastic supply — there was never much supply response to high rents anyway. PES determines how much supply damage the ceiling actually causes.'
        },
        {
          id:    'supply-alternatives',
          icon:  '⚒️',
          label: 'Availability of alternative supply-side policies',
          why:   'Investment in social housing, planning reform, tax incentives for development and Help to Build schemes can directly expand supply rather than capping price. These address the root cause of unaffordability — structurally inelastic supply — rather than the symptom (high rent). If supply-side alternatives are feasible, a demand-side ceiling is harder to justify as the primary policy instrument.'
        },
        {
          id:    'affordability-scope',
          icon:  '💰',
          label: 'How far below equilibrium the ceiling is set',
          why:   'A ceiling set just below market rent has limited distributional benefit — it only marginally reduces rents for existing tenants. A ceiling set far below equilibrium creates a large shortage and potentially drives landlords to exit. The optimal ceiling, if one exists at all, is extremely hard to calibrate accurately without detailed, up-to-date market data for each sub-market.'
        },
        {
          id:    'distribution',
          icon:  '👥',
          label: 'Who actually benefits — distribution of the gains',
          why:   'Rent control typically benefits existing tenants in controlled properties at the expense of new renters who face lower supply and higher rents in the uncontrolled sector. It may also disproportionately benefit higher-income households who already occupy desirable properties. The distributional outcome may be the reverse of what policymakers intend.'
        },
        {
          id:    'time-horizon',
          icon:  '⏱️',
          label: 'Short-run versus long-run effects',
          why:   'In the short run, rent control freezes rents for existing tenants, reducing their housing costs immediately. Over the long run, as properties exit the controlled sector through sale, conversion or deterioration from under-maintenance, supply contracts and the housing problem worsens. The short-run benefit can mask — and accelerate — long-run damage to the rental stock.'
        },
        {
          id:    'externalities-housing',
          icon:  '🌍',
          label: 'Wider economic externalities of high rents',
          why:   'High rents reduce labour mobility, harm productivity because workers cannot afford to live near high-productivity jobs, and reduce household disposable income. The Resolution Foundation estimates that each 10% rent rise cuts net in-migration to London by 6%. These wider economic costs provide justification for intervention even if the specific form of rent control remains debatable.'
        },
        {
          id:    'enforcement',
          icon:  '🏛️',
          label: 'Government capacity to monitor and enforce',
          why:   'A rent ceiling requires ongoing enforcement: inspections, a system for tenant complaints, penalties for landlords who charge above the ceiling, and regular rent reviews. In a fragmented private rental market of millions of properties, this is administratively costly. Landlords may circumvent controls through informal charges, shorter tenancies, or allowing properties to fall below standard rather than maintaining them at a regulated rent.'
        }
      ],
      modelRanking: ['supply-loss', 'pes-housing', 'supply-alternatives'],
      judgement: '"Whether rent controls make housing more affordable depends primarily on whether landlords exit the rental market in response — the Stockholm evidence of a 15% supply reduction shows this is not hypothetical. The impact on supply is moderated by the fact that London housing supply is already inelastic (PES ≈ 0.4), so supply was never going to respond strongly to price signals anyway. The strongest alternative judgement is that supply-side reform — planning liberalisation, social housing investment — addresses the root cause more directly than capping the price that the market charges for a structurally constrained resource."'
    }
  ]
};
