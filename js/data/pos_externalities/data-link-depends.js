/* ============================================================
   ECONOS — Link It · It Depends On station data
   Positive Externalities: evaluate a direct public provision claim
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Positive Externalities',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether direct public provision actually achieves the social optimum.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'diagram', label: 'Diagram connector',  href: TopicLoader.buildUrl('link_diagram.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 4,

  scenarios: [
    {
      id: 'direct-provision-effectiveness',
      claim: {
        icon:   '💉',
        prompt: 'Policy claim',
        text:   'Direct public provision best corrects positive consumption externalities.'
      },
      factors: [
        {
          id:    'meb-size',
          icon:  '🧬',
          label: 'Size and measurability of the MEB',
          why:   'The case for intervention depends on the size of the MEB. Herd immunity is large and well-quantified (each 1% coverage point prevents 24,000 measles cases). If the MEB is small or difficult to measure, the optimal level of provision is uncertain and over-provision becomes a risk. Large, measurable MEBs justify full public provision; small or uncertain MEBs may only justify partial subsidies.'
        },
        {
          id:    'price-sensitivity',
          icon:  '💰',
          label: 'Price sensitivity of the target population',
          why:   'Direct provision (free) maximises uptake relative to a partial subsidy only if the unvaccinated group is price-sensitive. If non-vaccinators refuse on ideological grounds (anti-vaccine beliefs) rather than cost, free provision cannot achieve Q* — and the MEB gap persists regardless of price. Behavioural barriers may be more binding than price.'
        },
        {
          id:    'alternative-policies',
          icon:  '📋',
          label: 'Effectiveness of subsidy vs mandate vs information campaigns',
          why:   'Direct provision is one of three main corrective policies. A targeted subsidy (voucher, tax credit) may achieve similar uptake at lower fiscal cost if only price-sensitive individuals are below Q*. A vaccine mandate forces Q to Q* regardless of preference — but has liberty costs. Information campaigns (countering vaccine hesitancy) address behavioural barriers without price changes. The optimal policy mix depends on why Q_market < Q*.'
        },
        {
          id:    'herd-threshold',
          icon:  '🎯',
          label: 'Proximity to the herd immunity threshold',
          why:   'The MEB is non-linear near the herd immunity threshold. Below 95% MMR coverage, each additional vaccination produces decreasing marginal herd immunity benefit; above 95%, the externality is fully realised. Policy interventions must aim to push coverage above the threshold — a subsidy achieving only 92% coverage captures most of the MEB but leaves measles transmission risk.'
        },
        {
          id:    'delivery-capacity',
          icon:  '🏥',
          label: 'Healthcare delivery capacity and accessibility',
          why:   'Even with free provision, vaccination uptake depends on accessibility of delivery. Remote or deprived communities with fewer GP surgeries, less flexible working hours, or language barriers may remain under-vaccinated despite zero price. Complementary policies (outreach vaccination, school programmes) are needed to reach Q* for all demographic groups.'
        },
        {
          id:    'fiscal-cost',
          icon:  '💷',
          label: 'Fiscal cost and opportunity cost of public provision',
          why:   'NHS provision requires government funding. If the same resources could fund other health interventions with larger per-pound welfare gains, direct provision is not the highest-value use of health spending. The case for full public provision depends on comparative welfare efficiency across competing NHS priorities.'
        },
        {
          id:    'distributional',
          icon:  '👥',
          label: 'Distributional equity of the positive externality',
          why:   'The herd immunity benefit is enjoyed by all — including those who free-ride and do not vaccinate. This non-excludable benefit means the state cannot charge free-riders for the externality they enjoy. Public provision ensures the benefit is equitably distributed, whereas a subsidy may still leave lower-income, harder-to-reach groups under-vaccinated.'
        },
        {
          id:    'dynamic',
          icon:  '🔄',
          label: 'Persistence of the externality over time (disease dynamics)',
          why:   'Some positive externalities (e.g., childhood MMR vaccination) produce lifetime immunity and permanent MEB. Others (flu vaccination) require annual repetition because the virus mutates. Where the externality must be replicated annually, direct provision must be a permanent commitment — rather than a one-off intervention — raising fiscal sustainability concerns.'
        }
      ],
      modelRanking: ['meb-size', 'price-sensitivity', 'alternative-policies'],
      judgement: '"Whether direct provision is most effective depends on the size of the MEB (large for vaccinations with herd immunity thresholds) and whether the unvaccinated population is primarily price-sensitive (in which case free provision works) or ideologically resistant (in which case information campaigns or mandates are needed). If the MEB is large, measurable and the non-vaccinating group is price-sensitive, direct provision dominates a partial subsidy by reliably achieving Q*."'
    }
  ]
};
