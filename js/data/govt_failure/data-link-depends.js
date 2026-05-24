/* ============================================================
   ECONOS — Link It · It Depends On station data
   Government Failure: evaluate whether Help to Buy is government failure
   ============================================================ */

window.ECONOS_LINK_DEPENDS = {
  topic:       'Government Failure',
  backUrl:     TopicLoader.buildUrl('link_intro.html'),
  eyebrow:     'It Depends On',
  instruction: 'Pick the three factors that most change the answer to this claim. Think about which conditions determine whether Help to Buy constitutes government failure.',
  nextUrl:     TopicLoader.buildUrl('link_judge.html'),

  stations: [
    { id: 'context', label: 'Use the context',    href: TopicLoader.buildUrl('link_context.html') },
    { id: 'chain',   label: 'Build the chain',    href: TopicLoader.buildUrl('link_chain.html')   },
    { id: 'extract', label: 'Read the Extract',   href: TopicLoader.buildUrl('link_extract.html') },
    { id: 'depends', label: 'It depends on',      href: TopicLoader.buildUrl('link_depends.html') },
    { id: 'judge',   label: 'Make the judgement', href: TopicLoader.buildUrl('link_judge.html')   }
  ],
  currentStationIdx: 3,

  scenarios: [
    {
      id: 'help-to-buy-depends',
      claim: {
        icon:   '🏗️',
        prompt: 'Policy claim',
        text:   'Help to Buy is an example of government failure because it raised demand without addressing supply constraints.'
      },
      factors: [
        {
          id:    'supply-elasticity',
          icon:  '🏗️',
          label: 'Price elasticity of supply for new housing',
          why:   'With PES ≈ 0.4, most of any demand stimulus is absorbed as higher prices rather than more houses. A demand subsidy only improves affordability if supply is sufficiently elastic to expand output in response to the price signal. In countries with faster planning systems (Germany, Japan), higher PES means demand stimulus translates into more housing rather than price inflation.'
        },
        {
          id:    'information',
          icon:  '🔍',
          label: 'Quality of government information at policy design',
          why:   'Government failure here is partly an information problem: if policymakers had accurately modelled the supply elasticity, they would have known that a demand subsidy with PES ≈ 0.4 would mostly raise prices. Better pre-policy modelling (using the OBR\'s own structural models) could have predicted the unintended consequence before implementation.'
        },
        {
          id:    'political-economy',
          icon:  '🗳️',
          label: 'Political pressures on policy design',
          why:   'Help to Buy was partly designed for political rather than economic reasons — helping voters onto the housing ladder generates electoral support, regardless of efficiency. Housebuilders lobby for demand subsidies (which raise their revenues) rather than planning reforms (which increase competition). Regulatory capture means policy is distorted toward supplier interests even when this creates government failure.'
        },
        {
          id:    'time-lag',
          icon:  '⏱️',
          label: 'Time lag between policy design and impact assessment',
          why:   'Help to Buy ran for 10 years before the OBR\'s impact assessment was published. Policy feedback loops in housing are slow: price effects take years to fully materialise and are confounded by interest rate changes, demographics, and global housing market trends. Long time lags mean government failure is identified slowly — and political capital has often been committed before evidence of failure emerges.'
        },
        {
          id:    'counterfactual',
          icon:  '❓',
          label: 'Difficulty of the counterfactual (what would have happened without HTB)',
          why:   'Attributing price rises to Help to Buy requires estimating what prices would have been without the scheme. OBR\'s £8,000 estimate is a modelled counterfactual. If interest rates had been lower, or immigration higher, prices might have risen similarly without HTB. Uncertainty about the counterfactual makes it difficult to conclude definitively that HTB caused government failure rather than coinciding with an independent price surge.'
        },
        {
          id:    'distributional',
          icon:  '👥',
          label: 'Distributional impact (who benefits and who loses)',
          why:   'Help to Buy primarily benefited buyers in England — particularly in regions where new-build homes are prevalent (outer London, South East). Lower-income buyers priced out of even subsidised homes gained nothing. Developers with land banks in the right areas gained most. The distributional impact is both inefficient (subsidy captured by developers) and inequitable (benefits concentrated among those who could nearly afford homes anyway).'
        },
        {
          id:    'complementary-policy',
          icon:  '🔧',
          label: 'Whether complementary supply-side policy accompanied the scheme',
          why:   'Government failure would have been reduced if HTB had been accompanied by planning reform, social housebuilding, or land value capture. In isolation, demand stimulus with no supply response always raises prices in inelastic markets. A package of demand and supply-side measures might have achieved better affordability outcomes — though political feasibility of planning reform is constrained by NIMBYism.'
        },
        {
          id:    'exit-strategy',
          icon:  '🚪',
          label: 'Impact of HTB termination on market expectations',
          why:   'Help to Buy\'s termination in March 2023 was anticipated to reduce new-build demand sharply. Developers responded by reducing new starts before the deadline, contracting supply further. Government failure can persist beyond the policy itself if exit from a distortionary scheme generates market adjustment costs — suggesting careful phasing-out is needed.'
        }
      ],
      modelRanking: ['supply-elasticity', 'information', 'political-economy'],
      judgement: '"Whether Help to Buy constitutes government failure depends on how housing supply elasticity is modelled. With PES ≈ 0.4, the OBR\'s finding of £8,000 price inflation from the scheme is consistent with economic theory — demand stimulus with inelastic supply raises prices. But the political economy argument is also relevant: housebuilder lobbying ensured the scheme was not paired with planning reform, and the information failure at design stage (failure to model supply inelasticity accurately) is compounded by incentive misalignment."'
    }
  ]
};
